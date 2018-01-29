"use strict";

process.env.DISABLE_FENNEL_LOGS = true;

const expect = require('chai').expect;
const fs = require('fs');
const datafire = require('datafire');
const server = require('fennel');
const PORT = 3333;
const CREDS = {
  username: 'username',
  password: 'password',
  server: 'http://localhost:3333',
  principalPath: 'p',
}
const caldav = require('../integrations/manual/caldav').create(CREDS);
const waitForFinish = function() {
  return new Promise(resolve => setTimeout(resolve, 1500));
}

describe("CalDAV", () => {
  before(() => server.listen(PORT));
  after(done => {
      server.close();
      setTimeout(() => {
          fs.unlinkSync(__dirname + '/../fennel.sqlite');
          done();
      }, 1500);
  })

  it('should create calendar', () => {
      return caldav.createCalendar({
          name: 'Holidays',
          description: "A list of holidays",
          timezone: 'Europe/Berlin',
          filename: '/cal/' + CREDS.username + '/holidays',
      }).then(result => {
        expect(result).to.equal("Success");
      }).then(waitForFinish)
  });

  it('should list calendars', () => {
      return caldav.listCalendars().then(cals => {
          expect(cals.length).to.equal(3);
          expect(cals[0].name).to.equal('Holidays');
      }).then(waitForFinish)
  })

/*
  it('should update calendar', () => {
      return caldav.updateCalendar({
          filename: '/cal/' + CREDS.username + '/holidays',
          name: 'Berlin Holidays',
      })
      .then(result => {
          expect(result).to.equal("Success");
      })
      .then(_ => caldav.listCalendars())
      .then(cals => {
          expect(cals.length).to.equal(3);
          expect(cals[0].name).to.equal("Berlin Holidays");
      })
  })
*/

  it('should create event', () => {
      return caldav.createEvent({
        start: (new Date()).toString(),
        end: (new Date(new Date().getTime() + 3600000)).toString(),
        summary: 'Stuff happens',
        filename: '/cal/' + CREDS.username + '/holidays/1234.ics',
      })
      .then(result => {
        expect(result).to.equal("Success");
      })
  })

  it('should get calendar events', () => {
      return caldav.getEvents({
          filename: '/cal/' + CREDS.username + '/holidays/',
      })
      .then(events => {
          expect(events.length).to.equal(1);
          expect(events[0].href).to.equal('/cal/username/holidays/1234.ics');
          expect(events[0].summary).to.equal('Stuff happens');
      })
  })
})
