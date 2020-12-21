# @datafire/azure_applicationinsights_aioperations_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_aioperations_api
```
```js
let azure_applicationinsights_aioperations_api = require('@datafire/azure_applicationinsights_aioperations_api').create({
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

Azure Application Insights client for web test based alerting.

## Actions

### Operations_List
Lists all of the available insights REST API operations.


```js
azure_applicationinsights_aioperations_api.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [OperationListResult](#operationlistresult)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Error response indicates Insights service is not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### Operation
* Operation `object`: CDN REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Cdn
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list CDN operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of CDN operations supported by the CDN resource provider.
    * items [Operation](#operation)


