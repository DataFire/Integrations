# @datafire/azure_apimanagement_apimtagresources

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimtagresources
```
```js
let azure_apimanagement_apimtagresources = require('@datafire/azure_apimanagement_apimtagresources').create({
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

Use these REST APIs for querying APIs. Operations and Products by tags in your Azure API Management deployment.

## Actions

### TagResource_ListByService
Lists a collection of resources associated with tags.


```js
azure_apimanagement_apimtagresources.TagResource_ListByService({
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| aid | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| apiName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| apiRevision | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| path | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| serviceUrl | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| method | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| urlTemplate | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| terms | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| state | filter | eq |     | </br>| isCurrent | filter | eq |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Tag list representation.
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
        * apiRevisionDescription `string`: Description of the Api Revision.
        * apiVersion `string`: Indicates the Version identifier of the API if the API is versioned
        * apiVersionDescription `string`: Description of the Api Version.
        * apiVersionSetId `string`: A resource identifier for the related ApiVersionSet.
        * authenticationSettings `object`: API Authentication Settings.
          * oAuth2 `object`: API OAuth2 Authentication settings details.
          * openid `object`: API OAuth2 Authentication settings details.
        * description `string`: Description of the API. May include HTML formatting tags.
        * isCurrent `boolean`: Indicates if API revision is current api revision.
        * isOnline `boolean`: Indicates if API revision is accessible via the gateway.
        * subscriptionKeyParameterNames `object`: Subscription key parameter names details.
          * header `string`: Subscription key header name.
          * query `string`: Subscription key query string parameter name.
        * subscriptionRequired `boolean`: Specifies whether an API or Product subscription is required for accessing the API.
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
        * approvalRequired `boolean`: whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of true.
        * description `string`: Product description. May include HTML formatting tags.
        * state `string` (values: notPublished, published): whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
        * subscriptionRequired `boolean`: Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
        * subscriptionsLimit `integer`: Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of true.
        * terms `string`: Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.
      * tag **required** `object`: Contract defining the Tag property in the Tag Resource Contract
        * id `string`: Tag identifier
        * name `string`: Tag Name



## Definitions

*This integration has no definitions*
