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

.then(data => {
  console.log(data);
});
```

## Description

This is the Amazon Rekognition API reference.

## Actions

### CompareFaces



```js
amazonaws_rekognition.CompareFaces({
  "SourceImage": null,
  "TargetImage": null
}, context)
```

#### Input
* input `object`
  * QualityFilter
  * SimilarityThreshold
  * SourceImage **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * TargetImage **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [CompareFacesResponse](#comparefacesresponse)

### CreateCollection



```js
amazonaws_rekognition.CreateCollection({
  "CollectionId": null
}, context)
```

#### Input
* input `object`
  * CollectionId **required**

#### Output
* output [CreateCollectionResponse](#createcollectionresponse)

### CreateProject



```js
amazonaws_rekognition.CreateProject({
  "ProjectName": null
}, context)
```

#### Input
* input `object`
  * ProjectName **required**

#### Output
* output [CreateProjectResponse](#createprojectresponse)

### CreateProjectVersion



```js
amazonaws_rekognition.CreateProjectVersion({
  "ProjectArn": null,
  "VersionName": null,
  "OutputConfig": null,
  "TrainingData": null,
  "TestingData": null
}, context)
```

#### Input
* input `object`
  * OutputConfig **required**
    * S3Bucket
    * S3KeyPrefix
  * ProjectArn **required**
  * TestingData **required**
    * Assets
      * items [Asset](#asset)
    * AutoCreate
  * TrainingData **required**
    * Assets
      * items [Asset](#asset)
  * VersionName **required**

#### Output
* output [CreateProjectVersionResponse](#createprojectversionresponse)

### CreateStreamProcessor



```js
amazonaws_rekognition.CreateStreamProcessor({
  "Input": null,
  "Output": null,
  "Name": null,
  "Settings": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * Input **required**
    * KinesisVideoStream
      * Arn
  * Name **required**
  * Output **required**
    * KinesisDataStream
      * Arn
  * RoleArn **required**
  * Settings **required**
    * FaceSearch
      * CollectionId
      * FaceMatchThreshold

#### Output
* output [CreateStreamProcessorResponse](#createstreamprocessorresponse)

### DeleteCollection



```js
amazonaws_rekognition.DeleteCollection({
  "CollectionId": null
}, context)
```

#### Input
* input `object`
  * CollectionId **required**

#### Output
* output [DeleteCollectionResponse](#deletecollectionresponse)

### DeleteFaces



```js
amazonaws_rekognition.DeleteFaces({
  "CollectionId": null,
  "FaceIds": null
}, context)
```

#### Input
* input `object`
  * CollectionId **required**
  * FaceIds **required**
    * items [FaceId](#faceid)

#### Output
* output [DeleteFacesResponse](#deletefacesresponse)

### DeleteProject



```js
amazonaws_rekognition.DeleteProject({
  "ProjectArn": null
}, context)
```

#### Input
* input `object`
  * ProjectArn **required**

#### Output
* output [DeleteProjectResponse](#deleteprojectresponse)

### DeleteProjectVersion



```js
amazonaws_rekognition.DeleteProjectVersion({
  "ProjectVersionArn": null
}, context)
```

#### Input
* input `object`
  * ProjectVersionArn **required**

#### Output
* output [DeleteProjectVersionResponse](#deleteprojectversionresponse)

### DeleteStreamProcessor



```js
amazonaws_rekognition.DeleteStreamProcessor({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteStreamProcessorResponse](#deletestreamprocessorresponse)

### DescribeCollection



```js
amazonaws_rekognition.DescribeCollection({
  "CollectionId": null
}, context)
```

#### Input
* input `object`
  * CollectionId **required**

#### Output
* output [DescribeCollectionResponse](#describecollectionresponse)

### DescribeProjectVersions



```js
amazonaws_rekognition.DescribeProjectVersions({
  "ProjectArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ProjectArn **required**
  * VersionNames
    * items [VersionName](#versionname)

#### Output
* output [DescribeProjectVersionsResponse](#describeprojectversionsresponse)

### DescribeProjects



```js
amazonaws_rekognition.DescribeProjects({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [DescribeProjectsResponse](#describeprojectsresponse)

### DescribeStreamProcessor



```js
amazonaws_rekognition.DescribeStreamProcessor({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DescribeStreamProcessorResponse](#describestreamprocessorresponse)

### DetectCustomLabels



```js
amazonaws_rekognition.DetectCustomLabels({
  "ProjectVersionArn": null,
  "Image": {}
}, context)
```

#### Input
* input `object`
  * Image **required** [Image](#image)
  * MaxResults
  * MinConfidence
  * ProjectVersionArn **required**

#### Output
* output [DetectCustomLabelsResponse](#detectcustomlabelsresponse)

### DetectFaces



```js
amazonaws_rekognition.DetectFaces({
  "Image": null
}, context)
```

#### Input
* input `object`
  * Attributes
    * items [Attribute](#attribute)
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [DetectFacesResponse](#detectfacesresponse)

### DetectLabels



```js
amazonaws_rekognition.DetectLabels({
  "Image": null
}, context)
```

#### Input
* input `object`
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * MaxLabels
  * MinConfidence

#### Output
* output [DetectLabelsResponse](#detectlabelsresponse)

### DetectModerationLabels



```js
amazonaws_rekognition.DetectModerationLabels({
  "Image": null
}, context)
```

#### Input
* input `object`
  * HumanLoopConfig
    * DataAttributes
      * ContentClassifiers
        * items [ContentClassifier](#contentclassifier)
    * FlowDefinitionArn **required**
    * HumanLoopName **required**
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * MinConfidence

#### Output
* output [DetectModerationLabelsResponse](#detectmoderationlabelsresponse)

### DetectProtectiveEquipment



```js
amazonaws_rekognition.DetectProtectiveEquipment({
  "Image": null
}, context)
```

#### Input
* input `object`
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * SummarizationAttributes
    * MinConfidence **required**
    * RequiredEquipmentTypes **required**
      * items [ProtectiveEquipmentType](#protectiveequipmenttype)

#### Output
* output [DetectProtectiveEquipmentResponse](#detectprotectiveequipmentresponse)

### DetectText



```js
amazonaws_rekognition.DetectText({
  "Image": null
}, context)
```

#### Input
* input `object`
  * Filters
    * RegionsOfInterest
      * items [RegionOfInterest](#regionofinterest)
    * WordFilter [DetectionFilter](#detectionfilter)
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [DetectTextResponse](#detecttextresponse)

### GetCelebrityInfo



```js
amazonaws_rekognition.GetCelebrityInfo({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
* output [GetCelebrityInfoResponse](#getcelebrityinforesponse)

### GetCelebrityRecognition



```js
amazonaws_rekognition.GetCelebrityRecognition({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required**
  * MaxResults
  * NextToken
  * SortBy

#### Output
* output [GetCelebrityRecognitionResponse](#getcelebrityrecognitionresponse)

### GetContentModeration



```js
amazonaws_rekognition.GetContentModeration({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required**
  * MaxResults
  * NextToken
  * SortBy

#### Output
* output [GetContentModerationResponse](#getcontentmoderationresponse)

### GetFaceDetection



```js
amazonaws_rekognition.GetFaceDetection({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required**
  * MaxResults
  * NextToken

#### Output
* output [GetFaceDetectionResponse](#getfacedetectionresponse)

### GetFaceSearch



```js
amazonaws_rekognition.GetFaceSearch({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required**
  * MaxResults
  * NextToken
  * SortBy

#### Output
* output [GetFaceSearchResponse](#getfacesearchresponse)

### GetLabelDetection



```js
amazonaws_rekognition.GetLabelDetection({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required**
  * MaxResults
  * NextToken
  * SortBy

#### Output
* output [GetLabelDetectionResponse](#getlabeldetectionresponse)

### GetPersonTracking



```js
amazonaws_rekognition.GetPersonTracking({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required**
  * MaxResults
  * NextToken
  * SortBy

#### Output
* output [GetPersonTrackingResponse](#getpersontrackingresponse)

### GetSegmentDetection



```js
amazonaws_rekognition.GetSegmentDetection({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required**
  * MaxResults
  * NextToken

#### Output
* output [GetSegmentDetectionResponse](#getsegmentdetectionresponse)

### GetTextDetection



```js
amazonaws_rekognition.GetTextDetection({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobId **required**
  * MaxResults
  * NextToken

#### Output
* output [GetTextDetectionResponse](#gettextdetectionresponse)

### IndexFaces



```js
amazonaws_rekognition.IndexFaces({
  "CollectionId": null,
  "Image": null
}, context)
```

#### Input
* input `object`
  * CollectionId **required**
  * DetectionAttributes
    * items [Attribute](#attribute)
  * ExternalImageId
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * MaxFaces
  * QualityFilter

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
  * MaxResults
  * NextToken

#### Output
* output [ListCollectionsResponse](#listcollectionsresponse)

### ListFaces



```js
amazonaws_rekognition.ListFaces({
  "CollectionId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CollectionId **required**
  * MaxResults
  * NextToken

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
  * MaxResults
  * NextToken

#### Output
* output [ListStreamProcessorsResponse](#liststreamprocessorsresponse)

### RecognizeCelebrities



```js
amazonaws_rekognition.RecognizeCelebrities({
  "Image": null
}, context)
```

#### Input
* input `object`
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [RecognizeCelebritiesResponse](#recognizecelebritiesresponse)

### SearchFaces



```js
amazonaws_rekognition.SearchFaces({
  "CollectionId": null,
  "FaceId": null
}, context)
```

#### Input
* input `object`
  * CollectionId **required**
  * FaceId **required**
  * FaceMatchThreshold
  * MaxFaces

#### Output
* output [SearchFacesResponse](#searchfacesresponse)

### SearchFacesByImage



```js
amazonaws_rekognition.SearchFacesByImage({
  "CollectionId": null,
  "Image": null
}, context)
```

#### Input
* input `object`
  * CollectionId **required**
  * FaceMatchThreshold
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * MaxFaces
  * QualityFilter

#### Output
* output [SearchFacesByImageResponse](#searchfacesbyimageresponse)

### StartCelebrityRecognition



```js
amazonaws_rekognition.StartCelebrityRecognition({
  "Video": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * JobTag
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [StartCelebrityRecognitionResponse](#startcelebrityrecognitionresponse)

### StartContentModeration



```js
amazonaws_rekognition.StartContentModeration({
  "Video": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * JobTag
  * MinConfidence
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [StartContentModerationResponse](#startcontentmoderationresponse)

### StartFaceDetection



```js
amazonaws_rekognition.StartFaceDetection({
  "Video": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * FaceAttributes
  * JobTag
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [StartFaceDetectionResponse](#startfacedetectionresponse)

### StartFaceSearch



```js
amazonaws_rekognition.StartFaceSearch({
  "Video": null,
  "CollectionId": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * CollectionId **required**
  * FaceMatchThreshold
  * JobTag
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [StartFaceSearchResponse](#startfacesearchresponse)

### StartLabelDetection



```js
amazonaws_rekognition.StartLabelDetection({
  "Video": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * JobTag
  * MinConfidence
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [StartLabelDetectionResponse](#startlabeldetectionresponse)

### StartPersonTracking



```js
amazonaws_rekognition.StartPersonTracking({
  "Video": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * JobTag
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [StartPersonTrackingResponse](#startpersontrackingresponse)

### StartProjectVersion



```js
amazonaws_rekognition.StartProjectVersion({
  "ProjectVersionArn": null,
  "MinInferenceUnits": null
}, context)
```

#### Input
* input `object`
  * MinInferenceUnits **required**
  * ProjectVersionArn **required**

#### Output
* output [StartProjectVersionResponse](#startprojectversionresponse)

### StartSegmentDetection



```js
amazonaws_rekognition.StartSegmentDetection({
  "Video": {},
  "SegmentTypes": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * Filters
    * ShotFilter
      * MinSegmentConfidence
    * TechnicalCueFilter
      * MinSegmentConfidence
  * JobTag
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * SegmentTypes **required**
    * items [SegmentType](#segmenttype)
  * Video **required** [Video](#video)

#### Output
* output [StartSegmentDetectionResponse](#startsegmentdetectionresponse)

### StartStreamProcessor



```js
amazonaws_rekognition.StartStreamProcessor({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StartStreamProcessorResponse](#startstreamprocessorresponse)

### StartTextDetection



```js
amazonaws_rekognition.StartTextDetection({
  "Video": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * Filters
    * RegionsOfInterest
      * items [RegionOfInterest](#regionofinterest)
    * WordFilter
      * MinBoundingBoxHeight
      * MinBoundingBoxWidth
      * MinConfidence
  * JobTag
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

#### Output
* output [StartTextDetectionResponse](#starttextdetectionresponse)

### StopProjectVersion



```js
amazonaws_rekognition.StopProjectVersion({
  "ProjectVersionArn": null
}, context)
```

#### Input
* input `object`
  * ProjectVersionArn **required**

#### Output
* output [StopProjectVersionResponse](#stopprojectversionresponse)

### StopStreamProcessor



```js
amazonaws_rekognition.StopStreamProcessor({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StopStreamProcessorResponse](#stopstreamprocessorresponse)



## Definitions

### AccessDeniedException


### AgeRange
* AgeRange `object`: <p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p>
  * High
  * Low

### Asset
* Asset `object`: Assets are the images that you use to train and evaluate a model version. Assets can also contain validation information that you use to debug a failed model training. 
  * GroundTruthManifest [GroundTruthManifest](#groundtruthmanifest)

### Assets
* Assets `array`
  * items [Asset](#asset)

### Attribute
* Attribute `string` (values: DEFAULT, ALL)

### Attributes
* Attributes `array`
  * items [Attribute](#attribute)

### AudioMetadata
* AudioMetadata `object`: Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>. 
  * Codec
  * DurationMillis
  * NumberOfChannels
  * SampleRate

### AudioMetadataList
* AudioMetadataList `array`
  * items [AudioMetadata](#audiometadata)

### Beard
* Beard `object`: Indicates whether or not the face has a beard, and the confidence level in the determination.
  * Confidence
  * Value

### BodyPart
* BodyPart `string` (values: FACE, HEAD, LEFT_HAND, RIGHT_HAND)

### BodyParts
* BodyParts `array`
  * items [ProtectiveEquipmentBodyPart](#protectiveequipmentbodypart)

### Boolean
* Boolean `boolean`

### BoundingBox
* BoundingBox `object`: <p>Identifies the bounding box around the label, face, text or personal protective equipment. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note>
  * Height
  * Left
  * Top
  * Width

### BoundingBoxHeight
* BoundingBoxHeight `number`

### BoundingBoxWidth
* BoundingBoxWidth `number`

### Celebrity
* Celebrity `object`: Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.
  * Face
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
    * Landmarks
      * items [Landmark](#landmark)
    * Pose
      * Pitch
      * Roll
      * Yaw
    * Quality
      * Brightness
      * Sharpness
  * Id
  * MatchConfidence
  * Name
  * Urls
    * items [Url](#url)

### CelebrityDetail
* CelebrityDetail `object`: Information about a recognized celebrity.
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Confidence
  * Face
    * AgeRange
      * High
      * Low
    * Beard
      * Confidence
      * Value
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
    * Emotions
      * items [Emotion](#emotion)
    * Eyeglasses
      * Confidence
      * Value
    * EyesOpen
      * Confidence
      * Value
    * Gender
      * Confidence
      * Value
    * Landmarks
      * items [Landmark](#landmark)
    * MouthOpen
      * Confidence
      * Value
    * Mustache
      * Confidence
      * Value
    * Pose
      * Pitch
      * Roll
      * Yaw
    * Quality
      * Brightness
      * Sharpness
    * Smile
      * Confidence
      * Value
    * Sunglasses
      * Confidence
      * Value
  * Id
  * Name
  * Urls
    * items [Url](#url)

### CelebrityList
* CelebrityList `array`
  * items [Celebrity](#celebrity)

### CelebrityRecognition
* CelebrityRecognition `object`: Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.
  * Celebrity
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
    * Face
      * AgeRange
        * High
        * Low
      * Beard
        * Confidence
        * Value
      * BoundingBox
        * Height
        * Left
        * Top
        * Width
      * Confidence
      * Emotions
        * items [Emotion](#emotion)
      * Eyeglasses
        * Confidence
        * Value
      * EyesOpen
        * Confidence
        * Value
      * Gender
        * Confidence
        * Value
      * Landmarks
        * items [Landmark](#landmark)
      * MouthOpen
        * Confidence
        * Value
      * Mustache
        * Confidence
        * Value
      * Pose
        * Pitch
        * Roll
        * Yaw
      * Quality
        * Brightness
        * Sharpness
      * Smile
        * Confidence
        * Value
      * Sunglasses
        * Confidence
        * Value
    * Id
    * Name
    * Urls
      * items [Url](#url)
  * Timestamp

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
* CompareFacesMatch `object`: Provides information about a face in a target image that matches the source image face analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box.
  * Face
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
    * Landmarks
      * items [Landmark](#landmark)
    * Pose
      * Pitch
      * Roll
      * Yaw
    * Quality
      * Brightness
      * Sharpness
  * Similarity

### CompareFacesMatchList
* CompareFacesMatchList `array`
  * items [CompareFacesMatch](#comparefacesmatch)

### CompareFacesRequest
* CompareFacesRequest `object`
  * QualityFilter
  * SimilarityThreshold
  * SourceImage **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * TargetImage **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version

### CompareFacesResponse
* CompareFacesResponse `object`
  * FaceMatches
    * items [CompareFacesMatch](#comparefacesmatch)
  * SourceImageFace
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
  * SourceImageOrientationCorrection
  * TargetImageOrientationCorrection
  * UnmatchedFaces
    * items [ComparedFace](#comparedface)

### CompareFacesUnmatchList
* CompareFacesUnmatchList `array`
  * items [ComparedFace](#comparedface)

### ComparedFace
* ComparedFace `object`: Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Confidence
  * Landmarks
    * items [Landmark](#landmark)
  * Pose
    * Pitch
    * Roll
    * Yaw
  * Quality
    * Brightness
    * Sharpness

### ComparedFaceList
* ComparedFaceList `array`
  * items [ComparedFace](#comparedface)

### ComparedSourceImageFace
* ComparedSourceImageFace `object`: Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison. 
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Confidence

### ContentClassifier
* ContentClassifier `string` (values: FreeOfPersonallyIdentifiableInformation, FreeOfAdultContent)

### ContentClassifiers
* ContentClassifiers `array`
  * items [ContentClassifier](#contentclassifier)

### ContentModerationDetection
* ContentModerationDetection `object`: Information about an unsafe content label detection in a stored video.
  * ModerationLabel
    * Confidence
    * Name
    * ParentName
  * Timestamp

### ContentModerationDetections
* ContentModerationDetections `array`
  * items [ContentModerationDetection](#contentmoderationdetection)

### ContentModerationSortBy
* ContentModerationSortBy `string` (values: NAME, TIMESTAMP)

### CoversBodyPart
* CoversBodyPart `object`: Information about an item of Personal Protective Equipment covering a corresponding body part. For more information, see <a>DetectProtectiveEquipment</a>.
  * Confidence
  * Value

### CreateCollectionRequest
* CreateCollectionRequest `object`
  * CollectionId **required**

### CreateCollectionResponse
* CreateCollectionResponse `object`
  * CollectionArn
  * FaceModelVersion
  * StatusCode

### CreateProjectRequest
* CreateProjectRequest `object`
  * ProjectName **required**

### CreateProjectResponse
* CreateProjectResponse `object`
  * ProjectArn

### CreateProjectVersionRequest
* CreateProjectVersionRequest `object`
  * OutputConfig **required**
    * S3Bucket
    * S3KeyPrefix
  * ProjectArn **required**
  * TestingData **required**
    * Assets
      * items [Asset](#asset)
    * AutoCreate
  * TrainingData **required**
    * Assets
      * items [Asset](#asset)
  * VersionName **required**

### CreateProjectVersionResponse
* CreateProjectVersionResponse `object`
  * ProjectVersionArn

### CreateStreamProcessorRequest
* CreateStreamProcessorRequest `object`
  * Input **required**
    * KinesisVideoStream
      * Arn
  * Name **required**
  * Output **required**
    * KinesisDataStream
      * Arn
  * RoleArn **required**
  * Settings **required**
    * FaceSearch
      * CollectionId
      * FaceMatchThreshold

### CreateStreamProcessorResponse
* CreateStreamProcessorResponse `object`
  * StreamProcessorArn

### CustomLabel
* CustomLabel `object`: A custom label detected in an image by a call to <a>DetectCustomLabels</a>.
  * Confidence
  * Geometry
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Polygon
      * items [Point](#point)
  * Name

### CustomLabels
* CustomLabels `array`
  * items [CustomLabel](#customlabel)

### DateTime
* DateTime `string`

### Degree
* Degree `number`

### DeleteCollectionRequest
* DeleteCollectionRequest `object`
  * CollectionId **required**

### DeleteCollectionResponse
* DeleteCollectionResponse `object`
  * StatusCode

### DeleteFacesRequest
* DeleteFacesRequest `object`
  * CollectionId **required**
  * FaceIds **required**
    * items [FaceId](#faceid)

### DeleteFacesResponse
* DeleteFacesResponse `object`
  * DeletedFaces
    * items [FaceId](#faceid)

### DeleteProjectRequest
* DeleteProjectRequest `object`
  * ProjectArn **required**

### DeleteProjectResponse
* DeleteProjectResponse `object`
  * Status

### DeleteProjectVersionRequest
* DeleteProjectVersionRequest `object`
  * ProjectVersionArn **required**

### DeleteProjectVersionResponse
* DeleteProjectVersionResponse `object`
  * Status

### DeleteStreamProcessorRequest
* DeleteStreamProcessorRequest `object`
  * Name **required**

### DeleteStreamProcessorResponse
* DeleteStreamProcessorResponse `object`

### DescribeCollectionRequest
* DescribeCollectionRequest `object`
  * CollectionId **required**

### DescribeCollectionResponse
* DescribeCollectionResponse `object`
  * CollectionARN
  * CreationTimestamp
  * FaceCount
  * FaceModelVersion

### DescribeProjectVersionsRequest
* DescribeProjectVersionsRequest `object`
  * MaxResults
  * NextToken
  * ProjectArn **required**
  * VersionNames
    * items [VersionName](#versionname)

### DescribeProjectVersionsResponse
* DescribeProjectVersionsResponse `object`
  * NextToken
  * ProjectVersionDescriptions
    * items [ProjectVersionDescription](#projectversiondescription)

### DescribeProjectsRequest
* DescribeProjectsRequest `object`
  * MaxResults
  * NextToken

### DescribeProjectsResponse
* DescribeProjectsResponse `object`
  * NextToken
  * ProjectDescriptions
    * items [ProjectDescription](#projectdescription)

### DescribeStreamProcessorRequest
* DescribeStreamProcessorRequest `object`
  * Name **required**

### DescribeStreamProcessorResponse
* DescribeStreamProcessorResponse `object`
  * CreationTimestamp
  * Input
    * KinesisVideoStream
      * Arn
  * LastUpdateTimestamp
  * Name
  * Output
    * KinesisDataStream
      * Arn
  * RoleArn
  * Settings
    * FaceSearch
      * CollectionId
      * FaceMatchThreshold
  * Status
  * StatusMessage
  * StreamProcessorArn

### DetectCustomLabelsRequest
* DetectCustomLabelsRequest `object`
  * Image **required** [Image](#image)
  * MaxResults
  * MinConfidence
  * ProjectVersionArn **required**

### DetectCustomLabelsResponse
* DetectCustomLabelsResponse `object`
  * CustomLabels
    * items [CustomLabel](#customlabel)

### DetectFacesRequest
* DetectFacesRequest `object`
  * Attributes
    * items [Attribute](#attribute)
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version

### DetectFacesResponse
* DetectFacesResponse `object`
  * FaceDetails
    * items [FaceDetail](#facedetail)
  * OrientationCorrection

### DetectLabelsRequest
* DetectLabelsRequest `object`
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * MaxLabels
  * MinConfidence

### DetectLabelsResponse
* DetectLabelsResponse `object`
  * LabelModelVersion
  * Labels
    * items [Label](#label)
  * OrientationCorrection

### DetectModerationLabelsRequest
* DetectModerationLabelsRequest `object`
  * HumanLoopConfig
    * DataAttributes
      * ContentClassifiers
        * items [ContentClassifier](#contentclassifier)
    * FlowDefinitionArn **required**
    * HumanLoopName **required**
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * MinConfidence

### DetectModerationLabelsResponse
* DetectModerationLabelsResponse `object`
  * HumanLoopActivationOutput
    * HumanLoopActivationConditionsEvaluationResults
    * HumanLoopActivationReasons
      * items [HumanLoopActivationReason](#humanloopactivationreason)
    * HumanLoopArn
  * ModerationLabels
    * items [ModerationLabel](#moderationlabel)
  * ModerationModelVersion

### DetectProtectiveEquipmentRequest
* DetectProtectiveEquipmentRequest `object`
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * SummarizationAttributes
    * MinConfidence **required**
    * RequiredEquipmentTypes **required**
      * items [ProtectiveEquipmentType](#protectiveequipmenttype)

### DetectProtectiveEquipmentResponse
* DetectProtectiveEquipmentResponse `object`
  * Persons
    * items [ProtectiveEquipmentPerson](#protectiveequipmentperson)
  * ProtectiveEquipmentModelVersion
  * Summary
    * PersonsIndeterminate
      * items [UInteger](#uinteger)
    * PersonsWithRequiredEquipment
      * items [UInteger](#uinteger)
    * PersonsWithoutRequiredEquipment
      * items [UInteger](#uinteger)

### DetectTextFilters
* DetectTextFilters `object`: A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in. 
  * RegionsOfInterest
    * items [RegionOfInterest](#regionofinterest)
  * WordFilter [DetectionFilter](#detectionfilter)

### DetectTextRequest
* DetectTextRequest `object`
  * Filters
    * RegionsOfInterest
      * items [RegionOfInterest](#regionofinterest)
    * WordFilter [DetectionFilter](#detectionfilter)
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version

### DetectTextResponse
* DetectTextResponse `object`
  * TextDetections
    * items [TextDetection](#textdetection)
  * TextModelVersion

### DetectionFilter
* DetectionFilter `object`: A set of parameters that allow you to filter out certain results from your returned results.
  * MinBoundingBoxHeight
  * MinBoundingBoxWidth
  * MinConfidence

### Emotion
* Emotion `object`: The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally.
  * Confidence
  * Type

### EmotionName
* EmotionName `string` (values: HAPPY, SAD, ANGRY, CONFUSED, DISGUSTED, SURPRISED, CALM, UNKNOWN, FEAR)

### Emotions
* Emotions `array`
  * items [Emotion](#emotion)

### EquipmentDetection
* EquipmentDetection `object`: Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>.
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Confidence
  * CoversBodyPart
    * Confidence
    * Value
  * Type

### EquipmentDetections
* EquipmentDetections `array`
  * items [EquipmentDetection](#equipmentdetection)

### EvaluationResult
* EvaluationResult `object`: The evaluation results for the training of a model.
  * F1Score
  * Summary
    * S3Object [S3Object](#s3object)

### ExtendedPaginationToken
* ExtendedPaginationToken `string`

### ExternalImageId
* ExternalImageId `string`

### EyeOpen
* EyeOpen `object`: Indicates whether or not the eyes on the face are open, and the confidence level in the determination.
  * Confidence
  * Value

### Eyeglasses
* Eyeglasses `object`: Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.
  * Confidence
  * Value

### Face
* Face `object`: Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. 
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Confidence
  * ExternalImageId
  * FaceId
  * ImageId

### FaceAttributes
* FaceAttributes `string` (values: DEFAULT, ALL)

### FaceDetail
* FaceDetail `object`: <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>
  * AgeRange
    * High
    * Low
  * Beard
    * Confidence
    * Value
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Confidence
  * Emotions
    * items [Emotion](#emotion)
  * Eyeglasses
    * Confidence
    * Value
  * EyesOpen
    * Confidence
    * Value
  * Gender
    * Confidence
    * Value
  * Landmarks
    * items [Landmark](#landmark)
  * MouthOpen
    * Confidence
    * Value
  * Mustache
    * Confidence
    * Value
  * Pose
    * Pitch
    * Roll
    * Yaw
  * Quality
    * Brightness
    * Sharpness
  * Smile
    * Confidence
    * Value
  * Sunglasses
    * Confidence
    * Value

### FaceDetailList
* FaceDetailList `array`
  * items [FaceDetail](#facedetail)

### FaceDetection
* FaceDetection `object`: Information about a face detected in a video analysis request and the time the face was detected in the video. 
  * Face
    * AgeRange
      * High
      * Low
    * Beard
      * Confidence
      * Value
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
    * Emotions
      * items [Emotion](#emotion)
    * Eyeglasses
      * Confidence
      * Value
    * EyesOpen
      * Confidence
      * Value
    * Gender
      * Confidence
      * Value
    * Landmarks
      * items [Landmark](#landmark)
    * MouthOpen
      * Confidence
      * Value
    * Mustache
      * Confidence
      * Value
    * Pose
      * Pitch
      * Roll
      * Yaw
    * Quality
      * Brightness
      * Sharpness
    * Smile
      * Confidence
      * Value
    * Sunglasses
      * Confidence
      * Value
  * Timestamp

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
  * Face
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
    * ExternalImageId
    * FaceId
    * ImageId
  * Similarity

### FaceMatchList
* FaceMatchList `array`
  * items [FaceMatch](#facematch)

### FaceModelVersionList
* FaceModelVersionList `array`
  * items [String](#string)

### FaceRecord
* FaceRecord `object`: Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database.
  * Face
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
    * ExternalImageId
    * FaceId
    * ImageId
  * FaceDetail
    * AgeRange
      * High
      * Low
    * Beard
      * Confidence
      * Value
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
    * Emotions
      * items [Emotion](#emotion)
    * Eyeglasses
      * Confidence
      * Value
    * EyesOpen
      * Confidence
      * Value
    * Gender
      * Confidence
      * Value
    * Landmarks
      * items [Landmark](#landmark)
    * MouthOpen
      * Confidence
      * Value
    * Mustache
      * Confidence
      * Value
    * Pose
      * Pitch
      * Roll
      * Yaw
    * Quality
      * Brightness
      * Sharpness
    * Smile
      * Confidence
      * Value
    * Sunglasses
      * Confidence
      * Value

### FaceRecordList
* FaceRecordList `array`
  * items [FaceRecord](#facerecord)

### FaceSearchSettings
* FaceSearchSettings `object`: Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>.
  * CollectionId
  * FaceMatchThreshold

### FaceSearchSortBy
* FaceSearchSortBy `string` (values: INDEX, TIMESTAMP)

### Float
* Float `number`

### FlowDefinitionArn
* FlowDefinitionArn `string`

### Gender
* Gender `object`: <p>The predicted gender of a detected face. </p> <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.</p> <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p> <p>We don't recommend using gender binary predictions to make decisions that impact&#x2028; an individual's rights, privacy, or access to services.</p>
  * Confidence
  * Value

### GenderType
* GenderType `string` (values: Male, Female)

### Geometry
* Geometry `object`: Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image.
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Polygon
    * items [Point](#point)

### GetCelebrityInfoRequest
* GetCelebrityInfoRequest `object`
  * Id **required**

### GetCelebrityInfoResponse
* GetCelebrityInfoResponse `object`
  * Name
  * Urls
    * items [Url](#url)

### GetCelebrityRecognitionRequest
* GetCelebrityRecognitionRequest `object`
  * JobId **required**
  * MaxResults
  * NextToken
  * SortBy

### GetCelebrityRecognitionResponse
* GetCelebrityRecognitionResponse `object`
  * Celebrities
    * items [CelebrityRecognition](#celebrityrecognition)
  * JobStatus
  * NextToken
  * StatusMessage
  * VideoMetadata
    * Codec
    * DurationMillis
    * Format
    * FrameHeight
    * FrameRate
    * FrameWidth

### GetContentModerationRequest
* GetContentModerationRequest `object`
  * JobId **required**
  * MaxResults
  * NextToken
  * SortBy

### GetContentModerationResponse
* GetContentModerationResponse `object`
  * JobStatus
  * ModerationLabels
    * items [ContentModerationDetection](#contentmoderationdetection)
  * ModerationModelVersion
  * NextToken
  * StatusMessage
  * VideoMetadata
    * Codec
    * DurationMillis
    * Format
    * FrameHeight
    * FrameRate
    * FrameWidth

### GetFaceDetectionRequest
* GetFaceDetectionRequest `object`
  * JobId **required**
  * MaxResults
  * NextToken

### GetFaceDetectionResponse
* GetFaceDetectionResponse `object`
  * Faces
    * items [FaceDetection](#facedetection)
  * JobStatus
  * NextToken
  * StatusMessage
  * VideoMetadata
    * Codec
    * DurationMillis
    * Format
    * FrameHeight
    * FrameRate
    * FrameWidth

### GetFaceSearchRequest
* GetFaceSearchRequest `object`
  * JobId **required**
  * MaxResults
  * NextToken
  * SortBy

### GetFaceSearchResponse
* GetFaceSearchResponse `object`
  * JobStatus
  * NextToken
  * Persons
    * items [PersonMatch](#personmatch)
  * StatusMessage
  * VideoMetadata
    * Codec
    * DurationMillis
    * Format
    * FrameHeight
    * FrameRate
    * FrameWidth

### GetLabelDetectionRequest
* GetLabelDetectionRequest `object`
  * JobId **required**
  * MaxResults
  * NextToken
  * SortBy

### GetLabelDetectionResponse
* GetLabelDetectionResponse `object`
  * JobStatus
  * LabelModelVersion
  * Labels
    * items [LabelDetection](#labeldetection)
  * NextToken
  * StatusMessage
  * VideoMetadata
    * Codec
    * DurationMillis
    * Format
    * FrameHeight
    * FrameRate
    * FrameWidth

### GetPersonTrackingRequest
* GetPersonTrackingRequest `object`
  * JobId **required**
  * MaxResults
  * NextToken
  * SortBy

### GetPersonTrackingResponse
* GetPersonTrackingResponse `object`
  * JobStatus
  * NextToken
  * Persons
    * items [PersonDetection](#persondetection)
  * StatusMessage
  * VideoMetadata
    * Codec
    * DurationMillis
    * Format
    * FrameHeight
    * FrameRate
    * FrameWidth

### GetSegmentDetectionRequest
* GetSegmentDetectionRequest `object`
  * JobId **required**
  * MaxResults
  * NextToken

### GetSegmentDetectionResponse
* GetSegmentDetectionResponse `object`
  * AudioMetadata
    * items [AudioMetadata](#audiometadata)
  * JobStatus
  * NextToken
  * Segments
    * items [SegmentDetection](#segmentdetection)
  * SelectedSegmentTypes
    * items [SegmentTypeInfo](#segmenttypeinfo)
  * StatusMessage
  * VideoMetadata
    * items [VideoMetadata](#videometadata)

### GetTextDetectionRequest
* GetTextDetectionRequest `object`
  * JobId **required**
  * MaxResults
  * NextToken

### GetTextDetectionResponse
* GetTextDetectionResponse `object`
  * JobStatus
  * NextToken
  * StatusMessage
  * TextDetections
    * items [TextDetectionResult](#textdetectionresult)
  * TextModelVersion
  * VideoMetadata [VideoMetadata](#videometadata)

### GroundTruthManifest
* GroundTruthManifest `object`: The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file. 
  * S3Object [S3Object](#s3object)

### HumanLoopActivationConditionsEvaluationResults
* HumanLoopActivationConditionsEvaluationResults `string`

### HumanLoopActivationOutput
* HumanLoopActivationOutput `object`: Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.
  * HumanLoopActivationConditionsEvaluationResults
  * HumanLoopActivationReasons
    * items [HumanLoopActivationReason](#humanloopactivationreason)
  * HumanLoopArn

### HumanLoopActivationReason
* HumanLoopActivationReason `string`

### HumanLoopActivationReasons
* HumanLoopActivationReasons `array`
  * items [HumanLoopActivationReason](#humanloopactivationreason)

### HumanLoopArn
* HumanLoopArn `string`

### HumanLoopConfig
* HumanLoopConfig `object`: Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.
  * DataAttributes
    * ContentClassifiers
      * items [ContentClassifier](#contentclassifier)
  * FlowDefinitionArn **required**
  * HumanLoopName **required**

### HumanLoopDataAttributes
* HumanLoopDataAttributes `object`: Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information.
  * ContentClassifiers
    * items [ContentClassifier](#contentclassifier)

### HumanLoopName
* HumanLoopName `string`

### HumanLoopQuotaExceededException


### IdempotentParameterMismatchException


### Image
* Image `object`: <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
  * Bytes
  * S3Object
    * Bucket
    * Name
    * Version

### ImageBlob
* ImageBlob `string`

### ImageId
* ImageId `string`

### ImageQuality
* ImageQuality `object`: Identifies face image brightness and sharpness. 
  * Brightness
  * Sharpness

### ImageTooLargeException


### IndexFacesRequest
* IndexFacesRequest `object`
  * CollectionId **required**
  * DetectionAttributes
    * items [Attribute](#attribute)
  * ExternalImageId
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * MaxFaces
  * QualityFilter

### IndexFacesResponse
* IndexFacesResponse `object`
  * FaceModelVersion
  * FaceRecords
    * items [FaceRecord](#facerecord)
  * OrientationCorrection
  * UnindexedFaces
    * items [UnindexedFace](#unindexedface)

### InferenceUnits
* InferenceUnits `integer`

### Instance
* Instance `object`: An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>).
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Confidence

### Instances
* Instances `array`
  * items [Instance](#instance)

### InternalServerError


### InvalidImageFormatException


### InvalidPaginationTokenException


### InvalidParameterException


### InvalidS3ObjectException


### JobId
* JobId `string`

### JobTag
* JobTag `string`

### KinesisDataArn
* KinesisDataArn `string`

### KinesisDataStream
* KinesisDataStream `object`: The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
  * Arn

### KinesisVideoArn
* KinesisVideoArn `string`

### KinesisVideoStream
* KinesisVideoStream `object`: Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
  * Arn

### Label
* Label `object`: <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p>
  * Confidence
  * Instances
    * items [Instance](#instance)
  * Name
  * Parents
    * items [Parent](#parent)

### LabelDetection
* LabelDetection `object`: Information about a label detected in a video analysis request and the time the label was detected in the video. 
  * Label
    * Confidence
    * Instances
      * items [Instance](#instance)
    * Name
    * Parents
      * items [Parent](#parent)
  * Timestamp

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
  * Type
  * X
  * Y

### LandmarkType
* LandmarkType `string` (values: eyeLeft, eyeRight, nose, mouthLeft, mouthRight, leftEyeBrowLeft, leftEyeBrowRight, leftEyeBrowUp, rightEyeBrowLeft, rightEyeBrowRight, rightEyeBrowUp, leftEyeLeft, leftEyeRight, leftEyeUp, leftEyeDown, rightEyeLeft, rightEyeRight, rightEyeUp, rightEyeDown, noseLeft, noseRight, mouthUp, mouthDown, leftPupil, rightPupil, upperJawlineLeft, midJawlineLeft, chinBottom, midJawlineRight, upperJawlineRight)

### Landmarks
* Landmarks `array`
  * items [Landmark](#landmark)

### LimitExceededException


### ListCollectionsRequest
* ListCollectionsRequest `object`
  * MaxResults
  * NextToken

### ListCollectionsResponse
* ListCollectionsResponse `object`
  * CollectionIds
    * items [CollectionId](#collectionid)
  * FaceModelVersions
    * items [String](#string)
  * NextToken

### ListFacesRequest
* ListFacesRequest `object`
  * CollectionId **required**
  * MaxResults
  * NextToken

### ListFacesResponse
* ListFacesResponse `object`
  * FaceModelVersion
  * Faces
    * items [Face](#face)
  * NextToken

### ListStreamProcessorsRequest
* ListStreamProcessorsRequest `object`
  * MaxResults
  * NextToken

### ListStreamProcessorsResponse
* ListStreamProcessorsResponse `object`
  * NextToken
  * StreamProcessors
    * items [StreamProcessor](#streamprocessor)

### MaxFaces
* MaxFaces `integer`

### MaxFacesToIndex
* MaxFacesToIndex `integer`

### MaxResults
* MaxResults `integer`

### ModerationLabel
* ModerationLabel `object`: Provides information about a single type of unsafe content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide.
  * Confidence
  * Name
  * ParentName

### ModerationLabels
* ModerationLabels `array`
  * items [ModerationLabel](#moderationlabel)

### MouthOpen
* MouthOpen `object`: Indicates whether or not the mouth on the face is open, and the confidence level in the determination.
  * Confidence
  * Value

### Mustache
* Mustache `object`: Indicates whether or not the face has a mustache, and the confidence level in the determination.
  * Confidence
  * Value

### NotificationChannel
* NotificationChannel `object`: The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>.
  * RoleArn **required**
  * SNSTopicArn **required**

### OrientationCorrection
* OrientationCorrection `string` (values: ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270)

### OutputConfig
* OutputConfig `object`: The S3 bucket and folder location where training output is placed.
  * S3Bucket
  * S3KeyPrefix

### PageSize
* PageSize `integer`

### PaginationToken
* PaginationToken `string`

### Parent
* Parent `object`: A parent label for a label. A label can have 0, 1, or more parents. 
  * Name

### Parents
* Parents `array`
  * items [Parent](#parent)

### Percent
* Percent `number`

### PersonDetail
* PersonDetail `object`: Details about a person detected in a video analysis request.
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Face
    * AgeRange
      * High
      * Low
    * Beard
      * Confidence
      * Value
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
    * Emotions
      * items [Emotion](#emotion)
    * Eyeglasses
      * Confidence
      * Value
    * EyesOpen
      * Confidence
      * Value
    * Gender
      * Confidence
      * Value
    * Landmarks
      * items [Landmark](#landmark)
    * MouthOpen
      * Confidence
      * Value
    * Mustache
      * Confidence
      * Value
    * Pose
      * Pitch
      * Roll
      * Yaw
    * Quality
      * Brightness
      * Sharpness
    * Smile
      * Confidence
      * Value
    * Sunglasses
      * Confidence
      * Value
  * Index

### PersonDetection
* PersonDetection `object`: <p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>
  * Person
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Face
      * AgeRange
        * High
        * Low
      * Beard
        * Confidence
        * Value
      * BoundingBox
        * Height
        * Left
        * Top
        * Width
      * Confidence
      * Emotions
        * items [Emotion](#emotion)
      * Eyeglasses
        * Confidence
        * Value
      * EyesOpen
        * Confidence
        * Value
      * Gender
        * Confidence
        * Value
      * Landmarks
        * items [Landmark](#landmark)
      * MouthOpen
        * Confidence
        * Value
      * Mustache
        * Confidence
        * Value
      * Pose
        * Pitch
        * Roll
        * Yaw
      * Quality
        * Brightness
        * Sharpness
      * Smile
        * Confidence
        * Value
      * Sunglasses
        * Confidence
        * Value
    * Index
  * Timestamp

### PersonDetections
* PersonDetections `array`
  * items [PersonDetection](#persondetection)

### PersonIndex
* PersonIndex `integer`

### PersonMatch
* PersonMatch `object`: Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>. 
  * FaceMatches
    * items [FaceMatch](#facematch)
  * Person
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Face
      * AgeRange
        * High
        * Low
      * Beard
        * Confidence
        * Value
      * BoundingBox
        * Height
        * Left
        * Top
        * Width
      * Confidence
      * Emotions
        * items [Emotion](#emotion)
      * Eyeglasses
        * Confidence
        * Value
      * EyesOpen
        * Confidence
        * Value
      * Gender
        * Confidence
        * Value
      * Landmarks
        * items [Landmark](#landmark)
      * MouthOpen
        * Confidence
        * Value
      * Mustache
        * Confidence
        * Value
      * Pose
        * Pitch
        * Roll
        * Yaw
      * Quality
        * Brightness
        * Sharpness
      * Smile
        * Confidence
        * Value
      * Sunglasses
        * Confidence
        * Value
    * Index
  * Timestamp

### PersonMatches
* PersonMatches `array`
  * items [PersonMatch](#personmatch)

### PersonTrackingSortBy
* PersonTrackingSortBy `string` (values: INDEX, TIMESTAMP)

### Point
* Point `object`: <p>The X and Y coordinates of a point on an image. The X and Y values returned are ratios of the overall image size. For example, if the input image is 700x200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectText</a> and by <a>DetectCustomLabels</a>. <code>Polygon</code> represents a fine-grained polygon around a detected item. For more information, see Geometry in the Amazon Rekognition Developer Guide. </p>
  * X
  * Y

### Polygon
* Polygon `array`
  * items [Point](#point)

### Pose
* Pose `object`: Indicates the pose of the face as determined by its pitch, roll, and yaw.
  * Pitch
  * Roll
  * Yaw

### ProjectArn
* ProjectArn `string`

### ProjectDescription
* ProjectDescription `object`: A description of a Amazon Rekognition Custom Labels project.
  * CreationTimestamp
  * ProjectArn
  * Status

### ProjectDescriptions
* ProjectDescriptions `array`
  * items [ProjectDescription](#projectdescription)

### ProjectName
* ProjectName `string`

### ProjectStatus
* ProjectStatus `string` (values: CREATING, CREATED, DELETING)

### ProjectVersionArn
* ProjectVersionArn `string`

### ProjectVersionDescription
* ProjectVersionDescription `object`: The description of a version of a model.
  * BillableTrainingTimeInSeconds
  * CreationTimestamp
  * EvaluationResult
    * F1Score
    * Summary
      * S3Object [S3Object](#s3object)
  * ManifestSummary
    * S3Object [S3Object](#s3object)
  * MinInferenceUnits
  * OutputConfig
    * S3Bucket
    * S3KeyPrefix
  * ProjectVersionArn
  * Status
  * StatusMessage
  * TestingDataResult
    * Input
      * Assets
        * items [Asset](#asset)
      * AutoCreate
    * Output
      * Assets
        * items [Asset](#asset)
      * AutoCreate
    * Validation
      * Assets
        * items [Asset](#asset)
  * TrainingDataResult
    * Input
      * Assets
        * items [Asset](#asset)
    * Output
      * Assets
        * items [Asset](#asset)
    * Validation
      * Assets
        * items [Asset](#asset)
  * TrainingEndTimestamp

### ProjectVersionDescriptions
* ProjectVersionDescriptions `array`
  * items [ProjectVersionDescription](#projectversiondescription)

### ProjectVersionStatus
* ProjectVersionStatus `string` (values: TRAINING_IN_PROGRESS, TRAINING_COMPLETED, TRAINING_FAILED, STARTING, RUNNING, FAILED, STOPPING, STOPPED, DELETING)

### ProjectVersionsPageSize
* ProjectVersionsPageSize `integer`

### ProjectsPageSize
* ProjectsPageSize `integer`

### ProtectiveEquipmentBodyPart
* ProtectiveEquipmentBodyPart `object`: Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>. 
  * Confidence
  * EquipmentDetections
    * items [EquipmentDetection](#equipmentdetection)
  * Name

### ProtectiveEquipmentPerson
* ProtectiveEquipmentPerson `object`: A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects.
  * BodyParts
    * items [ProtectiveEquipmentBodyPart](#protectiveequipmentbodypart)
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Confidence
  * Id

### ProtectiveEquipmentPersonIds
* ProtectiveEquipmentPersonIds `array`
  * items [UInteger](#uinteger)

### ProtectiveEquipmentPersons
* ProtectiveEquipmentPersons `array`
  * items [ProtectiveEquipmentPerson](#protectiveequipmentperson)

### ProtectiveEquipmentSummarizationAttributes
* ProtectiveEquipmentSummarizationAttributes `object`: Specifies summary attributes to return from a call to <a>DetectProtectiveEquipment</a>. You can specify which types of PPE to summarize. You can also specify a minimum confidence value for detections. Summary information is returned in the <code>Summary</code> (<a>ProtectiveEquipmentSummary</a>) field of the response from <code>DetectProtectiveEquipment</code>. The summary includes which persons in an image were detected wearing the requested types of person protective equipment (PPE), which persons were detected as not wearing PPE, and the persons in which a determination could not be made. For more information, see <a>ProtectiveEquipmentSummary</a>.
  * MinConfidence **required**
  * RequiredEquipmentTypes **required**
    * items [ProtectiveEquipmentType](#protectiveequipmenttype)

### ProtectiveEquipmentSummary
* ProtectiveEquipmentSummary `object`: <p>Summary information for required items of personal protective equipment (PPE) detected on persons by a call to <a>DetectProtectiveEquipment</a>. You specify the required type of PPE in the <code>SummarizationAttributes</code> (<a>ProtectiveEquipmentSummarizationAttributes</a>) input parameter. The summary includes which persons were detected wearing the required personal protective equipment (<code>PersonsWithRequiredEquipment</code>), which persons were detected as not wearing the required PPE (<code>PersonsWithoutRequiredEquipment</code>), and the persons in which a determination could not be made (<code>PersonsIndeterminate</code>).</p> <p>To get a total for each category, use the size of the field array. For example, to find out how many people were detected as wearing the specified PPE, use the size of the <code>PersonsWithRequiredEquipment</code> array. If you want to find out more about a person, such as the location (<a>BoundingBox</a>) of the person on the image, use the person ID in each array element. Each person ID matches the ID field of a <a>ProtectiveEquipmentPerson</a> object returned in the <code>Persons</code> array by <code>DetectProtectiveEquipment</code>.</p>
  * PersonsIndeterminate
    * items [UInteger](#uinteger)
  * PersonsWithRequiredEquipment
    * items [UInteger](#uinteger)
  * PersonsWithoutRequiredEquipment
    * items [UInteger](#uinteger)

### ProtectiveEquipmentType
* ProtectiveEquipmentType `string` (values: FACE_COVER, HAND_COVER, HEAD_COVER)

### ProtectiveEquipmentTypes
* ProtectiveEquipmentTypes `array`
  * items [ProtectiveEquipmentType](#protectiveequipmenttype)

### ProvisionedThroughputExceededException


### QualityFilter
* QualityFilter `string` (values: NONE, AUTO, LOW, MEDIUM, HIGH)

### Reason
* Reason `string` (values: EXCEEDS_MAX_FACES, EXTREME_POSE, LOW_BRIGHTNESS, LOW_SHARPNESS, LOW_CONFIDENCE, SMALL_BOUNDING_BOX, LOW_FACE_QUALITY)

### Reasons
* Reasons `array`
  * items [Reason](#reason)

### RecognizeCelebritiesRequest
* RecognizeCelebritiesRequest `object`
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version

### RecognizeCelebritiesResponse
* RecognizeCelebritiesResponse `object`
  * CelebrityFaces
    * items [Celebrity](#celebrity)
  * OrientationCorrection
  * UnrecognizedFaces
    * items [ComparedFace](#comparedface)

### RegionOfInterest
* RegionOfInterest `object`: <p>Specifies a location within the frame that Rekognition checks for text. Uses a <code>BoundingBox</code> object to set a region of the screen.</p> <p>A word is included in the region if the word is more than half in that region. If there is more than one region, the word will be compared with all regions of the screen. Any word more than half in a region is kept in the results.</p>
  * BoundingBox
    * Height
    * Left
    * Top
    * Width

### RegionsOfInterest
* RegionsOfInterest `array`
  * items [RegionOfInterest](#regionofinterest)

### RekognitionUniqueId
* RekognitionUniqueId `string`

### ResourceAlreadyExistsException


### ResourceInUseException


### ResourceNotFoundException


### ResourceNotReadyException


### RoleArn
* RoleArn `string`

### S3Bucket
* S3Bucket `string`

### S3KeyPrefix
* S3KeyPrefix `string`

### S3Object
* S3Object `object`: <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p>
  * Bucket
  * Name
  * Version

### S3ObjectName
* S3ObjectName `string`

### S3ObjectVersion
* S3ObjectVersion `string`

### SNSTopicArn
* SNSTopicArn `string`

### SearchFacesByImageRequest
* SearchFacesByImageRequest `object`
  * CollectionId **required**
  * FaceMatchThreshold
  * Image **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * MaxFaces
  * QualityFilter

### SearchFacesByImageResponse
* SearchFacesByImageResponse `object`
  * FaceMatches
    * items [FaceMatch](#facematch)
  * FaceModelVersion
  * SearchedFaceBoundingBox
    * Height
    * Left
    * Top
    * Width
  * SearchedFaceConfidence

### SearchFacesRequest
* SearchFacesRequest `object`
  * CollectionId **required**
  * FaceId **required**
  * FaceMatchThreshold
  * MaxFaces

### SearchFacesResponse
* SearchFacesResponse `object`
  * FaceMatches
    * items [FaceMatch](#facematch)
  * FaceModelVersion
  * SearchedFaceId

### SegmentConfidence
* SegmentConfidence `number`

### SegmentDetection
* SegmentDetection `object`: A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>. 
  * DurationMillis
  * DurationSMPTE
  * EndTimecodeSMPTE
  * EndTimestampMillis
  * ShotSegment
    * Confidence
    * Index
  * StartTimecodeSMPTE
  * StartTimestampMillis
  * TechnicalCueSegment
    * Confidence
    * Type
  * Type

### SegmentDetections
* SegmentDetections `array`
  * items [SegmentDetection](#segmentdetection)

### SegmentType
* SegmentType `string` (values: TECHNICAL_CUE, SHOT)

### SegmentTypeInfo
* SegmentTypeInfo `object`: Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>.
  * ModelVersion
  * Type

### SegmentTypes
* SegmentTypes `array`
  * items [SegmentType](#segmenttype)

### SegmentTypesInfo
* SegmentTypesInfo `array`
  * items [SegmentTypeInfo](#segmenttypeinfo)

### ServiceQuotaExceededException


### ShotSegment
* ShotSegment `object`: Information about a shot detection segment detected in a video. For more information, see <a>SegmentDetection</a>.
  * Confidence
  * Index

### Smile
* Smile `object`: Indicates whether or not the face is smiling, and the confidence level in the determination.
  * Confidence
  * Value

### StartCelebrityRecognitionRequest
* StartCelebrityRecognitionRequest `object`
  * ClientRequestToken
  * JobTag
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

### StartCelebrityRecognitionResponse
* StartCelebrityRecognitionResponse `object`
  * JobId

### StartContentModerationRequest
* StartContentModerationRequest `object`
  * ClientRequestToken
  * JobTag
  * MinConfidence
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

### StartContentModerationResponse
* StartContentModerationResponse `object`
  * JobId

### StartFaceDetectionRequest
* StartFaceDetectionRequest `object`
  * ClientRequestToken
  * FaceAttributes
  * JobTag
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

### StartFaceDetectionResponse
* StartFaceDetectionResponse `object`
  * JobId

### StartFaceSearchRequest
* StartFaceSearchRequest `object`
  * ClientRequestToken
  * CollectionId **required**
  * FaceMatchThreshold
  * JobTag
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

### StartFaceSearchResponse
* StartFaceSearchResponse `object`
  * JobId

### StartLabelDetectionRequest
* StartLabelDetectionRequest `object`
  * ClientRequestToken
  * JobTag
  * MinConfidence
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

### StartLabelDetectionResponse
* StartLabelDetectionResponse `object`
  * JobId

### StartPersonTrackingRequest
* StartPersonTrackingRequest `object`
  * ClientRequestToken
  * JobTag
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * Video **required**
    * S3Object
      * Bucket
      * Name
      * Version

### StartPersonTrackingResponse
* StartPersonTrackingResponse `object`
  * JobId

### StartProjectVersionRequest
* StartProjectVersionRequest `object`
  * MinInferenceUnits **required**
  * ProjectVersionArn **required**

### StartProjectVersionResponse
* StartProjectVersionResponse `object`
  * Status

### StartSegmentDetectionFilters
* StartSegmentDetectionFilters `object`: Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>. 
  * ShotFilter
    * MinSegmentConfidence
  * TechnicalCueFilter
    * MinSegmentConfidence

### StartSegmentDetectionRequest
* StartSegmentDetectionRequest `object`
  * ClientRequestToken
  * Filters
    * ShotFilter
      * MinSegmentConfidence
    * TechnicalCueFilter
      * MinSegmentConfidence
  * JobTag
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * SegmentTypes **required**
    * items [SegmentType](#segmenttype)
  * Video **required** [Video](#video)

### StartSegmentDetectionResponse
* StartSegmentDetectionResponse `object`
  * JobId

### StartShotDetectionFilter
* StartShotDetectionFilter `object`: Filters for the shot detection segments returned by <code>GetSegmentDetection</code>. For more information, see <a>StartSegmentDetectionFilters</a>.
  * MinSegmentConfidence

### StartStreamProcessorRequest
* StartStreamProcessorRequest `object`
  * Name **required**

### StartStreamProcessorResponse
* StartStreamProcessorResponse `object`

### StartTechnicalCueDetectionFilter
* StartTechnicalCueDetectionFilter `object`: Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>.
  * MinSegmentConfidence

### StartTextDetectionFilters
* StartTextDetectionFilters `object`: Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in.
  * RegionsOfInterest
    * items [RegionOfInterest](#regionofinterest)
  * WordFilter
    * MinBoundingBoxHeight
    * MinBoundingBoxWidth
    * MinConfidence

### StartTextDetectionRequest
* StartTextDetectionRequest `object`
  * ClientRequestToken
  * Filters
    * RegionsOfInterest
      * items [RegionOfInterest](#regionofinterest)
    * WordFilter
      * MinBoundingBoxHeight
      * MinBoundingBoxWidth
      * MinConfidence
  * JobTag
  * NotificationChannel [NotificationChannel](#notificationchannel)
  * Video **required** [Video](#video)

### StartTextDetectionResponse
* StartTextDetectionResponse `object`
  * JobId

### StatusMessage
* StatusMessage `string`

### StopProjectVersionRequest
* StopProjectVersionRequest `object`
  * ProjectVersionArn **required**

### StopProjectVersionResponse
* StopProjectVersionResponse `object`
  * Status

### StopStreamProcessorRequest
* StopStreamProcessorRequest `object`
  * Name **required**

### StopStreamProcessorResponse
* StopStreamProcessorResponse `object`

### StreamProcessor
* StreamProcessor `object`: An object that recognizes faces in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>. The request parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts. 
  * Name
  * Status

### StreamProcessorArn
* StreamProcessorArn `string`

### StreamProcessorInput
* StreamProcessorInput `object`: Information about the source streaming video. 
  * KinesisVideoStream
    * Arn

### StreamProcessorList
* StreamProcessorList `array`
  * items [StreamProcessor](#streamprocessor)

### StreamProcessorName
* StreamProcessorName `string`

### StreamProcessorOutput
* StreamProcessorOutput `object`: Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
  * KinesisDataStream
    * Arn

### StreamProcessorSettings
* StreamProcessorSettings `object`: Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.
  * FaceSearch
    * CollectionId
    * FaceMatchThreshold

### StreamProcessorStatus
* StreamProcessorStatus `string` (values: STOPPED, STARTING, RUNNING, FAILED, STOPPING)

### String
* String `string`

### Summary
* Summary `object`: <p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p>
  * S3Object [S3Object](#s3object)

### Sunglasses
* Sunglasses `object`: Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.
  * Confidence
  * Value

### TechnicalCueSegment
* TechnicalCueSegment `object`: Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.
  * Confidence
  * Type

### TechnicalCueType
* TechnicalCueType `string` (values: ColorBars, EndCredits, BlackFrames)

### TestingData
* TestingData `object`: The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset.
  * Assets
    * items [Asset](#asset)
  * AutoCreate

### TestingDataResult
* TestingDataResult `object`: Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
  * Input
    * Assets
      * items [Asset](#asset)
    * AutoCreate
  * Output
    * Assets
      * items [Asset](#asset)
    * AutoCreate
  * Validation
    * Assets
      * items [Asset](#asset)

### TextDetection
* TextDetection `object`: <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p>
  * Confidence
  * DetectedText
  * Geometry
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Polygon
      * items [Point](#point)
  * Id
  * ParentId
  * Type

### TextDetectionList
* TextDetectionList `array`
  * items [TextDetection](#textdetection)

### TextDetectionResult
* TextDetectionResult `object`: Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.
  * TextDetection
    * Confidence
    * DetectedText
    * Geometry
      * BoundingBox
        * Height
        * Left
        * Top
        * Width
      * Polygon
        * items [Point](#point)
    * Id
    * ParentId
    * Type
  * Timestamp

### TextDetectionResults
* TextDetectionResults `array`
  * items [TextDetectionResult](#textdetectionresult)

### TextTypes
* TextTypes `string` (values: LINE, WORD)

### ThrottlingException


### Timecode
* Timecode `string`

### Timestamp
* Timestamp `integer`

### TrainingData
* TrainingData `object`: The dataset used for training.
  * Assets
    * items [Asset](#asset)

### TrainingDataResult
* TrainingDataResult `object`: Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
  * Input
    * Assets
      * items [Asset](#asset)
  * Output
    * Assets
      * items [Asset](#asset)
  * Validation
    * Assets
      * items [Asset](#asset)

### UInteger
* UInteger `integer`

### ULong
* ULong `integer`

### UnindexedFace
* UnindexedFace `object`: A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed.
  * FaceDetail
    * AgeRange
      * High
      * Low
    * Beard
      * Confidence
      * Value
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Confidence
    * Emotions
      * items [Emotion](#emotion)
    * Eyeglasses
      * Confidence
      * Value
    * EyesOpen
      * Confidence
      * Value
    * Gender
      * Confidence
      * Value
    * Landmarks
      * items [Landmark](#landmark)
    * MouthOpen
      * Confidence
      * Value
    * Mustache
      * Confidence
      * Value
    * Pose
      * Pitch
      * Roll
      * Yaw
    * Quality
      * Brightness
      * Sharpness
    * Smile
      * Confidence
      * Value
    * Sunglasses
      * Confidence
      * Value
  * Reasons
    * items [Reason](#reason)

### UnindexedFaces
* UnindexedFaces `array`
  * items [UnindexedFace](#unindexedface)

### Url
* Url `string`

### Urls
* Urls `array`
  * items [Url](#url)

### ValidationData
* ValidationData `object`: <p>Contains the Amazon S3 bucket location of the validation data for a model training job. </p> <p>The validation data includes error information for individual JSON lines in the dataset. For more information, see Debugging a Failed Model Training in the Amazon Rekognition Custom Labels Developer Guide. </p> <p>You get the <code>ValidationData</code> object for the training dataset (<a>TrainingDataResult</a>) and the test dataset (<a>TestingDataResult</a>) by calling <a>DescribeProjectVersions</a>. </p> <p>The assets array contains a single <a>Asset</a> object. The <a>GroundTruthManifest</a> field of the Asset object contains the S3 bucket location of the validation data. </p>
  * Assets
    * items [Asset](#asset)

### VersionName
* VersionName `string`

### VersionNames
* VersionNames `array`
  * items [VersionName](#versionname)

### Video
* Video `object`: Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
  * S3Object
    * Bucket
    * Name
    * Version

### VideoJobStatus
* VideoJobStatus `string` (values: IN_PROGRESS, SUCCEEDED, FAILED)

### VideoMetadata
* VideoMetadata `object`: Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.
  * Codec
  * DurationMillis
  * Format
  * FrameHeight
  * FrameRate
  * FrameWidth

### VideoMetadataList
* VideoMetadataList `array`
  * items [VideoMetadata](#videometadata)

### VideoTooLargeException



