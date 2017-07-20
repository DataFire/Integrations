# @datafire/azure_arm_servicefabric

Client library for ServiceFabricManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_servicefabric
```

```js
let datafire = require('datafire');
let azure_arm_servicefabric = require('@datafire/azure_arm_servicefabric').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_servicefabric: account,
  }
})


azure_arm_servicefabric.Operations_List({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### Operations_List
Lists all of the available ServiceFabric REST API operations.


```js
azure_arm_servicefabric.Operations_List({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the ServiceFabric resouce provider api

### Clusters_List
List cluster resource


```js
azure_arm_servicefabric.Clusters_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the ServiceFabric resouce provider api
* subscriptionId (string) **required** - The customer subscription identifier

### ClusterVersions_List
List cluster code versions by location


```js
azure_arm_servicefabric.ClusterVersions_List({
  "location": "",
  "environment": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* location (string) **required** - The location for the cluster code versions, this is different from cluster location
* environment (string) **required** - Cluster operating system, the default means all
* api-version (string) **required** - The version of the ServiceFabric resouce provider api
* subscriptionId (string) **required** - The customer subscription identifier

### Clusters_Delete
Delete cluster resource


```js
azure_arm_servicefabric.Clusters_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to which the resource belongs or get created
* clusterName (string) **required** - The name of the cluster resource
* api-version (string) **required** - The version of the ServiceFabric resouce provider api
* subscriptionId (string) **required** - The customer subscription identifier

### Clusters_Get
Get cluster resource


```js
azure_arm_servicefabric.Clusters_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to which the resource belongs or get created
* clusterName (string) **required** - The name of the cluster resource
* api-version (string) **required** - The version of the ServiceFabric resouce provider api
* subscriptionId (string) **required** - The customer subscription identifier

### Clusters_Update
Update cluster configuration


```js
azure_arm_servicefabric.Clusters_Update({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to which the resource belongs or get created
* clusterName (string) **required** - The name of the cluster resource
* api-version (string) **required** - The version of the ServiceFabric resouce provider api
* parameters (undefined) **required** - Cluster update request
* subscriptionId (string) **required** - The customer subscription identifier

### Clusters_Create
Create cluster resource


```js
azure_arm_servicefabric.Clusters_Create({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to which the resource belongs or get created
* clusterName (string) **required** - The name of the cluster resource
* api-version (string) **required** - The version of the ServiceFabric resouce provider api
* parameters (undefined) **required** - The cluster resource
* subscriptionId (string) **required** - The customer subscription identifier

### Clusters_ListByResourceGroup
List cluster resource by resource group


```js
azure_arm_servicefabric.Clusters_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to which the resource belongs or get created
* api-version (string) **required** - The version of the ServiceFabric resouce provider api
* subscriptionId (string) **required** - The customer subscription identifier

