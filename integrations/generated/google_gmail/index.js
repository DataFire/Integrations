'use strict';
let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "google_gmail");

const MESSAGE_SCHEMA = {
  type: 'object',
  properties: {
    to: {type: 'string'},
    from: {type: 'string'},
    subject: {type: 'string', default: ''},
    body: {type: 'string', default: ''},
  }
}

module.exports.addAction('buildMessage', new datafire.Action({
  inputSchema: MESSAGE_SCHEMA,
  outputSchema: {
    title: 'encodedMessage',
    type: 'string',
    description: "RFC 2822 formatted and base64url encoded message"
  },
  handler: (input, context) => {
    let message = `

From: <${input.from}>
To: <${input.to}>
Subject: ${input.subject}
Date: ${new Date().toString()}
Content-Type: text/html; charset=utf-8

<html>
  <body>
${input.body}
  </body>
</html>

    `.trim();

    let encoded = new Buffer(message).toString('base64');
    encoded = encoded.replace(/\//g,'_').replace(/\+/g,'-').replace(/=+$/, '');
    return encoded;
  }
}))

module.exports.addAction('sendMessage', new datafire.Action({
  inputSchema: MESSAGE_SCHEMA,
  handler: (input, context) => {
    return module.exports.actions.buildMessage(input, context)
      .then(encoded => {
        return module.exports.actions.users.messages.send({
          userId: 'me',
          body: {
            raw: encoded,
          },
        }, context)
      })
  }
}))
