# @datafire/amazonaws_s3

Client library for Amazon Simple Storage Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_s3
```

```js
let datafire = require('datafire');
let amazonaws_s3 = require('@datafire/amazonaws_s3').actions;
let context = new datafire.Context();

amazonaws_s3.ListBuckets({}, context).then(data => {
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
  "Key": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* Key (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### DeleteObjects



```js
amazonaws_s3.DeleteObjects({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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

### PutBucketLifecycleConfiguration



```js
amazonaws_s3.PutBucketLifecycleConfiguration({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

### PutBucketNotificationConfiguration



```js
amazonaws_s3.PutBucketNotificationConfiguration({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

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
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**

