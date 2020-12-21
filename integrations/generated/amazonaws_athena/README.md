# @datafire/amazonaws_athena

Client library for Amazon Athena

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_athena
```
```js
let amazonaws_athena = require('@datafire/amazonaws_athena').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically—executing queries in parallel—so results are fast, even with large datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User Guide</i>.</p> <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or later with the Amazon Athena API. Earlier version drivers do not support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing Amazon Athena with JDBC</a>.</p> <p>For code samples using the AWS SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

## Actions

### BatchGetNamedQuery



```js
amazonaws_athena.BatchGetNamedQuery({
  "NamedQueryIds": null
}, context)
```

#### Input
* input `object`
  * NamedQueryIds **required**
    * items [NamedQueryId](#namedqueryid)

#### Output
* output [BatchGetNamedQueryOutput](#batchgetnamedqueryoutput)

### BatchGetQueryExecution



```js
amazonaws_athena.BatchGetQueryExecution({
  "QueryExecutionIds": null
}, context)
```

#### Input
* input `object`
  * QueryExecutionIds **required**
    * items [QueryExecutionId](#queryexecutionid)

#### Output
* output [BatchGetQueryExecutionOutput](#batchgetqueryexecutionoutput)

### CreateDataCatalog



```js
amazonaws_athena.CreateDataCatalog({
  "Name": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * Description
  * Name **required**
  * Parameters
  * Tags
    * items [Tag](#tag)
  * Type **required**

#### Output
* output [CreateDataCatalogOutput](#createdatacatalogoutput)

### CreateNamedQuery



```js
amazonaws_athena.CreateNamedQuery({
  "Name": null,
  "Database": null,
  "QueryString": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * Database **required**
  * Description
  * Name **required**
  * QueryString **required**
  * WorkGroup

#### Output
* output [CreateNamedQueryOutput](#createnamedqueryoutput)

### CreateWorkGroup



```js
amazonaws_athena.CreateWorkGroup({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Configuration
    * BytesScannedCutoffPerQuery
    * EnforceWorkGroupConfiguration
    * PublishCloudWatchMetricsEnabled
    * RequesterPaysEnabled
    * ResultConfiguration
      * EncryptionConfiguration
        * EncryptionOption **required**
        * KmsKey
      * OutputLocation
  * Description
  * Name **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateWorkGroupOutput](#createworkgroupoutput)

### DeleteDataCatalog



```js
amazonaws_athena.DeleteDataCatalog({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteDataCatalogOutput](#deletedatacatalogoutput)

### DeleteNamedQuery



```js
amazonaws_athena.DeleteNamedQuery({
  "NamedQueryId": null
}, context)
```

#### Input
* input `object`
  * NamedQueryId **required**

#### Output
* output [DeleteNamedQueryOutput](#deletenamedqueryoutput)

### DeleteWorkGroup



```js
amazonaws_athena.DeleteWorkGroup({
  "WorkGroup": null
}, context)
```

#### Input
* input `object`
  * RecursiveDeleteOption
  * WorkGroup **required**

#### Output
* output [DeleteWorkGroupOutput](#deleteworkgroupoutput)

### GetDataCatalog



```js
amazonaws_athena.GetDataCatalog({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [GetDataCatalogOutput](#getdatacatalogoutput)

### GetDatabase



```js
amazonaws_athena.GetDatabase({
  "CatalogName": null,
  "DatabaseName": null
}, context)
```

#### Input
* input `object`
  * CatalogName **required**
  * DatabaseName **required**

#### Output
* output [GetDatabaseOutput](#getdatabaseoutput)

### GetNamedQuery



```js
amazonaws_athena.GetNamedQuery({
  "NamedQueryId": null
}, context)
```

#### Input
* input `object`
  * NamedQueryId **required**

#### Output
* output [GetNamedQueryOutput](#getnamedqueryoutput)

### GetQueryExecution



```js
amazonaws_athena.GetQueryExecution({
  "QueryExecutionId": null
}, context)
```

#### Input
* input `object`
  * QueryExecutionId **required**

#### Output
* output [GetQueryExecutionOutput](#getqueryexecutionoutput)

### GetQueryResults



```js
amazonaws_athena.GetQueryResults({
  "QueryExecutionId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * QueryExecutionId **required**

#### Output
* output [GetQueryResultsOutput](#getqueryresultsoutput)

### GetTableMetadata



```js
amazonaws_athena.GetTableMetadata({
  "CatalogName": null,
  "DatabaseName": null,
  "TableName": null
}, context)
```

#### Input
* input `object`
  * CatalogName **required**
  * DatabaseName **required**
  * TableName **required**

#### Output
* output [GetTableMetadataOutput](#gettablemetadataoutput)

### GetWorkGroup



```js
amazonaws_athena.GetWorkGroup({
  "WorkGroup": null
}, context)
```

#### Input
* input `object`
  * WorkGroup **required**

#### Output
* output [GetWorkGroupOutput](#getworkgroupoutput)

### ListDataCatalogs



```js
amazonaws_athena.ListDataCatalogs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListDataCatalogsOutput](#listdatacatalogsoutput)

### ListDatabases



```js
amazonaws_athena.ListDatabases({
  "CatalogName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogName **required**
  * MaxResults
  * NextToken

#### Output
* output [ListDatabasesOutput](#listdatabasesoutput)

### ListNamedQueries



```js
amazonaws_athena.ListNamedQueries({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * WorkGroup

#### Output
* output [ListNamedQueriesOutput](#listnamedqueriesoutput)

### ListQueryExecutions



```js
amazonaws_athena.ListQueryExecutions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * WorkGroup

#### Output
* output [ListQueryExecutionsOutput](#listqueryexecutionsoutput)

### ListTableMetadata



```js
amazonaws_athena.ListTableMetadata({
  "CatalogName": null,
  "DatabaseName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CatalogName **required**
  * DatabaseName **required**
  * Expression
  * MaxResults
  * NextToken

#### Output
* output [ListTableMetadataOutput](#listtablemetadataoutput)

### ListTagsForResource



```js
amazonaws_athena.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### ListWorkGroups



```js
amazonaws_athena.ListWorkGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListWorkGroupsOutput](#listworkgroupsoutput)

### StartQueryExecution



```js
amazonaws_athena.StartQueryExecution({
  "QueryString": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * QueryExecutionContext
    * Catalog
    * Database
  * QueryString **required**
  * ResultConfiguration
    * EncryptionConfiguration
      * EncryptionOption **required**
      * KmsKey
    * OutputLocation
  * WorkGroup

#### Output
* output [StartQueryExecutionOutput](#startqueryexecutionoutput)

### StopQueryExecution



```js
amazonaws_athena.StopQueryExecution({
  "QueryExecutionId": null
}, context)
```

#### Input
* input `object`
  * QueryExecutionId **required**

#### Output
* output [StopQueryExecutionOutput](#stopqueryexecutionoutput)

### TagResource



```js
amazonaws_athena.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceOutput](#tagresourceoutput)

### UntagResource



```js
amazonaws_athena.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceOutput](#untagresourceoutput)

### UpdateDataCatalog



```js
amazonaws_athena.UpdateDataCatalog({
  "Name": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * Description
  * Name **required**
  * Parameters
  * Type **required**

#### Output
* output [UpdateDataCatalogOutput](#updatedatacatalogoutput)

### UpdateWorkGroup



```js
amazonaws_athena.UpdateWorkGroup({
  "WorkGroup": null
}, context)
```

#### Input
* input `object`
  * ConfigurationUpdates
    * BytesScannedCutoffPerQuery
    * EnforceWorkGroupConfiguration
    * PublishCloudWatchMetricsEnabled
    * RemoveBytesScannedCutoffPerQuery
    * RequesterPaysEnabled
    * ResultConfigurationUpdates
      * EncryptionConfiguration
        * EncryptionOption **required**
        * KmsKey
      * OutputLocation
      * RemoveEncryptionConfiguration
      * RemoveOutputLocation
  * Description
  * State
  * WorkGroup **required**

#### Output
* output [UpdateWorkGroupOutput](#updateworkgroupoutput)



## Definitions

### AmazonResourceName
* AmazonResourceName `string`

### BatchGetNamedQueryInput
* BatchGetNamedQueryInput `object`
  * NamedQueryIds **required**
    * items [NamedQueryId](#namedqueryid)

### BatchGetNamedQueryOutput
* BatchGetNamedQueryOutput `object`
  * NamedQueries
    * items [NamedQuery](#namedquery)
  * UnprocessedNamedQueryIds
    * items [UnprocessedNamedQueryId](#unprocessednamedqueryid)

### BatchGetQueryExecutionInput
* BatchGetQueryExecutionInput `object`
  * QueryExecutionIds **required**
    * items [QueryExecutionId](#queryexecutionid)

### BatchGetQueryExecutionOutput
* BatchGetQueryExecutionOutput `object`
  * QueryExecutions
    * items [QueryExecution](#queryexecution)
  * UnprocessedQueryExecutionIds
    * items [UnprocessedQueryExecutionId](#unprocessedqueryexecutionid)

### Boolean
* Boolean `boolean`

### BoxedBoolean
* BoxedBoolean `boolean`

### BytesScannedCutoffValue
* BytesScannedCutoffValue `integer`

### CatalogNameString
* CatalogNameString `string`

### Column
* Column `object`: Contains metadata for a column in a table.
  * Comment
  * Name **required**
  * Type

### ColumnInfo
* ColumnInfo `object`: Information about the columns in a query execution result.
  * CaseSensitive
  * CatalogName
  * Label
  * Name **required**
  * Nullable
  * Precision
  * Scale
  * SchemaName
  * TableName
  * Type **required**

### ColumnInfoList
* ColumnInfoList `array`
  * items [ColumnInfo](#columninfo)

### ColumnList
* ColumnList `array`
  * items [Column](#column)

### ColumnNullable
* ColumnNullable `string` (values: NOT_NULL, NULLABLE, UNKNOWN)

### CommentString
* CommentString `string`

### CreateDataCatalogInput
* CreateDataCatalogInput `object`
  * Description
  * Name **required**
  * Parameters
  * Tags
    * items [Tag](#tag)
  * Type **required**

### CreateDataCatalogOutput
* CreateDataCatalogOutput `object`

### CreateNamedQueryInput
* CreateNamedQueryInput `object`
  * ClientRequestToken
  * Database **required**
  * Description
  * Name **required**
  * QueryString **required**
  * WorkGroup

### CreateNamedQueryOutput
* CreateNamedQueryOutput `object`
  * NamedQueryId

### CreateWorkGroupInput
* CreateWorkGroupInput `object`
  * Configuration
    * BytesScannedCutoffPerQuery
    * EnforceWorkGroupConfiguration
    * PublishCloudWatchMetricsEnabled
    * RequesterPaysEnabled
    * ResultConfiguration
      * EncryptionConfiguration
        * EncryptionOption **required**
        * KmsKey
      * OutputLocation
  * Description
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreateWorkGroupOutput
* CreateWorkGroupOutput `object`

### DataCatalog
* DataCatalog `object`: Contains information about a data catalog in an AWS account.
  * Description
  * Name **required**
  * Parameters
  * Type **required**

### DataCatalogSummary
* DataCatalogSummary `object`: The summary information for the data catalog, which includes its name and type.
  * CatalogName
  * Type

### DataCatalogSummaryList
* DataCatalogSummaryList `array`
  * items [DataCatalogSummary](#datacatalogsummary)

### DataCatalogType
* DataCatalogType `string` (values: LAMBDA, GLUE, HIVE)

### Database
* Database `object`: Contains metadata information for a database in a data catalog.
  * Description
  * Name **required**
  * Parameters

### DatabaseList
* DatabaseList `array`
  * items [Database](#database)

### DatabaseString
* DatabaseString `string`

### Date
* Date `string`

### Datum
* Datum `object`: A piece of data (a field in the table).
  * VarCharValue

### DeleteDataCatalogInput
* DeleteDataCatalogInput `object`
  * Name **required**

### DeleteDataCatalogOutput
* DeleteDataCatalogOutput `object`

### DeleteNamedQueryInput
* DeleteNamedQueryInput `object`
  * NamedQueryId **required**

### DeleteNamedQueryOutput
* DeleteNamedQueryOutput `object`

### DeleteWorkGroupInput
* DeleteWorkGroupInput `object`
  * RecursiveDeleteOption
  * WorkGroup **required**

### DeleteWorkGroupOutput
* DeleteWorkGroupOutput `object`

### DescriptionString
* DescriptionString `string`

### EncryptionConfiguration
* EncryptionConfiguration `object`: If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information.
  * EncryptionOption **required**
  * KmsKey

### EncryptionOption
* EncryptionOption `string` (values: SSE_S3, SSE_KMS, CSE_KMS)

### ErrorCode
* ErrorCode `string`: The error code returned when the query execution failed to process, or when the processing request for the named query failed.

### ErrorMessage
* ErrorMessage `string`

### ExpressionString
* ExpressionString `string`

### GetDataCatalogInput
* GetDataCatalogInput `object`
  * Name **required**

### GetDataCatalogOutput
* GetDataCatalogOutput `object`
  * DataCatalog
    * Description
    * Name **required**
    * Parameters
    * Type **required**

### GetDatabaseInput
* GetDatabaseInput `object`
  * CatalogName **required**
  * DatabaseName **required**

### GetDatabaseOutput
* GetDatabaseOutput `object`
  * Database
    * Description
    * Name **required**
    * Parameters

### GetNamedQueryInput
* GetNamedQueryInput `object`
  * NamedQueryId **required**

### GetNamedQueryOutput
* GetNamedQueryOutput `object`
  * NamedQuery
    * Database **required**
    * Description
    * Name **required**
    * NamedQueryId
    * QueryString **required**
    * WorkGroup

### GetQueryExecutionInput
* GetQueryExecutionInput `object`
  * QueryExecutionId **required**

### GetQueryExecutionOutput
* GetQueryExecutionOutput `object`
  * QueryExecution
    * Query
    * QueryExecutionContext
      * Catalog
      * Database
    * QueryExecutionId
    * ResultConfiguration
      * EncryptionConfiguration
        * EncryptionOption **required**
        * KmsKey
      * OutputLocation
    * StatementType
    * Statistics
      * DataManifestLocation
      * DataScannedInBytes
      * EngineExecutionTimeInMillis
      * QueryPlanningTimeInMillis
      * QueryQueueTimeInMillis
      * ServiceProcessingTimeInMillis
      * TotalExecutionTimeInMillis
    * Status
      * CompletionDateTime
      * State
      * StateChangeReason
      * SubmissionDateTime
    * WorkGroup

### GetQueryResultsInput
* GetQueryResultsInput `object`
  * MaxResults
  * NextToken
  * QueryExecutionId **required**

### GetQueryResultsOutput
* GetQueryResultsOutput `object`
  * NextToken
  * ResultSet
    * ResultSetMetadata
      * ColumnInfo
        * items [ColumnInfo](#columninfo)
    * Rows
      * items [Row](#row)
  * UpdateCount

### GetTableMetadataInput
* GetTableMetadataInput `object`
  * CatalogName **required**
  * DatabaseName **required**
  * TableName **required**

### GetTableMetadataOutput
* GetTableMetadataOutput `object`
  * TableMetadata
    * Columns
      * items [Column](#column)
    * CreateTime
    * LastAccessTime
    * Name **required**
    * Parameters
    * PartitionKeys
      * items [Column](#column)
    * TableType

### GetWorkGroupInput
* GetWorkGroupInput `object`
  * WorkGroup **required**

### GetWorkGroupOutput
* GetWorkGroupOutput `object`
  * WorkGroup
    * Configuration
      * BytesScannedCutoffPerQuery
      * EnforceWorkGroupConfiguration
      * PublishCloudWatchMetricsEnabled
      * RequesterPaysEnabled
      * ResultConfiguration
        * EncryptionConfiguration
          * EncryptionOption **required**
          * KmsKey
        * OutputLocation
    * CreationTime
    * Description
    * Name **required**
    * State

### IdempotencyToken
* IdempotencyToken `string`

### Integer
* Integer `integer`

### InternalServerException


### InvalidRequestException


### KeyString
* KeyString `string`

### ListDataCatalogsInput
* ListDataCatalogsInput `object`
  * MaxResults
  * NextToken

### ListDataCatalogsOutput
* ListDataCatalogsOutput `object`
  * DataCatalogsSummary
    * items [DataCatalogSummary](#datacatalogsummary)
  * NextToken

### ListDatabasesInput
* ListDatabasesInput `object`
  * CatalogName **required**
  * MaxResults
  * NextToken

### ListDatabasesOutput
* ListDatabasesOutput `object`
  * DatabaseList
    * items [Database](#database)
  * NextToken

### ListNamedQueriesInput
* ListNamedQueriesInput `object`
  * MaxResults
  * NextToken
  * WorkGroup

### ListNamedQueriesOutput
* ListNamedQueriesOutput `object`
  * NamedQueryIds
    * items [NamedQueryId](#namedqueryid)
  * NextToken

### ListQueryExecutionsInput
* ListQueryExecutionsInput `object`
  * MaxResults
  * NextToken
  * WorkGroup

### ListQueryExecutionsOutput
* ListQueryExecutionsOutput `object`
  * NextToken
  * QueryExecutionIds
    * items [QueryExecutionId](#queryexecutionid)

### ListTableMetadataInput
* ListTableMetadataInput `object`
  * CatalogName **required**
  * DatabaseName **required**
  * Expression
  * MaxResults
  * NextToken

### ListTableMetadataOutput
* ListTableMetadataOutput `object`
  * NextToken
  * TableMetadataList
    * items [TableMetadata](#tablemetadata)

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * MaxResults
  * NextToken
  * ResourceARN **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### ListWorkGroupsInput
* ListWorkGroupsInput `object`
  * MaxResults
  * NextToken

### ListWorkGroupsOutput
* ListWorkGroupsOutput `object`
  * NextToken
  * WorkGroups
    * items [WorkGroupSummary](#workgroupsummary)

### Long
* Long `integer`

### MaxDataCatalogsCount
* MaxDataCatalogsCount `integer`

### MaxDatabasesCount
* MaxDatabasesCount `integer`

### MaxNamedQueriesCount
* MaxNamedQueriesCount `integer`

### MaxQueryExecutionsCount
* MaxQueryExecutionsCount `integer`

### MaxQueryResults
* MaxQueryResults `integer`

### MaxTableMetadataCount
* MaxTableMetadataCount `integer`

### MaxTagsCount
* MaxTagsCount `integer`

### MaxWorkGroupsCount
* MaxWorkGroupsCount `integer`

### MetadataException


### NameString
* NameString `string`

### NamedQuery
* NamedQuery `object`: A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query.
  * Database **required**
  * Description
  * Name **required**
  * NamedQueryId
  * QueryString **required**
  * WorkGroup

### NamedQueryId
* NamedQueryId `string`

### NamedQueryIdList
* NamedQueryIdList `array`
  * items [NamedQueryId](#namedqueryid)

### NamedQueryList
* NamedQueryList `array`
  * items [NamedQuery](#namedquery)

### ParametersMap
* ParametersMap `object`

### ParametersMapValue
* ParametersMapValue `string`

### QueryExecution
* QueryExecution `object`: Information about a single instance of a query execution.
  * Query
  * QueryExecutionContext
    * Catalog
    * Database
  * QueryExecutionId
  * ResultConfiguration
    * EncryptionConfiguration
      * EncryptionOption **required**
      * KmsKey
    * OutputLocation
  * StatementType
  * Statistics
    * DataManifestLocation
    * DataScannedInBytes
    * EngineExecutionTimeInMillis
    * QueryPlanningTimeInMillis
    * QueryQueueTimeInMillis
    * ServiceProcessingTimeInMillis
    * TotalExecutionTimeInMillis
  * Status
    * CompletionDateTime
    * State
    * StateChangeReason
    * SubmissionDateTime
  * WorkGroup

### QueryExecutionContext
* QueryExecutionContext `object`: The database and data catalog context in which the query execution occurs.
  * Catalog
  * Database

### QueryExecutionId
* QueryExecutionId `string`

### QueryExecutionIdList
* QueryExecutionIdList `array`
  * items [QueryExecutionId](#queryexecutionid)

### QueryExecutionList
* QueryExecutionList `array`
  * items [QueryExecution](#queryexecution)

### QueryExecutionState
* QueryExecutionState `string` (values: QUEUED, RUNNING, SUCCEEDED, FAILED, CANCELLED)

### QueryExecutionStatistics
* QueryExecutionStatistics `object`: The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.
  * DataManifestLocation
  * DataScannedInBytes
  * EngineExecutionTimeInMillis
  * QueryPlanningTimeInMillis
  * QueryQueueTimeInMillis
  * ServiceProcessingTimeInMillis
  * TotalExecutionTimeInMillis

### QueryExecutionStatus
* QueryExecutionStatus `object`: The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
  * CompletionDateTime
  * State
  * StateChangeReason
  * SubmissionDateTime

### QueryString
* QueryString `string`

### ResourceNotFoundException


### ResultConfiguration
* ResultConfiguration `object`: The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
  * EncryptionConfiguration
    * EncryptionOption **required**
    * KmsKey
  * OutputLocation

### ResultConfigurationUpdates
* ResultConfigurationUpdates `object`: The information about the updates in the query results, such as output location and encryption configuration for the query results.
  * EncryptionConfiguration
    * EncryptionOption **required**
    * KmsKey
  * OutputLocation
  * RemoveEncryptionConfiguration
  * RemoveOutputLocation

### ResultSet
* ResultSet `object`: The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.
  * ResultSetMetadata
    * ColumnInfo
      * items [ColumnInfo](#columninfo)
  * Rows
    * items [Row](#row)

### ResultSetMetadata
* ResultSetMetadata `object`: The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.
  * ColumnInfo
    * items [ColumnInfo](#columninfo)

### Row
* Row `object`: The rows that comprise a query result table.
  * Data
    * items [Datum](#datum)

### RowList
* RowList `array`
  * items [Row](#row)

### StartQueryExecutionInput
* StartQueryExecutionInput `object`
  * ClientRequestToken
  * QueryExecutionContext
    * Catalog
    * Database
  * QueryString **required**
  * ResultConfiguration
    * EncryptionConfiguration
      * EncryptionOption **required**
      * KmsKey
    * OutputLocation
  * WorkGroup

### StartQueryExecutionOutput
* StartQueryExecutionOutput `object`
  * QueryExecutionId

### StatementType
* StatementType `string` (values: DDL, DML, UTILITY)

### StopQueryExecutionInput
* StopQueryExecutionInput `object`
  * QueryExecutionId **required**

### StopQueryExecutionOutput
* StopQueryExecutionOutput `object`

### String
* String `string`

### TableMetadata
* TableMetadata `object`: Contains metadata for a table.
  * Columns
    * items [Column](#column)
  * CreateTime
  * LastAccessTime
  * Name **required**
  * Parameters
  * PartitionKeys
    * items [Column](#column)
  * TableType

### TableMetadataList
* TableMetadataList `array`
  * items [TableMetadata](#tablemetadata)

### TableTypeString
* TableTypeString `string`

### Tag
* Tag `object`: A label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas. 
  * Key
  * Value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceInput
* TagResourceInput `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceOutput
* TagResourceOutput `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### Token
* Token `string`

### TooManyRequestsException


### TypeString
* TypeString `string`

### UnprocessedNamedQueryId
* UnprocessedNamedQueryId `object`: Information about a named query ID that could not be processed.
  * ErrorCode
  * ErrorMessage
  * NamedQueryId

### UnprocessedNamedQueryIdList
* UnprocessedNamedQueryIdList `array`
  * items [UnprocessedNamedQueryId](#unprocessednamedqueryid)

### UnprocessedQueryExecutionId
* UnprocessedQueryExecutionId `object`: Describes a query execution that failed to process.
  * ErrorCode
  * ErrorMessage
  * QueryExecutionId

### UnprocessedQueryExecutionIdList
* UnprocessedQueryExecutionIdList `array`
  * items [UnprocessedQueryExecutionId](#unprocessedqueryexecutionid)

### UntagResourceInput
* UntagResourceInput `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceOutput
* UntagResourceOutput `object`

### UpdateDataCatalogInput
* UpdateDataCatalogInput `object`
  * Description
  * Name **required**
  * Parameters
  * Type **required**

### UpdateDataCatalogOutput
* UpdateDataCatalogOutput `object`

### UpdateWorkGroupInput
* UpdateWorkGroupInput `object`
  * ConfigurationUpdates
    * BytesScannedCutoffPerQuery
    * EnforceWorkGroupConfiguration
    * PublishCloudWatchMetricsEnabled
    * RemoveBytesScannedCutoffPerQuery
    * RequesterPaysEnabled
    * ResultConfigurationUpdates
      * EncryptionConfiguration
        * EncryptionOption **required**
        * KmsKey
      * OutputLocation
      * RemoveEncryptionConfiguration
      * RemoveOutputLocation
  * Description
  * State
  * WorkGroup **required**

### UpdateWorkGroupOutput
* UpdateWorkGroupOutput `object`

### WorkGroup
* WorkGroup `object`: A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.
  * Configuration
    * BytesScannedCutoffPerQuery
    * EnforceWorkGroupConfiguration
    * PublishCloudWatchMetricsEnabled
    * RequesterPaysEnabled
    * ResultConfiguration
      * EncryptionConfiguration
        * EncryptionOption **required**
        * KmsKey
      * OutputLocation
  * CreationTime
  * Description
  * Name **required**
  * State

### WorkGroupConfiguration
* WorkGroupConfiguration `object`: The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. 
  * BytesScannedCutoffPerQuery
  * EnforceWorkGroupConfiguration
  * PublishCloudWatchMetricsEnabled
  * RequesterPaysEnabled
  * ResultConfiguration
    * EncryptionConfiguration
      * EncryptionOption **required**
      * KmsKey
    * OutputLocation

### WorkGroupConfigurationUpdates
* WorkGroupConfigurationUpdates `object`: The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
  * BytesScannedCutoffPerQuery
  * EnforceWorkGroupConfiguration
  * PublishCloudWatchMetricsEnabled
  * RemoveBytesScannedCutoffPerQuery
  * RequesterPaysEnabled
  * ResultConfigurationUpdates
    * EncryptionConfiguration
      * EncryptionOption **required**
      * KmsKey
    * OutputLocation
    * RemoveEncryptionConfiguration
    * RemoveOutputLocation

### WorkGroupDescriptionString
* WorkGroupDescriptionString `string`

### WorkGroupName
* WorkGroupName `string`

### WorkGroupState
* WorkGroupState `string` (values: ENABLED, DISABLED)

### WorkGroupSummary
* WorkGroupSummary `object`: The summary information for the workgroup, which includes its name, state, description, and the date and time it was created.
  * CreationTime
  * Description
  * Name
  * State

### WorkGroupsList
* WorkGroupsList `array`
  * items [WorkGroupSummary](#workgroupsummary)

### datumList
* datumList `array`
  * items [Datum](#datum)

### datumString
* datumString `string`


