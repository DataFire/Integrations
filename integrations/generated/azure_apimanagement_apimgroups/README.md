# @datafire/azure_apimanagement_apimgroups

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimgroups
```
```js
let azure_apimanagement_apimgroups = require('@datafire/azure_apimanagement_apimgroups').create({
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

Use these REST APIs for performing operations on Group entity in your Azure API Management deployment. Groups are used to manage the visibility of products to developers. Each API Management service instance comes with the following immutable system groups whose membership is automatically managed by API Management.  - **Administrators** - Azure subscription administrators are members of this group. - **Developers** - Authenticated developer portal users fall into this group. - **Guests** - Unauthenticated developer portal users are placed into this group. In addition to these system groups, administrators can create custom groups or [leverage external groups in associated Azure Active Directory tenants](https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-aad#how-to-add-an-external-azure-active-directory-group). Custom and external groups can be used alongside system groups in giving developers visibility and access to API products. For example, you could create one custom group for developers affiliated with a specific partner organization and allow them access to the APIs from a product containing relevant APIs only. A user can be a member of more than one group.

## Actions

### Group_ListByService
Lists a collection of groups defined within a service instance.


```js
azure_apimanagement_apimgroups.Group_ListByService({
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
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| aadObjectId | filter | eq |     | </br>
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

### Group_Delete
Deletes specific group of the API Management service instance.


```js
azure_apimanagement_apimgroups.Group_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Group_Get
Gets the details of the group specified by its identifier.


```js
azure_apimanagement_apimgroups.Group_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Contract details.
  * properties `object`: Group contract Properties.
    * builtIn `boolean`: true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
    * description `string`: Group description. Can contain HTML formatting tags.
    * displayName **required** `string`: Group name.
    * externalId `string`: For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
    * type `string` (values: custom, system, external): Group type.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### Group_GetEntityTag
Gets the entity state (Etag) version of the group specified by its identifier.


```js
azure_apimanagement_apimgroups.Group_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Group_Update
Updates the details of the group specified by its identifier.


```js
azure_apimanagement_apimgroups.Group_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
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
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Parameters supplied to the Update Group operation.
    * properties `object`: Parameters supplied to the Update Group operation.
      * description `string`: Group description.
      * displayName `string`: Group name.
      * externalId `string`: Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
      * type `string` (values: custom, system, external): Group type.
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Group_CreateOrUpdate
Creates or Updates a group.


```js
azure_apimanagement_apimgroups.Group_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * parameters **required** `object`: Parameters supplied to the Create Group operation.
    * properties `object`: Parameters supplied to the Create Group operation.
      * description `string`: Group description.
      * displayName **required** `string`: Group name.
      * externalId `string`: Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
      * type `string` (values: custom, system, external): Group type.
  * If-Match `string`: ETag of the Entity. Not required when creating an entity, but required when updating an entity.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Contract details.
  * properties `object`: Group contract Properties.
    * builtIn `boolean`: true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
    * description `string`: Group description. Can contain HTML formatting tags.
    * displayName **required** `string`: Group name.
    * externalId `string`: For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
    * type `string` (values: custom, system, external): Group type.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### GroupUser_List
Lists a collection of user entities associated with the group.


```js
azure_apimanagement_apimgroups.GroupUser_List({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| firstName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| lastName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| email | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| registrationDate | filter | ge, le, eq, ne, gt, lt |     | </br>| note | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
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

### GroupUser_Delete
Remove existing user from existing group.


```js
azure_apimanagement_apimgroups.GroupUser_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "userId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### GroupUser_CheckEntityExists
Checks that user entity specified by identifier is associated with the group entity.


```js
azure_apimanagement_apimgroups.GroupUser_CheckEntityExists({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "userId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
  * userId **required** `string`: User identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### GroupUser_Create
Add existing user to existing group


```js
azure_apimanagement_apimgroups.GroupUser_Create({
  "resourceGroupName": "",
  "serviceName": "",
  "groupId": "",
  "userId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * groupId **required** `string`: Group identifier. Must be unique in the current API Management service instance.
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



## Definitions

*This integration has no definitions*
