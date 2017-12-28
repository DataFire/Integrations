"use strict";
let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "google_gmail");

module.exports.addAction('buildMessage', new datafire.Action({
  inputSchema: {
    type: 'object',
    properties: {
      to: {type: 'string'},
      from: {type: 'string'},
      subject: {type: 'string', default: ''},
      body: {type: 'string', default: ''},
    }
  },
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
