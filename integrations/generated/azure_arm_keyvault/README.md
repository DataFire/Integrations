# @datafire/azure_arm_keyvault

Client library for KeyVaultManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_keyvault
```
```js
let azure_arm_keyvault = require('@datafire/azure_arm_keyvault').create();

azure_arm_keyvault.Vaults_ListByResourceGroup({}).then(data => {
  console.log(data);
})
```

## Description

The Azure management API provides a RESTful set of web services that interact with Azure Key Vault.

## Actions

### Vaults_ListByResourceGroup
The List operation gets information about the vaults associated with the subscription and within the specified resource group.


```js
azure_arm_keyvault.Vaults_ListByResourceGroup({
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
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VaultListResult](#vaultlistresult)

### Vaults_Delete
Deletes the specified Azure key vault.


```js
azure_arm_keyvault.Vaults_Delete({
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
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Vaults_Get
Gets the specified Azure key vault.


```js
azure_arm_keyvault.Vaults_Get({
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
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Vault](#vault)

### Vaults_CreateOrUpdate
Create or update a key vault in the specified subscription.


```js
azure_arm_keyvault.Vaults_CreateOrUpdate({
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
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Vault](#vault)

### Vaults_List
The List operation gets information about the vaults associated with the subscription.


```js
azure_arm_keyvault.Vaults_List({
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
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListResult](#resourcelistresult)



## Definitions

### AccessPolicyEntry
* AccessPolicyEntry `object`: An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
  * applicationId `string`:  Application ID of the client making request on behalf of a principal
  * objectId **required** `string`: The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
  * permissions **required** [Permissions](#permissions)
  * tenantId **required** `string`: The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.

### Permissions
* Permissions `object`: Permissions the identity has for keys, secrets and certificates.
  * certificates `array`: Permissions to certificates
    * items `string` (values: all, get, list, delete, create, import, update, managecontacts, getissuers, listissuers, setissuers, deleteissuers, manageissuers, recover, purge)
  * keys `array`: Permissions to keys
    * items `string` (values: all, encrypt, decrypt, wrapKey, unwrapKey, sign, verify, get, list, create, update, import, delete, backup, restore, recover, purge)
  * secrets `array`: Permissions to secrets
    * items `string` (values: all, get, list, set, delete, backup, restore, recover, purge)

### Resource
* Resource `object`: Key Vault resource
  * id `string`: The Azure Resource Manager resource ID for the key vault.
  * location **required** `string`: The supported Azure location where the key vault should be created.
  * name **required** `string`: The name of the key vault.
  * tags `object`: The tags that will be assigned to the key vault. 
  * type `string`: The resource type of the key vault.

### ResourceListResult
* ResourceListResult `object`: List of vault resources.
  * nextLink `string`: Gets the URL to get the next set of vault resources.
  * value `array`: Gets the list of vault resources.
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
  * name **required** `string`: The name of the key vault.
  * tags `object`: The tags that will be assigned to the key vault. 
  * type `string`: The resource type of the key vault.

### VaultCreateOrUpdateParameters
* VaultCreateOrUpdateParameters `object`: Parameters for creating or updating a vault
  * location **required** `string`: The supported Azure location where the key vault should be created.
  * properties **required** [VaultProperties](#vaultproperties)
  * tags `object`: The tags that will be assigned to the key vault. 

### VaultListResult
* VaultListResult `object`: List of vaults
  * nextLink `string`: Gets or sets the URL to get the next set of vaults.
  * value `array`: Gets or sets the list of vaults.
    * items [Vault](#vault)

### VaultProperties
* VaultProperties `object`: Properties of the vault
  * accessPolicies **required** `array`: An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
    * items [AccessPolicyEntry](#accesspolicyentry)
  * enableSoftDelete `boolean`: Property to specify whether the 'soft delete' functionality is enabled for this key vault.
  * enabledForDeployment `boolean`: Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
  * enabledForDiskEncryption `boolean`: Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
  * enabledForTemplateDeployment `boolean`: Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
  * sku **required** [Sku](#sku)
  * tenantId **required** `string`: The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
  * vaultUri `string`: The URI of the vault for performing operations on keys and secrets.


