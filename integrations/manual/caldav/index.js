"use strict";

const datafire = require('datafire');
const http = require('@datafire/http').create();
const crypto = require('crypto');
const icalParser = require('ical-parser');
const icalGenerator = require('ical-generator');
const requests = require('./requests');
const xml2js = require('xml2js');

const caldav = module.exports = new datafire.Integration({
  id: 'caldav',
  title: 'CalDAV',
  description: "Access and update calendar data using the CalDAV protocol",
  security: {
    caldav: {
      fields: {
        username: "",
        password: "",
        server: "e.g. http://localhost:3333",
        principalPath: "The relative path where principals can be found, e.g. 'p'",
      }
    }
  }
});

function sendRequest(options, context) {
  options.url = context.accounts.caldav.server + options.url;
  options.headers = options.headers || {};
  options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/xml; charset=utf-8';

  let auth = context.accounts.caldav.username + ':' + context.accounts.caldav.password;
  options.headers.Authorization = 'Basic ' + (new Buffer(auth.toString(), 'binary')).toString('base64');
  return http.request(options)
    .then(response => {
      if (response.statusCode >= 300) {
        throw new Error(`Status code ${response.statusCode} - ${response.body}`);
      }
      return response.body;
    })
    .then(body => {
      if (!body) return "Success";
      return new Promise((resolve, reject) => {
        xml2js.parseString(body, (err, result) => {
          if (err) return reject(err);
          let parsed = (result['d:multistatus']['d:response'] || []).map(resp => {
            let obj = {
              href: resp['d:href'],
            };
            obj.data = resp['d:propstat'][0]['d:prop'][0];
            return obj;
          })
          resolve({responses: parsed, body: result});
        })
      })
    })
}

function extractData(xmlObj, fields) {
  let dest = {href: xmlObj.href[0]};
  fields.forEach(field => {
    let from = Array.isArray(field) ? field[0] : field;
    let to = Array.isArray(field) ? field[1] : field.substring(field.indexOf(':') + 1);
    if (xmlObj.data[from]) {
      dest[to] = xmlObj.data[from][0];
      let quoted = (typeof dest[to] === 'string') && dest[to].match(/^"(.*)"$/);
      if (quoted) dest[to] = quoted[1];
    }
  })
  return dest;
}

caldav.addAction('listEvents', {
  inputs: [
    {title: 'filename', type: 'string'},
  ],
  handler: (input, context) => {
    return sendRequest({
      url: input.filename,
      method: 'REPORT',
      headers: {Depth: 1},
      body: requests.listEvents(),
    }, context)
    .then(events => {
      return events.responses.map(evt => {
        return extractData(evt, [['d:getetag', 'etag'], ['cal:calendar-data', 'calendarData']]);
      })
    })
    .then(events => {
      return Promise.all(events.map(evt => {
        return new Promise((resolve, reject) => {
          icalParser.convert(evt.calendarData, (err, parsed) => {
            if (err) return reject(err);
            parsed = parsed.VCALENDAR[0].VEVENT[0];
            evt.start = parsed.DTSTART;
            evt.end = parsed.DTEND;
            evt.summary = parsed.SUMMARY;
            resolve();
          })
        })
      })).then(_ => events);
    })
  }
})

caldav.addAction('createCalendar', {
  inputs: [
    {title: 'name', type: 'string'},
    {title: 'timezone', type: 'string'},
    {title: 'filename', type: 'string'},
    {title: 'description', type: 'string', default: ''},
  ],
  handler: (input, context) => {
    let cal = icalGenerator({
      name: input.name,
      timezone: input.timezone,
    });
    return sendRequest({
      url: input.filename,
      method: 'MKCALENDAR',
      body: requests.createCalendar({data: cal.toString(), name: input.name, description: input.description}),
    }, context)
    .then(response => {
      return "Success";
    })
  },
});

caldav.addAction('listCalendars', {
  handler: (input, context) => {
    return sendRequest({
      method: 'PROPFIND',
      url: '/' + (context.accounts.caldav.principalPath || ''),
      headers: {
        Depth: 0,
      },
      body: requests.principal(),
    }, context)
    .then(principals => {
      let href = principals.responses[0].data['d:current-user-principal'][0]['d:href'][0];
      return sendRequest({
        method: 'PROPFIND',
        url: href,
        headers: {Depth: 0},
        body: requests.calendarHome(),
      }, context)
    })
    .then(calhome => {
      let href = calhome.responses[0].data['cal:calendar-home-set'][0]['d:href'][0];
      return sendRequest({
        method: 'PROPFIND',
        url: href,
        headers: {Depth: 1},
        body: requests.calendarList(),
      }, context)
    })
    .then(calendars => {
      calendars.responses.shift();
      return calendars.responses.map(cal => {
        let obj = extractData(cal, ['d:owner', ['d:displayname', 'name'], ['cs:getctag', 'ctag'], ['d:sync-token', 'syncToken']]);
        if (obj.owner) {
          obj.owner = obj.owner['d:href'][0];
        }
        return obj;
      });
    })
  }
});

caldav.addAction('deleteCalendar', {
  inputs: [
    {title: 'filename', type: 'string'},
  ],
  handler: (input, context) => {
    return sendRequest({
      url: input.filename,
      method: 'DELETE',
    }, context)
  }
});

caldav.addAction('getChanges', {
  inputs: [
    {title: 'filename', type: 'string'},
    {title: 'syncToken', type: 'string'},
  ],

  handler: (input, context) => {
    return sendRequest({
      url: input.filename,
      method: 'REPORT',
      body: requests.getChanges({syncToken: input.syncToken}),
    }, context)
    .then(changes => {
      let syncToken = changes.body['d:multistatus']['d:sync-token'][0];
      changes = changes.responses.map(change => {
        return extractData(change, [['d:getetag', 'etag']]);
      });
      return {changes, syncToken};
    })
  }
})

caldav.addAction('createEvent', {
  inputs: [
    {title: 'start', type: 'string', format: 'date-time'},
    {title: 'end', type: 'string', format: 'date-time'},
    {title: 'summary', type: 'string'},
    {title: 'organizer', type: 'string', default: ''},
    {title: 'filename', type: 'string'},
  ],
  handler: (input, context) => {
    let evt = null;
    try {
      evt = icalGenerator({
        events: [{
          start: new Date(input.start),
          end: new Date(input.end),
          summary: input.summary,
          organizer: input.organizer,
        }]
      });
    } catch (e) {
      throw new Error(e.toString());
    }
    return sendRequest({
      url: input.filename,
      method: 'PUT',
      body: evt.toString(),
      headers: {'Content-Type': 'text/calendar'},
    }, context)
  }
});

caldav.addAction('deleteEvent', {
  inputs: [{
    title: 'filename', type: 'string',
  }],
  handler: (input, context) => {
    return caldav.actions.deleteCalendar(input, context);
  }
})
