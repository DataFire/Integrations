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

.then(data => {
  console.log(data);
});
```

## Description

<p> Amazon S3 Glacier (Glacier) is a storage solution for "cold data."</p> <p>Glacier is an extremely low-cost storage service that provides secure, durable, and easy-to-use storage for data backup and archival. With Glacier, customers can store their data cost effectively for months, years, or decades. Glacier also enables customers to offload the administrative burdens of operating and scaling storage to AWS, so they don't have to worry about capacity planning, hardware provisioning, data replication, hardware failure and recovery, or time-consuming hardware migrations.</p> <p>Glacier is a great storage choice when low storage cost is paramount and your data is rarely retrieved. If your application requires fast or frequent access to your data, consider using Amazon S3. For more information, see <a href="http://aws.amazon.com/s3/">Amazon Simple Storage Service (Amazon S3)</a>.</p> <p>You can store any kind of data in any format. There is no maximum limit on the total amount of data you can store in Glacier.</p> <p>If you are a first-time user of Glacier, we recommend that you begin by reading the following sections in the <i>Amazon S3 Glacier Developer Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is Amazon S3 Glacier</a> - This section of the Developer Guide describes the underlying data model, the operations it supports, and the AWS SDKs that you can use to interact with the service.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started with Amazon S3 Glacier</a> - The Getting Started section walks you through the process of creating a vault, uploading archives, creating jobs to download archives, retrieving the job output, and deleting archives.</p> </li> </ul>

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
  * Policy `object`: Data retrieval policy.
    * Rules
      * items [DataRetrievalRule](#dataretrievalrule)

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
  * accountId **required** `string`
  * marker `string`
  * limit `string`

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
  * policy `object`: Contains the vault access policy.
    * Policy

#### Output
*Output schema unknown*

### UploadArchive



```js
amazonaws_glacier.UploadArchive({
  "vaultName": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * vaultName **required** `string`
  * accountId **required** `string`
  * x-amz-archive-description `string`
  * x-amz-sha256-tree-hash `string`
  * body `string`: The data to upload.

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
  * accountId **required** `string`
  * vaultName **required** `string`
  * limit `string`
  * marker `string`
  * statuscode `string`
  * completed `string`

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
  * jobParameters `object`: Provides options for defining a job.
    * ArchiveId
    * Description
    * Format
    * InventoryRetrievalParameters
      * EndDate
      * Limit
      * Marker
      * StartDate
    * OutputLocation
      * S3
        * AccessControlList
          * items [Grant](#grant)
        * BucketName
        * CannedACL
        * Encryption
          * EncryptionType
          * KMSContext
          * KMSKeyId
        * Prefix
        * StorageClass
        * Tagging
        * UserMetadata
    * RetrievalByteRange
    * SNSTopic
    * SelectParameters
      * Expression
      * ExpressionType
      * InputSerialization
        * csv
          * Comments
          * FieldDelimiter
          * FileHeaderInfo
          * QuoteCharacter
          * QuoteEscapeCharacter
          * RecordDelimiter
      * OutputSerialization
        * csv
          * FieldDelimiter
          * QuoteCharacter
          * QuoteEscapeCharacter
          * QuoteFields
          * RecordDelimiter
    * Tier
    * Type

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
  * Range `string`

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
  * policy `object`: Contains the vault lock policy.
    * Policy

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
  * accountId **required** `string`
  * vaultName **required** `string`
  * marker `string`
  * limit `string`

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
  * x-amz-archive-description `string`
  * x-amz-part-size `string`

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
  * accountId **required** `string`
  * vaultName **required** `string`
  * uploadId **required** `string`
  * marker `string`
  * limit `string`

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
  * x-amz-archive-size `string`
  * x-amz-sha256-tree-hash `string`

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
  * x-amz-sha256-tree-hash `string`
  * Content-Range `string`
  * body `string`: The data to upload.

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
  * vaultNotificationConfig `object`: Represents a vault's notification configuration.
    * Events
      * items [string](#string)
    * SNSTopic

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
  "vaultName": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * operation **required** `string`
  * Tags `object`: The tags to add to the vault. Each tag is composed of a key and a value. The value can be an empty string.

#### Output
*Output schema unknown*

### RemoveTagsFromVault



```js
amazonaws_glacier.RemoveTagsFromVault({
  "accountId": "",
  "vaultName": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * vaultName **required** `string`
  * operation **required** `string`
  * TagKeys `array`: A list of tag keys. Each corresponding tag is removed from the vault.
    * items [string](#string)

#### Output
*Output schema unknown*



## Definitions

### AbortMultipartUploadInput
* AbortMultipartUploadInput `object`: <p>Provides options to abort a multipart upload identified by the upload ID.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart Upload</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p>

### AbortVaultLockInput
* AbortVaultLockInput `object`: The input values for <code>AbortVaultLock</code>.

### AccessControlPolicyList
* AccessControlPolicyList `array`
  * items [Grant](#grant)

### ActionCode
* ActionCode `string` (values: ArchiveRetrieval, InventoryRetrieval, Select)

### AddTagsToVaultInput
* AddTagsToVaultInput `object`: The input values for <code>AddTagsToVault</code>.
  * Tags

### ArchiveCreationOutput
* ArchiveCreationOutput `object`: <p>Contains the Amazon S3 Glacier response to your request.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p>

### CSVInput
* CSVInput `object`: Contains information about the comma-separated value (CSV) file to select from.
  * Comments
  * FieldDelimiter
  * FileHeaderInfo
  * QuoteCharacter
  * QuoteEscapeCharacter
  * RecordDelimiter

### CSVOutput
* CSVOutput `object`: Contains information about the comma-separated value (CSV) file that the job results are stored in.
  * FieldDelimiter
  * QuoteCharacter
  * QuoteEscapeCharacter
  * QuoteFields
  * RecordDelimiter

### CannedACL
* CannedACL `string` (values: private, public-read, public-read-write, aws-exec-read, authenticated-read, bucket-owner-read, bucket-owner-full-control)

### CompleteMultipartUploadInput
* CompleteMultipartUploadInput `object`: Provides options to complete a multipart upload operation. This informs Amazon Glacier that all the archive parts have been uploaded and Amazon S3 Glacier (Glacier) can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource.

### CompleteVaultLockInput
* CompleteVaultLockInput `object`: The input values for <code>CompleteVaultLock</code>.

### CreateVaultInput
* CreateVaultInput `object`: Provides options to create a vault.

### CreateVaultOutput
* CreateVaultOutput `object`: Contains the Amazon S3 Glacier response to your request.

### DataRetrievalPolicy
* DataRetrievalPolicy `object`: Data retrieval policy.
  * Rules
    * items [DataRetrievalRule](#dataretrievalrule)

### DataRetrievalRule
* DataRetrievalRule `object`: Data retrieval policy rule.
  * BytesPerHour
  * Strategy

### DataRetrievalRulesList
* DataRetrievalRulesList `array`
  * items [DataRetrievalRule](#dataretrievalrule)

### DateTime
* DateTime `string`

### DeleteArchiveInput
* DeleteArchiveInput `object`: Provides options for deleting an archive from an Amazon S3 Glacier vault.

### DeleteVaultAccessPolicyInput
* DeleteVaultAccessPolicyInput `object`: DeleteVaultAccessPolicy input.

### DeleteVaultInput
* DeleteVaultInput `object`: Provides options for deleting a vault from Amazon S3 Glacier.

### DeleteVaultNotificationsInput
* DeleteVaultNotificationsInput `object`: Provides options for deleting a vault notification configuration from an Amazon Glacier vault.

### DescribeJobInput
* DescribeJobInput `object`: Provides options for retrieving a job description.

### DescribeVaultInput
* DescribeVaultInput `object`: Provides options for retrieving metadata for a specific vault in Amazon Glacier.

### DescribeVaultOutput
* DescribeVaultOutput `object`: Contains the Amazon S3 Glacier response to your request.
  * CreationDate
  * LastInventoryDate
  * NumberOfArchives
  * SizeInBytes
  * VaultARN
  * VaultName

### Encryption
* Encryption `object`: Contains information about the encryption used to store the job results in Amazon S3. 
  * EncryptionType
  * KMSContext
  * KMSKeyId

### EncryptionType
* EncryptionType `string` (values: aws:kms, AES256)

### ExpressionType
* ExpressionType `string` (values: SQL)

### FileHeaderInfo
* FileHeaderInfo `string` (values: USE, IGNORE, NONE)

### GetDataRetrievalPolicyInput
* GetDataRetrievalPolicyInput `object`: Input for GetDataRetrievalPolicy.

### GetDataRetrievalPolicyOutput
* GetDataRetrievalPolicyOutput `object`: Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request.
  * Policy
    * Rules
      * items [DataRetrievalRule](#dataretrievalrule)

### GetJobOutputInput
* GetJobOutputInput `object`: Provides options for downloading output of an Amazon S3 Glacier job.

### GetJobOutputOutput
* GetJobOutputOutput `object`: Contains the Amazon S3 Glacier response to your request.
  * body
  * status

### GetVaultAccessPolicyInput
* GetVaultAccessPolicyInput `object`: Input for GetVaultAccessPolicy.

### GetVaultAccessPolicyOutput
* GetVaultAccessPolicyOutput `object`: Output for GetVaultAccessPolicy.
  * policy
    * Policy

### GetVaultLockInput
* GetVaultLockInput `object`: The input values for <code>GetVaultLock</code>.

### GetVaultLockOutput
* GetVaultLockOutput `object`: Contains the Amazon S3 Glacier response to your request.
  * CreationDate
  * ExpirationDate
  * Policy
  * State

### GetVaultNotificationsInput
* GetVaultNotificationsInput `object`: Provides options for retrieving the notification configuration set on an Amazon Glacier vault.

### GetVaultNotificationsOutput
* GetVaultNotificationsOutput `object`: Contains the Amazon S3 Glacier response to your request.
  * vaultNotificationConfig
    * Events
      * items [string](#string)
    * SNSTopic

### GlacierJobDescription
* GlacierJobDescription `object`: Contains the description of an Amazon S3 Glacier job.
  * Action
  * ArchiveId
  * ArchiveSHA256TreeHash
  * ArchiveSizeInBytes
  * Completed
  * CompletionDate
  * CreationDate
  * InventoryRetrievalParameters
    * EndDate
    * Format
    * Limit
    * Marker
    * StartDate
  * InventorySizeInBytes
  * JobDescription
  * JobId
  * JobOutputPath
  * OutputLocation
    * S3
      * AccessControlList
        * items [Grant](#grant)
      * BucketName
      * CannedACL
      * Encryption
        * EncryptionType
        * KMSContext
        * KMSKeyId
      * Prefix
      * StorageClass
      * Tagging
      * UserMetadata
  * RetrievalByteRange
  * SHA256TreeHash
  * SNSTopic
  * SelectParameters
    * Expression
    * ExpressionType
    * InputSerialization
      * csv
        * Comments
        * FieldDelimiter
        * FileHeaderInfo
        * QuoteCharacter
        * QuoteEscapeCharacter
        * RecordDelimiter
    * OutputSerialization
      * csv
        * FieldDelimiter
        * QuoteCharacter
        * QuoteEscapeCharacter
        * QuoteFields
        * RecordDelimiter
  * StatusCode
  * StatusMessage
  * Tier
  * VaultARN

### Grant
* Grant `object`: Contains information about a grant.
  * Grantee
    * DisplayName
    * EmailAddress
    * ID
    * Type **required**
    * URI
  * Permission

### Grantee
* Grantee `object`: Contains information about the grantee.
  * DisplayName
  * EmailAddress
  * ID
  * Type **required**
  * URI

### InitiateJobInput
* InitiateJobInput `object`: Provides options for initiating an Amazon S3 Glacier job.
  * jobParameters
    * ArchiveId
    * Description
    * Format
    * InventoryRetrievalParameters
      * EndDate
      * Limit
      * Marker
      * StartDate
    * OutputLocation
      * S3
        * AccessControlList
          * items [Grant](#grant)
        * BucketName
        * CannedACL
        * Encryption
          * EncryptionType
          * KMSContext
          * KMSKeyId
        * Prefix
        * StorageClass
        * Tagging
        * UserMetadata
    * RetrievalByteRange
    * SNSTopic
    * SelectParameters
      * Expression
      * ExpressionType
      * InputSerialization
        * csv
          * Comments
          * FieldDelimiter
          * FileHeaderInfo
          * QuoteCharacter
          * QuoteEscapeCharacter
          * RecordDelimiter
      * OutputSerialization
        * csv
          * FieldDelimiter
          * QuoteCharacter
          * QuoteEscapeCharacter
          * QuoteFields
          * RecordDelimiter
    * Tier
    * Type

### InitiateJobOutput
* InitiateJobOutput `object`: Contains the Amazon S3 Glacier response to your request.

### InitiateMultipartUploadInput
* InitiateMultipartUploadInput `object`: Provides options for initiating a multipart upload to an Amazon S3 Glacier vault.

### InitiateMultipartUploadOutput
* InitiateMultipartUploadOutput `object`: The Amazon S3 Glacier response to your request.

### InitiateVaultLockInput
* InitiateVaultLockInput `object`: The input values for <code>InitiateVaultLock</code>.
  * policy
    * Policy

### InitiateVaultLockOutput
* InitiateVaultLockOutput `object`: Contains the Amazon S3 Glacier response to your request.

### InputSerialization
* InputSerialization `object`: Describes how the archive is serialized.
  * csv
    * Comments
    * FieldDelimiter
    * FileHeaderInfo
    * QuoteCharacter
    * QuoteEscapeCharacter
    * RecordDelimiter

### InsufficientCapacityException


### InvalidParameterValueException


### InventoryRetrievalJobDescription
* InventoryRetrievalJobDescription `object`: Describes the options for a range inventory retrieval job.
  * EndDate
  * Format
  * Limit
  * Marker
  * StartDate

### InventoryRetrievalJobInput
* InventoryRetrievalJobInput `object`: Provides options for specifying a range inventory retrieval job.
  * EndDate
  * Limit
  * Marker
  * StartDate

### JobList
* JobList `array`
  * items [GlacierJobDescription](#glacierjobdescription)

### JobParameters
* JobParameters `object`: Provides options for defining a job.
  * ArchiveId
  * Description
  * Format
  * InventoryRetrievalParameters
    * EndDate
    * Limit
    * Marker
    * StartDate
  * OutputLocation
    * S3
      * AccessControlList
        * items [Grant](#grant)
      * BucketName
      * CannedACL
      * Encryption
        * EncryptionType
        * KMSContext
        * KMSKeyId
      * Prefix
      * StorageClass
      * Tagging
      * UserMetadata
  * RetrievalByteRange
  * SNSTopic
  * SelectParameters
    * Expression
    * ExpressionType
    * InputSerialization
      * csv
        * Comments
        * FieldDelimiter
        * FileHeaderInfo
        * QuoteCharacter
        * QuoteEscapeCharacter
        * RecordDelimiter
    * OutputSerialization
      * csv
        * FieldDelimiter
        * QuoteCharacter
        * QuoteEscapeCharacter
        * QuoteFields
        * RecordDelimiter
  * Tier
  * Type

### LimitExceededException


### ListJobsInput
* ListJobsInput `object`: Provides options for retrieving a job list for an Amazon S3 Glacier vault.

### ListJobsOutput
* ListJobsOutput `object`: Contains the Amazon S3 Glacier response to your request.
  * JobList
    * items [GlacierJobDescription](#glacierjobdescription)
  * Marker

### ListMultipartUploadsInput
* ListMultipartUploadsInput `object`: Provides options for retrieving list of in-progress multipart uploads for an Amazon Glacier vault.

### ListMultipartUploadsOutput
* ListMultipartUploadsOutput `object`: Contains the Amazon S3 Glacier response to your request.
  * Marker
  * UploadsList
    * items [UploadListElement](#uploadlistelement)

### ListPartsInput
* ListPartsInput `object`: Provides options for retrieving a list of parts of an archive that have been uploaded in a specific multipart upload.

### ListPartsOutput
* ListPartsOutput `object`: Contains the Amazon S3 Glacier response to your request.
  * ArchiveDescription
  * CreationDate
  * Marker
  * MultipartUploadId
  * PartSizeInBytes
  * Parts
    * items [PartListElement](#partlistelement)
  * VaultARN

### ListProvisionedCapacityInput
* ListProvisionedCapacityInput `object`

### ListProvisionedCapacityOutput
* ListProvisionedCapacityOutput `object`
  * ProvisionedCapacityList
    * items [ProvisionedCapacityDescription](#provisionedcapacitydescription)

### ListTagsForVaultInput
* ListTagsForVaultInput `object`: The input value for <code>ListTagsForVaultInput</code>.

### ListTagsForVaultOutput
* ListTagsForVaultOutput `object`: Contains the Amazon S3 Glacier response to your request.
  * Tags

### ListVaultsInput
* ListVaultsInput `object`: Provides options to retrieve the vault list owned by the calling user's account. The list provides metadata information for each vault.

### ListVaultsOutput
* ListVaultsOutput `object`: Contains the Amazon S3 Glacier response to your request.
  * Marker
  * VaultList
    * items [DescribeVaultOutput](#describevaultoutput)

### MissingParameterValueException


### NotificationEventList
* NotificationEventList `array`
  * items [string](#string)

### NullableLong
* NullableLong `integer`

### OutputLocation
* OutputLocation `object`: Contains information about the location where the select job results are stored.
  * S3
    * AccessControlList
      * items [Grant](#grant)
    * BucketName
    * CannedACL
    * Encryption
      * EncryptionType
      * KMSContext
      * KMSKeyId
    * Prefix
    * StorageClass
    * Tagging
    * UserMetadata

### OutputSerialization
* OutputSerialization `object`: Describes how the select output is serialized.
  * csv
    * FieldDelimiter
    * QuoteCharacter
    * QuoteEscapeCharacter
    * QuoteFields
    * RecordDelimiter

### PartList
* PartList `array`
  * items [PartListElement](#partlistelement)

### PartListElement
* PartListElement `object`: A list of the part sizes of the multipart upload.
  * RangeInBytes
  * SHA256TreeHash

### Permission
* Permission `string` (values: FULL_CONTROL, WRITE, WRITE_ACP, READ, READ_ACP)

### PolicyEnforcedException


### ProvisionedCapacityDescription
* ProvisionedCapacityDescription `object`: The definition for a provisioned capacity unit.
  * CapacityId
  * ExpirationDate
  * StartDate

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
  * TagKeys
    * items [string](#string)

### RequestTimeoutException


### ResourceNotFoundException


### S3Location
* S3Location `object`: Contains information about the location in Amazon S3 where the select job results are stored.
  * AccessControlList
    * items [Grant](#grant)
  * BucketName
  * CannedACL
  * Encryption
    * EncryptionType
    * KMSContext
    * KMSKeyId
  * Prefix
  * StorageClass
  * Tagging
  * UserMetadata

### SelectParameters
* SelectParameters `object`: Contains information about the parameters used for a select.
  * Expression
  * ExpressionType
  * InputSerialization
    * csv
      * Comments
      * FieldDelimiter
      * FileHeaderInfo
      * QuoteCharacter
      * QuoteEscapeCharacter
      * RecordDelimiter
  * OutputSerialization
    * csv
      * FieldDelimiter
      * QuoteCharacter
      * QuoteEscapeCharacter
      * QuoteFields
      * RecordDelimiter

### ServiceUnavailableException


### SetDataRetrievalPolicyInput
* SetDataRetrievalPolicyInput `object`: SetDataRetrievalPolicy input.
  * Policy
    * Rules
      * items [DataRetrievalRule](#dataretrievalrule)

### SetVaultAccessPolicyInput
* SetVaultAccessPolicyInput `object`: SetVaultAccessPolicy input.
  * policy
    * Policy

### SetVaultNotificationsInput
* SetVaultNotificationsInput `object`: Provides options to configure notifications that will be sent when specific events happen to a vault.
  * vaultNotificationConfig
    * Events
      * items [string](#string)
    * SNSTopic

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
* TagMap `object`

### TagValue
* TagValue `string`

### Type
* Type `string` (values: AmazonCustomerByEmail, CanonicalUser, Group)

### UploadArchiveInput
* UploadArchiveInput `object`: Provides options to add an archive to a vault.
  * body

### UploadListElement
* UploadListElement `object`: A list of in-progress multipart uploads for a vault.
  * ArchiveDescription
  * CreationDate
  * MultipartUploadId
  * PartSizeInBytes
  * VaultARN

### UploadMultipartPartInput
* UploadMultipartPartInput `object`: Provides options to upload a part of an archive in a multipart upload operation.
  * body

### UploadMultipartPartOutput
* UploadMultipartPartOutput `object`: Contains the Amazon S3 Glacier response to your request.

### UploadsList
* UploadsList `array`
  * items [UploadListElement](#uploadlistelement)

### VaultAccessPolicy
* VaultAccessPolicy `object`: Contains the vault access policy.
  * Policy

### VaultList
* VaultList `array`
  * items [DescribeVaultOutput](#describevaultoutput)

### VaultLockPolicy
* VaultLockPolicy `object`: Contains the vault lock policy.
  * Policy

### VaultNotificationConfig
* VaultNotificationConfig `object`: Represents a vault's notification configuration.
  * Events
    * items [string](#string)
  * SNSTopic

### boolean
* boolean `boolean`

### hashmap
* hashmap `object`

### httpstatus
* httpstatus `integer`

### long
* long `integer`

### string
* string `string`


