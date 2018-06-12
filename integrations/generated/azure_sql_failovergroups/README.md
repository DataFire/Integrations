# @datafire/azure_sql_failovergroups

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_failovergroups
```
```js
let azure_sql_failovergroups = require('@datafire/azure_sql_failovergroups').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_failovergroups.FailoverGroups_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### FailoverGroups_ListByServer
Lists the failover groups in a server.


```js
azure_sql_failovergroups.FailoverGroups_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server containing the failover group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [FailoverGroupListResult](#failovergrouplistresult)

### FailoverGroups_Delete
Deletes a failover group.


```js
azure_sql_failovergroups.FailoverGroups_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "failoverGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server containing the failover group.
  * failoverGroupName **required** `string`: The name of the failover group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### FailoverGroups_Get
Gets a failover group.


```js
azure_sql_failovergroups.FailoverGroups_Get({
  "resourceGroupName": "",
  "serverName": "",
  "failoverGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server containing the failover group.
  * failoverGroupName **required** `string`: The name of the failover group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [FailoverGroup](#failovergroup)

### FailoverGroups_Update
Updates a failover group.


```js
azure_sql_failovergroups.FailoverGroups_Update({
  "resourceGroupName": "",
  "serverName": "",
  "failoverGroupName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server containing the failover group.
  * failoverGroupName **required** `string`: The name of the failover group.
  * parameters **required** [FailoverGroupUpdate](#failovergroupupdate)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [FailoverGroup](#failovergroup)

### FailoverGroups_CreateOrUpdate
Creates or updates a failover group.


```js
azure_sql_failovergroups.FailoverGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "failoverGroupName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server containing the failover group.
  * failoverGroupName **required** `string`: The name of the failover group.
  * parameters **required** [FailoverGroup](#failovergroup)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [FailoverGroup](#failovergroup)

### FailoverGroups_Failover
Fails over from the current primary server to this server.


```js
azure_sql_failovergroups.FailoverGroups_Failover({
  "resourceGroupName": "",
  "serverName": "",
  "failoverGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server containing the failover group.
  * failoverGroupName **required** `string`: The name of the failover group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [FailoverGroup](#failovergroup)

### FailoverGroups_ForceFailoverAllowDataLoss
Fails over from the current primary server to this server. This operation might result in data loss.


```js
azure_sql_failovergroups.FailoverGroups_ForceFailoverAllowDataLoss({
  "resourceGroupName": "",
  "serverName": "",
  "failoverGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server containing the failover group.
  * failoverGroupName **required** `string`: The name of the failover group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [FailoverGroup](#failovergroup)



## Definitions

### FailoverGroup
* FailoverGroup `object`: A failover group.
  * location `string`: Resource location.
  * properties [FailoverGroupProperties](#failovergroupproperties)
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### FailoverGroupListResult
* FailoverGroupListResult `object`: A list of failover groups.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [FailoverGroup](#failovergroup)

### FailoverGroupProperties
* FailoverGroupProperties `object`: Properties of a failover group.
  * databases `array`: List of databases in the failover group.
    * items `string`
  * partnerServers **required** `array`: List of partner server information for the failover group.
    * items [PartnerInfo](#partnerinfo)
  * readOnlyEndpoint [FailoverGroupReadOnlyEndpoint](#failovergroupreadonlyendpoint)
  * readWriteEndpoint **required** [FailoverGroupReadWriteEndpoint](#failovergroupreadwriteendpoint)
  * replicationRole `string` (values: Primary, Secondary): Local replication role of the failover group instance.
  * replicationState `string`: Replication state of the failover group instance.

### FailoverGroupReadOnlyEndpoint
* FailoverGroupReadOnlyEndpoint `object`: Read-only endpoint of the failover group instance.
  * failoverPolicy `string` (values: Disabled, Enabled): Failover policy of the read-only endpoint for the failover group.

### FailoverGroupReadWriteEndpoint
* FailoverGroupReadWriteEndpoint `object`: Read-write endpoint of the failover group instance.
  * failoverPolicy **required** `string` (values: Manual, Automatic): Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
  * failoverWithDataLossGracePeriodMinutes `integer`: Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.

### FailoverGroupUpdate
* FailoverGroupUpdate `object`: A failover group update request.
  * properties [FailoverGroupUpdateProperties](#failovergroupupdateproperties)
  * tags `object`: Resource tags.

### FailoverGroupUpdateProperties
* FailoverGroupUpdateProperties `object`: Properties of a failover group update.
  * databases `array`: List of databases in the failover group.
    * items `string`
  * readOnlyEndpoint [FailoverGroupReadOnlyEndpoint](#failovergroupreadonlyendpoint)
  * readWriteEndpoint [FailoverGroupReadWriteEndpoint](#failovergroupreadwriteendpoint)

### PartnerInfo
* PartnerInfo `object`: Partner server information for the failover group.
  * id **required** `string`: Resource identifier of the partner server.
  * location `string`: Geo location of the partner server.
  * replicationRole `string` (values: Primary, Secondary): Replication role of the partner server.


