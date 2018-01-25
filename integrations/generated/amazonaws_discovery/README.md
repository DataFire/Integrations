# @datafire/amazonaws_discovery

Client library for AWS Application Discovery Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_discovery
```
```js
let amazonaws_discovery = require('@datafire/amazonaws_discovery').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_discovery.AssociateConfigurationItemsToApplication({
  "applicationConfigurationId": "",
  "configurationIds": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Application Discovery Service</fullname> <p>AWS Application Discovery Service helps you plan application migration projects by automatically identifying servers, virtual machines (VMs), software, and software dependencies running in your on-premises data centers. Application Discovery Service also collects application performance data, which can help you assess the outcome of your migration. The data collected by Application Discovery Service is securely retained in an Amazon-hosted and managed database in the cloud. You can export the data as a CSV or XML file into your preferred visualization tool or cloud-migration solution to plan your migration. For more information, see the Application Discovery Service <a href="http://aws.amazon.com/application-discovery/faqs/">FAQ</a>.</p> <p>Application Discovery Service offers two modes of operation.</p> <ul> <li> <p> <b>Agentless discovery</b> mode is recommended for environments that use VMware vCenter Server. This mode doesn't require you to install an agent on each host. Agentless discovery gathers server information regardless of the operating systems, which minimizes the time required for initial on-premises infrastructure assessment. Agentless discovery doesn't collect information about software and software dependencies. It also doesn't work in non-VMware environments. We recommend that you use agent-based discovery for non-VMware environments and if you want to collect information about software and software dependencies. You can also run agent-based and agentless discovery simultaneously. Use agentless discovery to quickly complete the initial infrastructure assessment and then install agents on select hosts to gather information about software and software dependencies.</p> </li> <li> <p> <b>Agent-based discovery</b> mode collects a richer set of data than agentless discovery by using Amazon software, the AWS Application Discovery Agent, which you install on one or more hosts in your data center. The agent captures infrastructure and application information, including an inventory of installed software applications, system and process performance, resource utilization, and network dependencies between workloads. The information collected by agents is secured at rest and in transit to the Application Discovery Service database in the cloud. </p> </li> </ul> <p>Application Discovery Service integrates with application discovery solutions from AWS Partner Network (APN) partners. Third-party application discovery tools can query Application Discovery Service and write to the Application Discovery Service database using a public API. You can then import the data into either a visualization tool or cloud-migration solution.</p> <important> <p>Application Discovery Service doesn't gather sensitive information. All data is handled according to the <a href="http://aws.amazon.com/privacy/">AWS Privacy Policy</a>. You can operate Application Discovery Service using offline mode to inspect collected data before it is shared with the service.</p> </important> <p>Your AWS account must be granted access to Application Discovery Service, a process called <i>whitelisting</i>. This is true for AWS partners and customers alike. To request access, <a href="http://aws.amazon.com/application-discovery/how-to-start/"> sign up for AWS Application Discovery Service</a>.</p> <p>This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for Application Discovery Service. The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p> <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/"> <i>AWS Application Discovery Service User Guide</i> </a>.</p>

## Actions

### AssociateConfigurationItemsToApplication



```js
amazonaws_discovery.AssociateConfigurationItemsToApplication({
  "applicationConfigurationId": "",
  "configurationIds": []
}, context)
```

#### Input
* input `object`
  * applicationConfigurationId **required** [ApplicationId](#applicationid)
  * configurationIds **required** [ConfigurationIdList](#configurationidlist)

#### Output
* output [AssociateConfigurationItemsToApplicationResponse](#associateconfigurationitemstoapplicationresponse)

### CreateApplication



```js
amazonaws_discovery.CreateApplication({
  "name": ""
}, context)
```

#### Input
* input `object`
  * description [String](#string)
  * name **required** [String](#string)

#### Output
* output [CreateApplicationResponse](#createapplicationresponse)

### CreateTags



```js
amazonaws_discovery.CreateTags({
  "configurationIds": [],
  "tags": []
}, context)
```

#### Input
* input `object`
  * configurationIds **required** [ConfigurationIdList](#configurationidlist)
  * tags **required** [TagSet](#tagset)

#### Output
* output [CreateTagsResponse](#createtagsresponse)

### DeleteApplications



```js
amazonaws_discovery.DeleteApplications({
  "configurationIds": []
}, context)
```

#### Input
* input `object`
  * configurationIds **required** [ApplicationIdsList](#applicationidslist)

#### Output
* output [DeleteApplicationsResponse](#deleteapplicationsresponse)

### DeleteTags



```js
amazonaws_discovery.DeleteTags({
  "configurationIds": []
}, context)
```

#### Input
* input `object`
  * configurationIds **required** [ConfigurationIdList](#configurationidlist)
  * tags [TagSet](#tagset)

#### Output
* output [DeleteTagsResponse](#deletetagsresponse)

### DescribeAgents



```js
amazonaws_discovery.DescribeAgents({}, context)
```

#### Input
* input `object`
  * agentIds [AgentIds](#agentids)
  * filters [Filters](#filters)
  * maxResults [Integer](#integer)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeAgentsResponse](#describeagentsresponse)

### DescribeConfigurations



```js
amazonaws_discovery.DescribeConfigurations({
  "configurationIds": []
}, context)
```

#### Input
* input `object`
  * configurationIds **required** [ConfigurationIdList](#configurationidlist)

#### Output
* output [DescribeConfigurationsResponse](#describeconfigurationsresponse)

### DescribeExportConfigurations



```js
amazonaws_discovery.DescribeExportConfigurations({}, context)
```

#### Input
* input `object`
  * exportIds [ExportIds](#exportids)
  * maxResults [Integer](#integer)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeExportConfigurationsResponse](#describeexportconfigurationsresponse)

### DescribeExportTasks



```js
amazonaws_discovery.DescribeExportTasks({}, context)
```

#### Input
* input `object`
  * exportIds [ExportIds](#exportids)
  * filters [ExportFilters](#exportfilters)
  * maxResults [Integer](#integer)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeExportTasksResponse](#describeexporttasksresponse)

### DescribeTags



```js
amazonaws_discovery.DescribeTags({}, context)
```

#### Input
* input `object`
  * filters [TagFilters](#tagfilters)
  * maxResults [Integer](#integer)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeTagsResponse](#describetagsresponse)

### DisassociateConfigurationItemsFromApplication



```js
amazonaws_discovery.DisassociateConfigurationItemsFromApplication({
  "applicationConfigurationId": "",
  "configurationIds": []
}, context)
```

#### Input
* input `object`
  * applicationConfigurationId **required** [ApplicationId](#applicationid)
  * configurationIds **required** [ConfigurationIdList](#configurationidlist)

#### Output
* output [DisassociateConfigurationItemsFromApplicationResponse](#disassociateconfigurationitemsfromapplicationresponse)

### ExportConfigurations



```js
amazonaws_discovery.ExportConfigurations({}, context)
```

#### Input
* input `object`

#### Output
* output [ExportConfigurationsResponse](#exportconfigurationsresponse)

### GetDiscoverySummary



```js
amazonaws_discovery.GetDiscoverySummary({}, context)
```

#### Input
* input `object`

#### Output
* output [GetDiscoverySummaryResponse](#getdiscoverysummaryresponse)

### ListConfigurations



```js
amazonaws_discovery.ListConfigurations({
  "configurationType": ""
}, context)
```

#### Input
* input `object`
  * configurationType **required** [ConfigurationItemType](#configurationitemtype)
  * filters [Filters](#filters)
  * maxResults [Integer](#integer)
  * nextToken [NextToken](#nexttoken)
  * orderBy [OrderByList](#orderbylist)

#### Output
* output [ListConfigurationsResponse](#listconfigurationsresponse)

### ListServerNeighbors



```js
amazonaws_discovery.ListServerNeighbors({
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * configurationId **required** [ConfigurationId](#configurationid)
  * maxResults [Integer](#integer)
  * neighborConfigurationIds [ConfigurationIdList](#configurationidlist)
  * nextToken [String](#string)
  * portInformationNeeded [Boolean](#boolean)

#### Output
* output [ListServerNeighborsResponse](#listserverneighborsresponse)

### StartDataCollectionByAgentIds



```js
amazonaws_discovery.StartDataCollectionByAgentIds({
  "agentIds": []
}, context)
```

#### Input
* input `object`
  * agentIds **required** [AgentIds](#agentids)

#### Output
* output [StartDataCollectionByAgentIdsResponse](#startdatacollectionbyagentidsresponse)

### StartExportTask



```js
amazonaws_discovery.StartExportTask({}, context)
```

#### Input
* input `object`
  * endTime [TimeStamp](#timestamp)
  * exportDataFormat [ExportDataFormats](#exportdataformats)
  * filters [ExportFilters](#exportfilters)
  * startTime [TimeStamp](#timestamp)

#### Output
* output [StartExportTaskResponse](#startexporttaskresponse)

### StopDataCollectionByAgentIds



```js
amazonaws_discovery.StopDataCollectionByAgentIds({
  "agentIds": []
}, context)
```

#### Input
* input `object`
  * agentIds **required** [AgentIds](#agentids)

#### Output
* output [StopDataCollectionByAgentIdsResponse](#stopdatacollectionbyagentidsresponse)

### UpdateApplication



```js
amazonaws_discovery.UpdateApplication({
  "configurationId": ""
}, context)
```

#### Input
* input `object`
  * configurationId **required** [ApplicationId](#applicationid)
  * description [String](#string)
  * name [String](#string)

#### Output
* output [UpdateApplicationResponse](#updateapplicationresponse)



## Definitions

### AgentConfigurationStatus
* AgentConfigurationStatus `object`: Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated.
  * agentId [String](#string)
  * description [String](#string)
  * operationSucceeded [Boolean](#boolean)

### AgentConfigurationStatusList
* AgentConfigurationStatusList `array`
  * items [AgentConfigurationStatus](#agentconfigurationstatus)

### AgentId
* AgentId `string`

### AgentIds
* AgentIds `array`
  * items [AgentId](#agentid)

### AgentInfo
* AgentInfo `object`: Information about agents or connectors associated with the user’s AWS account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent.
  * agentId [AgentId](#agentid)
  * agentNetworkInfoList [AgentNetworkInfoList](#agentnetworkinfolist)
  * agentType [String](#string)
  * collectionStatus [String](#string)
  * connectorId [String](#string)
  * health [AgentStatus](#agentstatus)
  * hostName [String](#string)
  * lastHealthPingTime [String](#string)
  * registeredTime [String](#string)
  * version [String](#string)

### AgentNetworkInfo
* AgentNetworkInfo `object`: Network details about the host where the agent/connector resides.
  * ipAddress [String](#string)
  * macAddress [String](#string)

### AgentNetworkInfoList
* AgentNetworkInfoList `array`
  * items [AgentNetworkInfo](#agentnetworkinfo)

### AgentStatus
* AgentStatus `string` (values: HEALTHY, UNHEALTHY, RUNNING, UNKNOWN, BLACKLISTED, SHUTDOWN)

### AgentsInfo
* AgentsInfo `array`
  * items [AgentInfo](#agentinfo)

### ApplicationId
* ApplicationId `string`

### ApplicationIdsList
* ApplicationIdsList `array`
  * items [ApplicationId](#applicationid)

### AssociateConfigurationItemsToApplicationRequest
* AssociateConfigurationItemsToApplicationRequest `object`
  * applicationConfigurationId **required** [ApplicationId](#applicationid)
  * configurationIds **required** [ConfigurationIdList](#configurationidlist)

### AssociateConfigurationItemsToApplicationResponse
* AssociateConfigurationItemsToApplicationResponse `object`

### AuthorizationErrorException
* AuthorizationErrorException `object`: The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.
  * message [Message](#message)

### Boolean
* Boolean `boolean`

### BoxedInteger
* BoxedInteger `integer`

### Condition
* Condition `string`

### Configuration
* Configuration `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### ConfigurationId
* ConfigurationId `string`

### ConfigurationIdList
* ConfigurationIdList `array`
  * items [ConfigurationId](#configurationid)

### ConfigurationItemType
* ConfigurationItemType `string` (values: SERVER, PROCESS, CONNECTION, APPLICATION)

### ConfigurationTag
* ConfigurationTag `object`: Tags for a configuration item. Tags are metadata that help you categorize IT assets.
  * configurationId [ConfigurationId](#configurationid)
  * configurationType [ConfigurationItemType](#configurationitemtype)
  * key [TagKey](#tagkey)
  * timeOfCreation [TimeStamp](#timestamp)
  * value [TagValue](#tagvalue)

### ConfigurationTagSet
* ConfigurationTagSet `array`
  * items [ConfigurationTag](#configurationtag)

### Configurations
* Configurations `array`
  * items [Configuration](#configuration)

### ConfigurationsDownloadUrl
* ConfigurationsDownloadUrl `string`

### ConfigurationsExportId
* ConfigurationsExportId `string`

### CreateApplicationRequest
* CreateApplicationRequest `object`
  * description [String](#string)
  * name **required** [String](#string)

### CreateApplicationResponse
* CreateApplicationResponse `object`
  * configurationId [String](#string)

### CreateTagsRequest
* CreateTagsRequest `object`
  * configurationIds **required** [ConfigurationIdList](#configurationidlist)
  * tags **required** [TagSet](#tagset)

### CreateTagsResponse
* CreateTagsResponse `object`

### CustomerAgentInfo
* CustomerAgentInfo `object`: Inventory data for installed discovery agents.
  * activeAgents **required** [Integer](#integer)
  * blackListedAgents **required** [Integer](#integer)
  * healthyAgents **required** [Integer](#integer)
  * shutdownAgents **required** [Integer](#integer)
  * totalAgents **required** [Integer](#integer)
  * unhealthyAgents **required** [Integer](#integer)
  * unknownAgents **required** [Integer](#integer)

### CustomerConnectorInfo
* CustomerConnectorInfo `object`: Inventory data for installed discovery connectors.
  * activeConnectors **required** [Integer](#integer)
  * blackListedConnectors **required** [Integer](#integer)
  * healthyConnectors **required** [Integer](#integer)
  * shutdownConnectors **required** [Integer](#integer)
  * totalConnectors **required** [Integer](#integer)
  * unhealthyConnectors **required** [Integer](#integer)
  * unknownConnectors **required** [Integer](#integer)

### DeleteApplicationsRequest
* DeleteApplicationsRequest `object`
  * configurationIds **required** [ApplicationIdsList](#applicationidslist)

### DeleteApplicationsResponse
* DeleteApplicationsResponse `object`

### DeleteTagsRequest
* DeleteTagsRequest `object`
  * configurationIds **required** [ConfigurationIdList](#configurationidlist)
  * tags [TagSet](#tagset)

### DeleteTagsResponse
* DeleteTagsResponse `object`

### DescribeAgentsRequest
* DescribeAgentsRequest `object`
  * agentIds [AgentIds](#agentids)
  * filters [Filters](#filters)
  * maxResults [Integer](#integer)
  * nextToken [NextToken](#nexttoken)

### DescribeAgentsResponse
* DescribeAgentsResponse `object`
  * agentsInfo [AgentsInfo](#agentsinfo)
  * nextToken [NextToken](#nexttoken)

### DescribeConfigurationsAttribute
* DescribeConfigurationsAttribute `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### DescribeConfigurationsAttributes
* DescribeConfigurationsAttributes `array`
  * items [DescribeConfigurationsAttribute](#describeconfigurationsattribute)

### DescribeConfigurationsRequest
* DescribeConfigurationsRequest `object`
  * configurationIds **required** [ConfigurationIdList](#configurationidlist)

### DescribeConfigurationsResponse
* DescribeConfigurationsResponse `object`
  * configurations [DescribeConfigurationsAttributes](#describeconfigurationsattributes)

### DescribeExportConfigurationsRequest
* DescribeExportConfigurationsRequest `object`
  * exportIds [ExportIds](#exportids)
  * maxResults [Integer](#integer)
  * nextToken [NextToken](#nexttoken)

### DescribeExportConfigurationsResponse
* DescribeExportConfigurationsResponse `object`
  * exportsInfo [ExportsInfo](#exportsinfo)
  * nextToken [NextToken](#nexttoken)

### DescribeExportTasksRequest
* DescribeExportTasksRequest `object`
  * exportIds [ExportIds](#exportids)
  * filters [ExportFilters](#exportfilters)
  * maxResults [Integer](#integer)
  * nextToken [NextToken](#nexttoken)

### DescribeExportTasksResponse
* DescribeExportTasksResponse `object`
  * exportsInfo [ExportsInfo](#exportsinfo)
  * nextToken [NextToken](#nexttoken)

### DescribeTagsRequest
* DescribeTagsRequest `object`
  * filters [TagFilters](#tagfilters)
  * maxResults [Integer](#integer)
  * nextToken [NextToken](#nexttoken)

### DescribeTagsResponse
* DescribeTagsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * tags [ConfigurationTagSet](#configurationtagset)

### DisassociateConfigurationItemsFromApplicationRequest
* DisassociateConfigurationItemsFromApplicationRequest `object`
  * applicationConfigurationId **required** [ApplicationId](#applicationid)
  * configurationIds **required** [ConfigurationIdList](#configurationidlist)

### DisassociateConfigurationItemsFromApplicationResponse
* DisassociateConfigurationItemsFromApplicationResponse `object`

### ExportConfigurationsResponse
* ExportConfigurationsResponse `object`
  * exportId [ConfigurationsExportId](#configurationsexportid)

### ExportDataFormat
* ExportDataFormat `string` (values: CSV, GRAPHML)

### ExportDataFormats
* ExportDataFormats `array`
  * items [ExportDataFormat](#exportdataformat)

### ExportFilter
* ExportFilter `object`: Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.
  * condition **required** [Condition](#condition)
  * name **required** [FilterName](#filtername)
  * values **required** [FilterValues](#filtervalues)

### ExportFilters
* ExportFilters `array`
  * items [ExportFilter](#exportfilter)

### ExportIds
* ExportIds `array`
  * items [ConfigurationsExportId](#configurationsexportid)

### ExportInfo
* ExportInfo `object`: Information regarding the export status of discovered data. The value is an array of objects.
  * configurationsDownloadUrl [ConfigurationsDownloadUrl](#configurationsdownloadurl)
  * exportId **required** [ConfigurationsExportId](#configurationsexportid)
  * exportRequestTime **required** [ExportRequestTime](#exportrequesttime)
  * exportStatus **required** [ExportStatus](#exportstatus)
  * isTruncated [Boolean](#boolean)
  * requestedEndTime [TimeStamp](#timestamp)
  * requestedStartTime [TimeStamp](#timestamp)
  * statusMessage **required** [ExportStatusMessage](#exportstatusmessage)

### ExportRequestTime
* ExportRequestTime `string`

### ExportStatus
* ExportStatus `string` (values: FAILED, SUCCEEDED, IN_PROGRESS)

### ExportStatusMessage
* ExportStatusMessage `string`

### ExportsInfo
* ExportsInfo `array`
  * items [ExportInfo](#exportinfo)

### Filter
* Filter `object`: <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/discovery-api-queries.html">Querying Discovered Configuration Items</a>. </p>
  * condition **required** [Condition](#condition)
  * name **required** [String](#string)
  * values **required** [FilterValues](#filtervalues)

### FilterName
* FilterName `string`

### FilterValue
* FilterValue `string`

### FilterValues
* FilterValues `array`
  * items [FilterValue](#filtervalue)

### Filters
* Filters `array`
  * items [Filter](#filter)

### GetDiscoverySummaryRequest
* GetDiscoverySummaryRequest `object`

### GetDiscoverySummaryResponse
* GetDiscoverySummaryResponse `object`
  * agentSummary [CustomerAgentInfo](#customeragentinfo)
  * applications [Long](#long)
  * connectorSummary [CustomerConnectorInfo](#customerconnectorinfo)
  * servers [Long](#long)
  * serversMappedToApplications [Long](#long)
  * serversMappedtoTags [Long](#long)

### Integer
* Integer `integer`

### InvalidParameterException
* InvalidParameterException `object`: One or more parameters are not valid. Verify the parameters and try again.
  * message [Message](#message)

### InvalidParameterValueException
* InvalidParameterValueException `object`: The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.
  * message [Message](#message)

### ListConfigurationsRequest
* ListConfigurationsRequest `object`
  * configurationType **required** [ConfigurationItemType](#configurationitemtype)
  * filters [Filters](#filters)
  * maxResults [Integer](#integer)
  * nextToken [NextToken](#nexttoken)
  * orderBy [OrderByList](#orderbylist)

### ListConfigurationsResponse
* ListConfigurationsResponse `object`
  * configurations [Configurations](#configurations)
  * nextToken [NextToken](#nexttoken)

### ListServerNeighborsRequest
* ListServerNeighborsRequest `object`
  * configurationId **required** [ConfigurationId](#configurationid)
  * maxResults [Integer](#integer)
  * neighborConfigurationIds [ConfigurationIdList](#configurationidlist)
  * nextToken [String](#string)
  * portInformationNeeded [Boolean](#boolean)

### ListServerNeighborsResponse
* ListServerNeighborsResponse `object`
  * knownDependencyCount [Long](#long)
  * neighbors **required** [NeighborDetailsList](#neighbordetailslist)
  * nextToken [String](#string)

### Long
* Long `integer`

### Message
* Message `string`

### NeighborConnectionDetail
* NeighborConnectionDetail `object`: Details about neighboring servers.
  * connectionsCount **required** [Long](#long)
  * destinationPort [BoxedInteger](#boxedinteger)
  * destinationServerId **required** [ConfigurationId](#configurationid)
  * sourceServerId **required** [ConfigurationId](#configurationid)
  * transportProtocol [String](#string)

### NeighborDetailsList
* NeighborDetailsList `array`
  * items [NeighborConnectionDetail](#neighborconnectiondetail)

### NextToken
* NextToken `string`

### OperationNotPermittedException
* OperationNotPermittedException `object`: This operation is not permitted.
  * message [Message](#message)

### OrderByElement
* OrderByElement `object`: A field and direction for ordered output.
  * fieldName **required** [String](#string)
  * sortOrder [orderString](#orderstring)

### OrderByList
* OrderByList `array`
  * items [OrderByElement](#orderbyelement)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified configuration ID was not located. Verify the configuration ID and try again.
  * message [Message](#message)

### ServerInternalErrorException
* ServerInternalErrorException `object`: The server experienced an internal error. Try again.
  * message [Message](#message)

### StartDataCollectionByAgentIdsRequest
* StartDataCollectionByAgentIdsRequest `object`
  * agentIds **required** [AgentIds](#agentids)

### StartDataCollectionByAgentIdsResponse
* StartDataCollectionByAgentIdsResponse `object`
  * agentsConfigurationStatus [AgentConfigurationStatusList](#agentconfigurationstatuslist)

### StartExportTaskRequest
* StartExportTaskRequest `object`
  * endTime [TimeStamp](#timestamp)
  * exportDataFormat [ExportDataFormats](#exportdataformats)
  * filters [ExportFilters](#exportfilters)
  * startTime [TimeStamp](#timestamp)

### StartExportTaskResponse
* StartExportTaskResponse `object`
  * exportId [ConfigurationsExportId](#configurationsexportid)

### StopDataCollectionByAgentIdsRequest
* StopDataCollectionByAgentIdsRequest `object`
  * agentIds **required** [AgentIds](#agentids)

### StopDataCollectionByAgentIdsResponse
* StopDataCollectionByAgentIdsResponse `object`
  * agentsConfigurationStatus [AgentConfigurationStatusList](#agentconfigurationstatuslist)

### String
* String `string`

### Tag
* Tag `object`: Metadata that help you categorize IT assets.
  * key **required** [TagKey](#tagkey)
  * value **required** [TagValue](#tagvalue)

### TagFilter
* TagFilter `object`: The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>.
  * name **required** [FilterName](#filtername)
  * values **required** [FilterValues](#filtervalues)

### TagFilters
* TagFilters `array`
  * items [TagFilter](#tagfilter)

### TagKey
* TagKey `string`

### TagSet
* TagSet `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TimeStamp
* TimeStamp `string`

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * configurationId **required** [ApplicationId](#applicationid)
  * description [String](#string)
  * name [String](#string)

### UpdateApplicationResponse
* UpdateApplicationResponse `object`

### orderString
* orderString `string` (values: ASC, DESC)


