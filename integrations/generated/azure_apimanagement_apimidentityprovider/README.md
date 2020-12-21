# @datafire/azure_apimanagement_apimidentityprovider

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimidentityprovider
```
```js
let azure_apimanagement_apimidentityprovider = require('@datafire/azure_apimanagement_apimidentityprovider').create({
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

Use these REST APIs for performing operations on Identity Provider entity associated with your Azure API Management deployment. Setting up an external Identity Provider for authentication can help you manage the developer portal logins using the OAuth2 flow.

## Actions

### IdentityProvider_ListByService
Lists a collection of Identity Provider configured in the specified service instance.


```js
azure_apimanagement_apimidentityprovider.IdentityProvider_ListByService({
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

#### Output
* output `object`: List of all the Identity Providers configured on the service instance.
  * nextLink `string`: Next page link if any.
  * value `array`: Identity Provider configuration values.
    * items `object`: Identity Provider details.
      * properties `object`: The external Identity Providers like Facebook, Google, Microsoft, Twitter or Azure Active Directory which can be used to enable access to the API Management service developer portal for all users.
        * clientId **required** `string`: Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
        * clientSecret **required** `string`: Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft.
        * allowedTenants `array`: List of Allowed Tenants when configuring Azure Active Directory login.
          * items `string`
        * authority `string`: OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
        * passwordResetPolicyName `string`: Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
        * profileEditingPolicyName `string`: Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
        * signinPolicyName `string`: Signin Policy Name. Only applies to AAD B2C Identity Provider.
        * signinTenant `string`: The TenantId to use instead of Common when logging into Active Directory
        * signupPolicyName `string`: Signup Policy Name. Only applies to AAD B2C Identity Provider.
        * type `string` (values: facebook, google, microsoft, twitter, aad, aadB2C): Identity Provider Type identifier.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### IdentityProvider_Delete
Deletes the specified identity provider configuration.


```js
azure_apimanagement_apimidentityprovider.IdentityProvider_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "identityProviderName": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * identityProviderName **required** `string` (values: facebook, google, microsoft, twitter, aad, aadB2C): Identity Provider Type identifier.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### IdentityProvider_Get
Gets the configuration details of the identity Provider configured in specified service instance.


```js
azure_apimanagement_apimidentityprovider.IdentityProvider_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "identityProviderName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * identityProviderName **required** `string` (values: facebook, google, microsoft, twitter, aad, aadB2C): Identity Provider Type identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Identity Provider details.
  * properties `object`: The external Identity Providers like Facebook, Google, Microsoft, Twitter or Azure Active Directory which can be used to enable access to the API Management service developer portal for all users.
    * clientId **required** `string`: Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
    * clientSecret **required** `string`: Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft.
    * allowedTenants `array`: List of Allowed Tenants when configuring Azure Active Directory login.
      * items `string`
    * authority `string`: OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
    * passwordResetPolicyName `string`: Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
    * profileEditingPolicyName `string`: Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
    * signinPolicyName `string`: Signin Policy Name. Only applies to AAD B2C Identity Provider.
    * signinTenant `string`: The TenantId to use instead of Common when logging into Active Directory
    * signupPolicyName `string`: Signup Policy Name. Only applies to AAD B2C Identity Provider.
    * type `string` (values: facebook, google, microsoft, twitter, aad, aadB2C): Identity Provider Type identifier.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### IdentityProvider_GetEntityTag
Gets the entity state (Etag) version of the identityProvider specified by its identifier.


```js
azure_apimanagement_apimidentityprovider.IdentityProvider_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "identityProviderName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * identityProviderName **required** `string` (values: facebook, google, microsoft, twitter, aad, aadB2C): Identity Provider Type identifier.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### IdentityProvider_Update
Updates an existing IdentityProvider configuration.


```js
azure_apimanagement_apimidentityprovider.IdentityProvider_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "identityProviderName": "",
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
  * identityProviderName **required** `string` (values: facebook, google, microsoft, twitter, aad, aadB2C): Identity Provider Type identifier.
  * parameters **required** `object`: Parameters supplied to update Identity Provider
    * properties `object`: Parameters supplied to the Update Identity Provider operation.
      * clientId `string`: Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
      * clientSecret `string`: Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft.
      * allowedTenants `array`: List of Allowed Tenants when configuring Azure Active Directory login.
        * items `string`
      * authority `string`: OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
      * passwordResetPolicyName `string`: Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
      * profileEditingPolicyName `string`: Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
      * signinPolicyName `string`: Signin Policy Name. Only applies to AAD B2C Identity Provider.
      * signinTenant `string`: The TenantId to use instead of Common when logging into Active Directory
      * signupPolicyName `string`: Signup Policy Name. Only applies to AAD B2C Identity Provider.
      * type `string` (values: facebook, google, microsoft, twitter, aad, aadB2C): Identity Provider Type identifier.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### IdentityProvider_CreateOrUpdate
Creates or Updates the IdentityProvider configuration.


```js
azure_apimanagement_apimidentityprovider.IdentityProvider_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "identityProviderName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * identityProviderName **required** `string` (values: facebook, google, microsoft, twitter, aad, aadB2C): Identity Provider Type identifier.
  * parameters **required** `object`: Identity Provider details.
    * properties `object`: The external Identity Providers like Facebook, Google, Microsoft, Twitter or Azure Active Directory which can be used to enable access to the API Management service developer portal for all users.
      * clientId **required** `string`: Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
      * clientSecret **required** `string`: Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft.
      * allowedTenants `array`: List of Allowed Tenants when configuring Azure Active Directory login.
        * items `string`
      * authority `string`: OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
      * passwordResetPolicyName `string`: Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
      * profileEditingPolicyName `string`: Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
      * signinPolicyName `string`: Signin Policy Name. Only applies to AAD B2C Identity Provider.
      * signinTenant `string`: The TenantId to use instead of Common when logging into Active Directory
      * signupPolicyName `string`: Signup Policy Name. Only applies to AAD B2C Identity Provider.
      * type `string` (values: facebook, google, microsoft, twitter, aad, aadB2C): Identity Provider Type identifier.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Identity Provider details.
  * properties `object`: The external Identity Providers like Facebook, Google, Microsoft, Twitter or Azure Active Directory which can be used to enable access to the API Management service developer portal for all users.
    * clientId **required** `string`: Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
    * clientSecret **required** `string`: Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft.
    * allowedTenants `array`: List of Allowed Tenants when configuring Azure Active Directory login.
      * items `string`
    * authority `string`: OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
    * passwordResetPolicyName `string`: Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
    * profileEditingPolicyName `string`: Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
    * signinPolicyName `string`: Signin Policy Name. Only applies to AAD B2C Identity Provider.
    * signinTenant `string`: The TenantId to use instead of Common when logging into Active Directory
    * signupPolicyName `string`: Signup Policy Name. Only applies to AAD B2C Identity Provider.
    * type `string` (values: facebook, google, microsoft, twitter, aad, aadB2C): Identity Provider Type identifier.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
