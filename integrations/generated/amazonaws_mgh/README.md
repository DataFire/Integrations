# @datafire/amazonaws_mgh

Client library for AWS Migration Hub

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mgh
```
```js
let amazonaws_mgh = require('@datafire/amazonaws_mgh').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_mgh.AssociateCreatedArtifact({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "CreatedArtifact": {
    "Name": ""
  }
}).then(data => {
  console.log(data);
});
```

## Description

The AWS Migration Hub API methods help to obtain server and application migration status and integrate your resource-specific migration tool by providing a programmatic interface to Migration Hub. 

## Actions

### AssociateCreatedArtifact



```js
amazonaws_mgh.AssociateCreatedArtifact({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "CreatedArtifact": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * CreatedArtifact **required** [CreatedArtifact](#createdartifact)
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

#### Output
* output [AssociateCreatedArtifactResult](#associatecreatedartifactresult)

### AssociateDiscoveredResource



```js
amazonaws_mgh.AssociateDiscoveredResource({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "DiscoveredResource": {
    "ConfigurationId": ""
  }
}, context)
```

#### Input
* input `object`
  * DiscoveredResource **required** [DiscoveredResource](#discoveredresource)
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

#### Output
* output [AssociateDiscoveredResourceResult](#associatediscoveredresourceresult)

### CreateProgressUpdateStream



```js
amazonaws_mgh.CreateProgressUpdateStream({
  "ProgressUpdateStreamName": ""
}, context)
```

#### Input
* input `object`
  * DryRun [DryRun](#dryrun)
  * ProgressUpdateStreamName **required** [ProgressUpdateStream](#progressupdatestream)

#### Output
* output [CreateProgressUpdateStreamResult](#createprogressupdatestreamresult)

### DeleteProgressUpdateStream



```js
amazonaws_mgh.DeleteProgressUpdateStream({
  "ProgressUpdateStreamName": ""
}, context)
```

#### Input
* input `object`
  * DryRun [DryRun](#dryrun)
  * ProgressUpdateStreamName **required** [ProgressUpdateStream](#progressupdatestream)

#### Output
* output [DeleteProgressUpdateStreamResult](#deleteprogressupdatestreamresult)

### DescribeApplicationState



```js
amazonaws_mgh.DescribeApplicationState({
  "ApplicationId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** [ApplicationId](#applicationid)

#### Output
* output [DescribeApplicationStateResult](#describeapplicationstateresult)

### DescribeMigrationTask



```js
amazonaws_mgh.DescribeMigrationTask({
  "ProgressUpdateStream": "",
  "MigrationTaskName": ""
}, context)
```

#### Input
* input `object`
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

#### Output
* output [DescribeMigrationTaskResult](#describemigrationtaskresult)

### DisassociateCreatedArtifact



```js
amazonaws_mgh.DisassociateCreatedArtifact({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "CreatedArtifactName": ""
}, context)
```

#### Input
* input `object`
  * CreatedArtifactName **required** [CreatedArtifactName](#createdartifactname)
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

#### Output
* output [DisassociateCreatedArtifactResult](#disassociatecreatedartifactresult)

### DisassociateDiscoveredResource



```js
amazonaws_mgh.DisassociateDiscoveredResource({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "ConfigurationId": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationId **required** [ConfigurationId](#configurationid)
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

#### Output
* output [DisassociateDiscoveredResourceResult](#disassociatediscoveredresourceresult)

### ImportMigrationTask



```js
amazonaws_mgh.ImportMigrationTask({
  "ProgressUpdateStream": "",
  "MigrationTaskName": ""
}, context)
```

#### Input
* input `object`
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

#### Output
* output [ImportMigrationTaskResult](#importmigrationtaskresult)

### ListCreatedArtifacts



```js
amazonaws_mgh.ListCreatedArtifacts({
  "ProgressUpdateStream": "",
  "MigrationTaskName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResultsCreatedArtifacts](#maxresultscreatedartifacts)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * NextToken [Token](#token)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

#### Output
* output [ListCreatedArtifactsResult](#listcreatedartifactsresult)

### ListDiscoveredResources



```js
amazonaws_mgh.ListDiscoveredResources({
  "ProgressUpdateStream": "",
  "MigrationTaskName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResultsResources](#maxresultsresources)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * NextToken [Token](#token)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

#### Output
* output [ListDiscoveredResourcesResult](#listdiscoveredresourcesresult)

### ListMigrationTasks



```js
amazonaws_mgh.ListMigrationTasks({}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [Token](#token)
  * ResourceName [ResourceName](#resourcename)

#### Output
* output [ListMigrationTasksResult](#listmigrationtasksresult)

### ListProgressUpdateStreams



```js
amazonaws_mgh.ListProgressUpdateStreams({}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [Token](#token)

#### Output
* output [ListProgressUpdateStreamsResult](#listprogressupdatestreamsresult)

### NotifyApplicationState



```js
amazonaws_mgh.NotifyApplicationState({
  "ApplicationId": "",
  "Status": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId **required** [ApplicationId](#applicationid)
  * DryRun [DryRun](#dryrun)
  * Status **required** [ApplicationStatus](#applicationstatus)

#### Output
* output [NotifyApplicationStateResult](#notifyapplicationstateresult)

### NotifyMigrationTaskState



```js
amazonaws_mgh.NotifyMigrationTaskState({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "Task": {
    "Status": ""
  },
  "UpdateDateTime": "",
  "NextUpdateSeconds": 0
}, context)
```

#### Input
* input `object`
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * NextUpdateSeconds **required** [NextUpdateSeconds](#nextupdateseconds)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)
  * Task **required** [Task](#task)
  * UpdateDateTime **required** [UpdateDateTime](#updatedatetime)

#### Output
* output [NotifyMigrationTaskStateResult](#notifymigrationtaskstateresult)

### PutResourceAttributes



```js
amazonaws_mgh.PutResourceAttributes({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "ResourceAttributeList": []
}, context)
```

#### Input
* input `object`
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)
  * ResourceAttributeList **required** [ResourceAttributeList](#resourceattributelist)

#### Output
* output [PutResourceAttributesResult](#putresourceattributesresult)



## Definitions

### AccessDeniedException
* AccessDeniedException `object`: You do not have sufficient access to perform this action.
  * Message [ErrorMessage](#errormessage)

### ApplicationId
* ApplicationId `string`

### ApplicationStatus
* ApplicationStatus `string` (values: NOT_STARTED, IN_PROGRESS, COMPLETED)

### AssociateCreatedArtifactRequest
* AssociateCreatedArtifactRequest `object`
  * CreatedArtifact **required** [CreatedArtifact](#createdartifact)
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

### AssociateCreatedArtifactResult
* AssociateCreatedArtifactResult `object`

### AssociateDiscoveredResourceRequest
* AssociateDiscoveredResourceRequest `object`
  * DiscoveredResource **required** [DiscoveredResource](#discoveredresource)
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

### AssociateDiscoveredResourceResult
* AssociateDiscoveredResourceResult `object`

### ConfigurationId
* ConfigurationId `string`

### CreateProgressUpdateStreamRequest
* CreateProgressUpdateStreamRequest `object`
  * DryRun [DryRun](#dryrun)
  * ProgressUpdateStreamName **required** [ProgressUpdateStream](#progressupdatestream)

### CreateProgressUpdateStreamResult
* CreateProgressUpdateStreamResult `object`

### CreatedArtifact
* CreatedArtifact `object`: An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).
  * Description [CreatedArtifactDescription](#createdartifactdescription)
  * Name **required** [CreatedArtifactName](#createdartifactname)

### CreatedArtifactDescription
* CreatedArtifactDescription `string`

### CreatedArtifactList
* CreatedArtifactList `array`
  * items [CreatedArtifact](#createdartifact)

### CreatedArtifactName
* CreatedArtifactName `string`

### DeleteProgressUpdateStreamRequest
* DeleteProgressUpdateStreamRequest `object`
  * DryRun [DryRun](#dryrun)
  * ProgressUpdateStreamName **required** [ProgressUpdateStream](#progressupdatestream)

### DeleteProgressUpdateStreamResult
* DeleteProgressUpdateStreamResult `object`

### DescribeApplicationStateRequest
* DescribeApplicationStateRequest `object`
  * ApplicationId **required** [ApplicationId](#applicationid)

### DescribeApplicationStateResult
* DescribeApplicationStateResult `object`
  * ApplicationStatus [ApplicationStatus](#applicationstatus)
  * LastUpdatedTime [UpdateDateTime](#updatedatetime)

### DescribeMigrationTaskRequest
* DescribeMigrationTaskRequest `object`
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

### DescribeMigrationTaskResult
* DescribeMigrationTaskResult `object`
  * MigrationTask [MigrationTask](#migrationtask)

### DisassociateCreatedArtifactRequest
* DisassociateCreatedArtifactRequest `object`
  * CreatedArtifactName **required** [CreatedArtifactName](#createdartifactname)
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

### DisassociateCreatedArtifactResult
* DisassociateCreatedArtifactResult `object`

### DisassociateDiscoveredResourceRequest
* DisassociateDiscoveredResourceRequest `object`
  * ConfigurationId **required** [ConfigurationId](#configurationid)
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

### DisassociateDiscoveredResourceResult
* DisassociateDiscoveredResourceResult `object`

### DiscoveredResource
* DiscoveredResource `object`: Object representing the on-premises resource being migrated.
  * ConfigurationId **required** [ConfigurationId](#configurationid)
  * Description [DiscoveredResourceDescription](#discoveredresourcedescription)

### DiscoveredResourceDescription
* DiscoveredResourceDescription `string`

### DiscoveredResourceList
* DiscoveredResourceList `array`
  * items [DiscoveredResource](#discoveredresource)

### DryRun
* DryRun `boolean`

### DryRunOperation
* DryRunOperation `object`: Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".
  * Message [ErrorMessage](#errormessage)

### ErrorMessage
* ErrorMessage `string`

### ImportMigrationTaskRequest
* ImportMigrationTaskRequest `object`
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

### ImportMigrationTaskResult
* ImportMigrationTaskResult `object`

### InternalServerError
* InternalServerError `object`: Exception raised when there is an internal, configuration, or dependency error encountered.
  * Message [ErrorMessage](#errormessage)

### InvalidInputException
* InvalidInputException `object`: Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.
  * Message [ErrorMessage](#errormessage)

### LatestResourceAttributeList
* LatestResourceAttributeList `array`
  * items [ResourceAttribute](#resourceattribute)

### ListCreatedArtifactsRequest
* ListCreatedArtifactsRequest `object`
  * MaxResults [MaxResultsCreatedArtifacts](#maxresultscreatedartifacts)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * NextToken [Token](#token)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

### ListCreatedArtifactsResult
* ListCreatedArtifactsResult `object`
  * CreatedArtifactList [CreatedArtifactList](#createdartifactlist)
  * NextToken [Token](#token)

### ListDiscoveredResourcesRequest
* ListDiscoveredResourcesRequest `object`
  * MaxResults [MaxResultsResources](#maxresultsresources)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * NextToken [Token](#token)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)

### ListDiscoveredResourcesResult
* ListDiscoveredResourcesResult `object`
  * DiscoveredResourceList [DiscoveredResourceList](#discoveredresourcelist)
  * NextToken [Token](#token)

### ListMigrationTasksRequest
* ListMigrationTasksRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [Token](#token)
  * ResourceName [ResourceName](#resourcename)

### ListMigrationTasksResult
* ListMigrationTasksResult `object`
  * MigrationTaskSummaryList [MigrationTaskSummaryList](#migrationtasksummarylist)
  * NextToken [Token](#token)

### ListProgressUpdateStreamsRequest
* ListProgressUpdateStreamsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [Token](#token)

### ListProgressUpdateStreamsResult
* ListProgressUpdateStreamsResult `object`
  * NextToken [Token](#token)
  * ProgressUpdateStreamSummaryList [ProgressUpdateStreamSummaryList](#progressupdatestreamsummarylist)

### MaxResults
* MaxResults `integer`

### MaxResultsCreatedArtifacts
* MaxResultsCreatedArtifacts `integer`

### MaxResultsResources
* MaxResultsResources `integer`

### MigrationTask
* MigrationTask `object`: Represents a migration task in a migration tool.
  * MigrationTaskName [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream [ProgressUpdateStream](#progressupdatestream)
  * ResourceAttributeList [LatestResourceAttributeList](#latestresourceattributelist)
  * Task [Task](#task)
  * UpdateDateTime [UpdateDateTime](#updatedatetime)

### MigrationTaskName
* MigrationTaskName `string`

### MigrationTaskSummary
* MigrationTaskSummary `object`: MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.
  * MigrationTaskName [MigrationTaskName](#migrationtaskname)
  * ProgressPercent [ProgressPercent](#progresspercent)
  * ProgressUpdateStream [ProgressUpdateStream](#progressupdatestream)
  * Status [Status](#status)
  * StatusDetail [StatusDetail](#statusdetail)
  * UpdateDateTime [UpdateDateTime](#updatedatetime)

### MigrationTaskSummaryList
* MigrationTaskSummaryList `array`
  * items [MigrationTaskSummary](#migrationtasksummary)

### NextUpdateSeconds
* NextUpdateSeconds `integer`

### NotifyApplicationStateRequest
* NotifyApplicationStateRequest `object`
  * ApplicationId **required** [ApplicationId](#applicationid)
  * DryRun [DryRun](#dryrun)
  * Status **required** [ApplicationStatus](#applicationstatus)

### NotifyApplicationStateResult
* NotifyApplicationStateResult `object`

### NotifyMigrationTaskStateRequest
* NotifyMigrationTaskStateRequest `object`
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * NextUpdateSeconds **required** [NextUpdateSeconds](#nextupdateseconds)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)
  * Task **required** [Task](#task)
  * UpdateDateTime **required** [UpdateDateTime](#updatedatetime)

### NotifyMigrationTaskStateResult
* NotifyMigrationTaskStateResult `object`

### PolicyErrorException
* PolicyErrorException `object`: Exception raised when there are problems accessing ADS (Application Discovery Service); most likely due to a misconfigured policy or the <code>migrationhub-discovery</code> role is missing or not configured correctly.
  * Message [ErrorMessage](#errormessage)

### ProgressPercent
* ProgressPercent `integer`

### ProgressUpdateStream
* ProgressUpdateStream `string`

### ProgressUpdateStreamSummary
* ProgressUpdateStreamSummary `object`: Summary of the AWS resource used for access control that is implicitly linked to your AWS account.
  * ProgressUpdateStreamName [ProgressUpdateStream](#progressupdatestream)

### ProgressUpdateStreamSummaryList
* ProgressUpdateStreamSummaryList `array`
  * items [ProgressUpdateStreamSummary](#progressupdatestreamsummary)

### PutResourceAttributesRequest
* PutResourceAttributesRequest `object`
  * DryRun [DryRun](#dryrun)
  * MigrationTaskName **required** [MigrationTaskName](#migrationtaskname)
  * ProgressUpdateStream **required** [ProgressUpdateStream](#progressupdatestream)
  * ResourceAttributeList **required** [ResourceAttributeList](#resourceattributelist)

### PutResourceAttributesResult
* PutResourceAttributesResult `object`

### ResourceAttribute
* ResourceAttribute `object`: <p>Attribute associated with a resource.</p> <p>Note the corresponding format required per type listed below:</p> <dl> <dt>IPV4</dt> <dd> <p> <code>x.x.x.x</code> </p> <p> <i>where x is an integer in the range [0,255]</i> </p> </dd> <dt>IPV6</dt> <dd> <p> <code>y : y : y : y : y : y : y : y</code> </p> <p> <i>where y is a hexadecimal between 0 and FFFF. [0, FFFF]</i> </p> </dd> <dt>MAC_ADDRESS</dt> <dd> <p> <code>^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$</code> </p> </dd> <dt>FQDN</dt> <dd> <p> <code>^[^&lt;&gt;{}\\\\/?,=\\p{Cntrl}]{1,256}$</code> </p> </dd> </dl>
  * Type **required** [ResourceAttributeType](#resourceattributetype)
  * Value **required** [ResourceAttributeValue](#resourceattributevalue)

### ResourceAttributeList
* ResourceAttributeList `array`
  * items [ResourceAttribute](#resourceattribute)

### ResourceAttributeType
* ResourceAttributeType `string` (values: IPV4_ADDRESS, IPV6_ADDRESS, MAC_ADDRESS, FQDN, VM_MANAGER_ID, VM_MANAGED_OBJECT_REFERENCE, VM_NAME, VM_PATH, BIOS_ID, MOTHERBOARD_SERIAL_NUMBER)

### ResourceAttributeValue
* ResourceAttributeValue `string`

### ResourceName
* ResourceName `string`

### ResourceNotFoundException
* ResourceNotFoundException `object`: Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.
  * Message [ErrorMessage](#errormessage)

### ServiceUnavailableException
* ServiceUnavailableException `object`: Exception raised when there is an internal, configuration, or dependency error encountered.
  * Message [ErrorMessage](#errormessage)

### Status
* Status `string` (values: NOT_STARTED, IN_PROGRESS, FAILED, COMPLETED)

### StatusDetail
* StatusDetail `string`

### Task
* Task `object`: Task object encapsulating task information.
  * ProgressPercent [ProgressPercent](#progresspercent)
  * Status **required** [Status](#status)
  * StatusDetail [StatusDetail](#statusdetail)

### Token
* Token `string`

### UnauthorizedOperation
* UnauthorizedOperation `object`: Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".
  * Message [ErrorMessage](#errormessage)

### UpdateDateTime
* UpdateDateTime `string`


