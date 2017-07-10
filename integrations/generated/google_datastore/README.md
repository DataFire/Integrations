# @datafire/google_datastore
Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.


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
## Operation: projects.allocateIds
Allocates IDs for the given keys, which is useful for referencing an entity
before it is inserted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the project against which to make the request."
    },
    "body": {
      "$ref": "#/definitions/AllocateIdsRequest"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/AllocateIdsResponse"
}
```
## Operation: projects.beginTransaction
Begins a new transaction.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the project against which to make the request."
    },
    "body": {
      "$ref": "#/definitions/BeginTransactionRequest"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/BeginTransactionResponse"
}
```
## Operation: projects.commit
Commits a transaction, optionally creating, deleting or modifying some
entities.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the project against which to make the request."
    },
    "body": {
      "$ref": "#/definitions/CommitRequest"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/CommitResponse"
}
```
## Operation: projects.lookup
Looks up entities by key.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the project against which to make the request."
    },
    "body": {
      "$ref": "#/definitions/LookupRequest"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/LookupResponse"
}
```
## Operation: projects.rollback
Rolls back a transaction.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the project against which to make the request."
    },
    "body": {
      "$ref": "#/definitions/RollbackRequest"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/RollbackResponse"
}
```
## Operation: projects.runQuery
Queries for entities.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the project against which to make the request."
    },
    "body": {
      "$ref": "#/definitions/RunQueryRequest"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/RunQueryResponse"
}
```
