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

azure_azsadmin_infraroleinstance.InfraRoleInstances_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

InfraRole instance operation endpoints and objects.

## Actions

### InfraRoleInstances_List
Get a list of all infra role instances at a location.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [InfraRoleInstanceList](#infraroleinstancelist)

### InfraRoleInstances_Get
Get an infra role instance.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_Get({
  "subscriptionId": "",
  "location": "",
  "infraRoleInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * infraRoleInstance **required** `string`: Name of an infra role instance.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [InfraRoleInstance](#infraroleinstance)

### InfraRoleInstances_PowerOff
Power off an infra role instance.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_PowerOff({
  "subscriptionId": "",
  "location": "",
  "infraRoleInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * infraRoleInstance **required** `string`: Name of an infra role instance.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Status of the compute operation.
  * properties `object`: The state of the operation.
    * provisioningState `string`: The state of the operation.

### InfraRoleInstances_PowerOn
Power on an infra role instance.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_PowerOn({
  "subscriptionId": "",
  "location": "",
  "infraRoleInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * infraRoleInstance **required** `string`: Name of an infra role instance.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Status of the compute operation.
  * properties `object`: The state of the operation.
    * provisioningState `string`: The state of the operation.

### InfraRoleInstances_Reboot
Reboot an infra role instance.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_Reboot({
  "subscriptionId": "",
  "location": "",
  "infraRoleInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * infraRoleInstance **required** `string`: Name of an infra role instance.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Status of the compute operation.
  * properties `object`: The state of the operation.
    * provisioningState `string`: The state of the operation.

### InfraRoleInstances_Shutdown
Shut down an infra role instance.


```js
azure_azsadmin_infraroleinstance.InfraRoleInstances_Shutdown({
  "subscriptionId": "",
  "location": "",
  "infraRoleInstance": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * infraRoleInstance **required** `string`: Name of an infra role instance.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Status of the compute operation.
  * properties `object`: The state of the operation.
    * provisioningState `string`: The state of the operation.



## Definitions

### InfraRoleInstance
* InfraRoleInstance `object`: The virtual machine resource is used to represent an infrastructure virtual machine in the Azure Stack environment. The fabric resource provider only surfaces infrastructure virtual machines. These machines are never created directly by the admin, but rather as a side effect of expanding admin services.
  * properties [InfraRoleInstanceModel](#infraroleinstancemodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### InfraRoleInstanceList
* InfraRoleInstanceList `object`: Pageable list of infra role instances.
  * nextLink `string`: URI to the next page.
  * value `array`: List of infra role instances for this page.
    * items [InfraRoleInstance](#infraroleinstance)

### InfraRoleInstanceModel
* InfraRoleInstanceModel `object`: All properties of an infra role instance.
  * scaleUnit `string`: The cluster that the virtual machine's host is part of.
  * scaleUnitNode `string`: URI to the scale unit node.
  * size [InfraRoleInstanceSize](#infraroleinstancesize)
  * state `string` (values: Stopped, Starting, Running, Stopping): The current state of the virtual machine.

### InfraRoleInstanceSize
* InfraRoleInstanceSize `object`: The capacity information for a virtual machine.
  * cores `integer`: The number of cores assigned to the virtual machine.
  * memoryGb `number`: The amount of memory, in GB, currently assigned to the virtual machine.  In Azure Stack V1, only static memory is used for infrastructure VMs.


