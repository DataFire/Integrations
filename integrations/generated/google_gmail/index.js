"use strict";
let datafire = require('datafire');
let openapi = require('./openapi.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, "google_gmail");

function bracketEmail(email) {
  if (email.indexOf('<') === -1) {
    email = '<' + email + '>';
  }
  return email;
}

module.exports.addAction('buildMessage', new datafire.Action({
  inputSchema: {
    type: 'object',
    properties: {
      to: {type: ['string', 'array'], items: {type: 'string'}, description: "One or more email addresses"},
      from: {type: 'string', description: "An email address, or a name and email address in the form `John Doe <john@doe.com>`"},
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
    if (!Array.isArray(input.to)) {
      input.to = [input.to]
    }
    let from = bracketEmail(input.from);
    let to = input.to.map(bracketEmail).join(', ');
    let message = `

From: ${from}
To: ${to}
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
