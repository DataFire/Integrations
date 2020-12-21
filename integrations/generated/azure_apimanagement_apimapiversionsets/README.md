# @datafire/azure_apimanagement_apimapiversionsets

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimapiversionsets
```
```js
let azure_apimanagement_apimapiversionsets = require('@datafire/azure_apimanagement_apimapiversionsets').create({
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

Use these REST APIs for performing operations on the ApiVersionSet entity associated with your Azure API Management deployment. Using this entity you create and manage API Version Sets that are used to group APIs for consistent versioning.

## Actions

### ApiVersionSet_ListByService
Lists a collection of API Version Sets in the specified service instance.


```js
azure_apimanagement_apimapiversionsets.ApiVersionSet_ListByService({
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Api Version Set list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Api Version Set Contract details.
      * properties `object`: Properties of an API Version Set.
        * displayName **required** `string`: Name of API Version Set
        * versioningScheme **required** `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
        * description `string`: Description of API Version Set.
        * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
        * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiVersionSet_Delete
Deletes specific Api Version Set.


```js
azure_apimanagement_apimapiversionsets.ApiVersionSet_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "versionSetId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * versionSetId **required** `string`: Api Version Set identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiVersionSet_Get
Gets the details of the Api Version Set specified by its identifier.


```js
azure_apimanagement_apimapiversionsets.ApiVersionSet_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "versionSetId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * versionSetId **required** `string`: Api Version Set identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Api Version Set Contract details.
  * properties `object`: Properties of an API Version Set.
    * displayName **required** `string`: Name of API Version Set
    * versioningScheme **required** `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
    * description `string`: Description of API Version Set.
    * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
    * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiVersionSet_GetEntityTag
Gets the entity state (Etag) version of the Api Version Set specified by its identifier.


```js
azure_apimanagement_apimapiversionsets.ApiVersionSet_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "versionSetId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * versionSetId **required** `string`: Api Version Set identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiVersionSet_Update
Updates the details of the Api VersionSet specified by its identifier.


```js
azure_apimanagement_apimapiversionsets.ApiVersionSet_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "versionSetId": "",
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
  * versionSetId **required** `string`: Api Version Set identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Parameters to update or create an Api Version Set Contract.
    * properties `object`: Properties used to create or update an API Version Set.
      * displayName `string`: Name of API Version Set
      * versioningScheme `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
      * description `string`: Description of API Version Set.
      * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
      * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiVersionSet_CreateOrUpdate
Creates or Updates a Api Version Set.


```js
azure_apimanagement_apimapiversionsets.ApiVersionSet_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "versionSetId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * versionSetId **required** `string`: Api Version Set identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Api Version Set Contract details.
    * properties `object`: Properties of an API Version Set.
      * displayName **required** `string`: Name of API Version Set
      * versioningScheme **required** `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
      * description `string`: Description of API Version Set.
      * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
      * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Api Version Set Contract details.
  * properties `object`: Properties of an API Version Set.
    * displayName **required** `string`: Name of API Version Set
    * versioningScheme **required** `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
    * description `string`: Description of API Version Set.
    * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
    * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
