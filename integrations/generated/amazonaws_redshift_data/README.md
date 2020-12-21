# @datafire/amazonaws_redshift_data

Client library for Redshift Data API Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_redshift_data
```
```js
let amazonaws_redshift_data = require('@datafire/amazonaws_redshift_data').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

You can use the Amazon Redshift Data API to run queries on Amazon Redshift tables. You can run individual SQL statements, which are committed if the statement succeeds. 

## Actions

### CancelStatement



```js
amazonaws_redshift_data.CancelStatement({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
* output [CancelStatementResponse](#cancelstatementresponse)

### DescribeStatement



```js
amazonaws_redshift_data.DescribeStatement({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
* output [DescribeStatementResponse](#describestatementresponse)

### DescribeTable



```js
amazonaws_redshift_data.DescribeTable({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ClusterIdentifier **required**
  * Database
  * DbUser
  * MaxResults
  * NextToken
  * Schema
  * SecretArn
  * Table

#### Output
* output [DescribeTableResponse](#describetableresponse)

### ExecuteStatement



```js
amazonaws_redshift_data.ExecuteStatement({
  "ClusterIdentifier": null,
  "Sql": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**
  * Database
  * DbUser
  * SecretArn
  * Sql **required**
  * StatementName
  * WithEvent

#### Output
* output [ExecuteStatementOutput](#executestatementoutput)

### GetStatementResult



```js
amazonaws_redshift_data.GetStatementResult({
  "Id": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * Id **required**
  * NextToken

#### Output
* output [GetStatementResultResponse](#getstatementresultresponse)

### ListDatabases



```js
amazonaws_redshift_data.ListDatabases({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ClusterIdentifier **required**
  * Database
  * DbUser
  * MaxResults
  * NextToken
  * SecretArn

#### Output
* output [ListDatabasesResponse](#listdatabasesresponse)

### ListSchemas



```js
amazonaws_redshift_data.ListSchemas({
  "ClusterIdentifier": null,
  "Database": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ClusterIdentifier **required**
  * Database **required**
  * DbUser
  * MaxResults
  * NextToken
  * SchemaPattern
  * SecretArn

#### Output
* output [ListSchemasResponse](#listschemasresponse)

### ListStatements



```js
amazonaws_redshift_data.ListStatements({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * StatementName
  * Status

#### Output
* output [ListStatementsResponse](#liststatementsresponse)

### ListTables



```js
amazonaws_redshift_data.ListTables({
  "ClusterIdentifier": null,
  "Database": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ClusterIdentifier **required**
  * Database **required**
  * DbUser
  * MaxResults
  * NextToken
  * SchemaPattern
  * SecretArn
  * TablePattern

#### Output
* output [ListTablesResponse](#listtablesresponse)



## Definitions

### Blob
* Blob `string`

### Boolean
* Boolean `boolean`

### BoxedBoolean
* BoxedBoolean `boolean`

### BoxedDouble
* BoxedDouble `number`

### BoxedLong
* BoxedLong `integer`

### CancelStatementRequest
* CancelStatementRequest `object`
  * Id **required**

### CancelStatementResponse
* CancelStatementResponse `object`
  * Status

### ColumnList
* ColumnList `array`
  * items [ColumnMetadata](#columnmetadata)

### ColumnMetadata
* ColumnMetadata `object`: The properties (metadata) of a column. 
  * columnDefault
  * isCaseSensitive
  * isCurrency
  * isSigned
  * label
  * length
  * name
  * nullable
  * precision
  * scale
  * schemaName
  * tableName
  * typeName

### ColumnMetadataList
* ColumnMetadataList `array`
  * items [ColumnMetadata](#columnmetadata)

### DatabaseList
* DatabaseList `array`
  * items [String](#string)

### DescribeStatementRequest
* DescribeStatementRequest `object`
  * Id **required**

### DescribeStatementResponse
* DescribeStatementResponse `object`
  * ClusterIdentifier
  * CreatedAt
  * Database
  * DbUser
  * Duration
  * Error
  * Id **required**
  * QueryString
  * RedshiftPid
  * RedshiftQueryId
  * ResultRows
  * ResultSize
  * SecretArn
  * Status
  * UpdatedAt

### DescribeTableRequest
* DescribeTableRequest `object`
  * ClusterIdentifier **required**
  * Database
  * DbUser
  * MaxResults
  * NextToken
  * Schema
  * SecretArn
  * Table

### DescribeTableResponse
* DescribeTableResponse `object`
  * ColumnList
    * items [ColumnMetadata](#columnmetadata)
  * NextToken
  * TableName

### ExecuteStatementException


### ExecuteStatementInput
* ExecuteStatementInput `object`
  * ClusterIdentifier **required**
  * Database
  * DbUser
  * SecretArn
  * Sql **required**
  * StatementName
  * WithEvent

### ExecuteStatementOutput
* ExecuteStatementOutput `object`
  * ClusterIdentifier
  * CreatedAt
  * Database
  * DbUser
  * Id
  * SecretArn

### Field
* Field `object`: A data value in a column. 
  * blobValue
  * booleanValue
  * doubleValue
  * isNull
  * longValue
  * stringValue

### FieldList
* FieldList `array`
  * items [Field](#field)

### GetStatementResultRequest
* GetStatementResultRequest `object`
  * Id **required**
  * NextToken

### GetStatementResultResponse
* GetStatementResultResponse `object`
  * ColumnMetadata
    * items [ColumnMetadata](#columnmetadata)
  * NextToken
  * Records **required**
    * items [FieldList](#fieldlist)
  * TotalNumRows

### Integer
* Integer `integer`

### InternalServerException


### ListDatabasesRequest
* ListDatabasesRequest `object`
  * ClusterIdentifier **required**
  * Database
  * DbUser
  * MaxResults
  * NextToken
  * SecretArn

### ListDatabasesResponse
* ListDatabasesResponse `object`
  * Databases
    * items [String](#string)
  * NextToken

### ListSchemasRequest
* ListSchemasRequest `object`
  * ClusterIdentifier **required**
  * Database **required**
  * DbUser
  * MaxResults
  * NextToken
  * SchemaPattern
  * SecretArn

### ListSchemasResponse
* ListSchemasResponse `object`
  * NextToken
  * Schemas
    * items [String](#string)

### ListStatementsLimit
* ListStatementsLimit `integer`

### ListStatementsRequest
* ListStatementsRequest `object`
  * MaxResults
  * NextToken
  * StatementName
  * Status

### ListStatementsResponse
* ListStatementsResponse `object`
  * NextToken
  * Statements **required**
    * items [StatementData](#statementdata)

### ListTablesRequest
* ListTablesRequest `object`
  * ClusterIdentifier **required**
  * Database **required**
  * DbUser
  * MaxResults
  * NextToken
  * SchemaPattern
  * SecretArn
  * TablePattern

### ListTablesResponse
* ListTablesResponse `object`
  * NextToken
  * Tables
    * items [TableMember](#tablemember)

### Location
* Location `string`

### Long
* Long `integer`

### PageSize
* PageSize `integer`

### ResourceNotFoundException


### SchemaList
* SchemaList `array`
  * items [String](#string)

### SecretArn
* SecretArn `string`

### SqlRecords
* SqlRecords `array`
  * items [FieldList](#fieldlist)

### StatementData
* StatementData `object`: The SQL statement to run.
  * CreatedAt
  * Id **required**
  * QueryString
  * SecretArn
  * StatementName
  * Status
  * UpdatedAt

### StatementList
* StatementList `array`
  * items [StatementData](#statementdata)

### StatementNameString
* StatementNameString `string`

### StatementString
* StatementString `string`

### StatusString
* StatusString `string` (values: ABORTED, ALL, FAILED, FINISHED, PICKED, STARTED, SUBMITTED)

### String
* String `string`

### TableList
* TableList `array`
  * items [TableMember](#tablemember)

### TableMember
* TableMember `object`: The properties of a table. 
  * name
  * schema
  * type

### Timestamp
* Timestamp `string`

### UUID
* UUID `string`

### ValidationException


### bool
* bool `boolean`


