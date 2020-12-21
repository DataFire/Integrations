# @datafire/azure_mixedreality_remote_rendering

Client library for Mixed Reality

## Installation and Usage
```bash
npm install --save @datafire/azure_mixedreality_remote_rendering
```
```js
let azure_mixedreality_remote_rendering = require('@datafire/azure_mixedreality_remote_rendering').create({
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

Mixed Reality Resource Provider Remote Rendering Resource API

## Actions

### RemoteRenderingAccounts_ListBySubscription
List Remote Rendering Accounts by Subscription


```js
azure_mixedreality_remote_rendering.RemoteRenderingAccounts_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [RemoteRenderingAccountPage](#remoterenderingaccountpage)

### RemoteRenderingAccounts_ListByResourceGroup
List Resources by Resource Group


```js
azure_mixedreality_remote_rendering.RemoteRenderingAccounts_ListByResourceGroup({
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
* output [RemoteRenderingAccountPage](#remoterenderingaccountpage)

### RemoteRenderingAccounts_Delete
Delete a Remote Rendering Account.


```js
azure_mixedreality_remote_rendering.RemoteRenderingAccounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Name of an Mixed Reality Account.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### RemoteRenderingAccounts_Get
Retrieve a Remote Rendering Account.


```js
azure_mixedreality_remote_rendering.RemoteRenderingAccounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Name of an Mixed Reality Account.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [RemoteRenderingAccount](#remoterenderingaccount)

### RemoteRenderingAccounts_Update
Updating a Remote Rendering Account


```js
azure_mixedreality_remote_rendering.RemoteRenderingAccounts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "remoteRenderingAccount": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Name of an Mixed Reality Account.
  * remoteRenderingAccount **required** [RemoteRenderingAccount](#remoterenderingaccount)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [RemoteRenderingAccount](#remoterenderingaccount)

### RemoteRenderingAccounts_Create
Creating or Updating a Remote Rendering Account.


```js
azure_mixedreality_remote_rendering.RemoteRenderingAccounts_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "remoteRenderingAccount": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Name of an Mixed Reality Account.
  * remoteRenderingAccount **required** [RemoteRenderingAccount](#remoterenderingaccount)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [RemoteRenderingAccount](#remoterenderingaccount)

### RemoteRenderingAccounts_GetKeys
Get Both of the 2 Keys of a Remote Rendering Account


```js
azure_mixedreality_remote_rendering.RemoteRenderingAccounts_GetKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Name of an Mixed Reality Account.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output `object`: Developer Keys of account
  * primaryKey `string`: value of primary key.
  * secondaryKey `string`: value of secondary key.

### RemoteRenderingAccounts_RegenerateKeys
Regenerate specified Key of a Remote Rendering Account


```js
azure_mixedreality_remote_rendering.RemoteRenderingAccounts_RegenerateKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "regenerate": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: Name of an Mixed Reality Account.
  * regenerate **required** `object`: Request for account key regeneration
    * serial `integer` (values: 1, 2): serial of key to be regenerated
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output `object`: Developer Keys of account
  * primaryKey `string`: value of primary key.
  * secondaryKey `string`: value of secondary key.



## Definitions

### RemoteRenderingAccount
* RemoteRenderingAccount `object`: RemoteRenderingAccount Response.
  * properties `object`: Common Properties shared by Mixed Reality Accounts
    * accountDomain `string`: Correspond domain name of certain Spatial Anchors Account
    * accountId `string`: unique id of certain account.
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### RemoteRenderingAccountPage
* RemoteRenderingAccountPage `object`: Result of the request to get resource collection. It contains a list of resources and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of resource list results if there are any.
  * value `array`: List of resources supported by the Resource Provider.
    * items [RemoteRenderingAccount](#remoterenderingaccount)


