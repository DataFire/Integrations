# @datafire/citrix_scim

Client library for SCIM

## Installation and Usage
```bash
npm install --save @datafire/citrix_scim
```
```js
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

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * filter `string`:  Without a filter, all groups are returned. The filter parameter must be a properly formed SCIM filter using the operator "eq" (equals), "sw" (starts with), or "co" (contains). The filter works for the displayName attribute. Sorting and pagination are supported. For example, GET /Groups?filter=displayName%20eq%20%22Engineering%22&sortBy=displayName&sortOrder=ascending&count=50&startIndex=51

#### Output
* output [GroupCollection](#groupcollection)

### createGroup
Creates a new organization group and adds it to the user domain. Member groups and member users must be in the organization. This call requires the role ROLE_ORG_WRITE.


```js
citrix_scim.createGroup({
  "Authorization": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * body **required** [GroupDefinition](#groupdefinition)

#### Output
* output [Group](#group)

### deleteGroup
Deletes a group from the organization (but not from the account). The group must be in the organization. This call requires the role ROLE_ORG_WRITE.


```js
citrix_scim.deleteGroup({
  "Authorization": "",
  "groupKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * groupKey **required** `integer`: The key of the group to query. The group must be in the organization domain

#### Output
*Output schema unknown*

### getGroup
Queries group details in the organization domain. This call requires the role ROLE_ORG_READ.


```js
citrix_scim.getGroup({
  "Authorization": "",
  "groupKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * groupKey **required** `integer`: The key of the group to query. The group must be in the organization domain

#### Output
* output [Group](#group)

### updateGroup
Updates one or more values of an existing group without sending the full definition. Member groups and member users must be in the organization. This call requires the role ROLE_ORG_WRITE.


```js
citrix_scim.updateGroup({
  "Authorization": "",
  "groupKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * groupKey **required** `integer`: The key of the group to query. The group must be in the organization domain
  * body **required** [GroupDefinition](#groupdefinition)

#### Output
* output [Group](#group)

### replaceGroup
Updates an existing group. The request must include the full group definition. To modify one or more values without sending the full definition, see "Update Group". Member groups and member users must be in the organization. This call requires the role ROLE_ORG_WRITE.


```js
citrix_scim.replaceGroup({
  "Authorization": "",
  "groupKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * groupKey **required** `integer`: The key of the group to query. The group must be in the organization domain
  * body **required** [GroupDefinition](#groupdefinition)

#### Output
* output [Group](#group)

### getUserSchema
Queries the user schema. The user schema is defined in SCIM Core Schema (http://www.simplecloud.info/specs/draft-scim-core-schema-01.html#resource-schema).


```js
citrix_scim.getUserSchema({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'

#### Output
* output [ResourceSchema](#resourceschema)

### getServiceProviderConfigs
Queries service provider configurations. The service provider configurations are defined in SCIM Core Schema (http://www.simplecloud.info/specs/draft-scim-core-schema-01.html#anchor6). This call returns a description, a documentationURL, name, and specURL.


```js
citrix_scim.getServiceProviderConfigs({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'

#### Output
* output [ServiceProviderConfigs](#serviceproviderconfigs)

### getUsers
Queries multiple user identities in the organization domain. Filtering is available.


```js
citrix_scim.getUsers({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * filter `string`:  Without a filter, all users in a user domain are returned. The filter parameter must be a properly formed SCIM filter using either the operator eq (equals) or the operator sw (starts with). The filter works for userName, displayName, name.givenName, and name.familyName attributes. For example, /Users?filter=name.familyName%20eq%20%%22Smith%22

#### Output
* output [UserCollection](#usercollection)

### createUsers
Creates a new organization user and adds them to the user domain. The user email domain must match an existing organization email domain.


```js
citrix_scim.createUsers({
  "Authorization": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * body **required** [UserDefinition](#userdefinition)

#### Output
* output [User](#user)

### getMe
Queries the identity of the current authenticated user.


```js
citrix_scim.getMe({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'

#### Output
* output [User](#user)

### updateMe
Changes a limited set (or all if you choose) of the current authenticated user's data. The updated user email domain must be an existing organization email domain. 


```js
citrix_scim.updateMe({
  "Authorization": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * body **required** [UserDefinition](#userdefinition)

#### Output
* output [User](#user)

### replaceMe
Changes the current authenticated user's displayName, locale, timezone, username and password. The request must include the full user definition (to modify one or more values without sending the full definition, see Update User). The replaced user email domain must be an existing organization email domain. 


```js
citrix_scim.replaceMe({
  "Authorization": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * body **required** [UserDefinition](#userdefinition)

#### Output
* output [User](#user)

### deleteUser
Deletes a user from the organization (but not from the account).


```js
citrix_scim.deleteUser({
  "Authorization": "",
  "userKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * userKey **required** `integer`: The key of the user to query. The user must be in the organization domain

#### Output
*Output schema unknown*

### getUser
Queries user identity in the organization domain.


```js
citrix_scim.getUser({
  "Authorization": "",
  "userKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * userKey **required** `integer`: The key of the user to query. The user must be in the organization domain

#### Output
* output [User](#user)

### updateUser
Changes a limited set (or all if you choose) of the user's data. The updated user email domain must be an existing organization email domain.


```js
citrix_scim.updateUser({
  "Authorization": "",
  "userKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * userKey **required** `integer`: The key of the user to query. The user must be in the organization domain
  * body **required** [UserDefinition](#userdefinition)

#### Output
* output [User](#user)

### replaceUser
Changes an existing user's displayName, locale, timezone, username and password. The request must include the full user definition (to modify one or more values without sending the full definition, see Update User). The replaced user email domain must be an existing organization email domain.


```js
citrix_scim.replaceUser({
  "Authorization": "",
  "userKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'
  * userKey **required** `integer`: The key of the user to query. The user must be in the organization domain
  * body **required** [UserDefinition](#userdefinition)

#### Output
* output [User](#user)



## Definitions

### AuthenticationSchemes
* AuthenticationSchemes `object`: Specifies supported Authentication Scheme properties
  * description **required** `string`: The description of the Authentication Scheme
  * documentationUrl **required** `string`: A HTTP addressable URL pointing to the Authentication Scheme's usage documentation
  * name **required** `string`: The common authentication scheme name, e.g. HTTP Basic
  * specUrl **required** `string`: A HTTP addressable URL pointing to the Authentication Scheme's specification

### Bulk
* Bulk `object`: Specifies BULK configuration options
  * supported **required** `boolean`: Specifies whether the operation is supported

### ChangePassword
* ChangePassword `object`: Specifies Change Password configuration options
  * supported **required** `boolean`: Specifies whether the operation is supported

### Etag
* Etag `object`: Specifies Etag configuration options
  * supported **required** `boolean`: Specifies whether the operation is supported

### Filter
* Filter `object`: Specifies FILTER options
  * supported **required** `boolean`: Specifies whether the operation is supported

### Group
* Group `object`: Describes a group belonging to an organization
  * displayName **required** `string`: The group's display name
  * id **required** `string`: The group's unique key
  * members `array`: An array of members
    * items [Member](#member)
  * meta **required** [GroupMetadata](#groupmetadata)

### GroupCollection
* GroupCollection `object`: Class describing a collection of groups
  * resources **required** `array`: An array of groups
    * items [Group](#group)
  * totalResults **required** `integer`: The number of groups in the collection

### GroupDefinition
* GroupDefinition `object`: Describes the group to create
  * displayName **required** `string`: The group's display name
  * members `array`: An array of members
    * items [Member](#member)

### GroupMetadata
* GroupMetadata `object`: Group metadata
  * created **required** `string`: The date and time the group was created
  * location **required** `string`: The URL where the group can be accessed

### Member
* Member `object`: A member of a group. This can be a group or an user
  * type **required** `string` (values: group, user): The type of member
  * value **required** `string`: Depending on the member type this is a groupKey or an userKey

### Patch
* Patch `object`: Specifies PATCH configuration options
  * supported **required** `boolean`: Specifies whether the operation is supported

### ResourceSchema
* ResourceSchema `object`: Describes the attributes and metadata constituting a resource such as a user.
  * attributes **required** `array`: The resource's attributes
    * items [SchemaAttribute](#schemaattribute)
  * description **required** `string`: The resource's description
  * endpoint **required** `string`: The resource's HTTP addressable endpoint relative to the base URL, e.g. /Users.
  * id **required** `string`: The resource's id, e.g. urn:scim:schemas:core:1.0:User
  * name **required** `string`: The resource's name, e.g. "User"
  * schema **required** `string`: The resource's associated schema, e.g. urn:scim:schemas:core:1.0

### SchemaAttribute
* SchemaAttribute `object`: Describes a resource attribute
  * caseExact **required** `boolean`: Indicates whether the attribute is case sensitive
  * description **required** `string`: The attribute's description
  * multiValued **required** `boolean`: Indicates whether the attribute can have multiple values
  * name **required** `string`: The attribute's name
  * readOnly **required** `boolean`: Indicates whether the attribute is mutable
  * required **required** `boolean`: Indicates whether the attribute is required
  * schema **required** `string`: The attribute's associated scheme, e.g. urn:scim:schemas:core:1.0
  * subAttributes `array`: The attribute's potential sub-attributes
    * items [SchemaSubAttribute](#schemasubattribute)
  * type **required** `string`: The attribute's data type, e.g. String

### SchemaSubAttribute
* SchemaSubAttribute `object`: Describes the sub-attribute of a resource attribute
  * caseExact **required** `boolean`: Indicates whether the attribute is case sensitive
  * description **required** `string`: The attribute's description
  * name **required** `string`: The attribute's name
  * readOnly **required** `boolean`: Indicates whether the attribute is mutable
  * required **required** `boolean`: Indicates whether the attribute is required
  * type **required** `string`: The attribute's data type, e.g. String

### ServiceProviderConfigs
* ServiceProviderConfigs `object`: Represents the Service Provider's configuration
  * authenticationSchemes **required** [AuthenticationSchemes](#authenticationschemes)
  * bulk **required** [Bulk](#bulk)
  * changePassword **required** [ChangePassword](#changepassword)
  * documentationUrl **required** `string`: An HTTP addressable URL pointing to the Service Provider's help documentation
  * etag **required** [Etag](#etag)
  * filter **required** [Filter](#filter)
  * patch **required** [Patch](#patch)
  * sort **required** [Sort](#sort)
  * xmlDataFormat **required** [XmlDataFormat](#xmldataformat)

### Sort
* Sort `object`: Specifies Sort configuration options
  * supported **required** `boolean`: Specifies whether the operation is supported

### User
* User `object`: Describes a user belonging to an organization
  * displayName **required** `string`: The user's display name
  * id **required** `string`: The user's unique key
  * locale **required** `string`: The user's language settings
  * meta **required** [UserMetadata](#usermetadata)
  * name **required** [UserFullName](#userfullname)
  * timezone **required** `string`: The user's time zone
  * userName **required** `string`: The user's username, usually their email address

### UserCollection
* UserCollection `object`: Class describing a collection of users
  * resources **required** `array`: The list of users
    * items [User](#user)
  * totalResults **required** `integer`: The number of users in the collection

### UserDefinition
* UserDefinition `object`: Describes a new user
  * displayName `string`: The user's display name
  * locale `string`: The user's language settings
  * name [UserFullName](#userfullname)
  * password `string`: The user's password
  * timezone `string`: The user's time zone
  * userName `string`: The user's username, usually their email address

### UserFullName
* UserFullName `object`: The full name of the user
  * familyName **required** `string`: The user's surname
  * givenName **required** `string`: The user's first name

### UserMetadata
* UserMetadata `object`: User metadata
  * created **required** `string`: The date and time the user was created
  * location **required** `string`: The URL where the user can be accessed

### XmlDataFormat
* XmlDataFormat `object`: Specifies whether the XML data format is supported
  * supported **required** `boolean`: Specifies whether the operation is supported


