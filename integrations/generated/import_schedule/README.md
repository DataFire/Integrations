# @datafire/import_schedule

Client library for import.io

## Installation and Usage
```bash
npm install --save @datafire/import_schedule
```
```js
let import_schedule = require('@datafire/import_schedule').create({
  api_key: ""
});

import_schedule.extractor.get(null).then(data => {
  console.log(data);
});
```

## Description



## Actions

### extractor.get
Get the list of schedules for all your extractors


```js
import_schedule.extractor.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Schedule](#schedule)

### extractor.post
Schedule and extractor to run at a specific time


```js
import_schedule.extractor.post({
  "Schedule Request Body": {
    "extractorId": "",
    "interval": ""
  }
}, context)
```

#### Input
* input `object`
  * Schedule Request Body **required** [ScheduleRequest](#schedulerequest)

#### Output
* output [Schedule](#schedule)

### extractor.extractorId.delete
Delete an existing schedule


```js
import_schedule.extractor.extractorId.delete({
  "extractorId": ""
}, context)
```

#### Input
* input `object`
  * extractorId **required** `string`: the id of the extractor with a schedule

#### Output
*Output schema unknown*

### extractor.extractorId.get
Get the schedule of a particular extractor


```js
import_schedule.extractor.extractorId.get({
  "extractorId": ""
}, context)
```

#### Input
* input `object`
  * extractorId **required** `string`: the id of the extractor with a schedule

#### Output
* output [Schedule](#schedule)



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

### Inputs
* Inputs `object`
  * Example Input `string`
  * _url **required** `string`

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

### Report
* Report `object`
  * configId `string`
  * guid `string`
  * name `string`
  * published `boolean`
  * reportId `string`
  * status `string`
  * summary `object`
  * type `string`

### ReportRun
* ReportRun `object`
  * autoPublish `boolean`
  * guid `string`
  * latestConfigId `string`
  * name `string`
  * type `string`

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


