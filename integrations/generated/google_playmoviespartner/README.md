# @datafire/google_playmoviespartner
Gets the delivery status of titles for Google Play Movies Partners.

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
## Operation: accounts.avails.list
List Avails owned or managed by the partner.

See _Authentication and Authorization rules_ and
_List methods rules_ for more information about this method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "REQUIRED. See _General rules_ for more information about this field."
    },
    "title": {
      "type": "string",
      "description": "Filter that matches Avails with a `title_internal_alias`,\n`series_title_internal_alias`, `season_title_internal_alias`,\nor `episode_title_internal_alias` that contains the given\ncase-insensitive title."
    },
    "videoIds": {
      "type": "array",
      "description": "Filter Avails that match any of the given `video_id`s."
    },
    "pageToken": {
      "type": "string",
      "description": "See _List methods rules_ for info about this field."
    },
    "pageSize": {
      "type": "integer",
      "description": "See _List methods rules_ for info about this field."
    },
    "altIds": {
      "type": "array",
      "description": "Filter Avails that match (case-insensitive) any of the given partner-specific custom ids."
    },
    "pphNames": {
      "type": "array",
      "description": "See _List methods rules_ for info about this field."
    },
    "altId": {
      "type": "string",
      "description": "Filter Avails that match a case-insensitive, partner-specific custom id.\nNOTE: this field is deprecated and will be removed on V2; `alt_ids`\nshould be used instead."
    },
    "studioNames": {
      "type": "array",
      "description": "See _List methods rules_ for info about this field."
    },
    "territories": {
      "type": "array",
      "description": "Filter Avails that match (case-insensitive) any of the given country codes,\nusing the \"ISO 3166-1 alpha-2\" format (examples: \"US\", \"us\", \"Us\")."
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
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListAvailsResponse"
}
```
## Operation: accounts.avails.get
Get an Avail given its avail group id and avail id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "REQUIRED. See _General rules_ for more information about this field."
    },
    "availId": {
      "type": "string",
      "description": "REQUIRED. Avail ID."
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
    "accountId",
    "availId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Avail"
}
```
## Operation: accounts.orders.list
List Orders owned or managed by the partner.

See _Authentication and Authorization rules_ and
_List methods rules_ for more information about this method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "REQUIRED. See _General rules_ for more information about this field."
    },
    "pageToken": {
      "type": "string",
      "description": "See _List methods rules_ for info about this field."
    },
    "customId": {
      "type": "string",
      "description": "Filter Orders that match a case-insensitive, partner-specific custom id."
    },
    "videoIds": {
      "type": "array",
      "description": "Filter Orders that match any of the given `video_id`s."
    },
    "pageSize": {
      "type": "integer",
      "description": "See _List methods rules_ for info about this field."
    },
    "pphNames": {
      "type": "array",
      "description": "See _List methods rules_ for info about this field."
    },
    "status": {
      "type": "array",
      "description": "Filter Orders that match one of the given status."
    },
    "name": {
      "type": "string",
      "description": "Filter that matches Orders with a `name`, `show`, `season` or `episode`\nthat contains the given case-insensitive name."
    },
    "studioNames": {
      "type": "array",
      "description": "See _List methods rules_ for info about this field."
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
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListOrdersResponse"
}
```
## Operation: accounts.orders.get
Get an Order given its id.

See _Authentication and Authorization rules_ and
_Get methods rules_ for more information about this method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "REQUIRED. See _General rules_ for more information about this field."
    },
    "orderId": {
      "type": "string",
      "description": "REQUIRED. Order ID."
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
    "accountId",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Order"
}
```
## Operation: accounts.storeInfos.list
List StoreInfos owned or managed by the partner.

See _Authentication and Authorization rules_ and
_List methods rules_ for more information about this method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "REQUIRED. See _General rules_ for more information about this field."
    },
    "seasonIds": {
      "type": "array",
      "description": "Filter StoreInfos that match any of the given `season_id`s."
    },
    "pageToken": {
      "type": "string",
      "description": "See _List methods rules_ for info about this field."
    },
    "videoId": {
      "type": "string",
      "description": "Filter StoreInfos that match a given `video_id`.\nNOTE: this field is deprecated and will be removed on V2; `video_ids`\nshould be used instead."
    },
    "videoIds": {
      "type": "array",
      "description": "Filter StoreInfos that match any of the given `video_id`s."
    },
    "pageSize": {
      "type": "integer",
      "description": "See _List methods rules_ for info about this field."
    },
    "mids": {
      "type": "array",
      "description": "Filter StoreInfos that match any of the given `mid`s."
    },
    "pphNames": {
      "type": "array",
      "description": "See _List methods rules_ for info about this field."
    },
    "countries": {
      "type": "array",
      "description": "Filter StoreInfos that match (case-insensitive) any of the given country\ncodes, using the \"ISO 3166-1 alpha-2\" format (examples: \"US\", \"us\", \"Us\")."
    },
    "name": {
      "type": "string",
      "description": "Filter that matches StoreInfos with a `name` or `show_name`\nthat contains the given case-insensitive name."
    },
    "studioNames": {
      "type": "array",
      "description": "See _List methods rules_ for info about this field."
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
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListStoreInfosResponse"
}
```
## Operation: accounts.storeInfos.country.get
Get a StoreInfo given its video id and country.

See _Authentication and Authorization rules_ and
_Get methods rules_ for more information about this method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "REQUIRED. See _General rules_ for more information about this field."
    },
    "videoId": {
      "type": "string",
      "description": "REQUIRED. Video ID."
    },
    "country": {
      "type": "string",
      "description": "REQUIRED. Edit country."
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
    "accountId",
    "videoId",
    "country"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StoreInfo"
}
```
