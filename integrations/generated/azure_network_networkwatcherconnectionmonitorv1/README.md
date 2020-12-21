# @datafire/azure_network_networkwatcherconnectionmonitorv1

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_networkwatcherconnectionmonitorv1
```
```js
let azure_network_networkwatcherconnectionmonitorv1 = require('@datafire/azure_network_networkwatcherconnectionmonitorv1').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### ConnectionMonitors_List
Lists all connection monitors for the specified Network Watcher.


```js
azure_network_networkwatcherconnectionmonitorv1.ConnectionMonitors_List({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing Network Watcher.
  * networkWatcherName **required** `string`: The name of the Network Watcher resource.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionMonitorListResult](#connectionmonitorlistresult)

### ConnectionMonitors_Delete
Deletes the specified connection monitor.


```js
azure_network_networkwatcherconnectionmonitorv1.ConnectionMonitors_Delete({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "connectionMonitorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing Network Watcher.
  * networkWatcherName **required** `string`: The name of the Network Watcher resource.
  * connectionMonitorName **required** `string`: The name of the connection monitor.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ConnectionMonitors_Get
Gets a connection monitor by name.


```js
azure_network_networkwatcherconnectionmonitorv1.ConnectionMonitors_Get({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "connectionMonitorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing Network Watcher.
  * networkWatcherName **required** `string`: The name of the Network Watcher resource.
  * connectionMonitorName **required** `string`: The name of the connection monitor.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionMonitorResult](#connectionmonitorresult)

### ConnectionMonitors_UpdateTags
Update tags of the specified connection monitor.


```js
azure_network_networkwatcherconnectionmonitorv1.ConnectionMonitors_UpdateTags({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "connectionMonitorName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * connectionMonitorName **required** `string`: The name of the connection monitor.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionMonitorResult](#connectionmonitorresult)

### ConnectionMonitors_CreateOrUpdate
Create or update a connection monitor.


```js
azure_network_networkwatcherconnectionmonitorv1.ConnectionMonitors_CreateOrUpdate({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "connectionMonitorName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing Network Watcher.
  * networkWatcherName **required** `string`: The name of the Network Watcher resource.
  * connectionMonitorName **required** `string`: The name of the connection monitor.
  * parameters **required** [ConnectionMonitor](#connectionmonitor)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionMonitorResult](#connectionmonitorresult)

### ConnectionMonitors_Query
Query a snapshot of the most recent connection states.


```js
azure_network_networkwatcherconnectionmonitorv1.ConnectionMonitors_Query({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "connectionMonitorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing Network Watcher.
  * networkWatcherName **required** `string`: The name of the Network Watcher resource.
  * connectionMonitorName **required** `string`: The name given to the connection monitor.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectionMonitorQueryResult](#connectionmonitorqueryresult)

### ConnectionMonitors_Start
Starts the specified connection monitor.


```js
azure_network_networkwatcherconnectionmonitorv1.ConnectionMonitors_Start({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "connectionMonitorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing Network Watcher.
  * networkWatcherName **required** `string`: The name of the Network Watcher resource.
  * connectionMonitorName **required** `string`: The name of the connection monitor.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ConnectionMonitors_Stop
Stops the specified connection monitor.


```js
azure_network_networkwatcherconnectionmonitorv1.ConnectionMonitors_Stop({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "connectionMonitorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing Network Watcher.
  * networkWatcherName **required** `string`: The name of the Network Watcher resource.
  * connectionMonitorName **required** `string`: The name of the connection monitor.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

### ConnectionMonitor
* ConnectionMonitor `object`: Parameters that define the operation to create a connection monitor.
  * location `string`: Connection monitor location.
  * properties **required** [ConnectionMonitorParameters](#connectionmonitorparameters)
  * tags `object`: Connection monitor tags.

### ConnectionMonitorDestination
* ConnectionMonitorDestination `object`: Describes the destination of connection monitor.
  * address `string`: Address of the connection monitor destination (IP or domain name).
  * port `integer`: The destination port used by connection monitor.
  * resourceId `string`: The ID of the resource used as the destination by connection monitor.

### ConnectionMonitorListResult
* ConnectionMonitorListResult `object`: List of connection monitors.
  * value `array`: Information about connection monitors.
    * items [ConnectionMonitorResult](#connectionmonitorresult)

### ConnectionMonitorParameters
* ConnectionMonitorParameters `object`: Parameters that define the operation to create a connection monitor.
  * autoStart `boolean`: Determines if the connection monitor will start automatically once created.
  * destination **required** [ConnectionMonitorDestination](#connectionmonitordestination)
  * monitoringIntervalInSeconds `integer`: Monitoring interval in seconds.
  * source **required** [ConnectionMonitorSource](#connectionmonitorsource)

### ConnectionMonitorQueryResult
* ConnectionMonitorQueryResult `object`: List of connection states snapshots.
  * sourceStatus `string` (values: Unknown, Active, Inactive): Status of connection monitor source.
  * states `array`: Information about connection states.
    * items [ConnectionStateSnapshot](#connectionstatesnapshot)

### ConnectionMonitorResult
* ConnectionMonitorResult `object`: Information about the connection monitor.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * id `string`: ID of the connection monitor.
  * location `string`: Connection monitor location.
  * name `string`: Name of the connection monitor.
  * properties [ConnectionMonitorResultProperties](#connectionmonitorresultproperties)
  * tags `object`: Connection monitor tags.
  * type `string`: Connection monitor type.

### ConnectionMonitorResultProperties
* ConnectionMonitorResultProperties `object`: Describes the properties of a connection monitor.
  * monitoringStatus `string`: The monitoring status of the connection monitor.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * startTime `string`: The date and time when the connection monitor was started.
  * autoStart `boolean`: Determines if the connection monitor will start automatically once created.
  * destination **required** [ConnectionMonitorDestination](#connectionmonitordestination)
  * monitoringIntervalInSeconds `integer`: Monitoring interval in seconds.
  * source **required** [ConnectionMonitorSource](#connectionmonitorsource)

### ConnectionMonitorSource
* ConnectionMonitorSource `object`: Describes the source of connection monitor.
  * port `integer`: The source port used by connection monitor.
  * resourceId **required** `string`: The ID of the resource used as the source by connection monitor.

### ConnectionStateSnapshot
* ConnectionStateSnapshot `object`: Connection state snapshot.
  * avgLatencyInMs `integer`: Average latency in ms.
  * connectionState `string` (values: Reachable, Unreachable, Unknown): The connection state.
  * endTime `string`: The end time of the connection snapshot.
  * evaluationState `string` (values: NotStarted, InProgress, Completed): Connectivity analysis evaluation state.
  * hops `array`: List of hops between the source and the destination.
    * items `object`: Information about a hop between the source and the destination.
      * address `string`: The IP address of the hop.
      * id `string`: The ID of the hop.
      * issues `array`: List of issues.
        * items `object`: Information about an issue encountered in the process of checking for connectivity.
          * context `array`: Provides additional context on the issue.
          * origin `string` (values: Local, Inbound, Outbound): The origin of the issue.
          * severity `string` (values: Error, Warning): The severity of the issue.
          * type `string` (values: Unknown, AgentStopped, GuestFirewall, DnsResolution, SocketBind, NetworkSecurityRule, UserDefinedRoute, PortThrottled, Platform): The type of issue.
      * nextHopIds `array`: List of next hop identifiers.
        * items `string`
      * resourceId `string`: The ID of the resource corresponding to this hop.
      * type `string`: The type of the hop.
  * maxLatencyInMs `integer`: Maximum latency in ms.
  * minLatencyInMs `integer`: Minimum latency in ms.
  * probesFailed `integer`: The number of failed probes.
  * probesSent `integer`: The number of sent probes.
  * startTime `string`: The start time of the connection snapshot.


