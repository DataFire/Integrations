# @datafire/amazonaws_s3

Client library for Amazon Simple Storage Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_s3
```
```js
let amazonaws_s3 = require('@datafire/amazonaws_s3').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_s3.ListBuckets({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### ListBuckets



```js
amazonaws_s3.ListBuckets({}, context)
```

#### Input
* input `object`

#### Output
* output [ListBucketsOutput](#listbucketsoutput)

### DeleteBucket



```js
amazonaws_s3.DeleteBucket({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
*Output schema unknown*

### HeadBucket



```js
amazonaws_s3.HeadBucket({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
*Output schema unknown*

### ListObjects



```js
amazonaws_s3.ListObjects({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * MaxKeys `string`
  * Marker `string`
  * Bucket **required** `string`

#### Output
* output [ListObjectsOutput](#listobjectsoutput)

### DeleteObject



```js
amazonaws_s3.DeleteObject({
  "Bucket": "",
  "Key": []
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `array`

#### Output
* output [DeleteObjectOutput](#deleteobjectoutput)

### GetObject



```js
amazonaws_s3.GetObject({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`

#### Output
* output [GetObjectOutput](#getobjectoutput)

### HeadObject



```js
amazonaws_s3.HeadObject({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`

#### Output
* output [HeadObjectOutput](#headobjectoutput)

### ListParts



```js
amazonaws_s3.ListParts({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * MaxParts `string`
  * PartNumberMarker `string`
  * Bucket **required** `string`
  * Key **required** `string`

#### Output
* output [ListPartsOutput](#listpartsoutput)

### PutObject



```js
amazonaws_s3.PutObject({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * Body [Body](#body)

#### Output
* output [PutObjectOutput](#putobjectoutput)

### UploadPart



```js
amazonaws_s3.UploadPart({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * Body [Body](#body)

#### Output
* output [UploadPartOutput](#uploadpartoutput)

### UploadPartCopy



```js
amazonaws_s3.UploadPartCopy({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`

#### Output
* output [UploadPartCopyOutput](#uploadpartcopyoutput)

### GetObjectAcl



```js
amazonaws_s3.GetObjectAcl({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`

#### Output
* output [GetObjectAclOutput](#getobjectacloutput)

### PutObjectAcl



```js
amazonaws_s3.PutObjectAcl({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * AccessControlPolicy [AccessControlPolicy](#accesscontrolpolicy)

#### Output
* output [PutObjectAclOutput](#putobjectacloutput)

### RestoreObject



```js
amazonaws_s3.RestoreObject({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * RestoreRequest [RestoreRequest](#restorerequest)

#### Output
* output [RestoreObjectOutput](#restoreobjectoutput)

### DeleteObjectTagging



```js
amazonaws_s3.DeleteObjectTagging({
  "Bucket": "",
  "Key": []
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `array`

#### Output
* output [DeleteObjectTaggingOutput](#deleteobjecttaggingoutput)

### GetObjectTagging



```js
amazonaws_s3.GetObjectTagging({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`

#### Output
* output [GetObjectTaggingOutput](#getobjecttaggingoutput)

### PutObjectTagging



```js
amazonaws_s3.PutObjectTagging({
  "Bucket": "",
  "Key": "",
  "Tagging": {
    "TagSet": []
  }
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * Tagging **required** [Tagging](#tagging)

#### Output
* output [PutObjectTaggingOutput](#putobjecttaggingoutput)

### GetObjectTorrent



```js
amazonaws_s3.GetObjectTorrent({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`

#### Output
* output [GetObjectTorrentOutput](#getobjecttorrentoutput)

### CreateMultipartUpload



```js
amazonaws_s3.CreateMultipartUpload({
  "Bucket": "",
  "Key": []
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `array`

#### Output
* output [CreateMultipartUploadOutput](#createmultipartuploadoutput)

### GetBucketAccelerateConfiguration



```js
amazonaws_s3.GetBucketAccelerateConfiguration({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketAccelerateConfigurationOutput](#getbucketaccelerateconfigurationoutput)

### PutBucketAccelerateConfiguration



```js
amazonaws_s3.PutBucketAccelerateConfiguration({
  "Bucket": "",
  "AccelerateConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * AccelerateConfiguration **required** [AccelerateConfiguration](#accelerateconfiguration)

#### Output
*Output schema unknown*

### GetBucketAcl



```js
amazonaws_s3.GetBucketAcl({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketAclOutput](#getbucketacloutput)

### PutBucketAcl



```js
amazonaws_s3.PutBucketAcl({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * AccessControlPolicy [AccessControlPolicy](#accesscontrolpolicy)

#### Output
*Output schema unknown*

### GetBucketAnalyticsConfiguration



```js
amazonaws_s3.GetBucketAnalyticsConfiguration({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketAnalyticsConfigurationOutput](#getbucketanalyticsconfigurationoutput)

### ListBucketAnalyticsConfigurations



```js
amazonaws_s3.ListBucketAnalyticsConfigurations({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [ListBucketAnalyticsConfigurationsOutput](#listbucketanalyticsconfigurationsoutput)

### PutBucketAnalyticsConfiguration



```js
amazonaws_s3.PutBucketAnalyticsConfiguration({
  "Bucket": "",
  "AnalyticsConfiguration": {
    "Id": "",
    "StorageClassAnalysis": {}
  }
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * AnalyticsConfiguration **required** [AnalyticsConfiguration](#analyticsconfiguration)

#### Output
*Output schema unknown*

### GetBucketCors



```js
amazonaws_s3.GetBucketCors({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketCorsOutput](#getbucketcorsoutput)

### PutBucketCors



```js
amazonaws_s3.PutBucketCors({
  "Bucket": "",
  "CORSConfiguration": {
    "CORSRules": []
  }
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * CORSConfiguration **required** [CORSConfiguration](#corsconfiguration)

#### Output
*Output schema unknown*

### DeleteObjects



```js
amazonaws_s3.DeleteObjects({
  "Bucket": "",
  "Delete": {
    "Objects": []
  }
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Delete **required** [Delete](#delete)

#### Output
* output [DeleteObjectsOutput](#deleteobjectsoutput)

### GetBucketEncryption



```js
amazonaws_s3.GetBucketEncryption({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketEncryptionOutput](#getbucketencryptionoutput)

### PutBucketEncryption



```js
amazonaws_s3.PutBucketEncryption({
  "Bucket": "",
  "ServerSideEncryptionConfiguration": {
    "Rules": []
  }
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * ServerSideEncryptionConfiguration **required** [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)

#### Output
*Output schema unknown*

### GetBucketInventoryConfiguration



```js
amazonaws_s3.GetBucketInventoryConfiguration({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketInventoryConfigurationOutput](#getbucketinventoryconfigurationoutput)

### ListBucketInventoryConfigurations



```js
amazonaws_s3.ListBucketInventoryConfigurations({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [ListBucketInventoryConfigurationsOutput](#listbucketinventoryconfigurationsoutput)

### PutBucketInventoryConfiguration



```js
amazonaws_s3.PutBucketInventoryConfiguration({
  "Bucket": "",
  "InventoryConfiguration": {
    "Destination": {
      "S3BucketDestination": {
        "Bucket": "",
        "Format": ""
      }
    },
    "IsEnabled": true,
    "Id": "",
    "IncludedObjectVersions": "",
    "Schedule": {
      "Frequency": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * InventoryConfiguration **required** [InventoryConfiguration](#inventoryconfiguration)

#### Output
*Output schema unknown*

### GetBucketLifecycle



```js
amazonaws_s3.GetBucketLifecycle({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketLifecycleOutput](#getbucketlifecycleoutput)

### GetBucketLifecycleConfiguration



```js
amazonaws_s3.GetBucketLifecycleConfiguration({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketLifecycleConfigurationOutput](#getbucketlifecycleconfigurationoutput)

### PutBucketLifecycle



```js
amazonaws_s3.PutBucketLifecycle({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * LifecycleConfiguration [LifecycleConfiguration](#lifecycleconfiguration)

#### Output
*Output schema unknown*

### PutBucketLifecycleConfiguration



```js
amazonaws_s3.PutBucketLifecycleConfiguration({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * LifecycleConfiguration [BucketLifecycleConfiguration](#bucketlifecycleconfiguration)

#### Output
*Output schema unknown*

### ListObjectsV2



```js
amazonaws_s3.ListObjectsV2({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * MaxKeys `string`
  * ContinuationToken `string`
  * Bucket **required** `string`

#### Output
* output [ListObjectsV2Output](#listobjectsv2output)

### GetBucketLocation



```js
amazonaws_s3.GetBucketLocation({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketLocationOutput](#getbucketlocationoutput)

### GetBucketLogging



```js
amazonaws_s3.GetBucketLogging({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketLoggingOutput](#getbucketloggingoutput)

### PutBucketLogging



```js
amazonaws_s3.PutBucketLogging({
  "Bucket": "",
  "BucketLoggingStatus": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * BucketLoggingStatus **required** [BucketLoggingStatus](#bucketloggingstatus)

#### Output
*Output schema unknown*

### DeleteBucketMetricsConfiguration



```js
amazonaws_s3.DeleteBucketMetricsConfiguration({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
*Output schema unknown*

### GetBucketMetricsConfiguration



```js
amazonaws_s3.GetBucketMetricsConfiguration({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketMetricsConfigurationOutput](#getbucketmetricsconfigurationoutput)

### ListBucketMetricsConfigurations



```js
amazonaws_s3.ListBucketMetricsConfigurations({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [ListBucketMetricsConfigurationsOutput](#listbucketmetricsconfigurationsoutput)

### PutBucketMetricsConfiguration



```js
amazonaws_s3.PutBucketMetricsConfiguration({
  "Bucket": "",
  "MetricsConfiguration": {
    "Id": ""
  }
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * MetricsConfiguration **required** [MetricsConfiguration](#metricsconfiguration)

#### Output
*Output schema unknown*

### GetBucketNotification



```js
amazonaws_s3.GetBucketNotification({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [NotificationConfigurationDeprecated](#notificationconfigurationdeprecated)

### GetBucketNotificationConfiguration



```js
amazonaws_s3.GetBucketNotificationConfiguration({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [NotificationConfiguration](#notificationconfiguration)

### PutBucketNotification



```js
amazonaws_s3.PutBucketNotification({
  "Bucket": "",
  "NotificationConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * NotificationConfiguration **required** [NotificationConfigurationDeprecated](#notificationconfigurationdeprecated)

#### Output
*Output schema unknown*

### PutBucketNotificationConfiguration



```js
amazonaws_s3.PutBucketNotificationConfiguration({
  "Bucket": "",
  "NotificationConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * NotificationConfiguration **required** [NotificationConfiguration](#notificationconfiguration)

#### Output
*Output schema unknown*

### DeleteBucketPolicy



```js
amazonaws_s3.DeleteBucketPolicy({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
*Output schema unknown*

### GetBucketPolicy



```js
amazonaws_s3.GetBucketPolicy({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketPolicyOutput](#getbucketpolicyoutput)

### PutBucketPolicy



```js
amazonaws_s3.PutBucketPolicy({
  "Bucket": "",
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Policy **required** [Policy](#policy)

#### Output
*Output schema unknown*

### DeleteBucketReplication



```js
amazonaws_s3.DeleteBucketReplication({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
*Output schema unknown*

### GetBucketReplication



```js
amazonaws_s3.GetBucketReplication({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketReplicationOutput](#getbucketreplicationoutput)

### PutBucketReplication



```js
amazonaws_s3.PutBucketReplication({
  "Bucket": "",
  "ReplicationConfiguration": {
    "Role": "",
    "Rules": []
  }
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * ReplicationConfiguration **required** [ReplicationConfiguration](#replicationconfiguration)

#### Output
*Output schema unknown*

### GetBucketRequestPayment



```js
amazonaws_s3.GetBucketRequestPayment({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketRequestPaymentOutput](#getbucketrequestpaymentoutput)

### PutBucketRequestPayment



```js
amazonaws_s3.PutBucketRequestPayment({
  "Bucket": "",
  "RequestPaymentConfiguration": {
    "Payer": ""
  }
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * RequestPaymentConfiguration **required** [RequestPaymentConfiguration](#requestpaymentconfiguration)

#### Output
*Output schema unknown*

### DeleteBucketTagging



```js
amazonaws_s3.DeleteBucketTagging({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
*Output schema unknown*

### GetBucketTagging



```js
amazonaws_s3.GetBucketTagging({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketTaggingOutput](#getbuckettaggingoutput)

### PutBucketTagging



```js
amazonaws_s3.PutBucketTagging({
  "Bucket": "",
  "Tagging": {
    "TagSet": []
  }
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Tagging **required** [Tagging](#tagging)

#### Output
*Output schema unknown*

### ListMultipartUploads



```js
amazonaws_s3.ListMultipartUploads({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * MaxUploads `string`
  * KeyMarker `string`
  * UploadIdMarker `string`
  * Bucket **required** `string`

#### Output
* output [ListMultipartUploadsOutput](#listmultipartuploadsoutput)

### GetBucketVersioning



```js
amazonaws_s3.GetBucketVersioning({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketVersioningOutput](#getbucketversioningoutput)

### PutBucketVersioning



```js
amazonaws_s3.PutBucketVersioning({
  "Bucket": "",
  "VersioningConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * VersioningConfiguration **required** [VersioningConfiguration](#versioningconfiguration)

#### Output
*Output schema unknown*

### ListObjectVersions



```js
amazonaws_s3.ListObjectVersions({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * MaxKeys `string`
  * KeyMarker `string`
  * VersionIdMarker `string`
  * Bucket **required** `string`

#### Output
* output [ListObjectVersionsOutput](#listobjectversionsoutput)

### DeleteBucketWebsite



```js
amazonaws_s3.DeleteBucketWebsite({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
*Output schema unknown*

### GetBucketWebsite



```js
amazonaws_s3.GetBucketWebsite({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`

#### Output
* output [GetBucketWebsiteOutput](#getbucketwebsiteoutput)

### PutBucketWebsite



```js
amazonaws_s3.PutBucketWebsite({
  "Bucket": "",
  "WebsiteConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * WebsiteConfiguration **required** [WebsiteConfiguration](#websiteconfiguration)

#### Output
*Output schema unknown*



## Definitions

### AbortDate
* AbortDate `string`

### AbortIncompleteMultipartUpload
* AbortIncompleteMultipartUpload `object`: Specifies the days since the initiation of an Incomplete Multipart Upload that Lifecycle will wait before permanently removing all parts of the upload.
  * DaysAfterInitiation [DaysAfterInitiation](#daysafterinitiation)

### AbortMultipartUploadOutput
* AbortMultipartUploadOutput `object`

### AbortMultipartUploadRequest
* AbortMultipartUploadRequest `object`

### AbortRuleId
* AbortRuleId `string`

### AccelerateConfiguration
* AccelerateConfiguration `object`
  * Status [BucketAccelerateStatus](#bucketacceleratestatus)

### AcceptRanges
* AcceptRanges `string`

### AccessControlPolicy
* AccessControlPolicy `object`
  * Grants [Grants](#grants)
  * Owner [Owner](#owner)

### AccessControlTranslation
* AccessControlTranslation `object`: Container for information regarding the access control for replicas.
  * Owner **required** [OwnerOverride](#owneroverride)

### AccountId
* AccountId `string`

### AllowedHeader
* AllowedHeader `string`

### AllowedHeaders
* AllowedHeaders `array`
  * items [AllowedHeader](#allowedheader)

### AllowedMethod
* AllowedMethod `string`

### AllowedMethods
* AllowedMethods `array`
  * items [AllowedMethod](#allowedmethod)

### AllowedOrigin
* AllowedOrigin `string`

### AllowedOrigins
* AllowedOrigins `array`
  * items [AllowedOrigin](#allowedorigin)

### AnalyticsAndOperator
* AnalyticsAndOperator `object`
  * Prefix [Prefix](#prefix)
  * Tags [TagSet](#tagset)

### AnalyticsConfiguration
* AnalyticsConfiguration `object`
  * Filter [AnalyticsFilter](#analyticsfilter)
  * Id **required** [AnalyticsId](#analyticsid)
  * StorageClassAnalysis **required** [StorageClassAnalysis](#storageclassanalysis)

### AnalyticsConfigurationList
* AnalyticsConfigurationList `array`
  * items [AnalyticsConfiguration](#analyticsconfiguration)

### AnalyticsExportDestination
* AnalyticsExportDestination `object`
  * S3BucketDestination **required** [AnalyticsS3BucketDestination](#analyticss3bucketdestination)

### AnalyticsFilter
* AnalyticsFilter `object`
  * And [AnalyticsAndOperator](#analyticsandoperator)
  * Prefix [Prefix](#prefix)
  * Tag [Tag](#tag)

### AnalyticsId
* AnalyticsId `string`

### AnalyticsS3BucketDestination
* AnalyticsS3BucketDestination `object`
  * Bucket **required** [BucketName](#bucketname)
  * BucketAccountId [AccountId](#accountid)
  * Format **required** [AnalyticsS3ExportFileFormat](#analyticss3exportfileformat)
  * Prefix [Prefix](#prefix)

### AnalyticsS3ExportFileFormat
* AnalyticsS3ExportFileFormat `string` (values: CSV)

### Body
* Body `string`

### Bucket
* Bucket `object`
  * CreationDate [CreationDate](#creationdate)
  * Name [BucketName](#bucketname)

### BucketAccelerateStatus
* BucketAccelerateStatus `string` (values: Enabled, Suspended)

### BucketAlreadyExists
* BucketAlreadyExists `object`: The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.

### BucketAlreadyOwnedByYou
* BucketAlreadyOwnedByYou `object`

### BucketCannedACL
* BucketCannedACL `string` (values: private, public-read, public-read-write, authenticated-read)

### BucketLifecycleConfiguration
* BucketLifecycleConfiguration `object`
  * Rules **required** [LifecycleRules](#lifecyclerules)

### BucketLocationConstraint
* BucketLocationConstraint `string` (values: EU, eu-west-1, us-west-1, us-west-2, ap-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, sa-east-1, cn-north-1, eu-central-1)

### BucketLoggingStatus
* BucketLoggingStatus `object`
  * LoggingEnabled [LoggingEnabled](#loggingenabled)

### BucketLogsPermission
* BucketLogsPermission `string` (values: FULL_CONTROL, READ, WRITE)

### BucketName
* BucketName `string`

### BucketVersioningStatus
* BucketVersioningStatus `string` (values: Enabled, Suspended)

### Buckets
* Buckets `array`
  * items [Bucket](#bucket)

### CORSConfiguration
* CORSConfiguration `object`
  * CORSRules **required** [CORSRules](#corsrules)

### CORSRule
* CORSRule `object`
  * AllowedHeaders [AllowedHeaders](#allowedheaders)
  * AllowedMethods **required** [AllowedMethods](#allowedmethods)
  * AllowedOrigins **required** [AllowedOrigins](#allowedorigins)
  * ExposeHeaders [ExposeHeaders](#exposeheaders)
  * MaxAgeSeconds [MaxAgeSeconds](#maxageseconds)

### CORSRules
* CORSRules `array`
  * items [CORSRule](#corsrule)

### CacheControl
* CacheControl `string`

### CloudFunction
* CloudFunction `string`

### CloudFunctionConfiguration
* CloudFunctionConfiguration `object`
  * CloudFunction [CloudFunction](#cloudfunction)
  * Event [Event](#event)
  * Events [EventList](#eventlist)
  * Id [NotificationId](#notificationid)
  * InvocationRole [CloudFunctionInvocationRole](#cloudfunctioninvocationrole)

### CloudFunctionInvocationRole
* CloudFunctionInvocationRole `string`

### Code
* Code `string`

### CommonPrefix
* CommonPrefix `object`
  * Prefix [Prefix](#prefix)

### CommonPrefixList
* CommonPrefixList `array`
  * items [CommonPrefix](#commonprefix)

### CompleteMultipartUploadOutput
* CompleteMultipartUploadOutput `object`
  * Bucket [BucketName](#bucketname)
  * ETag [ETag](#etag)
  * Key [ObjectKey](#objectkey)
  * Location [Location](#location)

### CompleteMultipartUploadRequest
* CompleteMultipartUploadRequest `object`
  * MultipartUpload [CompletedMultipartUpload](#completedmultipartupload)

### CompletedMultipartUpload
* CompletedMultipartUpload `object`
  * Parts [CompletedPartList](#completedpartlist)

### CompletedPart
* CompletedPart `object`
  * ETag [ETag](#etag)
  * PartNumber [PartNumber](#partnumber)

### CompletedPartList
* CompletedPartList `array`
  * items [CompletedPart](#completedpart)

### Condition
* Condition `object`
  * HttpErrorCodeReturnedEquals [HttpErrorCodeReturnedEquals](#httperrorcodereturnedequals)
  * KeyPrefixEquals [KeyPrefixEquals](#keyprefixequals)

### ConfirmRemoveSelfBucketAccess
* ConfirmRemoveSelfBucketAccess `boolean`

### ContentDisposition
* ContentDisposition `string`

### ContentEncoding
* ContentEncoding `string`

### ContentLanguage
* ContentLanguage `string`

### ContentLength
* ContentLength `integer`

### ContentMD5
* ContentMD5 `string`

### ContentRange
* ContentRange `string`

### ContentType
* ContentType `string`

### CopyObjectOutput
* CopyObjectOutput `object`
  * CopyObjectResult [CopyObjectResult](#copyobjectresult)

### CopyObjectRequest
* CopyObjectRequest `object`

### CopyObjectResult
* CopyObjectResult `object`
  * ETag [ETag](#etag)
  * LastModified [LastModified](#lastmodified)

### CopyPartResult
* CopyPartResult `object`
  * ETag [ETag](#etag)
  * LastModified [LastModified](#lastmodified)

### CopySource
* CopySource `string`

### CopySourceIfMatch
* CopySourceIfMatch `string`

### CopySourceIfModifiedSince
* CopySourceIfModifiedSince `string`

### CopySourceIfNoneMatch
* CopySourceIfNoneMatch `string`

### CopySourceIfUnmodifiedSince
* CopySourceIfUnmodifiedSince `string`

### CopySourceRange
* CopySourceRange `string`

### CopySourceSSECustomerAlgorithm
* CopySourceSSECustomerAlgorithm `string`

### CopySourceSSECustomerKey
* CopySourceSSECustomerKey `string`

### CopySourceSSECustomerKeyMD5
* CopySourceSSECustomerKeyMD5 `string`

### CopySourceVersionId
* CopySourceVersionId `string`

### CreateBucketConfiguration
* CreateBucketConfiguration `object`
  * LocationConstraint [BucketLocationConstraint](#bucketlocationconstraint)

### CreateBucketOutput
* CreateBucketOutput `object`

### CreateBucketRequest
* CreateBucketRequest `object`
  * CreateBucketConfiguration [CreateBucketConfiguration](#createbucketconfiguration)

### CreateMultipartUploadOutput
* CreateMultipartUploadOutput `object`
  * Bucket [BucketName](#bucketname)
  * Key [ObjectKey](#objectkey)
  * UploadId [MultipartUploadId](#multipartuploadid)

### CreateMultipartUploadRequest
* CreateMultipartUploadRequest `object`

### CreationDate
* CreationDate `string`

### Date
* Date `string`

### Days
* Days `integer`

### DaysAfterInitiation
* DaysAfterInitiation `integer`

### Delete
* Delete `object`
  * Objects **required** [ObjectIdentifierList](#objectidentifierlist)
  * Quiet [Quiet](#quiet)

### DeleteBucketAnalyticsConfigurationRequest
* DeleteBucketAnalyticsConfigurationRequest `object`

### DeleteBucketCorsRequest
* DeleteBucketCorsRequest `object`

### DeleteBucketEncryptionRequest
* DeleteBucketEncryptionRequest `object`

### DeleteBucketInventoryConfigurationRequest
* DeleteBucketInventoryConfigurationRequest `object`

### DeleteBucketLifecycleRequest
* DeleteBucketLifecycleRequest `object`

### DeleteBucketMetricsConfigurationRequest
* DeleteBucketMetricsConfigurationRequest `object`

### DeleteBucketPolicyRequest
* DeleteBucketPolicyRequest `object`

### DeleteBucketReplicationRequest
* DeleteBucketReplicationRequest `object`

### DeleteBucketRequest
* DeleteBucketRequest `object`

### DeleteBucketTaggingRequest
* DeleteBucketTaggingRequest `object`

### DeleteBucketWebsiteRequest
* DeleteBucketWebsiteRequest `object`

### DeleteMarker
* DeleteMarker `boolean`

### DeleteMarkerEntry
* DeleteMarkerEntry `object`
  * IsLatest [IsLatest](#islatest)
  * Key [ObjectKey](#objectkey)
  * LastModified [LastModified](#lastmodified)
  * Owner [Owner](#owner)
  * VersionId [ObjectVersionId](#objectversionid)

### DeleteMarkerVersionId
* DeleteMarkerVersionId `string`

### DeleteMarkers
* DeleteMarkers `array`
  * items [DeleteMarkerEntry](#deletemarkerentry)

### DeleteObjectOutput
* DeleteObjectOutput `object`

### DeleteObjectRequest
* DeleteObjectRequest `object`

### DeleteObjectTaggingOutput
* DeleteObjectTaggingOutput `object`

### DeleteObjectTaggingRequest
* DeleteObjectTaggingRequest `object`

### DeleteObjectsOutput
* DeleteObjectsOutput `object`
  * Deleted [DeletedObjects](#deletedobjects)
  * Errors [Errors](#errors)

### DeleteObjectsRequest
* DeleteObjectsRequest `object`
  * Delete **required** [Delete](#delete)

### DeletedObject
* DeletedObject `object`
  * DeleteMarker [DeleteMarker](#deletemarker)
  * DeleteMarkerVersionId [DeleteMarkerVersionId](#deletemarkerversionid)
  * Key [ObjectKey](#objectkey)
  * VersionId [ObjectVersionId](#objectversionid)

### DeletedObjects
* DeletedObjects `array`
  * items [DeletedObject](#deletedobject)

### Delimiter
* Delimiter `string`

### Destination
* Destination `object`: Container for replication destination information.
  * AccessControlTranslation [AccessControlTranslation](#accesscontroltranslation)
  * Account [AccountId](#accountid)
  * Bucket **required** [BucketName](#bucketname)
  * EncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * StorageClass [StorageClass](#storageclass)

### DisplayName
* DisplayName `string`

### ETag
* ETag `string`

### EmailAddress
* EmailAddress `string`

### EncodingType
* EncodingType `string` (values: url): Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response.

### EncryptionConfiguration
* EncryptionConfiguration `object`: Container for information regarding encryption based configuration for replicas.
  * ReplicaKmsKeyID [ReplicaKmsKeyID](#replicakmskeyid)

### Error
* Error `object`
  * Code [Code](#code)
  * Key [ObjectKey](#objectkey)
  * Message [Message](#message)
  * VersionId [ObjectVersionId](#objectversionid)

### ErrorDocument
* ErrorDocument `object`
  * Key **required** [ObjectKey](#objectkey)

### Errors
* Errors `array`
  * items [Error](#error)

### Event
* Event `string` (values: s3:ReducedRedundancyLostObject, s3:ObjectCreated:*, s3:ObjectCreated:Put, s3:ObjectCreated:Post, s3:ObjectCreated:Copy, s3:ObjectCreated:CompleteMultipartUpload, s3:ObjectRemoved:*, s3:ObjectRemoved:Delete, s3:ObjectRemoved:DeleteMarkerCreated): Bucket event for which to send notifications.

### EventList
* EventList `array`
  * items [Event](#event)

### Expiration
* Expiration `string`

### ExpirationStatus
* ExpirationStatus `string` (values: Enabled, Disabled)

### ExpiredObjectDeleteMarker
* ExpiredObjectDeleteMarker `boolean`

### Expires
* Expires `string`

### ExposeHeader
* ExposeHeader `string`

### ExposeHeaders
* ExposeHeaders `array`
  * items [ExposeHeader](#exposeheader)

### FetchOwner
* FetchOwner `boolean`

### FilterRule
* FilterRule `object`: Container for key value pair that defines the criteria for the filter rule.
  * Name [FilterRuleName](#filterrulename)
  * Value [FilterRuleValue](#filterrulevalue)

### FilterRuleList
* FilterRuleList `array`: A list of containers for key value pair that defines the criteria for the filter rule.
  * items [FilterRule](#filterrule)

### FilterRuleName
* FilterRuleName `string` (values: prefix, suffix)

### FilterRuleValue
* FilterRuleValue `string`

### GetBucketAccelerateConfigurationOutput
* GetBucketAccelerateConfigurationOutput `object`
  * Status [BucketAccelerateStatus](#bucketacceleratestatus)

### GetBucketAccelerateConfigurationRequest
* GetBucketAccelerateConfigurationRequest `object`

### GetBucketAclOutput
* GetBucketAclOutput `object`
  * Grants [Grants](#grants)
  * Owner [Owner](#owner)

### GetBucketAclRequest
* GetBucketAclRequest `object`

### GetBucketAnalyticsConfigurationOutput
* GetBucketAnalyticsConfigurationOutput `object`
  * AnalyticsConfiguration [AnalyticsConfiguration](#analyticsconfiguration)

### GetBucketAnalyticsConfigurationRequest
* GetBucketAnalyticsConfigurationRequest `object`

### GetBucketCorsOutput
* GetBucketCorsOutput `object`
  * CORSRules [CORSRules](#corsrules)

### GetBucketCorsRequest
* GetBucketCorsRequest `object`

### GetBucketEncryptionOutput
* GetBucketEncryptionOutput `object`
  * ServerSideEncryptionConfiguration [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)

### GetBucketEncryptionRequest
* GetBucketEncryptionRequest `object`

### GetBucketInventoryConfigurationOutput
* GetBucketInventoryConfigurationOutput `object`
  * InventoryConfiguration [InventoryConfiguration](#inventoryconfiguration)

### GetBucketInventoryConfigurationRequest
* GetBucketInventoryConfigurationRequest `object`

### GetBucketLifecycleConfigurationOutput
* GetBucketLifecycleConfigurationOutput `object`
  * Rules [LifecycleRules](#lifecyclerules)

### GetBucketLifecycleConfigurationRequest
* GetBucketLifecycleConfigurationRequest `object`

### GetBucketLifecycleOutput
* GetBucketLifecycleOutput `object`
  * Rules [Rules](#rules)

### GetBucketLifecycleRequest
* GetBucketLifecycleRequest `object`

### GetBucketLocationOutput
* GetBucketLocationOutput `object`
  * LocationConstraint [BucketLocationConstraint](#bucketlocationconstraint)

### GetBucketLocationRequest
* GetBucketLocationRequest `object`

### GetBucketLoggingOutput
* GetBucketLoggingOutput `object`
  * LoggingEnabled [LoggingEnabled](#loggingenabled)

### GetBucketLoggingRequest
* GetBucketLoggingRequest `object`

### GetBucketMetricsConfigurationOutput
* GetBucketMetricsConfigurationOutput `object`
  * MetricsConfiguration [MetricsConfiguration](#metricsconfiguration)

### GetBucketMetricsConfigurationRequest
* GetBucketMetricsConfigurationRequest `object`

### GetBucketNotificationConfigurationRequest
* GetBucketNotificationConfigurationRequest `object`

### GetBucketPolicyOutput
* GetBucketPolicyOutput `object`
  * Policy [Policy](#policy)

### GetBucketPolicyRequest
* GetBucketPolicyRequest `object`

### GetBucketReplicationOutput
* GetBucketReplicationOutput `object`
  * ReplicationConfiguration [ReplicationConfiguration](#replicationconfiguration)

### GetBucketReplicationRequest
* GetBucketReplicationRequest `object`

### GetBucketRequestPaymentOutput
* GetBucketRequestPaymentOutput `object`
  * Payer [Payer](#payer)

### GetBucketRequestPaymentRequest
* GetBucketRequestPaymentRequest `object`

### GetBucketTaggingOutput
* GetBucketTaggingOutput `object`
  * TagSet **required** [TagSet](#tagset)

### GetBucketTaggingRequest
* GetBucketTaggingRequest `object`

### GetBucketVersioningOutput
* GetBucketVersioningOutput `object`
  * MFADelete [MFADeleteStatus](#mfadeletestatus)
  * Status [BucketVersioningStatus](#bucketversioningstatus)

### GetBucketVersioningRequest
* GetBucketVersioningRequest `object`

### GetBucketWebsiteOutput
* GetBucketWebsiteOutput `object`
  * ErrorDocument [ErrorDocument](#errordocument)
  * IndexDocument [IndexDocument](#indexdocument)
  * RedirectAllRequestsTo [RedirectAllRequestsTo](#redirectallrequeststo)
  * RoutingRules [RoutingRules](#routingrules)

### GetBucketWebsiteRequest
* GetBucketWebsiteRequest `object`

### GetObjectAclOutput
* GetObjectAclOutput `object`
  * Grants [Grants](#grants)
  * Owner [Owner](#owner)

### GetObjectAclRequest
* GetObjectAclRequest `object`

### GetObjectOutput
* GetObjectOutput `object`
  * Body [Body](#body)

### GetObjectRequest
* GetObjectRequest `object`

### GetObjectTaggingOutput
* GetObjectTaggingOutput `object`
  * TagSet **required** [TagSet](#tagset)

### GetObjectTaggingRequest
* GetObjectTaggingRequest `object`

### GetObjectTorrentOutput
* GetObjectTorrentOutput `object`
  * Body [Body](#body)

### GetObjectTorrentRequest
* GetObjectTorrentRequest `object`

### GlacierJobParameters
* GlacierJobParameters `object`
  * Tier **required** [Tier](#tier)

### Grant
* Grant `object`
  * Grantee [Grantee](#grantee)
  * Permission [Permission](#permission)

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

### Grantee
* Grantee `object`
  * DisplayName [DisplayName](#displayname)
  * EmailAddress [EmailAddress](#emailaddress)
  * ID [ID](#id)
  * Type **required** [Type](#type)
  * URI [URI](#uri)

### Grants
* Grants `array`
  * items [Grant](#grant)

### HeadBucketRequest
* HeadBucketRequest `object`

### HeadObjectOutput
* HeadObjectOutput `object`

### HeadObjectRequest
* HeadObjectRequest `object`

### HostName
* HostName `string`

### HttpErrorCodeReturnedEquals
* HttpErrorCodeReturnedEquals `string`

### HttpRedirectCode
* HttpRedirectCode `string`

### ID
* ID `string`

### IfMatch
* IfMatch `string`

### IfModifiedSince
* IfModifiedSince `string`

### IfNoneMatch
* IfNoneMatch `string`

### IfUnmodifiedSince
* IfUnmodifiedSince `string`

### IndexDocument
* IndexDocument `object`
  * Suffix **required** [Suffix](#suffix)

### Initiated
* Initiated `string`

### Initiator
* Initiator `object`
  * DisplayName [DisplayName](#displayname)
  * ID [ID](#id)

### InventoryConfiguration
* InventoryConfiguration `object`
  * Destination **required** [InventoryDestination](#inventorydestination)
  * Filter [InventoryFilter](#inventoryfilter)
  * Id **required** [InventoryId](#inventoryid)
  * IncludedObjectVersions **required** [InventoryIncludedObjectVersions](#inventoryincludedobjectversions)
  * IsEnabled **required** [IsEnabled](#isenabled)
  * OptionalFields [InventoryOptionalFields](#inventoryoptionalfields)
  * Schedule **required** [InventorySchedule](#inventoryschedule)

### InventoryConfigurationList
* InventoryConfigurationList `array`
  * items [InventoryConfiguration](#inventoryconfiguration)

### InventoryDestination
* InventoryDestination `object`
  * S3BucketDestination **required** [InventoryS3BucketDestination](#inventorys3bucketdestination)

### InventoryEncryption
* InventoryEncryption `object`: Contains the type of server-side encryption used to encrypt the inventory results.
  * SSEKMS [SSEKMS](#ssekms)
  * SSES3 [SSES3](#sses3)

### InventoryFilter
* InventoryFilter `object`
  * Prefix **required** [Prefix](#prefix)

### InventoryFormat
* InventoryFormat `string` (values: CSV)

### InventoryFrequency
* InventoryFrequency `string` (values: Daily, Weekly)

### InventoryId
* InventoryId `string`

### InventoryIncludedObjectVersions
* InventoryIncludedObjectVersions `string` (values: All, Current)

### InventoryOptionalField
* InventoryOptionalField `string` (values: Size, LastModifiedDate, StorageClass, ETag, IsMultipartUploaded, ReplicationStatus, EncryptionStatus)

### InventoryOptionalFields
* InventoryOptionalFields `array`
  * items [InventoryOptionalField](#inventoryoptionalfield)

### InventoryS3BucketDestination
* InventoryS3BucketDestination `object`
  * AccountId [AccountId](#accountid)
  * Bucket **required** [BucketName](#bucketname)
  * Encryption [InventoryEncryption](#inventoryencryption)
  * Format **required** [InventoryFormat](#inventoryformat)
  * Prefix [Prefix](#prefix)

### InventorySchedule
* InventorySchedule `object`
  * Frequency **required** [InventoryFrequency](#inventoryfrequency)

### IsEnabled
* IsEnabled `boolean`

### IsLatest
* IsLatest `boolean`

### IsTruncated
* IsTruncated `boolean`

### KeyCount
* KeyCount `integer`

### KeyMarker
* KeyMarker `string`

### KeyPrefixEquals
* KeyPrefixEquals `string`

### LambdaFunctionArn
* LambdaFunctionArn `string`

### LambdaFunctionConfiguration
* LambdaFunctionConfiguration `object`: Container for specifying the AWS Lambda notification configuration.
  * Events **required** [EventList](#eventlist)
  * Filter [NotificationConfigurationFilter](#notificationconfigurationfilter)
  * Id [NotificationId](#notificationid)
  * LambdaFunctionArn **required** [LambdaFunctionArn](#lambdafunctionarn)

### LambdaFunctionConfigurationList
* LambdaFunctionConfigurationList `array`
  * items [LambdaFunctionConfiguration](#lambdafunctionconfiguration)

### LastModified
* LastModified `string`

### LifecycleConfiguration
* LifecycleConfiguration `object`
  * Rules **required** [Rules](#rules)

### LifecycleExpiration
* LifecycleExpiration `object`
  * Date [Date](#date)
  * Days [Days](#days)
  * ExpiredObjectDeleteMarker [ExpiredObjectDeleteMarker](#expiredobjectdeletemarker)

### LifecycleRule
* LifecycleRule `object`
  * AbortIncompleteMultipartUpload [AbortIncompleteMultipartUpload](#abortincompletemultipartupload)
  * Expiration [LifecycleExpiration](#lifecycleexpiration)
  * Filter [LifecycleRuleFilter](#lifecyclerulefilter)
  * ID [ID](#id)
  * NoncurrentVersionExpiration [NoncurrentVersionExpiration](#noncurrentversionexpiration)
  * NoncurrentVersionTransitions [NoncurrentVersionTransitionList](#noncurrentversiontransitionlist)
  * Prefix [Prefix](#prefix)
  * Status **required** [ExpirationStatus](#expirationstatus)
  * Transitions [TransitionList](#transitionlist)

### LifecycleRuleAndOperator
* LifecycleRuleAndOperator `object`: This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.
  * Prefix [Prefix](#prefix)
  * Tags [TagSet](#tagset)

### LifecycleRuleFilter
* LifecycleRuleFilter `object`: The Filter is used to identify objects that a Lifecycle Rule applies to. A Filter must have exactly one of Prefix, Tag, or And specified.
  * And [LifecycleRuleAndOperator](#lifecycleruleandoperator)
  * Prefix [Prefix](#prefix)
  * Tag [Tag](#tag)

### LifecycleRules
* LifecycleRules `array`
  * items [LifecycleRule](#lifecyclerule)

### ListBucketAnalyticsConfigurationsOutput
* ListBucketAnalyticsConfigurationsOutput `object`
  * AnalyticsConfigurationList [AnalyticsConfigurationList](#analyticsconfigurationlist)
  * ContinuationToken [Token](#token)
  * IsTruncated [IsTruncated](#istruncated)
  * NextContinuationToken [NextToken](#nexttoken)

### ListBucketAnalyticsConfigurationsRequest
* ListBucketAnalyticsConfigurationsRequest `object`

### ListBucketInventoryConfigurationsOutput
* ListBucketInventoryConfigurationsOutput `object`
  * ContinuationToken [Token](#token)
  * InventoryConfigurationList [InventoryConfigurationList](#inventoryconfigurationlist)
  * IsTruncated [IsTruncated](#istruncated)
  * NextContinuationToken [NextToken](#nexttoken)

### ListBucketInventoryConfigurationsRequest
* ListBucketInventoryConfigurationsRequest `object`

### ListBucketMetricsConfigurationsOutput
* ListBucketMetricsConfigurationsOutput `object`
  * ContinuationToken [Token](#token)
  * IsTruncated [IsTruncated](#istruncated)
  * MetricsConfigurationList [MetricsConfigurationList](#metricsconfigurationlist)
  * NextContinuationToken [NextToken](#nexttoken)

### ListBucketMetricsConfigurationsRequest
* ListBucketMetricsConfigurationsRequest `object`

### ListBucketsOutput
* ListBucketsOutput `object`
  * Buckets [Buckets](#buckets)
  * Owner [Owner](#owner)

### ListMultipartUploadsOutput
* ListMultipartUploadsOutput `object`
  * Bucket [BucketName](#bucketname)
  * CommonPrefixes [CommonPrefixList](#commonprefixlist)
  * Delimiter [Delimiter](#delimiter)
  * EncodingType [EncodingType](#encodingtype)
  * IsTruncated [IsTruncated](#istruncated)
  * KeyMarker [KeyMarker](#keymarker)
  * MaxUploads [MaxUploads](#maxuploads)
  * NextKeyMarker [NextKeyMarker](#nextkeymarker)
  * NextUploadIdMarker [NextUploadIdMarker](#nextuploadidmarker)
  * Prefix [Prefix](#prefix)
  * UploadIdMarker [UploadIdMarker](#uploadidmarker)
  * Uploads [MultipartUploadList](#multipartuploadlist)

### ListMultipartUploadsRequest
* ListMultipartUploadsRequest `object`

### ListObjectVersionsOutput
* ListObjectVersionsOutput `object`
  * CommonPrefixes [CommonPrefixList](#commonprefixlist)
  * DeleteMarkers [DeleteMarkers](#deletemarkers)
  * Delimiter [Delimiter](#delimiter)
  * EncodingType [EncodingType](#encodingtype)
  * IsTruncated [IsTruncated](#istruncated)
  * KeyMarker [KeyMarker](#keymarker)
  * MaxKeys [MaxKeys](#maxkeys)
  * Name [BucketName](#bucketname)
  * NextKeyMarker [NextKeyMarker](#nextkeymarker)
  * NextVersionIdMarker [NextVersionIdMarker](#nextversionidmarker)
  * Prefix [Prefix](#prefix)
  * VersionIdMarker [VersionIdMarker](#versionidmarker)
  * Versions [ObjectVersionList](#objectversionlist)

### ListObjectVersionsRequest
* ListObjectVersionsRequest `object`

### ListObjectsOutput
* ListObjectsOutput `object`
  * CommonPrefixes [CommonPrefixList](#commonprefixlist)
  * Contents [ObjectList](#objectlist)
  * Delimiter [Delimiter](#delimiter)
  * EncodingType [EncodingType](#encodingtype)
  * IsTruncated [IsTruncated](#istruncated)
  * Marker [Marker](#marker)
  * MaxKeys [MaxKeys](#maxkeys)
  * Name [BucketName](#bucketname)
  * NextMarker [NextMarker](#nextmarker)
  * Prefix [Prefix](#prefix)

### ListObjectsRequest
* ListObjectsRequest `object`

### ListObjectsV2Output
* ListObjectsV2Output `object`
  * CommonPrefixes [CommonPrefixList](#commonprefixlist)
  * Contents [ObjectList](#objectlist)
  * ContinuationToken [Token](#token)
  * Delimiter [Delimiter](#delimiter)
  * EncodingType [EncodingType](#encodingtype)
  * IsTruncated [IsTruncated](#istruncated)
  * KeyCount [KeyCount](#keycount)
  * MaxKeys [MaxKeys](#maxkeys)
  * Name [BucketName](#bucketname)
  * NextContinuationToken [NextToken](#nexttoken)
  * Prefix [Prefix](#prefix)
  * StartAfter [StartAfter](#startafter)

### ListObjectsV2Request
* ListObjectsV2Request `object`

### ListPartsOutput
* ListPartsOutput `object`
  * Bucket [BucketName](#bucketname)
  * Initiator [Initiator](#initiator)
  * IsTruncated [IsTruncated](#istruncated)
  * Key [ObjectKey](#objectkey)
  * MaxParts [MaxParts](#maxparts)
  * NextPartNumberMarker [NextPartNumberMarker](#nextpartnumbermarker)
  * Owner [Owner](#owner)
  * PartNumberMarker [PartNumberMarker](#partnumbermarker)
  * Parts [Parts](#parts)
  * StorageClass [StorageClass](#storageclass)
  * UploadId [MultipartUploadId](#multipartuploadid)

### ListPartsRequest
* ListPartsRequest `object`

### Location
* Location `string`

### LoggingEnabled
* LoggingEnabled `object`
  * TargetBucket [TargetBucket](#targetbucket)
  * TargetGrants [TargetGrants](#targetgrants)
  * TargetPrefix [TargetPrefix](#targetprefix)

### MFA
* MFA `string`

### MFADelete
* MFADelete `string` (values: Enabled, Disabled)

### MFADeleteStatus
* MFADeleteStatus `string` (values: Enabled, Disabled)

### Marker
* Marker `string`

### MaxAgeSeconds
* MaxAgeSeconds `integer`

### MaxKeys
* MaxKeys `integer`

### MaxParts
* MaxParts `integer`

### MaxUploads
* MaxUploads `integer`

### Message
* Message `string`

### Metadata
* Metadata `array`
  * items `object`
    * key [MetadataKey](#metadatakey)
    * value [MetadataValue](#metadatavalue)

### MetadataDirective
* MetadataDirective `string` (values: COPY, REPLACE)

### MetadataKey
* MetadataKey `string`

### MetadataValue
* MetadataValue `string`

### MetricsAndOperator
* MetricsAndOperator `object`
  * Prefix [Prefix](#prefix)
  * Tags [TagSet](#tagset)

### MetricsConfiguration
* MetricsConfiguration `object`
  * Filter [MetricsFilter](#metricsfilter)
  * Id **required** [MetricsId](#metricsid)

### MetricsConfigurationList
* MetricsConfigurationList `array`
  * items [MetricsConfiguration](#metricsconfiguration)

### MetricsFilter
* MetricsFilter `object`
  * And [MetricsAndOperator](#metricsandoperator)
  * Prefix [Prefix](#prefix)
  * Tag [Tag](#tag)

### MetricsId
* MetricsId `string`

### MissingMeta
* MissingMeta `integer`

### MultipartUpload
* MultipartUpload `object`
  * Initiated [Initiated](#initiated)
  * Initiator [Initiator](#initiator)
  * Key [ObjectKey](#objectkey)
  * Owner [Owner](#owner)
  * StorageClass [StorageClass](#storageclass)
  * UploadId [MultipartUploadId](#multipartuploadid)

### MultipartUploadId
* MultipartUploadId `string`

### MultipartUploadList
* MultipartUploadList `array`
  * items [MultipartUpload](#multipartupload)

### NextKeyMarker
* NextKeyMarker `string`

### NextMarker
* NextMarker `string`

### NextPartNumberMarker
* NextPartNumberMarker `integer`

### NextToken
* NextToken `string`

### NextUploadIdMarker
* NextUploadIdMarker `string`

### NextVersionIdMarker
* NextVersionIdMarker `string`

### NoSuchBucket
* NoSuchBucket `object`: The specified bucket does not exist.

### NoSuchKey
* NoSuchKey `object`: The specified key does not exist.

### NoSuchUpload
* NoSuchUpload `object`: The specified multipart upload does not exist.

### NoncurrentVersionExpiration
* NoncurrentVersionExpiration `object`: Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.
  * NoncurrentDays [Days](#days)

### NoncurrentVersionTransition
* NoncurrentVersionTransition `object`: Container for the transition rule that describes when noncurrent objects transition to the STANDARD_IA or GLACIER storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the STANDARD_IA or GLACIER storage class at a specific period in the object's lifetime.
  * NoncurrentDays [Days](#days)
  * StorageClass [TransitionStorageClass](#transitionstorageclass)

### NoncurrentVersionTransitionList
* NoncurrentVersionTransitionList `array`
  * items [NoncurrentVersionTransition](#noncurrentversiontransition)

### NotificationConfiguration
* NotificationConfiguration `object`: Container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off on the bucket.
  * LambdaFunctionConfigurations [LambdaFunctionConfigurationList](#lambdafunctionconfigurationlist)
  * QueueConfigurations [QueueConfigurationList](#queueconfigurationlist)
  * TopicConfigurations [TopicConfigurationList](#topicconfigurationlist)

### NotificationConfigurationDeprecated
* NotificationConfigurationDeprecated `object`
  * CloudFunctionConfiguration [CloudFunctionConfiguration](#cloudfunctionconfiguration)
  * QueueConfiguration [QueueConfigurationDeprecated](#queueconfigurationdeprecated)
  * TopicConfiguration [TopicConfigurationDeprecated](#topicconfigurationdeprecated)

### NotificationConfigurationFilter
* NotificationConfigurationFilter `object`: Container for object key name filtering rules. For information about key name filtering, go to <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the Amazon Simple Storage Service Developer Guide.
  * Key [S3KeyFilter](#s3keyfilter)

### NotificationId
* NotificationId `string`: Optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.

### Object
* Object `object`
  * ETag [ETag](#etag)
  * Key [ObjectKey](#objectkey)
  * LastModified [LastModified](#lastmodified)
  * Owner [Owner](#owner)
  * Size [Size](#size)
  * StorageClass [ObjectStorageClass](#objectstorageclass)

### ObjectAlreadyInActiveTierError
* ObjectAlreadyInActiveTierError `object`: This operation is not allowed against this storage tier

### ObjectCannedACL
* ObjectCannedACL `string` (values: private, public-read, public-read-write, authenticated-read, aws-exec-read, bucket-owner-read, bucket-owner-full-control)

### ObjectIdentifier
* ObjectIdentifier `object`
  * Key **required** [ObjectKey](#objectkey)
  * VersionId [ObjectVersionId](#objectversionid)

### ObjectIdentifierList
* ObjectIdentifierList `array`
  * items [ObjectIdentifier](#objectidentifier)

### ObjectKey
* ObjectKey `string`

### ObjectList
* ObjectList `array`
  * items [Object](#object)

### ObjectNotInActiveTierError
* ObjectNotInActiveTierError `object`: The source object of the COPY operation is not in the active tier and is only stored in Amazon Glacier.

### ObjectStorageClass
* ObjectStorageClass `string` (values: STANDARD, REDUCED_REDUNDANCY, GLACIER)

### ObjectVersion
* ObjectVersion `object`
  * ETag [ETag](#etag)
  * IsLatest [IsLatest](#islatest)
  * Key [ObjectKey](#objectkey)
  * LastModified [LastModified](#lastmodified)
  * Owner [Owner](#owner)
  * Size [Size](#size)
  * StorageClass [ObjectVersionStorageClass](#objectversionstorageclass)
  * VersionId [ObjectVersionId](#objectversionid)

### ObjectVersionId
* ObjectVersionId `string`

### ObjectVersionList
* ObjectVersionList `array`
  * items [ObjectVersion](#objectversion)

### ObjectVersionStorageClass
* ObjectVersionStorageClass `string` (values: STANDARD)

### Owner
* Owner `object`
  * DisplayName [DisplayName](#displayname)
  * ID [ID](#id)

### OwnerOverride
* OwnerOverride `string` (values: Destination)

### Part
* Part `object`
  * ETag [ETag](#etag)
  * LastModified [LastModified](#lastmodified)
  * PartNumber [PartNumber](#partnumber)
  * Size [Size](#size)

### PartNumber
* PartNumber `integer`

### PartNumberMarker
* PartNumberMarker `integer`

### Parts
* Parts `array`
  * items [Part](#part)

### PartsCount
* PartsCount `integer`

### Payer
* Payer `string` (values: Requester, BucketOwner)

### Permission
* Permission `string` (values: FULL_CONTROL, WRITE, WRITE_ACP, READ, READ_ACP)

### Policy
* Policy `string`

### Prefix
* Prefix `string`

### Protocol
* Protocol `string` (values: http, https)

### PutBucketAccelerateConfigurationRequest
* PutBucketAccelerateConfigurationRequest `object`
  * AccelerateConfiguration **required** [AccelerateConfiguration](#accelerateconfiguration)

### PutBucketAclRequest
* PutBucketAclRequest `object`
  * AccessControlPolicy [AccessControlPolicy](#accesscontrolpolicy)

### PutBucketAnalyticsConfigurationRequest
* PutBucketAnalyticsConfigurationRequest `object`
  * AnalyticsConfiguration **required** [AnalyticsConfiguration](#analyticsconfiguration)

### PutBucketCorsRequest
* PutBucketCorsRequest `object`
  * CORSConfiguration **required** [CORSConfiguration](#corsconfiguration)

### PutBucketEncryptionRequest
* PutBucketEncryptionRequest `object`
  * ServerSideEncryptionConfiguration **required** [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)

### PutBucketInventoryConfigurationRequest
* PutBucketInventoryConfigurationRequest `object`
  * InventoryConfiguration **required** [InventoryConfiguration](#inventoryconfiguration)

### PutBucketLifecycleConfigurationRequest
* PutBucketLifecycleConfigurationRequest `object`
  * LifecycleConfiguration [BucketLifecycleConfiguration](#bucketlifecycleconfiguration)

### PutBucketLifecycleRequest
* PutBucketLifecycleRequest `object`
  * LifecycleConfiguration [LifecycleConfiguration](#lifecycleconfiguration)

### PutBucketLoggingRequest
* PutBucketLoggingRequest `object`
  * BucketLoggingStatus **required** [BucketLoggingStatus](#bucketloggingstatus)

### PutBucketMetricsConfigurationRequest
* PutBucketMetricsConfigurationRequest `object`
  * MetricsConfiguration **required** [MetricsConfiguration](#metricsconfiguration)

### PutBucketNotificationConfigurationRequest
* PutBucketNotificationConfigurationRequest `object`
  * NotificationConfiguration **required** [NotificationConfiguration](#notificationconfiguration)

### PutBucketNotificationRequest
* PutBucketNotificationRequest `object`
  * NotificationConfiguration **required** [NotificationConfigurationDeprecated](#notificationconfigurationdeprecated)

### PutBucketPolicyRequest
* PutBucketPolicyRequest `object`
  * Policy **required** [Policy](#policy)

### PutBucketReplicationRequest
* PutBucketReplicationRequest `object`
  * ReplicationConfiguration **required** [ReplicationConfiguration](#replicationconfiguration)

### PutBucketRequestPaymentRequest
* PutBucketRequestPaymentRequest `object`
  * RequestPaymentConfiguration **required** [RequestPaymentConfiguration](#requestpaymentconfiguration)

### PutBucketTaggingRequest
* PutBucketTaggingRequest `object`
  * Tagging **required** [Tagging](#tagging)

### PutBucketVersioningRequest
* PutBucketVersioningRequest `object`
  * VersioningConfiguration **required** [VersioningConfiguration](#versioningconfiguration)

### PutBucketWebsiteRequest
* PutBucketWebsiteRequest `object`
  * WebsiteConfiguration **required** [WebsiteConfiguration](#websiteconfiguration)

### PutObjectAclOutput
* PutObjectAclOutput `object`

### PutObjectAclRequest
* PutObjectAclRequest `object`
  * AccessControlPolicy [AccessControlPolicy](#accesscontrolpolicy)

### PutObjectOutput
* PutObjectOutput `object`

### PutObjectRequest
* PutObjectRequest `object`
  * Body [Body](#body)

### PutObjectTaggingOutput
* PutObjectTaggingOutput `object`

### PutObjectTaggingRequest
* PutObjectTaggingRequest `object`
  * Tagging **required** [Tagging](#tagging)

### QueueArn
* QueueArn `string`

### QueueConfiguration
* QueueConfiguration `object`: Container for specifying an configuration when you want Amazon S3 to publish events to an Amazon Simple Queue Service (Amazon SQS) queue.
  * Events **required** [EventList](#eventlist)
  * Filter [NotificationConfigurationFilter](#notificationconfigurationfilter)
  * Id [NotificationId](#notificationid)
  * QueueArn **required** [QueueArn](#queuearn)

### QueueConfigurationDeprecated
* QueueConfigurationDeprecated `object`
  * Event [Event](#event)
  * Events [EventList](#eventlist)
  * Id [NotificationId](#notificationid)
  * Queue [QueueArn](#queuearn)

### QueueConfigurationList
* QueueConfigurationList `array`
  * items [QueueConfiguration](#queueconfiguration)

### Quiet
* Quiet `boolean`

### Range
* Range `string`

### Redirect
* Redirect `object`
  * HostName [HostName](#hostname)
  * HttpRedirectCode [HttpRedirectCode](#httpredirectcode)
  * Protocol [Protocol](#protocol)
  * ReplaceKeyPrefixWith [ReplaceKeyPrefixWith](#replacekeyprefixwith)
  * ReplaceKeyWith [ReplaceKeyWith](#replacekeywith)

### RedirectAllRequestsTo
* RedirectAllRequestsTo `object`
  * HostName **required** [HostName](#hostname)
  * Protocol [Protocol](#protocol)

### ReplaceKeyPrefixWith
* ReplaceKeyPrefixWith `string`

### ReplaceKeyWith
* ReplaceKeyWith `string`

### ReplicaKmsKeyID
* ReplicaKmsKeyID `string`

### ReplicationConfiguration
* ReplicationConfiguration `object`: Container for replication rules. You can add as many as 1,000 rules. Total replication configuration size can be up to 2 MB.
  * Role **required** [Role](#role)
  * Rules **required** [ReplicationRules](#replicationrules)

### ReplicationRule
* ReplicationRule `object`: Container for information about a particular replication rule.
  * Destination **required** [Destination](#destination)
  * ID [ID](#id)
  * Prefix **required** [Prefix](#prefix)
  * SourceSelectionCriteria [SourceSelectionCriteria](#sourceselectioncriteria)
  * Status **required** [ReplicationRuleStatus](#replicationrulestatus)

### ReplicationRuleStatus
* ReplicationRuleStatus `string` (values: Enabled, Disabled)

### ReplicationRules
* ReplicationRules `array`
  * items [ReplicationRule](#replicationrule)

### ReplicationStatus
* ReplicationStatus `string` (values: COMPLETE, PENDING, FAILED, REPLICA)

### RequestCharged
* RequestCharged `string` (values: requester): If present, indicates that the requester was successfully charged for the request.

### RequestPayer
* RequestPayer `string` (values: requester): Confirms that the requester knows that she or he will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html

### RequestPaymentConfiguration
* RequestPaymentConfiguration `object`
  * Payer **required** [Payer](#payer)

### ResponseCacheControl
* ResponseCacheControl `string`

### ResponseContentDisposition
* ResponseContentDisposition `string`

### ResponseContentEncoding
* ResponseContentEncoding `string`

### ResponseContentLanguage
* ResponseContentLanguage `string`

### ResponseContentType
* ResponseContentType `string`

### ResponseExpires
* ResponseExpires `string`

### Restore
* Restore `string`

### RestoreObjectOutput
* RestoreObjectOutput `object`

### RestoreObjectRequest
* RestoreObjectRequest `object`
  * RestoreRequest [RestoreRequest](#restorerequest)

### RestoreRequest
* RestoreRequest `object`
  * Days **required** [Days](#days)
  * GlacierJobParameters [GlacierJobParameters](#glacierjobparameters)

### Role
* Role `string`

### RoutingRule
* RoutingRule `object`
  * Condition [Condition](#condition)
  * Redirect **required** [Redirect](#redirect)

### RoutingRules
* RoutingRules `array`
  * items [RoutingRule](#routingrule)

### Rule
* Rule `object`
  * AbortIncompleteMultipartUpload [AbortIncompleteMultipartUpload](#abortincompletemultipartupload)
  * Expiration [LifecycleExpiration](#lifecycleexpiration)
  * ID [ID](#id)
  * NoncurrentVersionExpiration [NoncurrentVersionExpiration](#noncurrentversionexpiration)
  * NoncurrentVersionTransition [NoncurrentVersionTransition](#noncurrentversiontransition)
  * Prefix **required** [Prefix](#prefix)
  * Status **required** [ExpirationStatus](#expirationstatus)
  * Transition [Transition](#transition)

### Rules
* Rules `array`
  * items [Rule](#rule)

### S3KeyFilter
* S3KeyFilter `object`: Container for object key name prefix and suffix filtering rules.
  * FilterRules [FilterRuleList](#filterrulelist)

### SSECustomerAlgorithm
* SSECustomerAlgorithm `string`

### SSECustomerKey
* SSECustomerKey `string`

### SSECustomerKeyMD5
* SSECustomerKeyMD5 `string`

### SSEKMS
* SSEKMS `object`: Specifies the use of SSE-KMS to encrypt delievered Inventory reports.
  * KeyId **required** [SSEKMSKeyId](#ssekmskeyid)

### SSEKMSKeyId
* SSEKMSKeyId `string`

### SSES3
* SSES3 `object`: Specifies the use of SSE-S3 to encrypt delievered Inventory reports.

### ServerSideEncryption
* ServerSideEncryption `string` (values: AES256, aws:kms)

### ServerSideEncryptionByDefault
* ServerSideEncryptionByDefault `object`: Describes the default server-side encryption to apply to new objects in the bucket. If Put Object request does not specify any server-side encryption, this default encryption will be applied.
  * KMSMasterKeyID [SSEKMSKeyId](#ssekmskeyid)
  * SSEAlgorithm **required** [ServerSideEncryption](#serversideencryption)

### ServerSideEncryptionConfiguration
* ServerSideEncryptionConfiguration `object`: Container for server-side encryption configuration rules. Currently S3 supports one rule only.
  * Rules **required** [ServerSideEncryptionRules](#serversideencryptionrules)

### ServerSideEncryptionRule
* ServerSideEncryptionRule `object`: Container for information about a particular server-side encryption configuration rule.
  * ApplyServerSideEncryptionByDefault [ServerSideEncryptionByDefault](#serversideencryptionbydefault)

### ServerSideEncryptionRules
* ServerSideEncryptionRules `array`
  * items [ServerSideEncryptionRule](#serversideencryptionrule)

### Size
* Size `integer`

### SourceSelectionCriteria
* SourceSelectionCriteria `object`: Container for filters that define which source objects should be replicated.
  * SseKmsEncryptedObjects [SseKmsEncryptedObjects](#ssekmsencryptedobjects)

### SseKmsEncryptedObjects
* SseKmsEncryptedObjects `object`: Container for filter information of selection of KMS Encrypted S3 objects.
  * Status **required** [SseKmsEncryptedObjectsStatus](#ssekmsencryptedobjectsstatus)

### SseKmsEncryptedObjectsStatus
* SseKmsEncryptedObjectsStatus `string` (values: Enabled, Disabled)

### StartAfter
* StartAfter `string`

### StorageClass
* StorageClass `string` (values: STANDARD, REDUCED_REDUNDANCY, STANDARD_IA)

### StorageClassAnalysis
* StorageClassAnalysis `object`
  * DataExport [StorageClassAnalysisDataExport](#storageclassanalysisdataexport)

### StorageClassAnalysisDataExport
* StorageClassAnalysisDataExport `object`
  * Destination **required** [AnalyticsExportDestination](#analyticsexportdestination)
  * OutputSchemaVersion **required** [StorageClassAnalysisSchemaVersion](#storageclassanalysisschemaversion)

### StorageClassAnalysisSchemaVersion
* StorageClassAnalysisSchemaVersion `string` (values: V_1)

### Suffix
* Suffix `string`

### Tag
* Tag `object`
  * Key **required** [ObjectKey](#objectkey)
  * Value **required** [Value](#value)

### TagCount
* TagCount `integer`

### TagSet
* TagSet `array`
  * items [Tag](#tag)

### Tagging
* Tagging `object`
  * TagSet **required** [TagSet](#tagset)

### TaggingDirective
* TaggingDirective `string` (values: COPY, REPLACE)

### TaggingHeader
* TaggingHeader `string`

### TargetBucket
* TargetBucket `string`

### TargetGrant
* TargetGrant `object`
  * Grantee [Grantee](#grantee)
  * Permission [BucketLogsPermission](#bucketlogspermission)

### TargetGrants
* TargetGrants `array`
  * items [TargetGrant](#targetgrant)

### TargetPrefix
* TargetPrefix `string`

### Tier
* Tier `string` (values: Standard, Bulk, Expedited)

### Token
* Token `string`

### TopicArn
* TopicArn `string`

### TopicConfiguration
* TopicConfiguration `object`: Container for specifying the configuration when you want Amazon S3 to publish events to an Amazon Simple Notification Service (Amazon SNS) topic.
  * Events **required** [EventList](#eventlist)
  * Filter [NotificationConfigurationFilter](#notificationconfigurationfilter)
  * Id [NotificationId](#notificationid)
  * TopicArn **required** [TopicArn](#topicarn)

### TopicConfigurationDeprecated
* TopicConfigurationDeprecated `object`
  * Event [Event](#event)
  * Events [EventList](#eventlist)
  * Id [NotificationId](#notificationid)
  * Topic [TopicArn](#topicarn)

### TopicConfigurationList
* TopicConfigurationList `array`
  * items [TopicConfiguration](#topicconfiguration)

### Transition
* Transition `object`
  * Date [Date](#date)
  * Days [Days](#days)
  * StorageClass [TransitionStorageClass](#transitionstorageclass)

### TransitionList
* TransitionList `array`
  * items [Transition](#transition)

### TransitionStorageClass
* TransitionStorageClass `string` (values: GLACIER, STANDARD_IA)

### Type
* Type `string` (values: CanonicalUser, AmazonCustomerByEmail, Group)

### URI
* URI `string`

### UploadIdMarker
* UploadIdMarker `string`

### UploadPartCopyOutput
* UploadPartCopyOutput `object`
  * CopyPartResult [CopyPartResult](#copypartresult)

### UploadPartCopyRequest
* UploadPartCopyRequest `object`

### UploadPartOutput
* UploadPartOutput `object`

### UploadPartRequest
* UploadPartRequest `object`
  * Body [Body](#body)

### Value
* Value `string`

### VersionIdMarker
* VersionIdMarker `string`

### VersioningConfiguration
* VersioningConfiguration `object`
  * MFADelete [MFADelete](#mfadelete)
  * Status [BucketVersioningStatus](#bucketversioningstatus)

### WebsiteConfiguration
* WebsiteConfiguration `object`
  * ErrorDocument [ErrorDocument](#errordocument)
  * IndexDocument [IndexDocument](#indexdocument)
  * RedirectAllRequestsTo [RedirectAllRequestsTo](#redirectallrequeststo)
  * RoutingRules [RoutingRules](#routingrules)

### WebsiteRedirectLocation
* WebsiteRedirectLocation `string`


