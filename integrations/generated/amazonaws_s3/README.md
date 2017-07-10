# @datafire/amazonaws_s3


## Operation: ListBuckets
Returns a list of all buckets owned by the authenticated sender of the request.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTServiceGET.html</p>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListBucketsOutput"
}
```
## Operation: DeleteBucket
Deletes the bucket. All objects (including all object versions and Delete Markers) in the bucket must be deleted before the bucket itself can be deleted.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETE.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeleteBucketRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: HeadBucket
This operation is useful to determine if a bucket exists and you have permission to access it.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketHEAD.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/HeadBucketRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ListObjects
Returns some or all (up to 1000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGET.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ListObjectsRequest"
    },
    "MaxKeys": {
      "type": "string",
      "description": "Pagination limit"
    },
    "Marker": {
      "type": "string",
      "description": "Pagination token"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListObjectsOutput"
}
```
## Operation: DeleteObject
Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object. If there isn't a null version, Amazon S3 does not remove any objects.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectDELETE.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeleteObjectRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "array"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeleteObjectOutput"
}
```
## Operation: GetObject
Retrieves objects from Amazon S3.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGET.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetObjectRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetObjectOutput"
}
```
## Operation: HeadObject
The HEAD operation retrieves metadata from an object without returning the object itself. This operation is useful if you're only interested in an object's metadata. To use HEAD, you must have READ access to the object.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectHEAD.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/HeadObjectRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HeadObjectOutput"
}
```
## Operation: ListParts
Lists the parts that have been uploaded for a specific multipart upload.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadListParts.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ListPartsRequest"
    },
    "MaxParts": {
      "type": "string",
      "description": "Pagination limit"
    },
    "PartNumberMarker": {
      "type": "string",
      "description": "Pagination token"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListPartsOutput"
}
```
## Operation: PutObject
Adds an object to a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectPUT.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutObjectRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PutObjectOutput"
}
```
## Operation: UploadPart
<p>Uploads a part in a multipart upload.</p><p><b>Note:</b> After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage.</p><p>http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadUploadPart.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UploadPartRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UploadPartOutput"
}
```
## Operation: UploadPartCopy
Uploads a part by copying data from an existing object as data source.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadUploadPartCopy.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UploadPartCopyRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UploadPartCopyOutput"
}
```
## Operation: GetObjectAcl
Returns the access control list (ACL) of an object.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGETacl.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetObjectAclRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetObjectAclOutput"
}
```
## Operation: PutObjectAcl
uses the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectPUTacl.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutObjectAclRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PutObjectAclOutput"
}
```
## Operation: RestoreObject
Restores an archived copy of an object back into Amazon S3<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectRestore.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/RestoreObjectRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestoreObjectOutput"
}
```
## Operation: DeleteObjectTagging
Removes the tag-set from an existing object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeleteObjectTaggingRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "array"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeleteObjectTaggingOutput"
}
```
## Operation: GetObjectTagging
Returns the tag-set of an object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetObjectTaggingRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetObjectTaggingOutput"
}
```
## Operation: PutObjectTagging
Sets the supplied tag-set to an object that already exists in a bucket

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutObjectTaggingRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PutObjectTaggingOutput"
}
```
## Operation: GetObjectTorrent
Return torrent files from a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGETtorrent.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetObjectTorrentRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetObjectTorrentOutput"
}
```
## Operation: CreateMultipartUpload
<p>Initiates a multipart upload and returns an upload ID.</p><p><b>Note:</b> After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage.</p><p>http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadInitiate.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CreateMultipartUploadRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "Key": {
      "type": "array"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket",
    "Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreateMultipartUploadOutput"
}
```
## Operation: GetBucketAccelerateConfiguration
Returns the accelerate configuration of a bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketAccelerateConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketAccelerateConfigurationOutput"
}
```
## Operation: PutBucketAccelerateConfiguration
Sets the accelerate configuration of an existing bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketAccelerateConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketAcl
Gets the access control policy for the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETacl.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketAclRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketAclOutput"
}
```
## Operation: PutBucketAcl
Sets the permissions on a bucket using access control lists (ACL).<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTacl.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketAclRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketAnalyticsConfiguration
Gets an analytics configuration for the bucket (specified by the analytics configuration ID).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketAnalyticsConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketAnalyticsConfigurationOutput"
}
```
## Operation: ListBucketAnalyticsConfigurations
Lists the analytics configurations for the bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ListBucketAnalyticsConfigurationsRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListBucketAnalyticsConfigurationsOutput"
}
```
## Operation: PutBucketAnalyticsConfiguration
Sets an analytics configuration for the bucket (specified by the analytics configuration ID).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketAnalyticsConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketCors
Returns the cors configuration for the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETcors.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketCorsRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketCorsOutput"
}
```
## Operation: PutBucketCors
Sets the cors configuration for a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTcors.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketCorsRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: DeleteObjects
This operation enables you to delete multiple objects from a bucket using a single HTTP request. You may specify up to 1000 keys.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/multiobjectdeleteapi.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeleteObjectsRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeleteObjectsOutput"
}
```
## Operation: GetBucketInventoryConfiguration
Returns an inventory configuration (identified by the inventory ID) from the bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketInventoryConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketInventoryConfigurationOutput"
}
```
## Operation: ListBucketInventoryConfigurations
Returns a list of inventory configurations for the bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ListBucketInventoryConfigurationsRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListBucketInventoryConfigurationsOutput"
}
```
## Operation: PutBucketInventoryConfiguration
Adds an inventory configuration (identified by the inventory ID) from the bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketInventoryConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketLifecycle
Deprecated, see the GetBucketLifecycleConfiguration operation.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlifecycle.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketLifecycleRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketLifecycleOutput"
}
```
## Operation: GetBucketLifecycleConfiguration
Returns the lifecycle configuration information set on the bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketLifecycleConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketLifecycleConfigurationOutput"
}
```
## Operation: PutBucketLifecycle
Deprecated, see the PutBucketLifecycleConfiguration operation.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketLifecycleRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: PutBucketLifecycleConfiguration
Sets lifecycle configuration for your bucket. If a lifecycle configuration exists, it replaces it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketLifecycleConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ListObjectsV2
Returns some or all (up to 1000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. Note: ListObjectsV2 is the revised List Objects API and we recommend you use this revised API for new application development.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ListObjectsV2Request"
    },
    "MaxKeys": {
      "type": "string",
      "description": "Pagination limit"
    },
    "ContinuationToken": {
      "type": "string",
      "description": "Pagination token"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListObjectsV2Output"
}
```
## Operation: GetBucketLocation
Returns the region the bucket resides in.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlocation.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketLocationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketLocationOutput"
}
```
## Operation: GetBucketLogging
Returns the logging status of a bucket and the permissions users have to view and modify that status. To use GET, you must be the bucket owner.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlogging.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketLoggingRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketLoggingOutput"
}
```
## Operation: PutBucketLogging
Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters. To set the logging status of a bucket, you must be the bucket owner.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTlogging.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketLoggingRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: DeleteBucketMetricsConfiguration
Deletes a metrics configuration (specified by the metrics configuration ID) from the bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeleteBucketMetricsConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketMetricsConfiguration
Gets a metrics configuration (specified by the metrics configuration ID) from the bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketMetricsConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketMetricsConfigurationOutput"
}
```
## Operation: ListBucketMetricsConfigurations
Lists the metrics configurations for the bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ListBucketMetricsConfigurationsRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListBucketMetricsConfigurationsOutput"
}
```
## Operation: PutBucketMetricsConfiguration
Sets a metrics configuration (specified by the metrics configuration ID) for the bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketMetricsConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketNotification
Deprecated, see the GetBucketNotificationConfiguration operation.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETnotification.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketNotificationConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationConfigurationDeprecated"
}
```
## Operation: GetBucketNotificationConfiguration
Returns the notification configuration of a bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketNotificationConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationConfiguration"
}
```
## Operation: PutBucketNotification
Deprecated, see the PutBucketNotificationConfiguraiton operation.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTnotification.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketNotificationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: PutBucketNotificationConfiguration
Enables notifications of specified events for a bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketNotificationConfigurationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: DeleteBucketPolicy
Deletes the policy from the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEpolicy.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeleteBucketPolicyRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketPolicy
Returns the policy of a specified bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETpolicy.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketPolicyRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketPolicyOutput"
}
```
## Operation: PutBucketPolicy
Replaces a policy on a bucket. If the bucket already has a policy, the one in this request completely replaces it.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTpolicy.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketPolicyRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: DeleteBucketReplication
Deletes the replication configuration from the bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeleteBucketReplicationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketReplication
Returns the replication configuration of a bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketReplicationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketReplicationOutput"
}
```
## Operation: PutBucketReplication
Creates a new replication configuration (or replaces an existing one, if present).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketReplicationRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketRequestPayment
Returns the request payment configuration of a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTrequestPaymentGET.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketRequestPaymentRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketRequestPaymentOutput"
}
```
## Operation: PutBucketRequestPayment
Sets the request payment configuration for a bucket. By default, the bucket owner pays for downloads from the bucket. This configuration parameter enables the bucket owner (only) to specify that the person requesting the download will be charged for the download. Documentation on requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTrequestPaymentPUT.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketRequestPaymentRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: DeleteBucketTagging
Deletes the tags from the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEtagging.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeleteBucketTaggingRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketTagging
Returns the tag set associated with the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETtagging.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketTaggingRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketTaggingOutput"
}
```
## Operation: PutBucketTagging
Sets the tags for a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTtagging.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketTaggingRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ListMultipartUploads
This operation lists in-progress multipart uploads.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadListMPUpload.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ListMultipartUploadsRequest"
    },
    "MaxUploads": {
      "type": "string",
      "description": "Pagination limit"
    },
    "KeyMarker": {
      "type": "string",
      "description": "Pagination token"
    },
    "UploadIdMarker": {
      "type": "string",
      "description": "Pagination token"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListMultipartUploadsOutput"
}
```
## Operation: GetBucketVersioning
Returns the versioning state of a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETversioningStatus.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketVersioningRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketVersioningOutput"
}
```
## Operation: PutBucketVersioning
Sets the versioning state of an existing bucket. To set the versioning state, you must be the bucket owner.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketVersioningRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ListObjectVersions
Returns metadata about all of the versions of objects in a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETVersion.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ListObjectVersionsRequest"
    },
    "MaxKeys": {
      "type": "string",
      "description": "Pagination limit"
    },
    "KeyMarker": {
      "type": "string",
      "description": "Pagination token"
    },
    "VersionIdMarker": {
      "type": "string",
      "description": "Pagination token"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListObjectVersionsOutput"
}
```
## Operation: DeleteBucketWebsite
This operation removes the website configuration from the bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEwebsite.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeleteBucketWebsiteRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetBucketWebsite
Returns the website configuration for a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETwebsite.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetBucketWebsiteRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBucketWebsiteOutput"
}
```
## Operation: PutBucketWebsite
Set the website configuration for a bucket.<p>http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTwebsite.html</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PutBucketWebsiteRequest"
    },
    "Bucket": {
      "type": "string"
    },
    "x-amz-security-token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "Bucket"
  ]
}
```
### Output Schema
```json
{}
```
