# DataFire Integrations

This is an integration registry for DataFire. See the [DataFire repo](https://github.com/DataFire/DataFire) for full documentation.

Credit to [APIs.guru](http://apis.guru) for supplying many of the OpenAPI specs here.

## Installing an Integration
You can use either `npm` or `datafire` - both do the same thing.
```
npm install --save @datafire/github
datafire integrate --save github
```

## Calling an Integration
You can make calls to an integration on the command line, or in JavaScript.
```bash
datafire integrate github
datafire call github -o "GET /users"
```

```js
let datafire = require('datafire');
let github = datafire.Integration.new('github');
github.get('/users').call(function(err, users) {
  console.log(users);
});
```

## Exploring
You can see a list of integrations in [list.json](./list.json) or use the DataFire command line tool:
```
datafire list -a
# show all integrations

datafire list -a -q email
# search for "email" integrations

datafire integrate github
# install an integration (same as npm install @datafire/github)

datafire describe github
# show details and a list of operations

datafire describe github -o "GET /users"
# show details for a particular operation

datafire call github -o "GET /users"
# make a live call to the API
```

## Contributing
New integrations are welcome. They can be automatically added from an OpenAPI spec
or an RSS feed:

```
node scripts/integrate.js --name acme --openapi https://api.acme.com/openapi.json
# or
node scripts/integrate.js --name acme_rss --rss https://acme.com/rss.xml
```
