# @datafire/azure_arm_service_map
Service Map API Reference

## Operation: ClientGroups_Get
Retrieves the specified client group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "clientGroupName": {
      "type": "string",
      "description": "Client Group resource name.",
      "maxLength": 256,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "clientGroupName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClientGroup"
}
```
## Operation: ClientGroups_ListMembers
Returns the members of the client group during the specified time interval.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "clientGroupName": {
      "type": "string",
      "description": "Client Group resource name.",
      "maxLength": 256,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Page size to use. When not specified, the default page size is 100 records.",
      "maximum": 200,
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "clientGroupName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClientGroupMembersCollection"
}
```
## Operation: ClientGroups_GetMembersCount
Returns the approximate number of members in the client group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "clientGroupName": {
      "type": "string",
      "description": "Client Group resource name.",
      "maxLength": 256,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "clientGroupName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClientGroupMembersCount"
}
```
## Operation: Maps_Generate
Generates the specified map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "request": {
      "$ref": "#/definitions/MapRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "request"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MapResponse"
}
```
## Operation: MachineGroups_ListByWorkspace
Returns all machine groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MachineGroupCollection"
}
```
## Operation: MachineGroups_Create
Creates a new machine group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineGroup": {
      "$ref": "#/definitions/MachineGroup"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineGroup"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MachineGroup"
}
```
## Operation: MachineGroups_Delete
Deletes the specified Machine Group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineGroupName": {
      "type": "string",
      "description": "Machine Group resource name.",
      "maxLength": 36,
      "minLength": 36
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineGroupName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: MachineGroups_Get
Returns the specified machine group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineGroupName": {
      "type": "string",
      "description": "Machine Group resource name.",
      "maxLength": 36,
      "minLength": 36
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineGroupName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MachineGroup"
}
```
## Operation: MachineGroups_Update
Updates a machine group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineGroupName": {
      "type": "string",
      "description": "Machine Group resource name.",
      "maxLength": 36,
      "minLength": 36
    },
    "machineGroup": {
      "$ref": "#/definitions/MachineGroup"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineGroupName",
    "machineGroup"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MachineGroup"
}
```
## Operation: Machines_ListByWorkspace
Returns a collection of machines matching the specified conditions.  The returned collection represents either machines that are active/live during the specified interval  of time (`live=true` and `startTime`/`endTime` are specified) or that are known to have existed at or  some time prior to the specified point in time (`live=false` and `timestamp` is specified).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "live": {
      "type": "boolean",
      "description": "Specifies whether to return live resources (true) or inventory resources (false). Defaults to **true**. When retrieving live resources, the start time (`startTime`) and end time (`endTime`) of the desired interval should be included. When retrieving inventory resources, an optional timestamp (`timestamp`) parameter can be specified to return the version of each resource closest (not-after) that timestamp."
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying a time instance relative to which to evaluate each machine resource. Only applies when `live=false`. When not specified, the service uses DateTime.UtcNow."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Page size to use. When not specified, the default page size is 100 records.",
      "maximum": 200,
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MachineCollection"
}
```
## Operation: Machines_Get
Returns the specified machine.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "timestamp": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying a time instance relative to which to evaluate the machine resource. When not specified, the service uses DateTime.UtcNow."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Machine"
}
```
## Operation: Machines_ListConnections
Returns a collection of connections terminating or originating at the specified machine

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionCollection"
}
```
## Operation: Machines_GetLiveness
Obtains the liveness status of the machine during the specified time interval.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Liveness"
}
```
## Operation: Machines_ListMachineGroupMembership
Returns a collection of machine groups this machine belongs to.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MachineGroupCollection"
}
```
## Operation: Machines_ListPorts
Returns a collection of live ports on the specified machine during the specified time interval.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PortCollection"
}
```
## Operation: Ports_Get
Returns the specified port. The port must be live during the specified time interval. If the port is not live during the interval, status 404 (Not Found) is returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "portName": {
      "type": "string",
      "description": "Port resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName",
    "portName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Port"
}
```
## Operation: Ports_ListAcceptingProcesses
Returns a collection of processes accepting on the specified port

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "portName": {
      "type": "string",
      "description": "Port resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName",
    "portName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProcessCollection"
}
```
## Operation: Ports_ListConnections
Returns a collection of connections established via the specified port.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "portName": {
      "type": "string",
      "description": "Port resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName",
    "portName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionCollection"
}
```
## Operation: Ports_GetLiveness
Obtains the liveness status of the port during the specified time interval.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "portName": {
      "type": "string",
      "description": "Port resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName",
    "portName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Liveness"
}
```
## Operation: Machines_ListProcesses
Returns a collection of processes on the specified machine matching the specified conditions. The returned collection represents either processes that are active/live during the specified interval  of time (`live=true` and `startTime`/`endTime` are specified) or that are known to have existed at or  some time prior to the specified point in time (`live=false` and `timestamp` is specified).        

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "live": {
      "type": "boolean",
      "description": "Specifies whether to return live resources (true) or inventory resources (false). Defaults to **true**. When retrieving live resources, the start time (`startTime`) and end time (`endTime`) of the desired interval should be included. When retrieving inventory resources, an optional timestamp (`timestamp`) parameter can be specified to return the version of each resource closest (not-after) that timestamp."
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying a time instance relative to which to evaluate all process resource. Only applies when `live=false`. When not specified, the service uses DateTime.UtcNow."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProcessCollection"
}
```
## Operation: Processes_Get
Returns the specified process.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "processName": {
      "type": "string",
      "description": "Process resource name.",
      "maxLength": 128,
      "minLength": 3
    },
    "timestamp": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying a time instance relative to which to evaluate a resource. When not specified, the service uses DateTime.UtcNow."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName",
    "processName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Process"
}
```
## Operation: Processes_ListAcceptingPorts
Returns a collection of ports on which this process is accepting

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "processName": {
      "type": "string",
      "description": "Process resource name.",
      "maxLength": 128,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName",
    "processName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PortCollection"
}
```
## Operation: Processes_ListConnections
Returns a collection of connections terminating or originating at the specified process

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "processName": {
      "type": "string",
      "description": "Process resource name.",
      "maxLength": 128,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName",
    "processName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionCollection"
}
```
## Operation: Processes_GetLiveness
Obtains the liveness status of the process during the specified time interval.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "machineName": {
      "type": "string",
      "description": "Machine resource name.",
      "maxLength": 64,
      "minLength": 3
    },
    "processName": {
      "type": "string",
      "description": "Process resource name.",
      "maxLength": 128,
      "minLength": 3
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version",
    "machineName",
    "processName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Liveness"
}
```
## Operation: Summaries_GetMachines
Returns summary information about the machines in the workspace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name within the specified subscriptionId.",
      "pattern": "[a-zA-Z0-9_-]+",
      "maxLength": 64,
      "minLength": 1
    },
    "workspaceName": {
      "type": "string",
      "description": "OMS workspace containing the resources of interest.",
      "pattern": "[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]",
      "maxLength": 63,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "API version."
    },
    "startTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m"
    },
    "endTime": {
      "type": "string",
      "format": "date-time",
      "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workspaceName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MachinesSummary"
}
```
