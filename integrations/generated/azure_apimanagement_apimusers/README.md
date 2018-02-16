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

azure_apimanagement_apimusers.User_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
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
  * $filter `string`: | Field            | Supported operators    | Supported functions               |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UserCollection](#usercollection)

### User_Delete
Deletes specific user.


```js
azure_apimanagement_apimusers.User_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * deleteSubscriptions `boolean`: Whether to delete user's subscription or not.
  * If-Match **required** `string`: The entity state (Etag) version of the user to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
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
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UserContract](#usercontract)

### User_GetEntityTag
Gets the entity state (Etag) version of the user specified by its identifier.


```js
azure_apimanagement_apimusers.User_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
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
  "uid": "",
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
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * parameters **required** [UserUpdateParameters](#userupdateparameters)
  * If-Match **required** `string`: The entity state (Etag) version of the user to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
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
  "uid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * parameters **required** [UserCreateParameters](#usercreateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UserContract](#usercontract)

### User_GenerateSsoUrl
Retrieves a redirection URL containing an authentication token for signing a given user into the developer portal.


```js
azure_apimanagement_apimusers.User_GenerateSsoUrl({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [GenerateSsoUrlResult](#generatessourlresult)

### UserGroup_List
Lists all user groups.


```js
azure_apimanagement_apimusers.UserGroup_List({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
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
      * properties `object`: Developer group.
        * builtIn `boolean`: true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
        * description `string`: Group description. Can contain HTML formatting tags.
        * displayName **required** `string`: Group name.
        * externalId `string`: For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
        * type `string` (values: custom, system, external): Group type.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### UserIdentities_List
Lists all user identities.


```js
azure_apimanagement_apimusers.UserIdentities_List({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UserIdentityCollection](#useridentitycollection)

### UserSubscription_List
Lists the collection of subscriptions of the specified user.


```js
azure_apimanagement_apimusers.UserSubscription_List({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
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

### User_GetSharedAccessToken
Gets the Shared Access Authorization Token for the User.


```js
azure_apimanagement_apimusers.User_GetSharedAccessToken({
  "resourceGroupName": "",
  "serviceName": "",
  "uid": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * uid **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * parameters **required** [UserTokenParameters](#usertokenparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UserTokenResult](#usertokenresult)



## Definitions

### GenerateSsoUrlResult
* GenerateSsoUrlResult `object`: Generate SSO Url operations response details.
  * value `string`: Redirect Url containing the SSO URL value.

### UserCollection
* UserCollection `object`: Paged Users list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [UserContract](#usercontract)

### UserContract
* UserContract `object`: User details.
  * properties [UserContractProperties](#usercontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### UserContractProperties
* UserContractProperties `object`: User profile.
  * email `string`: Email address.
  * firstName `string`: First name.
  * groups `array`: Collection of groups user is part of.
    * items `object`: Contract details.
      * properties `object`: Developer group.
        * builtIn `boolean`: true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
        * description `string`: Group description. Can contain HTML formatting tags.
        * displayName **required** `string`: Group name.
        * externalId `string`: For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
        * type `string` (values: custom, system, external): Group type.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.
  * lastName `string`: Last name.
  * registrationDate `string`: Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * identities `array`: Collection of user identities.
    * items [UserIdentityContract](#useridentitycontract)
  * note `string`: Optional note about a user set by the administrator.
  * state `string` (values: active, blocked, pending, deleted): Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.

### UserCreateParameterProperties
* UserCreateParameterProperties `object`: Parameters supplied to the Create User operation.
  * confirmation `string` (values: signup, invite): Determines the type of confirmation e-mail that will be sent to the newly created user.
  * email **required** `string`: Email address. Must not be empty and must be unique within the service instance.
  * firstName **required** `string`: First name.
  * lastName **required** `string`: Last name.
  * password `string`: User Password. If no value is provided, a default password is generated.
  * identities `array`: Collection of user identities.
    * items [UserIdentityContract](#useridentitycontract)
  * note `string`: Optional note about a user set by the administrator.
  * state `string` (values: active, blocked, pending, deleted): Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.

### UserCreateParameters
* UserCreateParameters `object`: User create details.
  * properties [UserCreateParameterProperties](#usercreateparameterproperties)

### UserEntityBaseParameters
* UserEntityBaseParameters `object`: User Entity Base Parameters set.
  * identities `array`: Collection of user identities.
    * items [UserIdentityContract](#useridentitycontract)
  * note `string`: Optional note about a user set by the administrator.
  * state `string` (values: active, blocked, pending, deleted): Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.

### UserIdentityCollection
* UserIdentityCollection `object`: List of Users Identity list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: User Identity values.
    * items [UserIdentityContract](#useridentitycontract)

### UserIdentityContract
* UserIdentityContract `object`: User identity details.
  * id `string`: Identifier value within provider.
  * provider `string`: Identity provider name.

### UserTokenParameters
* UserTokenParameters `object`: Parameters supplied to the Get User Token operation.
  * expiry **required** `string`: The Expiry time of the Token. Maximum token expiry time is set to 30 days. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * keyType **required** `string` (values: primary, secondary): The Key to be used to generate token for user.

### UserTokenResult
* UserTokenResult `object`: Get User Token response details.
  * value `string`: Shared Access Authorization token for the User.

### UserUpdateParameters
* UserUpdateParameters `object`: User update parameters.
  * properties [UserUpdateParametersProperties](#userupdateparametersproperties)

### UserUpdateParametersProperties
* UserUpdateParametersProperties `object`: Parameters supplied to the Update User operation.
  * email `string`: Email address. Must not be empty and must be unique within the service instance.
  * firstName `string`: First name.
  * lastName `string`: Last name.
  * password `string`: User Password.
  * identities `array`: Collection of user identities.
    * items [UserIdentityContract](#useridentitycontract)
  * note `string`: Optional note about a user set by the administrator.
  * state `string` (values: active, blocked, pending, deleted): Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.


