# DataFire Integrations

This is an integration registry for [DataFire](https://github.com/DataFire/DataFire).

Credit to [APIs.guru](http://apis.guru) for supplying many of the OpenAPI specs here.

## Contributing
New integrations are welcome. They can be automatically added from an OpenAPI spec
or an RSS feed:

```
node scripts/integrate.js --openapi https://example.com/openapi.json
# or
node scripts/integrate.js --rss https://example.com/rss.xml
```
