# @datafire/import_extraction

Client library for import.io

## Installation and Usage
```bash
npm install --save @datafire/import_extraction
```
```js
let import_extraction = require('@datafire/import_extraction').create({
  api_key: ""
});

import_extraction.extractor.extractorId.get({
  "extractorId": "",
  "url": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * extractorId **required** `string`: extractorId
  * url **required** `string`: url

#### Output
* output [QueryResponse](#queryresponse)



## Definitions

### APIError
* APIError `object`
  * code `integer`: Internal error code
  * error `string`: (deprecated) A message containing a brief description of the error
  * message `string`: A message containing a brief description of the error

### CrawlRun
* CrawlRun `object`
  * extractorId `string`
  * failedUrlCount `integer`
  * guid `string`
  * rowCount `integer`
  * runtimeConfigId `string`
  * startedAt `integer`
  * state `string`
  * stoppedAt `integer`
  * successUrlCount `integer`
  * totalUrlCount `integer`
  * urlListId `string`

### ObjectStoreSearchResult
* ObjectStoreSearchResult `object`
  * hits `object`
    * hits `array`
      * items `object`
        * _id `string`
        * _score `integer`
        * _type `string`
        * fields [CrawlRun](#crawlrun)
    * total `integer`
  * timed_out `boolean`
  * took `integer`

### QueryResponse
* QueryResponse `object`
  * error `string`
  * exceptionType `string`
  * extractorData `object`
  * pageData `object`
  * runtimeConfigId `string`
  * sequenceNumber `integer`
  * timestamp `integer`
  * url `string`

### Schedule
* Schedule `object`
  * extractorId `string`
  * interval `string`
  * intervalData `object`
    * minutes `string`
    * time `string`
    * type `string`
  * nextRunAt `integer`
  * ownerId `string`
  * startTimestamp `integer`

### ScheduleRequest
* ScheduleRequest `object`
  * extractorId **required** `string`
  * interval **required** `string`
  * startTimestamp `integer`


