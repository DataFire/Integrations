# @datafire/azure_keyvault_providers

Client library for KeyVaultManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_keyvault_providers
```
```js
let azure_keyvault_providers = require('@datafire/azure_keyvault_providers').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_keyvault_providers.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure management API provides a RESTful set of web services that interact with Azure Key Vault.

## Actions

### Operations_List
Lists all of the available Key Vault Rest API operations.


```js
azure_keyvault_providers.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)



## Definitions

### LogSpecification
* LogSpecification `object`: Log specification of operation.
  * blobDuration `string`: Blob duration of specification.
  * displayName `string`: Display name of log specification.
  * name `string`: Name of log specification.

### Operation
* Operation `object`: Key Vault REST API operation definition.
  * display `object`: Display metadata associated with the operation.
    * description `string`: Decription of operation.
    * operation `string`: Type of operation: get, read, delete, etc.
    * provider `string`: Service provider: Microsoft Key Vault.
    * resource `string`: Resource on which the operation is performed etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}
  * origin `string`: The origin of operations.
  * properties [OperationProperties](#operationproperties)

### OperationListResult
* OperationListResult `object`: Result of the request to list Storage operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: The URL to get the next set of operations.
  * value `array`: List of Storage operations supported by the Storage resource provider.
    * items [Operation](#operation)

### OperationProperties
* OperationProperties `object`: Properties of operation, include metric specifications.
  * serviceSpecification [ServiceSpecification](#servicespecification)

### ServiceSpecification
* ServiceSpecification `object`: One property of operation, include log specifications.
  * logSpecifications `array`: Log specifications of operation.
    * items [LogSpecification](#logspecification)


