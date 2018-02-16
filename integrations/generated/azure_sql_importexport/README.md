# @datafire/azure_sql_importexport

Client library for Azure SQL Database Import/Export spec

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_importexport
```
```js
let azure_sql_importexport = require('@datafire/azure_sql_importexport').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_importexport.Databases_Export({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "parameters": null
}).then(data => {
  console.log(data);
});
```

## Description

Provides create and read functionality for Import/Export operations on Azure SQL databases.

## Actions

### Databases_Export
Exports a database to a bacpac.


```js
azure_sql_importexport.Databases_Export({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database to be exported.
  * parameters **required** [ExportRequest](#exportrequest)

#### Output
* output [ImportExportResponse](#importexportresponse)

### Databases_CreateImportOperation
Creates an import operation that imports a bacpac into an existing database. The existing database must be empty.


```js
azure_sql_importexport.Databases_CreateImportOperation({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "extensionName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database to import into
  * extensionName **required** `string` (values: import): The name of the operation to perform
  * parameters **required** [ImportExtensionRequest](#importextensionrequest)

#### Output
* output [ImportExportResponse](#importexportresponse)

### Databases_Import
Imports a bacpac into a new database. 


```js
azure_sql_importexport.Databases_Import({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * parameters **required** [ImportRequest](#importrequest)

#### Output
* output [ImportExportResponse](#importexportresponse)



## Definitions

### ExportRequest
* ExportRequest `object`: Export database parameters.
  * administratorLogin **required** `string`: The name of the SQL administrator.
  * administratorLoginPassword **required** `string`: The password of the SQL administrator.
  * authenticationType `string` (values: SQL, ADPassword): The authentication type.
  * storageKey **required** `string`: The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a "?."
  * storageKeyType **required** `string` (values: StorageAccessKey, SharedAccessKey): The type of the storage key to use.
  * storageUri **required** `string`: The storage uri to use.

### ImportExportResponse
* ImportExportResponse `object`: Response for Import/Export Get operation.
  * properties [ImportExportResponseProperties](#importexportresponseproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ImportExportResponseProperties
* ImportExportResponseProperties `object`: Response for Import/Export Status operation.
  * blobUri `string`: The blob uri.
  * databaseName `string`: The name of the database.
  * errorMessage `string`: The error message returned from the server.
  * lastModifiedTime `string`: The operation status last modified time.
  * queuedTime `string`: The operation queued time.
  * requestId `string`: The request type of the operation.
  * requestType `string`: The request type of the operation.
  * serverName `string`: The name of the server.
  * status `string`: The status message returned from the server.

### ImportExtensionProperties
* ImportExtensionProperties `object`: Represents the properties for an import operation
  * operationMode **required** `string` (values: Import): The type of import operation being performed. This is always Import.
  * administratorLogin **required** `string`: The name of the SQL administrator.
  * administratorLoginPassword **required** `string`: The password of the SQL administrator.
  * authenticationType `string` (values: SQL, ADPassword): The authentication type.
  * storageKey **required** `string`: The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a "?."
  * storageKeyType **required** `string` (values: StorageAccessKey, SharedAccessKey): The type of the storage key to use.
  * storageUri **required** `string`: The storage uri to use.

### ImportExtensionRequest
* ImportExtensionRequest `object`: Import database parameters.
  * name `string`: The name of the extension.
  * properties [ImportExtensionProperties](#importextensionproperties)
  * type `string`: The type of the extension.

### ImportRequest
* ImportRequest `object`: Import database parameters.
  * databaseName **required** `string`: The name of the database to import.
  * edition **required** `string` (values: Web, Business, Basic, Standard, Premium, PremiumRS, Free, Stretch, DataWarehouse, System, System2): The edition for the database being created.
  * maxSizeBytes **required** `string`: The maximum size for the newly imported database.
  * serviceObjectiveName **required** `string` (values: System, System0, System1, System2, System3, System4, System2L, System3L, System4L, Free, Basic, S0, S1, S2, S3, S4, S6, S7, S9, S12, P1, P2, P3, P4, P6, P11, P15, PRS1, PRS2, PRS4, PRS6, DW100, DW200, DW300, DW400, DW500, DW600, DW1000, DW1200, DW1000c, DW1500, DW1500c, DW2000, DW2000c, DW3000, DW2500c, DW3000c, DW6000, DW5000c, DW6000c, DW7500c, DW10000c, DW15000c, DW30000c, DS100, DS200, DS300, DS400, DS500, DS600, DS1000, DS1200, DS1500, DS2000, ElasticPool): The name of the service objective to assign to the database.
  * administratorLogin **required** `string`: The name of the SQL administrator.
  * administratorLoginPassword **required** `string`: The password of the SQL administrator.
  * authenticationType `string` (values: SQL, ADPassword): The authentication type.
  * storageKey **required** `string`: The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a "?."
  * storageKeyType **required** `string` (values: StorageAccessKey, SharedAccessKey): The type of the storage key to use.
  * storageUri **required** `string`: The storage uri to use.

### ProxyResource
* ProxyResource: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### TrackedResource
* TrackedResource `object`: ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


