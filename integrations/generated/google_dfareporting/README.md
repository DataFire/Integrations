# @datafire/google_dfareporting
Manages your DoubleClick Campaign Manager ad campaigns and reports.

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
## Operation: files.get
Retrieves a report file by its report ID and file ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reportId": {
      "type": "string",
      "description": "The ID of the report."
    },
    "fileId": {
      "type": "string",
      "description": "The ID of the report file."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
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
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/File"
}
```
## Operation: userProfiles.list
Retrieves list of user profiles for a user.

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
  "$ref": "#/definitions/UserProfileList"
}
```
## Operation: userProfiles.get
Gets one user profile by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The user profile ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserProfile"
}
```
## Operation: accountActiveAdSummaries.get
Gets the account's active ad summary by account ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "summaryAccountId": {
      "type": "string",
      "description": "Account ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "summaryAccountId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountActiveAdSummary"
}
```
## Operation: accountPermissionGroups.list
Retrieves the list of account permission groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountPermissionGroupsListResponse"
}
```
## Operation: accountPermissionGroups.get
Gets one account permission group by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Account permission group ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountPermissionGroup"
}
```
## Operation: accountPermissions.list
Retrieves the list of account permissions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountPermissionsListResponse"
}
```
## Operation: accountPermissions.get
Gets one account permission by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Account permission ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountPermission"
}
```
## Operation: accountUserProfiles.list
Retrieves a list of account user profiles, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "active": {
      "type": "boolean",
      "description": "Select only active user profiles."
    },
    "ids": {
      "type": "array",
      "description": "Select only user profiles with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, \"user profile*2015\" will return objects with names like \"user profile June 2015\", \"user profile April 2015\", or simply \"user profile 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"user profile\" will match objects with name \"my user profile\", \"user profile 2015\", or simply \"user profile\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "subaccountId": {
      "type": "string",
      "description": "Select only user profiles with the specified subaccount ID."
    },
    "userRoleId": {
      "type": "string",
      "description": "Select only user profiles with the specified user role ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountUserProfilesListResponse"
}
```
## Operation: accountUserProfiles.patch
Updates an existing account user profile. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "User profile ID."
    },
    "body": {
      "$ref": "#/definitions/AccountUserProfile"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountUserProfile"
}
```
## Operation: accountUserProfiles.insert
Inserts a new account user profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/AccountUserProfile"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountUserProfile"
}
```
## Operation: accountUserProfiles.update
Updates an existing account user profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/AccountUserProfile"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountUserProfile"
}
```
## Operation: accountUserProfiles.get
Gets one account user profile by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "User profile ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountUserProfile"
}
```
## Operation: accounts.list
Retrieves the list of accounts, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "active": {
      "type": "boolean",
      "description": "Select only active accounts. Don't set this field to select both active and non-active accounts."
    },
    "ids": {
      "type": "array",
      "description": "Select only accounts with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"account*2015\" will return objects with names like \"account June 2015\", \"account April 2015\", or simply \"account 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"account\" will match objects with name \"my account\", \"account 2015\", or simply \"account\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountsListResponse"
}
```
## Operation: accounts.patch
Updates an existing account. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Account ID."
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
    "profileId",
    "id"
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
Updates an existing account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Account"
}
```
## Operation: accounts.get
Gets one account by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Account ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Account"
}
```
## Operation: ads.list
Retrieves a list of ads, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "active": {
      "type": "boolean",
      "description": "Select only active ads."
    },
    "advertiserId": {
      "type": "string",
      "description": "Select only ads with this advertiser ID."
    },
    "archived": {
      "type": "boolean",
      "description": "Select only archived ads."
    },
    "audienceSegmentIds": {
      "type": "array",
      "description": "Select only ads with these audience segment IDs."
    },
    "campaignIds": {
      "type": "array",
      "description": "Select only ads with these campaign IDs."
    },
    "compatibility": {
      "type": "string",
      "description": "Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.",
      "enum": [
        "APP",
        "APP_INTERSTITIAL",
        "DISPLAY",
        "DISPLAY_INTERSTITIAL",
        "IN_STREAM_VIDEO"
      ]
    },
    "creativeIds": {
      "type": "array",
      "description": "Select only ads with these creative IDs assigned."
    },
    "creativeOptimizationConfigurationIds": {
      "type": "array",
      "description": "Select only ads with these creative optimization configuration IDs."
    },
    "dynamicClickTracker": {
      "type": "boolean",
      "description": "Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both."
    },
    "ids": {
      "type": "array",
      "description": "Select only ads with these IDs."
    },
    "landingPageIds": {
      "type": "array",
      "description": "Select only ads with these landing page IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "overriddenEventTagId": {
      "type": "string",
      "description": "Select only ads with this event tag override ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "placementIds": {
      "type": "array",
      "description": "Select only ads with these placement IDs assigned."
    },
    "remarketingListIds": {
      "type": "array",
      "description": "Select only ads whose list targeting expression use these remarketing list IDs."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"ad*2015\" will return objects with names like \"ad June 2015\", \"ad April 2015\", or simply \"ad 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"ad\" will match objects with name \"my ad\", \"ad 2015\", or simply \"ad\"."
    },
    "sizeIds": {
      "type": "array",
      "description": "Select only ads with these size IDs."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "sslCompliant": {
      "type": "boolean",
      "description": "Select only ads that are SSL-compliant."
    },
    "sslRequired": {
      "type": "boolean",
      "description": "Select only ads that require SSL."
    },
    "type": {
      "type": "array",
      "description": "Select only ads with these types."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdsListResponse"
}
```
## Operation: ads.patch
Updates an existing ad. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Ad ID."
    },
    "body": {
      "$ref": "#/definitions/Ad"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Ad"
}
```
## Operation: ads.insert
Inserts a new ad.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Ad"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Ad"
}
```
## Operation: ads.update
Updates an existing ad.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Ad"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Ad"
}
```
## Operation: ads.get
Gets one ad by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Ad ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Ad"
}
```
## Operation: advertiserGroups.list
Retrieves a list of advertiser groups, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "ids": {
      "type": "array",
      "description": "Select only advertiser groups with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"advertiser*2015\" will return objects with names like \"advertiser group June 2015\", \"advertiser group April 2015\", or simply \"advertiser group 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"advertisergroup\" will match objects with name \"my advertisergroup\", \"advertisergroup 2015\", or simply \"advertisergroup\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdvertiserGroupsListResponse"
}
```
## Operation: advertiserGroups.patch
Updates an existing advertiser group. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Advertiser group ID."
    },
    "body": {
      "$ref": "#/definitions/AdvertiserGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdvertiserGroup"
}
```
## Operation: advertiserGroups.insert
Inserts a new advertiser group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/AdvertiserGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdvertiserGroup"
}
```
## Operation: advertiserGroups.update
Updates an existing advertiser group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/AdvertiserGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdvertiserGroup"
}
```
## Operation: advertiserGroups.delete
Deletes an existing advertiser group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Advertiser group ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: advertiserGroups.get
Gets one advertiser group by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Advertiser group ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdvertiserGroup"
}
```
## Operation: advertisers.list
Retrieves a list of advertisers, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserGroupIds": {
      "type": "array",
      "description": "Select only advertisers with these advertiser group IDs."
    },
    "floodlightConfigurationIds": {
      "type": "array",
      "description": "Select only advertisers with these floodlight configuration IDs."
    },
    "ids": {
      "type": "array",
      "description": "Select only advertisers with these IDs."
    },
    "includeAdvertisersWithoutGroupsOnly": {
      "type": "boolean",
      "description": "Select only advertisers which do not belong to any advertiser group."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "onlyParent": {
      "type": "boolean",
      "description": "Select only advertisers which use another advertiser's floodlight configuration."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"advertiser*2015\" will return objects with names like \"advertiser June 2015\", \"advertiser April 2015\", or simply \"advertiser 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"advertiser\" will match objects with name \"my advertiser\", \"advertiser 2015\", or simply \"advertiser\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "status": {
      "type": "string",
      "description": "Select only advertisers with the specified status.",
      "enum": [
        "APPROVED",
        "ON_HOLD"
      ]
    },
    "subaccountId": {
      "type": "string",
      "description": "Select only advertisers with these subaccount IDs."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdvertisersListResponse"
}
```
## Operation: advertisers.patch
Updates an existing advertiser. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Advertiser ID."
    },
    "body": {
      "$ref": "#/definitions/Advertiser"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Advertiser"
}
```
## Operation: advertisers.insert
Inserts a new advertiser.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Advertiser"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Advertiser"
}
```
## Operation: advertisers.update
Updates an existing advertiser.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Advertiser"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Advertiser"
}
```
## Operation: advertisers.get
Gets one advertiser by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Advertiser ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Advertiser"
}
```
## Operation: browsers.list
Retrieves a list of browsers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BrowsersListResponse"
}
```
## Operation: campaigns.list
Retrieves a list of campaigns, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserGroupIds": {
      "type": "array",
      "description": "Select only campaigns whose advertisers belong to these advertiser groups."
    },
    "advertiserIds": {
      "type": "array",
      "description": "Select only campaigns that belong to these advertisers."
    },
    "archived": {
      "type": "boolean",
      "description": "Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns."
    },
    "atLeastOneOptimizationActivity": {
      "type": "boolean",
      "description": "Select only campaigns that have at least one optimization activity."
    },
    "excludedIds": {
      "type": "array",
      "description": "Exclude campaigns with these IDs."
    },
    "ids": {
      "type": "array",
      "description": "Select only campaigns with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "overriddenEventTagId": {
      "type": "string",
      "description": "Select only campaigns that have overridden this event tag ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, \"campaign*2015\" will return campaigns with names like \"campaign June 2015\", \"campaign April 2015\", or simply \"campaign 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"campaign\" will match campaigns with name \"my campaign\", \"campaign 2015\", or simply \"campaign\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "subaccountId": {
      "type": "string",
      "description": "Select only campaigns that belong to this subaccount."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignsListResponse"
}
```
## Operation: campaigns.patch
Updates an existing campaign. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Campaign ID."
    },
    "body": {
      "$ref": "#/definitions/Campaign"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Campaign"
}
```
## Operation: campaigns.insert
Inserts a new campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "defaultLandingPageName": {
      "type": "string",
      "description": "Default landing page name for this new campaign. Must be less than 256 characters long."
    },
    "defaultLandingPageUrl": {
      "type": "string",
      "description": "Default landing page URL for this new campaign."
    },
    "body": {
      "$ref": "#/definitions/Campaign"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "defaultLandingPageName",
    "defaultLandingPageUrl"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Campaign"
}
```
## Operation: campaigns.update
Updates an existing campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Campaign"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Campaign"
}
```
## Operation: campaignCreativeAssociations.list
Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "campaignId": {
      "type": "string",
      "description": "Campaign ID in this association."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId",
    "campaignId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignCreativeAssociationsListResponse"
}
```
## Operation: campaignCreativeAssociations.insert
Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "campaignId": {
      "type": "string",
      "description": "Campaign ID in this association."
    },
    "body": {
      "$ref": "#/definitions/CampaignCreativeAssociation"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "campaignId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CampaignCreativeAssociation"
}
```
## Operation: landingPages.list
Retrieves the list of landing pages for the specified campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "campaignId": {
      "type": "string",
      "description": "Landing page campaign ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "campaignId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LandingPagesListResponse"
}
```
## Operation: landingPages.patch
Updates an existing campaign landing page. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "campaignId": {
      "type": "string",
      "description": "Landing page campaign ID."
    },
    "id": {
      "type": "string",
      "description": "Landing page ID."
    },
    "body": {
      "$ref": "#/definitions/LandingPage"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "campaignId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LandingPage"
}
```
## Operation: landingPages.insert
Inserts a new landing page for the specified campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "campaignId": {
      "type": "string",
      "description": "Landing page campaign ID."
    },
    "body": {
      "$ref": "#/definitions/LandingPage"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "campaignId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LandingPage"
}
```
## Operation: landingPages.update
Updates an existing campaign landing page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "campaignId": {
      "type": "string",
      "description": "Landing page campaign ID."
    },
    "body": {
      "$ref": "#/definitions/LandingPage"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "campaignId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LandingPage"
}
```
## Operation: landingPages.delete
Deletes an existing campaign landing page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "campaignId": {
      "type": "string",
      "description": "Landing page campaign ID."
    },
    "id": {
      "type": "string",
      "description": "Landing page ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "campaignId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: landingPages.get
Gets one campaign landing page by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "campaignId": {
      "type": "string",
      "description": "Landing page campaign ID."
    },
    "id": {
      "type": "string",
      "description": "Landing page ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "campaignId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LandingPage"
}
```
## Operation: campaigns.get
Gets one campaign by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Campaign ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Campaign"
}
```
## Operation: changeLogs.list
Retrieves a list of change logs. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "action": {
      "type": "string",
      "description": "Select only change logs with the specified action.",
      "enum": [
        "ACTION_ADD",
        "ACTION_ASSIGN",
        "ACTION_ASSOCIATE",
        "ACTION_CREATE",
        "ACTION_DELETE",
        "ACTION_DISABLE",
        "ACTION_EMAIL_TAGS",
        "ACTION_ENABLE",
        "ACTION_LINK",
        "ACTION_MARK_AS_DEFAULT",
        "ACTION_PUSH",
        "ACTION_REMOVE",
        "ACTION_SEND",
        "ACTION_SHARE",
        "ACTION_UNASSIGN",
        "ACTION_UNLINK",
        "ACTION_UPDATE"
      ]
    },
    "ids": {
      "type": "array",
      "description": "Select only change logs with these IDs."
    },
    "maxChangeTime": {
      "type": "string",
      "description": "Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is \"2015-07-18T22:54:00-04:00\". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "minChangeTime": {
      "type": "string",
      "description": "Select only change logs whose change time is before the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is \"2015-07-18T22:54:00-04:00\". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset."
    },
    "objectIds": {
      "type": "array",
      "description": "Select only change logs with these object IDs."
    },
    "objectType": {
      "type": "string",
      "description": "Select only change logs with the specified object type.",
      "enum": [
        "OBJECT_ACCOUNT",
        "OBJECT_ACCOUNT_BILLING_FEATURE",
        "OBJECT_AD",
        "OBJECT_ADVERTISER",
        "OBJECT_ADVERTISER_GROUP",
        "OBJECT_BILLING_ACCOUNT_GROUP",
        "OBJECT_BILLING_FEATURE",
        "OBJECT_BILLING_MINIMUM_FEE",
        "OBJECT_BILLING_PROFILE",
        "OBJECT_CAMPAIGN",
        "OBJECT_CONTENT_CATEGORY",
        "OBJECT_CREATIVE",
        "OBJECT_CREATIVE_ASSET",
        "OBJECT_CREATIVE_BUNDLE",
        "OBJECT_CREATIVE_FIELD",
        "OBJECT_CREATIVE_GROUP",
        "OBJECT_DFA_SITE",
        "OBJECT_EVENT_TAG",
        "OBJECT_FLOODLIGHT_ACTIVITY_GROUP",
        "OBJECT_FLOODLIGHT_ACTVITY",
        "OBJECT_FLOODLIGHT_CONFIGURATION",
        "OBJECT_INSTREAM_CREATIVE",
        "OBJECT_LANDING_PAGE",
        "OBJECT_MEDIA_ORDER",
        "OBJECT_PLACEMENT",
        "OBJECT_PLACEMENT_STRATEGY",
        "OBJECT_PLAYSTORE_LINK",
        "OBJECT_PROVIDED_LIST_CLIENT",
        "OBJECT_RATE_CARD",
        "OBJECT_REMARKETING_LIST",
        "OBJECT_RICHMEDIA_CREATIVE",
        "OBJECT_SD_SITE",
        "OBJECT_SEARCH_LIFT_STUDY",
        "OBJECT_SIZE",
        "OBJECT_SUBACCOUNT",
        "OBJECT_TARGETING_TEMPLATE",
        "OBJECT_USER_PROFILE",
        "OBJECT_USER_PROFILE_FILTER",
        "OBJECT_USER_ROLE"
      ]
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Select only change logs whose object ID, user name, old or new values match the search string."
    },
    "userProfileIds": {
      "type": "array",
      "description": "Select only change logs with these user profile IDs."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ChangeLogsListResponse"
}
```
## Operation: changeLogs.get
Gets one change log by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Change log ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ChangeLog"
}
```
## Operation: cities.list
Retrieves a list of cities, possibly filtered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "countryDartIds": {
      "type": "array",
      "description": "Select only cities from these countries."
    },
    "dartIds": {
      "type": "array",
      "description": "Select only cities with these DART IDs."
    },
    "namePrefix": {
      "type": "string",
      "description": "Select only cities with names starting with this prefix."
    },
    "regionDartIds": {
      "type": "array",
      "description": "Select only cities from these regions."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CitiesListResponse"
}
```
## Operation: connectionTypes.list
Retrieves a list of connection types.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionTypesListResponse"
}
```
## Operation: connectionTypes.get
Gets one connection type by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Connection type ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionType"
}
```
## Operation: contentCategories.list
Retrieves a list of content categories, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "ids": {
      "type": "array",
      "description": "Select only content categories with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"contentcategory*2015\" will return objects with names like \"contentcategory June 2015\", \"contentcategory April 2015\", or simply \"contentcategory 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"contentcategory\" will match objects with name \"my contentcategory\", \"contentcategory 2015\", or simply \"contentcategory\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContentCategoriesListResponse"
}
```
## Operation: contentCategories.patch
Updates an existing content category. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Content category ID."
    },
    "body": {
      "$ref": "#/definitions/ContentCategory"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContentCategory"
}
```
## Operation: contentCategories.insert
Inserts a new content category.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/ContentCategory"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContentCategory"
}
```
## Operation: contentCategories.update
Updates an existing content category.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/ContentCategory"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContentCategory"
}
```
## Operation: contentCategories.delete
Deletes an existing content category.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Content category ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: contentCategories.get
Gets one content category by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Content category ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContentCategory"
}
```
## Operation: conversions.batchinsert
Inserts conversions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/ConversionsBatchInsertRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConversionsBatchInsertResponse"
}
```
## Operation: countries.list
Retrieves a list of countries.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CountriesListResponse"
}
```
## Operation: countries.get
Gets one country by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "dartId": {
      "type": "string",
      "description": "Country DART ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "dartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Country"
}
```
## Operation: creativeAssets.insert
Inserts a new creative asset.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserId": {
      "type": "string",
      "description": "Advertiser ID of this creative. This is a required field."
    },
    "body": {
      "$ref": "#/definitions/CreativeAssetMetadata"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "advertiserId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeAssetMetadata"
}
```
## Operation: creativeFields.list
Retrieves a list of creative fields, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserIds": {
      "type": "array",
      "description": "Select only creative fields that belong to these advertisers."
    },
    "ids": {
      "type": "array",
      "description": "Select only creative fields with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, \"creativefield*2015\" will return creative fields with names like \"creativefield June 2015\", \"creativefield April 2015\", or simply \"creativefield 2015\". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of \"creativefield\" will match creative fields with the name \"my creativefield\", \"creativefield 2015\", or simply \"creativefield\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeFieldsListResponse"
}
```
## Operation: creativeFields.patch
Updates an existing creative field. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Creative Field ID"
    },
    "body": {
      "$ref": "#/definitions/CreativeField"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeField"
}
```
## Operation: creativeFields.insert
Inserts a new creative field.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/CreativeField"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeField"
}
```
## Operation: creativeFields.update
Updates an existing creative field.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/CreativeField"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeField"
}
```
## Operation: creativeFieldValues.list
Retrieves a list of creative field values, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "creativeFieldId": {
      "type": "string",
      "description": "Creative field ID for this creative field value."
    },
    "ids": {
      "type": "array",
      "description": "Select only creative field values with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "VALUE"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId",
    "creativeFieldId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeFieldValuesListResponse"
}
```
## Operation: creativeFieldValues.patch
Updates an existing creative field value. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "creativeFieldId": {
      "type": "string",
      "description": "Creative field ID for this creative field value."
    },
    "id": {
      "type": "string",
      "description": "Creative Field Value ID"
    },
    "body": {
      "$ref": "#/definitions/CreativeFieldValue"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "creativeFieldId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeFieldValue"
}
```
## Operation: creativeFieldValues.insert
Inserts a new creative field value.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "creativeFieldId": {
      "type": "string",
      "description": "Creative field ID for this creative field value."
    },
    "body": {
      "$ref": "#/definitions/CreativeFieldValue"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "creativeFieldId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeFieldValue"
}
```
## Operation: creativeFieldValues.update
Updates an existing creative field value.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "creativeFieldId": {
      "type": "string",
      "description": "Creative field ID for this creative field value."
    },
    "body": {
      "$ref": "#/definitions/CreativeFieldValue"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "creativeFieldId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeFieldValue"
}
```
## Operation: creativeFieldValues.delete
Deletes an existing creative field value.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "creativeFieldId": {
      "type": "string",
      "description": "Creative field ID for this creative field value."
    },
    "id": {
      "type": "string",
      "description": "Creative Field Value ID"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "creativeFieldId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: creativeFieldValues.get
Gets one creative field value by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "creativeFieldId": {
      "type": "string",
      "description": "Creative field ID for this creative field value."
    },
    "id": {
      "type": "string",
      "description": "Creative Field Value ID"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "creativeFieldId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeFieldValue"
}
```
## Operation: creativeFields.delete
Deletes an existing creative field.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Creative Field ID"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: creativeFields.get
Gets one creative field by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Creative Field ID"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeField"
}
```
## Operation: creativeGroups.list
Retrieves a list of creative groups, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserIds": {
      "type": "array",
      "description": "Select only creative groups that belong to these advertisers."
    },
    "groupNumber": {
      "type": "integer",
      "description": "Select only creative groups that belong to this subgroup."
    },
    "ids": {
      "type": "array",
      "description": "Select only creative groups with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, \"creativegroup*2015\" will return creative groups with names like \"creativegroup June 2015\", \"creativegroup April 2015\", or simply \"creativegroup 2015\". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of \"creativegroup\" will match creative groups with the name \"my creativegroup\", \"creativegroup 2015\", or simply \"creativegroup\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeGroupsListResponse"
}
```
## Operation: creativeGroups.patch
Updates an existing creative group. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Creative group ID."
    },
    "body": {
      "$ref": "#/definitions/CreativeGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeGroup"
}
```
## Operation: creativeGroups.insert
Inserts a new creative group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/CreativeGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeGroup"
}
```
## Operation: creativeGroups.update
Updates an existing creative group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/CreativeGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeGroup"
}
```
## Operation: creativeGroups.get
Gets one creative group by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Creative group ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativeGroup"
}
```
## Operation: creatives.list
Retrieves a list of creatives, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "active": {
      "type": "boolean",
      "description": "Select only active creatives. Leave blank to select active and inactive creatives."
    },
    "advertiserId": {
      "type": "string",
      "description": "Select only creatives with this advertiser ID."
    },
    "archived": {
      "type": "boolean",
      "description": "Select only archived creatives. Leave blank to select archived and unarchived creatives."
    },
    "campaignId": {
      "type": "string",
      "description": "Select only creatives with this campaign ID."
    },
    "companionCreativeIds": {
      "type": "array",
      "description": "Select only in-stream video creatives with these companion IDs."
    },
    "creativeFieldIds": {
      "type": "array",
      "description": "Select only creatives with these creative field IDs."
    },
    "ids": {
      "type": "array",
      "description": "Select only creatives with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "renderingIds": {
      "type": "array",
      "description": "Select only creatives with these rendering IDs."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"creative*2015\" will return objects with names like \"creative June 2015\", \"creative April 2015\", or simply \"creative 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"creative\" will match objects with name \"my creative\", \"creative 2015\", or simply \"creative\"."
    },
    "sizeIds": {
      "type": "array",
      "description": "Select only creatives with these size IDs."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "studioCreativeId": {
      "type": "string",
      "description": "Select only creatives corresponding to this Studio creative ID."
    },
    "types": {
      "type": "array",
      "description": "Select only creatives with these creative types."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreativesListResponse"
}
```
## Operation: creatives.patch
Updates an existing creative. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Creative ID."
    },
    "body": {
      "$ref": "#/definitions/Creative"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Creative"
}
```
## Operation: creatives.insert
Inserts a new creative.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Creative"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Creative"
}
```
## Operation: creatives.update
Updates an existing creative.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Creative"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Creative"
}
```
## Operation: creatives.get
Gets one creative by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Creative ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Creative"
}
```
## Operation: dimensionValues.query
Retrieves list of report dimension values for a list of filters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA user profile ID."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return.",
      "maximum": 100,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "The value of the nextToken from the previous result page."
    },
    "body": {
      "$ref": "#/definitions/DimensionValueRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DimensionValueList"
}
```
## Operation: directorySiteContacts.list
Retrieves a list of directory site contacts, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "directorySiteIds": {
      "type": "array",
      "description": "Select only directory site contacts with these directory site IDs. This is a required field."
    },
    "ids": {
      "type": "array",
      "description": "Select only directory site contacts with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, \"directory site contact*2015\" will return objects with names like \"directory site contact June 2015\", \"directory site contact April 2015\", or simply \"directory site contact 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"directory site contact\" will match objects with name \"my directory site contact\", \"directory site contact 2015\", or simply \"directory site contact\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DirectorySiteContactsListResponse"
}
```
## Operation: directorySiteContacts.get
Gets one directory site contact by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Directory site contact ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DirectorySiteContact"
}
```
## Operation: directorySites.list
Retrieves a list of directory sites, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "acceptsInStreamVideoPlacements": {
      "type": "boolean",
      "description": "This search filter is no longer supported and will have no effect on the results returned."
    },
    "acceptsInterstitialPlacements": {
      "type": "boolean",
      "description": "This search filter is no longer supported and will have no effect on the results returned."
    },
    "acceptsPublisherPaidPlacements": {
      "type": "boolean",
      "description": "Select only directory sites that accept publisher paid placements. This field can be left blank."
    },
    "active": {
      "type": "boolean",
      "description": "Select only active directory sites. Leave blank to retrieve both active and inactive directory sites."
    },
    "countryId": {
      "type": "string",
      "description": "Select only directory sites with this country ID."
    },
    "dfp_network_code": {
      "type": "string",
      "description": "Select only directory sites with this DFP network code."
    },
    "ids": {
      "type": "array",
      "description": "Select only directory sites with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "parentId": {
      "type": "string",
      "description": "Select only directory sites with this parent ID."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, \"directory site*2015\" will return objects with names like \"directory site June 2015\", \"directory site April 2015\", or simply \"directory site 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"directory site\" will match objects with name \"my directory site\", \"directory site 2015\" or simply, \"directory site\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DirectorySitesListResponse"
}
```
## Operation: directorySites.insert
Inserts a new directory site.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/DirectorySite"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DirectorySite"
}
```
## Operation: directorySites.get
Gets one directory site by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Directory site ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DirectorySite"
}
```
## Operation: dynamicTargetingKeys.list
Retrieves a list of dynamic targeting keys.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserId": {
      "type": "string",
      "description": "Select only dynamic targeting keys whose object has this advertiser ID."
    },
    "names": {
      "type": "array",
      "description": "Select only dynamic targeting keys exactly matching these names."
    },
    "objectId": {
      "type": "string",
      "description": "Select only dynamic targeting keys with this object ID."
    },
    "objectType": {
      "type": "string",
      "description": "Select only dynamic targeting keys with this object type.",
      "enum": [
        "OBJECT_AD",
        "OBJECT_ADVERTISER",
        "OBJECT_CREATIVE",
        "OBJECT_PLACEMENT"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DynamicTargetingKeysListResponse"
}
```
## Operation: dynamicTargetingKeys.insert
Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/DynamicTargetingKey"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DynamicTargetingKey"
}
```
## Operation: dynamicTargetingKeys.delete
Deletes an existing dynamic targeting key.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "objectId": {
      "type": "string",
      "description": "ID of the object of this dynamic targeting key. This is a required field."
    },
    "name": {
      "type": "string",
      "description": "Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase."
    },
    "objectType": {
      "type": "string",
      "description": "Type of the object of this dynamic targeting key. This is a required field.",
      "enum": [
        "OBJECT_AD",
        "OBJECT_ADVERTISER",
        "OBJECT_CREATIVE",
        "OBJECT_PLACEMENT"
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
    "profileId",
    "objectId",
    "name",
    "objectType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: eventTags.list
Retrieves a list of event tags, possibly filtered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "adId": {
      "type": "string",
      "description": "Select only event tags that belong to this ad."
    },
    "advertiserId": {
      "type": "string",
      "description": "Select only event tags that belong to this advertiser."
    },
    "campaignId": {
      "type": "string",
      "description": "Select only event tags that belong to this campaign."
    },
    "definitionsOnly": {
      "type": "boolean",
      "description": "Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags."
    },
    "enabled": {
      "type": "boolean",
      "description": "Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well."
    },
    "eventTagTypes": {
      "type": "array",
      "description": "Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking."
    },
    "ids": {
      "type": "array",
      "description": "Select only event tags with these IDs."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"eventtag*2015\" will return objects with names like \"eventtag June 2015\", \"eventtag April 2015\", or simply \"eventtag 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"eventtag\" will match objects with name \"my eventtag\", \"eventtag 2015\", or simply \"eventtag\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventTagsListResponse"
}
```
## Operation: eventTags.patch
Updates an existing event tag. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Event tag ID."
    },
    "body": {
      "$ref": "#/definitions/EventTag"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventTag"
}
```
## Operation: eventTags.insert
Inserts a new event tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/EventTag"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventTag"
}
```
## Operation: eventTags.update
Updates an existing event tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/EventTag"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventTag"
}
```
## Operation: eventTags.delete
Deletes an existing event tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Event tag ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: eventTags.get
Gets one event tag by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Event tag ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventTag"
}
```
## Operation: files.list
Lists files for a user profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA profile ID."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return.",
      "maximum": 10,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "The value of the nextToken from the previous result page."
    },
    "scope": {
      "type": "string",
      "description": "The scope that defines which results are returned, default is 'MINE'.",
      "enum": [
        "ALL",
        "MINE",
        "SHARED_WITH_ME"
      ]
    },
    "sortField": {
      "type": "string",
      "description": "The field by which to sort the list.",
      "enum": [
        "ID",
        "LAST_MODIFIED_TIME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is 'DESCENDING'.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileList"
}
```
## Operation: floodlightActivities.list
Retrieves a list of floodlight activities, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserId": {
      "type": "string",
      "description": "Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result."
    },
    "floodlightActivityGroupIds": {
      "type": "array",
      "description": "Select only floodlight activities with the specified floodlight activity group IDs."
    },
    "floodlightActivityGroupName": {
      "type": "string",
      "description": "Select only floodlight activities with the specified floodlight activity group name."
    },
    "floodlightActivityGroupTagString": {
      "type": "string",
      "description": "Select only floodlight activities with the specified floodlight activity group tag string."
    },
    "floodlightActivityGroupType": {
      "type": "string",
      "description": "Select only floodlight activities with the specified floodlight activity group type.",
      "enum": [
        "COUNTER",
        "SALE"
      ]
    },
    "floodlightConfigurationId": {
      "type": "string",
      "description": "Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result."
    },
    "ids": {
      "type": "array",
      "description": "Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"floodlightactivity*2015\" will return objects with names like \"floodlightactivity June 2015\", \"floodlightactivity April 2015\", or simply \"floodlightactivity 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"floodlightactivity\" will match objects with name \"my floodlightactivity activity\", \"floodlightactivity 2015\", or simply \"floodlightactivity\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "tagString": {
      "type": "string",
      "description": "Select only floodlight activities with the specified tag string."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivitiesListResponse"
}
```
## Operation: floodlightActivities.patch
Updates an existing floodlight activity. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Floodlight activity ID."
    },
    "body": {
      "$ref": "#/definitions/FloodlightActivity"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivity"
}
```
## Operation: floodlightActivities.insert
Inserts a new floodlight activity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/FloodlightActivity"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivity"
}
```
## Operation: floodlightActivities.update
Updates an existing floodlight activity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/FloodlightActivity"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivity"
}
```
## Operation: floodlightActivities.generatetag
Generates a tag for a floodlight activity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "floodlightActivityId": {
      "type": "string",
      "description": "Floodlight activity ID for which we want to generate a tag."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivitiesGenerateTagResponse"
}
```
## Operation: floodlightActivities.delete
Deletes an existing floodlight activity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Floodlight activity ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: floodlightActivities.get
Gets one floodlight activity by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Floodlight activity ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivity"
}
```
## Operation: floodlightActivityGroups.list
Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserId": {
      "type": "string",
      "description": "Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result."
    },
    "floodlightConfigurationId": {
      "type": "string",
      "description": "Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result."
    },
    "ids": {
      "type": "array",
      "description": "Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"floodlightactivitygroup*2015\" will return objects with names like \"floodlightactivitygroup June 2015\", \"floodlightactivitygroup April 2015\", or simply \"floodlightactivitygroup 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"floodlightactivitygroup\" will match objects with name \"my floodlightactivitygroup activity\", \"floodlightactivitygroup 2015\", or simply \"floodlightactivitygroup\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "type": {
      "type": "string",
      "description": "Select only floodlight activity groups with the specified floodlight activity group type.",
      "enum": [
        "COUNTER",
        "SALE"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivityGroupsListResponse"
}
```
## Operation: floodlightActivityGroups.patch
Updates an existing floodlight activity group. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Floodlight activity Group ID."
    },
    "body": {
      "$ref": "#/definitions/FloodlightActivityGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivityGroup"
}
```
## Operation: floodlightActivityGroups.insert
Inserts a new floodlight activity group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/FloodlightActivityGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivityGroup"
}
```
## Operation: floodlightActivityGroups.update
Updates an existing floodlight activity group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/FloodlightActivityGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivityGroup"
}
```
## Operation: floodlightActivityGroups.get
Gets one floodlight activity group by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Floodlight activity Group ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightActivityGroup"
}
```
## Operation: floodlightConfigurations.list
Retrieves a list of floodlight configurations, possibly filtered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "ids": {
      "type": "array",
      "description": "Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightConfigurationsListResponse"
}
```
## Operation: floodlightConfigurations.patch
Updates an existing floodlight configuration. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Floodlight configuration ID."
    },
    "body": {
      "$ref": "#/definitions/FloodlightConfiguration"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightConfiguration"
}
```
## Operation: floodlightConfigurations.update
Updates an existing floodlight configuration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/FloodlightConfiguration"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightConfiguration"
}
```
## Operation: floodlightConfigurations.get
Gets one floodlight configuration by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Floodlight configuration ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FloodlightConfiguration"
}
```
## Operation: languages.list
Retrieves a list of languages.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LanguagesListResponse"
}
```
## Operation: metros.list
Retrieves a list of metros.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetrosListResponse"
}
```
## Operation: mobileCarriers.list
Retrieves a list of mobile carriers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MobileCarriersListResponse"
}
```
## Operation: mobileCarriers.get
Gets one mobile carrier by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Mobile carrier ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MobileCarrier"
}
```
## Operation: operatingSystemVersions.list
Retrieves a list of operating system versions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperatingSystemVersionsListResponse"
}
```
## Operation: operatingSystemVersions.get
Gets one operating system version by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Operating system version ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperatingSystemVersion"
}
```
## Operation: operatingSystems.list
Retrieves a list of operating systems.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperatingSystemsListResponse"
}
```
## Operation: operatingSystems.get
Gets one operating system by DART ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "dartId": {
      "type": "string",
      "description": "Operating system DART ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "dartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperatingSystem"
}
```
## Operation: placementGroups.list
Retrieves a list of placement groups, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserIds": {
      "type": "array",
      "description": "Select only placement groups that belong to these advertisers."
    },
    "archived": {
      "type": "boolean",
      "description": "Select only archived placements. Don't set this field to select both archived and non-archived placements."
    },
    "campaignIds": {
      "type": "array",
      "description": "Select only placement groups that belong to these campaigns."
    },
    "contentCategoryIds": {
      "type": "array",
      "description": "Select only placement groups that are associated with these content categories."
    },
    "directorySiteIds": {
      "type": "array",
      "description": "Select only placement groups that are associated with these directory sites."
    },
    "ids": {
      "type": "array",
      "description": "Select only placement groups with these IDs."
    },
    "maxEndDate": {
      "type": "string",
      "description": "Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as \"yyyy-MM-dd\"."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "maxStartDate": {
      "type": "string",
      "description": "Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as \"yyyy-MM-dd\"."
    },
    "minEndDate": {
      "type": "string",
      "description": "Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as \"yyyy-MM-dd\"."
    },
    "minStartDate": {
      "type": "string",
      "description": "Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as \"yyyy-MM-dd\"."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "placementGroupType": {
      "type": "string",
      "description": "Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.",
      "enum": [
        "PLACEMENT_PACKAGE",
        "PLACEMENT_ROADBLOCK"
      ]
    },
    "placementStrategyIds": {
      "type": "array",
      "description": "Select only placement groups that are associated with these placement strategies."
    },
    "pricingTypes": {
      "type": "array",
      "description": "Select only placement groups with these pricing types."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, \"placement*2015\" will return placement groups with names like \"placement group June 2015\", \"placement group May 2015\", or simply \"placements 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"placementgroup\" will match placement groups with name \"my placementgroup\", \"placementgroup 2015\", or simply \"placementgroup\"."
    },
    "siteIds": {
      "type": "array",
      "description": "Select only placement groups that are associated with these sites."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementGroupsListResponse"
}
```
## Operation: placementGroups.patch
Updates an existing placement group. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Placement group ID."
    },
    "body": {
      "$ref": "#/definitions/PlacementGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementGroup"
}
```
## Operation: placementGroups.insert
Inserts a new placement group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/PlacementGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementGroup"
}
```
## Operation: placementGroups.update
Updates an existing placement group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/PlacementGroup"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementGroup"
}
```
## Operation: placementGroups.get
Gets one placement group by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Placement group ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementGroup"
}
```
## Operation: placementStrategies.list
Retrieves a list of placement strategies, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "ids": {
      "type": "array",
      "description": "Select only placement strategies with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"placementstrategy*2015\" will return objects with names like \"placementstrategy June 2015\", \"placementstrategy April 2015\", or simply \"placementstrategy 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"placementstrategy\" will match objects with name \"my placementstrategy\", \"placementstrategy 2015\", or simply \"placementstrategy\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementStrategiesListResponse"
}
```
## Operation: placementStrategies.patch
Updates an existing placement strategy. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Placement strategy ID."
    },
    "body": {
      "$ref": "#/definitions/PlacementStrategy"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementStrategy"
}
```
## Operation: placementStrategies.insert
Inserts a new placement strategy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/PlacementStrategy"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementStrategy"
}
```
## Operation: placementStrategies.update
Updates an existing placement strategy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/PlacementStrategy"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementStrategy"
}
```
## Operation: placementStrategies.delete
Deletes an existing placement strategy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Placement strategy ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: placementStrategies.get
Gets one placement strategy by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Placement strategy ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementStrategy"
}
```
## Operation: placements.list
Retrieves a list of placements, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserIds": {
      "type": "array",
      "description": "Select only placements that belong to these advertisers."
    },
    "archived": {
      "type": "boolean",
      "description": "Select only archived placements. Don't set this field to select both archived and non-archived placements."
    },
    "campaignIds": {
      "type": "array",
      "description": "Select only placements that belong to these campaigns."
    },
    "compatibilities": {
      "type": "array",
      "description": "Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard."
    },
    "contentCategoryIds": {
      "type": "array",
      "description": "Select only placements that are associated with these content categories."
    },
    "directorySiteIds": {
      "type": "array",
      "description": "Select only placements that are associated with these directory sites."
    },
    "groupIds": {
      "type": "array",
      "description": "Select only placements that belong to these placement groups."
    },
    "ids": {
      "type": "array",
      "description": "Select only placements with these IDs."
    },
    "maxEndDate": {
      "type": "string",
      "description": "Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as \"yyyy-MM-dd\"."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "maxStartDate": {
      "type": "string",
      "description": "Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as \"yyyy-MM-dd\"."
    },
    "minEndDate": {
      "type": "string",
      "description": "Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as \"yyyy-MM-dd\"."
    },
    "minStartDate": {
      "type": "string",
      "description": "Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as \"yyyy-MM-dd\"."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "paymentSource": {
      "type": "string",
      "description": "Select only placements with this payment source.",
      "enum": [
        "PLACEMENT_AGENCY_PAID",
        "PLACEMENT_PUBLISHER_PAID"
      ]
    },
    "placementStrategyIds": {
      "type": "array",
      "description": "Select only placements that are associated with these placement strategies."
    },
    "pricingTypes": {
      "type": "array",
      "description": "Select only placements with these pricing types."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, \"placement*2015\" will return placements with names like \"placement June 2015\", \"placement May 2015\", or simply \"placements 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"placement\" will match placements with name \"my placement\", \"placement 2015\", or simply \"placement\"."
    },
    "siteIds": {
      "type": "array",
      "description": "Select only placements that are associated with these sites."
    },
    "sizeIds": {
      "type": "array",
      "description": "Select only placements that are associated with these sizes."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementsListResponse"
}
```
## Operation: placements.patch
Updates an existing placement. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Placement ID."
    },
    "body": {
      "$ref": "#/definitions/Placement"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Placement"
}
```
## Operation: placements.insert
Inserts a new placement.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Placement"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Placement"
}
```
## Operation: placements.update
Updates an existing placement.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Placement"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Placement"
}
```
## Operation: placements.generatetags
Generates tags for a placement.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "campaignId": {
      "type": "string",
      "description": "Generate placements belonging to this campaign. This is a required field."
    },
    "placementIds": {
      "type": "array",
      "description": "Generate tags for these placements."
    },
    "tagFormats": {
      "type": "array",
      "description": "Tag formats to generate for these placements."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlacementsGenerateTagsResponse"
}
```
## Operation: placements.get
Gets one placement by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Placement ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Placement"
}
```
## Operation: platformTypes.list
Retrieves a list of platform types.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlatformTypesListResponse"
}
```
## Operation: platformTypes.get
Gets one platform type by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Platform type ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlatformType"
}
```
## Operation: postalCodes.list
Retrieves a list of postal codes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PostalCodesListResponse"
}
```
## Operation: postalCodes.get
Gets one postal code by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "code": {
      "type": "string",
      "description": "Postal code ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "code"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PostalCode"
}
```
## Operation: projects.list
Retrieves a list of projects, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserIds": {
      "type": "array",
      "description": "Select only projects with these advertiser IDs."
    },
    "ids": {
      "type": "array",
      "description": "Select only projects with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, \"project*2015\" will return projects with names like \"project June 2015\", \"project April 2015\", or simply \"project 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"project\" will match projects with name \"my project\", \"project 2015\", or simply \"project\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectsListResponse"
}
```
## Operation: projects.get
Gets one project by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Project ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: inventoryItems.list
Retrieves a list of inventory items, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "projectId": {
      "type": "string",
      "description": "Project ID for order documents."
    },
    "ids": {
      "type": "array",
      "description": "Select only inventory items with these IDs."
    },
    "inPlan": {
      "type": "boolean",
      "description": "Select only inventory items that are in plan."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "orderId": {
      "type": "array",
      "description": "Select only inventory items that belong to specified orders."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "siteId": {
      "type": "array",
      "description": "Select only inventory items that are associated with these sites."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "type": {
      "type": "string",
      "description": "Select only inventory items with this type.",
      "enum": [
        "PLANNING_PLACEMENT_TYPE_CREDIT",
        "PLANNING_PLACEMENT_TYPE_REGULAR"
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
    "profileId",
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InventoryItemsListResponse"
}
```
## Operation: inventoryItems.get
Gets one inventory item by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "projectId": {
      "type": "string",
      "description": "Project ID for order documents."
    },
    "id": {
      "type": "string",
      "description": "Inventory item ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "projectId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InventoryItem"
}
```
## Operation: orderDocuments.list
Retrieves a list of order documents, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "projectId": {
      "type": "string",
      "description": "Project ID for order documents."
    },
    "approved": {
      "type": "boolean",
      "description": "Select only order documents that have been approved by at least one user."
    },
    "ids": {
      "type": "array",
      "description": "Select only order documents with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "orderId": {
      "type": "array",
      "description": "Select only order documents for specified orders."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for order documents by name or ID. Wildcards (*) are allowed. For example, \"orderdocument*2015\" will return order documents with names like \"orderdocument June 2015\", \"orderdocument April 2015\", or simply \"orderdocument 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"orderdocument\" will match order documents with name \"my orderdocument\", \"orderdocument 2015\", or simply \"orderdocument\"."
    },
    "siteId": {
      "type": "array",
      "description": "Select only order documents that are associated with these sites."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId",
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrderDocumentsListResponse"
}
```
## Operation: orderDocuments.get
Gets one order document by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "projectId": {
      "type": "string",
      "description": "Project ID for order documents."
    },
    "id": {
      "type": "string",
      "description": "Order document ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "projectId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrderDocument"
}
```
## Operation: orders.list
Retrieves a list of orders, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "projectId": {
      "type": "string",
      "description": "Project ID for orders."
    },
    "ids": {
      "type": "array",
      "description": "Select only orders with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, \"order*2015\" will return orders with names like \"order June 2015\", \"order April 2015\", or simply \"order 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"order\" will match orders with name \"my order\", \"order 2015\", or simply \"order\"."
    },
    "siteId": {
      "type": "array",
      "description": "Select only orders that are associated with these site IDs."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId",
    "projectId"
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
Gets one order by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "projectId": {
      "type": "string",
      "description": "Project ID for orders."
    },
    "id": {
      "type": "string",
      "description": "Order ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "projectId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Order"
}
```
## Operation: regions.list
Retrieves a list of regions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegionsListResponse"
}
```
## Operation: remarketingListShares.patch
Updates an existing remarketing list share. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "remarketingListId": {
      "type": "string",
      "description": "Remarketing list ID."
    },
    "body": {
      "$ref": "#/definitions/RemarketingListShare"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "remarketingListId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingListShare"
}
```
## Operation: remarketingListShares.update
Updates an existing remarketing list share.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/RemarketingListShare"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingListShare"
}
```
## Operation: remarketingListShares.get
Gets one remarketing list share by remarketing list ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "remarketingListId": {
      "type": "string",
      "description": "Remarketing list ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "remarketingListId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingListShare"
}
```
## Operation: remarketingLists.list
Retrieves a list of remarketing lists, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserId": {
      "type": "string",
      "description": "Select only remarketing lists owned by this advertiser."
    },
    "active": {
      "type": "boolean",
      "description": "Select only active or only inactive remarketing lists."
    },
    "floodlightActivityId": {
      "type": "string",
      "description": "Select only remarketing lists that have this floodlight activity ID."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "name": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"remarketing list*2015\" will return objects with names like \"remarketing list June 2015\", \"remarketing list April 2015\", or simply \"remarketing list 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"remarketing list\" will match objects with name \"my remarketing list\", \"remarketing list 2015\", or simply \"remarketing list\"."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId",
    "advertiserId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingListsListResponse"
}
```
## Operation: remarketingLists.patch
Updates an existing remarketing list. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Remarketing list ID."
    },
    "body": {
      "$ref": "#/definitions/RemarketingList"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingList"
}
```
## Operation: remarketingLists.insert
Inserts a new remarketing list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/RemarketingList"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingList"
}
```
## Operation: remarketingLists.update
Updates an existing remarketing list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/RemarketingList"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingList"
}
```
## Operation: remarketingLists.get
Gets one remarketing list by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Remarketing list ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RemarketingList"
}
```
## Operation: reports.list
Retrieves list of reports.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA user profile ID."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return.",
      "maximum": 10,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "The value of the nextToken from the previous result page."
    },
    "scope": {
      "type": "string",
      "description": "The scope that defines which results are returned, default is 'MINE'.",
      "enum": [
        "ALL",
        "MINE"
      ]
    },
    "sortField": {
      "type": "string",
      "description": "The field by which to sort the list.",
      "enum": [
        "ID",
        "LAST_MODIFIED_TIME",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is 'DESCENDING'.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReportList"
}
```
## Operation: reports.insert
Creates a report.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA user profile ID."
    },
    "body": {
      "$ref": "#/definitions/Report"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Report"
}
```
## Operation: reports.compatibleFields.query
Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA user profile ID."
    },
    "body": {
      "$ref": "#/definitions/Report"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CompatibleFields"
}
```
## Operation: reports.delete
Deletes a report by its ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA user profile ID."
    },
    "reportId": {
      "type": "string",
      "description": "The ID of the report."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "reportId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: reports.get
Retrieves a report by its ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA user profile ID."
    },
    "reportId": {
      "type": "string",
      "description": "The ID of the report."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
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
## Operation: reports.patch
Updates a report. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA user profile ID."
    },
    "reportId": {
      "type": "string",
      "description": "The ID of the report."
    },
    "body": {
      "$ref": "#/definitions/Report"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
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
## Operation: reports.update
Updates a report.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA user profile ID."
    },
    "reportId": {
      "type": "string",
      "description": "The ID of the report."
    },
    "body": {
      "$ref": "#/definitions/Report"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
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
## Operation: reports.files.list
Lists files for a report.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA profile ID."
    },
    "reportId": {
      "type": "string",
      "description": "The ID of the parent report."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return.",
      "maximum": 10,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "The value of the nextToken from the previous result page."
    },
    "sortField": {
      "type": "string",
      "description": "The field by which to sort the list.",
      "enum": [
        "ID",
        "LAST_MODIFIED_TIME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is 'DESCENDING'.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId",
    "reportId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileList"
}
```
## Operation: reports.files.get
Retrieves a report file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA profile ID."
    },
    "reportId": {
      "type": "string",
      "description": "The ID of the report."
    },
    "fileId": {
      "type": "string",
      "description": "The ID of the report file."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "reportId",
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/File"
}
```
## Operation: reports.run
Runs a report.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "The DFA profile ID."
    },
    "reportId": {
      "type": "string",
      "description": "The ID of the report."
    },
    "synchronous": {
      "type": "boolean",
      "description": "If set and true, tries to run the report synchronously."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "reportId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/File"
}
```
## Operation: sites.list
Retrieves a list of sites, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "acceptsInStreamVideoPlacements": {
      "type": "boolean",
      "description": "This search filter is no longer supported and will have no effect on the results returned."
    },
    "acceptsInterstitialPlacements": {
      "type": "boolean",
      "description": "This search filter is no longer supported and will have no effect on the results returned."
    },
    "acceptsPublisherPaidPlacements": {
      "type": "boolean",
      "description": "Select only sites that accept publisher paid placements."
    },
    "adWordsSite": {
      "type": "boolean",
      "description": "Select only AdWords sites."
    },
    "approved": {
      "type": "boolean",
      "description": "Select only approved sites."
    },
    "campaignIds": {
      "type": "array",
      "description": "Select only sites with these campaign IDs."
    },
    "directorySiteIds": {
      "type": "array",
      "description": "Select only sites with these directory site IDs."
    },
    "ids": {
      "type": "array",
      "description": "Select only sites with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, \"site*2015\" will return objects with names like \"site June 2015\", \"site April 2015\", or simply \"site 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"site\" will match objects with name \"my site\", \"site 2015\", or simply \"site\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "subaccountId": {
      "type": "string",
      "description": "Select only sites with this subaccount ID."
    },
    "unmappedSite": {
      "type": "boolean",
      "description": "Select only sites that have not been mapped to a directory site."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SitesListResponse"
}
```
## Operation: sites.patch
Updates an existing site. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Site ID."
    },
    "body": {
      "$ref": "#/definitions/Site"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: sites.insert
Inserts a new site.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Site"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: sites.update
Updates an existing site.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Site"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: sites.get
Gets one site by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Site ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: sizes.list
Retrieves a list of sizes, possibly filtered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "height": {
      "type": "integer",
      "description": "Select only sizes with this height."
    },
    "iabStandard": {
      "type": "boolean",
      "description": "Select only IAB standard sizes."
    },
    "ids": {
      "type": "array",
      "description": "Select only sizes with these IDs."
    },
    "width": {
      "type": "integer",
      "description": "Select only sizes with this width."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SizesListResponse"
}
```
## Operation: sizes.insert
Inserts a new size.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Size"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Size"
}
```
## Operation: sizes.get
Gets one size by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Size ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Size"
}
```
## Operation: subaccounts.list
Gets a list of subaccounts, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "ids": {
      "type": "array",
      "description": "Select only subaccounts with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"subaccount*2015\" will return objects with names like \"subaccount June 2015\", \"subaccount April 2015\", or simply \"subaccount 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"subaccount\" will match objects with name \"my subaccount\", \"subaccount 2015\", or simply \"subaccount\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubaccountsListResponse"
}
```
## Operation: subaccounts.patch
Updates an existing subaccount. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Subaccount ID."
    },
    "body": {
      "$ref": "#/definitions/Subaccount"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subaccount"
}
```
## Operation: subaccounts.insert
Inserts a new subaccount.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Subaccount"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subaccount"
}
```
## Operation: subaccounts.update
Updates an existing subaccount.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/Subaccount"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subaccount"
}
```
## Operation: subaccounts.get
Gets one subaccount by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Subaccount ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subaccount"
}
```
## Operation: targetableRemarketingLists.list
Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserId": {
      "type": "string",
      "description": "Select only targetable remarketing lists targetable by these advertisers."
    },
    "active": {
      "type": "boolean",
      "description": "Select only active or only inactive targetable remarketing lists."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "name": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"remarketing list*2015\" will return objects with names like \"remarketing list June 2015\", \"remarketing list April 2015\", or simply \"remarketing list 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"remarketing list\" will match objects with name \"my remarketing list\", \"remarketing list 2015\", or simply \"remarketing list\"."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId",
    "advertiserId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TargetableRemarketingListsListResponse"
}
```
## Operation: targetableRemarketingLists.get
Gets one remarketing list by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Remarketing list ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TargetableRemarketingList"
}
```
## Operation: targetingTemplates.list
Retrieves a list of targeting templates, optionally filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "advertiserId": {
      "type": "string",
      "description": "Select only targeting templates with this advertiser ID."
    },
    "ids": {
      "type": "array",
      "description": "Select only targeting templates with these IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"template*2015\" will return objects with names like \"template June 2015\", \"template April 2015\", or simply \"template 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"template\" will match objects with name \"my template\", \"template 2015\", or simply \"template\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
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
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TargetingTemplatesListResponse"
}
```
## Operation: targetingTemplates.patch
Updates an existing targeting template. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Targeting template ID."
    },
    "body": {
      "$ref": "#/definitions/TargetingTemplate"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TargetingTemplate"
}
```
## Operation: targetingTemplates.insert
Inserts a new targeting template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/TargetingTemplate"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TargetingTemplate"
}
```
## Operation: targetingTemplates.update
Updates an existing targeting template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/TargetingTemplate"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TargetingTemplate"
}
```
## Operation: targetingTemplates.get
Gets one targeting template by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "Targeting template ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TargetingTemplate"
}
```
## Operation: userRolePermissionGroups.list
Gets a list of all supported user role permission groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRolePermissionGroupsListResponse"
}
```
## Operation: userRolePermissionGroups.get
Gets one user role permission group by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "User role permission group ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRolePermissionGroup"
}
```
## Operation: userRolePermissions.list
Gets a list of user role permissions, possibly filtered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "ids": {
      "type": "array",
      "description": "Select only user role permissions with these IDs."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRolePermissionsListResponse"
}
```
## Operation: userRolePermissions.get
Gets one user role permission by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "User role permission ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRolePermission"
}
```
## Operation: userRoles.list
Retrieves a list of user roles, possibly filtered. This method supports paging.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "accountUserRoleOnly": {
      "type": "boolean",
      "description": "Select only account level user roles not associated with any specific subaccount."
    },
    "ids": {
      "type": "array",
      "description": "Select only user roles with the specified IDs."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return."
    },
    "pageToken": {
      "type": "string",
      "description": "Value of the nextPageToken from the previous result page."
    },
    "searchString": {
      "type": "string",
      "description": "Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"userrole*2015\" will return objects with names like \"userrole June 2015\", \"userrole April 2015\", or simply \"userrole 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"userrole\" will match objects with name \"my userrole\", \"userrole 2015\", or simply \"userrole\"."
    },
    "sortField": {
      "type": "string",
      "description": "Field by which to sort the list.",
      "enum": [
        "ID",
        "NAME"
      ]
    },
    "sortOrder": {
      "type": "string",
      "description": "Order of sorted results, default is ASCENDING.",
      "enum": [
        "ASCENDING",
        "DESCENDING"
      ]
    },
    "subaccountId": {
      "type": "string",
      "description": "Select only user roles that belong to this subaccount."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRolesListResponse"
}
```
## Operation: userRoles.patch
Updates an existing user role. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "User role ID."
    },
    "body": {
      "$ref": "#/definitions/UserRole"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRole"
}
```
## Operation: userRoles.insert
Inserts a new user role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/UserRole"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRole"
}
```
## Operation: userRoles.update
Updates an existing user role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "body": {
      "$ref": "#/definitions/UserRole"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRole"
}
```
## Operation: userRoles.delete
Deletes an existing user role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "User role ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: userRoles.get
Gets one user role by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "string",
      "description": "User role ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRole"
}
```
## Operation: videoFormats.list
Lists available video formats.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VideoFormatsListResponse"
}
```
## Operation: videoFormats.get
Gets one video format by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "profileId": {
      "type": "string",
      "description": "User profile ID associated with this request."
    },
    "id": {
      "type": "integer",
      "description": "Video format ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "profileId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VideoFormat"
}
```
