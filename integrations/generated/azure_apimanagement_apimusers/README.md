# @datafire/azure_apimanagement_apimusers

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimusers
```
```js
let azure_apimanagement_apimusers = require('@datafire/azure_apimanagement_apimusers').create({
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

Use these REST APIs for performing operations on User entity in Azure API Management deployment. The User entity in API Management represents the developers that call the APIs of the products to which they are subscribed.

## Actions

### User_ListByService
Lists a collection of registered users in the specified service instance.


```js
azure_apimanagement_apimusers.User_ListByService({
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| firstName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| lastName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| email | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| state | filter | eq |     | </br>| registrationDate | filter | ge, le, eq, ne, gt, lt |     | </br>| note | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| groups | expand |     |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * expandGroups `boolean`: Detailed Group in response.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Users list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: User details.
      * properties `object`: User profile.
        * email `string`: Email address.
        * firstName `string`: First name.
        * groups `array`: Collection of groups user is part of.
          * items `object`: Group contract Properties.
        * lastName `string`: Last name.
        * registrationDate `string`: Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        * identities `array`: Collection of user identities.
          * items `object`: User identity details.
        * note `string`: Optional note about a user set by the administrator.
        * state `string` (values: active, blocked, pending, deleted): Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### User_Delete
Deletes specific user.


```js
azure_apimanagement_apimusers.User_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * deleteSubscriptions `boolean`: Whether to delete user's subscription or not.
  * notify `boolean`: Send an Account Closed Email notification to the User.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### User_Get
Gets the details of the user specified by its identifier.


```js
azure_apimanagement_apimusers.User_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: User details.
  * properties `object`: User profile.
    * email `string`: Email address.
    * firstName `string`: First name.
    * groups `array`: Collection of groups user is part of.
      * items `object`: Group contract Properties.
        * builtIn `boolean`: true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
        * description `string`: Group description. Can contain HTML formatting tags.
        * displayName **required** `string`: Group name.
        * externalId `string`: For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
        * type `string` (values: custom, system, external): Group type.
    * lastName `string`: Last name.
    * registrationDate `string`: Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * identities `array`: Collection of user identities.
      * items `object`: User identity details.
        * id `string`: Identifier value within provider.
        * provider `string`: Identity provider name.
    * note `string`: Optional note about a user set by the administrator.
    * state `string` (values: active, blocked, pending, deleted): Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### User_GetEntityTag
Gets the entity state (Etag) version of the user specified by its identifier.


```js
azure_apimanagement_apimusers.User_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### User_Update
Updates the details of the user specified by its identifier.


```js
azure_apimanagement_apimusers.User_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
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
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: User update parameters.
    * properties `object`: Parameters supplied to the Update User operation.
      * email `string`: Email address. Must not be empty and must be unique within the service instance.
      * firstName `string`: First name.
      * lastName `string`: Last name.
      * password `string`: User Password.
      * identities `array`: Collection of user identities.
        * items `object`: User identity details.
          * id `string`: Identifier value within provider.
          * provider `string`: Identity provider name.
      * note `string`: Optional note about a user set by the administrator.
      * state `string` (values: active, blocked, pending, deleted): Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### User_CreateOrUpdate
Creates or Updates a user.


```js
azure_apimanagement_apimusers.User_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: User create details.
    * properties `object`: Parameters supplied to the Create User operation.
      * appType `string` (values: developerPortal): Determines the type of application which send the create user request. Default is old publisher portal.
      * confirmation `string` (values: signup, invite): Determines the type of confirmation e-mail that will be sent to the newly created user.
      * email **required** `string`: Email address. Must not be empty and must be unique within the service instance.
      * firstName **required** `string`: First name.
      * lastName **required** `string`: Last name.
      * password `string`: User Password. If no value is provided, a default password is generated.
      * identities `array`: Collection of user identities.
        * items `object`: User identity details.
          * id `string`: Identifier value within provider.
          * provider `string`: Identity provider name.
      * note `string`: Optional note about a user set by the administrator.
      * state `string` (values: active, blocked, pending, deleted): Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: User details.
  * properties `object`: User profile.
    * email `string`: Email address.
    * firstName `string`: First name.
    * groups `array`: Collection of groups user is part of.
      * items `object`: Group contract Properties.
        * builtIn `boolean`: true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
        * description `string`: Group description. Can contain HTML formatting tags.
        * displayName **required** `string`: Group name.
        * externalId `string`: For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
        * type `string` (values: custom, system, external): Group type.
    * lastName `string`: Last name.
    * registrationDate `string`: Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
    * identities `array`: Collection of user identities.
      * items `object`: User identity details.
        * id `string`: Identifier value within provider.
        * provider `string`: Identity provider name.
    * note `string`: Optional note about a user set by the administrator.
    * state `string` (values: active, blocked, pending, deleted): Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### UserConfirmationPassword_Send
Sends confirmation


```js
azure_apimanagement_apimusers.UserConfirmationPassword_Send({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### User_GenerateSsoUrl
Retrieves a redirection URL containing an authentication token for signing a given user into the developer portal.


```js
azure_apimanagement_apimusers.User_GenerateSsoUrl({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Generate SSO Url operations response details.
  * value `string`: Redirect Url containing the SSO URL value.

### UserGroup_List
Lists all user groups.


```js
azure_apimanagement_apimusers.UserGroup_List({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
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
        * externalId `string`: For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
        * type `string` (values: custom, system, external): Group type.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### UserIdentities_List
List of all user identities.


```js
azure_apimanagement_apimusers.UserIdentities_List({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: List of Users Identity list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: User Identity values.
    * items `object`: User identity details.
      * id `string`: Identifier value within provider.
      * provider `string`: Identity provider name.

### UserSubscription_List
Lists the collection of subscriptions of the specified user.


```js
azure_apimanagement_apimusers.UserSubscription_List({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| stateComment | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| ownerId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| scope | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| productId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
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

### User_GetSharedAccessToken
Gets the Shared Access Authorization Token for the User.


```js
azure_apimanagement_apimusers.User_GetSharedAccessToken({
  "resourceGroupName": "",
  "serviceName": "",
  "userId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Get User Token parameters.
    * properties `object`: Parameters supplied to the Get User Token operation.
      * expiry **required** `string`: The Expiry time of the Token. Maximum token expiry time is set to 30 days. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
      * keyType **required** `string` (values: primary, secondary): The Key to be used to generate token for user.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Get User Token response details.
  * value `string`: Shared Access Authorization token for the User.



## Definitions

*This integration has no definitions*
