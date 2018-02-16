# @datafire/amazonaws_glacier

Client library for Amazon Glacier

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_glacier
```
```js
let amazonaws_glacier = require('@datafire/amazonaws_glacier').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_glacier.GetDataRetrievalPolicy({
  "accountId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Glacier is a storage solution for "cold data."</p> <p>Amazon Glacier is an extremely low-cost storage service that provides secure, durable, and easy-to-use storage for data backup and archival. With Amazon Glacier, customers can store their data cost effectively for months, years, or decades. Amazon Glacier also enables customers to offload the administrative burdens of operating and scaling storage to AWS, so they don't have to worry about capacity planning, hardware provisioning, data replication, hardware failure and recovery, or time-consuming hardware migrations.</p> <p>Amazon Glacier is a great storage choice when low storage cost is paramount, your data is rarely retrieved, and retrieval latency of several hours is acceptable. If your application requires fast or frequent access to your data, consider using Amazon S3. For more information, see <a href="http://aws.amazon.com/s3/">Amazon Simple Storage Service (Amazon S3)</a>.</p> <p>You can store any kind of data in any format. There is no maximum limit on the total amount of data you can store in Amazon Glacier.</p> <p>If you are a first-time user of Amazon Glacier, we recommend that you begin by reading the following sections in the <i>Amazon Glacier Developer Guide</i>:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is Amazon Glacier</a> - This section of the Developer Guide describes the underlying data model, the operations it supports, and the AWS SDKs that you can use to interact with the service.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started with Amazon Glacier</a> - The Getting Started section walks you through the process of creating a vault, uploading archives, creating jobs to download archives, retrieving the job output, and deleting archives.</p> </li> </ul>

## Actions

### GetDataRetrievalPolicy



```js
amazonaws_glacier.GetDataRetrievalPolicy({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`

#### Output
* output [GetDataRetrievalPolicyOutput](#getdataretrievalpolicyoutput)

### SetDataRetrievalPolicy



```js
amazonaws_glacier.SetDataRetrievalPolicy({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * Policy [DataRetrievalPolicy](#dataretrievalpolicy)

#### Output
*Output schema unknown*

### ListProvisionedCapacity



```js
amazonaws_glacier.ListProvisionedCapacity({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`

#### Output
* output [ListProvisionedCapacityOutput](#listprovisionedcapacityoutput)

### PurchaseProvisionedCapacity



```js
amazonaws_glacier.PurchaseProvisionedCapacity({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`

#### Output
*Output schema unknown*

### ListVaults



```js
amazonaws_glacier.ListVaults({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * marker `string`
  * accountId **required** `string`

#### Output
* output [ListVaultsOutput](#listvaultsoutput)

### DeleteVault



```js
amazonaws_glacier.DeleteVault({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
*Output schema unknown*

### DescribeVault



```js
amazonaws_glacier.DescribeVault({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
* output [DescribeVaultOutput](#describevaultoutput)

### CreateVault



```js
amazonaws_glacier.CreateVault({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
*Output schema unknown*

### DeleteVaultAccessPolicy



```js
amazonaws_glacier.DeleteVaultAccessPolicy({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
*Output schema unknown*

### GetVaultAccessPolicy



```js
amazonaws_glacier.GetVaultAccessPolicy({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
* output [GetVaultAccessPolicyOutput](#getvaultaccesspolicyoutput)

### SetVaultAccessPolicy



```js
amazonaws_glacier.SetVaultAccessPolicy({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * policy [VaultAccessPolicy](#vaultaccesspolicy)

#### Output
*Output schema unknown*

### UploadArchive



```js
amazonaws_glacier.UploadArchive({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * body [Stream](#stream)

#### Output
*Output schema unknown*

### DeleteArchive



```js
amazonaws_glacier.DeleteArchive({
  "accountId": "",
  "vaultName": "",
  "archiveId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * archiveId **required** `string`

#### Output
*Output schema unknown*

### ListJobs



```js
amazonaws_glacier.ListJobs({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * marker `string`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
* output [ListJobsOutput](#listjobsoutput)

### InitiateJob



```js
amazonaws_glacier.InitiateJob({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * jobParameters [JobParameters](#jobparameters)

#### Output
*Output schema unknown*

### DescribeJob



```js
amazonaws_glacier.DescribeJob({
  "accountId": "",
  "vaultName": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * jobId **required** `string`

#### Output
* output [GlacierJobDescription](#glacierjobdescription)

### GetJobOutput



```js
amazonaws_glacier.GetJobOutput({
  "accountId": "",
  "vaultName": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * jobId **required** `string`

#### Output
* output [GetJobOutputOutput](#getjoboutputoutput)

### AbortVaultLock



```js
amazonaws_glacier.AbortVaultLock({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
*Output schema unknown*

### GetVaultLock



```js
amazonaws_glacier.GetVaultLock({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
* output [GetVaultLockOutput](#getvaultlockoutput)

### InitiateVaultLock



```js
amazonaws_glacier.InitiateVaultLock({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * policy [VaultLockPolicy](#vaultlockpolicy)

#### Output
*Output schema unknown*

### CompleteVaultLock



```js
amazonaws_glacier.CompleteVaultLock({
  "accountId": "",
  "vaultName": "",
  "lockId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * lockId **required** `string`

#### Output
*Output schema unknown*

### ListMultipartUploads



```js
amazonaws_glacier.ListMultipartUploads({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * marker `string`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
* output [ListMultipartUploadsOutput](#listmultipartuploadsoutput)

### InitiateMultipartUpload



```js
amazonaws_glacier.InitiateMultipartUpload({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
*Output schema unknown*

### AbortMultipartUpload



```js
amazonaws_glacier.AbortMultipartUpload({
  "accountId": "",
  "vaultName": "",
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * uploadId **required** `string`

#### Output
*Output schema unknown*

### ListParts



```js
amazonaws_glacier.ListParts({
  "accountId": "",
  "vaultName": "",
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * marker `string`
  * accountId **required** `string`
  * vaultName **required** `string`
  * uploadId **required** `string`

#### Output
* output [ListPartsOutput](#listpartsoutput)

### CompleteMultipartUpload



```js
amazonaws_glacier.CompleteMultipartUpload({
  "accountId": "",
  "vaultName": "",
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * uploadId **required** `string`

#### Output
*Output schema unknown*

### UploadMultipartPart



```js
amazonaws_glacier.UploadMultipartPart({
  "accountId": "",
  "vaultName": "",
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * uploadId **required** `string`
  * body [Stream](#stream)

#### Output
*Output schema unknown*

### DeleteVaultNotifications



```js
amazonaws_glacier.DeleteVaultNotifications({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
*Output schema unknown*

### GetVaultNotifications



```js
amazonaws_glacier.GetVaultNotifications({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
* output [GetVaultNotificationsOutput](#getvaultnotificationsoutput)

### SetVaultNotifications



```js
amazonaws_glacier.SetVaultNotifications({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * vaultNotificationConfig [VaultNotificationConfig](#vaultnotificationconfig)

#### Output
*Output schema unknown*

### ListTagsForVault



```js
amazonaws_glacier.ListTagsForVault({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`

#### Output
* output [ListTagsForVaultOutput](#listtagsforvaultoutput)

### AddTagsToVault



```js
amazonaws_glacier.AddTagsToVault({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * Tags [TagMap](#tagmap)

#### Output
*Output schema unknown*

### RemoveTagsFromVault



```js
amazonaws_glacier.RemoveTagsFromVault({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * TagKeys [TagKeyList](#tagkeylist)

#### Output
*Output schema unknown*



## Definitions

### AbortMultipartUploadInput
* AbortMultipartUploadInput `object`: <p>Provides options to abort a multipart upload identified by the upload ID.</p> <p>For information about the underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart Upload</a>. For conceptual information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon Glacier</a>.</p>

### AbortVaultLockInput
* AbortVaultLockInput `object`: The input values for <code>AbortVaultLock</code>.

### AccessControlPolicyList
* AccessControlPolicyList `array`
  * items [Grant](#grant)

### ActionCode
* ActionCode `string` (values: ArchiveRetrieval, InventoryRetrieval, Select)

### AddTagsToVaultInput
* AddTagsToVaultInput `object`: The input values for <code>AddTagsToVault</code>.
  * Tags [TagMap](#tagmap)

### ArchiveCreationOutput
* ArchiveCreationOutput `object`: <p>Contains the Amazon Glacier response to your request.</p> <p>For information about the underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For conceptual information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon Glacier</a>.</p>

### CSVInput
* CSVInput `object`: Contains information about the comma-separated value (CSV) file to select from.
  * Comments [string](#string)
  * FieldDelimiter [string](#string)
  * FileHeaderInfo [FileHeaderInfo](#fileheaderinfo)
  * QuoteCharacter [string](#string)
  * QuoteEscapeCharacter [string](#string)
  * RecordDelimiter [string](#string)

### CSVOutput
* CSVOutput `object`: Contains information about the comma-separated value (CSV) file that the job results are stored in.
  * FieldDelimiter [string](#string)
  * QuoteCharacter [string](#string)
  * QuoteEscapeCharacter [string](#string)
  * QuoteFields [QuoteFields](#quotefields)
  * RecordDelimiter [string](#string)

### CannedACL
* CannedACL `string` (values: private, public-read, public-read-write, aws-exec-read, authenticated-read, bucket-owner-read, bucket-owner-full-control)

### CompleteMultipartUploadInput
* CompleteMultipartUploadInput `object`: Provides options to complete a multipart upload operation. This informs Amazon Glacier that all the archive parts have been uploaded and Amazon Glacier can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Amazon Glacier returns the URI path of the newly created archive resource.

### CompleteVaultLockInput
* CompleteVaultLockInput `object`: The input values for <code>CompleteVaultLock</code>.

### CreateVaultInput
* CreateVaultInput `object`: Provides options to create a vault.

### CreateVaultOutput
* CreateVaultOutput `object`: Contains the Amazon Glacier response to your request.

### DataRetrievalPolicy
* DataRetrievalPolicy `object`: Data retrieval policy.
  * Rules [DataRetrievalRulesList](#dataretrievalruleslist)

### DataRetrievalRule
* DataRetrievalRule `object`: Data retrieval policy rule.
  * BytesPerHour [NullableLong](#nullablelong)
  * Strategy [string](#string)

### DataRetrievalRulesList
* DataRetrievalRulesList `array`
  * items [DataRetrievalRule](#dataretrievalrule)

### DateTime
* DateTime `string`

### DeleteArchiveInput
* DeleteArchiveInput `object`: Provides options for deleting an archive from an Amazon Glacier vault.

### DeleteVaultAccessPolicyInput
* DeleteVaultAccessPolicyInput `object`: DeleteVaultAccessPolicy input.

### DeleteVaultInput
* DeleteVaultInput `object`: Provides options for deleting a vault from Amazon Glacier.

### DeleteVaultNotificationsInput
* DeleteVaultNotificationsInput `object`: Provides options for deleting a vault notification configuration from an Amazon Glacier vault.

### DescribeJobInput
* DescribeJobInput `object`: Provides options for retrieving a job description.

### DescribeVaultInput
* DescribeVaultInput `object`: Provides options for retrieving metadata for a specific vault in Amazon Glacier.

### DescribeVaultOutput
* DescribeVaultOutput `object`: Contains the Amazon Glacier response to your request.
  * CreationDate [string](#string)
  * LastInventoryDate [string](#string)
  * NumberOfArchives [long](#long)
  * SizeInBytes [long](#long)
  * VaultARN [string](#string)
  * VaultName [string](#string)

### Encryption
* Encryption `object`: Contains information about the encryption used to store the job results in Amazon S3. 
  * EncryptionType [EncryptionType](#encryptiontype)
  * KMSContext [string](#string)
  * KMSKeyId [string](#string)

### EncryptionType
* EncryptionType `string` (values: aws:kms, AES256)

### ExpressionType
* ExpressionType `string` (values: SQL)

### FileHeaderInfo
* FileHeaderInfo `string` (values: USE, IGNORE, NONE)

### GetDataRetrievalPolicyInput
* GetDataRetrievalPolicyInput `object`: Input for GetDataRetrievalPolicy.

### GetDataRetrievalPolicyOutput
* GetDataRetrievalPolicyOutput `object`: Contains the Amazon Glacier response to the <code>GetDataRetrievalPolicy</code> request.
  * Policy [DataRetrievalPolicy](#dataretrievalpolicy)

### GetJobOutputInput
* GetJobOutputInput `object`: Provides options for downloading output of an Amazon Glacier job.

### GetJobOutputOutput
* GetJobOutputOutput `object`: Contains the Amazon Glacier response to your request.
  * body [Stream](#stream)

### GetVaultAccessPolicyInput
* GetVaultAccessPolicyInput `object`: Input for GetVaultAccessPolicy.

### GetVaultAccessPolicyOutput
* GetVaultAccessPolicyOutput `object`: Output for GetVaultAccessPolicy.
  * policy [VaultAccessPolicy](#vaultaccesspolicy)

### GetVaultLockInput
* GetVaultLockInput `object`: The input values for <code>GetVaultLock</code>.

### GetVaultLockOutput
* GetVaultLockOutput `object`: Contains the Amazon Glacier response to your request.
  * CreationDate [string](#string)
  * ExpirationDate [string](#string)
  * Policy [string](#string)
  * State [string](#string)

### GetVaultNotificationsInput
* GetVaultNotificationsInput `object`: Provides options for retrieving the notification configuration set on an Amazon Glacier vault.

### GetVaultNotificationsOutput
* GetVaultNotificationsOutput `object`: Contains the Amazon Glacier response to your request.
  * vaultNotificationConfig [VaultNotificationConfig](#vaultnotificationconfig)

### GlacierJobDescription
* GlacierJobDescription `object`: Contains the description of an Amazon Glacier job.
  * Action [ActionCode](#actioncode)
  * ArchiveId [string](#string)
  * ArchiveSHA256TreeHash [string](#string)
  * ArchiveSizeInBytes [Size](#size)
  * Completed [boolean](#boolean)
  * CompletionDate [string](#string)
  * CreationDate [string](#string)
  * InventoryRetrievalParameters [InventoryRetrievalJobDescription](#inventoryretrievaljobdescription)
  * InventorySizeInBytes [Size](#size)
  * JobDescription [string](#string)
  * JobId [string](#string)
  * JobOutputPath [string](#string)
  * OutputLocation [OutputLocation](#outputlocation)
  * RetrievalByteRange [string](#string)
  * SHA256TreeHash [string](#string)
  * SNSTopic [string](#string)
  * SelectParameters [SelectParameters](#selectparameters)
  * StatusCode [StatusCode](#statuscode)
  * StatusMessage [string](#string)
  * Tier [string](#string)
  * VaultARN [string](#string)

### Grant
* Grant `object`: Contains information about a grant.
  * Grantee [Grantee](#grantee)
  * Permission [Permission](#permission)

### Grantee
* Grantee `object`: Contains information about the grantee.
  * DisplayName [string](#string)
  * EmailAddress [string](#string)
  * ID [string](#string)
  * Type **required** [Type](#type)
  * URI [string](#string)

### InitiateJobInput
* InitiateJobInput `object`: Provides options for initiating an Amazon Glacier job.
  * jobParameters [JobParameters](#jobparameters)

### InitiateJobOutput
* InitiateJobOutput `object`: Contains the Amazon Glacier response to your request.

### InitiateMultipartUploadInput
* InitiateMultipartUploadInput `object`: Provides options for initiating a multipart upload to an Amazon Glacier vault.

### InitiateMultipartUploadOutput
* InitiateMultipartUploadOutput `object`: The Amazon Glacier response to your request.

### InitiateVaultLockInput
* InitiateVaultLockInput `object`: The input values for <code>InitiateVaultLock</code>.
  * policy [VaultLockPolicy](#vaultlockpolicy)

### InitiateVaultLockOutput
* InitiateVaultLockOutput `object`: Contains the Amazon Glacier response to your request.

### InputSerialization
* InputSerialization `object`: Describes how the archive is serialized.
  * csv [CSVInput](#csvinput)

### InsufficientCapacityException
* InsufficientCapacityException `object`: Returned if there is insufficient capacity to process this expedited request. This error only applies to expedited retrievals and not to standard or bulk retrievals.
  * code [string](#string)
  * message [string](#string)
  * type [string](#string)

### InvalidParameterValueException
* InvalidParameterValueException `object`: Returned if a parameter of the request is incorrectly specified.
  * code [string](#string)
  * message [string](#string)
  * type [string](#string)

### InventoryRetrievalJobDescription
* InventoryRetrievalJobDescription `object`: Describes the options for a range inventory retrieval job.
  * EndDate [DateTime](#datetime)
  * Format [string](#string)
  * Limit [string](#string)
  * Marker [string](#string)
  * StartDate [DateTime](#datetime)

### InventoryRetrievalJobInput
* InventoryRetrievalJobInput `object`: Provides options for specifying a range inventory retrieval job.
  * EndDate [string](#string)
  * Limit [string](#string)
  * Marker [string](#string)
  * StartDate [string](#string)

### JobList
* JobList `array`
  * items [GlacierJobDescription](#glacierjobdescription)

### JobParameters
* JobParameters `object`: Provides options for defining a job.
  * ArchiveId [string](#string)
  * Description [string](#string)
  * Format [string](#string)
  * InventoryRetrievalParameters [InventoryRetrievalJobInput](#inventoryretrievaljobinput)
  * OutputLocation [OutputLocation](#outputlocation)
  * RetrievalByteRange [string](#string)
  * SNSTopic [string](#string)
  * SelectParameters [SelectParameters](#selectparameters)
  * Tier [string](#string)
  * Type [string](#string)

### LimitExceededException
* LimitExceededException `object`: Returned if the request results in a vault or account limit being exceeded.
  * code [string](#string)
  * message [string](#string)
  * type [string](#string)

### ListJobsInput
* ListJobsInput `object`: Provides options for retrieving a job list for an Amazon Glacier vault.

### ListJobsOutput
* ListJobsOutput `object`: Contains the Amazon Glacier response to your request.
  * JobList [JobList](#joblist)
  * Marker [string](#string)

### ListMultipartUploadsInput
* ListMultipartUploadsInput `object`: Provides options for retrieving list of in-progress multipart uploads for an Amazon Glacier vault.

### ListMultipartUploadsOutput
* ListMultipartUploadsOutput `object`: Contains the Amazon Glacier response to your request.
  * Marker [string](#string)
  * UploadsList [UploadsList](#uploadslist)

### ListPartsInput
* ListPartsInput `object`: Provides options for retrieving a list of parts of an archive that have been uploaded in a specific multipart upload.

### ListPartsOutput
* ListPartsOutput `object`: Contains the Amazon Glacier response to your request.
  * ArchiveDescription [string](#string)
  * CreationDate [string](#string)
  * Marker [string](#string)
  * MultipartUploadId [string](#string)
  * PartSizeInBytes [long](#long)
  * Parts [PartList](#partlist)
  * VaultARN [string](#string)

### ListProvisionedCapacityInput
* ListProvisionedCapacityInput `object`

### ListProvisionedCapacityOutput
* ListProvisionedCapacityOutput `object`
  * ProvisionedCapacityList [ProvisionedCapacityList](#provisionedcapacitylist)

### ListTagsForVaultInput
* ListTagsForVaultInput `object`: The input value for <code>ListTagsForVaultInput</code>.

### ListTagsForVaultOutput
* ListTagsForVaultOutput `object`: Contains the Amazon Glacier response to your request.
  * Tags [TagMap](#tagmap)

### ListVaultsInput
* ListVaultsInput `object`: Provides options to retrieve the vault list owned by the calling user's account. The list provides metadata information for each vault.

### ListVaultsOutput
* ListVaultsOutput `object`: Contains the Amazon Glacier response to your request.
  * Marker [string](#string)
  * VaultList [VaultList](#vaultlist)

### MissingParameterValueException
* MissingParameterValueException `object`: Returned if a required header or parameter is missing from the request.
  * code [string](#string)
  * message [string](#string)
  * type [string](#string)

### NotificationEventList
* NotificationEventList `array`
  * items [string](#string)

### NullableLong
* NullableLong `integer`

### OutputLocation
* OutputLocation `object`: Contains information about the location where the select job results are stored.
  * S3 [S3Location](#s3location)

### OutputSerialization
* OutputSerialization `object`: Describes how the select output is serialized.
  * csv [CSVOutput](#csvoutput)

### PartList
* PartList `array`
  * items [PartListElement](#partlistelement)

### PartListElement
* PartListElement `object`: A list of the part sizes of the multipart upload.
  * RangeInBytes [string](#string)
  * SHA256TreeHash [string](#string)

### Permission
* Permission `string` (values: FULL_CONTROL, WRITE, WRITE_ACP, READ, READ_ACP)

### PolicyEnforcedException
* PolicyEnforcedException `object`: Returned if a retrieval job would exceed the current data policy's retrieval rate limit. For more information about data retrieval policies,
  * code [string](#string)
  * message [string](#string)
  * type [string](#string)

### ProvisionedCapacityDescription
* ProvisionedCapacityDescription `object`: The definition for a provisioned capacity unit.
  * CapacityId [string](#string)
  * ExpirationDate [string](#string)
  * StartDate [string](#string)

### ProvisionedCapacityList
* ProvisionedCapacityList `array`
  * items [ProvisionedCapacityDescription](#provisionedcapacitydescription)

### PurchaseProvisionedCapacityInput
* PurchaseProvisionedCapacityInput `object`

### PurchaseProvisionedCapacityOutput
* PurchaseProvisionedCapacityOutput `object`

### QuoteFields
* QuoteFields `string` (values: ALWAYS, ASNEEDED)

### RemoveTagsFromVaultInput
* RemoveTagsFromVaultInput `object`: The input value for <code>RemoveTagsFromVaultInput</code>.
  * TagKeys [TagKeyList](#tagkeylist)

### RequestTimeoutException
* RequestTimeoutException `object`: Returned if, when uploading an archive, Amazon Glacier times out while receiving the upload.
  * code [string](#string)
  * message [string](#string)
  * type [string](#string)

### ResourceNotFoundException
* ResourceNotFoundException `object`: Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.
  * code [string](#string)
  * message [string](#string)
  * type [string](#string)

### S3Location
* S3Location `object`: Contains information about the location in Amazon S3 where the select job results are stored.
  * AccessControlList [AccessControlPolicyList](#accesscontrolpolicylist)
  * BucketName [string](#string)
  * CannedACL [CannedACL](#cannedacl)
  * Encryption [Encryption](#encryption)
  * Prefix [string](#string)
  * StorageClass [StorageClass](#storageclass)
  * Tagging [hashmap](#hashmap)
  * UserMetadata [hashmap](#hashmap)

### SelectParameters
* SelectParameters `object`: Contains information about the parameters used for a select.
  * Expression [string](#string)
  * ExpressionType [ExpressionType](#expressiontype)
  * InputSerialization [InputSerialization](#inputserialization)
  * OutputSerialization [OutputSerialization](#outputserialization)

### ServiceUnavailableException
* ServiceUnavailableException `object`: Returned if the service cannot complete the request.
  * code [string](#string)
  * message [string](#string)
  * type [string](#string)

### SetDataRetrievalPolicyInput
* SetDataRetrievalPolicyInput `object`: SetDataRetrievalPolicy input.
  * Policy [DataRetrievalPolicy](#dataretrievalpolicy)

### SetVaultAccessPolicyInput
* SetVaultAccessPolicyInput `object`: SetVaultAccessPolicy input.
  * policy [VaultAccessPolicy](#vaultaccesspolicy)

### SetVaultNotificationsInput
* SetVaultNotificationsInput `object`: Provides options to configure notifications that will be sent when specific events happen to a vault.
  * vaultNotificationConfig [VaultNotificationConfig](#vaultnotificationconfig)

### Size
* Size `integer`

### StatusCode
* StatusCode `string` (values: InProgress, Succeeded, Failed)

### StorageClass
* StorageClass `string` (values: STANDARD, REDUCED_REDUNDANCY, STANDARD_IA)

### Stream
* Stream `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [string](#string)

### TagMap
* TagMap `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### TagValue
* TagValue `string`

### Type
* Type `string` (values: AmazonCustomerByEmail, CanonicalUser, Group)

### UploadArchiveInput
* UploadArchiveInput `object`: Provides options to add an archive to a vault.
  * body [Stream](#stream)

### UploadListElement
* UploadListElement `object`: A list of in-progress multipart uploads for a vault.
  * ArchiveDescription [string](#string)
  * CreationDate [string](#string)
  * MultipartUploadId [string](#string)
  * PartSizeInBytes [long](#long)
  * VaultARN [string](#string)

### UploadMultipartPartInput
* UploadMultipartPartInput `object`: Provides options to upload a part of an archive in a multipart upload operation.
  * body [Stream](#stream)

### UploadMultipartPartOutput
* UploadMultipartPartOutput `object`: Contains the Amazon Glacier response to your request.

### UploadsList
* UploadsList `array`
  * items [UploadListElement](#uploadlistelement)

### VaultAccessPolicy
* VaultAccessPolicy `object`: Contains the vault access policy.
  * Policy [string](#string)

### VaultList
* VaultList `array`
  * items [DescribeVaultOutput](#describevaultoutput)

### VaultLockPolicy
* VaultLockPolicy `object`: Contains the vault lock policy.
  * Policy [string](#string)

### VaultNotificationConfig
* VaultNotificationConfig `object`: Represents a vault's notification configuration.
  * Events [NotificationEventList](#notificationeventlist)
  * SNSTopic [string](#string)

### boolean
* boolean `boolean`

### hashmap
* hashmap `array`
  * items `object`
    * key [string](#string)
    * value [string](#string)

### httpstatus
* httpstatus `integer`

### long
* long `integer`

### string
* string `string`


