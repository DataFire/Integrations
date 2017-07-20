# @datafire/amazonaws_s3

Client library for Amazon Simple Storage Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_s3
```

```js
let datafire = require('datafire');
let amazonaws_s3 = require('@datafire/amazonaws_s3').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_s3: account,
  }
})

amazonaws_s3.ListBuckets({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### ListBuckets
Returns a list of all buckets owned by the authenticated sender of the request.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTServiceGET.html</p>


```js
amazonaws_s3.ListBuckets({}, context)
```

#### Parameters
* x-amz-security-token (string)

### DeleteBucket
Deletes the bucket. All objects (including all object versions and Delete Markers) in the bucket must be deleted before the bucket itself can be deleted.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETE.html</p>


```js
amazonaws_s3.DeleteBucket({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### HeadBucket
This operation is useful to determine if a bucket exists and you have permission to access it.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketHEAD.html</p>


```js
amazonaws_s3.HeadBucket({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### ListObjects
Returns some or all (up to 1000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGET.html</p>


```js
amazonaws_s3.ListObjects({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxKeys (string) - Pagination limit
* Marker (string) - Pagination token
* Bucket (string) **required**
* x-amz-security-token (string)

### DeleteObject
Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object. If there isn't a null version, Amazon S3 does not remove any objects.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectDELETE.html</p>


```js
amazonaws_s3.DeleteObject({
  "body": {},
  "Bucket": "",
  "Key": []
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (array) **required**
* x-amz-security-token (string)

### GetObject
Retrieves objects from Amazon S3.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGET.html</p>


```js
amazonaws_s3.GetObject({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### HeadObject
The HEAD operation retrieves metadata from an object without returning the object itself. This operation is useful if you're only interested in an object's metadata. To use HEAD, you must have READ access to the object.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectHEAD.html</p>


```js
amazonaws_s3.HeadObject({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### ListParts
Lists the parts that have been uploaded for a specific multipart upload.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadListParts.html</p>


```js
amazonaws_s3.ListParts({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxParts (string) - Pagination limit
* PartNumberMarker (string) - Pagination token
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### PutObject
Adds an object to a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectPUT.html</p>


```js
amazonaws_s3.PutObject({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### UploadPart
<p>Uploads a part in a multipart upload.</p><p><b>Note:</b> After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage.</p><p>http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadUploadPart.html</p>


```js
amazonaws_s3.UploadPart({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### UploadPartCopy
Uploads a part by copying data from an existing object as data source.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadUploadPartCopy.html</p>


```js
amazonaws_s3.UploadPartCopy({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### GetObjectAcl
Returns the access control list (ACL) of an object.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGETacl.html</p>


```js
amazonaws_s3.GetObjectAcl({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### PutObjectAcl
uses the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectPUTacl.html</p>


```js
amazonaws_s3.PutObjectAcl({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### RestoreObject
Restores an archived copy of an object back into Amazon S3<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectRestore.html</p>


```js
amazonaws_s3.RestoreObject({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### DeleteObjectTagging
Removes the tag-set from an existing object.


```js
amazonaws_s3.DeleteObjectTagging({
  "body": {},
  "Bucket": "",
  "Key": []
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (array) **required**
* x-amz-security-token (string)

### GetObjectTagging
Returns the tag-set of an object.


```js
amazonaws_s3.GetObjectTagging({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### PutObjectTagging
Sets the supplied tag-set to an object that already exists in a bucket


```js
amazonaws_s3.PutObjectTagging({
  "body": {
    "Tagging": {
      "TagSet": []
    }
  },
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### GetObjectTorrent
Return torrent files from a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGETtorrent.html</p>


```js
amazonaws_s3.GetObjectTorrent({
  "body": {},
  "Bucket": "",
  "Key": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (string) **required**
* x-amz-security-token (string)

### CreateMultipartUpload
<p>Initiates a multipart upload and returns an upload ID.</p><p><b>Note:</b> After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage.</p><p>http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadInitiate.html</p>


```js
amazonaws_s3.CreateMultipartUpload({
  "body": {},
  "Bucket": "",
  "Key": []
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* Key (array) **required**
* x-amz-security-token (string)

### GetBucketAccelerateConfiguration
Returns the accelerate configuration of a bucket.


```js
amazonaws_s3.GetBucketAccelerateConfiguration({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketAccelerateConfiguration
Sets the accelerate configuration of an existing bucket.


```js
amazonaws_s3.PutBucketAccelerateConfiguration({
  "body": {
    "AccelerateConfiguration": {}
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketAcl
Gets the access control policy for the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETacl.html</p>


```js
amazonaws_s3.GetBucketAcl({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketAcl
Sets the permissions on a bucket using access control lists (ACL).<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTacl.html</p>


```js
amazonaws_s3.PutBucketAcl({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketAnalyticsConfiguration
Gets an analytics configuration for the bucket (specified by the analytics configuration ID).


```js
amazonaws_s3.GetBucketAnalyticsConfiguration({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### ListBucketAnalyticsConfigurations
Lists the analytics configurations for the bucket.


```js
amazonaws_s3.ListBucketAnalyticsConfigurations({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketAnalyticsConfiguration
Sets an analytics configuration for the bucket (specified by the analytics configuration ID).


```js
amazonaws_s3.PutBucketAnalyticsConfiguration({
  "body": {
    "AnalyticsConfiguration": {
      "Id": "",
      "StorageClassAnalysis": {}
    }
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketCors
Returns the cors configuration for the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETcors.html</p>


```js
amazonaws_s3.GetBucketCors({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketCors
Sets the cors configuration for a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTcors.html</p>


```js
amazonaws_s3.PutBucketCors({
  "body": {
    "CORSConfiguration": {
      "CORSRules": []
    }
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### DeleteObjects
This operation enables you to delete multiple objects from a bucket using a single HTTP request. You may specify up to 1000 keys.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/multiobjectdeleteapi.html</p>


```js
amazonaws_s3.DeleteObjects({
  "body": {
    "Delete": {
      "Objects": []
    }
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketInventoryConfiguration
Returns an inventory configuration (identified by the inventory ID) from the bucket.


```js
amazonaws_s3.GetBucketInventoryConfiguration({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### ListBucketInventoryConfigurations
Returns a list of inventory configurations for the bucket.


```js
amazonaws_s3.ListBucketInventoryConfigurations({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketInventoryConfiguration
Adds an inventory configuration (identified by the inventory ID) from the bucket.


```js
amazonaws_s3.PutBucketInventoryConfiguration({
  "body": {
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
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketLifecycle
Deprecated, see the GetBucketLifecycleConfiguration operation.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlifecycle.html</p>


```js
amazonaws_s3.GetBucketLifecycle({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketLifecycleConfiguration
Returns the lifecycle configuration information set on the bucket.


```js
amazonaws_s3.GetBucketLifecycleConfiguration({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketLifecycle
Deprecated, see the PutBucketLifecycleConfiguration operation.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html</p>


```js
amazonaws_s3.PutBucketLifecycle({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketLifecycleConfiguration
Sets lifecycle configuration for your bucket. If a lifecycle configuration exists, it replaces it.


```js
amazonaws_s3.PutBucketLifecycleConfiguration({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### ListObjectsV2
Returns some or all (up to 1000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. Note: ListObjectsV2 is the revised List Objects API and we recommend you use this revised API for new application development.


```js
amazonaws_s3.ListObjectsV2({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxKeys (string) - Pagination limit
* ContinuationToken (string) - Pagination token
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketLocation
Returns the region the bucket resides in.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlocation.html</p>


```js
amazonaws_s3.GetBucketLocation({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketLogging
Returns the logging status of a bucket and the permissions users have to view and modify that status. To use GET, you must be the bucket owner.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlogging.html</p>


```js
amazonaws_s3.GetBucketLogging({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketLogging
Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters. To set the logging status of a bucket, you must be the bucket owner.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTlogging.html</p>


```js
amazonaws_s3.PutBucketLogging({
  "body": {
    "BucketLoggingStatus": {}
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### DeleteBucketMetricsConfiguration
Deletes a metrics configuration (specified by the metrics configuration ID) from the bucket.


```js
amazonaws_s3.DeleteBucketMetricsConfiguration({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketMetricsConfiguration
Gets a metrics configuration (specified by the metrics configuration ID) from the bucket.


```js
amazonaws_s3.GetBucketMetricsConfiguration({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### ListBucketMetricsConfigurations
Lists the metrics configurations for the bucket.


```js
amazonaws_s3.ListBucketMetricsConfigurations({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketMetricsConfiguration
Sets a metrics configuration (specified by the metrics configuration ID) for the bucket.


```js
amazonaws_s3.PutBucketMetricsConfiguration({
  "body": {
    "MetricsConfiguration": {
      "Id": ""
    }
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketNotification
Deprecated, see the GetBucketNotificationConfiguration operation.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETnotification.html</p>


```js
amazonaws_s3.GetBucketNotification({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketNotificationConfiguration
Returns the notification configuration of a bucket.


```js
amazonaws_s3.GetBucketNotificationConfiguration({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketNotification
Deprecated, see the PutBucketNotificationConfiguraiton operation.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTnotification.html</p>


```js
amazonaws_s3.PutBucketNotification({
  "body": {
    "NotificationConfiguration": {}
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketNotificationConfiguration
Enables notifications of specified events for a bucket.


```js
amazonaws_s3.PutBucketNotificationConfiguration({
  "body": {
    "NotificationConfiguration": {}
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### DeleteBucketPolicy
Deletes the policy from the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEpolicy.html</p>


```js
amazonaws_s3.DeleteBucketPolicy({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketPolicy
Returns the policy of a specified bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETpolicy.html</p>


```js
amazonaws_s3.GetBucketPolicy({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketPolicy
Replaces a policy on a bucket. If the bucket already has a policy, the one in this request completely replaces it.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTpolicy.html</p>


```js
amazonaws_s3.PutBucketPolicy({
  "body": {
    "Policy": ""
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### DeleteBucketReplication
Deletes the replication configuration from the bucket.


```js
amazonaws_s3.DeleteBucketReplication({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketReplication
Returns the replication configuration of a bucket.


```js
amazonaws_s3.GetBucketReplication({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketReplication
Creates a new replication configuration (or replaces an existing one, if present).


```js
amazonaws_s3.PutBucketReplication({
  "body": {
    "ReplicationConfiguration": {
      "Role": "",
      "Rules": []
    }
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketRequestPayment
Returns the request payment configuration of a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTrequestPaymentGET.html</p>


```js
amazonaws_s3.GetBucketRequestPayment({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketRequestPayment
Sets the request payment configuration for a bucket. By default, the bucket owner pays for downloads from the bucket. This configuration parameter enables the bucket owner (only) to specify that the person requesting the download will be charged for the download. Documentation on requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTrequestPaymentPUT.html</p>


```js
amazonaws_s3.PutBucketRequestPayment({
  "body": {
    "RequestPaymentConfiguration": {
      "Payer": ""
    }
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### DeleteBucketTagging
Deletes the tags from the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEtagging.html</p>


```js
amazonaws_s3.DeleteBucketTagging({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketTagging
Returns the tag set associated with the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETtagging.html</p>


```js
amazonaws_s3.GetBucketTagging({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketTagging
Sets the tags for a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTtagging.html</p>


```js
amazonaws_s3.PutBucketTagging({
  "body": {
    "Tagging": {
      "TagSet": []
    }
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### ListMultipartUploads
This operation lists in-progress multipart uploads.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadListMPUpload.html</p>


```js
amazonaws_s3.ListMultipartUploads({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxUploads (string) - Pagination limit
* KeyMarker (string) - Pagination token
* UploadIdMarker (string) - Pagination token
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketVersioning
Returns the versioning state of a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETversioningStatus.html</p>


```js
amazonaws_s3.GetBucketVersioning({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketVersioning
Sets the versioning state of an existing bucket. To set the versioning state, you must be the bucket owner.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html</p>


```js
amazonaws_s3.PutBucketVersioning({
  "body": {
    "VersioningConfiguration": {}
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### ListObjectVersions
Returns metadata about all of the versions of objects in a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETVersion.html</p>


```js
amazonaws_s3.ListObjectVersions({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxKeys (string) - Pagination limit
* KeyMarker (string) - Pagination token
* VersionIdMarker (string) - Pagination token
* Bucket (string) **required**
* x-amz-security-token (string)

### DeleteBucketWebsite
This operation removes the website configuration from the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEwebsite.html</p>


```js
amazonaws_s3.DeleteBucketWebsite({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### GetBucketWebsite
Returns the website configuration for a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETwebsite.html</p>


```js
amazonaws_s3.GetBucketWebsite({
  "body": {},
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

### PutBucketWebsite
Set the website configuration for a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTwebsite.html</p>


```js
amazonaws_s3.PutBucketWebsite({
  "body": {
    "WebsiteConfiguration": {}
  },
  "Bucket": ""
}, context)
```

#### Parameters
* body (object) **required**
* Bucket (string) **required**
* x-amz-security-token (string)

