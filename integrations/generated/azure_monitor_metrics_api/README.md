# @datafire/azure_monitor_metrics_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_metrics_api
```
```js
let azure_monitor_metrics_api = require('@datafire/azure_monitor_metrics_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_monitor_metrics_api.Metrics_List({
  "resourceUri": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Metrics_List
**Lists the metric values for a resource**.


```js
azure_monitor_metrics_api.Metrics_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * timespan `string`: The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'.
  * interval `string`: The interval (i.e. timegrain) of the query.
  * metric `string`: The name of the metric to retrieve.
  * aggregation `string`: The list of aggregation types (comma separated) to retrieve.
  * $top `number`: The maximum number of records to retrieve.
  * $orderby `string`: The aggregation to use for sorting results and the direction of the sort.
  * $filter `string`: The **$filter** is used to reduce the set of metric data returned.<br>Example:<br>Metric contains metadata A, B and C.<br>- Return all time series of C where A = a1 and B = b1 or b2<br>**$filter=A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**<br>- Invalid variant:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B = ‘b2’**<br>This is invalid because the logical or operator cannot separate two different metadata names.<br>- Return all time series where A = a1, B = b1 and C = c1:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**<br>- Return all time series where A = a1<br>**$filter=A eq ‘a1’ and B eq ‘*’ and C eq ‘*’**.
  * resultType `string` (values: Data, Metadata): Reduces the set of data collected. The syntax allowed depends on the operation. See the operation's description for details.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Response](#response)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### LocalizableString
* LocalizableString `object`: The localizable string class.
  * localizedValue `string`: the locale specific value.
  * value **required** `string`: the invariant value.

### MetadataValue
* MetadataValue `object`: Represents a metric metadata value.
  * name [LocalizableString](#localizablestring)
  * value `string`: the value of the metadata.

### Metric
* Metric `object`: The result data of a query.
  * id **required** `string`: the metric Id.
  * name **required** [LocalizableString](#localizablestring)
  * timeseries **required** `array`: the time series returned when a data query is performed.
    * items [TimeSeriesElement](#timeserieselement)
  * type **required** `string`: the resource type of the metric resource.
  * unit **required** [Unit](#unit)

### MetricValue
* MetricValue `object`: Represents a metric value.
  * average `number`: the average value in the time range.
  * count `integer`: the number of samples in the time range. Can be used to determine the number of values that contributed to the average value.
  * maximum `number`: the greatest value in the time range.
  * minimum `number`: the least value in the time range.
  * timeStamp **required** `string`: the timestamp for the metric value in ISO 8601 format.
  * total `number`: the sum of all of the values in the time range.

### Response
* Response `object`: The response to a metrics query.
  * cost `number`: The integer value representing the cost of the query, for data case.
  * interval `string`: The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made.
  * timespan **required** `string`: The timespan for which the data was retrieved. Its value consists of two datatimes concatenated, separated by '/'.  This may be adjusted in the future and returned back from what was originally requested.
  * value **required** `array`: the value of the collection.
    * items [Metric](#metric)

### TimeSeriesElement
* TimeSeriesElement `object`: A time series result type. The discriminator value is always TimeSeries in this case.
  * data `array`: An array of data points representing the metric values.  This is only returned if a result type of data is specified.
    * items [MetricValue](#metricvalue)
  * metadatavalues `array`: the metadata values returned if $filter was specified in the call.
    * items [MetadataValue](#metadatavalue)

### Unit
* Unit `string` (values: Count, Bytes, Seconds, CountPerSecond, BytesPerSecond, Percent, MilliSeconds, ByteSeconds, Unspecified): the unit of the metric.


