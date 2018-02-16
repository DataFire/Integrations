# @datafire/azure_monitor_metricdefinitions_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_metricdefinitions_api
```
```js
let azure_monitor_metricdefinitions_api = require('@datafire/azure_monitor_metricdefinitions_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_monitor_metricdefinitions_api.MetricDefinitions_List({
  "resourceUri": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### MetricDefinitions_List
Lists the metric definitions for the resource.


```js
azure_monitor_metricdefinitions_api.MetricDefinitions_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [MetricDefinitionCollection](#metricdefinitioncollection)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### LocalizableString
* LocalizableString `object`: The localizable string class.
  * localizedValue `string`: the locale specific value.
  * value **required** `string`: the invariant value.

### MetricAvailability
* MetricAvailability `object`: Metric availability specifies the time grain (aggregation interval or frequency) and the retention period for that time grain.
  * retention `string`: the retention period for the metric at the specified timegrain.  Expressed as a duration 'PT1M', 'P1D', etc.
  * timeGrain `string`: the time grain specifies the aggregation interval for the metric. Expressed as a duration 'PT1M', 'P1D', etc.

### MetricDefinition
* MetricDefinition `object`: Metric definition class specifies the metadata for a metric.
  * dimensions `array`: the name and the display name of the dimension, i.e. it is a localizable string.
    * items [LocalizableString](#localizablestring)
  * id `string`: the resource identifier of the metric definition.
  * isDimensionRequired `boolean`: Flag to indicate whether the dimension is required.
  * metricAvailabilities `array`: the collection of what aggregation intervals are available to be queried.
    * items [MetricAvailability](#metricavailability)
  * name [LocalizableString](#localizablestring)
  * primaryAggregationType `string` (values: None, Average, Count, Minimum, Maximum, Total): the primary aggregation type value defining how to use the values for display.
  * resourceId `string`: the resource identifier of the resource that emitted the metric.
  * unit [Unit](#unit)

### MetricDefinitionCollection
* MetricDefinitionCollection `object`: Represents collection of metric definitions.
  * value **required** `array`: the values for the metric definitions.
    * items [MetricDefinition](#metricdefinition)

### Unit
* Unit `string` (values: Count, Bytes, Seconds, CountPerSecond, BytesPerSecond, Percent, MilliSeconds, ByteSeconds, Unspecified): the unit of the metric.


