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
          filename: '/cal/' + CREDS.username + '/holdidays/index.ics',
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
})
