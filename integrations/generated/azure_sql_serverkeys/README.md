# @datafire/azure_sql_serverkeys

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_serverkeys
```
```js
let azure_sql_serverkeys = require('@datafire/azure_sql_serverkeys').create({
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

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### ServerKeys_ListByServer
Gets a list of server keys.


```js
azure_sql_serverkeys.ServerKeys_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerKeyListResult](#serverkeylistresult)

### ServerKeys_Delete
Deletes the server key with the given name.


```js
azure_sql_serverkeys.ServerKeys_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "keyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * keyName **required** `string`: The name of the server key to be deleted.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ServerKeys_Get
Gets a server key.


```js
azure_sql_serverkeys.ServerKeys_Get({
  "resourceGroupName": "",
  "serverName": "",
  "keyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * keyName **required** `string`: The name of the server key to be retrieved.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerKey](#serverkey)

### ServerKeys_CreateOrUpdate
Creates or updates a server key.


```js
azure_sql_serverkeys.ServerKeys_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "keyName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * keyName **required** `string`: The name of the server key to be operated on (updated or created). The key name is required to be in the format of 'vault_key_version'. For example, if the keyId is https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901, then the server key name should be formatted as: YourVaultName_YourKeyName_01234567890123456789012345678901
  * parameters **required** [ServerKey](#serverkey)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerKey](#serverkey)



## Definitions

### ServerKey
* ServerKey `object`: A server key.
  * kind `string`: Kind of encryption protector. This is metadata used for the Azure portal experience.
  * location `string`: Resource location.
  * properties [ServerKeyProperties](#serverkeyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerKeyListResult
* ServerKeyListResult `object`: A list of server keys.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ServerKey](#serverkey)

### ServerKeyProperties
* ServerKeyProperties `object`: Properties for a server key execution.
  * creationDate `string`: The server key creation date.
  * serverKeyType **required** `string` (values: ServiceManaged, AzureKeyVault): The server key type like 'ServiceManaged', 'AzureKeyVault'.
  * subregion `string`: Subregion of the server key.
  * thumbprint `string`: Thumbprint of the server key.
  * uri `string`: The URI of the server key.


