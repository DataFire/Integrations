# @datafire/azure_arm_storage

Client library for StorageManagement

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_storage
```

```js
let datafire = require('datafire');
let azure_arm_storage = require('@datafire/azure_arm_storage').create();

azure_arm_storage.StorageAccounts_CheckNameAvailability({}).then(data => {
  console.log(data);
})
```

## Description
The Azure Storage Management API.

## Actions
### StorageAccounts_CheckNameAvailability
Checks that the storage account name is valid and is not already in use.


```js
azure_arm_storage.StorageAccounts_CheckNameAvailability({
  "accountName": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* accountName (undefined) **required** - The parameters used to check the availabity of the storage account name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageAccounts_List
Lists all the storage accounts available under the subscription. Note that storage keys are not returned; use the ListKeys operation for this.


```js
azure_arm_storage.StorageAccounts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Usage_List
Gets the current usage count and the limit for the resources under the subscription.


```js
azure_arm_storage.Usage_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageAccounts_ListByResourceGroup
Lists all the storage accounts available under the given resource group. Note that storage keys are not returned; use the ListKeys operation for this.


```js
azure_arm_storage.StorageAccounts_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription. The name is case insensitive.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageAccounts_Delete
Deletes a storage account in Microsoft Azure.


```js
azure_arm_storage.StorageAccounts_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription. The name is case insensitive.
* accountName (string) **required** - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageAccounts_GetProperties
Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.


```js
azure_arm_storage.StorageAccounts_GetProperties({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription. The name is case insensitive.
* accountName (string) **required** - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageAccounts_Update
The update operation can be used to update the SKU, encryption, access tier, or tags for a storage account. It can also be used to map the account to a custom domain. Only one custom domain is supported per storage account; the replacement/change of custom domain is not supported. In order to replace an old custom domain, the old value must be cleared/unregistered before a new value can be set. The update of multiple properties is supported. This call does not change the storage keys for the account. If you want to change the storage account keys, use the regenerate keys operation. The location and name of the storage account cannot be changed after creation.


```js
azure_arm_storage.StorageAccounts_Update({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription. The name is case insensitive.
* accountName (string) **required** - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
* parameters (undefined) **required** - The parameters that can be provided when updating the storage account properties.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageAccounts_Create
Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.


```js
azure_arm_storage.StorageAccounts_Create({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription. The name is case insensitive.
* accountName (string) **required** - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
* parameters (undefined) **required** - The parameters used when creating a storage account.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageAccounts_ListAccountSAS
List SAS credentials of a storage account.


```js
azure_arm_storage.StorageAccounts_ListAccountSAS({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription. The name is case insensitive.
* accountName (string) **required** - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.  
* parameters (undefined) **required** - The parameters to list SAS credentials of a storage account.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageAccounts_ListServiceSAS
List service SAS credentials of a specific resource.


```js
azure_arm_storage.StorageAccounts_ListServiceSAS({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription. The name is case insensitive.
* accountName (string) **required** - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
* parameters (undefined) **required** - The parameters to list service SAS credentials of a speicific resource.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageAccounts_ListKeys
Lists the access keys for the specified storage account.


```js
azure_arm_storage.StorageAccounts_ListKeys({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription. The name is case insensitive.
* accountName (string) **required** - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### StorageAccounts_RegenerateKey
Regenerates one of the access keys for the specified storage account.


```js
azure_arm_storage.StorageAccounts_RegenerateKey({
  "resourceGroupName": "",
  "accountName": "",
  "regenerateKey": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group within the user's subscription. The name is case insensitive.
* accountName (string) **required** - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
* regenerateKey (undefined) **required** - The parameters used to regenerate the storage account key.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

