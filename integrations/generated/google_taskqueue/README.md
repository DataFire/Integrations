# @datafire/google_taskqueue
Accesses a Google App Engine Pull Task Queue over REST.

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
## Operation: taskqueues.get
Get detailed information about a TaskQueue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project under which the queue lies."
    },
    "taskqueue": {
      "type": "string",
      "description": "The id of the taskqueue to get the properties of."
    },
    "getStats": {
      "type": "boolean",
      "description": "Whether to get stats. Optional."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
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
    "taskqueue"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TaskQueue"
}
```
## Operation: tasks.list
List Tasks in a TaskQueue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project under which the queue lies."
    },
    "taskqueue": {
      "type": "string",
      "description": "The id of the taskqueue to list tasks from."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
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
    "taskqueue"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tasks2"
}
```
## Operation: tasks.insert
Insert a new task in a TaskQueue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project under which the queue lies"
    },
    "taskqueue": {
      "type": "string",
      "description": "The taskqueue to insert the task into"
    },
    "body": {
      "$ref": "#/definitions/Task"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
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
    "taskqueue"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Task"
}
```
## Operation: tasks.lease
Lease 1 or more tasks from a TaskQueue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project under which the queue lies."
    },
    "taskqueue": {
      "type": "string",
      "description": "The taskqueue to lease a task from."
    },
    "numTasks": {
      "type": "integer",
      "description": "The number of tasks to lease."
    },
    "leaseSecs": {
      "type": "integer",
      "description": "The lease in seconds."
    },
    "groupByTag": {
      "type": "boolean",
      "description": "When true, all returned tasks will have the same tag"
    },
    "tag": {
      "type": "string",
      "description": "The tag allowed for tasks in the response. Must only be specified if group_by_tag is true. If group_by_tag is true and tag is not specified the tag will be that of the oldest task by eta, i.e. the first available tag"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
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
    "taskqueue",
    "numTasks",
    "leaseSecs"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tasks"
}
```
## Operation: tasks.delete
Delete a task from a TaskQueue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project under which the queue lies."
    },
    "taskqueue": {
      "type": "string",
      "description": "The taskqueue to delete a task from."
    },
    "task": {
      "type": "string",
      "description": "The id of the task to delete."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
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
    "taskqueue",
    "task"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tasks.get
Get a particular task from a TaskQueue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project under which the queue lies."
    },
    "taskqueue": {
      "type": "string",
      "description": "The taskqueue in which the task belongs."
    },
    "task": {
      "type": "string",
      "description": "The task to get properties of."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
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
    "taskqueue",
    "task"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Task"
}
```
## Operation: tasks.patch
Update tasks that are leased out of a TaskQueue. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project under which the queue lies."
    },
    "taskqueue": {
      "type": "string"
    },
    "task": {
      "type": "string"
    },
    "newLeaseSeconds": {
      "type": "integer",
      "description": "The new lease in seconds."
    },
    "body": {
      "$ref": "#/definitions/Task"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
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
    "taskqueue",
    "task",
    "newLeaseSeconds"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Task"
}
```
## Operation: tasks.update
Update tasks that are leased out of a TaskQueue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project under which the queue lies."
    },
    "taskqueue": {
      "type": "string"
    },
    "task": {
      "type": "string"
    },
    "newLeaseSeconds": {
      "type": "integer",
      "description": "The new lease in seconds."
    },
    "body": {
      "$ref": "#/definitions/Task"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
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
    "taskqueue",
    "task",
    "newLeaseSeconds"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Task"
}
```
