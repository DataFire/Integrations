# @datafire/azure_storage_managementpolicy

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_storage_managementpolicy
```
```js
let azure_storage_managementpolicy = require('@datafire/azure_storage_managementpolicy').create({
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

The Azure Storage Management API.

## Actions

### ManagementPolicies_Delete
Deletes the data policy rules associated with the specified storage account.


```js
azure_storage_managementpolicy.ManagementPolicies_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": "",
  "managementPolicyName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * managementPolicyName **required** `string` (values: default): The name of the Storage Account Management Policy. It should always be 'default'

#### Output
*Output schema unknown*

### ManagementPolicies_Get
Gets the data policy rules associated with the specified storage account.


```js
azure_storage_managementpolicy.ManagementPolicies_Get({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": "",
  "managementPolicyName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * managementPolicyName **required** `string` (values: default): The name of the Storage Account Management Policy. It should always be 'default'

#### Output
* output [StorageAccountManagementPolicies](#storageaccountmanagementpolicies)

### ManagementPolicies_CreateOrUpdate
Sets the data policy rules associated with the specified storage account.


```js
azure_storage_managementpolicy.ManagementPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": "",
  "managementPolicyName": "",
  "properties": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * managementPolicyName **required** `string` (values: default): The name of the Storage Account Management Policy. It should always be 'default'
  * properties **required** [ManagementPoliciesRulesSetParameter](#managementpoliciesrulessetparameter)

#### Output
* output [StorageAccountManagementPolicies](#storageaccountmanagementpolicies)



## Definitions

### ManagementPoliciesRules
* ManagementPoliciesRules `object`: The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
  * policy `object`: The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.

### ManagementPoliciesRulesSetParameter
* ManagementPoliciesRulesSetParameter `object`: The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
  * properties [ManagementPoliciesRules](#managementpoliciesrules)

### StorageAccountManagementPolicies
* StorageAccountManagementPolicies `object`: The Get Storage Account ManagementPolicies operation response.
  * properties [StorageAccountManagementPoliciesRulesProperty](#storageaccountmanagementpoliciesrulesproperty)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### StorageAccountManagementPoliciesRulesProperty
* StorageAccountManagementPoliciesRulesProperty `object`: The Storage Account Data Policies properties.
  * lastModifiedTime `string`: Returns the date and time the ManagementPolicies was last modified.
  * policy `object`: The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.


