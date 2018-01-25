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

amazonaws_sms.CreateReplicationJob({
  "serverId": "",
  "seedReplicationTime": "",
  "frequency": 0
}).then(data => {
  console.log(data);
});
```

## Description

Amazon Server Migration Service automates the process of migrating servers to EC2.

## Actions

### CreateReplicationJob



```js
amazonaws_sms.CreateReplicationJob({
  "serverId": "",
  "seedReplicationTime": "",
  "frequency": 0
}, context)
```

#### Input
* input `object`
  * description [Description](#description)
  * frequency **required** [Frequency](#frequency)
  * licenseType [LicenseType](#licensetype)
  * roleName [RoleName](#rolename)
  * seedReplicationTime **required** [Timestamp](#timestamp)
  * serverId **required** [ServerId](#serverid)

#### Output
* output [CreateReplicationJobResponse](#createreplicationjobresponse)

### DeleteReplicationJob



```js
amazonaws_sms.DeleteReplicationJob({
  "replicationJobId": ""
}, context)
```

#### Input
* input `object`
  * replicationJobId **required** [ReplicationJobId](#replicationjobid)

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
  "connectorId": ""
}, context)
```

#### Input
* input `object`
  * connectorId **required** [ConnectorId](#connectorid)

#### Output
* output [DisassociateConnectorResponse](#disassociateconnectorresponse)

### GetConnectors



```js
amazonaws_sms.GetConnectors({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)

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
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * replicationJobId [ReplicationJobId](#replicationjobid)

#### Output
* output [GetReplicationJobsResponse](#getreplicationjobsresponse)

### GetReplicationRuns



```js
amazonaws_sms.GetReplicationRuns({
  "replicationJobId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * replicationJobId **required** [ReplicationJobId](#replicationjobid)

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
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [GetServersResponse](#getserversresponse)

### ImportServerCatalog



```js
amazonaws_sms.ImportServerCatalog({}, context)
```

#### Input
* input `object`

#### Output
* output [ImportServerCatalogResponse](#importservercatalogresponse)

### StartOnDemandReplicationRun



```js
amazonaws_sms.StartOnDemandReplicationRun({
  "replicationJobId": ""
}, context)
```

#### Input
* input `object`
  * description [Description](#description)
  * replicationJobId **required** [ReplicationJobId](#replicationjobid)

#### Output
* output [StartOnDemandReplicationRunResponse](#startondemandreplicationrunresponse)

### UpdateReplicationJob



```js
amazonaws_sms.UpdateReplicationJob({
  "replicationJobId": ""
}, context)
```

#### Input
* input `object`
  * description [Description](#description)
  * frequency [Frequency](#frequency)
  * licenseType [LicenseType](#licensetype)
  * nextReplicationRunStartTime [Timestamp](#timestamp)
  * replicationJobId **required** [ReplicationJobId](#replicationjobid)
  * roleName [RoleName](#rolename)

#### Output
* output [UpdateReplicationJobResponse](#updatereplicationjobresponse)



## Definitions

### AmiId
* AmiId `string`: The AMI id for the image resulting from a Replication Run.

### Connector
* Connector `object`: Object representing a Connector
  * associatedOn [Timestamp](#timestamp)
  * capabilityList [ConnectorCapabilityList](#connectorcapabilitylist)
  * connectorId [ConnectorId](#connectorid)
  * ipAddress [IpAddress](#ipaddress)
  * macAddress [MacAddress](#macaddress)
  * status [ConnectorStatus](#connectorstatus)
  * version [ConnectorVersion](#connectorversion)
  * vmManagerId [VmManagerId](#vmmanagerid)
  * vmManagerName [VmManagerName](#vmmanagername)
  * vmManagerType [VmManagerType](#vmmanagertype)

### ConnectorCapability
* ConnectorCapability `string` (values: VSPHERE): Capabilities for a Connector

### ConnectorCapabilityList
* ConnectorCapabilityList `array`: List of Connector Capabilities
  * items [ConnectorCapability](#connectorcapability)

### ConnectorId
* ConnectorId `string`: Unique Identifier for Connector

### ConnectorList
* ConnectorList `array`: List of connectors
  * items [Connector](#connector)

### ConnectorStatus
* ConnectorStatus `string` (values: HEALTHY, UNHEALTHY): Status of on-premise Connector

### ConnectorVersion
* ConnectorVersion `string`: Connector version string

### CreateReplicationJobRequest
* CreateReplicationJobRequest `object`
  * description [Description](#description)
  * frequency **required** [Frequency](#frequency)
  * licenseType [LicenseType](#licensetype)
  * roleName [RoleName](#rolename)
  * seedReplicationTime **required** [Timestamp](#timestamp)
  * serverId **required** [ServerId](#serverid)

### CreateReplicationJobResponse
* CreateReplicationJobResponse `object`
  * replicationJobId [ReplicationJobId](#replicationjobid)

### DeleteReplicationJobRequest
* DeleteReplicationJobRequest `object`
  * replicationJobId **required** [ReplicationJobId](#replicationjobid)

### DeleteReplicationJobResponse
* DeleteReplicationJobResponse `object`

### DeleteServerCatalogRequest
* DeleteServerCatalogRequest `object`

### DeleteServerCatalogResponse
* DeleteServerCatalogResponse `object`

### Description
* Description `string`: The description for a Replication Job/Run.

### DisassociateConnectorRequest
* DisassociateConnectorRequest `object`
  * connectorId **required** [ConnectorId](#connectorid)

### DisassociateConnectorResponse
* DisassociateConnectorResponse `object`

### ErrorMessage
* ErrorMessage `string`: Error Message string

### Frequency
* Frequency `integer`: Interval between Replication Runs. This value is specified in hours, and represents the time between consecutive Replication Runs.

### GetConnectorsRequest
* GetConnectorsRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)

### GetConnectorsResponse
* GetConnectorsResponse `object`
  * connectorList [ConnectorList](#connectorlist)
  * nextToken [NextToken](#nexttoken)

### GetReplicationJobsRequest
* GetReplicationJobsRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * replicationJobId [ReplicationJobId](#replicationjobid)

### GetReplicationJobsResponse
* GetReplicationJobsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * replicationJobList [ReplicationJobList](#replicationjoblist)

### GetReplicationRunsRequest
* GetReplicationRunsRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * replicationJobId **required** [ReplicationJobId](#replicationjobid)

### GetReplicationRunsResponse
* GetReplicationRunsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * replicationJob [ReplicationJob](#replicationjob)
  * replicationRunList [ReplicationRunList](#replicationrunlist)

### GetServersRequest
* GetServersRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)

### GetServersResponse
* GetServersResponse `object`
  * lastModifiedOn [Timestamp](#timestamp)
  * nextToken [NextToken](#nexttoken)
  * serverCatalogStatus [ServerCatalogStatus](#servercatalogstatus)
  * serverList [ServerList](#serverlist)

### ImportServerCatalogRequest
* ImportServerCatalogRequest `object`

### ImportServerCatalogResponse
* ImportServerCatalogResponse `object`

### InternalError
* InternalError `object`: An internal error has occured.
  * message [ErrorMessage](#errormessage)

### InvalidParameterException
* InvalidParameterException `object`: A parameter specified in the request is not valid, is unsupported, or cannot be used.
  * message [ErrorMessage](#errormessage)

### IpAddress
* IpAddress `string`: Internet Protocol (IP) Address

### LicenseType
* LicenseType `string` (values: AWS, BYOL): The license type to be used for the Amazon Machine Image (AMI) created after a successful ReplicationRun.

### MacAddress
* MacAddress `string`: Hardware (MAC) address

### MaxResults
* MaxResults `integer`: The maximum number of results to return in one API call. If left empty, this will default to 50.

### MissingRequiredParameterException
* MissingRequiredParameterException `object`: The request is missing a required parameter. Ensure that you have supplied all the required parameters for the request.
  * message [ErrorMessage](#errormessage)

### NextToken
* NextToken `string`: Pagination token to pass as input to API call

### NoConnectorsAvailableException
* NoConnectorsAvailableException `object`: No connectors are available to handle this request. Please associate connector(s) and verify any existing connectors are healthy and can respond to requests.
  * message [ErrorMessage](#errormessage)

### OperationNotPermittedException
* OperationNotPermittedException `object`: The specified operation is not allowed. This error can occur for a number of reasons; for example, you might be trying to start a Replication Run before seed Replication Run.
  * message [ErrorMessage](#errormessage)

### ReplicationJob
* ReplicationJob `object`: Object representing a Replication Job
  * description [Description](#description)
  * frequency [Frequency](#frequency)
  * latestAmiId [AmiId](#amiid)
  * licenseType [LicenseType](#licensetype)
  * nextReplicationRunStartTime [Timestamp](#timestamp)
  * replicationJobId [ReplicationJobId](#replicationjobid)
  * replicationRunList [ReplicationRunList](#replicationrunlist)
  * roleName [RoleName](#rolename)
  * seedReplicationTime [Timestamp](#timestamp)
  * serverId [ServerId](#serverid)
  * serverType [ServerType](#servertype)
  * state [ReplicationJobState](#replicationjobstate)
  * statusMessage [ReplicationJobStatusMessage](#replicationjobstatusmessage)
  * vmServer [VmServer](#vmserver)

### ReplicationJobAlreadyExistsException
* ReplicationJobAlreadyExistsException `object`: An active Replication Job already exists for the specified server.
  * message [ErrorMessage](#errormessage)

### ReplicationJobId
* ReplicationJobId `string`: The unique identifier for a Replication Job.

### ReplicationJobList
* ReplicationJobList `array`: List of Replication Jobs
  * items [ReplicationJob](#replicationjob)

### ReplicationJobNotFoundException
* ReplicationJobNotFoundException `object`: The specified Replication Job cannot be found.
  * message [ErrorMessage](#errormessage)

### ReplicationJobState
* ReplicationJobState `string` (values: PENDING, ACTIVE, FAILED, DELETING, DELETED): Current state of Replication Job

### ReplicationJobStatusMessage
* ReplicationJobStatusMessage `string`: String describing current status of Replication Job

### ReplicationJobTerminated
* ReplicationJobTerminated `boolean`: An indicator of the Replication Job being deleted or failed.

### ReplicationRun
* ReplicationRun `object`: Object representing a Replication Run
  * amiId [AmiId](#amiid)
  * completedTime [Timestamp](#timestamp)
  * description [Description](#description)
  * replicationRunId [ReplicationRunId](#replicationrunid)
  * scheduledStartTime [Timestamp](#timestamp)
  * state [ReplicationRunState](#replicationrunstate)
  * statusMessage [ReplicationRunStatusMessage](#replicationrunstatusmessage)
  * type [ReplicationRunType](#replicationruntype)

### ReplicationRunId
* ReplicationRunId `string`: The unique identifier for a Replication Run.

### ReplicationRunLimitExceededException
* ReplicationRunLimitExceededException `object`: This user has exceeded the maximum allowed Replication Run limit.
  * message [ErrorMessage](#errormessage)

### ReplicationRunList
* ReplicationRunList `array`: List of Replication Runs
  * items [ReplicationRun](#replicationrun)

### ReplicationRunState
* ReplicationRunState `string` (values: PENDING, MISSED, ACTIVE, FAILED, COMPLETED, DELETING, DELETED): Current state of Replication Run

### ReplicationRunStatusMessage
* ReplicationRunStatusMessage `string`: String describing current status of Replication Run

### ReplicationRunType
* ReplicationRunType `string` (values: ON_DEMAND, AUTOMATIC): Type of Replication Run

### RoleName
* RoleName `string`: Name of service role in customer's account to be used by SMS service.

### Server
* Server `object`: Object representing a server
  * replicationJobId [ReplicationJobId](#replicationjobid)
  * replicationJobTerminated [ReplicationJobTerminated](#replicationjobterminated)
  * serverId [ServerId](#serverid)
  * serverType [ServerType](#servertype)
  * vmServer [VmServer](#vmserver)

### ServerCannotBeReplicatedException
* ServerCannotBeReplicatedException `object`: The provided server cannot be replicated.
  * message [ErrorMessage](#errormessage)

### ServerCatalogStatus
* ServerCatalogStatus `string` (values: NOT_IMPORTED, IMPORTING, AVAILABLE, DELETED, EXPIRED): Status of Server catalog

### ServerId
* ServerId `string`: Unique Identifier for a server

### ServerList
* ServerList `array`: List of servers from catalog
  * items [Server](#server)

### ServerType
* ServerType `string` (values: VIRTUAL_MACHINE): Type of server.

### StartOnDemandReplicationRunRequest
* StartOnDemandReplicationRunRequest `object`
  * description [Description](#description)
  * replicationJobId **required** [ReplicationJobId](#replicationjobid)

### StartOnDemandReplicationRunResponse
* StartOnDemandReplicationRunResponse `object`
  * replicationRunId [ReplicationRunId](#replicationrunid)

### Timestamp
* Timestamp `string`: Timestamp of an operation

### UnauthorizedOperationException
* UnauthorizedOperationException `object`: This user does not have permissions to perform this operation.
  * message [ErrorMessage](#errormessage)

### UpdateReplicationJobRequest
* UpdateReplicationJobRequest `object`
  * description [Description](#description)
  * frequency [Frequency](#frequency)
  * licenseType [LicenseType](#licensetype)
  * nextReplicationRunStartTime [Timestamp](#timestamp)
  * replicationJobId **required** [ReplicationJobId](#replicationjobid)
  * roleName [RoleName](#rolename)

### UpdateReplicationJobResponse
* UpdateReplicationJobResponse `object`

### VmId
* VmId `string`: Unique Identifier for a VM

### VmManagerId
* VmManagerId `string`: Unique Identifier for VM Manager

### VmManagerName
* VmManagerName `string`: VM Manager Name

### VmManagerType
* VmManagerType `string` (values: VSPHERE): VM Management Product

### VmName
* VmName `string`: Name of Virtual Machine

### VmPath
* VmPath `string`: Path to VM

### VmServer
* VmServer `object`: Object representing a VM server
  * vmManagerName [VmManagerName](#vmmanagername)
  * vmManagerType [VmManagerType](#vmmanagertype)
  * vmName [VmName](#vmname)
  * vmPath [VmPath](#vmpath)
  * vmServerAddress [VmServerAddress](#vmserveraddress)

### VmServerAddress
* VmServerAddress `object`: Object representing a server's location
  * vmId [VmId](#vmid)
  * vmManagerId [VmManagerId](#vmmanagerid)


