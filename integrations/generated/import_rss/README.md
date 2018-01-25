# @datafire/import_rss

Client library for import.io

## Installation and Usage
```bash
npm install --save @datafire/import_rss
```
```js
let import_rss = require('@datafire/import_rss').create({
  api_key: ""
});

import_rss.extractor.extractorId.runs.get({
  "extractorId": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * extractorId **required** `string`: The id of the extractor to start get the crawl run data

#### Output
* output `object`



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


