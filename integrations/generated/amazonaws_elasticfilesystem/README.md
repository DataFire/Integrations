# @datafire/amazonaws_elasticfilesystem

Client library for Amazon Elastic File System

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_elasticfilesystem
```
```js
let amazonaws_elasticfilesystem = require('@datafire/amazonaws_elasticfilesystem').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_elasticfilesystem.CreateTags({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>Amazon Elastic File System</fullname> <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 instances in the AWS Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. For more information, see the <a href="http://docs.aws.amazon.com/efs/latest/ug/api-reference.html">User Guide</a>.</p>

## Actions

### CreateTags



```js
amazonaws_elasticfilesystem.CreateTags({
  "FileSystemId": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`
  * Tags **required** [Tags](#tags)

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_elasticfilesystem.DeleteTags({
  "FileSystemId": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`
  * TagKeys **required** [TagKeys](#tagkeys)

#### Output
*Output schema unknown*

### DescribeFileSystems



```js
amazonaws_elasticfilesystem.DescribeFileSystems({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeFileSystemsResponse](#describefilesystemsresponse)

### DeleteFileSystem



```js
amazonaws_elasticfilesystem.DeleteFileSystem({
  "FileSystemId": ""
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`

#### Output
*Output schema unknown*

### DescribeMountTargets



```js
amazonaws_elasticfilesystem.DescribeMountTargets({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeMountTargetsResponse](#describemounttargetsresponse)

### DeleteMountTarget



```js
amazonaws_elasticfilesystem.DeleteMountTarget({
  "MountTargetId": ""
}, context)
```

#### Input
* input `object`
  * MountTargetId **required** `string`

#### Output
*Output schema unknown*

### ModifyMountTargetSecurityGroups



```js
amazonaws_elasticfilesystem.ModifyMountTargetSecurityGroups({
  "MountTargetId": ""
}, context)
```

#### Input
* input `object`
  * MountTargetId **required** `string`
  * SecurityGroups [SecurityGroups](#securitygroups)

#### Output
*Output schema unknown*

### DescribeTags



```js
amazonaws_elasticfilesystem.DescribeTags({
  "FileSystemId": ""
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`

#### Output
* output [DescribeTagsResponse](#describetagsresponse)



## Definitions

### AwsAccountId
* AwsAccountId `string`

### BadRequest
* BadRequest `object`: Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### CreateFileSystemRequest
* CreateFileSystemRequest `object`
  * CreationToken **required** [CreationToken](#creationtoken)
  * Encrypted [Encrypted](#encrypted)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * PerformanceMode [PerformanceMode](#performancemode)

### CreateMountTargetRequest
* CreateMountTargetRequest `object`: <p/>
  * FileSystemId **required** [FileSystemId](#filesystemid)
  * IpAddress [IpAddress](#ipaddress)
  * SecurityGroups [SecurityGroups](#securitygroups)
  * SubnetId **required** [SubnetId](#subnetid)

### CreateTagsRequest
* CreateTagsRequest `object`: <p/>
  * Tags **required** [Tags](#tags)

### CreationToken
* CreationToken `string`

### DeleteFileSystemRequest
* DeleteFileSystemRequest `object`: <p/>

### DeleteMountTargetRequest
* DeleteMountTargetRequest `object`: <p/>

### DeleteTagsRequest
* DeleteTagsRequest `object`: <p/>
  * TagKeys **required** [TagKeys](#tagkeys)

### DependencyTimeout
* DependencyTimeout `object`: The service timed out trying to fulfill the request, and the client should try the call again.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### DescribeFileSystemsRequest
* DescribeFileSystemsRequest `object`: <p/>

### DescribeFileSystemsResponse
* DescribeFileSystemsResponse `object`
  * FileSystems [FileSystemDescriptions](#filesystemdescriptions)
  * Marker [Marker](#marker)
  * NextMarker [Marker](#marker)

### DescribeMountTargetSecurityGroupsRequest
* DescribeMountTargetSecurityGroupsRequest `object`: <p/>

### DescribeMountTargetSecurityGroupsResponse
* DescribeMountTargetSecurityGroupsResponse `object`
  * SecurityGroups **required** [SecurityGroups](#securitygroups)

### DescribeMountTargetsRequest
* DescribeMountTargetsRequest `object`: <p/>

### DescribeMountTargetsResponse
* DescribeMountTargetsResponse `object`: <p/>
  * Marker [Marker](#marker)
  * MountTargets [MountTargetDescriptions](#mounttargetdescriptions)
  * NextMarker [Marker](#marker)

### DescribeTagsRequest
* DescribeTagsRequest `object`: <p/>

### DescribeTagsResponse
* DescribeTagsResponse `object`: <p/>
  * Marker [Marker](#marker)
  * NextMarker [Marker](#marker)
  * Tags **required** [Tags](#tags)

### Encrypted
* Encrypted `boolean`

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### FileSystemAlreadyExists
* FileSystemAlreadyExists `object`: Returned if the file system you are trying to create already exists, with the creation token you provided.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * FileSystemId **required** [FileSystemId](#filesystemid)
  * Message [ErrorMessage](#errormessage)

### FileSystemDescription
* FileSystemDescription `object`: Description of the file system.
  * CreationTime **required** [Timestamp](#timestamp)
  * CreationToken **required** [CreationToken](#creationtoken)
  * Encrypted [Encrypted](#encrypted)
  * FileSystemId **required** [FileSystemId](#filesystemid)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * LifeCycleState **required** [LifeCycleState](#lifecyclestate)
  * Name [TagValue](#tagvalue)
  * NumberOfMountTargets **required** [MountTargetCount](#mounttargetcount)
  * OwnerId **required** [AwsAccountId](#awsaccountid)
  * PerformanceMode **required** [PerformanceMode](#performancemode)
  * SizeInBytes **required** [FileSystemSize](#filesystemsize)

### FileSystemDescriptions
* FileSystemDescriptions `array`
  * items [FileSystemDescription](#filesystemdescription)

### FileSystemId
* FileSystemId `string`

### FileSystemInUse
* FileSystemInUse `object`: Returned if a file system has mount targets.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### FileSystemLimitExceeded
* FileSystemLimitExceeded `object`: Returned if the AWS account has already created maximum number of file systems allowed per account.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### FileSystemNotFound
* FileSystemNotFound `object`: Returned if the specified <code>FileSystemId</code> does not exist in the requester's AWS account.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### FileSystemSize
* FileSystemSize `object`: Latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. Note that the value does not represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value will represent the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.
  * Timestamp [Timestamp](#timestamp)
  * Value **required** [FileSystemSizeValue](#filesystemsizevalue)

### FileSystemSizeValue
* FileSystemSizeValue `integer`

### IncorrectFileSystemLifeCycleState
* IncorrectFileSystemLifeCycleState `object`: Returned if the file system's life cycle state is not "created".
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### IncorrectMountTargetState
* IncorrectMountTargetState `object`: Returned if the mount target is not in the correct state for the operation.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### InternalServerError
* InternalServerError `object`: Returned if an error occurred on the server side.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### IpAddress
* IpAddress `string`

### IpAddressInUse
* IpAddressInUse `object`: Returned if the request specified an <code>IpAddress</code> that is already in use in the subnet.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### KmsKeyId
* KmsKeyId `string`

### LifeCycleState
* LifeCycleState `string` (values: creating, available, deleting, deleted)

### Marker
* Marker `string`

### MaxItems
* MaxItems `integer`

### ModifyMountTargetSecurityGroupsRequest
* ModifyMountTargetSecurityGroupsRequest `object`: <p/>
  * SecurityGroups [SecurityGroups](#securitygroups)

### MountTargetConflict
* MountTargetConflict `object`: Returned if the mount target would violate one of the specified restrictions based on the file system's existing mount targets.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### MountTargetCount
* MountTargetCount `integer`

### MountTargetDescription
* MountTargetDescription `object`: Provides a description of a mount target.
  * FileSystemId **required** [FileSystemId](#filesystemid)
  * IpAddress [IpAddress](#ipaddress)
  * LifeCycleState **required** [LifeCycleState](#lifecyclestate)
  * MountTargetId **required** [MountTargetId](#mounttargetid)
  * NetworkInterfaceId [NetworkInterfaceId](#networkinterfaceid)
  * OwnerId [AwsAccountId](#awsaccountid)
  * SubnetId **required** [SubnetId](#subnetid)

### MountTargetDescriptions
* MountTargetDescriptions `array`
  * items [MountTargetDescription](#mounttargetdescription)

### MountTargetId
* MountTargetId `string`

### MountTargetNotFound
* MountTargetNotFound `object`: Returned if there is no mount target with the specified ID found in the caller's account.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### NetworkInterfaceId
* NetworkInterfaceId `string`

### NetworkInterfaceLimitExceeded
* NetworkInterfaceLimitExceeded `object`:  The calling account has reached the ENI limit for the specific AWS region. Client should try to delete some ENIs or get its account limit raised. For more information, see <a href="http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_Limits.html">Amazon VPC Limits</a> in the Amazon Virtual Private Cloud User Guide (see the Network interfaces per VPC entry in the table). 
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### NoFreeAddressesInSubnet
* NoFreeAddressesInSubnet `object`: Returned if <code>IpAddress</code> was not specified in the request and there are no free IP addresses in the subnet.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### PerformanceMode
* PerformanceMode `string` (values: generalPurpose, maxIO)

### SecurityGroup
* SecurityGroup `string`

### SecurityGroupLimitExceeded
* SecurityGroupLimitExceeded `object`: Returned if the size of <code>SecurityGroups</code> specified in the request is greater than five.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### SecurityGroupNotFound
* SecurityGroupNotFound `object`: Returned if one of the specified security groups does not exist in the subnet's VPC.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### SecurityGroups
* SecurityGroups `array`
  * items [SecurityGroup](#securitygroup)

### SubnetId
* SubnetId `string`

### SubnetNotFound
* SubnetNotFound `object`: Returned if there is no subnet with ID <code>SubnetId</code> provided in the request.
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)

### Tag
* Tag `object`: A tag is a key-value pair. Allowed characters: letters, whitespace, and numbers, representable in UTF-8, and the following characters:<code> + - = . _ : /</code> 
  * Key **required** [TagKey](#tagkey)
  * Value **required** [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### Timestamp
* Timestamp `string`

### UnsupportedAvailabilityZone
* UnsupportedAvailabilityZone `object`: <p/>
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message [ErrorMessage](#errormessage)


