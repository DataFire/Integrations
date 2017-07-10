# @datafire/google_androidenterprise
Manages the deployment of apps to Android for Work users.

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
## Operation: enterprises.list
Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "The exact primary domain name of the enterprise to look up."
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
    "domain"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EnterprisesListResponse"
}
```
## Operation: enterprises.insert
Establishes the binding between the EMM and an enterprise. This is now deprecated; use enroll instead.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The token provided by the enterprise to register the EMM."
    },
    "body": {
      "$ref": "#/definitions/Enterprise"
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
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Enterprise"
}
```
## Operation: enterprises.acknowledgeNotificationSet
Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "notificationSetId": {
      "type": "string",
      "description": "The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided."
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
## Operation: enterprises.completeSignup
Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "completionToken": {
      "type": "string",
      "description": "The Completion token initially returned by GenerateSignupUrl."
    },
    "enterpriseToken": {
      "type": "string",
      "description": "The Enterprise token appended to the Callback URL."
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
  "$ref": "#/definitions/Enterprise"
}
```
## Operation: enterprises.enroll
Enrolls an enterprise with the calling EMM.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The token provided by the enterprise to register the EMM."
    },
    "body": {
      "$ref": "#/definitions/Enterprise"
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
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Enterprise"
}
```
## Operation: enterprises.pullNotificationSet
Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending.
A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty.
Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy.
Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending.
If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "requestMode": {
      "type": "string",
      "description": "The request mode for pulling notifications.\nSpecifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time.\nSpeciying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present.\nIf omitted, defaults to waitForNotifications.",
      "enum": [
        "returnImmediately",
        "waitForNotifications"
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
  "$ref": "#/definitions/NotificationSet"
}
```
## Operation: enterprises.generateSignupUrl
Generates a sign-up URL.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "callbackUrl": {
      "type": "string",
      "description": "The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named \"enterpriseToken\" which will contain an opaque token to be used for the CompleteSignup request.\nBeware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed."
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
  "$ref": "#/definitions/SignupInfo"
}
```
## Operation: enterprises.delete
Deletes the binding between the EMM and enterprise. This is now deprecated. Use this method only to unenroll customers that were previously enrolled with the insert call, then enroll them again with the enroll call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: enterprises.get
Retrieves the name and domain of an enterprise.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Enterprise"
}
```
## Operation: enterprises.setAccount
Sets the account that will be used to authenticate to the API as the enterprise.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "body": {
      "$ref": "#/definitions/EnterpriseAccount"
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EnterpriseAccount"
}
```
## Operation: enterprises.createWebToken
Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "body": {
      "$ref": "#/definitions/AdministratorWebTokenSpec"
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdministratorWebToken"
}
```
## Operation: grouplicenses.list
Retrieves IDs of all products for which the enterprise has a group license.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupLicensesListResponse"
}
```
## Operation: grouplicenses.get
Retrieves details of an enterprise's group license for a product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "groupLicenseId": {
      "type": "string",
      "description": "The ID of the product the group license is for, e.g. \"app:com.google.android.gm\"."
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
    "enterpriseId",
    "groupLicenseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupLicense"
}
```
## Operation: grouplicenseusers.list
Retrieves the IDs of the users who have been granted entitlements under the license.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "groupLicenseId": {
      "type": "string",
      "description": "The ID of the product the group license is for, e.g. \"app:com.google.android.gm\"."
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
    "enterpriseId",
    "groupLicenseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupLicenseUsersListResponse"
}
```
## Operation: products.list
Finds approved products that match a query, or all approved products if there is no query.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "approved": {
      "type": "boolean",
      "description": "Specifies whether to search among all products (false) or among only products that have been approved (true). Only \"true\" is supported, and should be specified."
    },
    "language": {
      "type": "string",
      "description": "The BCP47 tag for the user's preferred language (e.g. \"en-US\", \"de\"). Results are returned in the language best matching the preferred language."
    },
    "maxResults": {
      "type": "integer",
      "description": "Specifies the maximum number of products that can be returned per request. If not specified, uses a default value of 100, which is also the maximum retrievable within a single response."
    },
    "query": {
      "type": "string",
      "description": "The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps)."
    },
    "token": {
      "type": "string",
      "description": "A pagination token is contained in a request''s response when there are more products. The token can be used in a subsequent request to obtain more products, and so forth. This parameter cannot be used in the initial request."
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductsListResponse"
}
```
## Operation: products.get
Retrieves details of a product for display to an enterprise admin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "productId": {
      "type": "string",
      "description": "The ID of the product, e.g. \"app:com.google.android.gm\"."
    },
    "language": {
      "type": "string",
      "description": "The BCP47 tag for the user's preferred language (e.g. \"en-US\", \"de\")."
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
    "enterpriseId",
    "productId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Product"
}
```
## Operation: products.getAppRestrictionsSchema
Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "productId": {
      "type": "string",
      "description": "The ID of the product."
    },
    "language": {
      "type": "string",
      "description": "The BCP47 tag for the user's preferred language (e.g. \"en-US\", \"de\")."
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
    "enterpriseId",
    "productId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppRestrictionsSchema"
}
```
## Operation: products.approve
Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000.

To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "productId": {
      "type": "string",
      "description": "The ID of the product."
    },
    "body": {
      "$ref": "#/definitions/ProductsApproveRequest"
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
    "enterpriseId",
    "productId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.generateApprovalUrl
Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product.

Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "productId": {
      "type": "string",
      "description": "The ID of the product."
    },
    "languageCode": {
      "type": "string",
      "description": "The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance \"en-US\"."
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
    "enterpriseId",
    "productId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductsGenerateApprovalUrlResponse"
}
```
## Operation: products.getPermissions
Retrieves the Android app permissions required by this app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "productId": {
      "type": "string",
      "description": "The ID of the product."
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
    "enterpriseId",
    "productId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductPermissions"
}
```
## Operation: products.unapprove
Unapproves the specified product (and the relevant app permissions, if any)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "productId": {
      "type": "string",
      "description": "The ID of the product."
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
    "enterpriseId",
    "productId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: enterprises.sendTestPushNotification
Sends a test push notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EnterprisesSendTestPushNotificationResponse"
}
```
## Operation: enterprises.getServiceAccount
Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side.

This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error.

Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials.

Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "keyType": {
      "type": "string",
      "description": "The type of credential to return with the service account. Required.",
      "enum": [
        "googleCredentials",
        "pkcs12"
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServiceAccount"
}
```
## Operation: serviceaccountkeys.list
Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServiceAccountKeysListResponse"
}
```
## Operation: serviceaccountkeys.insert
Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

Only the type of the key should be populated in the resource to be inserted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "body": {
      "$ref": "#/definitions/ServiceAccountKey"
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServiceAccountKey"
}
```
## Operation: serviceaccountkeys.delete
Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "keyId": {
      "type": "string",
      "description": "The ID of the key."
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
    "enterpriseId",
    "keyId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: enterprises.getStoreLayout
Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StoreLayout"
}
```
## Operation: enterprises.setStoreLayout
Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the  setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "body": {
      "$ref": "#/definitions/StoreLayout"
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StoreLayout"
}
```
## Operation: storelayoutpages.list
Retrieves the details of all pages in the store.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StoreLayoutPagesListResponse"
}
```
## Operation: storelayoutpages.insert
Inserts a new store page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "body": {
      "$ref": "#/definitions/StorePage"
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StorePage"
}
```
## Operation: storelayoutpages.delete
Deletes a store page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
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
    "enterpriseId",
    "pageId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: storelayoutpages.get
Retrieves details of a store page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
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
    "enterpriseId",
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StorePage"
}
```
## Operation: storelayoutpages.patch
Updates the content of a store page. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
    },
    "body": {
      "$ref": "#/definitions/StorePage"
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
    "enterpriseId",
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StorePage"
}
```
## Operation: storelayoutpages.update
Updates the content of a store page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
    },
    "body": {
      "$ref": "#/definitions/StorePage"
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
    "enterpriseId",
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StorePage"
}
```
## Operation: storelayoutclusters.list
Retrieves the details of all clusters on the specified page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
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
    "enterpriseId",
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StoreLayoutClustersListResponse"
}
```
## Operation: storelayoutclusters.insert
Inserts a new cluster in a page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
    },
    "body": {
      "$ref": "#/definitions/StoreCluster"
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
    "enterpriseId",
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StoreCluster"
}
```
## Operation: storelayoutclusters.delete
Deletes a cluster.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
    },
    "clusterId": {
      "type": "string",
      "description": "The ID of the cluster."
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
    "enterpriseId",
    "pageId",
    "clusterId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: storelayoutclusters.get
Retrieves details of a cluster.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
    },
    "clusterId": {
      "type": "string",
      "description": "The ID of the cluster."
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
    "enterpriseId",
    "pageId",
    "clusterId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StoreCluster"
}
```
## Operation: storelayoutclusters.patch
Updates a cluster. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
    },
    "clusterId": {
      "type": "string",
      "description": "The ID of the cluster."
    },
    "body": {
      "$ref": "#/definitions/StoreCluster"
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
    "enterpriseId",
    "pageId",
    "clusterId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StoreCluster"
}
```
## Operation: storelayoutclusters.update
Updates a cluster.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
    },
    "clusterId": {
      "type": "string",
      "description": "The ID of the cluster."
    },
    "body": {
      "$ref": "#/definitions/StoreCluster"
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
    "enterpriseId",
    "pageId",
    "clusterId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StoreCluster"
}
```
## Operation: enterprises.unenroll
Unenrolls an enterprise from the calling EMM.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.list
Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "email": {
      "type": "string",
      "description": "The exact primary email address of the user to look up."
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
    "enterpriseId",
    "email"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsersListResponse"
}
```
## Operation: users.insert
Creates a new EMM-managed user.

The Users resource passed in the body of the request should include an accountIdentifier and an accountType.
If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "body": {
      "$ref": "#/definitions/User"
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
    "enterpriseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.delete
Deleted an EMM-managed user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.get
Retrieves a user's details.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.patch
Updates the details of an EMM-managed user.

Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "body": {
      "$ref": "#/definitions/User"
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.update
Updates the details of an EMM-managed user.

Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "body": {
      "$ref": "#/definitions/User"
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.generateAuthenticationToken
Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes.

This call only works with EMM-managed accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthenticationToken"
}
```
## Operation: users.getAvailableProductSet
Retrieves the set of products a user is entitled to access.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductSet"
}
```
## Operation: users.setAvailableProductSet
Modifies the set of products that a user is entitled to access (referred to as whitelisted products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "body": {
      "$ref": "#/definitions/ProductSet"
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductSet"
}
```
## Operation: devices.list
Retrieves the IDs of all of a user's devices.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DevicesListResponse"
}
```
## Operation: devices.get
Retrieves the details of a device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The ID of the device."
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
    "enterpriseId",
    "userId",
    "deviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Device"
}
```
## Operation: installs.list
Retrieves the details of all apps installed on the specified device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The Android ID of the device."
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
    "enterpriseId",
    "userId",
    "deviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InstallsListResponse"
}
```
## Operation: installs.delete
Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The Android ID of the device."
    },
    "installId": {
      "type": "string",
      "description": "The ID of the product represented by the install, e.g. \"app:com.google.android.gm\"."
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
    "enterpriseId",
    "userId",
    "deviceId",
    "installId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: installs.get
Retrieves details of an installation of an app on a device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The Android ID of the device."
    },
    "installId": {
      "type": "string",
      "description": "The ID of the product represented by the install, e.g. \"app:com.google.android.gm\"."
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
    "enterpriseId",
    "userId",
    "deviceId",
    "installId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Install"
}
```
## Operation: installs.patch
Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The Android ID of the device."
    },
    "installId": {
      "type": "string",
      "description": "The ID of the product represented by the install, e.g. \"app:com.google.android.gm\"."
    },
    "body": {
      "$ref": "#/definitions/Install"
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
    "enterpriseId",
    "userId",
    "deviceId",
    "installId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Install"
}
```
## Operation: installs.update
Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The Android ID of the device."
    },
    "installId": {
      "type": "string",
      "description": "The ID of the product represented by the install, e.g. \"app:com.google.android.gm\"."
    },
    "body": {
      "$ref": "#/definitions/Install"
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
    "enterpriseId",
    "userId",
    "deviceId",
    "installId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Install"
}
```
## Operation: managedconfigurationsfordevice.list
Lists all the per-device managed configurations for the specified device. Only the ID is set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The Android ID of the device."
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
    "enterpriseId",
    "userId",
    "deviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagedConfigurationsForDeviceListResponse"
}
```
## Operation: managedconfigurationsfordevice.delete
Removes a per-device managed configuration for an app for the specified device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The Android ID of the device."
    },
    "managedConfigurationForDeviceId": {
      "type": "string",
      "description": "The ID of the managed configuration (a product ID), e.g. \"app:com.google.android.gm\"."
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
    "enterpriseId",
    "userId",
    "deviceId",
    "managedConfigurationForDeviceId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: managedconfigurationsfordevice.get
Retrieves details of a per-device managed configuration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The Android ID of the device."
    },
    "managedConfigurationForDeviceId": {
      "type": "string",
      "description": "The ID of the managed configuration (a product ID), e.g. \"app:com.google.android.gm\"."
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
    "enterpriseId",
    "userId",
    "deviceId",
    "managedConfigurationForDeviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagedConfiguration"
}
```
## Operation: managedconfigurationsfordevice.patch
Adds or updates a per-device managed configuration for an app for the specified device. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The Android ID of the device."
    },
    "managedConfigurationForDeviceId": {
      "type": "string",
      "description": "The ID of the managed configuration (a product ID), e.g. \"app:com.google.android.gm\"."
    },
    "body": {
      "$ref": "#/definitions/ManagedConfiguration"
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
    "enterpriseId",
    "userId",
    "deviceId",
    "managedConfigurationForDeviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagedConfiguration"
}
```
## Operation: managedconfigurationsfordevice.update
Adds or updates a per-device managed configuration for an app for the specified device.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The Android ID of the device."
    },
    "managedConfigurationForDeviceId": {
      "type": "string",
      "description": "The ID of the managed configuration (a product ID), e.g. \"app:com.google.android.gm\"."
    },
    "body": {
      "$ref": "#/definitions/ManagedConfiguration"
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
    "enterpriseId",
    "userId",
    "deviceId",
    "managedConfigurationForDeviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagedConfiguration"
}
```
## Operation: devices.getState
Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The ID of the device."
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
    "enterpriseId",
    "userId",
    "deviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeviceState"
}
```
## Operation: devices.setState
Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "deviceId": {
      "type": "string",
      "description": "The ID of the device."
    },
    "body": {
      "$ref": "#/definitions/DeviceState"
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
    "enterpriseId",
    "userId",
    "deviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeviceState"
}
```
## Operation: entitlements.list
Lists all entitlements for the specified user. Only the ID is set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntitlementsListResponse"
}
```
## Operation: entitlements.delete
Removes an entitlement to an app for a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "entitlementId": {
      "type": "string",
      "description": "The ID of the entitlement (a product ID), e.g. \"app:com.google.android.gm\"."
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
    "enterpriseId",
    "userId",
    "entitlementId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: entitlements.get
Retrieves details of an entitlement.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "entitlementId": {
      "type": "string",
      "description": "The ID of the entitlement (a product ID), e.g. \"app:com.google.android.gm\"."
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
    "enterpriseId",
    "userId",
    "entitlementId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Entitlement"
}
```
## Operation: entitlements.patch
Adds or updates an entitlement to an app for a user. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "entitlementId": {
      "type": "string",
      "description": "The ID of the entitlement (a product ID), e.g. \"app:com.google.android.gm\"."
    },
    "install": {
      "type": "boolean",
      "description": "Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user."
    },
    "body": {
      "$ref": "#/definitions/Entitlement"
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
    "enterpriseId",
    "userId",
    "entitlementId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Entitlement"
}
```
## Operation: entitlements.update
Adds or updates an entitlement to an app for a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "entitlementId": {
      "type": "string",
      "description": "The ID of the entitlement (a product ID), e.g. \"app:com.google.android.gm\"."
    },
    "install": {
      "type": "boolean",
      "description": "Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user."
    },
    "body": {
      "$ref": "#/definitions/Entitlement"
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
    "enterpriseId",
    "userId",
    "entitlementId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Entitlement"
}
```
## Operation: managedconfigurationsforuser.list
Lists all the per-user managed configurations for the specified user. Only the ID is set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagedConfigurationsForUserListResponse"
}
```
## Operation: managedconfigurationsforuser.delete
Removes a per-user managed configuration for an app for the specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "managedConfigurationForUserId": {
      "type": "string",
      "description": "The ID of the managed configuration (a product ID), e.g. \"app:com.google.android.gm\"."
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
    "enterpriseId",
    "userId",
    "managedConfigurationForUserId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: managedconfigurationsforuser.get
Retrieves details of a per-user managed configuration for an app for the specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "managedConfigurationForUserId": {
      "type": "string",
      "description": "The ID of the managed configuration (a product ID), e.g. \"app:com.google.android.gm\"."
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
    "enterpriseId",
    "userId",
    "managedConfigurationForUserId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagedConfiguration"
}
```
## Operation: managedconfigurationsforuser.patch
Adds or updates a per-user managed configuration for an app for the specified user. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "managedConfigurationForUserId": {
      "type": "string",
      "description": "The ID of the managed configuration (a product ID), e.g. \"app:com.google.android.gm\"."
    },
    "body": {
      "$ref": "#/definitions/ManagedConfiguration"
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
    "enterpriseId",
    "userId",
    "managedConfigurationForUserId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagedConfiguration"
}
```
## Operation: managedconfigurationsforuser.update
Adds or updates a per-user managed configuration for an app for the specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
    },
    "managedConfigurationForUserId": {
      "type": "string",
      "description": "The ID of the managed configuration (a product ID), e.g. \"app:com.google.android.gm\"."
    },
    "body": {
      "$ref": "#/definitions/ManagedConfiguration"
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
    "enterpriseId",
    "userId",
    "managedConfigurationForUserId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagedConfiguration"
}
```
## Operation: users.revokeToken
Revokes a previously generated token (activation code) for the user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.generateToken
Generates a token (activation code) to allow this user to configure their managed account in the Android Setup Wizard. Revokes any previously generated token.

This call only works with Google managed accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "enterpriseId": {
      "type": "string",
      "description": "The ID of the enterprise."
    },
    "userId": {
      "type": "string",
      "description": "The ID of the user."
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
    "enterpriseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserToken"
}
```
## Operation: permissions.get
Retrieves details of an Android app permission for display to an enterprise admin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "permissionId": {
      "type": "string",
      "description": "The ID of the permission."
    },
    "language": {
      "type": "string",
      "description": "The BCP47 tag for the user's preferred language (e.g. \"en-US\", \"de\")"
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
    "permissionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Permission"
}
```
