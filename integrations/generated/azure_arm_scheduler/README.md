# @datafire/azure_arm_scheduler


## Operation: JobCollections_ListBySubscription
Gets all job collections under specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobCollectionListResult"
}
```
## Operation: JobCollections_ListByResourceGroup
Gets all job collections under specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobCollectionListResult"
}
```
## Operation: JobCollections_Delete
Deletes a job collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: JobCollections_Get
Gets a job collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobCollectionDefinition"
}
```
## Operation: JobCollections_Patch
Patches an existing job collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "jobCollection": {
      "$ref": "#/definitions/JobCollectionDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "api-version",
    "jobCollection"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobCollectionDefinition"
}
```
## Operation: JobCollections_CreateOrUpdate
Provisions a new job collection or updates an existing job collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "jobCollection": {
      "$ref": "#/definitions/JobCollectionDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "api-version",
    "jobCollection"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobCollectionDefinition"
}
```
## Operation: JobCollections_Disable
Disables all of the jobs in the job collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: JobCollections_Enable
Enables all of the jobs in the job collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Jobs_List
Lists all jobs under the specified job collection.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "description": "The number of jobs to request, in the of range of [1..100].",
      "maximum": 100,
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "description": "The (0-based) index of the job history list from which to begin requesting entries."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the job state."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobListResult"
}
```
## Operation: Jobs_Delete
Deletes a job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "jobName": {
      "type": "string",
      "description": "The job name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "jobName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Jobs_Get
Gets a job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "jobName": {
      "type": "string",
      "description": "The job name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "jobName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobDefinition"
}
```
## Operation: Jobs_Patch
Patches an existing job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "jobName": {
      "type": "string",
      "description": "The job name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "job": {
      "$ref": "#/definitions/JobDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "jobName",
    "api-version",
    "job"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobDefinition"
}
```
## Operation: Jobs_CreateOrUpdate
Provisions a new job or updates an existing job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "jobName": {
      "type": "string",
      "description": "The job name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "job": {
      "$ref": "#/definitions/JobDefinition"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "jobName",
    "api-version",
    "job"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobDefinition"
}
```
## Operation: Jobs_ListJobHistory
Lists job history.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "jobName": {
      "type": "string",
      "description": "The job name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "description": "the number of job history to request, in the of range of [1..100].",
      "maximum": 100,
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "description": "The (0-based) index of the job history list from which to begin requesting entries."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the job state."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "jobName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobHistoryListResult"
}
```
## Operation: Jobs_Run
Runs a job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "jobCollectionName": {
      "type": "string",
      "description": "The job collection name."
    },
    "jobName": {
      "type": "string",
      "description": "The job name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "jobName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
