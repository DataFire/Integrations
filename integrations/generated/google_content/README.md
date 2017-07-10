# @datafire/google_content
Manages product items, inventory, and Merchant Center accounts for Google Shopping.

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
## Operation: accounts.authinfo
Returns information about the authenticated user.

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
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
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
  "$ref": "#/definitions/AccountsAuthInfoResponse"
}
```
## Operation: accounts.custombatch
Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/AccountsCustomBatchRequest"
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
  "$ref": "#/definitions/AccountsCustomBatchResponse"
}
```
## Operation: accountstatuses.custombatch


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/AccountstatusesCustomBatchRequest"
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
  "$ref": "#/definitions/AccountstatusesCustomBatchResponse"
}
```
## Operation: accounttax.custombatch
Retrieves and updates tax settings of multiple accounts in a single request.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/AccounttaxCustomBatchRequest"
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
  "$ref": "#/definitions/AccounttaxCustomBatchResponse"
}
```
## Operation: datafeeds.custombatch


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/DatafeedsCustomBatchRequest"
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
  "$ref": "#/definitions/DatafeedsCustomBatchResponse"
}
```
## Operation: datafeedstatuses.custombatch


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/DatafeedstatusesCustomBatchRequest"
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
  "$ref": "#/definitions/DatafeedstatusesCustomBatchResponse"
}
```
## Operation: inventory.custombatch
Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/InventoryCustomBatchRequest"
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
  "$ref": "#/definitions/InventoryCustomBatchResponse"
}
```
## Operation: orders.custombatch
Retrieves or modifies multiple orders in a single request. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/OrdersCustomBatchRequest"
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
  "$ref": "#/definitions/OrdersCustomBatchResponse"
}
```
## Operation: products.custombatch
Retrieves, inserts, and deletes multiple products in a single request. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/ProductsCustomBatchRequest"
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
  "$ref": "#/definitions/ProductsCustomBatchResponse"
}
```
## Operation: productstatuses.custombatch
Gets the statuses of multiple products in a single request. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/ProductstatusesCustomBatchRequest"
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
  "$ref": "#/definitions/ProductstatusesCustomBatchResponse"
}
```
## Operation: shippingsettings.custombatch
Retrieves and updates the shipping settings of multiple accounts in a single request.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/ShippingsettingsCustomBatchRequest"
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
  "$ref": "#/definitions/ShippingsettingsCustomBatchResponse"
}
```
## Operation: accounts.list
Lists the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of accounts to return in the response, used for paging."
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountsListResponse"
}
```
## Operation: accounts.insert
Creates a Merchant Center sub-account. This method can only be called for multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/Account"
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Account"
}
```
## Operation: accounts.delete
Deletes a Merchant Center sub-account. This method can only be called for multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
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
    "merchantId",
    "accountId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.get
Retrieves a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account."
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
    "merchantId",
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
## Operation: accounts.patch
Updates a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/Account"
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
    "merchantId",
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
## Operation: accounts.update
Updates a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/Account"
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
    "merchantId",
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
## Operation: accountstatuses.list
Lists the statuses of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of account statuses to return in the response, used for paging."
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountstatusesListResponse"
}
```
## Operation: accountstatuses.get
Retrieves the status of a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account."
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
    "merchantId",
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountStatus"
}
```
## Operation: accounttax.list
Lists the tax settings of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of tax settings to return in the response, used for paging."
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccounttaxListResponse"
}
```
## Operation: accounttax.get
Retrieves the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account for which to get/update account tax settings."
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
    "merchantId",
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountTax"
}
```
## Operation: accounttax.patch
Updates the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account for which to get/update account tax settings."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/AccountTax"
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
    "merchantId",
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountTax"
}
```
## Operation: accounttax.update
Updates the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account for which to get/update account tax settings."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/AccountTax"
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
    "merchantId",
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountTax"
}
```
## Operation: datafeeds.list
Lists the datafeeds in your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of products to return in the response, used for paging."
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatafeedsListResponse"
}
```
## Operation: datafeeds.insert
Registers a datafeed with your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string"
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/Datafeed"
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Datafeed"
}
```
## Operation: datafeeds.delete
Deletes a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string"
    },
    "datafeedId": {
      "type": "string"
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
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
    "merchantId",
    "datafeedId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: datafeeds.get
Retrieves a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string"
    },
    "datafeedId": {
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
    "merchantId",
    "datafeedId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Datafeed"
}
```
## Operation: datafeeds.patch
Updates a datafeed of your Merchant Center account. This method can only be called for non-multi-client accounts. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string"
    },
    "datafeedId": {
      "type": "string"
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/Datafeed"
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
    "merchantId",
    "datafeedId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Datafeed"
}
```
## Operation: datafeeds.update
Updates a datafeed of your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string"
    },
    "datafeedId": {
      "type": "string"
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/Datafeed"
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
    "merchantId",
    "datafeedId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Datafeed"
}
```
## Operation: datafeedstatuses.list
Lists the statuses of the datafeeds in your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of products to return in the response, used for paging."
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatafeedstatusesListResponse"
}
```
## Operation: datafeedstatuses.get
Retrieves the status of a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string"
    },
    "datafeedId": {
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
    "merchantId",
    "datafeedId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatafeedStatus"
}
```
## Operation: inventory.set
Updates price and availability of a product in your Merchant Center account. This operation does not update the expiration date of the product. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "storeCode": {
      "type": "string",
      "description": "The code of the store for which to update price and availability. Use online to update price and availability of an online product."
    },
    "productId": {
      "type": "string",
      "description": "The ID of the product for which to update price and availability."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/InventorySetRequest"
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
    "merchantId",
    "storeCode",
    "productId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InventorySetResponse"
}
```
## Operation: orders.list
Lists the orders in your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "acknowledged": {
      "type": "boolean",
      "description": "Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged.\nWe recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.\nKnown issue: All List calls will return all Orders without limit regardless of the value of this field."
    },
    "orderBy": {
      "type": "string",
      "description": "The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. \"placedDate desc\" stands for listing orders by placement date, from oldest to most recent. \"placedDate asc\" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.",
      "enum": [
        "placedDate asc",
        "placedDate desc"
      ]
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
    },
    "placedDateEnd": {
      "type": "string",
      "description": "Obtains orders placed before this date (exclusively), in ISO 8601 format."
    },
    "placedDateStart": {
      "type": "string",
      "description": "Obtains orders placed after this date (inclusively), in ISO 8601 format."
    },
    "statuses": {
      "type": "array",
      "description": "Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled."
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersListResponse"
}
```
## Operation: orders.get
Retrieves an order from your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "orderId": {
      "type": "string",
      "description": "The ID of the order."
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
    "merchantId",
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
## Operation: orders.acknowledge
Marks an order as acknowledged. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "orderId": {
      "type": "string",
      "description": "The ID of the order."
    },
    "body": {
      "$ref": "#/definitions/OrdersAcknowledgeRequest"
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
    "merchantId",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersAcknowledgeResponse"
}
```
## Operation: orders.cancel
Cancels all line items in an order, making a full refund. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "orderId": {
      "type": "string",
      "description": "The ID of the order to cancel."
    },
    "body": {
      "$ref": "#/definitions/OrdersCancelRequest"
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
    "merchantId",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersCancelResponse"
}
```
## Operation: orders.cancellineitem
Cancels a line item, making a full refund. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "orderId": {
      "type": "string",
      "description": "The ID of the order."
    },
    "body": {
      "$ref": "#/definitions/OrdersCancelLineItemRequest"
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
    "merchantId",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersCancelLineItemResponse"
}
```
## Operation: orders.refund
Refund a portion of the order, up to the full amount paid. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "orderId": {
      "type": "string",
      "description": "The ID of the order to refund."
    },
    "body": {
      "$ref": "#/definitions/OrdersRefundRequest"
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
    "merchantId",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersRefundResponse"
}
```
## Operation: orders.returnlineitem
Returns a line item. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "orderId": {
      "type": "string",
      "description": "The ID of the order."
    },
    "body": {
      "$ref": "#/definitions/OrdersReturnLineItemRequest"
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
    "merchantId",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersReturnLineItemResponse"
}
```
## Operation: orders.shiplineitems
Marks line item(s) as shipped. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "orderId": {
      "type": "string",
      "description": "The ID of the order."
    },
    "body": {
      "$ref": "#/definitions/OrdersShipLineItemsRequest"
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
    "merchantId",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersShipLineItemsResponse"
}
```
## Operation: orders.updatemerchantorderid
Updates the merchant order ID for a given order. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "orderId": {
      "type": "string",
      "description": "The ID of the order."
    },
    "body": {
      "$ref": "#/definitions/OrdersUpdateMerchantOrderIdRequest"
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
    "merchantId",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersUpdateMerchantOrderIdResponse"
}
```
## Operation: orders.updateshipment
Updates a shipment's status, carrier, and/or tracking ID. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "orderId": {
      "type": "string",
      "description": "The ID of the order."
    },
    "body": {
      "$ref": "#/definitions/OrdersUpdateShipmentRequest"
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
    "merchantId",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersUpdateShipmentResponse"
}
```
## Operation: orders.getbymerchantorderid
Retrieves an order using merchant order id. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "merchantOrderId": {
      "type": "string",
      "description": "The merchant order id to be looked for."
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
    "merchantId",
    "merchantOrderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersGetByMerchantOrderIdResponse"
}
```
## Operation: products.list
Lists the products in your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "includeInvalidInsertedItems": {
      "type": "boolean",
      "description": "Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false)."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of products to return in the response, used for paging."
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductsListResponse"
}
```
## Operation: products.insert
Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/Product"
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Product"
}
```
## Operation: products.delete
Deletes a product from your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "productId": {
      "type": "string",
      "description": "The ID of the product."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
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
    "merchantId",
    "productId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.get
Retrieves a product from your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
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
    "merchantId",
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
## Operation: productstatuses.list
Lists the statuses of the products in your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "includeInvalidInsertedItems": {
      "type": "boolean",
      "description": "Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false)."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of product statuses to return in the response, used for paging."
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductstatusesListResponse"
}
```
## Operation: productstatuses.get
Gets the status of a product from your Merchant Center account. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
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
    "merchantId",
    "productId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductStatus"
}
```
## Operation: shippingsettings.list
Lists the shipping settings of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of shipping settings to return in the response, used for paging."
    },
    "pageToken": {
      "type": "string",
      "description": "The token returned by the previous request."
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ShippingsettingsListResponse"
}
```
## Operation: shippingsettings.get
Retrieves the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account for which to get/update shipping settings."
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
    "merchantId",
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ShippingSettings"
}
```
## Operation: shippingsettings.patch
Updates the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account for which to get/update shipping settings."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/ShippingSettings"
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
    "merchantId",
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ShippingSettings"
}
```
## Operation: shippingsettings.update
Updates the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "accountId": {
      "type": "string",
      "description": "The ID of the account for which to get/update shipping settings."
    },
    "dryRun": {
      "type": "boolean",
      "description": "Flag to run the request in dry-run mode."
    },
    "body": {
      "$ref": "#/definitions/ShippingSettings"
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
    "merchantId",
    "accountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ShippingSettings"
}
```
## Operation: shippingsettings.getsupportedcarriers
Retrieves supported carriers and carrier services for an account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the account for which to retrieve the supported carriers."
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ShippingsettingsGetSupportedCarriersResponse"
}
```
## Operation: orders.createtestorder
Sandbox only. Creates a test order. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "body": {
      "$ref": "#/definitions/OrdersCreateTestOrderRequest"
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
    "merchantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersCreateTestOrderResponse"
}
```
## Operation: orders.advancetestorder
Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment". This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "orderId": {
      "type": "string",
      "description": "The ID of the test order to modify."
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
    "merchantId",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersAdvanceTestOrderResponse"
}
```
## Operation: orders.gettestordertemplate
Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox. This method can only be called for non-multi-client accounts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchantId": {
      "type": "string",
      "description": "The ID of the managing account."
    },
    "templateName": {
      "type": "string",
      "description": "The name of the template to retrieve.",
      "enum": [
        "template1",
        "template1a",
        "template1b",
        "template2"
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
    "merchantId",
    "templateName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrdersGetTestOrderTemplateResponse"
}
```
