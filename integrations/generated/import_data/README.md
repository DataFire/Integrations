# @datafire/import_data

Client library for import.io

## Installation and Usage
```bash
npm install --save datafire @datafire/import_data
```

```js
let datafire = require('datafire');
let import_data = require('@datafire/import_data').actions;

let account = {
  api_key: "",
}
let context = new datafire.Context({
  accounts: {
    import_data: account,
  }
})


import_data.extractor.extractorId.csv.latest.get({}, context).then(data => {
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

