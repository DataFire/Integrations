# @datafire/azure_azsadmin_infraroleinstance

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_infraroleinstance
```
```js
let azure_azsadmin_infraroleinstance = require('@datafire/azure_azsadmin_infraroleinstance').create({
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

Infrastructure role instance operation endpoints and objects.

## Actions

### InfraRoleInstances_List
Returns a list of all infrastructure role instances at a location.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [InfraRoleInstanceList](#infraroleinstancelist)

### InfraRoleInstances_Get
Return the requested infrastructure role instance.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "infraRoleInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * infraRoleInstance **required** `string`: Name of an infrastructure role instance.
  * api-version **required** `string`: Client API Version.

#### Output
* output [InfraRoleInstance](#infraroleinstance)

### InfraRoleInstances_PowerOff
Power off an infrastructure role instance.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_PowerOff({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "infraRoleInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * infraRoleInstance **required** `string`: Name of an infrastructure role instance.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### InfraRoleInstances_PowerOn
Power on an infrastructure role instance.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_PowerOn({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "infraRoleInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * infraRoleInstance **required** `string`: Name of an infrastructure role instance.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### InfraRoleInstances_Reboot
Reboot an infrastructure role instance.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_Reboot({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "infraRoleInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * infraRoleInstance **required** `string`: Name of an infrastructure role instance.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### InfraRoleInstances_Shutdown
Shut down an infrastructure role instance.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_Shutdown({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "infraRoleInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * infraRoleInstance **required** `string`: Name of an infrastructure role instance.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*



## Definitions

### InfraRoleInstance
* InfraRoleInstance `object`: The virtual machine resource is used to represent an infrastructure virtual machine in the Azure Stack environment. The fabric resource provider only surfaces infrastructure virtual machines. These machines are never created directly by the admin, but rather as a side effect of expanding admin services.
  * properties [InfraRoleInstanceModel](#infraroleinstancemodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### InfraRoleInstanceList
* InfraRoleInstanceList `object`: Pageable list of infrastructure role instances.
  * nextLink `string`: URI to the next page.
  * value `array`: List of infrastructure role instances.
    * items [InfraRoleInstance](#infraroleinstance)

### InfraRoleInstanceModel
* InfraRoleInstanceModel `object`: All properties of an infrastructure role instance.
  * scaleUnit `string`: The cluster that the virtual machine's host is part of.
  * scaleUnitNode `string`: URI to the scale unit node.
  * size [InfraRoleInstanceSize](#infraroleinstancesize)
  * state `string` (values: Stopped, Starting, Running, Stopping): The current state of the virtual machine.

### InfraRoleInstanceSize
* InfraRoleInstanceSize `object`: The capacity information for a virtual machine.
  * cores `integer`: The number of cores assigned to the virtual machine.
  * memoryGb `number`: The amount of memory, in GB, currently assigned to the virtual machine.


