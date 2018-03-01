let expect = require('chai').expect;
let gmail = require('../integrations/generated/google_gmail').actions;
let datafire = require('datafire');
let context = new datafire.Context({
  accounts: {
    google_gmail: {
      access_token: 'abcde',
    }
  }
})

describe("Gmail", () => {
  it('should build message', () => {
    return gmail.buildMessage({
      to: 'me@example.com',
      from: 'me@example.com',
      subject: "Hello!",
      body: "hello world",
    }, context).then(msg => {
      let b = new Buffer(msg, 'base64');
      expect(b.toString().replace(/Date:.*/, '')).to.equal(`
From: <me@example.com>
To: <me@example.com>
Subject: Hello!

Content-Type: text/html; charset=utf-8

<html>
  <body>
hello world
  </body>
</html>
      `.trim())
    })
  });
  it('should build message with multiple recipients', () => {
    return gmail.buildMessage({
      to: ['me@example.com', 'you@example.com'],
      from: 'me@example.com',
      subject: "Hello!",
      body: "hello world",
    }, context).then(msg => {
      let b = new Buffer(msg, 'base64');
      expect(b.toString().replace(/Date:.*/, '')).to.equal(`
From: <me@example.com>
To: <me@example.com>, <you@example.com>
Subject: Hello!

Content-Type: text/html; charset=utf-8

<html>
  <body>
hello world
  </body>
</html>
      `.trim())
    })
  })
})
