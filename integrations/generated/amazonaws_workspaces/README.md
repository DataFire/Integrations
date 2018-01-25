# @datafire/amazonaws_workspaces

Client library for Amazon WorkSpaces

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_workspaces
```
```js
let amazonaws_workspaces = require('@datafire/amazonaws_workspaces').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_workspaces.CreateTags({
  "ResourceId": "",
  "Tags": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon WorkSpaces Service</fullname> <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows desktops for your users.</p>

## Actions

### CreateTags



```js
amazonaws_workspaces.CreateTags({
  "ResourceId": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [NonEmptyString](#nonemptystring)
  * Tags **required** [TagList](#taglist)

#### Output
* output [CreateTagsResult](#createtagsresult)

### CreateWorkspaces



```js
amazonaws_workspaces.CreateWorkspaces({
  "Workspaces": []
}, context)
```

#### Input
* input `object`
  * Workspaces **required** [WorkspaceRequestList](#workspacerequestlist)

#### Output
* output [CreateWorkspacesResult](#createworkspacesresult)

### DeleteTags



```js
amazonaws_workspaces.DeleteTags({
  "ResourceId": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [NonEmptyString](#nonemptystring)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
* output [DeleteTagsResult](#deletetagsresult)

### DescribeTags



```js
amazonaws_workspaces.DescribeTags({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [NonEmptyString](#nonemptystring)

#### Output
* output [DescribeTagsResult](#describetagsresult)

### DescribeWorkspaceBundles



```js
amazonaws_workspaces.DescribeWorkspaceBundles({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * BundleIds [BundleIdList](#bundleidlist)
  * NextToken [PaginationToken](#paginationtoken)
  * Owner [BundleOwner](#bundleowner)

#### Output
* output [DescribeWorkspaceBundlesResult](#describeworkspacebundlesresult)

### DescribeWorkspaceDirectories



```js
amazonaws_workspaces.DescribeWorkspaceDirectories({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * DirectoryIds [DirectoryIdList](#directoryidlist)
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [DescribeWorkspaceDirectoriesResult](#describeworkspacedirectoriesresult)

### DescribeWorkspaces



```js
amazonaws_workspaces.DescribeWorkspaces({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * BundleId [BundleId](#bundleid)
  * DirectoryId [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [PaginationToken](#paginationtoken)
  * UserName [UserName](#username)
  * WorkspaceIds [WorkspaceIdList](#workspaceidlist)

#### Output
* output [DescribeWorkspacesResult](#describeworkspacesresult)

### DescribeWorkspacesConnectionStatus



```js
amazonaws_workspaces.DescribeWorkspacesConnectionStatus({}, context)
```

#### Input
* input `object`
  * NextToken [PaginationToken](#paginationtoken)
  * WorkspaceIds [WorkspaceIdList](#workspaceidlist)

#### Output
* output [DescribeWorkspacesConnectionStatusResult](#describeworkspacesconnectionstatusresult)

### ModifyWorkspaceProperties



```js
amazonaws_workspaces.ModifyWorkspaceProperties({
  "WorkspaceId": "",
  "WorkspaceProperties": {}
}, context)
```

#### Input
* input `object`
  * WorkspaceId **required** [WorkspaceId](#workspaceid)
  * WorkspaceProperties **required** [WorkspaceProperties](#workspaceproperties)

#### Output
* output [ModifyWorkspacePropertiesResult](#modifyworkspacepropertiesresult)

### RebootWorkspaces



```js
amazonaws_workspaces.RebootWorkspaces({
  "RebootWorkspaceRequests": []
}, context)
```

#### Input
* input `object`
  * RebootWorkspaceRequests **required** [RebootWorkspaceRequests](#rebootworkspacerequests)

#### Output
* output [RebootWorkspacesResult](#rebootworkspacesresult)

### RebuildWorkspaces



```js
amazonaws_workspaces.RebuildWorkspaces({
  "RebuildWorkspaceRequests": []
}, context)
```

#### Input
* input `object`
  * RebuildWorkspaceRequests **required** [RebuildWorkspaceRequests](#rebuildworkspacerequests)

#### Output
* output [RebuildWorkspacesResult](#rebuildworkspacesresult)

### StartWorkspaces



```js
amazonaws_workspaces.StartWorkspaces({
  "StartWorkspaceRequests": []
}, context)
```

#### Input
* input `object`
  * StartWorkspaceRequests **required** [StartWorkspaceRequests](#startworkspacerequests)

#### Output
* output [StartWorkspacesResult](#startworkspacesresult)

### StopWorkspaces



```js
amazonaws_workspaces.StopWorkspaces({
  "StopWorkspaceRequests": []
}, context)
```

#### Input
* input `object`
  * StopWorkspaceRequests **required** [StopWorkspaceRequests](#stopworkspacerequests)

#### Output
* output [StopWorkspacesResult](#stopworkspacesresult)

### TerminateWorkspaces



```js
amazonaws_workspaces.TerminateWorkspaces({
  "TerminateWorkspaceRequests": []
}, context)
```

#### Input
* input `object`
  * TerminateWorkspaceRequests **required** [TerminateWorkspaceRequests](#terminateworkspacerequests)

#### Output
* output [TerminateWorkspacesResult](#terminateworkspacesresult)



## Definitions

### ARN
* ARN `string`

### AccessDeniedException
* AccessDeniedException `object`: The user is not authorized to access a resource.
  * message [ExceptionMessage](#exceptionmessage)

### Alias
* Alias `string`

### BooleanObject
* BooleanObject `boolean`

### BundleId
* BundleId `string`

### BundleIdList
* BundleIdList `array`
  * items [BundleId](#bundleid)

### BundleList
* BundleList `array`
  * items [WorkspaceBundle](#workspacebundle)

### BundleOwner
* BundleOwner `string`

### Compute
* Compute `string` (values: VALUE, STANDARD, PERFORMANCE)

### ComputeType
* ComputeType `object`: Contains information about the compute type of a WorkSpace bundle.
  * Name [Compute](#compute)

### ComputerName
* ComputerName `string`

### ConnectionState
* ConnectionState `string` (values: CONNECTED, DISCONNECTED, UNKNOWN)

### CreateTagsRequest
* CreateTagsRequest `object`: The request of the <a>CreateTags</a> operation.
  * ResourceId **required** [NonEmptyString](#nonemptystring)
  * Tags **required** [TagList](#taglist)

### CreateTagsResult
* CreateTagsResult `object`: The result of the <a>CreateTags</a> operation.

### CreateWorkspacesRequest
* CreateWorkspacesRequest `object`: Contains the inputs for the <a>CreateWorkspaces</a> operation.
  * Workspaces **required** [WorkspaceRequestList](#workspacerequestlist)

### CreateWorkspacesResult
* CreateWorkspacesResult `object`: Contains the result of the <a>CreateWorkspaces</a> operation.
  * FailedRequests [FailedCreateWorkspaceRequests](#failedcreateworkspacerequests)
  * PendingRequests [WorkspaceList](#workspacelist)

### DefaultOu
* DefaultOu `string`

### DefaultWorkspaceCreationProperties
* DefaultWorkspaceCreationProperties `object`: Contains default WorkSpace creation information.
  * CustomSecurityGroupId [SecurityGroupId](#securitygroupid)
  * DefaultOu [DefaultOu](#defaultou)
  * EnableInternetAccess [BooleanObject](#booleanobject)
  * EnableWorkDocs [BooleanObject](#booleanobject)
  * UserEnabledAsLocalAdministrator [BooleanObject](#booleanobject)

### DeleteTagsRequest
* DeleteTagsRequest `object`: The request of the <a>DeleteTags</a> operation.
  * ResourceId **required** [NonEmptyString](#nonemptystring)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### DeleteTagsResult
* DeleteTagsResult `object`: The result of the <a>DeleteTags</a> operation.

### DescribeTagsRequest
* DescribeTagsRequest `object`: The request of the <a>DescribeTags</a> operation.
  * ResourceId **required** [NonEmptyString](#nonemptystring)

### DescribeTagsResult
* DescribeTagsResult `object`: The result of the <a>DescribeTags</a> operation.
  * TagList [TagList](#taglist)

### DescribeWorkspaceBundlesRequest
* DescribeWorkspaceBundlesRequest `object`: Contains the inputs for the <a>DescribeWorkspaceBundles</a> operation.
  * BundleIds [BundleIdList](#bundleidlist)
  * NextToken [PaginationToken](#paginationtoken)
  * Owner [BundleOwner](#bundleowner)

### DescribeWorkspaceBundlesResult
* DescribeWorkspaceBundlesResult `object`: Contains the results of the <a>DescribeWorkspaceBundles</a> operation.
  * Bundles [BundleList](#bundlelist)
  * NextToken [PaginationToken](#paginationtoken)

### DescribeWorkspaceDirectoriesRequest
* DescribeWorkspaceDirectoriesRequest `object`: Contains the inputs for the <a>DescribeWorkspaceDirectories</a> operation.
  * DirectoryIds [DirectoryIdList](#directoryidlist)
  * NextToken [PaginationToken](#paginationtoken)

### DescribeWorkspaceDirectoriesResult
* DescribeWorkspaceDirectoriesResult `object`: Contains the results of the <a>DescribeWorkspaceDirectories</a> operation.
  * Directories [DirectoryList](#directorylist)
  * NextToken [PaginationToken](#paginationtoken)

### DescribeWorkspacesConnectionStatusRequest
* DescribeWorkspacesConnectionStatusRequest `object`
  * NextToken [PaginationToken](#paginationtoken)
  * WorkspaceIds [WorkspaceIdList](#workspaceidlist)

### DescribeWorkspacesConnectionStatusResult
* DescribeWorkspacesConnectionStatusResult `object`
  * NextToken [PaginationToken](#paginationtoken)
  * WorkspacesConnectionStatus [WorkspaceConnectionStatusList](#workspaceconnectionstatuslist)

### DescribeWorkspacesRequest
* DescribeWorkspacesRequest `object`: Contains the inputs for the <a>DescribeWorkspaces</a> operation.
  * BundleId [BundleId](#bundleid)
  * DirectoryId [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [PaginationToken](#paginationtoken)
  * UserName [UserName](#username)
  * WorkspaceIds [WorkspaceIdList](#workspaceidlist)

### DescribeWorkspacesResult
* DescribeWorkspacesResult `object`: Contains the results for the <a>DescribeWorkspaces</a> operation.
  * NextToken [PaginationToken](#paginationtoken)
  * Workspaces [WorkspaceList](#workspacelist)

### Description
* Description `string`

### DirectoryId
* DirectoryId `string`

### DirectoryIdList
* DirectoryIdList `array`
  * items [DirectoryId](#directoryid)

### DirectoryList
* DirectoryList `array`
  * items [WorkspaceDirectory](#workspacedirectory)

### DirectoryName
* DirectoryName `string`

### DnsIpAddresses
* DnsIpAddresses `array`
  * items [IpAddress](#ipaddress)

### ErrorType
* ErrorType `string`

### ExceptionMessage
* ExceptionMessage `string`

### FailedCreateWorkspaceRequest
* FailedCreateWorkspaceRequest `object`: Contains information about a WorkSpace that could not be created.
  * ErrorCode [ErrorType](#errortype)
  * ErrorMessage [Description](#description)
  * WorkspaceRequest [WorkspaceRequest](#workspacerequest)

### FailedCreateWorkspaceRequests
* FailedCreateWorkspaceRequests `array`
  * items [FailedCreateWorkspaceRequest](#failedcreateworkspacerequest)

### FailedRebootWorkspaceRequests
* FailedRebootWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedRebuildWorkspaceRequests
* FailedRebuildWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedStartWorkspaceRequests
* FailedStartWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedStopWorkspaceRequests
* FailedStopWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedTerminateWorkspaceRequests
* FailedTerminateWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedWorkspaceChangeRequest
* FailedWorkspaceChangeRequest `object`: Contains information about a WorkSpace that could not be rebooted (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).
  * ErrorCode [ErrorType](#errortype)
  * ErrorMessage [Description](#description)
  * WorkspaceId [WorkspaceId](#workspaceid)

### InvalidParameterValuesException
* InvalidParameterValuesException `object`: One or more parameter values are not valid.
  * message [ExceptionMessage](#exceptionmessage)

### InvalidResourceStateException
* InvalidResourceStateException `object`: The state of the WorkSpace is not valid for this operation.
  * message [ExceptionMessage](#exceptionmessage)

### IpAddress
* IpAddress `string`

### Limit
* Limit `integer`

### ModifyWorkspacePropertiesRequest
* ModifyWorkspacePropertiesRequest `object`
  * WorkspaceId **required** [WorkspaceId](#workspaceid)
  * WorkspaceProperties **required** [WorkspaceProperties](#workspaceproperties)

### ModifyWorkspacePropertiesResult
* ModifyWorkspacePropertiesResult `object`

### NonEmptyString
* NonEmptyString `string`

### OperationInProgressException
* OperationInProgressException `object`: The properties of this WorkSpace are currently being modified. Try again in a moment.
  * message [ExceptionMessage](#exceptionmessage)

### PaginationToken
* PaginationToken `string`

### RebootRequest
* RebootRequest `object`: Contains information used with the <a>RebootWorkspaces</a> operation to reboot a WorkSpace.
  * WorkspaceId **required** [WorkspaceId](#workspaceid)

### RebootWorkspaceRequests
* RebootWorkspaceRequests `array`
  * items [RebootRequest](#rebootrequest)

### RebootWorkspacesRequest
* RebootWorkspacesRequest `object`: Contains the inputs for the <a>RebootWorkspaces</a> operation.
  * RebootWorkspaceRequests **required** [RebootWorkspaceRequests](#rebootworkspacerequests)

### RebootWorkspacesResult
* RebootWorkspacesResult `object`: Contains the results of the <a>RebootWorkspaces</a> operation.
  * FailedRequests [FailedRebootWorkspaceRequests](#failedrebootworkspacerequests)

### RebuildRequest
* RebuildRequest `object`: Contains information used with the <a>RebuildWorkspaces</a> operation to rebuild a WorkSpace.
  * WorkspaceId **required** [WorkspaceId](#workspaceid)

### RebuildWorkspaceRequests
* RebuildWorkspaceRequests `array`
  * items [RebuildRequest](#rebuildrequest)

### RebuildWorkspacesRequest
* RebuildWorkspacesRequest `object`: Contains the inputs for the <a>RebuildWorkspaces</a> operation.
  * RebuildWorkspaceRequests **required** [RebuildWorkspaceRequests](#rebuildworkspacerequests)

### RebuildWorkspacesResult
* RebuildWorkspacesResult `object`: Contains the results of the <a>RebuildWorkspaces</a> operation.
  * FailedRequests [FailedRebuildWorkspaceRequests](#failedrebuildworkspacerequests)

### RegistrationCode
* RegistrationCode `string`

### ResourceLimitExceededException
* ResourceLimitExceededException `object`: Your resource limits have been exceeded.
  * message [ExceptionMessage](#exceptionmessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The resource could not be found.
  * ResourceId [NonEmptyString](#nonemptystring)
  * message [ExceptionMessage](#exceptionmessage)

### ResourceUnavailableException
* ResourceUnavailableException `object`: The specified resource is not available.
  * ResourceId [NonEmptyString](#nonemptystring)
  * message [ExceptionMessage](#exceptionmessage)

### RunningMode
* RunningMode `string` (values: AUTO_STOP, ALWAYS_ON)

### RunningModeAutoStopTimeoutInMinutes
* RunningModeAutoStopTimeoutInMinutes `integer`

### SecurityGroupId
* SecurityGroupId `string`

### StartRequest
* StartRequest `object`: Describes the start request.
  * WorkspaceId [WorkspaceId](#workspaceid)

### StartWorkspaceRequests
* StartWorkspaceRequests `array`
  * items [StartRequest](#startrequest)

### StartWorkspacesRequest
* StartWorkspacesRequest `object`
  * StartWorkspaceRequests **required** [StartWorkspaceRequests](#startworkspacerequests)

### StartWorkspacesResult
* StartWorkspacesResult `object`
  * FailedRequests [FailedStartWorkspaceRequests](#failedstartworkspacerequests)

### StopRequest
* StopRequest `object`: Describes the stop request.
  * WorkspaceId [WorkspaceId](#workspaceid)

### StopWorkspaceRequests
* StopWorkspaceRequests `array`
  * items [StopRequest](#stoprequest)

### StopWorkspacesRequest
* StopWorkspacesRequest `object`
  * StopWorkspaceRequests **required** [StopWorkspaceRequests](#stopworkspacerequests)

### StopWorkspacesResult
* StopWorkspacesResult `object`
  * FailedRequests [FailedStopWorkspaceRequests](#failedstopworkspacerequests)

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### Tag
* Tag `object`: Describes the tag of the WorkSpace.
  * Key **required** [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [NonEmptyString](#nonemptystring)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TerminateRequest
* TerminateRequest `object`: Contains information used with the <a>TerminateWorkspaces</a> operation to terminate a WorkSpace.
  * WorkspaceId **required** [WorkspaceId](#workspaceid)

### TerminateWorkspaceRequests
* TerminateWorkspaceRequests `array`
  * items [TerminateRequest](#terminaterequest)

### TerminateWorkspacesRequest
* TerminateWorkspacesRequest `object`: Contains the inputs for the <a>TerminateWorkspaces</a> operation.
  * TerminateWorkspaceRequests **required** [TerminateWorkspaceRequests](#terminateworkspacerequests)

### TerminateWorkspacesResult
* TerminateWorkspacesResult `object`: Contains the results of the <a>TerminateWorkspaces</a> operation.
  * FailedRequests [FailedTerminateWorkspaceRequests](#failedterminateworkspacerequests)

### Timestamp
* Timestamp `string`

### UnsupportedWorkspaceConfigurationException
* UnsupportedWorkspaceConfigurationException `object`: The configuration of this WorkSpace is not supported for this operation. For more information, see the <a href="http://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>. 
  * message [ExceptionMessage](#exceptionmessage)

### UserName
* UserName `string`

### UserStorage
* UserStorage `object`: Contains information about the user storage for a WorkSpace bundle.
  * Capacity [NonEmptyString](#nonemptystring)

### VolumeEncryptionKey
* VolumeEncryptionKey `string`

### Workspace
* Workspace `object`: Contains information about a WorkSpace.
  * BundleId [BundleId](#bundleid)
  * ComputerName [ComputerName](#computername)
  * DirectoryId [DirectoryId](#directoryid)
  * ErrorCode [WorkspaceErrorCode](#workspaceerrorcode)
  * ErrorMessage [Description](#description)
  * IpAddress [IpAddress](#ipaddress)
  * RootVolumeEncryptionEnabled [BooleanObject](#booleanobject)
  * State [WorkspaceState](#workspacestate)
  * SubnetId [SubnetId](#subnetid)
  * UserName [UserName](#username)
  * UserVolumeEncryptionEnabled [BooleanObject](#booleanobject)
  * VolumeEncryptionKey [VolumeEncryptionKey](#volumeencryptionkey)
  * WorkspaceId [WorkspaceId](#workspaceid)
  * WorkspaceProperties [WorkspaceProperties](#workspaceproperties)

### WorkspaceBundle
* WorkspaceBundle `object`: Contains information about a WorkSpace bundle.
  * BundleId [BundleId](#bundleid)
  * ComputeType [ComputeType](#computetype)
  * Description [Description](#description)
  * Name [NonEmptyString](#nonemptystring)
  * Owner [BundleOwner](#bundleowner)
  * UserStorage [UserStorage](#userstorage)

### WorkspaceConnectionStatus
* WorkspaceConnectionStatus `object`: Describes the connection status of a WorkSpace.
  * ConnectionState [ConnectionState](#connectionstate)
  * ConnectionStateCheckTimestamp [Timestamp](#timestamp)
  * LastKnownUserConnectionTimestamp [Timestamp](#timestamp)
  * WorkspaceId [WorkspaceId](#workspaceid)

### WorkspaceConnectionStatusList
* WorkspaceConnectionStatusList `array`
  * items [WorkspaceConnectionStatus](#workspaceconnectionstatus)

### WorkspaceDirectory
* WorkspaceDirectory `object`: Contains information about an AWS Directory Service directory for use with Amazon WorkSpaces.
  * Alias [Alias](#alias)
  * CustomerUserName [UserName](#username)
  * DirectoryId [DirectoryId](#directoryid)
  * DirectoryName [DirectoryName](#directoryname)
  * DirectoryType [WorkspaceDirectoryType](#workspacedirectorytype)
  * DnsIpAddresses [DnsIpAddresses](#dnsipaddresses)
  * IamRoleId [ARN](#arn)
  * RegistrationCode [RegistrationCode](#registrationcode)
  * State [WorkspaceDirectoryState](#workspacedirectorystate)
  * SubnetIds [SubnetIds](#subnetids)
  * WorkspaceCreationProperties [DefaultWorkspaceCreationProperties](#defaultworkspacecreationproperties)
  * WorkspaceSecurityGroupId [SecurityGroupId](#securitygroupid)

### WorkspaceDirectoryState
* WorkspaceDirectoryState `string` (values: REGISTERING, REGISTERED, DEREGISTERING, DEREGISTERED, ERROR)

### WorkspaceDirectoryType
* WorkspaceDirectoryType `string` (values: SIMPLE_AD, AD_CONNECTOR)

### WorkspaceErrorCode
* WorkspaceErrorCode `string`

### WorkspaceId
* WorkspaceId `string`

### WorkspaceIdList
* WorkspaceIdList `array`
  * items [WorkspaceId](#workspaceid)

### WorkspaceList
* WorkspaceList `array`
  * items [Workspace](#workspace)

### WorkspaceProperties
* WorkspaceProperties `object`: Describes the properties of a WorkSpace.
  * RunningMode [RunningMode](#runningmode)
  * RunningModeAutoStopTimeoutInMinutes [RunningModeAutoStopTimeoutInMinutes](#runningmodeautostoptimeoutinminutes)

### WorkspaceRequest
* WorkspaceRequest `object`: Contains information about a WorkSpace creation request.
  * BundleId **required** [BundleId](#bundleid)
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RootVolumeEncryptionEnabled [BooleanObject](#booleanobject)
  * Tags [TagList](#taglist)
  * UserName **required** [UserName](#username)
  * UserVolumeEncryptionEnabled [BooleanObject](#booleanobject)
  * VolumeEncryptionKey [VolumeEncryptionKey](#volumeencryptionkey)
  * WorkspaceProperties [WorkspaceProperties](#workspaceproperties)

### WorkspaceRequestList
* WorkspaceRequestList `array`
  * items [WorkspaceRequest](#workspacerequest)

### WorkspaceState
* WorkspaceState `string` (values: PENDING, AVAILABLE, IMPAIRED, UNHEALTHY, REBOOTING, STARTING, REBUILDING, MAINTENANCE, TERMINATING, TERMINATED, SUSPENDED, STOPPING, STOPPED, ERROR)


