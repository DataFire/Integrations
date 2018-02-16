# @datafire/azure_sql_operations

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_operations
```
```js
let azure_sql_operations = require('@datafire/azure_sql_operations').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_operations.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### Operations_List
Lists all of the available SQL Rest API operations.


```js
azure_sql_operations.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [OperationListResult](#operationlistresult)



## Definitions

### Operation
* Operation `object`: SQL REST API operation definition.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: The name of the operation being performed on this particular object.
  * origin `string` (values: user, system): The intended executor of the operation.
  * properties `object`: Additional descriptions for the operation.

### OperationDisplay
* OperationDisplay `object`: Display metadata associated with the operation.
  * description `string`: The localized friendly description for the operation.
  * operation `string`: The localized friendly name for the operation.
  * provider `string`: The localized friendly form of the resource provider name.
  * resource `string`: The localized friendly form of the resource type related to this action/operation.

### OperationListResult
* OperationListResult `object`: Result of the request to list SQL operations.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [Operation](#operation)


