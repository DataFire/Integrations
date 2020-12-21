# @datafire/azure_maps_maps_management

Client library for Azure Maps Resource Provider

## Installation and Usage
```bash
npm install --save @datafire/azure_maps_maps_management
```
```js
let azure_maps_maps_management = require('@datafire/azure_maps_maps_management').create({
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

Resource Provider

## Actions

### Accounts_ListOperations
List operations available for the Maps Resource Provider


```js
azure_maps_maps_management.Accounts_ListOperations({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [MapsOperations](#mapsoperations)

### Accounts_ListBySubscription
Get all Maps Accounts in a Subscription


```js
azure_maps_maps_management.Accounts_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [MapsAccounts](#mapsaccounts)

### Accounts_Move
Moves Maps Accounts from one ResourceGroup (or Subscription) to another


```js
azure_maps_maps_management.Accounts_Move({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "moveRequest": {
    "targetResourceGroup": "",
    "resourceIds": []
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains Maps Account to move.
  * moveRequest **required** [MapsAccountsMoveRequest](#mapsaccountsmoverequest)

#### Output
*Output schema unknown*

### Accounts_ListByResourceGroup
Get all Maps Accounts in a Resource Group


```js
azure_maps_maps_management.Accounts_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure Resource Group.

#### Output
* output [MapsAccounts](#mapsaccounts)

### Accounts_Delete
Delete a Maps Account.


```js
azure_maps_maps_management.Accounts_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure Resource Group.
  * accountName **required** `string`: The name of the Maps Account.

#### Output
*Output schema unknown*

### Accounts_Get
Get a Maps Account.


```js
azure_maps_maps_management.Accounts_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure Resource Group.
  * accountName **required** `string`: The name of the Maps Account.

#### Output
* output [MapsAccount](#mapsaccount)

### Accounts_Update
Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as Sku and Tags.


```js
azure_maps_maps_management.Accounts_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "MapsAccountUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure Resource Group.
  * accountName **required** `string`: The name of the Maps Account.
  * MapsAccountUpdateParameters **required** [MapsAccountUpdateParameters](#mapsaccountupdateparameters)

#### Output
* output [MapsAccount](#mapsaccount)

### Accounts_CreateOrUpdate
Create or update a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs.


```js
azure_maps_maps_management.Accounts_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "MapsAccountCreateParameters": {
    "location": "",
    "sku": null
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure Resource Group.
  * accountName **required** `string`: The name of the Maps Account.
  * MapsAccountCreateParameters **required** [MapsAccountCreateParameters](#mapsaccountcreateparameters)

#### Output
* output [MapsAccount](#mapsaccount)

### Accounts_ListKeys
Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.


```js
azure_maps_maps_management.Accounts_ListKeys({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure Resource Group.
  * accountName **required** `string`: The name of the Maps Account.

#### Output
* output [MapsAccountKeys](#mapsaccountkeys)

### Accounts_RegenerateKeys
Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately.


```js
azure_maps_maps_management.Accounts_RegenerateKeys({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "keySpecification": {
    "keyType": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure Resource Group.
  * accountName **required** `string`: The name of the Maps Account.
  * keySpecification **required** [MapsKeySpecification](#mapskeyspecification)

#### Output
* output [MapsAccountKeys](#mapsaccountkeys)



## Definitions

### Error
* Error `object`: This object is returned when an error occurs in the Maps API
  * code `string`: Error code.
  * details `array`: If available, a list of additional details about the error.
    * items `object`
      * code `string`: Error code.
      * message `string`: If available, a human readable description of the error.
      * target `string`: If available, the component generating the error.
  * message `string`: If available, a human readable description of the error.
  * target `string`: If available, the component generating the error.

### MapsAccount
* MapsAccount `object`: An Azure resource which represents access to a suite of Maps REST APIs.
  * location `string`: The location of the resource.
  * properties [MapsAccountProperties](#mapsaccountproperties)
  * sku [Sku](#sku)
  * tags `object`: Gets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
  * id `string`: The fully qualified Maps Account resource identifier.
  * name `string`: The name of the Maps Account, which is unique within a Resource Group.
  * type `string`: Azure resource type.

### MapsAccountCreateParameters
* MapsAccountCreateParameters `object`: Parameters used to create a new Maps Account.
  * location **required** `string`: The location of the resource.
  * sku **required** [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.

### MapsAccountKeys
* MapsAccountKeys `object`: The set of keys which can be used to access the Maps REST APIs. Two keys are provided for key rotation without interruption.
  * id `string`: The full Azure resource identifier of the Maps Account.
  * primaryKey `string`: The primary key for accessing the Maps REST APIs.
  * secondaryKey `string`: The secondary key for accessing the Maps REST APIs.

### MapsAccountProperties
* MapsAccountProperties `object`: Additional Map account properties
  * x-ms-client-id `string`: A unique identifier for the maps account

### MapsAccountUpdateParameters
* MapsAccountUpdateParameters `object`: Parameters used to update an existing Maps Account.
  * sku [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.

### MapsAccounts
* MapsAccounts `object`: A list of Maps Accounts.
  * value `array`: a Maps Account.
    * items [MapsAccount](#mapsaccount)

### MapsAccountsMoveRequest
* MapsAccountsMoveRequest `object`: The description of what resources to move between resource groups.
  * resourceIds **required** `array`: A list of resource names to move from the source resource group.
    * items `string`
  * targetResourceGroup **required** `string`: The name of the destination resource group.

### MapsKeySpecification
* MapsKeySpecification `object`: Whether the operation refers to the primary or secondary key.
  * keyType **required** `string` (values: primary, secondary): Whether the operation refers to the primary or secondary key.

### MapsOperations
* MapsOperations `object`: The set of operations available for Maps.
  * value `array`: An operation available for Maps.
    * items `object`
      * display `object`: The human-readable description of the operation.
        * description `string`: The description of the operation.
        * operation `string`: The action that users can perform, based on their permission level.
        * provider `string`: Service provider: Microsoft Maps.
        * resource `string`: Resource on which the operation is performed.
      * name `string`: Operation name: {provider}/{resource}/{operation}.
      * origin `string`: The origin of the operation.

### Resource
* Resource `object`: An Azure resource
  * id `string`: The fully qualified Maps Account resource identifier.
  * name `string`: The name of the Maps Account, which is unique within a Resource Group.
  * type `string`: Azure resource type.

### Sku
* Sku `object`: The SKU of the Maps Account.
  * name **required** `string`: The name of the SKU, in standard format (such as S0).
  * tier `string`: Gets the sku tier. This is based on the SKU name.


