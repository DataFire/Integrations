# @datafire/google_adsense
Accesses AdSense publishers' inventory and generates performance reports.

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
List all accounts available to this AdSense account.

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
Get information about the selected AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account to get information about."
    },
    "tree": {
      "type": "boolean",
      "description": "Whether the tree of sub accounts should be returned."
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
List all ad clients in the specified account.

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
## Operation: accounts.adunits.list
List all ad units in the specified ad client for the specified account.

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
## Operation: accounts.adunits.get
Gets the specified ad unit in the specified ad client for the specified account.

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
      "description": "Ad client for which to get the ad unit."
    },
    "adUnitId": {
      "type": "string",
      "description": "Ad unit to retrieve."
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
Get ad code for the specified ad unit.

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
## Operation: accounts.adunits.customchannels.list
List all custom channels which the specified ad unit belongs to.

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
      "description": "Ad client which contains the ad unit."
    },
    "adUnitId": {
      "type": "string",
      "description": "Ad unit for which to list custom channels."
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
    "adClientId",
    "adUnitId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomChannels"
}
```
## Operation: accounts.customchannels.list
List all custom channels in the specified ad client for the specified account.

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
Get the specified custom channel from the specified ad client for the specified account.

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
## Operation: accounts.customchannels.adunits.list
List all ad units in the specified custom channel.

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
      "description": "Custom channel for which to list ad units."
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
    "adClientId",
    "customChannelId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdUnits"
}
```
## Operation: accounts.urlchannels.list
List all URL channels in the specified ad client for the specified account.

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
List the alerts for the specified AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account for which to retrieve the alerts."
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
## Operation: accounts.alerts.delete
Dismiss (delete) the specified alert from the specified publisher AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account which contains the ad unit."
    },
    "alertId": {
      "type": "string",
      "description": "Alert to delete."
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
    "alertId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.payments.list
List the payments for the specified AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account for which to retrieve the payments."
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
  "$ref": "#/definitions/Payments"
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
      "description": "Account upon which to report."
    },
    "startDate": {
      "type": "string",
      "description": "Start of the date range to report on in \"YYYY-MM-DD\" format, inclusive."
    },
    "endDate": {
      "type": "string",
      "description": "End of the date range to report on in \"YYYY-MM-DD\" format, inclusive."
    },
    "currency": {
      "type": "string",
      "description": "Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set."
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
    "useTimezoneReporting": {
      "type": "boolean",
      "description": "Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used."
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
  "$ref": "#/definitions/AdsenseReportsGenerateResponse"
}
```
## Operation: accounts.reports.saved.list
List all saved reports in the specified AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account to which the saved reports belong."
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
Generate an AdSense report based on the saved report ID sent in the query parameters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account to which the saved reports belong."
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
  "$ref": "#/definitions/AdsenseReportsGenerateResponse"
}
```
## Operation: accounts.savedadstyles.list
List all saved ad styles in the specified account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account for which to list saved ad styles."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of saved ad styles to include in the response, used for paging.",
      "maximum": 10000,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of \"nextPageToken\" from the previous response."
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
  "$ref": "#/definitions/SavedAdStyles"
}
```
## Operation: accounts.savedadstyles.get
List a specific saved ad style for the specified account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Account for which to get the saved ad style."
    },
    "savedAdStyleId": {
      "type": "string",
      "description": "Saved ad style to retrieve."
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
    "savedAdStyleId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SavedAdStyle"
}
```
## Operation: adclients.list
List all ad clients in this AdSense account.

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
## Operation: adunits.list
List all ad units in the specified ad client for this AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
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
## Operation: adunits.get
Gets the specified ad unit in the specified ad client.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client for which to get the ad unit."
    },
    "adUnitId": {
      "type": "string",
      "description": "Ad unit to retrieve."
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
## Operation: adunits.getAdCode
Get ad code for the specified ad unit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client with contains the ad unit."
    },
    "adUnitId": {
      "type": "string",
      "description": "Ad unit to get the code for."
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
## Operation: adunits.customchannels.list
List all custom channels which the specified ad unit belongs to.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client which contains the ad unit."
    },
    "adUnitId": {
      "type": "string",
      "description": "Ad unit for which to list custom channels."
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
    "adClientId",
    "adUnitId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomChannels"
}
```
## Operation: customchannels.list
List all custom channels in the specified ad client for this AdSense account.

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
## Operation: customchannels.get
Get the specified custom channel from the specified ad client.

### Input Schema
```json
{
  "type": "object",
  "properties": {
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
## Operation: customchannels.adunits.list
List all ad units in the specified custom channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "adClientId": {
      "type": "string",
      "description": "Ad client which contains the custom channel."
    },
    "customChannelId": {
      "type": "string",
      "description": "Custom channel for which to list ad units."
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
    "adClientId",
    "customChannelId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdUnits"
}
```
## Operation: urlchannels.list
List all URL channels in the specified ad client for this AdSense account.

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
## Operation: alerts.list
List the alerts for this AdSense account.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Alerts"
}
```
## Operation: alerts.delete
Dismiss (delete) the specified alert from the publisher's AdSense account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "alertId": {
      "type": "string",
      "description": "Alert to delete."
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
    "alertId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: metadata.dimensions.list
List the metadata for the dimensions available to this AdSense account.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
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
  "$ref": "#/definitions/Metadata"
}
```
## Operation: metadata.metrics.list
List the metadata for the metrics available to this AdSense account.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
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
  "$ref": "#/definitions/Metadata"
}
```
## Operation: payments.list
List the payments for this AdSense account.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
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
  "$ref": "#/definitions/Payments"
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
    "accountId": {
      "type": "array",
      "description": "Accounts upon which to report."
    },
    "currency": {
      "type": "string",
      "description": "Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set."
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
    "useTimezoneReporting": {
      "type": "boolean",
      "description": "Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used."
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
  "$ref": "#/definitions/AdsenseReportsGenerateResponse"
}
```
## Operation: reports.saved.list
List all saved reports in this AdSense account.

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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SavedReports"
}
```
## Operation: reports.saved.generate
Generate an AdSense report based on the saved report ID sent in the query parameters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
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
    "savedReportId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdsenseReportsGenerateResponse"
}
```
## Operation: savedadstyles.list
List all saved ad styles in the user's account.

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
      "description": "The maximum number of saved ad styles to include in the response, used for paging.",
      "maximum": 10000,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of \"nextPageToken\" from the previous response."
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
  "$ref": "#/definitions/SavedAdStyles"
}
```
## Operation: savedadstyles.get
Get a specific saved ad style from the user's account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "savedAdStyleId": {
      "type": "string",
      "description": "Saved ad style to retrieve."
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
    "savedAdStyleId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SavedAdStyle"
}
```
