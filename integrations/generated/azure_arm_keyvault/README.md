# @datafire/azure_arm_keyvault

Client library for KeyVaultManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_keyvault
```

```js
let datafire = require('datafire');
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

#### Parameters
* resourceGroupName (string) **required** - The name of the Resource Group to which the vault belongs.
* $top (integer) - Maximum number of results to return.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the Resource Group to which the vault belongs.
* vaultName (string) **required** - The name of the vault to delete
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the Resource Group to which the vault belongs.
* vaultName (string) **required** - The name of the vault.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the Resource Group to which the server belongs.
* vaultName (string) **required** - Name of the vault
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required** - Parameters for creating or updating a vault
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Vaults_List
The List operation gets information about the vaults associated with the subscription.


```js
azure_arm_keyvault.Vaults_List({
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* $filter (string) **required** - The filter to apply on the operation.
* $top (integer) - Maximum number of results to return.
* api-version (string) **required** - Azure Resource Manager Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

