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

lucybot.addAction('serve', {
  input: [{
    title: 'filename',
    type: 'string',
  }],
  handler: (input) => {
    return fileserver.serve(input, serveContext);
  }
})
