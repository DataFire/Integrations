# @datafire/google_kgsearch
Searches the Google Knowledge Graph for entities.

## Operation: entities.search
Searches Knowledge Graph for entities that match the constraints.
A list of matched entities will be returned in response, which will be in
JSON-LD format and compatible with http://schema.org

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "Limits the number of entities to be returned."
    },
    "prefix": {
      "type": "boolean",
      "description": "Enables prefix match against names and aliases of entities"
    },
    "query": {
      "type": "string",
      "description": "The literal query string for search."
    },
    "types": {
      "type": "array",
      "description": "Restricts returned entities with these types, e.g. Person\n(as defined in http://schema.org/Person). If multiple types are specified,\nreturned entities will contain one or more of these types."
    },
    "indent": {
      "type": "boolean",
      "description": "Enables indenting of json results."
    },
    "languages": {
      "type": "array",
      "description": "The list of language codes (defined in ISO 693) to run the query with,\ne.g. 'en'."
    },
    "ids": {
      "type": "array",
      "description": "The list of entity id to be used for search instead of query string.\nTo specify multiple ids in the HTTP request, repeat the parameter in the\nURL as in ...?ids=A&ids=B"
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
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchResponse"
}
```