"use strict";

const datafire = require('datafire');
const IMAP = require('imap');
const schemas = require('./schemas');

const AUTH_TIMEOUT = 3000;

const imap = module.exports = new datafire.Integration({
  id: 'imap',
  description: "Interact with e-mail servers via the Internet Message Access Protocol",
  definitions: schemas,
  security: {
    imap: {
      fields: {
        user: 'Your e-mail address',
        password: 'Your password',
        host: 'IMAP host, e.g. imap.gmail.com',
        port: 'The port to connect to, e.g. 993',
        tls: 'Whether to use TLS',
      }
    }
  }
});

function startIMAP(creds, box) {
  return new Promise((resolve, reject) => {
    let connection = new IMAP(creds);
    connection.once('ready', () => {
      if (!box) return resolve({connection});
      connection.openBox(box, false, (err, box) => {
        if (err) return reject(err);
        else return resolve({connection, box})
      })
    });
    connection.once('error', reject);
    connection.connect();
  })
}

function wrapConnection(input, context, openBox, cb) {
  let connection = null;
  let box = null;
  return startIMAP(context.accounts.imap, openBox ? input.box : null)
    .then(result => {
      connection = result.connection;
      box = result.box;
      return cb(connection);
    })
    .then(output => {
      connection.end();
      return output;
    })
}

function fetchInternal(query, connection, isSeq) {
  let messages = [];
  return new Promise((resolve, reject) => {
    let opts = {bodies: ''};
    let fetch = isSeq ? connection.seq.fetch(query, opts) : connection.fetch(query, opts);
    fetch.on('message', (imapMessage, idx) => {
      let message = {body: ''};
      imapMessage.on('body', (stream, info) => {
        messages.push(message);
        stream.on('data', chunk => message.body += chunk.toString('utf8'));
      });
      imapMessage.once('attributes', attrs => {
        message.attributes = attrs;
        if (attrs.date && attrs.date instanceof Date) {
          message.attributes.date = attrs.date.toISOString();
        }
      })
    });
    fetch.once('error', err => {
      if (reject) reject(err);
      resolve = reject = null;
    });
    fetch.once('end', () => {
      if (resolve) resolve(messages);
      resolve = reject = null;
    })
  })
}

function makeHandler(openBox, cb) {
  return (input, context) => {
    return wrapConnection(input, context, openBox, connection => {
      return new Promise((resolve, reject) => {
        cb(resolve, reject, connection, input);
      })
    })
  }
}

function extractBoxes(boxes) {
  function makeBox(key, details) {
    let box = {id: key};
    box.attributes = details.attribs;
    box.delimiter = details.delimiter;
    if (details.children) {
      box.children = [];
      for (let childKey in details.children) {
        box.children.push(makeBox(childKey, details.children[childKey]));
      }
    }
    return box;
  }

  let output = [];
  for (let key in boxes) {
    output.push(makeBox(key, boxes[key]));
  }
  return output;
}

imap.addAction('buildMessage', new datafire.Action({
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
    description: "RFC 2822 compatible message"
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
    return message;
  }

}))

imap.addAction('getBoxes', {
  inputs: [{title: 'nsPrefix', type: 'string', default: ''}],
  outputSchema: {
    type: 'array',
    items: schemas.Box,
  },
  handler: makeHandler(false, (resolve, reject, connection, input) => {
    function finish(err, data) {
      if (err) return reject(err);
      let output = extractBoxes(data);
      resolve(output);
    }
    if (input.nsPrefix) connection.getBoxes(nsPrefix, finish);
    else connection.getBoxes(finish);
  }),
});

imap.addAction('addBox', {
  inputs: [{title: 'box', type: 'string'}],
  outputSchema: {type: 'string'},
  handler: makeHandler(false, (resolve, reject, connection, input) => {
    connection.addBox(input.box, err => {
      if (err) reject(err);
      else resolve("Success");
    })
  })
});

imap.addAction('deleteBox', {
  inputs: [{title: 'box', type: 'string'}],
  outputSchema: {type: 'string'},
  handler: makeHandler(false, (resolve, reject, connection, input) => {
    connection.delBox(input.box, err => {
      if (err) reject(err);
      else resolve("Success");
    })
  })
});

imap.addAction('renameBox', {
  inputs: [
    {title: 'oldName', type: 'string'},
    {title: 'newName', type: 'string'},
  ],
  outputSchema: {type: 'string'},
  handler: makeHandler(false, (resolve, reject, connection, input) => {
    connection.renameBox(input.oldName, input.newName, err => {
      if (err) reject(err);
      else resolve("Success");
    })
  })
});

imap.addAction('boxStatus', {
  inputs: [schemas.BoxInput],
  outputSchema: schemas.Box,
  handler: makeHandler(false, (resolve, reject, connection, input) => {
    connection.status(input.box, (err, box) => {
      if (err) return reject(err);
      else resolve(box);
    })
  })
});

imap.addAction('subscribe', {
  inputs: [schemas.BoxInput],
  outputSchema: {type: 'string'},
  handler: makeHandler(false, (resolve, reject, connection, input) => {
    connection.subscribeBox(input.box, err => {
      if (err) reject(err);
      else resolve("Success");
    })
  })
});

imap.addAction('unsubscribe', {
  inputs: [schemas.BoxInput],
  outputSchema: {type: 'string'},
  handler: makeHandler(false, (resolve, reject, connection, input) => {
    connection.unsubscribeBox(input.box, err => {
      if (err) reject(err);
      else resolve("Success");
    })
  })
});

imap.addAction('getSubscribedBoxes', {
  inputs: [{title: 'nsPrefix', type: 'string', default: ''}],
  outputSchema: {type: 'string'},
  handler: makeHandler(false, (resolve, reject, connection, input) => {
    let cb = (err, boxes) => {
      if (err) reject(err);
      else resolve(extractBoxes(boxes));
    }
    if (input.nsPrefix) connection.getSubscribedBoxes(input.nsPrefix, cb);
    else connection.getSubscribedBoxes(cb);
  })
})

imap.addAction('append', {
  inputs: [
    schemas.BoxInput,
    {title: 'message', type: 'string', description: "An RFC-822 compatible MIME message"},
    {title: 'flags', type: 'array', items: {type: 'string'}, default: []},
    {title: 'date', type: 'string', format: 'date-time', default: ''},
  ],
  outputSchema: {type: 'string'},
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    let opts = {flags: input.flags, date: input.date || undefined};
    connection.append(input.message, opts, err => {
      if (err) reject(err);
      else resolve("Success");
    });
  })
})

imap.addAction('fetch', {
  inputs: [
    schemas.BoxInput,
    schemas.MessageSource,
    schemas.IsSequence,
  ],
  outputSchema: {
    type: 'array',
    items: schemas.Message
  },
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    fetchInternal(input.messages, connection, input.isSequence).then(resolve, reject);
  })
});

const STRING_FIELDS = ['bcc', 'cc', 'from', 'to', 'subject', 'body', 'text', 'keyword'];
const DATE_FIELDS = ['before', 'on', 'since', 'sentBefore', 'sentOn', 'sentSince'];
const FLAGS = schemas.SearchCriteria.properties.flags.items.enum;

imap.addAction('search', {
  inputs: [
    schemas.BoxInput,
    schemas.SearchCriteria,
  ],
  outputSchema: {
    type: 'array',
    items: schemas.Message
  },
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    let query = [];
    STRING_FIELDS.concat(DATE_FIELDS).forEach(field => {
      if (input.query[field] !== undefined) {
        query.push([field.toUpperCase(), input.query[field]]);
      }
    });
    if (input.query.flags) {
      query = query.concat(input.query.flags);
    }
    connection.search(query, (err, results) => {
      if (err) return reject(err);
      if (Array.isArray(results) && !results.length) return resolve(results);
      fetchInternal(results, connection, false).then(resolve, reject);
    })
  })
})

imap.addAction('copy', {
  inputs: [
    schemas.MessageSource,
    schemas.IsSequence,
    schemas.BoxInput,
    {title: 'destinationBox', type: 'string'},
  ],
  outputSchema: {type: 'string'},
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    let cb = err => {
      if (err) reject(err);
      else resolve("Success");
    };
    if (input.isSequence) connection.seq.copy(input.messages, input.destinationBox, cb);
    else connection.copy(input.messages, input.destinationBox, cb);
  })
})

imap.addAction('move', {
  inputs: [
    schemas.MessageSource,
    schemas.IsSequence,
    schemas.BoxInput,
    {title: 'destinationBox', type: 'string'},
  ],
  outputSchema: {type: 'string'},
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    let cb = err => {
      if (err) reject(err);
      else resolve("Success");
    }
    if (input.isSequence) connection.seq.move(input.messages, input.destinationBox, cb);
    else connection.move(input.messages, input.destinationBox, cb);
  })
})

imap.addAction('addFlags', {
  inputs: [
    schemas.MessageSource,
    schemas.IsSequence,
    schemas.BoxInput,
    {title: 'flags', type: 'array', items: {type: 'string'}},
  ],
  outputSchema: {type: 'string'},
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    let cb = err => {
      if (err) reject(err);
      else resolve("Success");
    }
    if (input.isSequence) connection.seq.addFlags(input.messages, input.flags, cb);
    else connection.addFlags(input.messages, input.flags, cb);
  })
})

imap.addAction('setFlags', {
  inputs: [
    schemas.MessageSource,
    schemas.IsSequence,
    schemas.BoxInput,
    {title: 'flags', type: 'array', items: {type: 'string'}},
  ],
  outputSchema: {type: 'string'},
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    let cb = err => {
      if (err) reject(err);
      else resolve("Success");
    }
    if (input.isSequence) connection.seq.setFlags(input.messages, input.flags, cb);
    else connection.setFlags(input.messages, input.flags, cb);
  })
})

imap.addAction('deleteFlags', {
  inputs: [
    schemas.MessageSource,
    schemas.IsSequence,
    schemas.BoxInput,
    {title: 'flags', type: 'array', items: {type: 'string'}},
  ],
  outputSchema: {type: 'string'},
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    let cb = err => {
      if (err) reject(err);
      else resolve("Success");
    }
    if (input.isSequence) connection.seq.delFlags(input.messages, input.flags, cb);
    else connection.delFlags(input.messages, input.flags, cb);
  })
})

imap.addAction('addKeywords', {
  inputs: [
    schemas.MessageSource,
    schemas.IsSequence,
    schemas.BoxInput,
    {title: 'keywords', type: 'array', items: {type: 'string'}},
  ],
  outputSchema: {type: 'string'},
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    let cb = err => {
      if (err) reject(err);
      else resolve("Success");
    }
    if (input.isSequence) connection.seq.addKeywords(input.messages, input.keywords, cb);
    else connection.addKeywords(input.messages, input.keywords, cb);
  })
})

imap.addAction('setKeywords', {
  inputs: [
    schemas.MessageSource,
    schemas.IsSequence,
    schemas.BoxInput,
    {title: 'keywords', type: 'array', items: {type: 'string'}},
  ],
  outputSchema: {type: 'string'},
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    let cb = err => {
      if (err) reject(err);
      else resolve("Success");
    }
    if (input.isSequence) connection.seq.setKeywords(input.messages, input.keywords, cb);
    else connection.setKeywords(input.messages, input.keywords, cb);
  })
})

imap.addAction('deleteKeywords', {
  inputs: [
    schemas.MessageSource,
    schemas.IsSequence,
    schemas.BoxInput,
    {title: 'keywords', type: 'array', items: {type: 'string'}},
  ],
  outputSchema: {type: 'string'},
  handler: makeHandler(true, (resolve, reject, connection, input) => {
    let cb = err => {
      if (err) reject(err);
      else resolve("Success");
    }
    if (input.isSequence) connection.seq.delKeywords(input.messages, input.keywords, cb);
    else connection.delKeywords(input.messages, input.keywords, cb);
  })
})
