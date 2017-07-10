# @datafire/azure_arm_redis
REST API for Azure Redis Cache Service.

## Operation: Redis_List
Gets all Redis caches in the specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RedisListResult"
}
```
## Operation: Redis_ListByResourceGroup
Gets all Redis caches in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RedisListResult"
}
```
## Operation: Redis_Delete
Deletes a Redis cache.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the Redis cache."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Redis_Get
Gets a Redis cache (resource description).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the Redis cache."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RedisResource"
}
```
## Operation: Redis_CreateOrUpdate
Create a Redis cache, or replace (overwrite/recreate, with potential downtime) an existing cache.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the Redis cache."
    },
    "parameters": {
      "$ref": "#/definitions/RedisCreateOrUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RedisResourceWithAccessKey"
}
```
## Operation: Redis_ForceReboot
Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the Redis cache."
    },
    "parameters": {
      "$ref": "#/definitions/RedisRebootParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Redis_ListKeys
Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the Redis cache."
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RedisListKeysResult"
}
```
## Operation: Redis_RegenerateKey
Regenerate the access keys for a Redis cache. This operation requires write permission to the cache resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the Redis cache."
    },
    "parameters": {
      "$ref": "#/definitions/RedisRegenerateKeyParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RedisListKeysResult"
}
```
