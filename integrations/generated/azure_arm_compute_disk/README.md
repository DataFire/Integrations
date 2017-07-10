# @datafire/azure_arm_compute_disk
The Disk Resource Provider Client.

## Operation: Disks_List
Lists all the disks under a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
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
  "$ref": "#/definitions/DiskList"
}
```
## Operation: Snapshots_List
Lists snapshots under a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
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
  "$ref": "#/definitions/SnapshotList"
}
```
## Operation: Disks_ListByResourceGroup
Lists all the disks under a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
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
  "$ref": "#/definitions/DiskList"
}
```
## Operation: Disks_Delete
Deletes a disk.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "diskName": {
      "type": "string",
      "description": "The name of the disk within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "diskName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: Disks_Get
Gets information about a disk.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "diskName": {
      "type": "string",
      "description": "The name of the disk within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "diskName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Disk"
}
```
## Operation: Disks_Update
Updates (patches) a disk.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "diskName": {
      "type": "string",
      "description": "The name of the disk within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "disk": {
      "$ref": "#/definitions/DiskUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "diskName",
    "api-version",
    "disk"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Disk"
}
```
## Operation: Disks_CreateOrUpdate
Creates or updates a disk.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "diskName": {
      "type": "string",
      "description": "The name of the disk within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "disk": {
      "$ref": "#/definitions/Disk"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "diskName",
    "api-version",
    "disk"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Disk"
}
```
## Operation: Disks_GrantAccess
Grants access to a disk.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "diskName": {
      "type": "string",
      "description": "The name of the disk within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "grantAccessData": {
      "$ref": "#/definitions/GrantAccessData"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "diskName",
    "api-version",
    "grantAccessData"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccessUri"
}
```
## Operation: Disks_RevokeAccess
Revokes access to a disk.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "diskName": {
      "type": "string",
      "description": "The name of the disk within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "diskName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: Snapshots_ListByResourceGroup
Lists snapshots under a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
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
  "$ref": "#/definitions/SnapshotList"
}
```
## Operation: Snapshots_Delete
Deletes a snapshot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "snapshotName": {
      "type": "string",
      "description": "The name of the snapshot within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "snapshotName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: Snapshots_Get
Gets information about a snapshot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "snapshotName": {
      "type": "string",
      "description": "The name of the snapshot within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "snapshotName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Snapshot"
}
```
## Operation: Snapshots_Update
Updates (patches) a snapshot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "snapshotName": {
      "type": "string",
      "description": "The name of the snapshot within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "snapshot": {
      "$ref": "#/definitions/SnapshotUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "snapshotName",
    "api-version",
    "snapshot"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Snapshot"
}
```
## Operation: Snapshots_CreateOrUpdate
Creates or updates a snapshot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "snapshotName": {
      "type": "string",
      "description": "The name of the snapshot within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "snapshot": {
      "$ref": "#/definitions/Snapshot"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "snapshotName",
    "api-version",
    "snapshot"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Snapshot"
}
```
## Operation: Snapshots_GrantAccess
Grants access to a snapshot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "snapshotName": {
      "type": "string",
      "description": "The name of the snapshot within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "grantAccessData": {
      "$ref": "#/definitions/GrantAccessData"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "snapshotName",
    "api-version",
    "grantAccessData"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccessUri"
}
```
## Operation: Snapshots_RevokeAccess
Revokes access to a snapshot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "snapshotName": {
      "type": "string",
      "description": "The name of the snapshot within the given subscription and resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "snapshotName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
