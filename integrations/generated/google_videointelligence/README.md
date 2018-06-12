# @datafire/google_videointelligence

Client library for Cloud Video Intelligence

## Installation and Usage
```bash
npm install --save @datafire/google_videointelligence
```
```js
let google_videointelligence = require('@datafire/google_videointelligence').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_videointelligence.videos.annotate({}).then(data => {
  console.log(data);
});
```

## Description

Cloud Video Intelligence API.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_videointelligence.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_videointelligence.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### videos.annotate
Performs asynchronous video annotation. Progress and results can be
retrieved through the `google.longrunning.Operations` interface.
`Operation.metadata` contains `AnnotateVideoProgress` (progress).
`Operation.response` contains `AnnotateVideoResponse` (results).


```js
google_videointelligence.videos.annotate({}, context)
```

#### Input
* input `object`
  * body [GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest](#googlecloudvideointelligencev1beta1_annotatevideorequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleLongrunning_Operation](#googlelongrunning_operation)



## Definitions

### GoogleCloudVideointelligenceV1_AnnotateVideoProgress
* GoogleCloudVideointelligenceV1_AnnotateVideoProgress `object`: Video annotation progress. Included in the `metadata`
  * annotationProgress `array`: Progress metadata for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1_VideoAnnotationProgress](#googlecloudvideointelligencev1_videoannotationprogress)

### GoogleCloudVideointelligenceV1_AnnotateVideoResponse
* GoogleCloudVideointelligenceV1_AnnotateVideoResponse `object`: Video annotation response. Included in the `response`
  * annotationResults `array`: Annotation results for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1_VideoAnnotationResults](#googlecloudvideointelligencev1_videoannotationresults)

### GoogleCloudVideointelligenceV1_Entity
* GoogleCloudVideointelligenceV1_Entity `object`: Detected entity from video analysis.
  * description `string`: Textual description, e.g. `Fixed-gear bicycle`.
  * entityId `string`: Opaque entity ID. Some IDs may be available in
  * languageCode `string`: Language code for `description` in BCP-47 format.

### GoogleCloudVideointelligenceV1_ExplicitContentAnnotation
* GoogleCloudVideointelligenceV1_ExplicitContentAnnotation `object`: Explicit content annotation (based on per-frame visual signals only).
  * frames `array`: All video frames where explicit content was detected.
    * items [GoogleCloudVideointelligenceV1_ExplicitContentFrame](#googlecloudvideointelligencev1_explicitcontentframe)

### GoogleCloudVideointelligenceV1_ExplicitContentFrame
* GoogleCloudVideointelligenceV1_ExplicitContentFrame `object`: Video frame level annotation results for explicit content.
  * pornographyLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of the pornography content..
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the

### GoogleCloudVideointelligenceV1_LabelAnnotation
* GoogleCloudVideointelligenceV1_LabelAnnotation `object`: Label annotation.
  * categoryEntities `array`: Common categories for the detected entity.
    * items [GoogleCloudVideointelligenceV1_Entity](#googlecloudvideointelligencev1_entity)
  * entity [GoogleCloudVideointelligenceV1_Entity](#googlecloudvideointelligencev1_entity)
  * frames `array`: All video frames where a label was detected.
    * items [GoogleCloudVideointelligenceV1_LabelFrame](#googlecloudvideointelligencev1_labelframe)
  * segments `array`: All video segments where a label was detected.
    * items [GoogleCloudVideointelligenceV1_LabelSegment](#googlecloudvideointelligencev1_labelsegment)

### GoogleCloudVideointelligenceV1_LabelFrame
* GoogleCloudVideointelligenceV1_LabelFrame `object`: Video frame level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the

### GoogleCloudVideointelligenceV1_LabelSegment
* GoogleCloudVideointelligenceV1_LabelSegment `object`: Video segment level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * segment [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)

### GoogleCloudVideointelligenceV1_VideoAnnotationProgress
* GoogleCloudVideointelligenceV1_VideoAnnotationProgress `object`: Annotation progress for a single video.
  * inputUri `string`: Output only. Video file location in
  * progressPercent `integer`: Output only. Approximate percentage processed thus far. Guaranteed to be
  * startTime `string`: Output only. Time when the request was received.
  * updateTime `string`: Output only. Time of the most recent update.

### GoogleCloudVideointelligenceV1_VideoAnnotationResults
* GoogleCloudVideointelligenceV1_VideoAnnotationResults `object`: Annotation results for a single video.
  * error [GoogleRpc_Status](#googlerpc_status)
  * explicitAnnotation [GoogleCloudVideointelligenceV1_ExplicitContentAnnotation](#googlecloudvideointelligencev1_explicitcontentannotation)
  * frameLabelAnnotations `array`: Label annotations on frame level.
    * items [GoogleCloudVideointelligenceV1_LabelAnnotation](#googlecloudvideointelligencev1_labelannotation)
  * inputUri `string`: Output only. Video file location in
  * segmentLabelAnnotations `array`: Label annotations on video level or user specified segment level.
    * items [GoogleCloudVideointelligenceV1_LabelAnnotation](#googlecloudvideointelligencev1_labelannotation)
  * shotAnnotations `array`: Shot annotations. Each shot is represented as a video segment.
    * items [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)
  * shotLabelAnnotations `array`: Label annotations on shot level.
    * items [GoogleCloudVideointelligenceV1_LabelAnnotation](#googlecloudvideointelligencev1_labelannotation)

### GoogleCloudVideointelligenceV1_VideoSegment
* GoogleCloudVideointelligenceV1_VideoSegment `object`: Video segment.
  * endTimeOffset `string`: Time-offset, relative to the beginning of the video,
  * startTimeOffset `string`: Time-offset, relative to the beginning of the video,

### GoogleCloudVideointelligenceV1beta1_AnnotateVideoProgress
* GoogleCloudVideointelligenceV1beta1_AnnotateVideoProgress `object`: Video annotation progress. Included in the `metadata`
  * annotationProgress `array`: Progress metadata for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress](#googlecloudvideointelligencev1beta1_videoannotationprogress)

### GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest
* GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest `object`: Video annotation request.
  * features `array`: Requested video annotation features.
    * items `string` (values: FEATURE_UNSPECIFIED, LABEL_DETECTION, SHOT_CHANGE_DETECTION, SAFE_SEARCH_DETECTION)
  * inputContent `string`: The video data bytes. Encoding: base64. If unset, the input video(s)
  * inputUri `string`: Input video location. Currently, only
  * locationId `string`: Optional cloud region where annotation should take place. Supported cloud
  * outputUri `string`: Optional location where the output (in JSON format) should be stored.
  * videoContext [GoogleCloudVideointelligenceV1beta1_VideoContext](#googlecloudvideointelligencev1beta1_videocontext)

### GoogleCloudVideointelligenceV1beta1_AnnotateVideoResponse
* GoogleCloudVideointelligenceV1beta1_AnnotateVideoResponse `object`: Video annotation response. Included in the `response`
  * annotationResults `array`: Annotation results for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults](#googlecloudvideointelligencev1beta1_videoannotationresults)

### GoogleCloudVideointelligenceV1beta1_LabelAnnotation
* GoogleCloudVideointelligenceV1beta1_LabelAnnotation `object`: Label annotation.
  * description `string`: Textual description, e.g. `Fixed-gear bicycle`.
  * languageCode `string`: Language code for `description` in BCP-47 format.
  * locations `array`: Where the label was detected and with what confidence.
    * items [GoogleCloudVideointelligenceV1beta1_LabelLocation](#googlecloudvideointelligencev1beta1_labellocation)

### GoogleCloudVideointelligenceV1beta1_LabelLocation
* GoogleCloudVideointelligenceV1beta1_LabelLocation `object`: Label location.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * level `string` (values: LABEL_LEVEL_UNSPECIFIED, VIDEO_LEVEL, SEGMENT_LEVEL, SHOT_LEVEL, FRAME_LEVEL): Label level.
  * segment [GoogleCloudVideointelligenceV1beta1_VideoSegment](#googlecloudvideointelligencev1beta1_videosegment)

### GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation
* GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation `object`: Safe search annotation (based on per-frame visual signals only).
  * adult `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of adult content.
  * medical `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of medical content.
  * racy `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of racy content.
  * spoof `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that an obvious modification was made to the original
  * timeOffset `string`: Video time offset in microseconds.
  * violent `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of violent content.

### GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress
* GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress `object`: Annotation progress for a single video.
  * inputUri `string`: Video file location in
  * progressPercent `integer`: Approximate percentage processed thus far.
  * startTime `string`: Time when the request was received.
  * updateTime `string`: Time of the most recent update.

### GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults
* GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults `object`: Annotation results for a single video.
  * error [GoogleRpc_Status](#googlerpc_status)
  * inputUri `string`: Video file location in
  * labelAnnotations `array`: Label annotations. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1beta1_LabelAnnotation](#googlecloudvideointelligencev1beta1_labelannotation)
  * safeSearchAnnotations `array`: Safe search annotations.
    * items [GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation](#googlecloudvideointelligencev1beta1_safesearchannotation)
  * shotAnnotations `array`: Shot annotations. Each shot is represented as a video segment.
    * items [GoogleCloudVideointelligenceV1beta1_VideoSegment](#googlecloudvideointelligencev1beta1_videosegment)

### GoogleCloudVideointelligenceV1beta1_VideoContext
* GoogleCloudVideointelligenceV1beta1_VideoContext `object`: Video context and/or feature-specific parameters.
  * labelDetectionMode `string` (values: LABEL_DETECTION_MODE_UNSPECIFIED, SHOT_MODE, FRAME_MODE, SHOT_AND_FRAME_MODE): If label detection has been requested, what labels should be detected
  * labelDetectionModel `string`: Model to use for label detection.
  * safeSearchDetectionModel `string`: Model to use for safe search detection.
  * segments `array`: Video segments to annotate. The segments may overlap and are not required
    * items [GoogleCloudVideointelligenceV1beta1_VideoSegment](#googlecloudvideointelligencev1beta1_videosegment)
  * shotChangeDetectionModel `string`: Model to use for shot change detection.
  * stationaryCamera `boolean`: Whether the video has been shot from a stationary (i.e. non-moving) camera.

### GoogleCloudVideointelligenceV1beta1_VideoSegment
* GoogleCloudVideointelligenceV1beta1_VideoSegment `object`: Video segment.
  * endTimeOffset `string`: End offset in microseconds (inclusive). Unset means 0.
  * startTimeOffset `string`: Start offset in microseconds (inclusive). Unset means 0.

### GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress
* GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress `object`: Video annotation progress. Included in the `metadata`
  * annotationProgress `array`: Progress metadata for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress](#googlecloudvideointelligencev1beta2_videoannotationprogress)

### GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse
* GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse `object`: Video annotation response. Included in the `response`
  * annotationResults `array`: Annotation results for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults](#googlecloudvideointelligencev1beta2_videoannotationresults)

### GoogleCloudVideointelligenceV1beta2_Entity
* GoogleCloudVideointelligenceV1beta2_Entity `object`: Detected entity from video analysis.
  * description `string`: Textual description, e.g. `Fixed-gear bicycle`.
  * entityId `string`: Opaque entity ID. Some IDs may be available in
  * languageCode `string`: Language code for `description` in BCP-47 format.

### GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation
* GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation `object`: Explicit content annotation (based on per-frame visual signals only).
  * frames `array`: All video frames where explicit content was detected.
    * items [GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame](#googlecloudvideointelligencev1beta2_explicitcontentframe)

### GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame
* GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame `object`: Video frame level annotation results for explicit content.
  * pornographyLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of the pornography content..
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the

### GoogleCloudVideointelligenceV1beta2_LabelAnnotation
* GoogleCloudVideointelligenceV1beta2_LabelAnnotation `object`: Label annotation.
  * categoryEntities `array`: Common categories for the detected entity.
    * items [GoogleCloudVideointelligenceV1beta2_Entity](#googlecloudvideointelligencev1beta2_entity)
  * entity [GoogleCloudVideointelligenceV1beta2_Entity](#googlecloudvideointelligencev1beta2_entity)
  * frames `array`: All video frames where a label was detected.
    * items [GoogleCloudVideointelligenceV1beta2_LabelFrame](#googlecloudvideointelligencev1beta2_labelframe)
  * segments `array`: All video segments where a label was detected.
    * items [GoogleCloudVideointelligenceV1beta2_LabelSegment](#googlecloudvideointelligencev1beta2_labelsegment)

### GoogleCloudVideointelligenceV1beta2_LabelFrame
* GoogleCloudVideointelligenceV1beta2_LabelFrame `object`: Video frame level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the

### GoogleCloudVideointelligenceV1beta2_LabelSegment
* GoogleCloudVideointelligenceV1beta2_LabelSegment `object`: Video segment level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * segment [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)

### GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress
* GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress `object`: Annotation progress for a single video.
  * inputUri `string`: Output only. Video file location in
  * progressPercent `integer`: Output only. Approximate percentage processed thus far. Guaranteed to be
  * startTime `string`: Output only. Time when the request was received.
  * updateTime `string`: Output only. Time of the most recent update.

### GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults
* GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults `object`: Annotation results for a single video.
  * error [GoogleRpc_Status](#googlerpc_status)
  * explicitAnnotation [GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation](#googlecloudvideointelligencev1beta2_explicitcontentannotation)
  * frameLabelAnnotations `array`: Label annotations on frame level.
    * items [GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#googlecloudvideointelligencev1beta2_labelannotation)
  * inputUri `string`: Output only. Video file location in
  * segmentLabelAnnotations `array`: Label annotations on video level or user specified segment level.
    * items [GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#googlecloudvideointelligencev1beta2_labelannotation)
  * shotAnnotations `array`: Shot annotations. Each shot is represented as a video segment.
    * items [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)
  * shotLabelAnnotations `array`: Label annotations on shot level.
    * items [GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#googlecloudvideointelligencev1beta2_labelannotation)

### GoogleCloudVideointelligenceV1beta2_VideoSegment
* GoogleCloudVideointelligenceV1beta2_VideoSegment `object`: Video segment.
  * endTimeOffset `string`: Time-offset, relative to the beginning of the video,
  * startTimeOffset `string`: Time-offset, relative to the beginning of the video,

### GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress
* GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress `object`: Video annotation progress. Included in the `metadata`
  * annotationProgress `array`: Progress metadata for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress](#googlecloudvideointelligencev1p1beta1_videoannotationprogress)

### GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse
* GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse `object`: Video annotation response. Included in the `response`
  * annotationResults `array`: Annotation results for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults](#googlecloudvideointelligencev1p1beta1_videoannotationresults)

### GoogleCloudVideointelligenceV1p1beta1_EmotionAttribute
* GoogleCloudVideointelligenceV1p1beta1_EmotionAttribute `object`: Emotion attribute.
  * emotion `string` (values: EMOTION_UNSPECIFIED, AMUSEMENT, ANGER, CONCENTRATION, CONTENTMENT, DESIRE, DISAPPOINTMENT, DISGUST, ELATION, EMBARRASSMENT, INTEREST, PRIDE, SADNESS, SURPRISE): Emotion entry.
  * score `number`: Confidence score.

### GoogleCloudVideointelligenceV1p1beta1_Entity
* GoogleCloudVideointelligenceV1p1beta1_Entity `object`: Detected entity from video analysis.
  * description `string`: Textual description, e.g. `Fixed-gear bicycle`.
  * entityId `string`: Opaque entity ID. Some IDs may be available in
  * languageCode `string`: Language code for `description` in BCP-47 format.

### GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation
* GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation `object`: Explicit content annotation (based on per-frame visual signals only).
  * frames `array`: All video frames where explicit content was detected.
    * items [GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame](#googlecloudvideointelligencev1p1beta1_explicitcontentframe)

### GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame
* GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame `object`: Video frame level annotation results for explicit content.
  * pornographyLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of the pornography content..
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the

### GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation
* GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation `object`: Face detection annotation.
  * frames `array`: All video frames where a face was detected.
    * items [GoogleCloudVideointelligenceV1p1beta1_FaceDetectionFrame](#googlecloudvideointelligencev1p1beta1_facedetectionframe)
  * segments `array`: All video segments where a face was detected.
    * items [GoogleCloudVideointelligenceV1p1beta1_FaceSegment](#googlecloudvideointelligencev1p1beta1_facesegment)

### GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAttribute
* GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAttribute `object`: Face detection attribute.
  * emotions `array`: Emotion attributes.
    * items [GoogleCloudVideointelligenceV1p1beta1_EmotionAttribute](#googlecloudvideointelligencev1p1beta1_emotionattribute)
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox](#googlecloudvideointelligencev1p1beta1_normalizedboundingbox)

### GoogleCloudVideointelligenceV1p1beta1_FaceDetectionFrame
* GoogleCloudVideointelligenceV1p1beta1_FaceDetectionFrame `object`: Video frame level annotation results for face detection.
  * attributes `array`: Face attributes in a frame.
    * items [GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAttribute](#googlecloudvideointelligencev1p1beta1_facedetectionattribute)
  * timeOffset `string`: Time-offset, relative to the beginning of the video,

### GoogleCloudVideointelligenceV1p1beta1_FaceSegment
* GoogleCloudVideointelligenceV1p1beta1_FaceSegment `object`: Video segment level annotation results for face detection.
  * segment [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)

### GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation
* GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation `object`: Label annotation.
  * categoryEntities `array`: Common categories for the detected entity.
    * items [GoogleCloudVideointelligenceV1p1beta1_Entity](#googlecloudvideointelligencev1p1beta1_entity)
  * entity [GoogleCloudVideointelligenceV1p1beta1_Entity](#googlecloudvideointelligencev1p1beta1_entity)
  * frames `array`: All video frames where a label was detected.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelFrame](#googlecloudvideointelligencev1p1beta1_labelframe)
  * segments `array`: All video segments where a label was detected.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelSegment](#googlecloudvideointelligencev1p1beta1_labelsegment)

### GoogleCloudVideointelligenceV1p1beta1_LabelFrame
* GoogleCloudVideointelligenceV1p1beta1_LabelFrame `object`: Video frame level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the

### GoogleCloudVideointelligenceV1p1beta1_LabelSegment
* GoogleCloudVideointelligenceV1p1beta1_LabelSegment `object`: Video segment level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * segment [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)

### GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox
* GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox `object`: Normalized bounding box.
  * bottom `number`: Bottom Y coordinate.
  * left `number`: Left X coordinate.
  * right `number`: Right X coordinate.
  * top `number`: Top Y coordinate.

### GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative
* GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative `object`: Alternative hypotheses (a.k.a. n-best list).
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number
  * transcript `string`: Output only. Transcript text representing the words that the user spoke.
  * words `array`: Output only. A list of word-specific information for each recognized word.
    * items [GoogleCloudVideointelligenceV1p1beta1_WordInfo](#googlecloudvideointelligencev1p1beta1_wordinfo)

### GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription
* GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription `object`: A speech recognition result corresponding to a portion of the audio.
  * alternatives `array`: Output only. May contain one or more recognition hypotheses (up to the
    * items [GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative](#googlecloudvideointelligencev1p1beta1_speechrecognitionalternative)

### GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress
* GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress `object`: Annotation progress for a single video.
  * inputUri `string`: Output only. Video file location in
  * progressPercent `integer`: Output only. Approximate percentage processed thus far. Guaranteed to be
  * startTime `string`: Output only. Time when the request was received.
  * updateTime `string`: Output only. Time of the most recent update.

### GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults
* GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults `object`: Annotation results for a single video.
  * error [GoogleRpc_Status](#googlerpc_status)
  * explicitAnnotation [GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation](#googlecloudvideointelligencev1p1beta1_explicitcontentannotation)
  * faceDetectionAnnotations `array`: Face detection annotations.
    * items [GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation](#googlecloudvideointelligencev1p1beta1_facedetectionannotation)
  * frameLabelAnnotations `array`: Label annotations on frame level.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#googlecloudvideointelligencev1p1beta1_labelannotation)
  * inputUri `string`: Output only. Video file location in
  * segmentLabelAnnotations `array`: Label annotations on video level or user specified segment level.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#googlecloudvideointelligencev1p1beta1_labelannotation)
  * shotAnnotations `array`: Shot annotations. Each shot is represented as a video segment.
    * items [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)
  * shotLabelAnnotations `array`: Label annotations on shot level.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#googlecloudvideointelligencev1p1beta1_labelannotation)
  * speechTranscriptions `array`: Speech transcription.
    * items [GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription](#googlecloudvideointelligencev1p1beta1_speechtranscription)

### GoogleCloudVideointelligenceV1p1beta1_VideoSegment
* GoogleCloudVideointelligenceV1p1beta1_VideoSegment `object`: Video segment.
  * endTimeOffset `string`: Time-offset, relative to the beginning of the video,
  * startTimeOffset `string`: Time-offset, relative to the beginning of the video,

### GoogleCloudVideointelligenceV1p1beta1_WordInfo
* GoogleCloudVideointelligenceV1p1beta1_WordInfo `object`: Word-specific information for recognized words. Word information is only
  * endTime `string`: Output only. Time offset relative to the beginning of the audio, and
  * startTime `string`: Output only. Time offset relative to the beginning of the audio, and
  * word `string`: Output only. The word corresponding to this set of information.

### GoogleLongrunning_Operation
* GoogleLongrunning_Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [GoogleRpc_Status](#googlerpc_status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### GoogleRpc_Status
* GoogleRpc_Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any


