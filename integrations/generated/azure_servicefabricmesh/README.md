# @datafire/azure_servicefabricmesh

Client library for SeaBreezeManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_servicefabricmesh
```
```js
let azure_servicefabricmesh = require('@datafire/azure_servicefabricmesh').create({
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

APIs to deploy and manage resources to SeaBreeze.

## Actions

### Operations_List
Lists all the available operations provided by Service Fabric SeaBreeze resource provider.


```js
azure_servicefabricmesh.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.

#### Output
* output [OperationListResult](#operationlistresult)

### Application_ListBySubscription
Gets the information about all application resources in a given resource group. The information include the description and other properties of the application.


```js
azure_servicefabricmesh.Application_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.

#### Output
* output [ApplicationResourceDescriptionList](#applicationresourcedescriptionlist)

### Gateway_ListBySubscription
Gets the information about all gateway resources in a given resource group. The information include the description and other properties of the gateway.


```js
azure_servicefabricmesh.Gateway_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.

#### Output
* output [GatewayResourceDescriptionList](#gatewayresourcedescriptionlist)

### Network_ListBySubscription
Gets the information about all network resources in a given resource group. The information include the description and other properties of the network.


```js
azure_servicefabricmesh.Network_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.

#### Output
* output [NetworkResourceDescriptionList](#networkresourcedescriptionlist)

### Secret_ListBySubscription
Gets the information about all secret resources in a given resource group. The information include the description and other properties of the secret.


```js
azure_servicefabricmesh.Secret_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.

#### Output
* output [SecretResourceDescriptionList](#secretresourcedescriptionlist)

### Volume_ListBySubscription
Gets the information about all volume resources in a given resource group. The information include the description and other properties of the volume.


```js
azure_servicefabricmesh.Volume_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.

#### Output
* output [VolumeResourceDescriptionList](#volumeresourcedescriptionlist)

### Application_ListByResourceGroup
Gets the information about all application resources in a given resource group. The information include the description and other properties of the Application.


```js
azure_servicefabricmesh.Application_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name

#### Output
* output [ApplicationResourceDescriptionList](#applicationresourcedescriptionlist)

### Application_Delete
Deletes the application resource identified by the name.


```js
azure_servicefabricmesh.Application_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "applicationResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * applicationResourceName **required** `string`: The identity of the application.

#### Output
*Output schema unknown*

### Application_Get
Gets the information about the application resource with the given name. The information include the description and other properties of the application.


```js
azure_servicefabricmesh.Application_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "applicationResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * applicationResourceName **required** `string`: The identity of the application.

#### Output
* output [ApplicationResourceDescription](#applicationresourcedescription)

### Application_Create
Creates an application resource with the specified name, description and properties. If an application resource with the same name exists, then it is updated with the specified description and properties.


```js
azure_servicefabricmesh.Application_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "applicationResourceName": "",
  "applicationResourceDescription": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * applicationResourceName **required** `string`: The identity of the application.
  * applicationResourceDescription **required** [ApplicationResourceDescription](#applicationresourcedescription)

#### Output
* output [ApplicationResourceDescription](#applicationresourcedescription)

### Service_List
Gets the information about all services of an application resource. The information include the description and other properties of the Service.


```js
azure_servicefabricmesh.Service_List({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "applicationResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * applicationResourceName **required** `string`: The identity of the application.

#### Output
* output [ServiceResourceDescriptionList](#serviceresourcedescriptionlist)

### Service_Get
Gets the information about the service resource with the given name. The information include the description and other properties of the service.


```js
azure_servicefabricmesh.Service_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "applicationResourceName": "",
  "serviceResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * applicationResourceName **required** `string`: The identity of the application.
  * serviceResourceName **required** `string`: The identity of the service.

#### Output
* output [ServiceResourceDescription](#serviceresourcedescription)

### ServiceReplica_List
Gets the information about all replicas of a given service of an application. The information includes the runtime properties of the replica instance.


```js
azure_servicefabricmesh.ServiceReplica_List({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "applicationResourceName": "",
  "serviceResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * applicationResourceName **required** `string`: The identity of the application.
  * serviceResourceName **required** `string`: The identity of the service.

#### Output
* output [ServiceReplicaDescriptionList](#servicereplicadescriptionlist)

### ServiceReplica_Get
Gets the information about the service replica with the given name. The information include the description and other properties of the service replica.


```js
azure_servicefabricmesh.ServiceReplica_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "applicationResourceName": "",
  "serviceResourceName": "",
  "replicaName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * applicationResourceName **required** `string`: The identity of the application.
  * serviceResourceName **required** `string`: The identity of the service.
  * replicaName **required** `string`: Service Fabric replica name.

#### Output
* output [ServiceReplicaDescription](#servicereplicadescription)

### CodePackage_GetContainerLogs
Gets the logs for the container of the specified code package of the service replica.


```js
azure_servicefabricmesh.CodePackage_GetContainerLogs({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "applicationResourceName": "",
  "serviceResourceName": "",
  "replicaName": "",
  "codePackageName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * resourceGroupName **required** `string`: Azure resource group name
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * applicationResourceName **required** `string`: The identity of the application.
  * serviceResourceName **required** `string`: The identity of the service.
  * replicaName **required** `string`: Service Fabric replica name.
  * codePackageName **required** `string`: The name of code package of the service.
  * tail `integer`: Number of lines to show from the end of the logs. Default is 100.

#### Output
* output [ContainerLogs](#containerlogs)

### Gateway_ListByResourceGroup
Gets the information about all gateway resources in a given resource group. The information include the description and other properties of the Gateway.


```js
azure_servicefabricmesh.Gateway_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name

#### Output
* output [GatewayResourceDescriptionList](#gatewayresourcedescriptionlist)

### Gateway_Delete
Deletes the gateway resource identified by the name.


```js
azure_servicefabricmesh.Gateway_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * gatewayResourceName **required** `string`: The identity of the gateway.

#### Output
*Output schema unknown*

### Gateway_Get
Gets the information about the gateway resource with the given name. The information include the description and other properties of the gateway.


```js
azure_servicefabricmesh.Gateway_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * gatewayResourceName **required** `string`: The identity of the gateway.

#### Output
* output [GatewayResourceDescription](#gatewayresourcedescription)

### Gateway_Create
Creates a gateway resource with the specified name, description and properties. If a gateway resource with the same name exists, then it is updated with the specified description and properties. Use gateway resources to create a gateway for public connectivity for services within your application.


```js
azure_servicefabricmesh.Gateway_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayResourceName": "",
  "gatewayResourceDescription": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * gatewayResourceName **required** `string`: The identity of the gateway.
  * gatewayResourceDescription **required** [GatewayResourceDescription](#gatewayresourcedescription)

#### Output
* output [GatewayResourceDescription](#gatewayresourcedescription)

### Network_ListByResourceGroup
Gets the information about all network resources in a given resource group. The information include the description and other properties of the Network.


```js
azure_servicefabricmesh.Network_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name

#### Output
* output [NetworkResourceDescriptionList](#networkresourcedescriptionlist)

### Network_Delete
Deletes the network resource identified by the name.


```js
azure_servicefabricmesh.Network_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "networkResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * networkResourceName **required** `string`: The identity of the network.

#### Output
*Output schema unknown*

### Network_Get
Gets the information about the network resource with the given name. The information include the description and other properties of the network.


```js
azure_servicefabricmesh.Network_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "networkResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * networkResourceName **required** `string`: The identity of the network.

#### Output
* output [NetworkResourceDescription](#networkresourcedescription)

### Network_Create
Creates a network resource with the specified name, description and properties. If a network resource with the same name exists, then it is updated with the specified description and properties.


```js
azure_servicefabricmesh.Network_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "networkResourceName": "",
  "networkResourceDescription": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * networkResourceName **required** `string`: The identity of the network.
  * networkResourceDescription **required** [NetworkResourceDescription](#networkresourcedescription)

#### Output
* output [NetworkResourceDescription](#networkresourcedescription)

### Secret_ListByResourceGroup
Gets the information about all secret resources in a given resource group. The information include the description and other properties of the Secret.


```js
azure_servicefabricmesh.Secret_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name

#### Output
* output [SecretResourceDescriptionList](#secretresourcedescriptionlist)

### Secret_Delete
Deletes the secret resource identified by the name.


```js
azure_servicefabricmesh.Secret_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "secretResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * secretResourceName **required** `string`: The name of the secret resource.

#### Output
*Output schema unknown*

### Secret_Get
Gets the information about the secret resource with the given name. The information include the description and other properties of the secret.


```js
azure_servicefabricmesh.Secret_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "secretResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * secretResourceName **required** `string`: The name of the secret resource.

#### Output
* output [SecretResourceDescription](#secretresourcedescription)

### Secret_Create
Creates a secret resource with the specified name, description and properties. If a secret resource with the same name exists, then it is updated with the specified description and properties.


```js
azure_servicefabricmesh.Secret_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "secretResourceName": "",
  "secretResourceDescription": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * secretResourceName **required** `string`: The name of the secret resource.
  * secretResourceDescription **required** [SecretResourceDescription](#secretresourcedescription)

#### Output
* output [SecretResourceDescription](#secretresourcedescription)

### SecretValue_List
Gets information about all secret value resources of the specified secret resource. The information includes the names of the secret value resources, but not the actual values.


```js
azure_servicefabricmesh.SecretValue_List({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "secretResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * secretResourceName **required** `string`: The name of the secret resource.

#### Output
* output [SecretValueResourceDescriptionList](#secretvalueresourcedescriptionlist)

### SecretValue_Delete
Deletes the secret value resource identified by the name. The name of the resource is typically the version associated with that value. Deletion will fail if the specified value is in use.


```js
azure_servicefabricmesh.SecretValue_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "secretResourceName": "",
  "secretValueResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * secretResourceName **required** `string`: The name of the secret resource.
  * secretValueResourceName **required** `string`: The name of the secret resource value which is typically the version identifier for the value.

#### Output
*Output schema unknown*

### SecretValue_Get
Get the information about the specified named secret value resources. The information does not include the actual value of the secret.


```js
azure_servicefabricmesh.SecretValue_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "secretResourceName": "",
  "secretValueResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * secretResourceName **required** `string`: The name of the secret resource.
  * secretValueResourceName **required** `string`: The name of the secret resource value which is typically the version identifier for the value.

#### Output
* output [SecretValueResourceDescription](#secretvalueresourcedescription)

### SecretValue_Create
Creates a new value of the specified secret resource. The name of the value is typically the version identifier. Once created the value cannot be changed.


```js
azure_servicefabricmesh.SecretValue_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "secretResourceName": "",
  "secretValueResourceName": "",
  "secretValueResourceDescription": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * secretResourceName **required** `string`: The name of the secret resource.
  * secretValueResourceName **required** `string`: The name of the secret resource value which is typically the version identifier for the value.
  * secretValueResourceDescription **required** [SecretValueResourceDescription](#secretvalueresourcedescription)

#### Output
* output [SecretValueResourceDescription](#secretvalueresourcedescription)

### SecretValue_ListValue
Lists the decrypted value of the specified named value of the secret resource. This is a privileged operation.


```js
azure_servicefabricmesh.SecretValue_ListValue({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "secretResourceName": "",
  "secretValueResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * secretResourceName **required** `string`: The name of the secret resource.
  * secretValueResourceName **required** `string`: The name of the secret resource value which is typically the version identifier for the value.

#### Output
* output [SecretValue](#secretvalue)

### Volume_ListByResourceGroup
Gets the information about all volume resources in a given resource group. The information include the description and other properties of the Volume.


```js
azure_servicefabricmesh.Volume_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name

#### Output
* output [VolumeResourceDescriptionList](#volumeresourcedescriptionlist)

### Volume_Delete
Deletes the volume resource identified by the name.


```js
azure_servicefabricmesh.Volume_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "volumeResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * volumeResourceName **required** `string`: The identity of the volume.

#### Output
*Output schema unknown*

### Volume_Get
Gets the information about the volume resource with the given name. The information include the description and other properties of the volume.


```js
azure_servicefabricmesh.Volume_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "volumeResourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * volumeResourceName **required** `string`: The identity of the volume.

#### Output
* output [VolumeResourceDescription](#volumeresourcedescription)

### Volume_Create
Creates a volume resource with the specified name, description and properties. If a volume resource with the same name exists, then it is updated with the specified description and properties.


```js
azure_servicefabricmesh.Volume_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "volumeResourceName": "",
  "volumeResourceDescription": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The customer subscription identifier
  * api-version **required** `string` (values: 2018-09-01-preview): The version of the API. This parameter is required and its value must be `2018-09-01-preview`.
  * resourceGroupName **required** `string`: Azure resource group name
  * volumeResourceName **required** `string`: The identity of the volume.
  * volumeResourceDescription **required** [VolumeResourceDescription](#volumeresourcedescription)

#### Output
* output [VolumeResourceDescription](#volumeresourcedescription)



## Definitions

### AddRemoveReplicaScalingMechanism
* AddRemoveReplicaScalingMechanism `object`: Describes the horizontal auto scaling mechanism that adds or removes replicas (containers or container groups).
  * maxCount **required** `integer`: Maximum number of containers (scale up won't be performed above this number).
  * minCount **required** `integer`: Minimum number of containers (scale down won't be performed below this number).
  * scaleIncrement **required** `integer`: Each time auto scaling is performed, this number of containers will be added or removed.
  * kind **required** [AutoScalingMechanismKind](#autoscalingmechanismkind)

### ApplicationProperties
* ApplicationProperties `object`: Describes properties of a application resource.
  * debugParams `string`: Internal - used by Visual Studio to setup the debugging session on the local development environment.
  * description `string`: User readable description of the application.
  * diagnostics [DiagnosticsDescription](#diagnosticsdescription)
  * healthState [HealthState](#healthstate)
  * serviceNames `array`: Names of the services in the application.
    * items `string`
  * services `array`: Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource.
    * items [ServiceResourceDescription](#serviceresourcedescription)
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the application.
  * unhealthyEvaluation `string`: When the application's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy.

### ApplicationResourceDescription
* ApplicationResourceDescription `object`: This type describes an application resource.
  * properties **required** [ApplicationResourceProperties](#applicationresourceproperties)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ApplicationResourceDescriptionList
* ApplicationResourceDescriptionList `object`: A pageable list of application resources.
  * nextLink `string`: URI to fetch the next page of the list.
  * value `array`: One page of the list.
    * items [ApplicationResourceDescription](#applicationresourcedescription)

### ApplicationResourceProperties
* ApplicationResourceProperties: This type describes properties of an application resource.
  * provisioningState `string`: State of the resource.
  * debugParams `string`: Internal - used by Visual Studio to setup the debugging session on the local development environment.
  * description `string`: User readable description of the application.
  * diagnostics [DiagnosticsDescription](#diagnosticsdescription)
  * healthState [HealthState](#healthstate)
  * serviceNames `array`: Names of the services in the application.
    * items `string`
  * services `array`: Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource.
    * items [ServiceResourceDescription](#serviceresourcedescription)
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the application.
  * unhealthyEvaluation `string`: When the application's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy.

### ApplicationScopedVolume
* ApplicationScopedVolume `object`: Describes a volume whose lifetime is scoped to the application's lifetime.
  * creationParameters **required** [ApplicationScopedVolumeCreationParameters](#applicationscopedvolumecreationparameters)
  * destinationPath **required** `string`: The path within the container at which the volume should be mounted. Only valid path characters are allowed.
  * name **required** `string`: Name of the volume being referenced.
  * readOnly `boolean`: The flag indicating whether the volume is read only. Default is 'false'.

### ApplicationScopedVolumeCreationParameters
* ApplicationScopedVolumeCreationParameters `object`: Describes parameters for creating application-scoped volumes.
  * description `string`: User readable description of the volume.
  * kind **required** [ApplicationScopedVolumeKind](#applicationscopedvolumekind)

### ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk
* ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk `object`: Describes parameters for creating application-scoped volumes provided by Service Fabric Volume Disks
  * sizeDisk **required** `string` (values: Small, Medium, Large): Volume size
  * description `string`: User readable description of the volume.
  * kind **required** [ApplicationScopedVolumeKind](#applicationscopedvolumekind)

### ApplicationScopedVolumeKind
* ApplicationScopedVolumeKind `string` (values: ServiceFabricVolumeDisk): Specifies the application-scoped volume kind.

### AutoScalingMechanism
* AutoScalingMechanism `object`: Describes the mechanism for performing auto scaling operation. Derived classes will describe the actual mechanism.
  * kind **required** [AutoScalingMechanismKind](#autoscalingmechanismkind)

### AutoScalingMechanismKind
* AutoScalingMechanismKind `string` (values: AddRemoveReplica): Enumerates the mechanisms for auto scaling.

### AutoScalingMetric
* AutoScalingMetric `object`: Describes the metric that is used for triggering auto scaling operation. Derived classes will describe resources or metrics.
  * kind **required** [AutoScalingMetricKind](#autoscalingmetrickind)

### AutoScalingMetricKind
* AutoScalingMetricKind `string` (values: Resource): Enumerates the metrics that are used for triggering auto scaling.

### AutoScalingPolicy
* AutoScalingPolicy `object`: Describes the auto scaling policy
  * mechanism **required** [AutoScalingMechanism](#autoscalingmechanism)
  * name **required** `string`: The name of the auto scaling policy.
  * trigger **required** [AutoScalingTrigger](#autoscalingtrigger)

### AutoScalingResourceMetric
* AutoScalingResourceMetric `object`: Describes the resource that is used for triggering auto scaling.
  * name **required** [AutoScalingResourceMetricName](#autoscalingresourcemetricname)
  * kind **required** [AutoScalingMetricKind](#autoscalingmetrickind)

### AutoScalingResourceMetricName
* AutoScalingResourceMetricName `string` (values: cpu, memoryInGB): Enumerates the resources that are used for triggering auto scaling.

### AutoScalingTrigger
* AutoScalingTrigger `object`: Describes the trigger for performing auto scaling operation.
  * kind **required** [AutoScalingTriggerKind](#autoscalingtriggerkind)

### AutoScalingTriggerKind
* AutoScalingTriggerKind `string` (values: AverageLoad): Enumerates the triggers for auto scaling.

### AvailableOperationDisplay
* AvailableOperationDisplay `object`: An operation available at the listed Azure resource provider.
  * description `string`: Description of the available operation.
  * operation `string`: Name of the available operation.
  * provider `string`: Name of the operation provider.
  * resource `string`: Name of the resource on which the operation is available.

### AverageLoadScalingTrigger
* AverageLoadScalingTrigger `object`: Describes the average load trigger used for auto scaling.
  * lowerLoadThreshold **required** `number`: Lower load threshold (if average load is below this threshold, service will scale down).
  * metric **required** [AutoScalingMetric](#autoscalingmetric)
  * scaleIntervalInSeconds **required** `integer`: Scale interval that indicates how often will this trigger be checked.
  * upperLoadThreshold **required** `number`: Upper load threshold (if average load is above this threshold, service will scale up).
  * kind **required** [AutoScalingTriggerKind](#autoscalingtriggerkind)

### AzureInternalMonitoringPipelineSinkDescription
* AzureInternalMonitoringPipelineSinkDescription `object`: Diagnostics settings for Geneva.
  * accountName `string`: Azure Internal monitoring pipeline account.
  * autoKeyConfigUrl `string`: Azure Internal monitoring pipeline autokey associated with the certificate.
  * maConfigUrl `string`: Azure Internal monitoring agent configuration.
  * namespace `string`: Azure Internal monitoring pipeline account namespace.
  * description `string`: A description of the sink.
  * kind **required** [DiagnosticsSinkKind](#diagnosticssinkkind)
  * name `string`: Name of the sink. This value is referenced by DiagnosticsReferenceDescription

### ContainerCodePackageProperties
* ContainerCodePackageProperties `object`: Describes a container and its runtime properties.
  * commands `array`: Command array to execute within the container in exec form.
    * items `string`
  * diagnostics [DiagnosticsRef](#diagnosticsref)
  * endpoints `array`: The endpoints exposed by this container.
    * items [EndpointProperties](#endpointproperties)
  * entrypoint `string`: Override for the default entry point in the container.
  * environmentVariables `array`: The environment variables to set in this container
    * items [EnvironmentVariable](#environmentvariable)
  * image **required** `string`: The Container image to use.
  * imageRegistryCredential [ImageRegistryCredential](#imageregistrycredential)
  * instanceView [ContainerInstanceView](#containerinstanceview)
  * labels `array`: The labels to set in this container.
    * items [ContainerLabel](#containerlabel)
  * name **required** `string`: The name of the code package.
  * reliableCollectionsRefs `array`: A list of ReliableCollection resources used by this particular code package. Please refer to ReliableCollectionsRef for more details.
    * items [ReliableCollectionsRef](#reliablecollectionsref)
  * resources **required** [ResourceRequirements](#resourcerequirements)
  * settings `array`: The settings to set in this container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
    * items [Setting](#setting)
  * volumeRefs `array`: Volumes to be attached to the container. The lifetime of these volumes is independent of the application's lifetime.
    * items [VolumeReference](#volumereference)
  * volumes `array`: Volumes to be attached to the container. The lifetime of these volumes is scoped to the application's lifetime.
    * items [ApplicationScopedVolume](#applicationscopedvolume)

### ContainerEvent
* ContainerEvent `object`: A container event.
  * count `integer`: The count of the event.
  * firstTimestamp `string`: Date/time of the first event.
  * lastTimestamp `string`: Date/time of the last event.
  * message `string`: The event message
  * name `string`: The name of the container event.
  * type `string`: The event type.

### ContainerInstanceView
* ContainerInstanceView `object`: Runtime information of a container instance.
  * currentState [ContainerState](#containerstate)
  * events `array`: The events of this container instance.
    * items [ContainerEvent](#containerevent)
  * previousState [ContainerState](#containerstate)
  * restartCount `integer`: The number of times the container has been restarted.

### ContainerLabel
* ContainerLabel `object`: Describes a container label.
  * name **required** `string`: The name of the container label.
  * value **required** `string`: The value of the container label.

### ContainerLogs
* ContainerLogs `object`: Container logs.
  * content `string`: Container logs.

### ContainerState
* ContainerState `object`: The container state.
  * detailStatus `string`: Human-readable status of this state.
  * exitCode `string`: The container exit code.
  * finishTime `string`: Date/time when the container state finished.
  * startTime `string`: Date/time when the container state started.
  * state `string`: The state of this container

### DiagnosticsDescription
* DiagnosticsDescription `object`: Describes the diagnostics options available
  * defaultSinkRefs `array`: The sinks to be used if diagnostics is enabled. Sink choices can be overridden at the service and code package level.
    * items `string`
  * enabled `boolean`: Status of whether or not sinks are enabled.
  * sinks `array`: List of supported sinks that can be referenced.
    * items [DiagnosticsSinkProperties](#diagnosticssinkproperties)

### DiagnosticsRef
* DiagnosticsRef `object`: Reference to sinks in DiagnosticsDescription.
  * enabled `boolean`: Status of whether or not sinks are enabled.
  * sinkRefs `array`: List of sinks to be used if enabled. References the list of sinks in DiagnosticsDescription.
    * items `string`

### DiagnosticsSinkKind
* DiagnosticsSinkKind `string` (values: Invalid, AzureInternalMonitoringPipeline): The kind of DiagnosticsSink.

### DiagnosticsSinkProperties
* DiagnosticsSinkProperties `object`: Properties of a DiagnosticsSink.
  * description `string`: A description of the sink.
  * kind **required** [DiagnosticsSinkKind](#diagnosticssinkkind)
  * name `string`: Name of the sink. This value is referenced by DiagnosticsReferenceDescription

### EndpointProperties
* EndpointProperties `object`: Describes a container endpoint.
  * name **required** `string`: The name of the endpoint.
  * port `integer`: Port used by the container.

### EndpointRef
* EndpointRef `object`: Describes a reference to a service endpoint.
  * name `string`: Name of the endpoint.

### EnvironmentVariable
* EnvironmentVariable `object`: Describes an environment variable for the container.
  * name `string`: The name of the environment variable.
  * value `string`: The value of the environment variable.

### ErrorDetailsModel
* ErrorDetailsModel `object`: Error model details information
  * code **required** `string`
  * message **required** `string`: Error message.

### ErrorErrorModel
* ErrorErrorModel `object`: Error model information
  * code **required** `string`
  * details `array`: List of error message details.
    * items [ErrorDetailsModel](#errordetailsmodel)
  * innerError `string`
  * message `string`: Error message.

### ErrorModel
* ErrorModel `object`: The error details.
  * error **required** [ErrorErrorModel](#errorerrormodel)

### GatewayDestination
* GatewayDestination `object`: Describes destination endpoint for routing traffic.
  * applicationName **required** `string`: Name of the service fabric Mesh application.
  * endpointName **required** `string`: name of the endpoint in the service.
  * serviceName **required** `string`: service that contains the endpoint.

### GatewayProperties
* GatewayProperties `object`: Describes properties of a gateway resource.
  * description `string`: User readable description of the gateway.
  * destinationNetwork **required** [NetworkRef](#networkref)
  * http `array`: Configuration for http connectivity for this gateway.
    * items [HttpConfig](#httpconfig)
  * ipAddress `string`: IP address of the gateway. This is populated in the response and is ignored for incoming requests.
  * sourceNetwork **required** [NetworkRef](#networkref)
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the gateway.
  * tcp `array`: Configuration for tcp connectivity for this gateway.
    * items [TcpConfig](#tcpconfig)

### GatewayResourceDescription
* GatewayResourceDescription `object`: This type describes a gateway resource.
  * properties **required** [GatewayResourceProperties](#gatewayresourceproperties)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### GatewayResourceDescriptionList
* GatewayResourceDescriptionList `object`: A pageable list of gateway resources.
  * nextLink `string`: URI to fetch the next page of the list.
  * value `array`: One page of the list.
    * items [GatewayResourceDescription](#gatewayresourcedescription)

### GatewayResourceProperties
* GatewayResourceProperties: This type describes properties of a gateway resource.
  * provisioningState `string`: State of the resource.
  * description `string`: User readable description of the gateway.
  * destinationNetwork **required** [NetworkRef](#networkref)
  * http `array`: Configuration for http connectivity for this gateway.
    * items [HttpConfig](#httpconfig)
  * ipAddress `string`: IP address of the gateway. This is populated in the response and is ignored for incoming requests.
  * sourceNetwork **required** [NetworkRef](#networkref)
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the gateway.
  * tcp `array`: Configuration for tcp connectivity for this gateway.
    * items [TcpConfig](#tcpconfig)

### HealthState
* HealthState `string` (values: Invalid, Ok, Warning, Error, Unknown): The health state of a Service Fabric entity such as Cluster, Node, Application, Service, Partition, Replica etc.

### HttpConfig
* HttpConfig `object`: Describes the http configuration for external connectivity for this network.
  * hosts **required** `array`: description for routing.
    * items [HttpHostConfig](#httphostconfig)
  * name **required** `string`: http gateway config name.
  * port **required** `integer`: Specifies the port at which the service endpoint below needs to be exposed.

### HttpHostConfig
* HttpHostConfig `object`: Describes the hostname properties for http routing.
  * name **required** `string`: http hostname config name.
  * routes **required** `array`: Route information to use for routing. Routes are processed in the order they are specified. Specify routes that are more specific before routes that can handle general cases.
    * items [HttpRouteConfig](#httprouteconfig)

### HttpRouteConfig
* HttpRouteConfig `object`: Describes the hostname properties for http routing.
  * destination **required** [GatewayDestination](#gatewaydestination)
  * match **required** [HttpRouteMatchRule](#httproutematchrule)
  * name **required** `string`: http route name.

### HttpRouteMatchHeader
* HttpRouteMatchHeader `object`: Describes header information for http route matching.
  * name **required** `string`: Name of header to match in request.
  * type `string` (values: exact): how to match header value
  * value `string`: Value of header to match in request.

### HttpRouteMatchPath
* HttpRouteMatchPath `object`: Path to match for routing.
  * rewrite `string`: replacement string for matched part of the Uri.
  * type **required** `string` (values: prefix): how to match value in the Uri
  * value **required** `string`: Uri path to match for request.

### HttpRouteMatchRule
* HttpRouteMatchRule `object`: Describes a rule for http route matching.
  * headers `array`: headers and their values to match in request.
    * items [HttpRouteMatchHeader](#httproutematchheader)
  * path **required** [HttpRouteMatchPath](#httproutematchpath)

### ImageRegistryCredential
* ImageRegistryCredential `object`: Image registry credential.
  * password `string`: The password for the private registry. The password is required for create or update operations, however it is not returned in the get or list operations.
  * server **required** `string`: Docker image registry server, without protocol such as `http` and `https`.
  * username **required** `string`: The username for the private registry.

### InlinedValueSecretResourceProperties
* InlinedValueSecretResourceProperties: Describes the properties of a secret resource whose value is provided explicitly as plaintext. The secret resource may have multiple values, each being uniquely versioned. The secret value of each version is stored encrypted, and delivered as plaintext into the context of applications referencing it.
  * contentType `string`: The type of the content stored in the secret value. The value of this property is opaque to Service Fabric. Once set, the value of this property cannot be changed.
  * description `string`: User readable description of the secret.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the secret.
  * kind **required** [SecretKind](#secretkind)
  * provisioningState `string`: State of the resource.

### LocalNetworkResourceProperties
* LocalNetworkResourceProperties `object`: Information about a Service Fabric container network local to a single Service Fabric cluster.
  * networkAddressPrefix [NetworkAddressPrefix](#networkaddressprefix)
  * description `string`: User readable description of the network.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the network.
  * kind **required** [NetworkKind](#networkkind)
  * provisioningState `string`: State of the resource.

### ManagedProxyResource
* ManagedProxyResource `object`: The resource model definition for Azure Resource Manager proxy resource. It will have everything other than required location and tags. This proxy resource is explicitly created or updated by including it in the parent resource.
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### NetworkAddressPrefix
* NetworkAddressPrefix `string`: Address space for a container network. This is expressed in CIDR notation.

### NetworkKind
* NetworkKind `string` (values: Local): The type of a Service Fabric container network.

### NetworkRef
* NetworkRef `object`: Describes a network reference in a service.
  * endpointRefs `array`: A list of endpoints that are exposed on this network.
    * items [EndpointRef](#endpointref)
  * name `string`: Name of the network

### NetworkResourceDescription
* NetworkResourceDescription `object`: This type describes a network resource.
  * properties **required** [NetworkResourceProperties](#networkresourceproperties)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### NetworkResourceDescriptionList
* NetworkResourceDescriptionList `object`: A pageable list of network resources.
  * nextLink `string`: URI to fetch the next page of the list.
  * value `array`: One page of the list.
    * items [NetworkResourceDescription](#networkresourcedescription)

### NetworkResourceProperties
* NetworkResourceProperties `object`: Describes properties of a network resource.
  * description `string`: User readable description of the network.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the network.
  * kind **required** [NetworkKind](#networkkind)
  * provisioningState `string`: State of the resource.

### NetworkResourcePropertiesBase
* NetworkResourcePropertiesBase `object`: This type describes the properties of a network resource, including its kind.
  * kind **required** [NetworkKind](#networkkind)
  * provisioningState `string`: State of the resource.

### OperatingSystemType
* OperatingSystemType `string` (values: Linux, Windows): The operation system required by the code in service.

### OperationListResult
* OperationListResult `object`: Describes the result of the request to list Service Fabric operations.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Service Fabric operations supported by the Microsoft.ServiceFabric resource provider.
    * items [OperationResult](#operationresult)

### OperationResult
* OperationResult `object`: List of operations available at the listed Azure resource provider.
  * display [AvailableOperationDisplay](#availableoperationdisplay)
  * name `string`: The name of the operation.
  * nextLink `string`: The URL to use for getting the next set of results.
  * origin `string`: Origin result

### ProvisionedResourceProperties
* ProvisionedResourceProperties `object`: Describes common properties of a provisioned resource.
  * provisioningState `string`: State of the resource.

### ProxyResource
* ProxyResource: The resource model definition for Azure Resource Manager proxy resource. It will have everything other than required location and tags.
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ReliableCollectionsRef
* ReliableCollectionsRef `object`: Specifying this parameter adds support for reliable collections
  * doNotPersistState `boolean`: False (the default) if ReliableCollections state is persisted to disk as usual. True if you do not want to persist state, in which case replication is still enabled and you can use ReliableCollections as distributed cache.
  * name **required** `string`: Name of ReliableCollection resource. Right now it's not used and you can use any string.

### Resource
* Resource `object`: The resource model definition for Azure Resource Manager resource.
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ResourceLimits
* ResourceLimits `object`: This type describes the resource limits for a given container. It describes the most amount of resources a container is allowed to use before being restarted.
  * cpu `number`: CPU limits in cores. At present, only full cores are supported.
  * memoryInGB `number`: The memory limit in GB.

### ResourceRequests
* ResourceRequests `object`: This type describes the requested resources for a given container. It describes the least amount of resources required for the container. A container can consume more than requested resources up to the specified limits before being restarted. Currently, the requested resources are treated as limits.
  * cpu **required** `number`: Requested number of CPU cores. At present, only full cores are supported.
  * memoryInGB **required** `number`: The memory request in GB for this container.

### ResourceRequirements
* ResourceRequirements `object`: This type describes the resource requirements for a container or a service.
  * limits [ResourceLimits](#resourcelimits)
  * requests **required** [ResourceRequests](#resourcerequests)

### ResourceStatus
* ResourceStatus `string` (values: Unknown, Ready, Upgrading, Creating, Deleting, Failed): Status of the resource.

### SecretKind
* SecretKind `string` (values: inlinedValue): Describes the kind of secret.

### SecretResourceDescription
* SecretResourceDescription `object`: This type describes a secret resource.
  * properties **required** [SecretResourceProperties](#secretresourceproperties)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### SecretResourceDescriptionList
* SecretResourceDescriptionList `object`: A pageable list of secret resources.
  * nextLink `string`: URI to fetch the next page of the list.
  * value `array`: One page of the list.
    * items [SecretResourceDescription](#secretresourcedescription)

### SecretResourceProperties
* SecretResourceProperties `object`: Describes the properties of a secret resource.
  * contentType `string`: The type of the content stored in the secret value. The value of this property is opaque to Service Fabric. Once set, the value of this property cannot be changed.
  * description `string`: User readable description of the secret.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the secret.
  * kind **required** [SecretKind](#secretkind)
  * provisioningState `string`: State of the resource.

### SecretResourcePropertiesBase
* SecretResourcePropertiesBase `object`: This type describes the properties of a secret resource, including its kind.
  * kind **required** [SecretKind](#secretkind)
  * provisioningState `string`: State of the resource.

### SecretValue
* SecretValue `object`: This type represents the unencrypted value of the secret.
  * value `string`: The actual value of the secret.

### SecretValueProperties
* SecretValueProperties `object`: This type describes properties of secret value resource.
  * value `string`: The actual value of the secret.

### SecretValueResourceDescription
* SecretValueResourceDescription `object`: This type describes a value of a secret resource. The name of this resource is the version identifier corresponding to this secret value.
  * properties **required** [SecretValueResourceProperties](#secretvalueresourceproperties)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### SecretValueResourceDescriptionList
* SecretValueResourceDescriptionList `object`: A pageable list of values of a secret resource. The information does not include only the name of the value and not the actual unencrypted value.
  * nextLink `string`: URI to fetch the next page of the list.
  * value `array`: One page of the list.
    * items [SecretValueResourceDescription](#secretvalueresourcedescription)

### SecretValueResourceProperties
* SecretValueResourceProperties: This type describes properties of a secret value resource.
  * provisioningState `string`: State of the resource.
  * value `string`: The actual value of the secret.

### ServiceProperties
* ServiceProperties `object`: Describes properties of a service resource.
  * autoScalingPolicies `array`: Auto scaling policies
    * items [AutoScalingPolicy](#autoscalingpolicy)
  * description `string`: User readable description of the service.
  * healthState [HealthState](#healthstate)
  * replicaCount `integer`: The number of replicas of the service to create. Defaults to 1 if not specified.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the service.
  * unhealthyEvaluation `string`: When the service's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the service is marked unhealthy.

### ServiceReplicaDescription
* ServiceReplicaDescription `object`: Describes a replica of a service resource.
  * replicaName **required** `string`: Name of the replica.
  * codePackages **required** `array`: Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).
    * items [ContainerCodePackageProperties](#containercodepackageproperties)
  * diagnostics [DiagnosticsRef](#diagnosticsref)
  * networkRefs `array`: The names of the private networks that this service needs to be part of.
    * items [NetworkRef](#networkref)
  * osType **required** [OperatingSystemType](#operatingsystemtype)

### ServiceReplicaDescriptionList
* ServiceReplicaDescriptionList `object`: A pageable list of service replicas.
  * nextLink `string`: URI to fetch the next page of the list.
  * value `array`: One page of the list.
    * items [ServiceReplicaDescription](#servicereplicadescription)

### ServiceReplicaProperties
* ServiceReplicaProperties `object`: Describes the properties of a service replica.
  * codePackages **required** `array`: Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).
    * items [ContainerCodePackageProperties](#containercodepackageproperties)
  * diagnostics [DiagnosticsRef](#diagnosticsref)
  * networkRefs `array`: The names of the private networks that this service needs to be part of.
    * items [NetworkRef](#networkref)
  * osType **required** [OperatingSystemType](#operatingsystemtype)

### ServiceResourceDescription
* ServiceResourceDescription `object`: This type describes a service resource.
  * properties **required** [ServiceResourceProperties](#serviceresourceproperties)
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ServiceResourceDescriptionList
* ServiceResourceDescriptionList `object`: A pageable list of service resources.
  * nextLink `string`: URI to fetch the next page of the list.
  * value `array`: One page of the list.
    * items [ServiceResourceDescription](#serviceresourcedescription)

### ServiceResourceProperties
* ServiceResourceProperties: This type describes properties of a service resource.
  * provisioningState `string`: State of the resource.
  * codePackages **required** `array`: Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).
    * items [ContainerCodePackageProperties](#containercodepackageproperties)
  * diagnostics [DiagnosticsRef](#diagnosticsref)
  * networkRefs `array`: The names of the private networks that this service needs to be part of.
    * items [NetworkRef](#networkref)
  * osType **required** [OperatingSystemType](#operatingsystemtype)
  * autoScalingPolicies `array`: Auto scaling policies
    * items [AutoScalingPolicy](#autoscalingpolicy)
  * description `string`: User readable description of the service.
  * healthState [HealthState](#healthstate)
  * replicaCount `integer`: The number of replicas of the service to create. Defaults to 1 if not specified.
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the service.
  * unhealthyEvaluation `string`: When the service's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the service is marked unhealthy.

### Setting
* Setting `object`: Describes a setting for the container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
  * name `string`: The name of the setting.
  * value `string`: The value of the setting.

### TcpConfig
* TcpConfig `object`: Describes the tcp configuration for external connectivity for this network.
  * destination **required** [GatewayDestination](#gatewaydestination)
  * name **required** `string`: tcp gateway config name.
  * port **required** `integer`: Specifies the port at which the service endpoint below needs to be exposed.

### TrackedResource
* TrackedResource `object`: The resource model definition for Azure Resource Manager tracked top-level resource.
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### VolumeProperties
* VolumeProperties `object`: Describes properties of a volume resource.
  * azureFileParameters [VolumeProviderParametersAzureFile](#volumeproviderparametersazurefile)
  * description `string`: User readable description of the volume.
  * provider **required** [VolumeProvider](#volumeprovider)
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the volume.

### VolumeProvider
* VolumeProvider `string` (values: SFAzureFile): Describes the provider of the volume resource.

### VolumeProviderParametersAzureFile
* VolumeProviderParametersAzureFile `object`: This type describes a volume provided by an Azure Files file share.
  * accountKey `string`: Access key of the Azure storage account for the File Share.
  * accountName **required** `string`: Name of the Azure storage account for the File Share.
  * shareName **required** `string`: Name of the Azure Files file share that provides storage for the volume.

### VolumeReference
* VolumeReference `object`: Describes a reference to a volume resource.
  * destinationPath **required** `string`: The path within the container at which the volume should be mounted. Only valid path characters are allowed.
  * name **required** `string`: Name of the volume being referenced.
  * readOnly `boolean`: The flag indicating whether the volume is read only. Default is 'false'.

### VolumeResourceDescription
* VolumeResourceDescription `object`: This type describes a volume resource.
  * properties **required** [VolumeResourceProperties](#volumeresourceproperties)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### VolumeResourceDescriptionList
* VolumeResourceDescriptionList `object`: A pageable list of volume resources.
  * nextLink `string`: URI to fetch the next page of the list.
  * value `array`: One page of the list.
    * items [VolumeResourceDescription](#volumeresourcedescription)

### VolumeResourceProperties
* VolumeResourceProperties: This type describes properties of a volume resource.
  * provisioningState `string`: State of the resource.
  * azureFileParameters [VolumeProviderParametersAzureFile](#volumeproviderparametersazurefile)
  * description `string`: User readable description of the volume.
  * provider **required** [VolumeProvider](#volumeprovider)
  * status [ResourceStatus](#resourcestatus)
  * statusDetails `string`: Gives additional information about the current status of the volume.


