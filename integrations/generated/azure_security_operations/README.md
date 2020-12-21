# @datafire/azure_security_operations

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_operations
```
```js
let azure_security_operations = require('@datafire/azure_security_operations').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### Operations_List
Exposes all available operations for discovery purposes.


```js
azure_security_operations.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation

#### Output
* output [OperationList](#operationlist)



## Definitions

### Operation
* Operation `object`: Possible operation in the REST API of Microsoft.Security
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Name of the operation
  * origin `string`: Where the operation is originated

### OperationDisplay
* OperationDisplay `object`: Security operation display
  * description `string`: The description of the operation.
  * operation `string`: The display name of the security operation.
  * provider `string`: The resource provider for the operation.
  * resource `string`: The display name of the resource the operation applies to.

### OperationList
* OperationList `object`: List of possible operations for Microsoft.Security resource provider
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: List of Security operations
    * items [Operation](#operation)


