# @datafire/google_appengine
The App Engine Admin API enables developers to provision and manage their App Engine applications.

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
## Operation: apps.locations.list
Lists information about the supported locations for this service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "appsId": {
      "type": "string",
      "description": "Part of `name`. The resource that owns the locations collection, if applicable."
    },
    "filter": {
      "type": "string",
      "description": "The standard list filter."
    },
    "pageSize": {
      "type": "integer",
      "description": "The standard list page size."
    },
    "pageToken": {
      "type": "string",
      "description": "The standard list page token."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "appsId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListLocationsResponse"
}
```
## Operation: apps.locations.get
Get information about a location.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "appsId": {
      "type": "string",
      "description": "Part of `name`. Resource name for the location."
    },
    "locationsId": {
      "type": "string",
      "description": "Part of `name`. See documentation of `appsId`."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "appsId",
    "locationsId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: apps.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding below allows API services to override the binding to use different resource name schemes, such as users/*/operations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "appsId": {
      "type": "string",
      "description": "Part of `name`. The name of the operation collection."
    },
    "filter": {
      "type": "string",
      "description": "The standard list filter."
    },
    "pageSize": {
      "type": "integer",
      "description": "The standard list page size."
    },
    "pageToken": {
      "type": "string",
      "description": "The standard list page token."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "appsId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListOperationsResponse"
}
```
## Operation: apps.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "appsId": {
      "type": "string",
      "description": "Part of `name`. The name of the operation resource."
    },
    "operationsId": {
      "type": "string",
      "description": "Part of `name`. See documentation of `appsId`."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "appsId",
    "operationsId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
