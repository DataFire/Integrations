# @datafire/azure_sql_queries

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_queries
```
```js
let azure_sql_queries = require('@datafire/azure_sql_queries').create({
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

Provides create, read, update and delete functionality for Azure SQL Database resources including servers, databases, elastic pools, recommendations, operations, and usage metrics.

## Actions

### Queries_ListByDatabase
Gets a list of top queries by database.


```js
azure_sql_queries.Queries_ListByDatabase({
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
* output [TopQueriesListResult](#topquerieslistresult)

### QueryTexts_ListByQuery
Gets a query's text.


```js
azure_sql_queries.QueryTexts_ListByQuery({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * queryId **required** `string`: The id of the query

#### Output
* output [QueryTextListResult](#querytextlistresult)

### QueryStatistics_ListByQuery
Lists a query's statistics.


```js
azure_sql_queries.QueryStatistics_ListByQuery({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * queryId **required** `string`: The id of the query

#### Output
* output [QueryStatisticListResult](#querystatisticlistresult)



## Definitions

### QueryInterval
* QueryInterval `object`: A database query.
  * executionCount `number`: The number of times the query was executed during this interval.
  * intervalStartTime `string`: The start time of the measurement interval (ISO8601 format).
  * metrics `array`: The list of query metrics during this interval.
    * items [QueryMetric](#querymetric)

### QueryMetric
* QueryMetric `object`: A database query.
  * displayName `string`: The name of the metric for display in user interface
  * name `string`: The name of the metric
  * unit `string` (values: percentage, KB, microseconds): The unit of measurement
  * value `number`: The measured value

### QueryStatistic
* QueryStatistic `object`: A database query.
  * intervals `array`: The list of query intervals.
    * items [QueryInterval](#queryinterval)
  * queryId `string`: The id of the query

### QueryStatisticListResult
* QueryStatisticListResult `object`: Represents the response to a get query request.
  * value **required** `array`: The query.
    * items [QueryStatistic](#querystatistic)

### QueryText
* QueryText `object`
  * name `string`: Resource name.
  * queryText `string`: Query text.
  * type `string`: Resource type.

### QueryTextListResult
* QueryTextListResult `object`: Represents the response to a get query text request.
  * value **required** `array`: The query text.
    * items [QueryText](#querytext)

### TopQueries
* TopQueries `object`: A database query.
  * aggregationFunction `string` (values: min, max, avg, sum): The function that is used to aggregate each query's metrics.
  * executionType `string` (values: any, regular, irregular, aborted, exception): The execution type that is used to filter the query instances that are returned.
  * intervalType `string`: The duration of the interval (ISO8601 duration format).
  * numberOfTopQueries `number`: The number of requested queries.
  * observationEndTime `string`: The end time for queries that are returned (ISO8601 format)
  * observationStartTime `string`: The start time for queries that are returned (ISO8601 format)
  * observedMetric `string` (values: cpu, io, logio, duration, executionCount): The type of metric to use for ordering the top metrics.
  * queries `array`: The list of queries.
    * items [QueryStatistic](#querystatistic)

### TopQueriesListResult
* TopQueriesListResult `object`: Represents the response to a get top queries request.
  * value **required** `array`: The list of top queries.
    * items [TopQueries](#topqueries)


