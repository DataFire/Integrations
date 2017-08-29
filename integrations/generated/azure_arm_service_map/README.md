# @datafire/azure_arm_service_map

Client library for Service Map

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_service_map
```

```js
let datafire = require('datafire');
let azure_arm_service_map = require('@datafire/azure_arm_service_map').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_service_map.ClientGroups_Get({}).then(data => {
  console.log(data);
})
```

## Description
Service Map API Reference

## Actions
### ClientGroups_Get
Retrieves the specified client group


```js
azure_arm_service_map.ClientGroups_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "clientGroupName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* clientGroupName (string) **required** - Client Group resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### ClientGroups_ListMembers
Returns the members of the client group during the specified time interval.


```js
azure_arm_service_map.ClientGroups_ListMembers({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "clientGroupName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* clientGroupName (string) **required** - Client Group resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow
* $top (integer) - Page size to use. When not specified, the default page size is 100 records.

### ClientGroups_GetMembersCount
Returns the approximate number of members in the client group.


```js
azure_arm_service_map.ClientGroups_GetMembersCount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "clientGroupName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* clientGroupName (string) **required** - Client Group resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Maps_Generate
Generates the specified map.


```js
azure_arm_service_map.Maps_Generate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "request": {
    "kind": ""
  }
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* request (object) **required** - Specifies the contents of request to generate a map.

### MachineGroups_ListByWorkspace
Returns all machine groups.


```js
azure_arm_service_map.MachineGroups_ListByWorkspace({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.

### MachineGroups_Create
Creates a new machine group.


```js
azure_arm_service_map.MachineGroups_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineGroup": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineGroup (undefined) **required** - A user-defined logical grouping of machines.

### MachineGroups_Delete
Deletes the specified Machine Group.


```js
azure_arm_service_map.MachineGroups_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineGroupName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineGroupName (string) **required** - Machine Group resource name.

### MachineGroups_Get
Returns the specified machine group.


```js
azure_arm_service_map.MachineGroups_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineGroupName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineGroupName (string) **required** - Machine Group resource name.

### MachineGroups_Update
Updates a machine group.


```js
azure_arm_service_map.MachineGroups_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineGroupName": "",
  "machineGroup": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineGroupName (string) **required** - Machine Group resource name.
* machineGroup (undefined) **required** - A user-defined logical grouping of machines.

### Machines_ListByWorkspace
Returns a collection of machines matching the specified conditions.  The returned collection represents either machines that are active/live during the specified interval  of time (`live=true` and `startTime`/`endTime` are specified) or that are known to have existed at or  some time prior to the specified point in time (`live=false` and `timestamp` is specified).


```js
azure_arm_service_map.Machines_ListByWorkspace({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* live (boolean) - Specifies whether to return live resources (true) or inventory resources (false). Defaults to **true**. When retrieving live resources, the start time (`startTime`) and end time (`endTime`) of the desired interval should be included. When retrieving inventory resources, an optional timestamp (`timestamp`) parameter can be specified to return the version of each resource closest (not-after) that timestamp.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow
* timestamp (string) - UTC date and time specifying a time instance relative to which to evaluate each machine resource. Only applies when `live=false`. When not specified, the service uses DateTime.UtcNow.
* $top (integer) - Page size to use. When not specified, the default page size is 100 records.

### Machines_Get
Returns the specified machine.


```js
azure_arm_service_map.Machines_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* timestamp (string) - UTC date and time specifying a time instance relative to which to evaluate the machine resource. When not specified, the service uses DateTime.UtcNow.

### Machines_ListConnections
Returns a collection of connections terminating or originating at the specified machine


```js
azure_arm_service_map.Machines_ListConnections({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Machines_GetLiveness
Obtains the liveness status of the machine during the specified time interval.


```js
azure_arm_service_map.Machines_GetLiveness({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Machines_ListMachineGroupMembership
Returns a collection of machine groups this machine belongs to.


```js
azure_arm_service_map.Machines_ListMachineGroupMembership({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.

### Machines_ListPorts
Returns a collection of live ports on the specified machine during the specified time interval.


```js
azure_arm_service_map.Machines_ListPorts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Ports_Get
Returns the specified port. The port must be live during the specified time interval. If the port is not live during the interval, status 404 (Not Found) is returned.


```js
azure_arm_service_map.Ports_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": "",
  "portName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* portName (string) **required** - Port resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Ports_ListAcceptingProcesses
Returns a collection of processes accepting on the specified port


```js
azure_arm_service_map.Ports_ListAcceptingProcesses({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": "",
  "portName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* portName (string) **required** - Port resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Ports_ListConnections
Returns a collection of connections established via the specified port.


```js
azure_arm_service_map.Ports_ListConnections({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": "",
  "portName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* portName (string) **required** - Port resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Ports_GetLiveness
Obtains the liveness status of the port during the specified time interval.


```js
azure_arm_service_map.Ports_GetLiveness({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": "",
  "portName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* portName (string) **required** - Port resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Machines_ListProcesses
Returns a collection of processes on the specified machine matching the specified conditions. The returned collection represents either processes that are active/live during the specified interval  of time (`live=true` and `startTime`/`endTime` are specified) or that are known to have existed at or  some time prior to the specified point in time (`live=false` and `timestamp` is specified).        


```js
azure_arm_service_map.Machines_ListProcesses({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* live (boolean) - Specifies whether to return live resources (true) or inventory resources (false). Defaults to **true**. When retrieving live resources, the start time (`startTime`) and end time (`endTime`) of the desired interval should be included. When retrieving inventory resources, an optional timestamp (`timestamp`) parameter can be specified to return the version of each resource closest (not-after) that timestamp.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow
* timestamp (string) - UTC date and time specifying a time instance relative to which to evaluate all process resource. Only applies when `live=false`. When not specified, the service uses DateTime.UtcNow.

### Processes_Get
Returns the specified process.


```js
azure_arm_service_map.Processes_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": "",
  "processName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* processName (string) **required** - Process resource name.
* timestamp (string) - UTC date and time specifying a time instance relative to which to evaluate a resource. When not specified, the service uses DateTime.UtcNow.

### Processes_ListAcceptingPorts
Returns a collection of ports on which this process is accepting


```js
azure_arm_service_map.Processes_ListAcceptingPorts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": "",
  "processName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* processName (string) **required** - Process resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Processes_ListConnections
Returns a collection of connections terminating or originating at the specified process


```js
azure_arm_service_map.Processes_ListConnections({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": "",
  "processName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* processName (string) **required** - Process resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Processes_GetLiveness
Obtains the liveness status of the process during the specified time interval.


```js
azure_arm_service_map.Processes_GetLiveness({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "machineName": "",
  "processName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* machineName (string) **required** - Machine resource name.
* processName (string) **required** - Process resource name.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

### Summaries_GetMachines
Returns summary information about the machines in the workspace.


```js
azure_arm_service_map.Summaries_GetMachines({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure subscription identifier.
* resourceGroupName (string) **required** - Resource group name within the specified subscriptionId.
* workspaceName (string) **required** - OMS workspace containing the resources of interest.
* api-version (string) **required** - API version.
* startTime (string) - UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
* endTime (string) - UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

