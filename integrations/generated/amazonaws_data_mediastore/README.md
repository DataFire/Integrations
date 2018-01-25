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

amazonaws_data_mediastore.ListItems({}).then(data => {
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

#### Output
* output [ListItemsResponse](#listitemsresponse)

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
  * Body **required** [PayloadBlob](#payloadblob)

#### Output
* output [PutObjectResponse](#putobjectresponse)



## Definitions

### ContainerNotFoundException
* ContainerNotFoundException `object`: The specified container was not found for the specified account.
  * Message [ErrorMessage](#errormessage)

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

### ErrorMessage
* ErrorMessage `string`

### GetObjectRequest
* GetObjectRequest `object`

### GetObjectResponse
* GetObjectResponse `object`
  * Body [PayloadBlob](#payloadblob)

### InternalServerError
* InternalServerError `object`: The service is temporarily unavailable.
  * Message [ErrorMessage](#errormessage)

### Item
* Item `object`: A metadata entry for a folder or object.
  * ContentLength [NonNegativeLong](#nonnegativelong)
  * ContentType [ContentType](#contenttype)
  * ETag [ETag](#etag)
  * LastModified [TimeStamp](#timestamp)
  * Name [ItemName](#itemname)
  * Type [ItemType](#itemtype)

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
  * Items [ItemList](#itemlist)
  * NextToken [PaginationToken](#paginationtoken)

### ListLimit
* ListLimit `integer`

### ListPathNaming
* ListPathNaming `string`

### NonNegativeLong
* NonNegativeLong `integer`

### ObjectNotFoundException
* ObjectNotFoundException `object`: Could not perform an operation on an object that does not exist.
  * Message [ErrorMessage](#errormessage)

### PaginationToken
* PaginationToken `string`

### PathNaming
* PathNaming `string`

### PayloadBlob
* PayloadBlob `string`

### PutObjectRequest
* PutObjectRequest `object`
  * Body **required** [PayloadBlob](#payloadblob)

### PutObjectResponse
* PutObjectResponse `object`
  * ContentSHA256 [SHA256Hash](#sha256hash)
  * ETag [ETag](#etag)
  * StorageClass [StorageClass](#storageclass)

### RangePattern
* RangePattern `string`

### RequestedRangeNotSatisfiableException
* RequestedRangeNotSatisfiableException `object`: The requested content range is not valid.
  * Message [ErrorMessage](#errormessage)

### SHA256Hash
* SHA256Hash `string`

### StorageClass
* StorageClass `string` (values: TEMPORAL)

### StringPrimitive
* StringPrimitive `string`

### TimeStamp
* TimeStamp `string`

### statusCode
* statusCode `integer`


