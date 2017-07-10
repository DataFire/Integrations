# @datafire/google_analytics
Views and manages your Google Analytics data.

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
## Operation: data.ga.get
Returns Analytics data for a view (profile).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID."
    },
    "start-date": {
      "type": "string",
      "description": "Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo."
    },
    "end-date": {
      "type": "string",
      "description": "End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday."
    },
    "metrics": {
      "type": "string",
      "description": "A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified."
    },
    "dimensions": {
      "type": "string",
      "description": "A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'."
    },
    "filters": {
      "type": "string",
      "description": "A comma-separated list of dimension or metric filters to be applied to Analytics data."
    },
    "include-empty-rows": {
      "type": "boolean",
      "description": "The response will include empty rows if this parameter is set to true, the default is true"
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of entries to include in this feed."
    },
    "output": {
      "type": "string",
      "description": "The selected format for the response. Default format is JSON.",
      "enum": [
        "dataTable",
        "json"
      ]
    },
    "samplingLevel": {
      "type": "string",
      "description": "The desired sampling level.",
      "enum": [
        "DEFAULT",
        "FASTER",
        "HIGHER_PRECISION"
      ]
    },
    "segment": {
      "type": "string",
      "description": "An Analytics segment to be applied to data."
    },
    "sort": {
      "type": "string",
      "description": "A comma-separated list of dimensions or metrics that determine the sort order for Analytics data."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "ids",
    "start-date",
    "end-date",
    "metrics"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GaData"
}
```
## Operation: data.mcf.get
Returns Analytics Multi-Channel Funnels data for a view (profile).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID."
    },
    "start-date": {
      "type": "string",
      "description": "Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo."
    },
    "end-date": {
      "type": "string",
      "description": "End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo."
    },
    "metrics": {
      "type": "string",
      "description": "A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified."
    },
    "dimensions": {
      "type": "string",
      "description": "A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'."
    },
    "filters": {
      "type": "string",
      "description": "A comma-separated list of dimension or metric filters to be applied to the Analytics data."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of entries to include in this feed."
    },
    "samplingLevel": {
      "type": "string",
      "description": "The desired sampling level.",
      "enum": [
        "DEFAULT",
        "FASTER",
        "HIGHER_PRECISION"
      ]
    },
    "sort": {
      "type": "string",
      "description": "A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "ids",
    "start-date",
    "end-date",
    "metrics"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/McfData"
}
```
## Operation: data.realtime.get
Returns real time data for a view (profile).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID."
    },
    "metrics": {
      "type": "string",
      "description": "A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified."
    },
    "dimensions": {
      "type": "string",
      "description": "A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'."
    },
    "filters": {
      "type": "string",
      "description": "A comma-separated list of dimension or metric filters to be applied to real time data."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of entries to include in this feed."
    },
    "sort": {
      "type": "string",
      "description": "A comma-separated list of dimensions or metrics that determine the sort order for real time data."
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
    "ids",
    "metrics"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RealtimeData"
}
```
## Operation: management.accountSummaries.list
Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "max-results": {
      "type": "integer",
      "description": "The maximum number of account summaries to include in this response, where the largest acceptable value is 1000."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
  "$ref": "#/definitions/AccountSummaries"
}
```
## Operation: management.accounts.list
Lists all accounts to which the user has access.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "max-results": {
      "type": "integer",
      "description": "The maximum number of accounts to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
  "$ref": "#/definitions/Accounts"
}
```
## Operation: management.accountUserLinks.list
Lists account-user links for a given account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve the user links for."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of account-user links to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityUserLinks"
}
```
## Operation: management.accountUserLinks.insert
Adds a new user to the given account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to create the user link for."
    },
    "body": {
      "$ref": "#/definitions/EntityUserLink"
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
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityUserLink"
}
```
## Operation: management.accountUserLinks.delete
Removes a user from the given account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to delete the user link for."
    },
    "linkId": {
      "type": "string",
      "description": "Link ID to delete the user link for."
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
    "accountId",
    "linkId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: management.accountUserLinks.update
Updates permissions for an existing user on the given account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to update the account-user link for."
    },
    "linkId": {
      "type": "string",
      "description": "Link ID to update the account-user link for."
    },
    "body": {
      "$ref": "#/definitions/EntityUserLink"
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
    "accountId",
    "linkId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityUserLink"
}
```
## Operation: management.filters.list
Lists all filters for an account

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve filters for."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of filters to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Filters"
}
```
## Operation: management.filters.insert
Create a new filter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to create filter for."
    },
    "body": {
      "$ref": "#/definitions/Filter"
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
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Filter"
}
```
## Operation: management.filters.delete
Delete a filter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to delete the filter for."
    },
    "filterId": {
      "type": "string",
      "description": "ID of the filter to be deleted."
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
    "accountId",
    "filterId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Filter"
}
```
## Operation: management.filters.get
Returns a filters to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve filters for."
    },
    "filterId": {
      "type": "string",
      "description": "Filter ID to retrieve filters for."
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
    "accountId",
    "filterId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Filter"
}
```
## Operation: management.filters.patch
Updates an existing filter. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which the filter belongs."
    },
    "filterId": {
      "type": "string",
      "description": "ID of the filter to be updated."
    },
    "body": {
      "$ref": "#/definitions/Filter"
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
    "accountId",
    "filterId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Filter"
}
```
## Operation: management.filters.update
Updates an existing filter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which the filter belongs."
    },
    "filterId": {
      "type": "string",
      "description": "ID of the filter to be updated."
    },
    "body": {
      "$ref": "#/definitions/Filter"
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
    "accountId",
    "filterId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Filter"
}
```
## Operation: management.webproperties.list
Lists web properties to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of web properties to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Webproperties"
}
```
## Operation: management.webproperties.insert
Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to create the web property for."
    },
    "body": {
      "$ref": "#/definitions/Webproperty"
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
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Webproperty"
}
```
## Operation: management.webproperties.get
Gets a web property to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve the web property for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "ID to retrieve the web property for."
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Webproperty"
}
```
## Operation: management.webproperties.patch
Updates an existing web property. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which the web property belongs"
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID"
    },
    "body": {
      "$ref": "#/definitions/Webproperty"
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Webproperty"
}
```
## Operation: management.webproperties.update
Updates an existing web property.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which the web property belongs"
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID"
    },
    "body": {
      "$ref": "#/definitions/Webproperty"
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Webproperty"
}
```
## Operation: management.customDataSources.list
List custom data sources to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account Id for the custom data sources to retrieve."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property Id for the custom data sources to retrieve."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of custom data sources to include in this response.",
      "minimum": 1
    },
    "start-index": {
      "type": "integer",
      "description": "A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDataSources"
}
```
## Operation: management.uploads.deleteUploadData
Delete data associated with a previous upload.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account Id for the uploads to be deleted."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property Id for the uploads to be deleted."
    },
    "customDataSourceId": {
      "type": "string",
      "description": "Custom data source Id for the uploads to be deleted."
    },
    "body": {
      "$ref": "#/definitions/AnalyticsDataimportDeleteUploadDataRequest"
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
    "accountId",
    "webPropertyId",
    "customDataSourceId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: management.uploads.list
List uploads to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account Id for the uploads to retrieve."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property Id for the uploads to retrieve."
    },
    "customDataSourceId": {
      "type": "string",
      "description": "Custom data source Id for uploads to retrieve."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of uploads to include in this response.",
      "minimum": 1
    },
    "start-index": {
      "type": "integer",
      "description": "A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId",
    "customDataSourceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Uploads"
}
```
## Operation: management.uploads.uploadData
Upload data for a custom data source.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account Id associated with the upload."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property UA-string associated with the upload."
    },
    "customDataSourceId": {
      "type": "string",
      "description": "Custom data source Id to which the data being uploaded belongs."
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
    "accountId",
    "webPropertyId",
    "customDataSourceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Upload"
}
```
## Operation: management.uploads.get
List uploads to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account Id for the upload to retrieve."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property Id for the upload to retrieve."
    },
    "customDataSourceId": {
      "type": "string",
      "description": "Custom data source Id for upload to retrieve."
    },
    "uploadId": {
      "type": "string",
      "description": "Upload Id to retrieve."
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
    "accountId",
    "webPropertyId",
    "customDataSourceId",
    "uploadId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Upload"
}
```
## Operation: management.customDimensions.list
Lists custom dimensions to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the custom dimensions to retrieve."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the custom dimensions to retrieve."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of custom dimensions to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDimensions"
}
```
## Operation: management.customDimensions.insert
Create a new custom dimension.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the custom dimension to create."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the custom dimension to create."
    },
    "body": {
      "$ref": "#/definitions/CustomDimension"
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDimension"
}
```
## Operation: management.customDimensions.get
Get a custom dimension to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the custom dimension to retrieve."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the custom dimension to retrieve."
    },
    "customDimensionId": {
      "type": "string",
      "description": "The ID of the custom dimension to retrieve."
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
    "accountId",
    "webPropertyId",
    "customDimensionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDimension"
}
```
## Operation: management.customDimensions.patch
Updates an existing custom dimension. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the custom dimension to update."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the custom dimension to update."
    },
    "customDimensionId": {
      "type": "string",
      "description": "Custom dimension ID for the custom dimension to update."
    },
    "ignoreCustomDataSourceLinks": {
      "type": "boolean",
      "description": "Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set."
    },
    "body": {
      "$ref": "#/definitions/CustomDimension"
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
    "accountId",
    "webPropertyId",
    "customDimensionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDimension"
}
```
## Operation: management.customDimensions.update
Updates an existing custom dimension.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the custom dimension to update."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the custom dimension to update."
    },
    "customDimensionId": {
      "type": "string",
      "description": "Custom dimension ID for the custom dimension to update."
    },
    "ignoreCustomDataSourceLinks": {
      "type": "boolean",
      "description": "Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set."
    },
    "body": {
      "$ref": "#/definitions/CustomDimension"
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
    "accountId",
    "webPropertyId",
    "customDimensionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDimension"
}
```
## Operation: management.customMetrics.list
Lists custom metrics to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the custom metrics to retrieve."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the custom metrics to retrieve."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of custom metrics to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomMetrics"
}
```
## Operation: management.customMetrics.insert
Create a new custom metric.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the custom metric to create."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the custom dimension to create."
    },
    "body": {
      "$ref": "#/definitions/CustomMetric"
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomMetric"
}
```
## Operation: management.customMetrics.get
Get a custom metric to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the custom metric to retrieve."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the custom metric to retrieve."
    },
    "customMetricId": {
      "type": "string",
      "description": "The ID of the custom metric to retrieve."
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
    "accountId",
    "webPropertyId",
    "customMetricId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomMetric"
}
```
## Operation: management.customMetrics.patch
Updates an existing custom metric. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the custom metric to update."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the custom metric to update."
    },
    "customMetricId": {
      "type": "string",
      "description": "Custom metric ID for the custom metric to update."
    },
    "ignoreCustomDataSourceLinks": {
      "type": "boolean",
      "description": "Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set."
    },
    "body": {
      "$ref": "#/definitions/CustomMetric"
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
    "accountId",
    "webPropertyId",
    "customMetricId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomMetric"
}
```
## Operation: management.customMetrics.update
Updates an existing custom metric.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the custom metric to update."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the custom metric to update."
    },
    "customMetricId": {
      "type": "string",
      "description": "Custom metric ID for the custom metric to update."
    },
    "ignoreCustomDataSourceLinks": {
      "type": "boolean",
      "description": "Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set."
    },
    "body": {
      "$ref": "#/definitions/CustomMetric"
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
    "accountId",
    "webPropertyId",
    "customMetricId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomMetric"
}
```
## Operation: management.webPropertyAdWordsLinks.list
Lists webProperty-AdWords links for a given web property.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "ID of the account which the given web property belongs to."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve the AdWords links for."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of webProperty-AdWords links to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first webProperty-AdWords link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityAdWordsLinks"
}
```
## Operation: management.webPropertyAdWordsLinks.insert
Creates a webProperty-AdWords link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "ID of the Google Analytics account to create the link for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to create the link for."
    },
    "body": {
      "$ref": "#/definitions/EntityAdWordsLink"
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityAdWordsLink"
}
```
## Operation: management.webPropertyAdWordsLinks.delete
Deletes a web property-AdWords link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "ID of the account which the given web property belongs to."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to delete the AdWords link for."
    },
    "webPropertyAdWordsLinkId": {
      "type": "string",
      "description": "Web property AdWords link ID."
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
    "accountId",
    "webPropertyId",
    "webPropertyAdWordsLinkId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: management.webPropertyAdWordsLinks.get
Returns a web property-AdWords link to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "ID of the account which the given web property belongs to."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve the AdWords link for."
    },
    "webPropertyAdWordsLinkId": {
      "type": "string",
      "description": "Web property-AdWords link ID."
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
    "accountId",
    "webPropertyId",
    "webPropertyAdWordsLinkId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityAdWordsLink"
}
```
## Operation: management.webPropertyAdWordsLinks.patch
Updates an existing webProperty-AdWords link. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "ID of the account which the given web property belongs to."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve the AdWords link for."
    },
    "webPropertyAdWordsLinkId": {
      "type": "string",
      "description": "Web property-AdWords link ID."
    },
    "body": {
      "$ref": "#/definitions/EntityAdWordsLink"
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
    "accountId",
    "webPropertyId",
    "webPropertyAdWordsLinkId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityAdWordsLink"
}
```
## Operation: management.webPropertyAdWordsLinks.update
Updates an existing webProperty-AdWords link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "ID of the account which the given web property belongs to."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve the AdWords link for."
    },
    "webPropertyAdWordsLinkId": {
      "type": "string",
      "description": "Web property-AdWords link ID."
    },
    "body": {
      "$ref": "#/definitions/EntityAdWordsLink"
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
    "accountId",
    "webPropertyId",
    "webPropertyAdWordsLinkId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityAdWordsLink"
}
```
## Operation: management.webpropertyUserLinks.list
Lists webProperty-user links for a given web property.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID which the given web property belongs to."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of webProperty-user Links to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityUserLinks"
}
```
## Operation: management.webpropertyUserLinks.insert
Adds a new user to the given web property.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to create the user link for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web Property ID to create the user link for."
    },
    "body": {
      "$ref": "#/definitions/EntityUserLink"
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityUserLink"
}
```
## Operation: management.webpropertyUserLinks.delete
Removes a user from the given web property.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to delete the user link for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web Property ID to delete the user link for."
    },
    "linkId": {
      "type": "string",
      "description": "Link ID to delete the user link for."
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
    "accountId",
    "webPropertyId",
    "linkId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: management.webpropertyUserLinks.update
Updates permissions for an existing user on the given web property.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to update the account-user link for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to update the account-user link for."
    },
    "linkId": {
      "type": "string",
      "description": "Link ID to update the account-user link for."
    },
    "body": {
      "$ref": "#/definitions/EntityUserLink"
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
    "accountId",
    "webPropertyId",
    "linkId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityUserLink"
}
```
## Operation: management.profiles.list
Lists views (profiles) to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of views (profiles) to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profiles"
}
```
## Operation: management.profiles.insert
Create a new view (profile).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to create the view (profile) for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to create the view (profile) for."
    },
    "body": {
      "$ref": "#/definitions/Profile"
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: management.profiles.delete
Deletes a view (profile).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to delete the view (profile) for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to delete the view (profile) for."
    },
    "profileId": {
      "type": "string",
      "description": "ID of the view (profile) to be deleted."
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: management.profiles.get
Gets a view (profile) to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve the view (profile) for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve the view (profile) for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to retrieve the view (profile) for."
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: management.profiles.patch
Updates an existing view (profile). This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which the view (profile) belongs"
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to which the view (profile) belongs"
    },
    "profileId": {
      "type": "string",
      "description": "ID of the view (profile) to be updated."
    },
    "body": {
      "$ref": "#/definitions/Profile"
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: management.profiles.update
Updates an existing view (profile).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which the view (profile) belongs"
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to which the view (profile) belongs"
    },
    "profileId": {
      "type": "string",
      "description": "ID of the view (profile) to be updated."
    },
    "body": {
      "$ref": "#/definitions/Profile"
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: management.profileUserLinks.list
Lists profile-user links for a given view (profile).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID which the given view (profile) belongs to."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of profile-user links to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityUserLinks"
}
```
## Operation: management.profileUserLinks.insert
Adds a new user to the given view (profile).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to create the user link for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web Property ID to create the user link for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to create the user link for."
    },
    "body": {
      "$ref": "#/definitions/EntityUserLink"
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityUserLink"
}
```
## Operation: management.profileUserLinks.delete
Removes a user from the given view (profile).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to delete the user link for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web Property ID to delete the user link for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to delete the user link for."
    },
    "linkId": {
      "type": "string",
      "description": "Link ID to delete the user link for."
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
    "accountId",
    "webPropertyId",
    "profileId",
    "linkId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: management.profileUserLinks.update
Updates permissions for an existing user on the given view (profile).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to update the user link for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web Property ID to update the user link for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile ID) to update the user link for."
    },
    "linkId": {
      "type": "string",
      "description": "Link ID to update the user link for."
    },
    "body": {
      "$ref": "#/definitions/EntityUserLink"
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
    "accountId",
    "webPropertyId",
    "profileId",
    "linkId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntityUserLink"
}
```
## Operation: management.experiments.list
Lists experiments to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve experiments for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve experiments for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to retrieve experiments for."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of experiments to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Experiments"
}
```
## Operation: management.experiments.insert
Create a new experiment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to create the experiment for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to create the experiment for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to create the experiment for."
    },
    "body": {
      "$ref": "#/definitions/Experiment"
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Experiment"
}
```
## Operation: management.experiments.delete
Delete an experiment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which the experiment belongs"
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to which the experiment belongs"
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to which the experiment belongs"
    },
    "experimentId": {
      "type": "string",
      "description": "ID of the experiment to delete"
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
    "accountId",
    "webPropertyId",
    "profileId",
    "experimentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: management.experiments.get
Returns an experiment to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve the experiment for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve the experiment for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to retrieve the experiment for."
    },
    "experimentId": {
      "type": "string",
      "description": "Experiment ID to retrieve the experiment for."
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
    "accountId",
    "webPropertyId",
    "profileId",
    "experimentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Experiment"
}
```
## Operation: management.experiments.patch
Update an existing experiment. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID of the experiment to update."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID of the experiment to update."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID of the experiment to update."
    },
    "experimentId": {
      "type": "string",
      "description": "Experiment ID of the experiment to update."
    },
    "body": {
      "$ref": "#/definitions/Experiment"
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
    "accountId",
    "webPropertyId",
    "profileId",
    "experimentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Experiment"
}
```
## Operation: management.experiments.update
Update an existing experiment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID of the experiment to update."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID of the experiment to update."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID of the experiment to update."
    },
    "experimentId": {
      "type": "string",
      "description": "Experiment ID of the experiment to update."
    },
    "body": {
      "$ref": "#/definitions/Experiment"
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
    "accountId",
    "webPropertyId",
    "profileId",
    "experimentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Experiment"
}
```
## Operation: management.goals.list
Lists goals to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of goals to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Goals"
}
```
## Operation: management.goals.insert
Create a new goal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to create the goal for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to create the goal for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to create the goal for."
    },
    "body": {
      "$ref": "#/definitions/Goal"
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Goal"
}
```
## Operation: management.goals.get
Gets a goal to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve the goal for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve the goal for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to retrieve the goal for."
    },
    "goalId": {
      "type": "string",
      "description": "Goal ID to retrieve the goal for."
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
    "accountId",
    "webPropertyId",
    "profileId",
    "goalId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Goal"
}
```
## Operation: management.goals.patch
Updates an existing goal. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to update the goal."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to update the goal."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to update the goal."
    },
    "goalId": {
      "type": "string",
      "description": "Index of the goal to be updated."
    },
    "body": {
      "$ref": "#/definitions/Goal"
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
    "accountId",
    "webPropertyId",
    "profileId",
    "goalId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Goal"
}
```
## Operation: management.goals.update
Updates an existing goal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to update the goal."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to update the goal."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to update the goal."
    },
    "goalId": {
      "type": "string",
      "description": "Index of the goal to be updated."
    },
    "body": {
      "$ref": "#/definitions/Goal"
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
    "accountId",
    "webPropertyId",
    "profileId",
    "goalId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Goal"
}
```
## Operation: management.profileFilterLinks.list
Lists all profile filter links for a profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve profile filter links for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to."
    },
    "profileId": {
      "type": "string",
      "description": "Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of profile filter links to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProfileFilterLinks"
}
```
## Operation: management.profileFilterLinks.insert
Create a new profile filter link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to create profile filter link for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property Id to create profile filter link for."
    },
    "profileId": {
      "type": "string",
      "description": "Profile ID to create filter link for."
    },
    "body": {
      "$ref": "#/definitions/ProfileFilterLink"
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProfileFilterLink"
}
```
## Operation: management.profileFilterLinks.delete
Delete a profile filter link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which the profile filter link belongs."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property Id to which the profile filter link belongs."
    },
    "profileId": {
      "type": "string",
      "description": "Profile ID to which the filter link belongs."
    },
    "linkId": {
      "type": "string",
      "description": "ID of the profile filter link to delete."
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
    "accountId",
    "webPropertyId",
    "profileId",
    "linkId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: management.profileFilterLinks.get
Returns a single profile filter link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve profile filter link for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property Id to retrieve profile filter link for."
    },
    "profileId": {
      "type": "string",
      "description": "Profile ID to retrieve filter link for."
    },
    "linkId": {
      "type": "string",
      "description": "ID of the profile filter link."
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
    "accountId",
    "webPropertyId",
    "profileId",
    "linkId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProfileFilterLink"
}
```
## Operation: management.profileFilterLinks.patch
Update an existing profile filter link. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which profile filter link belongs."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property Id to which profile filter link belongs"
    },
    "profileId": {
      "type": "string",
      "description": "Profile ID to which filter link belongs"
    },
    "linkId": {
      "type": "string",
      "description": "ID of the profile filter link to be updated."
    },
    "body": {
      "$ref": "#/definitions/ProfileFilterLink"
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
    "accountId",
    "webPropertyId",
    "profileId",
    "linkId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProfileFilterLink"
}
```
## Operation: management.profileFilterLinks.update
Update an existing profile filter link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which profile filter link belongs."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property Id to which profile filter link belongs"
    },
    "profileId": {
      "type": "string",
      "description": "Profile ID to which filter link belongs"
    },
    "linkId": {
      "type": "string",
      "description": "ID of the profile filter link to be updated."
    },
    "body": {
      "$ref": "#/definitions/ProfileFilterLink"
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
    "accountId",
    "webPropertyId",
    "profileId",
    "linkId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProfileFilterLink"
}
```
## Operation: management.unsampledReports.list
Lists unsampled reports to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of unsampled reports to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UnsampledReports"
}
```
## Operation: management.unsampledReports.insert
Create a new unsampled report.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to create the unsampled report for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to create the unsampled report for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to create the unsampled report for."
    },
    "body": {
      "$ref": "#/definitions/UnsampledReport"
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
    "accountId",
    "webPropertyId",
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UnsampledReport"
}
```
## Operation: management.unsampledReports.delete
Deletes an unsampled report.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to delete the unsampled report for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to delete the unsampled reports for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to delete the unsampled report for."
    },
    "unsampledReportId": {
      "type": "string",
      "description": "ID of the unsampled report to be deleted."
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
    "accountId",
    "webPropertyId",
    "profileId",
    "unsampledReportId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: management.unsampledReports.get
Returns a single unsampled report.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to retrieve unsampled report for."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to retrieve unsampled reports for."
    },
    "profileId": {
      "type": "string",
      "description": "View (Profile) ID to retrieve unsampled report for."
    },
    "unsampledReportId": {
      "type": "string",
      "description": "ID of the unsampled report to retrieve."
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
    "accountId",
    "webPropertyId",
    "profileId",
    "unsampledReportId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UnsampledReport"
}
```
## Operation: management.remarketingAudience.list
Lists remarketing audiences to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account ID of the remarketing audiences to retrieve."
    },
    "webPropertyId": {
      "type": "string",
      "description": "The web property ID of the remarketing audiences to retrieve."
    },
    "max-results": {
      "type": "integer",
      "description": "The maximum number of remarketing audiences to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
    },
    "type": {
      "type": "string"
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingAudiences"
}
```
## Operation: management.remarketingAudience.insert
Creates a new remarketing audience.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account ID for which to create the remarketing audience."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID for which to create the remarketing audience."
    },
    "body": {
      "$ref": "#/definitions/RemarketingAudience"
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
    "accountId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingAudience"
}
```
## Operation: management.remarketingAudience.delete
Delete a remarketing audience.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account ID to which the remarketing audience belongs."
    },
    "remarketingAudienceId": {
      "type": "string",
      "description": "The ID of the remarketing audience to delete."
    },
    "webPropertyId": {
      "type": "string",
      "description": "Web property ID to which the remarketing audience belongs."
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
    "accountId",
    "remarketingAudienceId",
    "webPropertyId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: management.remarketingAudience.get
Gets a remarketing audience to which the user has access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account ID of the remarketing audience to retrieve."
    },
    "webPropertyId": {
      "type": "string",
      "description": "The web property ID of the remarketing audience to retrieve."
    },
    "remarketingAudienceId": {
      "type": "string",
      "description": "The ID of the remarketing audience to retrieve."
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
    "accountId",
    "webPropertyId",
    "remarketingAudienceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingAudience"
}
```
## Operation: management.remarketingAudience.patch
Updates an existing remarketing audience. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account ID of the remarketing audience to update."
    },
    "webPropertyId": {
      "type": "string",
      "description": "The web property ID of the remarketing audience to update."
    },
    "remarketingAudienceId": {
      "type": "string",
      "description": "The ID of the remarketing audience to update."
    },
    "body": {
      "$ref": "#/definitions/RemarketingAudience"
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
    "accountId",
    "webPropertyId",
    "remarketingAudienceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingAudience"
}
```
## Operation: management.remarketingAudience.update
Updates an existing remarketing audience.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account ID of the remarketing audience to update."
    },
    "webPropertyId": {
      "type": "string",
      "description": "The web property ID of the remarketing audience to update."
    },
    "remarketingAudienceId": {
      "type": "string",
      "description": "The ID of the remarketing audience to update."
    },
    "body": {
      "$ref": "#/definitions/RemarketingAudience"
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
    "accountId",
    "webPropertyId",
    "remarketingAudienceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingAudience"
}
```
## Operation: management.segments.list
Lists segments to which the user has access.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "max-results": {
      "type": "integer",
      "description": "The maximum number of segments to include in this response."
    },
    "start-index": {
      "type": "integer",
      "description": "An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.",
      "minimum": 1
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
  "$ref": "#/definitions/Segments"
}
```
## Operation: metadata.columns.list
Lists all columns for a report type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reportType": {
      "type": "string",
      "description": "Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API"
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
    "reportType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Columns"
}
```
## Operation: provisioning.createAccountTicket
Creates an account ticket.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/AccountTicket"
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
  "$ref": "#/definitions/AccountTicket"
}
```
