# @datafire/azure_apimanagement_apimtags

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimtags
```
```js
let azure_apimanagement_apimtags = require('@datafire/azure_apimanagement_apimtags').create({
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

Use these REST APIs for performing operations on Tag entity in your Azure API Management deployment. Tags can be assigned to APIs, Operations and Products.

## Actions

### Tag_ListByService
Lists a collection of tags defined within a service instance.


```js
azure_apimanagement_apimtags.Tag_ListByService({
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
  * scope `string`: Scope like 'apis', 'products' or 'apis/{apiId}
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

### Tag_Delete
Deletes specific tag of the API Management service instance.


```js
azure_apimanagement_apimtags.Tag_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "tagId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_Get
Gets the details of the tag specified by its identifier.


```js
azure_apimanagement_apimtags.Tag_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
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

### Tag_GetEntityState
Gets the entity state version of the tag specified by its identifier.


```js
azure_apimanagement_apimtags.Tag_GetEntityState({
  "resourceGroupName": "",
  "serviceName": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_Update
Updates the details of the tag specified by its identifier.


```js
azure_apimanagement_apimtags.Tag_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "tagId": "",
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
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Parameters supplied to Create/Update Tag operations.
    * properties `object`: Tag contract Properties.
      * displayName **required** `string`: Tag name.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_CreateOrUpdate
Creates a tag.


```js
azure_apimanagement_apimtags.Tag_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "tagId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Parameters supplied to Create/Update Tag operations.
    * properties `object`: Tag contract Properties.
      * displayName **required** `string`: Tag name.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
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
