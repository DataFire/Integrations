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

azure_apimanagement_apimauthorizationservers.AuthorizationServer_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
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
  * $filter `string`: | Field | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationServerCollection](#authorizationservercollection)

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
  * If-Match **required** `string`: The entity state (Etag) version of the authentication server to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
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
* output [AuthorizationServerContract](#authorizationservercontract)

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
  * parameters **required** [AuthorizationServerUpdateContract](#authorizationserverupdatecontract)
  * If-Match **required** `string`: The entity state (Etag) version of the authorization server to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
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
  * parameters **required** [AuthorizationServerContract](#authorizationservercontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationServerContract](#authorizationservercontract)



## Definitions

### AuthorizationServerCollection
* AuthorizationServerCollection `object`: Paged OAuth2 Authorization Servers list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [AuthorizationServerContract](#authorizationservercontract)

### AuthorizationServerContract
* AuthorizationServerContract `object`: External OAuth authorization server settings.
  * properties [AuthorizationServerContractProperties](#authorizationservercontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### AuthorizationServerContractBaseProperties
* AuthorizationServerContractBaseProperties `object`: External OAuth authorization server Update settings contract.
  * authorizationMethods `array`: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
    * items `string` (values: HEAD, OPTIONS, TRACE, GET, POST, PUT, PATCH, DELETE)
  * bearerTokenSendingMethods `array`: Specifies the mechanism by which access token is passed to the API. 
    * items `string` (values: authorizationHeader, query)
  * clientAuthenticationMethod `array`: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
    * items `string` (values: Basic, Body)
  * clientSecret `string`: Client or app secret registered with this authorization server.
  * defaultScope `string`: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
  * description `string`: Description of the authorization server. Can contain HTML formatting tags.
  * resourceOwnerPassword `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
  * resourceOwnerUsername `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
  * supportState `boolean`: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
  * tokenBodyParameters `array`: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
    * items [TokenBodyParameterContract](#tokenbodyparametercontract)
  * tokenEndpoint `string`: OAuth token endpoint. Contains absolute URI to entity being referenced.

### AuthorizationServerContractProperties
* AuthorizationServerContractProperties `object`: External OAuth authorization server settings Properties.
  * authorizationEndpoint **required** `string`: OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
  * clientId **required** `string`: Client or app id registered with this authorization server.
  * clientRegistrationEndpoint **required** `string`: Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
  * displayName **required** `string`: User-friendly authorization server name.
  * grantTypes **required** `array`: Form of an authorization grant, which the client uses to request the access token.
    * items `string` (values: authorizationCode, implicit, resourceOwnerPassword, clientCredentials)
  * authorizationMethods `array`: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
    * items `string` (values: HEAD, OPTIONS, TRACE, GET, POST, PUT, PATCH, DELETE)
  * bearerTokenSendingMethods `array`: Specifies the mechanism by which access token is passed to the API. 
    * items `string` (values: authorizationHeader, query)
  * clientAuthenticationMethod `array`: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
    * items `string` (values: Basic, Body)
  * clientSecret `string`: Client or app secret registered with this authorization server.
  * defaultScope `string`: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
  * description `string`: Description of the authorization server. Can contain HTML formatting tags.
  * resourceOwnerPassword `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
  * resourceOwnerUsername `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
  * supportState `boolean`: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
  * tokenBodyParameters `array`: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
    * items [TokenBodyParameterContract](#tokenbodyparametercontract)
  * tokenEndpoint `string`: OAuth token endpoint. Contains absolute URI to entity being referenced.

### AuthorizationServerUpdateContract
* AuthorizationServerUpdateContract `object`: External OAuth authorization server settings.
  * properties [AuthorizationServerUpdateContractProperties](#authorizationserverupdatecontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### AuthorizationServerUpdateContractProperties
* AuthorizationServerUpdateContractProperties `object`: External OAuth authorization server Update settings contract.
  * authorizationEndpoint `string`: OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
  * clientId `string`: Client or app id registered with this authorization server.
  * clientRegistrationEndpoint `string`: Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
  * displayName `string`: User-friendly authorization server name.
  * grantTypes `array`: Form of an authorization grant, which the client uses to request the access token.
    * items `string` (values: authorizationCode, implicit, resourceOwnerPassword, clientCredentials)
  * authorizationMethods `array`: HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
    * items `string` (values: HEAD, OPTIONS, TRACE, GET, POST, PUT, PATCH, DELETE)
  * bearerTokenSendingMethods `array`: Specifies the mechanism by which access token is passed to the API. 
    * items `string` (values: authorizationHeader, query)
  * clientAuthenticationMethod `array`: Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
    * items `string` (values: Basic, Body)
  * clientSecret `string`: Client or app secret registered with this authorization server.
  * defaultScope `string`: Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
  * description `string`: Description of the authorization server. Can contain HTML formatting tags.
  * resourceOwnerPassword `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
  * resourceOwnerUsername `string`: Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
  * supportState `boolean`: If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
  * tokenBodyParameters `array`: Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
    * items [TokenBodyParameterContract](#tokenbodyparametercontract)
  * tokenEndpoint `string`: OAuth token endpoint. Contains absolute URI to entity being referenced.

### TokenBodyParameterContract
* TokenBodyParameterContract `object`: OAuth acquire token request body parameter (www-url-form-encoded).
  * name **required** `string`: body parameter name.
  * value **required** `string`: body parameter value.


