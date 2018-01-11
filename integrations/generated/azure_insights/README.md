# @datafire/azure_insights

Client library for InsightsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_insights
```
```js
let azure_insights = require('@datafire/azure_insights').create();

azure_insights.Metrics_List({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### Metrics_List
**Lists the metric values for a resource**.<br>The **$filter** is used to reduce the set of metric data returned. Some common properties for this expression will be: name.value, aggregationType, startTime, endTime, timeGrain. The filter expression uses these properties with comparison operators (eg. eq, gt, lt) and multiple expressions can be combined with parentheses and 'and/or' operators.<br>Some example filter expressions are:<br>- $filter=(name.value eq 'RunsSucceeded') and aggregationType eq 'Total' and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration'PT1M',<br>- $filter=(name.value eq 'RunsSucceeded') and (aggregationType eq 'Total' or aggregationType eq 'Average') and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration'PT1H',<br>- $filter=(name.value eq 'ActionsCompleted' or name.value eq 'RunsSucceeded') and (aggregationType eq 'Total' or aggregationType eq 'Average') and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration'PT1M'.<br><br> >**NOTE**: When a metrics query comes in with multiple metrics, but with no aggregation types defined, the service will pick the Primary aggregation type of the first metrics to be used as the default aggregation type for all the metrics.


```js
azure_insights.Metrics_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * $filter `string`: Reduces the set of data collected. The syntax allowed depends on the operation. See the operation's description for details.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [MetricCollection](#metriccollection)



## Definitions

### LocalizableString
* LocalizableString `object`: The localizable string class.
  * localizedValue `string`: the locale specific value.
  * value **required** `string`: the invariant value.

### Metric
* Metric `object`: A set of metric values in a time range.
  * data **required** `array`: Array of data points representing the metric values.
    * items [MetricValue](#metricvalue)
  * id `string`: the id, resourceId, of the metric.
  * name **required** [LocalizableString](#localizablestring)
  * type `string`: the resource type of the metric resource.
  * unit **required** [Unit](#unit)

### MetricCollection
* MetricCollection `object`: The collection of metric value sets.
  * value **required** `array`: the value of the collection.
    * items [Metric](#metric)

### MetricValue
* MetricValue `object`: Represents a metric value.
  * average `number`: the average value in the time range.
  * count `integer`: the number of samples in the time range. Can be used to determine the number of values that contributed to the average value.
  * maximum `number`: the greatest value in the time range.
  * minimum `number`: the least value in the time range.
  * timeStamp **required** `string`: the timestamp for the metric value in ISO 8601 format.
  * total `number`: the sum of all of the values in the time range.

### Unit
* Unit `string` (values: Count, Bytes, Seconds, CountPerSecond, BytesPerSecond, Percent, MilliSeconds): the unit of the metric.


