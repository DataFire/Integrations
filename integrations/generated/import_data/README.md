# @datafire/import_data

Client library for import.io

## Installation and Usage
```bash
npm install --save datafire @datafire/import_data
```

```js
let datafire = require('datafire');
let import_data = require('@datafire/import_data').create({
  api_key: "",
});

import_data.extractor.extractorId.csv.latest.get({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### extractor.extractorId.csv.latest.get
Get the latest crawl run results as a csv


```js
import_data.extractor.extractorId.csv.latest.get({
  "extractorId": ""
}, context)
```

#### Parameters
* extractorId (string) **required** - the id of the extractor to start get the latest crawl run data

### extractor.extractorId.json.latest.get
Get the latest crawl run results as json


```js
import_data.extractor.extractorId.json.latest.get({
  "extractorId": ""
}, context)
```

#### Parameters
* extractorId (string) **required** - The id of the extractor to start get the latest crawl run data

