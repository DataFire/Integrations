# @datafire/import_schedule

Client library for import.io

## Installation and Usage
```bash
npm install --save datafire @datafire/import_schedule
```

```js
let datafire = require('datafire');
let import_schedule = require('@datafire/import_schedule').create({
  api_key: "",
});

import_schedule.extractor.get({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### extractor.get
Get the list of schedules for all your extractors


```js
import_schedule.extractor.get(null, context)
```

#### Parameters
*This action has no parameters*

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

#### Parameters
* Schedule Request Body (object) **required**

### extractor.extractorId.delete
Delete an existing schedule


```js
import_schedule.extractor.extractorId.delete({
  "extractorId": ""
}, context)
```

#### Parameters
* extractorId (string) **required** - the id of the extractor with a schedule

### extractor.extractorId.get
Get the schedule of a particular extractor


```js
import_schedule.extractor.extractorId.get({
  "extractorId": ""
}, context)
```

#### Parameters
* extractorId (string) **required** - the id of the extractor with a schedule

