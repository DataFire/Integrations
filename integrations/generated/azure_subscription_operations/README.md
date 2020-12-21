# @datafire/azure_subscription_operations

Client library for SubscriptionClient

## Installation and Usage
```bash
npm install --save @datafire/azure_subscription_operations
```
```js
let azure_subscription_operations = require('@datafire/azure_subscription_operations').create({
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

Subscription client provides an interface to create and manage Azure subscriptions programmatically.

## Actions

### Operations_List
Lists all of the available Microsoft.Subscription API operations.


```js
azure_subscription_operations.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2015-06-01

#### Output
* output [OperationListResult](#operationlistresult)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### Operation
* Operation `object`: REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Subscription
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations.
    * items [Operation](#operation)


