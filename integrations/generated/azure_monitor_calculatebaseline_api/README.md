# @datafire/azure_monitor_calculatebaseline_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_calculatebaseline_api
```
```js
let azure_monitor_calculatebaseline_api = require('@datafire/azure_monitor_calculatebaseline_api').create({
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

### MetricBaseline_CalculateBaseline
**Lists the baseline values for a resource**.


```js
azure_monitor_calculatebaseline_api.MetricBaseline_CalculateBaseline({
  "resourceUri": "",
  "api-version": "",
  "TimeSeriesInformation": null
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
  * api-version **required** `string`: Client Api Version.
  * TimeSeriesInformation **required** [TimeSeriesInformation](#timeseriesinformation)

#### Output
* output [CalculateBaselineResponse](#calculatebaselineresponse)



## Definitions

### Baseline
* Baseline `object`: The baseline values for a single sensitivity value.
  * highThresholds **required** `array`: The high thresholds of the baseline.
    * items `number`: A single high threshold value.
  * lowThresholds **required** `array`: The low thresholds of the baseline.
    * items `number`: A single low threshold value.
  * sensitivity **required** `string` (values: Low, Medium, High): The sensitivity of the baseline.

### CalculateBaselineResponse
* CalculateBaselineResponse `object`: The response to a calculate baseline call.
  * baseline **required** `array`: The baseline values for each sensitivity.
    * items [Baseline](#baseline)
  * timestamps `array`: The array of timestamps of the baselines.
    * items `string`: The timestamp for the baseline value in ISO 8601 format.
  * type **required** `string`: The resource type of the baseline resource.

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### TimeSeriesInformation
* TimeSeriesInformation `object`: The time series info needed for calculating the baseline.
  * sensitivities **required** `array`: The list of sensitivities for calculating the baseline.
    * items `string`: The requested sensitivity for calculating the baseline.
  * timestamps `array`: The array of timestamps of the baselines.
    * items `string`: The timestamp for the baseline value in ISO 8601 format.
  * values **required** `array`: The metric values to calculate the baseline.
    * items `number`: A single metric value.


