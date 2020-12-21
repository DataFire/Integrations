# @datafire/azure_apimanagement_apimnamedvalues

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimnamedvalues
```
```js
let azure_apimanagement_apimnamedvalues = require('@datafire/azure_apimanagement_apimnamedvalues').create({
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

Use these REST APIs for performing operations on NamedValue entity associated with your Azure API Management deployment. API Management policies are a powerful capability of the system that allow the publisher to change the behavior of the API through configuration. Policies are a collection of statements that are executed sequentially on the request or response of an API. Policy statements can be constructed using literal text values, policy expressions, and NamedValues. Each API Management service instance has a NamedValues collection of key/value pairs that are global to the service instance. These NamedValues can be used to manage constant string values across all API configuration and policies.

## Actions

### NamedValue_ListByService
Lists a collection of NamedValues defined within a service instance.


```js
azure_apimanagement_apimnamedvalues.NamedValue_ListByService({
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| tags | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith, any, all | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged NamedValue list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: NamedValue details.
      * properties `object`: NamedValue Contract properties.
        * displayName **required** `string`: Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
        * value `string`: Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
        * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
        * tags `array`: Optional tags that when provided can be used to filter the NamedValue list.
          * items `string`
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### NamedValue_Delete
Deletes specific NamedValue from the API Management service instance.


```js
azure_apimanagement_apimnamedvalues.NamedValue_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "namedValueId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * namedValueId **required** `string`: Identifier of the NamedValue.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NamedValue_Get
Gets the details of the NamedValue specified by its identifier.


```js
azure_apimanagement_apimnamedvalues.NamedValue_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "namedValueId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * namedValueId **required** `string`: Identifier of the NamedValue.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: NamedValue details.
  * properties `object`: NamedValue Contract properties.
    * displayName **required** `string`: Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
    * value `string`: Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
    * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
    * tags `array`: Optional tags that when provided can be used to filter the NamedValue list.
      * items `string`
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### NamedValue_GetEntityTag
Gets the entity state (Etag) version of the NamedValue specified by its identifier.


```js
azure_apimanagement_apimnamedvalues.NamedValue_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "namedValueId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * namedValueId **required** `string`: Identifier of the NamedValue.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NamedValue_Update
Updates the specific NamedValue.


```js
azure_apimanagement_apimnamedvalues.NamedValue_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "namedValueId": "",
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
  * namedValueId **required** `string`: Identifier of the NamedValue.
  * parameters **required** `object`: NamedValue update Parameters.
    * properties `object`: NamedValue Contract properties.
      * displayName `string`: Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
      * value `string`: Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace.
      * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
      * tags `array`: Optional tags that when provided can be used to filter the NamedValue list.
        * items `string`
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: NamedValue details.
  * properties `object`: NamedValue Contract properties.
    * displayName **required** `string`: Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
    * value `string`: Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
    * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
    * tags `array`: Optional tags that when provided can be used to filter the NamedValue list.
      * items `string`
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### NamedValue_CreateOrUpdate
Creates or updates a NamedValue.


```js
azure_apimanagement_apimnamedvalues.NamedValue_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "namedValueId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * namedValueId **required** `string`: Identifier of the NamedValue.
  * parameters **required** `object`: NamedValue details.
    * properties `object`: NamedValue Contract properties.
      * displayName **required** `string`: Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
      * value **required** `string`: Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
      * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
      * tags `array`: Optional tags that when provided can be used to filter the NamedValue list.
        * items `string`
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: NamedValue details.
  * properties `object`: NamedValue Contract properties.
    * displayName **required** `string`: Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
    * value `string`: Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
    * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
    * tags `array`: Optional tags that when provided can be used to filter the NamedValue list.
      * items `string`
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### NamedValue_ListValue
Gets the secret value of the NamedValue.


```js
azure_apimanagement_apimnamedvalues.NamedValue_ListValue({
  "resourceGroupName": "",
  "serviceName": "",
  "namedValueId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * namedValueId **required** `string`: Identifier of the NamedValue.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
  * value `string`: This is secret value of the NamedValue entity.



## Definitions

*This integration has no definitions*
