# @datafire/azure_azsadmin_storageaccounts

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_storageaccounts
```
```js
let azure_azsadmin_storageaccounts = require('@datafire/azure_azsadmin_storageaccounts').create({
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

The Admin Storage Management Client.

## Actions

### StorageAccounts_ReclaimStorageCapacity
Start reclaim storage capacity on deleted storage objects.


```js
azure_azsadmin_storageaccounts.StorageAccounts_ReclaimStorageCapacity({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * location **required** `string`: Resource location.
  * api-version **required** `string`: REST Api Version.

#### Output
*Output schema unknown*

### StorageAccounts_List
Returns a list of storage accounts.


```js
azure_azsadmin_storageaccounts.StorageAccounts_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * location **required** `string`: Resource location.
  * api-version **required** `string`: REST Api Version.
  * $filter `string`: Filter string
  * summary `boolean`: Switch for whether summary or detailed information is returned.

#### Output
* output [StorageAccountList](#storageaccountlist)

### StorageAccounts_Get
Returns the requested storage account.


```js
azure_azsadmin_storageaccounts.StorageAccounts_Get({
  "subscriptionId": "",
  "location": "",
  "accountId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * location **required** `string`: Resource location.
  * accountId **required** `string`: Internal storage account ID, which is not visible to tenant.
  * api-version **required** `string`: REST Api Version.

#### Output
* output [StorageAccount](#storageaccount)

### StorageAccounts_Undelete
Undelete a deleted storage account with new account name if the a new name is provided.


```js
azure_azsadmin_storageaccounts.StorageAccounts_Undelete({
  "subscriptionId": "",
  "location": "",
  "accountId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * location **required** `string`: Resource location.
  * accountId **required** `string`: Internal storage account ID, which is not visible to tenant.
  * api-version **required** `string`: REST Api Version.
  * newAccountName `string`: New storage account name when doing undelete storage account operation.

#### Output
* output [UndeleteStorageAccount](#undeletestorageaccount)



## Definitions

### EncryptionKeySource
* EncryptionKeySource `string` (values: Microsoft.Storage): Encryption Key Source

### LocationStatus
* LocationStatus `string` (values: Available, Unavailable): Gets the status indicating whether the primary location of the storage account is available or unavailable.

### StorageAccount
* StorageAccount `object`: Properties of the storage account.
  * kind [StorageAccountKind](#storageaccountkind)
  * properties [StorageAccountProperties](#storageaccountproperties)
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * location `string`: Resource Location.
  * name `string`: Resource Name.
  * type `string`: Resource Type.

### StorageAccountAccessTier
* StorageAccountAccessTier `string` (values: Hot, Cool): Access tier for storage account

### StorageAccountHealthState
* StorageAccountHealthState `string` (values: Healthy, Suspended, OverQuota, SuspendedAndOverQuota): Health state for storage account

### StorageAccountKind
* StorageAccountKind `string` (values: Storage, StorageV2, BlobStorage): The kind of storage account

### StorageAccountList
* StorageAccountList `object`: Pageable list of storage accounts.
  * @odata.nextLink `string`: URI to the next page.
  * value `array`: List of storage accounts.
    * items [StorageAccount](#storageaccount)

### StorageAccountProperties
* StorageAccountProperties `object`: Properties of a storage account.
  * accessTier [StorageAccountAccessTier](#storageaccountaccesstier)
  * accountId `string`: Internal storage account ID, which is not visible to tenant.
  * accountStatus [StorageAccountStatus](#storageaccountstatus)
  * accountType [StorageAccountType](#storageaccounttype)
  * creationTime `string`: The creation date and time of storage account in UTC.
  * deletedTime `string`: The date-time when the storage account was deleted.
  * encryption [StorageEncryption](#storageencryption)
  * faultDomain `string`: The fault domain for the storage account.
  * healthState [StorageAccountHealthState](#storageaccounthealthstate)
  * primaryLocation `string`: The primary location for the storage account.
  * provisioningState [StorageAccountState](#storageaccountstate)
  * statusOfPrimary [LocationStatus](#locationstatus)
  * supportsHttpsTrafficOnly `boolean`: Storage account supports https traffic only or not
  * tenantResourceGroupName `string`: The name of resource group under which the storage account locates.
  * tenantStorageAccountName `string`: Storage account name from tenant view.
  * tenantSubscriptionId `string`: Subscription ID of the subscription under which the storage account locates.
  * tenantViewId `string`: Resource URI of storage account from tenant view.

### StorageAccountState
* StorageAccountState `string` (values: Creating, Succeeded): Storage account state.

### StorageAccountStatus
* StorageAccountStatus `string` (values: Active, Deleted): The state of storage account in WAC.

### StorageAccountType
* StorageAccountType `string` (values: Standard_LRS, Standard_GRS, Standard_ZRS, Standard_RAGRS, Premium_LRS): Storage account type.

### StorageEncryption
* StorageEncryption `object`: Storage encryption setting
  * keySource [EncryptionKeySource](#encryptionkeysource)
  * services [StorageEncryptionServices](#storageencryptionservices)

### StorageEncryptionServices
* StorageEncryptionServices `object`: Services for which encryption setting is mentioned.
  * blob [StorageEncryptionSetting](#storageencryptionsetting)
  * queue [StorageEncryptionSetting](#storageencryptionsetting)
  * table [StorageEncryptionSetting](#storageencryptionsetting)

### StorageEncryptionSetting
* StorageEncryptionSetting `object`: Storage Encryption setting
  * enabled `boolean`: Bool to indicate whether enabled or not.
  * lastEnabledTime `string`: A rough estimate of the date/time when the encryption was last enabled by the user.

### UndeleteStorageAccount
* UndeleteStorageAccount `object`: Undelete storage account information.
  * accountId `string`: The internal wac id for storage account.
  * newAccountName `string`: The new account name for the restored account if defined.


