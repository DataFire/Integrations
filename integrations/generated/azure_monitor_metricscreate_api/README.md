# @datafire/azure_monitor_metricscreate_api

Client library for Azure Metrics

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_metricscreate_api
```
```js
let azure_monitor_metricscreate_api = require('@datafire/azure_monitor_metricscreate_api').create();

.then(data => {
  console.log(data);
});
```

## Description

A client for issuing REST requests to the Azure metrics service.

## Actions

### Metrics_Create
**Post the metric values for a resource**.


```js
azure_monitor_metricscreate_api.Metrics_Create({
  "Content-Type": "",
  "Content-Length": 0,
  "Authorization": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceProvider": "",
  "resourceTypeName": "",
  "resourceName": "",
  "body": {
    "time": "",
    "data": {
      "baseData": {
        "metric": "",
        "namespace": "",
        "series": []
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: Supports application/json and application/x-ndjson
  * Content-Length **required** `integer`: Content length of the payload
  * Authorization **required** `string`: Authorization token issue for issued for audience "https:\\monitoring.azure.com\"
  * subscriptionId **required** `string`: The azure subscription id
  * resourceGroupName **required** `string`: The ARM resource group name
  * resourceProvider **required** `string`: The ARM resource provider name
  * resourceTypeName **required** `string`: The ARM resource type name
  * resourceName **required** `string`: The ARM resource name
  * body **required** [AzureMetricsDocument](#azuremetricsdocument)

#### Output
* output [AzureMetricsResult](#azuremetricsresult)



## Definitions

### ApiError
* ApiError `object`
  * code `string`: Gets or sets the azure metrics error code
  * message `string`: Gets or sets the azure metrics error message

### ApiFailureResponse
* ApiFailureResponse `object`
  * error [ApiError](#apierror)

### AzureMetricsBaseData
* AzureMetricsBaseData `object`
  * dimNames `array`: Gets or sets the list of dimension names (optional)
    * items `string`
  * metric **required** `string`: Gets or sets the Metric name
  * namespace **required** `string`: Gets or sets the Metric namespace
  * series **required** `array`: Gets or sets the list of time series data for the metric (one per unique dimension combination)
    * items [AzureTimeSeriesData](#azuretimeseriesdata)

### AzureMetricsData
* AzureMetricsData `object`
  * baseData **required** [AzureMetricsBaseData](#azuremetricsbasedata)

### AzureMetricsDocument
* AzureMetricsDocument `object`
  * data **required** [AzureMetricsData](#azuremetricsdata)
  * time **required** `string`: Gets or sets Time property (in ISO 8601 format)

### AzureMetricsResult
* AzureMetricsResult `object`
  * apiFailureResponse [ApiFailureResponse](#apifailureresponse)
  * statusCode `integer`: Http status code response 

### AzureTimeSeriesData
* AzureTimeSeriesData `object`
  * count **required** `integer`: Gets or sets Count value
  * dimValues `array`: Gets or sets dimension values
    * items `string`
  * max **required** `number`: Gets or sets Max value
  * min **required** `number`: Gets or sets Min value
  * sum **required** `number`: Gets or sets Sum value


