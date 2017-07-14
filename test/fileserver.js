"use strict";

let expect = require('chai').expect;
let datafire = require('datafire');
let fileserver = require('../integrations/manual/fileserver');

const context = new datafire.Context({
  accounts: {
    fileserver: {
      baseDirectory: __dirname + '/fileserver',
    }
  }
})

describe('File Server integration', () => {
  it('should serve HTML', () => {
    return fileserver.actions.serve({
      filename: 'index.html',
    }, context).then(resp => {
      expect(resp.statusCode).to.equal(200);
      expect(resp.headers['Content-Type']).to.equal('text/html');
      expect(resp.body).to.equal('<h1>Hello world</h1>\n');
    })
  });

  it('should serve CSS', () => {
    return fileserver.actions.serve({
      filename: 'styles.css',
    }, context).then(resp => {
      expect(resp.statusCode).to.equal(200);
      expect(resp.headers['Content-Type']).to.equal('text/css');
      expect(resp.body).to.equal('h1 {color: black}\n')
    })
  });

  it('should respect custom contentType', () => {
    return fileserver.actions.serve({
      filename: 'styles.css',
      contentType: 'text/plain',
    }, context).then(resp => {
      expect(resp.statusCode).to.equal(200);
      expect(resp.headers['Content-Type']).to.equal('text/plain');
      expect(resp.body).to.equal('h1 {color: black}\n')
    })
  })

  it('should return 404 for not found', () => {
    return fileserver.actions.serve({
      filename: 'not-found.css',
    }, context).then(resp => {
      throw new Error("Shouldn't reach here");
    }).catch(resp => {
      expect(resp.statusCode).to.equal(404);
      expect(resp.body).to.contain('not found')
    })
  });

  it('should return 404 for file below baseDirectory', () => {
    return fileserver.actions.serve({
      filename: '../fileserver.js',
    }, context).then(resp => {
      throw new Error("Shouldn't reach here");
    }).catch(resp => {
      expect(resp.statusCode).to.equal(404);
      expect(resp.body).to.contain('not found')
    })
  })
})
