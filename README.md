# DataFire Integrations

[![Travis][travis-image]][travis-link]
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://www.npmjs.com/package/datafire)

[travis-image]: https://travis-ci.org/DataFire/Integrations.svg?branch=master
[travis-link]: https://travis-ci.org/DataFire/Integrations

This is a set of NodeJS clients for over 600 different APIs and services, including:

AWS • Azure • MongoDB • Slack • GitHub • Twilio • Trello • Square • Google Sheets • Gmail • Heroku

The client libraries can be used with or without the [DataFire framework](https://github.com/DataFire/DataFire).

## Installing an Integration
Integrations are available in the `@datafire` scope in npm:
```
npm install --save @datafire/hacker_news
```

## Calling an Integration
Integrations use Promises, and can be used with `async/await` syntax.
```js
let hn = require('@datafire/hacker_news').create();

// With async/await
(async function() {

  let stories = await hn.getStories({storyType: 'top'});
  console.log(stories);

})();

// With Promises
hn.getStories({storyType: 'top'})
  .then(stories => {
    console.log(stories);
  });

```

## Contributing
New integrations are welcome. They can be automatically added from an OpenAPI spec
or an RSS feed:

```
node scripts/integrate.js --name acme --openapi https://api.acme.com/openapi.json
# or
node scripts/integrate.js --name acme_rss --rss https://acme.com/rss.xml
```

You can also create integrations manually by writing JavaScript and using npm modules.
See the [HTTP](./integrations/manual/http) or [MongoDB](./integrations/manual/mongodb) integrations for examples.

