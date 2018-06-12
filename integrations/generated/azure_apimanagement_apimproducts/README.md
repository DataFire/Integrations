# @datafire/azure_apimanagement_apimproducts

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimproducts
```
```js
let azure_apimanagement_apimproducts = require('@datafire/azure_apimanagement_apimproducts').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_apimanagement_apimproducts.Product_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on Product entity associated with your Azure API Management deployment. The Product entity represents a product in API Management. Products include one or more APIs and their associated terms of use. Once a product is published, developers can subscribe to the product and begin to use the product’s APIs.

## Actions

### Product_ListByService
Lists a collection of products in the specified service instance.


```js
azure_apimanagement_apimproducts.Product_ListByService({
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
  * expandGroups `boolean`: When set to true, the response contains an array of groups that have visibility to the product. The default is false.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProductCollection](#productcollection)

### Product_Delete
Delete product.


```js
azure_apimanagement_apimproducts.Product_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
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
  * deleteSubscriptions `boolean`: Delete existing subscriptions associated with the product or not.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Product_Get
Gets the details of the product specified by its identifier.


```js
azure_apimanagement_apimproducts.Product_Get({
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
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProductContract](#productcontract)

### Product_GetEntityTag
Gets the entity state (Etag) version of the product specified by its identifier.


```js
azure_apimanagement_apimproducts.Product_GetEntityTag({
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
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Product_Update
Update product.


```js
azure_apimanagement_apimproducts.Product_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
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
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * parameters **required** [ProductUpdateParameters](#productupdateparameters)
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Product_CreateOrUpdate
Creates or Updates a product.


```js
azure_apimanagement_apimproducts.Product_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * parameters **required** [ProductContract](#productcontract)
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProductContract](#productcontract)

### ProductApi_ListByProduct
Lists a collection of the APIs associated with a product.


```js
azure_apimanagement_apimproducts.ProductApi_ListByProduct({
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
* output `object`: Paged Api list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: API details.
      * properties `object`: Api Entity Properties
        * apiVersionSet `object`: An API Version Set contains the common configuration for a set of API Versions relating 
          * description `string`: Description of API Version Set.
          * id `string`: Identifier for existing API Version Set. Omit this value to create a new Version Set.
          * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
          * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
          * versioningScheme `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
        * displayName `string`: API name.
        * path **required** `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
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
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ProductApi_Delete
Deletes the specified API from the specified product.


```js
azure_apimanagement_apimproducts.ProductApi_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ProductApi_CheckEntityExists
Checks that API entity specified by identifier is associated with the Product entity.


```js
azure_apimanagement_apimproducts.ProductApi_CheckEntityExists({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ProductApi_CreateOrUpdate
Adds an API to the specified product.


```js
azure_apimanagement_apimproducts.ProductApi_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: API details.
  * properties `object`: Api Entity Properties
    * apiVersionSet `object`: An API Version Set contains the common configuration for a set of API Versions relating 
      * description `string`: Description of API Version Set.
      * id `string`: Identifier for existing API Version Set. Omit this value to create a new Version Set.
      * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
      * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
      * versioningScheme `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.
    * displayName `string`: API name.
    * path **required** `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
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
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ProductGroup_ListByProduct
Lists the collection of developer groups associated with the specified product.


```js
azure_apimanagement_apimproducts.ProductGroup_ListByProduct({
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
* output `object`: Paged Group list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Contract details.
      * properties `object`: Group contract Properties.
        * builtIn `boolean`: true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
        * description `string`: Group description. Can contain HTML formatting tags.
        * displayName **required** `string`: Group name.
        * externalId `string`: For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
        * type `string` (values: custom, system, external): Group type.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ProductGroup_Delete
Deletes the association between the specified group and product.


```js
azure_apimanagement_apimproducts.ProductGroup_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "groupId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ProductGroup_CheckEntityExists
Checks that Group entity specified by identifier is associated with the Product entity.


```js
azure_apimanagement_apimproducts.ProductGroup_CheckEntityExists({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "groupId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ProductGroup_CreateOrUpdate
Adds the association between the specified developer group with the specified product.


```js
azure_apimanagement_apimproducts.ProductGroup_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
  "groupId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Contract details.
  * properties `object`: Group contract Properties.
    * builtIn `boolean`: true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
    * description `string`: Group description. Can contain HTML formatting tags.
    * displayName **required** `string`: Group name.
    * externalId `string`: For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
    * type `string` (values: custom, system, external): Group type.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ProductPolicy_ListByProduct
Get the policy configuration at the Product level.


```js
azure_apimanagement_apimproducts.ProductPolicy_ListByProduct({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.

#### Output
* output `object`: The response of the list policy operation.
  * nextLink `string`: Next page link if any.
  * value `array`: Policy Contract value.
    * items `object`: Policy Contract details.
      * properties `object`: Policy contract Properties.
        * contentFormat `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
        * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ProductPolicy_Delete
Deletes the policy configuration at the Product.


```js
azure_apimanagement_apimproducts.ProductPolicy_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
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
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ProductPolicy_Get
Get the policy configuration at the Product level.


```js
azure_apimanagement_apimproducts.ProductPolicy_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "productId": "",
  "policyId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * policyId **required** `string` (values: policy): The identifier of the Policy.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * contentFormat `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
    * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ProductPolicy_GetEntityTag
Get the ETag of the policy configuration at the Product level.


```js
azure_apimanagement_apimproducts.ProductPolicy_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "productId": "",
  "policyId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * policyId **required** `string` (values: policy): The identifier of the Policy.

#### Output
*Output schema unknown*

### ProductPolicy_CreateOrUpdate
Creates or updates policy configuration for the Product.


```js
azure_apimanagement_apimproducts.ProductPolicy_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "productId": "",
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
  * productId **required** `string`: Product identifier. Must be unique in the current API Management service instance.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * parameters **required** `object`: Policy Contract details.
    * properties `object`: Policy contract Properties.
      * contentFormat `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
      * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * contentFormat `string` (values: xml, xml-link, rawxml, rawxml-link): Format of the policyContent.
    * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ProductSubscriptions_List
Lists the collection of subscriptions to the specified product.


```js
azure_apimanagement_apimproducts.ProductSubscriptions_List({
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
  * $filter `string`: | Field        | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Subscriptions list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Subscription details.
      * properties `object`: Subscription details.
        * createdDate `string`: Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * displayName `string`: The name of the subscription, or null if the subscription has no name.
        * endDate `string`: Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * expirationDate `string`: Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * notificationDate `string`: Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * primaryKey **required** `string`: Subscription primary key.
        * productId **required** `string`: The product resource identifier of the subscribed product. The value is a valid relative URL in the format of /products/{productId} where {productId} is a product identifier.
        * secondaryKey **required** `string`: Subscription secondary key.
        * startDate `string`: Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * state **required** `string` (values: suspended, active, expired, submitted, rejected, cancelled): Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
        * stateComment `string`: Optional subscription comment added by an administrator.
        * userId **required** `string`: The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{uid} where {uid} is a user identifier.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.



## Definitions

### ProductCollection
* ProductCollection `object`: Paged Products list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [ProductContract](#productcontract)

### ProductContract
* ProductContract `object`: Product details.
  * properties [ProductContractProperties](#productcontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ProductContractProperties
* ProductContractProperties `object`: Product profile.
  * displayName **required** `string`: Product name.
  * approvalRequired `boolean`: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
  * description `string`: Product description. May include HTML formatting tags.
  * state `string` (values: notPublished, published): whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
  * subscriptionRequired `boolean`: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
  * subscriptionsLimit `integer`: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
  * terms `string`: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.

### ProductEntityBaseParameters
* ProductEntityBaseParameters `object`: Product Entity Base Parameters
  * approvalRequired `boolean`: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
  * description `string`: Product description. May include HTML formatting tags.
  * state `string` (values: notPublished, published): whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
  * subscriptionRequired `boolean`: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
  * subscriptionsLimit `integer`: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
  * terms `string`: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.

### ProductUpdateParameters
* ProductUpdateParameters `object`: Product Update parameters.
  * properties [ProductUpdateProperties](#productupdateproperties)

### ProductUpdateProperties
* ProductUpdateProperties `object`: Parameters supplied to the Update Product operation.
  * displayName `string`: Product name.
  * approvalRequired `boolean`: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
  * description `string`: Product description. May include HTML formatting tags.
  * state `string` (values: notPublished, published): whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
  * subscriptionRequired `boolean`: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
  * subscriptionsLimit `integer`: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
  * terms `string`: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.


