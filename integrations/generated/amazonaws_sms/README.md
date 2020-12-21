# @datafire/amazonaws_sms

Client library for AWS Server Migration Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sms
```
```js
let amazonaws_sms = require('@datafire/amazonaws_sms').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Server Migration Service</fullname> <p>AWS Server Migration Service (AWS SMS) makes it easier and faster for you to migrate your on-premises workloads to AWS. To learn more about AWS SMS, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/server-migration-service/">AWS Server Migration Service product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/">AWS Server Migration Service User Guide</a> </p> </li> </ul>

## Actions

### CreateApp



```js
amazonaws_sms.CreateApp({}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * clientToken
  * description
  * name
  * roleName
  * serverGroups
    * items [ServerGroup](#servergroup)

#### Output
* output [CreateAppResponse](#createappresponse)

### CreateReplicationJob



```js
amazonaws_sms.CreateReplicationJob({
  "serverId": null,
  "seedReplicationTime": null
}, context)
```

#### Input
* input `object`
  * description
  * encrypted
  * frequency
  * kmsKeyId
  * licenseType
  * numberOfRecentAmisToKeep
  * roleName
  * runOnce
  * seedReplicationTime **required**
  * serverId **required**

#### Output
* output [CreateReplicationJobResponse](#createreplicationjobresponse)

### DeleteApp



```js
amazonaws_sms.DeleteApp({}, context)
```

#### Input
* input `object`
  * appId
  * forceStopAppReplication
  * forceTerminateApp

#### Output
* output [DeleteAppResponse](#deleteappresponse)

### DeleteAppLaunchConfiguration



```js
amazonaws_sms.DeleteAppLaunchConfiguration({}, context)
```

#### Input
* input `object`
  * appId

#### Output
* output [DeleteAppLaunchConfigurationResponse](#deleteapplaunchconfigurationresponse)

### DeleteAppReplicationConfiguration



```js
amazonaws_sms.DeleteAppReplicationConfiguration({}, context)
```

#### Input
* input `object`
  * appId

#### Output
* output [DeleteAppReplicationConfigurationResponse](#deleteappreplicationconfigurationresponse)

### DeleteAppValidationConfiguration



```js
amazonaws_sms.DeleteAppValidationConfiguration({
  "appId": null
}, context)
```

#### Input
* input `object`
  * appId **required**

#### Output
* output [DeleteAppValidationConfigurationResponse](#deleteappvalidationconfigurationresponse)

### DeleteReplicationJob



```js
amazonaws_sms.DeleteReplicationJob({
  "replicationJobId": null
}, context)
```

#### Input
* input `object`
  * replicationJobId **required**

#### Output
* output [DeleteReplicationJobResponse](#deletereplicationjobresponse)

### DeleteServerCatalog



```js
amazonaws_sms.DeleteServerCatalog({}, context)
```

#### Input
* input `object`

#### Output
* output [DeleteServerCatalogResponse](#deleteservercatalogresponse)

### DisassociateConnector



```js
amazonaws_sms.DisassociateConnector({
  "connectorId": null
}, context)
```

#### Input
* input `object`
  * connectorId **required**

#### Output
* output [DisassociateConnectorResponse](#disassociateconnectorresponse)

### GenerateChangeSet



```js
amazonaws_sms.GenerateChangeSet({}, context)
```

#### Input
* input `object`
  * appId
  * changesetFormat

#### Output
* output [GenerateChangeSetResponse](#generatechangesetresponse)

### GenerateTemplate



```js
amazonaws_sms.GenerateTemplate({}, context)
```

#### Input
* input `object`
  * appId
  * templateFormat

#### Output
* output [GenerateTemplateResponse](#generatetemplateresponse)

### GetApp



```js
amazonaws_sms.GetApp({}, context)
```

#### Input
* input `object`
  * appId

#### Output
* output [GetAppResponse](#getappresponse)

### GetAppLaunchConfiguration



```js
amazonaws_sms.GetAppLaunchConfiguration({}, context)
```

#### Input
* input `object`
  * appId

#### Output
* output [GetAppLaunchConfigurationResponse](#getapplaunchconfigurationresponse)

### GetAppReplicationConfiguration



```js
amazonaws_sms.GetAppReplicationConfiguration({}, context)
```

#### Input
* input `object`
  * appId

#### Output
* output [GetAppReplicationConfigurationResponse](#getappreplicationconfigurationresponse)

### GetAppValidationConfiguration



```js
amazonaws_sms.GetAppValidationConfiguration({
  "appId": null
}, context)
```

#### Input
* input `object`
  * appId **required**

#### Output
* output [GetAppValidationConfigurationResponse](#getappvalidationconfigurationresponse)

### GetAppValidationOutput



```js
amazonaws_sms.GetAppValidationOutput({
  "appId": null
}, context)
```

#### Input
* input `object`
  * appId **required**

#### Output
* output [GetAppValidationOutputResponse](#getappvalidationoutputresponse)

### GetConnectors



```js
amazonaws_sms.GetConnectors({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken

#### Output
* output [GetConnectorsResponse](#getconnectorsresponse)

### GetReplicationJobs



```js
amazonaws_sms.GetReplicationJobs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * replicationJobId

#### Output
* output [GetReplicationJobsResponse](#getreplicationjobsresponse)

### GetReplicationRuns



```js
amazonaws_sms.GetReplicationRuns({
  "replicationJobId": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * replicationJobId **required**

#### Output
* output [GetReplicationRunsResponse](#getreplicationrunsresponse)

### GetServers



```js
amazonaws_sms.GetServers({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * vmServerAddressList
    * items [VmServerAddress](#vmserveraddress)

#### Output
* output [GetServersResponse](#getserversresponse)

### ImportAppCatalog



```js
amazonaws_sms.ImportAppCatalog({}, context)
```

#### Input
* input `object`
  * roleName

#### Output
* output [ImportAppCatalogResponse](#importappcatalogresponse)

### ImportServerCatalog



```js
amazonaws_sms.ImportServerCatalog({}, context)
```

#### Input
* input `object`

#### Output
* output [ImportServerCatalogResponse](#importservercatalogresponse)

### LaunchApp



```js
amazonaws_sms.LaunchApp({}, context)
```

#### Input
* input `object`
  * appId

#### Output
* output [LaunchAppResponse](#launchappresponse)

### ListApps



```js
amazonaws_sms.ListApps({}, context)
```

#### Input
* input `object`
  * appIds
    * items [AppId](#appid)
  * maxResults
  * nextToken

#### Output
* output [ListAppsResponse](#listappsresponse)

### NotifyAppValidationOutput



```js
amazonaws_sms.NotifyAppValidationOutput({
  "appId": null
}, context)
```

#### Input
* input `object`
  * appId **required**
  * notificationContext
    * status
    * statusMessage
    * validationId

#### Output
* output [NotifyAppValidationOutputResponse](#notifyappvalidationoutputresponse)

### PutAppLaunchConfiguration



```js
amazonaws_sms.PutAppLaunchConfiguration({}, context)
```

#### Input
* input `object`
  * appId
  * autoLaunch
  * roleName
  * serverGroupLaunchConfigurations
    * items [ServerGroupLaunchConfiguration](#servergrouplaunchconfiguration)

#### Output
* output [PutAppLaunchConfigurationResponse](#putapplaunchconfigurationresponse)

### PutAppReplicationConfiguration



```js
amazonaws_sms.PutAppReplicationConfiguration({}, context)
```

#### Input
* input `object`
  * appId
  * serverGroupReplicationConfigurations
    * items [ServerGroupReplicationConfiguration](#servergroupreplicationconfiguration)

#### Output
* output [PutAppReplicationConfigurationResponse](#putappreplicationconfigurationresponse)

### PutAppValidationConfiguration



```js
amazonaws_sms.PutAppValidationConfiguration({
  "appId": null
}, context)
```

#### Input
* input `object`
  * appId **required**
  * appValidationConfigurations
    * items [AppValidationConfiguration](#appvalidationconfiguration)
  * serverGroupValidationConfigurations
    * items [ServerGroupValidationConfiguration](#servergroupvalidationconfiguration)

#### Output
* output [PutAppValidationConfigurationResponse](#putappvalidationconfigurationresponse)

### StartAppReplication



```js
amazonaws_sms.StartAppReplication({}, context)
```

#### Input
* input `object`
  * appId

#### Output
* output [StartAppReplicationResponse](#startappreplicationresponse)

### StartOnDemandAppReplication



```js
amazonaws_sms.StartOnDemandAppReplication({
  "appId": null
}, context)
```

#### Input
* input `object`
  * appId **required**
  * description

#### Output
* output [StartOnDemandAppReplicationResponse](#startondemandappreplicationresponse)

### StartOnDemandReplicationRun



```js
amazonaws_sms.StartOnDemandReplicationRun({
  "replicationJobId": null
}, context)
```

#### Input
* input `object`
  * description
  * replicationJobId **required**

#### Output
* output [StartOnDemandReplicationRunResponse](#startondemandreplicationrunresponse)

### StopAppReplication



```js
amazonaws_sms.StopAppReplication({}, context)
```

#### Input
* input `object`
  * appId

#### Output
* output [StopAppReplicationResponse](#stopappreplicationresponse)

### TerminateApp



```js
amazonaws_sms.TerminateApp({}, context)
```

#### Input
* input `object`
  * appId

#### Output
* output [TerminateAppResponse](#terminateappresponse)

### UpdateApp



```js
amazonaws_sms.UpdateApp({}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * appId
  * description
  * name
  * roleName
  * serverGroups
    * items [ServerGroup](#servergroup)

#### Output
* output [UpdateAppResponse](#updateappresponse)

### UpdateReplicationJob



```js
amazonaws_sms.UpdateReplicationJob({
  "replicationJobId": null
}, context)
```

#### Input
* input `object`
  * description
  * encrypted
  * frequency
  * kmsKeyId
  * licenseType
  * nextReplicationRunStartTime
  * numberOfRecentAmisToKeep
  * replicationJobId **required**
  * roleName

#### Output
* output [UpdateReplicationJobResponse](#updatereplicationjobresponse)



## Definitions

### AmiId
* AmiId `string`

### AppDescription
* AppDescription `string`

### AppId
* AppId `string`

### AppIdWithValidation
* AppIdWithValidation `string`

### AppIds
* AppIds `array`
  * items [AppId](#appid)

### AppLaunchConfigurationStatus
* AppLaunchConfigurationStatus `string` (values: NOT_CONFIGURED, CONFIGURED)

### AppLaunchStatus
* AppLaunchStatus `string` (values: READY_FOR_CONFIGURATION, CONFIGURATION_IN_PROGRESS, CONFIGURATION_INVALID, READY_FOR_LAUNCH, VALIDATION_IN_PROGRESS, LAUNCH_PENDING, LAUNCH_IN_PROGRESS, LAUNCHED, PARTIALLY_LAUNCHED, DELTA_LAUNCH_IN_PROGRESS, DELTA_LAUNCH_FAILED, LAUNCH_FAILED, TERMINATE_IN_PROGRESS, TERMINATE_FAILED, TERMINATED)

### AppLaunchStatusMessage
* AppLaunchStatusMessage `string`

### AppName
* AppName `string`

### AppReplicationConfigurationStatus
* AppReplicationConfigurationStatus `string` (values: NOT_CONFIGURED, CONFIGURED)

### AppReplicationStatus
* AppReplicationStatus `string` (values: READY_FOR_CONFIGURATION, CONFIGURATION_IN_PROGRESS, CONFIGURATION_INVALID, READY_FOR_REPLICATION, VALIDATION_IN_PROGRESS, REPLICATION_PENDING, REPLICATION_IN_PROGRESS, REPLICATED, PARTIALLY_REPLICATED, DELTA_REPLICATION_IN_PROGRESS, DELTA_REPLICATED, DELTA_REPLICATION_FAILED, REPLICATION_FAILED, REPLICATION_STOPPING, REPLICATION_STOP_FAILED, REPLICATION_STOPPED)

### AppReplicationStatusMessage
* AppReplicationStatusMessage `string`

### AppStatus
* AppStatus `string` (values: CREATING, ACTIVE, UPDATING, DELETING, DELETED, DELETE_FAILED)

### AppStatusMessage
* AppStatusMessage `string`

### AppSummary
* AppSummary `object`: Information about the application.
  * appId
  * creationTime
  * description
  * importedAppId
  * lastModified
  * latestReplicationTime
  * launchConfigurationStatus
  * launchDetails
    * latestLaunchTime
    * stackId
    * stackName
  * launchStatus
  * launchStatusMessage
  * name
  * replicationConfigurationStatus
  * replicationStatus
  * replicationStatusMessage
  * roleName
  * status
  * statusMessage
  * totalServerGroups
  * totalServers

### AppValidationConfiguration
* AppValidationConfiguration `object`: Configuration for validating an application.
  * appValidationStrategy
  * name
  * ssmValidationParameters
    * command
    * executionTimeoutSeconds
    * instanceId
    * outputS3BucketName
    * scriptType
    * source
      * s3Location [S3Location](#s3location)
  * validationId

### AppValidationConfigurations
* AppValidationConfigurations `array`
  * items [AppValidationConfiguration](#appvalidationconfiguration)

### AppValidationOutput
* AppValidationOutput `object`: Output from validating an application.
  * ssmOutput
    * s3Location [S3Location](#s3location)

### AppValidationStrategy
* AppValidationStrategy `string` (values: SSM)

### Apps
* Apps `array`
  * items [AppSummary](#appsummary)

### AssociatePublicIpAddress
* AssociatePublicIpAddress `boolean`

### AutoLaunch
* AutoLaunch `boolean`

### BucketName
* BucketName `string`

### ClientToken
* ClientToken `string`

### Command
* Command `string`

### Connector
* Connector `object`: Represents a connector.
  * associatedOn
  * capabilityList
    * items [ConnectorCapability](#connectorcapability)
  * connectorId
  * ipAddress
  * macAddress
  * status
  * version
  * vmManagerId
  * vmManagerName
  * vmManagerType

### ConnectorCapability
* ConnectorCapability `string` (values: VSPHERE, SCVMM, HYPERV-MANAGER, SNAPSHOT_BATCHING, SMS_OPTIMIZED)

### ConnectorCapabilityList
* ConnectorCapabilityList `array`
  * items [ConnectorCapability](#connectorcapability)

### ConnectorId
* ConnectorId `string`

### ConnectorList
* ConnectorList `array`
  * items [Connector](#connector)

### ConnectorStatus
* ConnectorStatus `string` (values: HEALTHY, UNHEALTHY)

### ConnectorVersion
* ConnectorVersion `string`

### CreateAppRequest
* CreateAppRequest `object`
  * tags
    * items [Tag](#tag)
  * clientToken
  * description
  * name
  * roleName
  * serverGroups
    * items [ServerGroup](#servergroup)

### CreateAppResponse
* CreateAppResponse `object`
  * tags
    * items [Tag](#tag)
  * appSummary
    * appId
    * creationTime
    * description
    * importedAppId
    * lastModified
    * latestReplicationTime
    * launchConfigurationStatus
    * launchDetails
      * latestLaunchTime
      * stackId
      * stackName
    * launchStatus
    * launchStatusMessage
    * name
    * replicationConfigurationStatus
    * replicationStatus
    * replicationStatusMessage
    * roleName
    * status
    * statusMessage
    * totalServerGroups
    * totalServers
  * serverGroups
    * items [ServerGroup](#servergroup)

### CreateReplicationJobRequest
* CreateReplicationJobRequest `object`
  * description
  * encrypted
  * frequency
  * kmsKeyId
  * licenseType
  * numberOfRecentAmisToKeep
  * roleName
  * runOnce
  * seedReplicationTime **required**
  * serverId **required**

### CreateReplicationJobResponse
* CreateReplicationJobResponse `object`
  * replicationJobId

### DeleteAppLaunchConfigurationRequest
* DeleteAppLaunchConfigurationRequest `object`
  * appId

### DeleteAppLaunchConfigurationResponse
* DeleteAppLaunchConfigurationResponse `object`

### DeleteAppReplicationConfigurationRequest
* DeleteAppReplicationConfigurationRequest `object`
  * appId

### DeleteAppReplicationConfigurationResponse
* DeleteAppReplicationConfigurationResponse `object`

### DeleteAppRequest
* DeleteAppRequest `object`
  * appId
  * forceStopAppReplication
  * forceTerminateApp

### DeleteAppResponse
* DeleteAppResponse `object`

### DeleteAppValidationConfigurationRequest
* DeleteAppValidationConfigurationRequest `object`
  * appId **required**

### DeleteAppValidationConfigurationResponse
* DeleteAppValidationConfigurationResponse `object`

### DeleteReplicationJobRequest
* DeleteReplicationJobRequest `object`
  * replicationJobId **required**

### DeleteReplicationJobResponse
* DeleteReplicationJobResponse `object`

### DeleteServerCatalogRequest
* DeleteServerCatalogRequest `object`

### DeleteServerCatalogResponse
* DeleteServerCatalogResponse `object`

### Description
* Description `string`

### DisassociateConnectorRequest
* DisassociateConnectorRequest `object`
  * connectorId **required**

### DisassociateConnectorResponse
* DisassociateConnectorResponse `object`

### DryRunOperationException


### EC2KeyName
* EC2KeyName `string`

### Encrypted
* Encrypted `boolean`

### ExecutionTimeoutSeconds
* ExecutionTimeoutSeconds `integer`

### ForceStopAppReplication
* ForceStopAppReplication `boolean`

### ForceTerminateApp
* ForceTerminateApp `boolean`

### Frequency
* Frequency `integer`

### GenerateChangeSetRequest
* GenerateChangeSetRequest `object`
  * appId
  * changesetFormat

### GenerateChangeSetResponse
* GenerateChangeSetResponse `object`
  * s3Location
    * bucket
    * key

### GenerateTemplateRequest
* GenerateTemplateRequest `object`
  * appId
  * templateFormat

### GenerateTemplateResponse
* GenerateTemplateResponse `object`
  * s3Location
    * bucket
    * key

### GetAppLaunchConfigurationRequest
* GetAppLaunchConfigurationRequest `object`
  * appId

### GetAppLaunchConfigurationResponse
* GetAppLaunchConfigurationResponse `object`
  * appId
  * autoLaunch
  * roleName
  * serverGroupLaunchConfigurations
    * items [ServerGroupLaunchConfiguration](#servergrouplaunchconfiguration)

### GetAppReplicationConfigurationRequest
* GetAppReplicationConfigurationRequest `object`
  * appId

### GetAppReplicationConfigurationResponse
* GetAppReplicationConfigurationResponse `object`
  * serverGroupReplicationConfigurations
    * items [ServerGroupReplicationConfiguration](#servergroupreplicationconfiguration)

### GetAppRequest
* GetAppRequest `object`
  * appId

### GetAppResponse
* GetAppResponse `object`
  * tags
    * items [Tag](#tag)
  * appSummary
    * appId
    * creationTime
    * description
    * importedAppId
    * lastModified
    * latestReplicationTime
    * launchConfigurationStatus
    * launchDetails
      * latestLaunchTime
      * stackId
      * stackName
    * launchStatus
    * launchStatusMessage
    * name
    * replicationConfigurationStatus
    * replicationStatus
    * replicationStatusMessage
    * roleName
    * status
    * statusMessage
    * totalServerGroups
    * totalServers
  * serverGroups
    * items [ServerGroup](#servergroup)

### GetAppValidationConfigurationRequest
* GetAppValidationConfigurationRequest `object`
  * appId **required**

### GetAppValidationConfigurationResponse
* GetAppValidationConfigurationResponse `object`
  * appValidationConfigurations
    * items [AppValidationConfiguration](#appvalidationconfiguration)
  * serverGroupValidationConfigurations
    * items [ServerGroupValidationConfiguration](#servergroupvalidationconfiguration)

### GetAppValidationOutputRequest
* GetAppValidationOutputRequest `object`
  * appId **required**

### GetAppValidationOutputResponse
* GetAppValidationOutputResponse `object`
  * validationOutputList
    * items [ValidationOutput](#validationoutput)

### GetConnectorsRequest
* GetConnectorsRequest `object`
  * maxResults
  * nextToken

### GetConnectorsResponse
* GetConnectorsResponse `object`
  * connectorList
    * items [Connector](#connector)
  * nextToken

### GetReplicationJobsRequest
* GetReplicationJobsRequest `object`
  * maxResults
  * nextToken
  * replicationJobId

### GetReplicationJobsResponse
* GetReplicationJobsResponse `object`
  * nextToken
  * replicationJobList
    * items [ReplicationJob](#replicationjob)

### GetReplicationRunsRequest
* GetReplicationRunsRequest `object`
  * maxResults
  * nextToken
  * replicationJobId **required**

### GetReplicationRunsResponse
* GetReplicationRunsResponse `object`
  * nextToken
  * replicationJob
    * description
    * encrypted
    * frequency
    * kmsKeyId
    * latestAmiId
    * licenseType
    * nextReplicationRunStartTime
    * numberOfRecentAmisToKeep
    * replicationJobId
    * replicationRunList
      * items [ReplicationRun](#replicationrun)
    * roleName
    * runOnce
    * seedReplicationTime
    * serverId
    * serverType
    * state
    * statusMessage
    * vmServer
      * vmManagerName
      * vmManagerType
      * vmName
      * vmPath
      * vmServerAddress
        * vmId
        * vmManagerId
  * replicationRunList
    * items [ReplicationRun](#replicationrun)

### GetServersRequest
* GetServersRequest `object`
  * maxResults
  * nextToken
  * vmServerAddressList
    * items [VmServerAddress](#vmserveraddress)

### GetServersResponse
* GetServersResponse `object`
  * lastModifiedOn
  * nextToken
  * serverCatalogStatus
  * serverList
    * items [Server](#server)

### ImportAppCatalogRequest
* ImportAppCatalogRequest `object`
  * roleName

### ImportAppCatalogResponse
* ImportAppCatalogResponse `object`

### ImportServerCatalogRequest
* ImportServerCatalogRequest `object`

### ImportServerCatalogResponse
* ImportServerCatalogResponse `object`

### ImportedAppId
* ImportedAppId `string`

### InstanceId
* InstanceId `string`

### InstanceType
* InstanceType `string`

### InternalError


### InvalidParameterException


### IpAddress
* IpAddress `string`

### KmsKeyId
* KmsKeyId `string`

### LaunchAppRequest
* LaunchAppRequest `object`
  * appId

### LaunchAppResponse
* LaunchAppResponse `object`

### LaunchDetails
* LaunchDetails `object`: Details about the latest launch of an application.
  * latestLaunchTime
  * stackId
  * stackName

### LaunchOrder
* LaunchOrder `integer`

### LicenseType
* LicenseType `string` (values: AWS, BYOL)

### ListAppsRequest
* ListAppsRequest `object`
  * appIds
    * items [AppId](#appid)
  * maxResults
  * nextToken

### ListAppsResponse
* ListAppsResponse `object`
  * apps
    * items [AppSummary](#appsummary)
  * nextToken

### LogicalId
* LogicalId `string`

### MacAddress
* MacAddress `string`

### MaxResults
* MaxResults `integer`

### MissingRequiredParameterException


### NextToken
* NextToken `string`

### NoConnectorsAvailableException


### NonEmptyStringWithMaxLen255
* NonEmptyStringWithMaxLen255 `string`

### NotificationContext
* NotificationContext `object`: Contains the status of validating an application.
  * status
  * statusMessage
  * validationId

### NotifyAppValidationOutputRequest
* NotifyAppValidationOutputRequest `object`
  * appId **required**
  * notificationContext
    * status
    * statusMessage
    * validationId

### NotifyAppValidationOutputResponse
* NotifyAppValidationOutputResponse `object`

### NumberOfRecentAmisToKeep
* NumberOfRecentAmisToKeep `integer`

### OperationNotPermittedException


### OutputFormat
* OutputFormat `string` (values: JSON, YAML)

### PutAppLaunchConfigurationRequest
* PutAppLaunchConfigurationRequest `object`
  * appId
  * autoLaunch
  * roleName
  * serverGroupLaunchConfigurations
    * items [ServerGroupLaunchConfiguration](#servergrouplaunchconfiguration)

### PutAppLaunchConfigurationResponse
* PutAppLaunchConfigurationResponse `object`

### PutAppReplicationConfigurationRequest
* PutAppReplicationConfigurationRequest `object`
  * appId
  * serverGroupReplicationConfigurations
    * items [ServerGroupReplicationConfiguration](#servergroupreplicationconfiguration)

### PutAppReplicationConfigurationResponse
* PutAppReplicationConfigurationResponse `object`

### PutAppValidationConfigurationRequest
* PutAppValidationConfigurationRequest `object`
  * appId **required**
  * appValidationConfigurations
    * items [AppValidationConfiguration](#appvalidationconfiguration)
  * serverGroupValidationConfigurations
    * items [ServerGroupValidationConfiguration](#servergroupvalidationconfiguration)

### PutAppValidationConfigurationResponse
* PutAppValidationConfigurationResponse `object`

### ReplicationJob
* ReplicationJob `object`: Represents a replication job.
  * description
  * encrypted
  * frequency
  * kmsKeyId
  * latestAmiId
  * licenseType
  * nextReplicationRunStartTime
  * numberOfRecentAmisToKeep
  * replicationJobId
  * replicationRunList
    * items [ReplicationRun](#replicationrun)
  * roleName
  * runOnce
  * seedReplicationTime
  * serverId
  * serverType
  * state
  * statusMessage
  * vmServer
    * vmManagerName
    * vmManagerType
    * vmName
    * vmPath
    * vmServerAddress
      * vmId
      * vmManagerId

### ReplicationJobAlreadyExistsException


### ReplicationJobId
* ReplicationJobId `string`

### ReplicationJobList
* ReplicationJobList `array`
  * items [ReplicationJob](#replicationjob)

### ReplicationJobNotFoundException


### ReplicationJobState
* ReplicationJobState `string` (values: PENDING, ACTIVE, FAILED, DELETING, DELETED, COMPLETED, PAUSED_ON_FAILURE, FAILING)

### ReplicationJobStatusMessage
* ReplicationJobStatusMessage `string`

### ReplicationJobTerminated
* ReplicationJobTerminated `boolean`

### ReplicationRun
* ReplicationRun `object`: Represents a replication run.
  * amiId
  * completedTime
  * description
  * encrypted
  * kmsKeyId
  * replicationRunId
  * scheduledStartTime
  * stageDetails
    * stage
    * stageProgress
  * state
  * statusMessage
  * type

### ReplicationRunId
* ReplicationRunId `string`

### ReplicationRunLimitExceededException


### ReplicationRunList
* ReplicationRunList `array`
  * items [ReplicationRun](#replicationrun)

### ReplicationRunStage
* ReplicationRunStage `string`

### ReplicationRunStageDetails
* ReplicationRunStageDetails `object`: Details of the current stage of a replication run.
  * stage
  * stageProgress

### ReplicationRunStageProgress
* ReplicationRunStageProgress `string`

### ReplicationRunState
* ReplicationRunState `string` (values: PENDING, MISSED, ACTIVE, FAILED, COMPLETED, DELETING, DELETED)

### ReplicationRunStatusMessage
* ReplicationRunStatusMessage `string`

### ReplicationRunType
* ReplicationRunType `string` (values: ON_DEMAND, AUTOMATIC)

### RoleName
* RoleName `string`

### RunOnce
* RunOnce `boolean`

### S3BucketName
* S3BucketName `string`

### S3KeyName
* S3KeyName `string`

### S3Location
* S3Location `object`: Location of an Amazon S3 object.
  * bucket
  * key

### SSMOutput
* SSMOutput `object`: Contains the location of validation output.
  * s3Location [S3Location](#s3location)

### SSMValidationParameters
* SSMValidationParameters `object`: Contains validation parameters.
  * command
  * executionTimeoutSeconds
  * instanceId
  * outputS3BucketName
  * scriptType
  * source
    * s3Location [S3Location](#s3location)

### ScriptType
* ScriptType `string` (values: SHELL_SCRIPT, POWERSHELL_SCRIPT)

### SecurityGroup
* SecurityGroup `string`

### Server
* Server `object`: Represents a server.
  * replicationJobId
  * replicationJobTerminated
  * serverId
  * serverType
  * vmServer
    * vmManagerName
    * vmManagerType
    * vmName
    * vmPath
    * vmServerAddress
      * vmId
      * vmManagerId

### ServerCannotBeReplicatedException


### ServerCatalogStatus
* ServerCatalogStatus `string` (values: NOT_IMPORTED, IMPORTING, AVAILABLE, DELETED, EXPIRED)

### ServerGroup
* ServerGroup `object`: Logical grouping of servers.
  * name
  * serverGroupId
  * serverList
    * items [Server](#server)

### ServerGroupId
* ServerGroupId `string`

### ServerGroupLaunchConfiguration
* ServerGroupLaunchConfiguration `object`: Launch configuration for a server group.
  * launchOrder
  * serverGroupId
  * serverLaunchConfigurations
    * items [ServerLaunchConfiguration](#serverlaunchconfiguration)

### ServerGroupLaunchConfigurations
* ServerGroupLaunchConfigurations `array`
  * items [ServerGroupLaunchConfiguration](#servergrouplaunchconfiguration)

### ServerGroupName
* ServerGroupName `string`

### ServerGroupReplicationConfiguration
* ServerGroupReplicationConfiguration `object`: Replication configuration for a server group.
  * serverGroupId
  * serverReplicationConfigurations
    * items [ServerReplicationConfiguration](#serverreplicationconfiguration)

### ServerGroupReplicationConfigurations
* ServerGroupReplicationConfigurations `array`
  * items [ServerGroupReplicationConfiguration](#servergroupreplicationconfiguration)

### ServerGroupValidationConfiguration
* ServerGroupValidationConfiguration `object`: Configuration for validating an instance.
  * serverGroupId
  * serverValidationConfigurations
    * items [ServerValidationConfiguration](#servervalidationconfiguration)

### ServerGroupValidationConfigurations
* ServerGroupValidationConfigurations `array`
  * items [ServerGroupValidationConfiguration](#servergroupvalidationconfiguration)

### ServerGroups
* ServerGroups `array`
  * items [ServerGroup](#servergroup)

### ServerId
* ServerId `string`

### ServerLaunchConfiguration
* ServerLaunchConfiguration `object`: Launch configuration for a server.
  * associatePublicIpAddress
  * configureScript [S3Location](#s3location)
  * configureScriptType
  * ec2KeyName
  * iamInstanceProfileName
  * instanceType
  * logicalId
  * securityGroup
  * server
    * replicationJobId
    * replicationJobTerminated
    * serverId
    * serverType
    * vmServer
      * vmManagerName
      * vmManagerType
      * vmName
      * vmPath
      * vmServerAddress
        * vmId
        * vmManagerId
  * subnet
  * userData
    * s3Location
      * bucket
      * key
  * vpc

### ServerLaunchConfigurations
* ServerLaunchConfigurations `array`
  * items [ServerLaunchConfiguration](#serverlaunchconfiguration)

### ServerList
* ServerList `array`
  * items [Server](#server)

### ServerReplicationConfiguration
* ServerReplicationConfiguration `object`: Replication configuration of a server.
  * server
    * replicationJobId
    * replicationJobTerminated
    * serverId
    * serverType
    * vmServer
      * vmManagerName
      * vmManagerType
      * vmName
      * vmPath
      * vmServerAddress
        * vmId
        * vmManagerId
  * serverReplicationParameters
    * encrypted
    * frequency
    * kmsKeyId
    * licenseType
    * numberOfRecentAmisToKeep
    * runOnce
    * seedTime

### ServerReplicationConfigurations
* ServerReplicationConfigurations `array`
  * items [ServerReplicationConfiguration](#serverreplicationconfiguration)

### ServerReplicationParameters
* ServerReplicationParameters `object`: The replication parameters for replicating a server.
  * encrypted
  * frequency
  * kmsKeyId
  * licenseType
  * numberOfRecentAmisToKeep
  * runOnce
  * seedTime

### ServerType
* ServerType `string` (values: VIRTUAL_MACHINE)

### ServerValidationConfiguration
* ServerValidationConfiguration `object`: Configuration for validating an instance.
  * name
  * server [Server](#server)
  * serverValidationStrategy
  * userDataValidationParameters
    * scriptType
    * source
      * s3Location [S3Location](#s3location)
  * validationId

### ServerValidationConfigurations
* ServerValidationConfigurations `array`
  * items [ServerValidationConfiguration](#servervalidationconfiguration)

### ServerValidationOutput
* ServerValidationOutput `object`: Contains output from validating an instance.
  * server [Server](#server)

### ServerValidationStrategy
* ServerValidationStrategy `string` (values: USERDATA)

### Source
* Source `object`: Contains the location of a validation script.
  * s3Location [S3Location](#s3location)

### StackId
* StackId `string`

### StackName
* StackName `string`

### StartAppReplicationRequest
* StartAppReplicationRequest `object`
  * appId

### StartAppReplicationResponse
* StartAppReplicationResponse `object`

### StartOnDemandAppReplicationRequest
* StartOnDemandAppReplicationRequest `object`
  * appId **required**
  * description

### StartOnDemandAppReplicationResponse
* StartOnDemandAppReplicationResponse `object`

### StartOnDemandReplicationRunRequest
* StartOnDemandReplicationRunRequest `object`
  * description
  * replicationJobId **required**

### StartOnDemandReplicationRunResponse
* StartOnDemandReplicationRunResponse `object`
  * replicationRunId

### StopAppReplicationRequest
* StopAppReplicationRequest `object`
  * appId

### StopAppReplicationResponse
* StopAppReplicationResponse `object`

### Subnet
* Subnet `string`

### Tag
* Tag `object`: Key/value pair that can be assigned to an application.
  * key
  * value

### TagKey
* TagKey `string`

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TemporarilyUnavailableException


### TerminateAppRequest
* TerminateAppRequest `object`
  * appId

### TerminateAppResponse
* TerminateAppResponse `object`

### Timestamp
* Timestamp `string`

### TotalServerGroups
* TotalServerGroups `integer`

### TotalServers
* TotalServers `integer`

### UnauthorizedOperationException


### UpdateAppRequest
* UpdateAppRequest `object`
  * tags
    * items [Tag](#tag)
  * appId
  * description
  * name
  * roleName
  * serverGroups
    * items [ServerGroup](#servergroup)

### UpdateAppResponse
* UpdateAppResponse `object`
  * tags
    * items [Tag](#tag)
  * appSummary
    * appId
    * creationTime
    * description
    * importedAppId
    * lastModified
    * latestReplicationTime
    * launchConfigurationStatus
    * launchDetails
      * latestLaunchTime
      * stackId
      * stackName
    * launchStatus
    * launchStatusMessage
    * name
    * replicationConfigurationStatus
    * replicationStatus
    * replicationStatusMessage
    * roleName
    * status
    * statusMessage
    * totalServerGroups
    * totalServers
  * serverGroups
    * items [ServerGroup](#servergroup)

### UpdateReplicationJobRequest
* UpdateReplicationJobRequest `object`
  * description
  * encrypted
  * frequency
  * kmsKeyId
  * licenseType
  * nextReplicationRunStartTime
  * numberOfRecentAmisToKeep
  * replicationJobId **required**
  * roleName

### UpdateReplicationJobResponse
* UpdateReplicationJobResponse `object`

### UserData
* UserData `object`: A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch.
  * s3Location
    * bucket
    * key

### UserDataValidationParameters
* UserDataValidationParameters `object`: Contains validation parameters.
  * scriptType
  * source
    * s3Location [S3Location](#s3location)

### VPC
* VPC `string`

### ValidationId
* ValidationId `string`

### ValidationOutput
* ValidationOutput `object`: Contains validation output.
  * appValidationOutput
    * ssmOutput
      * s3Location [S3Location](#s3location)
  * latestValidationTime
  * name
  * serverValidationOutput
    * server [Server](#server)
  * status
  * statusMessage
  * validationId

### ValidationOutputList
* ValidationOutputList `array`
  * items [ValidationOutput](#validationoutput)

### ValidationStatus
* ValidationStatus `string` (values: READY_FOR_VALIDATION, PENDING, IN_PROGRESS, SUCCEEDED, FAILED)

### ValidationStatusMessage
* ValidationStatusMessage `string`

### VmId
* VmId `string`

### VmManagerId
* VmManagerId `string`

### VmManagerName
* VmManagerName `string`

### VmManagerType
* VmManagerType `string` (values: VSPHERE, SCVMM, HYPERV-MANAGER)

### VmName
* VmName `string`

### VmPath
* VmPath `string`

### VmServer
* VmServer `object`: Represents a VM server.
  * vmManagerName
  * vmManagerType
  * vmName
  * vmPath
  * vmServerAddress
    * vmId
    * vmManagerId

### VmServerAddress
* VmServerAddress `object`: Represents a VM server location.
  * vmId
  * vmManagerId

### VmServerAddressList
* VmServerAddressList `array`
  * items [VmServerAddress](#vmserveraddress)


