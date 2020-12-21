# @datafire/azure_monitor_operations_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_operations_api
```
```js
let azure_monitor_operations_api = require('@datafire/azure_monitor_operations_api').create({
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



## Actions

### Operations_List
Lists all of the available operations from Microsoft.Insights provider.


```js
azure_monitor_operations_api.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)



## Definitions

### Operation
* Operation `object`: Microsoft Insights API operation definition.
  * display `object`: Display metadata associated with the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Insights
    * resource `string`: Resource on which the operation is performed: AlertRules, Autoscale, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Microsoft.Insights operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the Microsoft.Insights provider.
    * items [Operation](#operation)


