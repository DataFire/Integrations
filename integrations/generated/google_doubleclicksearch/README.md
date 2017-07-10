# @datafire/google_doubleclicksearch
Reports and modifies your advertising data in DoubleClick Search (for example, campaigns, ad groups, keywords, and conversions).

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
## Operation: conversion.get
Retrieves a list of conversions from a DoubleClick Search engine account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "agencyId": {
      "type": "string",
      "description": "Numeric ID of the agency."
    },
    "advertiserId": {
      "type": "string",
      "description": "Numeric ID of the advertiser."
    },
    "engineAccountId": {
      "type": "string",
      "description": "Numeric ID of the engine account."
    },
    "endDate": {
      "type": "integer",
      "description": "Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.",
      "maximum": 99991231,
      "minimum": 20091101
    },
    "rowCount": {
      "type": "integer",
      "description": "The number of conversions to return per call.",
      "maximum": 1000,
      "minimum": 1
    },
    "startDate": {
      "type": "integer",
      "description": "First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.",
      "maximum": 99991231,
      "minimum": 20091101
    },
    "startRow": {
      "type": "integer",
      "description": "The 0-based starting index for retrieving conversions results."
    },
    "adGroupId": {
      "type": "string",
      "description": "Numeric ID of the ad group."
    },
    "adId": {
      "type": "string",
      "description": "Numeric ID of the ad."
    },
    "campaignId": {
      "type": "string",
      "description": "Numeric ID of the campaign."
    },
    "criterionId": {
      "type": "string",
      "description": "Numeric ID of the criterion."
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
    "agencyId",
    "advertiserId",
    "engineAccountId",
    "endDate",
    "rowCount",
    "startDate",
    "startRow"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConversionList"
}
```
## Operation: savedColumns.list
Retrieve the list of saved columns for a specified advertiser.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "agencyId": {
      "type": "string",
      "description": "DS ID of the agency."
    },
    "advertiserId": {
      "type": "string",
      "description": "DS ID of the advertiser."
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
    "agencyId",
    "advertiserId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SavedColumnList"
}
```
## Operation: conversion.patch
Updates a batch of conversions in DoubleClick Search. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "advertiserId": {
      "type": "string",
      "description": "Numeric ID of the advertiser."
    },
    "agencyId": {
      "type": "string",
      "description": "Numeric ID of the agency."
    },
    "endDate": {
      "type": "integer",
      "description": "Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.",
      "maximum": 99991231,
      "minimum": 20091101
    },
    "engineAccountId": {
      "type": "string",
      "description": "Numeric ID of the engine account."
    },
    "rowCount": {
      "type": "integer",
      "description": "The number of conversions to return per call.",
      "maximum": 1000,
      "minimum": 1
    },
    "startDate": {
      "type": "integer",
      "description": "First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.",
      "maximum": 99991231,
      "minimum": 20091101
    },
    "startRow": {
      "type": "integer",
      "description": "The 0-based starting index for retrieving conversions results."
    },
    "body": {
      "$ref": "#/definitions/ConversionList"
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
    "advertiserId",
    "agencyId",
    "endDate",
    "engineAccountId",
    "rowCount",
    "startDate",
    "startRow"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConversionList"
}
```
## Operation: conversion.insert
Inserts a batch of new conversions into DoubleClick Search.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/ConversionList"
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
  "$ref": "#/definitions/ConversionList"
}
```
## Operation: conversion.update
Updates a batch of conversions in DoubleClick Search.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/ConversionList"
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
  "$ref": "#/definitions/ConversionList"
}
```
## Operation: conversion.updateAvailability
Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "empty": {
      "$ref": "#/definitions/UpdateAvailabilityRequest"
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
  "$ref": "#/definitions/UpdateAvailabilityResponse"
}
```
## Operation: reports.request
Inserts a report request into the reporting system.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "reportRequest": {
      "$ref": "#/definitions/ReportRequest"
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
  "$ref": "#/definitions/Report"
}
```
## Operation: reports.generate
Generates and returns a report immediately.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "reportRequest": {
      "$ref": "#/definitions/ReportRequest"
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
  "$ref": "#/definitions/Report"
}
```
## Operation: reports.get
Polls for the status of a report request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reportId": {
      "type": "string",
      "description": "ID of the report request being polled."
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
    "reportId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Report"
}
```
## Operation: reports.getFile
Downloads a report file encoded in UTF-8.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reportId": {
      "type": "string",
      "description": "ID of the report."
    },
    "reportFragment": {
      "type": "integer",
      "description": "The index of the report fragment to download.",
      "minimum": 0
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
    "reportId",
    "reportFragment"
  ]
}
```
### Output Schema
```json
{}
```
