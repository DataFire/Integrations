# @datafire/azure_apimanagement_apimcaches

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimcaches
```
```js
let azure_apimanagement_apimcaches = require('@datafire/azure_apimanagement_apimcaches').create({
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

Use these REST APIs for performing operations on Cache entity in your Azure API Management deployment. Azure API Management also allows for caching responses in an external Azure Cache for Redis. For more information refer to [External Redis Cache in ApiManagement](https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-cache-external).

## Actions

### Cache_ListByService
Lists a collection of all external Caches in the specified service instance.


```js
azure_apimanagement_apimcaches.Cache_ListByService({
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
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Caches list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Cache details.
      * properties `object`: Properties of the Cache contract.
        * connectionString **required** `string`: Runtime connection string to cache
        * description `string`: Cache description
        * resourceId `string`: Original uri of entity in external system cache points to
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### Cache_Delete
Deletes specific Cache.


```js
azure_apimanagement_apimcaches.Cache_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "cacheId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * cacheId **required** `string`: Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Cache_Get
Gets the details of the Cache specified by its identifier.


```js
azure_apimanagement_apimcaches.Cache_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "cacheId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * cacheId **required** `string`: Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Cache details.
  * properties `object`: Properties of the Cache contract.
    * connectionString **required** `string`: Runtime connection string to cache
    * description `string`: Cache description
    * resourceId `string`: Original uri of entity in external system cache points to
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Cache_GetEntityTag
Gets the entity state (Etag) version of the Cache specified by its identifier.


```js
azure_apimanagement_apimcaches.Cache_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "cacheId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * cacheId **required** `string`: Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Cache_Update
Updates the details of the cache specified by its identifier.


```js
azure_apimanagement_apimcaches.Cache_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "cacheId": "",
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
  * cacheId **required** `string`: Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
  * parameters **required** `object`: Cache update details.
    * properties `object`: Parameters supplied to the Update Cache operation.
      * connectionString `string`: Runtime connection string to cache
      * description `string`: Cache description
      * resourceId `string`: Original uri of entity in external system cache points to
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Cache_CreateOrUpdate
Creates or updates an External Cache to be used in Api Management instance.


```js
azure_apimanagement_apimcaches.Cache_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "cacheId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * cacheId **required** `string`: Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
  * parameters **required** `object`: Cache details.
    * properties `object`: Properties of the Cache contract.
      * connectionString **required** `string`: Runtime connection string to cache
      * description `string`: Cache description
      * resourceId `string`: Original uri of entity in external system cache points to
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Cache details.
  * properties `object`: Properties of the Cache contract.
    * connectionString **required** `string`: Runtime connection string to cache
    * description `string`: Cache description
    * resourceId `string`: Original uri of entity in external system cache points to
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
