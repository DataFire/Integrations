# @datafire/amazonaws_s3

Client library for Amazon Simple Storage Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_s3
```

```js
let datafire = require('datafire');
let amazonaws_s3 = require('@datafire/amazonaws_s3').create();

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

#### Parameters
*This action has no parameters*

### DeleteBucket



```js
amazonaws_s3.DeleteBucket({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### HeadBucket



```js
amazonaws_s3.HeadBucket({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### ListObjects



```js
amazonaws_s3.ListObjects({
  "Bucket": ""
}, context)
```

#### Parameters
* MaxKeys (string)
* Marker (string)
* Bucket (string) **required**

### DeleteObject



```js
amazonaws_s3.DeleteObject({
  "Bucket": "",
  "Key": []
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (array) **required**

### GetObject



```js
amazonaws_s3.GetObject({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**

### HeadObject



```js
amazonaws_s3.HeadObject({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**

### ListParts



```js
amazonaws_s3.ListParts({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* MaxParts (string)
* PartNumberMarker (string)
* Bucket (string) **required**
* Key (string) **required**

### PutObject



```js
amazonaws_s3.PutObject({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**
* Body (string)

### UploadPart



```js
amazonaws_s3.UploadPart({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**
* Body (string)

### UploadPartCopy



```js
amazonaws_s3.UploadPartCopy({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**

### GetObjectAcl



```js
amazonaws_s3.GetObjectAcl({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**

### PutObjectAcl



```js
amazonaws_s3.PutObjectAcl({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**
* AccessControlPolicy (object)

### RestoreObject



```js
amazonaws_s3.RestoreObject({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**
* RestoreRequest (object)

### DeleteObjectTagging



```js
amazonaws_s3.DeleteObjectTagging({
  "Bucket": "",
  "Key": []
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (array) **required**

### GetObjectTagging



```js
amazonaws_s3.GetObjectTagging({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**

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

#### Parameters
* Bucket (string) **required**
* Key (string) **required**
* Tagging (object) **required**

### GetObjectTorrent



```js
amazonaws_s3.GetObjectTorrent({
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**

### CreateMultipartUpload



```js
amazonaws_s3.CreateMultipartUpload({
  "Bucket": "",
  "Key": []
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (array) **required**

### GetBucketAccelerateConfiguration



```js
amazonaws_s3.GetBucketAccelerateConfiguration({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketAccelerateConfiguration



```js
amazonaws_s3.PutBucketAccelerateConfiguration({
  "Bucket": "",
  "AccelerateConfiguration": {}
}, context)
```

#### Parameters
* Bucket (string) **required**
* AccelerateConfiguration (object) **required**

### GetBucketAcl



```js
amazonaws_s3.GetBucketAcl({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketAcl



```js
amazonaws_s3.PutBucketAcl({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* AccessControlPolicy (object)

### GetBucketAnalyticsConfiguration



```js
amazonaws_s3.GetBucketAnalyticsConfiguration({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### ListBucketAnalyticsConfigurations



```js
amazonaws_s3.ListBucketAnalyticsConfigurations({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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

#### Parameters
* Bucket (string) **required**
* AnalyticsConfiguration (object) **required**

### GetBucketCors



```js
amazonaws_s3.GetBucketCors({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketCors



```js
amazonaws_s3.PutBucketCors({
  "Bucket": "",
  "CORSConfiguration": {
    "CORSRules": []
  }
}, context)
```

#### Parameters
* Bucket (string) **required**
* CORSConfiguration (object) **required**

### DeleteObjects



```js
amazonaws_s3.DeleteObjects({
  "Bucket": "",
  "Delete": {
    "Objects": []
  }
}, context)
```

#### Parameters
* Bucket (string) **required**
* Delete (object) **required**

### GetBucketInventoryConfiguration



```js
amazonaws_s3.GetBucketInventoryConfiguration({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### ListBucketInventoryConfigurations



```js
amazonaws_s3.ListBucketInventoryConfigurations({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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

#### Parameters
* Bucket (string) **required**
* InventoryConfiguration (object) **required**

### GetBucketLifecycle



```js
amazonaws_s3.GetBucketLifecycle({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### GetBucketLifecycleConfiguration



```js
amazonaws_s3.GetBucketLifecycleConfiguration({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketLifecycle



```js
amazonaws_s3.PutBucketLifecycle({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* LifecycleConfiguration (object)

### PutBucketLifecycleConfiguration



```js
amazonaws_s3.PutBucketLifecycleConfiguration({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* LifecycleConfiguration (object)

### ListObjectsV2



```js
amazonaws_s3.ListObjectsV2({
  "Bucket": ""
}, context)
```

#### Parameters
* MaxKeys (string)
* ContinuationToken (string)
* Bucket (string) **required**

### GetBucketLocation



```js
amazonaws_s3.GetBucketLocation({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### GetBucketLogging



```js
amazonaws_s3.GetBucketLogging({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketLogging



```js
amazonaws_s3.PutBucketLogging({
  "Bucket": "",
  "BucketLoggingStatus": {}
}, context)
```

#### Parameters
* Bucket (string) **required**
* BucketLoggingStatus (object) **required**

### DeleteBucketMetricsConfiguration



```js
amazonaws_s3.DeleteBucketMetricsConfiguration({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### GetBucketMetricsConfiguration



```js
amazonaws_s3.GetBucketMetricsConfiguration({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### ListBucketMetricsConfigurations



```js
amazonaws_s3.ListBucketMetricsConfigurations({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketMetricsConfiguration



```js
amazonaws_s3.PutBucketMetricsConfiguration({
  "Bucket": "",
  "MetricsConfiguration": {
    "Id": ""
  }
}, context)
```

#### Parameters
* Bucket (string) **required**
* MetricsConfiguration (object) **required**

### GetBucketNotification



```js
amazonaws_s3.GetBucketNotification({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### GetBucketNotificationConfiguration



```js
amazonaws_s3.GetBucketNotificationConfiguration({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketNotification



```js
amazonaws_s3.PutBucketNotification({
  "Bucket": "",
  "NotificationConfiguration": {}
}, context)
```

#### Parameters
* Bucket (string) **required**
* NotificationConfiguration (object) **required**

### PutBucketNotificationConfiguration



```js
amazonaws_s3.PutBucketNotificationConfiguration({
  "Bucket": "",
  "NotificationConfiguration": {}
}, context)
```

#### Parameters
* Bucket (string) **required**
* NotificationConfiguration (object) **required** - Container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off on the bucket.

### DeleteBucketPolicy



```js
amazonaws_s3.DeleteBucketPolicy({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### GetBucketPolicy



```js
amazonaws_s3.GetBucketPolicy({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketPolicy



```js
amazonaws_s3.PutBucketPolicy({
  "Bucket": "",
  "Policy": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Policy (string) **required**

### DeleteBucketReplication



```js
amazonaws_s3.DeleteBucketReplication({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### GetBucketReplication



```js
amazonaws_s3.GetBucketReplication({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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

#### Parameters
* Bucket (string) **required**
* ReplicationConfiguration (object) **required** - Container for replication rules. You can add as many as 1,000 rules. Total replication configuration size can be up to 2 MB.

### GetBucketRequestPayment



```js
amazonaws_s3.GetBucketRequestPayment({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketRequestPayment



```js
amazonaws_s3.PutBucketRequestPayment({
  "Bucket": "",
  "RequestPaymentConfiguration": {
    "Payer": ""
  }
}, context)
```

#### Parameters
* Bucket (string) **required**
* RequestPaymentConfiguration (object) **required**

### DeleteBucketTagging



```js
amazonaws_s3.DeleteBucketTagging({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### GetBucketTagging



```js
amazonaws_s3.GetBucketTagging({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketTagging



```js
amazonaws_s3.PutBucketTagging({
  "Bucket": "",
  "Tagging": {
    "TagSet": []
  }
}, context)
```

#### Parameters
* Bucket (string) **required**
* Tagging (object) **required**

### ListMultipartUploads



```js
amazonaws_s3.ListMultipartUploads({
  "Bucket": ""
}, context)
```

#### Parameters
* MaxUploads (string)
* KeyMarker (string)
* UploadIdMarker (string)
* Bucket (string) **required**

### GetBucketVersioning



```js
amazonaws_s3.GetBucketVersioning({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketVersioning



```js
amazonaws_s3.PutBucketVersioning({
  "Bucket": "",
  "VersioningConfiguration": {}
}, context)
```

#### Parameters
* Bucket (string) **required**
* VersioningConfiguration (object) **required**

### ListObjectVersions



```js
amazonaws_s3.ListObjectVersions({
  "Bucket": ""
}, context)
```

#### Parameters
* MaxKeys (string)
* KeyMarker (string)
* VersionIdMarker (string)
* Bucket (string) **required**

### DeleteBucketWebsite



```js
amazonaws_s3.DeleteBucketWebsite({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### GetBucketWebsite



```js
amazonaws_s3.GetBucketWebsite({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketWebsite



```js
amazonaws_s3.PutBucketWebsite({
  "Bucket": "",
  "WebsiteConfiguration": {}
}, context)
```

#### Parameters
* Bucket (string) **required**
* WebsiteConfiguration (object) **required**

