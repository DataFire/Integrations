# @datafire/azure_arm_containerregistry

Client library for ContainerRegistryManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_containerregistry
```

```js
let datafire = require('datafire');
let azure_arm_containerregistry = require('@datafire/azure_arm_containerregistry').create();

azure_arm_containerregistry.Registries_CheckNameAvailability({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### Registries_CheckNameAvailability
Checks whether the container registry name is available for use. The name must contain only alphanumeric characters, be globally unique, and between 5 and 60 characters in length.


```js
azure_arm_containerregistry.Registries_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "registryNameCheckRequest": null
}, context)
```

#### Parameters
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - The Microsoft Azure subscription ID.
* registryNameCheckRequest (undefined) **required** - A request to check whether the container registry name is available.

### Registries_List
Lists all the available container registries under the specified subscription.


```js
azure_arm_containerregistry.Registries_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - The Microsoft Azure subscription ID.

### Registries_ListByResourceGroup
Lists all the available container registries under the specified resource group.


```js
azure_arm_containerregistry.Registries_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - The Microsoft Azure subscription ID.
* resourceGroupName (string) **required** - The name of the resource group to which the container registry belongs.

### Registries_Delete
Deletes a container registry.


```js
azure_arm_containerregistry.Registries_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - The Microsoft Azure subscription ID.
* resourceGroupName (string) **required** - The name of the resource group to which the container registry belongs.
* registryName (string) **required** - The name of the container registry.

### Registries_GetProperties
Gets the properties of the specified container registry.


```js
azure_arm_containerregistry.Registries_GetProperties({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - The Microsoft Azure subscription ID.
* resourceGroupName (string) **required** - The name of the resource group to which the container registry belongs.
* registryName (string) **required** - The name of the container registry.

### Registries_Update
Updates a container registry with the specified parameters.


```js
azure_arm_containerregistry.Registries_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "registryUpdateParameters": null
}, context)
```

#### Parameters
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - The Microsoft Azure subscription ID.
* resourceGroupName (string) **required** - The name of the resource group to which the container registry belongs.
* registryName (string) **required** - The name of the container registry.
* registryUpdateParameters (undefined) **required** - The parameters for updating a container registry.

### Registries_CreateOrUpdate
Creates or updates a container registry with the specified parameters.


```js
azure_arm_containerregistry.Registries_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "registry": null
}, context)
```

#### Parameters
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - The Microsoft Azure subscription ID.
* resourceGroupName (string) **required** - The name of the resource group to which the container registry belongs.
* registryName (string) **required** - The name of the container registry.
* registry (undefined) **required** - An object that represents a container registry.

### Registries_GetCredentials
Gets the administrator login credentials for the specified container registry.


```js
azure_arm_containerregistry.Registries_GetCredentials({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - The Microsoft Azure subscription ID.
* resourceGroupName (string) **required** - The name of the resource group to which the container registry belongs.
* registryName (string) **required** - The name of the container registry.

### Registries_RegenerateCredentials
Regenerates the administrator login credentials for the specified container registry.


```js
azure_arm_containerregistry.Registries_RegenerateCredentials({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - The Microsoft Azure subscription ID.
* resourceGroupName (string) **required** - The name of the resource group to which the container registry belongs.
* registryName (string) **required** - The name of the container registry.

