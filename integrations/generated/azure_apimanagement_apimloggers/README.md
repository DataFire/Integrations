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

.then(data => {
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| loggerType | filter | eq |     | </br>| resourceId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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
        * resourceId `string`: Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### Logger_Delete
Deletes the specified logger.


```js
azure_apimanagement_apimloggers.Logger_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerId **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * force `boolean`: Force deletion even if diagnostic is attached.
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
  "loggerId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerId **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Logger details.
  * properties `object`: The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.
    * credentials **required** `object`: The name and SendRule connection string of the event hub for azureEventHub logger.
    * description `string`: Logger description.
    * isBuffered `boolean`: Whether records are buffered in the logger before publishing. Default is assumed to be true.
    * loggerType **required** `string` (values: azureEventHub, applicationInsights): Logger type.
    * resourceId `string`: Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Logger_GetEntityTag
Gets the entity state (Etag) version of the logger specified by its identifier.


```js
azure_apimanagement_apimloggers.Logger_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "loggerId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerId **required** `string`: Logger identifier. Must be unique in the API Management service instance.
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
  "loggerId": "",
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
  * loggerId **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * parameters **required** `object`: Logger update contract.
    * properties `object`: Parameters supplied to the Update Logger operation.
      * credentials `object`: Logger credentials.
      * description `string`: Logger description.
      * isBuffered `boolean`: Whether records are buffered in the logger before publishing. Default is assumed to be true.
      * loggerType `string` (values: azureEventHub, applicationInsights): Logger type.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
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
  "loggerId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * loggerId **required** `string`: Logger identifier. Must be unique in the API Management service instance.
  * parameters **required** `object`: Logger details.
    * properties `object`: The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.
      * credentials **required** `object`: The name and SendRule connection string of the event hub for azureEventHub logger.
      * description `string`: Logger description.
      * isBuffered `boolean`: Whether records are buffered in the logger before publishing. Default is assumed to be true.
      * loggerType **required** `string` (values: azureEventHub, applicationInsights): Logger type.
      * resourceId `string`: Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Logger details.
  * properties `object`: The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.
    * credentials **required** `object`: The name and SendRule connection string of the event hub for azureEventHub logger.
    * description `string`: Logger description.
    * isBuffered `boolean`: Whether records are buffered in the logger before publishing. Default is assumed to be true.
    * loggerType **required** `string` (values: azureEventHub, applicationInsights): Logger type.
    * resourceId `string`: Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
