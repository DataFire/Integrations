"use strict";
const datafire = require('datafire');
const nodemailer = require('nodemailer');

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
    title: 'from',
    type: 'string',
    description: "Email address of the sender",
  }, {
    title: 'to',
    type: 'array',
    description: "Email addresses of the recipients",
    items: {type: 'string'},
  }, {
    title: 'cc',
    type: 'array',
    description: "Email addresses of CC recipients",
    items: {type: 'string'},
    default: [],
  }, {
    title: 'bcc',
    type: 'array',
    description: "Email addresses of BCC recipients",
    items: {type: 'string'},
    default: [],
  }, {
    title: 'subject',
    type: 'string',
    description: "The subject of the email",
    default: '',
  }, {
    title: 'text',
    type: 'string',
    description: "Plaintext content of the email message",
    default: '',
  }, {
    title: 'html',
    type: 'string',
    description: "HTML content of the email message",
    default: '',
  }, {
    title: 'attachments',
    type: 'array',
    default: [],
    items: {
      type: 'object',
      properties: {
        filename: {type: 'string'},
        cid: {type: 'string', description: "optional content ID"},
        content: {type: 'string', description: "File contents"},
        encoding: {type: 'string', enum: ['ascii', 'utf8', 'utf16le', 'base64', 'binary', 'hex']},
        contentType: {type: 'string'},
        contentDisposition: {type: 'string', default: 'attachment'},
      }
    }
  }, {
    title: 'envelope',
    type: 'object',
    default: {},
    properties: {
      from: {
        type: 'string',
        description: "From header for the email",
      },
      to: {
        type: 'array',
        items: {type: 'string'},
        description: "To header for the email",
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
    const opts = {
      host: context.accounts.smtp.host,
      port: context.accounts.smtp.port,
      secure: context.accounts.smtp.port === 465,
      auth: {
        user: context.accounts.smtp.username,
        pass: context.accounts.smtp.password,
      }
    };

    const transporter = nodemailer.createTransport(opts);

    return new Promise((resolve, reject) => {
      let finish = (err, data) => {
        transporter.close();
        if (err) reject(err);
        else resolve(data);
      };
      input.envelope.from = input.envelope.from || input.from;
      input.envelope.to = (input.to || []).concat(input.cc || []).concat(input.bcc || []);
      transporter.sendMail(input, (error, info) => finish(error, info));
    })
  },
})
