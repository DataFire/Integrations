# DataFire Integrations

[![Travis][travis-image]][travis-link]
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://www.npmjs.com/package/datafire)
[travis-image]: https://travis-ci.org/DataFire/Integrations.svg?branch=master
[travis-link]: https://travis-ci.org/DataFire/Integrations

This is an integration registry for DataFire. See the
[DataFire repo](https://github.com/DataFire/DataFire/blob/master/docs/Integrations.md) for full documentation.

Credit to [APIs.guru](http://apis.guru) for supplying many of the OpenAPI specs here.

## Installing an Integration
Integrations are available in the `@datafire` scope in npm:
```
npm install --save @datafire/github
```

## Calling an Integration
You can make calls to an integration on the command line, or in JavaScript.
```bash
npm install @datafire/github
datafire run github/users.get
```

```js
let github = require('@datafire/github').actions;
github.users.get()
  .then(users => {
    console.log(users);
  })
```

## Contributing
New integrations are welcome. They can be automatically added from an OpenAPI spec
or an RSS feed:

```
node scripts/integrate.js --name acme --openapi https://api.acme.com/openapi.json
# or
node scripts/integrate.js --name acme_rss --rss https://acme.com/rss.xml
```

You can also create integrations programmatically - see the [HTTP](./integrations/manual/http)
or [MongoDB](./integrations/manual/mongodb) integrations for examples.
