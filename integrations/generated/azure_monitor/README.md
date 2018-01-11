# @datafire/azure_monitor

Client library for MonitorClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor
```
```js
let azure_monitor = require('@datafire/azure_monitor').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_monitor.UsageMetrics_List({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### UsageMetrics_List
The List operation lists the usage metrics for the resource.<br>**WARNING**: This operation will be *deprecated* in the next release.


```js
azure_monitor.UsageMetrics_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version. NOTE: This is not a client property, it must be explicit in the call and there is no default value.
  * $filter `string`: The filter to apply on the operation.<br>**WARNING**: $filter not documented since the operation will be deprecated in the next release.

#### Output
* output [UsageMetricCollection](#usagemetriccollection)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### LocalizableString
* LocalizableString `object`: The localizable string class.
  * localizedValue `string`: the locale specific value.
  * value **required** `string`: the invariant value.

### UsageMetric
* UsageMetric `object`: Usage Metric data.
  * currentValue `number`: the current value for the usage metric.
  * id `string`: the id for the usage metric.
  * limit `number`: the quota limit the usage metric.
  * name [LocalizableString](#localizablestring)
  * nextResetTime `string`: the next reset time for the current value.
  * quotaPeriod `string`: the amount of time it takes to reset the value.
  * unit `string`: the unit for the usage metric.

### UsageMetricCollection
* UsageMetricCollection `object`: Represents collection of usage metrics.
  * value **required** `array`: the usage values.
    * items [UsageMetric](#usagemetric)


