# @datafire/azure_iotspaces

Client library for IoTSpacesClient

## Installation and Usage
```bash
npm install --save @datafire/azure_iotspaces
```
```js
let azure_iotspaces = require('@datafire/azure_iotspaces').create({
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

Use this API to manage the IoTSpaces service instances in your Azure subscription.

## Actions

### Operations_List
Lists all of the available IoTSpaces service REST API operations.


```js
azure_iotspaces.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-10-01-preview): The version of the API.

#### Output
* output [OperationListResult](#operationlistresult)

### IoTSpaces_List
Get all the IoTSpaces instances in a subscription.


```js
azure_iotspaces.IoTSpaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-10-01-preview): The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.

#### Output
* output [IoTSpacesDescriptionListResult](#iotspacesdescriptionlistresult)

### IoTSpaces_CheckNameAvailability
Check if an IoTSpaces instance name is available.


```js
azure_iotspaces.IoTSpaces_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "operationInputs": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-10-01-preview): The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * operationInputs **required** [OperationInputs](#operationinputs)

#### Output
* output [IoTSpacesNameAvailabilityInfo](#iotspacesnameavailabilityinfo)

### IoTSpaces_ListByResourceGroup
Get all the IoTSpaces instances in a resource group.


```js
azure_iotspaces.IoTSpaces_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-10-01-preview): The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoTSpaces instance.

#### Output
* output [IoTSpacesDescriptionListResult](#iotspacesdescriptionlistresult)

### IoTSpaces_Delete
Delete an IoTSpaces instance.


```js
azure_iotspaces.IoTSpaces_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-10-01-preview): The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoTSpaces instance.
  * resourceName **required** `string`: The name of the IoTSpaces instance.

#### Output
* output [IoTSpacesDescription](#iotspacesdescription)

### IoTSpaces_Get
Get the metadata of a IoTSpaces instance.


```js
azure_iotspaces.IoTSpaces_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-10-01-preview): The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoTSpaces instance.
  * resourceName **required** `string`: The name of the IoTSpaces instance.

#### Output
* output [IoTSpacesDescription](#iotspacesdescription)

### IoTSpaces_Update
Update the metadata of a IoTSpaces instance.


```js
azure_iotspaces.IoTSpaces_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "iotSpacePatchDescription": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-10-01-preview): The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoTSpaces instance.
  * resourceName **required** `string`: The name of the IoTSpaces instance.
  * iotSpacePatchDescription **required** [IoTSpacesPatchDescription](#iotspacespatchdescription)

#### Output
* output [IoTSpacesDescription](#iotspacesdescription)

### IoTSpaces_CreateOrUpdate
Create or update the metadata of an IoTSpaces instance. The usual pattern to modify a property is to retrieve the IoTSpaces instance metadata and security metadata, and then combine them with the modified values in a new body to update the IoTSpaces instance.


```js
azure_iotspaces.IoTSpaces_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "iotSpaceDescription": {
    "sku": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-10-01-preview): The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoTSpaces instance.
  * resourceName **required** `string`: The name of the IoTSpaces instance.
  * iotSpaceDescription **required** [IoTSpacesDescription](#iotspacesdescription)

#### Output
* output [IoTSpacesDescription](#iotspacesdescription)



## Definitions

### ErrorDetails
* ErrorDetails `object`: Error details.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### IoTSpacesDescription
* IoTSpacesDescription `object`: The description of the IoTSpaces service.
  * properties [IoTSpacesProperties](#iotspacesproperties)
  * sku **required** [IoTSpacesSkuInfo](#iotspacesskuinfo)
  * id `string`: The resource identifier.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### IoTSpacesDescriptionListResult
* IoTSpacesDescriptionListResult `object`: A list of IoTSpaces description objects with a next link.
  * nextLink `string`: The link used to get the next page of IoTSpaces description objects.
  * value `array`: A list of IoTSpaces description objects.
    * items [IoTSpacesDescription](#iotspacesdescription)

### IoTSpacesNameAvailabilityInfo
* IoTSpacesNameAvailabilityInfo `object`: The properties indicating whether a given IoTSpaces service name is available.
  * message `string`: The detailed reason message.
  * nameAvailable `boolean`: The value which indicates whether the provided name is available.
  * reason `string` (values: Invalid, AlreadyExists): The reason for unavailability.

### IoTSpacesPatchDescription
* IoTSpacesPatchDescription `object`: The description of the IoTSpaces service.
  * properties [IoTSpacesProperties](#iotspacesproperties)
  * tags `object`: Instance tags

### IoTSpacesProperties
* IoTSpacesProperties `object`: The properties of an IoTSpaces instance.
  * managementApiUrl `string`: The management Api endpoint.
  * provisioningState `string` (values: Provisioning, Deleting, Succeeded, Failed, Canceled): The provisioning state.
  * storageContainer [StorageContainerProperties](#storagecontainerproperties)
  * webPortalUrl `string`: The management UI endpoint.

### IoTSpacesSkuInfo
* IoTSpacesSkuInfo `object`: Information about the SKU of the IoTSpaces instance.
  * name **required** `string` (values: F1, S1, S2, S3): The name of the SKU.

### Operation
* Operation `object`: IoTSpaces service REST API operation
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Operation name: {provider}/{resource}/{read | write | action | delete}

### OperationDisplay
* OperationDisplay `object`: The object that represents the operation.
  * description `string`: Friendly description for the operation,
  * operation `string`: Name of the operation
  * provider `string`: Service provider: Microsoft IoTSpaces
  * resource `string`: Resource Type: IoTSpaces

### OperationInputs
* OperationInputs `object`: Input values.
  * name **required** `string`: The name of the IoTSpaces service instance to check.

### OperationListResult
* OperationListResult `object`: A list of IoTSpaces service operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: The link used to get the next page of IoTSpaces description objects.
  * value `array`: A list of IoT spaces operations supported by the Microsoft.IoTSpaces resource provider.
    * items [Operation](#operation)

### Resource
* Resource `object`: The common properties of an IoTSpaces service.
  * id `string`: The resource identifier.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### StorageContainerProperties
* StorageContainerProperties `object`: The properties of the Azure Storage Container for file archive.
  * connectionString `string`: The connection string of the storage account.
  * containerName `string`: The name of storage container in the storage account.
  * resourceGroup `string`: The name of the resource group of the storage account.
  * subscriptionId `string`: The subscription identifier of the storage account.


