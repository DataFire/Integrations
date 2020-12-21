# @datafire/azure_hardwaresecuritymodules_dedicatedhsm

Client library for Azure Dedicated HSM Resource Provider

## Installation and Usage
```bash
npm install --save @datafire/azure_hardwaresecuritymodules_dedicatedhsm
```
```js
let azure_hardwaresecuritymodules_dedicatedhsm = require('@datafire/azure_hardwaresecuritymodules_dedicatedhsm').create({
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

The Azure management API provides a RESTful set of web services that interact with Azure Dedicated HSM RP.

## Actions

### DedicatedHsm_ListBySubscription
The List operation gets information about the dedicated HSMs associated with the subscription.


```js
azure_hardwaresecuritymodules_dedicatedhsm.DedicatedHsm_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: Maximum number of results to return.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DedicatedHsmListResult](#dedicatedhsmlistresult)

### DedicatedHsm_ListByResourceGroup
The List operation gets information about the dedicated hsms associated with the subscription and within the specified resource group.


```js
azure_hardwaresecuritymodules_dedicatedhsm.DedicatedHsm_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the dedicated HSM belongs.
  * $top `integer`: Maximum number of results to return.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DedicatedHsmListResult](#dedicatedhsmlistresult)

### DedicatedHsm_Delete
Deletes the specified Azure Dedicated HSM.


```js
azure_hardwaresecuritymodules_dedicatedhsm.DedicatedHsm_Delete({
  "resourceGroupName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the dedicated HSM belongs.
  * name **required** `string`: The name of the dedicated HSM to delete
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### DedicatedHsm_Get
Gets the specified Azure dedicated HSM.


```js
azure_hardwaresecuritymodules_dedicatedhsm.DedicatedHsm_Get({
  "resourceGroupName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the dedicated hsm belongs.
  * name **required** `string`: The name of the dedicated HSM.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DedicatedHsm](#dedicatedhsm)

### DedicatedHsm_Update
Update a dedicated HSM in the specified subscription.


```js
azure_hardwaresecuritymodules_dedicatedhsm.DedicatedHsm_Update({
  "resourceGroupName": "",
  "name": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the server belongs.
  * name **required** `string`: Name of the dedicated HSM
  * parameters **required** [DedicatedHsmPatchParameters](#dedicatedhsmpatchparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DedicatedHsm](#dedicatedhsm)

### DedicatedHsm_CreateOrUpdate
Create or Update a dedicated HSM in the specified subscription.


```js
azure_hardwaresecuritymodules_dedicatedhsm.DedicatedHsm_CreateOrUpdate({
  "resourceGroupName": "",
  "name": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the resource belongs.
  * name **required** `string`: Name of the dedicated Hsm
  * parameters **required** [DedicatedHsm](#dedicatedhsm)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DedicatedHsm](#dedicatedhsm)



## Definitions

### ApiEntityReference
* ApiEntityReference `object`: The API entity reference.
  * id `string`: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

### DedicatedHsm
* DedicatedHsm `object`: Resource information with extended details.
  * properties **required** [DedicatedHsmProperties](#dedicatedhsmproperties)
  * id `string`: The Azure Resource Manager resource ID for the dedicated HSM.
  * location **required** `string`: The supported Azure location where the dedicated HSM should be created.
  * name `string`: The name of the dedicated HSM.
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: The resource type of the dedicated HSM.
  * zones `array`: The Dedicated Hsm zones.
    * items `string`

### DedicatedHsmError
* DedicatedHsmError `object`: The error exception.
  * error [Error](#error)

### DedicatedHsmListResult
* DedicatedHsmListResult `object`: List of dedicated HSMs
  * nextLink `string`: The URL to get the next set of dedicated hsms.
  * value `array`: The list of dedicated HSMs.
    * items [DedicatedHsm](#dedicatedhsm)

### DedicatedHsmPatchParameters
* DedicatedHsmPatchParameters `object`: Patchable properties of the dedicated HSM
  * tags `object`: Resource tags

### DedicatedHsmProperties
* DedicatedHsmProperties `object`: Properties of the dedicated hsm
  * networkProfile [NetworkProfile](#networkprofile)
  * provisioningState `string` (values: Succeeded, Provisioning, Allocating, Connecting, Failed, CheckingQuota, Deleting): Provisioning state.
  * stampId `string`: This field will be used when RP does not support Availability zones.
  * statusMessage `string`: Resource Status Message.

### Error
* Error `object`: The key vault server error.
  * code `string`: The error code.
  * innererror [Error](#error)
  * message `string`: The error message.

### NetworkInterface
* NetworkInterface `object`: The network interface definition.
  * id `string`: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
  * privateIpAddress `string`: Private Ip address of the interface

### NetworkProfile
* NetworkProfile `object`
  * networkInterfaces `array`: Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM.
    * items [NetworkInterface](#networkinterface)
  * subnet [ApiEntityReference](#apientityreference)

### Resource
* Resource `object`: Dedicated HSM resource
  * id `string`: The Azure Resource Manager resource ID for the dedicated HSM.
  * location **required** `string`: The supported Azure location where the dedicated HSM should be created.
  * name `string`: The name of the dedicated HSM.
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: The resource type of the dedicated HSM.
  * zones `array`: The Dedicated Hsm zones.
    * items `string`

### ResourceListResult
* ResourceListResult `object`: List of dedicated HSM resources.
  * nextLink `string`: The URL to get the next set of dedicated HSM resources.
  * value `array`: The list of dedicated HSM resources.
    * items [Resource](#resource)

### Sku
* Sku `object`
  * name `string` (values: SafeNet Luna Network HSM A790): SKU of the dedicated HSM


