# @datafire/azure_sql_databaseschema

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_databaseschema
```
```js
let azure_sql_databaseschema = require('@datafire/azure_sql_databaseschema').create({
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

### DatabaseSchemas_ListByDatabase
List database schemas


```js
azure_sql_databaseschema.DatabaseSchemas_ListByDatabase({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * $filter `string`: An OData filter expression that filters elements in the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseSchemaListResult](#databaseschemalistresult)

### DatabaseSchemas_Get
Get database schema


```js
azure_sql_databaseschema.DatabaseSchemas_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "schemaName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseSchema](#databaseschema)

### DatabaseTables_ListBySchema
List database tables


```js
azure_sql_databaseschema.DatabaseTables_ListBySchema({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "schemaName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * $filter `string`: An OData filter expression that filters elements in the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseTableListResult](#databasetablelistresult)

### DatabaseTables_Get
Get database table


```js
azure_sql_databaseschema.DatabaseTables_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * tableName **required** `string`: The name of the table.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseTable](#databasetable)

### DatabaseColumns_ListByTable
List database columns


```js
azure_sql_databaseschema.DatabaseColumns_ListByTable({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * tableName **required** `string`: The name of the table.
  * $filter `string`: An OData filter expression that filters elements in the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseColumnListResult](#databasecolumnlistresult)

### DatabaseColumns_Get
Get database column


```js
azure_sql_databaseschema.DatabaseColumns_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "columnName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * schemaName **required** `string`: The name of the schema.
  * tableName **required** `string`: The name of the table.
  * columnName **required** `string`: The name of the column.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseColumn](#databasecolumn)



## Definitions

### DatabaseColumn
* DatabaseColumn `object`: A database column resource.
  * properties [DatabaseColumnProperties](#databasecolumnproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseColumnListResult
* DatabaseColumnListResult `object`: A list of database columns.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [DatabaseColumn](#databasecolumn)

### DatabaseColumnProperties
* DatabaseColumnProperties `object`: Database column properties.
  * columnType `string` (values: image, text, uniqueidentifier, date, time, datetime2, datetimeoffset, tinyint, smallint, int, smalldatetime, real, money, datetime, float, sql_variant, ntext, bit, decimal, numeric, smallmoney, bigint, hierarchyid, geometry, geography, varbinary, varchar, binary, char, timestamp, nvarchar, nchar, xml, sysname): The column data type.

### DatabaseSchema
* DatabaseSchema `object`: A database schema resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseSchemaListResult
* DatabaseSchemaListResult `object`: A list of database schemas.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [DatabaseSchema](#databaseschema)

### DatabaseTable
* DatabaseTable `object`: A database table resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseTableListResult
* DatabaseTableListResult `object`: A list of database tables.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [DatabaseTable](#databasetable)

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


