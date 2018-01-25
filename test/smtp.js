"use strict";

const datafire = require('datafire');
const smtp = require('../integrations/manual/smtp').actions;
const expect = require('chai').expect;
const SMTPServer = require('smtp-server').SMTPServer;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const CREDS = {
  host: 'localhost',
  port: 3333,
  username: 'username',
  password: 'password',
}

let lastMessage = null;

const server = new SMTPServer({
  secure: false,
  onData(stream, session, callback) {
    lastMessage = {session: JSON.parse(JSON.stringify(session)), message: ''};
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
  after(done => server.close(done));

  it('should send a message', () => {
    let context = new datafire.Context({
      accounts: {
        smtp: CREDS,
      }
    });
    return smtp.send({
      envelope: {
        from: 'me@example.com',
        to: ['you@example.com'],
      },
      message: 'hello!',
    }, context)
    .then(data => {
      expect(data.accepted).to.deep.equal(['you@example.com']);
      expect(data.response).to.equal('250 OK: message queued');
      expect(lastMessage).to.not.equal(null);
      expect(lastMessage.session.envelope.mailFrom).to.deep.equal({address: 'me@example.com', args: false});
      expect(lastMessage.session.envelope.rcptTo).to.deep.equal([{address: 'you@example.com', args: false}]);
      expect(lastMessage.message).to.equal('hello!\r\n');
    });
  })
})
