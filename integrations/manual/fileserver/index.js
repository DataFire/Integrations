'use strict';

let datafire = require('datafire');
let nodepath = require('path');
let fs = require('fs');

let CONTENT_TYPES = {
  default: 'text/plain',
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.zip': 'application/zip',
  '.pdf': 'application/pdf',
  '.sql': 'application/sql',
  '.mpeg': 'audio/mpeg',
  '.css': 'text/css',
  '.csv': 'text/csv',
  '.png': 'image/png',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-sfnt',
  '.svg': 'image/svg+xml',
  '.ttf': 'application/font-sfnt',
  '.woff': 'application/font-woff',
  '.woff2': 'application/font-woff2',
}

let ENCODINGS = {
  default: 'utf8',
  '.woff': 'binary',
  '.woff2': 'binary',
}

let fileserver = module.exports = new datafire.Integration({
  id: 'fileserver',
  title: "File Server",
  description: "Serve static files, such as HTML, CSS, JavaScript, and images",
});

fileserver.addAction('serve', {
  inputs: [{
    title: 'filename',
    type: 'string',
  }, {
    title: 'contentType',
    type: 'string',
    default: '',
  }],

  security: {
    fileserver: {
      fields: {
        baseDirectory: 'The directory to use as the file server\'s root',
      }
    }
  },

  handler: (input, context) => {
    let baseDir = context.accounts.fileserver.baseDirectory;
    if (!baseDir) throw new Error("Must specify context.accounts.fileserver.baseDirectory");
    return new Promise((resolve, reject) => {
      let filename = nodepath.join('/', input.filename);
      filename = nodepath.join(baseDir, filename);
      let extname = nodepath.extname(filename);
      let ctype = input.contentType || CONTENT_TYPES[extname] || CONTENT_TYPES.default;
      let encoding = ENCODINGS[extname] || ENCODINGS.default;
      fs.readFile(filename, encoding, (err, contents) => {
        if (err) {
          let resp = {statusCode: 500, body: "Error retrieving file " + input.filename};
          if (err.code === 'ENOENT') {
            resp = {statusCode: 404, body: "File not found: " + input.filename};
          } else {
            return reject(new datafire.Response({
              statusCode: 500,
              body: "Error retrieving file " + input.filename,
            }));
          }
          return reject(new datafire.Response(resp));
        }
        resolve(new datafire.Response({
          encoding,
          headers: {'Content-Type': ctype},
          body: contents,
        }))
      })
    })
  }
})
