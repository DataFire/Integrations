# @datafire/azure_sql_deprecated

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_deprecated
```
```js
let azure_sql_deprecated = require('@datafire/azure_sql_deprecated').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_deprecated.Extensions_ListByDatabase({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides create, read, update and delete functionality for Azure SQL Database resources including servers, databases, elastic pools, recommendations, and operations.

## Actions

### Extensions_ListByDatabase
Gets database extensions.


```js
azure_sql_deprecated.Extensions_ListByDatabase({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database to import into

#### Output
* output [ExtensionListResult](#extensionlistresult)

### TransparentDataEncryptionConfigurations_ListByDatabase
Gets a list of a database's transparent data encryption configurations. There is only ever one element, named 'current', so GetTransparentDataEncryptionConfiguration should be used instead.


```js
azure_sql_deprecated.TransparentDataEncryptionConfigurations_ListByDatabase({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which the transparent data encryption applies.

#### Output
* output [TransparentDataEncryptionListResult](#transparentdataencryptionlistresult)



## Definitions

### ExtensionListResult
* ExtensionListResult `object`: Represents the response to a list extensions request.
  * value `array`: The list of extensions.
    * items `object`

### TransparentDataEncryptionListResult
* TransparentDataEncryptionListResult `object`: Represents the response to a list transparent data encryption configurations request.
  * value `array`: The list of transparent data encryption configurations.
    * items `object`: Represents a database transparent data encryption configuration.
      * location `string`: Resource location.
      * properties `object`: Represents the properties of a database transparent data encryption.
        * status `string` (values: Enabled, Disabled): The status of the database transparent data encryption.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type.


