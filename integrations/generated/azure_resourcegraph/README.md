# @datafire/azure_resourcegraph

Client library for Azure Resource Graph

## Installation and Usage
```bash
npm install --save @datafire/azure_resourcegraph
```
```js
let azure_resourcegraph = require('@datafire/azure_resourcegraph').create({
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

Azure Resource Graph API Reference

## Actions

### Operations_List
Lists all of the available REST API operations.


```js
azure_resourcegraph.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version.

#### Output
* output [OperationListResult](#operationlistresult)

### Resources
Queries the resources managed by Azure Resource Manager for all subscriptions specified in the request.


```js
azure_resourcegraph.Resources({
  "api-version": "",
  "query": {
    "subscriptions": [],
    "query": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version.
  * query **required** [QueryRequest](#queryrequest)

#### Output
* output [QueryResponse](#queryresponse)



## Definitions

### Column
* Column `object`: Query result column descriptor.
  * name **required** `string`: Column name.
  * type **required** [ColumnDataType](#columndatatype)

### ColumnDataType
* ColumnDataType `string` (values: string, integer, number, boolean, object): Data type of a column in a table.

### Error
* Error info. `object`: Error details.
  * code **required** `string`: Error code identifying the specific error.
  * details `array`: Error details
    * items [ErrorDetails](#errordetails)
  * message **required** `string`: A human readable error message.

### ErrorDetails
* Error details. `object`
  * code **required** `string`: Error code identifying the specific error.
  * message **required** `string`: A human readable error message.

### ErrorResponse
* Error response. `object`: An error response from the API.
  * error **required** [Error](#error)

### Facet
* Facet `object`: A facet containing additional statistics on the response of a query. Can be either FacetResult or FacetError.
  * expression **required** `string`: Facet expression, same as in the corresponding facet request.
  * resultType **required** `string`: Result type

### FacetError
* FacetError `object`: A facet whose execution resulted in an error.
  * errors **required** `array`: An array containing detected facet errors with details.
    * items [ErrorDetails](#errordetails)
  * expression **required** `string`: Facet expression, same as in the corresponding facet request.
  * resultType **required** `string`: Result type

### FacetRequest
* FacetRequest `object`: A request to compute additional statistics (facets) over the query results.
  * expression **required** `string`: The column or list of columns to summarize by
  * options [FacetRequestOptions](#facetrequestoptions)

### FacetRequestOptions
* FacetRequestOptions `object`: The options for facet evaluation
  * $top `integer`: The maximum number of facet rows that should be returned.
  * filter `string`: Specifies the filter condition for the 'where' clause which will be run on main query's result, just before the actual faceting.
  * sortBy `string`: The column name or query expression to sort on. Defaults to count if not present.
  * sortOrder `string` (values: asc, desc): The sorting order by the selected column (count by default).

### FacetResult
* FacetResult `object`: Successfully executed facet containing additional statistics on the response of a query.
  * count **required** `integer`: Number of records returned in the facet response.
  * totalRecords **required** `integer`: Number of total records in the facet results.
  * expression **required** `string`: Facet expression, same as in the corresponding facet request.
  * resultType **required** `string`: Result type

### Operation
* Operation `object`: Resource Graph REST API operation definition.
  * display `object`: Display metadata associated with the operation.
    * description `string`: Description for the operation.
    * operation `string`: Type of operation: get, read, delete, etc.
    * provider `string`: Service provider: Microsoft Resource Graph.
    * resource `string`: Resource on which the operation is performed etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}
  * origin `string`: The origin of operations.

### OperationListResult
* OperationListResult `object`: Result of the request to list Resource Graph operations. It contains a list of operations and a URL link to get the next set of results.
  * value `array`: List of Resource Graph operations supported by the Resource Graph resource provider.
    * items [Operation](#operation)

### QueryRequest
* QueryRequest `object`: Describes a query to be executed.
  * facets `array`: An array of facet requests to be computed against the query result.
    * items [FacetRequest](#facetrequest)
  * options [QueryRequestOptions](#queryrequestoptions)
  * query **required** `string`: The resources query.
  * subscriptions **required** `array`: Azure subscriptions against which to execute the query.
    * items `string`: Subscription Id.

### QueryRequestOptions
* QueryRequestOptions `object`: The options for query evaluation
  * $skip `integer`: The number of rows to skip from the beginning of the results. Overrides the next page offset when ```$skipToken``` property is present.
  * $skipToken `string`: Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.
  * $top `integer`: The maximum number of rows that the query should return. Overrides the page size when ```$skipToken``` property is present.
  * resultFormat `string` (values: table, objectArray): Defines in which format query result returned.

### QueryResponse
* QueryResponse `object`: Query result.
  * $skipToken `string`: When present, the value can be passed to a subsequent query call (together with the same query and subscriptions used in the current request) to retrieve the next page of data.
  * count **required** `integer`: Number of records returned in the current response. In the case of paging, this is the number of records in the current page.
  * facets `array`: Query facets.
    * items [Facet](#facet)
  * resultTruncated **required** `string` (values: true, false): Indicates whether the query results are truncated.
  * totalRecords **required** `integer`: Number of total records matching the query.

### Row
* Row `array`: Query result row.
  * items `object`: Cell value.

### Table
* Table `object`: Query output in tabular format.
  * columns **required** `array`: Query result column descriptors.
    * items [Column](#column)
  * rows **required** `array`: Query result rows.
    * items [Row](#row)


