"use strict";
const datafire = require('datafire');
const SMTPConnection = require('nodemailer/lib/smtp-connection');


const smtp = module.exports = new datafire.Integration({
  id: 'smtp',
  title: 'SMTP',
  description: "Send e-mail using the SMTP protocol",
  security: {
    smtp: {
      fields: {
        host: "Hostname of the SMTP server (default is localhost)",
        port: "Port number of the SMTP server",
        username: "Username for the SMTP server",
        password: "Password for the SMTP server",
      }
    }
  }
});

smtp.addAction('send', {
  inputs: [{
    title: 'envelope',
    type: 'object',
    required: ['from', 'to'],
    properties: {
      from: {
        type: 'string',
        description: "The address of the message's sender",
      },
      to: {
        type: 'array',
        items: {type: 'string'},
        description: "The addresses of all recipients",
      },
      size: {
        type: 'integer',
        description: "(optional) predicted message size in bytes",
      },
      use8BitMime: {
        type: 'boolean',
        description: 'If true then inform the server that this message might contain bytes outside 7bit ascii range',
      },
      dsn: {
        type: 'object',
        properties: {
          ret: {
            type: 'string',
            enum: ['FULL', 'HDRS'],
            description: "return either the full message (FULL) or only headers (HDRS)",
          },
          envid: {
            type: 'string',
            description: "Sender's envelope identifier, for tracking",
          },
          notify: {
            type: 'string',
            description: "When to send a DSN. Multiple options are OK - array or comma delimited. NEVER must appear by itself. Available options: NEVER, SUCCESS, FAILURE, DELAY",
          },
          orcpt: {
            type: 'string',
            description: "Original recipient"
          }
        }
      }
    }
  }, {
    title: 'message',
    type: 'string',
    description: "The message to send. All newlines are converted to \\r\\n and all dots are escaped automatically.",
  }],
  outputSchema: {
    type: 'object',
    properties: {
      accepted: {type: 'array', items: {type: 'string'}},
      rejected: {type: 'array', items: {type: 'string'}},
      envelopeTime: {type: 'integer'},
      messageTime: {type: 'integer'},
      messageSize: {type: 'integer'},
      response: {type: 'string'},
    }
  },

  handler: (input, context) => {
    let opts = {
      host: context.accounts.smtp.host,
      port: context.accounts.smtp.port,
    };
    let conn = new SMTPConnection(opts);
    return new Promise((resolve, reject) => {
      let finish = (err, data) => {
        conn.quit();
        if (err) reject(err);
        else resolve(data);
      }
      conn.connect(err => {
        if (err) return finish(err);
        let auth = {
          user: context.accounts.smtp.username,
          pass: context.accounts.smtp.password,
        };
        conn.login(auth, err => {
          if (err) return finish(err);
          conn.send(input.envelope, input.message, finish);
        })
      })
    })
  },
})
