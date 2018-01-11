# @datafire/azure_arm_service_map

Client library for Service Map

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_service_map
```
```js
let azure_arm_service_map = require('@datafire/azure_arm_service_map').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * clientGroupName **required** `string`: Client Group resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [ClientGroup](#clientgroup)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * clientGroupName **required** `string`: Client Group resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow
  * $top `integer`: Page size to use. When not specified, the default page size is 100 records.

#### Output
* output [ClientGroupMembersCollection](#clientgroupmemberscollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * clientGroupName **required** `string`: Client Group resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [ClientGroupMembersCount](#clientgroupmemberscount)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * request **required** [MapRequest](#maprequest)

#### Output
* output [MapResponse](#mapresponse)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.

#### Output
* output [MachineGroupCollection](#machinegroupcollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineGroup **required** [MachineGroup](#machinegroup)

#### Output
* output [MachineGroup](#machinegroup)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineGroupName **required** `string`: Machine Group resource name.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineGroupName **required** `string`: Machine Group resource name.

#### Output
* output [MachineGroup](#machinegroup)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineGroupName **required** `string`: Machine Group resource name.
  * machineGroup **required** [MachineGroup](#machinegroup)

#### Output
* output [MachineGroup](#machinegroup)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * live `boolean`: Specifies whether to return live resources (true) or inventory resources (false). Defaults to **true**. When retrieving live resources, the start time (`startTime`) and end time (`endTime`) of the desired interval should be included. When retrieving inventory resources, an optional timestamp (`timestamp`) parameter can be specified to return the version of each resource closest (not-after) that timestamp.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow
  * timestamp `string`: UTC date and time specifying a time instance relative to which to evaluate each machine resource. Only applies when `live=false`. When not specified, the service uses DateTime.UtcNow.
  * $top `integer`: Page size to use. When not specified, the default page size is 100 records.

#### Output
* output [MachineCollection](#machinecollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * timestamp `string`: UTC date and time specifying a time instance relative to which to evaluate the machine resource. When not specified, the service uses DateTime.UtcNow.

#### Output
* output [Machine](#machine)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [ConnectionCollection](#connectioncollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [Liveness](#liveness)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.

#### Output
* output [MachineGroupCollection](#machinegroupcollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [PortCollection](#portcollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * portName **required** `string`: Port resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [Port](#port)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * portName **required** `string`: Port resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [ProcessCollection](#processcollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * portName **required** `string`: Port resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [ConnectionCollection](#connectioncollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * portName **required** `string`: Port resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [Liveness](#liveness)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * live `boolean`: Specifies whether to return live resources (true) or inventory resources (false). Defaults to **true**. When retrieving live resources, the start time (`startTime`) and end time (`endTime`) of the desired interval should be included. When retrieving inventory resources, an optional timestamp (`timestamp`) parameter can be specified to return the version of each resource closest (not-after) that timestamp.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow
  * timestamp `string`: UTC date and time specifying a time instance relative to which to evaluate all process resource. Only applies when `live=false`. When not specified, the service uses DateTime.UtcNow.

#### Output
* output [ProcessCollection](#processcollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * processName **required** `string`: Process resource name.
  * timestamp `string`: UTC date and time specifying a time instance relative to which to evaluate a resource. When not specified, the service uses DateTime.UtcNow.

#### Output
* output [Process](#process)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * processName **required** `string`: Process resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [PortCollection](#portcollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * processName **required** `string`: Process resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [ConnectionCollection](#connectioncollection)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * machineName **required** `string`: Machine resource name.
  * processName **required** `string`: Process resource name.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [Liveness](#liveness)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription identifier.
  * resourceGroupName **required** `string`: Resource group name within the specified subscriptionId.
  * workspaceName **required** `string`: OMS workspace containing the resources of interest.
  * api-version **required** `string`: API version.
  * startTime `string`: UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
  * endTime `string`: UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow

#### Output
* output [MachinesSummary](#machinessummary)



## Definitions

### Acceptor
* Acceptor `object`: A process accepting on a port.
  * properties [AcceptorProperties](#acceptorproperties)
  * kind **required** `string` (values: rel:connection, rel:acceptor): Additional resource type qualifier.
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### AcceptorProperties
* AcceptorProperties `object`: Properties for an acceptor relationship.
  * destination **required** [ProcessReference](#processreference)
  * endTime `string`: Relationship end time.
  * source **required** [PortReference](#portreference)
  * startTime `string`: Relationship start time.

### Accuracy
* Accuracy `string` (values: actual, estimated): Specifies the accuracy of a computation.

### AgentConfiguration
* AgentConfiguration `object`: Describes the configuration of the Dependency Agent installed on a machine.
  * agentId **required** `string`: Health Service Agent unique identifier.
  * clockGranularity `integer`: Machine clock granularity in milliseconds.
  * dependencyAgentId `string`: Dependency Agent unique identifier.
  * dependencyAgentRevision `string`: Dependency Agent revision number.
  * dependencyAgentVersion `string`: Dependency Agent version number.
  * rebootStatus [MachineRebootStatus](#machinerebootstatus)

### Bitness
* Bitness `string` (values: 32bit, 64bit): Specifies the bitness of a machine or process.

### ClientGroup
* ClientGroup `object`: Represents a collection of clients of a resource. A client group can represent the clients of a port, process, or a machine.
  * properties `object`: Resource properties.
    * clientsOf **required** [ResourceReference](#resourcereference)
  * etag `string`: Resource ETAG.
  * kind **required** `string` (values: machine, process, port, clientGroup, machineGroup): Additional resource type qualifier.
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ClientGroupMember
* ClientGroupMember `object`: Represents a member of a client group
  * properties `object`: Resource properties.
    * ipAddress `string`: IP address.
    * port [PortReference](#portreference)
    * processes `array`: Processes accepting on the above port that received connections from this client.
      * items [ProcessReference](#processreference)
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ClientGroupMembersCollection
* ClientGroupMembersCollection `object`: Collection of ClientGroupMember resources.
  * nextLink `string`: The URL to the next set of resources.
  * value `array`: Collection of ClientGroupMember resources.
    * items [ClientGroupMember](#clientgroupmember)

### ClientGroupMembersCount
* ClientGroupMembersCount `object`: Specifies the number of members in a client group.
  * accuracy **required** [Accuracy](#accuracy)
  * count **required** `integer`: Number of members in the client group. Use this value together with the value of ```accuracy```. If accuracy is `exact` then the value represents the actual number of members in the cloud. When accuracy is `estimated`, the actual number of members is larger than the value of ```count```.
  * endTime **required** `string`: Membership interval start time.
  * groupId **required** `string`: Client Group URI.
  * startTime **required** `string`: Membership interval start time.

### Connection
* Connection `object`: A network connection.
  * properties [ConnectionProperties](#connectionproperties)
  * kind **required** `string` (values: rel:connection, rel:acceptor): Additional resource type qualifier.
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ConnectionCollection
* ConnectionCollection `object`: Collection of Connection resources.
  * nextLink `string`: The URL to the next set of resources.
  * value `array`: Collection of Connection resources.
    * items [Connection](#connection)

### ConnectionFailureState
* ConnectionFailureState `string` (values: ok, failed, mixed): Connection failure state:

### ConnectionProperties
* ConnectionProperties `object`: Properties for a connection resource.
  * failureState [ConnectionFailureState](#connectionfailurestate)
  * serverPort [PortReference](#portreference)
  * destination **required** [ResourceReference](#resourcereference)
  * endTime `string`: Relationship end time.
  * source **required** [ResourceReference](#resourcereference)
  * startTime `string`: Relationship start time.

### CoreResource
* CoreResource `object`: Marker resource for the core Service Map resources
  * etag `string`: Resource ETAG.
  * kind **required** `string` (values: machine, process, port, clientGroup, machineGroup): Additional resource type qualifier.
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Error
* Error `object`: Error details.
  * code **required** `string`: Error code identifying the specific error.
  * message `string`: Error message in the caller's locale.

### ErrorResponse
* ErrorResponse `object`: An error response from the API.
  * error **required** [Error](#error)

### HypervisorConfiguration
* HypervisorConfiguration `object`: Describes the hypervisor configuration of a machine.
  * hypervisorType [HypervisorType](#hypervisortype)
  * nativeHostMachineId `string`: The unique identifier of the hypervisor machine as reported by the underlying virtualization system.

### HypervisorType
* HypervisorType `string` (values: unknown, hyperv): Specifies the hypervisor type of a machine.

### Ipv4NetworkInterface
* Ipv4NetworkInterface `object`: Describes an IPv4 network interface.
  * ipAddress **required** `string`: IPv4 address.
  * subnetMask `string`: IPv4 subnet mask.

### Ipv6NetworkInterface
* Ipv6NetworkInterface `object`: Describes an IPv6 network interface.
  * ipAddress **required** `string`: IPv6 address.

### Liveness
* Liveness `object`: Specifies the contents of a check liveness response.
  * endTime **required** `string`: Liveness interval end time.
  * live **required** `boolean`: `true` if the resource is live during [startTime, endTime], `false` otherwise
  * startTime **required** `string`: Liveness interval start time.

### Machine
* Machine `object`: A machine resource represents a discovered computer system. It can be *monitored*, i.e., a Dependency Agent is running on it, or *discovered*, i.e., its existence was inferred by observing the data stream from monitored machines. As machines change, prior versions of the machine resource are preserved and available for access. A machine is live during an interval of time, if either its Dependency Agent has reported data during (parts) of that interval, or a Dependency agent running on other machines has reported activity associated with the machine.
  * properties `object`: Resource properties.
    * agent [AgentConfiguration](#agentconfiguration)
    * bootTime `string`: UTC date and time when the machine last booted
    * computerName `string`: Name of the machine, e.g., server
    * displayName `string`: Name to use for display purposes
    * fullyQualifiedDomainName `string`: Fully-qualified name of the machine, e.g., server.company.com
    * hypervisor [HypervisorConfiguration](#hypervisorconfiguration)
    * monitoringState [MonitoringState](#monitoringstate)
    * networking [NetworkConfiguration](#networkconfiguration)
    * operatingSystem [OperatingSystemConfiguration](#operatingsystemconfiguration)
    * resources [MachineResourcesConfiguration](#machineresourcesconfiguration)
    * timestamp `string`: UTC date and time when this resource was updated in the system.
    * timezone [Timezone](#timezone)
    * virtualMachine [VirtualMachineConfiguration](#virtualmachineconfiguration)
    * virtualizationState [VirtualizationState](#virtualizationstate)
  * etag `string`: Resource ETAG.
  * kind **required** `string` (values: machine, process, port, clientGroup, machineGroup): Additional resource type qualifier.
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### MachineCollection
* MachineCollection `object`: Collection of Machine resources.
  * nextLink `string`: The URL to the next set of resources.
  * value `array`: Collection of Machine resources.
    * items [Machine](#machine)

### MachineCountsByOperatingSystem
* MachineCountsByOperatingSystem `object`: Machines by operating system.
  * linux **required** `integer`: Number of live Linux machines.
  * windows **required** `integer`: Number of live Windows machines.

### MachineGroup
* MachineGroup `object`: A user-defined logical grouping of machines.
  * etag `string`: Resource ETAG.
  * properties `object`: Resource properties.
    * displayName **required** `string`: User defined name for the group
    * machines `array`: References of the machines in this group. The hints within each reference do not represent the current value of  the corresponding fields. They are a snapshot created during the last time the machine group was updated.
      * items [MachineReferenceWithHints](#machinereferencewithhints)
  * etag `string`: Resource ETAG.
  * kind **required** `string` (values: machine, process, port, clientGroup, machineGroup): Additional resource type qualifier.
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### MachineGroupCollection
* MachineGroupCollection `object`: Collection of Machine Group resources.
  * nextLink `string`: The URL to the next set of resources.
  * value `array`: Collection of Machine Group resources.
    * items [MachineGroup](#machinegroup)

### MachineGroupMapRequest
* MachineGroupMapRequest `object`: Specifies the computation of a machine group dependency map. A machine group dependency map includes all direct dependencies of a group of machines.
  * filterProcesses `boolean`: If true, only processes between grouped machines will be included. Any connections in or out of those processes will be included.
  * machineGroupId **required** `string`: URI of machine group resource for which to generate the map.
  * endTime `string`: Map interval end time.
  * kind **required** `string` (values: map:single-machine-dependency, map:machine-group-dependency): The type of map to create.
  * startTime `string`: Map interval start time.

### MachineRebootStatus
* MachineRebootStatus `string` (values: unknown, rebooted, notRebooted): Specifies if the machine has been rebooted since the installation of the dependency agent.

### MachineReference


### MachineReferenceWithHints
* MachineReferenceWithHints `object`: A machine reference with a hint of the machine's name and operating system.
  * properties `object`: Machine reference with name and os hints.
    * displayNameHint `string`: Last known display name.
    * osFamilyHint [OperatingSystemFamily](#operatingsystemfamily)
  * id **required** `string`: Resource URI.
  * kind **required** `string` (values: ref:machine, ref:machinewithhints, ref:process, ref:port, ref:onmachine): Specifies the sub-class of the reference.
  * name `string`: Resource name.
  * type `string`: Resource type qualifier.

### MachineResourcesConfiguration
* MachineResourcesConfiguration `object`: Describes the resources of a machine.
  * cpuSpeed `integer`: CPU speed in megahertz (Mhz).
  * cpuSpeedAccuracy [Accuracy](#accuracy)
  * cpus `integer`: Number of CPUs.
  * physicalMemory `integer`: Physical memory in megabytes (MB).

### MachinesSummary
* MachinesSummary `object`: A summary of the machines in the workspace.
  * properties [MachinesSummaryProperties](#machinessummaryproperties)

### MachinesSummaryProperties
* MachinesSummaryProperties `object`: Summarizes machines in the workspace.
  * live **required** `integer`: Number of live machines.
  * os **required** [MachineCountsByOperatingSystem](#machinecountsbyoperatingsystem)
  * total **required** `integer`: Total number of machines.
  * endTime **required** `string`: Summary interval end time.
  * startTime **required** `string`: Summary interval start time.

### Map
* Map `object`: A map of resources and relationships between them.
  * edges **required** [MapEdges](#mapedges)
  * nodes **required** [MapNodes](#mapnodes)

### MapEdges
* MapEdges `object`: The edges (relationships) of a map.
  * acceptors `array`: Processes accepting on a port.
    * items [Acceptor](#acceptor)
  * connections `array`: Network connections.
    * items [Connection](#connection)

### MapNodes
* MapNodes `object`: The nodes (entities) of a map.
  * ClientGroups `array`: Client Group resources.
    * items [ClientGroup](#clientgroup)
  * Ports `array`: Port resources.
    * items [Port](#port)
  * machines `array`: Machine resources.
    * items [Machine](#machine)
  * processes `array`: Process resources.
    * items [Process](#process)

### MapRequest
* MapRequest `object`: Specifies the contents of request to generate a map.
  * endTime `string`: Map interval end time.
  * kind **required** `string` (values: map:single-machine-dependency, map:machine-group-dependency): The type of map to create.
  * startTime `string`: Map interval start time.

### MapResponse
* MapResponse `object`: Specified the contents of a map response.
  * endTime **required** `string`: Map interval end time.
  * map **required** [Map](#map)
  * startTime **required** `string`: Map interval start time.

### MonitoringState
* MonitoringState `string` (values: monitored, discovered): Used to specify if a resources is monitored or discovered.

### NetworkConfiguration
* NetworkConfiguration `object`: Describes the network configuration of a machine.
  * defaultIpv4Gateways `array`: Default IPv4 gateways.
    * items `string`: IPv4 address.
  * dnsNames `array`: DNS names associated with the machine.
    * items `string`: DNS name.
  * ipv4Interfaces `array`: IPv4 interfaces.
    * items [Ipv4NetworkInterface](#ipv4networkinterface)
  * ipv6Interfaces `array`: IPv6 interfaces.
    * items [Ipv6NetworkInterface](#ipv6networkinterface)
  * macAddresses `array`: MAC addresses of all active network interfaces.
    * items `string`: MAC address.

### OperatingSystemConfiguration
* OperatingSystemConfiguration `object`: Describes the configuration of the operating system of a machine.
  * bitness **required** [Bitness](#bitness)
  * family **required** [OperatingSystemFamily](#operatingsystemfamily)
  * fullName **required** `string`: Operating system full name.

### OperatingSystemFamily
* OperatingSystemFamily `string` (values: unknown, windows, linux, solaris, aix): Specifies the operating system family, e.g., Linux, Windows, etc.

### Port
* Port `object`: A port resource represents a server port on a machine. The port may be actively *monitored*, i.e., a Dependency Agent is running on its machine, or *discovered*, i.e., its existence was inferred by observing the data stream from monitored machines. A port is live during an interval of time, if that port had associated activity during (parts) of that interval.
  * properties `object`: Resource properties.
    * displayName `string`: Name to use for display purposes.
    * ipAddress `string`: IP address associated with the port. At present only IPv4 addresses are supported.
    * machine [ResourceReference](#resourcereference)
    * monitoringState [MonitoringState](#monitoringstate)
    * portNumber `integer`: Port number.
  * etag `string`: Resource ETAG.
  * kind **required** `string` (values: machine, process, port, clientGroup, machineGroup): Additional resource type qualifier.
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### PortCollection
* PortCollection `object`: Collection of Port resources.
  * nextLink `string`: The URL to the next set of resources.
  * value `array`: Collection of Port resources.
    * items [Port](#port)

### PortReference
* PortReference `object`: Reference to a port.
  * properties `object`: Resource properties.
    * ipAddress `string`: IP address of the port.
    * machine [MachineReference](#machinereference)
    * portNumber `integer`: Port number.
  * id **required** `string`: Resource URI.
  * kind **required** `string` (values: ref:machine, ref:machinewithhints, ref:process, ref:port, ref:onmachine): Specifies the sub-class of the reference.
  * name `string`: Resource name.
  * type `string`: Resource type qualifier.

### Process
* Process `object`: A process resource represents a process running on a machine. The process may be actively *monitored*, i.e., a Dependency Agent is running on its machine, or *discovered*, i.e., its existence was inferred by observing the data stream from monitored machines. A process resource represents a pool of actual operating system resources that share command lines and metadata. As the process pool evolves over time, prior versions of the process resource are preserved and available for access. A process is live during an interval of time, if that process is executing during (parts) of that interval
  * properties `object`: Resource properties.
    * acceptorOf [ResourceReference](#resourcereference)
    * clientOf [ResourceReference](#resourcereference)
    * details [ProcessDetails](#processdetails)
    * displayName `string`: Name to use for display purposes
    * executableName `string`: The name of the process executable
    * machine [ResourceReference](#resourcereference)
    * monitoringState [MonitoringState](#monitoringstate)
    * role `string` (values: webServer, appServer, databaseServer, ldapServer, smbServer): The inferred role of this process based on its name, command line, etc.
    * startTime `string`: UTC date and time when the process started
    * timestamp `string`: UTC date and time when this process resource was updated in the system
    * user [ProcessUser](#processuser)
  * etag `string`: Resource ETAG.
  * kind **required** `string` (values: machine, process, port, clientGroup, machineGroup): Additional resource type qualifier.
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ProcessCollection
* ProcessCollection `object`: Collection of Process resources.
  * nextLink `string`: The URL to the next set of resources.
  * value `array`: Collection of Process resources.
    * items [Process](#process)

### ProcessDetails
* ProcessDetails `object`: Describes process metadata.
  * commandLine `string`: Process command line.
  * companyName `string`: Name of company that created the process executable.
  * description `string`: Process description.
  * executablePath `string`: Process executable path.
  * fileVersion `string`: File version.
  * firstPid `integer`: The Operating System Process Idendifier (PID) of the first process in this process pool.
  * internalName `string`: Internal process name.
  * persistentKey `string`: A unique indentifier for a process, generally resilient to process restart, computed by Service Map.
  * poolId `integer`: Represents the identity of the process pool assigned to the process by Dependency Agent. 
  * productName `string`: Product name.
  * productVersion `string`: Product version.
  * workingDirectory `string`: Process workingDirectory.

### ProcessReference
* ProcessReference `object`: Reference to a process.
  * properties `object`: Resource properties.
    * machine [MachineReference](#machinereference)
  * id **required** `string`: Resource URI.
  * kind **required** `string` (values: ref:machine, ref:machinewithhints, ref:process, ref:port, ref:onmachine): Specifies the sub-class of the reference.
  * name `string`: Resource name.
  * type `string`: Resource type qualifier.

### ProcessUser
* ProcessUser `object`: Describes the user under which a process is running.
  * userDomain `string`: Domain name for the user.
  * userName `string`: User name under which the process is running.

### Relationship
* Relationship `object`: A typed relationship between two entities.
  * kind **required** `string` (values: rel:connection, rel:acceptor): Additional resource type qualifier.
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RelationshipProperties
* RelationshipProperties `object`: Relationship properties.
  * destination **required** [ResourceReference](#resourcereference)
  * endTime `string`: Relationship end time.
  * source **required** [ResourceReference](#resourcereference)
  * startTime `string`: Relationship start time.

### Resource
* Resource `object`: Resource model definition.
  * id `string`: Resource identifier.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ResourceReference
* ResourceReference `object`: Represents a reference to another resource.
  * id **required** `string`: Resource URI.
  * kind **required** `string` (values: ref:machine, ref:machinewithhints, ref:process, ref:port, ref:onmachine): Specifies the sub-class of the reference.
  * name `string`: Resource name.
  * type `string`: Resource type qualifier.

### SingleMachineDependencyMapRequest
* SingleMachineDependencyMapRequest `object`: Specifies the computation of a single server dependency map. A single server dependency map includes all direct dependencies of a given machine.
  * machineId **required** `string`: URI of machine resource for which to generate the map.
  * endTime `string`: Map interval end time.
  * kind **required** `string` (values: map:single-machine-dependency, map:machine-group-dependency): The type of map to create.
  * startTime `string`: Map interval start time.

### Summary


### SummaryProperties
* SummaryProperties `object`: Base for all summaries.
  * endTime **required** `string`: Summary interval end time.
  * startTime **required** `string`: Summary interval start time.

### Timezone
* Timezone `object`: Describes a timezone.
  * fullName `string`: Timezone full name.

### VirtualMachineConfiguration
* VirtualMachineConfiguration `object`: Describes the virtualizaton-related configuration of a machine.
  * nativeHostMachineId `string`: The unique identifier of the host of this virtual machine as reported by the underlying virtualization system.
  * nativeMachineId `string`: The unique identifier of the virtual machine as reported by the underlying virtualization sytem.
  * virtualMachineName `string`: The Name of the virtual machine.
  * virtualMachineType [VirtualMachineType](#virtualmachinetype)

### VirtualMachineType
* VirtualMachineType `string` (values: unknown, hyperv, ldom, lpar, vmware, virtualPc, xen): Specifies the virtualization type of a machine.

### VirtualizationState
* VirtualizationState `string` (values: unknown, physical, virtual, hypervisor): Specifies if the machine is physical, virtual, hypervisor, or unknown.


