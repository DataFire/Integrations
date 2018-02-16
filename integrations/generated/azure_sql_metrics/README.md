# @datafire/azure_sql_metrics

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_metrics
```
```js
let azure_sql_metrics = require('@datafire/azure_sql_metrics').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_metrics.Databases_ListMetricDefinitions({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides create, read, update and delete functionality for Azure SQL Database resources including servers, databases, elastic pools, recommendations, operations, and usage metrics.

## Actions

### Databases_ListMetricDefinitions
Returns database metric definitions.


```js
azure_sql_metrics.Databases_ListMetricDefinitions({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.

#### Output
* output [MetricDefinitionListResult](#metricdefinitionlistresult)

### Databases_ListMetrics
Returns database metrics.


```js
azure_sql_metrics.Databases_ListMetrics({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return.

#### Output
* output [MetricListResult](#metriclistresult)

### ElasticPools_ListMetricDefinitions
Returns elastic pool metric definitions.


```js
azure_sql_metrics.ElasticPools_ListMetricDefinitions({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * elasticPoolName **required** `string`: The name of the elastic pool.

#### Output
* output [MetricDefinitionListResult](#metricdefinitionlistresult)

### ElasticPools_ListMetrics
Returns elastic pool  metrics.


```js
azure_sql_metrics.ElasticPools_ListMetrics({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "elasticPoolName": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * elasticPoolName **required** `string`: The name of the elastic pool.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return.

#### Output
* output [MetricListResult](#metriclistresult)



## Definitions

### Metric
* Metric `object`: Database metrics.
  * endTime `string`: The end time for the metric (ISO-8601 format).
  * metricValues `array`: The metric values for the specified time window and timestep.
    * items [MetricValue](#metricvalue)
  * name [MetricName](#metricname)
  * startTime `string`: The start time for the metric (ISO-8601 format).
  * timeGrain `string`: The time step to be used to summarize the metric values.
  * unit `string` (values: count, bytes, seconds, percent, countPerSecond, bytesPerSecond): The unit of the metric.

### MetricAvailability
* MetricAvailability `object`: A metric availability value.
  * retention `string`: The length of retention for the database metric.
  * timeGrain `string`: The granularity of the database metric.

### MetricDefinition
* MetricDefinition `object`: A database metric definition.
  * metricAvailabilities `array`: The list of database metric availabities for the metric.
    * items [MetricAvailability](#metricavailability)
  * name [MetricName](#metricname)
  * primaryAggregationType `string` (values: None, Average, Count, Minimum, Maximum, Total): The primary aggregation type defining how metric values are displayed.
  * resourceUri `string`: The resource uri of the database.
  * unit `string` (values: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond): The unit of the metric.

### MetricDefinitionListResult
* MetricDefinitionListResult `object`: The response to a list database metric definitions request.
  * value **required** `array`: The list of metric definitions for the database.
    * items [MetricDefinition](#metricdefinition)

### MetricListResult
* MetricListResult `object`: The response to a list database metrics request.
  * value **required** `array`: The list of metrics for the database.
    * items [Metric](#metric)

### MetricName
* MetricName `object`: A database metric name.
  * localizedValue `string`: The friendly name of the database metric.
  * value `string`: The name of the database metric.

### MetricValue
* MetricValue `object`: Represents database metrics.
  * average `number`: The average value of the metric.
  * count `number`: The number of values for the metric.
  * maximum `number`: The max value of the metric.
  * minimum `number`: The min value of the metric.
  * timestamp `string`: The metric timestamp (ISO-8601 format).
  * total `number`: The total value of the metric.

### ProxyResource
* ProxyResource: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


