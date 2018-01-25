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

amazonaws_athena.BatchGetNamedQuery({
  "NamedQueryIds": []
}).then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically—executing queries in parallel—so results are fast, even with large datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User Guide</i>.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

## Actions

### BatchGetNamedQuery



```js
amazonaws_athena.BatchGetNamedQuery({
  "NamedQueryIds": []
}, context)
```

#### Input
* input `object`
  * NamedQueryIds **required** [NamedQueryIdList](#namedqueryidlist)

#### Output
* output [BatchGetNamedQueryOutput](#batchgetnamedqueryoutput)

### BatchGetQueryExecution



```js
amazonaws_athena.BatchGetQueryExecution({
  "QueryExecutionIds": []
}, context)
```

#### Input
* input `object`
  * QueryExecutionIds **required** [QueryExecutionIdList](#queryexecutionidlist)

#### Output
* output [BatchGetQueryExecutionOutput](#batchgetqueryexecutionoutput)

### CreateNamedQuery



```js
amazonaws_athena.CreateNamedQuery({
  "Name": "",
  "Database": "",
  "QueryString": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [IdempotencyToken](#idempotencytoken)
  * Database **required** [DatabaseString](#databasestring)
  * Description [DescriptionString](#descriptionstring)
  * Name **required** [NameString](#namestring)
  * QueryString **required** [QueryString](#querystring)

#### Output
* output [CreateNamedQueryOutput](#createnamedqueryoutput)

### DeleteNamedQuery



```js
amazonaws_athena.DeleteNamedQuery({
  "NamedQueryId": ""
}, context)
```

#### Input
* input `object`
  * NamedQueryId **required** [NamedQueryId](#namedqueryid)

#### Output
* output [DeleteNamedQueryOutput](#deletenamedqueryoutput)

### GetNamedQuery



```js
amazonaws_athena.GetNamedQuery({
  "NamedQueryId": ""
}, context)
```

#### Input
* input `object`
  * NamedQueryId **required** [NamedQueryId](#namedqueryid)

#### Output
* output [GetNamedQueryOutput](#getnamedqueryoutput)

### GetQueryExecution



```js
amazonaws_athena.GetQueryExecution({
  "QueryExecutionId": ""
}, context)
```

#### Input
* input `object`
  * QueryExecutionId **required** [QueryExecutionId](#queryexecutionid)

#### Output
* output [GetQueryExecutionOutput](#getqueryexecutionoutput)

### GetQueryResults



```js
amazonaws_athena.GetQueryResults({
  "QueryExecutionId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxQueryResults](#maxqueryresults)
  * NextToken [Token](#token)
  * QueryExecutionId **required** [QueryExecutionId](#queryexecutionid)

#### Output
* output [GetQueryResultsOutput](#getqueryresultsoutput)

### ListNamedQueries



```js
amazonaws_athena.ListNamedQueries({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxNamedQueriesCount](#maxnamedqueriescount)
  * NextToken [Token](#token)

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
  * MaxResults [MaxQueryExecutionsCount](#maxqueryexecutionscount)
  * NextToken [Token](#token)

#### Output
* output [ListQueryExecutionsOutput](#listqueryexecutionsoutput)

### StartQueryExecution



```js
amazonaws_athena.StartQueryExecution({
  "QueryString": "",
  "ResultConfiguration": {
    "OutputLocation": ""
  }
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [IdempotencyToken](#idempotencytoken)
  * QueryExecutionContext [QueryExecutionContext](#queryexecutioncontext)
  * QueryString **required** [QueryString](#querystring)
  * ResultConfiguration **required** [ResultConfiguration](#resultconfiguration)

#### Output
* output [StartQueryExecutionOutput](#startqueryexecutionoutput)

### StopQueryExecution



```js
amazonaws_athena.StopQueryExecution({
  "QueryExecutionId": ""
}, context)
```

#### Input
* input `object`
  * QueryExecutionId **required** [QueryExecutionId](#queryexecutionid)

#### Output
* output [StopQueryExecutionOutput](#stopqueryexecutionoutput)



## Definitions

### BatchGetNamedQueryInput
* BatchGetNamedQueryInput `object`
  * NamedQueryIds **required** [NamedQueryIdList](#namedqueryidlist)

### BatchGetNamedQueryOutput
* BatchGetNamedQueryOutput `object`
  * NamedQueries [NamedQueryList](#namedquerylist)
  * UnprocessedNamedQueryIds [UnprocessedNamedQueryIdList](#unprocessednamedqueryidlist)

### BatchGetQueryExecutionInput
* BatchGetQueryExecutionInput `object`
  * QueryExecutionIds **required** [QueryExecutionIdList](#queryexecutionidlist)

### BatchGetQueryExecutionOutput
* BatchGetQueryExecutionOutput `object`
  * QueryExecutions [QueryExecutionList](#queryexecutionlist)
  * UnprocessedQueryExecutionIds [UnprocessedQueryExecutionIdList](#unprocessedqueryexecutionidlist)

### Boolean
* Boolean `boolean`

### ColumnInfo
* ColumnInfo `object`: Information about the columns in a query execution result.
  * CaseSensitive [Boolean](#boolean)
  * CatalogName [String](#string)
  * Label [String](#string)
  * Name **required** [String](#string)
  * Nullable [ColumnNullable](#columnnullable)
  * Precision [Integer](#integer)
  * Scale [Integer](#integer)
  * SchemaName [String](#string)
  * TableName [String](#string)
  * Type **required** [String](#string)

### ColumnInfoList
* ColumnInfoList `array`
  * items [ColumnInfo](#columninfo)

### ColumnNullable
* ColumnNullable `string` (values: NOT_NULL, NULLABLE, UNKNOWN)

### CreateNamedQueryInput
* CreateNamedQueryInput `object`
  * ClientRequestToken [IdempotencyToken](#idempotencytoken)
  * Database **required** [DatabaseString](#databasestring)
  * Description [DescriptionString](#descriptionstring)
  * Name **required** [NameString](#namestring)
  * QueryString **required** [QueryString](#querystring)

### CreateNamedQueryOutput
* CreateNamedQueryOutput `object`
  * NamedQueryId [NamedQueryId](#namedqueryid)

### DatabaseString
* DatabaseString `string`

### Date
* Date `string`

### Datum
* Datum `object`: A piece of data (a field in the table).
  * VarCharValue [datumString](#datumstring)

### DeleteNamedQueryInput
* DeleteNamedQueryInput `object`
  * NamedQueryId **required** [NamedQueryId](#namedqueryid)

### DeleteNamedQueryOutput
* DeleteNamedQueryOutput `object`

### DescriptionString
* DescriptionString `string`

### EncryptionConfiguration
* EncryptionConfiguration `object`: If query results are encrypted in Amazon S3, indicates the Amazon S3 encryption option used.
  * EncryptionOption **required** [EncryptionOption](#encryptionoption)
  * KmsKey [String](#string)

### EncryptionOption
* EncryptionOption `string` (values: SSE_S3, SSE_KMS, CSE_KMS)

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### GetNamedQueryInput
* GetNamedQueryInput `object`
  * NamedQueryId **required** [NamedQueryId](#namedqueryid)

### GetNamedQueryOutput
* GetNamedQueryOutput `object`
  * NamedQuery [NamedQuery](#namedquery)

### GetQueryExecutionInput
* GetQueryExecutionInput `object`
  * QueryExecutionId **required** [QueryExecutionId](#queryexecutionid)

### GetQueryExecutionOutput
* GetQueryExecutionOutput `object`
  * QueryExecution [QueryExecution](#queryexecution)

### GetQueryResultsInput
* GetQueryResultsInput `object`
  * MaxResults [MaxQueryResults](#maxqueryresults)
  * NextToken [Token](#token)
  * QueryExecutionId **required** [QueryExecutionId](#queryexecutionid)

### GetQueryResultsOutput
* GetQueryResultsOutput `object`
  * NextToken [Token](#token)
  * ResultSet [ResultSet](#resultset)

### IdempotencyToken
* IdempotencyToken `string`

### Integer
* Integer `integer`

### InternalServerException
* InternalServerException `object`: Indicates a platform issue, which may be due to a transient condition or outage.
  * Message [ErrorMessage](#errormessage)

### InvalidRequestException
* InvalidRequestException `object`: Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.
  * AthenaErrorCode [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### ListNamedQueriesInput
* ListNamedQueriesInput `object`
  * MaxResults [MaxNamedQueriesCount](#maxnamedqueriescount)
  * NextToken [Token](#token)

### ListNamedQueriesOutput
* ListNamedQueriesOutput `object`
  * NamedQueryIds [NamedQueryIdList](#namedqueryidlist)
  * NextToken [Token](#token)

### ListQueryExecutionsInput
* ListQueryExecutionsInput `object`
  * MaxResults [MaxQueryExecutionsCount](#maxqueryexecutionscount)
  * NextToken [Token](#token)

### ListQueryExecutionsOutput
* ListQueryExecutionsOutput `object`
  * NextToken [Token](#token)
  * QueryExecutionIds [QueryExecutionIdList](#queryexecutionidlist)

### Long
* Long `integer`

### MaxNamedQueriesCount
* MaxNamedQueriesCount `integer`

### MaxQueryExecutionsCount
* MaxQueryExecutionsCount `integer`

### MaxQueryResults
* MaxQueryResults `integer`

### NameString
* NameString `string`

### NamedQuery
* NamedQuery `object`: A query, where <code>QueryString</code> is the SQL query statements that comprise the query.
  * Database **required** [DatabaseString](#databasestring)
  * Description [DescriptionString](#descriptionstring)
  * Name **required** [NameString](#namestring)
  * NamedQueryId [NamedQueryId](#namedqueryid)
  * QueryString **required** [QueryString](#querystring)

### NamedQueryId
* NamedQueryId `string`

### NamedQueryIdList
* NamedQueryIdList `array`
  * items [NamedQueryId](#namedqueryid)

### NamedQueryList
* NamedQueryList `array`
  * items [NamedQuery](#namedquery)

### QueryExecution
* QueryExecution `object`: Information about a single instance of a query execution.
  * Query [QueryString](#querystring)
  * QueryExecutionContext [QueryExecutionContext](#queryexecutioncontext)
  * QueryExecutionId [QueryExecutionId](#queryexecutionid)
  * ResultConfiguration [ResultConfiguration](#resultconfiguration)
  * Statistics [QueryExecutionStatistics](#queryexecutionstatistics)
  * Status [QueryExecutionStatus](#queryexecutionstatus)

### QueryExecutionContext
* QueryExecutionContext `object`: The database in which the query execution occurs.
  * Database [DatabaseString](#databasestring)

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
* QueryExecutionStatistics `object`: The amount of data scanned during the query execution and the amount of time that it took to execute.
  * DataScannedInBytes [Long](#long)
  * EngineExecutionTimeInMillis [Long](#long)

### QueryExecutionStatus
* QueryExecutionStatus `object`: The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
  * CompletionDateTime [Date](#date)
  * State [QueryExecutionState](#queryexecutionstate)
  * StateChangeReason [String](#string)
  * SubmissionDateTime [Date](#date)

### QueryString
* QueryString `string`

### ResultConfiguration
* ResultConfiguration `object`: The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results.
  * EncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * OutputLocation **required** [String](#string)

### ResultSet
* ResultSet `object`: The metadata and rows that comprise a query result set. The metadata describes the column structure and data types.
  * ResultSetMetadata [ResultSetMetadata](#resultsetmetadata)
  * Rows [RowList](#rowlist)

### ResultSetMetadata
* ResultSetMetadata `object`: The metadata that describes the column structure and data types of a table of query results.
  * ColumnInfo [ColumnInfoList](#columninfolist)

### Row
* Row `object`: The rows that comprise a query result table.
  * Data [datumList](#datumlist)

### RowList
* RowList `array`
  * items [Row](#row)

### StartQueryExecutionInput
* StartQueryExecutionInput `object`
  * ClientRequestToken [IdempotencyToken](#idempotencytoken)
  * QueryExecutionContext [QueryExecutionContext](#queryexecutioncontext)
  * QueryString **required** [QueryString](#querystring)
  * ResultConfiguration **required** [ResultConfiguration](#resultconfiguration)

### StartQueryExecutionOutput
* StartQueryExecutionOutput `object`
  * QueryExecutionId [QueryExecutionId](#queryexecutionid)

### StopQueryExecutionInput
* StopQueryExecutionInput `object`
  * QueryExecutionId **required** [QueryExecutionId](#queryexecutionid)

### StopQueryExecutionOutput
* StopQueryExecutionOutput `object`

### String
* String `string`

### ThrottleReason
* ThrottleReason `string` (values: CONCURRENT_QUERY_LIMIT_EXCEEDED)

### Token
* Token `string`

### TooManyRequestsException
* TooManyRequestsException `object`: Indicates that the request was throttled.
  * Message [ErrorMessage](#errormessage)
  * Reason [ThrottleReason](#throttlereason)

### UnprocessedNamedQueryId
* UnprocessedNamedQueryId `object`: Information about a named query ID that could not be processed.
  * ErrorCode [ErrorCode](#errorcode)
  * ErrorMessage [ErrorMessage](#errormessage)
  * NamedQueryId [NamedQueryId](#namedqueryid)

### UnprocessedNamedQueryIdList
* UnprocessedNamedQueryIdList `array`
  * items [UnprocessedNamedQueryId](#unprocessednamedqueryid)

### UnprocessedQueryExecutionId
* UnprocessedQueryExecutionId `object`: Describes a query execution that failed to process.
  * ErrorCode [ErrorCode](#errorcode)
  * ErrorMessage [ErrorMessage](#errormessage)
  * QueryExecutionId [QueryExecutionId](#queryexecutionid)

### UnprocessedQueryExecutionIdList
* UnprocessedQueryExecutionIdList `array`
  * items [UnprocessedQueryExecutionId](#unprocessedqueryexecutionid)

### datumList
* datumList `array`
  * items [Datum](#datum)

### datumString
* datumString `string`


