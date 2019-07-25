"use strict";

const datafire = require('datafire');
const smtp = require('../integrations/manual/smtp').actions;
const expect = require('chai').expect;
const fs = require('fs');
const SMTPServer = require('smtp-server').SMTPServer;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const TEMP_DATABASE = './fennel.sqlite';

const CREDS = {
  host: 'localhost',
  port: 3333,
  username: 'username',
  password: 'password',
}

let messages = [];
const server = new SMTPServer({
  secure: false,
  onData(stream, session, callback) {
    let lastMessage = {session: JSON.parse(JSON.stringify(session)), message: ''};
    messages.push(lastMessage)
    stream.on('data', buf => {
      lastMessage.message += buf.toString();
    })
    stream.on('end', callback);
  },
  onAuth(auth, session, callback) {
    if (auth.username !== CREDS.username || auth.password !== CREDS.password) {
      return callback(new Error("Invalid credentials"));
    }
    return callback(null, {user: auth.username});
  },
});

describe("SMTP", () => {
  before(done => server.listen(CREDS.port, done));
  after(done => {
    if (fs.existsSync(TEMP_DATABASE)) {
      fs.unlinkSync(TEMP_DATABASE);
    }
    return server.close(done)
  });

  beforeEach(() => {
    messages = [];
  })

  it('should send a message', () => {
    let context = new datafire.Context({
      accounts: {
        smtp: CREDS,
      }
    });
    return smtp.send({
      from: 'me@example.com',
      to: ['you@example.com'],
      cc: ['someone@example.com'],
      bcc: ['anonymous@example.com'],
      subject: 'hi there',
      text: 'hello!',
    }, context)
    .then(data => {
      let recipients = ['you@example.com', 'someone@example.com', 'anonymous@example.com'];
      expect(data.accepted).to.deep.equal(recipients);
      expect(data.response).to.equal('250 OK: message queued');
      expect(messages.length).to.equal(1);
      let message = messages.pop();
      expect(message).to.not.equal(null);
      expect(message.session.envelope.mailFrom).to.deep.equal({address: 'me@example.com', args: false});
      expect(message.session.envelope.rcptTo).to.deep.equal(recipients.map(r => ({address: r, args: false})));
      expect(message.message.indexOf('anonymous@')).to.equal(-1);
      let lines = message.message.split('\r\n');
      let from = lines.filter(l => l.startsWith('From:')).pop();
      let to = lines.filter(l => l.startsWith('To:')).pop();
      let cc = lines.filter(l => l.startsWith('Cc:')).pop();
      let bcc = lines.filter(l => l.startsWith('Bcc:')).pop();
      let subj = lines.filter(l => l.startsWith('Subject:')).pop();
      let firstBlank = lines.indexOf('');
      let lastBlank = lines.lastIndexOf('');
      let text = lines.slice(firstBlank + 1, lastBlank).join('\n');

      expect(from).to.equal('From: me@example.com');
      expect(to).to.equal('To: you@example.com');
      expect(cc).to.equal('Cc: someone@example.com');
      expect(bcc).to.equal(undefined);
      expect(subj).to.equal('Subject: hi there');
      expect(text).to.equal('hello!');
    });
  });

  it('should send attachments', () => {
    let context = new datafire.Context({
      accounts: {
        smtp: CREDS,
      }
    });
    return smtp.send({
      from: 'me@example.com',
      to: ['you@example.com'],
      text: 'this is the message body',
      attachments: [{
        content: 'this is an attachment',
        filename: 'hello.txt',
      }]
    }, context)
    .then(data => {
      expect(data.accepted).to.deep.equal(['you@example.com']);
      expect(data.response).to.equal('250 OK: message queued');
      expect(messages.length).to.equal(1);
      let lastMessage = messages.pop();
      expect(lastMessage).to.not.equal(null);
      let lines = lastMessage.message.split('\r\n');
      let lastLine = lines.pop();
      lastLine = lines.pop();
      lastLine = lines.pop();
      let contents = new Buffer(lastLine, 'base64').toString('utf8');
      expect(contents).to.equal('this is an attachment');
    })
  })

  it('should allow friendly names', () => {
    let context = new datafire.Context({
      accounts: {
        smtp: CREDS,
      }
    });
    return smtp.send({
      from: 'Test From <me@example.com>',
      to: ['Test ToRecipient <you@example.com>', 'Test AnotherToRecipient <youtoo@example.com>'],
      cc: ['Test CcRecipient <someone@example.com>'],
      bcc: ['Test BccRecipient <anonymous@example.com>'],
      subject: 'hi there',
      text: 'hello!',
    }, context)
      .then(data => {
        let recipients = ['you@example.com', 'youtoo@example.com', 'someone@example.com', 'anonymous@example.com'];
        expect(data.accepted).to.deep.equal(recipients);
        expect(data.response).to.equal('250 OK: message queued');
        expect(messages.length).to.equal(1);
        let message = messages.pop();
        expect(message).to.not.equal(null);
        expect(message.session.envelope.mailFrom).to.deep.equal({address: 'me@example.com', args: false});
        expect(message.session.envelope.rcptTo).to.deep.equal(recipients.map(r => ({address: r, args: false})));
        expect(message.message.indexOf('anonymous@')).to.equal(-1);
        let lines = message.message.split('\r\n');
        let from = lines.filter(l => l.startsWith('From:')).pop();
        let toIndex = lines.findIndex(line => line.startsWith('To:'));
        let to = lines[toIndex] + lines[toIndex +1]; // The mail 'youtoo@example.com' is always on the next line
        let cc = lines.filter(l => l.startsWith('Cc:')).pop();

        expect(from).to.equal('From: Test From <me@example.com>');
        expect(to).to.equal('To: Test ToRecipient <you@example.com>, Test AnotherToRecipient <youtoo@example.com>');
        expect(cc).to.equal('Cc: Test CcRecipient <someone@example.com>');
      });
  });
})
