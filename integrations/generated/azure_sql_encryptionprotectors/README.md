# @datafire/azure_sql_encryptionprotectors

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_encryptionprotectors
```
```js
let azure_sql_encryptionprotectors = require('@datafire/azure_sql_encryptionprotectors').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_encryptionprotectors.EncryptionProtectors_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### EncryptionProtectors_ListByServer
Gets a list of server encryption protectors


```js
azure_sql_encryptionprotectors.EncryptionProtectors_ListByServer({
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
* output [EncryptionProtectorListResult](#encryptionprotectorlistresult)

### EncryptionProtectors_Get
Gets a server encryption protector.


```js
azure_sql_encryptionprotectors.EncryptionProtectors_Get({
  "resourceGroupName": "",
  "serverName": "",
  "encryptionProtectorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * encryptionProtectorName **required** `string` (values: current): The name of the encryption protector to be retrieved.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [EncryptionProtector](#encryptionprotector)

### EncryptionProtectors_CreateOrUpdate
Updates an existing encryption protector.


```js
azure_sql_encryptionprotectors.EncryptionProtectors_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "encryptionProtectorName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * encryptionProtectorName **required** `string` (values: current): The name of the encryption protector to be updated.
  * parameters **required** [EncryptionProtector](#encryptionprotector)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [EncryptionProtector](#encryptionprotector)



## Definitions

### EncryptionProtector
* EncryptionProtector `object`: The server encryption protector.
  * kind `string`: Kind of encryption protector. This is metadata used for the Azure portal experience.
  * location `string`: Resource location.
  * properties [EncryptionProtectorProperties](#encryptionprotectorproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### EncryptionProtectorListResult
* EncryptionProtectorListResult `object`: A list of server encryption protectors.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [EncryptionProtector](#encryptionprotector)

### EncryptionProtectorProperties
* EncryptionProtectorProperties `object`: Properties for an encryption protector execution.
  * serverKeyName `string`: The name of the server key.
  * serverKeyType **required** `string` (values: ServiceManaged, AzureKeyVault): The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
  * subregion `string`: Subregion of the encryption protector.
  * thumbprint `string`: Thumbprint of the server key.
  * uri `string`: The URI of the server key.

### ProxyResource
* ProxyResource `object`: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


