# @datafire/azure_mixedreality

Client library for Mixed Reality

## Installation and Usage
```bash
npm install --save @datafire/azure_mixedreality
```
```js
let azure_mixedreality = require('@datafire/azure_mixedreality').create({
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

Mixed Reality Resource Provider REST API

## Actions

### Operations_List
Exposing Available Operations


```js
azure_mixedreality.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [OperationList](#operationlist)

### CheckNameAvailabilityLocal
Check Name Availability for global uniqueness


```js
azure_mixedreality.CheckNameAvailabilityLocal({
  "subscriptionId": "",
  "location": "",
  "checkNameAvailability": {
    "name": "",
    "type": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * location **required** `string`: The location in which uniqueness will be verified.
  * checkNameAvailability **required** [CheckNameAvailabilityRequest](#checknameavailabilityrequest)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [CheckNameAvailabilityResponse](#checknameavailabilityresponse)

### SpatialAnchorsAccounts_ListBySubscription
List Spatial Anchors Accounts by Subscription


```js
azure_mixedreality.SpatialAnchorsAccounts_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [SpatialAnchorsAccountList](#spatialanchorsaccountlist)

### SpatialAnchorsAccounts_ListByResourceGroup
List Resources by Resource Group


```js
azure_mixedreality.SpatialAnchorsAccounts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [SpatialAnchorsAccountList](#spatialanchorsaccountlist)

### SpatialAnchorsAccounts_Delete
Delete a Spatial Anchors Account.


```js
azure_mixedreality.SpatialAnchorsAccounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "spatialAnchorsAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * spatialAnchorsAccountName **required** `string`: Name of an Mixed Reality Spatial Anchors Account.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### SpatialAnchorsAccounts_Get
Retrieve a Spatial Anchors Account.


```js
azure_mixedreality.SpatialAnchorsAccounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "spatialAnchorsAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * spatialAnchorsAccountName **required** `string`: Name of an Mixed Reality Spatial Anchors Account.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [SpatialAnchorsAccount](#spatialanchorsaccount)

### SpatialAnchorsAccounts_Update
Updating a Spatial Anchors Account


```js
azure_mixedreality.SpatialAnchorsAccounts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "spatialAnchorsAccountName": "",
  "spatialAnchorsAccount": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * spatialAnchorsAccountName **required** `string`: Name of an Mixed Reality Spatial Anchors Account.
  * spatialAnchorsAccount **required** [SpatialAnchorsAccount](#spatialanchorsaccount)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [SpatialAnchorsAccount](#spatialanchorsaccount)

### SpatialAnchorsAccounts_Create
Creating or Updating a Spatial Anchors Account.


```js
azure_mixedreality.SpatialAnchorsAccounts_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "spatialAnchorsAccountName": "",
  "spatialAnchorsAccount": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * spatialAnchorsAccountName **required** `string`: Name of an Mixed Reality Spatial Anchors Account.
  * spatialAnchorsAccount **required** [SpatialAnchorsAccount](#spatialanchorsaccount)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [SpatialAnchorsAccount](#spatialanchorsaccount)

### SpatialAnchorsAccounts_GetKeys
Get Both of the 2 Keys of a Spatial Anchors Account


```js
azure_mixedreality.SpatialAnchorsAccounts_GetKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "spatialAnchorsAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * spatialAnchorsAccountName **required** `string`: Name of an Mixed Reality Spatial Anchors Account.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [SpatialAnchorsAccountKeys](#spatialanchorsaccountkeys)

### SpatialAnchorsAccounts_RegenerateKeys
Regenerate 1 Key of a Spatial Anchors Account


```js
azure_mixedreality.SpatialAnchorsAccounts_RegenerateKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "spatialAnchorsAccountName": "",
  "spatialAnchorsAccountKeyRegenerate": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * spatialAnchorsAccountName **required** `string`: Name of an Mixed Reality Spatial Anchors Account.
  * spatialAnchorsAccountKeyRegenerate **required** [SpatialAnchorsAccountKeyRegenerateRequest](#spatialanchorsaccountkeyregeneraterequest)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [SpatialAnchorsAccountKeys](#spatialanchorsaccountkeys)



## Definitions

### CheckNameAvailabilityRequest
* CheckNameAvailabilityRequest `object`: Check Name Availability Request
  * name **required** `string`: Resource Name To Verify
  * type **required** `string`: Fully qualified resource type which includes provider namespace

### CheckNameAvailabilityResponse
* CheckNameAvailabilityResponse `object`: Check Name Availability Response
  * message `string`: detail message
  * nameAvailable **required** [NameAvailability](#nameavailability)
  * reason [NameUnavailableReason](#nameunavailablereason)

### ErrorResponse
* ErrorResponse `object`: Response on Error
  * code **required** `string`: String that can be used to programmatically identify the error.
  * details `string`: An array of JSON objects that MUST contain name/value pairs for code and message, and MAY contain a name/value pair for target, as described above.The contents of this section are service-defined but must adhere to the aforementioned schema.
  * message **required** `string`: Describes the error in detail and provides debugging information
  * target `string`: The target of the particular error

### NameAvailability
* NameAvailability `string` (values: true, false): Whether or not the name is available.

### NameUnavailableReason
* NameUnavailableReason `string` (values: Invalid, AlreadyExists): reason of name unavailable.

### Operation
* Operation `object`: REST API operation
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationDisplay
* OperationDisplay `object`: The object that represents the operation.
  * description **required** `string`: Description of operation
  * operation **required** `string`: Operation type: Read, write, delete, etc.
  * provider **required** `string`: Service provider: Microsoft.ResourceProvider
  * resource **required** `string`: Resource on which the operation is performed: Profile, endpoint, etc.

### OperationList
* OperationList `object`: Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the Resource Provider.
    * items [Operation](#operation)

### SpatialAnchorsAccount
* SpatialAnchorsAccount `object`: SpatialAnchorsAccount Response.
  * properties [SpatialAnchorsAccountProperties](#spatialanchorsaccountproperties)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### SpatialAnchorsAccountKeyRegenerateRequest
* SpatialAnchorsAccountKeyRegenerateRequest `object`: Spatial Anchors Account Regenerate Key
  * serial `integer` (values: 1, 2): serial of key to be regenerated

### SpatialAnchorsAccountKeys
* SpatialAnchorsAccountKeys `object`: Spatial Anchors Account Keys
  * primaryKey `string`: value of primary key.
  * secondaryKey `string`: value of secondary key.

### SpatialAnchorsAccountList
* SpatialAnchorsAccountList `object`: Result of the request to get resource collection. It contains a list of resources and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of resource list results if there are any.
  * value `array`: List of resources supported by the Resource Provider.
    * items [SpatialAnchorsAccount](#spatialanchorsaccount)

### SpatialAnchorsAccountProperties
* SpatialAnchorsAccountProperties `object`: Spatial Anchors Account Customize Properties
  * accountDomain `string`: Correspond domain name of certain Spatial Anchors Account
  * accountId `string`: unique id of certain Spatial Anchors Account data contract.


