"use strict";

const expect = require('chai').expect;
const ldapJS = require('ldapjs');

const PORT = 3333;
const USER = 'cn=root';
const PASS = 'testpass';

const server = require('./ldap-server');

const ldap = require('../integrations/manual/ldap').create({
  host: 'ldap://localhost:' + PORT,
  dn: USER,
  password: PASS,
});

describe("LDAP", () => {
  before(done => {
    server.listen(PORT, '127.0.0.1', function() {
      done();
    });
  });

  after(() => {
    server.close();
  })

  it('should add item', () => {
    return ldap.add({
      dn: 'cn=foo, o=example',
      entry: {
        cn: 'foo',
        sn: 'bar',
        email: ['foo@bar.com'],
        objectclass: 'fooperson',
      },
    }).then(res => expect(res).to.equal("Success"))
  });

  it('should retrieve item', () => {
    return ldap.search({base: 'cn=foo, o=example'})
        .then(results => {
          expect(results.length).to.equal(1);
          expect(results[0]).to.deep.equal({
            dn: 'cn=foo, o=example',
            email: 'foo@bar.com',
            cn: 'foo',
            sn: 'bar',
            objectclass: 'fooperson',
            controls: [],
          })
        })
  });

  it('should modify DN', () => {
    return ldap.modifyDN({dn: 'cn=foo, o=example', newDN: 'cn=foo2, o=example'})
        .then(result => expect(result).to.equal("Success"))
        .then(_ => ldap.search({base: 'cn=foo2, o=example'}))
        .then(results => expect(results.length).to.equal(1))
  });

  it('should modify item', () => {
    return ldap.modify({dn: 'cn=foo2, o=example', change: {
      operation: 'add',
      modification: {
        email: ['me@example.com'],
      }
    }})
    .then(result => expect(result).to.equal("Success"))
    .then(_ => ldap.search({base: 'cn=foo2, o=example'}))
    .then(results => expect(results[0].email).to.deep.equal(['foo@bar.com', 'me@example.com']));
  });

  it('should compare item', () => {
    return ldap.compare({dn: 'cn=foo2, o=example', attribute: 'sn', value: 'bar'})
      .then(result => expect(result).to.equal(true))
      .then(_ => ldap.compare({dn: 'cn=foo2, o=example', attribute: 'sn', value: 'baz'}))
      .then(result => expect(result).to.equal(false))
  })

  it('should delete item', () => {
    return ldap.del({dn: 'cn=foo2, o=example'})
        .then(result => expect(result).to.equal("Success"))
        .then(_ => {
          return ldap.search({base: 'cn=foo2, o=example'})
              .then(_ => Promise.reject(new Error("Shouldn't reach here")))
              .catch(e => expect(e.message).to.equal("Action ldap/search failed: cn=foo2, o=example"))
        })
  })
})
