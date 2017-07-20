# @datafire/import_rss

Client library for import.io

## Installation and Usage
```bash
npm install --save datafire @datafire/import_rss
```

```js
let datafire = require('datafire');
let import_rss = require('@datafire/import_rss').actions;

let account = {
  api_key: "",
}
let context = new datafire.Context({
  accounts: {
    import_rss: account,
  }
})


import_rss.extractor.extractorId.runs.get({}, context).then(data => {
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

