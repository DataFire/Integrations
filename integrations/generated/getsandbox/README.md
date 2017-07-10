# @datafire/getsandbox
Sandbox API

## Operation: getSandboxesActivity
searchActivity

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "fromTimestamp": {
      "type": "integer",
      "format": "int64",
      "description": "Timestamp to start search from, epoch time in milliseconds."
    },
    "sourceSandboxes": {
      "type": "string",
      "description": "Comma-separated list of Sandbox names to search."
    },
    "keyword": {
      "type": "string",
      "description": "A keyword to search activities by, will match any part of the ActivityMessage."
    },
    "allTypes": {
      "type": "boolean",
      "description": "Flag to return all types of activity, defaults to just Requests"
    },
    "maxResults": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results to return"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ActivityMessage"
  },
  "type": "array"
}
```
## Operation: getSandboxes
getSandboxes

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "filterType": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Sandbox"
  },
  "type": "array"
}
```
## Operation: createSandbox
createSandbox

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CreateSandbox"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sandbox"
}
```
## Operation: deleteSandbox
deleteSandbox

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sandboxName": {
      "type": "string",
      "description": "Name of the Sandbox"
    }
  },
  "additionalProperties": false,
  "required": [
    "sandboxName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getSandbox
getSandbox

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sandboxName": {
      "type": "string",
      "description": "Name of the Sandbox"
    }
  },
  "additionalProperties": false,
  "required": [
    "sandboxName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sandbox"
}
```
## Operation: updateSandbox
updateSandbox

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sandboxName": {
      "type": "string",
      "description": "Name of the Sandbox"
    },
    "body": {
      "$ref": "#/definitions/Sandbox"
    }
  },
  "additionalProperties": false,
  "required": [
    "sandboxName",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sandbox"
}
```
## Operation: forkSandbox
forkSandbox

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sandboxName": {
      "type": "string",
      "description": "Name of the Sandbox"
    }
  },
  "additionalProperties": false,
  "required": [
    "sandboxName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sandbox"
}
```
## Operation: deleteSandboxState
deleteSandboxState

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sandboxName": {
      "type": "string",
      "description": "Name of the Sandbox"
    }
  },
  "additionalProperties": false,
  "required": [
    "sandboxName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getSandboxState
getSandboxState

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sandboxName": {
      "type": "string",
      "description": "Name of the Sandbox"
    }
  },
  "additionalProperties": false,
  "required": [
    "sandboxName"
  ]
}
```
### Output Schema
```json
{}
```
