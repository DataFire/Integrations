# @datafire/google_adexchangeseller
Accesses the inventory of Ad Exchange seller users and generates reports.

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
## Operation: accounts.list
List all accounts available to this Ad Exchange account.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of accounts to include in the response, used for paging.",
      "maximum": 10000,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of \"nextPageToken\" from the previous response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
## Operation: accounts.get
Get information about the selected Ad Exchange account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account to get information about. Tip: 'myaccount' is a valid ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
  "$ref": "#/definitions/Account"
}
```
## Operation: accounts.adclients.list
List all ad clients in this Ad Exchange account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account to which the ad client belongs."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of ad clients to include in the response, used for paging.",
      "maximum": 10000,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of \"nextPageToken\" from the previous response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
  "$ref": "#/definitions/AdClients"
}
```
## Operation: accounts.customchannels.list
List all custom channels in the specified ad client for this Ad Exchange account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account to which the ad client belongs."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client for which to list custom channels."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of custom channels to include in the response, used for paging.",
      "maximum": 10000,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of \"nextPageToken\" from the previous response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "adClientId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomChannels"
}
```
## Operation: accounts.customchannels.get
Get the specified custom channel from the specified ad client.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account to which the ad client belongs."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client which contains the custom channel."
    },
    "customChannelId": {
      "type": "string",
      "description": "Custom channel to retrieve."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "adClientId",
    "customChannelId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomChannel"
}
```
## Operation: accounts.urlchannels.list
List all URL channels in the specified ad client for this Ad Exchange account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account to which the ad client belongs."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client for which to list URL channels."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of URL channels to include in the response, used for paging.",
      "maximum": 10000,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of \"nextPageToken\" from the previous response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "adClientId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlChannels"
}
```
## Operation: accounts.alerts.list
List the alerts for this Ad Exchange account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account owning the alerts."
    },
    "locale": {
      "type": "string",
      "description": "The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
  "$ref": "#/definitions/Alerts"
}
```
## Operation: accounts.metadata.dimensions.list
List the metadata for the dimensions available to this AdExchange account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account with visibility to the dimensions."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
  "$ref": "#/definitions/Metadata"
}
```
## Operation: accounts.metadata.metrics.list
List the metadata for the metrics available to this AdExchange account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account with visibility to the metrics."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
  "$ref": "#/definitions/Metadata"
}
```
## Operation: accounts.preferreddeals.list
List the preferred deals for this Ad Exchange account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account owning the deals."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
  "$ref": "#/definitions/PreferredDeals"
}
```
## Operation: accounts.preferreddeals.get
Get information about the selected Ad Exchange Preferred Deal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account owning the deal."
    },
    "dealId": {
      "type": "string",
      "description": "Preferred deal to get information about."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "dealId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PreferredDeal"
}
```
## Operation: accounts.reports.generate
Generate an Ad Exchange report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account which owns the generated report."
    },
    "startDate": {
      "type": "string",
      "description": "Start of the date range to report on in \"YYYY-MM-DD\" format, inclusive."
    },
    "endDate": {
      "type": "string",
      "description": "End of the date range to report on in \"YYYY-MM-DD\" format, inclusive."
    },
    "dimension": {
      "type": "array",
      "description": "Dimensions to base the report on."
    },
    "filter": {
      "type": "array",
      "description": "Filters to be run on the report."
    },
    "locale": {
      "type": "string",
      "description": "Optional locale to use for translating report output to a local language. Defaults to \"en_US\" if not specified."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of rows of report data to return.",
      "maximum": 50000,
      "minimum": 0
    },
    "metric": {
      "type": "array",
      "description": "Numeric columns to include in the report."
    },
    "sort": {
      "type": "array",
      "description": "The name of a dimension or metric to sort the resulting report on, optionally prefixed with \"+\" to sort ascending or \"-\" to sort descending. If no prefix is specified, the column is sorted ascending."
    },
    "startIndex": {
      "type": "integer",
      "description": "Index of the first row of report data to return.",
      "maximum": 5000,
      "minimum": 0
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Report"
}
```
## Operation: accounts.reports.saved.list
List all saved reports in this Ad Exchange account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account owning the saved reports."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of saved reports to include in the response, used for paging.",
      "maximum": 100,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of \"nextPageToken\" from the previous response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
  "$ref": "#/definitions/SavedReports"
}
```
## Operation: accounts.reports.saved.generate
Generate an Ad Exchange report based on the saved report ID sent in the query parameters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account owning the saved report."
    },
    "savedReportId": {
      "type": "string",
      "description": "The saved report to retrieve."
    },
    "locale": {
      "type": "string",
      "description": "Optional locale to use for translating report output to a local language. Defaults to \"en_US\" if not specified."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of rows of report data to return.",
      "maximum": 50000,
      "minimum": 0
    },
    "startIndex": {
      "type": "integer",
      "description": "Index of the first row of report data to return.",
      "maximum": 5000,
      "minimum": 0
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "csv",
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
    "savedReportId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Report"
}
```
