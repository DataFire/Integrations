let datafire = require('datafire');
let nodepath = require('path');
let fileserver = require('@datafire/fileserver').actions;
let lucybot = module.exports = new datafire.Integration({
  id: 'lucybot_docs',
  title: "LucyBot API Documentation",
})
let serveContext = new datafire.Context({
  accounts: {
    fileserver: {
      baseDirectory: nodepath.dirname(require.resolve('lucybot-documentation-starter')),
    }
  }
})


let openapi = null;

function initializeOpenAPI() {
  if (openapi) return openapi;
  let project = datafire.Project.main();
  openapi = JSON.parse(JSON.stringify(project.openapi));

  for (let path in openapi.paths) {
    for (let method in openapi.paths[path]) {
      let op = openapi.paths[path][method];
      if (!op['x-datafire']) return;
      if (op['x-datafire'].action === 'lucybot_docs/serve') {
        delete openapi.paths[path][method];
      }
    }
    if (!Object.keys(openapi.paths[path]).length) {
      delete openapi.paths[path];
    }
  }
}

lucybot.addAction('serve', {
  inputs: [{
    title: 'filename',
    type: 'string',
  }],
  handler: (input, context) => {
    initializeOpenAPI();
    if (input.filename === 'openapi.json') {
      return openapi;
    } else {
      return fileserver.serve(input, serveContext);
    }
  }
})
