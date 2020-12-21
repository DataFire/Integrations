# @datafire/azure_monitor_metricbaselines_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_metricbaselines_api
```
```js
let azure_monitor_metricbaselines_api = require('@datafire/azure_monitor_metricbaselines_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### Baselines_List
**Lists the metric baseline values for a resource**.


```js
azure_monitor_metricbaselines_api.Baselines_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * metricnames `string`: The names of the metrics (comma separated) to retrieve.
  * metricnamespace `string`: Metric namespace to query metric definitions for.
  * timespan `string`: The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'.
  * interval `string`: The interval (i.e. timegrain) of the query.
  * aggregation `string`: The list of aggregation types (comma separated) to retrieve.
  * sensitivities `string`: The list of sensitivities (comma separated) to retrieve.
  * $filter `string`: The **$filter** is used to reduce the set of metric data returned.<br>Example:<br>Metric contains metadata A, B and C.<br>- Return all time series of C where A = a1 and B = b1 or b2<br>**$filter=A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**<br>- Invalid variant:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B = ‘b2’**<br>This is invalid because the logical or operator cannot separate two different metadata names.<br>- Return all time series where A = a1, B = b1 and C = c1:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**<br>- Return all time series where A = a1<br>**$filter=A eq ‘a1’ and B eq ‘*’ and C eq ‘*’**.
  * resultType `string` (values: Data, Metadata): Allows retrieving only metadata of the baseline. On data request all information is retrieved.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [MetricBaselinesResponse](#metricbaselinesresponse)



## Definitions

### BaselineMetadata
* BaselineMetadata `object`: Represents a baseline metadata value.
  * name **required** `string`: Name of the baseline metadata.
  * value **required** `string`: Value of the baseline metadata.

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### MetricBaselinesProperties
* MetricBaselinesProperties `object`: The response to a metric baselines query.
  * baselines **required** `array`: The baseline for each time series that was queried.
    * items [TimeSeriesBaseline](#timeseriesbaseline)
  * interval **required** `string`: The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made.
  * namespace `string`: The namespace of the metrics been queried.
  * timespan **required** `string`: The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by '/'.  This may be adjusted in the future and returned back from what was originally requested.

### MetricBaselinesResponse
* MetricBaselinesResponse `object`: A list of metric baselines.
  * value `array`: The list of metric baselines.
    * items [SingleMetricBaseline](#singlemetricbaseline)

### MetricSingleDimension
* MetricSingleDimension `object`: The metric dimension name and value.
  * name **required** `string`: Name of the dimension.
  * value **required** `string`: Value of the dimension.

### SingleBaseline
* SingleBaseline `object`: The baseline values for a single sensitivity value.
  * highThresholds **required** `array`: The high thresholds of the baseline.
    * items `number`: A single high threshold value.
  * lowThresholds **required** `array`: The low thresholds of the baseline.
    * items `number`: A single low threshold value.
  * sensitivity **required** `string` (values: Low, Medium, High): the sensitivity of the baseline.

### SingleMetricBaseline
* SingleMetricBaseline `object`: The baseline results of a single metric.
  * id **required** `string`: The metric baseline Id.
  * name **required** `string`: The name of the metric for which the baselines were retrieved.
  * properties **required** [MetricBaselinesProperties](#metricbaselinesproperties)
  * type **required** `string`: The resource type of the metric baseline resource.

### TimeSeriesBaseline
* TimeSeriesBaseline `object`: The baseline values for a single time series.
  * aggregation **required** `string`: The aggregation type of the metric.
  * data **required** `array`: The baseline values for each sensitivity.
    * items [SingleBaseline](#singlebaseline)
  * dimensions `array`: The dimensions of this time series.
    * items [MetricSingleDimension](#metricsingledimension)
  * metadata `array`: The baseline metadata values.
    * items [BaselineMetadata](#baselinemetadata)
  * timestamps **required** `array`: The list of timestamps of the baselines.
    * items `string`: The timestamp for the baseline value in ISO 8601 format.


