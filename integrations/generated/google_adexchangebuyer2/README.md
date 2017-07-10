# @datafire/google_adexchangebuyer2
Accesses the latest features for managing Ad Exchange accounts, Real-Time Bidding configurations and auction metrics, and Marketplace programmatic deals.

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
## Operation: accounts.clients.list
Lists all the clients for the current sponsor buyer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Unique numerical account ID of the sponsor buyer to list the clients for."
    },
    "pageToken": {
      "type": "string",
      "description": "A token identifying a page of results the server should return.\nTypically, this is the value of\nListClientsResponse.nextPageToken\nreturned from the previous call to the\naccounts.clients.list method."
    },
    "pageSize": {
      "type": "integer",
      "description": "Requested page size. The server may return fewer clients than requested.\nIf unspecified, the server will pick an appropriate default."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
  "$ref": "#/definitions/ListClientsResponse"
}
```
## Operation: accounts.clients.create
Creates a new client buyer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Unique numerical account ID for the buyer of which the client buyer\nis a customer; the sponsor buyer to create a client for. (required)"
    },
    "body": {
      "$ref": "#/definitions/Client"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
  "$ref": "#/definitions/Client"
}
```
## Operation: accounts.clients.get
Gets a client buyer with a given client account ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Numerical account ID of the client's sponsor buyer. (required)"
    },
    "clientAccountId": {
      "type": "string",
      "description": "Numerical account ID of the client buyer to retrieve. (required)"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "clientAccountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Client"
}
```
## Operation: accounts.clients.update
Updates an existing client buyer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Unique numerical account ID for the buyer of which the client buyer\nis a customer; the sponsor buyer to update a client for. (required)"
    },
    "clientAccountId": {
      "type": "string",
      "description": "Unique numerical account ID of the client to update. (required)"
    },
    "body": {
      "$ref": "#/definitions/Client"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "clientAccountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Client"
}
```
## Operation: accounts.clients.invitations.list
Lists all the client users invitations for a client
with a given account ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Numerical account ID of the client's sponsor buyer. (required)"
    },
    "clientAccountId": {
      "type": "string",
      "description": "Numerical account ID of the client buyer to list invitations for.\n(required)\nYou must either specify a string representation of a\nnumerical account identifier or the `-` character\nto list all the invitations for all the clients\nof a given sponsor buyer."
    },
    "pageToken": {
      "type": "string",
      "description": "A token identifying a page of results the server should return.\nTypically, this is the value of\nListClientUserInvitationsResponse.nextPageToken\nreturned from the previous call to the\nclients.invitations.list\nmethod."
    },
    "pageSize": {
      "type": "integer",
      "description": "Requested page size. Server may return fewer clients than requested.\nIf unspecified, server will pick an appropriate default."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "clientAccountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListClientUserInvitationsResponse"
}
```
## Operation: accounts.clients.invitations.create
Creates and sends out an email invitation to access
an Ad Exchange client buyer account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Numerical account ID of the client's sponsor buyer. (required)"
    },
    "clientAccountId": {
      "type": "string",
      "description": "Numerical account ID of the client buyer that the user\nshould be associated with. (required)"
    },
    "body": {
      "$ref": "#/definitions/ClientUserInvitation"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "clientAccountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClientUserInvitation"
}
```
## Operation: accounts.clients.invitations.get
Retrieves an existing client user invitation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Numerical account ID of the client's sponsor buyer. (required)"
    },
    "clientAccountId": {
      "type": "string",
      "description": "Numerical account ID of the client buyer that the user invitation\nto be retrieved is associated with. (required)"
    },
    "invitationId": {
      "type": "string",
      "description": "Numerical identifier of the user invitation to retrieve. (required)"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "clientAccountId",
    "invitationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClientUserInvitation"
}
```
## Operation: accounts.clients.users.list
Lists all the known client users for a specified
sponsor buyer account ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Numerical account ID of the sponsor buyer of the client to list users for.\n(required)"
    },
    "clientAccountId": {
      "type": "string",
      "description": "The account ID of the client buyer to list users for. (required)\nYou must specify either a string representation of a\nnumerical account identifier or the `-` character\nto list all the client users for all the clients\nof a given sponsor buyer."
    },
    "pageToken": {
      "type": "string",
      "description": "A token identifying a page of results the server should return.\nTypically, this is the value of\nListClientUsersResponse.nextPageToken\nreturned from the previous call to the\naccounts.clients.users.list method."
    },
    "pageSize": {
      "type": "integer",
      "description": "Requested page size. The server may return fewer clients than requested.\nIf unspecified, the server will pick an appropriate default."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "clientAccountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListClientUsersResponse"
}
```
## Operation: accounts.clients.users.get
Retrieves an existing client user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Numerical account ID of the client's sponsor buyer. (required)"
    },
    "clientAccountId": {
      "type": "string",
      "description": "Numerical account ID of the client buyer\nthat the user to be retrieved is associated with. (required)"
    },
    "userId": {
      "type": "string",
      "description": "Numerical identifier of the user to retrieve. (required)"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "clientAccountId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClientUser"
}
```
## Operation: accounts.clients.users.update
Updates an existing client user.
Only the user status can be changed on update.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "Numerical account ID of the client's sponsor buyer. (required)"
    },
    "clientAccountId": {
      "type": "string",
      "description": "Numerical account ID of the client buyer that the user to be retrieved\nis associated with. (required)"
    },
    "userId": {
      "type": "string",
      "description": "Numerical identifier of the user to retrieve. (required)"
    },
    "body": {
      "$ref": "#/definitions/ClientUser"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "clientAccountId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClientUser"
}
```
## Operation: accounts.creatives.list
Lists creatives.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account to list the creatives from.\nSpecify \"-\" to list all creatives the current user has access to."
    },
    "pageToken": {
      "type": "string",
      "description": "A token identifying a page of results the server should return.\nTypically, this is the value of\nListCreativesResponse.next_page_token\nreturned from the previous call to 'ListCreatives' method."
    },
    "pageSize": {
      "type": "integer",
      "description": "Requested page size. The server may return fewer creatives than requested\n(due to timeout constraint) even if more are available via another call.\nIf unspecified, server will pick an appropriate default.\nAcceptable values are 1 to 1000, inclusive."
    },
    "query": {
      "type": "string",
      "description": "An optional query string to filter creatives. If no filter is specified,\nall active creatives will be returned.\nSupported queries are:\n<ul>\n<li>accountId=<i>account_id_string</i>\n<li>creativeId=<i>creative_id_string</i>\n<li>dealsStatus: {approved, conditionally_approved, disapproved,\n                   not_checked}\n<li>openAuctionStatus: {approved, conditionally_approved, disapproved,\n                          not_checked}\n<li>attribute: {a numeric attribute from the list of attributes}\n<li>disapprovalReason: {a reason from DisapprovalReason\n</ul>\nExample: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
  "$ref": "#/definitions/ListCreativesResponse"
}
```
## Operation: accounts.creatives.create
Creates a creative.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account that this creative belongs to.\nCan be used to filter the response of the\ncreatives.list\nmethod."
    },
    "duplicateIdMode": {
      "type": "string",
      "description": "Indicates if multiple creatives can share an ID or not. Default is\nNO_DUPLICATES (one ID per creative).",
      "enum": [
        "NO_DUPLICATES",
        "FORCE_ENABLE_DUPLICATE_IDS"
      ]
    },
    "body": {
      "$ref": "#/definitions/Creative"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
  "$ref": "#/definitions/Creative"
}
```
## Operation: accounts.creatives.get
Gets a creative.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account the creative belongs to."
    },
    "creativeId": {
      "type": "string",
      "description": "The ID of the creative to retrieve."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "creativeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Creative"
}
```
## Operation: accounts.creatives.update
Updates a creative.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account that this creative belongs to.\nCan be used to filter the response of the\ncreatives.list\nmethod."
    },
    "creativeId": {
      "type": "string",
      "description": "The buyer-defined creative ID of this creative.\nCan be used to filter the response of the\ncreatives.list\nmethod."
    },
    "body": {
      "$ref": "#/definitions/Creative"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "creativeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Creative"
}
```
## Operation: accounts.creatives.dealAssociations.list
List all creative-deal associations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account to list the associations from.\nSpecify \"-\" to list all creatives the current user has access to."
    },
    "creativeId": {
      "type": "string",
      "description": "The creative ID to list the associations from.\nSpecify \"-\" to list all creatives under the above account."
    },
    "pageToken": {
      "type": "string",
      "description": "A token identifying a page of results the server should return.\nTypically, this is the value of\nListDealAssociationsResponse.next_page_token\nreturned from the previous call to 'ListDealAssociations' method."
    },
    "pageSize": {
      "type": "integer",
      "description": "Requested page size. Server may return fewer associations than requested.\nIf unspecified, server will pick an appropriate default."
    },
    "query": {
      "type": "string",
      "description": "An optional query string to filter deal associations. If no filter is\nspecified, all associations will be returned.\nSupported queries are:\n<ul>\n<li>accountId=<i>account_id_string</i>\n<li>creativeId=<i>creative_id_string</i>\n<li>dealsId=<i>deals_id_string</i>\n<li>dealsStatus:{approved, conditionally_approved, disapproved,\n                  not_checked}\n<li>openAuctionStatus:{approved, conditionally_approved, disapproved,\n                         not_checked}\n</ul>\nExample: 'dealsId=12345 AND dealsStatus:disapproved'"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "creativeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListDealAssociationsResponse"
}
```
## Operation: accounts.creatives.dealAssociations.add
Associate an existing deal with a creative.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account the creative belongs to."
    },
    "creativeId": {
      "type": "string",
      "description": "The ID of the creative associated with the deal."
    },
    "body": {
      "$ref": "#/definitions/AddDealAssociationRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "creativeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: accounts.creatives.dealAssociations.remove
Remove the association between a deal and a creative.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account the creative belongs to."
    },
    "creativeId": {
      "type": "string",
      "description": "The ID of the creative associated with the deal."
    },
    "body": {
      "$ref": "#/definitions/RemoveDealAssociationRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "creativeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: accounts.creatives.stopWatching
Stops watching a creative. Will stop push notifications being sent to the
topics when the creative changes status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account of the creative to stop notifications for."
    },
    "creativeId": {
      "type": "string",
      "description": "The creative ID of the creative to stop notifications for.\nSpecify \"-\" to specify stopping account level notifications."
    },
    "body": {
      "$ref": "#/definitions/StopWatchingCreativeRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "creativeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: accounts.creatives.watch
Watches a creative. Will result in push notifications being sent to the
topic when the creative changes status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The account of the creative to watch."
    },
    "creativeId": {
      "type": "string",
      "description": "The creative ID to watch for status changes.\nSpecify \"-\" to watch all creatives under the above account.\nIf both creative-level and account-level notifications are\nsent, only a single notification will be sent to the\ncreative-level notification topic."
    },
    "body": {
      "$ref": "#/definitions/WatchCreativeRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
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
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    }
  },
  "additionalProperties": false,
  "required": [
    "accountId",
    "creativeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
