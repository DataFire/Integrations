# @datafire/azure_locationbasedservices

Client library for Azure Location Based Services Resource Provider

## Installation and Usage
```bash
npm install --save @datafire/azure_locationbasedservices
```
```js
let azure_locationbasedservices = require('@datafire/azure_locationbasedservices').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_locationbasedservices.Accounts_ListOperations({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Resource Provider

## Actions

### Accounts_ListOperations
List operations available for the Location Based Services Resource Provider


```js
azure_locationbasedservices.Accounts_ListOperations({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [LocationBasedServicesOperations](#locationbasedservicesoperations)

### Accounts_ListBySubscription
Get all Location Based Services Accounts in a Subscription


```js
azure_locationbasedservices.Accounts_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LocationBasedServicesAccounts](#locationbasedservicesaccounts)

### Accounts_Move
Moves Location Based Services Accounts from one ResourceGroup (or Subscription) to another


```js
azure_locationbasedservices.Accounts_Move({
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
  * resourceGroupName **required** `string`: The name of the resource group that contains Location Based Services Account to move.
  * moveRequest **required** [LocationBasedServicesAccountsMoveRequest](#locationbasedservicesaccountsmoverequest)

#### Output
*Output schema unknown*

### Accounts_ListByResourceGroup
Get all Location Based Services Accounts in a Resource Group


```js
azure_locationbasedservices.Accounts_ListByResourceGroup({
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
* output [LocationBasedServicesAccounts](#locationbasedservicesaccounts)

### Accounts_Delete
Delete a Location Based Services Account


```js
azure_locationbasedservices.Accounts_Delete({
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
  * accountName **required** `string`: The name of the Location Based Services Account.

#### Output
*Output schema unknown*

### Accounts_Get
Get a Location Based Services Account


```js
azure_locationbasedservices.Accounts_Get({
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
  * accountName **required** `string`: The name of the Location Based Services Account.

#### Output
* output [LocationBasedServicesAccount](#locationbasedservicesaccount)

### Accounts_Update
Updates a Location Based Services Account. Only a subset of the parameters may be updated after creation, such as Sku and Tags.


```js
azure_locationbasedservices.Accounts_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "LocationBasedServicesAccountUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure Resource Group.
  * accountName **required** `string`: The name of the Location Based Services Account.
  * LocationBasedServicesAccountUpdateParameters **required** [LocationBasedServicesAccountUpdateParameters](#locationbasedservicesaccountupdateparameters)

#### Output
* output [LocationBasedServicesAccount](#locationbasedservicesaccount)

### Accounts_CreateOrUpdate
Create or update a Location Based Services Account. A Location Based Services Account holds the keys which allow access to the Location Based Services REST APIs.


```js
azure_locationbasedservices.Accounts_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "LocationBasedServicesAccountCreateParameters": {
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
  * accountName **required** `string`: The name of the Location Based Services Account.
  * LocationBasedServicesAccountCreateParameters **required** [LocationBasedServicesAccountCreateParameters](#locationbasedservicesaccountcreateparameters)

#### Output
* output [LocationBasedServicesAccount](#locationbasedservicesaccount)

### Accounts_ListKeys
Get the keys to use with the Location Based Services APIs. A key is used to authenticate and authorize access to the Location Based Services REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.


```js
azure_locationbasedservices.Accounts_ListKeys({
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
  * accountName **required** `string`: The name of the Location Based Services Account.

#### Output
* output [LocationBasedServicesAccountKeys](#locationbasedservicesaccountkeys)

### Accounts_RegenerateKeys
Regenerate either the primary or secondary key for use with the Location Based Services APIs. The old key will stop working immediately.


```js
azure_locationbasedservices.Accounts_RegenerateKeys({
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
  * accountName **required** `string`: The name of the Location Based Services Account.
  * keySpecification **required** [LocationBasedServicesKeySpecification](#locationbasedserviceskeyspecification)

#### Output
* output [LocationBasedServicesAccountKeys](#locationbasedservicesaccountkeys)



## Definitions

### Error
* Error `object`: This object is returned when an error occurs in the Location Based Service API
  * code `string`: Error code.
  * details `array`: If available, a list of additional details about the error.
    * items `object`
      * code `string`: Error code.
      * message `string`: If available, a human readable description of the error.
      * target `string`: If available, the component generating the error.
  * message `string`: If available, a human readable description of the error.
  * target `string`: If available, the component generating the error.

### LocationBasedServicesAccount
* LocationBasedServicesAccount `object`: An Azure resource which represents access to a suite of Location Based Services REST APIs.
  * location `string`: The location of the resource.
  * sku [Sku](#sku)
  * tags `object`: Gets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
  * id `string`: The fully qualified Location Based Services Account resource identifier.
  * name `string`: The name of the Location Based Services Account, which is unique within a Resource Group.
  * type `string`: Azure resource type.

### LocationBasedServicesAccountCreateParameters
* LocationBasedServicesAccountCreateParameters `object`: Parameters used to create a new Location Based Services Account.
  * location **required** `string`: The location of the resource.
  * sku **required** [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.

### LocationBasedServicesAccountKeys
* LocationBasedServicesAccountKeys `object`: The set of keys which can be used to access the Location Based Services REST APIs. Two keys are provided for key rotation without interruption.
  * id `string`: The full Azure resource identifier of the Location Based Services Account.
  * primaryKey `string`: The primary key for accessing the Location Based Services REST APIs.
  * secondaryKey `string`: The secondary key for accessing the Location Based Services REST APIs.

### LocationBasedServicesAccountUpdateParameters
* LocationBasedServicesAccountUpdateParameters `object`: Parameters used to update an existing Location Based Services Account.
  * sku [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.

### LocationBasedServicesAccounts
* LocationBasedServicesAccounts `object`: A list of Location Based Services Accounts.
  * value `array`: A Location Based Services Account.
    * items [LocationBasedServicesAccount](#locationbasedservicesaccount)

### LocationBasedServicesAccountsMoveRequest
* LocationBasedServicesAccountsMoveRequest `object`: The description of what resources to move between resource groups.
  * resourceIds **required** `array`: A list of resource names to move from the source resource group.
    * items `string`
  * targetResourceGroup **required** `string`: The name of the destination resource group.

### LocationBasedServicesKeySpecification
* LocationBasedServicesKeySpecification `object`: Whether the operation refers to the primary or secondary key.
  * keyType **required** `string` (values: primary, secondary): Whether the operation refers to the primary or secondary key.

### LocationBasedServicesOperations
* LocationBasedServicesOperations `object`: The set of operations available for Location Based Services.
  * value `array`: An operation available for Location Based Services.
    * items `object`
      * display `object`: The human-readable description of the operation.
        * description `string`: The description of the operation.
        * operation `string`: The action that users can perform, based on their permission level.
        * provider `string`: Service provider: Microsoft Location Based Services.
        * resource `string`: Resource on which the operation is performed.
      * name `string`: Operation name: {provider}/{resource}/{operation}.
      * origin `string`: The origin of the operation.

### Resource
* Resource `object`: An Azure resource
  * id `string`: The fully qualified Location Based Services Account resource identifier.
  * name `string`: The name of the Location Based Services Account, which is unique within a Resource Group.
  * type `string`: Azure resource type.

### Sku
* Sku `object`: The SKU of the Location Based Services Account.
  * name **required** `string`: The name of the SKU, in standard format (such as S0).
  * tier `string`: Gets the sku tier. This is based on the SKU name.


