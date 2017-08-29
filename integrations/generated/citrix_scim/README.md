# @datafire/citrix_scim

Client library for SCIM

## Installation and Usage
```bash
npm install --save datafire @datafire/citrix_scim
```

```js
let datafire = require('datafire');
let citrix_scim = require('@datafire/citrix_scim').create();

citrix_scim.getGroups({}).then(data => {
  console.log(data);
})
```

## Description
The SCIM API lets you manage users in your organization. You can then automate the provisioning of product licenses for these users, and they can use your company's Single Sign-On solution through an Identity Provider.

## Actions
### getGroups
Queries multiple group identities in the organization domain. Filtering, sorting and pagination are available. This call requires the role ROLE_ORG_READ.


```js
citrix_scim.getGroups({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* filter (string) -  Without a filter, all groups are returned. The filter parameter must be a properly formed SCIM filter using the operator "eq" (equals), "sw" (starts with), or "co" (contains). The filter works for the displayName attribute. Sorting and pagination are supported. For example, GET /Groups?filter=displayName%20eq%20%22Engineering%22&sortBy=displayName&sortOrder=ascending&count=50&startIndex=51

### createGroup
Creates a new organization group and adds it to the user domain. Member groups and member users must be in the organization. This call requires the role ROLE_ORG_WRITE.


```js
citrix_scim.createGroup({
  "Authorization": "",
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* body (undefined) **required** - Describes the group to create

### deleteGroup
Deletes a group from the organization (but not from the account). The group must be in the organization. This call requires the role ROLE_ORG_WRITE.


```js
citrix_scim.deleteGroup({
  "Authorization": "",
  "groupKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* groupKey (integer) **required** - The key of the group to query. The group must be in the organization domain

### getGroup
Queries group details in the organization domain. This call requires the role ROLE_ORG_READ.


```js
citrix_scim.getGroup({
  "Authorization": "",
  "groupKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* groupKey (integer) **required** - The key of the group to query. The group must be in the organization domain

### updateGroup
Updates one or more values of an existing group without sending the full definition. Member groups and member users must be in the organization. This call requires the role ROLE_ORG_WRITE.


```js
citrix_scim.updateGroup({
  "Authorization": "",
  "groupKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* groupKey (integer) **required** - The key of the group to query. The group must be in the organization domain
* body (undefined) **required** - Describes the group to create

### replaceGroup
Updates an existing group. The request must include the full group definition. To modify one or more values without sending the full definition, see "Update Group". Member groups and member users must be in the organization. This call requires the role ROLE_ORG_WRITE.


```js
citrix_scim.replaceGroup({
  "Authorization": "",
  "groupKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* groupKey (integer) **required** - The key of the group to query. The group must be in the organization domain
* body (undefined) **required** - Describes the group to create

### getUserSchema
Queries the user schema. The user schema is defined in SCIM Core Schema (http://www.simplecloud.info/specs/draft-scim-core-schema-01.html#resource-schema).


```js
citrix_scim.getUserSchema({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'

### getServiceProviderConfigs
Queries service provider configurations. The service provider configurations are defined in SCIM Core Schema (http://www.simplecloud.info/specs/draft-scim-core-schema-01.html#anchor6). This call returns a description, a documentationURL, name, and specURL.


```js
citrix_scim.getServiceProviderConfigs({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'

### getUsers
Queries multiple user identities in the organization domain. Filtering is available.


```js
citrix_scim.getUsers({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* filter (string) -  Without a filter, all users in a user domain are returned. The filter parameter must be a properly formed SCIM filter using either the operator eq (equals) or the operator sw (starts with). The filter works for userName, displayName, name.givenName, and name.familyName attributes. For example, /Users?filter=name.familyName%20eq%20%%22Smith%22

### createUsers
Creates a new organization user and adds them to the user domain. The user email domain must match an existing organization email domain.


```js
citrix_scim.createUsers({
  "Authorization": "",
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* body (undefined) **required** - Describes a new user

### getMe
Queries the identity of the current authenticated user.


```js
citrix_scim.getMe({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'

### updateMe
Changes a limited set (or all if you choose) of the current authenticated user's data. The updated user email domain must be an existing organization email domain. 


```js
citrix_scim.updateMe({
  "Authorization": "",
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* body (undefined) **required** - Describes a new user

### replaceMe
Changes the current authenticated user's displayName, locale, timezone, username and password. The request must include the full user definition (to modify one or more values without sending the full definition, see Update User). The replaced user email domain must be an existing organization email domain. 


```js
citrix_scim.replaceMe({
  "Authorization": "",
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* body (undefined) **required** - Describes a new user

### deleteUser
Deletes a user from the organization (but not from the account).


```js
citrix_scim.deleteUser({
  "Authorization": "",
  "userKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* userKey (integer) **required** - The key of the user to query. The user must be in the organization domain

### getUser
Queries user identity in the organization domain.


```js
citrix_scim.getUser({
  "Authorization": "",
  "userKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* userKey (integer) **required** - The key of the user to query. The user must be in the organization domain

### updateUser
Changes a limited set (or all if you choose) of the user's data. The updated user email domain must be an existing organization email domain.


```js
citrix_scim.updateUser({
  "Authorization": "",
  "userKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* userKey (integer) **required** - The key of the user to query. The user must be in the organization domain
* body (undefined) **required** - Describes a new user

### replaceUser
Changes an existing user's displayName, locale, timezone, username and password. The request must include the full user definition (to modify one or more values without sending the full definition, see Update User). The replaced user email domain must be an existing organization email domain.


```js
citrix_scim.replaceUser({
  "Authorization": "",
  "userKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
* userKey (integer) **required** - The key of the user to query. The user must be in the organization domain
* body (undefined) **required** - Describes a new user

