# @datafire/import_extraction

Client library for import.io

## Installation and Usage
```bash
npm install --save datafire @datafire/import_extraction
```

```js
let datafire = require('datafire');
let import_extraction = require('@datafire/import_extraction').create({
  api_key: "",
});

import_extraction.extractor.extractorId.get({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### extractor.extractorId.get
Query by extractor endpoint, adhoc runs only.


```js
import_extraction.extractor.extractorId.get({
  "extractorId": "",
  "url": ""
}, context)
```

#### Parameters
* extractorId (string) **required** - extractorId
* url (string) **required** - url

