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
        access_token: "An access token to use in place of username/password (required for Google)",
        server: "e.g. http://localhost:3333",
        basePath: "The absolute path for caldav calls, e.g. /caldav/v2 for Google Calendar",
        principalPath: "The relative path where principals can be found, e.g. 'p'",
      }
    }
  }
});

function unifyTags(str) {
  if (!str) return str;
  return str.toLowerCase().replace(/^\w+:/, '');
}

const XML2JS_OPTIONS = {
  tagNameProcessors: [unifyTags],
}

function sendRequest(options, context) {
  let acct = context.accounts.caldav;
  let url = acct.server;
  if (acct.basePath && options.url.indexOf(acct.basePath) !== 0) {
    url += acct.basePath;
  }
  options.url = url + options.url;
  options.headers = options.headers || {};
  options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/xml; charset=utf-8';
  if (context.accounts.caldav.access_token) {
    options.headers.Authorization = 'Bearer ' + context.accounts.caldav.access_token;
  } else {
    let auth = context.accounts.caldav.username + ':' + context.accounts.caldav.password;
    options.headers.Authorization = 'Basic ' + (new Buffer(auth.toString(), 'binary')).toString('base64');
  }
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
        xml2js.parseString(body, XML2JS_OPTIONS, (err, result) => {
          if (err) return reject(err);
          let parsed = (result['multistatus']['response'] || []).map(resp => {
            let obj = {
              href: resp['href'],
            };
            obj.data = resp['propstat'][0]['prop'][0];
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
  outputSchema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        etag: {type: 'string'},
        calendarData: {type: 'string'},
        start: {type: 'string', format: 'date-time'},
        end: {type: 'string', format: 'date-time'},
        summary: {type: 'string'},
      }
    }
  },
  handler: (input, context) => {
    return sendRequest({
      url: input.filename,
      method: 'REPORT',
      headers: {Depth: 1},
      body: requests.listEvents(),
    }, context)
    .then(events => {
      return events.responses.map(evt => {
        return extractData(evt, [['getetag', 'etag'], ['calendar-data', 'calendarData']]);
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
  outputSchema: {type: 'string'},
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
  inputs: [],
  outputSchema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        owner: {type: 'string'},
        displayName: {type: 'string'},
        ctag: {type: 'string'},
        syncToken: {type: 'string'},
      }
    }
  },
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
      let href = principals.responses[0].data['current-user-principal'][0]['href'][0];
      return sendRequest({
        method: 'PROPFIND',
        url: href,
        headers: {Depth: 0},
        body: requests.calendarHome(),
      }, context)
    })
    .then(calhome => {
      let href = calhome.responses[0].data['calendar-home-set'][0]['href'][0];
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
        let obj = extractData(cal, ['owner', ['displayname', 'name'], ['getctag', 'ctag'], ['sync-token', 'syncToken']]);
        if (obj.owner) {
          obj.owner = obj.owner['href'][0];
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
  outputSchema: {type: 'string'},
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
  outputSchema: {
    type: 'object',
    properties: {
      syncToken: {type: 'string'},
      changes: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            href: {type: 'string'},
            etag: {type: 'string'},
          }
        },
      }
    }
  },

  handler: (input, context) => {
    return sendRequest({
      url: input.filename,
      method: 'REPORT',
      body: requests.getChanges({syncToken: input.syncToken}),
    }, context)
    .then(changes => {
      let syncToken = changes.body['multistatus']['sync-token'][0];
      changes = changes.responses.map(change => {
        return extractData(change, [['getetag', 'etag']]);
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
  outputSchema: {type: 'string'},
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
  outputSchema: {type: 'string'},
  handler: (input, context) => {
    return caldav.actions.deleteCalendar(input, context);
  }
})
