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

.then(data => {
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Diagnostic list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Diagnostic details.
      * properties `object`: Diagnostic Entity Properties
        * alwaysLog `string` (values: allErrors): Specifies for what type of messages sampling settings should not apply.
        * backend `object`: Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
          * request `object`: Http message diagnostic settings.
          * response `object`: Http message diagnostic settings.
        * frontend `object`: Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
          * request `object`: Http message diagnostic settings.
          * response `object`: Http message diagnostic settings.
        * httpCorrelationProtocol `string` (values: None, Legacy, W3C): Sets correlation protocol to use for Application Insights diagnostics.
        * logClientIp `boolean`: Log the ClientIP. Default is false.
        * loggerId **required** `string`: Resource Id of a target logger.
        * sampling `object`: Sampling settings for Diagnostic.
          * percentage `number`: Rate of sampling for fixed-rate sampling.
          * samplingType `string` (values: fixed): Sampling type.
        * verbosity `string` (values: verbose, information, error): The verbosity level applied to traces emitted by trace policies.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

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
* output `object`: Diagnostic details.
  * properties `object`: Diagnostic Entity Properties
    * alwaysLog `string` (values: allErrors): Specifies for what type of messages sampling settings should not apply.
    * backend `object`: Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
      * request `object`: Http message diagnostic settings.
        * body `object`: Body logging settings.
          * bytes `integer`: Number of request body bytes to log.
        * headers `array`: Array of HTTP Headers to log.
          * items `string`
      * response `object`: Http message diagnostic settings.
        * body `object`: Body logging settings.
          * bytes `integer`: Number of request body bytes to log.
        * headers `array`: Array of HTTP Headers to log.
          * items `string`
    * frontend `object`: Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
      * request `object`: Http message diagnostic settings.
        * body `object`: Body logging settings.
          * bytes `integer`: Number of request body bytes to log.
        * headers `array`: Array of HTTP Headers to log.
          * items `string`
      * response `object`: Http message diagnostic settings.
        * body `object`: Body logging settings.
          * bytes `integer`: Number of request body bytes to log.
        * headers `array`: Array of HTTP Headers to log.
          * items `string`
    * httpCorrelationProtocol `string` (values: None, Legacy, W3C): Sets correlation protocol to use for Application Insights diagnostics.
    * logClientIp `boolean`: Log the ClientIP. Default is false.
    * loggerId **required** `string`: Resource Id of a target logger.
    * sampling `object`: Sampling settings for Diagnostic.
      * percentage `number`: Rate of sampling for fixed-rate sampling.
      * samplingType `string` (values: fixed): Sampling type.
    * verbosity `string` (values: verbose, information, error): The verbosity level applied to traces emitted by trace policies.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

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
  * parameters **required** `object`: Diagnostic details.
    * properties `object`: Diagnostic Entity Properties
      * alwaysLog `string` (values: allErrors): Specifies for what type of messages sampling settings should not apply.
      * backend `object`: Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
        * request `object`: Http message diagnostic settings.
          * body `object`: Body logging settings.
          * headers `array`: Array of HTTP Headers to log.
        * response `object`: Http message diagnostic settings.
          * body `object`: Body logging settings.
          * headers `array`: Array of HTTP Headers to log.
      * frontend `object`: Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
        * request `object`: Http message diagnostic settings.
          * body `object`: Body logging settings.
          * headers `array`: Array of HTTP Headers to log.
        * response `object`: Http message diagnostic settings.
          * body `object`: Body logging settings.
          * headers `array`: Array of HTTP Headers to log.
      * httpCorrelationProtocol `string` (values: None, Legacy, W3C): Sets correlation protocol to use for Application Insights diagnostics.
      * logClientIp `boolean`: Log the ClientIP. Default is false.
      * loggerId **required** `string`: Resource Id of a target logger.
      * sampling `object`: Sampling settings for Diagnostic.
        * percentage `number`: Rate of sampling for fixed-rate sampling.
        * samplingType `string` (values: fixed): Sampling type.
      * verbosity `string` (values: verbose, information, error): The verbosity level applied to traces emitted by trace policies.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
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
  * parameters **required** `object`: Diagnostic details.
    * properties `object`: Diagnostic Entity Properties
      * alwaysLog `string` (values: allErrors): Specifies for what type of messages sampling settings should not apply.
      * backend `object`: Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
        * request `object`: Http message diagnostic settings.
          * body `object`: Body logging settings.
          * headers `array`: Array of HTTP Headers to log.
        * response `object`: Http message diagnostic settings.
          * body `object`: Body logging settings.
          * headers `array`: Array of HTTP Headers to log.
      * frontend `object`: Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
        * request `object`: Http message diagnostic settings.
          * body `object`: Body logging settings.
          * headers `array`: Array of HTTP Headers to log.
        * response `object`: Http message diagnostic settings.
          * body `object`: Body logging settings.
          * headers `array`: Array of HTTP Headers to log.
      * httpCorrelationProtocol `string` (values: None, Legacy, W3C): Sets correlation protocol to use for Application Insights diagnostics.
      * logClientIp `boolean`: Log the ClientIP. Default is false.
      * loggerId **required** `string`: Resource Id of a target logger.
      * sampling `object`: Sampling settings for Diagnostic.
        * percentage `number`: Rate of sampling for fixed-rate sampling.
        * samplingType `string` (values: fixed): Sampling type.
      * verbosity `string` (values: verbose, information, error): The verbosity level applied to traces emitted by trace policies.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Diagnostic details.
  * properties `object`: Diagnostic Entity Properties
    * alwaysLog `string` (values: allErrors): Specifies for what type of messages sampling settings should not apply.
    * backend `object`: Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
      * request `object`: Http message diagnostic settings.
        * body `object`: Body logging settings.
          * bytes `integer`: Number of request body bytes to log.
        * headers `array`: Array of HTTP Headers to log.
          * items `string`
      * response `object`: Http message diagnostic settings.
        * body `object`: Body logging settings.
          * bytes `integer`: Number of request body bytes to log.
        * headers `array`: Array of HTTP Headers to log.
          * items `string`
    * frontend `object`: Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
      * request `object`: Http message diagnostic settings.
        * body `object`: Body logging settings.
          * bytes `integer`: Number of request body bytes to log.
        * headers `array`: Array of HTTP Headers to log.
          * items `string`
      * response `object`: Http message diagnostic settings.
        * body `object`: Body logging settings.
          * bytes `integer`: Number of request body bytes to log.
        * headers `array`: Array of HTTP Headers to log.
          * items `string`
    * httpCorrelationProtocol `string` (values: None, Legacy, W3C): Sets correlation protocol to use for Application Insights diagnostics.
    * logClientIp `boolean`: Log the ClientIP. Default is false.
    * loggerId **required** `string`: Resource Id of a target logger.
    * sampling `object`: Sampling settings for Diagnostic.
      * percentage `number`: Rate of sampling for fixed-rate sampling.
      * samplingType `string` (values: fixed): Sampling type.
    * verbosity `string` (values: verbose, information, error): The verbosity level applied to traces emitted by trace policies.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
