# @datafire/google_acceleratedmobilepageurl
Retrieves the list of AMP URL (and equivalent AMP Cache URL) for a given list of public URL(s).


## Operation: ampUrls.batchGet
Returns AMP URL(s) and equivalent
[AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/BatchGetAmpUrlsRequest"
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
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
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
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchGetAmpUrlsResponse"
}
```
