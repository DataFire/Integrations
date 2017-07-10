# @datafire/google_people
Provides access to information about profiles and contacts.

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
## Operation: people.getBatchGet
Provides information about a list of specific people by specifying a list
of requested resource names. Use `people/me` to indicate the authenticated
user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMask.includeField": {
      "type": "string",
      "description": "Comma-separated list of fields to be included in the response. Omitting\nthis field will include all fields except for connections.list requests,\nwhich have a default mask that includes common fields like metadata, name,\nphoto, and profile url.\nEach path should start with `person.`: for example, `person.names` or\n`person.photos`."
    },
    "resourceNames": {
      "type": "array",
      "description": "The resource name, such as one returned by\n[`people.connections.list`](/people/api/rest/v1/people.connections/list),\nof one of the people to provide information about. You can include this\nparameter up to 50 times in one request."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetPeopleResponse"
}
```
## Operation: people.get
Provides information about a person resource for a resource name. Use
`people/me` to indicate the authenticated user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceName": {
      "type": "string",
      "description": "The resource name of the person to provide information about.\n\n- To get information about the authenticated user, specify `people/me`.\n- To get information about any user, specify the resource name that\n  identifies the user, such as the resource names returned by\n  [`people.connections.list`](/people/api/rest/v1/people.connections/list)."
    },
    "requestMask.includeField": {
      "type": "string",
      "description": "Comma-separated list of fields to be included in the response. Omitting\nthis field will include all fields except for connections.list requests,\nwhich have a default mask that includes common fields like metadata, name,\nphoto, and profile url.\nEach path should start with `person.`: for example, `person.names` or\n`person.photos`."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Person"
}
```
## Operation: people.connections.list
Provides a list of the authenticated user's contacts merged with any
linked profiles.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceName": {
      "type": "string",
      "description": "The resource name to return connections for. Only `people/me` is valid."
    },
    "requestSyncToken": {
      "type": "boolean",
      "description": "Whether the response should include a sync token, which can be used to get\nall changes since the last request."
    },
    "pageToken": {
      "type": "string",
      "description": "The token of the page to be returned."
    },
    "pageSize": {
      "type": "integer",
      "description": "The number of connections to include in the response. Valid values are\nbetween 1 and 500, inclusive. Defaults to 100."
    },
    "requestMask.includeField": {
      "type": "string",
      "description": "Comma-separated list of fields to be included in the response. Omitting\nthis field will include all fields except for connections.list requests,\nwhich have a default mask that includes common fields like metadata, name,\nphoto, and profile url.\nEach path should start with `person.`: for example, `person.names` or\n`person.photos`."
    },
    "syncToken": {
      "type": "string",
      "description": "A sync token, returned by a previous call to `people.connections.list`.\nOnly resources changed since the sync token was created will be returned."
    },
    "sortOrder": {
      "type": "string",
      "description": "The order in which the connections should be sorted. Defaults to\n`LAST_MODIFIED_ASCENDING`.",
      "enum": [
        "LAST_MODIFIED_ASCENDING",
        "FIRST_NAME_ASCENDING",
        "LAST_NAME_ASCENDING"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListConnectionsResponse"
}
```
