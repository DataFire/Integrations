# @datafire/azure_cosmos_db

Client library for Cosmos DB

## Installation and Usage
```bash
npm install --save @datafire/azure_cosmos_db
```
```js
let azure_cosmos_db = require('@datafire/azure_cosmos_db').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_cosmos_db.DatabaseAccounts_CheckNameExists({
  "accountName": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Cosmos DB Database Service Resource Provider REST API

## Actions

### DatabaseAccounts_CheckNameExists
Checks that the Azure Cosmos DB account name already exists. A valid account name may contain only lowercase letters, numbers, and the '-' character, and must be between 3 and 50 characters.


```js
azure_cosmos_db.DatabaseAccounts_CheckNameExists({
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
*Output schema unknown*

### Operations_List
Lists all of the available Cosmos DB Resource Provider operations.


```js
azure_cosmos_db.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [OperationListResult](#operationlistresult)

### DatabaseAccounts_List
Lists all the Azure Cosmos DB database accounts available under the subscription.


```js
azure_cosmos_db.DatabaseAccounts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * subscriptionId **required** `string`: Azure subscription ID.

#### Output
* output [DatabaseAccountsListResult](#databaseaccountslistresult)

### DatabaseAccounts_ListByResourceGroup
Lists all the Azure Cosmos DB database accounts available under the given resource group.


```js
azure_cosmos_db.DatabaseAccounts_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * subscriptionId **required** `string`: Azure subscription ID.

#### Output
* output [DatabaseAccountsListResult](#databaseaccountslistresult)

### DatabaseAccounts_Delete
Deletes an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
*Output schema unknown*

### DatabaseAccounts_Get
Retrieves the properties of an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [DatabaseAccount](#databaseaccount)

### DatabaseAccounts_Patch
Patches the properties of an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "updateParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * updateParameters **required** [DatabaseAccountPatchParameters](#databaseaccountpatchparameters)

#### Output
* output [DatabaseAccount](#databaseaccount)

### DatabaseAccounts_CreateOrUpdate
Creates or updates an Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "createUpdateParameters": {
    "properties": {
      "locations": [],
      "databaseAccountOfferType": ""
    },
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * createUpdateParameters **required** [DatabaseAccountCreateUpdateParameters](#databaseaccountcreateupdateparameters)

#### Output
* output [DatabaseAccount](#databaseaccount)

### Collection_ListMetricDefinitions
Retrieves metric defintions for the given collection.


```js
azure_cosmos_db.Collection_ListMetricDefinitions({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseRid": "",
  "collectionRid": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * collectionRid **required** `string`: Cosmos DB collection rid.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [MetricDefinitionsListResult](#metricdefinitionslistresult)

### Collection_ListMetrics
Retrieves the metrics determined by the given filter for the given database account and collection.


```js
azure_cosmos_db.Collection_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseRid": "",
  "collectionRid": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * collectionRid **required** `string`: Cosmos DB collection rid.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [MetricListResult](#metriclistresult)

### PartitionKeyRangeId_ListMetrics
Retrieves the metrics determined by the given filter for the given partition key range id.


```js
azure_cosmos_db.PartitionKeyRangeId_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseRid": "",
  "collectionRid": "",
  "partitionKeyRangeId": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * collectionRid **required** `string`: Cosmos DB collection rid.
  * partitionKeyRangeId **required** `string`: Partition Key Range Id for which to get data.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [PartitionMetricListResult](#partitionmetriclistresult)

### CollectionPartition_ListMetrics
Retrieves the metrics determined by the given filter for the given collection, split by partition.


```js
azure_cosmos_db.CollectionPartition_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseRid": "",
  "collectionRid": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * collectionRid **required** `string`: Cosmos DB collection rid.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [PartitionMetricListResult](#partitionmetriclistresult)

### CollectionPartition_ListUsages
Retrieves the usages (most recent storage data) for the given collection, split by partition.


```js
azure_cosmos_db.CollectionPartition_ListUsages({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseRid": "",
  "collectionRid": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * collectionRid **required** `string`: Cosmos DB collection rid.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter `string`: An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).

#### Output
* output [PartitionUsagesResult](#partitionusagesresult)

### Collection_ListUsages
Retrieves the usages (most recent storage data) for the given collection.


```js
azure_cosmos_db.Collection_ListUsages({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseRid": "",
  "collectionRid": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * collectionRid **required** `string`: Cosmos DB collection rid.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter `string`: An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).

#### Output
* output [UsagesResult](#usagesresult)

### Database_ListMetricDefinitions
Retrieves metric defintions for the given database.


```js
azure_cosmos_db.Database_ListMetricDefinitions({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseRid": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [MetricDefinitionsListResult](#metricdefinitionslistresult)

### Database_ListMetrics
Retrieves the metrics determined by the given filter for the given database account and database.


```js
azure_cosmos_db.Database_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseRid": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [MetricListResult](#metriclistresult)

### Database_ListUsages
Retrieves the usages (most recent data) for the given database.


```js
azure_cosmos_db.Database_ListUsages({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseRid": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter `string`: An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).

#### Output
* output [UsagesResult](#usagesresult)

### DatabaseAccounts_FailoverPriorityChange
Changes the failover priority for the Azure Cosmos DB database account. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.


```js
azure_cosmos_db.DatabaseAccounts_FailoverPriorityChange({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "failoverParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * failoverParameters **required** [FailoverPolicies](#failoverpolicies)

#### Output
*Output schema unknown*

### DatabaseAccounts_ListConnectionStrings
Lists the connection strings for the specified Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_ListConnectionStrings({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [DatabaseAccountListConnectionStringsResult](#databaseaccountlistconnectionstringsresult)

### DatabaseAccounts_ListKeys
Lists the access keys for the specified Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_ListKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [DatabaseAccountListKeysResult](#databaseaccountlistkeysresult)

### DatabaseAccounts_ListMetricDefinitions
Retrieves metric defintions for the given database account.


```js
azure_cosmos_db.DatabaseAccounts_ListMetricDefinitions({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [MetricDefinitionsListResult](#metricdefinitionslistresult)

### DatabaseAccounts_ListMetrics
Retrieves the metrics determined by the given filter for the given database account.


```js
azure_cosmos_db.DatabaseAccounts_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [MetricListResult](#metriclistresult)

### DatabaseAccounts_OfflineRegion
Offline the specified region for the specified Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_OfflineRegion({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "regionParameterForOffline": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * regionParameterForOffline **required** [RegionForOnlineOffline](#regionforonlineoffline)

#### Output
*Output schema unknown*

### DatabaseAccounts_OnlineRegion
Online the specified region for the specified Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_OnlineRegion({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "regionParameterForOnline": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * regionParameterForOnline **required** [RegionForOnlineOffline](#regionforonlineoffline)

#### Output
*Output schema unknown*

### Percentile_ListMetrics
Retrieves the metrics determined by the given filter for the given database account. This url is only for PBS and Replication Latency data


```js
azure_cosmos_db.Percentile_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [PercentileMetricListResult](#percentilemetriclistresult)

### DatabaseAccounts_ListReadOnlyKeys
Lists the read-only access keys for the specified Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_ListReadOnlyKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [DatabaseAccountListReadOnlyKeysResult](#databaseaccountlistreadonlykeysresult)

### DatabaseAccounts_RegenerateKey
Regenerates an access key for the specified Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_RegenerateKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "keyToRegenerate": {
    "keyKind": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * keyToRegenerate **required** [DatabaseAccountRegenerateKeyParameters](#databaseaccountregeneratekeyparameters)

#### Output
*Output schema unknown*

### CollectionRegion_ListMetrics
Retrieves the metrics determined by the given filter for the given database account, collection and region.


```js
azure_cosmos_db.CollectionRegion_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "region": "",
  "databaseRid": "",
  "collectionRid": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * region **required** `string`: Cosmos DB region, with spaces between words and each word capitalized.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * collectionRid **required** `string`: Cosmos DB collection rid.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [MetricListResult](#metriclistresult)

### PartitionKeyRangeIdRegion_ListMetrics
Retrieves the metrics determined by the given filter for the given partition key range id and region.


```js
azure_cosmos_db.PartitionKeyRangeIdRegion_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "region": "",
  "databaseRid": "",
  "collectionRid": "",
  "partitionKeyRangeId": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * region **required** `string`: Cosmos DB region, with spaces between words and each word capitalized.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * collectionRid **required** `string`: Cosmos DB collection rid.
  * partitionKeyRangeId **required** `string`: Partition Key Range Id for which to get data.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [PartitionMetricListResult](#partitionmetriclistresult)

### CollectionPartitionRegion_ListMetrics
Retrieves the metrics determined by the given filter for the given collection and region, split by partition.


```js
azure_cosmos_db.CollectionPartitionRegion_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "region": "",
  "databaseRid": "",
  "collectionRid": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * region **required** `string`: Cosmos DB region, with spaces between words and each word capitalized.
  * databaseRid **required** `string`: Cosmos DB database rid.
  * collectionRid **required** `string`: Cosmos DB collection rid.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [PartitionMetricListResult](#partitionmetriclistresult)

### DatabaseAccountRegion_ListMetrics
Retrieves the metrics determined by the given filter for the given database account and region.


```js
azure_cosmos_db.DatabaseAccountRegion_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "region": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * region **required** `string`: Cosmos DB region, with spaces between words and each word capitalized.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [MetricListResult](#metriclistresult)

### PercentileSourceTarget_ListMetrics
Retrieves the metrics determined by the given filter for the given account, source and target region. This url is only for PBS and Replication Latency data


```js
azure_cosmos_db.PercentileSourceTarget_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "sourceRegion": "",
  "targetRegion": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * sourceRegion **required** `string`: Source region from which data is written. Cosmos DB region, with spaces between words and each word capitalized.
  * targetRegion **required** `string`: Target region to which data is written. Cosmos DB region, with spaces between words and each word capitalized.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [PercentileMetricListResult](#percentilemetriclistresult)

### PercentileTarget_ListMetrics
Retrieves the metrics determined by the given filter for the given account target region. This url is only for PBS and Replication Latency data


```js
azure_cosmos_db.PercentileTarget_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "targetRegion": "",
  "api-version": "",
  "$filter": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * targetRegion **required** `string`: Target region to which data is written. Cosmos DB region, with spaces between words and each word capitalized.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [PercentileMetricListResult](#percentilemetriclistresult)

### DatabaseAccounts_ListUsages
Retrieves the usages (most recent data) for the given database account.


```js
azure_cosmos_db.DatabaseAccounts_ListUsages({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * $filter `string`: An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).

#### Output
* output [UsagesResult](#usagesresult)



## Definitions

### Capability
* Capability `object`: Cosmos DB capability object
  * name `string`: Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin".

### ConsistencyPolicy
* ConsistencyPolicy `object`: The consistency policy for the Cosmos DB database account.
  * defaultConsistencyLevel **required** `string` (values: Eventual, Session, BoundedStaleness, Strong, ConsistentPrefix): The default consistency level and configuration settings of the Cosmos DB account.
  * maxIntervalInSeconds `integer`: When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
  * maxStalenessPrefix `integer`: When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.

### DatabaseAccount
* DatabaseAccount `object`: An Azure Cosmos DB database account.
  * kind `string` (values: GlobalDocumentDB, MongoDB, Parse): Indicates the type of database account. This can only be set at database account creation.
  * properties [DatabaseAccountProperties](#databaseaccountproperties)
  * id `string`: The unique resource identifier of the database account.
  * location **required** `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the database account.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### DatabaseAccountConnectionString
* DatabaseAccountConnectionString `object`: Connection string for the Cosmos DB account
  * connectionString `string`: Value of the connection string
  * description `string`: Description of the connection string

### DatabaseAccountCreateUpdateParameters
* DatabaseAccountCreateUpdateParameters `object`: Parameters to create and update Cosmos DB database accounts.
  * kind `string` (values: GlobalDocumentDB, MongoDB, Parse): Indicates the type of database account. This can only be set at database account creation.
  * properties **required** [DatabaseAccountCreateUpdateProperties](#databaseaccountcreateupdateproperties)
  * id `string`: The unique resource identifier of the database account.
  * location **required** `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the database account.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### DatabaseAccountCreateUpdateProperties
* DatabaseAccountCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB database accounts.
  * capabilities `array`: List of Cosmos DB capabilities for the account
    * items [Capability](#capability)
  * consistencyPolicy [ConsistencyPolicy](#consistencypolicy)
  * databaseAccountOfferType **required** [DatabaseAccountOfferType](#databaseaccountoffertype)
  * enableAutomaticFailover `boolean`: Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
  * ipRangeFilter [IPRangeFilter](#iprangefilter)
  * isVirtualNetworkFilterEnabled `boolean`: Flag to indicate whether to enable/disable Virtual Network ACL rules.
  * locations **required** `array`: An array that contains the georeplication locations enabled for the Cosmos DB account.
    * items [Location](#location)
  * virtualNetworkRules `array`: List of Virtual Network ACL rules configured for the Cosmos DB account.
    * items [VirtualNetworkRule](#virtualnetworkrule)

### DatabaseAccountListConnectionStringsResult
* DatabaseAccountListConnectionStringsResult `object`: The connection strings for the given database account.
  * connectionStrings `array`: An array that contains the connection strings for the Cosmos DB account.
    * items [DatabaseAccountConnectionString](#databaseaccountconnectionstring)

### DatabaseAccountListKeysResult
* DatabaseAccountListKeysResult `object`: The access keys for the given database account.
  * primaryMasterKey `string`: Base 64 encoded value of the primary read-write key.
  * properties [DatabaseAccountListReadOnlyKeysResult](#databaseaccountlistreadonlykeysresult)
  * secondaryMasterKey `string`: Base 64 encoded value of the secondary read-write key.

### DatabaseAccountListReadOnlyKeysResult
* DatabaseAccountListReadOnlyKeysResult `object`: The read-only access keys for the given database account.
  * primaryReadonlyMasterKey `string`: Base 64 encoded value of the primary read-only key.
  * secondaryReadonlyMasterKey `string`: Base 64 encoded value of the secondary read-only key.

### DatabaseAccountOfferType
* DatabaseAccountOfferType `string` (values: Standard): The offer type for the Cosmos DB database account.

### DatabaseAccountPatchParameters
* DatabaseAccountPatchParameters `object`: Parameters for patching Azure Cosmos DB database account properties.
  * properties [DatabaseAccountPatchProperties](#databaseaccountpatchproperties)
  * tags [Tags](#tags)

### DatabaseAccountPatchProperties
* DatabaseAccountPatchProperties `object`: Properties to update Azure Cosmos DB database accounts.
  * capabilities `array`: List of Cosmos DB capabilities for the account
    * items [Capability](#capability)

### DatabaseAccountProperties
* DatabaseAccountProperties `object`: Properties for the database account.
  * capabilities `array`: List of Cosmos DB capabilities for the account
    * items [Capability](#capability)
  * consistencyPolicy [ConsistencyPolicy](#consistencypolicy)
  * databaseAccountOfferType [DatabaseAccountOfferType](#databaseaccountoffertype)
  * documentEndpoint `string`: The connection endpoint for the Cosmos DB database account.
  * enableAutomaticFailover `boolean`: Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
  * failoverPolicies `array`: An array that contains the regions ordered by their failover priorities.
    * items [FailoverPolicy](#failoverpolicy)
  * ipRangeFilter [IPRangeFilter](#iprangefilter)
  * isVirtualNetworkFilterEnabled `boolean`: Flag to indicate whether to enable/disable Virtual Network ACL rules.
  * provisioningState [ProvisioningState](#provisioningstate)
  * readLocations `array`: An array that contains of the read locations enabled for the Cosmos DB account.
    * items [Location](#location)
  * virtualNetworkRules `array`: List of Virtual Network ACL rules configured for the Cosmos DB account.
    * items [VirtualNetworkRule](#virtualnetworkrule)
  * writeLocations `array`: An array that contains the write location for the Cosmos DB account.
    * items [Location](#location)

### DatabaseAccountRegenerateKeyParameters
* DatabaseAccountRegenerateKeyParameters `object`: Parameters to regenerate the keys within the database account.
  * keyKind **required** `string` (values: primary, secondary, primaryReadonly, secondaryReadonly): The access key to regenerate.

### DatabaseAccountsListResult
* DatabaseAccountsListResult `object`: The List operation response, that contains the database accounts and their properties.
  * value `array`: List of database account and their properties.
    * items [DatabaseAccount](#databaseaccount)

### ErrorResponse
* ErrorResponse `object`: Error Response.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### FailoverPolicies
* FailoverPolicies `object`: The list of new failover policies for the failover priority change.
  * failoverPolicies **required** `array`: List of failover policies.
    * items [FailoverPolicy](#failoverpolicy)

### FailoverPolicy
* FailoverPolicy `object`: The failover policy for a given region of a database account.
  * failoverPriority `integer`: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
  * id `string`: The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;.
  * locationName `string`: The name of the region in which the database account exists.

### IPRangeFilter
* IPRangeFilter `string`: Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.

### Location
* Location `object`: A region in which the Azure Cosmos DB database account is deployed.
  * documentEndpoint `string`: The connection endpoint for the specific region. Example: https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/
  * failoverPriority `integer`: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
  * id `string`: The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
  * locationName `string`: The name of the region.
  * provisioningState [ProvisioningState](#provisioningstate)

### Metric
* Metric `object`: Metric data
  * endTime `string`: The end time for the metric (ISO-8601 format).
  * metricValues `array`: The metric values for the specified time window and timestep.
    * items [MetricValue](#metricvalue)
  * name [MetricName](#metricname)
  * startTime `string`: The start time for the metric (ISO-8601 format).
  * timeGrain `string`: The time grain to be used to summarize the metric values.
  * unit [UnitType](#unittype)

### MetricAvailability
* MetricAvailability `object`: The availability of the metric.
  * retention `string`: The retention for the metric values.
  * timeGrain `string`: The time grain to be used to summarize the metric values.

### MetricDefinition
* MetricDefinition `object`: The definition of a metric.
  * metricAvailabilities `array`: The list of metric availabilities for the account.
    * items [MetricAvailability](#metricavailability)
  * name [MetricName](#metricname)
  * primaryAggregationType `string` (values: None, Average, Total, Minimimum, Maximum, Last): The primary aggregation type of the metric.
  * resourceUri `string`: The resource uri of the database.
  * unit [UnitType](#unittype)

### MetricDefinitionsListResult
* MetricDefinitionsListResult `object`: The response to a list metric definitions request.
  * value `array`: The list of metric definitions for the account.
    * items [MetricDefinition](#metricdefinition)

### MetricListResult
* MetricListResult `object`: The response to a list metrics request.
  * value `array`: The list of metrics for the account.
    * items [Metric](#metric)

### MetricName
* MetricName `object`: A metric name.
  * localizedValue `string`: The friendly name of the metric.
  * value `string`: The name of the metric.

### MetricValue
* MetricValue `object`: Represents metrics values.
  * _count `number`: The number of values for the metric.
  * average `number`: The average value of the metric.
  * maximum `number`: The max value of the metric.
  * minimum `number`: The min value of the metric.
  * timestamp `string`: The metric timestamp (ISO-8601 format).
  * total `number`: The total value of the metric.

### Operation
* Operation `object`: REST API operation
  * display `object`: The object that represents the operation.
    * Description `string`: Description of operation
    * Operation `string`: Operation type: Read, write, delete, etc.
    * Provider `string`: Service provider: Microsoft.ResourceProvider
    * Resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the Resource Provider.
    * items [Operation](#operation)

### PartitionMetric
* PartitionMetric `object`: The metric values for a single partition.
  * partitionId `string`: The parition id (GUID identifier) of the metric values.
  * partitionKeyRangeId `string`: The partition key range id (integer identifier) of the metric values.
  * endTime `string`: The end time for the metric (ISO-8601 format).
  * metricValues `array`: The metric values for the specified time window and timestep.
    * items [MetricValue](#metricvalue)
  * name [MetricName](#metricname)
  * startTime `string`: The start time for the metric (ISO-8601 format).
  * timeGrain `string`: The time grain to be used to summarize the metric values.
  * unit [UnitType](#unittype)

### PartitionMetricListResult
* PartitionMetricListResult `object`: The response to a list partition metrics request.
  * value `array`: The list of partition-level metrics for the account.
    * items [PartitionMetric](#partitionmetric)

### PartitionUsage
* PartitionUsage `object`: The partition level usage data for a usage request.
  * partitionId `string`: The parition id (GUID identifier) of the usages.
  * partitionKeyRangeId `string`: The partition key range id (integer identifier) of the usages.
  * currentValue `integer`: Current value for this metric
  * limit `integer`: Maximum value for this metric
  * name [MetricName](#metricname)
  * quotaPeriod `string`: The quota period used to summarize the usage values.
  * unit [UnitType](#unittype)

### PartitionUsagesResult
* PartitionUsagesResult `object`: The response to a list partition level usage request.
  * value `array`: The list of partition-level usages for the database. A usage is a point in time metric
    * items [PartitionUsage](#partitionusage)

### PercentileMetric
* PercentileMetric `object`: Percentile Metric data
  * endTime `string`: The end time for the metric (ISO-8601 format).
  * metricValues `array`: The percentile metric values for the specified time window and timestep.
    * items [PercentileMetricValue](#percentilemetricvalue)
  * name [MetricName](#metricname)
  * startTime `string`: The start time for the metric (ISO-8601 format).
  * timeGrain `string`: The time grain to be used to summarize the metric values.
  * unit [UnitType](#unittype)

### PercentileMetricListResult
* PercentileMetricListResult `object`: The response to a list percentile metrics request.
  * value `array`: The list of percentile metrics for the account.
    * items [PercentileMetric](#percentilemetric)

### PercentileMetricValue
* PercentileMetricValue `object`: Represents percentile metrics values.
  * P10 `number`: The 10th percentile value for the metric.
  * P25 `number`: The 25th percentile value for the metric.
  * P50 `number`: The 50th percentile value for the metric.
  * P75 `number`: The 75th percentile value for the metric.
  * P90 `number`: The 90th percentile value for the metric.
  * P95 `number`: The 95th percentile value for the metric.
  * P99 `number`: The 99th percentile value for the metric.
  * _count `number`: The number of values for the metric.
  * average `number`: The average value of the metric.
  * maximum `number`: The max value of the metric.
  * minimum `number`: The min value of the metric.
  * timestamp `string`: The metric timestamp (ISO-8601 format).
  * total `number`: The total value of the metric.

### ProvisioningState
* ProvisioningState `string`: The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation.

### RegionForOnlineOffline
* RegionForOnlineOffline `object`: Cosmos DB region to online or offline.
  * region **required** `string`: Cosmos DB region, with spaces between words and each word capitalized.

### Resource
* Resource `object`: A database account resource.
  * id `string`: The unique resource identifier of the database account.
  * location **required** `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the database account.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### Tags
* Tags `object`: Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".

### UnitType
* UnitType `string` (values: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond, Milliseconds): The unit of the metric.

### Usage
* Usage `object`: The usage data for a usage request.
  * currentValue `integer`: Current value for this metric
  * limit `integer`: Maximum value for this metric
  * name [MetricName](#metricname)
  * quotaPeriod `string`: The quota period used to summarize the usage values.
  * unit [UnitType](#unittype)

### UsagesResult
* UsagesResult `object`: The response to a list usage request.
  * value `array`: The list of usages for the database. A usage is a point in time metric
    * items [Usage](#usage)

### VirtualNetworkRule
* VirtualNetworkRule `object`: Virtual Network ACL Rule object
  * id `string`: Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}.


