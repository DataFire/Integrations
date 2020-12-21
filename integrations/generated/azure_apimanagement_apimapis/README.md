# @datafire/azure_apimanagement_apimapis

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimapis
```
```js
let azure_apimanagement_apimapis = require('@datafire/azure_apimanagement_apimapis').create({
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

Use these REST APIs for performing operations on API entity and their Operations associated with your Azure API Management deployment.

## Actions

### Api_ListByService
Lists all APIs of the API Management service instance.


```js
azure_apimanagement_apimapis.Api_ListByService({
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| serviceUrl | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| path | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * tags `string`: Include tags in the response.
  * expandApiVersionSet `boolean`: Include full ApiVersionSet resource in response
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Api list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Api details.
      * properties `object`: Api Entity Properties
        * apiVersionSet `object`: An API Version Set contains the common configuration for a set of API Versions relating 
          * description `string`: Description of API Version Set.
          * id `string`: Identifier for existing API Version Set. Omit this value to create a new Version Set.
          * name `string`: The display Name of the API Version Set.
          * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
          * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
          * versioningScheme `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
        * displayName `string`: API name. Must be 1 to 300 characters long.
        * path **required** `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
        * protocols `array`: Describes on which protocols the operations in this API can be invoked.
          * items `string` (values: http, https)
        * serviceUrl `string`: Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
        * sourceApiId `string`: API identifier of the source API.
        * apiRevision `string`: Describes the Revision of the Api. If no value is provided, default revision 1 is created
        * apiRevisionDescription `string`: Description of the Api Revision.
        * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
        * apiVersionDescription `string`: Description of the Api Version.
        * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
        * authenticationSettings `object`: API Authentication Settings.
          * oAuth2 `object`: API OAuth2 Authentication settings details.
          * openid `object`: API OAuth2 Authentication settings details.
        * description `string`: Description of the API. May include HTML formatting tags.
        * isCurrent `boolean`: Indicates if API revision is current api revision.
        * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
        * subscriptionKeyParameterNames `object`: Subscription key parameter names details.
          * header `string`: Subscription key header name.
          * query `string`: Subscription key query string parameter name.
        * subscriptionRequired `boolean`: Specifies whether an API or Product subscription is required for accessing the API.
        * type `string` (values: http, soap): Type of API.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### Api_Delete
Deletes the specified API of the API Management service instance.


```js
azure_apimanagement_apimapis.Api_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * deleteRevisions `boolean`: Delete all revisions of the Api.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Api_Get
Gets the details of the API specified by its identifier.


```js
azure_apimanagement_apimapis.Api_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Api details.
  * properties `object`: Api Entity Properties
    * apiVersionSet `object`: An API Version Set contains the common configuration for a set of API Versions relating 
      * description `string`: Description of API Version Set.
      * id `string`: Identifier for existing API Version Set. Omit this value to create a new Version Set.
      * name `string`: The display Name of the API Version Set.
      * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
      * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
      * versioningScheme `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
    * displayName `string`: API name. Must be 1 to 300 characters long.
    * path **required** `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
    * protocols `array`: Describes on which protocols the operations in this API can be invoked.
      * items `string` (values: http, https)
    * serviceUrl `string`: Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
    * sourceApiId `string`: API identifier of the source API.
    * apiRevision `string`: Describes the Revision of the Api. If no value is provided, default revision 1 is created
    * apiRevisionDescription `string`: Description of the Api Revision.
    * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
    * apiVersionDescription `string`: Description of the Api Version.
    * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
    * authenticationSettings `object`: API Authentication Settings.
      * oAuth2 `object`: API OAuth2 Authentication settings details.
        * authorizationServerId `string`: OAuth authorization server identifier.
        * scope `string`: operations scope.
      * openid `object`: API OAuth2 Authentication settings details.
        * bearerTokenSendingMethods `array`: How to send token to the server.
          * items `string` (values: authorizationHeader, query): Form of an authorization grant, which the client uses to request the access token.
        * openidProviderId `string`: OAuth authorization server identifier.
    * description `string`: Description of the API. May include HTML formatting tags.
    * isCurrent `boolean`: Indicates if API revision is current api revision.
    * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
    * subscriptionKeyParameterNames `object`: Subscription key parameter names details.
      * header `string`: Subscription key header name.
      * query `string`: Subscription key query string parameter name.
    * subscriptionRequired `boolean`: Specifies whether an API or Product subscription is required for accessing the API.
    * type `string` (values: http, soap): Type of API.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Api_GetEntityTag
Gets the entity state (Etag) version of the API specified by its identifier.


```js
azure_apimanagement_apimapis.Api_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Api_Update
Updates the specified API of the API Management service instance.


```js
azure_apimanagement_apimapis.Api_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * parameters **required** `object`: API update contract details.
    * properties `object`: API update contract properties.
      * displayName `string`: API name.
      * path `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
      * protocols `array`: Describes on which protocols the operations in this API can be invoked.
        * items `string` (values: http, https)
      * serviceUrl `string`: Absolute URL of the backend service implementing this API.
      * apiRevision `string`: Describes the Revision of the Api. If no value is provided, default revision 1 is created
      * apiRevisionDescription `string`: Description of the Api Revision.
      * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
      * apiVersionDescription `string`: Description of the Api Version.
      * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
      * authenticationSettings `object`: API Authentication Settings.
        * oAuth2 `object`: API OAuth2 Authentication settings details.
          * authorizationServerId `string`: OAuth authorization server identifier.
          * scope `string`: operations scope.
        * openid `object`: API OAuth2 Authentication settings details.
          * bearerTokenSendingMethods `array`: How to send token to the server.
          * openidProviderId `string`: OAuth authorization server identifier.
      * description `string`: Description of the API. May include HTML formatting tags.
      * isCurrent `boolean`: Indicates if API revision is current api revision.
      * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
      * subscriptionKeyParameterNames `object`: Subscription key parameter names details.
        * header `string`: Subscription key header name.
        * query `string`: Subscription key query string parameter name.
      * subscriptionRequired `boolean`: Specifies whether an API or Product subscription is required for accessing the API.
      * type `string` (values: http, soap): Type of API.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Api_CreateOrUpdate
Creates new or updates existing specified API of the API Management service instance.


```js
azure_apimanagement_apimapis.Api_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * parameters **required** `object`: API Create or Update Parameters.
    * properties `object`: Api Create or Update Properties.
      * apiType `string` (values: http, soap): Type of Api to create. 
      * format `string` (values: wadl-xml, wadl-link-json, swagger-json, swagger-link-json, wsdl, wsdl-link, openapi, openapi+json, openapi-link, openapi+json-link): Format of the Content in which the API is getting imported.
      * value `string`: Content value when Importing an API.
      * wsdlSelector `object`: Criteria to limit import of WSDL to a subset of the document.
        * wsdlEndpointName `string`: Name of endpoint(port) to import from WSDL
        * wsdlServiceName `string`: Name of service to import from WSDL
      * apiVersionSet `object`: An API Version Set contains the common configuration for a set of API Versions relating 
        * description `string`: Description of API Version Set.
        * id `string`: Identifier for existing API Version Set. Omit this value to create a new Version Set.
        * name `string`: The display Name of the API Version Set.
        * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
        * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
        * versioningScheme `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
      * displayName `string`: API name. Must be 1 to 300 characters long.
      * path **required** `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
      * protocols `array`: Describes on which protocols the operations in this API can be invoked.
        * items `string` (values: http, https)
      * serviceUrl `string`: Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
      * sourceApiId `string`: API identifier of the source API.
      * apiRevision `string`: Describes the Revision of the Api. If no value is provided, default revision 1 is created
      * apiRevisionDescription `string`: Description of the Api Revision.
      * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
      * apiVersionDescription `string`: Description of the Api Version.
      * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
      * authenticationSettings `object`: API Authentication Settings.
        * oAuth2 `object`: API OAuth2 Authentication settings details.
          * authorizationServerId `string`: OAuth authorization server identifier.
          * scope `string`: operations scope.
        * openid `object`: API OAuth2 Authentication settings details.
          * bearerTokenSendingMethods `array`: How to send token to the server.
          * openidProviderId `string`: OAuth authorization server identifier.
      * description `string`: Description of the API. May include HTML formatting tags.
      * isCurrent `boolean`: Indicates if API revision is current api revision.
      * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
      * subscriptionKeyParameterNames `object`: Subscription key parameter names details.
        * header `string`: Subscription key header name.
        * query `string`: Subscription key query string parameter name.
      * subscriptionRequired `boolean`: Specifies whether an API or Product subscription is required for accessing the API.
      * type `string` (values: http, soap): Type of API.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Api details.
  * properties `object`: Api Entity Properties
    * apiVersionSet `object`: An API Version Set contains the common configuration for a set of API Versions relating 
      * description `string`: Description of API Version Set.
      * id `string`: Identifier for existing API Version Set. Omit this value to create a new Version Set.
      * name `string`: The display Name of the API Version Set.
      * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
      * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
      * versioningScheme `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
    * displayName `string`: API name. Must be 1 to 300 characters long.
    * path **required** `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
    * protocols `array`: Describes on which protocols the operations in this API can be invoked.
      * items `string` (values: http, https)
    * serviceUrl `string`: Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
    * sourceApiId `string`: API identifier of the source API.
    * apiRevision `string`: Describes the Revision of the Api. If no value is provided, default revision 1 is created
    * apiRevisionDescription `string`: Description of the Api Revision.
    * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
    * apiVersionDescription `string`: Description of the Api Version.
    * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
    * authenticationSettings `object`: API Authentication Settings.
      * oAuth2 `object`: API OAuth2 Authentication settings details.
        * authorizationServerId `string`: OAuth authorization server identifier.
        * scope `string`: operations scope.
      * openid `object`: API OAuth2 Authentication settings details.
        * bearerTokenSendingMethods `array`: How to send token to the server.
          * items `string` (values: authorizationHeader, query): Form of an authorization grant, which the client uses to request the access token.
        * openidProviderId `string`: OAuth authorization server identifier.
    * description `string`: Description of the API. May include HTML formatting tags.
    * isCurrent `boolean`: Indicates if API revision is current api revision.
    * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
    * subscriptionKeyParameterNames `object`: Subscription key parameter names details.
      * header `string`: Subscription key header name.
      * query `string`: Subscription key query string parameter name.
    * subscriptionRequired `boolean`: Specifies whether an API or Product subscription is required for accessing the API.
    * type `string` (values: http, soap): Type of API.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiDiagnostic_ListByService
Lists all diagnostics of an API.


```js
azure_apimanagement_apimapis.ApiDiagnostic_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
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

### ApiDiagnostic_Delete
Deletes the specified Diagnostic from an API.


```js
azure_apimanagement_apimapis.ApiDiagnostic_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiDiagnostic_Get
Gets the details of the Diagnostic for an API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiDiagnostic_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "diagnosticId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
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

### ApiDiagnostic_GetEntityTag
Gets the entity state (Etag) version of the Diagnostic for an API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiDiagnostic_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "diagnosticId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * diagnosticId **required** `string`: Diagnostic identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiDiagnostic_Update
Updates the details of the Diagnostic for an API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiDiagnostic_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
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

### ApiDiagnostic_CreateOrUpdate
Creates a new Diagnostic for an API or updates an existing one.


```js
azure_apimanagement_apimapis.ApiDiagnostic_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
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

### ApiIssue_ListByService
Lists all issues associated with the specified API.


```js
azure_apimanagement_apimapis.ApiIssue_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| state | filter | eq |     | </br>
  * expandCommentsAttachments `boolean`: Expand the comment attachments. 
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Issue list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Issue values.
    * items `object`: Issue Contract details.
      * properties `object`: Issue contract Properties.
        * description **required** `string`: Text describing the issue.
        * title **required** `string`: The issue title.
        * userId **required** `string`: A resource identifier for the user created the issue.
        * apiId `string`: A resource identifier for the API the issue was created for.
        * createdDate `string`: Date and time when the issue was created.
        * state `string` (values: proposed, open, removed, resolved, closed): Status of the issue.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiIssue_Delete
Deletes the specified Issue from an API.


```js
azure_apimanagement_apimapis.ApiIssue_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiIssue_Get
Gets the details of the Issue for an API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiIssue_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * expandCommentsAttachments `boolean`: Expand the comment attachments. 
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Issue Contract details.
  * properties `object`: Issue contract Properties.
    * description **required** `string`: Text describing the issue.
    * title **required** `string`: The issue title.
    * userId **required** `string`: A resource identifier for the user created the issue.
    * apiId `string`: A resource identifier for the API the issue was created for.
    * createdDate `string`: Date and time when the issue was created.
    * state `string` (values: proposed, open, removed, resolved, closed): Status of the issue.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiIssue_GetEntityTag
Gets the entity state (Etag) version of the Issue for an API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiIssue_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiIssue_Update
Updates an existing issue for an API.


```js
azure_apimanagement_apimapis.ApiIssue_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Issue update Parameters.
    * properties `object`: Issue contract Update Properties.
      * description `string`: Text describing the issue.
      * title `string`: The issue title.
      * userId `string`: A resource identifier for the user created the issue.
      * apiId `string`: A resource identifier for the API the issue was created for.
      * createdDate `string`: Date and time when the issue was created.
      * state `string` (values: proposed, open, removed, resolved, closed): Status of the issue.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiIssue_CreateOrUpdate
Creates a new Issue for an API or updates an existing one.


```js
azure_apimanagement_apimapis.ApiIssue_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Issue Contract details.
    * properties `object`: Issue contract Properties.
      * description **required** `string`: Text describing the issue.
      * title **required** `string`: The issue title.
      * userId **required** `string`: A resource identifier for the user created the issue.
      * apiId `string`: A resource identifier for the API the issue was created for.
      * createdDate `string`: Date and time when the issue was created.
      * state `string` (values: proposed, open, removed, resolved, closed): Status of the issue.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Issue Contract details.
  * properties `object`: Issue contract Properties.
    * description **required** `string`: Text describing the issue.
    * title **required** `string`: The issue title.
    * userId **required** `string`: A resource identifier for the user created the issue.
    * apiId `string`: A resource identifier for the API the issue was created for.
    * createdDate `string`: Date and time when the issue was created.
    * state `string` (values: proposed, open, removed, resolved, closed): Status of the issue.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiIssueAttachment_ListByService
Lists all attachments for the Issue associated with the specified API.


```js
azure_apimanagement_apimapis.ApiIssueAttachment_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Issue Attachment list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Issue Attachment values.
    * items `object`: Issue Attachment Contract details.
      * properties `object`: Issue Attachment contract Properties.
        * content **required** `string`: An HTTP link or Base64-encoded binary data.
        * contentFormat **required** `string`: Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
        * title **required** `string`: Filename by which the binary data will be saved.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiIssueAttachment_Delete
Deletes the specified comment from an Issue.


```js
azure_apimanagement_apimapis.ApiIssueAttachment_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "attachmentId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * attachmentId **required** `string`: Attachment identifier within an Issue. Must be unique in the current Issue.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiIssueAttachment_Get
Gets the details of the issue Attachment for an API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiIssueAttachment_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "attachmentId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * attachmentId **required** `string`: Attachment identifier within an Issue. Must be unique in the current Issue.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Issue Attachment Contract details.
  * properties `object`: Issue Attachment contract Properties.
    * content **required** `string`: An HTTP link or Base64-encoded binary data.
    * contentFormat **required** `string`: Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
    * title **required** `string`: Filename by which the binary data will be saved.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiIssueAttachment_GetEntityTag
Gets the entity state (Etag) version of the issue Attachment for an API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiIssueAttachment_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "attachmentId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * attachmentId **required** `string`: Attachment identifier within an Issue. Must be unique in the current Issue.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiIssueAttachment_CreateOrUpdate
Creates a new Attachment for the Issue in an API or updates an existing one.


```js
azure_apimanagement_apimapis.ApiIssueAttachment_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "attachmentId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * attachmentId **required** `string`: Attachment identifier within an Issue. Must be unique in the current Issue.
  * parameters **required** `object`: Issue Attachment Contract details.
    * properties `object`: Issue Attachment contract Properties.
      * content **required** `string`: An HTTP link or Base64-encoded binary data.
      * contentFormat **required** `string`: Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
      * title **required** `string`: Filename by which the binary data will be saved.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Issue Attachment Contract details.
  * properties `object`: Issue Attachment contract Properties.
    * content **required** `string`: An HTTP link or Base64-encoded binary data.
    * contentFormat **required** `string`: Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
    * title **required** `string`: Filename by which the binary data will be saved.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiIssueComment_ListByService
Lists all comments for the Issue associated with the specified API.


```js
azure_apimanagement_apimapis.ApiIssueComment_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Issue Comment list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Issue Comment values.
    * items `object`: Issue Comment Contract details.
      * properties `object`: Issue Comment contract Properties.
        * createdDate `string`: Date and time when the comment was created.
        * text **required** `string`: Comment text.
        * userId **required** `string`: A resource identifier for the user who left the comment.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiIssueComment_Delete
Deletes the specified comment from an Issue.


```js
azure_apimanagement_apimapis.ApiIssueComment_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "commentId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * commentId **required** `string`: Comment identifier within an Issue. Must be unique in the current Issue.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiIssueComment_Get
Gets the details of the issue Comment for an API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiIssueComment_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "commentId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * commentId **required** `string`: Comment identifier within an Issue. Must be unique in the current Issue.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Issue Comment Contract details.
  * properties `object`: Issue Comment contract Properties.
    * createdDate `string`: Date and time when the comment was created.
    * text **required** `string`: Comment text.
    * userId **required** `string`: A resource identifier for the user who left the comment.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiIssueComment_GetEntityTag
Gets the entity state (Etag) version of the issue Comment for an API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiIssueComment_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "commentId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * commentId **required** `string`: Comment identifier within an Issue. Must be unique in the current Issue.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiIssueComment_CreateOrUpdate
Creates a new Comment for the Issue in an API or updates an existing one.


```js
azure_apimanagement_apimapis.ApiIssueComment_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "issueId": "",
  "commentId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * commentId **required** `string`: Comment identifier within an Issue. Must be unique in the current Issue.
  * parameters **required** `object`: Issue Comment Contract details.
    * properties `object`: Issue Comment contract Properties.
      * createdDate `string`: Date and time when the comment was created.
      * text **required** `string`: Comment text.
      * userId **required** `string`: A resource identifier for the user who left the comment.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Issue Comment Contract details.
  * properties `object`: Issue Comment contract Properties.
    * createdDate `string`: Date and time when the comment was created.
    * text **required** `string`: Comment text.
    * userId **required** `string`: A resource identifier for the user who left the comment.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiOperation_ListByApi
Lists a collection of the operations for the specified API.


```js
azure_apimanagement_apimapis.ApiOperation_ListByApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| method | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| urlTemplate | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * tags `string`: Include tags in the response.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Operation list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Api Operation details.
      * properties `object`: Operation Contract Properties
        * displayName **required** `string`: Operation Name.
        * method **required** `string`: A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
        * urlTemplate **required** `string`: Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
        * description `string`: Description of the operation. May include HTML formatting tags.
        * policies `string`: Operation Policies
        * request `object`: Operation request details.
          * description `string`: Operation request description.
          * headers `array`: Collection of operation request headers.
          * queryParameters `array`: Collection of operation request query parameters.
          * representations `array`: Collection of operation request representations.
        * responses `array`: Array of Operation responses.
          * items `object`: Operation response details.
        * templateParameters `array`: Collection of URL template parameters.
          * items `object`: Operation parameters details.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiOperation_Delete
Deletes the specified operation in the API.


```js
azure_apimanagement_apimapis.ApiOperation_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperation_Get
Gets the details of the API Operation specified by its identifier.


```js
azure_apimanagement_apimapis.ApiOperation_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Api Operation details.
  * properties `object`: Operation Contract Properties
    * displayName **required** `string`: Operation Name.
    * method **required** `string`: A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
    * urlTemplate **required** `string`: Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
    * description `string`: Description of the operation. May include HTML formatting tags.
    * policies `string`: Operation Policies
    * request `object`: Operation request details.
      * description `string`: Operation request description.
      * headers `array`: Collection of operation request headers.
        * items `object`: Operation parameters details.
          * defaultValue `string`: Default parameter value.
          * description `string`: Parameter description.
          * name **required** `string`: Parameter name.
          * required `boolean`: Specifies whether parameter is required or not.
          * type **required** `string`: Parameter type.
          * values `array`: Parameter values.
      * queryParameters `array`: Collection of operation request query parameters.
        * items `object`: Operation parameters details.
          * defaultValue `string`: Default parameter value.
          * description `string`: Parameter description.
          * name **required** `string`: Parameter name.
          * required `boolean`: Specifies whether parameter is required or not.
          * type **required** `string`: Parameter type.
          * values `array`: Parameter values.
      * representations `array`: Collection of operation request representations.
        * items `object`: Operation request/response representation details.
          * contentType **required** `string`: Specifies a registered or custom content type for this representation, e.g. application/xml.
          * formParameters `array`: Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
          * sample `string`: An example of the representation.
          * schemaId `string`: Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
          * typeName `string`: Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
    * responses `array`: Array of Operation responses.
      * items `object`: Operation response details.
        * description `string`: Operation response description.
        * headers `array`: Collection of operation response headers.
          * items `object`: Operation parameters details.
        * representations `array`: Collection of operation response representations.
          * items `object`: Operation request/response representation details.
        * statusCode **required** `integer`: Operation response HTTP status code.
    * templateParameters `array`: Collection of URL template parameters.
      * items `object`: Operation parameters details.
        * defaultValue `string`: Default parameter value.
        * description `string`: Parameter description.
        * name **required** `string`: Parameter name.
        * required `boolean`: Specifies whether parameter is required or not.
        * type **required** `string`: Parameter type.
        * values `array`: Parameter values.
          * items `string`
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiOperation_GetEntityTag
Gets the entity state (Etag) version of the API operation specified by its identifier.


```js
azure_apimanagement_apimapis.ApiOperation_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperation_Update
Updates the details of the operation in the API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiOperation_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Api Operation Update Contract details.
    * properties `object`: Operation Update Contract Properties.
      * displayName `string`: Operation Name.
      * method `string`: A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
      * urlTemplate `string`: Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
      * description `string`: Description of the operation. May include HTML formatting tags.
      * policies `string`: Operation Policies
      * request `object`: Operation request details.
        * description `string`: Operation request description.
        * headers `array`: Collection of operation request headers.
          * items `object`: Operation parameters details.
        * queryParameters `array`: Collection of operation request query parameters.
          * items `object`: Operation parameters details.
        * representations `array`: Collection of operation request representations.
          * items `object`: Operation request/response representation details.
      * responses `array`: Array of Operation responses.
        * items `object`: Operation response details.
          * description `string`: Operation response description.
          * headers `array`: Collection of operation response headers.
          * representations `array`: Collection of operation response representations.
          * statusCode **required** `integer`: Operation response HTTP status code.
      * templateParameters `array`: Collection of URL template parameters.
        * items `object`: Operation parameters details.
          * defaultValue `string`: Default parameter value.
          * description `string`: Parameter description.
          * name **required** `string`: Parameter name.
          * required `boolean`: Specifies whether parameter is required or not.
          * type **required** `string`: Parameter type.
          * values `array`: Parameter values.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperation_CreateOrUpdate
Creates a new operation in the API or updates an existing one.


```js
azure_apimanagement_apimapis.ApiOperation_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Api Operation details.
    * properties `object`: Operation Contract Properties
      * displayName **required** `string`: Operation Name.
      * method **required** `string`: A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
      * urlTemplate **required** `string`: Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
      * description `string`: Description of the operation. May include HTML formatting tags.
      * policies `string`: Operation Policies
      * request `object`: Operation request details.
        * description `string`: Operation request description.
        * headers `array`: Collection of operation request headers.
          * items `object`: Operation parameters details.
        * queryParameters `array`: Collection of operation request query parameters.
          * items `object`: Operation parameters details.
        * representations `array`: Collection of operation request representations.
          * items `object`: Operation request/response representation details.
      * responses `array`: Array of Operation responses.
        * items `object`: Operation response details.
          * description `string`: Operation response description.
          * headers `array`: Collection of operation response headers.
          * representations `array`: Collection of operation response representations.
          * statusCode **required** `integer`: Operation response HTTP status code.
      * templateParameters `array`: Collection of URL template parameters.
        * items `object`: Operation parameters details.
          * defaultValue `string`: Default parameter value.
          * description `string`: Parameter description.
          * name **required** `string`: Parameter name.
          * required `boolean`: Specifies whether parameter is required or not.
          * type **required** `string`: Parameter type.
          * values `array`: Parameter values.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Api Operation details.
  * properties `object`: Operation Contract Properties
    * displayName **required** `string`: Operation Name.
    * method **required** `string`: A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
    * urlTemplate **required** `string`: Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
    * description `string`: Description of the operation. May include HTML formatting tags.
    * policies `string`: Operation Policies
    * request `object`: Operation request details.
      * description `string`: Operation request description.
      * headers `array`: Collection of operation request headers.
        * items `object`: Operation parameters details.
          * defaultValue `string`: Default parameter value.
          * description `string`: Parameter description.
          * name **required** `string`: Parameter name.
          * required `boolean`: Specifies whether parameter is required or not.
          * type **required** `string`: Parameter type.
          * values `array`: Parameter values.
      * queryParameters `array`: Collection of operation request query parameters.
        * items `object`: Operation parameters details.
          * defaultValue `string`: Default parameter value.
          * description `string`: Parameter description.
          * name **required** `string`: Parameter name.
          * required `boolean`: Specifies whether parameter is required or not.
          * type **required** `string`: Parameter type.
          * values `array`: Parameter values.
      * representations `array`: Collection of operation request representations.
        * items `object`: Operation request/response representation details.
          * contentType **required** `string`: Specifies a registered or custom content type for this representation, e.g. application/xml.
          * formParameters `array`: Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
          * sample `string`: An example of the representation.
          * schemaId `string`: Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
          * typeName `string`: Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
    * responses `array`: Array of Operation responses.
      * items `object`: Operation response details.
        * description `string`: Operation response description.
        * headers `array`: Collection of operation response headers.
          * items `object`: Operation parameters details.
        * representations `array`: Collection of operation response representations.
          * items `object`: Operation request/response representation details.
        * statusCode **required** `integer`: Operation response HTTP status code.
    * templateParameters `array`: Collection of URL template parameters.
      * items `object`: Operation parameters details.
        * defaultValue `string`: Default parameter value.
        * description `string`: Parameter description.
        * name **required** `string`: Parameter name.
        * required `boolean`: Specifies whether parameter is required or not.
        * type **required** `string`: Parameter type.
        * values `array`: Parameter values.
          * items `string`
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiOperationPolicy_ListByOperation
Get the list of policy configuration at the API Operation level.


```js
azure_apimanagement_apimapis.ApiOperationPolicy_ListByOperation({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: The response of the list policy operation.
  * nextLink `string`: Next page link if any.
  * value `array`: Policy Contract value.
    * items `object`: Policy Contract details.
      * properties `object`: Policy contract Properties.
        * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
        * value **required** `string`: Contents of the Policy as defined by the format.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiOperationPolicy_Delete
Deletes the policy configuration at the Api Operation.


```js
azure_apimanagement_apimapis.ApiOperationPolicy_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "policyId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperationPolicy_Get
Get the policy configuration at the API Operation level.


```js
azure_apimanagement_apimapis.ApiOperationPolicy_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "policyId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * format `string` (values: xml, rawxml): Policy Export Format.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
    * value **required** `string`: Contents of the Policy as defined by the format.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiOperationPolicy_GetEntityTag
Gets the entity state (Etag) version of the API operation policy specified by its identifier.


```js
azure_apimanagement_apimapis.ApiOperationPolicy_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "policyId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperationPolicy_CreateOrUpdate
Creates or updates policy configuration for the API Operation level.


```js
azure_apimanagement_apimapis.ApiOperationPolicy_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "policyId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * parameters **required** `object`: Policy Contract details.
    * properties `object`: Policy contract Properties.
      * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
      * value **required** `string`: Contents of the Policy as defined by the format.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
    * value **required** `string`: Contents of the Policy as defined by the format.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Tag_ListByOperation
Lists all Tags associated with the Operation.


```js
azure_apimanagement_apimapis.Tag_ListByOperation({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Tag list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Tag Contract details.
      * properties `object`: Tag contract Properties.
        * displayName **required** `string`: Tag name.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### Tag_DetachFromOperation
Detach the tag from the Operation.


```js
azure_apimanagement_apimapis.Tag_DetachFromOperation({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_GetByOperation
Get tag associated with the Operation.


```js
azure_apimanagement_apimapis.Tag_GetByOperation({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Tag Contract details.
  * properties `object`: Tag contract Properties.
    * displayName **required** `string`: Tag name.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Tag_GetEntityStateByOperation
Gets the entity state version of the tag specified by its identifier.


```js
azure_apimanagement_apimapis.Tag_GetEntityStateByOperation({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_AssignToOperation
Assign tag to the Operation.


```js
azure_apimanagement_apimapis.Tag_AssignToOperation({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Tag Contract details.
  * properties `object`: Tag contract Properties.
    * displayName **required** `string`: Tag name.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Operation_ListByTags
Lists a collection of operations associated with tags.


```js
azure_apimanagement_apimapis.Operation_ListByTags({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| apiName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| method | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| urlTemplate | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * includeNotTaggedOperations `boolean`: Include not tagged Operations.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Tag list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: TagResource contract properties.
      * api `object`: API contract properties for the Tag Resources.
        * id `string`: API identifier in the form /apis/{apiId}.
        * name `string`: API name.
        * path `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
        * protocols `array`: Describes on which protocols the operations in this API can be invoked.
          * items `string` (values: http, https)
        * serviceUrl `string`: Absolute URL of the backend service implementing this API.
        * apiRevision `string`: Describes the Revision of the Api. If no value is provided, default revision 1 is created
        * apiRevisionDescription `string`: Description of the Api Revision.
        * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
        * apiVersionDescription `string`: Description of the Api Version.
        * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
        * authenticationSettings `object`: API Authentication Settings.
          * oAuth2 `object`: API OAuth2 Authentication settings details.
          * openid `object`: API OAuth2 Authentication settings details.
        * description `string`: Description of the API. May include HTML formatting tags.
        * isCurrent `boolean`: Indicates if API revision is current api revision.
        * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
        * subscriptionKeyParameterNames `object`: Subscription key parameter names details.
          * header `string`: Subscription key header name.
          * query `string`: Subscription key query string parameter name.
        * subscriptionRequired `boolean`: Specifies whether an API or Product subscription is required for accessing the API.
        * type `string` (values: http, soap): Type of API.
      * operation `object`: Operation Entity contract Properties.
        * apiName `string`: Api Name.
        * apiRevision `string`: Api Revision.
        * apiVersion `string`: Api Version.
        * description `string`: Operation Description.
        * id `string`: Identifier of the operation in form /operations/{operationId}.
        * method `string`: A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
        * name `string`: Operation name.
        * urlTemplate `string`: Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
      * product `object`: Product profile.
        * id `string`: Identifier of the product in the form of /products/{productId}
        * name **required** `string`: Product name.
        * approvalRequired `boolean`: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of true.
        * description `string`: Product description. May include HTML formatting tags.
        * state `string` (values: notPublished, published): whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
        * subscriptionRequired `boolean`: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
        * subscriptionsLimit `integer`: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of true.
        * terms `string`: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.
      * tag **required** `object`: Contract defining the Tag property in the Tag Resource Contract
        * id `string`: Tag identifier
        * name `string`: Tag Name

### ApiPolicy_ListByApi
Get the policy configuration at the API level.


```js
azure_apimanagement_apimapis.ApiPolicy_ListByApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: The response of the list policy operation.
  * nextLink `string`: Next page link if any.
  * value `array`: Policy Contract value.
    * items `object`: Policy Contract details.
      * properties `object`: Policy contract Properties.
        * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
        * value **required** `string`: Contents of the Policy as defined by the format.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiPolicy_Delete
Deletes the policy configuration at the Api.


```js
azure_apimanagement_apimapis.ApiPolicy_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "policyId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiPolicy_Get
Get the policy configuration at the API level.


```js
azure_apimanagement_apimapis.ApiPolicy_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "policyId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * format `string` (values: xml, rawxml): Policy Export Format.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
    * value **required** `string`: Contents of the Policy as defined by the format.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiPolicy_GetEntityTag
Gets the entity state (Etag) version of the API policy specified by its identifier.


```js
azure_apimanagement_apimapis.ApiPolicy_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "policyId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiPolicy_CreateOrUpdate
Creates or updates policy configuration for the API.


```js
azure_apimanagement_apimapis.ApiPolicy_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "policyId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * parameters **required** `object`: Policy Contract details.
    * properties `object`: Policy contract Properties.
      * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
      * value **required** `string`: Contents of the Policy as defined by the format.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * format `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
    * value **required** `string`: Contents of the Policy as defined by the format.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiProduct_ListByApis
Lists all Products, which the API is part of.


```js
azure_apimanagement_apimapis.ApiProduct_ListByApis({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Products list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Product details.
      * properties `object`: Product profile.
        * displayName **required** `string`: Product name.
        * approvalRequired `boolean`: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of true.
        * description `string`: Product description. May include HTML formatting tags.
        * state `string` (values: notPublished, published): whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
        * subscriptionRequired `boolean`: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
        * subscriptionsLimit `integer`: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of true.
        * terms `string`: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiRelease_ListByService
Lists all releases of an API. An API release is created when making an API Revision current. Releases are also used to rollback to previous revisions. Results will be paged and can be constrained by the $top and $skip parameters.


```js
azure_apimanagement_apimapis.ApiRelease_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| notes | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged ApiRelease list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: ApiRelease details.
      * properties `object`: API Release details
        * apiId `string`: Identifier of the API the release belongs to.
        * createdDateTime `string`: The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
        * notes `string`: Release Notes
        * updatedDateTime `string`: The time the API release was updated.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiRelease_Delete
Deletes the specified release in the API.


```js
azure_apimanagement_apimapis.ApiRelease_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "releaseId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * releaseId **required** `string`: Release identifier within an API. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiRelease_Get
Returns the details of an API release.


```js
azure_apimanagement_apimapis.ApiRelease_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "releaseId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * releaseId **required** `string`: Release identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: ApiRelease details.
  * properties `object`: API Release details
    * apiId `string`: Identifier of the API the release belongs to.
    * createdDateTime `string`: The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
    * notes `string`: Release Notes
    * updatedDateTime `string`: The time the API release was updated.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiRelease_GetEntityTag
Returns the etag of an API release.


```js
azure_apimanagement_apimapis.ApiRelease_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "releaseId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * releaseId **required** `string`: Release identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiRelease_Update
Updates the details of the release of the API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiRelease_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "releaseId": "",
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * releaseId **required** `string`: Release identifier within an API. Must be unique in the current API Management service instance.
  * parameters **required** `object`: ApiRelease details.
    * properties `object`: API Release details
      * apiId `string`: Identifier of the API the release belongs to.
      * createdDateTime `string`: The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
      * notes `string`: Release Notes
      * updatedDateTime `string`: The time the API release was updated.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiRelease_CreateOrUpdate
Creates a new Release for the API.


```js
azure_apimanagement_apimapis.ApiRelease_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "releaseId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * releaseId **required** `string`: Release identifier within an API. Must be unique in the current API Management service instance.
  * parameters **required** `object`: ApiRelease details.
    * properties `object`: API Release details
      * apiId `string`: Identifier of the API the release belongs to.
      * createdDateTime `string`: The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
      * notes `string`: Release Notes
      * updatedDateTime `string`: The time the API release was updated.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: ApiRelease details.
  * properties `object`: API Release details
    * apiId `string`: Identifier of the API the release belongs to.
    * createdDateTime `string`: The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
    * notes `string`: Release Notes
    * updatedDateTime `string`: The time the API release was updated.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiRevision_ListByService
Lists all revisions of an API.


```js
azure_apimanagement_apimapis.ApiRevision_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| apiRevision | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Api Revision list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Summary of revision metadata.
      * apiId `string`: Identifier of the API Revision.
      * apiRevision `string`: Revision number of API.
      * createdDateTime `string`: The time the API Revision was created. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
      * description `string`: Description of the API Revision.
      * isCurrent `boolean`: Indicates if API revision is accessible via the gateway.
      * isOnline `boolean`: Indicates if API revision is the current api revision.
      * privateUrl `string`: Gateway URL for accessing the non-current API Revision.
      * updatedDateTime `string`: The time the API Revision were updated. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.

### ApiSchema_ListByApi
Get the schema configuration at the API level.


```js
azure_apimanagement_apimapis.ApiSchema_ListByApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| contentType | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: The response of the list schema operation.
  * nextLink `string`: Next page link if any.
  * value `array`: Api Schema Contract value.
    * items `object`: Schema Contract details.
      * properties `object`: API Schema create or update contract Properties.
        * contentType **required** `string`: Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
        * document `object`: Schema Document Properties.
          * definitions `object`: Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
          * value `string`: Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiSchema_Delete
Deletes the schema configuration at the Api.


```js
azure_apimanagement_apimapis.ApiSchema_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "schemaId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * schemaId **required** `string`: Schema identifier within an API. Must be unique in the current API Management service instance.
  * force `boolean`: If true removes all references to the schema before deleting it.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiSchema_Get
Get the schema configuration at the API level.


```js
azure_apimanagement_apimapis.ApiSchema_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "schemaId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * schemaId **required** `string`: Schema identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Schema Contract details.
  * properties `object`: API Schema create or update contract Properties.
    * contentType **required** `string`: Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
    * document `object`: Schema Document Properties.
      * definitions `object`: Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
      * value `string`: Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiSchema_GetEntityTag
Gets the entity state (Etag) version of the schema specified by its identifier.


```js
azure_apimanagement_apimapis.ApiSchema_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "schemaId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * schemaId **required** `string`: Schema identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiSchema_CreateOrUpdate
Creates or updates schema configuration for the API.


```js
azure_apimanagement_apimapis.ApiSchema_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "schemaId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * schemaId **required** `string`: Schema identifier within an API. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Schema Contract details.
    * properties `object`: API Schema create or update contract Properties.
      * contentType **required** `string`: Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
      * document `object`: Schema Document Properties.
        * definitions `object`: Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
        * value `string`: Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Schema Contract details.
  * properties `object`: API Schema create or update contract Properties.
    * contentType **required** `string`: Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
    * document `object`: Schema Document Properties.
      * definitions `object`: Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
      * value `string`: Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiTagDescription_ListByService
Lists all Tags descriptions in scope of API. Model similar to swagger - tagDescription is defined on API level but tag may be assigned to the Operations


```js
azure_apimanagement_apimapis.ApiTagDescription_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged TagDescription list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Contract details.
      * properties `object`: TagDescription contract Properties.
        * displayName `string`: Tag name.
        * tagId `string`: Identifier of the tag in the form of /tags/{tagId}
        * description `string`: Description of the Tag.
        * externalDocsDescription `string`: Description of the external resources describing the tag.
        * externalDocsUrl `string`: Absolute URL of external resources describing the tag.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiTagDescription_Delete
Delete tag description for the Api.


```js
azure_apimanagement_apimapis.ApiTagDescription_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "tagDescriptionId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagDescriptionId **required** `string`: Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiTagDescription_Get
Get Tag description in scope of API


```js
azure_apimanagement_apimapis.ApiTagDescription_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "tagDescriptionId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagDescriptionId **required** `string`: Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Contract details.
  * properties `object`: TagDescription contract Properties.
    * displayName `string`: Tag name.
    * tagId `string`: Identifier of the tag in the form of /tags/{tagId}
    * description `string`: Description of the Tag.
    * externalDocsDescription `string`: Description of the external resources describing the tag.
    * externalDocsUrl `string`: Absolute URL of external resources describing the tag.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiTagDescription_GetEntityTag
Gets the entity state version of the tag specified by its identifier.


```js
azure_apimanagement_apimapis.ApiTagDescription_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "tagDescriptionId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagDescriptionId **required** `string`: Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiTagDescription_CreateOrUpdate
Create/Update tag description in scope of the Api.


```js
azure_apimanagement_apimapis.ApiTagDescription_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "tagDescriptionId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagDescriptionId **required** `string`: Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
  * parameters **required** `object`: Parameters supplied to the Create TagDescription operation.
    * properties `object`: Parameters supplied to the Create TagDescription operation.
      * description `string`: Description of the Tag.
      * externalDocsDescription `string`: Description of the external resources describing the tag.
      * externalDocsUrl `string`: Absolute URL of external resources describing the tag.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Contract details.
  * properties `object`: TagDescription contract Properties.
    * displayName `string`: Tag name.
    * tagId `string`: Identifier of the tag in the form of /tags/{tagId}
    * description `string`: Description of the Tag.
    * externalDocsDescription `string`: Description of the external resources describing the tag.
    * externalDocsUrl `string`: Absolute URL of external resources describing the tag.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Tag_ListByApi
Lists all Tags associated with the API.


```js
azure_apimanagement_apimapis.Tag_ListByApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Tag list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Tag Contract details.
      * properties `object`: Tag contract Properties.
        * displayName **required** `string`: Tag name.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### Tag_DetachFromApi
Detach the tag from the Api.


```js
azure_apimanagement_apimapis.Tag_DetachFromApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_GetByApi
Get tag associated with the API.


```js
azure_apimanagement_apimapis.Tag_GetByApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Tag Contract details.
  * properties `object`: Tag contract Properties.
    * displayName **required** `string`: Tag name.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Tag_GetEntityStateByApi
Gets the entity state version of the tag specified by its identifier.


```js
azure_apimanagement_apimapis.Tag_GetEntityStateByApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_AssignToApi
Assign tag to the Api.


```js
azure_apimanagement_apimapis.Tag_AssignToApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Tag Contract details.
  * properties `object`: Tag contract Properties.
    * displayName **required** `string`: Tag name.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
