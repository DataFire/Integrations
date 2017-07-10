# @datafire/google_admin
Fetches reports for the administrators of G Suite customers about the usage, collaboration, security, and risk for their users.

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
## Operation: activities.list
Retrieves a list of activities for a specific customer and application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userKey": {
      "type": "string",
      "description": "Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users."
    },
    "applicationName": {
      "type": "string",
      "description": "Application name for which the events are to be retrieved."
    },
    "actorIpAddress": {
      "type": "string",
      "description": "IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses."
    },
    "customerId": {
      "type": "string",
      "description": "Represents the customer for which the data is to be fetched."
    },
    "endTime": {
      "type": "string",
      "description": "Return events which occurred at or before this time."
    },
    "eventName": {
      "type": "string",
      "description": "Name of the event being queried."
    },
    "filters": {
      "type": "string",
      "description": "Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],..."
    },
    "maxResults": {
      "type": "integer",
      "description": "Number of activity records to be shown in each page.",
      "maximum": 1000,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "Token to specify next page."
    },
    "startTime": {
      "type": "string",
      "description": "Return events which occurred at or after this time."
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
    "userKey",
    "applicationName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Activities"
}
```
## Operation: activities.watch
Push changes to activities

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userKey": {
      "type": "string",
      "description": "Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users."
    },
    "applicationName": {
      "type": "string",
      "description": "Application name for which the events are to be retrieved."
    },
    "actorIpAddress": {
      "type": "string",
      "description": "IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses."
    },
    "customerId": {
      "type": "string",
      "description": "Represents the customer for which the data is to be fetched."
    },
    "endTime": {
      "type": "string",
      "description": "Return events which occurred at or before this time."
    },
    "eventName": {
      "type": "string",
      "description": "Name of the event being queried."
    },
    "filters": {
      "type": "string",
      "description": "Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],..."
    },
    "maxResults": {
      "type": "integer",
      "description": "Number of activity records to be shown in each page.",
      "maximum": 1000,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "Token to specify next page."
    },
    "startTime": {
      "type": "string",
      "description": "Return events which occurred at or after this time."
    },
    "resource": {
      "$ref": "#/definitions/Channel"
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
    "userKey",
    "applicationName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Channel"
}
```
## Operation: channels.stop
Stop watching resources through this channel

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "resource": {
      "$ref": "#/definitions/Channel"
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
{}
```
## Operation: customerUsageReports.get
Retrieves a report which is a collection of properties / statistics for a specific customer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "date": {
      "type": "string",
      "description": "Represents the date in yyyy-mm-dd format for which the data is to be fetched."
    },
    "customerId": {
      "type": "string",
      "description": "Represents the customer for which the data is to be fetched."
    },
    "pageToken": {
      "type": "string",
      "description": "Token to specify next page."
    },
    "parameters": {
      "type": "string",
      "description": "Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2."
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
    "date"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsageReports"
}
```
## Operation: userUsageReport.get
Retrieves a report which is a collection of properties / statistics for a set of users.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userKey": {
      "type": "string",
      "description": "Represents the profile id or the user email for which the data should be filtered."
    },
    "date": {
      "type": "string",
      "description": "Represents the date in yyyy-mm-dd format for which the data is to be fetched."
    },
    "customerId": {
      "type": "string",
      "description": "Represents the customer for which the data is to be fetched."
    },
    "filters": {
      "type": "string",
      "description": "Represents the set of filters including parameter operator value."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return. Maximum allowed is 1000",
      "maximum": 1000
    },
    "pageToken": {
      "type": "string",
      "description": "Token to specify next page."
    },
    "parameters": {
      "type": "string",
      "description": "Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2."
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
    "userKey",
    "date"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsageReports"
}
```
