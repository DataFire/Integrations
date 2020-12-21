# @datafire/azure_mysql_dataencryptionkeys

Client library for MySQLManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_mysql_dataencryptionkeys
```
```js
let azure_mysql_dataencryptionkeys = require('@datafire/azure_mysql_dataencryptionkeys').create({
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

The Microsoft Azure management API provides create, read, update, and delete functionality for Azure MySQL resources including servers, databases, firewall rules, VNET rules, security alert policies, log files, encryption keys, active directory administrator and configurations.

## Actions

### ServerKeys_ListByInstance
Gets a list of  Server keys.


```js
azure_mysql_dataencryptionkeys.ServerKeys_ListByInstance({
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
Deletes the MySQL Server key with the given name.


```js
azure_mysql_dataencryptionkeys.ServerKeys_Delete({
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
  * keyName **required** `string`: The name of the MySQL Server key to be deleted.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ServerKeys_Get
Gets a MySQL Server key.


```js
azure_mysql_dataencryptionkeys.ServerKeys_Get({
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
  * keyName **required** `string`: The name of the MySQL Server key to be retrieved.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerKey](#serverkey)

### ServerKeys_CreateOrUpdate
Creates or updates a MySQL Server key.


```js
azure_mysql_dataencryptionkeys.ServerKeys_CreateOrUpdate({
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
  * keyName **required** `string`: The name of the MySQL Server key to be operated on (updated or created).
  * parameters **required** [ServerKey](#serverkey)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ServerKey](#serverkey)



## Definitions

### CloudError
* CloudError `object`: An error response from the Batch service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the Batch service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### ProxyResource
* ProxyResource `object`: Resource properties.
  * id `string`: Resource ID
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerKey
* ServerKey `object`: A MySQL Server key.
  * kind `string`: Kind of encryption protector. This is metadata used for the Azure portal experience.
  * properties [ServerKeyProperties](#serverkeyproperties)
  * id `string`: Resource ID
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerKeyListResult
* ServerKeyListResult `object`: A list of MySQL Server keys.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ServerKey](#serverkey)

### ServerKeyProperties
* ServerKeyProperties `object`: Properties for a key execution.
  * creationDate `string`: The key creation date.
  * serverKeyType **required** `string` (values: AzureKeyVault): The key type like 'AzureKeyVault'.
  * uri `string`: The URI of the key.


