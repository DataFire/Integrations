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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Elastic File System</fullname> <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 instances in the AWS Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">User Guide</a>.</p>

## Actions

### DescribeAccessPoints



```js
amazonaws_elasticfilesystem.DescribeAccessPoints({}, context)
```

#### Input
* input `object`
  * MaxResults `integer`
  * NextToken `string`
  * AccessPointId `string`
  * FileSystemId `string`

#### Output
* output [DescribeAccessPointsResponse](#describeaccesspointsresponse)

### CreateAccessPoint



```js
amazonaws_elasticfilesystem.CreateAccessPoint({
  "ClientToken": "",
  "FileSystemId": ""
}, context)
```

#### Input
* input `object`
  * ClientToken **required** `string`: A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
  * FileSystemId **required** `string`: The ID of the EFS file system that the access point provides access to.
  * PosixUser `object`: The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
    * Gid
    * SecondaryGids
      * items [Gid](#gid)
    * Uid
  * RootDirectory `object`: Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
    * CreationInfo
      * OwnerGid **required**
      * OwnerUid **required**
      * Permissions **required**
    * Path
  * Tags `array`: Creates tags associated with the access point. Each tag is a key-value pair.
    * items [Tag](#tag)

#### Output
* output [AccessPointDescription](#accesspointdescription)

### DeleteAccessPoint



```js
amazonaws_elasticfilesystem.DeleteAccessPoint({
  "AccessPointId": ""
}, context)
```

#### Input
* input `object`
  * AccessPointId **required** `string`

#### Output
*Output schema unknown*

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
  * Tags **required** `array`: An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair. 
    * items [Tag](#tag)

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
  * TagKeys **required** `array`: A list of tag keys to delete.
    * items [TagKey](#tagkey)

#### Output
*Output schema unknown*

### DescribeFileSystems



```js
amazonaws_elasticfilesystem.DescribeFileSystems({}, context)
```

#### Input
* input `object`
  * MaxItems `integer`
  * Marker `string`
  * CreationToken `string`
  * FileSystemId `string`

#### Output
* output [DescribeFileSystemsResponse](#describefilesystemsresponse)

### CreateFileSystem



```js
amazonaws_elasticfilesystem.CreateFileSystem({
  "CreationToken": ""
}, context)
```

#### Input
* input `object`
  * CreationToken **required** `string`: A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.
  * Encrypted `boolean`: A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying <a>CreateFileSystemRequest$KmsKeyId</a> for an existing AWS Key Management Service (AWS KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system. 
  * KmsKeyId `string`: <p>The ID of the AWS KMS CMK to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault CMK. If this parameter is not specified, the default CMK for Amazon EFS is used. This ID can be in one of the following formats:</p> <ul> <li> <p>Key ID - A unique identifier of the key, for example <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>ARN - An Amazon Resource Name (ARN) for the key, for example <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>Key alias - A previously created display name for a key, for example <code>alias/projectKey1</code>.</p> </li> <li> <p>Key alias ARN - An ARN for a key alias, for example <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p> </li> </ul> <p>If <code>KmsKeyId</code> is specified, the <a>CreateFileSystemRequest$Encrypted</a> parameter must be set to true.</p> <important> <p>EFS accepts only symmetric CMKs. You cannot use asymmetric CMKs with EFS file systems.</p> </important>
  * PerformanceMode `string` (values: generalPurpose, maxIO): The performance mode of the file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created.
  * ProvisionedThroughputInMibps `number`: The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The upper limit for throughput is 1024 MiB/s. You can get this limit increased by contacting AWS Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS Limits That You Can Increase</a> in the <i>Amazon EFS User Guide.</i> 
  * Tags `array`: A value that specifies to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a <code>"Key":"Name","Value":"{value}"</code> key-value pair.
    * items [Tag](#tag)
  * ThroughputMode `string` (values: bursting, provisioned): The throughput mode for the file system to be created. There are two throughput modes to choose from for your file system: <code>bursting</code> and <code>provisioned</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughPutInMibps</code>. You can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes as long as it’s been more than 24 hours since the last decrease or throughput mode change. For more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying Throughput with Provisioned Mode</a> in the <i>Amazon EFS User Guide.</i> 

#### Output
*Output schema unknown*

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

### UpdateFileSystem



```js
amazonaws_elasticfilesystem.UpdateFileSystem({
  "FileSystemId": ""
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`
  * ProvisionedThroughputInMibps `number`: (Optional) The amount of throughput, in MiB/s, that you want to provision for your file system. Valid values are 1-1024. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update. If you're not updating the amount of provisioned throughput for your file system, you don't need to provide this value in your request. 
  * ThroughputMode `string` (values: bursting, provisioned): (Optional) The throughput mode that you want your file system to use. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>.

#### Output
*Output schema unknown*

### DescribeBackupPolicy



```js
amazonaws_elasticfilesystem.DescribeBackupPolicy({
  "FileSystemId": ""
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`

#### Output
* output [BackupPolicyDescription](#backuppolicydescription)

### PutBackupPolicy



```js
amazonaws_elasticfilesystem.PutBackupPolicy({
  "FileSystemId": "",
  "BackupPolicy": {}
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`
  * BackupPolicy **required** `object`: The backup policy for the file system, showing the curent status. If <code>ENABLED</code>, the file system is being backed up.
    * Status

#### Output
* output [BackupPolicyDescription](#backuppolicydescription)

### DescribeLifecycleConfiguration



```js
amazonaws_elasticfilesystem.DescribeLifecycleConfiguration({
  "FileSystemId": ""
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`

#### Output
* output [LifecycleConfigurationDescription](#lifecycleconfigurationdescription)

### PutLifecycleConfiguration



```js
amazonaws_elasticfilesystem.PutLifecycleConfiguration({
  "FileSystemId": "",
  "LifecyclePolicies": []
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`
  * LifecyclePolicies **required** `array`: An array of <code>LifecyclePolicy</code> objects that define the file system's <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object tells lifecycle management when to transition files from the Standard storage class to the Infrequent Access storage class.
    * items [LifecyclePolicy](#lifecyclepolicy)

#### Output
* output [LifecycleConfigurationDescription](#lifecycleconfigurationdescription)

### DeleteFileSystemPolicy



```js
amazonaws_elasticfilesystem.DeleteFileSystemPolicy({
  "FileSystemId": ""
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`

#### Output
*Output schema unknown*

### DescribeFileSystemPolicy



```js
amazonaws_elasticfilesystem.DescribeFileSystemPolicy({
  "FileSystemId": ""
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`

#### Output
* output [FileSystemPolicyDescription](#filesystempolicydescription)

### PutFileSystemPolicy



```js
amazonaws_elasticfilesystem.PutFileSystemPolicy({
  "FileSystemId": "",
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`
  * BypassPolicyLockoutSafetyCheck `boolean`: (Optional) A flag to indicate whether to bypass the <code>FileSystemPolicy</code> lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request will be locked out from making future <code>PutFileSystemPolicy</code> requests on the file system. Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent the principal that is making the request from making a subsequent <code>PutFileSystemPolicy</code> request on the file system. The default value is False. 
  * Policy **required** `string`: The <code>FileSystemPolicy</code> that you're creating. Accepts a JSON formatted policy definition. To find out more about the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">EFS Resource-based Policies</a>. 

#### Output
* output [FileSystemPolicyDescription](#filesystempolicydescription)

### DescribeMountTargets



```js
amazonaws_elasticfilesystem.DescribeMountTargets({}, context)
```

#### Input
* input `object`
  * MaxItems `integer`
  * Marker `string`
  * FileSystemId `string`
  * MountTargetId `string`
  * AccessPointId `string`

#### Output
* output [DescribeMountTargetsResponse](#describemounttargetsresponse)

### CreateMountTarget



```js
amazonaws_elasticfilesystem.CreateMountTarget({
  "FileSystemId": "",
  "SubnetId": ""
}, context)
```

#### Input
* input `object`
  * FileSystemId **required** `string`: The ID of the file system for which to create the mount target.
  * IpAddress `string`: Valid IPv4 address within the address range of the specified subnet.
  * SecurityGroups `array`: Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same VPC as subnet specified.
    * items [SecurityGroup](#securitygroup)
  * SubnetId **required** `string`: The ID of the subnet to add the mount target in.

#### Output
* output [MountTargetDescription](#mounttargetdescription)

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

### DescribeMountTargetSecurityGroups



```js
amazonaws_elasticfilesystem.DescribeMountTargetSecurityGroups({
  "MountTargetId": ""
}, context)
```

#### Input
* input `object`
  * MountTargetId **required** `string`

#### Output
* output [DescribeMountTargetSecurityGroupsResponse](#describemounttargetsecuritygroupsresponse)

### ModifyMountTargetSecurityGroups



```js
amazonaws_elasticfilesystem.ModifyMountTargetSecurityGroups({
  "MountTargetId": ""
}, context)
```

#### Input
* input `object`
  * MountTargetId **required** `string`
  * SecurityGroups `array`: An array of up to five VPC security group IDs.
    * items [SecurityGroup](#securitygroup)

#### Output
*Output schema unknown*

### ListTagsForResource



```js
amazonaws_elasticfilesystem.ListTagsForResource({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** `string`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_elasticfilesystem.TagResource({
  "ResourceId": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** `string`
  * Tags **required** `array`: <p/>
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_elasticfilesystem.UntagResource({
  "ResourceId": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** `string`
  * tagKeys **required** `array`

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
  * MaxItems `integer`
  * Marker `string`
  * FileSystemId **required** `string`

#### Output
* output [DescribeTagsResponse](#describetagsresponse)



## Definitions

### AccessPointAlreadyExists


### AccessPointArn
* AccessPointArn `string`

### AccessPointDescription
* AccessPointDescription `object`: Provides a description of an EFS file system access point.
  * AccessPointArn
  * AccessPointId
  * ClientToken
  * FileSystemId
  * LifeCycleState
  * Name
  * OwnerId
  * PosixUser
    * Gid **required**
    * SecondaryGids
      * items [Gid](#gid)
    * Uid **required**
  * RootDirectory
    * CreationInfo
      * OwnerGid **required**
      * OwnerUid **required**
      * Permissions **required**
    * Path
  * Tags
    * items [Tag](#tag)

### AccessPointDescriptions
* AccessPointDescriptions `array`
  * items [AccessPointDescription](#accesspointdescription)

### AccessPointId
* AccessPointId `string`

### AccessPointLimitExceeded


### AccessPointNotFound


### AvailabilityZoneId
* AvailabilityZoneId `string`

### AvailabilityZoneName
* AvailabilityZoneName `string`

### AwsAccountId
* AwsAccountId `string`

### BackupPolicy
* BackupPolicy `object`: The backup policy for the file system, showing the curent status. If <code>ENABLED</code>, the file system is being backed up.
  * Status **required**

### BackupPolicyDescription
* BackupPolicyDescription `object`
  * BackupPolicy
    * Status **required**

### BadRequest


### BypassPolicyLockoutSafetyCheck
* BypassPolicyLockoutSafetyCheck `boolean`

### ClientToken
* ClientToken `string`

### CreateAccessPointRequest
* CreateAccessPointRequest `object`
  * ClientToken **required**
  * FileSystemId **required**
  * PosixUser
    * Gid **required**
    * SecondaryGids
      * items [Gid](#gid)
    * Uid **required**
  * RootDirectory
    * CreationInfo
      * OwnerGid **required**
      * OwnerUid **required**
      * Permissions **required**
    * Path
  * Tags
    * items [Tag](#tag)

### CreateFileSystemRequest
* CreateFileSystemRequest `object`
  * CreationToken **required**
  * Encrypted
  * KmsKeyId
  * PerformanceMode
  * ProvisionedThroughputInMibps
  * Tags
    * items [Tag](#tag)
  * ThroughputMode

### CreateMountTargetRequest
* CreateMountTargetRequest `object`: <p/>
  * FileSystemId **required**
  * IpAddress
  * SecurityGroups
    * items [SecurityGroup](#securitygroup)
  * SubnetId **required**

### CreateTagsRequest
* CreateTagsRequest `object`: <p/>
  * Tags **required**
    * items [Tag](#tag)

### CreationInfo
* CreationInfo `object`: <p>Required if the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> &gt; <code>Path</code>. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying <code>CreationInfo</code>, you must include values for all properties. </p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important>
  * OwnerGid **required**
  * OwnerUid **required**
  * Permissions **required**

### CreationToken
* CreationToken `string`

### DeleteAccessPointRequest
* DeleteAccessPointRequest `object`

### DeleteFileSystemPolicyRequest
* DeleteFileSystemPolicyRequest `object`

### DeleteFileSystemRequest
* DeleteFileSystemRequest `object`: <p/>

### DeleteMountTargetRequest
* DeleteMountTargetRequest `object`: <p/>

### DeleteTagsRequest
* DeleteTagsRequest `object`: <p/>
  * TagKeys **required**
    * items [TagKey](#tagkey)

### DependencyTimeout


### DescribeAccessPointsRequest
* DescribeAccessPointsRequest `object`

### DescribeAccessPointsResponse
* DescribeAccessPointsResponse `object`
  * AccessPoints
    * items [AccessPointDescription](#accesspointdescription)
  * NextToken

### DescribeBackupPolicyRequest
* DescribeBackupPolicyRequest `object`

### DescribeFileSystemPolicyRequest
* DescribeFileSystemPolicyRequest `object`

### DescribeFileSystemsRequest
* DescribeFileSystemsRequest `object`: <p/>

### DescribeFileSystemsResponse
* DescribeFileSystemsResponse `object`
  * FileSystems
    * items [FileSystemDescription](#filesystemdescription)
  * Marker
  * NextMarker

### DescribeLifecycleConfigurationRequest
* DescribeLifecycleConfigurationRequest `object`

### DescribeMountTargetSecurityGroupsRequest
* DescribeMountTargetSecurityGroupsRequest `object`: <p/>

### DescribeMountTargetSecurityGroupsResponse
* DescribeMountTargetSecurityGroupsResponse `object`
  * SecurityGroups **required**
    * items [SecurityGroup](#securitygroup)

### DescribeMountTargetsRequest
* DescribeMountTargetsRequest `object`: <p/>

### DescribeMountTargetsResponse
* DescribeMountTargetsResponse `object`: <p/>
  * Marker
  * MountTargets
    * items [MountTargetDescription](#mounttargetdescription)
  * NextMarker

### DescribeTagsRequest
* DescribeTagsRequest `object`: <p/>

### DescribeTagsResponse
* DescribeTagsResponse `object`: <p/>
  * Marker
  * NextMarker
  * Tags **required**
    * items [Tag](#tag)

### Encrypted
* Encrypted `boolean`

### FileSystemAlreadyExists


### FileSystemArn
* FileSystemArn `string`

### FileSystemDescription
* FileSystemDescription `object`: A description of the file system.
  * CreationTime **required**
  * CreationToken **required**
  * Encrypted
  * FileSystemArn
  * FileSystemId **required**
  * KmsKeyId
  * LifeCycleState **required**
  * Name
  * NumberOfMountTargets **required**
  * OwnerId **required**
  * PerformanceMode **required**
  * ProvisionedThroughputInMibps
  * SizeInBytes **required**
    * Timestamp
    * Value **required**
    * ValueInIA
    * ValueInStandard
  * Tags **required**
    * items [Tag](#tag)
  * ThroughputMode

### FileSystemDescriptions
* FileSystemDescriptions `array`
  * items [FileSystemDescription](#filesystemdescription)

### FileSystemId
* FileSystemId `string`

### FileSystemInUse


### FileSystemLimitExceeded


### FileSystemNotFound


### FileSystemNullableSizeValue
* FileSystemNullableSizeValue `integer`

### FileSystemPolicyDescription
* FileSystemPolicyDescription `object`
  * FileSystemId
  * Policy

### FileSystemSize
* FileSystemSize `object`: The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.
  * Timestamp
  * Value **required**
  * ValueInIA
  * ValueInStandard

### FileSystemSizeValue
* FileSystemSizeValue `integer`

### Gid
* Gid `integer`

### IncorrectFileSystemLifeCycleState


### IncorrectMountTargetState


### InsufficientThroughputCapacity


### InternalServerError


### InvalidPolicyException


### IpAddress
* IpAddress `string`

### IpAddressInUse


### KmsKeyId
* KmsKeyId `string`

### LifeCycleState
* LifeCycleState `string` (values: creating, available, updating, deleting, deleted)

### LifecycleConfigurationDescription
* LifecycleConfigurationDescription `object`
  * LifecyclePolicies
    * items [LifecyclePolicy](#lifecyclepolicy)

### LifecyclePolicies
* LifecyclePolicies `array`
  * items [LifecyclePolicy](#lifecyclepolicy)

### LifecyclePolicy
* LifecyclePolicy `object`: Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.
  * TransitionToIA

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### Marker
* Marker `string`

### MaxItems
* MaxItems `integer`

### MaxResults
* MaxResults `integer`

### ModifyMountTargetSecurityGroupsRequest
* ModifyMountTargetSecurityGroupsRequest `object`: <p/>
  * SecurityGroups
    * items [SecurityGroup](#securitygroup)

### MountTargetConflict


### MountTargetCount
* MountTargetCount `integer`

### MountTargetDescription
* MountTargetDescription `object`: Provides a description of a mount target.
  * AvailabilityZoneId
  * AvailabilityZoneName
  * FileSystemId **required**
  * IpAddress
  * LifeCycleState **required**
  * MountTargetId **required**
  * NetworkInterfaceId
  * OwnerId
  * SubnetId **required**
  * VpcId

### MountTargetDescriptions
* MountTargetDescriptions `array`
  * items [MountTargetDescription](#mounttargetdescription)

### MountTargetId
* MountTargetId `string`

### MountTargetNotFound


### Name
* Name `string`

### NetworkInterfaceId
* NetworkInterfaceId `string`

### NetworkInterfaceLimitExceeded


### NoFreeAddressesInSubnet


### OwnerGid
* OwnerGid `integer`

### OwnerUid
* OwnerUid `integer`

### Path
* Path `string`

### PerformanceMode
* PerformanceMode `string` (values: generalPurpose, maxIO)

### Permissions
* Permissions `string`

### Policy
* Policy `string`

### PolicyNotFound


### PosixUser
* PosixUser `object`: The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
  * Gid **required**
  * SecondaryGids
    * items [Gid](#gid)
  * Uid **required**

### ProvisionedThroughputInMibps
* ProvisionedThroughputInMibps `number`

### PutBackupPolicyRequest
* PutBackupPolicyRequest `object`
  * BackupPolicy **required**
    * Status **required**

### PutFileSystemPolicyRequest
* PutFileSystemPolicyRequest `object`
  * BypassPolicyLockoutSafetyCheck
  * Policy **required**

### PutLifecycleConfigurationRequest
* PutLifecycleConfigurationRequest `object`
  * LifecyclePolicies **required**
    * items [LifecyclePolicy](#lifecyclepolicy)

### ResourceId
* ResourceId `string`

### RootDirectory
* RootDirectory `object`: Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
  * CreationInfo
    * OwnerGid **required**
    * OwnerUid **required**
    * Permissions **required**
  * Path

### SecondaryGids
* SecondaryGids `array`
  * items [Gid](#gid)

### SecurityGroup
* SecurityGroup `string`

### SecurityGroupLimitExceeded


### SecurityGroupNotFound


### SecurityGroups
* SecurityGroups `array`
  * items [SecurityGroup](#securitygroup)

### Status
* Status `string` (values: ENABLED, ENABLING, DISABLED, DISABLING)

### SubnetId
* SubnetId `string`

### SubnetNotFound


### Tag
* Tag `object`: A tag is a key-value pair. Allowed characters are letters, white space, and numbers that can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code> 
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**
    * items [Tag](#tag)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### ThroughputLimitExceeded


### ThroughputMode
* ThroughputMode `string` (values: bursting, provisioned)

### Timestamp
* Timestamp `string`

### Token
* Token `string`

### TooManyRequests


### TransitionToIARules
* TransitionToIARules `string` (values: AFTER_7_DAYS, AFTER_14_DAYS, AFTER_30_DAYS, AFTER_60_DAYS, AFTER_90_DAYS)

### Uid
* Uid `integer`

### UnsupportedAvailabilityZone


### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateFileSystemRequest
* UpdateFileSystemRequest `object`
  * ProvisionedThroughputInMibps
  * ThroughputMode

### ValidationException


### VpcId
* VpcId `string`


