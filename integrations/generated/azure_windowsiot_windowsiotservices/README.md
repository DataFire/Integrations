# @datafire/azure_windowsiot_windowsiotservices

Client library for DeviceServices

## Installation and Usage
```bash
npm install --save @datafire/azure_windowsiot_windowsiotservices
```
```js
let azure_windowsiot_windowsiotservices = require('@datafire/azure_windowsiot_windowsiotservices').create({
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

Use this API to manage the Windows IoT device services in your Azure subscription.

## Actions

### Operations_List
Lists all of the available Windows IoT Services REST API operations.


```js
azure_windowsiot_windowsiotservices.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.

#### Output
* output [OperationListResult](#operationlistresult)

### Services_CheckDeviceServiceNameAvailability
Check if a Windows IoT Device Service name is available.


```js
azure_windowsiot_windowsiotservices.Services_CheckDeviceServiceNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "deviceServiceCheckNameAvailabilityParameters": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * deviceServiceCheckNameAvailabilityParameters **required** [DeviceServiceCheckNameAvailabilityParameters](#deviceservicechecknameavailabilityparameters)

#### Output
* output [DeviceServiceNameAvailabilityInfo](#deviceservicenameavailabilityinfo)

### Services_List
Get all the IoT hubs in a subscription.


```js
azure_windowsiot_windowsiotservices.Services_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.

#### Output
* output [DeviceServiceDescriptionListResult](#deviceservicedescriptionlistresult)

### Services_ListByResourceGroup
Get all the IoT hubs in a resource group.


```js
azure_windowsiot_windowsiotservices.Services_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the Windows IoT Device Service.

#### Output
* output [DeviceServiceDescriptionListResult](#deviceservicedescriptionlistresult)

### Services_Delete
Delete a Windows IoT Device Service.


```js
azure_windowsiot_windowsiotservices.Services_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "deviceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the Windows IoT Device Service.
  * deviceName **required** `string`: The name of the Windows IoT Device Service.

#### Output
* output [DeviceService](#deviceservice)

### Services_Get
Get the non-security related metadata of a Windows IoT Device Service.


```js
azure_windowsiot_windowsiotservices.Services_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "deviceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the Windows IoT Device Service.
  * deviceName **required** `string`: The name of the Windows IoT Device Service.

#### Output
* output [DeviceService](#deviceservice)

### Services_Update
Updates the metadata of a Windows IoT Device Service. The usual pattern to modify a property is to retrieve the Windows IoT Device Service metadata and security metadata, and then combine them with the modified values in a new body to update the Windows IoT Device Service.


```js
azure_windowsiot_windowsiotservices.Services_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "deviceName": "",
  "deviceService": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the Windows IoT Device Service.
  * deviceName **required** `string`: The name of the Windows IoT Device Service.
  * deviceService **required** [DeviceServiceProperties](#deviceserviceproperties)
  * If-Match `string`: ETag of the Windows IoT Device Service. Do not specify for creating a brand new Windows IoT Device Service. Required to update an existing Windows IoT Device Service.

#### Output
* output [DeviceService](#deviceservice)

### Services_CreateOrUpdate
Create or update the metadata of a Windows IoT Device Service. The usual pattern to modify a property is to retrieve the Windows IoT Device Service metadata and security metadata, and then combine them with the modified values in a new body to update the Windows IoT Device Service.


```js
azure_windowsiot_windowsiotservices.Services_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "deviceName": "",
  "deviceService": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the Windows IoT Device Service.
  * deviceName **required** `string`: The name of the Windows IoT Device Service.
  * deviceService **required** [DeviceServiceProperties](#deviceserviceproperties)
  * If-Match `string`: ETag of the Windows IoT Device Service. Do not specify for creating a new Windows IoT Device Service. Required to update an existing Windows IoT Device Service.

#### Output
* output [DeviceService](#deviceservice)



## Definitions

### DeviceService
* DeviceService `object`: The description of the Windows IoT Device Service.
  * etag `string`: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
  * properties [DeviceServiceProperties](#deviceserviceproperties)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### DeviceServiceCheckNameAvailabilityParameters
* DeviceServiceCheckNameAvailabilityParameters `object`: Input values.
  * name **required** `string`: The name of the Windows IoT Device Service to check.

### DeviceServiceDescriptionListResult
* DeviceServiceDescriptionListResult `object`: The JSON-serialized array of DeviceService objects with a next link.
  * nextLink `string`: The next link.
  * value `array`: The array of DeviceService objects.
    * items [DeviceService](#deviceservice)

### DeviceServiceNameAvailabilityInfo
* DeviceServiceNameAvailabilityInfo `object`: The properties indicating whether a given Windows IoT Device Service name is available.
  * message `string`: The detailed reason message.
  * nameAvailable `boolean`: The value which indicates whether the provided name is available.
  * reason `string` (values: Invalid, AlreadyExists): The reason for unavailability.

### DeviceServiceProperties
* DeviceServiceProperties `object`: The properties of a Windows IoT Device Service.
  * adminDomainName `string`: Windows IoT Device Service OEM AAD domain
  * billingDomainName `string`: Windows IoT Device Service ODM AAD domain
  * notes `string`: Windows IoT Device Service notes.
  * quantity `integer`: Windows IoT Device Service device allocation,
  * startDate `string`: Windows IoT Device Service start date,

### ErrorDetails
* ErrorDetails `object`: The details of the error.
  * code `string`: One of a server-defined set of error codes.
  * details `string`: A human-readable representation of the error's details.
  * message `string`: A human-readable representation of the error.
  * target `string`: The target of the particular error.

### OperationDisplayInfo
* OperationDisplayInfo `object`: The operation supported by Azure Data Catalog Service.
  * description `string`: The description of the operation.
  * operation `string`: The action that users can perform, based on their permission level.
  * provider `string`: Service provider: Azure Data Catalog Service.
  * resource `string`: Resource on which the operation is performed.

### OperationEntity
* OperationEntity `object`: The operation supported by Azure Data Catalog Service.
  * display [OperationDisplayInfo](#operationdisplayinfo)
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationListResult
* OperationListResult `object`: Result of the request to list Windows IoT Device Service operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Windows IoT Device Service operations supported by the Microsoft.WindowsIoT resource provider.
    * items [OperationEntity](#operationentity)

### ProxyResource
* ProxyResource: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### Resource
* Resource `object`: The core properties of ARM resources
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.


