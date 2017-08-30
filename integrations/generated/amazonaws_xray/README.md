# @datafire/amazonaws_xray

Client library for AWS X-Ray

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_xray
```

```js
let datafire = require('datafire');
let amazonaws_xray = require('@datafire/amazonaws_xray').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_xray.GetServiceGraph({}).then(data => {
  console.log(data);
})
```

## Description
AWS X-Ray provides APIs for managing debug traces and retrieving service maps and other data created by processing those traces.

## Actions
### GetServiceGraph



```js
amazonaws_xray.GetServiceGraph({
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Parameters
* EndTime (string) **required**
* NextToken (string)
* StartTime (string) **required**

### PutTelemetryRecords



```js
amazonaws_xray.PutTelemetryRecords({
  "TelemetryRecords": []
}, context)
```

#### Parameters
* EC2InstanceId (string)
* Hostname (string)
* ResourceARN (string)
* TelemetryRecords (array) **required**

### GetTraceGraph



```js
amazonaws_xray.GetTraceGraph({
  "TraceIds": []
}, context)
```

#### Parameters
* NextToken (string)
* TraceIds (array) **required**

### PutTraceSegments



```js
amazonaws_xray.PutTraceSegments({
  "TraceSegmentDocuments": []
}, context)
```

#### Parameters
* TraceSegmentDocuments (array) **required**

### GetTraceSummaries



```js
amazonaws_xray.GetTraceSummaries({
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Parameters
* EndTime (string) **required**
* FilterExpression (string)
* NextToken (string)
* Sampling (boolean)
* StartTime (string) **required**

### BatchGetTraces



```js
amazonaws_xray.BatchGetTraces({
  "TraceIds": []
}, context)
```

#### Parameters
* NextToken (string)
* TraceIds (array) **required**

