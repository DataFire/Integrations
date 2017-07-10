# @datafire/google_storage
Stores and retrieves potentially large, immutable data objects.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: buckets.list
Retrieves a list of buckets for a given project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "A valid API project identifier."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.",
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A previously-returned page token representing part of the larger set of results to view."
    },
    "prefix": {
      "type": "string",
      "description": "Filter results to buckets whose names begin with this prefix."
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to noAcl.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Buckets"
}
```
## Operation: buckets.insert
Creates a new bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "A valid API project identifier."
    },
    "predefinedAcl": {
      "type": "string",
      "description": "Apply a predefined set of access controls to this bucket.",
      "enum": [
        "authenticatedRead",
        "private",
        "projectPrivate",
        "publicRead",
        "publicReadWrite"
      ]
    },
    "predefinedDefaultObjectAcl": {
      "type": "string",
      "description": "Apply a predefined set of default object access controls to this bucket.",
      "enum": [
        "authenticatedRead",
        "bucketOwnerFullControl",
        "bucketOwnerRead",
        "private",
        "projectPrivate",
        "publicRead"
      ]
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "body": {
      "$ref": "#/definitions/Bucket"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: buckets.delete
Permanently deletes an empty bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "If set, only deletes the bucket if its metageneration matches this value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "If set, only deletes the bucket if its metageneration does not match this value."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.get
Returns metadata for the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value."
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to noAcl.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: buckets.patch
Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value."
    },
    "predefinedAcl": {
      "type": "string",
      "description": "Apply a predefined set of access controls to this bucket.",
      "enum": [
        "authenticatedRead",
        "private",
        "projectPrivate",
        "publicRead",
        "publicReadWrite"
      ]
    },
    "predefinedDefaultObjectAcl": {
      "type": "string",
      "description": "Apply a predefined set of default object access controls to this bucket.",
      "enum": [
        "authenticatedRead",
        "bucketOwnerFullControl",
        "bucketOwnerRead",
        "private",
        "projectPrivate",
        "publicRead"
      ]
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to full.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "body": {
      "$ref": "#/definitions/Bucket"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: buckets.update
Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value."
    },
    "predefinedAcl": {
      "type": "string",
      "description": "Apply a predefined set of access controls to this bucket.",
      "enum": [
        "authenticatedRead",
        "private",
        "projectPrivate",
        "publicRead",
        "publicReadWrite"
      ]
    },
    "predefinedDefaultObjectAcl": {
      "type": "string",
      "description": "Apply a predefined set of default object access controls to this bucket.",
      "enum": [
        "authenticatedRead",
        "bucketOwnerFullControl",
        "bucketOwnerRead",
        "private",
        "projectPrivate",
        "publicRead"
      ]
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to full.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "body": {
      "$ref": "#/definitions/Bucket"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: bucketAccessControls.list
Retrieves ACL entries on the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BucketAccessControls"
}
```
## Operation: bucketAccessControls.insert
Creates a new ACL entry on the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "body": {
      "$ref": "#/definitions/BucketAccessControl"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BucketAccessControl"
}
```
## Operation: bucketAccessControls.delete
Permanently deletes the ACL entry for the specified entity on the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "entity"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: bucketAccessControls.get
Returns the ACL entry for the specified entity on the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "entity"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BucketAccessControl"
}
```
## Operation: bucketAccessControls.patch
Updates an ACL entry on the specified bucket. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "body": {
      "$ref": "#/definitions/BucketAccessControl"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "entity"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BucketAccessControl"
}
```
## Operation: bucketAccessControls.update
Updates an ACL entry on the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "body": {
      "$ref": "#/definitions/BucketAccessControl"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "entity"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BucketAccessControl"
}
```
## Operation: defaultObjectAccessControls.list
Retrieves default object ACL entries on the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "If present, only return default ACL listing if the bucket's current metageneration matches this value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "If present, only return default ACL listing if the bucket's current metageneration does not match the given value."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectAccessControls"
}
```
## Operation: defaultObjectAccessControls.insert
Creates a new default object ACL entry on the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "body": {
      "$ref": "#/definitions/ObjectAccessControl"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectAccessControl"
}
```
## Operation: defaultObjectAccessControls.delete
Permanently deletes the default object ACL entry for the specified entity on the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "entity"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: defaultObjectAccessControls.get
Returns the default object ACL entry for the specified entity on the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "entity"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectAccessControl"
}
```
## Operation: defaultObjectAccessControls.patch
Updates a default object ACL entry on the specified bucket. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "body": {
      "$ref": "#/definitions/ObjectAccessControl"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "entity"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectAccessControl"
}
```
## Operation: defaultObjectAccessControls.update
Updates a default object ACL entry on the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "body": {
      "$ref": "#/definitions/ObjectAccessControl"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "entity"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectAccessControl"
}
```
## Operation: buckets.getIamPolicy
Returns an IAM policy for the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Policy"
}
```
## Operation: buckets.setIamPolicy
Updates an IAM policy for the specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "body": {
      "$ref": "#/definitions/Policy"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Policy"
}
```
## Operation: buckets.testIamPermissions
Tests a set of permissions on the given bucket to see which, if any, are held by the caller.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "permissions": {
      "type": "array",
      "description": "Permissions to test."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "permissions"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TestIamPermissionsResponse"
}
```
## Operation: notifications.list
Retrieves a list of notification subscriptions for a given bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a GCS bucket."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Notifications"
}
```
## Operation: notifications.insert
Creates a notification subscription for a given bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Notification"
    },
    "bucket": {
      "type": "string",
      "description": "The parent bucket of the notification."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Notification"
}
```
## Operation: notifications.delete
Permanently deletes a notification subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "The parent bucket of the notification."
    },
    "notification": {
      "type": "string",
      "description": "ID of the notification to delete."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "notification"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: notifications.get
View a notification configuration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "The parent bucket of the notification."
    },
    "notification": {
      "type": "string",
      "description": "Notification ID"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "notification"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Notification"
}
```
## Operation: objects.list
Retrieves a list of objects matching the criteria.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of the bucket in which to look for objects."
    },
    "delimiter": {
      "type": "string",
      "description": "Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.",
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A previously-returned page token representing part of the larger set of results to view."
    },
    "prefix": {
      "type": "string",
      "description": "Filter results to objects whose names begin with this prefix."
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to noAcl.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "versions": {
      "type": "boolean",
      "description": "If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Objects"
}
```
## Operation: objects.insert
Stores a new object and metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any."
    },
    "contentEncoding": {
      "type": "string",
      "description": "If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded."
    },
    "ifGenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current generation matches the given value."
    },
    "ifGenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current generation does not match the given value."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration matches the given value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration does not match the given value."
    },
    "name": {
      "type": "string",
      "description": "Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "predefinedAcl": {
      "type": "string",
      "description": "Apply a predefined set of access controls to this object.",
      "enum": [
        "authenticatedRead",
        "bucketOwnerFullControl",
        "bucketOwnerRead",
        "private",
        "projectPrivate",
        "publicRead"
      ]
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "body": {
      "$ref": "#/definitions/Object"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: objects.watchAll
Watch for changes on all objects in a bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of the bucket in which to look for objects."
    },
    "delimiter": {
      "type": "string",
      "description": "Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.",
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A previously-returned page token representing part of the larger set of results to view."
    },
    "prefix": {
      "type": "string",
      "description": "Filter results to objects whose names begin with this prefix."
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to noAcl.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "versions": {
      "type": "boolean",
      "description": "If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning."
    },
    "resource": {
      "$ref": "#/definitions/Channel"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Channel"
}
```
## Operation: objects.delete
Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of the bucket in which the object resides."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "generation": {
      "type": "string",
      "description": "If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default)."
    },
    "ifGenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current generation matches the given value."
    },
    "ifGenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current generation does not match the given value."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration matches the given value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration does not match the given value."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: objects.get
Retrieves an object or its metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of the bucket in which the object resides."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "ifGenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's generation matches the given value."
    },
    "ifGenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's generation does not match the given value."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration matches the given value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration does not match the given value."
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to noAcl.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: objects.patch
Updates an object's metadata. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of the bucket in which the object resides."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "ifGenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current generation matches the given value."
    },
    "ifGenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current generation does not match the given value."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration matches the given value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration does not match the given value."
    },
    "predefinedAcl": {
      "type": "string",
      "description": "Apply a predefined set of access controls to this object.",
      "enum": [
        "authenticatedRead",
        "bucketOwnerFullControl",
        "bucketOwnerRead",
        "private",
        "projectPrivate",
        "publicRead"
      ]
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to full.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "body": {
      "$ref": "#/definitions/Object"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: objects.update
Updates an object's metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of the bucket in which the object resides."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "ifGenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current generation matches the given value."
    },
    "ifGenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current generation does not match the given value."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration matches the given value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration does not match the given value."
    },
    "predefinedAcl": {
      "type": "string",
      "description": "Apply a predefined set of access controls to this object.",
      "enum": [
        "authenticatedRead",
        "bucketOwnerFullControl",
        "bucketOwnerRead",
        "private",
        "projectPrivate",
        "publicRead"
      ]
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to full.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "body": {
      "$ref": "#/definitions/Object"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: objectAccessControls.list
Retrieves ACL entries on the specified object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectAccessControls"
}
```
## Operation: objectAccessControls.insert
Creates a new ACL entry on the specified object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "body": {
      "$ref": "#/definitions/ObjectAccessControl"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectAccessControl"
}
```
## Operation: objectAccessControls.delete
Permanently deletes the ACL entry for the specified entity on the specified object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object",
    "entity"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: objectAccessControls.get
Returns the ACL entry for the specified entity on the specified object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object",
    "entity"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectAccessControl"
}
```
## Operation: objectAccessControls.patch
Updates an ACL entry on the specified object. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "body": {
      "$ref": "#/definitions/ObjectAccessControl"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object",
    "entity"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectAccessControl"
}
```
## Operation: objectAccessControls.update
Updates an ACL entry on the specified object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of a bucket."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "entity": {
      "type": "string",
      "description": "The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "body": {
      "$ref": "#/definitions/ObjectAccessControl"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object",
    "entity"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectAccessControl"
}
```
## Operation: objects.getIamPolicy
Returns an IAM policy for the specified object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of the bucket in which the object resides."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Policy"
}
```
## Operation: objects.setIamPolicy
Updates an IAM policy for the specified object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of the bucket in which the object resides."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "body": {
      "$ref": "#/definitions/Policy"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Policy"
}
```
## Operation: objects.testIamPermissions
Tests a set of permissions on the given object to see which, if any, are held by the caller.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucket": {
      "type": "string",
      "description": "Name of the bucket in which the object resides."
    },
    "object": {
      "type": "string",
      "description": "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "permissions": {
      "type": "array",
      "description": "Permissions to test."
    },
    "generation": {
      "type": "string",
      "description": "If present, selects a specific revision of this object (as opposed to the latest version, the default)."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket",
    "object",
    "permissions"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TestIamPermissionsResponse"
}
```
## Operation: objects.compose
Concatenates a list of existing objects into a new object in the same bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "destinationBucket": {
      "type": "string",
      "description": "Name of the bucket in which to store the new object."
    },
    "destinationObject": {
      "type": "string",
      "description": "Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "destinationPredefinedAcl": {
      "type": "string",
      "description": "Apply a predefined set of access controls to the destination object.",
      "enum": [
        "authenticatedRead",
        "bucketOwnerFullControl",
        "bucketOwnerRead",
        "private",
        "projectPrivate",
        "publicRead"
      ]
    },
    "ifGenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current generation matches the given value."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the object's current metageneration matches the given value."
    },
    "body": {
      "$ref": "#/definitions/ComposeRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "destinationBucket",
    "destinationObject"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: objects.copy
Copies a source object to a destination object. Optionally overrides metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sourceBucket": {
      "type": "string",
      "description": "Name of the bucket in which to find the source object."
    },
    "sourceObject": {
      "type": "string",
      "description": "Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "destinationBucket": {
      "type": "string",
      "description": "Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "destinationObject": {
      "type": "string",
      "description": "Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any."
    },
    "destinationPredefinedAcl": {
      "type": "string",
      "description": "Apply a predefined set of access controls to the destination object.",
      "enum": [
        "authenticatedRead",
        "bucketOwnerFullControl",
        "bucketOwnerRead",
        "private",
        "projectPrivate",
        "publicRead"
      ]
    },
    "ifGenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the destination object's current generation matches the given value."
    },
    "ifGenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the destination object's current generation does not match the given value."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the destination object's current metageneration matches the given value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the destination object's current metageneration does not match the given value."
    },
    "ifSourceGenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the source object's generation matches the given value."
    },
    "ifSourceGenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the source object's generation does not match the given value."
    },
    "ifSourceMetagenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the source object's current metageneration matches the given value."
    },
    "ifSourceMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the source object's current metageneration does not match the given value."
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "sourceGeneration": {
      "type": "string",
      "description": "If present, selects a specific revision of the source object (as opposed to the latest version, the default)."
    },
    "body": {
      "$ref": "#/definitions/Object"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "sourceBucket",
    "sourceObject",
    "destinationBucket",
    "destinationObject"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: objects.rewrite
Rewrites a source object to a destination object. Optionally overrides metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sourceBucket": {
      "type": "string",
      "description": "Name of the bucket in which to find the source object."
    },
    "sourceObject": {
      "type": "string",
      "description": "Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "destinationBucket": {
      "type": "string",
      "description": "Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any."
    },
    "destinationObject": {
      "type": "string",
      "description": "Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts."
    },
    "destinationPredefinedAcl": {
      "type": "string",
      "description": "Apply a predefined set of access controls to the destination object.",
      "enum": [
        "authenticatedRead",
        "bucketOwnerFullControl",
        "bucketOwnerRead",
        "private",
        "projectPrivate",
        "publicRead"
      ]
    },
    "ifGenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the destination object's current generation matches the given value."
    },
    "ifGenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the destination object's current generation does not match the given value."
    },
    "ifMetagenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the destination object's current metageneration matches the given value."
    },
    "ifMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the destination object's current metageneration does not match the given value."
    },
    "ifSourceGenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the source object's generation matches the given value."
    },
    "ifSourceGenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the source object's generation does not match the given value."
    },
    "ifSourceMetagenerationMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the source object's current metageneration matches the given value."
    },
    "ifSourceMetagenerationNotMatch": {
      "type": "string",
      "description": "Makes the operation conditional on whether the source object's current metageneration does not match the given value."
    },
    "maxBytesRewrittenPerCall": {
      "type": "string",
      "description": "The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid."
    },
    "projection": {
      "type": "string",
      "description": "Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.",
      "enum": [
        "full",
        "noAcl"
      ]
    },
    "rewriteToken": {
      "type": "string",
      "description": "Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request."
    },
    "sourceGeneration": {
      "type": "string",
      "description": "If present, selects a specific revision of the source object (as opposed to the latest version, the default)."
    },
    "body": {
      "$ref": "#/definitions/Object"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "sourceBucket",
    "sourceObject",
    "destinationBucket",
    "destinationObject"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RewriteResponse"
}
```
## Operation: channels.stop
Stop watching resources through this channel

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "resource": {
      "$ref": "#/definitions/Channel"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: projects.serviceAccount.get
Get the email address of this project's GCS service account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "Project ID"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServiceAccount"
}
```
