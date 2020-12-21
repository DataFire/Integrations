# @datafire/amazonaws_datasync

Client library for AWS DataSync

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_datasync
```
```js
let amazonaws_datasync = require('@datafire/amazonaws_datasync').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS DataSync</fullname> <p>AWS DataSync is a managed data transfer service that makes it simpler for you to automate moving data between on-premises storage and Amazon Simple Storage Service (Amazon S3) or Amazon Elastic File System (Amazon EFS). </p> <p>This API interface reference for AWS DataSync contains documentation for a programming interface that you can use to manage AWS DataSync.</p>

## Actions

### CancelTaskExecution



```js
amazonaws_datasync.CancelTaskExecution({
  "TaskExecutionArn": null
}, context)
```

#### Input
* input `object`
  * TaskExecutionArn **required**

#### Output
* output [CancelTaskExecutionResponse](#canceltaskexecutionresponse)

### CreateAgent



```js
amazonaws_datasync.CreateAgent({
  "ActivationKey": null
}, context)
```

#### Input
* input `object`
  * ActivationKey **required**
  * AgentName
  * SecurityGroupArns
    * items [Ec2SecurityGroupArn](#ec2securitygrouparn)
  * SubnetArns
    * items [Ec2SubnetArn](#ec2subnetarn)
  * Tags
    * items [TagListEntry](#taglistentry)
  * VpcEndpointId

#### Output
* output [CreateAgentResponse](#createagentresponse)

### CreateLocationEfs



```js
amazonaws_datasync.CreateLocationEfs({
  "EfsFilesystemArn": null,
  "Ec2Config": null
}, context)
```

#### Input
* input `object`
  * Ec2Config **required**
    * SecurityGroupArns **required**
      * items [Ec2SecurityGroupArn](#ec2securitygrouparn)
    * SubnetArn **required**
  * EfsFilesystemArn **required**
  * Subdirectory
  * Tags
    * items [TagListEntry](#taglistentry)

#### Output
* output [CreateLocationEfsResponse](#createlocationefsresponse)

### CreateLocationFsxWindows



```js
amazonaws_datasync.CreateLocationFsxWindows({
  "FsxFilesystemArn": null,
  "SecurityGroupArns": null,
  "User": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * Domain
  * FsxFilesystemArn **required**
  * Password **required**
  * SecurityGroupArns **required**
    * items [Ec2SecurityGroupArn](#ec2securitygrouparn)
  * Subdirectory
  * Tags
    * items [TagListEntry](#taglistentry)
  * User **required**

#### Output
* output [CreateLocationFsxWindowsResponse](#createlocationfsxwindowsresponse)

### CreateLocationNfs



```js
amazonaws_datasync.CreateLocationNfs({
  "Subdirectory": null,
  "ServerHostname": null,
  "OnPremConfig": null
}, context)
```

#### Input
* input `object`
  * MountOptions
    * Version
  * OnPremConfig **required**
    * AgentArns **required**
      * items [AgentArn](#agentarn)
  * ServerHostname **required**
  * Subdirectory **required**
  * Tags
    * items [TagListEntry](#taglistentry)

#### Output
* output [CreateLocationNfsResponse](#createlocationnfsresponse)

### CreateLocationObjectStorage



```js
amazonaws_datasync.CreateLocationObjectStorage({
  "ServerHostname": null,
  "BucketName": null,
  "AgentArns": null
}, context)
```

#### Input
* input `object`
  * AccessKey
  * AgentArns **required**
    * items [AgentArn](#agentarn)
  * BucketName **required**
  * SecretKey
  * ServerHostname **required**
  * ServerPort
  * ServerProtocol
  * Subdirectory
  * Tags
    * items [TagListEntry](#taglistentry)

#### Output
* output [CreateLocationObjectStorageResponse](#createlocationobjectstorageresponse)

### CreateLocationS3



```js
amazonaws_datasync.CreateLocationS3({
  "S3BucketArn": null,
  "S3Config": {
    "BucketAccessRoleArn": null
  }
}, context)
```

#### Input
* input `object`
  * AgentArns
    * items [AgentArn](#agentarn)
  * S3BucketArn **required**
  * S3Config **required** [S3Config](#s3config)
  * S3StorageClass
  * Subdirectory
  * Tags
    * items [TagListEntry](#taglistentry)

#### Output
* output [CreateLocationS3Response](#createlocations3response)

### CreateLocationSmb



```js
amazonaws_datasync.CreateLocationSmb({
  "Subdirectory": null,
  "ServerHostname": null,
  "User": null,
  "Password": null,
  "AgentArns": null
}, context)
```

#### Input
* input `object`
  * AgentArns **required**
    * items [AgentArn](#agentarn)
  * Domain
  * MountOptions
    * Version
  * Password **required**
  * ServerHostname **required**
  * Subdirectory **required**
  * Tags
    * items [TagListEntry](#taglistentry)
  * User **required**

#### Output
* output [CreateLocationSmbResponse](#createlocationsmbresponse)

### CreateTask



```js
amazonaws_datasync.CreateTask({
  "SourceLocationArn": null,
  "DestinationLocationArn": null
}, context)
```

#### Input
* input `object`
  * CloudWatchLogGroupArn
  * DestinationLocationArn **required**
  * Excludes
    * items [FilterRule](#filterrule)
  * Name
  * Options
    * Atime
    * BytesPerSecond
    * Gid
    * LogLevel
    * Mtime
    * OverwriteMode
    * PosixPermissions
    * PreserveDeletedFiles
    * PreserveDevices
    * TaskQueueing
    * TransferMode
    * Uid
    * VerifyMode
  * Schedule
    * ScheduleExpression **required**
  * SourceLocationArn **required**
  * Tags
    * items [TagListEntry](#taglistentry)

#### Output
* output [CreateTaskResponse](#createtaskresponse)

### DeleteAgent



```js
amazonaws_datasync.DeleteAgent({
  "AgentArn": null
}, context)
```

#### Input
* input `object`
  * AgentArn **required**

#### Output
* output [DeleteAgentResponse](#deleteagentresponse)

### DeleteLocation



```js
amazonaws_datasync.DeleteLocation({
  "LocationArn": null
}, context)
```

#### Input
* input `object`
  * LocationArn **required**

#### Output
* output [DeleteLocationResponse](#deletelocationresponse)

### DeleteTask



```js
amazonaws_datasync.DeleteTask({
  "TaskArn": null
}, context)
```

#### Input
* input `object`
  * TaskArn **required**

#### Output
* output [DeleteTaskResponse](#deletetaskresponse)

### DescribeAgent



```js
amazonaws_datasync.DescribeAgent({
  "AgentArn": null
}, context)
```

#### Input
* input `object`
  * AgentArn **required**

#### Output
* output [DescribeAgentResponse](#describeagentresponse)

### DescribeLocationEfs



```js
amazonaws_datasync.DescribeLocationEfs({
  "LocationArn": null
}, context)
```

#### Input
* input `object`
  * LocationArn **required**

#### Output
* output [DescribeLocationEfsResponse](#describelocationefsresponse)

### DescribeLocationFsxWindows



```js
amazonaws_datasync.DescribeLocationFsxWindows({
  "LocationArn": null
}, context)
```

#### Input
* input `object`
  * LocationArn **required**

#### Output
* output [DescribeLocationFsxWindowsResponse](#describelocationfsxwindowsresponse)

### DescribeLocationNfs



```js
amazonaws_datasync.DescribeLocationNfs({
  "LocationArn": null
}, context)
```

#### Input
* input `object`
  * LocationArn **required**

#### Output
* output [DescribeLocationNfsResponse](#describelocationnfsresponse)

### DescribeLocationObjectStorage



```js
amazonaws_datasync.DescribeLocationObjectStorage({
  "LocationArn": null
}, context)
```

#### Input
* input `object`
  * LocationArn **required**

#### Output
* output [DescribeLocationObjectStorageResponse](#describelocationobjectstorageresponse)

### DescribeLocationS3



```js
amazonaws_datasync.DescribeLocationS3({
  "LocationArn": null
}, context)
```

#### Input
* input `object`
  * LocationArn **required**

#### Output
* output [DescribeLocationS3Response](#describelocations3response)

### DescribeLocationSmb



```js
amazonaws_datasync.DescribeLocationSmb({
  "LocationArn": null
}, context)
```

#### Input
* input `object`
  * LocationArn **required**

#### Output
* output [DescribeLocationSmbResponse](#describelocationsmbresponse)

### DescribeTask



```js
amazonaws_datasync.DescribeTask({
  "TaskArn": null
}, context)
```

#### Input
* input `object`
  * TaskArn **required**

#### Output
* output [DescribeTaskResponse](#describetaskresponse)

### DescribeTaskExecution



```js
amazonaws_datasync.DescribeTaskExecution({
  "TaskExecutionArn": null
}, context)
```

#### Input
* input `object`
  * TaskExecutionArn **required**

#### Output
* output [DescribeTaskExecutionResponse](#describetaskexecutionresponse)

### ListAgents



```js
amazonaws_datasync.ListAgents({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListAgentsResponse](#listagentsresponse)

### ListLocations



```js
amazonaws_datasync.ListLocations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [LocationFilter](#locationfilter)
  * MaxResults
  * NextToken

#### Output
* output [ListLocationsResponse](#listlocationsresponse)

### ListTagsForResource



```js
amazonaws_datasync.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListTaskExecutions



```js
amazonaws_datasync.ListTaskExecutions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * TaskArn

#### Output
* output [ListTaskExecutionsResponse](#listtaskexecutionsresponse)

### ListTasks



```js
amazonaws_datasync.ListTasks({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [TaskFilter](#taskfilter)
  * MaxResults
  * NextToken

#### Output
* output [ListTasksResponse](#listtasksresponse)

### StartTaskExecution



```js
amazonaws_datasync.StartTaskExecution({
  "TaskArn": null
}, context)
```

#### Input
* input `object`
  * Includes
    * items [FilterRule](#filterrule)
  * OverrideOptions [Options](#options)
  * TaskArn **required**

#### Output
* output [StartTaskExecutionResponse](#starttaskexecutionresponse)

### TagResource



```js
amazonaws_datasync.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [TagListEntry](#taglistentry)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_datasync.UntagResource({
  "ResourceArn": null,
  "Keys": null
}, context)
```

#### Input
* input `object`
  * Keys **required**
    * items [TagKey](#tagkey)
  * ResourceArn **required**

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateAgent



```js
amazonaws_datasync.UpdateAgent({
  "AgentArn": null
}, context)
```

#### Input
* input `object`
  * AgentArn **required**
  * Name

#### Output
* output [UpdateAgentResponse](#updateagentresponse)

### UpdateTask



```js
amazonaws_datasync.UpdateTask({
  "TaskArn": null
}, context)
```

#### Input
* input `object`
  * CloudWatchLogGroupArn
  * Excludes
    * items [FilterRule](#filterrule)
  * Name
  * Options [Options](#options)
  * Schedule
    * ScheduleExpression **required**
  * TaskArn **required**

#### Output
* output [UpdateTaskResponse](#updatetaskresponse)

### UpdateTaskExecution



```js
amazonaws_datasync.UpdateTaskExecution({
  "TaskExecutionArn": null,
  "Options": {}
}, context)
```

#### Input
* input `object`
  * Options **required** [Options](#options)
  * TaskExecutionArn **required**

#### Output
* output [UpdateTaskExecutionResponse](#updatetaskexecutionresponse)



## Definitions

### ActivationKey
* ActivationKey `string`

### AgentArn
* AgentArn `string`

### AgentArnList
* AgentArnList `array`
  * items [AgentArn](#agentarn)

### AgentList
* AgentList `array`
  * items [AgentListEntry](#agentlistentry)

### AgentListEntry
* AgentListEntry `object`: Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a>ListAgents</a> operation is called.
  * AgentArn
  * Name
  * Status

### AgentStatus
* AgentStatus `string` (values: ONLINE, OFFLINE)

### Atime
* Atime `string` (values: NONE, BEST_EFFORT)

### BytesPerSecond
* BytesPerSecond `integer`

### CancelTaskExecutionRequest
* CancelTaskExecutionRequest `object`: CancelTaskExecutionRequest
  * TaskExecutionArn **required**

### CancelTaskExecutionResponse
* CancelTaskExecutionResponse `object`

### CreateAgentRequest
* CreateAgentRequest `object`: CreateAgentRequest
  * ActivationKey **required**
  * AgentName
  * SecurityGroupArns
    * items [Ec2SecurityGroupArn](#ec2securitygrouparn)
  * SubnetArns
    * items [Ec2SubnetArn](#ec2subnetarn)
  * Tags
    * items [TagListEntry](#taglistentry)
  * VpcEndpointId

### CreateAgentResponse
* CreateAgentResponse `object`: CreateAgentResponse
  * AgentArn

### CreateLocationEfsRequest
* CreateLocationEfsRequest `object`: CreateLocationEfsRequest
  * Ec2Config **required**
    * SecurityGroupArns **required**
      * items [Ec2SecurityGroupArn](#ec2securitygrouparn)
    * SubnetArn **required**
  * EfsFilesystemArn **required**
  * Subdirectory
  * Tags
    * items [TagListEntry](#taglistentry)

### CreateLocationEfsResponse
* CreateLocationEfsResponse `object`: CreateLocationEfs
  * LocationArn

### CreateLocationFsxWindowsRequest
* CreateLocationFsxWindowsRequest `object`
  * Domain
  * FsxFilesystemArn **required**
  * Password **required**
  * SecurityGroupArns **required**
    * items [Ec2SecurityGroupArn](#ec2securitygrouparn)
  * Subdirectory
  * Tags
    * items [TagListEntry](#taglistentry)
  * User **required**

### CreateLocationFsxWindowsResponse
* CreateLocationFsxWindowsResponse `object`
  * LocationArn

### CreateLocationNfsRequest
* CreateLocationNfsRequest `object`: CreateLocationNfsRequest
  * MountOptions
    * Version
  * OnPremConfig **required**
    * AgentArns **required**
      * items [AgentArn](#agentarn)
  * ServerHostname **required**
  * Subdirectory **required**
  * Tags
    * items [TagListEntry](#taglistentry)

### CreateLocationNfsResponse
* CreateLocationNfsResponse `object`: CreateLocationNfsResponse
  * LocationArn

### CreateLocationObjectStorageRequest
* CreateLocationObjectStorageRequest `object`: CreateLocationObjectStorageRequest
  * AccessKey
  * AgentArns **required**
    * items [AgentArn](#agentarn)
  * BucketName **required**
  * SecretKey
  * ServerHostname **required**
  * ServerPort
  * ServerProtocol
  * Subdirectory
  * Tags
    * items [TagListEntry](#taglistentry)

### CreateLocationObjectStorageResponse
* CreateLocationObjectStorageResponse `object`: CreateLocationObjectStorageResponse
  * LocationArn

### CreateLocationS3Request
* CreateLocationS3Request `object`: CreateLocationS3Request
  * AgentArns
    * items [AgentArn](#agentarn)
  * S3BucketArn **required**
  * S3Config **required** [S3Config](#s3config)
  * S3StorageClass
  * Subdirectory
  * Tags
    * items [TagListEntry](#taglistentry)

### CreateLocationS3Response
* CreateLocationS3Response `object`: CreateLocationS3Response
  * LocationArn

### CreateLocationSmbRequest
* CreateLocationSmbRequest `object`: CreateLocationSmbRequest
  * AgentArns **required**
    * items [AgentArn](#agentarn)
  * Domain
  * MountOptions
    * Version
  * Password **required**
  * ServerHostname **required**
  * Subdirectory **required**
  * Tags
    * items [TagListEntry](#taglistentry)
  * User **required**

### CreateLocationSmbResponse
* CreateLocationSmbResponse `object`: CreateLocationSmbResponse
  * LocationArn

### CreateTaskRequest
* CreateTaskRequest `object`: CreateTaskRequest
  * CloudWatchLogGroupArn
  * DestinationLocationArn **required**
  * Excludes
    * items [FilterRule](#filterrule)
  * Name
  * Options
    * Atime
    * BytesPerSecond
    * Gid
    * LogLevel
    * Mtime
    * OverwriteMode
    * PosixPermissions
    * PreserveDeletedFiles
    * PreserveDevices
    * TaskQueueing
    * TransferMode
    * Uid
    * VerifyMode
  * Schedule
    * ScheduleExpression **required**
  * SourceLocationArn **required**
  * Tags
    * items [TagListEntry](#taglistentry)

### CreateTaskResponse
* CreateTaskResponse `object`: CreateTaskResponse
  * TaskArn

### DeleteAgentRequest
* DeleteAgentRequest `object`: DeleteAgentRequest
  * AgentArn **required**

### DeleteAgentResponse
* DeleteAgentResponse `object`

### DeleteLocationRequest
* DeleteLocationRequest `object`: DeleteLocation
  * LocationArn **required**

### DeleteLocationResponse
* DeleteLocationResponse `object`

### DeleteTaskRequest
* DeleteTaskRequest `object`: DeleteTask
  * TaskArn **required**

### DeleteTaskResponse
* DeleteTaskResponse `object`

### DescribeAgentRequest
* DescribeAgentRequest `object`: DescribeAgent
  * AgentArn **required**

### DescribeAgentResponse
* DescribeAgentResponse `object`: DescribeAgentResponse
  * AgentArn
  * CreationTime
  * EndpointType
  * LastConnectionTime
  * Name
  * PrivateLinkConfig
    * PrivateLinkEndpoint
    * SecurityGroupArns
      * items [Ec2SecurityGroupArn](#ec2securitygrouparn)
    * SubnetArns
      * items [Ec2SubnetArn](#ec2subnetarn)
    * VpcEndpointId
  * Status

### DescribeLocationEfsRequest
* DescribeLocationEfsRequest `object`: DescribeLocationEfsRequest
  * LocationArn **required**

### DescribeLocationEfsResponse
* DescribeLocationEfsResponse `object`: DescribeLocationEfsResponse
  * CreationTime
  * Ec2Config [Ec2Config](#ec2config)
  * LocationArn
  * LocationUri

### DescribeLocationFsxWindowsRequest
* DescribeLocationFsxWindowsRequest `object`
  * LocationArn **required**

### DescribeLocationFsxWindowsResponse
* DescribeLocationFsxWindowsResponse `object`
  * CreationTime
  * Domain
  * LocationArn
  * LocationUri
  * SecurityGroupArns
    * items [Ec2SecurityGroupArn](#ec2securitygrouparn)
  * User

### DescribeLocationNfsRequest
* DescribeLocationNfsRequest `object`: DescribeLocationNfsRequest
  * LocationArn **required**

### DescribeLocationNfsResponse
* DescribeLocationNfsResponse `object`: DescribeLocationNfsResponse
  * CreationTime
  * LocationArn
  * LocationUri
  * MountOptions
    * Version
  * OnPremConfig [OnPremConfig](#onpremconfig)

### DescribeLocationObjectStorageRequest
* DescribeLocationObjectStorageRequest `object`: DescribeLocationObjectStorageRequest
  * LocationArn **required**

### DescribeLocationObjectStorageResponse
* DescribeLocationObjectStorageResponse `object`: DescribeLocationObjectStorageResponse
  * AccessKey
  * AgentArns
    * items [AgentArn](#agentarn)
  * CreationTime
  * LocationArn
  * LocationUri
  * ServerPort
  * ServerProtocol

### DescribeLocationS3Request
* DescribeLocationS3Request `object`: DescribeLocationS3Request
  * LocationArn **required**

### DescribeLocationS3Response
* DescribeLocationS3Response `object`: DescribeLocationS3Response
  * AgentArns
    * items [AgentArn](#agentarn)
  * CreationTime
  * LocationArn
  * LocationUri
  * S3Config [S3Config](#s3config)
  * S3StorageClass

### DescribeLocationSmbRequest
* DescribeLocationSmbRequest `object`: DescribeLocationSmbRequest
  * LocationArn **required**

### DescribeLocationSmbResponse
* DescribeLocationSmbResponse `object`: DescribeLocationSmbResponse
  * AgentArns
    * items [AgentArn](#agentarn)
  * CreationTime
  * Domain
  * LocationArn
  * LocationUri
  * MountOptions
    * Version
  * User

### DescribeTaskExecutionRequest
* DescribeTaskExecutionRequest `object`: DescribeTaskExecutionRequest
  * TaskExecutionArn **required**

### DescribeTaskExecutionResponse
* DescribeTaskExecutionResponse `object`: DescribeTaskExecutionResponse
  * BytesTransferred
  * BytesWritten
  * EstimatedBytesToTransfer
  * EstimatedFilesToTransfer
  * Excludes
    * items [FilterRule](#filterrule)
  * FilesTransferred
  * Includes
    * items [FilterRule](#filterrule)
  * Options [Options](#options)
  * Result
    * ErrorCode
    * ErrorDetail
    * PrepareDuration
    * PrepareStatus
    * TotalDuration
    * TransferDuration
    * TransferStatus
    * VerifyDuration
    * VerifyStatus
  * StartTime
  * Status
  * TaskExecutionArn

### DescribeTaskRequest
* DescribeTaskRequest `object`: DescribeTaskRequest
  * TaskArn **required**

### DescribeTaskResponse
* DescribeTaskResponse `object`: DescribeTaskResponse
  * CloudWatchLogGroupArn
  * CreationTime
  * CurrentTaskExecutionArn
  * DestinationLocationArn
  * DestinationNetworkInterfaceArns
    * items [NetworkInterfaceArn](#networkinterfacearn)
  * ErrorCode
  * ErrorDetail
  * Excludes
    * items [FilterRule](#filterrule)
  * Name
  * Options
    * Atime
    * BytesPerSecond
    * Gid
    * LogLevel
    * Mtime
    * OverwriteMode
    * PosixPermissions
    * PreserveDeletedFiles
    * PreserveDevices
    * TaskQueueing
    * TransferMode
    * Uid
    * VerifyMode
  * Schedule
    * ScheduleExpression **required**
  * SourceLocationArn
  * SourceNetworkInterfaceArns
    * items [NetworkInterfaceArn](#networkinterfacearn)
  * Status
  * TaskArn

### DestinationNetworkInterfaceArns
* DestinationNetworkInterfaceArns `array`
  * items [NetworkInterfaceArn](#networkinterfacearn)

### Duration
* Duration `integer`

### Ec2Config
* Ec2Config `object`: The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified. 
  * SecurityGroupArns **required**
    * items [Ec2SecurityGroupArn](#ec2securitygrouparn)
  * SubnetArn **required**

### Ec2SecurityGroupArn
* Ec2SecurityGroupArn `string`

### Ec2SecurityGroupArnList
* Ec2SecurityGroupArnList `array`
  * items [Ec2SecurityGroupArn](#ec2securitygrouparn)

### Ec2SubnetArn
* Ec2SubnetArn `string`

### EfsFilesystemArn
* EfsFilesystemArn `string`

### EfsSubdirectory
* EfsSubdirectory `string`

### Endpoint
* Endpoint `string`

### EndpointType
* EndpointType `string` (values: PUBLIC, PRIVATE_LINK, FIPS)

### FilterAttributeValue
* FilterAttributeValue `string`

### FilterList
* FilterList `array`
  * items [FilterRule](#filterrule)

### FilterRule
* FilterRule `object`: Specifies which files, folders and objects to include or exclude when transferring files from source to destination.
  * FilterType
  * Value

### FilterType
* FilterType `string` (values: SIMPLE_PATTERN)

### FilterValue
* FilterValue `string`

### FilterValues
* FilterValues `array`
  * items [FilterAttributeValue](#filterattributevalue)

### FsxFilesystemArn
* FsxFilesystemArn `string`

### FsxWindowsSubdirectory
* FsxWindowsSubdirectory `string`

### Gid
* Gid `string` (values: NONE, INT_VALUE, NAME, BOTH)

### IamRoleArn
* IamRoleArn `string`

### InputTagList
* InputTagList `array`
  * items [TagListEntry](#taglistentry)

### InternalException


### InvalidRequestException


### ListAgentsRequest
* ListAgentsRequest `object`: ListAgentsRequest
  * MaxResults
  * NextToken

### ListAgentsResponse
* ListAgentsResponse `object`: ListAgentsResponse
  * Agents
    * items [AgentListEntry](#agentlistentry)
  * NextToken

### ListLocationsRequest
* ListLocationsRequest `object`: ListLocationsRequest
  * Filters
    * items [LocationFilter](#locationfilter)
  * MaxResults
  * NextToken

### ListLocationsResponse
* ListLocationsResponse `object`: ListLocationsResponse
  * Locations
    * items [LocationListEntry](#locationlistentry)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`: ListTagsForResourceRequest
  * MaxResults
  * NextToken
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`: ListTagsForResourceResponse
  * NextToken
  * Tags
    * items [TagListEntry](#taglistentry)

### ListTaskExecutionsRequest
* ListTaskExecutionsRequest `object`: ListTaskExecutions
  * MaxResults
  * NextToken
  * TaskArn

### ListTaskExecutionsResponse
* ListTaskExecutionsResponse `object`: ListTaskExecutionsResponse
  * NextToken
  * TaskExecutions
    * items [TaskExecutionListEntry](#taskexecutionlistentry)

### ListTasksRequest
* ListTasksRequest `object`: ListTasksRequest
  * Filters
    * items [TaskFilter](#taskfilter)
  * MaxResults
  * NextToken

### ListTasksResponse
* ListTasksResponse `object`: ListTasksResponse
  * NextToken
  * Tasks
    * items [TaskListEntry](#tasklistentry)

### LocationArn
* LocationArn `string`

### LocationFilter
* LocationFilter `object`: You can use API filters to narrow down the list of resources returned by <code>ListLocations</code>. For example, to retrieve all your Amazon S3 locations, you can use <code>ListLocations</code> with filter name <code>LocationType S3</code> and <code>Operator Equals</code>.
  * Name **required**
  * Operator **required**
  * Values **required**
    * items [FilterAttributeValue](#filterattributevalue)

### LocationFilterName
* LocationFilterName `string` (values: LocationUri, LocationType, CreationTime)

### LocationFilters
* LocationFilters `array`
  * items [LocationFilter](#locationfilter)

### LocationList
* LocationList `array`
  * items [LocationListEntry](#locationlistentry)

### LocationListEntry
* LocationListEntry `object`: Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a>ListLocations</a> operation is called.
  * LocationArn
  * LocationUri

### LocationUri
* LocationUri `string`

### LogGroupArn
* LogGroupArn `string`

### LogLevel
* LogLevel `string` (values: OFF, BASIC, TRANSFER)

### MaxResults
* MaxResults `integer`

### Mtime
* Mtime `string` (values: NONE, PRESERVE)

### NetworkInterfaceArn
* NetworkInterfaceArn `string`

### NextToken
* NextToken `string`

### NfsMountOptions
* NfsMountOptions `object`: Represents the mount options that are available for DataSync to access an NFS location.
  * Version

### NfsSubdirectory
* NfsSubdirectory `string`

### NfsVersion
* NfsVersion `string` (values: AUTOMATIC, NFS3, NFS4_0, NFS4_1)

### ObjectStorageAccessKey
* ObjectStorageAccessKey `string`

### ObjectStorageBucketName
* ObjectStorageBucketName `string`

### ObjectStorageSecretKey
* ObjectStorageSecretKey `string`

### ObjectStorageServerPort
* ObjectStorageServerPort `integer`

### ObjectStorageServerProtocol
* ObjectStorageServerProtocol `string` (values: HTTPS, HTTP)

### OnPremConfig
* OnPremConfig `object`: A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
  * AgentArns **required**
    * items [AgentArn](#agentarn)

### Operator
* Operator `string` (values: Equals, NotEquals, In, LessThanOrEqual, LessThan, GreaterThanOrEqual, GreaterThan, Contains, NotContains, BeginsWith)

### Options
* Options `object`: <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p>
  * Atime
  * BytesPerSecond
  * Gid
  * LogLevel
  * Mtime
  * OverwriteMode
  * PosixPermissions
  * PreserveDeletedFiles
  * PreserveDevices
  * TaskQueueing
  * TransferMode
  * Uid
  * VerifyMode

### OutputTagList
* OutputTagList `array`
  * items [TagListEntry](#taglistentry)

### OverwriteMode
* OverwriteMode `string` (values: ALWAYS, NEVER)

### PLSecurityGroupArnList
* PLSecurityGroupArnList `array`
  * items [Ec2SecurityGroupArn](#ec2securitygrouparn)

### PLSubnetArnList
* PLSubnetArnList `array`
  * items [Ec2SubnetArn](#ec2subnetarn)

### PhaseStatus
* PhaseStatus `string` (values: PENDING, SUCCESS, ERROR)

### PosixPermissions
* PosixPermissions `string` (values: NONE, PRESERVE)

### PreserveDeletedFiles
* PreserveDeletedFiles `string` (values: PRESERVE, REMOVE)

### PreserveDevices
* PreserveDevices `string` (values: NONE, PRESERVE)

### PrivateLinkConfig
* PrivateLinkConfig `object`: The VPC endpoint, subnet, and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud).
  * PrivateLinkEndpoint
  * SecurityGroupArns
    * items [Ec2SecurityGroupArn](#ec2securitygrouparn)
  * SubnetArns
    * items [Ec2SubnetArn](#ec2subnetarn)
  * VpcEndpointId

### S3BucketArn
* S3BucketArn `string`

### S3Config
* S3Config `object`: <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p>
  * BucketAccessRoleArn **required**

### S3StorageClass
* S3StorageClass `string` (values: STANDARD, STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING, GLACIER, DEEP_ARCHIVE, OUTPOSTS)

### S3Subdirectory
* S3Subdirectory `string`

### ScheduleExpressionCron
* ScheduleExpressionCron `string`

### ServerHostname
* ServerHostname `string`

### SmbDomain
* SmbDomain `string`

### SmbMountOptions
* SmbMountOptions `object`: Represents the mount options that are available for DataSync to access an SMB location.
  * Version

### SmbPassword
* SmbPassword `string`

### SmbSubdirectory
* SmbSubdirectory `string`

### SmbUser
* SmbUser `string`

### SmbVersion
* SmbVersion `string` (values: AUTOMATIC, SMB2, SMB3)

### SourceNetworkInterfaceArns
* SourceNetworkInterfaceArns `array`
  * items [NetworkInterfaceArn](#networkinterfacearn)

### StartTaskExecutionRequest
* StartTaskExecutionRequest `object`: StartTaskExecutionRequest
  * Includes
    * items [FilterRule](#filterrule)
  * OverrideOptions [Options](#options)
  * TaskArn **required**

### StartTaskExecutionResponse
* StartTaskExecutionResponse `object`: StartTaskExecutionResponse
  * TaskExecutionArn

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagListEntry
* TagListEntry `object`: Represents a single entry in a list of AWS resource tags. <code>TagListEntry</code> returns an array that contains a list of tasks when the <a>ListTagsForResource</a> operation is called.
  * Key **required**
  * Value

### TagResourceRequest
* TagResourceRequest `object`: TagResourceRequest
  * ResourceArn **required**
  * Tags **required**
    * items [TagListEntry](#taglistentry)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TaggableResourceArn
* TaggableResourceArn `string`

### TaskArn
* TaskArn `string`

### TaskExecutionArn
* TaskExecutionArn `string`

### TaskExecutionList
* TaskExecutionList `array`
  * items [TaskExecutionListEntry](#taskexecutionlistentry)

### TaskExecutionListEntry
* TaskExecutionListEntry `object`: Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when <a>ListTaskExecutions</a> operation is called.
  * Status
  * TaskExecutionArn

### TaskExecutionResultDetail
* TaskExecutionResultDetail `object`: Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered.
  * ErrorCode
  * ErrorDetail
  * PrepareDuration
  * PrepareStatus
  * TotalDuration
  * TransferDuration
  * TransferStatus
  * VerifyDuration
  * VerifyStatus

### TaskExecutionStatus
* TaskExecutionStatus `string` (values: QUEUED, LAUNCHING, PREPARING, TRANSFERRING, VERIFYING, SUCCESS, ERROR)

### TaskFilter
* TaskFilter `object`: You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.
  * Name **required**
  * Operator **required**
  * Values **required**
    * items [FilterAttributeValue](#filterattributevalue)

### TaskFilterName
* TaskFilterName `string` (values: LocationId, CreationTime)

### TaskFilters
* TaskFilters `array`
  * items [TaskFilter](#taskfilter)

### TaskList
* TaskList `array`
  * items [TaskListEntry](#tasklistentry)

### TaskListEntry
* TaskListEntry `object`: Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a>ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks.
  * Name
  * Status
  * TaskArn

### TaskQueueing
* TaskQueueing `string` (values: ENABLED, DISABLED)

### TaskSchedule
* TaskSchedule `object`: Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>.
  * ScheduleExpression **required**

### TaskStatus
* TaskStatus `string` (values: AVAILABLE, CREATING, QUEUED, RUNNING, UNAVAILABLE)

### Time
* Time `string`

### TransferMode
* TransferMode `string` (values: CHANGED, ALL)

### Uid
* Uid `string` (values: NONE, INT_VALUE, NAME, BOTH)

### UntagResourceRequest
* UntagResourceRequest `object`: UntagResourceRequest
  * Keys **required**
    * items [TagKey](#tagkey)
  * ResourceArn **required**

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAgentRequest
* UpdateAgentRequest `object`: UpdateAgentRequest
  * AgentArn **required**
  * Name

### UpdateAgentResponse
* UpdateAgentResponse `object`

### UpdateTaskExecutionRequest
* UpdateTaskExecutionRequest `object`
  * Options **required** [Options](#options)
  * TaskExecutionArn **required**

### UpdateTaskExecutionResponse
* UpdateTaskExecutionResponse `object`

### UpdateTaskRequest
* UpdateTaskRequest `object`: UpdateTaskResponse
  * CloudWatchLogGroupArn
  * Excludes
    * items [FilterRule](#filterrule)
  * Name
  * Options [Options](#options)
  * Schedule
    * ScheduleExpression **required**
  * TaskArn **required**

### UpdateTaskResponse
* UpdateTaskResponse `object`

### VerifyMode
* VerifyMode `string` (values: POINT_IN_TIME_CONSISTENT, ONLY_FILES_TRANSFERRED, NONE)

### VpcEndpointId
* VpcEndpointId `string`

### long
* long `integer`

### string
* string `string`


