# @datafire/azure_network_networkwatcher

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_networkwatcher
```
```js
let azure_network_networkwatcher = require('@datafire/azure_network_networkwatcher').create({
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

### NetworkWatchers_ListAll
Gets all network watchers by subscription.


```js
azure_network_networkwatcher.NetworkWatchers_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkWatcherListResult](#networkwatcherlistresult)

### NetworkWatchers_List
Gets all network watchers by resource group.


```js
azure_network_networkwatcher.NetworkWatchers_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkWatcherListResult](#networkwatcherlistresult)

### NetworkWatchers_Delete
Deletes the specified network watcher resource.


```js
azure_network_networkwatcher.NetworkWatchers_Delete({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NetworkWatchers_Get
Gets the specified network watcher by resource group.


```js
azure_network_networkwatcher.NetworkWatchers_Get({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkWatcher](#networkwatcher)

### NetworkWatchers_UpdateTags
Updates a network watcher tags.


```js
azure_network_networkwatcher.NetworkWatchers_UpdateTags({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkWatcher](#networkwatcher)

### NetworkWatchers_CreateOrUpdate
Creates or updates a network watcher in the specified resource group.


```js
azure_network_networkwatcher.NetworkWatchers_CreateOrUpdate({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * parameters **required** [NetworkWatcher](#networkwatcher)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkWatcher](#networkwatcher)

### NetworkWatchers_ListAvailableProviders
Lists all available internet service providers for a specified Azure region.


```js
azure_network_networkwatcher.NetworkWatchers_ListAvailableProviders({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the network watcher resource group.
  * networkWatcherName **required** `string`: The name of the network watcher resource.
  * parameters **required** [AvailableProvidersListParameters](#availableproviderslistparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AvailableProvidersList](#availableproviderslist)

### NetworkWatchers_GetAzureReachabilityReport
Gets the relative latency score for internet service providers from a specified location to Azure regions.


```js
azure_network_networkwatcher.NetworkWatchers_GetAzureReachabilityReport({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the network watcher resource group.
  * networkWatcherName **required** `string`: The name of the network watcher resource.
  * parameters **required** [AzureReachabilityReportParameters](#azurereachabilityreportparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AzureReachabilityReport](#azurereachabilityreport)

### NetworkWatchers_SetFlowLogConfiguration
Configures flow log and traffic analytics (optional) on a specified resource.


```js
azure_network_networkwatcher.NetworkWatchers_SetFlowLogConfiguration({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the network watcher resource group.
  * networkWatcherName **required** `string`: The name of the network watcher resource.
  * parameters **required** [FlowLogInformation](#flowloginformation)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [FlowLogInformation](#flowloginformation)

### NetworkWatchers_CheckConnectivity
Verifies the possibility of establishing a direct TCP connection from a virtual machine to a given endpoint including another VM or an arbitrary remote server.


```js
azure_network_networkwatcher.NetworkWatchers_CheckConnectivity({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the network watcher resource group.
  * networkWatcherName **required** `string`: The name of the network watcher resource.
  * parameters **required** [ConnectivityParameters](#connectivityparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectivityInformation](#connectivityinformation)

### NetworkWatchers_VerifyIPFlow
Verify IP flow from the specified VM to a location given the currently configured NSG rules.


```js
azure_network_networkwatcher.NetworkWatchers_VerifyIPFlow({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * parameters **required** [VerificationIPFlowParameters](#verificationipflowparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VerificationIPFlowResult](#verificationipflowresult)

### NetworkWatchers_GetNetworkConfigurationDiagnostic
Gets Network Configuration Diagnostic data to help customers understand and debug network behavior. It provides detailed information on what security rules were applied to a specified traffic flow and the result of evaluating these rules. Customers must provide details of a flow like source, destination, protocol, etc. The API returns whether traffic was allowed or denied, the rules evaluated for the specified flow and the evaluation results.


```js
azure_network_networkwatcher.NetworkWatchers_GetNetworkConfigurationDiagnostic({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * parameters **required** [NetworkConfigurationDiagnosticParameters](#networkconfigurationdiagnosticparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkConfigurationDiagnosticResponse](#networkconfigurationdiagnosticresponse)

### NetworkWatchers_GetNextHop
Gets the next hop from the specified VM.


```js
azure_network_networkwatcher.NetworkWatchers_GetNextHop({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * parameters **required** [NextHopParameters](#nexthopparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NextHopResult](#nexthopresult)

### PacketCaptures_List
Lists all packet capture sessions within the specified resource group.


```js
azure_network_networkwatcher.PacketCaptures_List({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the Network Watcher resource.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PacketCaptureListResult](#packetcapturelistresult)

### PacketCaptures_Delete
Deletes the specified packet capture session.


```js
azure_network_networkwatcher.PacketCaptures_Delete({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "packetCaptureName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * packetCaptureName **required** `string`: The name of the packet capture session.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### PacketCaptures_Get
Gets a packet capture session by name.


```js
azure_network_networkwatcher.PacketCaptures_Get({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "packetCaptureName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * packetCaptureName **required** `string`: The name of the packet capture session.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PacketCaptureResult](#packetcaptureresult)

### PacketCaptures_Create
Create and start a packet capture on the specified VM.


```js
azure_network_networkwatcher.PacketCaptures_Create({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "packetCaptureName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * packetCaptureName **required** `string`: The name of the packet capture session.
  * parameters **required** [PacketCapture](#packetcapture)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PacketCaptureResult](#packetcaptureresult)

### PacketCaptures_GetStatus
Query the status of a running packet capture session.


```js
azure_network_networkwatcher.PacketCaptures_GetStatus({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "packetCaptureName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the Network Watcher resource.
  * packetCaptureName **required** `string`: The name given to the packet capture session.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PacketCaptureQueryStatusResult](#packetcapturequerystatusresult)

### PacketCaptures_Stop
Stops a specified packet capture session.


```js
azure_network_networkwatcher.PacketCaptures_Stop({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "packetCaptureName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * packetCaptureName **required** `string`: The name of the packet capture session.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NetworkWatchers_GetFlowLogStatus
Queries status of flow log and traffic analytics (optional) on a specified resource.


```js
azure_network_networkwatcher.NetworkWatchers_GetFlowLogStatus({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the network watcher resource group.
  * networkWatcherName **required** `string`: The name of the network watcher resource.
  * parameters **required** [FlowLogStatusParameters](#flowlogstatusparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [FlowLogInformation](#flowloginformation)

### NetworkWatchers_GetTroubleshootingResult
Get the last completed troubleshooting result on a specified resource.


```js
azure_network_networkwatcher.NetworkWatchers_GetTroubleshootingResult({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher resource.
  * parameters **required** [QueryTroubleshootingParameters](#querytroubleshootingparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TroubleshootingResult](#troubleshootingresult)

### NetworkWatchers_GetVMSecurityRules
Gets the configured and effective security group rules on the specified VM.


```js
azure_network_networkwatcher.NetworkWatchers_GetVMSecurityRules({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * parameters **required** [SecurityGroupViewParameters](#securitygroupviewparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SecurityGroupViewResult](#securitygroupviewresult)

### NetworkWatchers_GetTopology
Gets the current network topology by resource group.


```js
azure_network_networkwatcher.NetworkWatchers_GetTopology({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher.
  * parameters **required** [TopologyParameters](#topologyparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Topology](#topology)

### NetworkWatchers_GetTroubleshooting
Initiate troubleshooting on a specified resource.


```js
azure_network_networkwatcher.NetworkWatchers_GetTroubleshooting({
  "resourceGroupName": "",
  "networkWatcherName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * networkWatcherName **required** `string`: The name of the network watcher resource.
  * parameters **required** [TroubleshootingParameters](#troubleshootingparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TroubleshootingResult](#troubleshootingresult)



## Definitions

### AvailableProvidersList
* AvailableProvidersList `object`: List of available countries with details.
  * countries **required** `array`: List of available countries.
    * items [AvailableProvidersListCountry](#availableproviderslistcountry)

### AvailableProvidersListCity
* AvailableProvidersListCity `object`: City or town details.
  * cityName `string`: The city or town name.
  * providers `array`: A list of Internet service providers.
    * items `string`

### AvailableProvidersListCountry
* AvailableProvidersListCountry `object`: Country details.
  * countryName `string`: The country name.
  * providers `array`: A list of Internet service providers.
    * items `string`
  * states `array`: List of available states in the country.
    * items [AvailableProvidersListState](#availableprovidersliststate)

### AvailableProvidersListParameters
* AvailableProvidersListParameters `object`: Constraints that determine the list of available Internet service providers.
  * azureLocations `array`: A list of Azure regions.
    * items `string`
  * city `string`: The city or town for available providers list.
  * country `string`: The country for available providers list.
  * state `string`: The state for available providers list.

### AvailableProvidersListState
* AvailableProvidersListState `object`: State details.
  * cities `array`: List of available cities or towns in the state.
    * items [AvailableProvidersListCity](#availableproviderslistcity)
  * providers `array`: A list of Internet service providers.
    * items `string`
  * stateName `string`: The state name.

### AzureReachabilityReport
* AzureReachabilityReport `object`: Azure reachability report details.
  * aggregationLevel **required** `string`: The aggregation level of Azure reachability report. Can be Country, State or City.
  * providerLocation **required** [AzureReachabilityReportLocation](#azurereachabilityreportlocation)
  * reachabilityReport **required** `array`: List of Azure reachability report items.
    * items [AzureReachabilityReportItem](#azurereachabilityreportitem)

### AzureReachabilityReportItem
* AzureReachabilityReportItem `object`: Azure reachability report details for a given provider location.
  * azureLocation `string`: The Azure region.
  * latencies `array`: List of latency details for each of the time series.
    * items [AzureReachabilityReportLatencyInfo](#azurereachabilityreportlatencyinfo)
  * provider `string`: The Internet service provider.

### AzureReachabilityReportLatencyInfo
* AzureReachabilityReportLatencyInfo `object`: Details on latency for a time series.
  * score `integer`: The relative latency score between 1 and 100, higher values indicating a faster connection.
  * timeStamp `string`: The time stamp.

### AzureReachabilityReportLocation
* AzureReachabilityReportLocation `object`: Parameters that define a geographic location.
  * city `string`: The name of the city or town.
  * country **required** `string`: The name of the country.
  * state `string`: The name of the state.

### AzureReachabilityReportParameters
* AzureReachabilityReportParameters `object`: Geographic and time constraints for Azure reachability report.
  * azureLocations `array`: Optional Azure regions to scope the query to.
    * items `string`
  * endTime **required** `string`: The end time for the Azure reachability report.
  * providerLocation **required** [AzureReachabilityReportLocation](#azurereachabilityreportlocation)
  * providers `array`: List of Internet service providers.
    * items `string`
  * startTime **required** `string`: The start time for the Azure reachability report.

### ConnectivityDestination
* ConnectivityDestination `object`: Parameters that define destination of connection.
  * address `string`: The IP address or URI the resource to which a connection attempt will be made.
  * port `integer`: Port on which check connectivity will be performed.
  * resourceId `string`: The ID of the resource to which a connection attempt will be made.

### ConnectivityHop
* ConnectivityHop `object`: Information about a hop between the source and the destination.
  * address `string`: The IP address of the hop.
  * id `string`: The ID of the hop.
  * issues `array`: List of issues.
    * items [ConnectivityIssue](#connectivityissue)
  * nextHopIds `array`: List of next hop identifiers.
    * items `string`
  * resourceId `string`: The ID of the resource corresponding to this hop.
  * type `string`: The type of the hop.

### ConnectivityInformation
* ConnectivityInformation `object`: Information on the connectivity status.
  * avgLatencyInMs `integer`: Average latency in milliseconds.
  * connectionStatus `string` (values: Unknown, Connected, Disconnected, Degraded): The connection status.
  * hops `array`: List of hops between the source and the destination.
    * items [ConnectivityHop](#connectivityhop)
  * maxLatencyInMs `integer`: Maximum latency in milliseconds.
  * minLatencyInMs `integer`: Minimum latency in milliseconds.
  * probesFailed `integer`: Number of failed probes.
  * probesSent `integer`: Total number of probes sent.

### ConnectivityIssue
* ConnectivityIssue `object`: Information about an issue encountered in the process of checking for connectivity.
  * context `array`: Provides additional context on the issue.
    * items [IssueContext](#issuecontext)
  * origin `string` (values: Local, Inbound, Outbound): The origin of the issue.
  * severity `string` (values: Error, Warning): The severity of the issue.
  * type `string` (values: Unknown, AgentStopped, GuestFirewall, DnsResolution, SocketBind, NetworkSecurityRule, UserDefinedRoute, PortThrottled, Platform): The type of issue.

### ConnectivityParameters
* ConnectivityParameters `object`: Parameters that determine how the connectivity check will be performed.
  * destination **required** [ConnectivityDestination](#connectivitydestination)
  * protocol `string` (values: Tcp, Http, Https, Icmp): Network protocol.
  * protocolConfiguration [ProtocolConfiguration](#protocolconfiguration)
  * source **required** [ConnectivitySource](#connectivitysource)

### ConnectivitySource
* ConnectivitySource `object`: Parameters that define the source of the connection.
  * port `integer`: The source port from which a connectivity check will be performed.
  * resourceId **required** `string`: The ID of the resource from which a connectivity check will be initiated.

### Direction
* Direction `string` (values: Inbound, Outbound): The direction of the traffic.

### ErrorResponse
* ErrorResponse `object`: The error object.
  * error `object`: Common error details representation.
    * code `string`: Error code.
    * message `string`: Error message.
    * target `string`: Error target.

### EvaluatedNetworkSecurityGroup
* EvaluatedNetworkSecurityGroup `object`: Results of network security group evaluation.
  * appliedTo `string`: Resource ID of nic or subnet to which network security group is applied.
  * matchedRule [MatchedRule](#matchedrule)
  * networkSecurityGroupId `string`: Network security group ID.
  * rulesEvaluationResult `array`: List of network security rules evaluation results.
    * items [NetworkSecurityRulesEvaluationResult](#networksecurityrulesevaluationresult)

### FlowLogFormatParameters
* FlowLogFormatParameters `object`: Parameters that define the flow log format.
  * type `string` (values: JSON): The file type of flow log.
  * version `integer`: The version (revision) of the flow log.

### FlowLogInformation
* FlowLogInformation `object`: Information on the configuration of flow log and traffic analytics (optional) .
  * flowAnalyticsConfiguration [TrafficAnalyticsProperties](#trafficanalyticsproperties)
  * properties **required** [FlowLogProperties](#flowlogproperties)
  * targetResourceId **required** `string`: The ID of the resource to configure for flow log and traffic analytics (optional) .

### FlowLogProperties
* FlowLogProperties `object`: Parameters that define the configuration of flow log.
  * enabled **required** `boolean`: Flag to enable/disable flow logging.
  * format [FlowLogFormatParameters](#flowlogformatparameters)
  * retentionPolicy [RetentionPolicyParameters](#retentionpolicyparameters)
  * storageId **required** `string`: ID of the storage account which is used to store the flow log.

### FlowLogStatusParameters
* FlowLogStatusParameters `object`: Parameters that define a resource to query flow log and traffic analytics (optional) status.
  * targetResourceId **required** `string`: The target resource where getting the flow log and traffic analytics (optional) status.

### HTTPConfiguration
* HTTPConfiguration `object`: HTTP configuration of the connectivity check.
  * headers `array`: List of HTTP headers.
    * items [HTTPHeader](#httpheader)
  * method `string` (values: Get): HTTP method.
  * validStatusCodes `array`: Valid status codes.
    * items `integer`

### HTTPHeader
* HTTPHeader `object`: Describes the HTTP header.
  * name `string`: The name in HTTP header.
  * value `string`: The value in HTTP header.

### IssueContext
* IssueContext `object`: A key-value pair that provides additional context on the issue.

### MatchedRule
* MatchedRule `object`: Matched rule.
  * action `string`: The network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'.
  * ruleName `string`: Name of the matched network security rule.

### NetworkConfigurationDiagnosticParameters
* NetworkConfigurationDiagnosticParameters `object`: Parameters to get network configuration diagnostic.
  * profiles **required** `array`: List of network configuration diagnostic profiles.
    * items [NetworkConfigurationDiagnosticProfile](#networkconfigurationdiagnosticprofile)
  * targetResourceId **required** `string`: The ID of the target resource to perform network configuration diagnostic. Valid options are VM, NetworkInterface, VMSS/NetworkInterface and Application Gateway.
  * verbosityLevel `string` (values: Normal, Minimum, Full): Verbosity level.

### NetworkConfigurationDiagnosticProfile
* NetworkConfigurationDiagnosticProfile `object`: Parameters to compare with network configuration.
  * destination **required** `string`: Traffic destination. Accepted values are: '*', IP Address/CIDR, Service Tag.
  * destinationPort **required** `string`: Traffic destination port. Accepted values are '*', port (for example, 3389) and port range (for example, 80-100).
  * direction **required** [Direction](#direction)
  * protocol **required** `string`: Protocol to be verified on. Accepted values are '*', TCP, UDP.
  * source **required** `string`: Traffic source. Accepted values are '*', IP Address/CIDR, Service Tag.

### NetworkConfigurationDiagnosticResponse
* NetworkConfigurationDiagnosticResponse `object`: Results of network configuration diagnostic on the target resource.
  * results `array`: List of network configuration diagnostic results.
    * items [NetworkConfigurationDiagnosticResult](#networkconfigurationdiagnosticresult)

### NetworkConfigurationDiagnosticResult
* NetworkConfigurationDiagnosticResult `object`: Network configuration diagnostic result corresponded to provided traffic query.
  * networkSecurityGroupResult [NetworkSecurityGroupResult](#networksecuritygroupresult)
  * profile [NetworkConfigurationDiagnosticProfile](#networkconfigurationdiagnosticprofile)

### NetworkInterfaceAssociation
* NetworkInterfaceAssociation `object`: Network interface and its custom security rules.
  * id `string`: Network interface ID.
  * securityRules `array`: Collection of custom security rules.
    * items `object`: Network security rule.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Security rule resource.
        * access **required** `string` (values: Allow, Deny): Whether network traffic is allowed or denied.
        * description `string`: A description for this rule. Restricted to 140 chars.
        * destinationAddressPrefix `string`: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
        * destinationAddressPrefixes `array`: The destination address prefixes. CIDR or destination IP ranges.
          * items `string`
        * destinationApplicationSecurityGroups `array`: The application security group specified as destination.
          * items `object`: An application security group in a resource group.
        * destinationPortRange `string`: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        * destinationPortRanges `array`: The destination port ranges.
          * items `string`: The destination port.
        * direction **required** `string` (values: Inbound, Outbound): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
        * priority `integer`: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
        * protocol **required** `string` (values: Tcp, Udp, Icmp, Esp, *): Network protocol this rule applies to.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * sourceAddressPrefix `string`: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
        * sourceAddressPrefixes `array`: The CIDR or source IP ranges.
          * items `string`
        * sourceApplicationSecurityGroups `array`: The application security group specified as source.
          * items `object`: An application security group in a resource group.
        * sourcePortRange `string`: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        * sourcePortRanges `array`: The source port ranges.
          * items `string`: The source port.
      * id `string`: Resource ID.

### NetworkSecurityGroupResult
* NetworkSecurityGroupResult `object`: Network configuration diagnostic result corresponded provided traffic query.
  * evaluatedNetworkSecurityGroups `array`: List of results network security groups diagnostic.
    * items [EvaluatedNetworkSecurityGroup](#evaluatednetworksecuritygroup)
  * securityRuleAccessResult `string` (values: Allow, Deny): Whether network traffic is allowed or denied.

### NetworkSecurityRulesEvaluationResult
* NetworkSecurityRulesEvaluationResult `object`: Network security rules evaluation result.
  * destinationMatched `boolean`: Value indicating whether destination is matched.
  * destinationPortMatched `boolean`: Value indicating whether destination port is matched.
  * name `string`: Name of the network security rule.
  * protocolMatched `boolean`: Value indicating whether protocol is matched.
  * sourceMatched `boolean`: Value indicating whether source is matched.
  * sourcePortMatched `boolean`: Value indicating whether source port is matched.

### NetworkWatcher
* NetworkWatcher `object`: Network watcher in a resource group.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [NetworkWatcherPropertiesFormat](#networkwatcherpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### NetworkWatcherListResult
* NetworkWatcherListResult `object`: Response for ListNetworkWatchers API service call.
  * value `array`: List of network watcher resources.
    * items [NetworkWatcher](#networkwatcher)

### NetworkWatcherPropertiesFormat
* NetworkWatcherPropertiesFormat `object`: The network watcher properties.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.

### NextHopParameters
* NextHopParameters `object`: Parameters that define the source and destination endpoint.
  * destinationIPAddress **required** `string`: The destination IP address.
  * sourceIPAddress **required** `string`: The source IP address.
  * targetNicResourceId `string`: The NIC ID. (If VM has multiple NICs and IP forwarding is enabled on any of the nics, then this parameter must be specified. Otherwise optional).
  * targetResourceId **required** `string`: The resource identifier of the target resource against which the action is to be performed.

### NextHopResult
* NextHopResult `object`: The information about next hop from the specified VM.
  * nextHopIpAddress `string`: Next hop IP Address.
  * nextHopType `string` (values: Internet, VirtualAppliance, VirtualNetworkGateway, VnetLocal, HyperNetGateway, None): Next hop type.
  * routeTableId `string`: The resource identifier for the route table associated with the route being returned. If the route being returned does not correspond to any user created routes then this field will be the string 'System Route'.

### PacketCapture
* PacketCapture `object`: Parameters that define the create packet capture operation.
  * properties **required** [PacketCaptureParameters](#packetcaptureparameters)

### PacketCaptureFilter
* PacketCaptureFilter `object`: Filter that is applied to packet capture request. Multiple filters can be applied.
  * localIPAddress `string`: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
  * localPort `string`: Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
  * protocol `string` (values: TCP, UDP, Any): Protocol to be filtered on.
  * remoteIPAddress `string`: Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
  * remotePort `string`: Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.

### PacketCaptureListResult
* PacketCaptureListResult `object`: List of packet capture sessions.
  * value `array`: Information about packet capture sessions.
    * items [PacketCaptureResult](#packetcaptureresult)

### PacketCaptureParameters
* PacketCaptureParameters `object`: Parameters that define the create packet capture operation.
  * bytesToCapturePerPacket `integer`: Number of bytes captured per packet, the remaining bytes are truncated.
  * filters `array`: A list of packet capture filters.
    * items [PacketCaptureFilter](#packetcapturefilter)
  * storageLocation **required** [PacketCaptureStorageLocation](#packetcapturestoragelocation)
  * target **required** `string`: The ID of the targeted resource, only VM is currently supported.
  * timeLimitInSeconds `integer`: Maximum duration of the capture session in seconds.
  * totalBytesPerSession `integer`: Maximum size of the capture output.

### PacketCaptureQueryStatusResult
* PacketCaptureQueryStatusResult `object`: Status of packet capture session.
  * captureStartTime `string`: The start time of the packet capture session.
  * id `string`: The ID of the packet capture resource.
  * name `string`: The name of the packet capture resource.
  * packetCaptureError `array`: List of errors of packet capture session.
    * items `string` (values: InternalError, AgentStopped, CaptureFailed, LocalFileFailed, StorageFailed)
  * packetCaptureStatus `string` (values: NotStarted, Running, Stopped, Error, Unknown): The status of the packet capture session.
  * stopReason `string`: The reason the current packet capture session was stopped.

### PacketCaptureResult
* PacketCaptureResult `object`: Information about packet capture session.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * id `string`: ID of the packet capture operation.
  * name `string`: Name of the packet capture session.
  * properties [PacketCaptureResultProperties](#packetcaptureresultproperties)

### PacketCaptureResultProperties
* PacketCaptureResultProperties `object`: Describes the properties of a packet capture session.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * bytesToCapturePerPacket `integer`: Number of bytes captured per packet, the remaining bytes are truncated.
  * filters `array`: A list of packet capture filters.
    * items [PacketCaptureFilter](#packetcapturefilter)
  * storageLocation **required** [PacketCaptureStorageLocation](#packetcapturestoragelocation)
  * target **required** `string`: The ID of the targeted resource, only VM is currently supported.
  * timeLimitInSeconds `integer`: Maximum duration of the capture session in seconds.
  * totalBytesPerSession `integer`: Maximum size of the capture output.

### PacketCaptureStorageLocation
* PacketCaptureStorageLocation `object`: Describes the storage location for a packet capture session.
  * filePath `string`: A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional.
  * storageId `string`: The ID of the storage account to save the packet capture session. Required if no local file path is provided.
  * storagePath `string`: The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture.

### ProtocolConfiguration
* ProtocolConfiguration `object`: Configuration of the protocol.
  * HTTPConfiguration [HTTPConfiguration](#httpconfiguration)

### QueryTroubleshootingParameters
* QueryTroubleshootingParameters `object`: Parameters that define the resource to query the troubleshooting result.
  * targetResourceId **required** `string`: The target resource ID to query the troubleshooting result.

### RetentionPolicyParameters
* RetentionPolicyParameters `object`: Parameters that define the retention policy for flow log.
  * days `integer`: Number of days to retain flow log records.
  * enabled `boolean`: Flag to enable/disable retention.

### SecurityGroupNetworkInterface
* SecurityGroupNetworkInterface `object`: Network interface and all its associated security rules.
  * id `string`: ID of the network interface.
  * securityRuleAssociations [SecurityRuleAssociations](#securityruleassociations)

### SecurityGroupViewParameters
* SecurityGroupViewParameters `object`: Parameters that define the VM to check security groups for.
  * targetResourceId **required** `string`: ID of the target VM.

### SecurityGroupViewResult
* SecurityGroupViewResult `object`: The information about security rules applied to the specified VM.
  * networkInterfaces `array`: List of network interfaces on the specified VM.
    * items [SecurityGroupNetworkInterface](#securitygroupnetworkinterface)

### SecurityRuleAssociations
* SecurityRuleAssociations `object`: All security rules associated with the network interface.
  * defaultSecurityRules `array`: Collection of default security rules of the network security group.
    * items `object`: Network security rule.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Security rule resource.
        * access **required** `string` (values: Allow, Deny): Whether network traffic is allowed or denied.
        * description `string`: A description for this rule. Restricted to 140 chars.
        * destinationAddressPrefix `string`: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
        * destinationAddressPrefixes `array`: The destination address prefixes. CIDR or destination IP ranges.
          * items `string`
        * destinationApplicationSecurityGroups `array`: The application security group specified as destination.
          * items `object`: An application security group in a resource group.
        * destinationPortRange `string`: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        * destinationPortRanges `array`: The destination port ranges.
          * items `string`: The destination port.
        * direction **required** `string` (values: Inbound, Outbound): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
        * priority `integer`: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
        * protocol **required** `string` (values: Tcp, Udp, Icmp, Esp, *): Network protocol this rule applies to.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * sourceAddressPrefix `string`: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
        * sourceAddressPrefixes `array`: The CIDR or source IP ranges.
          * items `string`
        * sourceApplicationSecurityGroups `array`: The application security group specified as source.
          * items `object`: An application security group in a resource group.
        * sourcePortRange `string`: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        * sourcePortRanges `array`: The source port ranges.
          * items `string`: The source port.
      * id `string`: Resource ID.
  * effectiveSecurityRules `array`: Collection of effective security rules.
    * items `object`: Effective network security rules.
      * access `string` (values: Allow, Deny): Whether network traffic is allowed or denied.
      * destinationAddressPrefix `string`: The destination address prefix.
      * destinationAddressPrefixes `array`: The destination address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AzureLoadBalancer, Internet), System Tags, and the asterisk (*).
        * items `string`
      * destinationPortRange `string`: The destination port or range.
      * destinationPortRanges `array`: The destination port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as separator (e.g. 100-400), or an asterisk (*).
        * items `string`
      * direction `string` (values: Inbound, Outbound): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
      * expandedDestinationAddressPrefix `array`: Expanded destination address prefix.
        * items `string`
      * expandedSourceAddressPrefix `array`: The expanded source address prefix.
        * items `string`
      * name `string`: The name of the security rule specified by the user (if created by the user).
      * priority `integer`: The priority of the rule.
      * protocol `string` (values: Tcp, Udp, All): The network protocol this rule applies to.
      * sourceAddressPrefix `string`: The source address prefix.
      * sourceAddressPrefixes `array`: The source address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AzureLoadBalancer, Internet), System Tags, and the asterisk (*).
        * items `string`
      * sourcePortRange `string`: The source port or range.
      * sourcePortRanges `array`: The source port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as separator (e.g. 100-400), or an asterisk (*).
        * items `string`
  * networkInterfaceAssociation [NetworkInterfaceAssociation](#networkinterfaceassociation)
  * subnetAssociation [SubnetAssociation](#subnetassociation)

### SubnetAssociation
* SubnetAssociation `object`: Subnet and it's custom security rules.
  * id `string`: Subnet ID.
  * securityRules `array`: Collection of custom security rules.
    * items `object`: Network security rule.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Security rule resource.
        * access **required** `string` (values: Allow, Deny): Whether network traffic is allowed or denied.
        * description `string`: A description for this rule. Restricted to 140 chars.
        * destinationAddressPrefix `string`: The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
        * destinationAddressPrefixes `array`: The destination address prefixes. CIDR or destination IP ranges.
          * items `string`
        * destinationApplicationSecurityGroups `array`: The application security group specified as destination.
          * items `object`: An application security group in a resource group.
        * destinationPortRange `string`: The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        * destinationPortRanges `array`: The destination port ranges.
          * items `string`: The destination port.
        * direction **required** `string` (values: Inbound, Outbound): The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
        * priority `integer`: The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
        * protocol **required** `string` (values: Tcp, Udp, Icmp, Esp, *): Network protocol this rule applies to.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * sourceAddressPrefix `string`: The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
        * sourceAddressPrefixes `array`: The CIDR or source IP ranges.
          * items `string`
        * sourceApplicationSecurityGroups `array`: The application security group specified as source.
          * items `object`: An application security group in a resource group.
        * sourcePortRange `string`: The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        * sourcePortRanges `array`: The source port ranges.
          * items `string`: The source port.
      * id `string`: Resource ID.

### Topology
* Topology `object`: Topology of the specified resource group.
  * createdDateTime `string`: The datetime when the topology was initially created for the resource group.
  * id `string`: GUID representing the operation id.
  * lastModified `string`: The datetime when the topology was last modified.
  * resources `array`: A list of topology resources.
    * items [TopologyResource](#topologyresource)

### TopologyAssociation
* TopologyAssociation `object`: Resources that have an association with the parent resource.
  * associationType `string` (values: Associated, Contains): The association type of the child resource to the parent resource.
  * name `string`: The name of the resource that is associated with the parent resource.
  * resourceId `string`: The ID of the resource that is associated with the parent resource.

### TopologyParameters
* TopologyParameters `object`: Parameters that define the representation of topology.
  * targetResourceGroupName `string`: The name of the target resource group to perform topology on.
  * targetSubnet `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * targetVirtualNetwork `object`: Reference to another subresource.
    * id `string`: Resource ID.

### TopologyResource
* TopologyResource `object`: The network resource topology information for the given resource group.
  * associations `array`: Holds the associations the resource has with other resources in the resource group.
    * items [TopologyAssociation](#topologyassociation)
  * id `string`: ID of the resource.
  * location `string`: Resource location.
  * name `string`: Name of the resource.

### TrafficAnalyticsConfigurationProperties
* TrafficAnalyticsConfigurationProperties `object`: Parameters that define the configuration of traffic analytics.
  * enabled **required** `boolean`: Flag to enable/disable traffic analytics.
  * trafficAnalyticsInterval `integer`: The interval in minutes which would decide how frequently TA service should do flow analytics.
  * workspaceId `string`: The resource guid of the attached workspace.
  * workspaceRegion `string`: The location of the attached workspace.
  * workspaceResourceId `string`: Resource Id of the attached workspace.

### TrafficAnalyticsProperties
* TrafficAnalyticsProperties `object`: Parameters that define the configuration of traffic analytics.
  * networkWatcherFlowAnalyticsConfiguration **required** [TrafficAnalyticsConfigurationProperties](#trafficanalyticsconfigurationproperties)

### TroubleshootingDetails
* TroubleshootingDetails `object`: Information gained from troubleshooting of specified resource.
  * detail `string`: Details on troubleshooting results.
  * id `string`: The id of the get troubleshoot operation.
  * reasonType `string`: Reason type of failure.
  * recommendedActions `array`: List of recommended actions.
    * items [TroubleshootingRecommendedActions](#troubleshootingrecommendedactions)
  * summary `string`: A summary of troubleshooting.

### TroubleshootingParameters
* TroubleshootingParameters `object`: Parameters that define the resource to troubleshoot.
  * properties **required** [TroubleshootingProperties](#troubleshootingproperties)
  * targetResourceId **required** `string`: The target resource to troubleshoot.

### TroubleshootingProperties
* TroubleshootingProperties `object`: Storage location provided for troubleshoot.
  * storageId **required** `string`: The ID for the storage account to save the troubleshoot result.
  * storagePath **required** `string`: The path to the blob to save the troubleshoot result in.

### TroubleshootingRecommendedActions
* TroubleshootingRecommendedActions `object`: Recommended actions based on discovered issues.
  * actionId `string`: ID of the recommended action.
  * actionText `string`: Description of recommended actions.
  * actionUri `string`: The uri linking to a documentation for the recommended troubleshooting actions.
  * actionUriText `string`: The information from the URI for the recommended troubleshooting actions.

### TroubleshootingResult
* TroubleshootingResult `object`: Troubleshooting information gained from specified resource.
  * code `string`: The result code of the troubleshooting.
  * endTime `string`: The end time of the troubleshooting.
  * results `array`: Information from troubleshooting.
    * items [TroubleshootingDetails](#troubleshootingdetails)
  * startTime `string`: The start time of the troubleshooting.

### VerificationIPFlowParameters
* VerificationIPFlowParameters `object`: Parameters that define the IP flow to be verified.
  * direction **required** [Direction](#direction)
  * localIPAddress **required** `string`: The local IP address. Acceptable values are valid IPv4 addresses.
  * localPort **required** `string`: The local port. Acceptable values are a single integer in the range (0-65535). Support for * for the source port, which depends on the direction.
  * protocol **required** `string` (values: TCP, UDP): Protocol to be verified on.
  * remoteIPAddress **required** `string`: The remote IP address. Acceptable values are valid IPv4 addresses.
  * remotePort **required** `string`: The remote port. Acceptable values are a single integer in the range (0-65535). Support for * for the source port, which depends on the direction.
  * targetNicResourceId `string`: The NIC ID. (If VM has multiple NICs and IP forwarding is enabled on any of them, then this parameter must be specified. Otherwise optional).
  * targetResourceId **required** `string`: The ID of the target resource to perform next-hop on.

### VerificationIPFlowResult
* VerificationIPFlowResult `object`: Results of IP flow verification on the target resource.
  * access `string` (values: Allow, Deny): Access to be allowed or denied.
  * ruleName `string`: Name of the rule. If input is not matched against any security rule, it is not displayed.


