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

.then(data => {
  console.log(data);
});
```

## Description

<p>The AWS Migration Hub API methods help to obtain server and application migration status and integrate your resource-specific migration tool by providing a programmatic interface to Migration Hub.</p> <p>Remember that you must set your AWS Migration Hub home region before you call any of these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you must make the API calls while in your home region.</p>

## Actions

### AssociateCreatedArtifact



```js
amazonaws_mgh.AssociateCreatedArtifact({
  "ProgressUpdateStream": null,
  "MigrationTaskName": null,
  "CreatedArtifact": null
}, context)
```

#### Input
* input `object`
  * CreatedArtifact **required**
    * Description
    * Name **required**
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

#### Output
* output [AssociateCreatedArtifactResult](#associatecreatedartifactresult)

### AssociateDiscoveredResource



```js
amazonaws_mgh.AssociateDiscoveredResource({
  "ProgressUpdateStream": null,
  "MigrationTaskName": null,
  "DiscoveredResource": null
}, context)
```

#### Input
* input `object`
  * DiscoveredResource **required**
    * ConfigurationId **required**
    * Description
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

#### Output
* output [AssociateDiscoveredResourceResult](#associatediscoveredresourceresult)

### CreateProgressUpdateStream



```js
amazonaws_mgh.CreateProgressUpdateStream({
  "ProgressUpdateStreamName": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ProgressUpdateStreamName **required**

#### Output
* output [CreateProgressUpdateStreamResult](#createprogressupdatestreamresult)

### DeleteProgressUpdateStream



```js
amazonaws_mgh.DeleteProgressUpdateStream({
  "ProgressUpdateStreamName": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ProgressUpdateStreamName **required**

#### Output
* output [DeleteProgressUpdateStreamResult](#deleteprogressupdatestreamresult)

### DescribeApplicationState



```js
amazonaws_mgh.DescribeApplicationState({
  "ApplicationId": null
}, context)
```

#### Input
* input `object`
  * ApplicationId **required**

#### Output
* output [DescribeApplicationStateResult](#describeapplicationstateresult)

### DescribeMigrationTask



```js
amazonaws_mgh.DescribeMigrationTask({
  "ProgressUpdateStream": null,
  "MigrationTaskName": null
}, context)
```

#### Input
* input `object`
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

#### Output
* output [DescribeMigrationTaskResult](#describemigrationtaskresult)

### DisassociateCreatedArtifact



```js
amazonaws_mgh.DisassociateCreatedArtifact({
  "ProgressUpdateStream": null,
  "MigrationTaskName": null,
  "CreatedArtifactName": null
}, context)
```

#### Input
* input `object`
  * CreatedArtifactName **required**
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

#### Output
* output [DisassociateCreatedArtifactResult](#disassociatecreatedartifactresult)

### DisassociateDiscoveredResource



```js
amazonaws_mgh.DisassociateDiscoveredResource({
  "ProgressUpdateStream": null,
  "MigrationTaskName": null,
  "ConfigurationId": null
}, context)
```

#### Input
* input `object`
  * ConfigurationId **required**
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

#### Output
* output [DisassociateDiscoveredResourceResult](#disassociatediscoveredresourceresult)

### ImportMigrationTask



```js
amazonaws_mgh.ImportMigrationTask({
  "ProgressUpdateStream": null,
  "MigrationTaskName": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

#### Output
* output [ImportMigrationTaskResult](#importmigrationtaskresult)

### ListApplicationStates



```js
amazonaws_mgh.ListApplicationStates({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ApplicationIds
    * items [ApplicationId](#applicationid)
  * MaxResults
  * NextToken

#### Output
* output [ListApplicationStatesResult](#listapplicationstatesresult)

### ListCreatedArtifacts



```js
amazonaws_mgh.ListCreatedArtifacts({
  "ProgressUpdateStream": null,
  "MigrationTaskName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * MigrationTaskName **required**
  * NextToken
  * ProgressUpdateStream **required**

#### Output
* output [ListCreatedArtifactsResult](#listcreatedartifactsresult)

### ListDiscoveredResources



```js
amazonaws_mgh.ListDiscoveredResources({
  "ProgressUpdateStream": null,
  "MigrationTaskName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * MigrationTaskName **required**
  * NextToken
  * ProgressUpdateStream **required**

#### Output
* output [ListDiscoveredResourcesResult](#listdiscoveredresourcesresult)

### ListMigrationTasks



```js
amazonaws_mgh.ListMigrationTasks({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceName

#### Output
* output [ListMigrationTasksResult](#listmigrationtasksresult)

### ListProgressUpdateStreams



```js
amazonaws_mgh.ListProgressUpdateStreams({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListProgressUpdateStreamsResult](#listprogressupdatestreamsresult)

### NotifyApplicationState



```js
amazonaws_mgh.NotifyApplicationState({
  "ApplicationId": null,
  "Status": null
}, context)
```

#### Input
* input `object`
  * ApplicationId **required**
  * DryRun
  * Status **required**
  * UpdateDateTime

#### Output
* output [NotifyApplicationStateResult](#notifyapplicationstateresult)

### NotifyMigrationTaskState



```js
amazonaws_mgh.NotifyMigrationTaskState({
  "ProgressUpdateStream": null,
  "MigrationTaskName": null,
  "Task": null,
  "UpdateDateTime": null,
  "NextUpdateSeconds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * MigrationTaskName **required**
  * NextUpdateSeconds **required**
  * ProgressUpdateStream **required**
  * Task **required**
    * ProgressPercent
    * Status **required**
    * StatusDetail
  * UpdateDateTime **required**

#### Output
* output [NotifyMigrationTaskStateResult](#notifymigrationtaskstateresult)

### PutResourceAttributes



```js
amazonaws_mgh.PutResourceAttributes({
  "ProgressUpdateStream": null,
  "MigrationTaskName": null,
  "ResourceAttributeList": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**
  * ResourceAttributeList **required**
    * items [ResourceAttribute](#resourceattribute)

#### Output
* output [PutResourceAttributesResult](#putresourceattributesresult)



## Definitions

### AccessDeniedException


### ApplicationId
* ApplicationId `string`

### ApplicationIds
* ApplicationIds `array`
  * items [ApplicationId](#applicationid)

### ApplicationState
* ApplicationState `object`: The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent.
  * ApplicationId
  * ApplicationStatus
  * LastUpdatedTime

### ApplicationStateList
* ApplicationStateList `array`
  * items [ApplicationState](#applicationstate)

### ApplicationStatus
* ApplicationStatus `string` (values: NOT_STARTED, IN_PROGRESS, COMPLETED)

### AssociateCreatedArtifactRequest
* AssociateCreatedArtifactRequest `object`
  * CreatedArtifact **required**
    * Description
    * Name **required**
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

### AssociateCreatedArtifactResult
* AssociateCreatedArtifactResult `object`

### AssociateDiscoveredResourceRequest
* AssociateDiscoveredResourceRequest `object`
  * DiscoveredResource **required**
    * ConfigurationId **required**
    * Description
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

### AssociateDiscoveredResourceResult
* AssociateDiscoveredResourceResult `object`

### ConfigurationId
* ConfigurationId `string`

### CreateProgressUpdateStreamRequest
* CreateProgressUpdateStreamRequest `object`
  * DryRun
  * ProgressUpdateStreamName **required**

### CreateProgressUpdateStreamResult
* CreateProgressUpdateStreamResult `object`

### CreatedArtifact
* CreatedArtifact `object`: An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).
  * Description
  * Name **required**

### CreatedArtifactDescription
* CreatedArtifactDescription `string`

### CreatedArtifactList
* CreatedArtifactList `array`
  * items [CreatedArtifact](#createdartifact)

### CreatedArtifactName
* CreatedArtifactName `string`

### DeleteProgressUpdateStreamRequest
* DeleteProgressUpdateStreamRequest `object`
  * DryRun
  * ProgressUpdateStreamName **required**

### DeleteProgressUpdateStreamResult
* DeleteProgressUpdateStreamResult `object`

### DescribeApplicationStateRequest
* DescribeApplicationStateRequest `object`
  * ApplicationId **required**

### DescribeApplicationStateResult
* DescribeApplicationStateResult `object`
  * ApplicationStatus
  * LastUpdatedTime

### DescribeMigrationTaskRequest
* DescribeMigrationTaskRequest `object`
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

### DescribeMigrationTaskResult
* DescribeMigrationTaskResult `object`
  * MigrationTask
    * MigrationTaskName
    * ProgressUpdateStream
    * ResourceAttributeList
      * items [ResourceAttribute](#resourceattribute)
    * Task
      * ProgressPercent
      * Status **required**
      * StatusDetail
    * UpdateDateTime

### DisassociateCreatedArtifactRequest
* DisassociateCreatedArtifactRequest `object`
  * CreatedArtifactName **required**
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

### DisassociateCreatedArtifactResult
* DisassociateCreatedArtifactResult `object`

### DisassociateDiscoveredResourceRequest
* DisassociateDiscoveredResourceRequest `object`
  * ConfigurationId **required**
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

### DisassociateDiscoveredResourceResult
* DisassociateDiscoveredResourceResult `object`

### DiscoveredResource
* DiscoveredResource `object`: Object representing the on-premises resource being migrated.
  * ConfigurationId **required**
  * Description

### DiscoveredResourceDescription
* DiscoveredResourceDescription `string`

### DiscoveredResourceList
* DiscoveredResourceList `array`
  * items [DiscoveredResource](#discoveredresource)

### DryRun
* DryRun `boolean`

### DryRunOperation


### HomeRegionNotSetException


### ImportMigrationTaskRequest
* ImportMigrationTaskRequest `object`
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**

### ImportMigrationTaskResult
* ImportMigrationTaskResult `object`

### InternalServerError


### InvalidInputException


### LatestResourceAttributeList
* LatestResourceAttributeList `array`
  * items [ResourceAttribute](#resourceattribute)

### ListApplicationStatesRequest
* ListApplicationStatesRequest `object`
  * ApplicationIds
    * items [ApplicationId](#applicationid)
  * MaxResults
  * NextToken

### ListApplicationStatesResult
* ListApplicationStatesResult `object`
  * ApplicationStateList
    * items [ApplicationState](#applicationstate)
  * NextToken

### ListCreatedArtifactsRequest
* ListCreatedArtifactsRequest `object`
  * MaxResults
  * MigrationTaskName **required**
  * NextToken
  * ProgressUpdateStream **required**

### ListCreatedArtifactsResult
* ListCreatedArtifactsResult `object`
  * CreatedArtifactList
    * items [CreatedArtifact](#createdartifact)
  * NextToken

### ListDiscoveredResourcesRequest
* ListDiscoveredResourcesRequest `object`
  * MaxResults
  * MigrationTaskName **required**
  * NextToken
  * ProgressUpdateStream **required**

### ListDiscoveredResourcesResult
* ListDiscoveredResourcesResult `object`
  * DiscoveredResourceList
    * items [DiscoveredResource](#discoveredresource)
  * NextToken

### ListMigrationTasksRequest
* ListMigrationTasksRequest `object`
  * MaxResults
  * NextToken
  * ResourceName

### ListMigrationTasksResult
* ListMigrationTasksResult `object`
  * MigrationTaskSummaryList
    * items [MigrationTaskSummary](#migrationtasksummary)
  * NextToken

### ListProgressUpdateStreamsRequest
* ListProgressUpdateStreamsRequest `object`
  * MaxResults
  * NextToken

### ListProgressUpdateStreamsResult
* ListProgressUpdateStreamsResult `object`
  * NextToken
  * ProgressUpdateStreamSummaryList
    * items [ProgressUpdateStreamSummary](#progressupdatestreamsummary)

### MaxResults
* MaxResults `integer`

### MaxResultsCreatedArtifacts
* MaxResultsCreatedArtifacts `integer`

### MaxResultsResources
* MaxResultsResources `integer`

### MigrationTask
* MigrationTask `object`: Represents a migration task in a migration tool.
  * MigrationTaskName
  * ProgressUpdateStream
  * ResourceAttributeList
    * items [ResourceAttribute](#resourceattribute)
  * Task
    * ProgressPercent
    * Status **required**
    * StatusDetail
  * UpdateDateTime

### MigrationTaskName
* MigrationTaskName `string`

### MigrationTaskSummary
* MigrationTaskSummary `object`: MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.
  * MigrationTaskName
  * ProgressPercent
  * ProgressUpdateStream
  * Status
  * StatusDetail
  * UpdateDateTime

### MigrationTaskSummaryList
* MigrationTaskSummaryList `array`
  * items [MigrationTaskSummary](#migrationtasksummary)

### NextUpdateSeconds
* NextUpdateSeconds `integer`

### NotifyApplicationStateRequest
* NotifyApplicationStateRequest `object`
  * ApplicationId **required**
  * DryRun
  * Status **required**
  * UpdateDateTime

### NotifyApplicationStateResult
* NotifyApplicationStateResult `object`

### NotifyMigrationTaskStateRequest
* NotifyMigrationTaskStateRequest `object`
  * DryRun
  * MigrationTaskName **required**
  * NextUpdateSeconds **required**
  * ProgressUpdateStream **required**
  * Task **required**
    * ProgressPercent
    * Status **required**
    * StatusDetail
  * UpdateDateTime **required**

### NotifyMigrationTaskStateResult
* NotifyMigrationTaskStateResult `object`

### PolicyErrorException


### ProgressPercent
* ProgressPercent `integer`

### ProgressUpdateStream
* ProgressUpdateStream `string`

### ProgressUpdateStreamSummary
* ProgressUpdateStreamSummary `object`: Summary of the AWS resource used for access control that is implicitly linked to your AWS account.
  * ProgressUpdateStreamName

### ProgressUpdateStreamSummaryList
* ProgressUpdateStreamSummaryList `array`
  * items [ProgressUpdateStreamSummary](#progressupdatestreamsummary)

### PutResourceAttributesRequest
* PutResourceAttributesRequest `object`
  * DryRun
  * MigrationTaskName **required**
  * ProgressUpdateStream **required**
  * ResourceAttributeList **required**
    * items [ResourceAttribute](#resourceattribute)

### PutResourceAttributesResult
* PutResourceAttributesResult `object`

### ResourceAttribute
* ResourceAttribute `object`: <p>Attribute associated with a resource.</p> <p>Note the corresponding format required per type listed below:</p> <dl> <dt>IPV4</dt> <dd> <p> <code>x.x.x.x</code> </p> <p> <i>where x is an integer in the range [0,255]</i> </p> </dd> <dt>IPV6</dt> <dd> <p> <code>y : y : y : y : y : y : y : y</code> </p> <p> <i>where y is a hexadecimal between 0 and FFFF. [0, FFFF]</i> </p> </dd> <dt>MAC_ADDRESS</dt> <dd> <p> <code>^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$</code> </p> </dd> <dt>FQDN</dt> <dd> <p> <code>^[^&lt;&gt;{}\\\\/?,=\\p{Cntrl}]{1,256}$</code> </p> </dd> </dl>
  * Type **required**
  * Value **required**

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


### ServiceUnavailableException


### Status
* Status `string` (values: NOT_STARTED, IN_PROGRESS, FAILED, COMPLETED)

### StatusDetail
* StatusDetail `string`

### Task
* Task `object`: Task object encapsulating task information.
  * ProgressPercent
  * Status **required**
  * StatusDetail

### ThrottlingException


### Token
* Token `string`

### UnauthorizedOperation


### UpdateDateTime
* UpdateDateTime `string`


