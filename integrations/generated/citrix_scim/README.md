# @datafire/citrix_scim
The SCIM API lets you manage users in your organization. You can then automate the provisioning of product licenses for these users, and they can use your company's Single Sign-On solution through an Identity Provider.

## Operation: getGroups
Queries multiple group identities in the organization domain. Filtering, sorting and pagination are available. This call requires the role ROLE_ORG_READ.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "filter": {
      "type": "string",
      "description": " Without a filter, all groups are returned. The filter parameter must be a properly formed SCIM filter using the operator \"eq\" (equals), \"sw\" (starts with), or \"co\" (contains). The filter works for the displayName attribute. Sorting and pagination are supported. For example, GET /Groups?filter=displayName%20eq%20%22Engineering%22&sortBy=displayName&sortOrder=ascending&count=50&startIndex=51"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupCollection"
}
```
## Operation: createGroup
Creates a new organization group and adds it to the user domain. Member groups and member users must be in the organization. This call requires the role ROLE_ORG_WRITE.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "body": {
      "$ref": "#/definitions/GroupDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: deleteGroup
Deletes a group from the organization (but not from the account). The group must be in the organization. This call requires the role ROLE_ORG_WRITE.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "groupKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the group to query. The group must be in the organization domain"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "groupKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getGroup
Queries group details in the organization domain. This call requires the role ROLE_ORG_READ.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "groupKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the group to query. The group must be in the organization domain"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "groupKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: updateGroup
Updates one or more values of an existing group without sending the full definition. Member groups and member users must be in the organization. This call requires the role ROLE_ORG_WRITE.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "groupKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the group to query. The group must be in the organization domain"
    },
    "body": {
      "$ref": "#/definitions/GroupDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "groupKey",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: replaceGroup
Updates an existing group. The request must include the full group definition. To modify one or more values without sending the full definition, see "Update Group". Member groups and member users must be in the organization. This call requires the role ROLE_ORG_WRITE.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "groupKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the group to query. The group must be in the organization domain"
    },
    "body": {
      "$ref": "#/definitions/GroupDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "groupKey",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: getUserSchema
Queries the user schema. The user schema is defined in SCIM Core Schema (http://www.simplecloud.info/specs/draft-scim-core-schema-01.html#resource-schema).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceSchema"
}
```
## Operation: getServiceProviderConfigs
Queries service provider configurations. The service provider configurations are defined in SCIM Core Schema (http://www.simplecloud.info/specs/draft-scim-core-schema-01.html#anchor6). This call returns a description, a documentationURL, name, and specURL.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServiceProviderConfigs"
}
```
## Operation: getUsers
Queries multiple user identities in the organization domain. Filtering is available.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "filter": {
      "type": "string",
      "description": " Without a filter, all users in a user domain are returned. The filter parameter must be a properly formed SCIM filter using either the operator eq (equals) or the operator sw (starts with). The filter works for userName, displayName, name.givenName, and name.familyName attributes. For example, /Users?filter=name.familyName%20eq%20%%22Smith%22"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserCollection"
}
```
## Operation: createUsers
Creates a new organization user and adds them to the user domain. The user email domain must match an existing organization email domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "body": {
      "$ref": "#/definitions/UserDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: getMe
Queries the identity of the current authenticated user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: updateMe
Changes a limited set (or all if you choose) of the current authenticated user's data. The updated user email domain must be an existing organization email domain. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "body": {
      "$ref": "#/definitions/UserDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: replaceMe
Changes the current authenticated user's displayName, locale, timezone, username and password. The request must include the full user definition (to modify one or more values without sending the full definition, see Update User). The replaced user email domain must be an existing organization email domain. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "body": {
      "$ref": "#/definitions/UserDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: deleteUser
Deletes a user from the organization (but not from the account).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "userKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the user to query. The user must be in the organization domain"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "userKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUser
Queries user identity in the organization domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "userKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the user to query. The user must be in the organization domain"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "userKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: updateUser
Changes a limited set (or all if you choose) of the user's data. The updated user email domain must be an existing organization email domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "userKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the user to query. The user must be in the organization domain"
    },
    "body": {
      "$ref": "#/definitions/UserDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "userKey",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: replaceUser
Changes an existing user's displayName, locale, timezone, username and password. The request must include the full user definition (to modify one or more values without sending the full definition, see Update User). The replaced user email domain must be an existing organization email domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token prefixed with 'Bearer ', e.g. 'Bearer 123456abcdef'"
    },
    "userKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the user to query. The user must be in the organization domain"
    },
    "body": {
      "$ref": "#/definitions/UserDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "userKey",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
