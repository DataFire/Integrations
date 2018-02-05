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

const BASE_FILENAME = '/cal/' + CREDS.username + '/holidays';

let initialSyncToken = null;

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
          filename: BASE_FILENAME,
      }).then(result => {
        expect(result).to.equal("Success");
      }).then(waitForFinish)
  });

  it('should list calendars', () => {
      return caldav.listCalendars().then(cals => {
          expect(cals.length).to.equal(3);
          expect(cals[0].name).to.equal('Holidays');
          expect(cals[0].syncToken).to.not.equal(null);
          initialSyncToken = cals[0].syncToken;
      }).then(waitForFinish)
  })

  it('should create events', () => {
      return Promise.resolve()
      .then(_ => caldav.createEvent({
        start: (new Date()).toString(),
        end: (new Date(new Date().getTime() + 3600000)).toString(),
        summary: 'Stuff happens',
        filename: BASE_FILENAME + '/1234.ics',
      }))
      .then(result => {
        expect(result).to.equal("Success");
      })
      .then(_ => caldav.createEvent({
        start: (new Date()).toString(),
        end: (new Date(new Date().getTime() + 3600000)).toString(),
        summary: 'Other stuff happens',
        filename: BASE_FILENAME + '/5678.ics',
      }))
      .then(result => {
        expect(result).to.equal("Success");
      })
  })

  it('should get calendar events', () => {
      return caldav.listEvents({
          filename: BASE_FILENAME,
      })
      .then(events => {
          expect(events.length).to.equal(2);
          expect(events[0].href).to.equal(BASE_FILENAME + '/1234.ics');
          expect(events[0].summary).to.equal('Stuff happens');
          expect(events[1].href).to.equal(BASE_FILENAME + '/5678.ics');
          expect(events[1].summary).to.equal('Other stuff happens');
      })
  });

  it('should list changes since sync', () => {
      return caldav.getChanges({
          syncToken: initialSyncToken,
          filename: BASE_FILENAME,
      })
      .then(changes => {
          expect(changes.syncToken).to.be.a('string');
          expect(changes.changes.length).to.equal(2);
          expect(changes.changes[0].href).to.equal(BASE_FILENAME + '/1234.ics');
          expect(changes.changes[1].href).to.equal(BASE_FILENAME + '/5678.ics');
          expect(changes.changes[0].etag).to.be.a('string');
          expect(changes.changes[1].etag).to.be.a('string');
      })
  })

  it('should delete event', () => {
      return caldav.deleteEvent({
          filename: BASE_FILENAME + '/1234.ics',
      })
      .then(result => expect(result).to.equal("Success"))
      .then(_ => caldav.listEvents({
          filename: BASE_FILENAME,
      }))
      .then(events => {
        expect(events.length).to.equal(1);
        expect(events[0].href).to.equal(BASE_FILENAME + '/5678.ics');
      })
  })

  it('should delete calendar', () => {
      return caldav.deleteCalendar({
          filename: '/cal/' + CREDS.username + '/holidays/',
      })
      .then(result => {
          expect(result).to.equal("Success");
      })
      .then(_ => caldav.listCalendars())
      .then(cals => {
          expect(cals.length).to.equal(2);
      })
  })
})
