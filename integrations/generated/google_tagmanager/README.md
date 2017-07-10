# @datafire/google_tagmanager
Accesses Tag Manager accounts and containers.

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
Lists all GTM Accounts that a user has access to.

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
  "$ref": "#/definitions/ListAccountsResponse"
}
```
## Operation: accounts.get
Gets a GTM Account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
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
  "$ref": "#/definitions/Account"
}
```
## Operation: accounts.update
Updates a GTM Account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "When provided, this fingerprint must match the fingerprint of the account in storage."
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
## Operation: accounts.containers.list
Lists all Containers that belongs to a GTM Account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
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
  "$ref": "#/definitions/ListContainersResponse"
}
```
## Operation: accounts.containers.create
Creates a Container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "body": {
      "$ref": "#/definitions/Container"
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
  "$ref": "#/definitions/Container"
}
```
## Operation: accounts.containers.delete
Deletes a Container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
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
    "containerId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.containers.get
Gets a Container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Container"
}
```
## Operation: accounts.containers.update
Updates a Container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "When provided, this fingerprint must match the fingerprint of the container in storage."
    },
    "body": {
      "$ref": "#/definitions/Container"
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Container"
}
```
## Operation: accounts.containers.environments.list
Lists all GTM Environments of a GTM Container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListEnvironmentsResponse"
}
```
## Operation: accounts.containers.environments.create
Creates a GTM Environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "body": {
      "$ref": "#/definitions/Environment"
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Environment"
}
```
## Operation: accounts.containers.environments.delete
Deletes a GTM Environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM Environment ID."
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
    "containerId",
    "environmentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.containers.environments.get
Gets a GTM Environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM Environment ID."
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
    "containerId",
    "environmentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Environment"
}
```
## Operation: accounts.containers.environments.patch
Updates a GTM Environment. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM Environment ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "When provided, this fingerprint must match the fingerprint of the environment in storage."
    },
    "body": {
      "$ref": "#/definitions/Environment"
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
    "containerId",
    "environmentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Environment"
}
```
## Operation: accounts.containers.environments.update
Updates a GTM Environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM Environment ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "When provided, this fingerprint must match the fingerprint of the environment in storage."
    },
    "body": {
      "$ref": "#/definitions/Environment"
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
    "containerId",
    "environmentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Environment"
}
```
## Operation: accounts.containers.folders.list
Lists all GTM Folders of a Container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListFoldersResponse"
}
```
## Operation: accounts.containers.folders.create
Creates a GTM Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "body": {
      "$ref": "#/definitions/Folder"
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Folder"
}
```
## Operation: accounts.containers.folders.delete
Deletes a GTM Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "folderId": {
      "type": "string",
      "description": "The GTM Folder ID."
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
    "containerId",
    "folderId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.containers.folders.get
Gets a GTM Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "folderId": {
      "type": "string",
      "description": "The GTM Folder ID."
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
    "containerId",
    "folderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Folder"
}
```
## Operation: accounts.containers.folders.update
Updates a GTM Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "folderId": {
      "type": "string",
      "description": "The GTM Folder ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "When provided, this fingerprint must match the fingerprint of the folder in storage."
    },
    "body": {
      "$ref": "#/definitions/Folder"
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
    "containerId",
    "folderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Folder"
}
```
## Operation: accounts.containers.folders.entities.list
List all entities in a GTM Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "folderId": {
      "type": "string",
      "description": "The GTM Folder ID."
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
    "containerId",
    "folderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FolderEntities"
}
```
## Operation: accounts.containers.move_folders.update
Moves entities to a GTM Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "folderId": {
      "type": "string",
      "description": "The GTM Folder ID."
    },
    "tagId": {
      "type": "array",
      "description": "The tags to be moved to the folder."
    },
    "triggerId": {
      "type": "array",
      "description": "The triggers to be moved to the folder."
    },
    "variableId": {
      "type": "array",
      "description": "The variables to be moved to the folder."
    },
    "body": {
      "$ref": "#/definitions/Folder"
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
    "containerId",
    "folderId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.containers.reauthorize_environments.update
Re-generates the authorization code for a GTM Environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM Environment ID."
    },
    "body": {
      "$ref": "#/definitions/Environment"
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
    "containerId",
    "environmentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Environment"
}
```
## Operation: accounts.containers.tags.list
Lists all GTM Tags of a Container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListTagsResponse"
}
```
## Operation: accounts.containers.tags.create
Creates a GTM Tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "body": {
      "$ref": "#/definitions/Tag"
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tag"
}
```
## Operation: accounts.containers.tags.delete
Deletes a GTM Tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "tagId": {
      "type": "string",
      "description": "The GTM Tag ID."
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
    "containerId",
    "tagId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.containers.tags.get
Gets a GTM Tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "tagId": {
      "type": "string",
      "description": "The GTM Tag ID."
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
    "containerId",
    "tagId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tag"
}
```
## Operation: accounts.containers.tags.update
Updates a GTM Tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "tagId": {
      "type": "string",
      "description": "The GTM Tag ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "When provided, this fingerprint must match the fingerprint of the tag in storage."
    },
    "body": {
      "$ref": "#/definitions/Tag"
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
    "containerId",
    "tagId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tag"
}
```
## Operation: accounts.containers.triggers.list
Lists all GTM Triggers of a Container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListTriggersResponse"
}
```
## Operation: accounts.containers.triggers.create
Creates a GTM Trigger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "body": {
      "$ref": "#/definitions/Trigger"
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Trigger"
}
```
## Operation: accounts.containers.triggers.delete
Deletes a GTM Trigger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "triggerId": {
      "type": "string",
      "description": "The GTM Trigger ID."
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
    "containerId",
    "triggerId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.containers.triggers.get
Gets a GTM Trigger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "triggerId": {
      "type": "string",
      "description": "The GTM Trigger ID."
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
    "containerId",
    "triggerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Trigger"
}
```
## Operation: accounts.containers.triggers.update
Updates a GTM Trigger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "triggerId": {
      "type": "string",
      "description": "The GTM Trigger ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "When provided, this fingerprint must match the fingerprint of the trigger in storage."
    },
    "body": {
      "$ref": "#/definitions/Trigger"
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
    "containerId",
    "triggerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Trigger"
}
```
## Operation: accounts.containers.variables.list
Lists all GTM Variables of a Container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListVariablesResponse"
}
```
## Operation: accounts.containers.variables.create
Creates a GTM Variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "body": {
      "$ref": "#/definitions/Variable"
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Variable"
}
```
## Operation: accounts.containers.variables.delete
Deletes a GTM Variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "variableId": {
      "type": "string",
      "description": "The GTM Variable ID."
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
    "containerId",
    "variableId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.containers.variables.get
Gets a GTM Variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "variableId": {
      "type": "string",
      "description": "The GTM Variable ID."
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
    "containerId",
    "variableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Variable"
}
```
## Operation: accounts.containers.variables.update
Updates a GTM Variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "variableId": {
      "type": "string",
      "description": "The GTM Variable ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "When provided, this fingerprint must match the fingerprint of the variable in storage."
    },
    "body": {
      "$ref": "#/definitions/Variable"
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
    "containerId",
    "variableId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Variable"
}
```
## Operation: accounts.containers.versions.list
Lists all Container Versions of a GTM Container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "headers": {
      "type": "boolean",
      "description": "Retrieve headers only when true."
    },
    "includeDeleted": {
      "type": "boolean",
      "description": "Also retrieve deleted (archived) versions when true."
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListContainerVersionsResponse"
}
```
## Operation: accounts.containers.versions.create
Creates a Container Version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "body": {
      "$ref": "#/definitions/CreateContainerVersionRequestVersionOptions"
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
    "containerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreateContainerVersionResponse"
}
```
## Operation: accounts.containers.versions.delete
Deletes a Container Version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "containerVersionId": {
      "type": "string",
      "description": "The GTM Container Version ID."
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
    "containerId",
    "containerVersionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.containers.versions.get
Gets a Container Version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "containerVersionId": {
      "type": "string",
      "description": "The GTM Container Version ID. Specify published to retrieve the currently published version."
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
    "containerId",
    "containerVersionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContainerVersion"
}
```
## Operation: accounts.containers.versions.update
Updates a Container Version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "containerVersionId": {
      "type": "string",
      "description": "The GTM Container Version ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "When provided, this fingerprint must match the fingerprint of the container version in storage."
    },
    "body": {
      "$ref": "#/definitions/ContainerVersion"
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
    "containerId",
    "containerVersionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContainerVersion"
}
```
## Operation: accounts.containers.versions.publish
Publishes a Container Version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "containerVersionId": {
      "type": "string",
      "description": "The GTM Container Version ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "When provided, this fingerprint must match the fingerprint of the container version in storage."
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
    "containerId",
    "containerVersionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PublishContainerVersionResponse"
}
```
## Operation: accounts.containers.versions.restore
Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "containerVersionId": {
      "type": "string",
      "description": "The GTM Container Version ID."
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
    "containerId",
    "containerVersionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContainerVersion"
}
```
## Operation: accounts.containers.versions.undelete
Undeletes a Container Version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM Container ID."
    },
    "containerVersionId": {
      "type": "string",
      "description": "The GTM Container Version ID."
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
    "containerId",
    "containerVersionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContainerVersion"
}
```
## Operation: accounts.permissions.list
List all users that have access to the account along with Account and Container Permissions granted to each of them.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID. @required tagmanager.accounts.permissions.list"
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
  "$ref": "#/definitions/ListAccountUsersResponse"
}
```
## Operation: accounts.permissions.create
Creates a user's Account & Container Permissions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "body": {
      "$ref": "#/definitions/UserAccess"
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
  "$ref": "#/definitions/UserAccess"
}
```
## Operation: accounts.permissions.delete
Removes a user from the account, revoking access to it and all of its containers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "permissionId": {
      "type": "string",
      "description": "The GTM User ID."
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
    "permissionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: accounts.permissions.get
Gets a user's Account & Container Permissions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "permissionId": {
      "type": "string",
      "description": "The GTM User ID."
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
    "permissionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserAccess"
}
```
## Operation: accounts.permissions.update
Updates a user's Account & Container Permissions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM Account ID."
    },
    "permissionId": {
      "type": "string",
      "description": "The GTM User ID."
    },
    "body": {
      "$ref": "#/definitions/UserAccess"
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
    "permissionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserAccess"
}
```
