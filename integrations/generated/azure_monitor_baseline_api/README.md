# @datafire/azure_monitor_baseline_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_baseline_api
```
```js
let azure_monitor_baseline_api = require('@datafire/azure_monitor_baseline_api').create({
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

### Baseline_Get
**Gets the baseline values for a resource**.


```js
azure_monitor_baseline_api.Baseline_Get({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
  * metricnames `string`: The names of the metrics (comma separated) to retrieve.
  * timespan `string`: The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'.
  * interval `string`: The interval (i.e. timegrain) of the query.
  * aggregation `string`: The aggregation type of the metric to retrieve the baseline for.
  * sensitivities `string`: The list of sensitivities (comma separated) to retrieve.
  * resultType `string` (values: Data, Metadata): Allows retrieving only metadata of the baseline. On data request all information is retrieved.
  * api-version **required** `string`: Client Api Version.
  * metricnamespace `string`: Metric namespace to query metric definitions for.
  * $filter `string`: The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metric's time series, in which a baseline is requested for.

#### Output
* output [BaselineResponse](#baselineresponse)

### MetricBaseline_Get
**Gets the baseline values for a specific metric**.


```js
azure_monitor_baseline_api.MetricBaseline_Get({
  "resourceUri": "",
  "metricName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
  * metricName **required** `string`: The name of the metric to retrieve the baseline for.
  * timespan `string`: The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'.
  * interval `string`: The interval (i.e. timegrain) of the query.
  * aggregation `string`: The aggregation type of the metric to retrieve the baseline for.
  * sensitivities `string`: The list of sensitivities (comma separated) to retrieve.
  * resultType `string` (values: Data, Metadata): Allows retrieving only metadata of the baseline. On data request all information is retrieved.
  * api-version **required** `string`: Client Api Version.
  * metricnamespace `string`: Metric namespace to query metric definitions for.
  * $filter `string`: The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metric's time series, in which a baseline is requested for.

#### Output
* output [BaselineResponse](#baselineresponse)



## Definitions

### Baseline
* Baseline `object`: The baseline values for a single sensitivity value.
  * highThresholds **required** `array`: The high thresholds of the baseline.
    * items `number`: A single high threshold value.
  * lowThresholds **required** `array`: The low thresholds of the baseline.
    * items `number`: A single low threshold value.
  * sensitivity **required** `string` (values: Low, Medium, High): The sensitivity of the baseline.

### BaselineMetadataValue
* BaselineMetadataValue `object`: Represents a baseline metadata value.
  * name [LocalizableString](#localizablestring)
  * value `string`: The value of the metadata.

### BaselineProperties
* BaselineProperties `object`: The baseline properties class.
  * aggregation `string`: The aggregation type of the metric.
  * baseline `array`: The baseline values for each sensitivity.
    * items [Baseline](#baseline)
  * interval `string`: The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made.
  * metadata `array`: The baseline metadata values.
    * items [BaselineMetadataValue](#baselinemetadatavalue)
  * timespan `string`: The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by '/'.  This may be adjusted in the future and returned back from what was originally requested.
  * timestamps `array`: The array of timestamps of the baselines.
    * items `string`: The timestamp for the baseline value in ISO 8601 format.

### BaselineResponse
* BaselineResponse `object`: The response to a baseline query.
  * id `string`: The metric baseline ID.
  * name [LocalizableString](#localizablestring)
  * properties [BaselineProperties](#baselineproperties)
  * type `string`: The resource type of the baseline resource.

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### LocalizableString
* LocalizableString `object`: The localizable string class.
  * localizedValue `string`: The locale specific value.
  * value **required** `string`: The invariant value.


