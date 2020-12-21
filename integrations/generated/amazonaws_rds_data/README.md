# @datafire/amazonaws_rds_data

Client library for AWS RDS DataService

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_rds_data
```
```js
let amazonaws_rds_data = require('@datafire/amazonaws_rds_data').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p><fullname>Amazon RDS Data Service</fullname> <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora Serverless DB cluster. To run these statements, you work with the Data Service API.</p> <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>If you have questions or comments related to the Data API, send email to <a href="mailto:Rds-data-api-feedback@amazon.com">Rds-data-api-feedback@amazon.com</a>.</p> </note></p>

## Actions

### BatchExecuteStatement



```js
amazonaws_rds_data.BatchExecuteStatement({
  "resourceArn": "",
  "secretArn": "",
  "sql": ""
}, context)
```

#### Input
* input `object`
  * database `string`: The name of the database.
  * parameterSets `array`: <p>The parameter set for the batch operation.</p> <p>The SQL statement is executed as many times as the number of parameter sets provided. To execute a SQL statement with no parameters, use one of the following options:</p> <ul> <li> <p>Specify one or more empty parameter sets.</p> </li> <li> <p>Use the <code>ExecuteStatement</code> operation instead of the <code>BatchExecuteStatement</code> operation.</p> </li> </ul> <note> <p>Array parameters are not supported.</p> </note>
    * items [SqlParametersList](#sqlparameterslist)
  * resourceArn **required** `string`: The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
  * schema `string`: The name of the database schema.
  * secretArn **required** `string`: The name or ARN of the secret that enables access to the DB cluster.
  * sql **required** `string`: The SQL statement to run.
  * transactionId `string`: <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>

#### Output
* output [BatchExecuteStatementResponse](#batchexecutestatementresponse)

### BeginTransaction



```js
amazonaws_rds_data.BeginTransaction({
  "resourceArn": "",
  "secretArn": ""
}, context)
```

#### Input
* input `object`
  * database `string`: The name of the database.
  * resourceArn **required** `string`: The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
  * schema `string`: The name of the database schema.
  * secretArn **required** `string`: The name or ARN of the secret that enables access to the DB cluster.

#### Output
* output [BeginTransactionResponse](#begintransactionresponse)

### CommitTransaction



```js
amazonaws_rds_data.CommitTransaction({
  "resourceArn": "",
  "secretArn": "",
  "transactionId": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`: The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
  * secretArn **required** `string`: The name or ARN of the secret that enables access to the DB cluster.
  * transactionId **required** `string`: The identifier of the transaction to end and commit.

#### Output
* output [CommitTransactionResponse](#committransactionresponse)

### ExecuteStatement



```js
amazonaws_rds_data.ExecuteStatement({
  "resourceArn": "",
  "secretArn": "",
  "sql": ""
}, context)
```

#### Input
* input `object`
  * parameters `array`: <p>The parameters for the SQL statement.</p> <note> <p>Array parameters are not supported.</p> </note>
    * items [SqlParameter](#sqlparameter)
  * continueAfterTimeout `boolean`: <p>A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.</p> <important> <p>For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.</p> </important>
  * database `string`: The name of the database.
  * includeResultMetadata `boolean`: A value that indicates whether to include metadata in the results.
  * resourceArn **required** `string`: The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
  * resultSetOptions `object`: Options that control how the result set is returned.
    * decimalReturnType
  * schema `string`: The name of the database schema.
  * secretArn **required** `string`: The name or ARN of the secret that enables access to the DB cluster.
  * sql **required** `string`: The SQL statement to run.
  * transactionId `string`: <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>

#### Output
* output [ExecuteStatementResponse](#executestatementresponse)

### ExecuteSql



```js
amazonaws_rds_data.ExecuteSql({
  "awsSecretStoreArn": "",
  "dbClusterOrInstanceArn": "",
  "sqlStatements": ""
}, context)
```

#### Input
* input `object`
  * awsSecretStoreArn **required** `string`: The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster.
  * database `string`: The name of the database.
  * dbClusterOrInstanceArn **required** `string`: The ARN of the Aurora Serverless DB cluster.
  * schema `string`: The name of the database schema.
  * sqlStatements **required** `string`: <p>One or more SQL statements to run on the DB cluster.</p> <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. </p>

#### Output
* output [ExecuteSqlResponse](#executesqlresponse)

### RollbackTransaction



```js
amazonaws_rds_data.RollbackTransaction({
  "resourceArn": "",
  "secretArn": "",
  "transactionId": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`: The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
  * secretArn **required** `string`: The name or ARN of the secret that enables access to the DB cluster.
  * transactionId **required** `string`: The identifier of the transaction to roll back.

#### Output
* output [RollbackTransactionResponse](#rollbacktransactionresponse)



## Definitions

### Arn
* Arn `string`

### ArrayOfArray
* ArrayOfArray `array`: <p>An array of arrays.</p> <note> <p>Some array entries can be null.</p> </note>
  * items [ArrayValue](#arrayvalue)

### ArrayValue
* ArrayValue `object`: Contains an array.
  * arrayValues
    * items [ArrayValue](#arrayvalue)
  * booleanValues
    * items [BoxedBoolean](#boxedboolean)
  * doubleValues
    * items [BoxedDouble](#boxeddouble)
  * longValues
    * items [BoxedLong](#boxedlong)
  * stringValues
    * items [String](#string)

### ArrayValueList
* ArrayValueList `array`
  * items [Value](#value)

### BadRequestException


### BatchExecuteStatementRequest
* BatchExecuteStatementRequest `object`: The request parameters represent the input of a SQL statement over an array of data.
  * database
  * parameterSets
    * items [SqlParametersList](#sqlparameterslist)
  * resourceArn **required**
  * schema
  * secretArn **required**
  * sql **required**
  * transactionId

### BatchExecuteStatementResponse
* BatchExecuteStatementResponse `object`: The response elements represent the output of a SQL statement over an array of data.
  * updateResults
    * items [UpdateResult](#updateresult)

### BeginTransactionRequest
* BeginTransactionRequest `object`: The request parameters represent the input of a request to start a SQL transaction.
  * database
  * resourceArn **required**
  * schema
  * secretArn **required**

### BeginTransactionResponse
* BeginTransactionResponse `object`: The response elements represent the output of a request to start a SQL transaction.
  * transactionId

### Blob
* Blob `string`

### Boolean
* Boolean `boolean`

### BooleanArray
* BooleanArray `array`: <p>An array of Boolean values.</p> <note> <p>Some array entries can be null.</p> </note>
  * items [BoxedBoolean](#boxedboolean)

### BoxedBoolean
* BoxedBoolean `boolean`

### BoxedDouble
* BoxedDouble `number`

### BoxedFloat
* BoxedFloat `number`

### BoxedInteger
* BoxedInteger `integer`

### BoxedLong
* BoxedLong `integer`

### ColumnMetadata
* ColumnMetadata `object`: Contains the metadata for a column.
  * arrayBaseColumnType
  * isAutoIncrement
  * isCaseSensitive
  * isCurrency
  * isSigned
  * label
  * name
  * nullable
  * precision
  * scale
  * schemaName
  * tableName
  * type
  * typeName

### CommitTransactionRequest
* CommitTransactionRequest `object`: The request parameters represent the input of a commit transaction request.
  * resourceArn **required**
  * secretArn **required**
  * transactionId **required**

### CommitTransactionResponse
* CommitTransactionResponse `object`: The response elements represent the output of a commit transaction request.
  * transactionStatus

### DbName
* DbName `string`

### DecimalReturnType
* DecimalReturnType `string` (values: DOUBLE_OR_LONG, STRING)

### DoubleArray
* DoubleArray `array`: <p>An array of floating point numbers.</p> <note> <p>Some array entries can be null.</p> </note>
  * items [BoxedDouble](#boxeddouble)

### ExecuteSqlRequest
* ExecuteSqlRequest `object`: The request parameters represent the input of a request to run one or more SQL statements.
  * awsSecretStoreArn **required**
  * database
  * dbClusterOrInstanceArn **required**
  * schema
  * sqlStatements **required**

### ExecuteSqlResponse
* ExecuteSqlResponse `object`: The response elements represent the output of a request to run one or more SQL statements.
  * sqlStatementResults
    * items [SqlStatementResult](#sqlstatementresult)

### ExecuteStatementRequest
* ExecuteStatementRequest `object`: The request parameters represent the input of a request to run a SQL statement against a database.
  * parameters
    * items [SqlParameter](#sqlparameter)
  * continueAfterTimeout
  * database
  * includeResultMetadata
  * resourceArn **required**
  * resultSetOptions
    * decimalReturnType
  * schema
  * secretArn **required**
  * sql **required**
  * transactionId

### ExecuteStatementResponse
* ExecuteStatementResponse `object`: The response elements represent the output of a request to run a SQL statement against a database.
  * columnMetadata
    * items [ColumnMetadata](#columnmetadata)
  * generatedFields
    * items [Field](#field)
  * numberOfRecordsUpdated
  * records
    * items [FieldList](#fieldlist)

### Field
* Field `object`: Contains a value.
  * arrayValue
    * arrayValues
      * items [ArrayValue](#arrayvalue)
    * booleanValues
      * items [BoxedBoolean](#boxedboolean)
    * doubleValues
      * items [BoxedDouble](#boxeddouble)
    * longValues
      * items [BoxedLong](#boxedlong)
    * stringValues
      * items [String](#string)
  * blobValue
  * booleanValue
  * doubleValue
  * isNull
  * longValue
  * stringValue

### FieldList
* FieldList `array`
  * items [Field](#field)

### ForbiddenException


### Id
* Id `string`

### Integer
* Integer `integer`

### InternalServerErrorException


### Long
* Long `integer`

### LongArray
* LongArray `array`: <p>An array of integers.</p> <note> <p>Some array entries can be null.</p> </note>
  * items [BoxedLong](#boxedlong)

### Metadata
* Metadata `array`
  * items [ColumnMetadata](#columnmetadata)

### NotFoundException


### ParameterName
* ParameterName `string`

### Record
* Record `object`: A record returned by a call.
  * values
    * items [Value](#value)

### Records
* Records `array`
  * items [Record](#record)

### RecordsUpdated
* RecordsUpdated `integer`

### ResultFrame
* ResultFrame `object`: The result set returned by a SQL statement.
  * records
    * items [Record](#record)
  * resultSetMetadata
    * columnCount
    * columnMetadata
      * items [ColumnMetadata](#columnmetadata)

### ResultSetMetadata
* ResultSetMetadata `object`: The metadata of the result set returned by a SQL statement.
  * columnCount
  * columnMetadata
    * items [ColumnMetadata](#columnmetadata)

### ResultSetOptions
* ResultSetOptions `object`: Options that control how the result set is returned.
  * decimalReturnType

### RollbackTransactionRequest
* RollbackTransactionRequest `object`: The request parameters represent the input of a request to perform a rollback of a transaction.
  * resourceArn **required**
  * secretArn **required**
  * transactionId **required**

### RollbackTransactionResponse
* RollbackTransactionResponse `object`: The response elements represent the output of a request to perform a rollback of a transaction.
  * transactionStatus

### Row
* Row `array`
  * items [Value](#value)

### ServiceUnavailableError


### SqlParameter
* SqlParameter `object`: A parameter used in a SQL statement.
  * name
  * typeHint
  * value
    * arrayValue
      * arrayValues
        * items [ArrayValue](#arrayvalue)
      * booleanValues
        * items [BoxedBoolean](#boxedboolean)
      * doubleValues
        * items [BoxedDouble](#boxeddouble)
      * longValues
        * items [BoxedLong](#boxedlong)
      * stringValues
        * items [String](#string)
    * blobValue
    * booleanValue
    * doubleValue
    * isNull
    * longValue
    * stringValue

### SqlParameterSets
* SqlParameterSets `array`
  * items [SqlParametersList](#sqlparameterslist)

### SqlParametersList
* SqlParametersList `array`
  * items [SqlParameter](#sqlparameter)

### SqlRecords
* SqlRecords `array`
  * items [FieldList](#fieldlist)

### SqlStatement
* SqlStatement `string`

### SqlStatementResult
* SqlStatementResult `object`: <p>The result of a SQL statement.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
  * numberOfRecordsUpdated
  * resultFrame
    * records
      * items [Record](#record)
    * resultSetMetadata
      * columnCount
      * columnMetadata
        * items [ColumnMetadata](#columnmetadata)

### SqlStatementResults
* SqlStatementResults `array`
  * items [SqlStatementResult](#sqlstatementresult)

### StatementTimeoutException


### String
* String `string`

### StringArray
* StringArray `array`: <p>An array of strings.</p> <note> <p>Some array entries can be null.</p> </note>
  * items [String](#string)

### StructValue
* StructValue `object`: A structure value returned by a call.
  * attributes
    * items [Value](#value)

### TransactionStatus
* TransactionStatus `string`

### TypeHint
* TypeHint `string` (values: DATE, DECIMAL, TIME, TIMESTAMP)

### UpdateResult
* UpdateResult `object`: The response elements represent the results of an update.
  * generatedFields
    * items [Field](#field)

### UpdateResults
* UpdateResults `array`
  * items [UpdateResult](#updateresult)

### Value
* Value `object`: <p>Contains the value of a column.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
  * arrayValues
    * items [Value](#value)
  * bigIntValue
  * bitValue
  * blobValue
  * doubleValue
  * intValue
  * isNull
  * realValue
  * stringValue
  * structValue
    * attributes
      * items [Value](#value)


