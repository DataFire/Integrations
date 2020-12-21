# @datafire/amazonaws_fsx

Client library for Amazon FSx

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_fsx
```
```js
let amazonaws_fsx = require('@datafire/amazonaws_fsx').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon FSx is a fully managed service that makes it easy for storage and application administrators to launch and use shared file storage.

## Actions

### AssociateFileSystemAliases



```js
amazonaws_fsx.AssociateFileSystemAliases({
  "FileSystemId": null,
  "Aliases": null
}, context)
```

#### Input
* input `object`
  * Aliases **required**
    * items [AlternateDNSName](#alternatednsname)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * FileSystemId **required**

#### Output
* output [AssociateFileSystemAliasesResponse](#associatefilesystemaliasesresponse)

### CancelDataRepositoryTask



```js
amazonaws_fsx.CancelDataRepositoryTask({
  "TaskId": null
}, context)
```

#### Input
* input `object`
  * TaskId **required**

#### Output
* output [CancelDataRepositoryTaskResponse](#canceldatarepositorytaskresponse)

### CreateBackup



```js
amazonaws_fsx.CreateBackup({
  "FileSystemId": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * FileSystemId **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateBackupResponse](#createbackupresponse)

### CreateDataRepositoryTask



```js
amazonaws_fsx.CreateDataRepositoryTask({
  "Type": null,
  "FileSystemId": "",
  "Report": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * FileSystemId **required** [FileSystemId](#filesystemid)
  * Paths
    * items [DataRepositoryTaskPath](#datarepositorytaskpath)
  * Report **required**
    * Enabled **required**
    * Format
    * Path
    * Scope
  * Tags [Tags](#tags)
  * Type **required**

#### Output
* output [CreateDataRepositoryTaskResponse](#createdatarepositorytaskresponse)

### CreateFileSystem



```js
amazonaws_fsx.CreateFileSystem({
  "FileSystemType": null,
  "StorageCapacity": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * FileSystemType **required**
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * LustreConfiguration [CreateFileSystemLustreConfiguration](#createfilesystemlustreconfiguration)
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * StorageCapacity **required**
  * StorageType
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * WindowsConfiguration
    * ActiveDirectoryId
    * Aliases
      * items [AlternateDNSName](#alternatednsname)
    * AutomaticBackupRetentionDays
    * CopyTagsToBackups
    * DailyAutomaticBackupStartTime
    * DeploymentType
    * PreferredSubnetId
    * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryConfiguration](#selfmanagedactivedirectoryconfiguration)
    * ThroughputCapacity **required**
    * WeeklyMaintenanceStartTime

#### Output
* output [CreateFileSystemResponse](#createfilesystemresponse)

### CreateFileSystemFromBackup



```js
amazonaws_fsx.CreateFileSystemFromBackup({
  "BackupId": "",
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * BackupId **required** [BackupId](#backupid)
  * ClientRequestToken
  * LustreConfiguration [CreateFileSystemLustreConfiguration](#createfilesystemlustreconfiguration)
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * StorageType
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * WindowsConfiguration
    * ActiveDirectoryId
    * Aliases
      * items [AlternateDNSName](#alternatednsname)
    * AutomaticBackupRetentionDays
    * CopyTagsToBackups
    * DailyAutomaticBackupStartTime
    * DeploymentType
    * PreferredSubnetId
    * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryConfiguration](#selfmanagedactivedirectoryconfiguration)
    * ThroughputCapacity **required**
    * WeeklyMaintenanceStartTime

#### Output
* output [CreateFileSystemFromBackupResponse](#createfilesystemfrombackupresponse)

### DeleteBackup



```js
amazonaws_fsx.DeleteBackup({
  "BackupId": null
}, context)
```

#### Input
* input `object`
  * BackupId **required**
  * ClientRequestToken

#### Output
* output [DeleteBackupResponse](#deletebackupresponse)

### DeleteFileSystem



```js
amazonaws_fsx.DeleteFileSystem({
  "FileSystemId": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * FileSystemId **required**
  * LustreConfiguration [DeleteFileSystemLustreConfiguration](#deletefilesystemlustreconfiguration)
  * WindowsConfiguration [DeleteFileSystemWindowsConfiguration](#deletefilesystemwindowsconfiguration)

#### Output
* output [DeleteFileSystemResponse](#deletefilesystemresponse)

### DescribeBackups



```js
amazonaws_fsx.DescribeBackups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * BackupIds
    * items [BackupId](#backupid)
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

#### Output
* output [DescribeBackupsResponse](#describebackupsresponse)

### DescribeDataRepositoryTasks



```js
amazonaws_fsx.DescribeDataRepositoryTasks({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [DataRepositoryTaskFilter](#datarepositorytaskfilter)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * TaskIds
    * items [TaskId](#taskid)

#### Output
* output [DescribeDataRepositoryTasksResponse](#describedatarepositorytasksresponse)

### DescribeFileSystemAliases



```js
amazonaws_fsx.DescribeFileSystemAliases({
  "FileSystemId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * FileSystemId **required**
  * MaxResults
  * NextToken

#### Output
* output [DescribeFileSystemAliasesResponse](#describefilesystemaliasesresponse)

### DescribeFileSystems



```js
amazonaws_fsx.DescribeFileSystems({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * FileSystemIds
    * items [FileSystemId](#filesystemid)
  * MaxResults
  * NextToken

#### Output
* output [DescribeFileSystemsResponse](#describefilesystemsresponse)

### DisassociateFileSystemAliases



```js
amazonaws_fsx.DisassociateFileSystemAliases({
  "FileSystemId": null,
  "Aliases": null
}, context)
```

#### Input
* input `object`
  * Aliases **required**
    * items [AlternateDNSName](#alternatednsname)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * FileSystemId **required**

#### Output
* output [DisassociateFileSystemAliasesResponse](#disassociatefilesystemaliasesresponse)

### ListTagsForResource



```js
amazonaws_fsx.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_fsx.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_fsx.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateFileSystem



```js
amazonaws_fsx.UpdateFileSystem({
  "FileSystemId": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * FileSystemId **required**
  * LustreConfiguration [UpdateFileSystemLustreConfiguration](#updatefilesystemlustreconfiguration)
  * StorageCapacity
  * WindowsConfiguration
    * AutomaticBackupRetentionDays
    * DailyAutomaticBackupStartTime
    * SelfManagedActiveDirectoryConfiguration
      * DnsIps
        * items [IpAddress](#ipaddress)
      * Password
      * UserName
    * ThroughputCapacity
    * WeeklyMaintenanceStartTime

#### Output
* output [UpdateFileSystemResponse](#updatefilesystemresponse)



## Definitions

### AWSAccountId
* AWSAccountId `string`: An AWS account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.

### ActiveDirectoryBackupAttributes
* ActiveDirectoryBackupAttributes `object`: The Microsoft AD attributes of the Amazon FSx for Windows File Server file system.
  * ActiveDirectoryId
  * DomainName

### ActiveDirectoryError


### ActiveDirectoryFullyQualifiedName
* ActiveDirectoryFullyQualifiedName `string`

### AdministrativeAction
* AdministrativeAction `object`: Describes a specific Amazon FSx administrative action for the current Windows or Lustre file system.
  * AdministrativeActionType [AdministrativeActionType](#administrativeactiontype)
  * FailureDetails [AdministrativeActionFailureDetails](#administrativeactionfailuredetails)
  * ProgressPercent
  * RequestTime
  * Status
  * TargetFileSystemValues
    * AdministrativeActions
      * items [AdministrativeAction](#administrativeaction)
    * CreationTime
    * DNSName
    * FailureDetails [FileSystemFailureDetails](#filesystemfailuredetails)
    * FileSystemId
    * FileSystemType
    * KmsKeyId
    * Lifecycle
    * LustreConfiguration [LustreFileSystemConfiguration](#lustrefilesystemconfiguration)
    * NetworkInterfaceIds
      * items [NetworkInterfaceId](#networkinterfaceid)
    * OwnerId
    * ResourceARN
    * StorageCapacity
    * StorageType
    * SubnetIds
      * items [SubnetId](#subnetid)
    * Tags
      * items [Tag](#tag)
    * VpcId
    * WindowsConfiguration
      * ActiveDirectoryId
      * Aliases [Aliases](#aliases)
      * AutomaticBackupRetentionDays
      * CopyTagsToBackups
      * DailyAutomaticBackupStartTime
      * DeploymentType
      * MaintenanceOperationsInProgress
        * items [FileSystemMaintenanceOperation](#filesystemmaintenanceoperation)
      * PreferredFileServerIp
      * PreferredSubnetId
      * RemoteAdministrationEndpoint
      * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryAttributes](#selfmanagedactivedirectoryattributes)
      * ThroughputCapacity
      * WeeklyMaintenanceStartTime

### AdministrativeActionFailureDetails
* AdministrativeActionFailureDetails `object`: Provides information about a failed administrative action.
  * Message

### AdministrativeActionType
* AdministrativeActionType `string` (values: FILE_SYSTEM_UPDATE, STORAGE_OPTIMIZATION, FILE_SYSTEM_ALIAS_ASSOCIATION, FILE_SYSTEM_ALIAS_DISASSOCIATION): <p>Describes the type of administrative action, as follows:</p> <ul> <li> <p> <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated by the user from the Amazon FSx console, API (UpdateFileSystem), or CLI (update-file-system).</p> </li> <li> <p> <code>STORAGE_OPTIMIZATION</code> - Once the <code>FILE_SYSTEM_UPDATE</code> task to increase a file system's storage capacity completes successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. </p> <ul> <li> <p>For Windows, storage optimization is the process of migrating the file system data to the new, larger disks.</p> </li> <li> <p>For Lustre, storage optimization consists of rebalancing the data across the existing and newly added file servers.</p> </li> </ul> <p>You can track the storage optimization progress using the <code>ProgressPercent</code> property. When <code>STORAGE_OPTIMIZATION</code> completes successfully, the parent <code>FILE_SYSTEM_UPDATE</code> action status changes to <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage capacity</a> in the <i>Amazon FSx for Windows File Server User Guide</i> and <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput capacity</a> in the <i>Amazon FSx for Lustre User Guide</i>. </p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_ASSOCIATION</code> - A file system update to associate a new DNS alias with the file system. For more information, see .</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_DISASSOCIATION</code> - A file system update to disassociate a DNS alias from the file system. For more information, see .</p> </li> </ul>

### AdministrativeActions
* AdministrativeActions `array`
  * items [AdministrativeAction](#administrativeaction)

### Alias
* Alias `object`: A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using user-defined DNS names, in addition to the default DNS name that Amazon FSx assigns to the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a> in the <i>FSx for Windows File Server User Guide</i>.
  * Lifecycle
  * Name

### AliasLifecycle
* AliasLifecycle `string` (values: AVAILABLE, CREATING, DELETING, CREATE_FAILED, DELETE_FAILED)

### Aliases
* Aliases `array`: An array of one or more DNS aliases that are currently associated with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a>.
  * items [Alias](#alias)

### AlternateDNSName
* AlternateDNSName `string`

### AlternateDNSNames
* AlternateDNSNames `array`
  * items [AlternateDNSName](#alternatednsname)

### ArchivePath
* ArchivePath `string`

### AssociateFileSystemAliasesRequest
* AssociateFileSystemAliasesRequest `object`: The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system.
  * Aliases **required**
    * items [AlternateDNSName](#alternatednsname)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * FileSystemId **required**

### AssociateFileSystemAliasesResponse
* AssociateFileSystemAliasesResponse `object`: The system generated response showing the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system. It can take up to 2.5 minutes for the alias status to change from <code>CREATING</code> to <code>AVAILABLE</code>. 
  * Aliases
    * items [Alias](#alias)

### AutoImportPolicyType
* AutoImportPolicyType `string` (values: NONE, NEW, NEW_CHANGED)

### AutomaticBackupRetentionDays
* AutomaticBackupRetentionDays `integer`: The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is 0.

### Backup
* Backup `object`: <p>A backup of an Amazon FSx file system. For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with backups for Windows file systems</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with backups for Lustre file systems</a> </p> </li> </ul>
  * BackupId **required**
  * CreationTime **required**
  * DirectoryInformation
    * ActiveDirectoryId
    * DomainName
  * FailureDetails
    * Message
  * FileSystem **required**
    * AdministrativeActions
      * items [AdministrativeAction](#administrativeaction)
    * CreationTime
    * DNSName
    * FailureDetails [FileSystemFailureDetails](#filesystemfailuredetails)
    * FileSystemId
    * FileSystemType
    * KmsKeyId
    * Lifecycle
    * LustreConfiguration [LustreFileSystemConfiguration](#lustrefilesystemconfiguration)
    * NetworkInterfaceIds
      * items [NetworkInterfaceId](#networkinterfaceid)
    * OwnerId
    * ResourceARN
    * StorageCapacity
    * StorageType
    * SubnetIds
      * items [SubnetId](#subnetid)
    * Tags
      * items [Tag](#tag)
    * VpcId
    * WindowsConfiguration
      * ActiveDirectoryId
      * Aliases [Aliases](#aliases)
      * AutomaticBackupRetentionDays
      * CopyTagsToBackups
      * DailyAutomaticBackupStartTime
      * DeploymentType
      * MaintenanceOperationsInProgress
        * items [FileSystemMaintenanceOperation](#filesystemmaintenanceoperation)
      * PreferredFileServerIp
      * PreferredSubnetId
      * RemoteAdministrationEndpoint
      * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryAttributes](#selfmanagedactivedirectoryattributes)
      * ThroughputCapacity
      * WeeklyMaintenanceStartTime
  * KmsKeyId
  * Lifecycle **required**
  * ProgressPercent [ProgressPercent](#progresspercent)
  * ResourceARN
  * Tags
    * items [Tag](#tag)
  * Type **required**

### BackupFailureDetails
* BackupFailureDetails `object`: If backup creation fails, this structure contains the details of that failure.
  * Message

### BackupId
* BackupId `string`: The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.

### BackupIds
* BackupIds `array`: A list of backup IDs.
  * items [BackupId](#backupid)

### BackupInProgress


### BackupLifecycle
* BackupLifecycle `string` (values: AVAILABLE, CREATING, TRANSFERRING, DELETED, FAILED, PENDING): <p>The lifecycle status of the backup.</p> <ul> <li> <p> <code>AVAILABLE</code> - The backup is fully available.</p> </li> <li> <p> <code>PENDING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx has not started creating the backup.</p> </li> <li> <p> <code>CREATING</code> - Amazon FSx is creating the new user-intiated backup</p> </li> <li> <p> <code>TRANSFERRING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx is backing up the file system.</p> </li> <li> <p> <code>DELETED</code> - Amazon FSx deleted the backup and it is no longer available.</p> </li> <li> <p> <code>FAILED</code> - Amazon FSx could not complete the backup.</p> </li> </ul>

### BackupNotFound


### BackupRestoring


### BackupType
* BackupType `string` (values: AUTOMATIC, USER_INITIATED, AWS_BACKUP): The type of the backup.

### Backups
* Backups `array`: A list of file system backups.
  * items [Backup](#backup)

### BadRequest


### CancelDataRepositoryTaskRequest
* CancelDataRepositoryTaskRequest `object`: Cancels a data repository task.
  * TaskId **required**

### CancelDataRepositoryTaskResponse
* CancelDataRepositoryTaskResponse `object`
  * Lifecycle
  * TaskId

### ClientRequestToken
* ClientRequestToken `string`: (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.

### CompletionReport
* CompletionReport `object`: Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.
  * Enabled **required**
  * Format
  * Path
  * Scope

### CreateBackupRequest
* CreateBackupRequest `object`: The request object for the <code>CreateBackup</code> operation.
  * ClientRequestToken
  * FileSystemId **required**
  * Tags
    * items [Tag](#tag)

### CreateBackupResponse
* CreateBackupResponse `object`: The response object for the <code>CreateBackup</code> operation.
  * Backup
    * BackupId **required**
    * CreationTime **required**
    * DirectoryInformation
      * ActiveDirectoryId
      * DomainName
    * FailureDetails
      * Message
    * FileSystem **required**
      * AdministrativeActions
        * items [AdministrativeAction](#administrativeaction)
      * CreationTime
      * DNSName
      * FailureDetails [FileSystemFailureDetails](#filesystemfailuredetails)
      * FileSystemId
      * FileSystemType
      * KmsKeyId
      * Lifecycle
      * LustreConfiguration [LustreFileSystemConfiguration](#lustrefilesystemconfiguration)
      * NetworkInterfaceIds
        * items [NetworkInterfaceId](#networkinterfaceid)
      * OwnerId
      * ResourceARN
      * StorageCapacity
      * StorageType
      * SubnetIds
        * items [SubnetId](#subnetid)
      * Tags
        * items [Tag](#tag)
      * VpcId
      * WindowsConfiguration
        * ActiveDirectoryId
        * Aliases [Aliases](#aliases)
        * AutomaticBackupRetentionDays
        * CopyTagsToBackups
        * DailyAutomaticBackupStartTime
        * DeploymentType
        * MaintenanceOperationsInProgress
          * items [FileSystemMaintenanceOperation](#filesystemmaintenanceoperation)
        * PreferredFileServerIp
        * PreferredSubnetId
        * RemoteAdministrationEndpoint
        * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryAttributes](#selfmanagedactivedirectoryattributes)
        * ThroughputCapacity
        * WeeklyMaintenanceStartTime
    * KmsKeyId
    * Lifecycle **required**
    * ProgressPercent [ProgressPercent](#progresspercent)
    * ResourceARN
    * Tags
      * items [Tag](#tag)
    * Type **required**

### CreateDataRepositoryTaskRequest
* CreateDataRepositoryTaskRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * FileSystemId **required** [FileSystemId](#filesystemid)
  * Paths
    * items [DataRepositoryTaskPath](#datarepositorytaskpath)
  * Report **required**
    * Enabled **required**
    * Format
    * Path
    * Scope
  * Tags [Tags](#tags)
  * Type **required**

### CreateDataRepositoryTaskResponse
* CreateDataRepositoryTaskResponse `object`
  * DataRepositoryTask
    * CreationTime **required** [CreationTime](#creationtime)
    * EndTime
    * FailureDetails
      * Message [ErrorMessage](#errormessage)
    * FileSystemId **required** [FileSystemId](#filesystemid)
    * Lifecycle **required**
    * Paths
      * items [DataRepositoryTaskPath](#datarepositorytaskpath)
    * Report [CompletionReport](#completionreport)
    * ResourceARN [ResourceARN](#resourcearn)
    * StartTime
    * Status
      * FailedCount
      * LastUpdatedTime
      * SucceededCount
      * TotalCount
    * Tags [Tags](#tags)
    * TaskId **required**
    * Type **required**

### CreateFileSystemFromBackupRequest
* CreateFileSystemFromBackupRequest `object`: The request object for the <code>CreateFileSystemFromBackup</code> operation.
  * BackupId **required** [BackupId](#backupid)
  * ClientRequestToken
  * LustreConfiguration [CreateFileSystemLustreConfiguration](#createfilesystemlustreconfiguration)
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * StorageType
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * WindowsConfiguration
    * ActiveDirectoryId
    * Aliases
      * items [AlternateDNSName](#alternatednsname)
    * AutomaticBackupRetentionDays
    * CopyTagsToBackups
    * DailyAutomaticBackupStartTime
    * DeploymentType
    * PreferredSubnetId
    * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryConfiguration](#selfmanagedactivedirectoryconfiguration)
    * ThroughputCapacity **required**
    * WeeklyMaintenanceStartTime

### CreateFileSystemFromBackupResponse
* CreateFileSystemFromBackupResponse `object`: The response object for the <code>CreateFileSystemFromBackup</code> operation.
  * FileSystem
    * AdministrativeActions
      * items [AdministrativeAction](#administrativeaction)
    * CreationTime
    * DNSName
    * FailureDetails [FileSystemFailureDetails](#filesystemfailuredetails)
    * FileSystemId
    * FileSystemType
    * KmsKeyId
    * Lifecycle
    * LustreConfiguration [LustreFileSystemConfiguration](#lustrefilesystemconfiguration)
    * NetworkInterfaceIds
      * items [NetworkInterfaceId](#networkinterfaceid)
    * OwnerId
    * ResourceARN
    * StorageCapacity
    * StorageType
    * SubnetIds
      * items [SubnetId](#subnetid)
    * Tags
      * items [Tag](#tag)
    * VpcId
    * WindowsConfiguration
      * ActiveDirectoryId
      * Aliases [Aliases](#aliases)
      * AutomaticBackupRetentionDays
      * CopyTagsToBackups
      * DailyAutomaticBackupStartTime
      * DeploymentType
      * MaintenanceOperationsInProgress
        * items [FileSystemMaintenanceOperation](#filesystemmaintenanceoperation)
      * PreferredFileServerIp
      * PreferredSubnetId
      * RemoteAdministrationEndpoint
      * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryAttributes](#selfmanagedactivedirectoryattributes)
      * ThroughputCapacity
      * WeeklyMaintenanceStartTime

### CreateFileSystemLustreConfiguration
* CreateFileSystemLustreConfiguration `object`: The Lustre configuration for the file system being created. 
  * AutoImportPolicy
  * AutomaticBackupRetentionDays [AutomaticBackupRetentionDays](#automaticbackupretentiondays)
  * CopyTagsToBackups
  * DailyAutomaticBackupStartTime [DailyTime](#dailytime)
  * DeploymentType
  * DriveCacheType
  * ExportPath
  * ImportPath
  * ImportedFileChunkSize
  * PerUnitStorageThroughput
  * WeeklyMaintenanceStartTime

### CreateFileSystemRequest
* CreateFileSystemRequest `object`: The request object used to create a new Amazon FSx file system.
  * ClientRequestToken
  * FileSystemType **required**
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * LustreConfiguration [CreateFileSystemLustreConfiguration](#createfilesystemlustreconfiguration)
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * StorageCapacity **required**
  * StorageType
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * WindowsConfiguration
    * ActiveDirectoryId
    * Aliases
      * items [AlternateDNSName](#alternatednsname)
    * AutomaticBackupRetentionDays
    * CopyTagsToBackups
    * DailyAutomaticBackupStartTime
    * DeploymentType
    * PreferredSubnetId
    * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryConfiguration](#selfmanagedactivedirectoryconfiguration)
    * ThroughputCapacity **required**
    * WeeklyMaintenanceStartTime

### CreateFileSystemResponse
* CreateFileSystemResponse `object`: The response object returned after the file system is created.
  * FileSystem
    * AdministrativeActions
      * items [AdministrativeAction](#administrativeaction)
    * CreationTime
    * DNSName
    * FailureDetails [FileSystemFailureDetails](#filesystemfailuredetails)
    * FileSystemId
    * FileSystemType
    * KmsKeyId
    * Lifecycle
    * LustreConfiguration [LustreFileSystemConfiguration](#lustrefilesystemconfiguration)
    * NetworkInterfaceIds
      * items [NetworkInterfaceId](#networkinterfaceid)
    * OwnerId
    * ResourceARN
    * StorageCapacity
    * StorageType
    * SubnetIds
      * items [SubnetId](#subnetid)
    * Tags
      * items [Tag](#tag)
    * VpcId
    * WindowsConfiguration
      * ActiveDirectoryId
      * Aliases [Aliases](#aliases)
      * AutomaticBackupRetentionDays
      * CopyTagsToBackups
      * DailyAutomaticBackupStartTime
      * DeploymentType
      * MaintenanceOperationsInProgress
        * items [FileSystemMaintenanceOperation](#filesystemmaintenanceoperation)
      * PreferredFileServerIp
      * PreferredSubnetId
      * RemoteAdministrationEndpoint
      * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryAttributes](#selfmanagedactivedirectoryattributes)
      * ThroughputCapacity
      * WeeklyMaintenanceStartTime

### CreateFileSystemWindowsConfiguration
* CreateFileSystemWindowsConfiguration `object`: The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.
  * ActiveDirectoryId
  * Aliases
    * items [AlternateDNSName](#alternatednsname)
  * AutomaticBackupRetentionDays
  * CopyTagsToBackups
  * DailyAutomaticBackupStartTime
  * DeploymentType
  * PreferredSubnetId
  * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryConfiguration](#selfmanagedactivedirectoryconfiguration)
  * ThroughputCapacity **required**
  * WeeklyMaintenanceStartTime

### CreationTime
* CreationTime `string`: The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.

### DNSName
* DNSName `string`: The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.

### DailyTime
* DailyTime `string`: A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. 

### DataRepositoryConfiguration
* DataRepositoryConfiguration `object`: The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.
  * AutoImportPolicy
  * ExportPath
  * FailureDetails [DataRepositoryFailureDetails](#datarepositoryfailuredetails)
  * ImportPath
  * ImportedFileChunkSize
  * Lifecycle

### DataRepositoryFailureDetails
* DataRepositoryFailureDetails `object`: Provides detailed information about the data respository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code>.
  * Message [ErrorMessage](#errormessage)

### DataRepositoryLifecycle
* DataRepositoryLifecycle `string` (values: CREATING, AVAILABLE, MISCONFIGURED, UPDATING, DELETING)

### DataRepositoryTask
* DataRepositoryTask `object`: A description of the data repository task. You use data repository tasks to perform bulk transfer operations between your Amazon FSx file system and its linked data repository.
  * CreationTime **required** [CreationTime](#creationtime)
  * EndTime
  * FailureDetails
    * Message [ErrorMessage](#errormessage)
  * FileSystemId **required** [FileSystemId](#filesystemid)
  * Lifecycle **required**
  * Paths
    * items [DataRepositoryTaskPath](#datarepositorytaskpath)
  * Report [CompletionReport](#completionreport)
  * ResourceARN [ResourceARN](#resourcearn)
  * StartTime
  * Status
    * FailedCount
    * LastUpdatedTime
    * SucceededCount
    * TotalCount
  * Tags [Tags](#tags)
  * TaskId **required**
  * Type **required**

### DataRepositoryTaskEnded


### DataRepositoryTaskExecuting


### DataRepositoryTaskFailureDetails
* DataRepositoryTaskFailureDetails `object`: Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>.
  * Message [ErrorMessage](#errormessage)

### DataRepositoryTaskFilter
* DataRepositoryTaskFilter `object`: (Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response. You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type. A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter.
  * Name
  * Values
    * items [DataRepositoryTaskFilterValue](#datarepositorytaskfiltervalue)

### DataRepositoryTaskFilterName
* DataRepositoryTaskFilterName `string` (values: file-system-id, task-lifecycle)

### DataRepositoryTaskFilterValue
* DataRepositoryTaskFilterValue `string`

### DataRepositoryTaskFilterValues
* DataRepositoryTaskFilterValues `array`
  * items [DataRepositoryTaskFilterValue](#datarepositorytaskfiltervalue)

### DataRepositoryTaskFilters
* DataRepositoryTaskFilters `array`
  * items [DataRepositoryTaskFilter](#datarepositorytaskfilter)

### DataRepositoryTaskLifecycle
* DataRepositoryTaskLifecycle `string` (values: PENDING, EXECUTING, FAILED, SUCCEEDED, CANCELED, CANCELING)

### DataRepositoryTaskNotFound


### DataRepositoryTaskPath
* DataRepositoryTaskPath `string`

### DataRepositoryTaskPaths
* DataRepositoryTaskPaths `array`
  * items [DataRepositoryTaskPath](#datarepositorytaskpath)

### DataRepositoryTaskStatus
* DataRepositoryTaskStatus `object`: Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process.
  * FailedCount
  * LastUpdatedTime
  * SucceededCount
  * TotalCount

### DataRepositoryTaskType
* DataRepositoryTaskType `string` (values: EXPORT_TO_REPOSITORY)

### DataRepositoryTasks
* DataRepositoryTasks `array`
  * items [DataRepositoryTask](#datarepositorytask)

### DeleteBackupRequest
* DeleteBackupRequest `object`: The request object for <code>DeleteBackup</code> operation.
  * BackupId **required**
  * ClientRequestToken

### DeleteBackupResponse
* DeleteBackupResponse `object`: The response object for <code>DeleteBackup</code> operation.
  * BackupId
  * Lifecycle

### DeleteFileSystemLustreConfiguration
* DeleteFileSystemLustreConfiguration `object`: The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
  * FinalBackupTags
    * items [Tag](#tag)
  * SkipFinalBackup

### DeleteFileSystemLustreResponse
* DeleteFileSystemLustreResponse `object`: The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
  * FinalBackupId
  * FinalBackupTags
    * items [Tag](#tag)

### DeleteFileSystemRequest
* DeleteFileSystemRequest `object`: The request object for <code>DeleteFileSystem</code> operation.
  * ClientRequestToken
  * FileSystemId **required**
  * LustreConfiguration [DeleteFileSystemLustreConfiguration](#deletefilesystemlustreconfiguration)
  * WindowsConfiguration [DeleteFileSystemWindowsConfiguration](#deletefilesystemwindowsconfiguration)

### DeleteFileSystemResponse
* DeleteFileSystemResponse `object`: The response object for the <code>DeleteFileSystem</code> operation.
  * FileSystemId
  * Lifecycle
  * LustreResponse [DeleteFileSystemLustreResponse](#deletefilesystemlustreresponse)
  * WindowsResponse [DeleteFileSystemWindowsResponse](#deletefilesystemwindowsresponse)

### DeleteFileSystemWindowsConfiguration
* DeleteFileSystemWindowsConfiguration `object`: The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
  * FinalBackupTags
    * items [Tag](#tag)
  * SkipFinalBackup

### DeleteFileSystemWindowsResponse
* DeleteFileSystemWindowsResponse `object`: The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
  * FinalBackupId
  * FinalBackupTags
    * items [Tag](#tag)

### DescribeBackupsRequest
* DescribeBackupsRequest `object`: The request object for <code>DescribeBackups</code> operation.
  * BackupIds
    * items [BackupId](#backupid)
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### DescribeBackupsResponse
* DescribeBackupsResponse `object`: Response object for <code>DescribeBackups</code> operation.
  * Backups
    * items [Backup](#backup)
  * NextToken

### DescribeDataRepositoryTasksRequest
* DescribeDataRepositoryTasksRequest `object`
  * Filters
    * items [DataRepositoryTaskFilter](#datarepositorytaskfilter)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * TaskIds
    * items [TaskId](#taskid)

### DescribeDataRepositoryTasksResponse
* DescribeDataRepositoryTasksResponse `object`
  * DataRepositoryTasks
    * items [DataRepositoryTask](#datarepositorytask)
  * NextToken [NextToken](#nexttoken)

### DescribeFileSystemAliasesRequest
* DescribeFileSystemAliasesRequest `object`: The request object for <code>DescribeFileSystemAliases</code> operation.
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * FileSystemId **required**
  * MaxResults
  * NextToken

### DescribeFileSystemAliasesResponse
* DescribeFileSystemAliasesResponse `object`: The response object for <code>DescribeFileSystemAliases</code> operation.
  * Aliases
    * items [Alias](#alias)
  * NextToken

### DescribeFileSystemsRequest
* DescribeFileSystemsRequest `object`: The request object for <code>DescribeFileSystems</code> operation.
  * FileSystemIds
    * items [FileSystemId](#filesystemid)
  * MaxResults
  * NextToken

### DescribeFileSystemsResponse
* DescribeFileSystemsResponse `object`: The response object for <code>DescribeFileSystems</code> operation.
  * FileSystems
    * items [FileSystem](#filesystem)
  * NextToken

### DirectoryId
* DirectoryId `string`

### DirectoryPassword
* DirectoryPassword `string`

### DirectoryUserName
* DirectoryUserName `string`

### DisassociateFileSystemAliasesRequest
* DisassociateFileSystemAliasesRequest `object`: The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.
  * Aliases **required**
    * items [AlternateDNSName](#alternatednsname)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * FileSystemId **required**

### DisassociateFileSystemAliasesResponse
* DisassociateFileSystemAliasesResponse `object`: The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is removing from the file system.
  * Aliases
    * items [Alias](#alias)

### DnsIps
* DnsIps `array`
  * items [IpAddress](#ipaddress)

### DriveCacheType
* DriveCacheType `string` (values: NONE, READ)

### EndTime
* EndTime `string`

### ErrorMessage
* ErrorMessage `string`: A detailed error message.

### FailedCount
* FailedCount `integer`

### FileSystem
* FileSystem `object`: A description of a specific Amazon FSx file system.
  * AdministrativeActions
    * items [AdministrativeAction](#administrativeaction)
  * CreationTime
  * DNSName
  * FailureDetails [FileSystemFailureDetails](#filesystemfailuredetails)
  * FileSystemId
  * FileSystemType
  * KmsKeyId
  * Lifecycle
  * LustreConfiguration [LustreFileSystemConfiguration](#lustrefilesystemconfiguration)
  * NetworkInterfaceIds
    * items [NetworkInterfaceId](#networkinterfaceid)
  * OwnerId
  * ResourceARN
  * StorageCapacity
  * StorageType
  * SubnetIds
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * VpcId
  * WindowsConfiguration
    * ActiveDirectoryId
    * Aliases [Aliases](#aliases)
    * AutomaticBackupRetentionDays
    * CopyTagsToBackups
    * DailyAutomaticBackupStartTime
    * DeploymentType
    * MaintenanceOperationsInProgress
      * items [FileSystemMaintenanceOperation](#filesystemmaintenanceoperation)
    * PreferredFileServerIp
    * PreferredSubnetId
    * RemoteAdministrationEndpoint
    * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryAttributes](#selfmanagedactivedirectoryattributes)
    * ThroughputCapacity
    * WeeklyMaintenanceStartTime

### FileSystemAdministratorsGroupName
* FileSystemAdministratorsGroupName `string`

### FileSystemFailureDetails
* FileSystemFailureDetails `object`: A structure providing details of any failures that occur when creating the file system has failed.
  * Message

### FileSystemId
* FileSystemId `string`: The globally unique ID of the file system, assigned by Amazon FSx.

### FileSystemIds
* FileSystemIds `array`: A list of <code>FileSystemId</code>s.
  * items [FileSystemId](#filesystemid)

### FileSystemLifecycle
* FileSystemLifecycle `string` (values: AVAILABLE, CREATING, FAILED, DELETING, MISCONFIGURED, UPDATING): The lifecycle status of the file system.

### FileSystemMaintenanceOperation
* FileSystemMaintenanceOperation `string` (values: PATCHING, BACKING_UP): An enumeration specifying the currently ongoing maintenance operation.

### FileSystemMaintenanceOperations
* FileSystemMaintenanceOperations `array`: A list of maintenance operations.
  * items [FileSystemMaintenanceOperation](#filesystemmaintenanceoperation)

### FileSystemNotFound


### FileSystemType
* FileSystemType `string` (values: WINDOWS, LUSTRE): The type of file system.

### FileSystems
* FileSystems `array`: A list of file systems.
  * items [FileSystem](#filesystem)

### Filter
* Filter `object`: A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements.
  * Name
  * Values
    * items [FilterValue](#filtervalue)

### FilterName
* FilterName `string` (values: file-system-id, backup-type, file-system-type): The name for a filter.

### FilterValue
* FilterValue `string`: The value for a filter.

### FilterValues
* FilterValues `array`: A list of filter values.
  * items [FilterValue](#filtervalue)

### Filters
* Filters `array`: A list of <code>Filter</code> elements.
  * items [Filter](#filter)

### Flag
* Flag `boolean`

### IncompatibleParameterError


### InternalServerError


### InvalidExportPath


### InvalidImportPath


### InvalidNetworkSettings


### InvalidPerUnitStorageThroughput


### IpAddress
* IpAddress `string`

### KmsKeyId
* KmsKeyId `string`: The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre <code>PERSISTENT_1</code> file systems at rest. In either case, if not specified, the Amazon FSx managed key is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems are always encrypted at rest using Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>AWS Key Management Service API Reference</i>.

### LastUpdatedTime
* LastUpdatedTime `string`

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`: The request object for <code>ListTagsForResource</code> operation.
  * MaxResults
  * NextToken
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`: The response object for <code>ListTagsForResource</code> operation.
  * NextToken
  * Tags
    * items [Tag](#tag)

### LustreDeploymentType
* LustreDeploymentType `string` (values: SCRATCH_1, SCRATCH_2, PERSISTENT_1)

### LustreFileSystemConfiguration
* LustreFileSystemConfiguration `object`: The configuration for the Amazon FSx for Lustre file system.
  * AutomaticBackupRetentionDays [AutomaticBackupRetentionDays](#automaticbackupretentiondays)
  * CopyTagsToBackups
  * DailyAutomaticBackupStartTime [DailyTime](#dailytime)
  * DataRepositoryConfiguration [DataRepositoryConfiguration](#datarepositoryconfiguration)
  * DeploymentType
  * DriveCacheType
  * MountName
  * PerUnitStorageThroughput
  * WeeklyMaintenanceStartTime

### LustreFileSystemMountName
* LustreFileSystemMountName `string`

### MaxResults
* MaxResults `integer`: The maximum number of resources to return in the response. This value must be an integer greater than zero.

### Megabytes
* Megabytes `integer`

### MegabytesPerSecond
* MegabytesPerSecond `integer`: Sustained throughput of an Amazon FSx file system in MBps.

### MissingFileSystemConfiguration


### NetworkInterfaceId
* NetworkInterfaceId `string`: An elastic network interface ID. An elastic network interface is a logical networking component in a virtual private cloud (VPC) that represents a virtual network card. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interfaces</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.

### NetworkInterfaceIds
* NetworkInterfaceIds `array`: A list of network interface IDs.
  * items [NetworkInterfaceId](#networkinterfaceid)

### NextToken
* NextToken `string`: (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.

### NotServiceResourceError


### OrganizationalUnitDistinguishedName
* OrganizationalUnitDistinguishedName `string`

### PerUnitStorageThroughput
* PerUnitStorageThroughput `integer`

### ProgressPercent
* ProgressPercent `integer`: The current percent of progress of an asynchronous task.

### ReportFormat
* ReportFormat `string` (values: REPORT_CSV_20191124)

### ReportScope
* ReportScope `string` (values: FAILED_FILES_ONLY)

### RequestTime
* RequestTime `string`

### ResourceARN
* ResourceARN `string`: The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.

### ResourceDoesNotSupportTagging


### ResourceNotFound


### SecurityGroupId
* SecurityGroupId `string`: The ID of your Amazon EC2 security group. This ID is used to control network access to the endpoint that Amazon FSx creates on your behalf in each subnet. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups for Linux Instances</a> in the <i>Amazon EC2 User Guide</i>.

### SecurityGroupIds
* SecurityGroupIds `array`: A list of security group IDs.
  * items [SecurityGroupId](#securitygroupid)

### SelfManagedActiveDirectoryAttributes
* SelfManagedActiveDirectoryAttributes `object`: The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server instance is joined.
  * DnsIps
    * items [IpAddress](#ipaddress)
  * DomainName
  * FileSystemAdministratorsGroup
  * OrganizationalUnitDistinguishedName
  * UserName

### SelfManagedActiveDirectoryConfiguration
* SelfManagedActiveDirectoryConfiguration `object`: The configuration that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.
  * DnsIps **required**
    * items [IpAddress](#ipaddress)
  * DomainName **required**
  * FileSystemAdministratorsGroup
  * OrganizationalUnitDistinguishedName
  * Password **required**
  * UserName **required**

### SelfManagedActiveDirectoryConfigurationUpdates
* SelfManagedActiveDirectoryConfigurationUpdates `object`: The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory.
  * DnsIps
    * items [IpAddress](#ipaddress)
  * Password
  * UserName

### ServiceLimitExceeded


### StartTime
* StartTime `string`

### Status
* Status `string` (values: FAILED, IN_PROGRESS, PENDING, COMPLETED, UPDATED_OPTIMIZING)

### StorageCapacity
* StorageCapacity `integer`: The storage capacity for your Amazon FSx file system, in gibibytes.

### StorageType
* StorageType `string` (values: SSD, HDD): The storage type for your Amazon FSx file system.

### SubnetId
* SubnetId `string`: The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the <i>Amazon VPC User Guide.</i> 

### SubnetIds
* SubnetIds `array`: A list of subnet IDs. Currently, you can specify only one subnet ID in a call to the <code>CreateFileSystem</code> operation.
  * items [SubnetId](#subnetid)

### SucceededCount
* SucceededCount `integer`

### Tag
* Tag `object`: Specifies a key-value pair for a resource tag.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`: A string of 1 to 128 characters that specifies the key for a tag. Tag keys must be unique for the resource to which they are attached.

### TagKeys
* TagKeys `array`: A list of <code>TagKey</code> values, with a maximum of 50 elements.
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`: The request object for the <code>TagResource</code> operation.
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`: The response object for the <code>TagResource</code> operation.

### TagValue
* TagValue `string`: A string of 0 to 256 characters that specifies the value for a tag. Tag values can be null and don't have to be unique in a tag set.

### Tags
* Tags `array`: A list of <code>Tag</code> values, with a maximum of 50 elements.
  * items [Tag](#tag)

### TaskId
* TaskId `string`

### TaskIds
* TaskIds `array`
  * items [TaskId](#taskid)

### TotalCount
* TotalCount `integer`

### UnsupportedOperation


### UntagResourceRequest
* UntagResourceRequest `object`: The request object for <code>UntagResource</code> action.
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`: The response object for <code>UntagResource</code> action.

### UpdateFileSystemLustreConfiguration
* UpdateFileSystemLustreConfiguration `object`: The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.
  * AutoImportPolicy
  * AutomaticBackupRetentionDays [AutomaticBackupRetentionDays](#automaticbackupretentiondays)
  * DailyAutomaticBackupStartTime [DailyTime](#dailytime)
  * WeeklyMaintenanceStartTime

### UpdateFileSystemRequest
* UpdateFileSystemRequest `object`: The request object for the <code>UpdateFileSystem</code> operation.
  * ClientRequestToken
  * FileSystemId **required**
  * LustreConfiguration [UpdateFileSystemLustreConfiguration](#updatefilesystemlustreconfiguration)
  * StorageCapacity
  * WindowsConfiguration
    * AutomaticBackupRetentionDays
    * DailyAutomaticBackupStartTime
    * SelfManagedActiveDirectoryConfiguration
      * DnsIps
        * items [IpAddress](#ipaddress)
      * Password
      * UserName
    * ThroughputCapacity
    * WeeklyMaintenanceStartTime

### UpdateFileSystemResponse
* UpdateFileSystemResponse `object`: The response object for the <code>UpdateFileSystem</code> operation.
  * FileSystem
    * AdministrativeActions
      * items [AdministrativeAction](#administrativeaction)
    * CreationTime
    * DNSName
    * FailureDetails [FileSystemFailureDetails](#filesystemfailuredetails)
    * FileSystemId
    * FileSystemType
    * KmsKeyId
    * Lifecycle
    * LustreConfiguration [LustreFileSystemConfiguration](#lustrefilesystemconfiguration)
    * NetworkInterfaceIds
      * items [NetworkInterfaceId](#networkinterfaceid)
    * OwnerId
    * ResourceARN
    * StorageCapacity
    * StorageType
    * SubnetIds
      * items [SubnetId](#subnetid)
    * Tags
      * items [Tag](#tag)
    * VpcId
    * WindowsConfiguration
      * ActiveDirectoryId
      * Aliases [Aliases](#aliases)
      * AutomaticBackupRetentionDays
      * CopyTagsToBackups
      * DailyAutomaticBackupStartTime
      * DeploymentType
      * MaintenanceOperationsInProgress
        * items [FileSystemMaintenanceOperation](#filesystemmaintenanceoperation)
      * PreferredFileServerIp
      * PreferredSubnetId
      * RemoteAdministrationEndpoint
      * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryAttributes](#selfmanagedactivedirectoryattributes)
      * ThroughputCapacity
      * WeeklyMaintenanceStartTime

### UpdateFileSystemWindowsConfiguration
* UpdateFileSystemWindowsConfiguration `object`: Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request.
  * AutomaticBackupRetentionDays
  * DailyAutomaticBackupStartTime
  * SelfManagedActiveDirectoryConfiguration
    * DnsIps
      * items [IpAddress](#ipaddress)
    * Password
    * UserName
  * ThroughputCapacity
  * WeeklyMaintenanceStartTime

### VpcId
* VpcId `string`: The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the <i>Amazon VPC User Guide</i>.

### WeeklyTime
* WeeklyTime `string`: <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>

### WindowsDeploymentType
* WindowsDeploymentType `string` (values: MULTI_AZ_1, SINGLE_AZ_1, SINGLE_AZ_2)

### WindowsFileSystemConfiguration
* WindowsFileSystemConfiguration `object`: The configuration for this Microsoft Windows file system.
  * ActiveDirectoryId
  * Aliases [Aliases](#aliases)
  * AutomaticBackupRetentionDays
  * CopyTagsToBackups
  * DailyAutomaticBackupStartTime
  * DeploymentType
  * MaintenanceOperationsInProgress
    * items [FileSystemMaintenanceOperation](#filesystemmaintenanceoperation)
  * PreferredFileServerIp
  * PreferredSubnetId
  * RemoteAdministrationEndpoint
  * SelfManagedActiveDirectoryConfiguration [SelfManagedActiveDirectoryAttributes](#selfmanagedactivedirectoryattributes)
  * ThroughputCapacity
  * WeeklyMaintenanceStartTime


