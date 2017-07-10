# @datafire/google_videointelligence
Google Cloud Video Intelligence API.

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
## Operation: videos.annotate
Performs asynchronous video annotation. Progress and results can be
retrieved through the `google.longrunning.Operations` interface.
`Operation.metadata` contains `AnnotateVideoProgress` (progress).
`Operation.response` contains `AnnotateVideoResponse` (results).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest"
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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GoogleLongrunning_Operation"
}
```
