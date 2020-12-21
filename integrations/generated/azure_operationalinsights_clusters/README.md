# @datafire/azure_operationalinsights_clusters

Client library for Azure Log Analytics

## Installation and Usage
```bash
npm install --save @datafire/azure_operationalinsights_clusters
```
```js
let azure_operationalinsights_clusters = require('@datafire/azure_operationalinsights_clusters').create({
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

Azure Log Analytics API reference

## Actions

### Clusters_List
Gets the Log Analytics clusters in a subscription.


```js
azure_operationalinsights_clusters.Clusters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ClusterListResult](#clusterlistresult)

### Clusters_ListByResourceGroup
Gets Log Analytics clusters in a resource group.


```js
azure_operationalinsights_clusters.Clusters_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ClusterListResult](#clusterlistresult)

### Clusters_Delete
Deletes a cluster instance.


```js
azure_operationalinsights_clusters.Clusters_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name of the Log Analytics cluster.
  * clusterName **required** `string`: Name of the Log Analytics Cluster.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Clusters_Get
Gets a Log Analytics cluster instance.


```js
azure_operationalinsights_clusters.Clusters_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name of the Log Analytics cluster.
  * clusterName **required** `string`: Name of the Log Analytics Cluster.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Cluster](#cluster)

### Clusters_Update
Updates a Log Analytics cluster.


```js
azure_operationalinsights_clusters.Clusters_Update({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name of the cluster.
  * clusterName **required** `string`: The name of the cluster.
  * parameters **required** [ClusterPatch](#clusterpatch)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Cluster](#cluster)

### Clusters_CreateOrUpdate
Create or update a Log Analytics cluster.


```js
azure_operationalinsights_clusters.Clusters_CreateOrUpdate({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name of the Log Analytics cluster.
  * clusterName **required** `string`: The name of the Log Analytics cluster.
  * parameters **required** [Cluster](#cluster)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Cluster](#cluster)



## Definitions

### Cluster
* Cluster `object`: The top level Log Analytics cluster resource container.
  * identity [Identity](#identity)
  * properties [ClusterProperties](#clusterproperties)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ClusterListResult
* ClusterListResult `object`: The list clusters operation response.
  * nextLink `string`: The link used to get the next page of recommendations.
  * value `array`: A list of Log Analytics clusters.
    * items [Cluster](#cluster)

### ClusterPatch
* ClusterPatch `object`: The top level Log Analytics cluster resource container.
  * properties [ClusterPatchProperties](#clusterpatchproperties)
  * tags `object`: Resource tags

### ClusterPatchProperties
* ClusterPatchProperties `object`: Log Analytics cluster patch properties.
  * encryptionKeyUri `string`: The Key Vault key or certificate path associated with the Log Analytics cluster.

### ClusterProperties
* ClusterProperties `object`: Cluster properties.
  * clusterId `string`: The ID associated with the cluster.
  * encryptionKeyUri `string`: The Key Vault key or certificate path associated with the Log Analytics cluster.
  * nextLink `string`: The link used to get the next page of recommendations.
  * provisioningState `string` (values: Creating, Succeeded, Failed, Canceled, Deleting, ProvisioningAccount): The provisioning state of the cluster.

### ErrorDetails
* ErrorDetails `object`: The details of the error.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.
  * target `string`: The target of the particular error.

### ErrorResponse
* ErrorResponse `object`: Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.
  * error [ErrorDetails](#errordetails)

### Identity
* Identity `object`: Identity for the resource.
  * principalId `string`: The principal ID of resource identity.
  * tenantId `string`: The tenant ID of resource.
  * type **required** `string` (values: SystemAssigned, None): The identity type.

### Resource
* Resource `object`: The resource definition.
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type


