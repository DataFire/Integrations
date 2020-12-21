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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Application Discovery Service</fullname> <p>AWS Application Discovery Service helps you plan application migration projects. It automatically identifies servers, virtual machines (VMs), and network dependencies in your on-premises data centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">AWS Application Discovery Service FAQ</a>. Application Discovery Service offers three ways of performing discovery and collecting data about your on-premises servers:</p> <ul> <li> <p> <b>Agentless discovery</b> is recommended for environments that use VMware vCenter Server. This mode doesn't require you to install an agent on each host. It does not work in non-VMware environments.</p> <ul> <li> <p>Agentless discovery gathers server information regardless of the operating systems, which minimizes the time required for initial on-premises infrastructure assessment.</p> </li> <li> <p>Agentless discovery doesn't collect information about network dependencies, only agent-based discovery collects that information.</p> </li> </ul> </li> </ul> <ul> <li> <p> <b>Agent-based discovery</b> collects a richer set of data than agentless discovery by using the AWS Application Discovery Agent, which you install on one or more hosts in your data center.</p> <ul> <li> <p> The agent captures infrastructure and application information, including an inventory of running processes, system performance information, resource utilization, and network dependencies.</p> </li> <li> <p>The information collected by agents is secured at rest and in transit to the Application Discovery Service database in the cloud. </p> </li> </ul> </li> </ul> <ul> <li> <p> <b>AWS Partner Network (APN) solutions</b> integrate with Application Discovery Service, enabling you to import details of your on-premises environment directly into Migration Hub without using the discovery connector or discovery agent.</p> <ul> <li> <p>Third-party application discovery tools can query AWS Application Discovery Service, and they can write to the Application Discovery Service database using the public API.</p> </li> <li> <p>In this way, you can import data into Migration Hub and view it, so that you can associate applications with servers and track migrations.</p> </li> </ul> </li> </ul> <p> <b>Recommendations</b> </p> <p>We recommend that you use agent-based discovery for non-VMware environments, and whenever you want to collect information about network dependencies. You can run agent-based and agentless discovery simultaneously. Use agentless discovery to complete the initial infrastructure assessment quickly, and then install agents on select hosts to collect additional information.</p> <p> <b>Working With This Guide</b> </p> <p>This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for Application Discovery Service. The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p> <note> <ul> <li> <p>Remember that you must set your Migration Hub home region before you call any of these APIs.</p> </li> <li> <p>You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a <code>HomeRegionNotSetException</code> error is returned.</p> </li> <li> <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.</p> </li> <li> <p>Although it is unlikely, the Migration Hub home region could change. If you call APIs outside the home region, an <code>InvalidInputException</code> is returned.</p> </li> <li> <p>You must call <code>GetHomeRegion</code> to obtain the latest Migration Hub home region.</p> </li> </ul> </note> <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/">AWS Application Discovery Service User Guide</a>.</p> <important> <p>All data is handled according to the <a href="http://aws.amazon.com/privacy/">AWS Privacy Policy</a>. You can operate Application Discovery Service offline to inspect collected data before it is shared with the service.</p> </important>

## Actions

### AssociateConfigurationItemsToApplication



```js
amazonaws_discovery.AssociateConfigurationItemsToApplication({
  "applicationConfigurationId": null,
  "configurationIds": null
}, context)
```

#### Input
* input `object`
  * applicationConfigurationId **required**
  * configurationIds **required**
    * items [ConfigurationId](#configurationid)

#### Output
* output [AssociateConfigurationItemsToApplicationResponse](#associateconfigurationitemstoapplicationresponse)

### BatchDeleteImportData



```js
amazonaws_discovery.BatchDeleteImportData({
  "importTaskIds": null
}, context)
```

#### Input
* input `object`
  * importTaskIds **required**
    * items [ImportTaskIdentifier](#importtaskidentifier)

#### Output
* output [BatchDeleteImportDataResponse](#batchdeleteimportdataresponse)

### CreateApplication



```js
amazonaws_discovery.CreateApplication({
  "name": null
}, context)
```

#### Input
* input `object`
  * description
  * name **required**

#### Output
* output [CreateApplicationResponse](#createapplicationresponse)

### CreateTags



```js
amazonaws_discovery.CreateTags({
  "configurationIds": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * configurationIds **required**
    * items [ConfigurationId](#configurationid)

#### Output
* output [CreateTagsResponse](#createtagsresponse)

### DeleteApplications



```js
amazonaws_discovery.DeleteApplications({
  "configurationIds": null
}, context)
```

#### Input
* input `object`
  * configurationIds **required**
    * items [ApplicationId](#applicationid)

#### Output
* output [DeleteApplicationsResponse](#deleteapplicationsresponse)

### DeleteTags



```js
amazonaws_discovery.DeleteTags({
  "configurationIds": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * configurationIds **required**
    * items [ConfigurationId](#configurationid)

#### Output
* output [DeleteTagsResponse](#deletetagsresponse)

### DescribeAgents



```js
amazonaws_discovery.DescribeAgents({}, context)
```

#### Input
* input `object`
  * agentIds
    * items [AgentId](#agentid)
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

#### Output
* output [DescribeAgentsResponse](#describeagentsresponse)

### DescribeConfigurations



```js
amazonaws_discovery.DescribeConfigurations({
  "configurationIds": null
}, context)
```

#### Input
* input `object`
  * configurationIds **required**
    * items [ConfigurationId](#configurationid)

#### Output
* output [DescribeConfigurationsResponse](#describeconfigurationsresponse)

### DescribeContinuousExports



```js
amazonaws_discovery.DescribeContinuousExports({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * exportIds
    * items [ConfigurationsExportId](#configurationsexportid)
  * maxResults
  * nextToken

#### Output
* output [DescribeContinuousExportsResponse](#describecontinuousexportsresponse)

### DescribeExportConfigurations



```js
amazonaws_discovery.DescribeExportConfigurations({}, context)
```

#### Input
* input `object`
  * exportIds
    * items [ConfigurationsExportId](#configurationsexportid)
  * maxResults
  * nextToken

#### Output
* output [DescribeExportConfigurationsResponse](#describeexportconfigurationsresponse)

### DescribeExportTasks



```js
amazonaws_discovery.DescribeExportTasks({}, context)
```

#### Input
* input `object`
  * exportIds
    * items [ConfigurationsExportId](#configurationsexportid)
  * filters
    * items [ExportFilter](#exportfilter)
  * maxResults
  * nextToken

#### Output
* output [DescribeExportTasksResponse](#describeexporttasksresponse)

### DescribeImportTasks



```js
amazonaws_discovery.DescribeImportTasks({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters
    * items [ImportTaskFilter](#importtaskfilter)
  * maxResults
  * nextToken

#### Output
* output [DescribeImportTasksResponse](#describeimporttasksresponse)

### DescribeTags



```js
amazonaws_discovery.DescribeTags({}, context)
```

#### Input
* input `object`
  * filters
    * items [TagFilter](#tagfilter)
  * maxResults
  * nextToken

#### Output
* output [DescribeTagsResponse](#describetagsresponse)

### DisassociateConfigurationItemsFromApplication



```js
amazonaws_discovery.DisassociateConfigurationItemsFromApplication({
  "applicationConfigurationId": null,
  "configurationIds": null
}, context)
```

#### Input
* input `object`
  * applicationConfigurationId **required**
  * configurationIds **required**
    * items [ConfigurationId](#configurationid)

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
  "configurationType": null
}, context)
```

#### Input
* input `object`
  * configurationType **required**
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken
  * orderBy
    * items [OrderByElement](#orderbyelement)

#### Output
* output [ListConfigurationsResponse](#listconfigurationsresponse)

### ListServerNeighbors



```js
amazonaws_discovery.ListServerNeighbors({
  "configurationId": null
}, context)
```

#### Input
* input `object`
  * configurationId **required**
  * maxResults
  * neighborConfigurationIds
    * items [ConfigurationId](#configurationid)
  * nextToken
  * portInformationNeeded

#### Output
* output [ListServerNeighborsResponse](#listserverneighborsresponse)

### StartContinuousExport



```js
amazonaws_discovery.StartContinuousExport({}, context)
```

#### Input
* input `object`

#### Output
* output [StartContinuousExportResponse](#startcontinuousexportresponse)

### StartDataCollectionByAgentIds



```js
amazonaws_discovery.StartDataCollectionByAgentIds({
  "agentIds": null
}, context)
```

#### Input
* input `object`
  * agentIds **required**
    * items [AgentId](#agentid)

#### Output
* output [StartDataCollectionByAgentIdsResponse](#startdatacollectionbyagentidsresponse)

### StartExportTask



```js
amazonaws_discovery.StartExportTask({}, context)
```

#### Input
* input `object`
  * endTime
  * exportDataFormat
    * items [ExportDataFormat](#exportdataformat)
  * filters
    * items [ExportFilter](#exportfilter)
  * startTime

#### Output
* output [StartExportTaskResponse](#startexporttaskresponse)

### StartImportTask



```js
amazonaws_discovery.StartImportTask({
  "name": null,
  "importUrl": null
}, context)
```

#### Input
* input `object`
  * clientRequestToken
  * importUrl **required**
  * name **required**

#### Output
* output [StartImportTaskResponse](#startimporttaskresponse)

### StopContinuousExport



```js
amazonaws_discovery.StopContinuousExport({
  "exportId": null
}, context)
```

#### Input
* input `object`
  * exportId **required**

#### Output
* output [StopContinuousExportResponse](#stopcontinuousexportresponse)

### StopDataCollectionByAgentIds



```js
amazonaws_discovery.StopDataCollectionByAgentIds({
  "agentIds": null
}, context)
```

#### Input
* input `object`
  * agentIds **required**
    * items [AgentId](#agentid)

#### Output
* output [StopDataCollectionByAgentIdsResponse](#stopdatacollectionbyagentidsresponse)

### UpdateApplication



```js
amazonaws_discovery.UpdateApplication({
  "configurationId": null
}, context)
```

#### Input
* input `object`
  * configurationId **required**
  * description
  * name

#### Output
* output [UpdateApplicationResponse](#updateapplicationresponse)



## Definitions

### AgentConfigurationStatus
* AgentConfigurationStatus `object`: Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated.
  * agentId
  * description
  * operationSucceeded

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
  * agentId
  * agentNetworkInfoList
    * items [AgentNetworkInfo](#agentnetworkinfo)
  * agentType
  * collectionStatus
  * connectorId
  * health
  * hostName
  * lastHealthPingTime
  * registeredTime
  * version

### AgentNetworkInfo
* AgentNetworkInfo `object`: Network details about the host where the agent/connector resides.
  * ipAddress
  * macAddress

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
  * applicationConfigurationId **required**
  * configurationIds **required**
    * items [ConfigurationId](#configurationid)

### AssociateConfigurationItemsToApplicationResponse
* AssociateConfigurationItemsToApplicationResponse `object`

### AuthorizationErrorException


### BatchDeleteImportDataError
* BatchDeleteImportDataError `object`: Error messages returned for each import task that you deleted as a response for this command.
  * errorCode
  * errorDescription
  * importTaskId

### BatchDeleteImportDataErrorCode
* BatchDeleteImportDataErrorCode `string` (values: NOT_FOUND, INTERNAL_SERVER_ERROR, OVER_LIMIT)

### BatchDeleteImportDataErrorDescription
* BatchDeleteImportDataErrorDescription `string`

### BatchDeleteImportDataErrorList
* BatchDeleteImportDataErrorList `array`
  * items [BatchDeleteImportDataError](#batchdeleteimportdataerror)

### BatchDeleteImportDataRequest
* BatchDeleteImportDataRequest `object`
  * importTaskIds **required**
    * items [ImportTaskIdentifier](#importtaskidentifier)

### BatchDeleteImportDataResponse
* BatchDeleteImportDataResponse `object`
  * errors
    * items [BatchDeleteImportDataError](#batchdeleteimportdataerror)

### Boolean
* Boolean `boolean`

### BoxedInteger
* BoxedInteger `integer`

### ClientRequestToken
* ClientRequestToken `string`

### Condition
* Condition `string`

### Configuration
* Configuration `object`

### ConfigurationId
* ConfigurationId `string`

### ConfigurationIdList
* ConfigurationIdList `array`
  * items [ConfigurationId](#configurationid)

### ConfigurationItemType
* ConfigurationItemType `string` (values: SERVER, PROCESS, CONNECTION, APPLICATION)

### ConfigurationTag
* ConfigurationTag `object`: Tags for a configuration item. Tags are metadata that help you categorize IT assets.
  * configurationId
  * configurationType
  * key
  * timeOfCreation
  * value

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

### ConflictErrorException


### ContinuousExportDescription
* ContinuousExportDescription `object`: A list of continuous export descriptions.
  * dataSource
  * exportId
  * s3Bucket
  * schemaStorageConfig
  * startTime
  * status
  * statusDetail
  * stopTime

### ContinuousExportDescriptions
* ContinuousExportDescriptions `array`
  * items [ContinuousExportDescription](#continuousexportdescription)

### ContinuousExportIds
* ContinuousExportIds `array`
  * items [ConfigurationsExportId](#configurationsexportid)

### ContinuousExportStatus
* ContinuousExportStatus `string` (values: START_IN_PROGRESS, START_FAILED, ACTIVE, ERROR, STOP_IN_PROGRESS, STOP_FAILED, INACTIVE)

### CreateApplicationRequest
* CreateApplicationRequest `object`
  * description
  * name **required**

### CreateApplicationResponse
* CreateApplicationResponse `object`
  * configurationId

### CreateTagsRequest
* CreateTagsRequest `object`
  * tags **required**
    * items [Tag](#tag)
  * configurationIds **required**
    * items [ConfigurationId](#configurationid)

### CreateTagsResponse
* CreateTagsResponse `object`

### CustomerAgentInfo
* CustomerAgentInfo `object`: Inventory data for installed discovery agents.
  * activeAgents **required**
  * blackListedAgents **required**
  * healthyAgents **required**
  * shutdownAgents **required**
  * totalAgents **required**
  * unhealthyAgents **required**
  * unknownAgents **required**

### CustomerConnectorInfo
* CustomerConnectorInfo `object`: Inventory data for installed discovery connectors.
  * activeConnectors **required**
  * blackListedConnectors **required**
  * healthyConnectors **required**
  * shutdownConnectors **required**
  * totalConnectors **required**
  * unhealthyConnectors **required**
  * unknownConnectors **required**

### DataSource
* DataSource `string` (values: AGENT)

### DatabaseName
* DatabaseName `string`

### DeleteApplicationsRequest
* DeleteApplicationsRequest `object`
  * configurationIds **required**
    * items [ApplicationId](#applicationid)

### DeleteApplicationsResponse
* DeleteApplicationsResponse `object`

### DeleteTagsRequest
* DeleteTagsRequest `object`
  * tags
    * items [Tag](#tag)
  * configurationIds **required**
    * items [ConfigurationId](#configurationid)

### DeleteTagsResponse
* DeleteTagsResponse `object`

### DescribeAgentsRequest
* DescribeAgentsRequest `object`
  * agentIds
    * items [AgentId](#agentid)
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### DescribeAgentsResponse
* DescribeAgentsResponse `object`
  * agentsInfo
    * items [AgentInfo](#agentinfo)
  * nextToken

### DescribeConfigurationsAttribute
* DescribeConfigurationsAttribute `object`

### DescribeConfigurationsAttributes
* DescribeConfigurationsAttributes `array`
  * items [DescribeConfigurationsAttribute](#describeconfigurationsattribute)

### DescribeConfigurationsRequest
* DescribeConfigurationsRequest `object`
  * configurationIds **required**
    * items [ConfigurationId](#configurationid)

### DescribeConfigurationsResponse
* DescribeConfigurationsResponse `object`
  * configurations
    * items [DescribeConfigurationsAttribute](#describeconfigurationsattribute)

### DescribeContinuousExportsMaxResults
* DescribeContinuousExportsMaxResults `integer`

### DescribeContinuousExportsRequest
* DescribeContinuousExportsRequest `object`
  * exportIds
    * items [ConfigurationsExportId](#configurationsexportid)
  * maxResults
  * nextToken

### DescribeContinuousExportsResponse
* DescribeContinuousExportsResponse `object`
  * descriptions
    * items [ContinuousExportDescription](#continuousexportdescription)
  * nextToken

### DescribeExportConfigurationsRequest
* DescribeExportConfigurationsRequest `object`
  * exportIds
    * items [ConfigurationsExportId](#configurationsexportid)
  * maxResults
  * nextToken

### DescribeExportConfigurationsResponse
* DescribeExportConfigurationsResponse `object`
  * exportsInfo
    * items [ExportInfo](#exportinfo)
  * nextToken

### DescribeExportTasksRequest
* DescribeExportTasksRequest `object`
  * exportIds
    * items [ConfigurationsExportId](#configurationsexportid)
  * filters
    * items [ExportFilter](#exportfilter)
  * maxResults
  * nextToken

### DescribeExportTasksResponse
* DescribeExportTasksResponse `object`
  * exportsInfo
    * items [ExportInfo](#exportinfo)
  * nextToken

### DescribeImportTasksFilterList
* DescribeImportTasksFilterList `array`
  * items [ImportTaskFilter](#importtaskfilter)

### DescribeImportTasksMaxResults
* DescribeImportTasksMaxResults `integer`

### DescribeImportTasksRequest
* DescribeImportTasksRequest `object`
  * filters
    * items [ImportTaskFilter](#importtaskfilter)
  * maxResults
  * nextToken

### DescribeImportTasksResponse
* DescribeImportTasksResponse `object`
  * nextToken
  * tasks
    * items [ImportTask](#importtask)

### DescribeTagsRequest
* DescribeTagsRequest `object`
  * filters
    * items [TagFilter](#tagfilter)
  * maxResults
  * nextToken

### DescribeTagsResponse
* DescribeTagsResponse `object`
  * tags
    * items [ConfigurationTag](#configurationtag)
  * nextToken

### DisassociateConfigurationItemsFromApplicationRequest
* DisassociateConfigurationItemsFromApplicationRequest `object`
  * applicationConfigurationId **required**
  * configurationIds **required**
    * items [ConfigurationId](#configurationid)

### DisassociateConfigurationItemsFromApplicationResponse
* DisassociateConfigurationItemsFromApplicationResponse `object`

### ExportConfigurationsResponse
* ExportConfigurationsResponse `object`
  * exportId

### ExportDataFormat
* ExportDataFormat `string` (values: CSV, GRAPHML)

### ExportDataFormats
* ExportDataFormats `array`
  * items [ExportDataFormat](#exportdataformat)

### ExportFilter
* ExportFilter `object`: Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.
  * condition **required**
  * name **required**
  * values **required**
    * items [FilterValue](#filtervalue)

### ExportFilters
* ExportFilters `array`
  * items [ExportFilter](#exportfilter)

### ExportIds
* ExportIds `array`
  * items [ConfigurationsExportId](#configurationsexportid)

### ExportInfo
* ExportInfo `object`: Information regarding the export status of discovered data. The value is an array of objects.
  * configurationsDownloadUrl
  * exportId **required**
  * exportRequestTime **required**
  * exportStatus **required**
  * isTruncated
  * requestedEndTime
  * requestedStartTime
  * statusMessage **required**

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
* Filter `object`: <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>AWS Application Discovery Service User Guide</i>. </p>
  * condition **required**
  * name **required**
  * values **required**
    * items [FilterValue](#filtervalue)

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
  * servers
  * agentSummary
    * activeAgents **required**
    * blackListedAgents **required**
    * healthyAgents **required**
    * shutdownAgents **required**
    * totalAgents **required**
    * unhealthyAgents **required**
    * unknownAgents **required**
  * applications
  * connectorSummary
    * activeConnectors **required**
    * blackListedConnectors **required**
    * healthyConnectors **required**
    * shutdownConnectors **required**
    * totalConnectors **required**
    * unhealthyConnectors **required**
    * unknownConnectors **required**
  * serversMappedToApplications
  * serversMappedtoTags

### HomeRegionNotSetException


### ImportStatus
* ImportStatus `string` (values: IMPORT_IN_PROGRESS, IMPORT_COMPLETE, IMPORT_COMPLETE_WITH_ERRORS, IMPORT_FAILED, IMPORT_FAILED_SERVER_LIMIT_EXCEEDED, IMPORT_FAILED_RECORD_LIMIT_EXCEEDED, DELETE_IN_PROGRESS, DELETE_COMPLETE, DELETE_FAILED, DELETE_FAILED_LIMIT_EXCEEDED, INTERNAL_ERROR)

### ImportTask
* ImportTask `object`: An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
  * applicationImportFailure
  * applicationImportSuccess
  * clientRequestToken
  * errorsAndFailedEntriesZip
  * importCompletionTime
  * importDeletedTime
  * importRequestTime
  * importTaskId
  * importUrl
  * name
  * serverImportFailure
  * serverImportSuccess
  * status

### ImportTaskFilter
* ImportTaskFilter `object`: <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note>
  * name
  * values
    * items [ImportTaskFilterValue](#importtaskfiltervalue)

### ImportTaskFilterName
* ImportTaskFilterName `string` (values: IMPORT_TASK_ID, STATUS, NAME)

### ImportTaskFilterValue
* ImportTaskFilterValue `string`

### ImportTaskFilterValueList
* ImportTaskFilterValueList `array`
  * items [ImportTaskFilterValue](#importtaskfiltervalue)

### ImportTaskIdentifier
* ImportTaskIdentifier `string`

### ImportTaskList
* ImportTaskList `array`
  * items [ImportTask](#importtask)

### ImportTaskName
* ImportTaskName `string`

### ImportURL
* ImportURL `string`

### Integer
* Integer `integer`

### InvalidParameterException


### InvalidParameterValueException


### ListConfigurationsRequest
* ListConfigurationsRequest `object`
  * configurationType **required**
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken
  * orderBy
    * items [OrderByElement](#orderbyelement)

### ListConfigurationsResponse
* ListConfigurationsResponse `object`
  * configurations
    * items [Configuration](#configuration)
  * nextToken

### ListServerNeighborsRequest
* ListServerNeighborsRequest `object`
  * configurationId **required**
  * maxResults
  * neighborConfigurationIds
    * items [ConfigurationId](#configurationid)
  * nextToken
  * portInformationNeeded

### ListServerNeighborsResponse
* ListServerNeighborsResponse `object`
  * knownDependencyCount
  * neighbors **required**
    * items [NeighborConnectionDetail](#neighborconnectiondetail)
  * nextToken

### Long
* Long `integer`

### NeighborConnectionDetail
* NeighborConnectionDetail `object`: Details about neighboring servers.
  * connectionsCount **required**
  * destinationPort
  * destinationServerId **required**
  * sourceServerId **required**
  * transportProtocol

### NeighborDetailsList
* NeighborDetailsList `array`
  * items [NeighborConnectionDetail](#neighborconnectiondetail)

### NextToken
* NextToken `string`

### OperationNotPermittedException


### OrderByElement
* OrderByElement `object`: A field and direction for ordered output.
  * fieldName **required**
  * sortOrder

### OrderByList
* OrderByList `array`
  * items [OrderByElement](#orderbyelement)

### ResourceInUseException


### ResourceNotFoundException


### S3Bucket
* S3Bucket `string`

### S3PresignedUrl
* S3PresignedUrl `string`

### SchemaStorageConfig
* SchemaStorageConfig `object`

### ServerInternalErrorException


### StartContinuousExportRequest
* StartContinuousExportRequest `object`

### StartContinuousExportResponse
* StartContinuousExportResponse `object`
  * dataSource
  * exportId
  * s3Bucket
  * schemaStorageConfig
  * startTime

### StartDataCollectionByAgentIdsRequest
* StartDataCollectionByAgentIdsRequest `object`
  * agentIds **required**
    * items [AgentId](#agentid)

### StartDataCollectionByAgentIdsResponse
* StartDataCollectionByAgentIdsResponse `object`
  * agentsConfigurationStatus
    * items [AgentConfigurationStatus](#agentconfigurationstatus)

### StartExportTaskRequest
* StartExportTaskRequest `object`
  * endTime
  * exportDataFormat
    * items [ExportDataFormat](#exportdataformat)
  * filters
    * items [ExportFilter](#exportfilter)
  * startTime

### StartExportTaskResponse
* StartExportTaskResponse `object`
  * exportId

### StartImportTaskRequest
* StartImportTaskRequest `object`
  * clientRequestToken
  * importUrl **required**
  * name **required**

### StartImportTaskResponse
* StartImportTaskResponse `object`
  * task
    * applicationImportFailure
    * applicationImportSuccess
    * clientRequestToken
    * errorsAndFailedEntriesZip
    * importCompletionTime
    * importDeletedTime
    * importRequestTime
    * importTaskId
    * importUrl
    * name
    * serverImportFailure
    * serverImportSuccess
    * status

### StopContinuousExportRequest
* StopContinuousExportRequest `object`
  * exportId **required**

### StopContinuousExportResponse
* StopContinuousExportResponse `object`
  * startTime
  * stopTime

### StopDataCollectionByAgentIdsRequest
* StopDataCollectionByAgentIdsRequest `object`
  * agentIds **required**
    * items [AgentId](#agentid)

### StopDataCollectionByAgentIdsResponse
* StopDataCollectionByAgentIdsResponse `object`
  * agentsConfigurationStatus
    * items [AgentConfigurationStatus](#agentconfigurationstatus)

### String
* String `string`

### StringMax255
* StringMax255 `string`

### Tag
* Tag `object`: Metadata that help you categorize IT assets.
  * key **required**
  * value **required**

### TagFilter
* TagFilter `object`: The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>.
  * name **required**
  * values **required**
    * items [FilterValue](#filtervalue)

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

### ToDeleteIdentifierList
* ToDeleteIdentifierList `array`
  * items [ImportTaskIdentifier](#importtaskidentifier)

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * configurationId **required**
  * description
  * name

### UpdateApplicationResponse
* UpdateApplicationResponse `object`

### orderString
* orderString `string` (values: ASC, DESC)


