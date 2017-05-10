let expect = require('chai').expect;
let datafire = require('datafire');
let http = require('../integrations/manual/http');

let echo = new datafire.Action({
  handler: (input, context) => {
    return context.request;
  }
})

let target = new datafire.Project({
  paths: {
    '/foo': {
      get: {
        action: {
          handler: i => 'foo',
        }
      }
    },
    '/body': {
      patch: {
        action: {
          inputSchema: {},
          handler: input => input,
        }
      }
    },
    '/echo': {
      post: {
        action: echo,
        parameters: [{
          name: 'x-foo',
          in: 'header',
          type: 'string',
        }, {
          name: 'foo',
          in: 'query',
          type: 'string',
        }, {
          name: 'foo',
          in: 'formData',
          type: 'string',
        }]
      }
    }
  }
});

describe('HTTP integration', () => {
  before(() => {
    return target.serve(3333)
  })
  after(() => {
    target.server.close();
  })
  it('should make a request', () => {
    return http.actions.get({url: 'http://localhost:3333/foo'})
        .then(body => {
          expect(body.body).to.equal('"foo"');
          expect(body.statusCode).to.equal(200);
        });
  });

  it('should send inputs', () => {
    let input = {
      headers: {
        'x-foo': 'bar',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      query: {
        foo: 'bar',
      },
      body: 'foo=bar',
    }
    let expected = Object.assign({
      path: '/echo?foo=bar',
      method: "POST",
    }, input);
    let req = Object.assign({
      url: 'http://localhost:3333/echo',
    }, input);
    return http.actions.post(req)
        .then(resp => {
          expect(resp.statusCode).to.equal(200);
          let body = JSON.parse(resp.body);
          expect(body.query).to.deep.equal(input.query);
          expect(body.body).to.deep.equal({foo: 'bar'});
          expect(body.headers['x-foo']).to.equal(input.headers['x-foo']);
        });
  });

  it('should parse body', () => {
    let body = {
      obj: {
        thing: 'string',
        things: ['more', 'strings'],
      }
    };
    let req = {
      url: 'http://localhost:3333/body',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    }
    return http.actions.patch(req)
        .then(resp => {
          expect(resp.statusCode).to.equal(200);
          expect(JSON.parse(resp.body)).to.deep.equal(body);
        })
  })
})
