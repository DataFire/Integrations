# @datafire/azure_keyvault_secrets

Client library for KeyVaultManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_keyvault_secrets
```
```js
let azure_keyvault_secrets = require('@datafire/azure_keyvault_secrets').create({
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

The Azure management API provides a RESTful set of web services that interact with Azure Key Vault.

## Actions

### Secrets_List
The List operation gets information about the secrets in a vault.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.


```js
azure_keyvault_secrets.Secrets_List({
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
  * $top `integer`: Maximum number of results to return.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SecretListResult](#secretlistresult)

### Secrets_Get
Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.


```js
azure_keyvault_secrets.Secrets_Get({
  "resourceGroupName": "",
  "vaultName": "",
  "secretName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the vault belongs.
  * vaultName **required** `string`: The name of the vault.
  * secretName **required** `string`: The name of the secret.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Secret](#secret)

### Secrets_Update
Update a secret in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments.  Users should use the data-plane REST service for interaction with vault secrets.


```js
azure_keyvault_secrets.Secrets_Update({
  "resourceGroupName": "",
  "vaultName": "",
  "secretName": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the vault belongs.
  * vaultName **required** `string`: Name of the vault
  * secretName **required** `string`: Name of the secret
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [SecretPatchParameters](#secretpatchparameters)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Secret](#secret)

### Secrets_CreateOrUpdate
Create or update a secret in a key vault in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.


```js
azure_keyvault_secrets.Secrets_CreateOrUpdate({
  "resourceGroupName": "",
  "vaultName": "",
  "secretName": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Resource Group to which the vault belongs.
  * vaultName **required** `string`: Name of the vault
  * secretName **required** `string`: Name of the secret
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [SecretCreateOrUpdateParameters](#secretcreateorupdateparameters)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Secret](#secret)



## Definitions

### Attributes
* Attributes `object`: The object attributes managed by the KeyVault service.
  * created `integer`: Creation time in seconds since 1970-01-01T00:00:00Z.
  * enabled `boolean`: Determines whether the object is enabled.
  * exp `integer`: Expiry date in seconds since 1970-01-01T00:00:00Z.
  * nbf `integer`: Not before date in seconds since 1970-01-01T00:00:00Z.
  * updated `integer`: Last updated time in seconds since 1970-01-01T00:00:00Z.

### Secret
* Secret `object`: Resource information with extended details.
  * properties **required** [SecretProperties](#secretproperties)
  * id `string`: The Azure Resource Manager resource ID for the key vault.
  * location **required** `string`: The supported Azure location where the key vault should be created.
  * name `string`: The name of the key vault.
  * tags `object`: The tags that will be assigned to the key vault. 
  * type `string`: The resource type of the key vault.

### SecretAttributes
* SecretAttributes: The secret management attributes.
  * created `integer`: Creation time in seconds since 1970-01-01T00:00:00Z.
  * enabled `boolean`: Determines whether the object is enabled.
  * exp `integer`: Expiry date in seconds since 1970-01-01T00:00:00Z.
  * nbf `integer`: Not before date in seconds since 1970-01-01T00:00:00Z.
  * updated `integer`: Last updated time in seconds since 1970-01-01T00:00:00Z.

### SecretCreateOrUpdateParameters
* SecretCreateOrUpdateParameters `object`: Parameters for creating or updating a secret
  * properties **required** [SecretProperties](#secretproperties)
  * tags `object`: The tags that will be assigned to the secret. 

### SecretListResult
* SecretListResult `object`: List of secrets
  * nextLink `string`: The URL to get the next set of secrets.
  * value `array`: The list of secrets.
    * items [Secret](#secret)

### SecretPatchParameters
* SecretPatchParameters `object`: Parameters for patching a secret
  * properties [SecretPatchProperties](#secretpatchproperties)
  * tags `object`: The tags that will be assigned to the secret. 

### SecretPatchProperties
* SecretPatchProperties `object`: Properties of the secret
  * attributes [SecretAttributes](#secretattributes)
  * contentType `string`: The content type of the secret.
  * value `string`: The value of the secret.

### SecretProperties
* SecretProperties `object`: Properties of the secret
  * attributes [SecretAttributes](#secretattributes)
  * contentType `string`: The content type of the secret.
  * secretUri `string`: The URI to retrieve the current version of the secret.
  * secretUriWithVersion `string`: The URI to retrieve the specific version of the secret.
  * value `string`: The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.


