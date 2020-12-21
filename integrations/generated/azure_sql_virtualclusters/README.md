# @datafire/azure_sql_virtualclusters

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_virtualclusters
```
```js
let azure_sql_virtualclusters = require('@datafire/azure_sql_virtualclusters').create({
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

### VirtualClusters_List
Gets a list of all virtualClusters in the subscription.


```js
azure_sql_virtualclusters.VirtualClusters_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [VirtualClusterListResult](#virtualclusterlistresult)

### VirtualClusters_ListByResourceGroup
Gets a list of virtual clusters in a resource group.


```js
azure_sql_virtualclusters.VirtualClusters_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [VirtualClusterListResult](#virtualclusterlistresult)

### VirtualClusters_Delete
Deletes a virtual cluster.


```js
azure_sql_virtualclusters.VirtualClusters_Delete({
  "resourceGroupName": "",
  "virtualClusterName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * virtualClusterName **required** `string`: The name of the virtual cluster.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### VirtualClusters_Get
Gets a virtual cluster.


```js
azure_sql_virtualclusters.VirtualClusters_Get({
  "resourceGroupName": "",
  "virtualClusterName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * virtualClusterName **required** `string`: The name of the virtual cluster.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [VirtualCluster](#virtualcluster)

### VirtualClusters_Update
Updates a virtual cluster.


```js
azure_sql_virtualclusters.VirtualClusters_Update({
  "resourceGroupName": "",
  "virtualClusterName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * virtualClusterName **required** `string`: The name of the virtual cluster.
  * parameters **required** [VirtualClusterUpdate](#virtualclusterupdate)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [VirtualCluster](#virtualcluster)



## Definitions

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### TrackedResource
* TrackedResource `object`: ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### VirtualCluster
* VirtualCluster `object`: An Azure SQL virtual cluster.
  * properties [VirtualClusterProperties](#virtualclusterproperties)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### VirtualClusterListResult
* VirtualClusterListResult `object`: A list of virtual clusters.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [VirtualCluster](#virtualcluster)

### VirtualClusterProperties
* VirtualClusterProperties `object`: The properties of a virtual cluster.
  * childResources `array`: List of resources in this virtual cluster.
    * items `string`
  * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
  * subnetId `string`: Subnet resource ID for the virtual cluster.

### VirtualClusterUpdate
* VirtualClusterUpdate `object`: An update request for an Azure SQL Database virtual cluster.
  * properties [VirtualClusterProperties](#virtualclusterproperties)
  * tags `object`: Resource tags.


