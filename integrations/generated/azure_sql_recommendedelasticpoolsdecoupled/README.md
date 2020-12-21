# @datafire/azure_sql_recommendedelasticpoolsdecoupled

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_recommendedelasticpoolsdecoupled
```
```js
let azure_sql_recommendedelasticpoolsdecoupled = require('@datafire/azure_sql_recommendedelasticpoolsdecoupled').create({
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

Provides create, read, update and delete functionality for Azure SQL Database resources including recommendations and operations.

## Actions

### RecommendedElasticPools_ListByServer
Returns recommended elastic pools.


```js
azure_sql_recommendedelasticpoolsdecoupled.RecommendedElasticPools_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [RecommendedElasticPoolListResult](#recommendedelasticpoollistresult)

### RecommendedElasticPools_Get
Gets a recommended elastic pool.


```js
azure_sql_recommendedelasticpoolsdecoupled.RecommendedElasticPools_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "recommendedElasticPoolName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * recommendedElasticPoolName **required** `string`: The name of the recommended elastic pool to be retrieved.

#### Output
* output [RecommendedElasticPool](#recommendedelasticpool)

### RecommendedElasticPools_ListMetrics
Returns recommended elastic pool metrics.


```js
azure_sql_recommendedelasticpoolsdecoupled.RecommendedElasticPools_ListMetrics({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "recommendedElasticPoolName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * recommendedElasticPoolName **required** `string`: The name of the recommended elastic pool to be retrieved.

#### Output
* output [RecommendedElasticPoolListMetricsResult](#recommendedelasticpoollistmetricsresult)



## Definitions

### RecommendedElasticPool
* RecommendedElasticPool `object`: Represents a recommended elastic pool.
  * properties [RecommendedElasticPoolProperties](#recommendedelasticpoolproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RecommendedElasticPoolListMetricsResult
* RecommendedElasticPoolListMetricsResult `object`: Represents the response to a list recommended elastic pool metrics request.
  * value **required** `array`: The list of recommended elastic pools metrics.
    * items [RecommendedElasticPoolMetric](#recommendedelasticpoolmetric)

### RecommendedElasticPoolListResult
* RecommendedElasticPoolListResult `object`: Represents the response to a list recommended elastic pool request.
  * value **required** `array`: The list of recommended elastic pools hosted in the server.
    * items [RecommendedElasticPool](#recommendedelasticpool)

### RecommendedElasticPoolMetric
* RecommendedElasticPoolMetric `object`: Represents recommended elastic pool metric.
  * dateTime `string`: The time of metric (ISO8601 format).
  * dtu `number`: Gets or sets the DTUs (Database Transaction Units). See https://azure.microsoft.com/documentation/articles/sql-database-what-is-a-dtu/
  * sizeGB `number`: Gets or sets size in gigabytes.

### RecommendedElasticPoolProperties
* RecommendedElasticPoolProperties `object`: Represents the properties of a recommended elastic pool.
  * databaseDtuMax `number`: The maximum DTU for the database.
  * databaseDtuMin `number`: The minimum DTU for the database.
  * databaseEdition `string` (values: Basic, Standard, Premium, GeneralPurpose, BusinessCritical): The edition of the recommended elastic pool. The ElasticPoolEdition enumeration contains all the valid editions.
  * databases `array`: The list of databases in this pool. Expanded property
    * items `object`: ARM tracked top level resource.
      * location **required** `string`: Resource location.
      * tags `object`: Resource tags.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type.
  * dtu `number`: The DTU for the recommended elastic pool.
  * maxObservedDtu `number`: Gets maximum observed DTU.
  * maxObservedStorageMB `number`: Gets maximum observed storage in megabytes.
  * metrics `array`: The list of databases housed in the server. Expanded property
    * items [RecommendedElasticPoolMetric](#recommendedelasticpoolmetric)
  * observationPeriodEnd `string`: The observation period start (ISO8601 format).
  * observationPeriodStart `string`: The observation period start (ISO8601 format).
  * storageMB `number`: Gets storage size in megabytes.


