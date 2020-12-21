# @datafire/amazonaws_s3control

Client library for AWS S3 Control

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_s3control
```
```js
let amazonaws_s3control = require('@datafire/amazonaws_s3control').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

 AWS S3 Control provides access to Amazon S3 control plane operations. 

## Actions

### ListAccessPoints



```js
amazonaws_s3control.ListAccessPoints({
  "x-amz-account-id": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * bucket `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListAccessPointsResult](#listaccesspointsresult)

### DeleteAccessPoint



```js
amazonaws_s3control.DeleteAccessPoint({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
*Output schema unknown*

### GetAccessPoint



```js
amazonaws_s3control.GetAccessPoint({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
* output [GetAccessPointResult](#getaccesspointresult)

### CreateAccessPoint



```js
amazonaws_s3control.CreateAccessPoint({
  "x-amz-account-id": "",
  "name": "",
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`
  * Bucket **required** `string`: <p>The name of the bucket that you want to associate this access point with.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
  * PublicAccessBlockConfiguration `object`: <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p>This is not supported for Amazon S3 on Outposts.</p>
    * BlockPublicAcls
    * BlockPublicPolicy
    * IgnorePublicAcls
    * RestrictPublicBuckets
  * VpcConfiguration `object`: The virtual private cloud (VPC) configuration for an access point.
    * VpcId

#### Output
* output [CreateAccessPointResult](#createaccesspointresult)

### DeleteAccessPointPolicy



```js
amazonaws_s3control.DeleteAccessPointPolicy({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
*Output schema unknown*

### GetAccessPointPolicy



```js
amazonaws_s3control.GetAccessPointPolicy({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
* output [GetAccessPointPolicyResult](#getaccesspointpolicyresult)

### PutAccessPointPolicy



```js
amazonaws_s3control.PutAccessPointPolicy({
  "x-amz-account-id": "",
  "name": "",
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`
  * Policy **required** `string`: The policy that you want to apply to the specified access point. For more information about access point policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing data access with Amazon S3 Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.

#### Output
*Output schema unknown*

### GetAccessPointPolicyStatus



```js
amazonaws_s3control.GetAccessPointPolicyStatus({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
* output [GetAccessPointPolicyStatusResult](#getaccesspointpolicystatusresult)

### ListRegionalBuckets



```js
amazonaws_s3control.ListRegionalBuckets({
  "x-amz-account-id": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * x-amz-outpost-id `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRegionalBucketsResult](#listregionalbucketsresult)

### CreateBucket



```js
amazonaws_s3control.CreateBucket({
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-acl `string`
  * name **required** `string`
  * x-amz-grant-full-control `string`
  * x-amz-grant-read `string`
  * x-amz-grant-read-acp `string`
  * x-amz-grant-write `string`
  * x-amz-grant-write-acp `string`
  * x-amz-bucket-object-lock-enabled `boolean`
  * x-amz-outpost-id `string`
  * CreateBucketConfiguration `object`: <p>The container for the bucket configuration.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>
    * LocationConstraint

#### Output
* output [CreateBucketResult](#createbucketresult)

### DeleteBucket



```js
amazonaws_s3control.DeleteBucket({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
*Output schema unknown*

### GetBucket



```js
amazonaws_s3control.GetBucket({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
* output [GetBucketResult](#getbucketresult)

### DeleteBucketLifecycleConfiguration



```js
amazonaws_s3control.DeleteBucketLifecycleConfiguration({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
*Output schema unknown*

### GetBucketLifecycleConfiguration



```js
amazonaws_s3control.GetBucketLifecycleConfiguration({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
* output [GetBucketLifecycleConfigurationResult](#getbucketlifecycleconfigurationresult)

### PutBucketLifecycleConfiguration



```js
amazonaws_s3control.PutBucketLifecycleConfiguration({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`
  * LifecycleConfiguration `object`: The container for the Outposts bucket lifecycle configuration.
    * Rules
      * items
        * AbortIncompleteMultipartUpload
          * DaysAfterInitiation
        * Expiration
          * Date
          * Days
          * ExpiredObjectDeleteMarker
        * Filter
          * And
          * Prefix
          * Tag [S3Tag](#s3tag)
        * ID
        * NoncurrentVersionExpiration
          * NoncurrentDays
        * NoncurrentVersionTransitions
          * items
        * Status **required**
        * Transitions
          * items

#### Output
*Output schema unknown*

### DeleteBucketPolicy



```js
amazonaws_s3control.DeleteBucketPolicy({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
*Output schema unknown*

### GetBucketPolicy



```js
amazonaws_s3control.GetBucketPolicy({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
* output [GetBucketPolicyResult](#getbucketpolicyresult)

### PutBucketPolicy



```js
amazonaws_s3control.PutBucketPolicy({
  "x-amz-account-id": "",
  "name": "",
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`
  * x-amz-confirm-remove-self-bucket-access `boolean`
  * Policy **required** `string`: The bucket policy as a JSON document.

#### Output
*Output schema unknown*

### DeleteBucketTagging



```js
amazonaws_s3control.DeleteBucketTagging({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
*Output schema unknown*

### GetBucketTagging



```js
amazonaws_s3control.GetBucketTagging({
  "x-amz-account-id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`

#### Output
* output [GetBucketTaggingResult](#getbuckettaggingresult)

### PutBucketTagging



```js
amazonaws_s3control.PutBucketTagging({
  "x-amz-account-id": "",
  "name": "",
  "Tagging": {}
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * name **required** `string`
  * Tagging **required** `object`: <p/>
    * TagSet
      * items [S3Tag](#s3tag)

#### Output
*Output schema unknown*

### DeletePublicAccessBlock



```js
amazonaws_s3control.DeletePublicAccessBlock({
  "x-amz-account-id": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`

#### Output
*Output schema unknown*

### GetPublicAccessBlock



```js
amazonaws_s3control.GetPublicAccessBlock({
  "x-amz-account-id": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`

#### Output
* output [GetPublicAccessBlockOutput](#getpublicaccessblockoutput)

### PutPublicAccessBlock



```js
amazonaws_s3control.PutPublicAccessBlock({
  "x-amz-account-id": "",
  "PublicAccessBlockConfiguration": {}
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * PublicAccessBlockConfiguration **required** `object`: <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p>This is not supported for Amazon S3 on Outposts.</p>
    * BlockPublicAcls
    * BlockPublicPolicy
    * IgnorePublicAcls
    * RestrictPublicBuckets

#### Output
*Output schema unknown*

### ListJobs



```js
amazonaws_s3control.ListJobs({
  "x-amz-account-id": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * jobStatuses `array`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListJobsResult](#listjobsresult)

### CreateJob



```js
amazonaws_s3control.CreateJob({
  "x-amz-account-id": "",
  "Operation": {},
  "Report": {},
  "ClientRequestToken": "",
  "Manifest": {},
  "Priority": 0,
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * ClientRequestToken **required** `string`: An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.
  * ConfirmationRequired `boolean`: Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.
  * Description `string`: A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.
  * Manifest **required** `object`: Contains the configuration information for a job's manifest.
    * Location
      * ETag **required**
      * ObjectArn **required**
      * ObjectVersionId
    * Spec
      * Fields
        * items [JobManifestFieldName](#jobmanifestfieldname)
      * Format **required**
  * Operation **required** `object`: The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
    * LambdaInvoke
      * FunctionArn
    * S3InitiateRestoreObject
      * ExpirationInDays
      * GlacierJobTier
    * S3PutObjectAcl
      * AccessControlPolicy
        * AccessControlList
          * Grants
          * Owner **required**
        * CannedAccessControlList
    * S3PutObjectCopy
      * AccessControlGrants
        * items [S3Grant](#s3grant)
      * CannedAccessControlList
      * MetadataDirective
      * ModifiedSinceConstraint
      * NewObjectMetadata
        * CacheControl
        * ContentDisposition
        * ContentEncoding
        * ContentLanguage
        * ContentLength
        * ContentMD5
        * ContentType
        * HttpExpiresDate
        * RequesterCharged
        * SSEAlgorithm
        * UserMetadata
      * NewObjectTagging
        * items [S3Tag](#s3tag)
      * ObjectLockLegalHoldStatus
      * ObjectLockMode
      * ObjectLockRetainUntilDate
      * RedirectLocation
      * RequesterPays
      * SSEAwsKmsKeyId
      * StorageClass
      * TargetKeyPrefix
      * TargetResource
      * UnModifiedSinceConstraint
    * S3PutObjectLegalHold [S3SetObjectLegalHoldOperation](#s3setobjectlegalholdoperation)
    * S3PutObjectRetention [S3SetObjectRetentionOperation](#s3setobjectretentionoperation)
    * S3PutObjectTagging
      * TagSet
        * items [S3Tag](#s3tag)
  * Priority **required** `integer`: The numerical priority for this job. Higher numbers indicate higher priority.
  * Report **required** `object`: Contains the configuration parameters for a job-completion report.
    * Bucket
    * Enabled
    * Format
    * Prefix
    * ReportScope
  * RoleArn **required** `string`: The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role that Batch Operations will use to run this job's operation on each object in the manifest.
  * Tags `array`: A set of tags to associate with the S3 Batch Operations job. This is an optional parameter. 
    * items [S3Tag](#s3tag)

#### Output
* output [CreateJobResult](#createjobresult)

### DescribeJob



```js
amazonaws_s3control.DescribeJob({
  "x-amz-account-id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * id **required** `string`

#### Output
* output [DescribeJobResult](#describejobresult)

### UpdateJobPriority



```js
amazonaws_s3control.UpdateJobPriority({
  "x-amz-account-id": "",
  "id": "",
  "priority": 0
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * id **required** `string`
  * priority **required** `integer`

#### Output
* output [UpdateJobPriorityResult](#updatejobpriorityresult)

### UpdateJobStatus



```js
amazonaws_s3control.UpdateJobStatus({
  "x-amz-account-id": "",
  "id": "",
  "requestedJobStatus": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * id **required** `string`
  * requestedJobStatus **required** `string`
  * statusUpdateReason `string`

#### Output
* output [UpdateJobStatusResult](#updatejobstatusresult)

### DeleteJobTagging



```js
amazonaws_s3control.DeleteJobTagging({
  "x-amz-account-id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * id **required** `string`

#### Output
* output [DeleteJobTaggingResult](#deletejobtaggingresult)

### GetJobTagging



```js
amazonaws_s3control.GetJobTagging({
  "x-amz-account-id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * id **required** `string`

#### Output
* output [GetJobTaggingResult](#getjobtaggingresult)

### PutJobTagging



```js
amazonaws_s3control.PutJobTagging({
  "x-amz-account-id": "",
  "id": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * id **required** `string`
  * Tags **required** `array`: The set of tags to associate with the S3 Batch Operations job.
    * items [S3Tag](#s3tag)

#### Output
* output [PutJobTaggingResult](#putjobtaggingresult)

### ListStorageLensConfigurations



```js
amazonaws_s3control.ListStorageLensConfigurations({
  "x-amz-account-id": ""
}, context)
```

#### Input
* input `object`
  * x-amz-account-id **required** `string`
  * nextToken `string`

#### Output
* output [ListStorageLensConfigurationsResult](#liststoragelensconfigurationsresult)

### DeleteStorageLensConfiguration



```js
amazonaws_s3control.DeleteStorageLensConfiguration({
  "storagelensid": "",
  "x-amz-account-id": ""
}, context)
```

#### Input
* input `object`
  * storagelensid **required** `string`
  * x-amz-account-id **required** `string`

#### Output
*Output schema unknown*

### GetStorageLensConfiguration



```js
amazonaws_s3control.GetStorageLensConfiguration({
  "storagelensid": "",
  "x-amz-account-id": ""
}, context)
```

#### Input
* input `object`
  * storagelensid **required** `string`
  * x-amz-account-id **required** `string`

#### Output
* output [GetStorageLensConfigurationResult](#getstoragelensconfigurationresult)

### PutStorageLensConfiguration



```js
amazonaws_s3control.PutStorageLensConfiguration({
  "storagelensid": "",
  "x-amz-account-id": "",
  "StorageLensConfiguration": {}
}, context)
```

#### Input
* input `object`
  * storagelensid **required** `string`
  * x-amz-account-id **required** `string`
  * StorageLensConfiguration **required** `object`: A container for the Amazon S3 Storage Lens configuration.
    * AccountLevel
      * ActivityMetrics
        * IsEnabled
      * BucketLevel **required**
        * ActivityMetrics
          * IsEnabled
        * PrefixLevel
          * StorageMetrics **required**
    * AwsOrg
      * Arn **required**
    * DataExport
      * S3BucketDestination **required**
        * AccountId **required**
        * Arn **required**
        * Encryption
          * SSEKMS
          * SSES3
        * Format **required**
        * OutputSchemaVersion **required**
        * Prefix
    * Exclude
      * Buckets
        * items
      * Regions
        * items
    * Id
    * Include
      * Buckets
        * items
      * Regions
        * items
    * IsEnabled
    * StorageLensArn
  * Tags `array`: <p>The tag set of the S3 Storage Lens configuration.</p> <note> <p>You can set up to a maximum of 50 tags.</p> </note>
    * items
      * Key **required**
      * Value **required**

#### Output
*Output schema unknown*

### DeleteStorageLensConfigurationTagging



```js
amazonaws_s3control.DeleteStorageLensConfigurationTagging({
  "storagelensid": "",
  "x-amz-account-id": ""
}, context)
```

#### Input
* input `object`
  * storagelensid **required** `string`
  * x-amz-account-id **required** `string`

#### Output
* output [DeleteStorageLensConfigurationTaggingResult](#deletestoragelensconfigurationtaggingresult)

### GetStorageLensConfigurationTagging



```js
amazonaws_s3control.GetStorageLensConfigurationTagging({
  "storagelensid": "",
  "x-amz-account-id": ""
}, context)
```

#### Input
* input `object`
  * storagelensid **required** `string`
  * x-amz-account-id **required** `string`

#### Output
* output [GetStorageLensConfigurationTaggingResult](#getstoragelensconfigurationtaggingresult)

### PutStorageLensConfigurationTagging



```js
amazonaws_s3control.PutStorageLensConfigurationTagging({
  "storagelensid": "",
  "x-amz-account-id": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * storagelensid **required** `string`
  * x-amz-account-id **required** `string`
  * Tags **required** `array`: <p>The tag set of the S3 Storage Lens configuration.</p> <note> <p>You can set up to a maximum of 50 tags.</p> </note>
    * items
      * Key **required**
      * Value **required**

#### Output
* output [PutStorageLensConfigurationTaggingResult](#putstoragelensconfigurationtaggingresult)



## Definitions

### AbortIncompleteMultipartUpload
* AbortIncompleteMultipartUpload `object`: The container for abort incomplete multipart upload
  * DaysAfterInitiation

### AccessPoint
* AccessPoint `object`: An access point used to access a bucket.
  * AccessPointArn
  * Bucket **required**
  * Name **required**
  * NetworkOrigin **required**
  * VpcConfiguration
    * VpcId **required**

### AccessPointList
* AccessPointList `array`
  * items
    * AccessPointArn
    * Bucket **required**
    * Name **required**
    * NetworkOrigin **required**
    * VpcConfiguration
      * VpcId **required**

### AccessPointName
* AccessPointName `string`

### AccountId
* AccountId `string`

### AccountLevel
* AccountLevel `object`: A container for the account level Amazon S3 Storage Lens configuration.
  * ActivityMetrics
    * IsEnabled
  * BucketLevel **required**
    * ActivityMetrics
      * IsEnabled
    * PrefixLevel
      * StorageMetrics **required**
        * IsEnabled
        * SelectionCriteria [SelectionCriteria](#selectioncriteria)

### ActivityMetrics
* ActivityMetrics `object`: A container for the activity metrics.
  * IsEnabled

### AwsOrgArn
* AwsOrgArn `string`

### BadRequestException


### Boolean
* Boolean `boolean`

### BucketAlreadyExists


### BucketAlreadyOwnedByYou


### BucketCannedACL
* BucketCannedACL `string` (values: private, public-read, public-read-write, authenticated-read)

### BucketLevel
* BucketLevel `object`: A container for the bucket-level configuration.
  * ActivityMetrics
    * IsEnabled
  * PrefixLevel
    * StorageMetrics **required**
      * IsEnabled
      * SelectionCriteria [SelectionCriteria](#selectioncriteria)

### BucketLocationConstraint
* BucketLocationConstraint `string` (values: EU, eu-west-1, us-west-1, us-west-2, ap-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, sa-east-1, cn-north-1, eu-central-1)

### BucketName
* BucketName `string`

### Buckets
* Buckets `array`
  * items

### ConfigId
* ConfigId `string`

### ConfirmRemoveSelfBucketAccess
* ConfirmRemoveSelfBucketAccess `boolean`

### ConfirmationRequired
* ConfirmationRequired `boolean`

### ContinuationToken
* ContinuationToken `string`

### CreateAccessPointRequest
* CreateAccessPointRequest `object`
  * Bucket **required**
  * PublicAccessBlockConfiguration [PublicAccessBlockConfiguration](#publicaccessblockconfiguration)
  * VpcConfiguration
    * VpcId **required**

### CreateAccessPointResult
* CreateAccessPointResult `object`
  * AccessPointArn

### CreateBucketConfiguration
* CreateBucketConfiguration `object`: <p>The container for the bucket configuration.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>
  * LocationConstraint

### CreateBucketRequest
* CreateBucketRequest `object`
  * CreateBucketConfiguration
    * LocationConstraint

### CreateBucketResult
* CreateBucketResult `object`
  * BucketArn

### CreateJobRequest
* CreateJobRequest `object`
  * ClientRequestToken **required**
  * ConfirmationRequired
  * Description
  * Manifest **required**
    * Location **required**
      * ETag **required**
      * ObjectArn **required**
      * ObjectVersionId
    * Spec **required**
      * Fields
        * items [JobManifestFieldName](#jobmanifestfieldname)
      * Format **required**
  * Operation **required**
    * LambdaInvoke
      * FunctionArn
    * S3InitiateRestoreObject
      * ExpirationInDays
      * GlacierJobTier
    * S3PutObjectAcl
      * AccessControlPolicy
        * AccessControlList
          * Grants
          * Owner **required**
        * CannedAccessControlList
    * S3PutObjectCopy
      * AccessControlGrants
        * items [S3Grant](#s3grant)
      * CannedAccessControlList
      * MetadataDirective
      * ModifiedSinceConstraint
      * NewObjectMetadata
        * CacheControl
        * ContentDisposition
        * ContentEncoding
        * ContentLanguage
        * ContentLength
        * ContentMD5
        * ContentType
        * HttpExpiresDate
        * RequesterCharged
        * SSEAlgorithm
        * UserMetadata
      * NewObjectTagging
        * items [S3Tag](#s3tag)
      * ObjectLockLegalHoldStatus
      * ObjectLockMode
      * ObjectLockRetainUntilDate
      * RedirectLocation
      * RequesterPays
      * SSEAwsKmsKeyId
      * StorageClass
      * TargetKeyPrefix
      * TargetResource
      * UnModifiedSinceConstraint
    * S3PutObjectLegalHold [S3SetObjectLegalHoldOperation](#s3setobjectlegalholdoperation)
    * S3PutObjectRetention [S3SetObjectRetentionOperation](#s3setobjectretentionoperation)
    * S3PutObjectTagging
      * TagSet
        * items [S3Tag](#s3tag)
  * Priority **required**
  * Report **required**
    * Bucket
    * Enabled **required**
    * Format
    * Prefix
    * ReportScope
  * RoleArn **required**
  * Tags
    * items [S3Tag](#s3tag)

### CreateJobResult
* CreateJobResult `object`
  * JobId

### CreationDate
* CreationDate `string`

### Date
* Date `string`

### Days
* Days `integer`

### DaysAfterInitiation
* DaysAfterInitiation `integer`

### DeleteAccessPointPolicyRequest
* DeleteAccessPointPolicyRequest `object`

### DeleteAccessPointRequest
* DeleteAccessPointRequest `object`

### DeleteBucketLifecycleConfigurationRequest
* DeleteBucketLifecycleConfigurationRequest `object`

### DeleteBucketPolicyRequest
* DeleteBucketPolicyRequest `object`

### DeleteBucketRequest
* DeleteBucketRequest `object`

### DeleteBucketTaggingRequest
* DeleteBucketTaggingRequest `object`

### DeleteJobTaggingRequest
* DeleteJobTaggingRequest `object`

### DeleteJobTaggingResult
* DeleteJobTaggingResult `object`

### DeletePublicAccessBlockRequest
* DeletePublicAccessBlockRequest `object`

### DeleteStorageLensConfigurationRequest
* DeleteStorageLensConfigurationRequest `object`

### DeleteStorageLensConfigurationTaggingRequest
* DeleteStorageLensConfigurationTaggingRequest `object`

### DeleteStorageLensConfigurationTaggingResult
* DeleteStorageLensConfigurationTaggingResult `object`

### DescribeJobRequest
* DescribeJobRequest `object`

### DescribeJobResult
* DescribeJobResult `object`
  * Job
    * ConfirmationRequired
    * CreationTime
    * Description
    * FailureReasons
      * items [JobFailure](#jobfailure)
    * JobArn
    * JobId
    * Manifest
      * Location **required**
        * ETag **required**
        * ObjectArn **required**
        * ObjectVersionId
      * Spec **required**
        * Fields
          * items [JobManifestFieldName](#jobmanifestfieldname)
        * Format **required**
    * Operation
      * LambdaInvoke
        * FunctionArn
      * S3InitiateRestoreObject
        * ExpirationInDays
        * GlacierJobTier
      * S3PutObjectAcl
        * AccessControlPolicy
          * AccessControlList
          * CannedAccessControlList
      * S3PutObjectCopy
        * AccessControlGrants
          * items [S3Grant](#s3grant)
        * CannedAccessControlList
        * MetadataDirective
        * ModifiedSinceConstraint
        * NewObjectMetadata
          * CacheControl
          * ContentDisposition
          * ContentEncoding
          * ContentLanguage
          * ContentLength
          * ContentMD5
          * ContentType
          * HttpExpiresDate
          * RequesterCharged
          * SSEAlgorithm
          * UserMetadata
        * NewObjectTagging
          * items [S3Tag](#s3tag)
        * ObjectLockLegalHoldStatus
        * ObjectLockMode
        * ObjectLockRetainUntilDate
        * RedirectLocation
        * RequesterPays
        * SSEAwsKmsKeyId
        * StorageClass
        * TargetKeyPrefix
        * TargetResource
        * UnModifiedSinceConstraint
      * S3PutObjectLegalHold [S3SetObjectLegalHoldOperation](#s3setobjectlegalholdoperation)
      * S3PutObjectRetention [S3SetObjectRetentionOperation](#s3setobjectretentionoperation)
      * S3PutObjectTagging
        * TagSet
          * items [S3Tag](#s3tag)
    * Priority
    * ProgressSummary
      * NumberOfTasksFailed
      * NumberOfTasksSucceeded
      * TotalNumberOfTasks
    * Report
      * Bucket
      * Enabled **required**
      * Format
      * Prefix
      * ReportScope
    * RoleArn
    * Status
    * StatusUpdateReason
    * SuspendedCause
    * SuspendedDate
    * TerminationDate

### Exclude
* Exclude `object`: A container for what Amazon S3 Storage Lens will exclude.
  * Buckets
    * items
  * Regions
    * items

### ExpirationStatus
* ExpirationStatus `string` (values: Enabled, Disabled)

### ExpiredObjectDeleteMarker
* ExpiredObjectDeleteMarker `boolean`

### Format
* Format `string` (values: CSV, Parquet)

### FunctionArnString
* FunctionArnString `string`

### GetAccessPointPolicyRequest
* GetAccessPointPolicyRequest `object`

### GetAccessPointPolicyResult
* GetAccessPointPolicyResult `object`
  * Policy

### GetAccessPointPolicyStatusRequest
* GetAccessPointPolicyStatusRequest `object`

### GetAccessPointPolicyStatusResult
* GetAccessPointPolicyStatusResult `object`
  * PolicyStatus
    * IsPublic

### GetAccessPointRequest
* GetAccessPointRequest `object`

### GetAccessPointResult
* GetAccessPointResult `object`
  * Bucket
  * CreationDate
  * Name
  * NetworkOrigin
  * PublicAccessBlockConfiguration [PublicAccessBlockConfiguration](#publicaccessblockconfiguration)
  * VpcConfiguration
    * VpcId **required**

### GetBucketLifecycleConfigurationRequest
* GetBucketLifecycleConfigurationRequest `object`

### GetBucketLifecycleConfigurationResult
* GetBucketLifecycleConfigurationResult `object`
  * Rules
    * items
      * AbortIncompleteMultipartUpload
        * DaysAfterInitiation
      * Expiration
        * Date
        * Days
        * ExpiredObjectDeleteMarker
      * Filter
        * And
          * Prefix
          * Tags
        * Prefix
        * Tag [S3Tag](#s3tag)
      * ID
      * NoncurrentVersionExpiration
        * NoncurrentDays
      * NoncurrentVersionTransitions
        * items
          * NoncurrentDays
          * StorageClass
      * Status **required**
      * Transitions
        * items
          * Date
          * Days
          * StorageClass

### GetBucketPolicyRequest
* GetBucketPolicyRequest `object`

### GetBucketPolicyResult
* GetBucketPolicyResult `object`
  * Policy

### GetBucketRequest
* GetBucketRequest `object`

### GetBucketResult
* GetBucketResult `object`
  * Bucket
  * CreationDate
  * PublicAccessBlockEnabled

### GetBucketTaggingRequest
* GetBucketTaggingRequest `object`

### GetBucketTaggingResult
* GetBucketTaggingResult `object`
  * TagSet **required**
    * items [S3Tag](#s3tag)

### GetJobTaggingRequest
* GetJobTaggingRequest `object`

### GetJobTaggingResult
* GetJobTaggingResult `object`
  * Tags
    * items [S3Tag](#s3tag)

### GetPublicAccessBlockOutput
* GetPublicAccessBlockOutput `object`
  * PublicAccessBlockConfiguration
    * BlockPublicAcls
    * BlockPublicPolicy
    * IgnorePublicAcls
    * RestrictPublicBuckets

### GetPublicAccessBlockRequest
* GetPublicAccessBlockRequest `object`

### GetStorageLensConfigurationRequest
* GetStorageLensConfigurationRequest `object`

### GetStorageLensConfigurationResult
* GetStorageLensConfigurationResult `object`
  * StorageLensConfiguration
    * AccountLevel **required**
      * ActivityMetrics
        * IsEnabled
      * BucketLevel **required**
        * ActivityMetrics
          * IsEnabled
        * PrefixLevel
          * StorageMetrics **required**
    * AwsOrg
      * Arn **required**
    * DataExport
      * S3BucketDestination **required**
        * AccountId **required**
        * Arn **required**
        * Encryption
          * SSEKMS
          * SSES3
        * Format **required**
        * OutputSchemaVersion **required**
        * Prefix
    * Exclude
      * Buckets
        * items
      * Regions
        * items
    * Id **required**
    * Include
      * Buckets
        * items
      * Regions
        * items
    * IsEnabled **required**
    * StorageLensArn

### GetStorageLensConfigurationTaggingRequest
* GetStorageLensConfigurationTaggingRequest `object`

### GetStorageLensConfigurationTaggingResult
* GetStorageLensConfigurationTaggingResult `object`
  * Tags
    * items
      * Key **required**
      * Value **required**

### GrantFullControl
* GrantFullControl `string`

### GrantRead
* GrantRead `string`

### GrantReadACP
* GrantReadACP `string`

### GrantWrite
* GrantWrite `string`

### GrantWriteACP
* GrantWriteACP `string`

### IAMRoleArn
* IAMRoleArn `string`

### ID
* ID `string`

### IdempotencyException


### Include
* Include `object`: A container for what Amazon S3 Storage Lens configuration includes.
  * Buckets
    * items
  * Regions
    * items

### InternalServiceException


### InvalidNextTokenException


### InvalidRequestException


### IsEnabled
* IsEnabled `boolean`

### IsPublic
* IsPublic `boolean`

### JobArn
* JobArn `string`

### JobCreationTime
* JobCreationTime `string`

### JobDescriptor
* JobDescriptor `object`: A container element for the job configuration and status information returned by a <code>Describe Job</code> request.
  * ConfirmationRequired
  * CreationTime
  * Description
  * FailureReasons
    * items [JobFailure](#jobfailure)
  * JobArn
  * JobId
  * Manifest
    * Location **required**
      * ETag **required**
      * ObjectArn **required**
      * ObjectVersionId
    * Spec **required**
      * Fields
        * items [JobManifestFieldName](#jobmanifestfieldname)
      * Format **required**
  * Operation
    * LambdaInvoke
      * FunctionArn
    * S3InitiateRestoreObject
      * ExpirationInDays
      * GlacierJobTier
    * S3PutObjectAcl
      * AccessControlPolicy
        * AccessControlList
          * Grants
          * Owner **required**
        * CannedAccessControlList
    * S3PutObjectCopy
      * AccessControlGrants
        * items [S3Grant](#s3grant)
      * CannedAccessControlList
      * MetadataDirective
      * ModifiedSinceConstraint
      * NewObjectMetadata
        * CacheControl
        * ContentDisposition
        * ContentEncoding
        * ContentLanguage
        * ContentLength
        * ContentMD5
        * ContentType
        * HttpExpiresDate
        * RequesterCharged
        * SSEAlgorithm
        * UserMetadata
      * NewObjectTagging
        * items [S3Tag](#s3tag)
      * ObjectLockLegalHoldStatus
      * ObjectLockMode
      * ObjectLockRetainUntilDate
      * RedirectLocation
      * RequesterPays
      * SSEAwsKmsKeyId
      * StorageClass
      * TargetKeyPrefix
      * TargetResource
      * UnModifiedSinceConstraint
    * S3PutObjectLegalHold [S3SetObjectLegalHoldOperation](#s3setobjectlegalholdoperation)
    * S3PutObjectRetention [S3SetObjectRetentionOperation](#s3setobjectretentionoperation)
    * S3PutObjectTagging
      * TagSet
        * items [S3Tag](#s3tag)
  * Priority
  * ProgressSummary
    * NumberOfTasksFailed
    * NumberOfTasksSucceeded
    * TotalNumberOfTasks
  * Report
    * Bucket
    * Enabled **required**
    * Format
    * Prefix
    * ReportScope
  * RoleArn
  * Status
  * StatusUpdateReason
  * SuspendedCause
  * SuspendedDate
  * TerminationDate

### JobFailure
* JobFailure `object`: If this job failed, this element indicates why the job failed.
  * FailureCode
  * FailureReason

### JobFailureCode
* JobFailureCode `string`

### JobFailureList
* JobFailureList `array`
  * items [JobFailure](#jobfailure)

### JobFailureReason
* JobFailureReason `string`

### JobId
* JobId `string`

### JobListDescriptor
* JobListDescriptor `object`: Contains the configuration and status information for a single job retrieved as part of a job list.
  * CreationTime
  * Description
  * JobId
  * Operation
  * Priority
  * ProgressSummary
    * NumberOfTasksFailed
    * NumberOfTasksSucceeded
    * TotalNumberOfTasks
  * Status
  * TerminationDate

### JobListDescriptorList
* JobListDescriptorList `array`
  * items [JobListDescriptor](#joblistdescriptor)

### JobManifest
* JobManifest `object`: Contains the configuration information for a job's manifest.
  * Location **required**
    * ETag **required**
    * ObjectArn **required**
    * ObjectVersionId
  * Spec **required**
    * Fields
      * items [JobManifestFieldName](#jobmanifestfieldname)
    * Format **required**

### JobManifestFieldList
* JobManifestFieldList `array`
  * items [JobManifestFieldName](#jobmanifestfieldname)

### JobManifestFieldName
* JobManifestFieldName `string` (values: Ignore, Bucket, Key, VersionId)

### JobManifestFormat
* JobManifestFormat `string` (values: S3BatchOperations_CSV_20180820, S3InventoryReport_CSV_20161130)

### JobManifestLocation
* JobManifestLocation `object`: Contains the information required to locate a manifest object.
  * ETag **required**
  * ObjectArn **required**
  * ObjectVersionId

### JobManifestSpec
* JobManifestSpec `object`: Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.
  * Fields
    * items [JobManifestFieldName](#jobmanifestfieldname)
  * Format **required**

### JobNumberOfTasksFailed
* JobNumberOfTasksFailed `integer`

### JobNumberOfTasksSucceeded
* JobNumberOfTasksSucceeded `integer`

### JobOperation
* JobOperation `object`: The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * LambdaInvoke
    * FunctionArn
  * S3InitiateRestoreObject
    * ExpirationInDays
    * GlacierJobTier
  * S3PutObjectAcl
    * AccessControlPolicy
      * AccessControlList
        * Grants
          * items [S3Grant](#s3grant)
        * Owner **required**
          * DisplayName
          * ID
      * CannedAccessControlList
  * S3PutObjectCopy
    * AccessControlGrants
      * items [S3Grant](#s3grant)
    * CannedAccessControlList
    * MetadataDirective
    * ModifiedSinceConstraint
    * NewObjectMetadata
      * CacheControl
      * ContentDisposition
      * ContentEncoding
      * ContentLanguage
      * ContentLength
      * ContentMD5
      * ContentType
      * HttpExpiresDate
      * RequesterCharged
      * SSEAlgorithm
      * UserMetadata
    * NewObjectTagging
      * items [S3Tag](#s3tag)
    * ObjectLockLegalHoldStatus
    * ObjectLockMode
    * ObjectLockRetainUntilDate
    * RedirectLocation
    * RequesterPays
    * SSEAwsKmsKeyId
    * StorageClass
    * TargetKeyPrefix
    * TargetResource
    * UnModifiedSinceConstraint
  * S3PutObjectLegalHold [S3SetObjectLegalHoldOperation](#s3setobjectlegalholdoperation)
  * S3PutObjectRetention [S3SetObjectRetentionOperation](#s3setobjectretentionoperation)
  * S3PutObjectTagging
    * TagSet
      * items [S3Tag](#s3tag)

### JobPriority
* JobPriority `integer`

### JobProgressSummary
* JobProgressSummary `object`: Describes the total number of tasks that the specified job has started, the number of tasks that succeeded, and the number of tasks that failed.
  * NumberOfTasksFailed
  * NumberOfTasksSucceeded
  * TotalNumberOfTasks

### JobReport
* JobReport `object`: Contains the configuration parameters for a job-completion report.
  * Bucket
  * Enabled **required**
  * Format
  * Prefix
  * ReportScope

### JobReportFormat
* JobReportFormat `string` (values: Report_CSV_20180820)

### JobReportScope
* JobReportScope `string` (values: AllTasks, FailedTasksOnly)

### JobStatus
* JobStatus `string` (values: Active, Cancelled, Cancelling, Complete, Completing, Failed, Failing, New, Paused, Pausing, Preparing, Ready, Suspended)

### JobStatusException


### JobStatusList
* JobStatusList `array`
  * items [JobStatus](#jobstatus)

### JobStatusUpdateReason
* JobStatusUpdateReason `string`

### JobTerminationDate
* JobTerminationDate `string`

### JobTotalNumberOfTasks
* JobTotalNumberOfTasks `integer`

### KmsKeyArnString
* KmsKeyArnString `string`

### LambdaInvokeOperation
* LambdaInvokeOperation `object`: Contains the configuration parameters for a <code>Lambda Invoke</code> operation.
  * FunctionArn

### LifecycleConfiguration
* LifecycleConfiguration `object`: The container for the Outposts bucket lifecycle configuration.
  * Rules
    * items
      * AbortIncompleteMultipartUpload
        * DaysAfterInitiation
      * Expiration
        * Date
        * Days
        * ExpiredObjectDeleteMarker
      * Filter
        * And
          * Prefix
          * Tags
        * Prefix
        * Tag [S3Tag](#s3tag)
      * ID
      * NoncurrentVersionExpiration
        * NoncurrentDays
      * NoncurrentVersionTransitions
        * items
          * NoncurrentDays
          * StorageClass
      * Status **required**
      * Transitions
        * items
          * Date
          * Days
          * StorageClass

### LifecycleExpiration
* LifecycleExpiration `object`: The container of the Outposts bucket lifecycle expiration.
  * Date
  * Days
  * ExpiredObjectDeleteMarker

### LifecycleRule
* LifecycleRule `object`: The container for the Outposts bucket lifecycle rule.
  * AbortIncompleteMultipartUpload
    * DaysAfterInitiation
  * Expiration
    * Date
    * Days
    * ExpiredObjectDeleteMarker
  * Filter
    * And
      * Prefix
      * Tags
        * items [S3Tag](#s3tag)
    * Prefix
    * Tag [S3Tag](#s3tag)
  * ID
  * NoncurrentVersionExpiration
    * NoncurrentDays
  * NoncurrentVersionTransitions
    * items
      * NoncurrentDays
      * StorageClass
  * Status **required**
  * Transitions
    * items
      * Date
      * Days
      * StorageClass

### LifecycleRuleAndOperator
* LifecycleRuleAndOperator `object`: The container for the Outposts bucket lifecycle rule and operator.
  * Prefix
  * Tags
    * items [S3Tag](#s3tag)

### LifecycleRuleFilter
* LifecycleRuleFilter `object`: The container for the filter of the lifecycle rule.
  * And
    * Prefix
    * Tags
      * items [S3Tag](#s3tag)
  * Prefix
  * Tag [S3Tag](#s3tag)

### LifecycleRules
* LifecycleRules `array`
  * items
    * AbortIncompleteMultipartUpload
      * DaysAfterInitiation
    * Expiration
      * Date
      * Days
      * ExpiredObjectDeleteMarker
    * Filter
      * And
        * Prefix
        * Tags
          * items [S3Tag](#s3tag)
      * Prefix
      * Tag [S3Tag](#s3tag)
    * ID
    * NoncurrentVersionExpiration
      * NoncurrentDays
    * NoncurrentVersionTransitions
      * items
        * NoncurrentDays
        * StorageClass
    * Status **required**
    * Transitions
      * items
        * Date
        * Days
        * StorageClass

### ListAccessPointsRequest
* ListAccessPointsRequest `object`

### ListAccessPointsResult
* ListAccessPointsResult `object`
  * AccessPointList
    * items
      * AccessPointArn
      * Bucket **required**
      * Name **required**
      * NetworkOrigin **required**
      * VpcConfiguration
        * VpcId **required**
  * NextToken

### ListJobsRequest
* ListJobsRequest `object`

### ListJobsResult
* ListJobsResult `object`
  * Jobs
    * items [JobListDescriptor](#joblistdescriptor)
  * NextToken

### ListRegionalBucketsRequest
* ListRegionalBucketsRequest `object`

### ListRegionalBucketsResult
* ListRegionalBucketsResult `object`
  * NextToken
  * RegionalBucketList
    * items
      * Bucket **required**
      * BucketArn
      * CreationDate **required**
      * OutpostId
      * PublicAccessBlockEnabled **required**

### ListStorageLensConfigurationEntry
* ListStorageLensConfigurationEntry `object`: Part of <code>ListStorageLensConfigurationResult</code>. Each entry includes the description of the S3 Storage Lens configuration, its home Region, whether it is enabled, its Amazon Resource Name (ARN), and config ID.
  * HomeRegion **required**
  * Id **required**
  * IsEnabled
  * StorageLensArn **required**

### ListStorageLensConfigurationsRequest
* ListStorageLensConfigurationsRequest `object`

### ListStorageLensConfigurationsResult
* ListStorageLensConfigurationsResult `object`
  * NextToken
  * StorageLensConfigurationList
    * items
      * HomeRegion **required**
      * Id **required**
      * IsEnabled
      * StorageLensArn **required**

### Location
* Location `string`

### MaxLength1024String
* MaxLength1024String `string`

### MaxResults
* MaxResults `integer`

### MinStorageBytesPercentage
* MinStorageBytesPercentage `number`

### NetworkOrigin
* NetworkOrigin `string` (values: Internet, VPC)

### NoSuchPublicAccessBlockConfiguration


### NonEmptyMaxLength1024String
* NonEmptyMaxLength1024String `string`

### NonEmptyMaxLength2048String
* NonEmptyMaxLength2048String `string`

### NonEmptyMaxLength256String
* NonEmptyMaxLength256String `string`

### NonEmptyMaxLength64String
* NonEmptyMaxLength64String `string`

### NoncurrentVersionExpiration
* NoncurrentVersionExpiration `object`: The container of the noncurrent version expiration.
  * NoncurrentDays

### NoncurrentVersionTransition
* NoncurrentVersionTransition `object`: The container for the noncurrent version transition.
  * NoncurrentDays
  * StorageClass

### NoncurrentVersionTransitionList
* NoncurrentVersionTransitionList `array`
  * items
    * NoncurrentDays
    * StorageClass

### NotFoundException


### ObjectLockEnabledForBucket
* ObjectLockEnabledForBucket `boolean`

### OperationName
* OperationName `string` (values: LambdaInvoke, S3PutObjectCopy, S3PutObjectAcl, S3PutObjectTagging, S3InitiateRestoreObject, S3PutObjectLegalHold, S3PutObjectRetention)

### OutputSchemaVersion
* OutputSchemaVersion `string` (values: V_1)

### Policy
* Policy `string`

### PolicyStatus
* PolicyStatus `object`: Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. 
  * IsPublic

### Prefix
* Prefix `string`

### PrefixLevel
* PrefixLevel `object`: A container for the prefix-level configuration.
  * StorageMetrics **required**
    * IsEnabled
    * SelectionCriteria [SelectionCriteria](#selectioncriteria)

### PrefixLevelStorageMetrics
* PrefixLevelStorageMetrics `object`: A container for the prefix-level storage metrics for S3 Storage Lens.
  * IsEnabled
  * SelectionCriteria [SelectionCriteria](#selectioncriteria)

### PublicAccessBlockConfiguration
* PublicAccessBlockConfiguration `object`: <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p>This is not supported for Amazon S3 on Outposts.</p>
  * BlockPublicAcls
  * BlockPublicPolicy
  * IgnorePublicAcls
  * RestrictPublicBuckets

### PublicAccessBlockEnabled
* PublicAccessBlockEnabled `boolean`

### PutAccessPointPolicyRequest
* PutAccessPointPolicyRequest `object`
  * Policy **required**

### PutBucketLifecycleConfigurationRequest
* PutBucketLifecycleConfigurationRequest `object`
  * LifecycleConfiguration
    * Rules
      * items
        * AbortIncompleteMultipartUpload
          * DaysAfterInitiation
        * Expiration
          * Date
          * Days
          * ExpiredObjectDeleteMarker
        * Filter
          * And
          * Prefix
          * Tag [S3Tag](#s3tag)
        * ID
        * NoncurrentVersionExpiration
          * NoncurrentDays
        * NoncurrentVersionTransitions
          * items
        * Status **required**
        * Transitions
          * items

### PutBucketPolicyRequest
* PutBucketPolicyRequest `object`
  * Policy **required**

### PutBucketTaggingRequest
* PutBucketTaggingRequest `object`
  * Tagging **required**
    * TagSet **required**
      * items [S3Tag](#s3tag)

### PutJobTaggingRequest
* PutJobTaggingRequest `object`
  * Tags **required**
    * items [S3Tag](#s3tag)

### PutJobTaggingResult
* PutJobTaggingResult `object`

### PutPublicAccessBlockRequest
* PutPublicAccessBlockRequest `object`
  * PublicAccessBlockConfiguration **required**
    * BlockPublicAcls
    * BlockPublicPolicy
    * IgnorePublicAcls
    * RestrictPublicBuckets

### PutStorageLensConfigurationRequest
* PutStorageLensConfigurationRequest `object`
  * StorageLensConfiguration **required**
    * AccountLevel **required**
      * ActivityMetrics
        * IsEnabled
      * BucketLevel **required**
        * ActivityMetrics
          * IsEnabled
        * PrefixLevel
          * StorageMetrics **required**
    * AwsOrg
      * Arn **required**
    * DataExport
      * S3BucketDestination **required**
        * AccountId **required**
        * Arn **required**
        * Encryption
          * SSEKMS
          * SSES3
        * Format **required**
        * OutputSchemaVersion **required**
        * Prefix
    * Exclude
      * Buckets
        * items
      * Regions
        * items
    * Id **required**
    * Include
      * Buckets
        * items
      * Regions
        * items
    * IsEnabled **required**
    * StorageLensArn
  * Tags
    * items
      * Key **required**
      * Value **required**

### PutStorageLensConfigurationTaggingRequest
* PutStorageLensConfigurationTaggingRequest `object`
  * Tags **required**
    * items
      * Key **required**
      * Value **required**

### PutStorageLensConfigurationTaggingResult
* PutStorageLensConfigurationTaggingResult `object`

### RegionalBucket
* RegionalBucket `object`: The container for the regional bucket.
  * Bucket **required**
  * BucketArn
  * CreationDate **required**
  * OutpostId
  * PublicAccessBlockEnabled **required**

### RegionalBucketList
* RegionalBucketList `array`
  * items
    * Bucket **required**
    * BucketArn
    * CreationDate **required**
    * OutpostId
    * PublicAccessBlockEnabled **required**

### Regions
* Regions `array`
  * items

### ReportPrefixString
* ReportPrefixString `string`

### RequestedJobStatus
* RequestedJobStatus `string` (values: Cancelled, Ready)

### S3AWSRegion
* S3AWSRegion `string`

### S3AccessControlList
* S3AccessControlList `object`: <p/>
  * Grants
    * items [S3Grant](#s3grant)
  * Owner **required**
    * DisplayName
    * ID

### S3AccessControlPolicy
* S3AccessControlPolicy `object`: <p/>
  * AccessControlList
    * Grants
      * items [S3Grant](#s3grant)
    * Owner **required**
      * DisplayName
      * ID
  * CannedAccessControlList

### S3AccessPointArn
* S3AccessPointArn `string`

### S3BucketArnString
* S3BucketArnString `string`

### S3BucketDestination
* S3BucketDestination `object`: A container for the bucket where the Amazon S3 Storage Lens metrics export files are located.
  * AccountId **required**
  * Arn **required**
  * Encryption
    * SSEKMS
      * KeyId **required**
    * SSES3
  * Format **required**
  * OutputSchemaVersion **required**
  * Prefix

### S3CannedAccessControlList
* S3CannedAccessControlList `string` (values: private, public-read, public-read-write, aws-exec-read, authenticated-read, bucket-owner-read, bucket-owner-full-control)

### S3ContentLength
* S3ContentLength `integer`

### S3CopyObjectOperation
* S3CopyObjectOperation `object`: Contains the configuration parameters for a PUT Copy object operation. S3 Batch Operations passes each value through to the underlying PUT Copy object API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>.
  * AccessControlGrants
    * items [S3Grant](#s3grant)
  * CannedAccessControlList
  * MetadataDirective
  * ModifiedSinceConstraint
  * NewObjectMetadata
    * CacheControl
    * ContentDisposition
    * ContentEncoding
    * ContentLanguage
    * ContentLength
    * ContentMD5
    * ContentType
    * HttpExpiresDate
    * RequesterCharged
    * SSEAlgorithm
    * UserMetadata
  * NewObjectTagging
    * items [S3Tag](#s3tag)
  * ObjectLockLegalHoldStatus
  * ObjectLockMode
  * ObjectLockRetainUntilDate
  * RedirectLocation
  * RequesterPays
  * SSEAwsKmsKeyId
  * StorageClass
  * TargetKeyPrefix
  * TargetResource
  * UnModifiedSinceConstraint

### S3ExpirationInDays
* S3ExpirationInDays `integer`

### S3GlacierJobTier
* S3GlacierJobTier `string` (values: BULK, STANDARD)

### S3Grant
* S3Grant `object`: <p/>
  * Grantee
    * DisplayName
    * Identifier
    * TypeIdentifier
  * Permission

### S3GrantList
* S3GrantList `array`
  * items [S3Grant](#s3grant)

### S3Grantee
* S3Grantee `object`: <p/>
  * DisplayName
  * Identifier
  * TypeIdentifier

### S3GranteeTypeIdentifier
* S3GranteeTypeIdentifier `string` (values: id, emailAddress, uri)

### S3InitiateRestoreObjectOperation
* S3InitiateRestoreObjectOperation `object`: Contains the configuration parameters for an Initiate Glacier Restore job. S3 Batch Operations passes each value through to the underlying POST Object restore API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">RestoreObject</a>.
  * ExpirationInDays
  * GlacierJobTier

### S3KeyArnString
* S3KeyArnString `string`

### S3MetadataDirective
* S3MetadataDirective `string` (values: COPY, REPLACE)

### S3ObjectLockLegalHold
* S3ObjectLockLegalHold `object`: Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations job.
  * Status **required**

### S3ObjectLockLegalHoldStatus
* S3ObjectLockLegalHoldStatus `string` (values: OFF, ON)

### S3ObjectLockMode
* S3ObjectLockMode `string` (values: COMPLIANCE, GOVERNANCE)

### S3ObjectLockRetentionMode
* S3ObjectLockRetentionMode `string` (values: COMPLIANCE, GOVERNANCE)

### S3ObjectMetadata
* S3ObjectMetadata `object`: <p/>
  * CacheControl
  * ContentDisposition
  * ContentEncoding
  * ContentLanguage
  * ContentLength
  * ContentMD5
  * ContentType
  * HttpExpiresDate
  * RequesterCharged
  * SSEAlgorithm
  * UserMetadata

### S3ObjectOwner
* S3ObjectOwner `object`: <p/>
  * DisplayName
  * ID

### S3ObjectVersionId
* S3ObjectVersionId `string`

### S3Permission
* S3Permission `string` (values: FULL_CONTROL, READ, WRITE, READ_ACP, WRITE_ACP)

### S3RegionalBucketArn
* S3RegionalBucketArn `string`

### S3Retention
* S3Retention `object`: Contains the S3 Object Lock retention mode to be applied to all objects in the S3 Batch Operations job. If you don't provide <code>Mode</code> and <code>RetainUntilDate</code> data types in your operation, you will remove the retention from your objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * Mode
  * RetainUntilDate

### S3SSEAlgorithm
* S3SSEAlgorithm `string` (values: AES256, KMS)

### S3SetObjectAclOperation
* S3SetObjectAclOperation `object`: Contains the configuration parameters for a Set Object ACL operation. S3 Batch Operations passes each value through to the underlying PUT Object acl API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PUT Object acl</a>.
  * AccessControlPolicy
    * AccessControlList
      * Grants
        * items [S3Grant](#s3grant)
      * Owner **required**
        * DisplayName
        * ID
    * CannedAccessControlList

### S3SetObjectLegalHoldOperation
* S3SetObjectLegalHoldOperation `object`: Contains the configuration for an S3 Object Lock legal hold operation that an S3 Batch Operations job passes each object through to the underlying <code>PutObjectLegalHold</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold with S3 Batch Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * LegalHold **required**
    * Status **required**

### S3SetObjectRetentionOperation
* S3SetObjectRetentionOperation `object`: Contains the configuration parameters for the Object Lock retention action for an S3 Batch Operations job. Batch Operations passes each value through to the underlying <code>PutObjectRetention</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * BypassGovernanceRetention
  * Retention **required**
    * Mode
    * RetainUntilDate

### S3SetObjectTaggingOperation
* S3SetObjectTaggingOperation `object`: Contains the configuration parameters for a Set Object Tagging operation. S3 Batch Operations passes each value through to the underlying PUT Object tagging API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>.
  * TagSet
    * items [S3Tag](#s3tag)

### S3StorageClass
* S3StorageClass `string` (values: STANDARD, STANDARD_IA, ONEZONE_IA, GLACIER, INTELLIGENT_TIERING, DEEP_ARCHIVE)

### S3Tag
* S3Tag `object`: <p/>
  * Key **required**
  * Value **required**

### S3TagSet
* S3TagSet `array`
  * items [S3Tag](#s3tag)

### S3UserMetadata
* S3UserMetadata `object`

### SSEKMS
* SSEKMS `object`: <p/>
  * KeyId **required**

### SSEKMSKeyId
* SSEKMSKeyId `string`

### SSES3
* SSES3 `object`: <p/>

### SelectionCriteria
* SelectionCriteria `object`: <p/>
  * Delimiter
  * MaxDepth
  * MinStorageBytesPercentage

### Setting
* Setting `boolean`

### StorageLensArn
* StorageLensArn `string`

### StorageLensAwsOrg
* StorageLensAwsOrg `object`: The AWS organization for your S3 Storage Lens.
  * Arn **required**

### StorageLensConfiguration
* StorageLensConfiguration `object`: A container for the Amazon S3 Storage Lens configuration.
  * AccountLevel **required**
    * ActivityMetrics
      * IsEnabled
    * BucketLevel **required**
      * ActivityMetrics
        * IsEnabled
      * PrefixLevel
        * StorageMetrics **required**
          * IsEnabled
          * SelectionCriteria [SelectionCriteria](#selectioncriteria)
  * AwsOrg
    * Arn **required**
  * DataExport
    * S3BucketDestination **required**
      * AccountId **required**
      * Arn **required**
      * Encryption
        * SSEKMS
          * KeyId **required**
        * SSES3
      * Format **required**
      * OutputSchemaVersion **required**
      * Prefix
  * Exclude
    * Buckets
      * items
    * Regions
      * items
  * Id **required**
  * Include
    * Buckets
      * items
    * Regions
      * items
  * IsEnabled **required**
  * StorageLensArn

### StorageLensConfigurationList
* StorageLensConfigurationList `array`
  * items
    * HomeRegion **required**
    * Id **required**
    * IsEnabled
    * StorageLensArn **required**

### StorageLensDataExport
* StorageLensDataExport `object`: A container to specify the properties of your S3 Storage Lens metrics export, including the destination, schema, and format.
  * S3BucketDestination **required**
    * AccountId **required**
    * Arn **required**
    * Encryption
      * SSEKMS
        * KeyId **required**
      * SSES3
    * Format **required**
    * OutputSchemaVersion **required**
    * Prefix

### StorageLensDataExportEncryption
* StorageLensDataExportEncryption `object`: A container for the encryption of the S3 Storage Lens metrics exports.
  * SSEKMS
    * KeyId **required**
  * SSES3

### StorageLensPrefixLevelDelimiter
* StorageLensPrefixLevelDelimiter `string`

### StorageLensPrefixLevelMaxDepth
* StorageLensPrefixLevelMaxDepth `integer`

### StorageLensTag
* StorageLensTag `object`: <p/>
  * Key **required**
  * Value **required**

### StorageLensTags
* StorageLensTags `array`
  * items
    * Key **required**
    * Value **required**

### StringForNextToken
* StringForNextToken `string`

### SuspendedCause
* SuspendedCause `string`

### SuspendedDate
* SuspendedDate `string`

### TagKeyString
* TagKeyString `string`

### TagValueString
* TagValueString `string`

### Tagging
* Tagging `object`: <p/>
  * TagSet **required**
    * items [S3Tag](#s3tag)

### TimeStamp
* TimeStamp `string`

### TooManyRequestsException


### TooManyTagsException


### Transition
* Transition `object`: Specifies when an object transitions to a specified storage class. For more information about Amazon S3 Lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html"> Transitioning objects using Amazon S3 Lifecycle</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * Date
  * Days
  * StorageClass

### TransitionList
* TransitionList `array`
  * items
    * Date
    * Days
    * StorageClass

### TransitionStorageClass
* TransitionStorageClass `string` (values: GLACIER, STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING, DEEP_ARCHIVE)

### UpdateJobPriorityRequest
* UpdateJobPriorityRequest `object`

### UpdateJobPriorityResult
* UpdateJobPriorityResult `object`
  * JobId **required**
  * Priority **required**

### UpdateJobStatusRequest
* UpdateJobStatusRequest `object`

### UpdateJobStatusResult
* UpdateJobStatusResult `object`
  * JobId
  * Status
  * StatusUpdateReason

### VpcConfiguration
* VpcConfiguration `object`: The virtual private cloud (VPC) configuration for an access point.
  * VpcId **required**

### VpcId
* VpcId `string`


