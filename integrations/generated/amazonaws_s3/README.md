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

.then(data => {
  console.log(data);
});
```

## Description

<p/>

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
  * x-amz-expected-bucket-owner `string`

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
  * Bucket **required** `string`
  * delimiter `string`
  * encoding-type `string`
  * marker `string`
  * max-keys `integer`
  * prefix `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * MaxKeys `string`
  * Marker `string`

#### Output
* output [ListObjectsOutput](#listobjectsoutput)

### HeadBucket



```js
amazonaws_s3.HeadBucket({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`

#### Output
*Output schema unknown*

### CreateBucket



```js
amazonaws_s3.CreateBucket({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * x-amz-acl `string`
  * Bucket **required** `string`
  * x-amz-grant-full-control `string`
  * x-amz-grant-read `string`
  * x-amz-grant-read-acp `string`
  * x-amz-grant-write `string`
  * x-amz-grant-write-acp `string`
  * x-amz-bucket-object-lock-enabled `boolean`
  * CreateBucketConfiguration `object`: The configuration information for the bucket.
    * LocationConstraint

#### Output
* output [CreateBucketOutput](#createbucketoutput)

### GetBucketAccelerateConfiguration



```js
amazonaws_s3.GetBucketAccelerateConfiguration({
  "Bucket": "",
  "accelerate": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * accelerate **required** `boolean`

#### Output
* output [GetBucketAccelerateConfigurationOutput](#getbucketaccelerateconfigurationoutput)

### PutBucketAccelerateConfiguration



```js
amazonaws_s3.PutBucketAccelerateConfiguration({
  "Bucket": "",
  "accelerate": true,
  "AccelerateConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * accelerate **required** `boolean`
  * AccelerateConfiguration **required** `object`: Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3 Transfer Acceleration</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
    * Status

#### Output
*Output schema unknown*

### GetBucketAcl



```js
amazonaws_s3.GetBucketAcl({
  "Bucket": "",
  "acl": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * acl **required** `boolean`

#### Output
* output [GetBucketAclOutput](#getbucketacloutput)

### PutBucketAcl



```js
amazonaws_s3.PutBucketAcl({
  "Bucket": "",
  "acl": true
}, context)
```

#### Input
* input `object`
  * x-amz-acl `string`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-grant-full-control `string`
  * x-amz-grant-read `string`
  * x-amz-grant-read-acp `string`
  * x-amz-grant-write `string`
  * x-amz-grant-write-acp `string`
  * x-amz-expected-bucket-owner `string`
  * acl **required** `boolean`
  * AccessControlPolicy `object`: Contains the elements that set the ACL permissions for an object per grantee.
    * Grants
      * items
        * Grantee
          * DisplayName
          * EmailAddress
          * ID
          * Type **required**
          * URI
        * Permission
    * Owner
      * DisplayName
      * ID

#### Output
*Output schema unknown*

### ListBucketAnalyticsConfigurations



```js
amazonaws_s3.ListBucketAnalyticsConfigurations({
  "Bucket": "",
  "analytics": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * continuation-token `string`
  * x-amz-expected-bucket-owner `string`
  * analytics **required** `boolean`

#### Output
* output [ListBucketAnalyticsConfigurationsOutput](#listbucketanalyticsconfigurationsoutput)

### DeleteBucketAnalyticsConfiguration



```js
amazonaws_s3.DeleteBucketAnalyticsConfiguration({
  "Bucket": "",
  "id": "",
  "analytics": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * x-amz-expected-bucket-owner `string`
  * analytics **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketAnalyticsConfiguration



```js
amazonaws_s3.GetBucketAnalyticsConfiguration({
  "Bucket": "",
  "id": "",
  "analytics": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * x-amz-expected-bucket-owner `string`
  * analytics **required** `boolean`

#### Output
* output [GetBucketAnalyticsConfigurationOutput](#getbucketanalyticsconfigurationoutput)

### PutBucketAnalyticsConfiguration



```js
amazonaws_s3.PutBucketAnalyticsConfiguration({
  "Bucket": "",
  "id": "",
  "analytics": true,
  "AnalyticsConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * x-amz-expected-bucket-owner `string`
  * analytics **required** `boolean`
  * AnalyticsConfiguration **required** `object`:  Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
    * Filter
      * And
        * Prefix
        * Tags
          * items
      * Prefix
      * Tag
        * Key **required**
        * Value **required**
    * Id
    * StorageClassAnalysis
      * DataExport
        * Destination **required**
          * S3BucketDestination **required**
        * OutputSchemaVersion **required**

#### Output
*Output schema unknown*

### DeleteBucketCors



```js
amazonaws_s3.DeleteBucketCors({
  "Bucket": "",
  "cors": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * cors **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketCors



```js
amazonaws_s3.GetBucketCors({
  "Bucket": "",
  "cors": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * cors **required** `boolean`

#### Output
* output [GetBucketCorsOutput](#getbucketcorsoutput)

### PutBucketCors



```js
amazonaws_s3.PutBucketCors({
  "Bucket": "",
  "cors": true,
  "CORSConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * cors **required** `boolean`
  * CORSConfiguration **required** `object`: Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
    * CORSRules
      * items [CORSRule](#corsrule)

#### Output
*Output schema unknown*

### DeleteObjects



```js
amazonaws_s3.DeleteObjects({
  "Bucket": "",
  "delete": true,
  "Delete": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-mfa `string`
  * x-amz-request-payer `string`
  * x-amz-bypass-governance-retention `boolean`
  * x-amz-expected-bucket-owner `string`
  * delete **required** `boolean`
  * Delete **required** `object`: Container for the objects to delete.
    * Objects
      * items [ObjectIdentifier](#objectidentifier)
    * Quiet

#### Output
* output [DeleteObjectsOutput](#deleteobjectsoutput)

### DeleteBucketEncryption



```js
amazonaws_s3.DeleteBucketEncryption({
  "Bucket": "",
  "encryption": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * encryption **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketEncryption



```js
amazonaws_s3.GetBucketEncryption({
  "Bucket": "",
  "encryption": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * encryption **required** `boolean`

#### Output
* output [GetBucketEncryptionOutput](#getbucketencryptionoutput)

### PutBucketEncryption



```js
amazonaws_s3.PutBucketEncryption({
  "Bucket": "",
  "encryption": true,
  "ServerSideEncryptionConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * encryption **required** `boolean`
  * ServerSideEncryptionConfiguration **required** `object`: Specifies the default server-side-encryption configuration.
    * Rules
      * items [ServerSideEncryptionRule](#serversideencryptionrule)

#### Output
*Output schema unknown*

### ListBucketIntelligentTieringConfigurations



```js
amazonaws_s3.ListBucketIntelligentTieringConfigurations({
  "Bucket": "",
  "intelligent-tiering": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * continuation-token `string`
  * intelligent-tiering **required** `boolean`

#### Output
* output [ListBucketIntelligentTieringConfigurationsOutput](#listbucketintelligenttieringconfigurationsoutput)

### DeleteBucketIntelligentTieringConfiguration



```js
amazonaws_s3.DeleteBucketIntelligentTieringConfiguration({
  "Bucket": "",
  "id": "",
  "intelligent-tiering": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * intelligent-tiering **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketIntelligentTieringConfiguration



```js
amazonaws_s3.GetBucketIntelligentTieringConfiguration({
  "Bucket": "",
  "id": "",
  "intelligent-tiering": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * intelligent-tiering **required** `boolean`

#### Output
* output [GetBucketIntelligentTieringConfigurationOutput](#getbucketintelligenttieringconfigurationoutput)

### PutBucketIntelligentTieringConfiguration



```js
amazonaws_s3.PutBucketIntelligentTieringConfiguration({
  "Bucket": "",
  "id": "",
  "intelligent-tiering": true,
  "IntelligentTieringConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * intelligent-tiering **required** `boolean`
  * IntelligentTieringConfiguration **required** `object`: <p>Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.</p> <p>For information about the S3 Intelligent-Tiering storage class, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p>
    * Filter
      * And
        * Prefix
        * Tags
          * items
      * Prefix
      * Tag [Tag](#tag)
    * Id
    * Status
    * Tierings
      * items [Tiering](#tiering)

#### Output
*Output schema unknown*

### ListBucketInventoryConfigurations



```js
amazonaws_s3.ListBucketInventoryConfigurations({
  "Bucket": "",
  "inventory": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * continuation-token `string`
  * x-amz-expected-bucket-owner `string`
  * inventory **required** `boolean`

#### Output
* output [ListBucketInventoryConfigurationsOutput](#listbucketinventoryconfigurationsoutput)

### DeleteBucketInventoryConfiguration



```js
amazonaws_s3.DeleteBucketInventoryConfiguration({
  "Bucket": "",
  "id": "",
  "inventory": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * x-amz-expected-bucket-owner `string`
  * inventory **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketInventoryConfiguration



```js
amazonaws_s3.GetBucketInventoryConfiguration({
  "Bucket": "",
  "id": "",
  "inventory": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * x-amz-expected-bucket-owner `string`
  * inventory **required** `boolean`

#### Output
* output [GetBucketInventoryConfigurationOutput](#getbucketinventoryconfigurationoutput)

### PutBucketInventoryConfiguration



```js
amazonaws_s3.PutBucketInventoryConfiguration({
  "Bucket": "",
  "id": "",
  "inventory": true,
  "InventoryConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * x-amz-expected-bucket-owner `string`
  * inventory **required** `boolean`
  * InventoryConfiguration **required** `object`: Specifies the inventory configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon Simple Storage Service API Reference</i>. 
    * Destination
      * S3BucketDestination **required**
        * AccountId
        * Bucket **required**
        * Encryption
          * SSEKMS
          * SSES3
        * Format **required**
        * Prefix
    * Filter
      * Prefix **required**
    * Id
    * IncludedObjectVersions
    * IsEnabled
    * OptionalFields
      * items
    * Schedule
      * Frequency **required**

#### Output
*Output schema unknown*

### DeleteBucketLifecycle



```js
amazonaws_s3.DeleteBucketLifecycle({
  "Bucket": "",
  "lifecycle": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * lifecycle **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketLifecycleConfiguration



```js
amazonaws_s3.GetBucketLifecycleConfiguration({
  "Bucket": "",
  "lifecycle": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * lifecycle **required** `boolean`

#### Output
* output [GetBucketLifecycleConfigurationOutput](#getbucketlifecycleconfigurationoutput)

### PutBucketLifecycleConfiguration



```js
amazonaws_s3.PutBucketLifecycleConfiguration({
  "Bucket": "",
  "lifecycle": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * lifecycle **required** `boolean`
  * LifecycleConfiguration `object`: Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
    * Rules
      * items [LifecycleRule](#lifecyclerule)

#### Output
*Output schema unknown*

### GetBucketLifecycle



```js
amazonaws_s3.GetBucketLifecycle({
  "Bucket": "",
  "lifecycle": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * lifecycle **required** `boolean`

#### Output
* output [GetBucketLifecycleOutput](#getbucketlifecycleoutput)

### PutBucketLifecycle



```js
amazonaws_s3.PutBucketLifecycle({
  "Bucket": "",
  "lifecycle": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * lifecycle **required** `boolean`
  * LifecycleConfiguration `object`: Container for lifecycle rules. You can add as many as 1000 rules.
    * Rules
      * items [Rule](#rule)

#### Output
*Output schema unknown*

### ListObjectsV2



```js
amazonaws_s3.ListObjectsV2({
  "Bucket": "",
  "list-type": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * delimiter `string`
  * encoding-type `string`
  * max-keys `integer`
  * prefix `string`
  * continuation-token `string`
  * fetch-owner `boolean`
  * start-after `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * MaxKeys `string`
  * ContinuationToken `string`
  * list-type **required** `string`

#### Output
* output [ListObjectsV2Output](#listobjectsv2output)

### GetBucketLocation



```js
amazonaws_s3.GetBucketLocation({
  "Bucket": "",
  "location": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * location **required** `boolean`

#### Output
* output [GetBucketLocationOutput](#getbucketlocationoutput)

### GetBucketLogging



```js
amazonaws_s3.GetBucketLogging({
  "Bucket": "",
  "logging": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * logging **required** `boolean`

#### Output
* output [GetBucketLoggingOutput](#getbucketloggingoutput)

### PutBucketLogging



```js
amazonaws_s3.PutBucketLogging({
  "Bucket": "",
  "logging": true,
  "BucketLoggingStatus": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * logging **required** `boolean`
  * BucketLoggingStatus **required** `object`: Container for logging status information.
    * LoggingEnabled [LoggingEnabled](#loggingenabled)

#### Output
*Output schema unknown*

### ListBucketMetricsConfigurations



```js
amazonaws_s3.ListBucketMetricsConfigurations({
  "Bucket": "",
  "metrics": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * continuation-token `string`
  * x-amz-expected-bucket-owner `string`
  * metrics **required** `boolean`

#### Output
* output [ListBucketMetricsConfigurationsOutput](#listbucketmetricsconfigurationsoutput)

### DeleteBucketMetricsConfiguration



```js
amazonaws_s3.DeleteBucketMetricsConfiguration({
  "Bucket": "",
  "id": "",
  "metrics": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * x-amz-expected-bucket-owner `string`
  * metrics **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketMetricsConfiguration



```js
amazonaws_s3.GetBucketMetricsConfiguration({
  "Bucket": "",
  "id": "",
  "metrics": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * x-amz-expected-bucket-owner `string`
  * metrics **required** `boolean`

#### Output
* output [GetBucketMetricsConfigurationOutput](#getbucketmetricsconfigurationoutput)

### PutBucketMetricsConfiguration



```js
amazonaws_s3.PutBucketMetricsConfiguration({
  "Bucket": "",
  "id": "",
  "metrics": true,
  "MetricsConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * id **required** `string`
  * x-amz-expected-bucket-owner `string`
  * metrics **required** `boolean`
  * MetricsConfiguration **required** `object`: Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html"> PUT Bucket metrics</a> in the <i>Amazon Simple Storage Service API Reference</i>.
    * Filter
      * And
        * Prefix
        * Tags
          * items
      * Prefix
      * Tag
        * Key **required**
        * Value **required**
    * Id

#### Output
*Output schema unknown*

### GetBucketNotificationConfiguration



```js
amazonaws_s3.GetBucketNotificationConfiguration({
  "Bucket": "",
  "notification": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * notification **required** `boolean`

#### Output
* output [NotificationConfiguration](#notificationconfiguration)

### PutBucketNotificationConfiguration



```js
amazonaws_s3.PutBucketNotificationConfiguration({
  "Bucket": "",
  "notification": true,
  "NotificationConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * notification **required** `boolean`
  * NotificationConfiguration **required** `object`: A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket.
    * LambdaFunctionConfigurations
      * items [LambdaFunctionConfiguration](#lambdafunctionconfiguration)
    * QueueConfigurations
      * items [QueueConfiguration](#queueconfiguration)
    * TopicConfigurations
      * items [TopicConfiguration](#topicconfiguration)

#### Output
*Output schema unknown*

### GetBucketNotification



```js
amazonaws_s3.GetBucketNotification({
  "Bucket": "",
  "notification": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * notification **required** `boolean`

#### Output
* output [NotificationConfigurationDeprecated](#notificationconfigurationdeprecated)

### PutBucketNotification



```js
amazonaws_s3.PutBucketNotification({
  "Bucket": "",
  "notification": true,
  "NotificationConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * notification **required** `boolean`
  * NotificationConfiguration **required** `object`: The container for the configuration.
    * CloudFunctionConfiguration
      * CloudFunction
      * Event
      * Events
        * items [Event](#event)
      * Id [NotificationId](#notificationid)
      * InvocationRole
    * QueueConfiguration
      * Event
      * Events
        * items [Event](#event)
      * Id [NotificationId](#notificationid)
      * Queue
    * TopicConfiguration
      * Event
      * Events
        * items [Event](#event)
      * Id [NotificationId](#notificationid)
      * Topic

#### Output
*Output schema unknown*

### GetObjectLockConfiguration



```js
amazonaws_s3.GetObjectLockConfiguration({
  "Bucket": "",
  "object-lock": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * object-lock **required** `boolean`

#### Output
* output [GetObjectLockConfigurationOutput](#getobjectlockconfigurationoutput)

### PutObjectLockConfiguration



```js
amazonaws_s3.PutObjectLockConfiguration({
  "Bucket": "",
  "object-lock": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-request-payer `string`
  * x-amz-bucket-object-lock-token `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * object-lock **required** `boolean`
  * ObjectLockConfiguration `object`: The container element for Object Lock configuration parameters.
    * ObjectLockEnabled
    * Rule
      * DefaultRetention
        * Days
        * Mode
        * Years

#### Output
* output [PutObjectLockConfigurationOutput](#putobjectlockconfigurationoutput)

### DeleteBucketOwnershipControls



```js
amazonaws_s3.DeleteBucketOwnershipControls({
  "Bucket": "",
  "ownershipControls": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * ownershipControls **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketOwnershipControls



```js
amazonaws_s3.GetBucketOwnershipControls({
  "Bucket": "",
  "ownershipControls": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * ownershipControls **required** `boolean`

#### Output
* output [GetBucketOwnershipControlsOutput](#getbucketownershipcontrolsoutput)

### PutBucketOwnershipControls



```js
amazonaws_s3.PutBucketOwnershipControls({
  "Bucket": "",
  "ownershipControls": true,
  "OwnershipControls": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * ownershipControls **required** `boolean`
  * OwnershipControls **required** `object`: The container element for a bucket's ownership controls.
    * Rules
      * items [OwnershipControlsRule](#ownershipcontrolsrule)

#### Output
*Output schema unknown*

### DeleteBucketPolicy



```js
amazonaws_s3.DeleteBucketPolicy({
  "Bucket": "",
  "policy": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * policy **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketPolicy



```js
amazonaws_s3.GetBucketPolicy({
  "Bucket": "",
  "policy": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * policy **required** `boolean`

#### Output
* output [GetBucketPolicyOutput](#getbucketpolicyoutput)

### PutBucketPolicy



```js
amazonaws_s3.PutBucketPolicy({
  "Bucket": "",
  "policy": true,
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-confirm-remove-self-bucket-access `boolean`
  * x-amz-expected-bucket-owner `string`
  * policy **required** `boolean`
  * Policy **required** `string`: The bucket policy as a JSON document.

#### Output
*Output schema unknown*

### GetBucketPolicyStatus



```js
amazonaws_s3.GetBucketPolicyStatus({
  "Bucket": "",
  "policyStatus": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * policyStatus **required** `boolean`

#### Output
* output [GetBucketPolicyStatusOutput](#getbucketpolicystatusoutput)

### DeletePublicAccessBlock



```js
amazonaws_s3.DeletePublicAccessBlock({
  "Bucket": "",
  "publicAccessBlock": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * publicAccessBlock **required** `boolean`

#### Output
*Output schema unknown*

### GetPublicAccessBlock



```js
amazonaws_s3.GetPublicAccessBlock({
  "Bucket": "",
  "publicAccessBlock": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * publicAccessBlock **required** `boolean`

#### Output
* output [GetPublicAccessBlockOutput](#getpublicaccessblockoutput)

### PutPublicAccessBlock



```js
amazonaws_s3.PutPublicAccessBlock({
  "Bucket": "",
  "publicAccessBlock": true,
  "PublicAccessBlockConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * publicAccessBlock **required** `boolean`
  * PublicAccessBlockConfiguration **required** `object`: The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. 
    * BlockPublicAcls
    * BlockPublicPolicy
    * IgnorePublicAcls
    * RestrictPublicBuckets

#### Output
*Output schema unknown*

### DeleteBucketReplication



```js
amazonaws_s3.DeleteBucketReplication({
  "Bucket": "",
  "replication": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * replication **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketReplication



```js
amazonaws_s3.GetBucketReplication({
  "Bucket": "",
  "replication": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * replication **required** `boolean`

#### Output
* output [GetBucketReplicationOutput](#getbucketreplicationoutput)

### PutBucketReplication



```js
amazonaws_s3.PutBucketReplication({
  "Bucket": "",
  "replication": true,
  "ReplicationConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-bucket-object-lock-token `string`
  * x-amz-expected-bucket-owner `string`
  * replication **required** `boolean`
  * ReplicationConfiguration **required** `object`: A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.
    * Role
    * Rules
      * items [ReplicationRule](#replicationrule)

#### Output
*Output schema unknown*

### GetBucketRequestPayment



```js
amazonaws_s3.GetBucketRequestPayment({
  "Bucket": "",
  "requestPayment": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * requestPayment **required** `boolean`

#### Output
* output [GetBucketRequestPaymentOutput](#getbucketrequestpaymentoutput)

### PutBucketRequestPayment



```js
amazonaws_s3.PutBucketRequestPayment({
  "Bucket": "",
  "requestPayment": true,
  "RequestPaymentConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * requestPayment **required** `boolean`
  * RequestPaymentConfiguration **required** `object`: Container for Payer.
    * Payer

#### Output
*Output schema unknown*

### DeleteBucketTagging



```js
amazonaws_s3.DeleteBucketTagging({
  "Bucket": "",
  "tagging": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * tagging **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketTagging



```js
amazonaws_s3.GetBucketTagging({
  "Bucket": "",
  "tagging": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * tagging **required** `boolean`

#### Output
* output [GetBucketTaggingOutput](#getbuckettaggingoutput)

### PutBucketTagging



```js
amazonaws_s3.PutBucketTagging({
  "Bucket": "",
  "tagging": true,
  "Tagging": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * tagging **required** `boolean`
  * Tagging **required** `object`: Container for <code>TagSet</code> elements.
    * TagSet
      * items
        * Key **required**
        * Value **required**

#### Output
*Output schema unknown*

### ListMultipartUploads



```js
amazonaws_s3.ListMultipartUploads({
  "Bucket": "",
  "uploads": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * delimiter `string`
  * encoding-type `string`
  * key-marker `string`
  * max-uploads `integer`
  * prefix `string`
  * upload-id-marker `string`
  * x-amz-expected-bucket-owner `string`
  * MaxUploads `string`
  * KeyMarker `string`
  * UploadIdMarker `string`
  * uploads **required** `boolean`

#### Output
* output [ListMultipartUploadsOutput](#listmultipartuploadsoutput)

### GetBucketVersioning



```js
amazonaws_s3.GetBucketVersioning({
  "Bucket": "",
  "versioning": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * versioning **required** `boolean`

#### Output
* output [GetBucketVersioningOutput](#getbucketversioningoutput)

### PutBucketVersioning



```js
amazonaws_s3.PutBucketVersioning({
  "Bucket": "",
  "versioning": true,
  "VersioningConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-mfa `string`
  * x-amz-expected-bucket-owner `string`
  * versioning **required** `boolean`
  * VersioningConfiguration **required** `object`: Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT Bucket versioning</a> in the <i>Amazon Simple Storage Service API Reference</i>.
    * MFADelete
    * Status

#### Output
*Output schema unknown*

### ListObjectVersions



```js
amazonaws_s3.ListObjectVersions({
  "Bucket": "",
  "versions": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * delimiter `string`
  * encoding-type `string`
  * key-marker `string`
  * max-keys `integer`
  * prefix `string`
  * version-id-marker `string`
  * x-amz-expected-bucket-owner `string`
  * MaxKeys `string`
  * KeyMarker `string`
  * VersionIdMarker `string`
  * versions **required** `boolean`

#### Output
* output [ListObjectVersionsOutput](#listobjectversionsoutput)

### DeleteBucketWebsite



```js
amazonaws_s3.DeleteBucketWebsite({
  "Bucket": "",
  "website": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * website **required** `boolean`

#### Output
*Output schema unknown*

### GetBucketWebsite



```js
amazonaws_s3.GetBucketWebsite({
  "Bucket": "",
  "website": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-expected-bucket-owner `string`
  * website **required** `boolean`

#### Output
* output [GetBucketWebsiteOutput](#getbucketwebsiteoutput)

### PutBucketWebsite



```js
amazonaws_s3.PutBucketWebsite({
  "Bucket": "",
  "website": true,
  "WebsiteConfiguration": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * website **required** `boolean`
  * WebsiteConfiguration **required** `object`: Specifies website configuration parameters for an Amazon S3 bucket.
    * ErrorDocument
      * Key **required**
    * IndexDocument
      * Suffix **required**
    * RedirectAllRequestsTo
      * HostName **required**
      * Protocol
    * RoutingRules
      * items
        * Condition
          * HttpErrorCodeReturnedEquals
          * KeyPrefixEquals
        * Redirect **required**
          * HostName
          * HttpRedirectCode
          * Protocol
          * ReplaceKeyPrefixWith
          * ReplaceKeyWith

#### Output
*Output schema unknown*

### DeleteObject



```js
amazonaws_s3.DeleteObject({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * x-amz-mfa `string`
  * versionId `string`
  * x-amz-request-payer `string`
  * x-amz-bypass-governance-retention `boolean`
  * x-amz-expected-bucket-owner `string`

#### Output
*Output schema unknown*

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
  * If-Match `string`
  * If-Modified-Since `string`
  * If-None-Match `string`
  * If-Unmodified-Since `string`
  * Key **required** `string`
  * Range `string`
  * response-cache-control `string`
  * response-content-disposition `string`
  * response-content-encoding `string`
  * response-content-language `string`
  * response-content-type `string`
  * response-expires `string`
  * versionId `string`
  * x-amz-server-side-encryption-customer-algorithm `string`
  * x-amz-server-side-encryption-customer-key `string`
  * x-amz-server-side-encryption-customer-key-MD5 `string`
  * x-amz-request-payer `string`
  * partNumber `integer`
  * x-amz-expected-bucket-owner `string`

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
  * If-Match `string`
  * If-Modified-Since `string`
  * If-None-Match `string`
  * If-Unmodified-Since `string`
  * Key **required** `string`
  * Range `string`
  * versionId `string`
  * x-amz-server-side-encryption-customer-algorithm `string`
  * x-amz-server-side-encryption-customer-key `string`
  * x-amz-server-side-encryption-customer-key-MD5 `string`
  * x-amz-request-payer `string`
  * partNumber `integer`
  * x-amz-expected-bucket-owner `string`

#### Output
* output [HeadObjectOutput](#headobjectoutput)

### PutObject



```js
amazonaws_s3.PutObject({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * x-amz-acl `string`
  * Bucket **required** `string`
  * Cache-Control `string`
  * Content-Disposition `string`
  * Content-Encoding `string`
  * Content-Language `string`
  * Content-Length `integer`
  * Content-MD5 `string`
  * Content-Type `string`
  * Expires `string`
  * x-amz-grant-full-control `string`
  * x-amz-grant-read `string`
  * x-amz-grant-read-acp `string`
  * x-amz-grant-write-acp `string`
  * Key **required** `string`
  * x-amz-server-side-encryption `string`
  * x-amz-storage-class `string`
  * x-amz-website-redirect-location `string`
  * x-amz-server-side-encryption-customer-algorithm `string`
  * x-amz-server-side-encryption-customer-key `string`
  * x-amz-server-side-encryption-customer-key-MD5 `string`
  * x-amz-server-side-encryption-aws-kms-key-id `string`
  * x-amz-server-side-encryption-context `string`
  * x-amz-server-side-encryption-bucket-key-enabled `boolean`
  * x-amz-request-payer `string`
  * x-amz-tagging `string`
  * x-amz-object-lock-mode `string`
  * x-amz-object-lock-retain-until-date `string`
  * x-amz-object-lock-legal-hold `string`
  * x-amz-expected-bucket-owner `string`
  * Body `string`: Object data.
  * x-amz-meta- `object`: A map of metadata to store with the object in S3.

#### Output
* output [PutObjectOutput](#putobjectoutput)

### GetObjectAcl



```js
amazonaws_s3.GetObjectAcl({
  "Bucket": "",
  "Key": "",
  "acl": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * versionId `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * acl **required** `boolean`

#### Output
* output [GetObjectAclOutput](#getobjectacloutput)

### PutObjectAcl



```js
amazonaws_s3.PutObjectAcl({
  "Bucket": "",
  "Key": "",
  "acl": true
}, context)
```

#### Input
* input `object`
  * x-amz-acl `string`
  * Bucket **required** `string`
  * Content-MD5 `string`
  * x-amz-grant-full-control `string`
  * x-amz-grant-read `string`
  * x-amz-grant-read-acp `string`
  * x-amz-grant-write `string`
  * x-amz-grant-write-acp `string`
  * Key **required** `string`
  * x-amz-request-payer `string`
  * versionId `string`
  * x-amz-expected-bucket-owner `string`
  * acl **required** `boolean`
  * AccessControlPolicy `object`: Contains the elements that set the ACL permissions for an object per grantee.
    * Grants
      * items
        * Grantee
          * DisplayName
          * EmailAddress
          * ID
          * Type **required**
          * URI
        * Permission
    * Owner
      * DisplayName
      * ID

#### Output
* output [PutObjectAclOutput](#putobjectacloutput)

### GetObjectLegalHold



```js
amazonaws_s3.GetObjectLegalHold({
  "Bucket": "",
  "Key": "",
  "legal-hold": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * versionId `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * legal-hold **required** `boolean`

#### Output
* output [GetObjectLegalHoldOutput](#getobjectlegalholdoutput)

### PutObjectLegalHold



```js
amazonaws_s3.PutObjectLegalHold({
  "Bucket": "",
  "Key": "",
  "legal-hold": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * x-amz-request-payer `string`
  * versionId `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * legal-hold **required** `boolean`
  * LegalHold `object`: A Legal Hold configuration for an object.
    * Status

#### Output
* output [PutObjectLegalHoldOutput](#putobjectlegalholdoutput)

### UploadPart



```js
amazonaws_s3.UploadPart({
  "Bucket": "",
  "Key": "",
  "partNumber": 0,
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Content-Length `integer`
  * Content-MD5 `string`
  * Key **required** `string`
  * partNumber **required** `integer`
  * uploadId **required** `string`
  * x-amz-server-side-encryption-customer-algorithm `string`
  * x-amz-server-side-encryption-customer-key `string`
  * x-amz-server-side-encryption-customer-key-MD5 `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * Body `string`: Object data.

#### Output
* output [UploadPartOutput](#uploadpartoutput)

### RestoreObject



```js
amazonaws_s3.RestoreObject({
  "Bucket": "",
  "Key": "",
  "restore": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * versionId `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * restore **required** `boolean`
  * RestoreRequest `object`: Container for restore job parameters.
    * Days
    * Description
    * GlacierJobParameters
      * Tier **required**
    * OutputLocation
      * S3
        * AccessControlList
          * items
        * BucketName **required**
        * CannedACL
        * Encryption [Encryption](#encryption)
        * Prefix **required**
        * StorageClass
        * Tagging
          * TagSet **required**
        * UserMetadata
          * items
    * SelectParameters
      * Expression **required**
      * ExpressionType **required**
      * InputSerialization **required**
        * CSV
          * AllowQuotedRecordDelimiter
          * Comments
          * FieldDelimiter
          * FileHeaderInfo
          * QuoteCharacter
          * QuoteEscapeCharacter
          * RecordDelimiter
        * CompressionType
        * JSON
          * Type
        * Parquet
      * OutputSerialization **required**
        * CSV
          * FieldDelimiter
          * QuoteCharacter
          * QuoteEscapeCharacter
          * QuoteFields
          * RecordDelimiter
        * JSON
          * RecordDelimiter
    * Tier
    * Type

#### Output
* output [RestoreObjectOutput](#restoreobjectoutput)

### GetObjectRetention



```js
amazonaws_s3.GetObjectRetention({
  "Bucket": "",
  "Key": "",
  "retention": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * versionId `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * retention **required** `boolean`

#### Output
* output [GetObjectRetentionOutput](#getobjectretentionoutput)

### PutObjectRetention



```js
amazonaws_s3.PutObjectRetention({
  "Bucket": "",
  "Key": "",
  "retention": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * x-amz-request-payer `string`
  * versionId `string`
  * x-amz-bypass-governance-retention `boolean`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * retention **required** `boolean`
  * Retention `object`: A Retention configuration for an object.
    * Mode
    * RetainUntilDate

#### Output
* output [PutObjectRetentionOutput](#putobjectretentionoutput)

### SelectObjectContent



```js
amazonaws_s3.SelectObjectContent({
  "Bucket": "",
  "Key": "",
  "select": true,
  "select-type": "",
  "Expression": "",
  "ExpressionType": "",
  "InputSerialization": {},
  "OutputSerialization": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * x-amz-server-side-encryption-customer-algorithm `string`
  * x-amz-server-side-encryption-customer-key `string`
  * x-amz-server-side-encryption-customer-key-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * select **required** `boolean`
  * select-type **required** `string`
  * Expression **required** `string`: The expression that is used to query the object.
  * ExpressionType **required** `string` (values: SQL): The type of the provided expression (for example, SQL).
  * InputSerialization **required** `object`: Describes the serialization format of the object.
    * CSV
      * AllowQuotedRecordDelimiter
      * Comments
      * FieldDelimiter
      * FileHeaderInfo
      * QuoteCharacter
      * QuoteEscapeCharacter
      * RecordDelimiter
    * CompressionType
    * JSON
      * Type
    * Parquet
  * OutputSerialization **required** `object`: Describes how results of the Select job are serialized.
    * CSV
      * FieldDelimiter
      * QuoteCharacter
      * QuoteEscapeCharacter
      * QuoteFields
      * RecordDelimiter
    * JSON
      * RecordDelimiter
  * RequestProgress `object`: Container for specifying if periodic <code>QueryProgress</code> messages should be sent.
    * Enabled
  * ScanRange `object`: Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.
    * End
    * Start

#### Output
* output [SelectObjectContentOutput](#selectobjectcontentoutput)

### DeleteObjectTagging



```js
amazonaws_s3.DeleteObjectTagging({
  "Bucket": "",
  "Key": "",
  "tagging": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * versionId `string`
  * x-amz-expected-bucket-owner `string`
  * tagging **required** `boolean`

#### Output
*Output schema unknown*

### GetObjectTagging



```js
amazonaws_s3.GetObjectTagging({
  "Bucket": "",
  "Key": "",
  "tagging": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * versionId `string`
  * x-amz-expected-bucket-owner `string`
  * tagging **required** `boolean`

#### Output
* output [GetObjectTaggingOutput](#getobjecttaggingoutput)

### PutObjectTagging



```js
amazonaws_s3.PutObjectTagging({
  "Bucket": "",
  "Key": "",
  "tagging": true,
  "Tagging": {}
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * versionId `string`
  * Content-MD5 `string`
  * x-amz-expected-bucket-owner `string`
  * tagging **required** `boolean`
  * Tagging **required** `object`: Container for <code>TagSet</code> elements.
    * TagSet
      * items
        * Key **required**
        * Value **required**

#### Output
* output [PutObjectTaggingOutput](#putobjecttaggingoutput)

### GetObjectTorrent



```js
amazonaws_s3.GetObjectTorrent({
  "Bucket": "",
  "Key": "",
  "torrent": true
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * torrent **required** `boolean`

#### Output
* output [GetObjectTorrentOutput](#getobjecttorrentoutput)

### AbortMultipartUpload



```js
amazonaws_s3.AbortMultipartUpload({
  "Bucket": "",
  "Key": "",
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * uploadId **required** `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`

#### Output
*Output schema unknown*

### ListParts



```js
amazonaws_s3.ListParts({
  "Bucket": "",
  "Key": "",
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * max-parts `integer`
  * part-number-marker `integer`
  * uploadId **required** `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * MaxParts `string`
  * PartNumberMarker `string`

#### Output
* output [ListPartsOutput](#listpartsoutput)

### CompleteMultipartUpload



```js
amazonaws_s3.CompleteMultipartUpload({
  "Bucket": "",
  "Key": "",
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * Key **required** `string`
  * uploadId **required** `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * CompleteMultipartUpload `object`: The container for the completed multipart upload details.
    * Parts
      * items [CompletedPart](#completedpart)

#### Output
* output [CompleteMultipartUploadOutput](#completemultipartuploadoutput)

### CreateMultipartUpload



```js
amazonaws_s3.CreateMultipartUpload({
  "Bucket": "",
  "Key": "",
  "uploads": true
}, context)
```

#### Input
* input `object`
  * x-amz-acl `string`
  * Bucket **required** `string`
  * Cache-Control `string`
  * Content-Disposition `string`
  * Content-Encoding `string`
  * Content-Language `string`
  * Content-Type `string`
  * Expires `string`
  * x-amz-grant-full-control `string`
  * x-amz-grant-read `string`
  * x-amz-grant-read-acp `string`
  * x-amz-grant-write-acp `string`
  * Key **required** `string`
  * x-amz-server-side-encryption `string`
  * x-amz-storage-class `string`
  * x-amz-website-redirect-location `string`
  * x-amz-server-side-encryption-customer-algorithm `string`
  * x-amz-server-side-encryption-customer-key `string`
  * x-amz-server-side-encryption-customer-key-MD5 `string`
  * x-amz-server-side-encryption-aws-kms-key-id `string`
  * x-amz-server-side-encryption-context `string`
  * x-amz-server-side-encryption-bucket-key-enabled `boolean`
  * x-amz-request-payer `string`
  * x-amz-tagging `string`
  * x-amz-object-lock-mode `string`
  * x-amz-object-lock-retain-until-date `string`
  * x-amz-object-lock-legal-hold `string`
  * x-amz-expected-bucket-owner `string`
  * uploads **required** `boolean`
  * x-amz-meta- `object`: A map of metadata to store with the object in S3.

#### Output
* output [CreateMultipartUploadOutput](#createmultipartuploadoutput)

### CopyObject



```js
amazonaws_s3.CopyObject({
  "Bucket": "",
  "x-amz-copy-source": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * x-amz-acl `string`
  * Bucket **required** `string`
  * Cache-Control `string`
  * Content-Disposition `string`
  * Content-Encoding `string`
  * Content-Language `string`
  * Content-Type `string`
  * x-amz-copy-source **required** `string`
  * x-amz-copy-source-if-match `string`
  * x-amz-copy-source-if-modified-since `string`
  * x-amz-copy-source-if-none-match `string`
  * x-amz-copy-source-if-unmodified-since `string`
  * Expires `string`
  * x-amz-grant-full-control `string`
  * x-amz-grant-read `string`
  * x-amz-grant-read-acp `string`
  * x-amz-grant-write-acp `string`
  * Key **required** `string`
  * x-amz-metadata-directive `string`
  * x-amz-tagging-directive `string`
  * x-amz-server-side-encryption `string`
  * x-amz-storage-class `string`
  * x-amz-website-redirect-location `string`
  * x-amz-server-side-encryption-customer-algorithm `string`
  * x-amz-server-side-encryption-customer-key `string`
  * x-amz-server-side-encryption-customer-key-MD5 `string`
  * x-amz-server-side-encryption-aws-kms-key-id `string`
  * x-amz-server-side-encryption-context `string`
  * x-amz-server-side-encryption-bucket-key-enabled `boolean`
  * x-amz-copy-source-server-side-encryption-customer-algorithm `string`
  * x-amz-copy-source-server-side-encryption-customer-key `string`
  * x-amz-copy-source-server-side-encryption-customer-key-MD5 `string`
  * x-amz-request-payer `string`
  * x-amz-tagging `string`
  * x-amz-object-lock-mode `string`
  * x-amz-object-lock-retain-until-date `string`
  * x-amz-object-lock-legal-hold `string`
  * x-amz-expected-bucket-owner `string`
  * x-amz-source-expected-bucket-owner `string`
  * x-amz-meta- `object`: A map of metadata to store with the object in S3.

#### Output
* output [CopyObjectOutput](#copyobjectoutput)

### UploadPartCopy



```js
amazonaws_s3.UploadPartCopy({
  "Bucket": "",
  "x-amz-copy-source": "",
  "Key": "",
  "partNumber": 0,
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * x-amz-copy-source **required** `string`
  * x-amz-copy-source-if-match `string`
  * x-amz-copy-source-if-modified-since `string`
  * x-amz-copy-source-if-none-match `string`
  * x-amz-copy-source-if-unmodified-since `string`
  * x-amz-copy-source-range `string`
  * Key **required** `string`
  * partNumber **required** `integer`
  * uploadId **required** `string`
  * x-amz-server-side-encryption-customer-algorithm `string`
  * x-amz-server-side-encryption-customer-key `string`
  * x-amz-server-side-encryption-customer-key-MD5 `string`
  * x-amz-copy-source-server-side-encryption-customer-algorithm `string`
  * x-amz-copy-source-server-side-encryption-customer-key `string`
  * x-amz-copy-source-server-side-encryption-customer-key-MD5 `string`
  * x-amz-request-payer `string`
  * x-amz-expected-bucket-owner `string`
  * x-amz-source-expected-bucket-owner `string`

#### Output
* output [UploadPartCopyOutput](#uploadpartcopyoutput)



## Definitions

### AbortDate
* AbortDate `string`

### AbortIncompleteMultipartUpload
* AbortIncompleteMultipartUpload `object`: Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * DaysAfterInitiation

### AbortMultipartUploadOutput
* AbortMultipartUploadOutput `object`

### AbortMultipartUploadRequest
* AbortMultipartUploadRequest `object`

### AbortRuleId
* AbortRuleId `string`

### AccelerateConfiguration
* AccelerateConfiguration `object`: Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3 Transfer Acceleration</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * Status

### AcceptRanges
* AcceptRanges `string`

### AccessControlPolicy
* AccessControlPolicy `object`: Contains the elements that set the ACL permissions for an object per grantee.
  * Grants
    * items
      * Grantee
        * DisplayName
        * EmailAddress
        * ID
        * Type **required**
        * URI
      * Permission
  * Owner
    * DisplayName
    * ID

### AccessControlTranslation
* AccessControlTranslation `object`: A container for information about access control for replicas.
  * Owner **required**

### AccountId
* AccountId `string`

### AllowQuotedRecordDelimiter
* AllowQuotedRecordDelimiter `boolean`

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
* AnalyticsAndOperator `object`: A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates in any combination, and an object must match all of the predicates for the filter to apply.
  * Prefix
  * Tags
    * items
      * Key **required**
      * Value **required**

### AnalyticsConfiguration
* AnalyticsConfiguration `object`:  Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
  * Filter
    * And
      * Prefix
      * Tags
        * items
          * Key **required**
          * Value **required**
    * Prefix
    * Tag
      * Key **required**
      * Value **required**
  * Id **required**
  * StorageClassAnalysis **required**
    * DataExport
      * Destination **required**
        * S3BucketDestination **required**
          * Bucket **required**
          * BucketAccountId
          * Format **required**
          * Prefix
      * OutputSchemaVersion **required**

### AnalyticsConfigurationList
* AnalyticsConfigurationList `array`
  * items [AnalyticsConfiguration](#analyticsconfiguration)

### AnalyticsExportDestination
* AnalyticsExportDestination `object`: Where to publish the analytics results.
  * S3BucketDestination **required**
    * Bucket **required**
    * BucketAccountId
    * Format **required**
    * Prefix

### AnalyticsFilter
* AnalyticsFilter `object`: The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.
  * And
    * Prefix
    * Tags
      * items
        * Key **required**
        * Value **required**
  * Prefix
  * Tag
    * Key **required**
    * Value **required**

### AnalyticsId
* AnalyticsId `string`

### AnalyticsS3BucketDestination
* AnalyticsS3BucketDestination `object`: Contains information about where to publish the analytics results.
  * Bucket **required**
  * BucketAccountId
  * Format **required**
  * Prefix

### AnalyticsS3ExportFileFormat
* AnalyticsS3ExportFileFormat `string` (values: CSV)

### ArchiveStatus
* ArchiveStatus `string` (values: ARCHIVE_ACCESS, DEEP_ARCHIVE_ACCESS)

### Body
* Body `string`

### Bucket
* Bucket `object`:  In terms of implementation, a Bucket is a resource. An Amazon S3 bucket name is globally unique, and the namespace is shared by all AWS accounts. 
  * CreationDate
  * Name

### BucketAccelerateStatus
* BucketAccelerateStatus `string` (values: Enabled, Suspended)

### BucketAlreadyExists


### BucketAlreadyOwnedByYou


### BucketCannedACL
* BucketCannedACL `string` (values: private, public-read, public-read-write, authenticated-read)

### BucketKeyEnabled
* BucketKeyEnabled `boolean`

### BucketLifecycleConfiguration
* BucketLifecycleConfiguration `object`: Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * Rules **required**
    * items [LifecycleRule](#lifecyclerule)

### BucketLocationConstraint
* BucketLocationConstraint `string` (values: af-south-1, ap-east-1, ap-northeast-1, ap-northeast-2, ap-northeast-3, ap-south-1, ap-southeast-1, ap-southeast-2, ca-central-1, cn-north-1, cn-northwest-1, EU, eu-central-1, eu-north-1, eu-south-1, eu-west-1, eu-west-2, eu-west-3, me-south-1, sa-east-1, us-east-2, us-gov-east-1, us-gov-west-1, us-west-1, us-west-2)

### BucketLoggingStatus
* BucketLoggingStatus `object`: Container for logging status information.
  * LoggingEnabled [LoggingEnabled](#loggingenabled)

### BucketLogsPermission
* BucketLogsPermission `string` (values: FULL_CONTROL, READ, WRITE)

### BucketName
* BucketName `string`

### BucketVersioningStatus
* BucketVersioningStatus `string` (values: Enabled, Suspended)

### Buckets
* Buckets `array`
  * items
    * CreationDate
    * Name

### BypassGovernanceRetention
* BypassGovernanceRetention `boolean`

### BytesProcessed
* BytesProcessed `integer`

### BytesReturned
* BytesReturned `integer`

### BytesScanned
* BytesScanned `integer`

### CORSConfiguration
* CORSConfiguration `object`: Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * CORSRules **required**
    * items [CORSRule](#corsrule)

### CORSRule
* CORSRule `object`: Specifies a cross-origin access rule for an Amazon S3 bucket.
  * AllowedHeaders
    * items [AllowedHeader](#allowedheader)
  * AllowedMethods **required**
    * items [AllowedMethod](#allowedmethod)
  * AllowedOrigins **required**
    * items [AllowedOrigin](#allowedorigin)
  * ExposeHeaders
    * items [ExposeHeader](#exposeheader)
  * MaxAgeSeconds

### CORSRules
* CORSRules `array`
  * items [CORSRule](#corsrule)

### CSVInput
* CSVInput `object`: Describes how an uncompressed comma-separated values (CSV)-formatted input object is formatted.
  * AllowQuotedRecordDelimiter
  * Comments
  * FieldDelimiter
  * FileHeaderInfo
  * QuoteCharacter
  * QuoteEscapeCharacter
  * RecordDelimiter

### CSVOutput
* CSVOutput `object`: Describes how uncompressed comma-separated values (CSV)-formatted results are formatted.
  * FieldDelimiter
  * QuoteCharacter
  * QuoteEscapeCharacter
  * QuoteFields
  * RecordDelimiter

### CacheControl
* CacheControl `string`

### CloudFunction
* CloudFunction `string`

### CloudFunctionConfiguration
* CloudFunctionConfiguration `object`: Container for specifying the AWS Lambda notification configuration.
  * CloudFunction
  * Event
  * Events
    * items [Event](#event)
  * Id [NotificationId](#notificationid)
  * InvocationRole

### CloudFunctionInvocationRole
* CloudFunctionInvocationRole `string`

### Code
* Code `string`

### Comments
* Comments `string`

### CommonPrefix
* CommonPrefix `object`: Container for all (if there are any) keys between Prefix and the next occurrence of the string specified by a delimiter. CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. 
  * Prefix

### CommonPrefixList
* CommonPrefixList `array`
  * items [CommonPrefix](#commonprefix)

### CompleteMultipartUploadOutput
* CompleteMultipartUploadOutput `object`
  * Bucket
  * ETag
  * Key
  * Location

### CompleteMultipartUploadRequest
* CompleteMultipartUploadRequest `object`
  * MultipartUpload
    * Parts
      * items [CompletedPart](#completedpart)

### CompletedMultipartUpload
* CompletedMultipartUpload `object`: The container for the completed multipart upload details.
  * Parts
    * items [CompletedPart](#completedpart)

### CompletedPart
* CompletedPart `object`: Details of the parts that were uploaded.
  * ETag
  * PartNumber

### CompletedPartList
* CompletedPartList `array`
  * items [CompletedPart](#completedpart)

### CompressionType
* CompressionType `string` (values: NONE, GZIP, BZIP2)

### Condition
* Condition `object`: A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
  * HttpErrorCodeReturnedEquals
  * KeyPrefixEquals

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

### ContinuationEvent
* ContinuationEvent `object`: <p/>

### CopyObjectOutput
* CopyObjectOutput `object`
  * CopyObjectResult
    * ETag
    * LastModified

### CopyObjectRequest
* CopyObjectRequest `object`
  * Metadata

### CopyObjectResult
* CopyObjectResult `object`: Container for all response elements.
  * ETag
  * LastModified

### CopyPartResult
* CopyPartResult `object`: Container for all response elements.
  * ETag
  * LastModified

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
* CreateBucketConfiguration `object`: The configuration information for the bucket.
  * LocationConstraint

### CreateBucketOutput
* CreateBucketOutput `object`

### CreateBucketRequest
* CreateBucketRequest `object`
  * CreateBucketConfiguration
    * LocationConstraint

### CreateMultipartUploadOutput
* CreateMultipartUploadOutput `object`
  * Bucket
  * Key
  * UploadId

### CreateMultipartUploadRequest
* CreateMultipartUploadRequest `object`
  * Metadata

### CreationDate
* CreationDate `string`

### Date
* Date `string`

### Days
* Days `integer`

### DaysAfterInitiation
* DaysAfterInitiation `integer`

### DefaultRetention
* DefaultRetention `object`: The container element for specifying the default Object Lock retention settings for new objects placed in the specified bucket.
  * Days
  * Mode
  * Years

### Delete
* Delete `object`: Container for the objects to delete.
  * Objects **required**
    * items [ObjectIdentifier](#objectidentifier)
  * Quiet

### DeleteBucketAnalyticsConfigurationRequest
* DeleteBucketAnalyticsConfigurationRequest `object`

### DeleteBucketCorsRequest
* DeleteBucketCorsRequest `object`

### DeleteBucketEncryptionRequest
* DeleteBucketEncryptionRequest `object`

### DeleteBucketIntelligentTieringConfigurationRequest
* DeleteBucketIntelligentTieringConfigurationRequest `object`

### DeleteBucketInventoryConfigurationRequest
* DeleteBucketInventoryConfigurationRequest `object`

### DeleteBucketLifecycleRequest
* DeleteBucketLifecycleRequest `object`

### DeleteBucketMetricsConfigurationRequest
* DeleteBucketMetricsConfigurationRequest `object`

### DeleteBucketOwnershipControlsRequest
* DeleteBucketOwnershipControlsRequest `object`

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
* DeleteMarkerEntry `object`: Information about the delete marker.
  * IsLatest
  * Key
  * LastModified
  * Owner
    * DisplayName
    * ID
  * VersionId

### DeleteMarkerReplication
* DeleteMarkerReplication `object`: <p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code> in your replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code> <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p> <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule Configuration</a>. </p> <note> <p>If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p> </note>
  * Status

### DeleteMarkerReplicationStatus
* DeleteMarkerReplicationStatus `string` (values: Enabled, Disabled)

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
  * Deleted
    * items [DeletedObject](#deletedobject)
  * Errors
    * items [Error](#error)

### DeleteObjectsRequest
* DeleteObjectsRequest `object`
  * Delete **required**
    * Objects **required**
      * items [ObjectIdentifier](#objectidentifier)
    * Quiet

### DeletePublicAccessBlockRequest
* DeletePublicAccessBlockRequest `object`

### DeletedObject
* DeletedObject `object`: Information about the deleted object.
  * DeleteMarker
  * DeleteMarkerVersionId
  * Key
  * VersionId

### DeletedObjects
* DeletedObjects `array`
  * items [DeletedObject](#deletedobject)

### Delimiter
* Delimiter `string`

### Description
* Description `string`

### Destination
* Destination `object`: Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket and S3 Replication Time Control (S3 RTC).
  * AccessControlTranslation
    * Owner **required**
  * Account
  * Bucket **required**
  * EncryptionConfiguration
    * ReplicaKmsKeyID
  * Metrics
    * EventThreshold
      * Minutes
    * Status **required**
  * ReplicationTime
    * Status **required**
    * Time **required**
      * Minutes
  * StorageClass

### DisplayName
* DisplayName `string`

### ETag
* ETag `string`

### EmailAddress
* EmailAddress `string`

### EnableRequestProgress
* EnableRequestProgress `boolean`

### EncodingType
* EncodingType `string` (values: url): Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response.

### Encryption
* Encryption `object`: Contains the type of server-side encryption used.
  * EncryptionType **required**
  * KMSContext
  * KMSKeyId

### EncryptionConfiguration
* EncryptionConfiguration `object`: Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.
  * ReplicaKmsKeyID

### End
* End `integer`

### EndEvent
* EndEvent `object`: A message that indicates the request is complete and no more messages will be sent. You should not assume that the request is complete until the client receives an <code>EndEvent</code>.

### Error
* Error `object`: Container for all error elements.
  * Code
  * Key
  * Message
  * VersionId

### ErrorDocument
* ErrorDocument `object`: The error information.
  * Key **required**

### Errors
* Errors `array`
  * items [Error](#error)

### Event
* Event `string` (values: s3:ReducedRedundancyLostObject, s3:ObjectCreated:*, s3:ObjectCreated:Put, s3:ObjectCreated:Post, s3:ObjectCreated:Copy, s3:ObjectCreated:CompleteMultipartUpload, s3:ObjectRemoved:*, s3:ObjectRemoved:Delete, s3:ObjectRemoved:DeleteMarkerCreated, s3:ObjectRestore:*, s3:ObjectRestore:Post, s3:ObjectRestore:Completed, s3:Replication:*, s3:Replication:OperationFailedReplication, s3:Replication:OperationNotTracked, s3:Replication:OperationMissedThreshold, s3:Replication:OperationReplicatedAfterThreshold): The bucket event for which to send notifications.

### EventList
* EventList `array`
  * items [Event](#event)

### ExistingObjectReplication
* ExistingObjectReplication `object`: Optional configuration to replicate existing source bucket objects. For more information, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication">Replicating Existing Objects</a> in the <i>Amazon S3 Developer Guide</i>. 
  * Status **required**

### ExistingObjectReplicationStatus
* ExistingObjectReplicationStatus `string` (values: Enabled, Disabled)

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

### Expression
* Expression `string`

### ExpressionType
* ExpressionType `string` (values: SQL)

### FetchOwner
* FetchOwner `boolean`

### FieldDelimiter
* FieldDelimiter `string`

### FileHeaderInfo
* FileHeaderInfo `string` (values: USE, IGNORE, NONE)

### FilterRule
* FilterRule `object`: Specifies the Amazon S3 object key name to filter on and whether to filter on the suffix or prefix of the key name.
  * Name
  * Value

### FilterRuleList
* FilterRuleList `array`: A list of containers for the key-value pair that defines the criteria for the filter rule.
  * items [FilterRule](#filterrule)

### FilterRuleName
* FilterRuleName `string` (values: prefix, suffix)

### FilterRuleValue
* FilterRuleValue `string`

### GetBucketAccelerateConfigurationOutput
* GetBucketAccelerateConfigurationOutput `object`
  * Status

### GetBucketAccelerateConfigurationRequest
* GetBucketAccelerateConfigurationRequest `object`

### GetBucketAclOutput
* GetBucketAclOutput `object`
  * Grants
    * items
      * Grantee
        * DisplayName
        * EmailAddress
        * ID
        * Type **required**
        * URI
      * Permission
  * Owner
    * DisplayName
    * ID

### GetBucketAclRequest
* GetBucketAclRequest `object`

### GetBucketAnalyticsConfigurationOutput
* GetBucketAnalyticsConfigurationOutput `object`
  * AnalyticsConfiguration
    * Filter
      * And
        * Prefix
        * Tags
          * items
      * Prefix
      * Tag
        * Key **required**
        * Value **required**
    * Id **required**
    * StorageClassAnalysis **required**
      * DataExport
        * Destination **required**
          * S3BucketDestination **required**
        * OutputSchemaVersion **required**

### GetBucketAnalyticsConfigurationRequest
* GetBucketAnalyticsConfigurationRequest `object`

### GetBucketCorsOutput
* GetBucketCorsOutput `object`
  * CORSRules
    * items [CORSRule](#corsrule)

### GetBucketCorsRequest
* GetBucketCorsRequest `object`

### GetBucketEncryptionOutput
* GetBucketEncryptionOutput `object`
  * ServerSideEncryptionConfiguration [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)

### GetBucketEncryptionRequest
* GetBucketEncryptionRequest `object`

### GetBucketIntelligentTieringConfigurationOutput
* GetBucketIntelligentTieringConfigurationOutput `object`
  * IntelligentTieringConfiguration
    * Filter
      * And
        * Prefix
        * Tags
          * items
      * Prefix
      * Tag [Tag](#tag)
    * Id **required**
    * Status **required**
    * Tierings **required**
      * items [Tiering](#tiering)

### GetBucketIntelligentTieringConfigurationRequest
* GetBucketIntelligentTieringConfigurationRequest `object`

### GetBucketInventoryConfigurationOutput
* GetBucketInventoryConfigurationOutput `object`
  * InventoryConfiguration
    * Destination **required**
      * S3BucketDestination **required**
        * AccountId
        * Bucket **required**
        * Encryption
          * SSEKMS
          * SSES3
        * Format **required**
        * Prefix
    * Filter
      * Prefix **required**
    * Id **required**
    * IncludedObjectVersions **required**
    * IsEnabled **required**
    * OptionalFields
      * items
    * Schedule **required**
      * Frequency **required**

### GetBucketInventoryConfigurationRequest
* GetBucketInventoryConfigurationRequest `object`

### GetBucketLifecycleConfigurationOutput
* GetBucketLifecycleConfigurationOutput `object`
  * Rules
    * items [LifecycleRule](#lifecyclerule)

### GetBucketLifecycleConfigurationRequest
* GetBucketLifecycleConfigurationRequest `object`

### GetBucketLifecycleOutput
* GetBucketLifecycleOutput `object`
  * Rules
    * items [Rule](#rule)

### GetBucketLifecycleRequest
* GetBucketLifecycleRequest `object`

### GetBucketLocationOutput
* GetBucketLocationOutput `object`
  * LocationConstraint

### GetBucketLocationRequest
* GetBucketLocationRequest `object`

### GetBucketLoggingOutput
* GetBucketLoggingOutput `object`
  * LoggingEnabled [LoggingEnabled](#loggingenabled)

### GetBucketLoggingRequest
* GetBucketLoggingRequest `object`

### GetBucketMetricsConfigurationOutput
* GetBucketMetricsConfigurationOutput `object`
  * MetricsConfiguration
    * Filter
      * And
        * Prefix
        * Tags
          * items
      * Prefix
      * Tag
        * Key **required**
        * Value **required**
    * Id **required**

### GetBucketMetricsConfigurationRequest
* GetBucketMetricsConfigurationRequest `object`

### GetBucketNotificationConfigurationRequest
* GetBucketNotificationConfigurationRequest `object`

### GetBucketOwnershipControlsOutput
* GetBucketOwnershipControlsOutput `object`
  * OwnershipControls
    * Rules **required**
      * items [OwnershipControlsRule](#ownershipcontrolsrule)

### GetBucketOwnershipControlsRequest
* GetBucketOwnershipControlsRequest `object`

### GetBucketPolicyOutput
* GetBucketPolicyOutput `object`
  * Policy

### GetBucketPolicyRequest
* GetBucketPolicyRequest `object`

### GetBucketPolicyStatusOutput
* GetBucketPolicyStatusOutput `object`
  * PolicyStatus
    * IsPublic

### GetBucketPolicyStatusRequest
* GetBucketPolicyStatusRequest `object`

### GetBucketReplicationOutput
* GetBucketReplicationOutput `object`
  * ReplicationConfiguration [ReplicationConfiguration](#replicationconfiguration)

### GetBucketReplicationRequest
* GetBucketReplicationRequest `object`

### GetBucketRequestPaymentOutput
* GetBucketRequestPaymentOutput `object`
  * Payer

### GetBucketRequestPaymentRequest
* GetBucketRequestPaymentRequest `object`

### GetBucketTaggingOutput
* GetBucketTaggingOutput `object`
  * TagSet **required**
    * items
      * Key **required**
      * Value **required**

### GetBucketTaggingRequest
* GetBucketTaggingRequest `object`

### GetBucketVersioningOutput
* GetBucketVersioningOutput `object`
  * MFADelete
  * Status

### GetBucketVersioningRequest
* GetBucketVersioningRequest `object`

### GetBucketWebsiteOutput
* GetBucketWebsiteOutput `object`
  * ErrorDocument
    * Key **required**
  * IndexDocument
    * Suffix **required**
  * RedirectAllRequestsTo
    * HostName **required**
    * Protocol
  * RoutingRules
    * items
      * Condition
        * HttpErrorCodeReturnedEquals
        * KeyPrefixEquals
      * Redirect **required**
        * HostName
        * HttpRedirectCode
        * Protocol
        * ReplaceKeyPrefixWith
        * ReplaceKeyWith

### GetBucketWebsiteRequest
* GetBucketWebsiteRequest `object`

### GetObjectAclOutput
* GetObjectAclOutput `object`
  * Grants
    * items
      * Grantee
        * DisplayName
        * EmailAddress
        * ID
        * Type **required**
        * URI
      * Permission
  * Owner
    * DisplayName
    * ID

### GetObjectAclRequest
* GetObjectAclRequest `object`

### GetObjectLegalHoldOutput
* GetObjectLegalHoldOutput `object`
  * LegalHold
    * Status

### GetObjectLegalHoldRequest
* GetObjectLegalHoldRequest `object`

### GetObjectLockConfigurationOutput
* GetObjectLockConfigurationOutput `object`
  * ObjectLockConfiguration
    * ObjectLockEnabled
    * Rule
      * DefaultRetention
        * Days
        * Mode
        * Years

### GetObjectLockConfigurationRequest
* GetObjectLockConfigurationRequest `object`

### GetObjectOutput
* GetObjectOutput `object`
  * Body
  * Metadata

### GetObjectRequest
* GetObjectRequest `object`

### GetObjectRetentionOutput
* GetObjectRetentionOutput `object`
  * Retention
    * Mode
    * RetainUntilDate

### GetObjectRetentionRequest
* GetObjectRetentionRequest `object`

### GetObjectTaggingOutput
* GetObjectTaggingOutput `object`
  * TagSet **required**
    * items
      * Key **required**
      * Value **required**

### GetObjectTaggingRequest
* GetObjectTaggingRequest `object`

### GetObjectTorrentOutput
* GetObjectTorrentOutput `object`
  * Body

### GetObjectTorrentRequest
* GetObjectTorrentRequest `object`

### GetPublicAccessBlockOutput
* GetPublicAccessBlockOutput `object`
  * PublicAccessBlockConfiguration
    * BlockPublicAcls
    * BlockPublicPolicy
    * IgnorePublicAcls
    * RestrictPublicBuckets

### GetPublicAccessBlockRequest
* GetPublicAccessBlockRequest `object`

### GlacierJobParameters
* GlacierJobParameters `object`: Container for S3 Glacier job parameters.
  * Tier **required**

### Grant
* Grant `object`: Container for grant information.
  * Grantee
    * DisplayName
    * EmailAddress
    * ID
    * Type **required**
    * URI
  * Permission

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
* Grantee `object`: Container for the person being granted permissions.
  * DisplayName
  * EmailAddress
  * ID
  * Type **required**
  * URI

### Grants
* Grants `array`
  * items
    * Grantee
      * DisplayName
      * EmailAddress
      * ID
      * Type **required**
      * URI
    * Permission

### HeadBucketRequest
* HeadBucketRequest `object`

### HeadObjectOutput
* HeadObjectOutput `object`
  * Metadata

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
* IndexDocument `object`: Container for the <code>Suffix</code> element.
  * Suffix **required**

### Initiated
* Initiated `string`

### Initiator
* Initiator `object`: Container element that identifies who initiated the multipart upload. 
  * DisplayName
  * ID

### InputSerialization
* InputSerialization `object`: Describes the serialization format of the object.
  * CSV
    * AllowQuotedRecordDelimiter
    * Comments
    * FieldDelimiter
    * FileHeaderInfo
    * QuoteCharacter
    * QuoteEscapeCharacter
    * RecordDelimiter
  * CompressionType
  * JSON
    * Type
  * Parquet

### IntelligentTieringAccessTier
* IntelligentTieringAccessTier `string` (values: ARCHIVE_ACCESS, DEEP_ARCHIVE_ACCESS)

### IntelligentTieringAndOperator
* IntelligentTieringAndOperator `object`: A container for specifying S3 Intelligent-Tiering filters. The filters determine the subset of objects to which the rule applies.
  * Prefix
  * Tags
    * items
      * Key **required**
      * Value **required**

### IntelligentTieringConfiguration
* IntelligentTieringConfiguration `object`: <p>Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.</p> <p>For information about the S3 Intelligent-Tiering storage class, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p>
  * Filter
    * And
      * Prefix
      * Tags
        * items
          * Key **required**
          * Value **required**
    * Prefix
    * Tag [Tag](#tag)
  * Id **required**
  * Status **required**
  * Tierings **required**
    * items [Tiering](#tiering)

### IntelligentTieringConfigurationList
* IntelligentTieringConfigurationList `array`
  * items [IntelligentTieringConfiguration](#intelligenttieringconfiguration)

### IntelligentTieringDays
* IntelligentTieringDays `integer`

### IntelligentTieringFilter
* IntelligentTieringFilter `object`: The <code>Filter</code> is used to identify objects that the S3 Intelligent-Tiering configuration applies to.
  * And
    * Prefix
    * Tags
      * items
        * Key **required**
        * Value **required**
  * Prefix
  * Tag [Tag](#tag)

### IntelligentTieringId
* IntelligentTieringId `string`

### IntelligentTieringStatus
* IntelligentTieringStatus `string` (values: Enabled, Disabled)

### InvalidObjectState


### InventoryConfiguration
* InventoryConfiguration `object`: Specifies the inventory configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon Simple Storage Service API Reference</i>. 
  * Destination **required**
    * S3BucketDestination **required**
      * AccountId
      * Bucket **required**
      * Encryption
        * SSEKMS
          * KeyId **required**
        * SSES3
      * Format **required**
      * Prefix
  * Filter
    * Prefix **required**
  * Id **required**
  * IncludedObjectVersions **required**
  * IsEnabled **required**
  * OptionalFields
    * items
  * Schedule **required**
    * Frequency **required**

### InventoryConfigurationList
* InventoryConfigurationList `array`
  * items [InventoryConfiguration](#inventoryconfiguration)

### InventoryDestination
* InventoryDestination `object`: Specifies the inventory configuration for an Amazon S3 bucket.
  * S3BucketDestination **required**
    * AccountId
    * Bucket **required**
    * Encryption
      * SSEKMS
        * KeyId **required**
      * SSES3
    * Format **required**
    * Prefix

### InventoryEncryption
* InventoryEncryption `object`: Contains the type of server-side encryption used to encrypt the inventory results.
  * SSEKMS
    * KeyId **required**
  * SSES3

### InventoryFilter
* InventoryFilter `object`: Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.
  * Prefix **required**

### InventoryFormat
* InventoryFormat `string` (values: CSV, ORC, Parquet)

### InventoryFrequency
* InventoryFrequency `string` (values: Daily, Weekly)

### InventoryId
* InventoryId `string`

### InventoryIncludedObjectVersions
* InventoryIncludedObjectVersions `string` (values: All, Current)

### InventoryOptionalField
* InventoryOptionalField `string` (values: Size, LastModifiedDate, StorageClass, ETag, IsMultipartUploaded, ReplicationStatus, EncryptionStatus, ObjectLockRetainUntilDate, ObjectLockMode, ObjectLockLegalHoldStatus, IntelligentTieringAccessTier)

### InventoryOptionalFields
* InventoryOptionalFields `array`
  * items

### InventoryS3BucketDestination
* InventoryS3BucketDestination `object`: Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.
  * AccountId
  * Bucket **required**
  * Encryption
    * SSEKMS
      * KeyId **required**
    * SSES3
  * Format **required**
  * Prefix

### InventorySchedule
* InventorySchedule `object`: Specifies the schedule for generating inventory results.
  * Frequency **required**

### IsEnabled
* IsEnabled `boolean`

### IsLatest
* IsLatest `boolean`

### IsPublic
* IsPublic `boolean`

### IsTruncated
* IsTruncated `boolean`

### JSONInput
* JSONInput `object`: Specifies JSON as object's input serialization format.
  * Type

### JSONOutput
* JSONOutput `object`: Specifies JSON as request's output serialization format.
  * RecordDelimiter

### JSONType
* JSONType `string` (values: DOCUMENT, LINES)

### KMSContext
* KMSContext `string`

### KeyCount
* KeyCount `integer`

### KeyMarker
* KeyMarker `string`

### KeyPrefixEquals
* KeyPrefixEquals `string`

### LambdaFunctionArn
* LambdaFunctionArn `string`

### LambdaFunctionConfiguration
* LambdaFunctionConfiguration `object`: A container for specifying the configuration for AWS Lambda notifications.
  * Events **required**
    * items [Event](#event)
  * Filter [NotificationConfigurationFilter](#notificationconfigurationfilter)
  * Id [NotificationId](#notificationid)
  * LambdaFunctionArn **required**

### LambdaFunctionConfigurationList
* LambdaFunctionConfigurationList `array`
  * items [LambdaFunctionConfiguration](#lambdafunctionconfiguration)

### LastModified
* LastModified `string`

### LifecycleConfiguration
* LifecycleConfiguration `object`: Container for lifecycle rules. You can add as many as 1000 rules.
  * Rules **required**
    * items [Rule](#rule)

### LifecycleExpiration
* LifecycleExpiration `object`: Container for the expiration for the lifecycle of the object.
  * Date
  * Days
  * ExpiredObjectDeleteMarker

### LifecycleRule
* LifecycleRule `object`: A lifecycle rule for individual objects in an Amazon S3 bucket.
  * AbortIncompleteMultipartUpload [AbortIncompleteMultipartUpload](#abortincompletemultipartupload)
  * Expiration
    * Date
    * Days
    * ExpiredObjectDeleteMarker
  * Filter [LifecycleRuleFilter](#lifecyclerulefilter)
  * ID
  * NoncurrentVersionExpiration [NoncurrentVersionExpiration](#noncurrentversionexpiration)
  * NoncurrentVersionTransitions
    * items [NoncurrentVersionTransition](#noncurrentversiontransition)
  * Prefix
  * Status **required**
  * Transitions
    * items [Transition](#transition)

### LifecycleRuleAndOperator
* LifecycleRuleAndOperator `object`: This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.
  * Prefix
  * Tags
    * items
      * Key **required**
      * Value **required**

### LifecycleRuleFilter
* LifecycleRuleFilter `object`: The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or <code>And</code> specified.
  * And [LifecycleRuleAndOperator](#lifecycleruleandoperator)
  * Prefix
  * Tag
    * Key **required**
    * Value **required**

### LifecycleRules
* LifecycleRules `array`
  * items [LifecycleRule](#lifecyclerule)

### ListBucketAnalyticsConfigurationsOutput
* ListBucketAnalyticsConfigurationsOutput `object`
  * AnalyticsConfigurationList
    * items [AnalyticsConfiguration](#analyticsconfiguration)
  * ContinuationToken
  * IsTruncated
  * NextContinuationToken

### ListBucketAnalyticsConfigurationsRequest
* ListBucketAnalyticsConfigurationsRequest `object`

### ListBucketIntelligentTieringConfigurationsOutput
* ListBucketIntelligentTieringConfigurationsOutput `object`
  * ContinuationToken
  * IntelligentTieringConfigurationList
    * items [IntelligentTieringConfiguration](#intelligenttieringconfiguration)
  * IsTruncated
  * NextContinuationToken

### ListBucketIntelligentTieringConfigurationsRequest
* ListBucketIntelligentTieringConfigurationsRequest `object`

### ListBucketInventoryConfigurationsOutput
* ListBucketInventoryConfigurationsOutput `object`
  * ContinuationToken
  * InventoryConfigurationList
    * items [InventoryConfiguration](#inventoryconfiguration)
  * IsTruncated
  * NextContinuationToken

### ListBucketInventoryConfigurationsRequest
* ListBucketInventoryConfigurationsRequest `object`

### ListBucketMetricsConfigurationsOutput
* ListBucketMetricsConfigurationsOutput `object`
  * ContinuationToken
  * IsTruncated
  * MetricsConfigurationList
    * items [MetricsConfiguration](#metricsconfiguration)
  * NextContinuationToken

### ListBucketMetricsConfigurationsRequest
* ListBucketMetricsConfigurationsRequest `object`

### ListBucketsOutput
* ListBucketsOutput `object`
  * Buckets
    * items
      * CreationDate
      * Name
  * Owner
    * DisplayName
    * ID

### ListMultipartUploadsOutput
* ListMultipartUploadsOutput `object`
  * Bucket
  * CommonPrefixes
    * items [CommonPrefix](#commonprefix)
  * Delimiter
  * EncodingType
  * IsTruncated
  * KeyMarker
  * MaxUploads
  * NextKeyMarker
  * NextUploadIdMarker
  * Prefix
  * UploadIdMarker
  * Uploads
    * items [MultipartUpload](#multipartupload)

### ListMultipartUploadsRequest
* ListMultipartUploadsRequest `object`

### ListObjectVersionsOutput
* ListObjectVersionsOutput `object`
  * CommonPrefixes
    * items [CommonPrefix](#commonprefix)
  * DeleteMarkers
    * items [DeleteMarkerEntry](#deletemarkerentry)
  * Delimiter
  * EncodingType
  * IsTruncated
  * KeyMarker
  * MaxKeys
  * Name
  * NextKeyMarker
  * NextVersionIdMarker
  * Prefix
  * VersionIdMarker
  * Versions
    * items [ObjectVersion](#objectversion)

### ListObjectVersionsRequest
* ListObjectVersionsRequest `object`

### ListObjectsOutput
* ListObjectsOutput `object`
  * CommonPrefixes
    * items [CommonPrefix](#commonprefix)
  * Contents
    * items [Object](#object)
  * Delimiter
  * EncodingType
  * IsTruncated
  * Marker
  * MaxKeys
  * Name
  * NextMarker
  * Prefix

### ListObjectsRequest
* ListObjectsRequest `object`

### ListObjectsV2Output
* ListObjectsV2Output `object`
  * CommonPrefixes
    * items [CommonPrefix](#commonprefix)
  * Contents
    * items [Object](#object)
  * ContinuationToken
  * Delimiter
  * EncodingType
  * IsTruncated
  * KeyCount
  * MaxKeys
  * Name
  * NextContinuationToken
  * Prefix
  * StartAfter

### ListObjectsV2Request
* ListObjectsV2Request `object`

### ListPartsOutput
* ListPartsOutput `object`
  * Bucket
  * Initiator
    * DisplayName
    * ID
  * IsTruncated
  * Key
  * MaxParts
  * NextPartNumberMarker
  * Owner
    * DisplayName
    * ID
  * PartNumberMarker
  * Parts
    * items [Part](#part)
  * StorageClass
  * UploadId

### ListPartsRequest
* ListPartsRequest `object`

### Location
* Location `string`

### LocationPrefix
* LocationPrefix `string`

### LoggingEnabled
* LoggingEnabled `object`: Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the <i>Amazon Simple Storage Service API Reference</i>.
  * TargetBucket **required**
  * TargetGrants
    * items
      * Grantee
        * DisplayName
        * EmailAddress
        * ID
        * Type **required**
        * URI
      * Permission
  * TargetPrefix **required**

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
* Metadata `object`

### MetadataDirective
* MetadataDirective `string` (values: COPY, REPLACE)

### MetadataEntry
* MetadataEntry `object`: A metadata key-value pair to store with an object.
  * Name
  * Value

### MetadataKey
* MetadataKey `string`

### MetadataValue
* MetadataValue `string`

### Metrics
* Metrics `object`:  A container specifying replication metrics-related settings enabling replication metrics and events.
  * EventThreshold
    * Minutes
  * Status **required**

### MetricsAndOperator
* MetricsAndOperator `object`: A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.
  * Prefix
  * Tags
    * items
      * Key **required**
      * Value **required**

### MetricsConfiguration
* MetricsConfiguration `object`: Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html"> PUT Bucket metrics</a> in the <i>Amazon Simple Storage Service API Reference</i>.
  * Filter
    * And
      * Prefix
      * Tags
        * items
          * Key **required**
          * Value **required**
    * Prefix
    * Tag
      * Key **required**
      * Value **required**
  * Id **required**

### MetricsConfigurationList
* MetricsConfigurationList `array`
  * items [MetricsConfiguration](#metricsconfiguration)

### MetricsFilter
* MetricsFilter `object`: Specifies a metrics configuration filter. The metrics configuration only includes objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator).
  * And
    * Prefix
    * Tags
      * items
        * Key **required**
        * Value **required**
  * Prefix
  * Tag
    * Key **required**
    * Value **required**

### MetricsId
* MetricsId `string`

### MetricsStatus
* MetricsStatus `string` (values: Enabled, Disabled)

### Minutes
* Minutes `integer`

### MissingMeta
* MissingMeta `integer`

### MultipartUpload
* MultipartUpload `object`: Container for the <code>MultipartUpload</code> for the Amazon S3 object.
  * Initiated
  * Initiator
    * DisplayName
    * ID
  * Key
  * Owner
    * DisplayName
    * ID
  * StorageClass
  * UploadId

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


### NoSuchKey


### NoSuchUpload


### NoncurrentVersionExpiration
* NoncurrentVersionExpiration `object`: Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.
  * NoncurrentDays

### NoncurrentVersionTransition
* NoncurrentVersionTransition `object`: Container for the transition rule that describes when noncurrent objects transition to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class at a specific period in the object's lifetime.
  * NoncurrentDays
  * StorageClass

### NoncurrentVersionTransitionList
* NoncurrentVersionTransitionList `array`
  * items [NoncurrentVersionTransition](#noncurrentversiontransition)

### NotificationConfiguration
* NotificationConfiguration `object`: A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket.
  * LambdaFunctionConfigurations
    * items [LambdaFunctionConfiguration](#lambdafunctionconfiguration)
  * QueueConfigurations
    * items [QueueConfiguration](#queueconfiguration)
  * TopicConfigurations
    * items [TopicConfiguration](#topicconfiguration)

### NotificationConfigurationDeprecated
* NotificationConfigurationDeprecated `object`
  * CloudFunctionConfiguration
    * CloudFunction
    * Event
    * Events
      * items [Event](#event)
    * Id [NotificationId](#notificationid)
    * InvocationRole
  * QueueConfiguration
    * Event
    * Events
      * items [Event](#event)
    * Id [NotificationId](#notificationid)
    * Queue
  * TopicConfiguration
    * Event
    * Events
      * items [Event](#event)
    * Id [NotificationId](#notificationid)
    * Topic

### NotificationConfigurationFilter
* NotificationConfigurationFilter `object`: Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * Key
    * FilterRules
      * items [FilterRule](#filterrule)

### NotificationId
* NotificationId `string`: An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.

### Object
* Object `object`: An object consists of data and its descriptive metadata.
  * ETag
  * Key
  * LastModified
  * Owner
    * DisplayName
    * ID
  * Size
  * StorageClass

### ObjectAlreadyInActiveTierError


### ObjectCannedACL
* ObjectCannedACL `string` (values: private, public-read, public-read-write, authenticated-read, aws-exec-read, bucket-owner-read, bucket-owner-full-control)

### ObjectIdentifier
* ObjectIdentifier `object`: Object Identifier is unique value to identify objects.
  * Key **required**
  * VersionId

### ObjectIdentifierList
* ObjectIdentifierList `array`
  * items [ObjectIdentifier](#objectidentifier)

### ObjectKey
* ObjectKey `string`

### ObjectList
* ObjectList `array`
  * items [Object](#object)

### ObjectLockConfiguration
* ObjectLockConfiguration `object`: The container element for Object Lock configuration parameters.
  * ObjectLockEnabled
  * Rule
    * DefaultRetention
      * Days
      * Mode
      * Years

### ObjectLockEnabled
* ObjectLockEnabled `string` (values: Enabled)

### ObjectLockEnabledForBucket
* ObjectLockEnabledForBucket `boolean`

### ObjectLockLegalHold
* ObjectLockLegalHold `object`: A Legal Hold configuration for an object.
  * Status

### ObjectLockLegalHoldStatus
* ObjectLockLegalHoldStatus `string` (values: ON, OFF)

### ObjectLockMode
* ObjectLockMode `string` (values: GOVERNANCE, COMPLIANCE)

### ObjectLockRetainUntilDate
* ObjectLockRetainUntilDate `string`

### ObjectLockRetention
* ObjectLockRetention `object`: A Retention configuration for an object.
  * Mode
  * RetainUntilDate

### ObjectLockRetentionMode
* ObjectLockRetentionMode `string` (values: GOVERNANCE, COMPLIANCE)

### ObjectLockRule
* ObjectLockRule `object`: The container element for an Object Lock rule.
  * DefaultRetention
    * Days
    * Mode
    * Years

### ObjectLockToken
* ObjectLockToken `string`

### ObjectNotInActiveTierError


### ObjectOwnership
* ObjectOwnership `string` (values: BucketOwnerPreferred, ObjectWriter): <p>The container element for object ownership for a bucket's ownership controls.</p> <p>BucketOwnerPreferred - Objects uploaded to the bucket change ownership to the bucket owner if the objects are uploaded with the <code>bucket-owner-full-control</code> canned ACL.</p> <p>ObjectWriter - The uploading account will own the object if the object is uploaded with the <code>bucket-owner-full-control</code> canned ACL.</p>

### ObjectStorageClass
* ObjectStorageClass `string` (values: STANDARD, REDUCED_REDUNDANCY, GLACIER, STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING, DEEP_ARCHIVE, OUTPOSTS)

### ObjectVersion
* ObjectVersion `object`: The version of an object.
  * ETag
  * IsLatest
  * Key
  * LastModified
  * Owner
    * DisplayName
    * ID
  * Size
  * StorageClass
  * VersionId

### ObjectVersionId
* ObjectVersionId `string`

### ObjectVersionList
* ObjectVersionList `array`
  * items [ObjectVersion](#objectversion)

### ObjectVersionStorageClass
* ObjectVersionStorageClass `string` (values: STANDARD)

### OutputLocation
* OutputLocation `object`: Describes the location where the restore job's output is stored.
  * S3
    * AccessControlList
      * items
        * Grantee
          * DisplayName
          * EmailAddress
          * ID
          * Type **required**
          * URI
        * Permission
    * BucketName **required**
    * CannedACL
    * Encryption [Encryption](#encryption)
    * Prefix **required**
    * StorageClass
    * Tagging
      * TagSet **required**
        * items
          * Key **required**
          * Value **required**
    * UserMetadata
      * items
        * Name
        * Value

### OutputSerialization
* OutputSerialization `object`: Describes how results of the Select job are serialized.
  * CSV
    * FieldDelimiter
    * QuoteCharacter
    * QuoteEscapeCharacter
    * QuoteFields
    * RecordDelimiter
  * JSON
    * RecordDelimiter

### Owner
* Owner `object`: Container for the owner's display name and ID.
  * DisplayName
  * ID

### OwnerOverride
* OwnerOverride `string` (values: Destination)

### OwnershipControls
* OwnershipControls `object`: The container element for a bucket's ownership controls.
  * Rules **required**
    * items [OwnershipControlsRule](#ownershipcontrolsrule)

### OwnershipControlsRule
* OwnershipControlsRule `object`: The container element for an ownership control rule.
  * ObjectOwnership **required** [ObjectOwnership](#objectownership)

### OwnershipControlsRules
* OwnershipControlsRules `array`
  * items [OwnershipControlsRule](#ownershipcontrolsrule)

### ParquetInput
* ParquetInput `object`: Container for Parquet.

### Part
* Part `object`: Container for elements related to a part.
  * ETag
  * LastModified
  * PartNumber
  * Size

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

### PolicyStatus
* PolicyStatus `object`: The container element for a bucket's policy status.
  * IsPublic

### Prefix
* Prefix `string`

### Priority
* Priority `integer`

### Progress
* Progress `object`: This data type contains information about progress of an operation.
  * BytesProcessed
  * BytesReturned
  * BytesScanned

### ProgressEvent
* ProgressEvent `object`: This data type contains information about the progress event of an operation.
  * Details
    * BytesProcessed
    * BytesReturned
    * BytesScanned

### Protocol
* Protocol `string` (values: http, https)

### PublicAccessBlockConfiguration
* PublicAccessBlockConfiguration `object`: The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. 
  * BlockPublicAcls
  * BlockPublicPolicy
  * IgnorePublicAcls
  * RestrictPublicBuckets

### PutBucketAccelerateConfigurationRequest
* PutBucketAccelerateConfigurationRequest `object`
  * AccelerateConfiguration **required**
    * Status

### PutBucketAclRequest
* PutBucketAclRequest `object`
  * AccessControlPolicy
    * Grants
      * items
        * Grantee
          * DisplayName
          * EmailAddress
          * ID
          * Type **required**
          * URI
        * Permission
    * Owner
      * DisplayName
      * ID

### PutBucketAnalyticsConfigurationRequest
* PutBucketAnalyticsConfigurationRequest `object`
  * AnalyticsConfiguration **required**
    * Filter
      * And
        * Prefix
        * Tags
          * items
      * Prefix
      * Tag
        * Key **required**
        * Value **required**
    * Id **required**
    * StorageClassAnalysis **required**
      * DataExport
        * Destination **required**
          * S3BucketDestination **required**
        * OutputSchemaVersion **required**

### PutBucketCorsRequest
* PutBucketCorsRequest `object`
  * CORSConfiguration **required**
    * CORSRules **required**
      * items [CORSRule](#corsrule)

### PutBucketEncryptionRequest
* PutBucketEncryptionRequest `object`
  * ServerSideEncryptionConfiguration **required** [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)

### PutBucketIntelligentTieringConfigurationRequest
* PutBucketIntelligentTieringConfigurationRequest `object`
  * IntelligentTieringConfiguration **required**
    * Filter
      * And
        * Prefix
        * Tags
          * items
      * Prefix
      * Tag [Tag](#tag)
    * Id **required**
    * Status **required**
    * Tierings **required**
      * items [Tiering](#tiering)

### PutBucketInventoryConfigurationRequest
* PutBucketInventoryConfigurationRequest `object`
  * InventoryConfiguration **required**
    * Destination **required**
      * S3BucketDestination **required**
        * AccountId
        * Bucket **required**
        * Encryption
          * SSEKMS
          * SSES3
        * Format **required**
        * Prefix
    * Filter
      * Prefix **required**
    * Id **required**
    * IncludedObjectVersions **required**
    * IsEnabled **required**
    * OptionalFields
      * items
    * Schedule **required**
      * Frequency **required**

### PutBucketLifecycleConfigurationRequest
* PutBucketLifecycleConfigurationRequest `object`
  * LifecycleConfiguration
    * Rules **required**
      * items [LifecycleRule](#lifecyclerule)

### PutBucketLifecycleRequest
* PutBucketLifecycleRequest `object`
  * LifecycleConfiguration
    * Rules **required**
      * items [Rule](#rule)

### PutBucketLoggingRequest
* PutBucketLoggingRequest `object`
  * BucketLoggingStatus **required**
    * LoggingEnabled [LoggingEnabled](#loggingenabled)

### PutBucketMetricsConfigurationRequest
* PutBucketMetricsConfigurationRequest `object`
  * MetricsConfiguration **required**
    * Filter
      * And
        * Prefix
        * Tags
          * items
      * Prefix
      * Tag
        * Key **required**
        * Value **required**
    * Id **required**

### PutBucketNotificationConfigurationRequest
* PutBucketNotificationConfigurationRequest `object`
  * NotificationConfiguration **required** [NotificationConfiguration](#notificationconfiguration)

### PutBucketNotificationRequest
* PutBucketNotificationRequest `object`
  * NotificationConfiguration **required**
    * CloudFunctionConfiguration
      * CloudFunction
      * Event
      * Events
        * items [Event](#event)
      * Id [NotificationId](#notificationid)
      * InvocationRole
    * QueueConfiguration
      * Event
      * Events
        * items [Event](#event)
      * Id [NotificationId](#notificationid)
      * Queue
    * TopicConfiguration
      * Event
      * Events
        * items [Event](#event)
      * Id [NotificationId](#notificationid)
      * Topic

### PutBucketOwnershipControlsRequest
* PutBucketOwnershipControlsRequest `object`
  * OwnershipControls **required**
    * Rules **required**
      * items [OwnershipControlsRule](#ownershipcontrolsrule)

### PutBucketPolicyRequest
* PutBucketPolicyRequest `object`
  * Policy **required**

### PutBucketReplicationRequest
* PutBucketReplicationRequest `object`
  * ReplicationConfiguration **required** [ReplicationConfiguration](#replicationconfiguration)

### PutBucketRequestPaymentRequest
* PutBucketRequestPaymentRequest `object`
  * RequestPaymentConfiguration **required**
    * Payer **required**

### PutBucketTaggingRequest
* PutBucketTaggingRequest `object`
  * Tagging **required**
    * TagSet **required**
      * items
        * Key **required**
        * Value **required**

### PutBucketVersioningRequest
* PutBucketVersioningRequest `object`
  * VersioningConfiguration **required**
    * MFADelete
    * Status

### PutBucketWebsiteRequest
* PutBucketWebsiteRequest `object`
  * WebsiteConfiguration **required**
    * ErrorDocument
      * Key **required**
    * IndexDocument
      * Suffix **required**
    * RedirectAllRequestsTo
      * HostName **required**
      * Protocol
    * RoutingRules
      * items
        * Condition
          * HttpErrorCodeReturnedEquals
          * KeyPrefixEquals
        * Redirect **required**
          * HostName
          * HttpRedirectCode
          * Protocol
          * ReplaceKeyPrefixWith
          * ReplaceKeyWith

### PutObjectAclOutput
* PutObjectAclOutput `object`

### PutObjectAclRequest
* PutObjectAclRequest `object`
  * AccessControlPolicy
    * Grants
      * items
        * Grantee
          * DisplayName
          * EmailAddress
          * ID
          * Type **required**
          * URI
        * Permission
    * Owner
      * DisplayName
      * ID

### PutObjectLegalHoldOutput
* PutObjectLegalHoldOutput `object`

### PutObjectLegalHoldRequest
* PutObjectLegalHoldRequest `object`
  * LegalHold
    * Status

### PutObjectLockConfigurationOutput
* PutObjectLockConfigurationOutput `object`

### PutObjectLockConfigurationRequest
* PutObjectLockConfigurationRequest `object`
  * ObjectLockConfiguration
    * ObjectLockEnabled
    * Rule
      * DefaultRetention
        * Days
        * Mode
        * Years

### PutObjectOutput
* PutObjectOutput `object`

### PutObjectRequest
* PutObjectRequest `object`
  * Body
  * Metadata

### PutObjectRetentionOutput
* PutObjectRetentionOutput `object`

### PutObjectRetentionRequest
* PutObjectRetentionRequest `object`
  * Retention
    * Mode
    * RetainUntilDate

### PutObjectTaggingOutput
* PutObjectTaggingOutput `object`

### PutObjectTaggingRequest
* PutObjectTaggingRequest `object`
  * Tagging **required**
    * TagSet **required**
      * items
        * Key **required**
        * Value **required**

### PutPublicAccessBlockRequest
* PutPublicAccessBlockRequest `object`
  * PublicAccessBlockConfiguration **required**
    * BlockPublicAcls
    * BlockPublicPolicy
    * IgnorePublicAcls
    * RestrictPublicBuckets

### QueueArn
* QueueArn `string`

### QueueConfiguration
* QueueConfiguration `object`: Specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events.
  * Events **required**
    * items [Event](#event)
  * Filter [NotificationConfigurationFilter](#notificationconfigurationfilter)
  * Id [NotificationId](#notificationid)
  * QueueArn **required**

### QueueConfigurationDeprecated
* QueueConfigurationDeprecated `object`: This data type is deprecated. Use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_QueueConfiguration.html">QueueConfiguration</a> for the same purposes. This data type specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events. 
  * Event
  * Events
    * items [Event](#event)
  * Id [NotificationId](#notificationid)
  * Queue

### QueueConfigurationList
* QueueConfigurationList `array`
  * items [QueueConfiguration](#queueconfiguration)

### Quiet
* Quiet `boolean`

### QuoteCharacter
* QuoteCharacter `string`

### QuoteEscapeCharacter
* QuoteEscapeCharacter `string`

### QuoteFields
* QuoteFields `string` (values: ALWAYS, ASNEEDED)

### Range
* Range `string`

### RecordDelimiter
* RecordDelimiter `string`

### RecordsEvent
* RecordsEvent `object`: The container for the records event.
  * Payload

### Redirect
* Redirect `object`: Specifies how requests are redirected. In the event of an error, you can specify a different error code to return.
  * HostName
  * HttpRedirectCode
  * Protocol
  * ReplaceKeyPrefixWith
  * ReplaceKeyWith

### RedirectAllRequestsTo
* RedirectAllRequestsTo `object`: Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
  * HostName **required**
  * Protocol

### ReplaceKeyPrefixWith
* ReplaceKeyPrefixWith `string`

### ReplaceKeyWith
* ReplaceKeyWith `string`

### ReplicaKmsKeyID
* ReplicaKmsKeyID `string`

### ReplicaModifications
* ReplicaModifications `object`: <p>A filter that you can specify for selection for modifications on replicas. Amazon S3 doesn't replicate replica modifications by default. In the latest version of replication configuration (when <code>Filter</code> is specified), you can specify this element and set the status to <code>Enabled</code> to replicate modifications on replicas. </p> <note> <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the replication configuration is the earlier version, V1. In the earlier version, this element is not allowed.</p> </note>
  * Status **required**

### ReplicaModificationsStatus
* ReplicaModificationsStatus `string` (values: Enabled, Disabled)

### ReplicationConfiguration
* ReplicationConfiguration `object`: A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.
  * Role **required**
  * Rules **required**
    * items [ReplicationRule](#replicationrule)

### ReplicationRule
* ReplicationRule `object`: Specifies which Amazon S3 objects to replicate and where to store the replicas.
  * DeleteMarkerReplication [DeleteMarkerReplication](#deletemarkerreplication)
  * Destination **required**
    * AccessControlTranslation
      * Owner **required**
    * Account
    * Bucket **required**
    * EncryptionConfiguration
      * ReplicaKmsKeyID
    * Metrics
      * EventThreshold
        * Minutes
      * Status **required**
    * ReplicationTime
      * Status **required**
      * Time **required**
        * Minutes
    * StorageClass
  * ExistingObjectReplication
    * Status **required**
  * Filter [ReplicationRuleFilter](#replicationrulefilter)
  * ID
  * Prefix
  * Priority
  * SourceSelectionCriteria
    * ReplicaModifications
      * Status **required**
    * SseKmsEncryptedObjects
      * Status **required**
  * Status **required**

### ReplicationRuleAndOperator
* ReplicationRuleAndOperator `object`: <p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. </p> <p>For example:</p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> tag. </p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> tag</p> </li> </ul>
  * Prefix
  * Tags
    * items
      * Key **required**
      * Value **required**

### ReplicationRuleFilter
* ReplicationRuleFilter `object`: A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an <code>And</code> child element.
  * And
    * Prefix
    * Tags
      * items
        * Key **required**
        * Value **required**
  * Prefix
  * Tag
    * Key **required**
    * Value **required**

### ReplicationRuleStatus
* ReplicationRuleStatus `string` (values: Enabled, Disabled)

### ReplicationRules
* ReplicationRules `array`
  * items [ReplicationRule](#replicationrule)

### ReplicationStatus
* ReplicationStatus `string` (values: COMPLETE, PENDING, FAILED, REPLICA)

### ReplicationTime
* ReplicationTime `object`:  A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a <code>Metrics</code> block. 
  * Status **required**
  * Time **required**
    * Minutes

### ReplicationTimeStatus
* ReplicationTimeStatus `string` (values: Enabled, Disabled)

### ReplicationTimeValue
* ReplicationTimeValue `object`:  A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics <code>EventThreshold</code>. 
  * Minutes

### RequestCharged
* RequestCharged `string` (values: requester): If present, indicates that the requester was successfully charged for the request.

### RequestPayer
* RequestPayer `string` (values: requester): Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.

### RequestPaymentConfiguration
* RequestPaymentConfiguration `object`: Container for Payer.
  * Payer **required**

### RequestProgress
* RequestProgress `object`: Container for specifying if periodic <code>QueryProgress</code> messages should be sent.
  * Enabled

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

### RestoreOutputPath
* RestoreOutputPath `string`

### RestoreRequest
* RestoreRequest `object`: Container for restore job parameters.
  * Days
  * Description
  * GlacierJobParameters
    * Tier **required**
  * OutputLocation
    * S3
      * AccessControlList
        * items
          * Grantee
          * Permission
      * BucketName **required**
      * CannedACL
      * Encryption [Encryption](#encryption)
      * Prefix **required**
      * StorageClass
      * Tagging
        * TagSet **required**
          * items
      * UserMetadata
        * items
          * Name
          * Value
  * SelectParameters
    * Expression **required**
    * ExpressionType **required**
    * InputSerialization **required**
      * CSV
        * AllowQuotedRecordDelimiter
        * Comments
        * FieldDelimiter
        * FileHeaderInfo
        * QuoteCharacter
        * QuoteEscapeCharacter
        * RecordDelimiter
      * CompressionType
      * JSON
        * Type
      * Parquet
    * OutputSerialization **required**
      * CSV
        * FieldDelimiter
        * QuoteCharacter
        * QuoteEscapeCharacter
        * QuoteFields
        * RecordDelimiter
      * JSON
        * RecordDelimiter
  * Tier
  * Type

### RestoreRequestType
* RestoreRequestType `string` (values: SELECT)

### Role
* Role `string`

### RoutingRule
* RoutingRule `object`: Specifies the redirect behavior and when a redirect is applied. For more information about routing rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html#advanced-conditional-redirects">Configuring advanced conditional redirects</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * Condition
    * HttpErrorCodeReturnedEquals
    * KeyPrefixEquals
  * Redirect **required**
    * HostName
    * HttpRedirectCode
    * Protocol
    * ReplaceKeyPrefixWith
    * ReplaceKeyWith

### RoutingRules
* RoutingRules `array`
  * items
    * Condition
      * HttpErrorCodeReturnedEquals
      * KeyPrefixEquals
    * Redirect **required**
      * HostName
      * HttpRedirectCode
      * Protocol
      * ReplaceKeyPrefixWith
      * ReplaceKeyWith

### Rule
* Rule `object`: Specifies lifecycle rules for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html">Put Bucket Lifecycle Configuration</a> in the <i>Amazon Simple Storage Service API Reference</i>. For examples, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html#API_PutBucketLifecycleConfiguration_Examples">Put Bucket Lifecycle Configuration Examples</a> 
  * AbortIncompleteMultipartUpload [AbortIncompleteMultipartUpload](#abortincompletemultipartupload)
  * Expiration
    * Date
    * Days
    * ExpiredObjectDeleteMarker
  * ID
  * NoncurrentVersionExpiration [NoncurrentVersionExpiration](#noncurrentversionexpiration)
  * NoncurrentVersionTransition [NoncurrentVersionTransition](#noncurrentversiontransition)
  * Prefix **required**
  * Status **required**
  * Transition
    * Date
    * Days
    * StorageClass

### Rules
* Rules `array`
  * items [Rule](#rule)

### S3KeyFilter
* S3KeyFilter `object`: A container for object key name prefix and suffix filtering rules.
  * FilterRules
    * items [FilterRule](#filterrule)

### S3Location
* S3Location `object`: Describes an Amazon S3 location that will receive the results of the restore request.
  * AccessControlList
    * items
      * Grantee
        * DisplayName
        * EmailAddress
        * ID
        * Type **required**
        * URI
      * Permission
  * BucketName **required**
  * CannedACL
  * Encryption [Encryption](#encryption)
  * Prefix **required**
  * StorageClass
  * Tagging
    * TagSet **required**
      * items
        * Key **required**
        * Value **required**
  * UserMetadata
    * items
      * Name
      * Value

### SSECustomerAlgorithm
* SSECustomerAlgorithm `string`

### SSECustomerKey
* SSECustomerKey `string`

### SSECustomerKeyMD5
* SSECustomerKeyMD5 `string`

### SSEKMS
* SSEKMS `object`: Specifies the use of SSE-KMS to encrypt delivered inventory reports.
  * KeyId **required**

### SSEKMSEncryptionContext
* SSEKMSEncryptionContext `string`

### SSEKMSKeyId
* SSEKMSKeyId `string`

### SSES3
* SSES3 `object`: Specifies the use of SSE-S3 to encrypt delivered inventory reports.

### ScanRange
* ScanRange `object`: Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.
  * End
  * Start

### SelectObjectContentEventStream
* SelectObjectContentEventStream `object`: The container for selecting objects from a content event stream.
  * Cont
  * End
  * Progress
    * Details
      * BytesProcessed
      * BytesReturned
      * BytesScanned
  * Records
    * Payload
  * Stats
    * Details
      * BytesProcessed
      * BytesReturned
      * BytesScanned

### SelectObjectContentOutput
* SelectObjectContentOutput `object`
  * Payload
    * Cont
    * End
    * Progress
      * Details
        * BytesProcessed
        * BytesReturned
        * BytesScanned
    * Records
      * Payload
    * Stats
      * Details
        * BytesProcessed
        * BytesReturned
        * BytesScanned

### SelectObjectContentRequest
* SelectObjectContentRequest `object`: Request to filter the contents of an Amazon S3 object based on a simple Structured Query Language (SQL) statement. In the request, along with the SQL expression, you must specify a data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data into records. It returns only records that match the specified SQL expression. You must also specify the data serialization format for the response. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>.
  * Expression **required**
  * ExpressionType **required**
  * InputSerialization **required**
    * CSV
      * AllowQuotedRecordDelimiter
      * Comments
      * FieldDelimiter
      * FileHeaderInfo
      * QuoteCharacter
      * QuoteEscapeCharacter
      * RecordDelimiter
    * CompressionType
    * JSON
      * Type
    * Parquet
  * OutputSerialization **required**
    * CSV
      * FieldDelimiter
      * QuoteCharacter
      * QuoteEscapeCharacter
      * QuoteFields
      * RecordDelimiter
    * JSON
      * RecordDelimiter
  * RequestProgress
    * Enabled
  * ScanRange
    * End
    * Start

### SelectParameters
* SelectParameters `object`: Describes the parameters for Select job types.
  * Expression **required**
  * ExpressionType **required**
  * InputSerialization **required**
    * CSV
      * AllowQuotedRecordDelimiter
      * Comments
      * FieldDelimiter
      * FileHeaderInfo
      * QuoteCharacter
      * QuoteEscapeCharacter
      * RecordDelimiter
    * CompressionType
    * JSON
      * Type
    * Parquet
  * OutputSerialization **required**
    * CSV
      * FieldDelimiter
      * QuoteCharacter
      * QuoteEscapeCharacter
      * QuoteFields
      * RecordDelimiter
    * JSON
      * RecordDelimiter

### ServerSideEncryption
* ServerSideEncryption `string` (values: AES256, aws:kms)

### ServerSideEncryptionByDefault
* ServerSideEncryptionByDefault `object`: Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html">PUT Bucket encryption</a> in the <i>Amazon Simple Storage Service API Reference</i>.
  * KMSMasterKeyID
  * SSEAlgorithm **required**

### ServerSideEncryptionConfiguration
* ServerSideEncryptionConfiguration `object`: Specifies the default server-side-encryption configuration.
  * Rules **required**
    * items [ServerSideEncryptionRule](#serversideencryptionrule)

### ServerSideEncryptionRule
* ServerSideEncryptionRule `object`: Specifies the default server-side encryption configuration.
  * ApplyServerSideEncryptionByDefault
    * KMSMasterKeyID
    * SSEAlgorithm **required**
  * BucketKeyEnabled

### ServerSideEncryptionRules
* ServerSideEncryptionRules `array`
  * items [ServerSideEncryptionRule](#serversideencryptionrule)

### Setting
* Setting `boolean`

### Size
* Size `integer`

### SourceSelectionCriteria
* SourceSelectionCriteria `object`: A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using a customer master key (CMK) stored in AWS Key Management Service (SSE-KMS).
  * ReplicaModifications
    * Status **required**
  * SseKmsEncryptedObjects
    * Status **required**

### SseKmsEncryptedObjects
* SseKmsEncryptedObjects `object`: A container for filter information for the selection of S3 objects encrypted with AWS KMS.
  * Status **required**

### SseKmsEncryptedObjectsStatus
* SseKmsEncryptedObjectsStatus `string` (values: Enabled, Disabled)

### Start
* Start `integer`

### StartAfter
* StartAfter `string`

### Stats
* Stats `object`: Container for the stats details.
  * BytesProcessed
  * BytesReturned
  * BytesScanned

### StatsEvent
* StatsEvent `object`: Container for the Stats Event.
  * Details
    * BytesProcessed
    * BytesReturned
    * BytesScanned

### StorageClass
* StorageClass `string` (values: STANDARD, REDUCED_REDUNDANCY, STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING, GLACIER, DEEP_ARCHIVE, OUTPOSTS)

### StorageClassAnalysis
* StorageClassAnalysis `object`: Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.
  * DataExport
    * Destination **required**
      * S3BucketDestination **required**
        * Bucket **required**
        * BucketAccountId
        * Format **required**
        * Prefix
    * OutputSchemaVersion **required**

### StorageClassAnalysisDataExport
* StorageClassAnalysisDataExport `object`: Container for data related to the storage class analysis for an Amazon S3 bucket for export.
  * Destination **required**
    * S3BucketDestination **required**
      * Bucket **required**
      * BucketAccountId
      * Format **required**
      * Prefix
  * OutputSchemaVersion **required**

### StorageClassAnalysisSchemaVersion
* StorageClassAnalysisSchemaVersion `string` (values: V_1)

### Suffix
* Suffix `string`

### Tag
* Tag `object`: A container of a key value name pair.
  * Key **required**
  * Value **required**

### TagCount
* TagCount `integer`

### TagSet
* TagSet `array`
  * items
    * Key **required**
    * Value **required**

### Tagging
* Tagging `object`: Container for <code>TagSet</code> elements.
  * TagSet **required**
    * items
      * Key **required**
      * Value **required**

### TaggingDirective
* TaggingDirective `string` (values: COPY, REPLACE)

### TaggingHeader
* TaggingHeader `string`

### TargetBucket
* TargetBucket `string`

### TargetGrant
* TargetGrant `object`: Container for granting information.
  * Grantee
    * DisplayName
    * EmailAddress
    * ID
    * Type **required**
    * URI
  * Permission

### TargetGrants
* TargetGrants `array`
  * items
    * Grantee
      * DisplayName
      * EmailAddress
      * ID
      * Type **required**
      * URI
    * Permission

### TargetPrefix
* TargetPrefix `string`

### Tier
* Tier `string` (values: Standard, Bulk, Expedited)

### Tiering
* Tiering `object`: The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead.
  * AccessTier **required**
  * Days **required**

### TieringList
* TieringList `array`
  * items [Tiering](#tiering)

### Token
* Token `string`

### TopicArn
* TopicArn `string`

### TopicConfiguration
* TopicConfiguration `object`: A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.
  * Events **required**
    * items [Event](#event)
  * Filter [NotificationConfigurationFilter](#notificationconfigurationfilter)
  * Id [NotificationId](#notificationid)
  * TopicArn **required**

### TopicConfigurationDeprecated
* TopicConfigurationDeprecated `object`: A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events. This data type is deprecated. Use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_TopicConfiguration.html">TopicConfiguration</a> instead.
  * Event
  * Events
    * items [Event](#event)
  * Id [NotificationId](#notificationid)
  * Topic

### TopicConfigurationList
* TopicConfigurationList `array`
  * items [TopicConfiguration](#topicconfiguration)

### Transition
* Transition `object`: Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">Transitioning Objects Using Amazon S3 Lifecycle</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * Date
  * Days
  * StorageClass

### TransitionList
* TransitionList `array`
  * items [Transition](#transition)

### TransitionStorageClass
* TransitionStorageClass `string` (values: GLACIER, STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING, DEEP_ARCHIVE)

### Type
* Type `string` (values: CanonicalUser, AmazonCustomerByEmail, Group)

### URI
* URI `string`

### UploadIdMarker
* UploadIdMarker `string`

### UploadPartCopyOutput
* UploadPartCopyOutput `object`
  * CopyPartResult
    * ETag
    * LastModified

### UploadPartCopyRequest
* UploadPartCopyRequest `object`

### UploadPartOutput
* UploadPartOutput `object`

### UploadPartRequest
* UploadPartRequest `object`
  * Body

### UserMetadata
* UserMetadata `array`
  * items
    * Name
    * Value

### Value
* Value `string`

### VersionIdMarker
* VersionIdMarker `string`

### VersioningConfiguration
* VersioningConfiguration `object`: Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT Bucket versioning</a> in the <i>Amazon Simple Storage Service API Reference</i>.
  * MFADelete
  * Status

### WebsiteConfiguration
* WebsiteConfiguration `object`: Specifies website configuration parameters for an Amazon S3 bucket.
  * ErrorDocument
    * Key **required**
  * IndexDocument
    * Suffix **required**
  * RedirectAllRequestsTo
    * HostName **required**
    * Protocol
  * RoutingRules
    * items
      * Condition
        * HttpErrorCodeReturnedEquals
        * KeyPrefixEquals
      * Redirect **required**
        * HostName
        * HttpRedirectCode
        * Protocol
        * ReplaceKeyPrefixWith
        * ReplaceKeyWith

### WebsiteRedirectLocation
* WebsiteRedirectLocation `string`

### Years
* Years `integer`


