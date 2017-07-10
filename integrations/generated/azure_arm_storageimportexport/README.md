# @datafire/azure_arm_storageimportexport
The Microsoft Azure Storage Import/Export Resource Provider API.

## Operation: ListLocations
Returns a list of locations to which you can ship the disks associated with an import or export job. A location is a Microsoft data center region.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "Accept-Language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LocationsListResult"
}
```
## Operation: GetLocation
Gets a location to which you can ship the disks associated with an import or export job. A location is an Azure region.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "locationName": {
      "type": "string",
      "description": "The name of the location. For example, 'West US' or 'westus'."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "locationName",
    "api-version",
    "Accept-Language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: ListSupportedOperations
Returns the list of operations supported by the import/export resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "Accept-Language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SupportedOperationsListResult"
}
```
## Operation: Jobs_List
Gets all the active and completed import/export jobs in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID for the Azure user."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    },
    "$top": {
      "type": "integer",
      "description": "An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100.",
      "maximum": 100,
      "minimum": 1
    },
    "$filter": {
      "type": "string",
      "description": "Can be used to restrict the results to certain conditions. The following possible values can be used with $filter: 1) $filter=type eq '{type}'; 2) $filter=trackingnumber eq '{trackingnumber}'; 3) $filter=state eq '{state}'; 4) Logical and combination of the above, for example: $filter=type eq 'Import' and state eq 'Transferring'. Valid values for type are Import and Export. Valid values for state are Creating, Shipping, Received, Transferring, Packaging, Closed, and Completed."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version",
    "Accept-Language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobListResult"
}
```
## Operation: Jobs_ListByResourceGroup
Returns all active and completed import/export jobs in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID for the Azure user."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    },
    "$top": {
      "type": "integer",
      "description": "An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100.",
      "maximum": 100,
      "minimum": 1
    },
    "$filter": {
      "type": "string",
      "description": "Can be used to restrict the results to certain conditions. The following possible values can be used with $filter: 1) $filter=type eq '{type}'; 2) $filter=trackingnumber eq '{trackingnumber}'; 3) $filter=state eq '{state}'; 4) Logical and combination of the above, for example: $filter=type eq 'Import' and state eq 'Transferring'. Valid values for type are Import and Export. Valid values for state are Creating, Shipping, Received, Transferring, Packaging, Closed, and Completed."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "api-version",
    "Accept-Language"
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
Deletes an existing import/export job. Only import/export jobs in the Creating or Completed states can be deleted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID for the Azure user."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscription."
    },
    "jobName": {
      "type": "string",
      "description": "The name of the import/export job."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobName",
    "api-version",
    "Accept-Language"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Jobs_Get
Gets information about an existing import/export job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID for the Azure user."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscription."
    },
    "jobName": {
      "type": "string",
      "description": "The name of the import/export job."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobName",
    "api-version",
    "Accept-Language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: Jobs_Update
Updates specific properties of the import/export job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID for the Azure user."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscription."
    },
    "jobName": {
      "type": "string",
      "description": "The name of the import/export job."
    },
    "jobProperties": {
      "$ref": "#/definitions/MutableJob"
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobName",
    "jobProperties",
    "api-version",
    "Accept-Language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: Jobs_CreateOrUpdate
Creates a new import/export job or updates an existing import/export job in the specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID for the Azure user."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscription."
    },
    "jobName": {
      "type": "string",
      "description": "The name of the import/export job."
    },
    "jobProperties": {
      "$ref": "#/definitions/Job"
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobName",
    "jobProperties",
    "api-version",
    "Accept-Language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: Jobs_ListBitLockerKeys
Lists the BitLocker keys for all drives in the specified import/export job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID for the Azure user."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscription."
    },
    "jobName": {
      "type": "string",
      "description": "The name of the import/export job."
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "jobName",
    "api-version",
    "Accept-Language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BitLockerKeysListResult"
}
```
## Operation: Jobs_Move
Moves the specified import/export jobs from the resource group to a target resource group. The target resource group may be in a different subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID for the Azure user."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name uniquely identifies the resource group within the user subscription."
    },
    "MoveJobsParameters": {
      "$ref": "#/definitions/MoveJobParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Specifies the API version to use for this request.",
      "enum": [
        "2016-11-01"
      ]
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the preferred language for the response.",
      "enum": [
        "en-us"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "MoveJobsParameters",
    "api-version",
    "Accept-Language"
  ]
}
```
### Output Schema
```json
{}
```
