# @datafire/azure_arm_compute_containerservice

Client library for ContainerServiceClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_compute_containerservice
```

```js
let datafire = require('datafire');
let azure_arm_compute_containerservice = require('@datafire/azure_arm_compute_containerservice').actions;
let context = new datafire.Context();

azure_arm_compute_containerservice.ContainerServices_List({}, context).then(data => {
  console.log(data);
})
```

## Description
The Container Service Client.

## Actions
### ContainerServices_List
Gets a list of container services in the specified subscription. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.


```js
azure_arm_compute_containerservice.ContainerServices_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ContainerServices_ListByResourceGroup
Gets a list of container services in the specified subscription and resource group. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.


```js
azure_arm_compute_containerservice.ContainerServices_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ContainerServices_Delete
Deletes the specified container service in the specified subscription and resource group. The operation does not delete other resources created as part of creating a container service, including storage accounts, VMs, and availability sets. All the other resources created with the container service are part of the same resource group and can be deleted individually.


```js
azure_arm_compute_containerservice.ContainerServices_Delete({
  "resourceGroupName": "",
  "containerServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* containerServiceName (string) **required** - The name of the container service in the specified subscription and resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ContainerServices_Get
Gets the properties of the specified container service in the specified subscription and resource group. The operation returns the properties including state, orchestrator, number of masters and agents, and FQDNs of masters and agents. 


```js
azure_arm_compute_containerservice.ContainerServices_Get({
  "resourceGroupName": "",
  "containerServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* containerServiceName (string) **required** - The name of the container service in the specified subscription and resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ContainerServices_CreateOrUpdate
Creates or updates a container service with the specified configuration of orchestrator, masters, and agents.


```js
azure_arm_compute_containerservice.ContainerServices_CreateOrUpdate({
  "resourceGroupName": "",
  "containerServiceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* containerServiceName (string) **required** - The name of the container service in the specified subscription and resource group.
* parameters (undefined) **required** - Container service.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

