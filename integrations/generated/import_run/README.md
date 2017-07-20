# @datafire/import_run

Client library for import.io

## Installation and Usage
```bash
npm install --save datafire @datafire/import_run
```

```js
let datafire = require('datafire');
let import_run = require('@datafire/import_run').actions;

let account = {
  api_key: "",
}
let context = new datafire.Context({
  accounts: {
    import_run: account,
  }
})


import_run.extractor.extractorId.cancel.post({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### extractor.extractorId.cancel.post
Cancel an existing crawl.


```js
import_run.extractor.extractorId.cancel.post({
  "extractorId": ""
}, context)
```

#### Parameters
* extractorId (string) **required** - extractorId

### extractor.extractorId.start.post
Launch a crawl from an extractor that a user owns.


```js
import_run.extractor.extractorId.start.post({
  "extractorId": ""
}, context)
```

#### Parameters
* extractorId (string) **required** - the id of the extractor to start crawling with
* loginSessionId (string) - The loginSessionId required for authenticated extractors. Only required when running authenticated extractors.

