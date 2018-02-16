# @datafire/azure_apimanagement_apimloggers

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimloggers
```
```js
let azure_apimanagement_apimloggers = require('@datafire/azure_apimanagement_apimloggers').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_apimanagement_apimloggers.Logger_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on logger entity Azure API Management deployment.The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure EventHub.

## Actions

### Logger_ListByService
Lists a collection of loggers in the specified service instance.


```js
azure_apimanagement_apimloggers.Logger_ListByService({
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
  * $filter `string`: | Field | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoggerCollection](#loggercollection)

### Logger_Delete
Deletes the specified logger.


```js
azure_apimanagement_apimloggers.Logger_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerid **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * If-Match **required** `string`: The entity state (Etag) version of the logger to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Logger_Get
Gets the details of the logger specified by its identifier.


```js
azure_apimanagement_apimloggers.Logger_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerid **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoggerContract](#loggercontract)

### Logger_GetEntityTag
Gets the entity state (Etag) version of the logger specified by its identifier.


```js
azure_apimanagement_apimloggers.Logger_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerid **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Logger_Update
Updates an existing logger.


```js
azure_apimanagement_apimloggers.Logger_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerid": "",
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
  * loggerid **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * parameters **required** [LoggerUpdateContract](#loggerupdatecontract)
  * If-Match **required** `string`: The entity state (Etag) version of the logger to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Logger_CreateOrUpdate
Creates or Updates a logger.


```js
azure_apimanagement_apimloggers.Logger_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerid **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * parameters **required** [LoggerContract](#loggercontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LoggerContract](#loggercontract)



## Definitions

### LoggerCollection
* LoggerCollection `object`: Paged Logger list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Logger values.
    * items [LoggerContract](#loggercontract)

### LoggerContract
* LoggerContract `object`: Logger details.
  * properties [LoggerContractProperties](#loggercontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### LoggerContractProperties
* LoggerContractProperties `object`: The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.
  * credentials **required** `object`: The name and SendRule connection string of the event hub for azureEventHub logger.
  * description `string`: Logger description.
  * isBuffered `boolean`: Whether records are buffered in the logger before publishing. Default is assumed to be true.
  * loggerType **required** `string` (values: azureEventHub, applicationInsights): Logger type.

### LoggerUpdateContract
* LoggerUpdateContract `object`: Logger update contract.
  * properties [LoggerUpdateParameters](#loggerupdateparameters)

### LoggerUpdateParameters
* LoggerUpdateParameters `object`: Parameters supplied to the Update Logger operation.
  * credentials `object`: Logger credentials.
  * description `string`: Logger description.
  * isBuffered `boolean`: Whether records are buffered in the logger before publishing. Default is assumed to be true.
  * loggerType `string` (values: azureEventHub, applicationInsights): Logger type.


