# @datafire/azure_customerlockbox

Client library for Customer Lockbox

## Installation and Usage
```bash
npm install --save @datafire/azure_customerlockbox
```
```js
let azure_customerlockbox = require('@datafire/azure_customerlockbox').create({
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

Azure Customer Lockbox API Reference

## Actions

### Operations_List
Lists all the available REST API operations.


```js
azure_customerlockbox.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [OperationListResult](#operationlistresult)

### Requests_List
Lists all of the Lockbox requests in the given subscription.


```js
azure_customerlockbox.Requests_List({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The $filter OData query parameter. Only filter by request status is supported, e.g $filter=properties/status eq 'Pending'
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

#### Output
* output [RequestListResult](#requestlistresult)

### Requests_Get
Get Customer Lockbox request


```js
azure_customerlockbox.Requests_Get({
  "requestId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * requestId **required** `string`: The Lockbox request ID.
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [LockboxRequestResponse](#lockboxrequestresponse)

### Requests_UpdateStatus
Update Customer Lockbox request approval status API


```js
azure_customerlockbox.Requests_UpdateStatus({
  "approval": {},
  "subscriptionId": "",
  "requestId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * approval **required** [Approval](#approval)
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * requestId **required** `string`: The Lockbox request ID.
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [Approval](#approval)



## Definitions

### Approval
* Approval `object`: Request content object, in the use of Approve or Deny a Lockbox request.
  * decision `string` (values: Approve, Deny): Approval decision to the Lockbox request.
  * reason `string`: Reason of the decision

### ErrorAdditionalInfo
* ErrorAdditionalInfo `object`: An error additional info for the Lockbox service.
  * info `object`
    * currentStatus [LockboxRequestStatus](#lockboxrequeststatus)
  * type `string`: The type of error info.

### ErrorBody
* ErrorBody `object`: An error response body from the Lockbox service.
  * additionalInfo `array`: A list of error details about the error.
    * items [ErrorAdditionalInfo](#erroradditionalinfo)
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### ErrorResponse
* ErrorResponse `object`: An error response from the Lockbox service.
  * error [ErrorBody](#errorbody)

### LockboxRequestResponse
* LockboxRequestResponse `object`: A Lockbox request response object, containing all information associated with the request.
  * id `string`: The Arm resource id of the Lockbox request.
  * name `string`: The name of the Lockbox request.
  * properties [LockboxRequestResponseProperties](#lockboxrequestresponseproperties)
  * type `string`: The type of the Lockbox request.

### LockboxRequestResponseProperties
* LockboxRequestResponseProperties `object`: The properties that are associated with a lockbox request.
  * createdDateTime `string`: The creation time of the request.
  * duration `integer`: The duration of the request in hours.
  * expirationDateTime `string`: The expiration time of the request.
  * justification `string`: The justification of the requestor.
  * requestId `string`: The Lockbox request ID.
  * requestedResourceIds `array`: A list of resource IDs associated with the Lockbox request separated by ','.
    * items `string`
  * resourceType `string`: The resource type of the requested resources.
  * status [LockboxRequestStatus](#lockboxrequeststatus)
  * subscriptionId `string`: The subscription ID.
  * supportCaseUrl `string`: The url of the support case.
  * supportRequest `string`: The id of the support request associated.

### LockboxRequestStatus
* LockboxRequestStatus `string` (values: Initializing, Pending, Approving, Denying, Approved, Denied, Expired, Revoking, Revoked, Error, Unknown, Completed, Completing): The status of the request.

### Operation
* Operation `object`: Operation result model for ARM RP
  * display `object`: Contains the localized display information for this particular operation / action.
    * description `string`: The localized friendly description for the operation.
    * operation `string`: The localized friendly name for the operation.
    * provider `string`: The localized friendly form of the resource provider name.
    * resource `string`: The localized friendly form of the resource type related to this action/operation.
  * isDataAction `string`: Gets or sets a value indicating whether it is a data plane action
  * name `string`: Gets or sets action name
  * origin `string`: Gets or sets origin
  * properties `string`: Gets or sets properties

### OperationListResult
* OperationListResult `object`: Result of the request to list Customer Lockbox operations. It contains a list of operations.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Customer Lockbox operations supported by the Microsoft.StreamAnalytics resource provider.
    * items [Operation](#operation)

### RequestListResult
* RequestListResult `object`: Object containing a list of streaming jobs.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: A list of Lockbox requests. Populated by a 'List' operation.
    * items [LockboxRequestResponse](#lockboxrequestresponse)


