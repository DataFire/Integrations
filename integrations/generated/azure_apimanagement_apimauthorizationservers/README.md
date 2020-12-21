# @datafire/azure_apimanagement_apimauthorizationservers

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimauthorizationservers
```
```js
let azure_apimanagement_apimauthorizationservers = require('@datafire/azure_apimanagement_apimauthorizationservers').create({
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

Use these REST APIs for managing OAuth2 servers configuration in your Azure API Management deployment. OAuth 2.0 can be used to authorize developer accounts for Azure API Management. For more information refer to [How to OAuth2](https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-oauth2).

## Actions

### AuthorizationServer_ListByService
Lists a collection of authorization servers defined within a service instance.


```js
azure_apimanagement_apimauthorizationservers.AuthorizationServer_ListByService({
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged OAuth2 Authorization Servers list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: External OAuth authorization server settings.
      * properties `object`: External OAuth authorization server settings Properties.
        * authorizationEndpoint **required** `string`: OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
        * clientId **required** `string`: Client or app id registered with this authorization server.
        * clientRegistrationEndpoint **required** `string`: Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
        * clientSecret `string`: Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
        * displayName **required** `string`: User-friendly authorization server name.
        * grantTypes **required** `array`: Form of an authorization grant, which the client uses to request the access token.
          * items `string` (values: authorizationCode, implicit, resourceOwnerPassword, clientCredentials)
        * authorizationMethods `array`: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
          * items `string` (values: HEAD, OPTIONS, TRACE, GET, POST, PUT, PATCH, DELETE)
        * bearerTokenSendingMethods `array`: Specifies the mechanism by which access token is passed to the API. 
          * items `string` (values: authorizationHeader, query)
        * clientAuthenticationMethod `array`: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
          * items `string` (values: Basic, Body)
        * defaultScope `string`: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
        * description `string`: Description of the authorization server. Can contain HTML formatting tags.
        * resourceOwnerPassword `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
        * resourceOwnerUsername `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
        * supportState `boolean`: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
        * tokenBodyParameters `array`: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
          * items `object`: OAuth acquire token request body parameter (www-url-form-encoded).
        * tokenEndpoint `string`: OAuth token endpoint. Contains absolute URI to entity being referenced.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### AuthorizationServer_Delete
Deletes specific authorization server instance.


```js
azure_apimanagement_apimauthorizationservers.AuthorizationServer_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "authsid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * authsid **required** `string`: Identifier of the authorization server.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### AuthorizationServer_Get
Gets the details of the authorization server specified by its identifier.


```js
azure_apimanagement_apimauthorizationservers.AuthorizationServer_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "authsid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * authsid **required** `string`: Identifier of the authorization server.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: External OAuth authorization server settings.
  * properties `object`: External OAuth authorization server settings Properties.
    * authorizationEndpoint **required** `string`: OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
    * clientId **required** `string`: Client or app id registered with this authorization server.
    * clientRegistrationEndpoint **required** `string`: Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
    * clientSecret `string`: Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
    * displayName **required** `string`: User-friendly authorization server name.
    * grantTypes **required** `array`: Form of an authorization grant, which the client uses to request the access token.
      * items `string` (values: authorizationCode, implicit, resourceOwnerPassword, clientCredentials)
    * authorizationMethods `array`: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
      * items `string` (values: HEAD, OPTIONS, TRACE, GET, POST, PUT, PATCH, DELETE)
    * bearerTokenSendingMethods `array`: Specifies the mechanism by which access token is passed to the API. 
      * items `string` (values: authorizationHeader, query)
    * clientAuthenticationMethod `array`: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
      * items `string` (values: Basic, Body)
    * defaultScope `string`: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
    * description `string`: Description of the authorization server. Can contain HTML formatting tags.
    * resourceOwnerPassword `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
    * resourceOwnerUsername `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
    * supportState `boolean`: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
    * tokenBodyParameters `array`: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
      * items `object`: OAuth acquire token request body parameter (www-url-form-encoded).
        * name **required** `string`: body parameter name.
        * value **required** `string`: body parameter value.
    * tokenEndpoint `string`: OAuth token endpoint. Contains absolute URI to entity being referenced.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### AuthorizationServer_GetEntityTag
Gets the entity state (Etag) version of the authorizationServer specified by its identifier.


```js
azure_apimanagement_apimauthorizationservers.AuthorizationServer_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "authsid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * authsid **required** `string`: Identifier of the authorization server.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### AuthorizationServer_Update
Updates the details of the authorization server specified by its identifier.


```js
azure_apimanagement_apimauthorizationservers.AuthorizationServer_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "authsid": "",
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
  * authsid **required** `string`: Identifier of the authorization server.
  * parameters **required** `object`: External OAuth authorization server settings.
    * properties `object`: External OAuth authorization server Update settings contract.
      * authorizationEndpoint `string`: OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
      * clientId `string`: Client or app id registered with this authorization server.
      * clientRegistrationEndpoint `string`: Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
      * clientSecret `string`: Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
      * displayName `string`: User-friendly authorization server name.
      * grantTypes `array`: Form of an authorization grant, which the client uses to request the access token.
        * items `string` (values: authorizationCode, implicit, resourceOwnerPassword, clientCredentials)
      * authorizationMethods `array`: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
        * items `string` (values: HEAD, OPTIONS, TRACE, GET, POST, PUT, PATCH, DELETE)
      * bearerTokenSendingMethods `array`: Specifies the mechanism by which access token is passed to the API. 
        * items `string` (values: authorizationHeader, query)
      * clientAuthenticationMethod `array`: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
        * items `string` (values: Basic, Body)
      * defaultScope `string`: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
      * description `string`: Description of the authorization server. Can contain HTML formatting tags.
      * resourceOwnerPassword `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
      * resourceOwnerUsername `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
      * supportState `boolean`: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
      * tokenBodyParameters `array`: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
        * items `object`: OAuth acquire token request body parameter (www-url-form-encoded).
          * name **required** `string`: body parameter name.
          * value **required** `string`: body parameter value.
      * tokenEndpoint `string`: OAuth token endpoint. Contains absolute URI to entity being referenced.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### AuthorizationServer_CreateOrUpdate
Creates new authorization server or updates an existing authorization server.


```js
azure_apimanagement_apimauthorizationservers.AuthorizationServer_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "authsid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * authsid **required** `string`: Identifier of the authorization server.
  * parameters **required** `object`: External OAuth authorization server settings.
    * properties `object`: External OAuth authorization server settings Properties.
      * authorizationEndpoint **required** `string`: OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
      * clientId **required** `string`: Client or app id registered with this authorization server.
      * clientRegistrationEndpoint **required** `string`: Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
      * clientSecret `string`: Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
      * displayName **required** `string`: User-friendly authorization server name.
      * grantTypes **required** `array`: Form of an authorization grant, which the client uses to request the access token.
        * items `string` (values: authorizationCode, implicit, resourceOwnerPassword, clientCredentials)
      * authorizationMethods `array`: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
        * items `string` (values: HEAD, OPTIONS, TRACE, GET, POST, PUT, PATCH, DELETE)
      * bearerTokenSendingMethods `array`: Specifies the mechanism by which access token is passed to the API. 
        * items `string` (values: authorizationHeader, query)
      * clientAuthenticationMethod `array`: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
        * items `string` (values: Basic, Body)
      * defaultScope `string`: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
      * description `string`: Description of the authorization server. Can contain HTML formatting tags.
      * resourceOwnerPassword `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
      * resourceOwnerUsername `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
      * supportState `boolean`: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
      * tokenBodyParameters `array`: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
        * items `object`: OAuth acquire token request body parameter (www-url-form-encoded).
          * name **required** `string`: body parameter name.
          * value **required** `string`: body parameter value.
      * tokenEndpoint `string`: OAuth token endpoint. Contains absolute URI to entity being referenced.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: External OAuth authorization server settings.
  * properties `object`: External OAuth authorization server settings Properties.
    * authorizationEndpoint **required** `string`: OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
    * clientId **required** `string`: Client or app id registered with this authorization server.
    * clientRegistrationEndpoint **required** `string`: Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
    * clientSecret `string`: Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
    * displayName **required** `string`: User-friendly authorization server name.
    * grantTypes **required** `array`: Form of an authorization grant, which the client uses to request the access token.
      * items `string` (values: authorizationCode, implicit, resourceOwnerPassword, clientCredentials)
    * authorizationMethods `array`: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
      * items `string` (values: HEAD, OPTIONS, TRACE, GET, POST, PUT, PATCH, DELETE)
    * bearerTokenSendingMethods `array`: Specifies the mechanism by which access token is passed to the API. 
      * items `string` (values: authorizationHeader, query)
    * clientAuthenticationMethod `array`: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
      * items `string` (values: Basic, Body)
    * defaultScope `string`: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
    * description `string`: Description of the authorization server. Can contain HTML formatting tags.
    * resourceOwnerPassword `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
    * resourceOwnerUsername `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
    * supportState `boolean`: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
    * tokenBodyParameters `array`: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
      * items `object`: OAuth acquire token request body parameter (www-url-form-encoded).
        * name **required** `string`: body parameter name.
        * value **required** `string`: body parameter value.
    * tokenEndpoint `string`: OAuth token endpoint. Contains absolute URI to entity being referenced.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### AuthorizationServer_ListSecrets
Gets the client secret details of the authorization server.


```js
azure_apimanagement_apimauthorizationservers.AuthorizationServer_ListSecrets({
  "resourceGroupName": "",
  "serviceName": "",
  "authsid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * authsid **required** `string`: Identifier of the authorization server.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
  * clientSecret `string`: Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.



## Definitions

*This integration has no definitions*
