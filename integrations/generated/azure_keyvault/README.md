# @datafire/azure_keyvault

Client library for KeyVaultManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_keyvault
```
```js
let azure_keyvault = require('@datafire/azure_keyvault').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_keyvault.Vaults_CheckNameAvailability({
  "vaultName": null,
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure management API provides a RESTful set of web services that interact with Azure Key Vault.

## Actions

### Vaults_CheckNameAvailability
Checks that the vault name is valid and is not already in use.


```js
azure_keyvault.Vaults_CheckNameAvailability({
  "vaultName": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * vaultName **required** [VaultCheckNameAvailabilityParameters](#vaultchecknameavailabilityparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### Vaults_ListDeleted
Gets information about the deleted vaults in a subscription.


```js
azure_keyvault.Vaults_ListDeleted({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DeletedVaultListResult](#deletedvaultlistresult)

### Vaults_GetDeleted
Gets the deleted Azure key vault.


```js
azure_keyvault.Vaults_GetDeleted({
  "vaultName": "",
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * vaultName **required** `string`: The name of the vault.
  * location **required** `string`: The location of the deleted vault.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DeletedVault](#deletedvault)

### Vaults_PurgeDeleted
Permanently deletes the specified vault. aka Purges the deleted Azure key vault.


```js
azure_keyvault.Vaults_PurgeDeleted({
  "vaultName": "",
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * vaultName **required** `string`: The name of the soft-deleted vault.
  * location **required** `string`: The location of the soft-deleted vault.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Vaults_ListBySubscription
The List operation gets information about the vaults associated with the subscription.


```js
azure_keyvault.Vaults_ListBySubscription({
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
* output [VaultListResult](#vaultlistresult)

### Vaults_ListByResourceGroup
The List operation gets information about the vaults associated with the subscription and within the specified resource group.


```js
azure_keyvault.Vaults_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the vault belongs.
  * $top `integer`: Maximum number of results to return.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VaultListResult](#vaultlistresult)

### Vaults_Delete
Deletes the specified Azure key vault.


```js
azure_keyvault.Vaults_Delete({
  "resourceGroupName": "",
  "vaultName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the vault belongs.
  * vaultName **required** `string`: The name of the vault to delete
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Vaults_Get
Gets the specified Azure key vault.


```js
azure_keyvault.Vaults_Get({
  "resourceGroupName": "",
  "vaultName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the vault belongs.
  * vaultName **required** `string`: The name of the vault.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Vault](#vault)

### Vaults_Update
Update a key vault in the specified subscription.


```js
azure_keyvault.Vaults_Update({
  "resourceGroupName": "",
  "vaultName": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the server belongs.
  * vaultName **required** `string`: Name of the vault
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [VaultPatchParameters](#vaultpatchparameters)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Vault](#vault)

### Vaults_CreateOrUpdate
Create or update a key vault in the specified subscription.


```js
azure_keyvault.Vaults_CreateOrUpdate({
  "resourceGroupName": "",
  "vaultName": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the server belongs.
  * vaultName **required** `string`: Name of the vault
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [VaultCreateOrUpdateParameters](#vaultcreateorupdateparameters)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Vault](#vault)

### Vaults_UpdateAccessPolicy
Update access policies in a key vault in the specified subscription.


```js
azure_keyvault.Vaults_UpdateAccessPolicy({
  "resourceGroupName": "",
  "vaultName": "",
  "operationKind": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the vault belongs.
  * vaultName **required** `string`: Name of the vault
  * operationKind **required** `string` (values: add, replace, remove): Name of the operation
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [VaultAccessPolicyParameters](#vaultaccesspolicyparameters)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VaultAccessPolicyParameters](#vaultaccesspolicyparameters)

### Vaults_List
The List operation gets information about the vaults associated with the subscription.


```js
azure_keyvault.Vaults_List({
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter **required** `string` (values: resourceType eq 'Microsoft.KeyVault/vaults'): The filter to apply on the operation.
  * $top `integer`: Maximum number of results to return.
  * api-version **required** `string` (values: 2015-11-01): Azure Resource Manager Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListResult](#resourcelistresult)



## Definitions

### AccessPolicyEntry
* AccessPolicyEntry `object`: An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
  * applicationId `string`:  Application ID of the client making request on behalf of a principal
  * objectId **required** `string`: The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
  * permissions **required** [Permissions](#permissions)
  * tenantId **required** `string`: The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: The CheckNameAvailability operation response.
  * message `string`: An error message explaining the Reason value in more detail.
  * nameAvailable `boolean`: A boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used.
  * reason `string` (values: AccountNameInvalid, AlreadyExists): The reason that a vault name could not be used. The Reason element is only returned if NameAvailable is false.

### DeletedVault
* DeletedVault `object`: Deleted vault information with extended details.
  * id `string`: The resource ID for the deleted key vault.
  * name `string`: The name of the key vault.
  * properties [DeletedVaultProperties](#deletedvaultproperties)
  * type `string`: The resource type of the key vault.

### DeletedVaultListResult
* DeletedVaultListResult `object`: List of vaults
  * nextLink `string`: The URL to get the next set of deleted vaults.
  * value `array`: The list of deleted vaults.
    * items [DeletedVault](#deletedvault)

### DeletedVaultProperties
* DeletedVaultProperties `object`: Properties of the deleted vault.
  * deletionDate `string`: The deleted date.
  * location `string`: The location of the original vault.
  * scheduledPurgeDate `string`: The scheduled purged date.
  * tags `object`: Tags of the original vault.
  * vaultId `string`: The resource id of the original vault.

### Permissions
* Permissions `object`: Permissions the identity has for keys, secrets, certificates and storage.
  * certificates `array`: Permissions to certificates
    * items `string` (values: get, list, delete, create, import, update, managecontacts, getissuers, listissuers, setissuers, deleteissuers, manageissuers, recover, purge)
  * keys `array`: Permissions to keys
    * items `string` (values: encrypt, decrypt, wrapKey, unwrapKey, sign, verify, get, list, create, update, import, delete, backup, restore, recover, purge)
  * secrets `array`: Permissions to secrets
    * items `string` (values: get, list, set, delete, backup, restore, recover, purge)
  * storage `array`: Permissions to storage accounts
    * items `string` (values: get, list, delete, set, update, regeneratekey, setsas, listsas, getsas, deletesas)

### Resource
* Resource `object`: Key Vault resource
  * id `string`: The Azure Resource Manager resource ID for the key vault.
  * location **required** `string`: The supported Azure location where the key vault should be created.
  * name `string`: The name of the key vault.
  * tags `object`: The tags that will be assigned to the key vault. 
  * type `string`: The resource type of the key vault.

### ResourceListResult
* ResourceListResult `object`: List of vault resources.
  * nextLink `string`: The URL to get the next set of vault resources.
  * value `array`: The list of vault resources.
    * items [Resource](#resource)

### Sku
* Sku `object`: SKU details
  * family **required** `string` (values: A): SKU family name
  * name **required** `string` (values: standard, premium): SKU name to specify whether the key vault is a standard vault or a premium vault.

### Vault
* Vault `object`: Resource information with extended details.
  * properties **required** [VaultProperties](#vaultproperties)
  * id `string`: The Azure Resource Manager resource ID for the key vault.
  * location **required** `string`: The supported Azure location where the key vault should be created.
  * name `string`: The name of the key vault.
  * tags `object`: The tags that will be assigned to the key vault. 
  * type `string`: The resource type of the key vault.

### VaultAccessPolicyParameters
* VaultAccessPolicyParameters `object`: Parameters for updating the access policy in a vault
  * id `string`: The resource id of the access policy.
  * location `string`: The resource type of the the access policy.
  * name `string`: The resource name of the access policy.
  * properties **required** [VaultAccessPolicyProperties](#vaultaccesspolicyproperties)
  * type `string`: The resource name of the access policy.

### VaultAccessPolicyProperties
* VaultAccessPolicyProperties `object`: Properties of the vault access policy
  * accessPolicies **required** `array`: An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
    * items [AccessPolicyEntry](#accesspolicyentry)

### VaultCheckNameAvailabilityParameters
* VaultCheckNameAvailabilityParameters `object`: The parameters used to check the availabity of the vault name.
  * name **required** `string`: The vault name.
  * type **required** `string` (values: Microsoft.KeyVault/vaults): The type of resource, Microsoft.KeyVault/vaults

### VaultCreateOrUpdateParameters
* VaultCreateOrUpdateParameters `object`: Parameters for creating or updating a vault
  * location **required** `string`: The supported Azure location where the key vault should be created.
  * properties **required** [VaultProperties](#vaultproperties)
  * tags `object`: The tags that will be assigned to the key vault.

### VaultListResult
* VaultListResult `object`: List of vaults
  * nextLink `string`: The URL to get the next set of vaults.
  * value `array`: The list of vaults.
    * items [Vault](#vault)

### VaultPatchParameters
* VaultPatchParameters `object`: Parameters for creating or updating a vault
  * properties [VaultPatchProperties](#vaultpatchproperties)
  * tags `object`: The tags that will be assigned to the key vault. 

### VaultPatchProperties
* VaultPatchProperties `object`: Properties of the vault
  * accessPolicies `array`: An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
    * items [AccessPolicyEntry](#accesspolicyentry)
  * createMode `string` (values: recover, default): The vault's create mode to indicate whether the vault need to be recovered or not.
  * enableSoftDelete `boolean`: Property to specify whether the 'soft delete' functionality is enabled for this key vault. It does not accept false value.
  * enabledForDeployment `boolean`: Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
  * enabledForDiskEncryption `boolean`: Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
  * enabledForTemplateDeployment `boolean`: Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
  * sku [Sku](#sku)
  * tenantId `string`: The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.

### VaultProperties
* VaultProperties `object`: Properties of the vault
  * accessPolicies `array`: An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
    * items [AccessPolicyEntry](#accesspolicyentry)
  * createMode `string` (values: recover, default): The vault's create mode to indicate whether the vault need to be recovered or not.
  * enableSoftDelete `boolean`: Property to specify whether the 'soft delete' functionality is enabled for this key vault. It does not accept false value.
  * enabledForDeployment `boolean`: Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
  * enabledForDiskEncryption `boolean`: Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
  * enabledForTemplateDeployment `boolean`: Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
  * sku **required** [Sku](#sku)
  * tenantId **required** `string`: The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
  * vaultUri `string`: The URI of the vault for performing operations on keys and secrets.


