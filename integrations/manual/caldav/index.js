"use strict";

const datafire = require('datafire');
const http = require('@datafire/http').create();
const crypto = require('crypto');
const ical = require('icalendar');
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
        server: "",
        principalPath: "",
      }
    }
  }
});

function sendRequest(options, context) {
  options.url = context.accounts.caldav.server + options.url;
  options.headers = options.headers || {};
  options.headers['Content-Type'] = 'application/xml; charset=utf-8';

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
          let parsed = result['d:multistatus']['d:response'].map(resp => {
            let obj = {
              href: resp['d:href'],
            };
            obj.data = resp['d:propstat'][0]['d:prop'][0];
            return obj;
          })
          resolve(parsed);
        })
      })
    })
}


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
      body: requests.calendar({data: cal.toString(), name: input.name, description: input.description}),
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
      let href = principals[0].data['d:current-user-principal'][0]['d:href'][0];
      return sendRequest({
        method: 'PROPFIND',
        url: href,
        headers: {Depth: 0},
        body: requests.calendarHome(),
      }, context)
    })
    .then(calhome => {
      let href = calhome[0].data['cal:calendar-home-set'][0]['d:href'][0];
      return sendRequest({
        method: 'PROPFIND',
        url: href,
        headers: {Depth: 1},
        body: requests.calendarList(),
      }, context)
    })
    .then(calendars => {
      calendars.shift();
      calendars = calendars.map(cal => {
        let obj = {
          href: cal.href[0],
        };
        if (cal.data['d:owner']) {
          obj.owner = cal.data['d:owner'][0]['d:href'][0];
        }
        if (cal.data['d:displayname']) {
          obj.name = cal.data['d:displayname'][0];
        }
        if (cal.data['cs:getctag']) {
          obj.ctag = cal.data['cs:getctag'][0];
        }
        return obj;
      });
      return calendars;
    })
  }
})

caldav.addAction('updateCalendar', {
})
caldav.addAction('deleteCalendar', {
})
caldav.addAction('syncCalendar', {
})

/*
function getClient(context) {
  var client = new dav.Client(
    new dav.transport.Basic(
      new dav.Credentials({
        username: context.accounts.caldav.username,
        password: context.accounts.caldav.password,
      })
    ), {
      baseUrl: context.accounts.caldav.url,
    }
  );
  return client;
}
*/
