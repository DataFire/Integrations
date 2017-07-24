# @datafire/amazonaws_xray

Client library for AWS X-Ray

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_xray
```

```js
let datafire = require('datafire');
let amazonaws_xray = require('@datafire/amazonaws_xray').actions;
let context = new datafire.Context();

amazonaws_xray.GetServiceGraph({}, context).then(data => {
  console.log(data);
})
```

## Description
AWS X-Ray provides APIs for managing debug traces and retrieving service maps and other data created by processing those traces.

## Actions
### GetServiceGraph



```js
amazonaws_xray.GetServiceGraph({}, context)
```


### PutTelemetryRecords



```js
amazonaws_xray.PutTelemetryRecords({}, context)
```


### GetTraceGraph



```js
amazonaws_xray.GetTraceGraph({}, context)
```


### PutTraceSegments



```js
amazonaws_xray.PutTraceSegments({}, context)
```


### GetTraceSummaries



```js
amazonaws_xray.GetTraceSummaries({}, context)
```


### BatchGetTraces



```js
amazonaws_xray.BatchGetTraces({}, context)
```


