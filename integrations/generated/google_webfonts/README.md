# @datafire/google_webfonts
Accesses the metadata for all families served by Google Fonts, providing a list of families currently available (including available styles and a list of supported script subsets).

## Operation: webfonts.list
Retrieves the list of fonts currently served by the Google Fonts Developer API

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "Enables sorting of the list",
      "enum": [
        "alpha",
        "date",
        "popularity",
        "style",
        "trending"
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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebfontList"
}
```
