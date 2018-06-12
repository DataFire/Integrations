# @datafire/azure_datalake_analytics_catalog

Client library for DataLakeAnalyticsCatalogManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_datalake_analytics_catalog
```
```js
let azure_datalake_analytics_catalog = require('@datafire/azure_datalake_analytics_catalog').create();

azure_datalake_analytics_catalog.Catalog_ListAcls({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Creates an Azure Data Lake Analytics catalog client.

## Actions

### Catalog_ListAcls
Retrieves the list of access control list (ACL) entries for the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListAcls({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [AclList](#acllist)

### Catalog_ListDatabases
Retrieves the list of databases from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListDatabases({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlDatabaseList](#usqldatabaselist)

### Catalog_GetDatabase
Retrieves the specified database from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetDatabase({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlDatabase](#usqldatabase)

### Catalog_ListAclsByDatabase
Retrieves the list of access control list (ACL) entries for the database from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListAclsByDatabase({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [AclList](#acllist)

### Catalog_ListAssemblies
Retrieves the list of assemblies from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListAssemblies({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the assembly.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlAssemblyList](#usqlassemblylist)

### Catalog_GetAssembly
Retrieves the specified assembly from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetAssembly({
  "databaseName": "",
  "assemblyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the assembly.
  * assemblyName **required** `string`: The name of the assembly.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlAssembly](#usqlassembly)

### Catalog_ListCredentials
Retrieves the list of credentials from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListCredentials({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the schema.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlCredentialList](#usqlcredentiallist)

### Catalog_GetCredential
Retrieves the specified credential from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetCredential({
  "databaseName": "",
  "credentialName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the schema.
  * credentialName **required** `string`: The name of the credential.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlCredential](#usqlcredential)

### Catalog_UpdateCredential
Modifies the specified credential for use with external data sources in the specified database


```js
azure_datalake_analytics_catalog.Catalog_UpdateCredential({
  "databaseName": "",
  "credentialName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the credential.
  * credentialName **required** `string`: The name of the credential.
  * parameters **required** [DataLakeAnalyticsCatalogCredentialUpdateParameters](#datalakeanalyticscatalogcredentialupdateparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Catalog_DeleteCredential
Deletes the specified credential in the specified database


```js
azure_datalake_analytics_catalog.Catalog_DeleteCredential({
  "databaseName": "",
  "credentialName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the credential.
  * credentialName **required** `string`: The name of the credential to delete
  * parameters [DataLakeAnalyticsCatalogCredentialDeleteParameters](#datalakeanalyticscatalogcredentialdeleteparameters)
  * cascade `boolean`: Indicates if the delete should be a cascading delete (which deletes all resources dependent on the credential as well as the credential) or not. If false will fail if there are any resources relying on the credential.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Catalog_CreateCredential
Creates the specified credential for use with external data sources in the specified database.


```js
azure_datalake_analytics_catalog.Catalog_CreateCredential({
  "databaseName": "",
  "credentialName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database in which to create the credential. Note: This is NOT an external database name, but the name of an existing U-SQL database that should contain the new credential object.
  * credentialName **required** `string`: The name of the credential.
  * parameters **required** [DataLakeAnalyticsCatalogCredentialCreateParameters](#datalakeanalyticscatalogcredentialcreateparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Catalog_ListExternalDataSources
Retrieves the list of external data sources from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListExternalDataSources({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the external data sources.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlExternalDataSourceList](#usqlexternaldatasourcelist)

### Catalog_GetExternalDataSource
Retrieves the specified external data source from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetExternalDataSource({
  "databaseName": "",
  "externalDataSourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the external data source.
  * externalDataSourceName **required** `string`: The name of the external data source.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlExternalDataSource](#usqlexternaldatasource)

### Catalog_ListSchemas
Retrieves the list of schemas from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListSchemas({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the schema.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlSchemaList](#usqlschemalist)

### Catalog_GetSchema
Retrieves the specified schema from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetSchema({
  "databaseName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the schema.
  * schemaName **required** `string`: The name of the schema.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlSchema](#usqlschema)

### Catalog_ListPackages
Retrieves the list of packages from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListPackages({
  "databaseName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the packages.
  * schemaName **required** `string`: The name of the schema containing the packages.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlPackageList](#usqlpackagelist)

### Catalog_GetPackage
Retrieves the specified package from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetPackage({
  "databaseName": "",
  "schemaName": "",
  "packageName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the package.
  * schemaName **required** `string`: The name of the schema containing the package.
  * packageName **required** `string`: The name of the package.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlPackage](#usqlpackage)

### Catalog_ListProcedures
Retrieves the list of procedures from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListProcedures({
  "databaseName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the procedures.
  * schemaName **required** `string`: The name of the schema containing the procedures.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlProcedureList](#usqlprocedurelist)

### Catalog_GetProcedure
Retrieves the specified procedure from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetProcedure({
  "databaseName": "",
  "schemaName": "",
  "procedureName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the procedure.
  * schemaName **required** `string`: The name of the schema containing the procedure.
  * procedureName **required** `string`: The name of the procedure.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlProcedure](#usqlprocedure)

### Catalog_ListTableStatisticsByDatabaseAndSchema
Retrieves the list of all table statistics within the specified schema from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTableStatisticsByDatabaseAndSchema({
  "databaseName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the statistics.
  * schemaName **required** `string`: The name of the schema containing the statistics.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableStatisticsList](#usqltablestatisticslist)

### Catalog_ListTables
Retrieves the list of tables from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTables({
  "databaseName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the tables.
  * schemaName **required** `string`: The name of the schema containing the tables.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * basic `boolean`: The basic switch indicates what level of information to return when listing tables. When basic is true, only database_name, schema_name, table_name and version are returned for each table, otherwise all table metadata is returned. By default, it is false. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableList](#usqltablelist)

### Catalog_GetTable
Retrieves the specified table from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetTable({
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the table.
  * schemaName **required** `string`: The name of the schema containing the table.
  * tableName **required** `string`: The name of the table.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTable](#usqltable)

### Catalog_ListTablePartitions
Retrieves the list of table partitions from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTablePartitions({
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the partitions.
  * schemaName **required** `string`: The name of the schema containing the partitions.
  * tableName **required** `string`: The name of the table containing the partitions.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTablePartitionList](#usqltablepartitionlist)

### Catalog_GetTablePartition
Retrieves the specified table partition from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetTablePartition({
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "partitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the partition.
  * schemaName **required** `string`: The name of the schema containing the partition.
  * tableName **required** `string`: The name of the table containing the partition.
  * partitionName **required** `string`: The name of the table partition.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTablePartition](#usqltablepartition)

### Catalog_PreviewTablePartition
Retrieves a preview set of rows in given partition.


```js
azure_datalake_analytics_catalog.Catalog_PreviewTablePartition({
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "partitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the partition.
  * schemaName **required** `string`: The name of the schema containing the partition.
  * tableName **required** `string`: The name of the table containing the partition.
  * partitionName **required** `string`: The name of the table partition.
  * maxRows `integer`: The maximum number of preview rows to be retrieved.Rows returned may be less than or equal to this number depending on row sizes and number of rows in the partition.
  * maxColumns `integer`: The maximum number of columns to be retrieved.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTablePreview](#usqltablepreview)

### Catalog_PreviewTable
Retrieves a preview set of rows in given table.


```js
azure_datalake_analytics_catalog.Catalog_PreviewTable({
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the table.
  * schemaName **required** `string`: The name of the schema containing the table.
  * tableName **required** `string`: The name of the table.
  * maxRows `integer`: The maximum number of preview rows to be retrieved. Rows returned may be less than or equal to this number depending on row sizes and number of rows in the table.
  * maxColumns `integer`: The maximum number of columns to be retrieved.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTablePreview](#usqltablepreview)

### Catalog_ListTableStatistics
Retrieves the list of table statistics from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTableStatistics({
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the statistics.
  * schemaName **required** `string`: The name of the schema containing the statistics.
  * tableName **required** `string`: The name of the table containing the statistics.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableStatisticsList](#usqltablestatisticslist)

### Catalog_GetTableStatistic
Retrieves the specified table statistics from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetTableStatistic({
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "statisticsName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the statistics.
  * schemaName **required** `string`: The name of the schema containing the statistics.
  * tableName **required** `string`: The name of the table containing the statistics.
  * statisticsName **required** `string`: The name of the table statistics.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableStatistics](#usqltablestatistics)

### Catalog_ListTableFragments
Retrieves the list of table fragments from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTableFragments({
  "databaseName": "",
  "schemaName": "",
  "tableName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the table fragments.
  * schemaName **required** `string`: The name of the schema containing the table fragments.
  * tableName **required** `string`: The name of the table containing the table fragments.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableFragmentList](#usqltablefragmentlist)

### Catalog_ListTableTypes
Retrieves the list of table types from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTableTypes({
  "databaseName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the table types.
  * schemaName **required** `string`: The name of the schema containing the table types.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableTypeList](#usqltabletypelist)

### Catalog_GetTableType
Retrieves the specified table type from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetTableType({
  "databaseName": "",
  "schemaName": "",
  "tableTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the table type.
  * schemaName **required** `string`: The name of the schema containing the table type.
  * tableTypeName **required** `string`: The name of the table type to retrieve.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableType](#usqltabletype)

### Catalog_ListTableValuedFunctions
Retrieves the list of table valued functions from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTableValuedFunctions({
  "databaseName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the table valued functions.
  * schemaName **required** `string`: The name of the schema containing the table valued functions.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableValuedFunctionList](#usqltablevaluedfunctionlist)

### Catalog_GetTableValuedFunction
Retrieves the specified table valued function from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetTableValuedFunction({
  "databaseName": "",
  "schemaName": "",
  "tableValuedFunctionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the table valued function.
  * schemaName **required** `string`: The name of the schema containing the table valued function.
  * tableValuedFunctionName **required** `string`: The name of the tableValuedFunction.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableValuedFunction](#usqltablevaluedfunction)

### Catalog_ListTypes
Retrieves the list of types within the specified database and schema from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTypes({
  "databaseName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the types.
  * schemaName **required** `string`: The name of the schema containing the types.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTypeList](#usqltypelist)

### Catalog_ListViews
Retrieves the list of views from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListViews({
  "databaseName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the views.
  * schemaName **required** `string`: The name of the schema containing the views.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlViewList](#usqlviewlist)

### Catalog_GetView
Retrieves the specified view from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_GetView({
  "databaseName": "",
  "schemaName": "",
  "viewName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the view.
  * schemaName **required** `string`: The name of the schema containing the view.
  * viewName **required** `string`: The name of the view.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlView](#usqlview)

### Catalog_DeleteAllSecrets
Deletes all secrets in the specified database. This is deprecated and will be removed in the next release. In the future, please only drop individual credentials using DeleteCredential


```js
azure_datalake_analytics_catalog.Catalog_DeleteAllSecrets({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the secret.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Catalog_DeleteSecret
Deletes the specified secret in the specified database. This is deprecated and will be removed in the next release. Please use DeleteCredential instead.


```js
azure_datalake_analytics_catalog.Catalog_DeleteSecret({
  "databaseName": "",
  "secretName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the secret.
  * secretName **required** `string`: The name of the secret to delete
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Catalog_GetSecret
Gets the specified secret in the specified database. This is deprecated and will be removed in the next release. Please use GetCredential instead.


```js
azure_datalake_analytics_catalog.Catalog_GetSecret({
  "databaseName": "",
  "secretName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the secret.
  * secretName **required** `string`: The name of the secret to get
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlSecret](#usqlsecret)

### Catalog_UpdateSecret
Modifies the specified secret for use with external data sources in the specified database. This is deprecated and will be removed in the next release. Please use UpdateCredential instead.


```js
azure_datalake_analytics_catalog.Catalog_UpdateSecret({
  "databaseName": "",
  "secretName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the secret.
  * secretName **required** `string`: The name of the secret.
  * parameters **required** [DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters](#datalakeanalyticscatalogsecretcreateorupdateparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Catalog_CreateSecret
Creates the specified secret for use with external data sources in the specified database. This is deprecated and will be removed in the next release. Please use CreateCredential instead.


```js
azure_datalake_analytics_catalog.Catalog_CreateSecret({
  "databaseName": "",
  "secretName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database in which to create the secret.
  * secretName **required** `string`: The name of the secret.
  * parameters **required** [DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters](#datalakeanalyticscatalogsecretcreateorupdateparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Catalog_ListTableStatisticsByDatabase
Retrieves the list of all statistics in a database from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTableStatisticsByDatabase({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the table statistics.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableStatisticsList](#usqltablestatisticslist)

### Catalog_ListTablesByDatabase
Retrieves the list of all tables in a database from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTablesByDatabase({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the tables.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * basic `boolean`: The basic switch indicates what level of information to return when listing tables. When basic is true, only database_name, schema_name, table_name and version are returned for each table, otherwise all table metadata is returned. By default, it is false
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableList](#usqltablelist)

### Catalog_ListTableValuedFunctionsByDatabase
Retrieves the list of all table valued functions in a database from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListTableValuedFunctionsByDatabase({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the table valued functions.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlTableValuedFunctionList](#usqltablevaluedfunctionlist)

### Catalog_ListViewsByDatabase
Retrieves the list of all views in a database from the Data Lake Analytics catalog.


```js
azure_datalake_analytics_catalog.Catalog_ListViewsByDatabase({
  "databaseName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * databaseName **required** `string`: The name of the database containing the views.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [USqlViewList](#usqlviewlist)



## Definitions

### Acl
* Acl `object`: A Data Lake Analytics catalog access control list (ACL) entry.
  * aceType `string` (values: UserObj, GroupObj, Other, User, Group): the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively.
  * permission `string` (values: None, Use, Create, Drop, Alter, Write, All): the permission type of the access control list (ACL) entry.
  * principalId `string`: the Azure AD object ID of the user or group being specified in the access control list (ACL) entry.

### AclCreateOrUpdateParameters
* AclCreateOrUpdateParameters `object`: The parameters used to create or update an access control list (ACL) entry.
  * aceType **required** `string` (values: UserObj, GroupObj, Other, User, Group): the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively.
  * permission **required** `string` (values: None, Use, Create, Drop, Alter, Write, All): the permission type of the access control list (ACL) entry.
  * principalId **required** `string`: the Azure AD object ID of the user or group being specified in the access control list (ACL) entry.

### AclDeleteParameters
* AclDeleteParameters `object`: The parameters used to delete an access control list (ACL) entry.
  * aceType **required** `string` (values: UserObj, GroupObj, Other, User, Group): the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively.
  * principalId **required** `string`: the Azure AD object ID of the user or group being specified in the access control list (ACL) entry.

### AclList
* AclList `object`: A Data Lake Analytics catalog access control list (ACL).
  * value `array`: the access control list (ACL).
    * items [Acl](#acl)
  * nextLink `string`: the link to the next page of results.

### CatalogItem
* CatalogItem `object`: A Data Lake Analytics catalog item.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### CatalogItemList
* CatalogItemList `object`: A Data Lake Analytics catalog item list.
  * nextLink `string`: the link to the next page of results.

### DataLakeAnalyticsCatalogCredentialCreateParameters
* DataLakeAnalyticsCatalogCredentialCreateParameters `object`: Data Lake Analytics catalog credential creation parameters.
  * password **required** `string`: the password for the credential and user with access to the data source.
  * uri **required** `string`: the URI identifier for the data source this credential can connect to in the format <hostname>:<port>
  * userId **required** `string`: the object identifier for the user associated with this credential with access to the data source.

### DataLakeAnalyticsCatalogCredentialDeleteParameters
* DataLakeAnalyticsCatalogCredentialDeleteParameters `object`: Data Lake Analytics catalog credential deletion parameters.
  * password `string`: the current password for the credential and user with access to the data source. This is required if the requester is not the account owner.

### DataLakeAnalyticsCatalogCredentialUpdateParameters
* DataLakeAnalyticsCatalogCredentialUpdateParameters `object`: Data Lake Analytics catalog credential update parameters.
  * newPassword `string`: the new password for the credential and user with access to the data source.
  * password `string`: the current password for the credential and user with access to the data source. This is required if the requester is not the account owner.
  * uri `string`: the URI identifier for the data source this credential can connect to in the format <hostname>:<port>
  * userId `string`: the object identifier for the user associated with this credential with access to the data source.

### DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters
* DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters `object`: Data Lake Analytics catalog secret creation and update parameters. This is deprecated and will be removed in the next release. Please use DataLakeAnalyticsCatalogCredentialCreateOrUpdateParameters instead.
  * password **required** `string`: the password for the secret to pass in
  * uri `string`: the URI identifier for the secret in the format <hostname>:<port>

### DdlName
* DdlName `object`: A Data Lake Analytics DDL name item.
  * firstPart `string`: the name of the table associated with this database and schema.
  * secondPart `string`: the name of the table associated with this database and schema.
  * server `string`: the name of the table associated with this database and schema.
  * thirdPart `string`: the name of the table associated with this database and schema.

### EntityId
* EntityId `object`: A Data Lake Analytics catalog entity identifier object.
  * name [DdlName](#ddlname)
  * version `string`: the version of the external data source.

### ExternalTable
* ExternalTable `object`: A Data Lake Analytics catalog external table item.
  * dataSource [EntityId](#entityid)
  * tableName `string`: the name of the table associated with this database and schema.

### TypeFieldInfo
* TypeFieldInfo `object`: A Data Lake Analytics catalog type field information item.
  * name `string`: the name of the field associated with this type.
  * type `string`: the type of the field.

### USqlAssembly
* USqlAssembly `object`: A Data Lake Analytics catalog U-SQL Assembly.
  * assemblyName `string`: the name of the assembly.
  * clrName `string`: the name of the CLR.
  * databaseName `string`: the name of the database.
  * dependencies `array`: the list of dependencies associated with the assembly
    * items [USqlAssemblyDependencyInfo](#usqlassemblydependencyinfo)
  * files `array`: the list of files associated with the assembly
    * items [USqlAssemblyFileInfo](#usqlassemblyfileinfo)
  * isUserDefined `boolean`: the switch indicating if this assembly is user defined or not.
  * isVisible `boolean`: the switch indicating if this assembly is visible or not.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlAssemblyClr
* USqlAssemblyClr `object`: A Data Lake Analytics catalog U-SQL assembly CLR item.
  * assemblyClrName `string`: the name of the assembly.
  * clrName `string`: the name of the CLR.
  * databaseName `string`: the name of the database.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlAssemblyDependencyInfo
* USqlAssemblyDependencyInfo `object`: A Data Lake Analytics catalog U-SQL dependency information item.
  * entityId [EntityId](#entityid)

### USqlAssemblyFileInfo
* USqlAssemblyFileInfo `object`: A Data Lake Analytics catalog U-SQL assembly file information item.
  * contentPath `string`: the the content path to the assembly file.
  * originalPath `string`: the the original path to the assembly file.
  * type `string` (values: Assembly, Resource, Nodeploy): the assembly file type.

### USqlAssemblyList
* USqlAssemblyList `object`: A Data Lake Analytics catalog U-SQL assembly CLR item list.
  * value `array`: the list of assemblies in the database
    * items [USqlAssemblyClr](#usqlassemblyclr)
  * nextLink `string`: the link to the next page of results.

### USqlCredential
* USqlCredential `object`: A Data Lake Analytics catalog U-SQL credential item.
  * credentialName `string`: the name of the credential.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlCredentialList
* USqlCredentialList `object`: A Data Lake Analytics catalog U-SQL credential item list.
  * value `array`: the list of credentials in the database
    * items [USqlCredential](#usqlcredential)
  * nextLink `string`: the link to the next page of results.

### USqlDatabase
* USqlDatabase `object`: A Data Lake Analytics catalog U-SQL database item.
  * databaseName `string`: the name of the database.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlDatabaseList
* USqlDatabaseList `object`: A Data Lake Analytics catalog U-SQL database item list.
  * value `array`: the list of databases
    * items [USqlDatabase](#usqldatabase)
  * nextLink `string`: the link to the next page of results.

### USqlDirectedColumn
* USqlDirectedColumn `object`: A Data Lake Analytics catalog U-SQL directed column item.
  * descending `boolean`: the switch indicating if the index is descending or not.
  * name `string`: the name of the index in the table.

### USqlDistributionInfo
* USqlDistributionInfo `object`: A Data Lake Analytics catalog U-SQL distribution information object.
  * count `integer`: the count of indices using this distribution.
  * dynamicCount `integer`: the dynamic count of indices using this distribution.
  * keys `array`: the list of directed columns in the distribution
    * items [USqlDirectedColumn](#usqldirectedcolumn)
  * type `integer`: the type of this distribution.

### USqlExternalDataSource
* USqlExternalDataSource `object`: A Data Lake Analytics catalog U-SQL external datasource item.
  * databaseName `string`: the name of the database.
  * externalDataSourceName `string`: the name of the external data source.
  * provider `string`: the name of the provider for the external data source.
  * providerString `string`: the name of the provider string for the external data source.
  * pushdownTypes `array`: the list of types to push down from the external data source.
    * items `string`
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlExternalDataSourceList
* USqlExternalDataSourceList `object`: A Data Lake Analytics catalog U-SQL external datasource item list.
  * value `array`: the list of external data sources in the database
    * items [USqlExternalDataSource](#usqlexternaldatasource)
  * nextLink `string`: the link to the next page of results.

### USqlIndex
* USqlIndex `object`: A Data Lake Analytics catalog U-SQL table index item.
  * columns `array`: the list of columns in the index
    * items `string`
  * distributionInfo [USqlDistributionInfo](#usqldistributioninfo)
  * indexId `integer`: the ID of this index within the table.
  * indexKeys `array`: the list of directed columns in the index
    * items [USqlDirectedColumn](#usqldirectedcolumn)
  * isColumnstore `boolean`: the switch indicating if this index is a columnstore index.
  * isUnique `boolean`: the switch indicating if this index is a unique index.
  * name `string`: the name of the index in the table.
  * partitionFunction `string`: partition function ID for the index.
  * partitionKeyList `array`: the list of partion keys in the index
    * items `string`
  * streamNames `array`: the list of full paths to the streams that contain this index in the DataLake account.
    * items `string`

### USqlPackage
* USqlPackage `object`: A Data Lake Analytics catalog U-SQL package item.
  * databaseName `string`: the name of the database containing the package.
  * definition `string`: the definition of the package.
  * packageName `string`: the name of the package.
  * schemaName `string`: the name of the schema associated with this package and database.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlPackageList
* USqlPackageList `object`: A Data Lake Analytics catalog U-SQL package item list.
  * value `array`: the list of packages in the database and schema combination
    * items [USqlPackage](#usqlpackage)
  * nextLink `string`: the link to the next page of results.

### USqlProcedure
* USqlProcedure `object`: A Data Lake Analytics catalog U-SQL procedure item.
  * databaseName `string`: the name of the database.
  * definition `string`: the defined query of the procedure.
  * procName `string`: the name of the procedure.
  * schemaName `string`: the name of the schema associated with this procedure and database.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlProcedureList
* USqlProcedureList `object`: A Data Lake Analytics catalog U-SQL procedure item list.
  * value `array`: the list of procedure in the database and schema combination
    * items [USqlProcedure](#usqlprocedure)
  * nextLink `string`: the link to the next page of results.

### USqlSchema
* USqlSchema `object`: A Data Lake Analytics catalog U-SQL schema item.
  * databaseName `string`: the name of the database.
  * schemaName `string`: the name of the schema.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlSchemaList
* USqlSchemaList `object`: A Data Lake Analytics catalog U-SQL schema item list.
  * value `array`: the list of schemas in the database
    * items [USqlSchema](#usqlschema)
  * nextLink `string`: the link to the next page of results.

### USqlSecret
* USqlSecret `object`: A Data Lake Analytics catalog U-SQL secret item.
  * creationTime `string`: the creation time of the credential object. This is the only information returned about a secret from a GET.
  * databaseName `string`: the name of the database.
  * password `string`: the password for the secret to pass in
  * secretName `string`: the name of the secret.
  * uri `string`: the URI identifier for the secret in the format <hostname>:<port>
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlTable
* USqlTable `object`: A Data Lake Analytics catalog U-SQL table item.
  * columnList `array`: the list of columns in this table
    * items [USqlTableColumn](#usqltablecolumn)
  * databaseName `string`: the name of the database.
  * distributionInfo [USqlDistributionInfo](#usqldistributioninfo)
  * externalTable [ExternalTable](#externaltable)
  * indexList `array`: the list of indices in this table
    * items [USqlIndex](#usqlindex)
  * partitionKeyList `array`: the list of partition keys in the table
    * items `string`
  * schemaName `string`: the name of the schema associated with this table and database.
  * tableName `string`: the name of the table.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlTableColumn
* USqlTableColumn `object`: A Data Lake Analytics catalog U-SQL table column item.
  * name `string`: the name of the column in the table.
  * type `string`: the object type of the specified column (such as System.String).

### USqlTableFragment
* USqlTableFragment `object`: A Data Lake Analytics catalog U-SQL table fragment item.
  * createDate `string`: the creation time of the table fragment.
  * fragmentId `string`: the version of the catalog item.
  * indexId `integer`: the ordinal of the index which contains the table fragment.
  * parentId `string`: the parent object Id of the table fragment. The parent could be a table or table partition.
  * rowCount `integer`: the number of rows in the table fragment.
  * size `integer`: the data size of the table fragment in bytes.

### USqlTableFragmentList
* USqlTableFragmentList `object`: A Data Lake Analytics catalog U-SQL table fragment item list.
  * value `array`: the list of table fragments in the database, schema and table combination
    * items [USqlTableFragment](#usqltablefragment)
  * nextLink `string`: the link to the next page of results.

### USqlTableList
* USqlTableList `object`: A Data Lake Analytics catalog U-SQL table item list.
  * value `array`: the list of tables in the database and schema combination
    * items [USqlTable](#usqltable)
  * nextLink `string`: the link to the next page of results.

### USqlTablePartition
* USqlTablePartition `object`: A Data Lake Analytics catalog U-SQL table partition item.
  * createDate `string`: the creation time of the partition
  * databaseName `string`: the name of the database.
  * indexId `integer`: the index ID for this partition.
  * label `array`: the list of labels associated with this partition.
    * items `string`
  * parentName [DdlName](#ddlname)
  * partitionName `string`: the name of the table partition.
  * schemaName `string`: the name of the schema associated with this table partition and database.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlTablePartitionList
* USqlTablePartitionList `object`: A Data Lake Analytics catalog U-SQL table partition item list.
  * value `array`: the list of table partitions in the database, schema and table combination
    * items [USqlTablePartition](#usqltablepartition)
  * nextLink `string`: the link to the next page of results.

### USqlTablePreview
* USqlTablePreview `object`: A Data Lake Analytics catalog table or partition preview rows item.
  * rows `array`: the rows of the table or partition preview, where each row is an array of string representations the row's values. Note: Byte arrays will appear as base-64 encoded values, SqlMap and SqlArray objects will appear as escaped JSON objects, and DateTime objects will appear as ISO formatted UTC date-times.
    * items `array`
      * items `string`
  * schema `array`: the schema of the table or partition.
    * items [USqlTableColumn](#usqltablecolumn)
  * totalColumnCount `integer`: the total number of columns in the table or partition.
  * totalRowCount `integer`: the total number of rows in the table or partition.
  * truncated `boolean`: true if the amount of data in the response is less than expected due to the preview operation's size limitations. This can occur if the requested rows or row counts are too large.

### USqlTableStatistics
* USqlTableStatistics `object`: A Data Lake Analytics catalog U-SQL table statistics item.
  * colNames `array`: the list of column names associated with these statistics.
    * items `string`
  * createTime `string`: the creation time of the statistics.
  * databaseName `string`: the name of the database.
  * filterDefinition `string`: the filter definition for the statistics.
  * hasFilter `boolean`: the switch indicating if these statistics have a filter.
  * isAutoCreated `boolean`: the switch indicating if these statistics are automatically created.
  * isUserCreated `boolean`: the switch indicating if these statistics are user created.
  * schemaName `string`: the name of the schema associated with this table and database.
  * statDataPath `string`: the path to the statistics data.
  * statisticsName `string`: the name of the table statistics.
  * tableName `string`: the name of the table.
  * updateTime `string`: the last time the statistics were updated.
  * userStatName `string`: the name of the user statistics.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlTableStatisticsList
* USqlTableStatisticsList `object`: A Data Lake Analytics catalog U-SQL table statistics item list.
  * value `array`: the list of table statistics in the database, schema and table combination
    * items [USqlTableStatistics](#usqltablestatistics)
  * nextLink `string`: the link to the next page of results.

### USqlTableType
* USqlTableType `object`: A Data Lake Analytics catalog U-SQL table type item.
  * columns `array`: the type field information associated with this table type.
    * items [TypeFieldInfo](#typefieldinfo)
  * cSharpName `string`: the C# name for this type.
  * databaseName `string`: the name of the database.
  * fullCSharpName `string`: the fully qualified C# name for this type.
  * isAssemblyType `boolean`: the the switch indicating if this type is an assembly type.
  * isComplexType `boolean`: the the switch indicating if this type is a complex type.
  * isNullable `boolean`: the the switch indicating if this type is nullable.
  * isTableType `boolean`: the the switch indicating if this type is a table type.
  * isUserDefined `boolean`: the the switch indicating if this type is user defined.
  * principalId `integer`: the principal ID for this type.
  * schemaId `integer`: the schema ID for this type.
  * schemaName `string`: the name of the schema associated with this table and database.
  * systemTypeId `integer`: the system type ID for this type.
  * typeFamily `string`: the type family for this type.
  * typeName `string`: the name of type for this type.
  * userTypeId `integer`: the user type ID for this type.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlTableTypeList
* USqlTableTypeList `object`: A Data Lake Analytics catalog U-SQL table type item list.
  * value `array`: the list of table types in the database and schema combination
    * items [USqlTableType](#usqltabletype)
  * nextLink `string`: the link to the next page of results.

### USqlTableValuedFunction
* USqlTableValuedFunction `object`: A Data Lake Analytics catalog U-SQL table valued function item.
  * databaseName `string`: the name of the database.
  * definition `string`: the definition of the table valued function.
  * schemaName `string`: the name of the schema associated with this database.
  * tvfName `string`: the name of the table valued function.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlTableValuedFunctionList
* USqlTableValuedFunctionList `object`: A Data Lake Analytics catalog U-SQL table valued function item list.
  * value `array`: the list of table valued functions in the database and schema combination
    * items [USqlTableValuedFunction](#usqltablevaluedfunction)
  * nextLink `string`: the link to the next page of results.

### USqlType
* USqlType `object`: A Data Lake Analytics catalog U-SQL type item.
  * cSharpName `string`: the C# name for this type.
  * databaseName `string`: the name of the database.
  * fullCSharpName `string`: the fully qualified C# name for this type.
  * isAssemblyType `boolean`: the the switch indicating if this type is an assembly type.
  * isComplexType `boolean`: the the switch indicating if this type is a complex type.
  * isNullable `boolean`: the the switch indicating if this type is nullable.
  * isTableType `boolean`: the the switch indicating if this type is a table type.
  * isUserDefined `boolean`: the the switch indicating if this type is user defined.
  * principalId `integer`: the principal ID for this type.
  * schemaId `integer`: the schema ID for this type.
  * schemaName `string`: the name of the schema associated with this table and database.
  * systemTypeId `integer`: the system type ID for this type.
  * typeFamily `string`: the type family for this type.
  * typeName `string`: the name of type for this type.
  * userTypeId `integer`: the user type ID for this type.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlTypeList
* USqlTypeList `object`: A Data Lake Analytics catalog U-SQL type item list.
  * value `array`: the list of types in the database and schema combination
    * items [USqlType](#usqltype)
  * nextLink `string`: the link to the next page of results.

### USqlView
* USqlView `object`: A Data Lake Analytics catalog U-SQL view item.
  * databaseName `string`: the name of the database.
  * definition `string`: the defined query of the view.
  * schemaName `string`: the name of the schema associated with this view and database.
  * viewName `string`: the name of the view.
  * computeAccountName `string`: the name of the Data Lake Analytics account.
  * version `string`: the version of the catalog item.

### USqlViewList
* USqlViewList `object`: A Data Lake Analytics catalog U-SQL view item list.
  * value `array`: the list of view in the database and schema combination
    * items [USqlView](#usqlview)
  * nextLink `string`: the link to the next page of results.


