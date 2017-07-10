# @datafire/google_pagespeedonline
Analyzes the performance of a web page and provides tailored suggestions to make that page faster.

## Operation: pagespeedapi.runpagespeed
Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "The URL to fetch and analyze"
    },
    "filter_third_party_resources": {
      "type": "boolean",
      "description": "Indicates if third party resources should be filtered out before PageSpeed analysis."
    },
    "locale": {
      "type": "string",
      "description": "The locale used to localize formatted results"
    },
    "rule": {
      "type": "array",
      "description": "A PageSpeed rule to run; if none are given, all rules are run"
    },
    "screenshot": {
      "type": "boolean",
      "description": "Indicates if binary data containing a screenshot should be included"
    },
    "strategy": {
      "type": "string",
      "description": "The analysis strategy to use",
      "enum": [
        "desktop",
        "mobile"
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
    "url"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Result"
}
```
