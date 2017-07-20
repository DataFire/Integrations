# @datafire/azure_arm_trafficmanager

Client library for TrafficManagerManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_trafficmanager
```

```js
let datafire = require('datafire');
let azure_arm_trafficmanager = require('@datafire/azure_arm_trafficmanager').actions;
let context = new datafire.Context();

azure_arm_trafficmanager.Profiles_CheckTrafficManagerRelativeDnsNameAvailability({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### Profiles_CheckTrafficManagerRelativeDnsNameAvailability
Checks the availability of a Traffic Manager Relative DNS name.


```js
azure_arm_trafficmanager.Profiles_CheckTrafficManagerRelativeDnsNameAvailability({
  "parameters": null,
  "api-version": ""
}, context)
```

#### Parameters
* parameters (undefined) **required** - Parameters supplied to check Traffic Manager name operation.
* api-version (string) **required** - Client Api Version.

### Profiles_ListAll
Lists all Traffic Manager profiles within a subscription.


```js
azure_arm_trafficmanager.Profiles_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Profiles_ListAllInResourceGroup
Lists all Traffic Manager profiles within a resource group.


```js
azure_arm_trafficmanager.Profiles_ListAllInResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group containing the Traffic Manager profiles to be listed.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Profiles_Delete
Deletes a Traffic Manager profile.


```js
azure_arm_trafficmanager.Profiles_Delete({
  "resourceGroupName": "",
  "profileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group containing the Traffic Manager profile to be deleted.
* profileName (string) **required** - The name of the Traffic Manager profile to be deleted.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Profiles_Get
Gets a Traffic Manager profile.


```js
azure_arm_trafficmanager.Profiles_Get({
  "resourceGroupName": "",
  "profileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group containing the Traffic Manager profile.
* profileName (string) **required** - The name of the Traffic Manager profile.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Profiles_Update
Update a Traffic Manager profile.


```js
azure_arm_trafficmanager.Profiles_Update({
  "resourceGroupName": "",
  "profileName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group containing the Traffic Manager profile.
* profileName (string) **required** - The name of the Traffic Manager profile.
* parameters (undefined) **required** - Class representing a Traffic Manager profile.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Profiles_CreateOrUpdate
Create or update a Traffic Manager profile.


```js
azure_arm_trafficmanager.Profiles_CreateOrUpdate({
  "resourceGroupName": "",
  "profileName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group containing the Traffic Manager profile.
* profileName (string) **required** - The name of the Traffic Manager profile.
* parameters (undefined) **required** - Class representing a Traffic Manager profile.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Endpoints_Delete
Deletes a Traffic Manager endpoint.


```js
azure_arm_trafficmanager.Endpoints_Delete({
  "resourceGroupName": "",
  "profileName": "",
  "endpointType": "",
  "endpointName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group containing the Traffic Manager endpoint to be deleted.
* profileName (string) **required** - The name of the Traffic Manager profile.
* endpointType (string) **required** - The type of the Traffic Manager endpoint to be deleted.
* endpointName (string) **required** - The name of the Traffic Manager endpoint to be deleted.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Endpoints_Get
Gets a Traffic Manager endpoint.


```js
azure_arm_trafficmanager.Endpoints_Get({
  "resourceGroupName": "",
  "profileName": "",
  "endpointType": "",
  "endpointName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group containing the Traffic Manager endpoint.
* profileName (string) **required** - The name of the Traffic Manager profile.
* endpointType (string) **required** - The type of the Traffic Manager endpoint.
* endpointName (string) **required** - The name of the Traffic Manager endpoint.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Endpoints_Update
Update a Traffic Manager endpoint.


```js
azure_arm_trafficmanager.Endpoints_Update({
  "resourceGroupName": "",
  "profileName": "",
  "endpointType": "",
  "endpointName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group containing the Traffic Manager endpoint to be updated.
* profileName (string) **required** - The name of the Traffic Manager profile.
* endpointType (string) **required** - The type of the Traffic Manager endpoint to be updated.
* endpointName (string) **required** - The name of the Traffic Manager endpoint to be updated.
* parameters (undefined) **required** - Class representing a Traffic Manager endpoint.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Endpoints_CreateOrUpdate
Create or update a Traffic Manager endpoint.


```js
azure_arm_trafficmanager.Endpoints_CreateOrUpdate({
  "resourceGroupName": "",
  "profileName": "",
  "endpointType": "",
  "endpointName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group containing the Traffic Manager endpoint to be created or updated.
* profileName (string) **required** - The name of the Traffic Manager profile.
* endpointType (string) **required** - The type of the Traffic Manager endpoint to be created or updated.
* endpointName (string) **required** - The name of the Traffic Manager endpoint to be created or updated.
* parameters (undefined) **required** - Class representing a Traffic Manager endpoint.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

