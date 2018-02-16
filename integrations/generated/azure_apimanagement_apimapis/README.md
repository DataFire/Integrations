# @datafire/azure_apimanagement_apimapis

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimapis
```
```js
let azure_apimanagement_apimapis = require('@datafire/azure_apimanagement_apimapis').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_apimanagement_apimapis.Api_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on API entity and their Operations associated with your Azure API Management deployment.

## Actions

### Api_ListByService
Lists all APIs of the API Management service instance.


```js
azure_apimanagement_apimapis.Api_ListByService({
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
  * $filter `string`: | Field       | Supported operators    | Supported functions               |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * expandApiVersionSet `boolean`: Include full ApiVersionSet resource in response

#### Output
* output [ApiCollection](#apicollection)

### Api_Delete
Deletes the specified API of the API Management service instance.


```js
azure_apimanagement_apimapis.Api_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * If-Match **required** `string`: ETag of the API Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Api_Get
Gets the details of the API specified by its identifier.


```js
azure_apimanagement_apimapis.Api_Get({
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
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiContract](#apicontract)

### Api_GetEntityTag
Gets the entity state (Etag) version of the API specified by its identifier.


```js
azure_apimanagement_apimapis.Api_GetEntityTag({
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Api_Update
Updates the specified API of the API Management service instance.


```js
azure_apimanagement_apimapis.Api_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * parameters **required** [ApiUpdateContract](#apiupdatecontract)
  * If-Match **required** `string`: ETag of the API entity. ETag should match the current entity state in the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Api_CreateOrUpdate
Creates new or updates existing specified API of the API Management service instance.


```js
azure_apimanagement_apimapis.Api_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * parameters **required** [ApiCreateOrUpdateParameter](#apicreateorupdateparameter)
  * If-Match `string`: ETag of the Api Entity. For Create Api Etag should not be specified. For Update Etag should match the existing Entity or it can be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiContract](#apicontract)

### ApiOperation_ListByApi
Lists a collection of the operations for the specified API.


```js
azure_apimanagement_apimapis.ApiOperation_ListByApi({
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
  * $filter `string`: | Field       | Supported operators    | Supported functions               |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationCollection](#operationcollection)

### ApiOperation_Delete
Deletes the specified operation in the API.


```js
azure_apimanagement_apimapis.ApiOperation_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
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
  * If-Match **required** `string`: ETag of the API Operation Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperation_Get
Gets the details of the API Operation specified by its identifier.


```js
azure_apimanagement_apimapis.ApiOperation_Get({
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
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationContract](#operationcontract)

### ApiOperation_GetEntityTag
Gets the entity state (Etag) version of the API operation specified by its identifier.


```js
azure_apimanagement_apimapis.ApiOperation_GetEntityTag({
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperation_Update
Updates the details of the operation in the API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiOperation_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * parameters **required** [OperationUpdateContract](#operationupdatecontract)
  * If-Match **required** `string`: ETag of the API Operation Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperation_CreateOrUpdate
Creates a new operation in the API or updates an existing one.


```js
azure_apimanagement_apimapis.ApiOperation_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
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
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * parameters **required** [OperationContract](#operationcontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationContract](#operationcontract)

### ApiOperationPolicy_ListByOperation
Get the list of policy configuration at the API Operation level.


```js
azure_apimanagement_apimapis.ApiOperationPolicy_ListByOperation({
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
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: The response of the list policy operation.
  * nextLink `string`: Next page link if any.
  * value `array`: Policy Contract value.
    * items `object`: Policy Contract details.
      * properties `object`: Policy contract Properties.
        * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiOperationPolicy_Delete
Deletes the policy configuration at the Api Operation.


```js
azure_apimanagement_apimapis.ApiOperationPolicy_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "If-Match": "",
  "policyId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: The entity state (Etag) version of the Api Operation Policy to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperationPolicy_Get
Get the policy configuration at the API Operation level.


```js
azure_apimanagement_apimapis.ApiOperationPolicy_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "policyId": "",
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
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiOperationPolicy_GetEntityTag
Gets the entity state (Etag) version of the API operation policy specified by its identifier.


```js
azure_apimanagement_apimapis.ApiOperationPolicy_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "policyId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiOperationPolicy_CreateOrUpdate
Creates or updates policy configuration for the API Operation level.


```js
azure_apimanagement_apimapis.ApiOperationPolicy_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "operationId": "",
  "policyId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * operationId **required** `string`: Operation identifier within an API. Must be unique in the current API Management service instance.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * parameters **required** `object`: Policy Contract details.
    * properties `object`: Policy contract Properties.
      * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match **required** `string`: The entity state (Etag) version of the Api Operation policy to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiPolicy_ListByApi
Get the policy configuration at the API level.


```js
azure_apimanagement_apimapis.ApiPolicy_ListByApi({
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: The response of the list policy operation.
  * nextLink `string`: Next page link if any.
  * value `array`: Policy Contract value.
    * items `object`: Policy Contract details.
      * properties `object`: Policy contract Properties.
        * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiPolicy_Delete
Deletes the policy configuration at the Api.


```js
azure_apimanagement_apimapis.ApiPolicy_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * If-Match **required** `string`: The entity state (Etag) version of the Api policy to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiPolicy_Get
Get the policy configuration at the API level.


```js
azure_apimanagement_apimapis.ApiPolicy_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "policyId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiPolicy_GetEntityTag
Gets the entity state (Etag) version of the API policy specified by its identifier.


```js
azure_apimanagement_apimapis.ApiPolicy_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "policyId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiPolicy_CreateOrUpdate
Creates or updates policy configuration for the API.


```js
azure_apimanagement_apimapis.ApiPolicy_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "policyId": "",
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
  * apiId **required** `string`: API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
  * policyId **required** `string` (values: policy): The identifier of the Policy.
  * parameters **required** `object`: Policy Contract details.
    * properties `object`: Policy contract Properties.
      * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
    * id `string`: Resource ID.
    * name `string`: Resource name.
    * type `string`: Resource type for API Management resource.
  * If-Match **required** `string`: The entity state (Etag) version of the Api Policy to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Policy Contract details.
  * properties `object`: Policy contract Properties.
    * policyContent **required** `string`: Json escaped Xml Encoded contents of the Policy.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiProduct_ListByApis
Lists all Products, which the API is part of.


```js
azure_apimanagement_apimapis.ApiProduct_ListByApis({
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * $filter `string`: | Field | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Products list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Product details.
      * properties `object`: Product profile.
        * displayName **required** `string`: Product name.
        * approvalRequired `boolean`: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
        * description `string`: Product description. May include HTML formatting tags.
        * state `string` (values: notPublished, published): whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
        * subscriptionRequired `boolean`: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
        * subscriptionsLimit `integer`: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
        * terms `string`: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### ApiRelease_List
Lists all releases of an API. An API release is created when making an API Revision current. Releases are also used to rollback to previous revisions. Results will be paged and can be constrained by the $top and $skip parameters.


```js
azure_apimanagement_apimapis.ApiRelease_List({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: | Field | Supported operators    | Supported functions                         |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApiReleaseCollection](#apireleasecollection)

### ApiRelease_Delete
Deletes the specified release in the API.


```js
azure_apimanagement_apimapis.ApiRelease_Delete({
  "If-Match": "",
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "apiId": "",
  "releaseId": ""
}, context)
```

#### Input
* input `object`
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * releaseId **required** `string`: Release identifier within an API. Must be unique in the current API Management service instance.

#### Output
*Output schema unknown*

### ApiRelease_Get
Returns the details of an API release.


```js
azure_apimanagement_apimapis.ApiRelease_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "apiId": "",
  "releaseId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * releaseId **required** `string`: Release identifier within an API. Must be unique in the current API Management service instance.

#### Output
* output [ApiReleaseContract](#apireleasecontract)

### ApiRelease_Update
Updates the details of the release of the API specified by its identifier.


```js
azure_apimanagement_apimapis.ApiRelease_Update({
  "parameters": null,
  "If-Match": "",
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "apiId": "",
  "releaseId": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ApiReleaseContract](#apireleasecontract)
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * releaseId **required** `string`: Release identifier within an API. Must be unique in the current API Management service instance.

#### Output
*Output schema unknown*

### ApiRelease_Create
Creates a new Release for the API.


```js
azure_apimanagement_apimapis.ApiRelease_Create({
  "parameters": null,
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "apiId": "",
  "releaseId": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ApiReleaseContract](#apireleasecontract)
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * releaseId **required** `string`: Release identifier within an API. Must be unique in the current API Management service instance.

#### Output
* output [ApiReleaseContract](#apireleasecontract)

### ApiRevisions_List
Lists all revisions of an API.


```js
azure_apimanagement_apimapis.ApiRevisions_List({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": "",
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.

#### Output
* output [ApiRevisionCollection](#apirevisioncollection)

### ApiSchema_ListByApi
Get the schema configuration at the API level.


```js
azure_apimanagement_apimapis.ApiSchema_ListByApi({
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
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SchemaCollection](#schemacollection)

### ApiSchema_Delete
Deletes the schema configuration at the Api.


```js
azure_apimanagement_apimapis.ApiSchema_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "schemaId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * schemaId **required** `string`: Schema identifier within an API. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: The entity state (Etag) version of the Api schema to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiSchema_Get
Get the schema configuration at the API level.


```js
azure_apimanagement_apimapis.ApiSchema_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "schemaId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * schemaId **required** `string`: Schema identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SchemaContract](#schemacontract)

### ApiSchema_GetEntityTag
Gets the entity state (Etag) version of the schema specified by its identifier.


```js
azure_apimanagement_apimapis.ApiSchema_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "schemaId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * schemaId **required** `string`: Schema identifier within an API. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApiSchema_CreateOrUpdate
Creates or updates schema configuration for the API.


```js
azure_apimanagement_apimapis.ApiSchema_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "apiId": "",
  "schemaId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * apiId **required** `string`: API identifier. Must be unique in the current API Management service instance.
  * schemaId **required** `string`: Schema identifier within an API. Must be unique in the current API Management service instance.
  * parameters **required** [SchemaContract](#schemacontract)
  * If-Match `string`: The entity state (Etag) version of the Api Schema to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SchemaContract](#schemacontract)



## Definitions

### ApiCollection
* ApiCollection `object`: Paged Api list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [ApiContract](#apicontract)

### ApiContract
* ApiContract `object`: API details.
  * properties [ApiContractProperties](#apicontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiContractProperties
* ApiContractProperties `object`: Api Entity Properties
  * apiVersionSet [ApiVersionSetContract](#apiversionsetcontract)
  * displayName `string`: API name.
  * path **required** `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
  * protocols `array`: Describes on which protocols the operations in this API can be invoked.
    * items `string` (values: http, https)
  * serviceUrl `string`: Absolute URL of the backend service implementing this API.
  * apiRevision `string`: Describes the Revision of the Api. If no value is provided, default revision 1 is created
  * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
  * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
  * authenticationSettings [AuthenticationSettingsContract](#authenticationsettingscontract)
  * description `string`: Description of the API. May include HTML formatting tags.
  * isCurrent `boolean`: Indicates if API revision is current api revision.
  * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
  * subscriptionKeyParameterNames [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract)
  * type `string` (values: http, soap): Type of API.

### ApiContractUpdateProperties
* ApiContractUpdateProperties `object`: API update contract properties.
  * displayName `string`: API name.
  * path `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
  * protocols `array`: Describes on which protocols the operations in this API can be invoked.
    * items `string` (values: http, https)
  * serviceUrl `string`: Absolute URL of the backend service implementing this API.
  * apiRevision `string`: Describes the Revision of the Api. If no value is provided, default revision 1 is created
  * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
  * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
  * authenticationSettings [AuthenticationSettingsContract](#authenticationsettingscontract)
  * description `string`: Description of the API. May include HTML formatting tags.
  * isCurrent `boolean`: Indicates if API revision is current api revision.
  * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
  * subscriptionKeyParameterNames [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract)
  * type `string` (values: http, soap): Type of API.

### ApiCreateOrUpdateParameter
* ApiCreateOrUpdateParameter `object`: API Create or Update Parameters.
  * properties [ApiCreateOrUpdateProperties](#apicreateorupdateproperties)

### ApiCreateOrUpdateProperties
* ApiCreateOrUpdateProperties `object`: Api Create or Update Properties.
  * contentFormat `string` (values: wadl-xml, wadl-link-json, swagger-json, swagger-link-json, wsdl, wsdl-link): Format of the Content in which the API is getting imported.
  * contentValue `string`: Content value when Importing an API.
  * wsdlSelector `object`: Criteria to limit import of WSDL to a subset of the document.
    * wsdlEndpointName `string`: Name of endpoint(port) to import from WSDL
    * wsdlServiceName `string`: Name of service to import from WSDL
  * apiVersionSet [ApiVersionSetContract](#apiversionsetcontract)
  * displayName `string`: API name.
  * path **required** `string`: Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
  * protocols `array`: Describes on which protocols the operations in this API can be invoked.
    * items `string` (values: http, https)
  * serviceUrl `string`: Absolute URL of the backend service implementing this API.
  * apiRevision `string`: Describes the Revision of the Api. If no value is provided, default revision 1 is created
  * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
  * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
  * authenticationSettings [AuthenticationSettingsContract](#authenticationsettingscontract)
  * description `string`: Description of the API. May include HTML formatting tags.
  * isCurrent `boolean`: Indicates if API revision is current api revision.
  * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
  * subscriptionKeyParameterNames [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract)
  * type `string` (values: http, soap): Type of API.

### ApiEntityBaseContract
* ApiEntityBaseContract `object`: API base contract details.
  * apiRevision `string`: Describes the Revision of the Api. If no value is provided, default revision 1 is created
  * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
  * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
  * authenticationSettings [AuthenticationSettingsContract](#authenticationsettingscontract)
  * description `string`: Description of the API. May include HTML formatting tags.
  * isCurrent `boolean`: Indicates if API revision is current api revision.
  * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
  * subscriptionKeyParameterNames [SubscriptionKeyParameterNamesContract](#subscriptionkeyparameternamescontract)
  * type `string` (values: http, soap): Type of API.

### ApiExportResult
* ApiExportResult `object`: API Export result Blob Uri.
  * link `string`: Link to the Storage Blob containing the result of the export operation. The Blob Uri is only valid for 5 minutes.

### ApiReleaseCollection
* ApiReleaseCollection `object`: Paged Api Revision list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [ApiReleaseContract](#apireleasecontract)

### ApiReleaseContract
* ApiReleaseContract `object`: Api Release details.
  * properties [ApiReleaseContractProperties](#apireleasecontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### ApiReleaseContractProperties
* ApiReleaseContractProperties `object`: API Release details
  * apiId `string`: Identifier of the API the release belongs to.
  * createdDate `string`: The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
  * notes `string`: Release Notes
  * updatedDate `string`: The time the API release was updated.

### ApiRevisionCollection
* ApiRevisionCollection `object`: Paged Api Revision list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [ApiRevisionContract](#apirevisioncontract)

### ApiRevisionContract
* ApiRevisionContract `object`: Summary of revision metadata.
  * apiId `string`: Identifier of the API Revision.
  * apiRevision `string`: Revision number of API.
  * createdDateTime `string`: The time the API Revision was created. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
  * description `string`: Description of the API Revision.
  * isCurrent `boolean`: Indicates if API revision is accessible via the gateway.
  * isOnline `boolean`: Indicates if API revision is the current api revision.
  * privateUrl `string`: Gateway URL for accessing the non-current API Revision.
  * updatedDateTime `string`: The time the API Revision were updated. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.

### ApiRevisionInfoContract
* ApiRevisionInfoContract `object`: Object used to create an API Revision or Version based on an existing API Revision
  * apiRevisionDescription `string`: Description of new API Revision.
  * apiVersionName `string`: Version identifier for the new API Version.
  * apiVersionSet [ApiVersionSetContract](#apiversionsetcontract)
  * sourceApiId `string`: Resource identifier of API to be used to create the revision from.

### ApiUpdateContract
* ApiUpdateContract `object`: API update contract details.
  * properties [ApiContractUpdateProperties](#apicontractupdateproperties)

### ApiVersionSetContract
* ApiVersionSetContract `object`: An API Version Set contains the common configuration for a set of API Versions relating 
  * description `string`: Description of API Version Set.
  * id `string`: Identifier for existing API Version Set. Omit this value to create a new Version Set.
  * versionHeaderName `string`: Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
  * versionQueryName `string`: Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
  * versioningScheme `string` (values: Segment, Query, Header): An value that determines where the API Version identifer will be located in a HTTP request.

### AuthenticationSettingsContract
* AuthenticationSettingsContract `object`: API Authentication Settings.
  * oAuth2 [OAuth2AuthenticationSettingsContract](#oauth2authenticationsettingscontract)

### OAuth2AuthenticationSettingsContract
* OAuth2AuthenticationSettingsContract `object`: API OAuth2 Authentication settings details.
  * authorizationServerId `string`: OAuth authorization server identifier.
  * scope `string`: operations scope.

### OperationCollection
* OperationCollection `object`: Paged Operation list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [OperationContract](#operationcontract)

### OperationContract
* OperationContract `object`: Api Operation details.
  * properties [OperationContractProperties](#operationcontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### OperationContractProperties
* OperationContractProperties `object`: Operation Contract Properties
  * displayName **required** `string`: Operation Name.
  * method **required** `string`: A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
  * urlTemplate **required** `string`: Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
  * description `string`: Description of the operation. May include HTML formatting tags.
  * policies `string`: Operation Policies
  * request [RequestContract](#requestcontract)
  * responses `array`: Array of Operation responses.
    * items [ResponseContract](#responsecontract)
  * templateParameters `array`: Collection of URL template parameters.
    * items [ParameterContract](#parametercontract)

### OperationEntityBaseContract
* OperationEntityBaseContract `object`: Api Operation Entity Base Contract details.
  * description `string`: Description of the operation. May include HTML formatting tags.
  * policies `string`: Operation Policies
  * request [RequestContract](#requestcontract)
  * responses `array`: Array of Operation responses.
    * items [ResponseContract](#responsecontract)
  * templateParameters `array`: Collection of URL template parameters.
    * items [ParameterContract](#parametercontract)

### OperationUpdateContract
* OperationUpdateContract `object`: Api Operation Update Contract details.
  * properties [OperationUpdateContractProperties](#operationupdatecontractproperties)

### OperationUpdateContractProperties
* OperationUpdateContractProperties `object`: Operation Update Contract Properties.
  * displayName `string`: Operation Name.
  * method `string`: A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
  * urlTemplate `string`: Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
  * description `string`: Description of the operation. May include HTML formatting tags.
  * policies `string`: Operation Policies
  * request [RequestContract](#requestcontract)
  * responses `array`: Array of Operation responses.
    * items [ResponseContract](#responsecontract)
  * templateParameters `array`: Collection of URL template parameters.
    * items [ParameterContract](#parametercontract)

### ParameterContract
* ParameterContract `object`: Operation parameters details.
  * defaultValue `string`: Default parameter value.
  * description `string`: Parameter description.
  * name **required** `string`: Parameter name.
  * required `boolean`: whether parameter is required or not.
  * type **required** `string`: Parameter type.
  * values `array`: Parameter values.
    * items `string`

### RepresentationContract
* RepresentationContract `object`: Operation request/response representation details.
  * contentType **required** `string`: Specifies a registered or custom content type for this representation, e.g. application/xml.
  * formParameters `array`: Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
    * items [ParameterContract](#parametercontract)
  * sample `string`: An example of the representation.
  * schemaId `string`: Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
  * typeName `string`: Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.

### RequestContract
* RequestContract `object`: Operation request details.
  * description `string`: Operation request description.
  * headers `array`: Collection of operation request headers.
    * items [ParameterContract](#parametercontract)
  * queryParameters `array`: Collection of operation request query parameters.
    * items [ParameterContract](#parametercontract)
  * representations `array`: Collection of operation request representations.
    * items [RepresentationContract](#representationcontract)

### ResponseContract
* ResponseContract `object`: Operation response details.
  * description `string`: Operation response description.
  * headers `array`: Collection of operation response headers.
    * items [ParameterContract](#parametercontract)
  * representations `array`: Collection of operation response representations.
    * items [RepresentationContract](#representationcontract)
  * statusCode **required** `integer`: Operation response HTTP status code.

### SchemaCollection
* SchemaCollection `object`: The response of the list schema operation.
  * nextLink `string`: Next page link if any.
  * value `array`: Api Schema Contract value.
    * items [SchemaContract](#schemacontract)

### SchemaContract
* SchemaContract `object`: Schema Contract details.
  * properties [SchemaContractProperties](#schemacontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### SchemaContractProperties
* SchemaContractProperties `object`: Schema contract Properties.
  * contentType **required** `string`: Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml).
  * document [SchemaDocumentProperties](#schemadocumentproperties)

### SchemaDocumentProperties
* SchemaDocumentProperties `object`: Schema Document Properties.
  * value `string`: Json escaped string defining the document representing the Schema.

### SubscriptionKeyParameterNamesContract
* SubscriptionKeyParameterNamesContract `object`: Subscription key parameter names details.
  * header `string`: Subscription key header name.
  * query `string`: Subscription key query string parameter name.


