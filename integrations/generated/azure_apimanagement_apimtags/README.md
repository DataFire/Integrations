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

azure_apimanagement_apimtags.Tag_ListByOperation({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on Tag entity in your Azure API Management deployment. Tags can be assigned to APIs, Operations and Products.

## Actions

### Tag_ListByOperation
Lists all Tags associated with the Operation.


```js
azure_apimanagement_apimtags.Tag_ListByOperation({
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
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TagCollection](#tagcollection)

### Tag_DetachFromOperation
Detach the tag from the Operation.


```js
azure_apimanagement_apimtags.Tag_DetachFromOperation({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_GetByOperation
Get tag associated with the Operation.


```js
azure_apimanagement_apimtags.Tag_GetByOperation({
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
* output [TagContract](#tagcontract)

### Tag_GetEntityStateByOperation
Gets the entity state version of the tag specified by its identifier.


```js
azure_apimanagement_apimtags.Tag_GetEntityStateByOperation({
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
azure_apimanagement_apimtags.Tag_AssignToOperation({
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
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TagContract](#tagcontract)

### Operation_ListByTags
Lists a collection of operations associated with tags.


```js
azure_apimanagement_apimtags.Operation_ListByTags({
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
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Tag list representation.
  * count `integer`: Total record count number across all pages.
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
        * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
        * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
        * authenticationSettings `object`: API Authentication Settings.
          * oAuth2 `object`: API OAuth2 Authentication settings details.
            * authorizationServerId `string`: OAuth authorization server identifier.
            * scope `string`: operations scope.
        * description `string`: Description of the API. May include HTML formatting tags.
        * isCurrent `boolean`: Indicates if API revision is current api revision.
        * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
        * subscriptionKeyParameterNames `object`: Subscription key parameter names details.
          * header `string`: Subscription key header name.
          * query `string`: Subscription key query string parameter name.
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
        * approvalRequired `boolean`: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
        * description `string`: Product description. May include HTML formatting tags.
        * state `string` (values: notPublished, published): whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
        * subscriptionRequired `boolean`: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
        * subscriptionsLimit `integer`: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
        * terms `string`: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.
      * tag **required** `object`: Contract defining the Tag property in the Tag Resource Contract
        * id `string`: Tag identifier
        * name `string`: Tag Name

### TagDescription_ListByApi
Lists all Tags descriptions in scope of API. Model similar to swagger - tagDescription is defined on API level but tag may be assigned to the Operations


```js
azure_apimanagement_apimtags.TagDescription_ListByApi({
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
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TagDescriptionCollection](#tagdescriptioncollection)

### TagDescription_Delete
Delete tag description for the Api.


```js
azure_apimanagement_apimtags.TagDescription_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### TagDescription_Get
Get tag associated with the API.


```js
azure_apimanagement_apimtags.TagDescription_Get({
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
* output [TagDescriptionContract](#tagdescriptioncontract)

### TagDescription_GetEntityState
Gets the entity state version of the tag specified by its identifier.


```js
azure_apimanagement_apimtags.TagDescription_GetEntityState({
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

### TagDescription_CreateOrUpdate
Create/Update tag fescription in scope of the Api.


```js
azure_apimanagement_apimtags.TagDescription_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * parameters **required** [TagDescriptionCreateParameters](#tagdescriptioncreateparameters)
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TagDescriptionContract](#tagdescriptioncontract)

### Tag_ListByApi
Lists all Tags associated with the API.


```js
azure_apimanagement_apimtags.Tag_ListByApi({
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
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TagCollection](#tagcollection)

### Tag_DetachFromApi
Detach the tag from the Api.


```js
azure_apimanagement_apimtags.Tag_DetachFromApi({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_GetByApi
Get tag associated with the API.


```js
azure_apimanagement_apimtags.Tag_GetByApi({
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
* output [TagContract](#tagcontract)

### Tag_GetEntityStateByApi
Gets the entity state version of the tag specified by its identifier.


```js
azure_apimanagement_apimtags.Tag_GetEntityStateByApi({
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
azure_apimanagement_apimtags.Tag_AssignToApi({
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
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TagContract](#tagcontract)

### Tag_ListByProduct
Lists all Tags associated with the Product.


```js
azure_apimanagement_apimtags.Tag_ListByProduct({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
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

### Tag_DetachFromProduct
Detach the tag from the Product.


```js
azure_apimanagement_apimtags.Tag_DetachFromProduct({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
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
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_GetByProduct
Get tag associated with the Product.


```js
azure_apimanagement_apimtags.Tag_GetByProduct({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
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

### Tag_GetEntityStateByProduct
Gets the entity state version of the tag specified by its identifier.


```js
azure_apimanagement_apimtags.Tag_GetEntityStateByProduct({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Tag_AssignToProduct
Assign tag to the Product.


```js
azure_apimanagement_apimtags.Tag_AssignToProduct({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "tagId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * tagId **required** `string`: Tag identifier. Must be unique in the current API Management service instance.
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
  * $filter `string`: | Field       | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TagCollection](#tagcollection)

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
* output [TagContract](#tagcontract)

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
  * parameters **required** [TagCreateUpdateParameters](#tagcreateupdateparameters)
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
  * parameters **required** [TagCreateUpdateParameters](#tagcreateupdateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TagContract](#tagcontract)



## Definitions

### TagCollection
* TagCollection `object`: Paged Tag list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Tag Contract details.
      * properties `object`: Tag contract Properties.
        * displayName **required** `string`: Tag name.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### TagContract
* TagContract `object`: Tag Contract details.
  * properties `object`: Tag contract Properties.
    * displayName **required** `string`: Tag name.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### TagContractProperties
* TagContractProperties `object`: Tag contract Properties.
  * displayName **required** `string`: Tag name.

### TagCreateUpdateParameters
* TagCreateUpdateParameters `object`: Parameters supplied to Create/Update Tag operations.
  * properties [TagContractProperties](#tagcontractproperties)

### TagDescriptionBaseProperties
* TagDescriptionBaseProperties `object`: Parameters supplied to the Create TagDescription operation.
  * description `string`: Description of the Tag.
  * externalDocsDescription `string`: Description of the external resources describing the tag.
  * externalDocsUrl `string`: Absolute URL of external resources describing the tag.

### TagDescriptionCollection
* TagDescriptionCollection `object`: Paged TagDescription list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [TagDescriptionContract](#tagdescriptioncontract)

### TagDescriptionContract
* TagDescriptionContract `object`: Contract details.
  * properties [TagDescriptionContractProperties](#tagdescriptioncontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### TagDescriptionContractProperties
* TagDescriptionContractProperties `object`: TagDescription contract Properties.
  * displayName `string`: Tag name.
  * description `string`: Description of the Tag.
  * externalDocsDescription `string`: Description of the external resources describing the tag.
  * externalDocsUrl `string`: Absolute URL of external resources describing the tag.

### TagDescriptionCreateParameters
* TagDescriptionCreateParameters `object`: Parameters supplied to the Create TagDescription operation.
  * properties [TagDescriptionBaseProperties](#tagdescriptionbaseproperties)


