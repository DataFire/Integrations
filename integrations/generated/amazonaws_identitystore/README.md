# @datafire/amazonaws_identitystore

Client library for AWS SSO Identity Store

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_identitystore
```
```js
let amazonaws_identitystore = require('@datafire/amazonaws_identitystore').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### DescribeGroup



```js
amazonaws_identitystore.DescribeGroup({
  "IdentityStoreId": null,
  "GroupId": null
}, context)
```

#### Input
* input `object`
  * GroupId **required**
  * IdentityStoreId **required**

#### Output
* output [DescribeGroupResponse](#describegroupresponse)

### DescribeUser



```js
amazonaws_identitystore.DescribeUser({
  "IdentityStoreId": null,
  "UserId": null
}, context)
```

#### Input
* input `object`
  * IdentityStoreId **required**
  * UserId **required**

#### Output
* output [DescribeUserResponse](#describeuserresponse)

### ListGroups



```js
amazonaws_identitystore.ListGroups({
  "IdentityStoreId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * IdentityStoreId **required**
  * MaxResults
  * NextToken

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### ListUsers



```js
amazonaws_identitystore.ListUsers({
  "IdentityStoreId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * IdentityStoreId **required**
  * MaxResults
  * NextToken

#### Output
* output [ListUsersResponse](#listusersresponse)



## Definitions

### AccessDeniedException


### AttributePath
* AttributePath `string`

### DescribeGroupRequest
* DescribeGroupRequest `object`
  * GroupId **required**
  * IdentityStoreId **required**

### DescribeGroupResponse
* DescribeGroupResponse `object`
  * DisplayName **required**
  * GroupId **required**

### DescribeUserRequest
* DescribeUserRequest `object`
  * IdentityStoreId **required**
  * UserId **required**

### DescribeUserResponse
* DescribeUserResponse `object`
  * UserId **required**
  * UserName **required**

### Filter
* Filter `object`: A query filter used by <code>ListUsers</code> and <code>ListGroup</code>. This filter object provides the attribute name and attribute value to search users or groups.
  * AttributePath **required**
  * AttributeValue **required**

### Filters
* Filters `array`
  * items [Filter](#filter)

### Group
* Group `object`: A group object, which contains a specified group’s metadata and attributes.
  * DisplayName **required**
  * GroupId **required**

### GroupDisplayName
* GroupDisplayName `string`

### Groups
* Groups `array`
  * items [Group](#group)

### IdentityStoreId
* IdentityStoreId `string`

### InternalServerException


### ListGroupsRequest
* ListGroupsRequest `object`
  * Filters
    * items [Filter](#filter)
  * IdentityStoreId **required**
  * MaxResults
  * NextToken

### ListGroupsResponse
* ListGroupsResponse `object`
  * Groups **required**
    * items [Group](#group)
  * NextToken

### ListUsersRequest
* ListUsersRequest `object`
  * Filters
    * items [Filter](#filter)
  * IdentityStoreId **required**
  * MaxResults
  * NextToken

### ListUsersResponse
* ListUsersResponse `object`
  * NextToken
  * Users **required**
    * items [User](#user)

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### ResourceId
* ResourceId `string`

### ResourceNotFoundException


### SensitiveStringType
* SensitiveStringType `string`

### ThrottlingException


### User
* User `object`: A user object, which contains a specified user’s metadata and attributes.
  * UserId **required**
  * UserName **required**

### UserName
* UserName `string`

### Users
* Users `array`
  * items [User](#user)

### ValidationException



