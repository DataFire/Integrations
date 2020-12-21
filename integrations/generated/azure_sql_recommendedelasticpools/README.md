# @datafire/azure_sql_recommendedelasticpools

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_recommendedelasticpools
```
```js
let azure_sql_recommendedelasticpools = require('@datafire/azure_sql_recommendedelasticpools').create({
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
azure_sql_recommendedelasticpools.RecommendedElasticPools_ListByServer({
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
azure_sql_recommendedelasticpools.RecommendedElasticPools_Get({
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
azure_sql_recommendedelasticpools.RecommendedElasticPools_ListMetrics({
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
    * items `object`: Represents a database.
      * kind `string`: Kind of database.  This is metadata used for the Azure portal experience.
      * properties `object`: Represents the properties of a database.
        * collation `string`: The collation of the database. If createMode is not Default, this value is ignored.
        * containmentState `integer`: The containment state of the database.
        * createMode `string` (values: Copy, Default, NonReadableSecondary, OnlineSecondary, PointInTimeRestore, Recovery, Restore, RestoreLongTermRetentionBackup): Specifies the mode of database creation.
        * creationDate `string`: The creation date of the database (ISO8601 format).
        * currentServiceObjectiveId `string`: The current service level objective ID of the database. This is the ID of the service level objective that is currently active.
        * databaseId `string`: The ID of the database.
        * defaultSecondaryLocation `string`: The default secondary region for this database.
        * earliestRestoreDate `string`: This records the earliest start date and time that restore is available for this database (ISO8601 format).
        * edition `string` (values: Web, Business, Basic, Standard, Premium, PremiumRS, Free, Stretch, DataWarehouse, System, System2, GeneralPurpose, BusinessCritical, Hyperscale): The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.
        * elasticPoolName `string`: The name of the elastic pool the database is in. If elasticPoolName and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveName is ignored. Not supported for DataWarehouse edition.
        * failoverGroupId `string`: The resource identifier of the failover group containing this database.
        * maxSizeBytes `string`: The max size of the database expressed in bytes. If createMode is not Default, this value is ignored. To see possible values, query the capabilities API (/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationID}/capabilities) referred to by operationId: "Capabilities_ListByLocation."
        * readScale `string` (values: Enabled, Disabled): Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition.
        * recommendedIndex `array`: The recommended indices for this database.
          * items `object`: Represents a database recommended index.
        * recoveryServicesRecoveryPointResourceId `string`: Conditional. If createMode is RestoreLongTermRetentionBackup, then this value is required. Specifies the resource ID of the recovery point to restore from.
        * requestedServiceObjectiveId `string`: The configured service level objective ID of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of currentServiceObjectiveId property. If requestedServiceObjectiveId and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveId overrides the value of requestedServiceObjectiveName.
        * requestedServiceObjectiveName `string` (values: System, System0, System1, System2, System3, System4, System2L, System3L, System4L, Free, Basic, S0, S1, S2, S3, S4, S6, S7, S9, S12, P1, P2, P3, P4, P6, P11, P15, PRS1, PRS2, PRS4, PRS6, DW100, DW200, DW300, DW400, DW500, DW600, DW1000, DW1200, DW1000c, DW1500, DW1500c, DW2000, DW2000c, DW3000, DW2500c, DW3000c, DW6000, DW5000c, DW6000c, DW7500c, DW10000c, DW15000c, DW30000c, DS100, DS200, DS300, DS400, DS500, DS600, DS1000, DS1200, DS1500, DS2000, ElasticPool): The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property. 
        * restorePointInTime `string`: Conditional. If createMode is PointInTimeRestore, this value is required. If createMode is Restore, this value is optional. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value.
        * sampleName `string` (values: AdventureWorksLT): Indicates the name of the sample schema to apply when creating this database. If createMode is not Default, this value is ignored. Not supported for DataWarehouse edition.
        * serviceLevelObjective `string` (values: System, System0, System1, System2, System3, System4, System2L, System3L, System4L, Free, Basic, S0, S1, S2, S3, S4, S6, S7, S9, S12, P1, P2, P3, P4, P6, P11, P15, PRS1, PRS2, PRS4, PRS6, DW100, DW200, DW300, DW400, DW500, DW600, DW1000, DW1200, DW1000c, DW1500, DW1500c, DW2000, DW2000c, DW3000, DW2500c, DW3000c, DW6000, DW5000c, DW6000c, DW7500c, DW10000c, DW15000c, DW30000c, DS100, DS200, DS300, DS400, DS500, DS600, DS1000, DS1200, DS1500, DS2000, ElasticPool): The current service level objective of the database.
        * serviceTierAdvisors `array`: The list of service tier advisors for this database. Expanded property
          * items `object`: Represents a Service Tier Advisor.
        * sourceDatabaseDeletionDate `string`: Conditional. If createMode is Restore and sourceDatabaseId is the deleted database's original resource id when it existed (as opposed to its current restorable dropped database id), then this value is required. Specifies the time that the database was deleted.
        * sourceDatabaseId `string`: Conditional. If createMode is Copy, NonReadableSecondary, OnlineSecondary, PointInTimeRestore, Recovery, or Restore, then this value is required. Specifies the resource ID of the source database. If createMode is NonReadableSecondary or OnlineSecondary, the name of the source database must be the same as the new database being created.
        * status `string`: The status of the database.
        * transparentDataEncryption `array`: The transparent data encryption info for this database.
          * items `object`: Represents a database transparent data encryption configuration.
        * zoneRedundant `boolean`: Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
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


