# @datafire/azure_sql_replicationlinks

Client library for Azure SQL Database replication links

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_replicationlinks
```
```js
let azure_sql_replicationlinks = require('@datafire/azure_sql_replicationlinks').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_replicationlinks.ReplicationLinks_ListByDatabase({
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

Provides read, delete, and failover functionality for Azure SQL Database replication links.

## Actions

### ReplicationLinks_ListByDatabase
Lists a database's replication links.


```js
azure_sql_replicationlinks.ReplicationLinks_ListByDatabase({
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
  * databaseName **required** `string`: The name of the database to retrieve links for.

#### Output
* output [ReplicationLinkListResult](#replicationlinklistresult)

### ReplicationLinks_Delete
Deletes a database replication link. Cannot be done during failover.


```js
azure_sql_replicationlinks.ReplicationLinks_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database that has the replication link to be dropped.
  * linkId **required** `string`: The ID of the replication link to be deleted.

#### Output
*Output schema unknown*

### ReplicationLinks_Get
Gets a database replication link.


```js
azure_sql_replicationlinks.ReplicationLinks_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database to get the link for.
  * linkId **required** `string`: The replication link ID to be retrieved.

#### Output
* output [ReplicationLink](#replicationlink)

### ReplicationLinks_Failover
Sets which replica database is primary by failing over from the current primary replica database.


```js
azure_sql_replicationlinks.ReplicationLinks_Failover({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database that has the replication link to be failed over.
  * linkId **required** `string`: The ID of the replication link to be failed over.

#### Output
*Output schema unknown*

### ReplicationLinks_FailoverAllowDataLoss
Sets which replica database is primary by failing over from the current primary replica database. This operation might result in data loss.


```js
azure_sql_replicationlinks.ReplicationLinks_FailoverAllowDataLoss({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database that has the replication link to be failed over.
  * linkId **required** `string`: The ID of the replication link to be failed over.

#### Output
*Output schema unknown*



## Definitions

### ProxyResource
* ProxyResource: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ReplicationLink
* ReplicationLink `object`: Represents a database replication link.
  * location `string`: Location of the server that contains this firewall rule.
  * properties [ReplicationLinkProperties](#replicationlinkproperties)
  * type `string`: Type of resource this is.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ReplicationLinkListResult
* ReplicationLinkListResult `object`: Represents the response to a List database replication link request.
  * value `array`: The list of database replication links housed in the database.
    * items [ReplicationLink](#replicationlink)

### ReplicationLinkProperties
* ReplicationLinkProperties `object`: Represents the properties of a database replication link.
  * isTerminationAllowed `boolean`: Legacy value indicating whether termination is allowed.  Currently always returns true.
  * partnerDatabase `string`: The name of the partner database.
  * partnerLocation `string`: The Azure Region of the partner database.
  * partnerRole `string` (values: Primary, Secondary, NonReadableSecondary, Source, Copy): The role of the partner database in the replication link.
  * partnerServer `string`: The name of the server hosting the partner database.
  * percentComplete `integer`: The percentage of seeding complete for the replication link.
  * replicationMode `string`: Replication mode of this replication link.
  * replicationState `string` (values: PENDING, SEEDING, CATCH_UP, SUSPENDED): The replication state for the replication link.
  * role `string` (values: Primary, Secondary, NonReadableSecondary, Source, Copy): The role of the database in the replication link.
  * startTime `string`: The start time for the replication link.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


