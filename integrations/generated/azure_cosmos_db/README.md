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

.then(data => {
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [DatabaseAccountGetResults](#databaseaccountgetresults)

### DatabaseAccounts_Update
Updates the properties of an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_Update({
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * updateParameters **required** [DatabaseAccountUpdateParameters](#databaseaccountupdateparameters)

#### Output
* output [DatabaseAccountGetResults](#databaseaccountgetresults)

### DatabaseAccounts_CreateOrUpdate
Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.


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
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateParameters **required** [DatabaseAccountCreateUpdateParameters](#databaseaccountcreateupdateparameters)

#### Output
* output [DatabaseAccountGetResults](#databaseaccountgetresults)

### CassandraResources_ListCassandraKeyspaces
Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.CassandraResources_ListCassandraKeyspaces({
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [CassandraKeyspaceListResult](#cassandrakeyspacelistresult)

### CassandraResources_DeleteCassandraKeyspace
Deletes an existing Azure Cosmos DB Cassandra keyspace.


```js
azure_cosmos_db.CassandraResources_DeleteCassandraKeyspace({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### CassandraResources_GetCassandraKeyspace
Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.CassandraResources_GetCassandraKeyspace({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [CassandraKeyspaceGetResults](#cassandrakeyspacegetresults)

### CassandraResources_CreateUpdateCassandraKeyspace
Create or update an Azure Cosmos DB Cassandra keyspace


```js
azure_cosmos_db.CassandraResources_CreateUpdateCassandraKeyspace({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "api-version": "",
  "createUpdateCassandraKeyspaceParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateCassandraKeyspaceParameters **required** [CassandraKeyspaceCreateUpdateParameters](#cassandrakeyspacecreateupdateparameters)

#### Output
* output [CassandraKeyspaceGetResults](#cassandrakeyspacegetresults)

### CassandraResources_ListCassandraTables
Lists the Cassandra table under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.CassandraResources_ListCassandraTables({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [CassandraTableListResult](#cassandratablelistresult)

### CassandraResources_DeleteCassandraTable
Deletes an existing Azure Cosmos DB Cassandra table.


```js
azure_cosmos_db.CassandraResources_DeleteCassandraTable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * tableName **required** `string`: Cosmos DB table name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### CassandraResources_GetCassandraTable
Gets the Cassandra table under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.CassandraResources_GetCassandraTable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * tableName **required** `string`: Cosmos DB table name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [CassandraTableGetResults](#cassandratablegetresults)

### CassandraResources_CreateUpdateCassandraTable
Create or update an Azure Cosmos DB Cassandra Table


```js
azure_cosmos_db.CassandraResources_CreateUpdateCassandraTable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "tableName": "",
  "api-version": "",
  "createUpdateCassandraTableParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * tableName **required** `string`: Cosmos DB table name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateCassandraTableParameters **required** [CassandraTableCreateUpdateParameters](#cassandratablecreateupdateparameters)

#### Output
* output [CassandraTableGetResults](#cassandratablegetresults)

### CassandraResources_GetCassandraTableThroughput
Gets the RUs per second of the Cassandra table under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.CassandraResources_GetCassandraTableThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * tableName **required** `string`: Cosmos DB table name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### CassandraResources_UpdateCassandraTableThroughput
Update RUs per second of an Azure Cosmos DB Cassandra table


```js
azure_cosmos_db.CassandraResources_UpdateCassandraTableThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "tableName": "",
  "api-version": "",
  "updateThroughputParameters": {
    "properties": {
      "resource": {
        "throughput": 0
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * tableName **required** `string`: Cosmos DB table name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * updateThroughputParameters **required** [ThroughputSettingsUpdateParameters](#throughputsettingsupdateparameters)

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### CassandraResources_GetCassandraKeyspaceThroughput
Gets the RUs per second of the Cassandra Keyspace under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.CassandraResources_GetCassandraKeyspaceThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### CassandraResources_UpdateCassandraKeyspaceThroughput
Update RUs per second of an Azure Cosmos DB Cassandra Keyspace


```js
azure_cosmos_db.CassandraResources_UpdateCassandraKeyspaceThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keyspaceName": "",
  "api-version": "",
  "updateThroughputParameters": {
    "properties": {
      "resource": {
        "throughput": 0
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * keyspaceName **required** `string`: Cosmos DB keyspace name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * updateThroughputParameters **required** [ThroughputSettingsUpdateParameters](#throughputsettingsupdateparameters)

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### Collection_ListMetricDefinitions
Retrieves metric definitions for the given collection.


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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * $filter `string`: An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).

#### Output
* output [UsagesResult](#usagesresult)

### Database_ListMetricDefinitions
Retrieves metric definitions for the given database.


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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * failoverParameters **required** [FailoverPolicies](#failoverpolicies)

#### Output
*Output schema unknown*

### GremlinResources_ListGremlinDatabases
Lists the Gremlin databases under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.GremlinResources_ListGremlinDatabases({
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [GremlinDatabaseListResult](#gremlindatabaselistresult)

### GremlinResources_DeleteGremlinDatabase
Deletes an existing Azure Cosmos DB Gremlin database.


```js
azure_cosmos_db.GremlinResources_DeleteGremlinDatabase({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### GremlinResources_GetGremlinDatabase
Gets the Gremlin databases under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.GremlinResources_GetGremlinDatabase({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [GremlinDatabaseGetResults](#gremlindatabasegetresults)

### GremlinResources_CreateUpdateGremlinDatabase
Create or update an Azure Cosmos DB Gremlin database


```js
azure_cosmos_db.GremlinResources_CreateUpdateGremlinDatabase({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": "",
  "createUpdateGremlinDatabaseParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateGremlinDatabaseParameters **required** [GremlinDatabaseCreateUpdateParameters](#gremlindatabasecreateupdateparameters)

#### Output
* output [GremlinDatabaseGetResults](#gremlindatabasegetresults)

### GremlinResources_ListGremlinGraphs
Lists the Gremlin graph under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.GremlinResources_ListGremlinGraphs({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [GremlinGraphListResult](#gremlingraphlistresult)

### GremlinResources_DeleteGremlinGraph
Deletes an existing Azure Cosmos DB Gremlin graph.


```js
azure_cosmos_db.GremlinResources_DeleteGremlinGraph({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "graphName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * graphName **required** `string`: Cosmos DB graph name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### GremlinResources_GetGremlinGraph
Gets the Gremlin graph under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.GremlinResources_GetGremlinGraph({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "graphName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * graphName **required** `string`: Cosmos DB graph name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [GremlinGraphGetResults](#gremlingraphgetresults)

### GremlinResources_CreateUpdateGremlinGraph
Create or update an Azure Cosmos DB Gremlin graph


```js
azure_cosmos_db.GremlinResources_CreateUpdateGremlinGraph({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "graphName": "",
  "api-version": "",
  "createUpdateGremlinGraphParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * graphName **required** `string`: Cosmos DB graph name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateGremlinGraphParameters **required** [GremlinGraphCreateUpdateParameters](#gremlingraphcreateupdateparameters)

#### Output
* output [GremlinGraphGetResults](#gremlingraphgetresults)

### GremlinResources_GetGremlinGraphThroughput
Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.GremlinResources_GetGremlinGraphThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "graphName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * graphName **required** `string`: Cosmos DB graph name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### GremlinResources_UpdateGremlinGraphThroughput
Update RUs per second of an Azure Cosmos DB Gremlin graph


```js
azure_cosmos_db.GremlinResources_UpdateGremlinGraphThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "graphName": "",
  "api-version": "",
  "updateThroughputParameters": {
    "properties": {
      "resource": {
        "throughput": 0
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * graphName **required** `string`: Cosmos DB graph name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * updateThroughputParameters **required** [ThroughputSettingsUpdateParameters](#throughputsettingsupdateparameters)

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### GremlinResources_GetGremlinDatabaseThroughput
Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.GremlinResources_GetGremlinDatabaseThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### GremlinResources_UpdateGremlinDatabaseThroughput
Update RUs per second of an Azure Cosmos DB Gremlin database


```js
azure_cosmos_db.GremlinResources_UpdateGremlinDatabaseThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": "",
  "updateThroughputParameters": {
    "properties": {
      "resource": {
        "throughput": 0
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * updateThroughputParameters **required** [ThroughputSettingsUpdateParameters](#throughputsettingsupdateparameters)

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [DatabaseAccountListKeysResult](#databaseaccountlistkeysresult)

### DatabaseAccounts_ListMetricDefinitions
Retrieves metric definitions for the given database account.


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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [MetricListResult](#metriclistresult)

### MongoDBResources_ListMongoDBDatabases
Lists the MongoDB databases under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.MongoDBResources_ListMongoDBDatabases({
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [MongoDBDatabaseListResult](#mongodbdatabaselistresult)

### MongoDBResources_DeleteMongoDBDatabase
Deletes an existing Azure Cosmos DB MongoDB database.


```js
azure_cosmos_db.MongoDBResources_DeleteMongoDBDatabase({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### MongoDBResources_GetMongoDBDatabase
Gets the MongoDB databases under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.MongoDBResources_GetMongoDBDatabase({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [MongoDBDatabaseGetResults](#mongodbdatabasegetresults)

### MongoDBResources_CreateUpdateMongoDBDatabase
Create or updates Azure Cosmos DB MongoDB database


```js
azure_cosmos_db.MongoDBResources_CreateUpdateMongoDBDatabase({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": "",
  "createUpdateMongoDBDatabaseParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateMongoDBDatabaseParameters **required** [MongoDBDatabaseCreateUpdateParameters](#mongodbdatabasecreateupdateparameters)

#### Output
* output [MongoDBDatabaseGetResults](#mongodbdatabasegetresults)

### MongoDBResources_ListMongoDBCollections
Lists the MongoDB collection under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.MongoDBResources_ListMongoDBCollections({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [MongoDBCollectionListResult](#mongodbcollectionlistresult)

### MongoDBResources_DeleteMongoDBCollection
Deletes an existing Azure Cosmos DB MongoDB Collection.


```js
azure_cosmos_db.MongoDBResources_DeleteMongoDBCollection({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "collectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * collectionName **required** `string`: Cosmos DB collection name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### MongoDBResources_GetMongoDBCollection
Gets the MongoDB collection under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.MongoDBResources_GetMongoDBCollection({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "collectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * collectionName **required** `string`: Cosmos DB collection name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [MongoDBCollectionGetResults](#mongodbcollectiongetresults)

### MongoDBResources_CreateUpdateMongoDBCollection
Create or update an Azure Cosmos DB MongoDB Collection


```js
azure_cosmos_db.MongoDBResources_CreateUpdateMongoDBCollection({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "collectionName": "",
  "api-version": "",
  "createUpdateMongoDBCollectionParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * collectionName **required** `string`: Cosmos DB collection name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateMongoDBCollectionParameters **required** [MongoDBCollectionCreateUpdateParameters](#mongodbcollectioncreateupdateparameters)

#### Output
* output [MongoDBCollectionGetResults](#mongodbcollectiongetresults)

### MongoDBResources_GetMongoDBCollectionThroughput
Gets the RUs per second of the MongoDB collection under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.MongoDBResources_GetMongoDBCollectionThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "collectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * collectionName **required** `string`: Cosmos DB collection name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### MongoDBResources_UpdateMongoDBCollectionThroughput
Update the RUs per second of an Azure Cosmos DB MongoDB collection


```js
azure_cosmos_db.MongoDBResources_UpdateMongoDBCollectionThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "collectionName": "",
  "api-version": "",
  "updateThroughputParameters": {
    "properties": {
      "resource": {
        "throughput": 0
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * collectionName **required** `string`: Cosmos DB collection name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * updateThroughputParameters **required** [ThroughputSettingsUpdateParameters](#throughputsettingsupdateparameters)

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### MongoDBResources_GetMongoDBDatabaseThroughput
Gets the RUs per second of the MongoDB database under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.MongoDBResources_GetMongoDBDatabaseThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### MongoDBResources_UpdateMongoDBDatabaseThroughput
Update RUs per second of the an Azure Cosmos DB MongoDB database


```js
azure_cosmos_db.MongoDBResources_UpdateMongoDBDatabaseThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": "",
  "updateThroughputParameters": {
    "properties": {
      "resource": {
        "throughput": 0
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * updateThroughputParameters **required** [ThroughputSettingsUpdateParameters](#throughputsettingsupdateparameters)

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [PercentileMetricListResult](#percentilemetriclistresult)

### DatabaseAccounts_GetReadOnlyKeys
Lists the read-only access keys for the specified Azure Cosmos DB database account.


```js
azure_cosmos_db.DatabaseAccounts_GetReadOnlyKeys({
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [DatabaseAccountListReadOnlyKeysResult](#databaseaccountlistreadonlykeysresult)

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * $filter **required** `string`: An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

#### Output
* output [PercentileMetricListResult](#percentilemetriclistresult)

### SqlResources_ListSqlDatabases
Lists the SQL databases under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.SqlResources_ListSqlDatabases({
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [SqlDatabaseListResult](#sqldatabaselistresult)

### SqlResources_DeleteSqlDatabase
Deletes an existing Azure Cosmos DB SQL database.


```js
azure_cosmos_db.SqlResources_DeleteSqlDatabase({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### SqlResources_GetSqlDatabase
Gets the SQL database under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.SqlResources_GetSqlDatabase({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [SqlDatabaseGetResults](#sqldatabasegetresults)

### SqlResources_CreateUpdateSqlDatabase
Create or update an Azure Cosmos DB SQL database


```js
azure_cosmos_db.SqlResources_CreateUpdateSqlDatabase({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": "",
  "createUpdateSqlDatabaseParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateSqlDatabaseParameters **required** [SqlDatabaseCreateUpdateParameters](#sqldatabasecreateupdateparameters)

#### Output
* output [SqlDatabaseGetResults](#sqldatabasegetresults)

### SqlResources_ListSqlContainers
Lists the SQL container under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.SqlResources_ListSqlContainers({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [SqlContainerListResult](#sqlcontainerlistresult)

### SqlResources_DeleteSqlContainer
Deletes an existing Azure Cosmos DB SQL container.


```js
azure_cosmos_db.SqlResources_DeleteSqlContainer({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### SqlResources_GetSqlContainer
Gets the SQL container under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.SqlResources_GetSqlContainer({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [SqlContainerGetResults](#sqlcontainergetresults)

### SqlResources_CreateUpdateSqlContainer
Create or update an Azure Cosmos DB SQL container


```js
azure_cosmos_db.SqlResources_CreateUpdateSqlContainer({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "api-version": "",
  "createUpdateSqlContainerParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateSqlContainerParameters **required** [SqlContainerCreateUpdateParameters](#sqlcontainercreateupdateparameters)

#### Output
* output [SqlContainerGetResults](#sqlcontainergetresults)

### SqlResources_ListSqlStoredProcedures
Lists the SQL storedProcedure under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.SqlResources_ListSqlStoredProcedures({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [SqlStoredProcedureListResult](#sqlstoredprocedurelistresult)

### SqlResources_DeleteSqlStoredProcedure
Deletes an existing Azure Cosmos DB SQL storedProcedure.


```js
azure_cosmos_db.SqlResources_DeleteSqlStoredProcedure({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "storedProcedureName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * storedProcedureName **required** `string`: Cosmos DB storedProcedure name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### SqlResources_GetSqlStoredProcedure
Gets the SQL storedProcedure under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.SqlResources_GetSqlStoredProcedure({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "storedProcedureName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * storedProcedureName **required** `string`: Cosmos DB storedProcedure name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [SqlStoredProcedureGetResults](#sqlstoredproceduregetresults)

### SqlResources_CreateUpdateSqlStoredProcedure
Create or update an Azure Cosmos DB SQL storedProcedure


```js
azure_cosmos_db.SqlResources_CreateUpdateSqlStoredProcedure({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "storedProcedureName": "",
  "api-version": "",
  "createUpdateSqlStoredProcedureParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * storedProcedureName **required** `string`: Cosmos DB storedProcedure name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateSqlStoredProcedureParameters **required** [SqlStoredProcedureCreateUpdateParameters](#sqlstoredprocedurecreateupdateparameters)

#### Output
* output [SqlStoredProcedureGetResults](#sqlstoredproceduregetresults)

### SqlResources_GetSqlContainerThroughput
Gets the RUs per second of the SQL container under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.SqlResources_GetSqlContainerThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### SqlResources_UpdateSqlContainerThroughput
Update RUs per second of an Azure Cosmos DB SQL container


```js
azure_cosmos_db.SqlResources_UpdateSqlContainerThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "api-version": "",
  "updateThroughputParameters": {
    "properties": {
      "resource": {
        "throughput": 0
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * updateThroughputParameters **required** [ThroughputSettingsUpdateParameters](#throughputsettingsupdateparameters)

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### SqlResources_ListSqlTriggers
Lists the SQL trigger under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.SqlResources_ListSqlTriggers({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [SqlTriggerListResult](#sqltriggerlistresult)

### SqlResources_DeleteSqlTrigger
Deletes an existing Azure Cosmos DB SQL trigger.


```js
azure_cosmos_db.SqlResources_DeleteSqlTrigger({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * triggerName **required** `string`: Cosmos DB trigger name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### SqlResources_GetSqlTrigger
Gets the SQL trigger under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.SqlResources_GetSqlTrigger({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * triggerName **required** `string`: Cosmos DB trigger name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [SqlTriggerGetResults](#sqltriggergetresults)

### SqlResources_CreateUpdateSqlTrigger
Create or update an Azure Cosmos DB SQL trigger


```js
azure_cosmos_db.SqlResources_CreateUpdateSqlTrigger({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "triggerName": "",
  "api-version": "",
  "createUpdateSqlTriggerParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * triggerName **required** `string`: Cosmos DB trigger name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateSqlTriggerParameters **required** [SqlTriggerCreateUpdateParameters](#sqltriggercreateupdateparameters)

#### Output
* output [SqlTriggerGetResults](#sqltriggergetresults)

### SqlResources_ListSqlUserDefinedFunctions
Lists the SQL userDefinedFunction under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.SqlResources_ListSqlUserDefinedFunctions({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [SqlUserDefinedFunctionListResult](#sqluserdefinedfunctionlistresult)

### SqlResources_DeleteSqlUserDefinedFunction
Deletes an existing Azure Cosmos DB SQL userDefinedFunction.


```js
azure_cosmos_db.SqlResources_DeleteSqlUserDefinedFunction({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "userDefinedFunctionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * userDefinedFunctionName **required** `string`: Cosmos DB userDefinedFunction name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### SqlResources_GetSqlUserDefinedFunction
Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.SqlResources_GetSqlUserDefinedFunction({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "userDefinedFunctionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * userDefinedFunctionName **required** `string`: Cosmos DB userDefinedFunction name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [SqlUserDefinedFunctionGetResults](#sqluserdefinedfunctiongetresults)

### SqlResources_CreateUpdateSqlUserDefinedFunction
Create or update an Azure Cosmos DB SQL userDefinedFunction


```js
azure_cosmos_db.SqlResources_CreateUpdateSqlUserDefinedFunction({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "containerName": "",
  "userDefinedFunctionName": "",
  "api-version": "",
  "createUpdateSqlUserDefinedFunctionParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * containerName **required** `string`: Cosmos DB container name.
  * userDefinedFunctionName **required** `string`: Cosmos DB userDefinedFunction name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateSqlUserDefinedFunctionParameters **required** [SqlUserDefinedFunctionCreateUpdateParameters](#sqluserdefinedfunctioncreateupdateparameters)

#### Output
* output [SqlUserDefinedFunctionGetResults](#sqluserdefinedfunctiongetresults)

### SqlResources_GetSqlDatabaseThroughput
Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.SqlResources_GetSqlDatabaseThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### SqlResources_UpdateSqlDatabaseThroughput
Update RUs per second of an Azure Cosmos DB SQL database


```js
azure_cosmos_db.SqlResources_UpdateSqlDatabaseThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "databaseName": "",
  "api-version": "",
  "updateThroughputParameters": {
    "properties": {
      "resource": {
        "throughput": 0
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * databaseName **required** `string`: Cosmos DB database name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * updateThroughputParameters **required** [ThroughputSettingsUpdateParameters](#throughputsettingsupdateparameters)

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### TableResources_ListTables
Lists the Tables under an existing Azure Cosmos DB database account.


```js
azure_cosmos_db.TableResources_ListTables({
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [TableListResult](#tablelistresult)

### TableResources_DeleteTable
Deletes an existing Azure Cosmos DB Table.


```js
azure_cosmos_db.TableResources_DeleteTable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * tableName **required** `string`: Cosmos DB table name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
*Output schema unknown*

### TableResources_GetTable
Gets the Tables under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.TableResources_GetTable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * tableName **required** `string`: Cosmos DB table name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [TableGetResults](#tablegetresults)

### TableResources_CreateUpdateTable
Create or update an Azure Cosmos DB Table


```js
azure_cosmos_db.TableResources_CreateUpdateTable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "tableName": "",
  "api-version": "",
  "createUpdateTableParameters": {
    "properties": {
      "resource": {
        "id": ""
      },
      "options": {}
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * tableName **required** `string`: Cosmos DB table name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * createUpdateTableParameters **required** [TableCreateUpdateParameters](#tablecreateupdateparameters)

#### Output
* output [TableGetResults](#tablegetresults)

### TableResources_GetTableThroughput
Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the provided name.


```js
azure_cosmos_db.TableResources_GetTableThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * tableName **required** `string`: Cosmos DB table name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

### TableResources_UpdateTableThroughput
Update RUs per second of an Azure Cosmos DB Table


```js
azure_cosmos_db.TableResources_UpdateTableThroughput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "tableName": "",
  "api-version": "",
  "updateThroughputParameters": {
    "properties": {
      "resource": {
        "throughput": 0
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Cosmos DB database account name.
  * tableName **required** `string`: Cosmos DB table name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * updateThroughputParameters **required** [ThroughputSettingsUpdateParameters](#throughputsettingsupdateparameters)

#### Output
* output [ThroughputSettingsGetResults](#throughputsettingsgetresults)

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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
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
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2019-08-01.
  * $filter `string`: An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).

#### Output
* output [UsagesResult](#usagesresult)



## Definitions

### ARMProxyResource
* ARMProxyResource `object`: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
  * id `string`: The unique resource identifier of the database account.
  * name `string`: The name of the database account.
  * type `string`: The type of Azure resource.

### ARMResourceProperties
* ARMResourceProperties `object`: The core properties of ARM resources.
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### Capability
* Capability `object`: Cosmos DB capability object
  * name `string`: Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin".

### CassandraKeyspaceCreateUpdateParameters
* CassandraKeyspaceCreateUpdateParameters `object`: Parameters to create and update Cosmos DB Cassandra keyspace.
  * properties **required** [CassandraKeyspaceCreateUpdateProperties](#cassandrakeyspacecreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### CassandraKeyspaceCreateUpdateProperties
* CassandraKeyspaceCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB Cassandra keyspace.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [CassandraKeyspaceResource](#cassandrakeyspaceresource)

### CassandraKeyspaceGetProperties
* CassandraKeyspaceGetProperties `object`: The properties of an Azure Cosmos DB Cassandra keyspace
  * resource
    * id **required** `string`: Name of the Cosmos DB Cassandra keyspace
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### CassandraKeyspaceGetResults
* CassandraKeyspaceGetResults `object`: An Azure Cosmos DB Cassandra keyspace.
  * properties [CassandraKeyspaceGetProperties](#cassandrakeyspacegetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### CassandraKeyspaceListResult
* CassandraKeyspaceListResult `object`: The List operation response, that contains the Cassandra keyspaces and their properties.
  * value `array`: List of Cassandra keyspaces and their properties.
    * items [CassandraKeyspaceGetResults](#cassandrakeyspacegetresults)

### CassandraKeyspaceResource
* CassandraKeyspaceResource `object`: Cosmos DB Cassandra keyspace resource object
  * id **required** `string`: Name of the Cosmos DB Cassandra keyspace

### CassandraPartitionKey
* CassandraPartitionKey `object`: Cosmos DB Cassandra table partition key
  * name `string`: Name of the Cosmos DB Cassandra table partition key

### CassandraSchema
* CassandraSchema `object`: Cosmos DB Cassandra table schema
  * clusterKeys `array`: List of cluster key.
    * items [ClusterKey](#clusterkey)
  * columns `array`: List of Cassandra table columns.
    * items [Column](#column)
  * partitionKeys `array`: List of partition key.
    * items [CassandraPartitionKey](#cassandrapartitionkey)

### CassandraTableCreateUpdateParameters
* CassandraTableCreateUpdateParameters `object`: Parameters to create and update Cosmos DB Cassandra table.
  * properties **required** [CassandraTableCreateUpdateProperties](#cassandratablecreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### CassandraTableCreateUpdateProperties
* CassandraTableCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB Cassandra table.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [CassandraTableResource](#cassandratableresource)

### CassandraTableGetProperties
* CassandraTableGetProperties `object`: The properties of an Azure Cosmos DB Cassandra table
  * resource
    * defaultTtl `integer`: Time to live of the Cosmos DB Cassandra table
    * id **required** `string`: Name of the Cosmos DB Cassandra table
    * schema [CassandraSchema](#cassandraschema)
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### CassandraTableGetResults
* CassandraTableGetResults `object`: An Azure Cosmos DB Cassandra table.
  * properties [CassandraTableGetProperties](#cassandratablegetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### CassandraTableListResult
* CassandraTableListResult `object`: The List operation response, that contains the Cassandra tables and their properties.
  * value `array`: List of Cassandra tables and their properties.
    * items [CassandraTableGetResults](#cassandratablegetresults)

### CassandraTableResource
* CassandraTableResource `object`: Cosmos DB Cassandra table resource object
  * defaultTtl `integer`: Time to live of the Cosmos DB Cassandra table
  * id **required** `string`: Name of the Cosmos DB Cassandra table
  * schema [CassandraSchema](#cassandraschema)

### ClusterKey
* ClusterKey `object`: Cosmos DB Cassandra table cluster key
  * name `string`: Name of the Cosmos DB Cassandra table cluster key
  * orderBy `string`: Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc"

### Column
* Column `object`: Cosmos DB Cassandra table column
  * name `string`: Name of the Cosmos DB Cassandra table column
  * type `string`: Type of the Cosmos DB Cassandra table column

### CompositePath
* CompositePath `object`
  * order `string` (values: Ascending, Descending): Sort order for composite paths.
  * path `string`: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)

### CompositePathList
* CompositePathList `array`: List of composite path
  * items [CompositePath](#compositepath)

### ConflictResolutionPolicy
* ConflictResolutionPolicy `object`: The conflict resolution policy for the container.
  * conflictResolutionPath `string`: The conflict resolution path in the case of LastWriterWins mode.
  * conflictResolutionProcedure `string`: The procedure to resolve conflicts in the case of custom mode.
  * mode `string` (values: LastWriterWins, Custom): Indicates the conflict resolution mode.

### ConnectorOffer
* ConnectorOffer `string` (values: Small): The cassandra connector offer type for the Cosmos DB C* database account.

### ConsistencyPolicy
* ConsistencyPolicy `object`: The consistency policy for the Cosmos DB database account.
  * defaultConsistencyLevel **required** `string` (values: Eventual, Session, BoundedStaleness, Strong, ConsistentPrefix): The default consistency level and configuration settings of the Cosmos DB account.
  * maxIntervalInSeconds `integer`: When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
  * maxStalenessPrefix `integer`: When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.

### ContainerPartitionKey
* ContainerPartitionKey `object`: The configuration of the partition key to be used for partitioning data into multiple partitions
  * kind `string` (values: Hash, Range): Indicates the kind of algorithm used for partitioning
  * paths `array`: List of paths using which data within the container can be partitioned
    * items [Path](#path)
  * version `integer`: Indicates the version of the partition key definition

### CreateUpdateOptions
* CreateUpdateOptions `object`: CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"

### DatabaseAccountConnectionString
* DatabaseAccountConnectionString `object`: Connection string for the Cosmos DB account
  * connectionString `string`: Value of the connection string
  * description `string`: Description of the connection string

### DatabaseAccountCreateUpdateParameters
* DatabaseAccountCreateUpdateParameters `object`: Parameters to create and update Cosmos DB database accounts.
  * kind `string` (values: GlobalDocumentDB, MongoDB, Parse): Indicates the type of database account. This can only be set at database account creation.
  * properties **required** [DatabaseAccountCreateUpdateProperties](#databaseaccountcreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### DatabaseAccountCreateUpdateProperties
* DatabaseAccountCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB database accounts.
  * capabilities `array`: List of Cosmos DB capabilities for the account
    * items [Capability](#capability)
  * connectorOffer [ConnectorOffer](#connectoroffer)
  * consistencyPolicy [ConsistencyPolicy](#consistencypolicy)
  * databaseAccountOfferType **required** [DatabaseAccountOfferType](#databaseaccountoffertype)
  * disableKeyBasedMetadataWriteAccess `boolean`: Disable write operations on metadata resources (databases, containers, throughput) via account keys
  * enableAutomaticFailover `boolean`: Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
  * enableCassandraConnector `boolean`: Enables the cassandra connector on the Cosmos DB C* account
  * enableMultipleWriteLocations `boolean`: Enables the account to write in multiple locations
  * ipRangeFilter [IPRangeFilter](#iprangefilter)
  * isVirtualNetworkFilterEnabled `boolean`: Flag to indicate whether to enable/disable Virtual Network ACL rules.
  * locations **required** `array`: An array that contains the georeplication locations enabled for the Cosmos DB account.
    * items [Location](#location)
  * virtualNetworkRules `array`: List of Virtual Network ACL rules configured for the Cosmos DB account.
    * items [VirtualNetworkRule](#virtualnetworkrule)

### DatabaseAccountGetProperties
* DatabaseAccountGetProperties `object`: Properties for the database account.
  * capabilities `array`: List of Cosmos DB capabilities for the account
    * items [Capability](#capability)
  * connectorOffer [ConnectorOffer](#connectoroffer)
  * consistencyPolicy [ConsistencyPolicy](#consistencypolicy)
  * databaseAccountOfferType [DatabaseAccountOfferType](#databaseaccountoffertype)
  * disableKeyBasedMetadataWriteAccess `boolean`: Disable write operations on metadata resources (databases, containers, throughput) via account keys
  * documentEndpoint `string`: The connection endpoint for the Cosmos DB database account.
  * enableAutomaticFailover `boolean`: Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
  * enableCassandraConnector `boolean`: Enables the cassandra connector on the Cosmos DB C* account
  * enableMultipleWriteLocations `boolean`: Enables the account to write in multiple locations
  * failoverPolicies `array`: An array that contains the regions ordered by their failover priorities.
    * items [FailoverPolicy](#failoverpolicy)
  * ipRangeFilter [IPRangeFilter](#iprangefilter)
  * isVirtualNetworkFilterEnabled `boolean`: Flag to indicate whether to enable/disable Virtual Network ACL rules.
  * locations `array`: An array that contains all of the locations enabled for the Cosmos DB account.
    * items [Location](#location)
  * provisioningState [ProvisioningState](#provisioningstate)
  * readLocations `array`: An array that contains of the read locations enabled for the Cosmos DB account.
    * items [Location](#location)
  * virtualNetworkRules `array`: List of Virtual Network ACL rules configured for the Cosmos DB account.
    * items [VirtualNetworkRule](#virtualnetworkrule)
  * writeLocations `array`: An array that contains the write location for the Cosmos DB account.
    * items [Location](#location)

### DatabaseAccountGetResults
* DatabaseAccountGetResults `object`: An Azure Cosmos DB database account.
  * kind `string` (values: GlobalDocumentDB, MongoDB, Parse): Indicates the type of database account. This can only be set at database account creation.
  * properties [DatabaseAccountGetProperties](#databaseaccountgetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### DatabaseAccountListConnectionStringsResult
* DatabaseAccountListConnectionStringsResult `object`: The connection strings for the given database account.
  * connectionStrings `array`: An array that contains the connection strings for the Cosmos DB account.
    * items [DatabaseAccountConnectionString](#databaseaccountconnectionstring)

### DatabaseAccountListKeysResult
* DatabaseAccountListKeysResult `object`: The access keys for the given database account.
  * primaryMasterKey `string`: Base 64 encoded value of the primary read-write key.
  * secondaryMasterKey `string`: Base 64 encoded value of the secondary read-write key.
  * primaryReadonlyMasterKey `string`: Base 64 encoded value of the primary read-only key.
  * secondaryReadonlyMasterKey `string`: Base 64 encoded value of the secondary read-only key.

### DatabaseAccountListReadOnlyKeysResult
* DatabaseAccountListReadOnlyKeysResult `object`: The read-only access keys for the given database account.
  * primaryReadonlyMasterKey `string`: Base 64 encoded value of the primary read-only key.
  * secondaryReadonlyMasterKey `string`: Base 64 encoded value of the secondary read-only key.

### DatabaseAccountOfferType
* DatabaseAccountOfferType `string` (values: Standard): The offer type for the Cosmos DB database account.

### DatabaseAccountRegenerateKeyParameters
* DatabaseAccountRegenerateKeyParameters `object`: Parameters to regenerate the keys within the database account.
  * keyKind **required** `string` (values: primary, secondary, primaryReadonly, secondaryReadonly): The access key to regenerate.

### DatabaseAccountUpdateParameters
* DatabaseAccountUpdateParameters `object`: Parameters for patching Azure Cosmos DB database account properties.
  * location `string`: The location of the resource group to which the resource belongs.
  * properties [DatabaseAccountUpdateProperties](#databaseaccountupdateproperties)
  * tags [Tags](#tags)

### DatabaseAccountUpdateProperties
* DatabaseAccountUpdateProperties `object`: Properties to update Azure Cosmos DB database accounts.
  * capabilities `array`: List of Cosmos DB capabilities for the account
    * items [Capability](#capability)
  * connectorOffer [ConnectorOffer](#connectoroffer)
  * consistencyPolicy [ConsistencyPolicy](#consistencypolicy)
  * disableKeyBasedMetadataWriteAccess `boolean`: Disable write operations on metadata resources (databases, containers, throughput) via account keys
  * enableAutomaticFailover `boolean`: Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
  * enableCassandraConnector `boolean`: Enables the cassandra connector on the Cosmos DB C* account
  * enableMultipleWriteLocations `boolean`: Enables the account to write in multiple locations
  * ipRangeFilter [IPRangeFilter](#iprangefilter)
  * isVirtualNetworkFilterEnabled `boolean`: Flag to indicate whether to enable/disable Virtual Network ACL rules.
  * locations `array`: An array that contains the georeplication locations enabled for the Cosmos DB account.
    * items [Location](#location)
  * virtualNetworkRules `array`: List of Virtual Network ACL rules configured for the Cosmos DB account.
    * items [VirtualNetworkRule](#virtualnetworkrule)

### DatabaseAccountsListResult
* DatabaseAccountsListResult `object`: The List operation response, that contains the database accounts and their properties.
  * value `array`: List of database account and their properties.
    * items [DatabaseAccountGetResults](#databaseaccountgetresults)

### ErrorResponse
* ErrorResponse `object`: Error Response.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### ExcludedPath
* ExcludedPath `object`
  * path `string`: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)

### ExtendedResourceProperties
* ExtendedResourceProperties `object`: The system generated resource properties associated with SQL databases, SQL containers, Gremlin databases and Gremlin graphs.
  * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
  * _rid `string`: A system generated property. A unique identifier.

### FailoverPolicies
* FailoverPolicies `object`: The list of new failover policies for the failover priority change.
  * failoverPolicies **required** `array`: List of failover policies.
    * items [FailoverPolicy](#failoverpolicy)

### FailoverPolicy
* FailoverPolicy `object`: The failover policy for a given region of a database account.
  * failoverPriority `integer`: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
  * id `string`: The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;.
  * locationName `string`: The name of the region in which the database account exists.

### GremlinDatabaseCreateUpdateParameters
* GremlinDatabaseCreateUpdateParameters `object`: Parameters to create and update Cosmos DB Gremlin database.
  * properties **required** [GremlinDatabaseCreateUpdateProperties](#gremlindatabasecreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### GremlinDatabaseCreateUpdateProperties
* GremlinDatabaseCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB Gremlin database.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [GremlinDatabaseResource](#gremlindatabaseresource)

### GremlinDatabaseGetProperties
* GremlinDatabaseGetProperties `object`: The properties of an Azure Cosmos DB SQL database
  * resource
    * id **required** `string`: Name of the Cosmos DB Gremlin database
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### GremlinDatabaseGetResults
* GremlinDatabaseGetResults `object`: An Azure Cosmos DB Gremlin database.
  * properties [GremlinDatabaseGetProperties](#gremlindatabasegetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### GremlinDatabaseListResult
* GremlinDatabaseListResult `object`: The List operation response, that contains the Gremlin databases and their properties.
  * value `array`: List of Gremlin databases and their properties.
    * items [GremlinDatabaseGetResults](#gremlindatabasegetresults)

### GremlinDatabaseResource
* GremlinDatabaseResource `object`: Cosmos DB Gremlin database resource object
  * id **required** `string`: Name of the Cosmos DB Gremlin database

### GremlinGraphCreateUpdateParameters
* GremlinGraphCreateUpdateParameters `object`: Parameters to create and update Cosmos DB Gremlin graph.
  * properties **required** [GremlinGraphCreateUpdateProperties](#gremlingraphcreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### GremlinGraphCreateUpdateProperties
* GremlinGraphCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB Gremlin graph.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [GremlinGraphResource](#gremlingraphresource)

### GremlinGraphGetProperties
* GremlinGraphGetProperties `object`: The properties of an Azure Cosmos DB Gremlin graph
  * resource
    * conflictResolutionPolicy [ConflictResolutionPolicy](#conflictresolutionpolicy)
    * defaultTtl `integer`: Default time to live
    * id **required** `string`: Name of the Cosmos DB Gremlin graph
    * indexingPolicy [IndexingPolicy](#indexingpolicy)
    * partitionKey [ContainerPartitionKey](#containerpartitionkey)
    * uniqueKeyPolicy [UniqueKeyPolicy](#uniquekeypolicy)
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### GremlinGraphGetResults
* GremlinGraphGetResults `object`: An Azure Cosmos DB Gremlin graph.
  * properties [GremlinGraphGetProperties](#gremlingraphgetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### GremlinGraphListResult
* GremlinGraphListResult `object`: The List operation response, that contains the graphs and their properties.
  * value `array`: List of graphs and their properties.
    * items [GremlinGraphGetResults](#gremlingraphgetresults)

### GremlinGraphResource
* GremlinGraphResource `object`: Cosmos DB Gremlin graph resource object
  * conflictResolutionPolicy [ConflictResolutionPolicy](#conflictresolutionpolicy)
  * defaultTtl `integer`: Default time to live
  * id **required** `string`: Name of the Cosmos DB Gremlin graph
  * indexingPolicy [IndexingPolicy](#indexingpolicy)
  * partitionKey [ContainerPartitionKey](#containerpartitionkey)
  * uniqueKeyPolicy [UniqueKeyPolicy](#uniquekeypolicy)

### IPRangeFilter
* IPRangeFilter `string`: Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.

### IncludedPath
* IncludedPath `object`: The paths that are included in indexing
  * indexes `array`: List of indexes for this path
    * items [Indexes](#indexes)
  * path `string`: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)

### Indexes
* Indexes `object`: The indexes for the path.
  * dataType `string` (values: String, Number, Point, Polygon, LineString, MultiPolygon): The datatype for which the indexing behavior is applied to.
  * kind `string` (values: Hash, Range, Spatial): Indicates the type of index.
  * precision `integer`: The precision of the index. -1 is maximum precision.

### IndexingPolicy
* IndexingPolicy `object`: Cosmos DB indexing policy
  * automatic `boolean`: Indicates if the indexing policy is automatic
  * compositeIndexes `array`: List of composite path list
    * items [CompositePathList](#compositepathlist)
  * excludedPaths `array`: List of paths to exclude from indexing
    * items [ExcludedPath](#excludedpath)
  * includedPaths `array`: List of paths to include in the indexing
    * items [IncludedPath](#includedpath)
  * indexingMode `string` (values: Consistent, Lazy, None): Indicates the indexing mode.
  * spatialIndexes `array`: List of spatial specifics
    * items [SpatialSpec](#spatialspec)

### Key
* Key `string`: A Key.

### Location
* Location `object`: A region in which the Azure Cosmos DB database account is deployed.
  * documentEndpoint `string`: The connection endpoint for the specific region. Example: https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/
  * failoverPriority `integer`: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
  * id `string`: The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
  * isZoneRedundant `boolean`: Flag to indicate whether or not this region is an AvailabilityZone region
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
  * primaryAggregationType `string` (values: None, Average, Total, Minimum, Maximum, Last): The primary aggregation type of the metric.
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

### MongoDBCollectionCreateUpdateParameters
* MongoDBCollectionCreateUpdateParameters `object`: Parameters to create and update Cosmos DB MongoDB collection.
  * properties **required** [MongoDBCollectionCreateUpdateProperties](#mongodbcollectioncreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### MongoDBCollectionCreateUpdateProperties
* MongoDBCollectionCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB MongoDB collection.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [MongoDBCollectionResource](#mongodbcollectionresource)

### MongoDBCollectionGetProperties
* MongoDBCollectionGetProperties `object`: The properties of an Azure Cosmos DB MongoDB collection
  * resource
    * id **required** `string`: Name of the Cosmos DB MongoDB collection
    * indexes `array`: List of index keys
      * items [MongoIndex](#mongoindex)
    * shardKey [ShardKeys](#shardkeys)
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### MongoDBCollectionGetResults
* MongoDBCollectionGetResults `object`: An Azure Cosmos DB MongoDB collection.
  * properties [MongoDBCollectionGetProperties](#mongodbcollectiongetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### MongoDBCollectionListResult
* MongoDBCollectionListResult `object`: The List operation response, that contains the MongoDB collections and their properties.
  * value `array`: List of MongoDB collections and their properties.
    * items [MongoDBCollectionGetResults](#mongodbcollectiongetresults)

### MongoDBCollectionResource
* MongoDBCollectionResource `object`: Cosmos DB MongoDB collection resource object
  * id **required** `string`: Name of the Cosmos DB MongoDB collection
  * indexes `array`: List of index keys
    * items [MongoIndex](#mongoindex)
  * shardKey [ShardKeys](#shardkeys)

### MongoDBDatabaseCreateUpdateParameters
* MongoDBDatabaseCreateUpdateParameters `object`: Parameters to create and update Cosmos DB MongoDB database.
  * properties **required** [MongoDBDatabaseCreateUpdateProperties](#mongodbdatabasecreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### MongoDBDatabaseCreateUpdateProperties
* MongoDBDatabaseCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB MongoDB database.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [MongoDBDatabaseResource](#mongodbdatabaseresource)

### MongoDBDatabaseGetProperties
* MongoDBDatabaseGetProperties `object`: The properties of an Azure Cosmos DB MongoDB database
  * resource
    * id **required** `string`: Name of the Cosmos DB MongoDB database
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### MongoDBDatabaseGetResults
* MongoDBDatabaseGetResults `object`: An Azure Cosmos DB MongoDB database.
  * properties [MongoDBDatabaseGetProperties](#mongodbdatabasegetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### MongoDBDatabaseListResult
* MongoDBDatabaseListResult `object`: The List operation response, that contains the MongoDB databases and their properties.
  * value `array`: List of MongoDB databases and their properties.
    * items [MongoDBDatabaseGetResults](#mongodbdatabasegetresults)

### MongoDBDatabaseResource
* MongoDBDatabaseResource `object`: Cosmos DB MongoDB database resource object
  * id **required** `string`: Name of the Cosmos DB MongoDB database

### MongoIndex
* MongoIndex `object`: Cosmos DB MongoDB collection index key
  * key [MongoIndexKeys](#mongoindexkeys)
  * options [MongoIndexOptions](#mongoindexoptions)

### MongoIndexKeys
* MongoIndexKeys `object`: Cosmos DB MongoDB collection resource object
  * keys `array`: List of keys for each MongoDB collection in the Azure Cosmos DB service
    * items [Key](#key)

### MongoIndexOptions
* MongoIndexOptions `object`: Cosmos DB MongoDB collection index options
  * expireAfterSeconds `integer`: Expire after seconds
  * unique `boolean`: Is unique or not

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
  * partitionId `string`: The partition id (GUID identifier) of the metric values.
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
  * partitionId `string`: The partition id (GUID identifier) of the usages.
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

### Path
* Path `string`: A path. These typically start with root (/path)

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

### ShardKeys
* ShardKeys `object`: The shard key and partition kind pair, only support "Hash" partition kind

### SpatialSpec
* SpatialSpec `object`
  * path `string`: The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
  * types `array`: List of path's spatial type
    * items [SpatialType](#spatialtype)

### SpatialType
* SpatialType `string` (values: Point, LineString, Polygon, MultiPolygon): Indicates the spatial type of index.

### SqlContainerCreateUpdateParameters
* SqlContainerCreateUpdateParameters `object`: Parameters to create and update Cosmos DB container.
  * properties **required** [SqlContainerCreateUpdateProperties](#sqlcontainercreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### SqlContainerCreateUpdateProperties
* SqlContainerCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB container.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [SqlContainerResource](#sqlcontainerresource)

### SqlContainerGetProperties
* SqlContainerGetProperties `object`: The properties of an Azure Cosmos DB container
  * resource
    * conflictResolutionPolicy [ConflictResolutionPolicy](#conflictresolutionpolicy)
    * defaultTtl `integer`: Default time to live
    * id **required** `string`: Name of the Cosmos DB SQL container
    * indexingPolicy [IndexingPolicy](#indexingpolicy)
    * partitionKey [ContainerPartitionKey](#containerpartitionkey)
    * uniqueKeyPolicy [UniqueKeyPolicy](#uniquekeypolicy)
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### SqlContainerGetResults
* SqlContainerGetResults `object`: An Azure Cosmos DB container.
  * properties [SqlContainerGetProperties](#sqlcontainergetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### SqlContainerListResult
* SqlContainerListResult `object`: The List operation response, that contains the containers and their properties.
  * value `array`: List of containers and their properties.
    * items [SqlContainerGetResults](#sqlcontainergetresults)

### SqlContainerResource
* SqlContainerResource `object`: Cosmos DB SQL container resource object
  * conflictResolutionPolicy [ConflictResolutionPolicy](#conflictresolutionpolicy)
  * defaultTtl `integer`: Default time to live
  * id **required** `string`: Name of the Cosmos DB SQL container
  * indexingPolicy [IndexingPolicy](#indexingpolicy)
  * partitionKey [ContainerPartitionKey](#containerpartitionkey)
  * uniqueKeyPolicy [UniqueKeyPolicy](#uniquekeypolicy)

### SqlDatabaseCreateUpdateParameters
* SqlDatabaseCreateUpdateParameters `object`: Parameters to create and update Cosmos DB SQL database.
  * properties **required** [SqlDatabaseCreateUpdateProperties](#sqldatabasecreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### SqlDatabaseCreateUpdateProperties
* SqlDatabaseCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB SQL database.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [SqlDatabaseResource](#sqldatabaseresource)

### SqlDatabaseGetProperties
* SqlDatabaseGetProperties `object`: The properties of an Azure Cosmos DB SQL database
  * resource `object`
    * _colls `string`: A system generated property that specified the addressable path of the collections resource.
    * _users `string`: A system generated property that specifies the addressable path of the users resource.
    * id **required** `string`: Name of the Cosmos DB SQL database
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### SqlDatabaseGetResults
* SqlDatabaseGetResults `object`: An Azure Cosmos DB SQL database.
  * properties [SqlDatabaseGetProperties](#sqldatabasegetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### SqlDatabaseListResult
* SqlDatabaseListResult `object`: The List operation response, that contains the SQL databases and their properties.
  * value `array`: List of SQL databases and their properties.
    * items [SqlDatabaseGetResults](#sqldatabasegetresults)

### SqlDatabaseResource
* SqlDatabaseResource `object`: Cosmos DB SQL database resource object
  * id **required** `string`: Name of the Cosmos DB SQL database

### SqlStoredProcedureCreateUpdateParameters
* SqlStoredProcedureCreateUpdateParameters `object`: Parameters to create and update Cosmos DB storedProcedure.
  * properties **required** [SqlStoredProcedureCreateUpdateProperties](#sqlstoredprocedurecreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### SqlStoredProcedureCreateUpdateProperties
* SqlStoredProcedureCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB storedProcedure.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [SqlStoredProcedureResource](#sqlstoredprocedureresource)

### SqlStoredProcedureGetProperties
* SqlStoredProcedureGetProperties `object`: The properties of an Azure Cosmos DB StoredProcedure
  * resource
    * body `string`: Body of the Stored Procedure
    * id **required** `string`: Name of the Cosmos DB SQL storedProcedure
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### SqlStoredProcedureGetResults
* SqlStoredProcedureGetResults `object`: An Azure Cosmos DB storedProcedure.
  * properties [SqlStoredProcedureGetProperties](#sqlstoredproceduregetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### SqlStoredProcedureListResult
* SqlStoredProcedureListResult `object`: The List operation response, that contains the storedProcedures and their properties.
  * value `array`: List of storedProcedures and their properties.
    * items [SqlStoredProcedureGetResults](#sqlstoredproceduregetresults)

### SqlStoredProcedureResource
* SqlStoredProcedureResource `object`: Cosmos DB SQL storedProcedure resource object
  * body `string`: Body of the Stored Procedure
  * id **required** `string`: Name of the Cosmos DB SQL storedProcedure

### SqlTriggerCreateUpdateParameters
* SqlTriggerCreateUpdateParameters `object`: Parameters to create and update Cosmos DB trigger.
  * properties **required** [SqlTriggerCreateUpdateProperties](#sqltriggercreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### SqlTriggerCreateUpdateProperties
* SqlTriggerCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB trigger.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [SqlTriggerResource](#sqltriggerresource)

### SqlTriggerGetProperties
* SqlTriggerGetProperties `object`: The properties of an Azure Cosmos DB trigger
  * resource
    * body `string`: Body of the Trigger
    * id **required** `string`: Name of the Cosmos DB SQL trigger
    * triggerOperation `string` (values: All, Create, Update, Delete, Replace): The operation the trigger is associated with
    * triggerType `string` (values: Pre, Post): Type of the Trigger
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### SqlTriggerGetResults
* SqlTriggerGetResults `object`: An Azure Cosmos DB trigger.
  * properties [SqlTriggerGetProperties](#sqltriggergetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### SqlTriggerListResult
* SqlTriggerListResult `object`: The List operation response, that contains the triggers and their properties.
  * value `array`: List of triggers and their properties.
    * items [SqlTriggerGetResults](#sqltriggergetresults)

### SqlTriggerResource
* SqlTriggerResource `object`: Cosmos DB SQL trigger resource object
  * body `string`: Body of the Trigger
  * id **required** `string`: Name of the Cosmos DB SQL trigger
  * triggerOperation `string` (values: All, Create, Update, Delete, Replace): The operation the trigger is associated with
  * triggerType `string` (values: Pre, Post): Type of the Trigger

### SqlUserDefinedFunctionCreateUpdateParameters
* SqlUserDefinedFunctionCreateUpdateParameters `object`: Parameters to create and update Cosmos DB userDefinedFunction.
  * properties **required** [SqlUserDefinedFunctionCreateUpdateProperties](#sqluserdefinedfunctioncreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### SqlUserDefinedFunctionCreateUpdateProperties
* SqlUserDefinedFunctionCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB userDefinedFunction.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [SqlUserDefinedFunctionResource](#sqluserdefinedfunctionresource)

### SqlUserDefinedFunctionGetProperties
* SqlUserDefinedFunctionGetProperties `object`: The properties of an Azure Cosmos DB userDefinedFunction
  * resource
    * body `string`: Body of the User Defined Function
    * id **required** `string`: Name of the Cosmos DB SQL userDefinedFunction
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### SqlUserDefinedFunctionGetResults
* SqlUserDefinedFunctionGetResults `object`: An Azure Cosmos DB userDefinedFunction.
  * properties [SqlUserDefinedFunctionGetProperties](#sqluserdefinedfunctiongetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### SqlUserDefinedFunctionListResult
* SqlUserDefinedFunctionListResult `object`: The List operation response, that contains the userDefinedFunctions and their properties.
  * value `array`: List of userDefinedFunctions and their properties.
    * items [SqlUserDefinedFunctionGetResults](#sqluserdefinedfunctiongetresults)

### SqlUserDefinedFunctionResource
* SqlUserDefinedFunctionResource `object`: Cosmos DB SQL userDefinedFunction resource object
  * body `string`: Body of the User Defined Function
  * id **required** `string`: Name of the Cosmos DB SQL userDefinedFunction

### TableCreateUpdateParameters
* TableCreateUpdateParameters `object`: Parameters to create and update Cosmos DB Table.
  * properties **required** [TableCreateUpdateProperties](#tablecreateupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### TableCreateUpdateProperties
* TableCreateUpdateProperties `object`: Properties to create and update Azure Cosmos DB Table.
  * options **required** [CreateUpdateOptions](#createupdateoptions)
  * resource **required** [TableResource](#tableresource)

### TableGetProperties
* TableGetProperties `object`: The properties of an Azure Cosmos Table
  * resource
    * id **required** `string`: Name of the Cosmos DB table
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### TableGetResults
* TableGetResults `object`: An Azure Cosmos DB Table.
  * properties [TableGetProperties](#tablegetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### TableListResult
* TableListResult `object`: The List operation response, that contains the Table and their properties.
  * value `array`: List of Table and their properties.
    * items [TableGetResults](#tablegetresults)

### TableResource
* TableResource `object`: Cosmos DB table resource object
  * id **required** `string`: Name of the Cosmos DB table

### Tags
* Tags `object`: Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".

### ThroughputSettingsGetProperties
* ThroughputSettingsGetProperties `object`: The properties of an Azure Cosmos DB resource throughput
  * resource
    * minimumThroughput `string`: The minimum throughput of the resource
    * offerReplacePending `string`: The throughput replace is pending
    * throughput **required** `integer`: Value of the Cosmos DB resource throughput
    * _etag `string`: A system generated property representing the resource etag required for optimistic concurrency control.
    * _rid `string`: A system generated property. A unique identifier.

### ThroughputSettingsGetResults
* ThroughputSettingsGetResults `object`: An Azure Cosmos DB resource throughput.
  * properties [ThroughputSettingsGetProperties](#throughputsettingsgetproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### ThroughputSettingsResource
* ThroughputSettingsResource `object`: Cosmos DB resource throughput object
  * minimumThroughput `string`: The minimum throughput of the resource
  * offerReplacePending `string`: The throughput replace is pending
  * throughput **required** `integer`: Value of the Cosmos DB resource throughput

### ThroughputSettingsUpdateParameters
* ThroughputSettingsUpdateParameters `object`: Parameters to update Cosmos DB resource throughput.
  * properties **required** [ThroughputSettingsUpdateProperties](#throughputsettingsupdateproperties)
  * id `string`: The unique resource identifier of the ARM resource.
  * location `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the ARM resource.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### ThroughputSettingsUpdateProperties
* ThroughputSettingsUpdateProperties `object`: Properties to update Azure Cosmos DB resource throughput.
  * resource **required** [ThroughputSettingsResource](#throughputsettingsresource)

### UniqueKey
* UniqueKey `object`: The unique key on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service.
  * paths `array`: List of paths must be unique for each document in the Azure Cosmos DB service
    * items [Path](#path)

### UniqueKeyPolicy
* UniqueKeyPolicy `object`: The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
  * uniqueKeys `array`: List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service.
    * items [UniqueKey](#uniquekey)

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
  * ignoreMissingVNetServiceEndpoint `boolean`: Create firewall rule before the virtual network has vnet service endpoint enabled.


