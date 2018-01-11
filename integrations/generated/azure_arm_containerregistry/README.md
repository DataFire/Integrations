# @datafire/azure_arm_containerregistry

Client library for ContainerRegistryManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_containerregistry
```
```js
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

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * registryNameCheckRequest **required** [RegistryNameCheckRequest](#registrynamecheckrequest)

#### Output
* output [RegistryNameStatus](#registrynamestatus)

### Registries_List
Lists all the available container registries under the specified subscription.


```js
azure_arm_containerregistry.Registries_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.

#### Output
* output [RegistryListResult](#registrylistresult)

### Registries_ListByResourceGroup
Lists all the available container registries under the specified resource group.


```js
azure_arm_containerregistry.Registries_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.

#### Output
* output [RegistryListResult](#registrylistresult)

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

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
* output [Registry](#registry)

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

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * registryUpdateParameters **required** [RegistryUpdateParameters](#registryupdateparameters)

#### Output
* output [Registry](#registry)

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

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * registry **required** [Registry](#registry)

#### Output
* output [Registry](#registry)

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

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
* output [RegistryCredentials](#registrycredentials)

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

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.

#### Output
* output [RegistryCredentials](#registrycredentials)



## Definitions

### Registry
* Registry `object`: An object that represents a container registry.
  * properties [RegistryProperties](#registryproperties)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### RegistryCredentials
* RegistryCredentials `object`: The result of a request to get the administrator login credentials for a container registry.
  * password `string`: The administrator password.
  * username `string`: The administrator username.

### RegistryListResult
* RegistryListResult `object`: The result of a request to list container registries.
  * nextLink `string`: The URI that can be used to request the next list of container registries.
  * value `array`: The list of container registries. Since this list may be incomplete, the nextLink field should be used to request the next list of container registries.
    * items [Registry](#registry)

### RegistryNameCheckRequest
* RegistryNameCheckRequest `object`: A request to check whether the container registry name is available.
  * name **required** `string`: The name of the container registry.
  * type **required** `string` (values: Microsoft.ContainerRegistry/registries): The resource type of the container registry. This field must be set to "Microsoft.ContainerRegistry/registries".

### RegistryNameStatus
* RegistryNameStatus `object`: The result of a request to check the availability of a container registry name.
  * message `string`: If any, the error message that provides more detail for the reason that the name is not available.
  * nameAvailable `boolean`: The value that indicates whether the name is available.
  * reason `string`: If any, the reason that the name is not available.

### RegistryProperties
* RegistryProperties `object`: The properties of a container registry.
  * adminUserEnabled `boolean`: The value that indicates whether the admin user is enabled. This value is false by default.
  * creationDate `string`: The creation date of the container registry in ISO8601 format.
  * loginServer `string`: The URL that can be used to log into the container registry.
  * storageAccount **required** [StorageAccountProperties](#storageaccountproperties)

### RegistryPropertiesUpdateParameters
* RegistryPropertiesUpdateParameters `object`: The parameters for updating the properties of a container registry.
  * adminUserEnabled `boolean`: The value that indicates whether the admin user is enabled. This value is false by default.
  * storageAccount [StorageAccountProperties](#storageaccountproperties)

### RegistryUpdateParameters
* RegistryUpdateParameters `object`: The parameters for updating a container registry.
  * properties [RegistryPropertiesUpdateParameters](#registrypropertiesupdateparameters)
  * tags `object`: The resource tags for the container registry.

### Resource
* Resource `object`: An Azure resource.
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### StorageAccountProperties
* StorageAccountProperties `object`: The properties of a storage account for a container registry.
  * accessKey **required** `string`: The access key to the storage account.
  * name **required** `string`: The name of the storage account.


