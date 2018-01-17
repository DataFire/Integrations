"use strict";

const expect = require('chai').expect;
const hoodiecrow = require("hoodiecrow-imap");
const DEBUG_HOODIECROW = false;
const MESSAGES = [{
    raw: "Subject: hello 1\r\n\r\nWorld 1!",
    internaldate: "14-Sep-2013 21:22:28 -0300"
}, {
    raw: "Subject: hello 2\r\n\r\nWorld 2!",
    flags: ["\\Seen"],
    internaldate: "15-Sep-2013 21:22:28 -0300"
}, {
    raw: "Subject: hello 3\r\n\r\nWorld 3!"
}, {
    raw: "From: sender name <sender@example.com>\r\n" +
        "To: Receiver name <receiver@example.com>\r\n" +
        "Subject: hello 4\r\n" +
        "Message-Id: <abcde>\r\n" +
        "Date: Fri, 13 Sep 2013 15:01:00 +0300\r\n" +
        "\r\n" +
        "World 4!"
}, {
    raw: "Subject: hello 5\r\n\r\nWorld 5!"
}, {
    raw: "Subject: hello 6\r\n\r\nWorld 6!"
}];

const server = hoodiecrow({
  plugins: ["ID", "STARTTLS" /*, "LOGINDISABLED"*/ , "SASL-IR", "AUTH-PLAIN", "NAMESPACE", "IDLE", "ENABLE", "CONDSTORE", "XTOYBIRD", "LITERALPLUS", "UNSELECT", "SPECIAL-USE", "CREATE-SPECIAL-USE"],
  id: {
      name: "hoodiecrow",
      version: "0.1"
  },
  systemFlags: ['\\Foo', '\\Bar', '\\Baz', '\\Deleted', '\\Seen'],
  storage: {
      "INBOX": {
        messages: MESSAGES,
      },
      "": {
          "separator": "/",
          "folders": {
              "[Gmail]": {
                  "flags": ["\\Noselect"],
                  "folders": {
                      "Drafts": {
                          "special-use": "\\Drafts"
                      },
                  }
              }
          }
      }
  },
  debug: DEBUG_HOODIECROW,
});

const PORT = 3333;
const USER = 'testuser';
const PASS = 'testpass';

const imap = require('../integrations/manual/imap').create({
  host: 'localhost',
  port: PORT,
  user: USER,
  password: PASS,
  tls: false,
});

describe("IMAP", () => {
  before(done => {
    server.listen(PORT, function() {
      done();
    });
  });

  after(() => {
    server.close();
  })

  it('should list boxes', () => {
    return imap.getBoxes().then(boxes => {
      expect(boxes).to.deep.equal([{
        id: 'INBOX',
        delimiter: '/',
        attributes: ['\\HasNoChildren'],
      }, {
        id: '[Gmail]',
        delimiter: '/',
        attributes: ['\\Noselect', '\\HasChildren'],
        children: [{
          id: 'Drafts',
          delimiter: '/',
          attributes: ['\\HasNoChildren', '\\Drafts'],
        }]
      }]);
    })
  });

  it('should fetch messages', () => {
    const expected = [{
      body: MESSAGES[0].raw,
      attributes: {
        date: '2013-09-15T00:22:28.000Z',
        flags: [],
        uid: 1,
        modseq: '1'
      }
    }, {
      body: MESSAGES[1].raw,
      attributes: {
        date: '2013-09-16T00:22:28.000Z',
        flags: ['\\Seen'],
        uid: 2,
        modseq: '2'
      }
    }]

    return imap.fetch({messages: '1:2', isSequence: true})
      .then(messages => {
        expect(messages).to.deep.equal(expected);
      })
      .then(_ => imap.fetch({messages: ['1', '2'], isSequence: true}))
      .then(messages => {
        expect(messages).to.deep.equal(expected);
      })
  });

  it('should search messages', () => {
    return imap.search({query: {flags: ['SEEN']}})
      .then(messages => {
        expect(messages.length).to.equal(1);
        expect(messages[0].body).to.equal(MESSAGES[1].raw);
        expect(messages[0].attributes).to.deep.equal({
          date: '2013-09-16T00:22:28.000Z',
          flags: ['\\Seen'],
          uid: 2,
          modseq: '2'
        });
      })
  });

  it('should append message', () => {
    let formattedMessage = null;
    return imap.buildMessage({
      from: 'me@me.com',
      to: 'you@you.com',
      subject: 'Subject',
      body: 'hello!',
    })
    .then(message => {
      formattedMessage = message;
      return imap.append({message})
    })
    .then(result => expect(result).to.equal("Success"))
    .then(_ => imap.fetch({messages: '7'}))
    .then(messages => {
      expect(messages.length).to.equal(1);
      expect(messages[0].body).to.equal(formattedMessage);
    })
  })

  it('should manipulate boxes', () => {
    return Promise.resolve()
      .then(_ => imap.addBox({box: 'Junk'}))
      .then(_ => imap.getBoxes())
      .then(boxes => {
        expect(boxes.length).to.equal(3);
        expect(boxes[2]).to.deep.equal({
          id: 'Junk',
          delimiter: '/',
          attributes: ['\\HasNoChildren'],
        })
      })
      .then(_ => imap.renameBox({oldName: 'Junk', newName: 'Junky'}))
      .then(_ => imap.getBoxes())
      .then(boxes => {
        expect(boxes.length).to.equal(3);
        expect(boxes[2]).to.deep.equal({
          id: 'Junky',
          delimiter: '/',
          attributes: ['\\HasNoChildren'],
        })
      })
      .then(_ => imap.deleteBox({box: 'Junky'}))
      .then(_ => imap.getBoxes())
      .then(boxes => {
        expect(boxes.length).to.equal(2);
      })
  });

  it('should manipulate subscriptions', () => {
    return Promise.resolve()
      .then(_ => imap.getSubscribedBoxes())
      .then(boxes => {
        expect(boxes.length).to.equal(2);
        expect(boxes[0].id).to.equal('INBOX');
        expect(boxes[1].id).to.equal('[Gmail]');
        expect(boxes[1].children.length).to.equal(1);
        expect(boxes[1].children[0].id).to.equal('Drafts');
      })
      .then(_ => imap.unsubscribe({box: '[Gmail]/Drafts'}))
      .then(result => expect(result).to.equal("Success"))
      .then(_ => imap.getSubscribedBoxes())
      .then(boxes => {
        expect(boxes.length).to.equal(2);
        expect(boxes[1].children).to.equal(undefined);
      })
      .then(_ => imap.subscribe({box: '[Gmail]/Drafts'}))
      .then(_ => imap.getSubscribedBoxes())
      .then(boxes => {
        expect(boxes.length).to.equal(2);
        expect(boxes[0].id).to.equal('INBOX');
        expect(boxes[1].id).to.equal('[Gmail]');
        expect(boxes[1].children.length).to.equal(1);
        expect(boxes[1].children[0].id).to.equal('Drafts');
      })
  })

  it('should manipulate messages', () => {
    return Promise.resolve()
      .then(_ => imap.copy({messages: '1', destinationBox: '[Gmail]/Drafts'}))
      .then(result => expect(result).to.equal("Success"))
      .then(_ => imap.fetch({box: 'INBOX', messages: '1', isSequence: true}))
      .then(messages => {
        expect(messages.length).to.equal(1);
        expect(messages[0].body).to.equal(MESSAGES[0].raw);
        expect(messages[0].attributes.uid).to.equal(1);
      })
      .then(_ => imap.fetch({box: '[Gmail]/Drafts', messages: '1', isSequence: true}))
      .then(messages => {
        expect(messages.length).to.equal(1);
        expect(messages[0].body).to.equal(MESSAGES[0].raw);
      })
      .then(_ => imap.move({messages: '1', destinationBox: '[Gmail]/Drafts'}))
      .then(result => expect(result).to.equal("Success"))
      .then(_ => imap.fetch({box: 'INBOX', messages: '1', isSequence: true}))
      .then(messages => {
        expect(messages.length).to.equal(1);
        expect(messages[0].body).to.equal(MESSAGES[1].raw);
      })
      .then(_ => imap.fetch({box: '[Gmail]/Drafts', messages: '1'}))
      .then(messages => {
        expect(messages.length).to.equal(1);
        expect(messages[0].body).to.equal(MESSAGES[0].raw);
        expect(messages[0].attributes.uid).to.equal(1);
      })
  });

  it('should manipulate flags', () => {
    return Promise.resolve()
      .then(_ => imap.addFlags({messages: '1', isSequence: true, flags: ['Foo']}))
      .then(result => expect(result).to.equal("Success"))
      .then(_ => imap.fetch({messages: '1', isSequence: true}))
      .then(messages => {
        expect(messages.length).to.equal(1);
        expect(messages[0].attributes.flags).to.deep.equal(['\\Seen', '\\Foo']);
      })

      .then(_ => imap.setFlags({messages: '1', isSequence: true, flags: ['Bar', 'Baz']}))
      .then(result => expect(result).to.equal("Success"))
      .then(_ => imap.fetch({messages: '1', isSequence: true}))
      .then(messages => {
        expect(messages.length).to.equal(1);
        expect(messages[0].attributes.flags).to.deep.equal(['\\Bar', '\\Baz']);
      })

      .then(_ => imap.deleteFlags({messages: '1', isSequence: true, flags: ['\\Baz']}))
      .then(result => expect(result).to.equal('Success'))
      .then(_ => imap.fetch({messages: '1', isSequence: true}))
      .then(messages => {
        expect(messages.length).to.equal(1);
        expect(messages[0].attributes.flags).to.deep.equal(['\\Bar']);
      })
  })

  it('should manipulate keywords', () => {
    return Promise.resolve()
      .then(_ => imap.addKeywords({messages: '1', isSequence: true, keywords: ['Foo']}))
      .then(result => expect(result).to.equal("Success"))
      .then(_ => imap.search({query: {keyword: 'Foo'}}))
      .then(messages => {
        expect(messages.length).to.equal(1);
      })

      .then(_ => imap.setKeywords({messages: '1', isSequence: true, keywords: ['Bar', 'Baz']}))
      .then(result => expect(result).to.equal("Success"))
      .then(_ => imap.search({query: {keyword: 'Baz'}}))
      .then(messages => {
        expect(messages.length).to.equal(1);
      })

      .then(_ => imap.deleteKeywords({messages: '1', isSequence: true, keywords: ['Baz']}))
      .then(result => expect(result).to.equal('Success'))
      .then(_ => imap.search({query: {keyword: 'Baz'}}))
      .then(messages => {
        expect(messages.length).to.equal(0);
      })
  })
})
