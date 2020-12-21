# @datafire/azure_windowsesu

Client library for windowsesu

## Installation and Usage
```bash
npm install --save @datafire/azure_windowsesu
```
```js
let azure_windowsesu = require('@datafire/azure_windowsesu').create({
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

Manage Multi-Access Keys (MAK) that enable Windows Extended Security Updates (ESU).

## Actions

### Operations_List
List all available Windows.ESU provider operations.


```js
azure_windowsesu.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [OperationList](#operationlist)

### MultipleActivationKeys_List
List all Multiple Activation Keys (MAK) created for a subscription.


```js
azure_windowsesu.MultipleActivationKeys_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [MultipleActivationKeyList](#multipleactivationkeylist)

### MultipleActivationKeys_ListByResourceGroup
List all Multiple Activation Keys (MAK) in a resource group.


```js
azure_windowsesu.MultipleActivationKeys_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [MultipleActivationKeyList](#multipleactivationkeylist)

### MultipleActivationKeys_Delete
Delete a MAK key.


```js
azure_windowsesu.MultipleActivationKeys_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "multipleActivationKeyName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * multipleActivationKeyName **required** `string`: The name of the MAK key.

#### Output
*Output schema unknown*

### MultipleActivationKeys_Get
Get a MAK key.


```js
azure_windowsesu.MultipleActivationKeys_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "multipleActivationKeyName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * multipleActivationKeyName **required** `string`: The name of the MAK key.

#### Output
* output [MultipleActivationKey](#multipleactivationkey)

### MultipleActivationKeys_Update
Update a MAK key.


```js
azure_windowsesu.MultipleActivationKeys_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "multipleActivationKeyName": "",
  "multipleActivationKey": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * multipleActivationKeyName **required** `string`: The name of the MAK key.
  * multipleActivationKey **required** [MultipleActivationKeyUpdate](#multipleactivationkeyupdate)

#### Output
* output [MultipleActivationKey](#multipleactivationkey)

### MultipleActivationKeys_Create
Create a MAK key.


```js
azure_windowsesu.MultipleActivationKeys_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "multipleActivationKeyName": "",
  "multipleActivationKey": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * multipleActivationKeyName **required** `string`: The name of the MAK key.
  * multipleActivationKey **required** [MultipleActivationKey](#multipleactivationkey)

#### Output
* output [MultipleActivationKey](#multipleactivationkey)



## Definitions

### ErrorDefinition
* ErrorDefinition `object`: Error definition.
  * code `string`: Service specific error code which serves as the substatus for the HTTP error code.
  * details `array`: Internal error details.
    * items [ErrorDefinition](#errordefinition)
  * message `string`: Description of the error.

### ErrorResponse
* ErrorResponse `object`: Error response.
  * error [ErrorDefinition](#errordefinition)

### MultipleActivationKey
* MultipleActivationKey `object`: MAK key details.
  * properties `object`: MAK key specific properties.
    * agreementNumber `string`: Agreement number under which the key is requested.
    * expirationDate `string`: End of support of security updates activated by the MAK key.
    * installedServerNumber `integer`: Number of activations/servers using the MAK key.
    * isEligible `boolean`: <code> true </code> if user has eligible on-premises Windows physical or virtual machines, and that the requested key will only be used in their organization; <code> false </code> otherwise.
    * multipleActivationKey `string`: MAK 5x5 key.
    * osType `string` (values: Windows7, WindowsServer2008, WindowsServer2008R2): Type of OS for which the key is requested.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, Accepted, Provisioning)
    * supportType `string` (values: SupplementalServicing, PremiumAssurance): Type of support
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### MultipleActivationKeyList
* MultipleActivationKeyList `object`: List of MAK keys.
  * nextLink `string`: Link to the next page of resources.
  * value `array`: List of MAK keys.
    * items [MultipleActivationKey](#multipleactivationkey)

### MultipleActivationKeyUpdate
* MultipleActivationKeyUpdate `object`: MAK key details.
  * tags `object`: Resource tags.

### Operation
* Operation `object`: REST API operation details.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Name of the operation.

### OperationDisplay
* OperationDisplay `object`: Meta data about operation used for display in portal.
  * description `string`
  * operation `string`
  * provider `string`
  * resource `string`

### OperationList
* OperationList `object`: List of available REST API operations.
  * nextLink `string`: Link to the next page of resources.
  * value `array`: List of operations.
    * items [Operation](#operation)


