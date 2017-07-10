# @datafire/google_adsensehost
Generates performance reports, generates ad codes, and provides publisher management capabilities for AdSense Hosts.

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
List hosted accounts associated with this AdSense account by ad client id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filterAdClientId": {
      "type": "array",
      "description": "Ad clients to list accounts for."
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
    "filterAdClientId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Accounts"
}
```
## Operation: accounts.get
Get information about the selected associated AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account to get information about."
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
List all hosted ad clients in the specified hosted account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account for which to list ad clients."
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
## Operation: accounts.adclients.get
Get information about one of the ad clients in the specified publisher's AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account which contains the ad client."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client to get."
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
  "$ref": "#/definitions/AdClient"
}
```
## Operation: accounts.adunits.list
List all ad units in the specified publisher's AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account which contains the ad client."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client for which to list ad units."
    },
    "includeInactive": {
      "type": "boolean",
      "description": "Whether to include inactive ad units. Default: true."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of ad units to include in the response, used for paging.",
      "maximum": 10000,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of \"nextPageToken\" from the previous response."
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
  "$ref": "#/definitions/AdUnits"
}
```
## Operation: accounts.adunits.patch
Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account which contains the ad client."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client which contains the ad unit."
    },
    "adUnitId": {
      "type": "string",
      "description": "Ad unit to get."
    },
    "body": {
      "$ref": "#/definitions/AdUnit"
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
    "adUnitId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdUnit"
}
```
## Operation: accounts.adunits.insert
Insert the supplied ad unit into the specified publisher AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account which will contain the ad unit."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client into which to insert the ad unit."
    },
    "body": {
      "$ref": "#/definitions/AdUnit"
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
  "$ref": "#/definitions/AdUnit"
}
```
## Operation: accounts.adunits.update
Update the supplied ad unit in the specified publisher AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account which contains the ad client."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client which contains the ad unit."
    },
    "body": {
      "$ref": "#/definitions/AdUnit"
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
  "$ref": "#/definitions/AdUnit"
}
```
## Operation: accounts.adunits.delete
Delete the specified ad unit from the specified publisher AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account which contains the ad unit."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client for which to get ad unit."
    },
    "adUnitId": {
      "type": "string",
      "description": "Ad unit to delete."
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
    "adUnitId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdUnit"
}
```
## Operation: accounts.adunits.get
Get the specified host ad unit in this AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account which contains the ad unit."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client for which to get ad unit."
    },
    "adUnitId": {
      "type": "string",
      "description": "Ad unit to get."
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
    "adUnitId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdUnit"
}
```
## Operation: accounts.adunits.getAdCode
Get ad code for the specified ad unit, attaching the specified host custom channels.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account which contains the ad client."
    },
    "adClientId": {
      "type": "string",
      "description": "Ad client with contains the ad unit."
    },
    "adUnitId": {
      "type": "string",
      "description": "Ad unit to get the code for."
    },
    "hostCustomChannelId": {
      "type": "array",
      "description": "Host custom channel to attach to the ad code."
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
    "adUnitId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdCode"
}
```
## Operation: accounts.reports.generate
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Hosted account upon which to report."
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
## Operation: adclients.list
List all host ad clients in this AdSense account.

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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdClients"
}
```
## Operation: adclients.get
Get information about one of the ad clients in the Host AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client to get."
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
    "adClientId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdClient"
}
```
## Operation: customchannels.list
List all host custom channels in this AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
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
## Operation: customchannels.patch
Update a custom channel in the host AdSense account. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client in which the custom channel will be updated."
    },
    "customChannelId": {
      "type": "string",
      "description": "Custom channel to get."
    },
    "body": {
      "$ref": "#/definitions/CustomChannel"
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
## Operation: customchannels.insert
Add a new custom channel to the host AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client to which the new custom channel will be added."
    },
    "body": {
      "$ref": "#/definitions/CustomChannel"
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
    "adClientId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomChannel"
}
```
## Operation: customchannels.update
Update a custom channel in the host AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client in which the custom channel will be updated."
    },
    "body": {
      "$ref": "#/definitions/CustomChannel"
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
    "adClientId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomChannel"
}
```
## Operation: customchannels.delete
Delete a specific custom channel from the host AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client from which to delete the custom channel."
    },
    "customChannelId": {
      "type": "string",
      "description": "Custom channel to delete."
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
## Operation: customchannels.get
Get a specific custom channel from the host AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client from which to get the custom channel."
    },
    "customChannelId": {
      "type": "string",
      "description": "Custom channel to get."
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
## Operation: urlchannels.list
List all host URL channels in the host AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
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
## Operation: urlchannels.insert
Add a new URL channel to the host AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client to which the new URL channel will be added."
    },
    "body": {
      "$ref": "#/definitions/UrlChannel"
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
    "adClientId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlChannel"
}
```
## Operation: urlchannels.delete
Delete a URL channel from the host AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client from which to delete the URL channel."
    },
    "urlChannelId": {
      "type": "string",
      "description": "URL channel to delete."
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
    "adClientId",
    "urlChannelId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlChannel"
}
```
## Operation: associationsessions.start
Create an association session for initiating an association with an AdSense user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productCode": {
      "type": "array",
      "description": "Products to associate with the user."
    },
    "websiteUrl": {
      "type": "string",
      "description": "The URL of the user's hosted website."
    },
    "userLocale": {
      "type": "string",
      "description": "The preferred locale of the user."
    },
    "websiteLocale": {
      "type": "string",
      "description": "The locale of the user's hosted website."
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
    "productCode",
    "websiteUrl"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AssociationSession"
}
```
## Operation: associationsessions.verify
Verify an association session after the association callback returns from AdSense signup.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The token returned to the association callback URL."
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
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AssociationSession"
}
```
## Operation: reports.generate
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
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
