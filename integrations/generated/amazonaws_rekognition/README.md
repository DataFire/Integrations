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

### CreateStreamProcessor



```js
amazonaws_rekognition.CreateStreamProcessor({
  "Input": {},
  "Output": {},
  "Name": "",
  "Settings": {},
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * Input **required** [StreamProcessorInput](#streamprocessorinput)
  * Name **required** [StreamProcessorName](#streamprocessorname)
  * Output **required** [StreamProcessorOutput](#streamprocessoroutput)
  * RoleArn **required** [RoleArn](#rolearn)
  * Settings **required** [StreamProcessorSettings](#streamprocessorsettings)

#### Output
* output [CreateStreamProcessorResponse](#createstreamprocessorresponse)

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

### DeleteStreamProcessor



```js
amazonaws_rekognition.DeleteStreamProcessor({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [StreamProcessorName](#streamprocessorname)

#### Output
* output [DeleteStreamProcessorResponse](#deletestreamprocessorresponse)

### DescribeStreamProcessor



```js
amazonaws_rekognition.DescribeStreamProcessor({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [StreamProcessorName](#streamprocessorname)

#### Output
* output [DescribeStreamProcessorResponse](#describestreamprocessorresponse)

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

### DetectText



```js
amazonaws_rekognition.DetectText({
  "Image": {}
}, context)
```

#### Input
* input `object`
  * Image **required** [Image](#image)

#### Output
* output [DetectTextResponse](#detecttextresponse)

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

### GetCelebrityRecognition



```js
amazonaws_rekognition.GetCelebrityRecognition({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [CelebrityRecognitionSortBy](#celebrityrecognitionsortby)

#### Output
* output [GetCelebrityRecognitionResponse](#getcelebrityrecognitionresponse)

### GetContentModeration



```js
amazonaws_rekognition.GetContentModeration({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [ContentModerationSortBy](#contentmoderationsortby)

#### Output
* output [GetContentModerationResponse](#getcontentmoderationresponse)

### GetFaceDetection



```js
amazonaws_rekognition.GetFaceDetection({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [GetFaceDetectionResponse](#getfacedetectionresponse)

### GetFaceSearch



```js
amazonaws_rekognition.GetFaceSearch({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [FaceSearchSortBy](#facesearchsortby)

#### Output
* output [GetFaceSearchResponse](#getfacesearchresponse)

### GetLabelDetection



```js
amazonaws_rekognition.GetLabelDetection({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [LabelDetectionSortBy](#labeldetectionsortby)

#### Output
* output [GetLabelDetectionResponse](#getlabeldetectionresponse)

### GetPersonTracking



```js
amazonaws_rekognition.GetPersonTracking({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [PersonTrackingSortBy](#persontrackingsortby)

#### Output
* output [GetPersonTrackingResponse](#getpersontrackingresponse)

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

### ListStreamProcessors



```js
amazonaws_rekognition.ListStreamProcessors({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListStreamProcessorsResponse](#liststreamprocessorsresponse)

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

### StartCelebrityRecognition



```js
amazonaws_rekognition.StartCelebrityRecognition({
  "Video": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * JobTag [JobTag](#jobtag)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

#### Output
* output [StartCelebrityRecognitionResponse](#startcelebrityrecognitionresponse)

### StartContentModeration



```js
amazonaws_rekognition.StartContentModeration({
  "Video": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * JobTag [JobTag](#jobtag)
  * MinConfidence [Percent](#percent)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

#### Output
* output [StartContentModerationResponse](#startcontentmoderationresponse)

### StartFaceDetection



```js
amazonaws_rekognition.StartFaceDetection({
  "Video": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * FaceAttributes [FaceAttributes](#faceattributes)
  * JobTag [JobTag](#jobtag)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

#### Output
* output [StartFaceDetectionResponse](#startfacedetectionresponse)

### StartFaceSearch



```js
amazonaws_rekognition.StartFaceSearch({
  "Video": {},
  "CollectionId": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * CollectionId **required** [CollectionId](#collectionid)
  * FaceMatchThreshold [Percent](#percent)
  * JobTag [JobTag](#jobtag)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

#### Output
* output [StartFaceSearchResponse](#startfacesearchresponse)

### StartLabelDetection



```js
amazonaws_rekognition.StartLabelDetection({
  "Video": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * JobTag [JobTag](#jobtag)
  * MinConfidence [Percent](#percent)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

#### Output
* output [StartLabelDetectionResponse](#startlabeldetectionresponse)

### StartPersonTracking



```js
amazonaws_rekognition.StartPersonTracking({
  "Video": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * JobTag [JobTag](#jobtag)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

#### Output
* output [StartPersonTrackingResponse](#startpersontrackingresponse)

### StartStreamProcessor



```js
amazonaws_rekognition.StartStreamProcessor({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [StreamProcessorName](#streamprocessorname)

#### Output
* output [StartStreamProcessorResponse](#startstreamprocessorresponse)

### StopStreamProcessor



```js
amazonaws_rekognition.StopStreamProcessor({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [StreamProcessorName](#streamprocessorname)

#### Output
* output [StopStreamProcessorResponse](#stopstreamprocessorresponse)



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
* BoundingBox `object`: <p>Identifies the bounding box around the object, face or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note>
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

### CelebrityDetail
* CelebrityDetail `object`: Information about a recognized celebrity.
  * BoundingBox [BoundingBox](#boundingbox)
  * Confidence [Percent](#percent)
  * Face [FaceDetail](#facedetail)
  * Id [RekognitionUniqueId](#rekognitionuniqueid)
  * Name [String](#string)
  * Urls [Urls](#urls)

### CelebrityList
* CelebrityList `array`
  * items [Celebrity](#celebrity)

### CelebrityRecognition
* CelebrityRecognition `object`: Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see .
  * Celebrity [CelebrityDetail](#celebritydetail)
  * Timestamp [Timestamp](#timestamp)

### CelebrityRecognitionSortBy
* CelebrityRecognitionSortBy `string` (values: ID, TIMESTAMP)

### CelebrityRecognitions
* CelebrityRecognitions `array`
  * items [CelebrityRecognition](#celebrityrecognition)

### ClientRequestToken
* ClientRequestToken `string`

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

### ContentModerationDetection
* ContentModerationDetection `object`: Information about a moderation label detection in a stored video.
  * ModerationLabel [ModerationLabel](#moderationlabel)
  * Timestamp [Timestamp](#timestamp)

### ContentModerationDetections
* ContentModerationDetections `array`
  * items [ContentModerationDetection](#contentmoderationdetection)

### ContentModerationSortBy
* ContentModerationSortBy `string` (values: NAME, TIMESTAMP)

### CreateCollectionRequest
* CreateCollectionRequest `object`
  * CollectionId **required** [CollectionId](#collectionid)

### CreateCollectionResponse
* CreateCollectionResponse `object`
  * CollectionArn [String](#string)
  * FaceModelVersion [String](#string)
  * StatusCode [UInteger](#uinteger)

### CreateStreamProcessorRequest
* CreateStreamProcessorRequest `object`
  * Input **required** [StreamProcessorInput](#streamprocessorinput)
  * Name **required** [StreamProcessorName](#streamprocessorname)
  * Output **required** [StreamProcessorOutput](#streamprocessoroutput)
  * RoleArn **required** [RoleArn](#rolearn)
  * Settings **required** [StreamProcessorSettings](#streamprocessorsettings)

### CreateStreamProcessorResponse
* CreateStreamProcessorResponse `object`
  * StreamProcessorArn [StreamProcessorArn](#streamprocessorarn)

### DateTime
* DateTime `string`

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

### DeleteStreamProcessorRequest
* DeleteStreamProcessorRequest `object`
  * Name **required** [StreamProcessorName](#streamprocessorname)

### DeleteStreamProcessorResponse
* DeleteStreamProcessorResponse `object`

### DescribeStreamProcessorRequest
* DescribeStreamProcessorRequest `object`
  * Name **required** [StreamProcessorName](#streamprocessorname)

### DescribeStreamProcessorResponse
* DescribeStreamProcessorResponse `object`
  * CreationTimestamp [DateTime](#datetime)
  * Input [StreamProcessorInput](#streamprocessorinput)
  * LastUpdateTimestamp [DateTime](#datetime)
  * Name [StreamProcessorName](#streamprocessorname)
  * Output [StreamProcessorOutput](#streamprocessoroutput)
  * RoleArn [RoleArn](#rolearn)
  * Settings [StreamProcessorSettings](#streamprocessorsettings)
  * Status [StreamProcessorStatus](#streamprocessorstatus)
  * StatusMessage [String](#string)
  * StreamProcessorArn [StreamProcessorArn](#streamprocessorarn)

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

### DetectTextRequest
* DetectTextRequest `object`
  * Image **required** [Image](#image)

### DetectTextResponse
* DetectTextResponse `object`
  * TextDetections [TextDetectionList](#textdetectionlist)

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

### FaceAttributes
* FaceAttributes `string` (values: DEFAULT, ALL)

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

### FaceDetection
* FaceDetection `object`: Information about a face detected in a video analysis request and the time the face was detected in the video. 
  * Face [FaceDetail](#facedetail)
  * Timestamp [Timestamp](#timestamp)

### FaceDetections
* FaceDetections `array`
  * items [FaceDetection](#facedetection)

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

### FaceModelVersionList
* FaceModelVersionList `array`
  * items [String](#string)

### FaceRecord
* FaceRecord `object`: Object containing both the face metadata (stored in the back-end database) and facial attributes that are detected but aren't stored in the database.
  * Face [Face](#face)
  * FaceDetail [FaceDetail](#facedetail)

### FaceRecordList
* FaceRecordList `array`
  * items [FaceRecord](#facerecord)

### FaceSearchSettings
* FaceSearchSettings `object`: Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for .
  * CollectionId [CollectionId](#collectionid)
  * FaceMatchThreshold [Percent](#percent)

### FaceSearchSortBy
* FaceSearchSortBy `string` (values: INDEX, TIMESTAMP)

### Float
* Float `number`

### Gender
* Gender `object`: Gender of the face and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [GenderType](#gendertype)

### GenderType
* GenderType `string` (values: Male, Female)

### Geometry
* Geometry `object`: Information about where text detected by is located on an image.
  * BoundingBox [BoundingBox](#boundingbox)
  * Polygon [Polygon](#polygon)

### GetCelebrityInfoRequest
* GetCelebrityInfoRequest `object`
  * Id **required** [RekognitionUniqueId](#rekognitionuniqueid)

### GetCelebrityInfoResponse
* GetCelebrityInfoResponse `object`
  * Name [String](#string)
  * Urls [Urls](#urls)

### GetCelebrityRecognitionRequest
* GetCelebrityRecognitionRequest `object`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [CelebrityRecognitionSortBy](#celebrityrecognitionsortby)

### GetCelebrityRecognitionResponse
* GetCelebrityRecognitionResponse `object`
  * Celebrities [CelebrityRecognitions](#celebrityrecognitions)
  * JobStatus [VideoJobStatus](#videojobstatus)
  * NextToken [PaginationToken](#paginationtoken)
  * StatusMessage [StatusMessage](#statusmessage)
  * VideoMetadata [VideoMetadata](#videometadata)

### GetContentModerationRequest
* GetContentModerationRequest `object`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [ContentModerationSortBy](#contentmoderationsortby)

### GetContentModerationResponse
* GetContentModerationResponse `object`
  * JobStatus [VideoJobStatus](#videojobstatus)
  * ModerationLabels [ContentModerationDetections](#contentmoderationdetections)
  * NextToken [PaginationToken](#paginationtoken)
  * StatusMessage [StatusMessage](#statusmessage)
  * VideoMetadata [VideoMetadata](#videometadata)

### GetFaceDetectionRequest
* GetFaceDetectionRequest `object`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)

### GetFaceDetectionResponse
* GetFaceDetectionResponse `object`
  * Faces [FaceDetections](#facedetections)
  * JobStatus [VideoJobStatus](#videojobstatus)
  * NextToken [PaginationToken](#paginationtoken)
  * StatusMessage [StatusMessage](#statusmessage)
  * VideoMetadata [VideoMetadata](#videometadata)

### GetFaceSearchRequest
* GetFaceSearchRequest `object`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [FaceSearchSortBy](#facesearchsortby)

### GetFaceSearchResponse
* GetFaceSearchResponse `object`
  * JobStatus [VideoJobStatus](#videojobstatus)
  * NextToken [PaginationToken](#paginationtoken)
  * Persons [PersonMatches](#personmatches)
  * StatusMessage [StatusMessage](#statusmessage)
  * VideoMetadata [VideoMetadata](#videometadata)

### GetLabelDetectionRequest
* GetLabelDetectionRequest `object`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [LabelDetectionSortBy](#labeldetectionsortby)

### GetLabelDetectionResponse
* GetLabelDetectionResponse `object`
  * JobStatus [VideoJobStatus](#videojobstatus)
  * Labels [LabelDetections](#labeldetections)
  * NextToken [PaginationToken](#paginationtoken)
  * StatusMessage [StatusMessage](#statusmessage)
  * VideoMetadata [VideoMetadata](#videometadata)

### GetPersonTrackingRequest
* GetPersonTrackingRequest `object`
  * JobId **required** [JobId](#jobid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [PersonTrackingSortBy](#persontrackingsortby)

### GetPersonTrackingResponse
* GetPersonTrackingResponse `object`
  * JobStatus [VideoJobStatus](#videojobstatus)
  * NextToken [PaginationToken](#paginationtoken)
  * Persons [PersonDetections](#persondetections)
  * StatusMessage [StatusMessage](#statusmessage)
  * VideoMetadata [VideoMetadata](#videometadata)

### IdempotentParameterMismatchException
* IdempotentParameterMismatchException `object`: A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.

### Image
* Image `object`: <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to a Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Rekognition API operations. For more information, see <a>images-bytes</a>.</p> <p> You pass images stored in an S3 bucket to a Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the Amazon CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see <a>manage-access-resource-policies</a>. </p>
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
  * FaceModelVersion [String](#string)
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

### JobId
* JobId `string`

### JobTag
* JobTag `string`

### KinesisDataArn
* KinesisDataArn `string`

### KinesisDataStream
* KinesisDataStream `object`: The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see .
  * Arn [KinesisDataArn](#kinesisdataarn)

### KinesisVideoArn
* KinesisVideoArn `string`

### KinesisVideoStream
* KinesisVideoStream `object`: Kinesis video stream stream that provides the source streaming video for a Rekognition Video stream processor. For more information, see .
  * Arn [KinesisVideoArn](#kinesisvideoarn)

### Label
* Label `object`: Structure containing details about the detected label, including name, and level of confidence.
  * Confidence [Percent](#percent)
  * Name [String](#string)

### LabelDetection
* LabelDetection `object`: Information about a label detected in a video analysis request and the time the label was detected in the video. 
  * Label [Label](#label)
  * Timestamp [Timestamp](#timestamp)

### LabelDetectionSortBy
* LabelDetectionSortBy `string` (values: NAME, TIMESTAMP)

### LabelDetections
* LabelDetections `array`
  * items [LabelDetection](#labeldetection)

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

### LimitExceededException
* LimitExceededException `object`: <p/>

### ListCollectionsRequest
* ListCollectionsRequest `object`
  * MaxResults [PageSize](#pagesize)
  * NextToken [PaginationToken](#paginationtoken)

### ListCollectionsResponse
* ListCollectionsResponse `object`
  * CollectionIds [CollectionIdList](#collectionidlist)
  * FaceModelVersions [FaceModelVersionList](#facemodelversionlist)
  * NextToken [PaginationToken](#paginationtoken)

### ListFacesRequest
* ListFacesRequest `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * MaxResults [PageSize](#pagesize)
  * NextToken [PaginationToken](#paginationtoken)

### ListFacesResponse
* ListFacesResponse `object`
  * FaceModelVersion [String](#string)
  * Faces [FaceList](#facelist)
  * NextToken [String](#string)

### ListStreamProcessorsRequest
* ListStreamProcessorsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [PaginationToken](#paginationtoken)

### ListStreamProcessorsResponse
* ListStreamProcessorsResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * StreamProcessors [StreamProcessorList](#streamprocessorlist)

### MaxFaces
* MaxFaces `integer`

### MaxResults
* MaxResults `integer`

### ModerationLabel
* ModerationLabel `object`: Provides information about a single type of moderated content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see <a>moderation</a>.
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

### NotificationChannel
* NotificationChannel `object`: The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>.
  * RoleArn **required** [RoleArn](#rolearn)
  * SNSTopicArn **required** [SNSTopicArn](#snstopicarn)

### OrientationCorrection
* OrientationCorrection `string` (values: ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270)

### PageSize
* PageSize `integer`

### PaginationToken
* PaginationToken `string`

### Percent
* Percent `number`

### PersonDetail
* PersonDetail `object`: Details about a person detected in a video analysis request.
  * BoundingBox [BoundingBox](#boundingbox)
  * Face [FaceDetail](#facedetail)
  * Index [PersonIndex](#personindex)

### PersonDetection
* PersonDetection `object`: Details and tracking information for a single time a person is tracked in a video. Amazon Rekognition operations that track persons return an array of <code>PersonDetection</code> objects with elements for each time a person is tracked in a video. For more information, see . 
  * Person [PersonDetail](#persondetail)
  * Timestamp [Timestamp](#timestamp)

### PersonDetections
* PersonDetections `array`
  * items [PersonDetection](#persondetection)

### PersonIndex
* PersonIndex `integer`

### PersonMatch
* PersonMatch `object`: Information about a person whose face matches a face(s) in a Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (,information about the person (<a>PersonDetail</a>) and the timestamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by . 
  * FaceMatches [FaceMatchList](#facematchlist)
  * Person [PersonDetail](#persondetail)
  * Timestamp [Timestamp](#timestamp)

### PersonMatches
* PersonMatches `array`
  * items [PersonMatch](#personmatch)

### PersonTrackingSortBy
* PersonTrackingSortBy `string` (values: INDEX, TIMESTAMP)

### Point
* Point `object`: <p>The X and Y coordinates of a point on an image. The X and Y values returned are ratios of the overall image size. For example, if the input image is 700x200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by . <code>Polygon</code> represents a fine-grained polygon around detected text. For more information, see . </p>
  * X [Float](#float)
  * Y [Float](#float)

### Polygon
* Polygon `array`
  * items [Point](#point)

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

### ResourceInUseException
* ResourceInUseException `object`: <p/>

### ResourceNotFoundException
* ResourceNotFoundException `object`: The collection specified in the request cannot be found.

### RoleArn
* RoleArn `string`

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

### SNSTopicArn
* SNSTopicArn `string`

### SearchFacesByImageRequest
* SearchFacesByImageRequest `object`
  * CollectionId **required** [CollectionId](#collectionid)
  * FaceMatchThreshold [Percent](#percent)
  * Image **required** [Image](#image)
  * MaxFaces [MaxFaces](#maxfaces)

### SearchFacesByImageResponse
* SearchFacesByImageResponse `object`
  * FaceMatches [FaceMatchList](#facematchlist)
  * FaceModelVersion [String](#string)
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
  * FaceModelVersion [String](#string)
  * SearchedFaceId [FaceId](#faceid)

### Smile
* Smile `object`: Indicates whether or not the face is smiling, and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [Boolean](#boolean)

### StartCelebrityRecognitionRequest
* StartCelebrityRecognitionRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * JobTag [JobTag](#jobtag)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

### StartCelebrityRecognitionResponse
* StartCelebrityRecognitionResponse `object`
  * JobId [JobId](#jobid)

### StartContentModerationRequest
* StartContentModerationRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * JobTag [JobTag](#jobtag)
  * MinConfidence [Percent](#percent)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

### StartContentModerationResponse
* StartContentModerationResponse `object`
  * JobId [JobId](#jobid)

### StartFaceDetectionRequest
* StartFaceDetectionRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * FaceAttributes [FaceAttributes](#faceattributes)
  * JobTag [JobTag](#jobtag)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

### StartFaceDetectionResponse
* StartFaceDetectionResponse `object`
  * JobId [JobId](#jobid)

### StartFaceSearchRequest
* StartFaceSearchRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * CollectionId **required** [CollectionId](#collectionid)
  * FaceMatchThreshold [Percent](#percent)
  * JobTag [JobTag](#jobtag)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

### StartFaceSearchResponse
* StartFaceSearchResponse `object`
  * JobId [JobId](#jobid)

### StartLabelDetectionRequest
* StartLabelDetectionRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * JobTag [JobTag](#jobtag)
  * MinConfidence [Percent](#percent)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

### StartLabelDetectionResponse
* StartLabelDetectionResponse `object`
  * JobId [JobId](#jobid)

### StartPersonTrackingRequest
* StartPersonTrackingRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * JobTag [JobTag](#jobtag)
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

### StartPersonTrackingResponse
* StartPersonTrackingResponse `object`
  * JobId [JobId](#jobid)

### StartStreamProcessorRequest
* StartStreamProcessorRequest `object`
  * Name **required** [StreamProcessorName](#streamprocessorname)

### StartStreamProcessorResponse
* StartStreamProcessorResponse `object`

### StatusMessage
* StatusMessage `string`

### StopStreamProcessorRequest
* StopStreamProcessorRequest `object`
  * Name **required** [StreamProcessorName](#streamprocessorname)

### StopStreamProcessorResponse
* StopStreamProcessorResponse `object`

### StreamProcessor
* StreamProcessor `object`: An object that recognizes faces in a streaming video. An Amazon Rekognition stream processor is created by a call to . The request parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts. 
  * Name [StreamProcessorName](#streamprocessorname)
  * Status [StreamProcessorStatus](#streamprocessorstatus)

### StreamProcessorArn
* StreamProcessorArn `string`

### StreamProcessorInput
* StreamProcessorInput `object`: Information about the source streaming video. 
  * KinesisVideoStream [KinesisVideoStream](#kinesisvideostream)

### StreamProcessorList
* StreamProcessorList `array`
  * items [StreamProcessor](#streamprocessor)

### StreamProcessorName
* StreamProcessorName `string`

### StreamProcessorOutput
* StreamProcessorOutput `object`: Information about the Amazon Kinesis Data Streams stream to which a Rekognition Video stream processor streams the results of a video analysis. For more information, see .
  * KinesisDataStream [KinesisDataStream](#kinesisdatastream)

### StreamProcessorSettings
* StreamProcessorSettings `object`: Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.
  * FaceSearch [FaceSearchSettings](#facesearchsettings)

### StreamProcessorStatus
* StreamProcessorStatus `string` (values: STOPPED, STARTING, RUNNING, FAILED, STOPPING)

### String
* String `string`

### Sunglasses
* Sunglasses `object`: Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.
  * Confidence [Percent](#percent)
  * Value [Boolean](#boolean)

### TextDetection
* TextDetection `object`: <p>Information about a word or line of text detected by .</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see <a>text-detection</a>.</p>
  * Confidence [Percent](#percent)
  * DetectedText [String](#string)
  * Geometry [Geometry](#geometry)
  * Id [UInteger](#uinteger)
  * ParentId [UInteger](#uinteger)
  * Type [TextTypes](#texttypes)

### TextDetectionList
* TextDetectionList `array`
  * items [TextDetection](#textdetection)

### TextTypes
* TextTypes `string` (values: LINE, WORD)

### ThrottlingException
* ThrottlingException `object`: Amazon Rekognition is temporarily unable to process the request. Try your call again.

### Timestamp
* Timestamp `integer`

### UInteger
* UInteger `integer`

### ULong
* ULong `integer`

### Url
* Url `string`

### Urls
* Urls `array`
  * items [Url](#url)

### Video
* Video `object`: Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
  * S3Object [S3Object](#s3object)

### VideoJobStatus
* VideoJobStatus `string` (values: IN_PROGRESS, SUCCEEDED, FAILED)

### VideoMetadata
* VideoMetadata `object`: Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.
  * Codec [String](#string)
  * DurationMillis [ULong](#ulong)
  * Format [String](#string)
  * FrameHeight [ULong](#ulong)
  * FrameRate [Float](#float)
  * FrameWidth [ULong](#ulong)

### VideoTooLargeException
* VideoTooLargeException `object`: The file size or duration of the supplied media is too large. The maximum file size is 8GB. The maximum duration is 2 hours. 


