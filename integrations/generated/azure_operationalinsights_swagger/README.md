# @datafire/azure_operationalinsights_swagger

Client library for Azure Log Analytics

## Installation and Usage
```bash
npm install --save @datafire/azure_operationalinsights_swagger
```
```js
let azure_operationalinsights_swagger = require('@datafire/azure_operationalinsights_swagger').create({
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

This API exposes Azure Log Analytics query capabilities

## Actions

### Query_Get
Executes an Analytics query for data


```js
azure_operationalinsights_swagger.Query_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "query": "",
  "apiVersion": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics workspace.
  * query **required** `string`: The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
  * timespan `string`: Optional. The timespan over which to query data. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the query expression.
  * apiVersion **required** `string`: Client API version.

#### Output
* output [queryResults](#queryresults)

### Query_Execute
Executes an Analytics query for data. [Here](https://dev.loganalytics.io/documentation/Using-the-API) is an example for using POST with an Analytics query.


```js
azure_operationalinsights_swagger.Query_Execute({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "body": {
    "query": ""
  },
  "apiVersion": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * workspaceName **required** `string`: Name of the Log Analytics workspace.
  * body **required** [queryBody](#querybody)
  * apiVersion **required** `string`: Client API version.

#### Output
* output [queryResults](#queryresults)



## Definitions

### column
* A table column. `object`: A column in a table.
  * name `string`: The name of this column.
  * type `string`: The data type of this column.

### errorDetail
* Error details. `object`
  * additionalProperties `object`
  * code **required** `string`: The error's code.
  * message **required** `string`: A human readable error message.
  * resources `array`: Indicates resources which were responsible for the error.
    * items `string`
  * target `string`: Indicates which property in the request is responsible for the error.
  * value `string`: Indicates which value in 'target' is responsible for the error.

### errorInfo
* The code and message for an error. `object`
  * additionalProperties `object`
  * code **required** `string`: A machine readable error code.
  * details `array`: error details.
    * items [errorDetail](#errordetail)
  * innererror [errorInfo](#errorinfo)
  * message **required** `string`: A human readable error message.

### errorResponse
* Error details. `object`: Contains details when the response code indicates an error.
  * error **required** [errorInfo](#errorinfo)

### queryBody
* queryBody `object`: The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
  * query **required** [queryParam](#queryparam)
  * timespan [timespanParam](#timespanparam)
  * workspaces [workspacesParam](#workspacesparam)

### queryParam
* queryParam `string`: The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)

### queryResults
* A query response. `object`: Contains the tables, columns & rows resulting from a query.
  * tables **required** `array`: The list of tables, columns and rows.
    * items [table](#table)

### table
* A query response table. `object`: Contains the columns and rows for one table in a query response.
  * columns **required** `array`: The list of columns in this table.
    * items [column](#column)
  * name **required** `string`: The name of the table.
  * rows **required** `array`: The resulting rows from this query.
    * items `array`
      * items `string`

### timespanParam
* timespanParam `string`: Optional. The timespan over which to query data. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the query expression.

### workspacesParam
* workspacesParam `array`: Workspace IDs to include in cross-workspace queries.
  * items `string`


