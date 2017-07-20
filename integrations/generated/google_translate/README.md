# @datafire/google_translate
The Google Cloud Translation API lets websites and programs integrate with
    Google Translate programmatically.

## Operation: translations.list
Returns text translations from one language to another.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "array",
      "description": "The text to translate"
    },
    "target": {
      "type": "string",
      "description": "The target language into which the text should be translated"
    },
    "cid": {
      "type": "array",
      "description": "The customization id for translate"
    },
    "format": {
      "type": "string",
      "description": "The format of the text",
      "enum": [
        "html",
        "text"
      ]
    },
    "source": {
      "type": "string",
      "description": "The source language of the text"
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
    "q",
    "target"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TranslationsListResponse"
}
```
## Operation: detections.list
Detect the language of text.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "array",
      "description": "The text to detect"
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
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DetectionsListResponse"
}
```
## Operation: languages.list
List the source/target languages supported by the API

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "target": {
      "type": "string",
      "description": "the language and collation in which the localized results should be returned"
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
  "$ref": "#/definitions/LanguagesListResponse"
}
```
