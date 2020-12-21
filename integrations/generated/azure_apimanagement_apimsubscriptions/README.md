# @datafire/azure_apimanagement_apimsubscriptions

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimsubscriptions
```
```js
let azure_apimanagement_apimsubscriptions = require('@datafire/azure_apimanagement_apimsubscriptions').create({
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

Use these REST APIs for performing operations on Subscription entity associated with your Azure API Management deployment. The Subscription entity represents the association between a user and a product in API Management. Products contain one or more APIs, and once a product is published, developers can subscribe to the product and begin to use the product’s APIs.

## Actions

### Subscription_List
Lists all subscriptions of the API Management service instance.


```js
azure_apimanagement_apimsubscriptions.Subscription_List({
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| stateComment | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| ownerId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| scope | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| productId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| state | filter | eq |     | </br>| user | expand |     |     | </br>
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
        * allowTracing `boolean`: Determines whether tracing is enabled
        * createdDate `string`: Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * displayName `string`: The name of the subscription, or null if the subscription has no name.
        * endDate `string`: Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * expirationDate `string`: Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * notificationDate `string`: Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * ownerId `string`: The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{userId} where {userId} is a user identifier.
        * primaryKey `string`: Subscription primary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
        * scope **required** `string`: Scope like /products/{productId} or /apis or /apis/{apiId}.
        * secondaryKey `string`: Subscription secondary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
        * startDate `string`: Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * state **required** `string` (values: suspended, active, expired, submitted, rejected, cancelled): Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
        * stateComment `string`: Optional subscription comment added by an administrator.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### Subscription_Delete
Deletes the specified subscription.


```js
azure_apimanagement_apimsubscriptions.Subscription_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subscription_Get
Gets the specified Subscription entity.


```js
azure_apimanagement_apimsubscriptions.Subscription_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Subscription details.
  * properties `object`: Subscription details.
    * allowTracing `boolean`: Determines whether tracing is enabled
    * createdDate `string`: Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * displayName `string`: The name of the subscription, or null if the subscription has no name.
    * endDate `string`: Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * expirationDate `string`: Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * notificationDate `string`: Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * ownerId `string`: The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{userId} where {userId} is a user identifier.
    * primaryKey `string`: Subscription primary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
    * scope **required** `string`: Scope like /products/{productId} or /apis or /apis/{apiId}.
    * secondaryKey `string`: Subscription secondary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
    * startDate `string`: Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * state **required** `string` (values: suspended, active, expired, submitted, rejected, cancelled): Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
    * stateComment `string`: Optional subscription comment added by an administrator.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Subscription_GetEntityTag
Gets the entity state (Etag) version of the apimanagement subscription specified by its identifier.


```js
azure_apimanagement_apimsubscriptions.Subscription_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subscription_Update
Updates the details of a subscription specified by its identifier.


```js
azure_apimanagement_apimsubscriptions.Subscription_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
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
  * sid **required** `string`: Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
  * parameters **required** `object`: Subscription update details.
    * properties `object`: Parameters supplied to the Update subscription operation.
      * allowTracing `boolean`: Determines whether tracing can be enabled
      * displayName `string`: Subscription name.
      * expirationDate `string`: Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
      * ownerId `string`: User identifier path: /users/{userId}
      * primaryKey `string`: Primary subscription key.
      * scope `string`: Scope like /products/{productId} or /apis or /apis/{apiId}
      * secondaryKey `string`: Secondary subscription key.
      * state `string` (values: suspended, active, expired, submitted, rejected, cancelled): Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
      * stateComment `string`: Comments describing subscription state change by the administrator.
  * notify `boolean`: Notify change in Subscription State. 
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subscription_CreateOrUpdate
Creates or updates the subscription of specified user to the specified product.


```js
azure_apimanagement_apimsubscriptions.Subscription_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
  * parameters **required** `object`: Subscription create details.
    * properties `object`: Parameters supplied to the Create subscription operation.
      * allowTracing `boolean`: Determines whether tracing can be enabled
      * displayName **required** `string`: Subscription name.
      * ownerId `string`: User (user id path) for whom subscription is being created in form /users/{userId}
      * primaryKey `string`: Primary subscription key. If not specified during request key will be generated automatically.
      * scope **required** `string`: Scope like /products/{productId} or /apis or /apis/{apiId}.
      * secondaryKey `string`: Secondary subscription key. If not specified during request key will be generated automatically.
      * state `string` (values: suspended, active, expired, submitted, rejected, cancelled): Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
  * notify `boolean`: Notify change in Subscription State. 
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Subscription details.
  * properties `object`: Subscription details.
    * allowTracing `boolean`: Determines whether tracing is enabled
    * createdDate `string`: Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * displayName `string`: The name of the subscription, or null if the subscription has no name.
    * endDate `string`: Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * expirationDate `string`: Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * notificationDate `string`: Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * ownerId `string`: The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{userId} where {userId} is a user identifier.
    * primaryKey `string`: Subscription primary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
    * scope **required** `string`: Scope like /products/{productId} or /apis or /apis/{apiId}.
    * secondaryKey `string`: Subscription secondary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
    * startDate `string`: Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * state **required** `string` (values: suspended, active, expired, submitted, rejected, cancelled): Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
    * stateComment `string`: Optional subscription comment added by an administrator.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Subscription_ListSecrets
Gets the subscription keys.


```js
azure_apimanagement_apimsubscriptions.Subscription_ListSecrets({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Subscription keys.
  * primaryKey `string`: Subscription primary key.
  * secondaryKey `string`: Subscription secondary key.

### Subscription_RegeneratePrimaryKey
Regenerates primary key of existing subscription of the API Management service instance.


```js
azure_apimanagement_apimsubscriptions.Subscription_RegeneratePrimaryKey({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subscription_RegenerateSecondaryKey
Regenerates secondary key of existing subscription of the API Management service instance.


```js
azure_apimanagement_apimsubscriptions.Subscription_RegenerateSecondaryKey({
  "resourceGroupName": "",
  "serviceName": "",
  "sid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * sid **required** `string`: Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
