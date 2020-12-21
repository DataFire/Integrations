# @datafire/amazonaws_backup

Client library for AWS Backup

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_backup
```
```js
let amazonaws_backup = require('@datafire/amazonaws_backup').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Backup</fullname> <p>AWS Backup is a unified backup service designed to protect AWS services and their associated data. AWS Backup simplifies the creation, migration, restoration, and deletion of backups, while also providing reporting and auditing.</p>

## Actions

### DescribeRegionSettings



```js
amazonaws_backup.DescribeRegionSettings({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeRegionSettingsOutput](#describeregionsettingsoutput)

### UpdateRegionSettings



```js
amazonaws_backup.UpdateRegionSettings({}, context)
```

#### Input
* input `object`
  * ResourceTypeOptInPreference `object`: Updates the list of services along with the opt-in preferences for the Region.

#### Output
*Output schema unknown*

### StartBackupJob



```js
amazonaws_backup.StartBackupJob({
  "BackupVaultName": "",
  "ResourceArn": "",
  "IamRoleArn": ""
}, context)
```

#### Input
* input `object`
  * BackupOptions `object`: <p>Specifies the backup option for a selected resource. This option is only available for Windows VSS backup jobs.</p> <p>Valid values: Set to <code>"WindowsVSS”:“enabled"</code> to enable WindowsVSS backup option and create a VSS Windows backup. Set to “WindowsVSS”:”disabled” to create a regular backup. The WindowsVSS option is not enabled by default.</p>
  * BackupVaultName **required** `string`: The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
  * CompleteWindowMinutes `integer`: A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by AWS Backup. This value is optional.
  * IamRoleArn **required** `string`: Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.
  * IdempotencyToken `string`: A customer chosen string that can be used to distinguish between calls to <code>StartBackupJob</code>.
  * Lifecycle `object`: <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p>
    * DeleteAfterDays
    * MoveToColdStorageAfterDays
  * RecoveryPointTags `object`: To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.
  * ResourceArn **required** `string`: An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
  * StartWindowMinutes `integer`: A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional.

#### Output
* output [StartBackupJobOutput](#startbackupjoboutput)

### ListBackupJobs



```js
amazonaws_backup.ListBackupJobs({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * resourceArn `string`
  * state `string`
  * backupVaultName `string`
  * createdBefore `string`
  * createdAfter `string`
  * resourceType `string`
  * accountId `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListBackupJobsOutput](#listbackupjobsoutput)

### DescribeBackupJob



```js
amazonaws_backup.DescribeBackupJob({
  "backupJobId": ""
}, context)
```

#### Input
* input `object`
  * backupJobId **required** `string`

#### Output
* output [DescribeBackupJobOutput](#describebackupjoboutput)

### StopBackupJob



```js
amazonaws_backup.StopBackupJob({
  "backupJobId": ""
}, context)
```

#### Input
* input `object`
  * backupJobId **required** `string`

#### Output
*Output schema unknown*

### ListBackupVaults



```js
amazonaws_backup.ListBackupVaults({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListBackupVaultsOutput](#listbackupvaultsoutput)

### DeleteBackupVault



```js
amazonaws_backup.DeleteBackupVault({
  "backupVaultName": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`

#### Output
*Output schema unknown*

### DescribeBackupVault



```js
amazonaws_backup.DescribeBackupVault({
  "backupVaultName": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`

#### Output
* output [DescribeBackupVaultOutput](#describebackupvaultoutput)

### CreateBackupVault



```js
amazonaws_backup.CreateBackupVault({
  "backupVaultName": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`
  * BackupVaultTags `object`: Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair.
  * CreatorRequestId `string`: A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.
  * EncryptionKeyArn `string`: The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.

#### Output
* output [CreateBackupVaultOutput](#createbackupvaultoutput)

### DeleteBackupVaultAccessPolicy



```js
amazonaws_backup.DeleteBackupVaultAccessPolicy({
  "backupVaultName": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`

#### Output
*Output schema unknown*

### GetBackupVaultAccessPolicy



```js
amazonaws_backup.GetBackupVaultAccessPolicy({
  "backupVaultName": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`

#### Output
* output [GetBackupVaultAccessPolicyOutput](#getbackupvaultaccesspolicyoutput)

### PutBackupVaultAccessPolicy



```js
amazonaws_backup.PutBackupVaultAccessPolicy({
  "backupVaultName": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`
  * Policy `string`: The backup vault access policy document in JSON format.

#### Output
*Output schema unknown*

### DeleteBackupVaultNotifications



```js
amazonaws_backup.DeleteBackupVaultNotifications({
  "backupVaultName": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`

#### Output
*Output schema unknown*

### GetBackupVaultNotifications



```js
amazonaws_backup.GetBackupVaultNotifications({
  "backupVaultName": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`

#### Output
* output [GetBackupVaultNotificationsOutput](#getbackupvaultnotificationsoutput)

### PutBackupVaultNotifications



```js
amazonaws_backup.PutBackupVaultNotifications({
  "backupVaultName": "",
  "SNSTopicArn": "",
  "BackupVaultEvents": []
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`
  * BackupVaultEvents **required** `array`: An array of events that indicate the status of jobs to back up resources to the backup vault.
    * items [BackupVaultEvent](#backupvaultevent)
  * SNSTopicArn **required** `string`: The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.

#### Output
*Output schema unknown*

### ListRecoveryPointsByBackupVault



```js
amazonaws_backup.ListRecoveryPointsByBackupVault({
  "backupVaultName": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * resourceArn `string`
  * resourceType `string`
  * backupPlanId `string`
  * createdBefore `string`
  * createdAfter `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRecoveryPointsByBackupVaultOutput](#listrecoverypointsbybackupvaultoutput)

### DeleteRecoveryPoint



```js
amazonaws_backup.DeleteRecoveryPoint({
  "backupVaultName": "",
  "recoveryPointArn": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`
  * recoveryPointArn **required** `string`

#### Output
*Output schema unknown*

### DescribeRecoveryPoint



```js
amazonaws_backup.DescribeRecoveryPoint({
  "backupVaultName": "",
  "recoveryPointArn": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`
  * recoveryPointArn **required** `string`

#### Output
* output [DescribeRecoveryPointOutput](#describerecoverypointoutput)

### UpdateRecoveryPointLifecycle



```js
amazonaws_backup.UpdateRecoveryPointLifecycle({
  "backupVaultName": "",
  "recoveryPointArn": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`
  * recoveryPointArn **required** `string`
  * Lifecycle `object`: <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p>
    * DeleteAfterDays
    * MoveToColdStorageAfterDays

#### Output
* output [UpdateRecoveryPointLifecycleOutput](#updaterecoverypointlifecycleoutput)

### GetRecoveryPointRestoreMetadata



```js
amazonaws_backup.GetRecoveryPointRestoreMetadata({
  "backupVaultName": "",
  "recoveryPointArn": ""
}, context)
```

#### Input
* input `object`
  * backupVaultName **required** `string`
  * recoveryPointArn **required** `string`

#### Output
* output [GetRecoveryPointRestoreMetadataOutput](#getrecoverypointrestoremetadataoutput)

### ListBackupPlans



```js
amazonaws_backup.ListBackupPlans({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * includeDeleted `boolean`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListBackupPlansOutput](#listbackupplansoutput)

### CreateBackupPlan



```js
amazonaws_backup.CreateBackupPlan({
  "BackupPlan": {}
}, context)
```

#### Input
* input `object`
  * BackupPlan **required** `object`: Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. 
    * AdvancedBackupSettings
      * items [AdvancedBackupSetting](#advancedbackupsetting)
    * BackupPlanName
    * Rules
      * items [BackupRuleInput](#backupruleinput)
  * BackupPlanTags `object`: To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan.
  * CreatorRequestId `string`: Identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a <code>CreatorRequestId</code> that matches an existing backup plan, that plan is returned. This parameter is optional.

#### Output
* output [CreateBackupPlanOutput](#createbackupplanoutput)

### DeleteBackupPlan



```js
amazonaws_backup.DeleteBackupPlan({
  "backupPlanId": ""
}, context)
```

#### Input
* input `object`
  * backupPlanId **required** `string`

#### Output
* output [DeleteBackupPlanOutput](#deletebackupplanoutput)

### UpdateBackupPlan



```js
amazonaws_backup.UpdateBackupPlan({
  "backupPlanId": "",
  "BackupPlan": {}
}, context)
```

#### Input
* input `object`
  * backupPlanId **required** `string`
  * BackupPlan **required** `object`: Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. 
    * AdvancedBackupSettings
      * items [AdvancedBackupSetting](#advancedbackupsetting)
    * BackupPlanName
    * Rules
      * items [BackupRuleInput](#backupruleinput)

#### Output
* output [UpdateBackupPlanOutput](#updatebackupplanoutput)

### GetBackupPlan



```js
amazonaws_backup.GetBackupPlan({
  "backupPlanId": ""
}, context)
```

#### Input
* input `object`
  * backupPlanId **required** `string`
  * versionId `string`

#### Output
* output [GetBackupPlanOutput](#getbackupplanoutput)

### ListBackupSelections



```js
amazonaws_backup.ListBackupSelections({
  "backupPlanId": ""
}, context)
```

#### Input
* input `object`
  * backupPlanId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListBackupSelectionsOutput](#listbackupselectionsoutput)

### CreateBackupSelection



```js
amazonaws_backup.CreateBackupSelection({
  "backupPlanId": "",
  "BackupSelection": {}
}, context)
```

#### Input
* input `object`
  * backupPlanId **required** `string`
  * BackupSelection **required** `object`: Used to specify a set of resources to a backup plan.
    * IamRoleArn
    * ListOfTags
      * items [Condition](#condition)
    * Resources
      * items [ARN](#arn)
    * SelectionName
  * CreatorRequestId `string`: A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.

#### Output
* output [CreateBackupSelectionOutput](#createbackupselectionoutput)

### DeleteBackupSelection



```js
amazonaws_backup.DeleteBackupSelection({
  "backupPlanId": "",
  "selectionId": ""
}, context)
```

#### Input
* input `object`
  * backupPlanId **required** `string`
  * selectionId **required** `string`

#### Output
*Output schema unknown*

### GetBackupSelection



```js
amazonaws_backup.GetBackupSelection({
  "backupPlanId": "",
  "selectionId": ""
}, context)
```

#### Input
* input `object`
  * backupPlanId **required** `string`
  * selectionId **required** `string`

#### Output
* output [GetBackupSelectionOutput](#getbackupselectionoutput)

### ExportBackupPlanTemplate



```js
amazonaws_backup.ExportBackupPlanTemplate({
  "backupPlanId": ""
}, context)
```

#### Input
* input `object`
  * backupPlanId **required** `string`

#### Output
* output [ExportBackupPlanTemplateOutput](#exportbackupplantemplateoutput)

### ListBackupPlanVersions



```js
amazonaws_backup.ListBackupPlanVersions({
  "backupPlanId": ""
}, context)
```

#### Input
* input `object`
  * backupPlanId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListBackupPlanVersionsOutput](#listbackupplanversionsoutput)

### GetBackupPlanFromJSON



```js
amazonaws_backup.GetBackupPlanFromJSON({
  "BackupPlanTemplateJson": ""
}, context)
```

#### Input
* input `object`
  * BackupPlanTemplateJson **required** `string`: A customer-supplied backup plan document in JSON format.

#### Output
* output [GetBackupPlanFromJSONOutput](#getbackupplanfromjsonoutput)

### ListBackupPlanTemplates



```js
amazonaws_backup.ListBackupPlanTemplates({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListBackupPlanTemplatesOutput](#listbackupplantemplatesoutput)

### GetBackupPlanFromTemplate



```js
amazonaws_backup.GetBackupPlanFromTemplate({
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * templateId **required** `string`

#### Output
* output [GetBackupPlanFromTemplateOutput](#getbackupplanfromtemplateoutput)

### StartCopyJob



```js
amazonaws_backup.StartCopyJob({
  "RecoveryPointArn": "",
  "SourceBackupVaultName": "",
  "DestinationBackupVaultArn": "",
  "IamRoleArn": ""
}, context)
```

#### Input
* input `object`
  * DestinationBackupVaultArn **required** `string`: An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.
  * IamRoleArn **required** `string`: Specifies the IAM role ARN used to copy the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.
  * IdempotencyToken `string`: A customer chosen string that can be used to distinguish between calls to <code>StartCopyJob</code>.
  * Lifecycle `object`: <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p>
    * DeleteAfterDays
    * MoveToColdStorageAfterDays
  * RecoveryPointArn **required** `string`: An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45. 
  * SourceBackupVaultName **required** `string`: The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.

#### Output
* output [StartCopyJobOutput](#startcopyjoboutput)

### ListCopyJobs



```js
amazonaws_backup.ListCopyJobs({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * resourceArn `string`
  * state `string`
  * createdBefore `string`
  * createdAfter `string`
  * resourceType `string`
  * destinationVaultArn `string`
  * accountId `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListCopyJobsOutput](#listcopyjobsoutput)

### DescribeCopyJob



```js
amazonaws_backup.DescribeCopyJob({
  "copyJobId": ""
}, context)
```

#### Input
* input `object`
  * copyJobId **required** `string`

#### Output
* output [DescribeCopyJobOutput](#describecopyjoboutput)

### DescribeGlobalSettings



```js
amazonaws_backup.DescribeGlobalSettings({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeGlobalSettingsOutput](#describeglobalsettingsoutput)

### UpdateGlobalSettings



```js
amazonaws_backup.UpdateGlobalSettings({}, context)
```

#### Input
* input `object`
  * GlobalSettings `object`: A list of resources along with the opt-in preferences for the account.

#### Output
*Output schema unknown*

### ListProtectedResources



```js
amazonaws_backup.ListProtectedResources({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListProtectedResourcesOutput](#listprotectedresourcesoutput)

### DescribeProtectedResource



```js
amazonaws_backup.DescribeProtectedResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [DescribeProtectedResourceOutput](#describeprotectedresourceoutput)

### ListRecoveryPointsByResource



```js
amazonaws_backup.ListRecoveryPointsByResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRecoveryPointsByResourceOutput](#listrecoverypointsbyresourceoutput)

### StartRestoreJob



```js
amazonaws_backup.StartRestoreJob({
  "RecoveryPointArn": "",
  "Metadata": {},
  "IamRoleArn": ""
}, context)
```

#### Input
* input `object`
  * IamRoleArn **required** `string`: The Amazon Resource Name (ARN) of the IAM role that AWS Backup uses to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.
  * IdempotencyToken `string`: A customer chosen string that can be used to distinguish between calls to <code>StartRestoreJob</code>.
  * Metadata **required** `object`: <p>A set of metadata key-value pairs. Contains information, such as a resource name, required to restore a recovery point.</p> <p> You can get configuration metadata about a resource at the time it was backed up by calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists.</p> <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p> <ul> <li> <p> <code>file-system-id</code>: The ID of the Amazon EFS file system that is backed up by AWS Backup. Returned in <code>GetRecoveryPointRestoreMetadata</code>.</p> </li> <li> <p> <code>Encrypted</code>: A Boolean value that, if true, specifies that the file system is encrypted. If <code>KmsKeyId</code> is specified, <code>Encrypted</code> must be set to <code>true</code>.</p> </li> <li> <p> <code>KmsKeyId</code>: Specifies the AWS KMS key that is used to encrypt the restored file system. You can specify a key from another AWS account provided that key it is properly shared with your account via AWS KMS.</p> </li> <li> <p> <code>PerformanceMode</code>: Specifies the throughput mode of the file system.</p> </li> <li> <p> <code>CreationToken</code>: A user-supplied value that ensures the uniqueness (idempotency) of the request.</p> </li> <li> <p> <code>newFileSystem</code>: A Boolean value that, if true, specifies that the recovery point is restored to a new Amazon EFS file system.</p> </li> <li> <p> <code>ItemsToRestore </code>: A serialized list of up to five strings where each string is a file path. Use <code>ItemsToRestore</code> to restore specific files or directories rather than the entire file system. This parameter is optional.</p> </li> </ul>
  * RecoveryPointArn **required** `string`: An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
  * ResourceType `string`: <p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for AWS Storage Gateway</p> </li> </ul>

#### Output
* output [StartRestoreJobOutput](#startrestorejoboutput)

### ListRestoreJobs



```js
amazonaws_backup.ListRestoreJobs({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * accountId `string`
  * createdBefore `string`
  * createdAfter `string`
  * status `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRestoreJobsOutput](#listrestorejobsoutput)

### DescribeRestoreJob



```js
amazonaws_backup.DescribeRestoreJob({
  "restoreJobId": ""
}, context)
```

#### Input
* input `object`
  * restoreJobId **required** `string`

#### Output
* output [DescribeRestoreJobOutput](#describerestorejoboutput)

### GetSupportedResourceTypes



```js
amazonaws_backup.GetSupportedResourceTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [GetSupportedResourceTypesOutput](#getsupportedresourcetypesoutput)

### TagResource



```js
amazonaws_backup.TagResource({
  "resourceArn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * Tags **required** `object`: Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create. 

#### Output
*Output schema unknown*

### ListTags



```js
amazonaws_backup.ListTags({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListTagsOutput](#listtagsoutput)

### UntagResource



```js
amazonaws_backup.UntagResource({
  "resourceArn": "",
  "TagKeyList": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * TagKeyList **required** `array`: A list of keys to identify which key-value tags to remove from a resource.
    * items [string](#string)

#### Output
*Output schema unknown*



## Definitions

### ARN
* ARN `string`

### AccountId
* AccountId `string`

### AdvancedBackupSetting
* AdvancedBackupSetting `object`: A list of backup options for each resource type.
  * BackupOptions
  * ResourceType

### AdvancedBackupSettings
* AdvancedBackupSettings `array`
  * items [AdvancedBackupSetting](#advancedbackupsetting)

### AlreadyExistsException


### BackupJob
* BackupJob `object`: Contains detailed information about a backup job.
  * AccountId
  * BackupJobId
  * BackupOptions
  * BackupSizeInBytes
  * BackupType
  * BackupVaultArn
  * BackupVaultName
  * BytesTransferred
  * CompletionDate
  * CreatedBy
    * BackupPlanArn
    * BackupPlanId
    * BackupPlanVersion
    * BackupRuleId
  * CreationDate
  * ExpectedCompletionDate
  * IamRoleArn
  * PercentDone
  * RecoveryPointArn
  * ResourceArn
  * ResourceType
  * StartBy
  * State
  * StatusMessage

### BackupJobState
* BackupJobState `string` (values: CREATED, PENDING, RUNNING, ABORTING, ABORTED, COMPLETED, FAILED, EXPIRED)

### BackupJobsList
* BackupJobsList `array`
  * items [BackupJob](#backupjob)

### BackupOptionKey
* BackupOptionKey `string`

### BackupOptionValue
* BackupOptionValue `string`

### BackupOptions
* BackupOptions `object`

### BackupPlan
* BackupPlan `object`: Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
  * AdvancedBackupSettings
    * items [AdvancedBackupSetting](#advancedbackupsetting)
  * BackupPlanName **required**
  * Rules **required**
    * items [BackupRule](#backuprule)

### BackupPlanInput
* BackupPlanInput `object`: Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. 
  * AdvancedBackupSettings
    * items [AdvancedBackupSetting](#advancedbackupsetting)
  * BackupPlanName **required**
  * Rules **required**
    * items [BackupRuleInput](#backupruleinput)

### BackupPlanName
* BackupPlanName `string`

### BackupPlanTemplatesList
* BackupPlanTemplatesList `array`
  * items [BackupPlanTemplatesListMember](#backupplantemplateslistmember)

### BackupPlanTemplatesListMember
* BackupPlanTemplatesListMember `object`: An object specifying metadata associated with a backup plan template.
  * BackupPlanTemplateId
  * BackupPlanTemplateName

### BackupPlanVersionsList
* BackupPlanVersionsList `array`
  * items [BackupPlansListMember](#backupplanslistmember)

### BackupPlansList
* BackupPlansList `array`
  * items [BackupPlansListMember](#backupplanslistmember)

### BackupPlansListMember
* BackupPlansListMember `object`: Contains metadata about a backup plan.
  * AdvancedBackupSettings
    * items [AdvancedBackupSetting](#advancedbackupsetting)
  * BackupPlanArn
  * BackupPlanId
  * BackupPlanName
  * CreationDate
  * CreatorRequestId
  * DeletionDate
  * LastExecutionDate
  * VersionId

### BackupRule
* BackupRule `object`: Specifies a scheduled task used to back up a selection of resources.
  * CompletionWindowMinutes
  * CopyActions
    * items [CopyAction](#copyaction)
  * Lifecycle
    * DeleteAfterDays
    * MoveToColdStorageAfterDays
  * RecoveryPointTags
  * RuleId
  * RuleName **required**
  * ScheduleExpression
  * StartWindowMinutes
  * TargetBackupVaultName **required**

### BackupRuleInput
* BackupRuleInput `object`: Specifies a scheduled task used to back up a selection of resources.
  * CompletionWindowMinutes
  * CopyActions
    * items [CopyAction](#copyaction)
  * Lifecycle
    * DeleteAfterDays
    * MoveToColdStorageAfterDays
  * RecoveryPointTags
  * RuleName **required**
  * ScheduleExpression
  * StartWindowMinutes
  * TargetBackupVaultName **required**

### BackupRuleName
* BackupRuleName `string`

### BackupRules
* BackupRules `array`
  * items [BackupRule](#backuprule)

### BackupRulesInput
* BackupRulesInput `array`
  * items [BackupRuleInput](#backupruleinput)

### BackupSelection
* BackupSelection `object`: Used to specify a set of resources to a backup plan.
  * IamRoleArn **required**
  * ListOfTags
    * items [Condition](#condition)
  * Resources
    * items [ARN](#arn)
  * SelectionName **required**

### BackupSelectionName
* BackupSelectionName `string`

### BackupSelectionsList
* BackupSelectionsList `array`
  * items [BackupSelectionsListMember](#backupselectionslistmember)

### BackupSelectionsListMember
* BackupSelectionsListMember `object`: Contains metadata about a <code>BackupSelection</code> object.
  * BackupPlanId
  * CreationDate
  * CreatorRequestId
  * IamRoleArn
  * SelectionId
  * SelectionName

### BackupVaultEvent
* BackupVaultEvent `string` (values: BACKUP_JOB_STARTED, BACKUP_JOB_COMPLETED, BACKUP_JOB_SUCCESSFUL, BACKUP_JOB_FAILED, BACKUP_JOB_EXPIRED, RESTORE_JOB_STARTED, RESTORE_JOB_COMPLETED, RESTORE_JOB_SUCCESSFUL, RESTORE_JOB_FAILED, COPY_JOB_STARTED, COPY_JOB_SUCCESSFUL, COPY_JOB_FAILED, RECOVERY_POINT_MODIFIED, BACKUP_PLAN_CREATED, BACKUP_PLAN_MODIFIED)

### BackupVaultEvents
* BackupVaultEvents `array`
  * items [BackupVaultEvent](#backupvaultevent)

### BackupVaultList
* BackupVaultList `array`
  * items [BackupVaultListMember](#backupvaultlistmember)

### BackupVaultListMember
* BackupVaultListMember `object`: Contains metadata about a backup vault.
  * BackupVaultArn
  * BackupVaultName
  * CreationDate
  * CreatorRequestId
  * EncryptionKeyArn
  * NumberOfRecoveryPoints

### BackupVaultName
* BackupVaultName `string`

### Boolean
* Boolean `boolean`

### CalculatedLifecycle
* CalculatedLifecycle `object`: <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p>
  * DeleteAt
  * MoveToColdStorageAt

### Condition
* Condition `object`: Contains an array of triplets made up of a condition type (such as <code>StringEquals</code>), a key, and a value. Conditions are used to filter resources in a selection that is assigned to a backup plan.
  * ConditionKey **required**
  * ConditionType **required**
  * ConditionValue **required**

### ConditionKey
* ConditionKey `string`

### ConditionType
* ConditionType `string` (values: STRINGEQUALS)

### ConditionValue
* ConditionValue `string`

### CopyAction
* CopyAction `object`: The details of the copy operation.
  * DestinationBackupVaultArn **required**
  * Lifecycle [Lifecycle](#lifecycle)

### CopyActions
* CopyActions `array`
  * items [CopyAction](#copyaction)

### CopyJob
* CopyJob `object`: Contains detailed information about a copy job.
  * AccountId
  * BackupSizeInBytes
  * CompletionDate
  * CopyJobId
  * CreatedBy [RecoveryPointCreator](#recoverypointcreator)
  * CreationDate
  * DestinationBackupVaultArn
  * DestinationRecoveryPointArn
  * IamRoleArn
  * ResourceArn
  * ResourceType
  * SourceBackupVaultArn
  * SourceRecoveryPointArn
  * State
  * StatusMessage

### CopyJobState
* CopyJobState `string` (values: CREATED, RUNNING, COMPLETED, FAILED)

### CopyJobsList
* CopyJobsList `array`
  * items [CopyJob](#copyjob)

### CreateBackupPlanInput
* CreateBackupPlanInput `object`
  * BackupPlan **required**
    * AdvancedBackupSettings
      * items [AdvancedBackupSetting](#advancedbackupsetting)
    * BackupPlanName **required**
    * Rules **required**
      * items [BackupRuleInput](#backupruleinput)
  * BackupPlanTags
  * CreatorRequestId

### CreateBackupPlanOutput
* CreateBackupPlanOutput `object`
  * AdvancedBackupSettings
    * items [AdvancedBackupSetting](#advancedbackupsetting)
  * BackupPlanArn
  * BackupPlanId
  * CreationDate
  * VersionId

### CreateBackupSelectionInput
* CreateBackupSelectionInput `object`
  * BackupSelection **required**
    * IamRoleArn **required**
    * ListOfTags
      * items [Condition](#condition)
    * Resources
      * items [ARN](#arn)
    * SelectionName **required**
  * CreatorRequestId

### CreateBackupSelectionOutput
* CreateBackupSelectionOutput `object`
  * BackupPlanId
  * CreationDate
  * SelectionId

### CreateBackupVaultInput
* CreateBackupVaultInput `object`
  * BackupVaultTags
  * CreatorRequestId
  * EncryptionKeyArn

### CreateBackupVaultOutput
* CreateBackupVaultOutput `object`
  * BackupVaultArn
  * BackupVaultName
  * CreationDate

### CronExpression
* CronExpression `string`

### DeleteBackupPlanInput
* DeleteBackupPlanInput `object`

### DeleteBackupPlanOutput
* DeleteBackupPlanOutput `object`
  * BackupPlanArn
  * BackupPlanId
  * DeletionDate
  * VersionId

### DeleteBackupSelectionInput
* DeleteBackupSelectionInput `object`

### DeleteBackupVaultAccessPolicyInput
* DeleteBackupVaultAccessPolicyInput `object`

### DeleteBackupVaultInput
* DeleteBackupVaultInput `object`

### DeleteBackupVaultNotificationsInput
* DeleteBackupVaultNotificationsInput `object`

### DeleteRecoveryPointInput
* DeleteRecoveryPointInput `object`

### DependencyFailureException


### DescribeBackupJobInput
* DescribeBackupJobInput `object`

### DescribeBackupJobOutput
* DescribeBackupJobOutput `object`
  * AccountId
  * BackupJobId
  * BackupOptions
  * BackupSizeInBytes
  * BackupType
  * BackupVaultArn
  * BackupVaultName
  * BytesTransferred
  * CompletionDate
  * CreatedBy
    * BackupPlanArn
    * BackupPlanId
    * BackupPlanVersion
    * BackupRuleId
  * CreationDate
  * ExpectedCompletionDate
  * IamRoleArn
  * PercentDone
  * RecoveryPointArn
  * ResourceArn
  * ResourceType
  * StartBy
  * State
  * StatusMessage

### DescribeBackupVaultInput
* DescribeBackupVaultInput `object`

### DescribeBackupVaultOutput
* DescribeBackupVaultOutput `object`
  * BackupVaultArn
  * BackupVaultName
  * CreationDate
  * CreatorRequestId
  * EncryptionKeyArn
  * NumberOfRecoveryPoints

### DescribeCopyJobInput
* DescribeCopyJobInput `object`

### DescribeCopyJobOutput
* DescribeCopyJobOutput `object`
  * CopyJob
    * AccountId
    * BackupSizeInBytes
    * CompletionDate
    * CopyJobId
    * CreatedBy [RecoveryPointCreator](#recoverypointcreator)
    * CreationDate
    * DestinationBackupVaultArn
    * DestinationRecoveryPointArn
    * IamRoleArn
    * ResourceArn
    * ResourceType
    * SourceBackupVaultArn
    * SourceRecoveryPointArn
    * State
    * StatusMessage

### DescribeGlobalSettingsInput
* DescribeGlobalSettingsInput `object`

### DescribeGlobalSettingsOutput
* DescribeGlobalSettingsOutput `object`
  * GlobalSettings
  * LastUpdateTime

### DescribeProtectedResourceInput
* DescribeProtectedResourceInput `object`

### DescribeProtectedResourceOutput
* DescribeProtectedResourceOutput `object`
  * LastBackupTime
  * ResourceArn
  * ResourceType

### DescribeRecoveryPointInput
* DescribeRecoveryPointInput `object`

### DescribeRecoveryPointOutput
* DescribeRecoveryPointOutput `object`
  * BackupSizeInBytes
  * BackupVaultArn
  * BackupVaultName
  * CalculatedLifecycle
    * DeleteAt
    * MoveToColdStorageAt
  * CompletionDate
  * CreatedBy
    * BackupPlanArn
    * BackupPlanId
    * BackupPlanVersion
    * BackupRuleId
  * CreationDate
  * EncryptionKeyArn
  * IamRoleArn
  * IsEncrypted
  * LastRestoreTime
  * Lifecycle
    * DeleteAfterDays
    * MoveToColdStorageAfterDays
  * RecoveryPointArn
  * ResourceArn
  * ResourceType
  * SourceBackupVaultArn
  * Status
  * StorageClass

### DescribeRegionSettingsInput
* DescribeRegionSettingsInput `object`

### DescribeRegionSettingsOutput
* DescribeRegionSettingsOutput `object`
  * ResourceTypeOptInPreference

### DescribeRestoreJobInput
* DescribeRestoreJobInput `object`

### DescribeRestoreJobOutput
* DescribeRestoreJobOutput `object`
  * AccountId
  * BackupSizeInBytes
  * CompletionDate
  * CreatedResourceArn
  * CreationDate
  * ExpectedCompletionTimeMinutes
  * IamRoleArn
  * PercentDone
  * RecoveryPointArn
  * ResourceType
  * RestoreJobId
  * Status
  * StatusMessage

### ExportBackupPlanTemplateInput
* ExportBackupPlanTemplateInput `object`

### ExportBackupPlanTemplateOutput
* ExportBackupPlanTemplateOutput `object`
  * BackupPlanTemplateJson

### GetBackupPlanFromJSONInput
* GetBackupPlanFromJSONInput `object`
  * BackupPlanTemplateJson **required**

### GetBackupPlanFromJSONOutput
* GetBackupPlanFromJSONOutput `object`
  * BackupPlan
    * AdvancedBackupSettings
      * items [AdvancedBackupSetting](#advancedbackupsetting)
    * BackupPlanName **required**
    * Rules **required**
      * items [BackupRule](#backuprule)

### GetBackupPlanFromTemplateInput
* GetBackupPlanFromTemplateInput `object`

### GetBackupPlanFromTemplateOutput
* GetBackupPlanFromTemplateOutput `object`
  * BackupPlanDocument
    * AdvancedBackupSettings
      * items [AdvancedBackupSetting](#advancedbackupsetting)
    * BackupPlanName **required**
    * Rules **required**
      * items [BackupRule](#backuprule)

### GetBackupPlanInput
* GetBackupPlanInput `object`

### GetBackupPlanOutput
* GetBackupPlanOutput `object`
  * AdvancedBackupSettings
    * items [AdvancedBackupSetting](#advancedbackupsetting)
  * BackupPlan
    * AdvancedBackupSettings
      * items [AdvancedBackupSetting](#advancedbackupsetting)
    * BackupPlanName **required**
    * Rules **required**
      * items [BackupRule](#backuprule)
  * BackupPlanArn
  * BackupPlanId
  * CreationDate
  * CreatorRequestId
  * DeletionDate
  * LastExecutionDate
  * VersionId

### GetBackupSelectionInput
* GetBackupSelectionInput `object`

### GetBackupSelectionOutput
* GetBackupSelectionOutput `object`
  * BackupPlanId
  * BackupSelection
    * IamRoleArn **required**
    * ListOfTags
      * items [Condition](#condition)
    * Resources
      * items [ARN](#arn)
    * SelectionName **required**
  * CreationDate
  * CreatorRequestId
  * SelectionId

### GetBackupVaultAccessPolicyInput
* GetBackupVaultAccessPolicyInput `object`

### GetBackupVaultAccessPolicyOutput
* GetBackupVaultAccessPolicyOutput `object`
  * BackupVaultArn
  * BackupVaultName
  * Policy

### GetBackupVaultNotificationsInput
* GetBackupVaultNotificationsInput `object`

### GetBackupVaultNotificationsOutput
* GetBackupVaultNotificationsOutput `object`
  * BackupVaultArn
  * BackupVaultEvents
    * items [BackupVaultEvent](#backupvaultevent)
  * BackupVaultName
  * SNSTopicArn

### GetRecoveryPointRestoreMetadataInput
* GetRecoveryPointRestoreMetadataInput `object`

### GetRecoveryPointRestoreMetadataOutput
* GetRecoveryPointRestoreMetadataOutput `object`
  * BackupVaultArn
  * RecoveryPointArn
  * RestoreMetadata

### GetSupportedResourceTypesOutput
* GetSupportedResourceTypesOutput `object`
  * ResourceTypes
    * items [ResourceType](#resourcetype)

### GlobalSettings
* GlobalSettings `object`

### GlobalSettingsName
* GlobalSettingsName `string`

### GlobalSettingsValue
* GlobalSettingsValue `string`

### IAMPolicy
* IAMPolicy `string`

### IAMRoleArn
* IAMRoleArn `string`

### InvalidParameterValueException


### InvalidRequestException


### IsEnabled
* IsEnabled `boolean`

### Lifecycle
* Lifecycle `object`: <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p>
  * DeleteAfterDays
  * MoveToColdStorageAfterDays

### LimitExceededException


### ListBackupJobsInput
* ListBackupJobsInput `object`

### ListBackupJobsOutput
* ListBackupJobsOutput `object`
  * BackupJobs
    * items [BackupJob](#backupjob)
  * NextToken

### ListBackupPlanTemplatesInput
* ListBackupPlanTemplatesInput `object`

### ListBackupPlanTemplatesOutput
* ListBackupPlanTemplatesOutput `object`
  * BackupPlanTemplatesList
    * items [BackupPlanTemplatesListMember](#backupplantemplateslistmember)
  * NextToken

### ListBackupPlanVersionsInput
* ListBackupPlanVersionsInput `object`

### ListBackupPlanVersionsOutput
* ListBackupPlanVersionsOutput `object`
  * BackupPlanVersionsList
    * items [BackupPlansListMember](#backupplanslistmember)
  * NextToken

### ListBackupPlansInput
* ListBackupPlansInput `object`

### ListBackupPlansOutput
* ListBackupPlansOutput `object`
  * BackupPlansList
    * items [BackupPlansListMember](#backupplanslistmember)
  * NextToken

### ListBackupSelectionsInput
* ListBackupSelectionsInput `object`

### ListBackupSelectionsOutput
* ListBackupSelectionsOutput `object`
  * BackupSelectionsList
    * items [BackupSelectionsListMember](#backupselectionslistmember)
  * NextToken

### ListBackupVaultsInput
* ListBackupVaultsInput `object`

### ListBackupVaultsOutput
* ListBackupVaultsOutput `object`
  * BackupVaultList
    * items [BackupVaultListMember](#backupvaultlistmember)
  * NextToken

### ListCopyJobsInput
* ListCopyJobsInput `object`

### ListCopyJobsOutput
* ListCopyJobsOutput `object`
  * CopyJobs
    * items [CopyJob](#copyjob)
  * NextToken

### ListOfTags
* ListOfTags `array`
  * items [Condition](#condition)

### ListProtectedResourcesInput
* ListProtectedResourcesInput `object`

### ListProtectedResourcesOutput
* ListProtectedResourcesOutput `object`
  * NextToken
  * Results
    * items [ProtectedResource](#protectedresource)

### ListRecoveryPointsByBackupVaultInput
* ListRecoveryPointsByBackupVaultInput `object`

### ListRecoveryPointsByBackupVaultOutput
* ListRecoveryPointsByBackupVaultOutput `object`
  * NextToken
  * RecoveryPoints
    * items [RecoveryPointByBackupVault](#recoverypointbybackupvault)

### ListRecoveryPointsByResourceInput
* ListRecoveryPointsByResourceInput `object`

### ListRecoveryPointsByResourceOutput
* ListRecoveryPointsByResourceOutput `object`
  * NextToken
  * RecoveryPoints
    * items [RecoveryPointByResource](#recoverypointbyresource)

### ListRestoreJobsInput
* ListRestoreJobsInput `object`

### ListRestoreJobsOutput
* ListRestoreJobsOutput `object`
  * NextToken
  * RestoreJobs
    * items [RestoreJobsListMember](#restorejobslistmember)

### ListTagsInput
* ListTagsInput `object`

### ListTagsOutput
* ListTagsOutput `object`
  * NextToken
  * Tags

### Long
* Long `integer`

### MaxResults
* MaxResults `integer`

### Metadata
* Metadata `object`

### MetadataKey
* MetadataKey `string`

### MetadataValue
* MetadataValue `string`

### MissingParameterValueException


### ProtectedResource
* ProtectedResource `object`: A structure that contains information about a backed-up resource.
  * LastBackupTime
  * ResourceArn
  * ResourceType

### ProtectedResourcesList
* ProtectedResourcesList `array`
  * items [ProtectedResource](#protectedresource)

### PutBackupVaultAccessPolicyInput
* PutBackupVaultAccessPolicyInput `object`
  * Policy

### PutBackupVaultNotificationsInput
* PutBackupVaultNotificationsInput `object`
  * BackupVaultEvents **required**
    * items [BackupVaultEvent](#backupvaultevent)
  * SNSTopicArn **required**

### RecoveryPointByBackupVault
* RecoveryPointByBackupVault `object`: Contains detailed information about the recovery points stored in a backup vault.
  * BackupSizeInBytes
  * BackupVaultArn
  * BackupVaultName
  * CalculatedLifecycle
    * DeleteAt
    * MoveToColdStorageAt
  * CompletionDate
  * CreatedBy
    * BackupPlanArn
    * BackupPlanId
    * BackupPlanVersion
    * BackupRuleId
  * CreationDate
  * EncryptionKeyArn
  * IamRoleArn
  * IsEncrypted
  * LastRestoreTime
  * Lifecycle
    * DeleteAfterDays
    * MoveToColdStorageAfterDays
  * RecoveryPointArn
  * ResourceArn
  * ResourceType
  * SourceBackupVaultArn
  * Status

### RecoveryPointByBackupVaultList
* RecoveryPointByBackupVaultList `array`
  * items [RecoveryPointByBackupVault](#recoverypointbybackupvault)

### RecoveryPointByResource
* RecoveryPointByResource `object`: Contains detailed information about a saved recovery point.
  * BackupSizeBytes
  * BackupVaultName
  * CreationDate
  * EncryptionKeyArn
  * RecoveryPointArn
  * Status

### RecoveryPointByResourceList
* RecoveryPointByResourceList `array`
  * items [RecoveryPointByResource](#recoverypointbyresource)

### RecoveryPointCreator
* RecoveryPointCreator `object`: Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup.
  * BackupPlanArn
  * BackupPlanId
  * BackupPlanVersion
  * BackupRuleId

### RecoveryPointStatus
* RecoveryPointStatus `string` (values: COMPLETED, PARTIAL, DELETING, EXPIRED)

### ResourceArns
* ResourceArns `array`
  * items [ARN](#arn)

### ResourceNotFoundException


### ResourceType
* ResourceType `string`

### ResourceTypeOptInPreference
* ResourceTypeOptInPreference `object`

### ResourceTypes
* ResourceTypes `array`
  * items [ResourceType](#resourcetype)

### RestoreJobId
* RestoreJobId `string`

### RestoreJobStatus
* RestoreJobStatus `string` (values: PENDING, RUNNING, COMPLETED, ABORTED, FAILED)

### RestoreJobsList
* RestoreJobsList `array`
  * items [RestoreJobsListMember](#restorejobslistmember)

### RestoreJobsListMember
* RestoreJobsListMember `object`: Contains metadata about a restore job.
  * AccountId
  * BackupSizeInBytes
  * CompletionDate
  * CreatedResourceArn
  * CreationDate
  * ExpectedCompletionTimeMinutes
  * IamRoleArn
  * PercentDone
  * RecoveryPointArn
  * ResourceType
  * RestoreJobId
  * Status
  * StatusMessage

### ServiceUnavailableException


### StartBackupJobInput
* StartBackupJobInput `object`
  * BackupOptions
  * BackupVaultName **required**
  * CompleteWindowMinutes
  * IamRoleArn **required**
  * IdempotencyToken
  * Lifecycle
    * DeleteAfterDays
    * MoveToColdStorageAfterDays
  * RecoveryPointTags
  * ResourceArn **required**
  * StartWindowMinutes

### StartBackupJobOutput
* StartBackupJobOutput `object`
  * BackupJobId
  * CreationDate
  * RecoveryPointArn

### StartCopyJobInput
* StartCopyJobInput `object`
  * DestinationBackupVaultArn **required**
  * IamRoleArn **required**
  * IdempotencyToken
  * Lifecycle [Lifecycle](#lifecycle)
  * RecoveryPointArn **required**
  * SourceBackupVaultName **required**

### StartCopyJobOutput
* StartCopyJobOutput `object`
  * CopyJobId
  * CreationDate

### StartRestoreJobInput
* StartRestoreJobInput `object`
  * IamRoleArn **required**
  * IdempotencyToken
  * Metadata **required**
  * RecoveryPointArn **required**
  * ResourceType

### StartRestoreJobOutput
* StartRestoreJobOutput `object`
  * RestoreJobId

### StopBackupJobInput
* StopBackupJobInput `object`

### StorageClass
* StorageClass `string` (values: WARM, COLD, DELETED)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [string](#string)

### TagResourceInput
* TagResourceInput `object`
  * Tags **required**

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### UntagResourceInput
* UntagResourceInput `object`
  * TagKeyList **required**
    * items [string](#string)

### UpdateBackupPlanInput
* UpdateBackupPlanInput `object`
  * BackupPlan **required**
    * AdvancedBackupSettings
      * items [AdvancedBackupSetting](#advancedbackupsetting)
    * BackupPlanName **required**
    * Rules **required**
      * items [BackupRuleInput](#backupruleinput)

### UpdateBackupPlanOutput
* UpdateBackupPlanOutput `object`
  * AdvancedBackupSettings
    * items [AdvancedBackupSetting](#advancedbackupsetting)
  * BackupPlanArn
  * BackupPlanId
  * CreationDate
  * VersionId

### UpdateGlobalSettingsInput
* UpdateGlobalSettingsInput `object`
  * GlobalSettings

### UpdateRecoveryPointLifecycleInput
* UpdateRecoveryPointLifecycleInput `object`
  * Lifecycle
    * DeleteAfterDays
    * MoveToColdStorageAfterDays

### UpdateRecoveryPointLifecycleOutput
* UpdateRecoveryPointLifecycleOutput `object`
  * BackupVaultArn
  * CalculatedLifecycle
    * DeleteAt
    * MoveToColdStorageAt
  * Lifecycle
    * DeleteAfterDays
    * MoveToColdStorageAfterDays
  * RecoveryPointArn

### UpdateRegionSettingsInput
* UpdateRegionSettingsInput `object`
  * ResourceTypeOptInPreference

### WindowMinutes
* WindowMinutes `integer`

### boolean
* boolean `boolean`

### long
* long `integer`

### string
* string `string`

### timestamp
* timestamp `string`


