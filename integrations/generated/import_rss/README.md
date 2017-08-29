# @datafire/import_rss

Client library for import.io

## Installation and Usage
```bash
npm install --save datafire @datafire/import_rss
```

```js
let datafire = require('datafire');
let import_rss = require('@datafire/import_rss').create({
  api_key: "",
});

import_rss.extractor.extractorId.runs.get({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### extractor.extractorId.runs.get
Get a feed of the runs performed on an extractor


```js
import_rss.extractor.extractorId.runs.get({
  "extractorId": ""
}, context)
```

#### Parameters
* extractorId (string) **required** - The id of the extractor to start get the crawl run data

