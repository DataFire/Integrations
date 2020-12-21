# @datafire/amazonaws_honeycode

Client library for Amazon Honeycode

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_honeycode
```
```js
let amazonaws_honeycode = require('@datafire/amazonaws_honeycode').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

 Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals, resources, and even your team. 

## Actions

### GetScreenData



```js
amazonaws_honeycode.GetScreenData({
  "workbookId": "",
  "appId": "",
  "screenId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The ID of the app that contains the screem.
  * maxResults `integer`: <p> The number of results to be returned on a single page. Specify a number between 1 and 100. The maximum value is 100. </p> <p> This parameter is optional. If you don't specify this parameter, the default page size is 100. </p>
  * nextToken `string`: <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
  * screenId **required** `string`: The ID of the screen.
  * variables `object`:  Variables are optional and are needed only if the screen requires them to render correctly. Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. 
  * workbookId **required** `string`: The ID of the workbook that contains the screen.

#### Output
* output [GetScreenDataResult](#getscreendataresult)

### InvokeScreenAutomation



```js
amazonaws_honeycode.InvokeScreenAutomation({
  "workbookId": "",
  "appId": "",
  "screenId": "",
  "automationId": ""
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * appId **required** `string`
  * screenId **required** `string`
  * automationId **required** `string`
  * clientRequestToken `string`: <p> The request token for performing the automation action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will return the response of the previous call rather than performing the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
  * rowId `string`:  The row ID for the automation if the automation is defined inside a block with source or list. 
  * variables `object`:  Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. Any variables defined in a screen are required to be passed in the call. 

#### Output
* output [InvokeScreenAutomationResult](#invokescreenautomationresult)

### ListTables



```js
amazonaws_honeycode.ListTables({
  "workbookId": ""
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListTablesResult](#listtablesresult)

### ListTableColumns



```js
amazonaws_honeycode.ListTableColumns({
  "workbookId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * tableId **required** `string`
  * nextToken `string`

#### Output
* output [ListTableColumnsResult](#listtablecolumnsresult)

### StartTableDataImportJob



```js
amazonaws_honeycode.StartTableDataImportJob({
  "workbookId": "",
  "tableId": "",
  "dataSource": {},
  "dataFormat": "",
  "importOptions": {},
  "clientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * tableId **required** `string`
  * clientRequestToken **required** `string`: <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
  * dataFormat **required** `string` (values: DELIMITED_TEXT):  The format of the data that is being imported. Currently the only option supported is "DELIMITED_TEXT". 
  * dataSource **required** `object`: An object that has details about the source of the data that was submitted for import.
    * dataSourceConfig
      * dataSourceUrl
  * importOptions **required** `object`: An object that contains the options specified by the sumitter of the import request.
    * delimitedTextOptions
      * dataCharacterEncoding
      * delimiter **required**
      * hasHeaderRow
      * ignoreEmptyRows
    * destinationOptions
      * columnMap

#### Output
* output [StartTableDataImportJobResult](#starttabledataimportjobresult)

### DescribeTableDataImportJob



```js
amazonaws_honeycode.DescribeTableDataImportJob({
  "workbookId": "",
  "tableId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * tableId **required** `string`
  * jobId **required** `string`

#### Output
* output [DescribeTableDataImportJobResult](#describetabledataimportjobresult)

### BatchCreateTableRows



```js
amazonaws_honeycode.BatchCreateTableRows({
  "workbookId": "",
  "tableId": "",
  "rowsToCreate": []
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * tableId **required** `string`
  * clientRequestToken `string`: <p> The request token for performing the batch create operation. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the operation again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
  * rowsToCreate **required** `array`: <p> The list of rows to create at the end of the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request and the cells to create for that row. You need to specify at least one item in this list. </p> <p> Note that if one of the column ids in any of the rows in the request does not exist in the table, then the request fails and no updates are made to the table. </p>
    * items [CreateRowData](#createrowdata)

#### Output
* output [BatchCreateTableRowsResult](#batchcreatetablerowsresult)

### BatchDeleteTableRows



```js
amazonaws_honeycode.BatchDeleteTableRows({
  "workbookId": "",
  "tableId": "",
  "rowIds": []
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * tableId **required** `string`
  * clientRequestToken `string`: <p> The request token for performing the delete action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
  * rowIds **required** `array`: <p> The list of row ids to delete from the table. You need to specify at least one row id in this list. </p> <p> Note that if one of the row ids provided in the request does not exist in the table, then the request fails and no rows are deleted from the table. </p>
    * items [RowId](#rowid)

#### Output
* output [BatchDeleteTableRowsResult](#batchdeletetablerowsresult)

### BatchUpdateTableRows



```js
amazonaws_honeycode.BatchUpdateTableRows({
  "workbookId": "",
  "tableId": "",
  "rowsToUpdate": []
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * tableId **required** `string`
  * clientRequestToken `string`: <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
  * rowsToUpdate **required** `array`: <p> The list of rows to update in the table. Each item in this list needs to contain the row id to update along with the map of column id to cell values for each column in that row that needs to be updated. You need to specify at least one row in this list, and for each row, you need to specify at least one column to update. </p> <p> Note that if one of the row or column ids in the request does not exist in the table, then the request fails and no updates are made to the table. </p>
    * items [UpdateRowData](#updaterowdata)

#### Output
* output [BatchUpdateTableRowsResult](#batchupdatetablerowsresult)

### BatchUpsertTableRows



```js
amazonaws_honeycode.BatchUpsertTableRows({
  "workbookId": "",
  "tableId": "",
  "rowsToUpsert": []
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * tableId **required** `string`
  * clientRequestToken `string`: <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
  * rowsToUpsert **required** `array`: <p> The list of rows to upsert in the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request, a filter expression to find the rows to update for that element and the cell values to set for each column in the upserted rows. You need to specify at least one item in this list. </p> <p> Note that if one of the filter formulas in the request fails to evaluate because of an error or one of the column ids in any of the rows does not exist in the table, then the request fails and no updates are made to the table. </p>
    * items [UpsertRowData](#upsertrowdata)

#### Output
* output [BatchUpsertTableRowsResult](#batchupserttablerowsresult)

### ListTableRows



```js
amazonaws_honeycode.ListTableRows({
  "workbookId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * tableId **required** `string`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: The maximum number of rows to return in each page of the results.
  * nextToken `string`: <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
  * rowIds `array`:  This parameter is optional. If one or more row ids are specified in this list, then only the specified row ids are returned in the result. If no row ids are specified here, then all the rows in the table are returned. 
    * items [RowId](#rowid)

#### Output
* output [ListTableRowsResult](#listtablerowsresult)

### QueryTableRows



```js
amazonaws_honeycode.QueryTableRows({
  "workbookId": "",
  "tableId": "",
  "filterFormula": {}
}, context)
```

#### Input
* input `object`
  * workbookId **required** `string`
  * tableId **required** `string`
  * maxResults `string`
  * nextToken `string`
  * filterFormula **required** `object`:  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. 
    * contextRowId
    * formula
  * maxResults `integer`: The maximum number of rows to return in each page of the results.
  * nextToken `string`: <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>

#### Output
* output [QueryTableRowsResult](#querytablerowsresult)



## Definitions

### AccessDeniedException


### AutomationExecutionException


### AutomationExecutionTimeoutException


### AwsUserArn
* AwsUserArn `string`

### BatchCreateTableRowsRequest
* BatchCreateTableRowsRequest `object`
  * clientRequestToken
  * rowsToCreate **required**
    * items [CreateRowData](#createrowdata)

### BatchCreateTableRowsResult
* BatchCreateTableRowsResult `object`
  * createdRows **required**
  * failedBatchItems
    * items [FailedBatchItem](#failedbatchitem)
  * workbookCursor **required**

### BatchDeleteTableRowsRequest
* BatchDeleteTableRowsRequest `object`
  * clientRequestToken
  * rowIds **required**
    * items [RowId](#rowid)

### BatchDeleteTableRowsResult
* BatchDeleteTableRowsResult `object`
  * failedBatchItems
    * items [FailedBatchItem](#failedbatchitem)
  * workbookCursor **required**

### BatchErrorMessage
* BatchErrorMessage `string`

### BatchItemId
* BatchItemId `string`

### BatchUpdateTableRowsRequest
* BatchUpdateTableRowsRequest `object`
  * clientRequestToken
  * rowsToUpdate **required**
    * items [UpdateRowData](#updaterowdata)

### BatchUpdateTableRowsResult
* BatchUpdateTableRowsResult `object`
  * failedBatchItems
    * items [FailedBatchItem](#failedbatchitem)
  * workbookCursor **required**

### BatchUpsertTableRowsRequest
* BatchUpsertTableRowsRequest `object`
  * clientRequestToken
  * rowsToUpsert **required**
    * items [UpsertRowData](#upsertrowdata)

### BatchUpsertTableRowsResult
* BatchUpsertTableRowsResult `object`
  * failedBatchItems
    * items [FailedBatchItem](#failedbatchitem)
  * rows **required**
  * workbookCursor **required**

### Cell
* Cell `object`: An object that represents a single cell in a table.
  * format
  * formattedValue
  * formula
  * rawValue

### CellInput
* CellInput `object`:  CellInput object contains the data needed to create or update cells in a table. 
  * fact

### Cells
* Cells `array`
  * items [Cell](#cell)

### ClientRequestToken
* ClientRequestToken `string`

### ColumnMetadata
* ColumnMetadata `object`: Metadata for column in the table.
  * format **required**
  * name **required**

### CreateRowData
* CreateRowData `object`:  Data needed to create a single row in a table as part of the BatchCreateTableRows request. 
  * batchItemId **required**
  * cellsToCreate **required**

### CreateRowDataList
* CreateRowDataList `array`
  * items [CreateRowData](#createrowdata)

### CreatedRowsMap
* CreatedRowsMap `object`

### DataItem
* DataItem `object`: The data in a particular data cell defined on the screen.
  * formattedValue
  * overrideFormat
  * rawValue

### DataItems
* DataItems `array`
  * items [DataItem](#dataitem)

### DelimitedTextDelimiter
* DelimitedTextDelimiter `string`

### DelimitedTextImportOptions
* DelimitedTextImportOptions `object`:  An object that contains the options relating to parsing delimited text as part of an import request. 
  * dataCharacterEncoding
  * delimiter **required**
  * hasHeaderRow
  * ignoreEmptyRows

### DescribeTableDataImportJobRequest
* DescribeTableDataImportJobRequest `object`

### DescribeTableDataImportJobResult
* DescribeTableDataImportJobResult `object`
  * jobMetadata **required**
    * dataSource **required**
      * dataSourceConfig **required**
        * dataSourceUrl
    * importOptions **required**
      * delimitedTextOptions
        * dataCharacterEncoding
        * delimiter **required**
        * hasHeaderRow
        * ignoreEmptyRows
      * destinationOptions
        * columnMap
    * submitTime **required**
    * submitter **required**
      * email
      * userArn
  * jobStatus **required**
  * message **required**

### DestinationOptions
* DestinationOptions `object`: An object that contains the options relating to the destination of the import request.
  * columnMap

### Email
* Email `string`

### Fact
* Fact `string`

### FailedBatchItem
* FailedBatchItem `object`:  A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding. 
  * errorMessage **required**
  * id **required**

### FailedBatchItems
* FailedBatchItems `array`
  * items [FailedBatchItem](#failedbatchitem)

### Filter
* Filter `object`:  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. 
  * contextRowId
  * formula **required**

### Format
* Format `string` (values: AUTO, NUMBER, CURRENCY, DATE, TIME, DATE_TIME, PERCENTAGE, TEXT, ACCOUNTING, CONTACT, ROWLINK)

### FormattedValue
* FormattedValue `string`

### Formula
* Formula `string`

### GetScreenDataRequest
* GetScreenDataRequest `object`
  * appId **required**
  * maxResults
  * nextToken
  * screenId **required**
  * variables
  * workbookId **required**

### GetScreenDataResult
* GetScreenDataResult `object`
  * nextToken
  * results **required**
  * workbookCursor **required**

### HasHeaderRow
* HasHeaderRow `boolean`

### IgnoreEmptyRows
* IgnoreEmptyRows `boolean`

### ImportColumnMap
* ImportColumnMap `object`

### ImportDataCharacterEncoding
* ImportDataCharacterEncoding `string` (values: UTF-8, US-ASCII, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-16)

### ImportDataSource
* ImportDataSource `object`: An object that has details about the source of the data that was submitted for import.
  * dataSourceConfig **required**
    * dataSourceUrl

### ImportDataSourceConfig
* ImportDataSourceConfig `object`:  An object that contains the configuration parameters for the data source of an import request. 
  * dataSourceUrl

### ImportJobSubmitter
* ImportJobSubmitter `object`: An object that contains the attributes of the submitter of the import job.
  * email
  * userArn

### ImportOptions
* ImportOptions `object`: An object that contains the options specified by the sumitter of the import request.
  * delimitedTextOptions
    * dataCharacterEncoding
    * delimiter **required**
    * hasHeaderRow
    * ignoreEmptyRows
  * destinationOptions
    * columnMap

### ImportSourceDataFormat
* ImportSourceDataFormat `string` (values: DELIMITED_TEXT)

### InternalServerException


### InvokeScreenAutomationRequest
* InvokeScreenAutomationRequest `object`
  * clientRequestToken
  * rowId
  * variables

### InvokeScreenAutomationResult
* InvokeScreenAutomationResult `object`
  * workbookCursor **required**

### JobId
* JobId `string`

### ListTableColumnsRequest
* ListTableColumnsRequest `object`

### ListTableColumnsResult
* ListTableColumnsResult `object`
  * nextToken
  * tableColumns **required**
    * items [TableColumn](#tablecolumn)
  * workbookCursor

### ListTableRowsRequest
* ListTableRowsRequest `object`
  * maxResults
  * nextToken
  * rowIds
    * items [RowId](#rowid)

### ListTableRowsResult
* ListTableRowsResult `object`
  * columnIds **required**
    * items [ResourceId](#resourceid)
  * nextToken
  * rowIdsNotFound
    * items [RowId](#rowid)
  * rows **required**
    * items [TableRow](#tablerow)
  * workbookCursor **required**

### ListTablesRequest
* ListTablesRequest `object`

### ListTablesResult
* ListTablesResult `object`
  * nextToken
  * tables **required**
    * items [Table](#table)
  * workbookCursor

### MaxResults
* MaxResults `integer`

### Name
* Name `string`

### PaginationToken
* PaginationToken `string`

### QueryTableRowsRequest
* QueryTableRowsRequest `object`
  * filterFormula **required**
    * contextRowId
    * formula **required**
  * maxResults
  * nextToken

### QueryTableRowsResult
* QueryTableRowsResult `object`
  * columnIds **required**
    * items [ResourceId](#resourceid)
  * nextToken
  * rows **required**
    * items [TableRow](#tablerow)
  * workbookCursor **required**

### RawValue
* RawValue `string`

### RequestTimeoutException


### ResourceId
* ResourceId `string`

### ResourceIds
* ResourceIds `array`
  * items [ResourceId](#resourceid)

### ResourceNotFoundException


### ResultHeader
* ResultHeader `array`
  * items [ColumnMetadata](#columnmetadata)

### ResultRow
* ResultRow `object`: A single row in the ResultSet.
  * dataItems **required**
    * items [DataItem](#dataitem)
  * rowId

### ResultRows
* ResultRows `array`
  * items [ResultRow](#resultrow)

### ResultSet
* ResultSet `object`:  ResultSet contains the results of the request for a single block or list defined on the screen. 
  * headers **required**
    * items [ColumnMetadata](#columnmetadata)
  * rows **required**
    * items [ResultRow](#resultrow)

### ResultSetMap
* ResultSetMap `object`

### RowDataInput
* RowDataInput `object`

### RowId
* RowId `string`

### RowIdList
* RowIdList `array`
  * items [RowId](#rowid)

### SecureURL
* SecureURL `string`

### ServiceQuotaExceededException


### ServiceUnavailableException


### SourceDataColumnIndex
* SourceDataColumnIndex `integer`

### SourceDataColumnProperties
* SourceDataColumnProperties `object`: An object that contains the properties for importing data to a specific column in a table.
  * columnIndex

### StartTableDataImportJobRequest
* StartTableDataImportJobRequest `object`
  * clientRequestToken **required**
  * dataFormat **required**
  * dataSource **required**
    * dataSourceConfig **required**
      * dataSourceUrl
  * importOptions **required**
    * delimitedTextOptions
      * dataCharacterEncoding
      * delimiter **required**
      * hasHeaderRow
      * ignoreEmptyRows
    * destinationOptions
      * columnMap

### StartTableDataImportJobResult
* StartTableDataImportJobResult `object`
  * jobId **required**
  * jobStatus **required**

### Table
* Table `object`: An object representing the properties of a table in a workbook.
  * tableId
  * tableName

### TableColumn
* TableColumn `object`: An object that contains attributes about a single column in a table
  * format
  * tableColumnId
  * tableColumnName

### TableColumnName
* TableColumnName `string`

### TableColumns
* TableColumns `array`
  * items [TableColumn](#tablecolumn)

### TableDataImportJobMessage
* TableDataImportJobMessage `string`

### TableDataImportJobMetadata
* TableDataImportJobMetadata `object`: The metadata associated with the table data import job that was submitted.
  * dataSource **required**
    * dataSourceConfig **required**
      * dataSourceUrl
  * importOptions **required**
    * delimitedTextOptions
      * dataCharacterEncoding
      * delimiter **required**
      * hasHeaderRow
      * ignoreEmptyRows
    * destinationOptions
      * columnMap
  * submitTime **required**
  * submitter **required**
    * email
    * userArn

### TableDataImportJobStatus
* TableDataImportJobStatus `string` (values: SUBMITTED, IN_PROGRESS, COMPLETED, FAILED)

### TableName
* TableName `string`

### TableRow
* TableRow `object`: An object that contains attributes about a single row in a table
  * cells **required**
    * items [Cell](#cell)
  * rowId **required**

### TableRows
* TableRows `array`
  * items [TableRow](#tablerow)

### Tables
* Tables `array`
  * items [Table](#table)

### ThrottlingException


### TimestampInMillis
* TimestampInMillis `string`

### UpdateRowData
* UpdateRowData `object`:  Data needed to create a single row in a table as part of the BatchCreateTableRows request. 
  * cellsToUpdate **required**
  * rowId **required**

### UpdateRowDataList
* UpdateRowDataList `array`
  * items [UpdateRowData](#updaterowdata)

### UpsertAction
* UpsertAction `string` (values: UPDATED, APPENDED)

### UpsertRowData
* UpsertRowData `object`:  Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request. 
  * batchItemId **required**
  * cellsToUpdate **required**
  * filter **required**
    * contextRowId
    * formula **required**

### UpsertRowDataList
* UpsertRowDataList `array`
  * items [UpsertRowData](#upsertrowdata)

### UpsertRowsResult
* UpsertRowsResult `object`:  An object that represents the result of a single upsert row request. 
  * rowIds **required**
    * items [RowId](#rowid)
  * upsertAction **required**

### UpsertRowsResultMap
* UpsertRowsResultMap `object`

### ValidationException


### VariableName
* VariableName `string`

### VariableValue
* VariableValue `object`: The input variables to the app to be used by the InvokeScreenAutomation action request.
  * rawValue **required**

### VariableValueMap
* VariableValueMap `object`

### WorkbookCursor
* WorkbookCursor `integer`


