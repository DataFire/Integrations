# @datafire/amazonaws_rekognition

Client library for Amazon Rekognition

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_rekognition
```

```js
let datafire = require('datafire');
let amazonaws_rekognition = require('@datafire/amazonaws_rekognition').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_rekognition.CompareFaces({}).then(data => {
  console.log(data);
})
```

## Description
This is the Amazon Rekognition API reference.

## Actions
### CompareFaces



```js
amazonaws_rekognition.CompareFaces({
  "SourceImage": {},
  "TargetImage": {}
}, context)
```

#### Parameters
* SimilarityThreshold (number)
* SourceImage (object) **required** - <p>Provides the source image either as bytes or an S3 object.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>You may need to Base64-encode the image bytes depending on the language you are using and whether or not you are using the AWS SDK. For more information, see <a>example4</a>.</p> <p>If you use the Amazon CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see <a>manage-access-resource-policies</a>. </p>
* TargetImage (object) **required** - <p>Provides the source image either as bytes or an S3 object.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>You may need to Base64-encode the image bytes depending on the language you are using and whether or not you are using the AWS SDK. For more information, see <a>example4</a>.</p> <p>If you use the Amazon CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see <a>manage-access-resource-policies</a>. </p>

### CreateCollection



```js
amazonaws_rekognition.CreateCollection({
  "CollectionId": ""
}, context)
```

#### Parameters
* CollectionId (string) **required**

### DeleteCollection



```js
amazonaws_rekognition.DeleteCollection({
  "CollectionId": ""
}, context)
```

#### Parameters
* CollectionId (string) **required**

### DeleteFaces



```js
amazonaws_rekognition.DeleteFaces({
  "CollectionId": "",
  "FaceIds": []
}, context)
```

#### Parameters
* CollectionId (string) **required**
* FaceIds (array) **required**

### DetectFaces



```js
amazonaws_rekognition.DetectFaces({
  "Image": {}
}, context)
```

#### Parameters
* Attributes (array)
* Image (object) **required** - <p>Provides the source image either as bytes or an S3 object.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>You may need to Base64-encode the image bytes depending on the language you are using and whether or not you are using the AWS SDK. For more information, see <a>example4</a>.</p> <p>If you use the Amazon CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see <a>manage-access-resource-policies</a>. </p>

### DetectLabels



```js
amazonaws_rekognition.DetectLabels({
  "Image": {}
}, context)
```

#### Parameters
* Image (object) **required** - <p>Provides the source image either as bytes or an S3 object.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>You may need to Base64-encode the image bytes depending on the language you are using and whether or not you are using the AWS SDK. For more information, see <a>example4</a>.</p> <p>If you use the Amazon CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see <a>manage-access-resource-policies</a>. </p>
* MaxLabels (integer)
* MinConfidence (number)

### DetectModerationLabels



```js
amazonaws_rekognition.DetectModerationLabels({
  "Image": {}
}, context)
```

#### Parameters
* Image (object) **required** - <p>Provides the source image either as bytes or an S3 object.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>You may need to Base64-encode the image bytes depending on the language you are using and whether or not you are using the AWS SDK. For more information, see <a>example4</a>.</p> <p>If you use the Amazon CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see <a>manage-access-resource-policies</a>. </p>
* MinConfidence (number)

### IndexFaces



```js
amazonaws_rekognition.IndexFaces({
  "CollectionId": "",
  "Image": {}
}, context)
```

#### Parameters
* CollectionId (string) **required**
* DetectionAttributes (array)
* ExternalImageId (string)
* Image (object) **required** - <p>Provides the source image either as bytes or an S3 object.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>You may need to Base64-encode the image bytes depending on the language you are using and whether or not you are using the AWS SDK. For more information, see <a>example4</a>.</p> <p>If you use the Amazon CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see <a>manage-access-resource-policies</a>. </p>

### ListCollections



```js
amazonaws_rekognition.ListCollections({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### ListFaces



```js
amazonaws_rekognition.ListFaces({
  "CollectionId": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* CollectionId (string) **required**
* MaxResults (integer)
* NextToken (string)

### SearchFaces



```js
amazonaws_rekognition.SearchFaces({
  "CollectionId": "",
  "FaceId": ""
}, context)
```

#### Parameters
* CollectionId (string) **required**
* FaceId (string) **required**
* FaceMatchThreshold (number)
* MaxFaces (integer)

### SearchFacesByImage



```js
amazonaws_rekognition.SearchFacesByImage({
  "CollectionId": "",
  "Image": {}
}, context)
```

#### Parameters
* CollectionId (string) **required**
* FaceMatchThreshold (number)
* Image (object) **required** - <p>Provides the source image either as bytes or an S3 object.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>You may need to Base64-encode the image bytes depending on the language you are using and whether or not you are using the AWS SDK. For more information, see <a>example4</a>.</p> <p>If you use the Amazon CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see <a>manage-access-resource-policies</a>. </p>
* MaxFaces (integer)

