# @datafire/amazonaws_rekognition

Client library for Amazon Rekognition

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_rekognition
```
```js
let amazonaws_rekognition = require('@datafire/amazonaws_rekognition').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_rekognition.CompareFaces({
  "SourceImage": {},
  "TargetImage": {}
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * SimilarityThreshold [Percent](#percent)
  * SourceImage **required** [Image](#image)
  * TargetImage **required** [Image](#image)

#### Output
* output [CompareFacesResponse](#comparefacesresponse)

### CreateCollection



```js
amazonaws_rekognition.CreateCollection({
  "CollectionId": ""
}, context)
```

#### Input
* input `object`
  * CollectionId **required** [CollectionId](#collectionid)

#### Output
* output [CreateCollectionResponse](#createcollectionresponse)

### DeleteCollection



```js
amazonaws_rekognition.DeleteCollection({
  "CollectionId": ""
}, context)
```

#### Input
* input `object`
  * CollectionId **required** [CollectionId](#collectionid)

#### Output
* output [DeleteCollectionResponse](#deletecollectionresponse)

### DeleteFaces



```js
amazonaws_rekognition.DeleteFaces({
  "CollectionId": "",
  "FaceIds": []
}, context)
```

#### Input
* input `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * FaceIds **required** [FaceIdList](#faceidlist)

#### Output
* output [DeleteFacesResponse](#deletefacesresponse)

### DetectFaces



```js
amazonaws_rekognition.DetectFaces({
  "Image": {}
}, context)
```

#### Input
* input `object`
  * Attributes [Attributes](#attributes)
  * Image **required** [Image](#image)

#### Output
* output [DetectFacesResponse](#detectfacesresponse)

### DetectLabels



```js
amazonaws_rekognition.DetectLabels({
  "Image": {}
}, context)
```

#### Input
* input `object`
  * Image **required** [Image](#image)
  * MaxLabels [UInteger](#uinteger)
  * MinConfidence [Percent](#percent)

#### Output
* output [DetectLabelsResponse](#detectlabelsresponse)

### DetectModerationLabels



```js
amazonaws_rekognition.DetectModerationLabels({
  "Image": {}
}, context)
```

#### Input
* input `object`
  * Image **required** [Image](#image)
  * MinConfidence [Percent](#percent)

#### Output
* output [DetectModerationLabelsResponse](#detectmoderationlabelsresponse)

### GetCelebrityInfo



```js
amazonaws_rekognition.GetCelebrityInfo({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** [RekognitionUniqueId](#rekognitionuniqueid)

#### Output
* output [GetCelebrityInfoResponse](#getcelebrityinforesponse)

### IndexFaces



```js
amazonaws_rekognition.IndexFaces({
  "CollectionId": "",
  "Image": {}
}, context)
```

#### Input
* input `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * DetectionAttributes [Attributes](#attributes)
  * ExternalImageId [ExternalImageId](#externalimageid)
  * Image **required** [Image](#image)

#### Output
* output [IndexFacesResponse](#indexfacesresponse)

### ListCollections



```js
amazonaws_rekognition.ListCollections({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [PageSize](#pagesize)
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListCollectionsResponse](#listcollectionsresponse)

### ListFaces



```js
amazonaws_rekognition.ListFaces({
  "CollectionId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CollectionId **required** [CollectionId](#collectionid)
  * MaxResults [PageSize](#pagesize)
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListFacesResponse](#listfacesresponse)

### RecognizeCelebrities



```js
amazonaws_rekognition.RecognizeCelebrities({
  "Image": {}
}, context)
```

#### Input
* input `object`
  * Image **required** [Image](#image)

#### Output
* output [RecognizeCelebritiesResponse](#recognizecelebritiesresponse)

### SearchFaces



```js
amazonaws_rekognition.SearchFaces({
  "CollectionId": "",
  "FaceId": ""
}, context)
```

#### Input
* input `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * FaceId **required** [FaceId](#faceid)
  * FaceMatchThreshold [Percent](#percent)
  * MaxFaces [MaxFaces](#maxfaces)

#### Output
* output [SearchFacesResponse](#searchfacesresponse)

### SearchFacesByImage



```js
amazonaws_rekognition.SearchFacesByImage({
  "CollectionId": "",
  "Image": {}
}, context)
```

#### Input
* input `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * FaceMatchThreshold [Percent](#percent)
  * Image **required** [Image](#image)
  * MaxFaces [MaxFaces](#maxfaces)

#### Output
* output [SearchFacesByImageResponse](#searchfacesbyimageresponse)



## Definitions

### AccessDeniedException
* AccessDeniedException `object`: You are not authorized to perform the action.

### AgeRange
* AgeRange `object`: <p>Structure containing the estimated age range, in years, for a face.</p> <p>Rekognition estimates an age-range for faces detected in the input image. Estimated age ranges can overlap; a face of a 5 year old may have an estimated range of 4-6 whilst the face of a 6 year old may have an estimated range of 4-8.</p>
  * High [UInteger](#uinteger)
  * Low [UInteger](#uinteger)

### Attribute
* Attribute `string` (values: DEFAULT, ALL)

### Attributes
* Attributes `array`
  * items [Attribute](#attribute)

### Beard
* Beard `object`: Indicates whether or not the face has a beard, and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [Boolean](#boolean)

### Boolean
* Boolean `boolean`

### BoundingBox
* BoundingBox `object`: <p>Identifies the bounding box around the object or face. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p> The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note>
  * Height [Float](#float)
  * Left [Float](#float)
  * Top [Float](#float)
  * Width [Float](#float)

### Celebrity
* Celebrity `object`: Provides information about a celebrity recognized by the operation.
  * Face [ComparedFace](#comparedface)
  * Id [RekognitionUniqueId](#rekognitionuniqueid)
  * MatchConfidence [Percent](#percent)
  * Name [String](#string)
  * Urls [Urls](#urls)

### CelebrityList
* CelebrityList `array`
  * items [Celebrity](#celebrity)

### CollectionId
* CollectionId `string`

### CollectionIdList
* CollectionIdList `array`
  * items [CollectionId](#collectionid)

### CompareFacesMatch
* CompareFacesMatch `object`: Provides information about a face in a target image that matches the source image face analysed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box.
  * Face [ComparedFace](#comparedface)
  * Similarity [Percent](#percent)

### CompareFacesMatchList
* CompareFacesMatchList `array`
  * items [CompareFacesMatch](#comparefacesmatch)

### CompareFacesRequest
* CompareFacesRequest `object`
  * SimilarityThreshold [Percent](#percent)
  * SourceImage **required** [Image](#image)
  * TargetImage **required** [Image](#image)

### CompareFacesResponse
* CompareFacesResponse `object`
  * FaceMatches [CompareFacesMatchList](#comparefacesmatchlist)
  * SourceImageFace [ComparedSourceImageFace](#comparedsourceimageface)
  * SourceImageOrientationCorrection [OrientationCorrection](#orientationcorrection)
  * TargetImageOrientationCorrection [OrientationCorrection](#orientationcorrection)
  * UnmatchedFaces [CompareFacesUnmatchList](#comparefacesunmatchlist)

### CompareFacesUnmatchList
* CompareFacesUnmatchList `array`
  * items [ComparedFace](#comparedface)

### ComparedFace
* ComparedFace `object`: Provides face metadata for target image faces that are analysed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.
  * BoundingBox [BoundingBox](#boundingbox)
  * Confidence [Percent](#percent)
  * Landmarks [Landmarks](#landmarks)
  * Pose [Pose](#pose)
  * Quality [ImageQuality](#imagequality)

### ComparedFaceList
* ComparedFaceList `array`
  * items [ComparedFace](#comparedface)

### ComparedSourceImageFace
* ComparedSourceImageFace `object`: Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison. 
  * BoundingBox [BoundingBox](#boundingbox)
  * Confidence [Percent](#percent)

### CreateCollectionRequest
* CreateCollectionRequest `object`
  * CollectionId **required** [CollectionId](#collectionid)

### CreateCollectionResponse
* CreateCollectionResponse `object`
  * CollectionArn [String](#string)
  * StatusCode [UInteger](#uinteger)

### Degree
* Degree `number`

### DeleteCollectionRequest
* DeleteCollectionRequest `object`
  * CollectionId **required** [CollectionId](#collectionid)

### DeleteCollectionResponse
* DeleteCollectionResponse `object`
  * StatusCode [UInteger](#uinteger)

### DeleteFacesRequest
* DeleteFacesRequest `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * FaceIds **required** [FaceIdList](#faceidlist)

### DeleteFacesResponse
* DeleteFacesResponse `object`
  * DeletedFaces [FaceIdList](#faceidlist)

### DetectFacesRequest
* DetectFacesRequest `object`
  * Attributes [Attributes](#attributes)
  * Image **required** [Image](#image)

### DetectFacesResponse
* DetectFacesResponse `object`
  * FaceDetails [FaceDetailList](#facedetaillist)
  * OrientationCorrection [OrientationCorrection](#orientationcorrection)

### DetectLabelsRequest
* DetectLabelsRequest `object`
  * Image **required** [Image](#image)
  * MaxLabels [UInteger](#uinteger)
  * MinConfidence [Percent](#percent)

### DetectLabelsResponse
* DetectLabelsResponse `object`
  * Labels [Labels](#labels)
  * OrientationCorrection [OrientationCorrection](#orientationcorrection)

### DetectModerationLabelsRequest
* DetectModerationLabelsRequest `object`
  * Image **required** [Image](#image)
  * MinConfidence [Percent](#percent)

### DetectModerationLabelsResponse
* DetectModerationLabelsResponse `object`
  * ModerationLabels [ModerationLabels](#moderationlabels)

### Emotion
* Emotion `object`: The emotions detected on the face, and the confidence level in the determination. For example, HAPPY, SAD, and ANGRY.
  * Confidence [Percent](#percent)
  * Type [EmotionName](#emotionname)

### EmotionName
* EmotionName `string` (values: HAPPY, SAD, ANGRY, CONFUSED, DISGUSTED, SURPRISED, CALM, UNKNOWN)

### Emotions
* Emotions `array`
  * items [Emotion](#emotion)

### ExternalImageId
* ExternalImageId `string`

### EyeOpen
* EyeOpen `object`: Indicates whether or not the eyes on the face are open, and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [Boolean](#boolean)

### Eyeglasses
* Eyeglasses `object`: Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [Boolean](#boolean)

### Face
* Face `object`: Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. 
  * BoundingBox [BoundingBox](#boundingbox)
  * Confidence [Percent](#percent)
  * ExternalImageId [ExternalImageId](#externalimageid)
  * FaceId [FaceId](#faceid)
  * ImageId [ImageId](#imageid)

### FaceDetail
* FaceDetail `object`: Structure containing attributes of the face that the algorithm detected.
  * AgeRange [AgeRange](#agerange)
  * Beard [Beard](#beard)
  * BoundingBox [BoundingBox](#boundingbox)
  * Confidence [Percent](#percent)
  * Emotions [Emotions](#emotions)
  * Eyeglasses [Eyeglasses](#eyeglasses)
  * EyesOpen [EyeOpen](#eyeopen)
  * Gender [Gender](#gender)
  * Landmarks [Landmarks](#landmarks)
  * MouthOpen [MouthOpen](#mouthopen)
  * Mustache [Mustache](#mustache)
  * Pose [Pose](#pose)
  * Quality [ImageQuality](#imagequality)
  * Smile [Smile](#smile)
  * Sunglasses [Sunglasses](#sunglasses)

### FaceDetailList
* FaceDetailList `array`
  * items [FaceDetail](#facedetail)

### FaceId
* FaceId `string`

### FaceIdList
* FaceIdList `array`
  * items [FaceId](#faceid)

### FaceList
* FaceList `array`
  * items [Face](#face)

### FaceMatch
* FaceMatch `object`: Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.
  * Face [Face](#face)
  * Similarity [Percent](#percent)

### FaceMatchList
* FaceMatchList `array`
  * items [FaceMatch](#facematch)

### FaceRecord
* FaceRecord `object`: Object containing both the face metadata (stored in the back-end database) and facial attributes that are detected but aren't stored in the database.
  * Face [Face](#face)
  * FaceDetail [FaceDetail](#facedetail)

### FaceRecordList
* FaceRecordList `array`
  * items [FaceRecord](#facerecord)

### Float
* Float `number`

### Gender
* Gender `object`: Gender of the face and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [GenderType](#gendertype)

### GenderType
* GenderType `string` (values: Male, Female)

### GetCelebrityInfoRequest
* GetCelebrityInfoRequest `object`
  * Id **required** [RekognitionUniqueId](#rekognitionuniqueid)

### GetCelebrityInfoResponse
* GetCelebrityInfoResponse `object`
  * Name [String](#string)
  * Urls [Urls](#urls)

### Image
* Image `object`: <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to a Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Rekognition API operations. For more information, see <a>example4</a>.</p> <p> You pass images stored in an S3 bucket to a Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the Amazon CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see <a>manage-access-resource-policies</a>. </p>
  * Bytes [ImageBlob](#imageblob)
  * S3Object [S3Object](#s3object)

### ImageBlob
* ImageBlob `string`

### ImageId
* ImageId `string`

### ImageQuality
* ImageQuality `object`: Identifies face image brightness and sharpness. 
  * Brightness [Float](#float)
  * Sharpness [Float](#float)

### ImageTooLargeException
* ImageTooLargeException `object`: The input image size exceeds the allowed limit. For more information, see <a>limits</a>. 

### IndexFacesRequest
* IndexFacesRequest `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * DetectionAttributes [Attributes](#attributes)
  * ExternalImageId [ExternalImageId](#externalimageid)
  * Image **required** [Image](#image)

### IndexFacesResponse
* IndexFacesResponse `object`
  * FaceRecords [FaceRecordList](#facerecordlist)
  * OrientationCorrection [OrientationCorrection](#orientationcorrection)

### InternalServerError
* InternalServerError `object`: Amazon Rekognition experienced a service issue. Try your call again.

### InvalidImageFormatException
* InvalidImageFormatException `object`: The provided image format is not supported. 

### InvalidPaginationTokenException
* InvalidPaginationTokenException `object`: Pagination token in the request is not valid.

### InvalidParameterException
* InvalidParameterException `object`: Input parameter violated a constraint. Validate your parameter before calling the API operation again.

### InvalidS3ObjectException
* InvalidS3ObjectException `object`: Amazon Rekognition is unable to access the S3 object specified in the request.

### Label
* Label `object`: Structure containing details about the detected label, including name, and level of confidence.
  * Confidence [Percent](#percent)
  * Name [String](#string)

### Labels
* Labels `array`
  * items [Label](#label)

### Landmark
* Landmark `object`: Indicates the location of the landmark on the face.
  * Type [LandmarkType](#landmarktype)
  * X [Float](#float)
  * Y [Float](#float)

### LandmarkType
* LandmarkType `string` (values: eyeLeft, eyeRight, nose, mouthLeft, mouthRight, leftEyeBrowLeft, leftEyeBrowRight, leftEyeBrowUp, rightEyeBrowLeft, rightEyeBrowRight, rightEyeBrowUp, leftEyeLeft, leftEyeRight, leftEyeUp, leftEyeDown, rightEyeLeft, rightEyeRight, rightEyeUp, rightEyeDown, noseLeft, noseRight, mouthUp, mouthDown, leftPupil, rightPupil)

### Landmarks
* Landmarks `array`
  * items [Landmark](#landmark)

### ListCollectionsRequest
* ListCollectionsRequest `object`
  * MaxResults [PageSize](#pagesize)
  * NextToken [PaginationToken](#paginationtoken)

### ListCollectionsResponse
* ListCollectionsResponse `object`
  * CollectionIds [CollectionIdList](#collectionidlist)
  * NextToken [PaginationToken](#paginationtoken)

### ListFacesRequest
* ListFacesRequest `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * MaxResults [PageSize](#pagesize)
  * NextToken [PaginationToken](#paginationtoken)

### ListFacesResponse
* ListFacesResponse `object`
  * Faces [FaceList](#facelist)
  * NextToken [String](#string)

### MaxFaces
* MaxFaces `integer`

### ModerationLabel
* ModerationLabel `object`: Provides information about a single type of moderated content found in an image. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see <a>image-moderation</a>.
  * Confidence [Percent](#percent)
  * Name [String](#string)
  * ParentName [String](#string)

### ModerationLabels
* ModerationLabels `array`
  * items [ModerationLabel](#moderationlabel)

### MouthOpen
* MouthOpen `object`: Indicates whether or not the mouth on the face is open, and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [Boolean](#boolean)

### Mustache
* Mustache `object`: Indicates whether or not the face has a mustache, and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [Boolean](#boolean)

### OrientationCorrection
* OrientationCorrection `string` (values: ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270)

### PageSize
* PageSize `integer`

### PaginationToken
* PaginationToken `string`

### Percent
* Percent `number`

### Pose
* Pose `object`: Indicates the pose of the face as determined by its pitch, roll, and yaw.
  * Pitch [Degree](#degree)
  * Roll [Degree](#degree)
  * Yaw [Degree](#degree)

### ProvisionedThroughputExceededException
* ProvisionedThroughputExceededException `object`: The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.

### RecognizeCelebritiesRequest
* RecognizeCelebritiesRequest `object`
  * Image **required** [Image](#image)

### RecognizeCelebritiesResponse
* RecognizeCelebritiesResponse `object`
  * CelebrityFaces [CelebrityList](#celebritylist)
  * OrientationCorrection [OrientationCorrection](#orientationcorrection)
  * UnrecognizedFaces [ComparedFaceList](#comparedfacelist)

### RekognitionUniqueId
* RekognitionUniqueId `string`

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: A collection with the specified ID already exists.

### ResourceNotFoundException
* ResourceNotFoundException `object`: Collection specified in the request is not found.

### S3Bucket
* S3Bucket `string`

### S3Object
* S3Object `object`: <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see <a>manage-access-resource-policies</a>. </p>
  * Bucket [S3Bucket](#s3bucket)
  * Name [S3ObjectName](#s3objectname)
  * Version [S3ObjectVersion](#s3objectversion)

### S3ObjectName
* S3ObjectName `string`

### S3ObjectVersion
* S3ObjectVersion `string`

### SearchFacesByImageRequest
* SearchFacesByImageRequest `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * FaceMatchThreshold [Percent](#percent)
  * Image **required** [Image](#image)
  * MaxFaces [MaxFaces](#maxfaces)

### SearchFacesByImageResponse
* SearchFacesByImageResponse `object`
  * FaceMatches [FaceMatchList](#facematchlist)
  * SearchedFaceBoundingBox [BoundingBox](#boundingbox)
  * SearchedFaceConfidence [Percent](#percent)

### SearchFacesRequest
* SearchFacesRequest `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * FaceId **required** [FaceId](#faceid)
  * FaceMatchThreshold [Percent](#percent)
  * MaxFaces [MaxFaces](#maxfaces)

### SearchFacesResponse
* SearchFacesResponse `object`
  * FaceMatches [FaceMatchList](#facematchlist)
  * SearchedFaceId [FaceId](#faceid)

### Smile
* Smile `object`: Indicates whether or not the face is smiling, and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [Boolean](#boolean)

### String
* String `string`

### Sunglasses
* Sunglasses `object`: Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [Boolean](#boolean)

### ThrottlingException
* ThrottlingException `object`: Amazon Rekognition is temporarily unable to process the request. Try your call again.

### UInteger
* UInteger `integer`

### Url
* Url `string`

### Urls
* Urls `array`
  * items [Url](#url)


