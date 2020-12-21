# @datafire/azure_azurestack_azurestack

Client library for Azure Stack Azure Bridge Client

## Installation and Usage
```bash
npm install --save @datafire/azure_azurestack_azurestack
```
```js
let azure_azurestack_azurestack = require('@datafire/azure_azurestack_azurestack').create({
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



## Actions

### Operations_List
Returns the list of supported REST operations.


```js
azure_azurestack_azurestack.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.

#### Output
* output [OperationList](#operationlist)



## Definitions

### Display
* Display `object`: Contains the localized display information for this particular operation or action.
  * description `string`: The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views.
  * operation `string`: The localized, friendly name for the operation. Use the name as it will displayed to the user.
  * provider `string`: The localized, friendly version of the resource provider name.
  * resource `string`: The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider.

### ErrorDetails
* ErrorDetails `object`: The details of the error.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.
  * target `string`: The target of the particular error.

### ErrorResponse
* ErrorResponse `object`: Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.
  * error [ErrorDetails](#errordetails)

### Operation
* Operation `object`: Describes the supported REST operation.
  * display [Display](#display)
  * name `string`: The name of the operation being performed on this particular object.
  * origin `string`: The intended executor of the operation.

### OperationList
* OperationList `object`: List of Operations
  * nextLink `string`: URI to the next page of operations.
  * value `array`: Array of operations
    * items [Operation](#operation)

### ProvisioningState
* ProvisioningState `string` (values: Creating, Failed, Succeeded, Canceled): The provisioning state of the resource.

### Resource
* Resource `object`: Base resource object.
  * etag `string`: The entity tag used for optimistic concurrency when modifying the resource.
  * id `string`: ID of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### TrackedResource
* TrackedResource `object`: Base resource object.
  * etag `string`: The entity tag used for optimistic concurrency when modifying the resource.
  * id `string`: ID of the resource.
  * location **required** `string` (values: global): Location of the resource.
  * name `string`: Name of the resource.
  * tags `object`: Custom tags for the resource.
  * type `string`: Type of Resource.


