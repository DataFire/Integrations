# @datafire/azure_apimanagement_apimdiagnostics

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimdiagnostics
```
```js
let azure_apimanagement_apimdiagnostics = require('@datafire/azure_apimanagement_apimdiagnostics').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_apimanagement_apimdiagnostics.Diagnostic_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on Diagnostic entity associated with your Azure API Management deployment. Diagnostics are used to log requests/responses in the APIM proxy.

## Actions

### Diagnostic_ListByService
Lists all diagnostics of the API Management service instance.


```js
azure_apimanagement_apimdiagnostics.Diagnostic_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $filter `string`: | Field       | Supported operators    | Supported functions               |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.

#### Output
* output [DiagnosticCollection](#diagnosticcollection)

### Diagnostic_Delete
Deletes the specified Diagnostic.


```js
azure_apimanagement_apimdiagnostics.Diagnostic_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "diagnosticId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Diagnostic_Get
Gets the details of the Diagnostic specified by its identifier.


```js
azure_apimanagement_apimdiagnostics.Diagnostic_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "diagnosticId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DiagnosticContract](#diagnosticcontract)

### Diagnostic_GetEntityTag
Gets the entity state (Etag) version of the Diagnostic specified by its identifier.


```js
azure_apimanagement_apimdiagnostics.Diagnostic_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "diagnosticId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Diagnostic_Update
Updates the details of the Diagnostic specified by its identifier.


```js
azure_apimanagement_apimdiagnostics.Diagnostic_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "diagnosticId": "",
  "parameters": null,
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * parameters **required** [DiagnosticContract](#diagnosticcontract)
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Diagnostic_CreateOrUpdate
Creates a new Diagnostic or updates an existing one.


```js
azure_apimanagement_apimdiagnostics.Diagnostic_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "diagnosticId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * parameters **required** [DiagnosticContract](#diagnosticcontract)
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DiagnosticContract](#diagnosticcontract)

### DiagnosticLogger_ListByService
Lists all loggers assosiated with the specified Diagnostic of the API Management service instance.


```js
azure_apimanagement_apimdiagnostics.DiagnosticLogger_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "diagnosticId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field       | Supported operators    | Supported functions               |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.

#### Output
* output `object`: Paged Logger list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Logger values.
    * items `object`: Logger details.
      * properties `object`: The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.
        * credentials **required** `object`: The name and SendRule connection string of the event hub for azureEventHub logger.
        * description `string`: Logger description.
        * isBuffered `boolean`: Whether records are buffered in the logger before publishing. Default is assumed to be true.
        * loggerType **required** `string` (values: azureEventHub, applicationInsights): Logger type.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### DiagnosticLogger_Delete
Deletes the specified Logger from Diagnostic.


```js
azure_apimanagement_apimdiagnostics.DiagnosticLogger_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "diagnosticId": "",
  "loggerid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * loggerid **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### DiagnosticLogger_CheckEntityExists
Checks that logger entity specified by identifier is associated with the diagnostics entity.


```js
azure_apimanagement_apimdiagnostics.DiagnosticLogger_CheckEntityExists({
  "resourceGroupName": "",
  "serviceName": "",
  "diagnosticId": "",
  "loggerid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * loggerid **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### DiagnosticLogger_CreateOrUpdate
Attaches a logger to a dignostic.


```js
azure_apimanagement_apimdiagnostics.DiagnosticLogger_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "diagnosticId": "",
  "loggerid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * loggerid **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Logger details.
  * properties `object`: The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.
    * credentials **required** `object`: The name and SendRule connection string of the event hub for azureEventHub logger.
    * description `string`: Logger description.
    * isBuffered `boolean`: Whether records are buffered in the logger before publishing. Default is assumed to be true.
    * loggerType **required** `string` (values: azureEventHub, applicationInsights): Logger type.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

### DiagnosticCollection
* DiagnosticCollection `object`: Paged Diagnostic list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [DiagnosticContract](#diagnosticcontract)

### DiagnosticContract
* DiagnosticContract `object`: Diagnostic details.
  * properties [DiagnosticContractProperties](#diagnosticcontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### DiagnosticContractProperties
* DiagnosticContractProperties `object`: Diagnostic Entity Properties
  * enabled **required** `boolean`: Indicates whether a diagnostic should receive data or not.


