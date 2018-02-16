# @datafire/azure_apimanagement_apimopenidconnectproviders

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimopenidconnectproviders
```
```js
let azure_apimanagement_apimopenidconnectproviders = require('@datafire/azure_apimanagement_apimopenidconnectproviders').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_apimanagement_apimopenidconnectproviders.OpenIdConnectProvider_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on OpenId Connect Provider entity associated with your Azure API Management deployment. API Management allows you to access APIs secured with token from [OpenID Connect Provider ](http://openid.net/connect/) to be accessed from the Developer Console.

## Actions

### OpenIdConnectProvider_ListByService
Lists all OpenID Connect Providers.


```js
azure_apimanagement_apimopenidconnectproviders.OpenIdConnectProvider_ListByService({
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
* output [OpenIdConnectProviderCollection](#openidconnectprovidercollection)

### OpenIdConnectProvider_Delete
Deletes specific OpenID Connect Provider of the API Management service instance.


```js
azure_apimanagement_apimopenidconnectproviders.OpenIdConnectProvider_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "opid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * opid **required** `string`: Identifier of the OpenID Connect Provider.
  * If-Match **required** `string`: The entity state (Etag) version of the OpenID Connect Provider to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### OpenIdConnectProvider_Get
Gets specific OpenID Connect Provider.


```js
azure_apimanagement_apimopenidconnectproviders.OpenIdConnectProvider_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "opid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * opid **required** `string`: Identifier of the OpenID Connect Provider.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OpenidConnectProviderContract](#openidconnectprovidercontract)

### OpenIdConnectProvider_GetEntityTag
Gets the entity state (Etag) version of the openIdConnectProvider specified by its identifier.


```js
azure_apimanagement_apimopenidconnectproviders.OpenIdConnectProvider_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "opid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * opid **required** `string`: Identifier of the OpenID Connect Provider.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### OpenIdConnectProvider_Update
Updates the specific OpenID Connect Provider.


```js
azure_apimanagement_apimopenidconnectproviders.OpenIdConnectProvider_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "opid": "",
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
  * opid **required** `string`: Identifier of the OpenID Connect Provider.
  * parameters **required** [OpenidConnectProviderUpdateContract](#openidconnectproviderupdatecontract)
  * If-Match **required** `string`: The entity state (Etag) version of the OpenID Connect Provider to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### OpenIdConnectProvider_CreateOrUpdate
Creates or updates the OpenID Connect Provider.


```js
azure_apimanagement_apimopenidconnectproviders.OpenIdConnectProvider_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "opid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * opid **required** `string`: Identifier of the OpenID Connect Provider.
  * parameters **required** [OpenidConnectProviderContract](#openidconnectprovidercontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OpenidConnectProviderContract](#openidconnectprovidercontract)



## Definitions

### OpenIdConnectProviderCollection
* OpenIdConnectProviderCollection `object`: Paged OpenIdProviders list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [OpenidConnectProviderContract](#openidconnectprovidercontract)

### OpenidConnectProviderContract
* OpenidConnectProviderContract `object`: OpenId Connect Provider details.
  * properties [OpenidConnectProviderContractProperties](#openidconnectprovidercontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### OpenidConnectProviderContractProperties
* OpenidConnectProviderContractProperties `object`: OpenID Connect Providers Contract.
  * clientId **required** `string`: Client ID of developer console which is the client application.
  * clientSecret `string`: Client Secret of developer console which is the client application.
  * description `string`: User-friendly description of OpenID Connect Provider.
  * displayName **required** `string`: User-friendly OpenID Connect Provider name.
  * metadataEndpoint **required** `string`: Metadata endpoint URI.

### OpenidConnectProviderUpdateContract
* OpenidConnectProviderUpdateContract `object`: Parameters supplied to the Update OpenID Connect Provider operation.
  * properties [OpenidConnectProviderUpdateContractProperties](#openidconnectproviderupdatecontractproperties)

### OpenidConnectProviderUpdateContractProperties
* OpenidConnectProviderUpdateContractProperties `object`: Parameters supplied to the Update OpenID Connect Provider operation.
  * clientId `string`: Client ID of developer console which is the client application.
  * clientSecret `string`: Client Secret of developer console which is the client application.
  * description `string`: User-friendly description of OpenID Connect Provider.
  * displayName `string`: User-friendly OpenID Connect Provider name.
  * metadataEndpoint `string`: Metadata endpoint URI.


