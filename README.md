# DataFire Integrations

This is an integration registry for [DataFire](https://github.com/DataFire/DataFire).

Credit to [APIs.guru](http://apis.guru) for supplying many of the OpenAPI specs here.

## Exploring
You can see a list of integrations in [list.json](./list.json) or use the DataFire command line tool:
```
npm install -g datafire

datafire list -a
# show all integrations

datafire list -a -q email
# search for "email" integrations

datafire integrate github
# install an integration (same as npm install @datafire/github)

datafire describe github
# show details and a list of operations

datafire call github -o "GET /users"
# make a live call to the API
```

## Contributing
New integrations are welcome. They can be automatically added from an OpenAPI spec
or an RSS feed:

```
node scripts/integrate.js --openapi https://example.com/openapi.json
# or
node scripts/integrate.js --rss https://example.com/rss.xml
```
