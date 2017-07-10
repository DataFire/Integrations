# @datafire/google_replicapoolupdater
[Deprecated. Please use compute.instanceGroupManagers.update method. replicapoolupdater API will be disabled after December 30th, 2016] Updates groups of Compute Engine instances.

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
## Operation: zoneOperations.list
Retrieves the list of Operation resources contained within the specified zone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Name of the project scoping this request."
    },
    "zone": {
      "type": "string",
      "description": "Name of the zone scoping this request."
    },
    "filter": {
      "type": "string",
      "description": "Optional. Filter expression for filtering listed resources."
    },
    "maxResults": {
      "type": "integer",
      "description": "Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.",
      "maximum": 500,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "zone"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationList"
}
```
## Operation: zoneOperations.get
Retrieves the specified zone-specific operation resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Name of the project scoping this request."
    },
    "zone": {
      "type": "string",
      "description": "Name of the zone scoping this request."
    },
    "operation": {
      "type": "string",
      "description": "Name of the operation resource to return."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "zone",
    "operation"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: rollingUpdates.list
Lists recent updates for a given managed instance group, in reverse chronological order and paginated format.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The Google Developers Console project name."
    },
    "zone": {
      "type": "string",
      "description": "The name of the zone in which the update's target resides."
    },
    "filter": {
      "type": "string",
      "description": "Optional. Filter expression for filtering listed resources."
    },
    "maxResults": {
      "type": "integer",
      "description": "Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.",
      "maximum": 500,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "zone"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RollingUpdateList"
}
```
## Operation: rollingUpdates.insert
Inserts and starts a new update.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The Google Developers Console project name."
    },
    "zone": {
      "type": "string",
      "description": "The name of the zone in which the update's target resides."
    },
    "body": {
      "$ref": "#/definitions/RollingUpdate"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "zone"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: rollingUpdates.get
Returns information about an update.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The Google Developers Console project name."
    },
    "zone": {
      "type": "string",
      "description": "The name of the zone in which the update's target resides."
    },
    "rollingUpdate": {
      "type": "string",
      "description": "The name of the update."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "zone",
    "rollingUpdate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RollingUpdate"
}
```
## Operation: rollingUpdates.cancel
Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The Google Developers Console project name."
    },
    "zone": {
      "type": "string",
      "description": "The name of the zone in which the update's target resides."
    },
    "rollingUpdate": {
      "type": "string",
      "description": "The name of the update."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "zone",
    "rollingUpdate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: rollingUpdates.listInstanceUpdates
Lists the current status for each instance within a given update.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The Google Developers Console project name."
    },
    "zone": {
      "type": "string",
      "description": "The name of the zone in which the update's target resides."
    },
    "rollingUpdate": {
      "type": "string",
      "description": "The name of the update."
    },
    "filter": {
      "type": "string",
      "description": "Optional. Filter expression for filtering listed resources."
    },
    "maxResults": {
      "type": "integer",
      "description": "Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.",
      "maximum": 500,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "zone",
    "rollingUpdate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InstanceUpdateList"
}
```
## Operation: rollingUpdates.pause
Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The Google Developers Console project name."
    },
    "zone": {
      "type": "string",
      "description": "The name of the zone in which the update's target resides."
    },
    "rollingUpdate": {
      "type": "string",
      "description": "The name of the update."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "zone",
    "rollingUpdate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: rollingUpdates.resume
Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The Google Developers Console project name."
    },
    "zone": {
      "type": "string",
      "description": "The name of the zone in which the update's target resides."
    },
    "rollingUpdate": {
      "type": "string",
      "description": "The name of the update."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "zone",
    "rollingUpdate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: rollingUpdates.rollback
Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The Google Developers Console project name."
    },
    "zone": {
      "type": "string",
      "description": "The name of the zone in which the update's target resides."
    },
    "rollingUpdate": {
      "type": "string",
      "description": "The name of the update."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "zone",
    "rollingUpdate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
