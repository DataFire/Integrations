# @datafire/amazonaws_data_mediastore

Client library for AWS Elemental MediaStore Data Plane

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_data_mediastore
```
```js
let amazonaws_data_mediastore = require('@datafire/amazonaws_data_mediastore').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3 service. Objects are the fundamental entities that are stored in AWS Elemental MediaStore.

## Actions

### ListItems



```js
amazonaws_data_mediastore.ListItems({}, context)
```

#### Input
* input `object`
  * Path `string`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListItemsResponse](#listitemsresponse)

### DeleteObject



```js
amazonaws_data_mediastore.DeleteObject({
  "Path": ""
}, context)
```

#### Input
* input `object`
  * Path **required** `string`

#### Output
* output [DeleteObjectResponse](#deleteobjectresponse)

### GetObject



```js
amazonaws_data_mediastore.GetObject({
  "Path": ""
}, context)
```

#### Input
* input `object`
  * Path **required** `string`
  * Range `string`

#### Output
* output [GetObjectResponse](#getobjectresponse)

### DescribeObject



```js
amazonaws_data_mediastore.DescribeObject({
  "Path": ""
}, context)
```

#### Input
* input `object`
  * Path **required** `string`

#### Output
* output [DescribeObjectResponse](#describeobjectresponse)

### PutObject



```js
amazonaws_data_mediastore.PutObject({
  "Path": "",
  "Body": ""
}, context)
```

#### Input
* input `object`
  * Path **required** `string`
  * Content-Type `string`
  * Cache-Control `string`
  * x-amz-storage-class `string`
  * x-amz-upload-availability `string`
  * Body **required** `string`: The bytes to be stored. 

#### Output
* output [PutObjectResponse](#putobjectresponse)



## Definitions

### ContainerNotFoundException


### ContentRangePattern
* ContentRangePattern `string`

### ContentType
* ContentType `string`

### DeleteObjectRequest
* DeleteObjectRequest `object`

### DeleteObjectResponse
* DeleteObjectResponse `object`

### DescribeObjectRequest
* DescribeObjectRequest `object`

### DescribeObjectResponse
* DescribeObjectResponse `object`

### ETag
* ETag `string`

### GetObjectRequest
* GetObjectRequest `object`

### GetObjectResponse
* GetObjectResponse `object`
  * Body
  * StatusCode

### InternalServerError


### Item
* Item `object`: A metadata entry for a folder or object.
  * ContentLength
  * ContentType
  * ETag
  * LastModified
  * Name
  * Type

### ItemList
* ItemList `array`
  * items [Item](#item)

### ItemName
* ItemName `string`

### ItemType
* ItemType `string` (values: OBJECT, FOLDER)

### ListItemsRequest
* ListItemsRequest `object`

### ListItemsResponse
* ListItemsResponse `object`
  * Items
    * items [Item](#item)
  * NextToken

### ListLimit
* ListLimit `integer`

### ListPathNaming
* ListPathNaming `string`

### NonNegativeLong
* NonNegativeLong `integer`

### ObjectNotFoundException


### PaginationToken
* PaginationToken `string`

### PathNaming
* PathNaming `string`

### PayloadBlob
* PayloadBlob `string`

### PutObjectRequest
* PutObjectRequest `object`
  * Body **required**

### PutObjectResponse
* PutObjectResponse `object`
  * ContentSHA256
  * ETag
  * StorageClass

### RangePattern
* RangePattern `string`

### RequestedRangeNotSatisfiableException


### SHA256Hash
* SHA256Hash `string`

### StorageClass
* StorageClass `string` (values: TEMPORAL)

### StringPrimitive
* StringPrimitive `string`

### TimeStamp
* TimeStamp `string`

### UploadAvailability
* UploadAvailability `string` (values: STANDARD, STREAMING)

### statusCode
* statusCode `integer`


