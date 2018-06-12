# @datafire/azure_sql_sql_core

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_sql_core
```
```js
let azure_sql_sql_core = require('@datafire/azure_sql_sql_core').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_sql_core.ServiceTierAdvisors_ListByDatabase({
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

Provides create, read, update and delete functionality for Azure SQL Database resources including recommendations and operations.

## Actions

### ServiceTierAdvisors_ListByDatabase
Returns service tier advisors for specified database.


```js
azure_sql_sql_core.ServiceTierAdvisors_ListByDatabase({
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
  * databaseName **required** `string`: The name of database.

#### Output
* output [ServiceTierAdvisorListResult](#servicetieradvisorlistresult)

### ServiceTierAdvisors_Get
Gets a service tier advisor.


```js
azure_sql_sql_core.ServiceTierAdvisors_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "serviceTierAdvisorName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of database.
  * serviceTierAdvisorName **required** `string`: The name of service tier advisor.

#### Output
* output [ServiceTierAdvisor](#servicetieradvisor)

### TransparentDataEncryptions_Get
Gets a database's transparent data encryption configuration.


```js
azure_sql_sql_core.TransparentDataEncryptions_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "transparentDataEncryptionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which the transparent data encryption applies.
  * transparentDataEncryptionName **required** `string` (values: current): The name of the transparent data encryption configuration.

#### Output
* output [TransparentDataEncryption](#transparentdataencryption)

### TransparentDataEncryptions_CreateOrUpdate
Creates or updates a database's transparent data encryption configuration.


```js
azure_sql_sql_core.TransparentDataEncryptions_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "transparentDataEncryptionName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which setting the transparent data encryption applies.
  * transparentDataEncryptionName **required** `string` (values: current): The name of the transparent data encryption configuration.
  * parameters **required** [TransparentDataEncryption](#transparentdataencryption)

#### Output
* output [TransparentDataEncryption](#transparentdataencryption)

### TransparentDataEncryptionActivities_ListByConfiguration
Returns a database's transparent data encryption operation result.


```js
azure_sql_sql_core.TransparentDataEncryptionActivities_ListByConfiguration({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "transparentDataEncryptionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which the transparent data encryption applies.
  * transparentDataEncryptionName **required** `string` (values: current): The name of the transparent data encryption configuration.

#### Output
* output [TransparentDataEncryptionActivityListResult](#transparentdataencryptionactivitylistresult)

### ElasticPoolActivities_ListByElasticPool
Returns elastic pool activities.


```js
azure_sql_sql_core.ElasticPoolActivities_ListByElasticPool({
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
  * elasticPoolName **required** `string`: The name of the elastic pool for which to get the current activity.

#### Output
* output [ElasticPoolActivityListResult](#elasticpoolactivitylistresult)

### ElasticPoolDatabaseActivities_ListByElasticPool
Returns activity on databases inside of an elastic pool.


```js
azure_sql_sql_core.ElasticPoolDatabaseActivities_ListByElasticPool({
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
* output [ElasticPoolDatabaseActivityListResult](#elasticpooldatabaseactivitylistresult)



## Definitions

### ElasticPoolActivity
* ElasticPoolActivity `object`: Represents the activity on an elastic pool.
  * location `string`: The geo-location where the resource lives
  * properties [ElasticPoolActivityProperties](#elasticpoolactivityproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ElasticPoolActivityListResult
* ElasticPoolActivityListResult `object`: Represents the response to a list elastic pool activity request.
  * value **required** `array`: The list of elastic pool activities.
    * items [ElasticPoolActivity](#elasticpoolactivity)

### ElasticPoolActivityProperties
* ElasticPoolActivityProperties `object`: Represents the properties of an elastic pool.
  * elasticPoolName `string`: The name of the elastic pool.
  * endTime `string`: The time the operation finished (ISO8601 format).
  * errorCode `integer`: The error code if available.
  * errorMessage `string`: The error message if available.
  * errorSeverity `integer`: The error severity if available.
  * operation `string`: The operation name.
  * operationId `string`: The unique operation ID.
  * percentComplete `integer`: The percentage complete if available.
  * requestedDatabaseDtuCap `integer`: The requested per database DTU cap.
  * requestedDatabaseDtuGuarantee `integer`: The requested per database DTU guarantee.
  * requestedDatabaseDtuMax `integer`: The requested max DTU per database if available.
  * requestedDatabaseDtuMin `integer`: The requested min DTU per database if available.
  * requestedDtu `integer`: The requested DTU for the pool if available.
  * requestedDtuGuarantee `integer`: The requested DTU guarantee.
  * requestedElasticPoolName `string`: The requested name for the elastic pool if available.
  * requestedStorageLimitInGB `integer`: The requested storage limit for the pool in GB if available.
  * requestedStorageLimitInMB `integer`: The requested storage limit in MB.
  * serverName `string`: The name of the server the elastic pool is in.
  * startTime `string`: The time the operation started (ISO8601 format).
  * state `string`: The current state of the operation.

### ElasticPoolDatabaseActivity
* ElasticPoolDatabaseActivity `object`: Represents the activity on an elastic pool.
  * location `string`: The geo-location where the resource lives
  * properties [ElasticPoolDatabaseActivityProperties](#elasticpooldatabaseactivityproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ElasticPoolDatabaseActivityListResult
* ElasticPoolDatabaseActivityListResult `object`: Represents the response to a list elastic pool database activity request.
  * value **required** `array`: The list of elastic pool database activities.
    * items [ElasticPoolDatabaseActivity](#elasticpooldatabaseactivity)

### ElasticPoolDatabaseActivityProperties
* ElasticPoolDatabaseActivityProperties `object`: Represents the properties of an elastic pool database activity.
  * currentElasticPoolName `string`: The name of the current elastic pool the database is in if available.
  * currentServiceObjective `string`: The name of the current service objective if available.
  * databaseName `string`: The database name.
  * endTime `string`: The time the operation finished (ISO8601 format).
  * errorCode `integer`: The error code if available.
  * errorMessage `string`: The error message if available.
  * errorSeverity `integer`: The error severity if available.
  * operation `string`: The operation name.
  * operationId `string`: The unique operation ID.
  * percentComplete `integer`: The percentage complete if available.
  * requestedElasticPoolName `string`: The name for the elastic pool the database is moving into if available.
  * requestedServiceObjective `string`: The name of the requested service objective if available.
  * serverName `string`: The name of the server the elastic pool is in.
  * startTime `string`: The time the operation started (ISO8601 format).
  * state `string`: The current state of the operation.

### OperationImpact
* OperationImpact `object`: The impact of an operation, both in absolute and relative terms.
  * changeValueAbsolute `number`: The absolute impact to dimension.
  * changeValueRelative `number`: The relative impact to dimension (null if not applicable)
  * name `string`: The name of the impact dimension.
  * unit `string`: The unit in which estimated impact to dimension is measured.

### RecommendedIndex
* RecommendedIndex `object`: Represents a database recommended index.
  * properties [RecommendedIndexProperties](#recommendedindexproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RecommendedIndexProperties
* RecommendedIndexProperties `object`: Represents the properties of a database recommended index.
  * action `string` (values: Create, Drop, Rebuild): The proposed index action. You can create a missing index, drop an unused index, or rebuild an existing index to improve its performance.
  * columns `array`: Columns over which to build index
    * items `string`
  * created `string`: The UTC datetime showing when this resource was created (ISO8601 format).
  * estimatedImpact `array`: The estimated impact of doing recommended index action.
    * items [OperationImpact](#operationimpact)
  * includedColumns `array`: The list of column names to be included in the index
    * items `string`
  * indexScript `string`: The full build index script
  * indexType `string` (values: CLUSTERED, NONCLUSTERED, COLUMNSTORE, CLUSTERED COLUMNSTORE): The type of index (CLUSTERED, NONCLUSTERED, COLUMNSTORE, CLUSTERED COLUMNSTORE)
  * lastModified `string`: The UTC datetime of when was this resource last changed (ISO8601 format).
  * reportedImpact `array`: The values reported after index action is complete.
    * items [OperationImpact](#operationimpact)
  * schema `string`: The schema where table to build index over resides
  * state `string` (values: Active, Pending, Executing, Verifying, Pending Revert, Reverting, Reverted, Ignored, Expired, Blocked, Success): The current recommendation state.
  * table `string`: The table on which to build index.

### ServiceTierAdvisor
* ServiceTierAdvisor `object`: Represents a Service Tier Advisor.
  * properties [ServiceTierAdvisorProperties](#servicetieradvisorproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServiceTierAdvisorListResult
* ServiceTierAdvisorListResult `object`: Represents the response to a list service tier advisor request.
  * value **required** `array`: The list of service tier advisors for specified database.
    * items [ServiceTierAdvisor](#servicetieradvisor)

### ServiceTierAdvisorProperties
* ServiceTierAdvisorProperties `object`: Represents the properties of a Service Tier Advisor.
  * activeTimeRatio `number`: The activeTimeRatio for service tier advisor.
  * avgDtu `number`: Gets or sets avgDtu for service tier advisor.
  * confidence `number`: Gets or sets confidence for service tier advisor.
  * currentServiceLevelObjective `string`: Gets or sets currentServiceLevelObjective for service tier advisor.
  * currentServiceLevelObjectiveId `string`: Gets or sets currentServiceLevelObjectiveId for service tier advisor.
  * databaseSizeBasedRecommendationServiceLevelObjective `string`: Gets or sets databaseSizeBasedRecommendationServiceLevelObjective for service tier advisor.
  * databaseSizeBasedRecommendationServiceLevelObjectiveId `string`: Gets or sets databaseSizeBasedRecommendationServiceLevelObjectiveId for service tier advisor.
  * disasterPlanBasedRecommendationServiceLevelObjective `string`: Gets or sets disasterPlanBasedRecommendationServiceLevelObjective for service tier advisor.
  * disasterPlanBasedRecommendationServiceLevelObjectiveId `string`: Gets or sets disasterPlanBasedRecommendationServiceLevelObjectiveId for service tier advisor.
  * maxDtu `number`: Gets or sets maxDtu for service tier advisor.
  * maxSizeInGB `number`: Gets or sets maxSizeInGB for service tier advisor.
  * minDtu `number`: Gets or sets minDtu for service tier advisor.
  * observationPeriodEnd `string`: The observation period start (ISO8601 format).
  * observationPeriodStart `string`: The observation period start (ISO8601 format).
  * overallRecommendationServiceLevelObjective `string`: Gets or sets overallRecommendationServiceLevelObjective for service tier advisor.
  * overallRecommendationServiceLevelObjectiveId `string`: Gets or sets overallRecommendationServiceLevelObjectiveId for service tier advisor.
  * serviceLevelObjectiveUsageMetrics `array`: Gets or sets serviceLevelObjectiveUsageMetrics for the service tier advisor.
    * items [SloUsageMetric](#slousagemetric)
  * usageBasedRecommendationServiceLevelObjective `string`: Gets or sets usageBasedRecommendationServiceLevelObjective for service tier advisor.
  * usageBasedRecommendationServiceLevelObjectiveId `string`: Gets or sets usageBasedRecommendationServiceLevelObjectiveId for service tier advisor.

### SloUsageMetric
* SloUsageMetric `object`: A Slo Usage Metric.
  * inRangeTimeRatio `number`: Gets or sets inRangeTimeRatio for SLO usage metric.
  * serviceLevelObjective `string` (values: System, System0, System1, System2, System3, System4, System2L, System3L, System4L, Free, Basic, S0, S1, S2, S3, S4, S6, S7, S9, S12, P1, P2, P3, P4, P6, P11, P15, PRS1, PRS2, PRS4, PRS6, DW100, DW200, DW300, DW400, DW500, DW600, DW1000, DW1200, DW1000c, DW1500, DW1500c, DW2000, DW2000c, DW3000, DW2500c, DW3000c, DW6000, DW5000c, DW6000c, DW7500c, DW10000c, DW15000c, DW30000c, DS100, DS200, DS300, DS400, DS500, DS600, DS1000, DS1200, DS1500, DS2000, ElasticPool): The serviceLevelObjective for SLO usage metric.
  * serviceLevelObjectiveId `string`: The serviceLevelObjectiveId for SLO usage metric.

### TransparentDataEncryption
* TransparentDataEncryption `object`: Represents a database transparent data encryption configuration.
  * location `string`: Resource location.
  * properties [TransparentDataEncryptionProperties](#transparentdataencryptionproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### TransparentDataEncryptionActivity
* TransparentDataEncryptionActivity `object`: Represents a database transparent data encryption Scan.
  * location `string`: Resource location.
  * properties [TransparentDataEncryptionActivityProperties](#transparentdataencryptionactivityproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### TransparentDataEncryptionActivityListResult
* TransparentDataEncryptionActivityListResult `object`: Represents the response to a list database transparent data encryption activity request.
  * value **required** `array`: The list of database transparent data encryption activities.
    * items [TransparentDataEncryptionActivity](#transparentdataencryptionactivity)

### TransparentDataEncryptionActivityProperties
* TransparentDataEncryptionActivityProperties `object`: Represents the properties of a database transparent data encryption Scan.
  * percentComplete `number`: The percent complete of the transparent data encryption scan for a database.
  * status `string` (values: Encrypting, Decrypting): The status of the database.

### TransparentDataEncryptionProperties
* TransparentDataEncryptionProperties `object`: Represents the properties of a database transparent data encryption.
  * status `string` (values: Enabled, Disabled): The status of the database transparent data encryption.


