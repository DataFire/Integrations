# @datafire/azure_mariadb_queryperformanceinsights

Client library for MariaDBManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_mariadb_queryperformanceinsights
```
```js
let azure_mariadb_queryperformanceinsights = require('@datafire/azure_mariadb_queryperformanceinsights').create({
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

The Microsoft Azure management API provides create, read, update, and delete functionality for Azure MariaDB resources including servers, databases, firewall rules, VNET rules, log files and configurations with new business model.

## Actions

### QueryTexts_ListByServer
Retrieve the Query-Store query texts for specified queryIds.


```js
azure_mariadb_queryperformanceinsights.QueryTexts_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "queryIds": []
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.
  * queryIds **required** `array`: The query identifiers

#### Output
* output [QueryTextsResultList](#querytextsresultlist)

### QueryTexts_Get
Retrieve the Query-Store query texts for the queryId.


```js
azure_mariadb_queryperformanceinsights.QueryTexts_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.
  * queryId **required** `string`: The Query-Store query identifier.

#### Output
* output [QueryText](#querytext)

### TopQueryStatistics_ListByServer
Retrieve the Query-Store top queries for specified metric and aggregation.


```js
azure_mariadb_queryperformanceinsights.TopQueryStatistics_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.
  * parameters **required** [TopQueryStatisticsInput](#topquerystatisticsinput)

#### Output
* output [TopQueryStatisticsResultList](#topquerystatisticsresultlist)

### TopQueryStatistics_Get
Retrieve the query statistic for specified identifier.


```js
azure_mariadb_queryperformanceinsights.TopQueryStatistics_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "queryStatisticId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.
  * queryStatisticId **required** `string`: The Query Statistic identifier.

#### Output
* output [QueryStatistic](#querystatistic)

### WaitStatistics_ListByServer
Retrieve wait statistics for specified aggregation window.


```js
azure_mariadb_queryperformanceinsights.WaitStatistics_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.
  * parameters **required** [WaitStatisticsInput](#waitstatisticsinput)

#### Output
* output [WaitStatisticsResultList](#waitstatisticsresultlist)

### WaitStatistics_Get
Retrieve wait statistics for specified identifier.


```js
azure_mariadb_queryperformanceinsights.WaitStatistics_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "waitStatisticsId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.
  * waitStatisticsId **required** `string`: The Wait Statistic identifier.

#### Output
* output [WaitStatistic](#waitstatistic)



## Definitions

### QueryStatistic
* QueryStatistic `object`: Represents a Query Statistic.
  * properties [QueryStatisticProperties](#querystatisticproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### QueryStatisticProperties
* QueryStatisticProperties `object`: The properties of a query statistic.
  * aggregationFunction `string`: Aggregation function name.
  * databaseNames `array`: The list of database names.
    * items `string`
  * endTime `string`: Observation end time.
  * metricDisplayName `string`: Metric display name.
  * metricName `string`: Metric name.
  * metricValue `number`: Metric value.
  * metricValueUnit `string`: Metric value unit.
  * queryExecutionCount `integer`: Number of query executions in this time interval.
  * queryId `string`: Database query identifier.
  * startTime `string`: Observation start time.

### QueryText
* QueryText `object`: Represents a Query Text.
  * properties [QueryTextProperties](#querytextproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### QueryTextProperties
* QueryTextProperties `object`: The properties of a query text.
  * queryId `string`: Query identifier unique to the server.
  * queryText `string`: Query text.

### QueryTextsResultList
* QueryTextsResultList `object`: A list of query texts.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: The list of query texts.
    * items [QueryText](#querytext)

### TopQueryStatisticsInput
* TopQueryStatisticsInput `object`: Input to get top query statistics
  * properties **required** [TopQueryStatisticsInputProperties](#topquerystatisticsinputproperties)

### TopQueryStatisticsInputProperties
* TopQueryStatisticsInputProperties `object`: The properties for input to get top query statistics
  * aggregationFunction **required** `string`: Aggregation function name.
  * aggregationWindow **required** `string`: Aggregation interval type in ISO 8601 format.
  * numberOfTopQueries **required** `integer`: Max number of top queries to return.
  * observationEndTime **required** `string`: Observation end time.
  * observationStartTime **required** `string`: Observation start time.
  * observedMetric **required** `string`: Observed metric name.

### TopQueryStatisticsResultList
* TopQueryStatisticsResultList `object`: A list of query statistics.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: The list of top query statistics.
    * items [QueryStatistic](#querystatistic)

### WaitStatistic
* WaitStatistic `object`: Represents a Wait Statistic.
  * properties [WaitStatisticProperties](#waitstatisticproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### WaitStatisticProperties
* WaitStatisticProperties `object`: The properties of a wait statistic.
  * count `integer`: Wait event count observed in this time interval.
  * databaseName `string`: Database Name.
  * endTime `string`: Observation end time.
  * eventName `string`: Wait event name.
  * eventTypeName `string`: Wait event type name.
  * queryId `integer`: Database query identifier.
  * startTime `string`: Observation start time.
  * totalTimeInMs `number`: Total time of wait in milliseconds in this time interval.
  * userId `integer`: Database user identifier.

### WaitStatisticsInput
* WaitStatisticsInput `object`: Input to get wait statistics
  * properties **required** [WaitStatisticsInputProperties](#waitstatisticsinputproperties)

### WaitStatisticsInputProperties
* WaitStatisticsInputProperties `object`: The properties for input to get wait statistics
  * aggregationWindow **required** `string`: Aggregation interval type in ISO 8601 format.
  * observationEndTime **required** `string`: Observation end time.
  * observationStartTime **required** `string`: Observation start time.

### WaitStatisticsResultList
* WaitStatisticsResultList `object`: A list of wait statistics.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: The list of wait statistics.
    * items [WaitStatistic](#waitstatistic)


