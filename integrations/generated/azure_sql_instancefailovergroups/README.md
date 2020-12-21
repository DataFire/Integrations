# @datafire/azure_sql_instancefailovergroups

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_instancefailovergroups
```
```js
let azure_sql_instancefailovergroups = require('@datafire/azure_sql_instancefailovergroups').create({
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

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### InstanceFailoverGroups_ListByLocation
Lists the failover groups in a location.


```js
azure_sql_instancefailovergroups.InstanceFailoverGroups_ListByLocation({
  "resourceGroupName": "",
  "locationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The name of the region where the resource is located.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [InstanceFailoverGroupListResult](#instancefailovergrouplistresult)

### InstanceFailoverGroups_Delete
Deletes a failover group.


```js
azure_sql_instancefailovergroups.InstanceFailoverGroups_Delete({
  "resourceGroupName": "",
  "locationName": "",
  "failoverGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The name of the region where the resource is located.
  * failoverGroupName **required** `string`: The name of the failover group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### InstanceFailoverGroups_Get
Gets a failover group.


```js
azure_sql_instancefailovergroups.InstanceFailoverGroups_Get({
  "resourceGroupName": "",
  "locationName": "",
  "failoverGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The name of the region where the resource is located.
  * failoverGroupName **required** `string`: The name of the failover group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [InstanceFailoverGroup](#instancefailovergroup)

### InstanceFailoverGroups_CreateOrUpdate
Creates or updates a failover group.


```js
azure_sql_instancefailovergroups.InstanceFailoverGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "locationName": "",
  "failoverGroupName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The name of the region where the resource is located.
  * failoverGroupName **required** `string`: The name of the failover group.
  * parameters **required** [InstanceFailoverGroup](#instancefailovergroup)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [InstanceFailoverGroup](#instancefailovergroup)

### InstanceFailoverGroups_Failover
Fails over from the current primary managed instance to this managed instance.


```js
azure_sql_instancefailovergroups.InstanceFailoverGroups_Failover({
  "resourceGroupName": "",
  "locationName": "",
  "failoverGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The name of the region where the resource is located.
  * failoverGroupName **required** `string`: The name of the failover group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [InstanceFailoverGroup](#instancefailovergroup)

### InstanceFailoverGroups_ForceFailoverAllowDataLoss
Fails over from the current primary managed instance to this managed instance. This operation might result in data loss.


```js
azure_sql_instancefailovergroups.InstanceFailoverGroups_ForceFailoverAllowDataLoss({
  "resourceGroupName": "",
  "locationName": "",
  "failoverGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * locationName **required** `string`: The name of the region where the resource is located.
  * failoverGroupName **required** `string`: The name of the failover group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [InstanceFailoverGroup](#instancefailovergroup)



## Definitions

### InstanceFailoverGroup
* InstanceFailoverGroup `object`: An instance failover group.
  * properties [InstanceFailoverGroupProperties](#instancefailovergroupproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### InstanceFailoverGroupListResult
* InstanceFailoverGroupListResult `object`: A list of instance failover groups.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [InstanceFailoverGroup](#instancefailovergroup)

### InstanceFailoverGroupProperties
* InstanceFailoverGroupProperties `object`: Properties of a instance failover group.
  * managedInstancePairs **required** `array`: List of managed instance pairs in the failover group.
    * items [ManagedInstancePairInfo](#managedinstancepairinfo)
  * partnerRegions **required** `array`: Partner region information for the failover group.
    * items [PartnerRegionInfo](#partnerregioninfo)
  * readOnlyEndpoint [InstanceFailoverGroupReadOnlyEndpoint](#instancefailovergroupreadonlyendpoint)
  * readWriteEndpoint **required** [InstanceFailoverGroupReadWriteEndpoint](#instancefailovergroupreadwriteendpoint)
  * replicationRole `string` (values: Primary, Secondary): Local replication role of the failover group instance.
  * replicationState `string`: Replication state of the failover group instance.

### InstanceFailoverGroupReadOnlyEndpoint
* InstanceFailoverGroupReadOnlyEndpoint `object`: Read-only endpoint of the failover group instance.
  * failoverPolicy `string` (values: Disabled, Enabled): Failover policy of the read-only endpoint for the failover group.

### InstanceFailoverGroupReadWriteEndpoint
* InstanceFailoverGroupReadWriteEndpoint `object`: Read-write endpoint of the failover group instance.
  * failoverPolicy **required** `string` (values: Manual, Automatic): Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
  * failoverWithDataLossGracePeriodMinutes `integer`: Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.

### ManagedInstancePairInfo
* ManagedInstancePairInfo `object`: Pairs of Managed Instances in the failover group.
  * partnerManagedInstanceId `string`: Id of Partner Managed Instance in pair.
  * primaryManagedInstanceId `string`: Id of Primary Managed Instance in pair.

### PartnerRegionInfo
* PartnerRegionInfo `object`: Partner region information for the failover group.
  * location `string`: Geo location of the partner managed instances.
  * replicationRole `string` (values: Primary, Secondary): Replication role of the partner managed instances.


