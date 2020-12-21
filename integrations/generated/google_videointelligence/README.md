# @datafire/google_videointelligence

Client library for Cloud Video Intelligence API

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

.then(data => {
  console.log(data);
});
```

## Description

Detects objects, explicit content, and scene changes in videos. It also specifies the region for annotation and transcribes speech to text. Supports both asynchronous API and streaming API.

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

### videointelligence.videos.annotate
Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).


```js
google_videointelligence.videointelligence.videos.annotate({}, context)
```

#### Input
* input `object`
  * body [GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoRequest](#googlecloudvideointelligencev1p3beta1_annotatevideorequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleLongrunning_Operation](#googlelongrunning_operation)



## Definitions

### GoogleCloudVideointelligenceV1_AnnotateVideoProgress
* GoogleCloudVideointelligenceV1_AnnotateVideoProgress `object`: Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * annotationProgress `array`: Progress metadata for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1_VideoAnnotationProgress](#googlecloudvideointelligencev1_videoannotationprogress)

### GoogleCloudVideointelligenceV1_AnnotateVideoResponse
* GoogleCloudVideointelligenceV1_AnnotateVideoResponse `object`: Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * annotationResults `array`: Annotation results for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1_VideoAnnotationResults](#googlecloudvideointelligencev1_videoannotationresults)

### GoogleCloudVideointelligenceV1_DetectedAttribute
* GoogleCloudVideointelligenceV1_DetectedAttribute `object`: A generic detected attribute represented by name in string format.
  * confidence `number`: Detected attribute confidence. Range [0, 1].
  * name `string`: The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
  * value `string`: Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.

### GoogleCloudVideointelligenceV1_DetectedLandmark
* GoogleCloudVideointelligenceV1_DetectedLandmark `object`: A generic detected landmark represented by name in string format and a 2D location.
  * confidence `number`: The confidence score of the detected landmark. Range [0, 1].
  * name `string`: The name of this landmark, for example, left_hand, right_shoulder.
  * point [GoogleCloudVideointelligenceV1_NormalizedVertex](#googlecloudvideointelligencev1_normalizedvertex)

### GoogleCloudVideointelligenceV1_Entity
* GoogleCloudVideointelligenceV1_Entity `object`: Detected entity from video analysis.
  * description `string`: Textual description, e.g., `Fixed-gear bicycle`.
  * entityId `string`: Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
  * languageCode `string`: Language code for `description` in BCP-47 format.

### GoogleCloudVideointelligenceV1_ExplicitContentAnnotation
* GoogleCloudVideointelligenceV1_ExplicitContentAnnotation `object`: Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
  * frames `array`: All video frames where explicit content was detected.
    * items [GoogleCloudVideointelligenceV1_ExplicitContentFrame](#googlecloudvideointelligencev1_explicitcontentframe)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1_ExplicitContentFrame
* GoogleCloudVideointelligenceV1_ExplicitContentFrame `object`: Video frame level annotation results for explicit content.
  * pornographyLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of the pornography content..
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1_FaceAnnotation
* GoogleCloudVideointelligenceV1_FaceAnnotation `object`: Deprecated. No effect.
  * frames `array`: All video frames where a face was detected.
    * items [GoogleCloudVideointelligenceV1_FaceFrame](#googlecloudvideointelligencev1_faceframe)
  * segments `array`: All video segments where a face was detected.
    * items [GoogleCloudVideointelligenceV1_FaceSegment](#googlecloudvideointelligencev1_facesegment)
  * thumbnail `string`: Thumbnail of a representative face view (in JPEG format).

### GoogleCloudVideointelligenceV1_FaceDetectionAnnotation
* GoogleCloudVideointelligenceV1_FaceDetectionAnnotation `object`: Face detection annotation.
  * thumbnail `string`: The thumbnail of a person's face.
  * tracks `array`: The face tracks with attributes.
    * items [GoogleCloudVideointelligenceV1_Track](#googlecloudvideointelligencev1_track)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1_FaceFrame
* GoogleCloudVideointelligenceV1_FaceFrame `object`: Deprecated. No effect.
  * normalizedBoundingBoxes `array`: Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
    * items [GoogleCloudVideointelligenceV1_NormalizedBoundingBox](#googlecloudvideointelligencev1_normalizedboundingbox)
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1_FaceSegment
* GoogleCloudVideointelligenceV1_FaceSegment `object`: Video segment level annotation results for face detection.
  * segment [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)

### GoogleCloudVideointelligenceV1_LabelAnnotation
* GoogleCloudVideointelligenceV1_LabelAnnotation `object`: Label annotation.
  * categoryEntities `array`: Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.
    * items [GoogleCloudVideointelligenceV1_Entity](#googlecloudvideointelligencev1_entity)
  * entity [GoogleCloudVideointelligenceV1_Entity](#googlecloudvideointelligencev1_entity)
  * frames `array`: All video frames where a label was detected.
    * items [GoogleCloudVideointelligenceV1_LabelFrame](#googlecloudvideointelligencev1_labelframe)
  * segments `array`: All video segments where a label was detected.
    * items [GoogleCloudVideointelligenceV1_LabelSegment](#googlecloudvideointelligencev1_labelsegment)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1_LabelFrame
* GoogleCloudVideointelligenceV1_LabelFrame `object`: Video frame level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1_LabelSegment
* GoogleCloudVideointelligenceV1_LabelSegment `object`: Video segment level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * segment [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)

### GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation
* GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation `object`: Annotation corresponding to one detected, tracked and recognized logo class.
  * entity [GoogleCloudVideointelligenceV1_Entity](#googlecloudvideointelligencev1_entity)
  * segments `array`: All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
    * items [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)
  * tracks `array`: All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
    * items [GoogleCloudVideointelligenceV1_Track](#googlecloudvideointelligencev1_track)

### GoogleCloudVideointelligenceV1_NormalizedBoundingBox
* GoogleCloudVideointelligenceV1_NormalizedBoundingBox `object`: Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
  * bottom `number`: Bottom Y coordinate.
  * left `number`: Left X coordinate.
  * right `number`: Right X coordinate.
  * top `number`: Top Y coordinate.

### GoogleCloudVideointelligenceV1_NormalizedBoundingPoly
* GoogleCloudVideointelligenceV1_NormalizedBoundingPoly `object`: Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.
  * vertices `array`: Normalized vertices of the bounding polygon.
    * items [GoogleCloudVideointelligenceV1_NormalizedVertex](#googlecloudvideointelligencev1_normalizedvertex)

### GoogleCloudVideointelligenceV1_NormalizedVertex
* GoogleCloudVideointelligenceV1_NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation
* GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation `object`: Annotations corresponding to one tracked object.
  * confidence `number`: Object category's labeling confidence of this track.
  * entity [GoogleCloudVideointelligenceV1_Entity](#googlecloudvideointelligencev1_entity)
  * frames `array`: Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
    * items [GoogleCloudVideointelligenceV1_ObjectTrackingFrame](#googlecloudvideointelligencev1_objecttrackingframe)
  * segment [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)
  * trackId `string`: Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1_ObjectTrackingFrame
* GoogleCloudVideointelligenceV1_ObjectTrackingFrame `object`: Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1_NormalizedBoundingBox](#googlecloudvideointelligencev1_normalizedboundingbox)
  * timeOffset `string`: The timestamp of the frame in microseconds.

### GoogleCloudVideointelligenceV1_PersonDetectionAnnotation
* GoogleCloudVideointelligenceV1_PersonDetectionAnnotation `object`: Person detection annotation per video.
  * tracks `array`: The detected tracks of a person.
    * items [GoogleCloudVideointelligenceV1_Track](#googlecloudvideointelligencev1_track)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative
* GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative `object`: Alternative hypotheses (a.k.a. n-best list).
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
  * transcript `string`: Transcript text representing the words that the user spoke.
  * words `array`: Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.
    * items [GoogleCloudVideointelligenceV1_WordInfo](#googlecloudvideointelligencev1_wordinfo)

### GoogleCloudVideointelligenceV1_SpeechTranscription
* GoogleCloudVideointelligenceV1_SpeechTranscription `object`: A speech recognition result corresponding to a portion of the audio.
  * alternatives `array`: May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
    * items [GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative](#googlecloudvideointelligencev1_speechrecognitionalternative)
  * languageCode `string`: Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.

### GoogleCloudVideointelligenceV1_TextAnnotation
* GoogleCloudVideointelligenceV1_TextAnnotation `object`: Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
  * segments `array`: All video segments where OCR detected text appears.
    * items [GoogleCloudVideointelligenceV1_TextSegment](#googlecloudvideointelligencev1_textsegment)
  * text `string`: The detected text.
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1_TextFrame
* GoogleCloudVideointelligenceV1_TextFrame `object`: Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
  * rotatedBoundingBox [GoogleCloudVideointelligenceV1_NormalizedBoundingPoly](#googlecloudvideointelligencev1_normalizedboundingpoly)
  * timeOffset `string`: Timestamp of this frame.

### GoogleCloudVideointelligenceV1_TextSegment
* GoogleCloudVideointelligenceV1_TextSegment `object`: Video segment level annotation results for text detection.
  * confidence `number`: Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
  * frames `array`: Information related to the frames where OCR detected text appears.
    * items [GoogleCloudVideointelligenceV1_TextFrame](#googlecloudvideointelligencev1_textframe)
  * segment [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)

### GoogleCloudVideointelligenceV1_TimestampedObject
* GoogleCloudVideointelligenceV1_TimestampedObject `object`: For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.
  * attributes `array`: Optional. The attributes of the object in the bounding box.
    * items [GoogleCloudVideointelligenceV1_DetectedAttribute](#googlecloudvideointelligencev1_detectedattribute)
  * landmarks `array`: Optional. The detected landmarks.
    * items [GoogleCloudVideointelligenceV1_DetectedLandmark](#googlecloudvideointelligencev1_detectedlandmark)
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1_NormalizedBoundingBox](#googlecloudvideointelligencev1_normalizedboundingbox)
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.

### GoogleCloudVideointelligenceV1_Track
* GoogleCloudVideointelligenceV1_Track `object`: A track of an object instance.
  * attributes `array`: Optional. Attributes in the track level.
    * items [GoogleCloudVideointelligenceV1_DetectedAttribute](#googlecloudvideointelligencev1_detectedattribute)
  * confidence `number`: Optional. The confidence score of the tracked object.
  * segment [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)
  * timestampedObjects `array`: The object with timestamp and attributes per frame in the track.
    * items [GoogleCloudVideointelligenceV1_TimestampedObject](#googlecloudvideointelligencev1_timestampedobject)

### GoogleCloudVideointelligenceV1_VideoAnnotationProgress
* GoogleCloudVideointelligenceV1_VideoAnnotationProgress `object`: Annotation progress for a single video.
  * feature `string` (values: FEATURE_UNSPECIFIED, LABEL_DETECTION, SHOT_CHANGE_DETECTION, EXPLICIT_CONTENT_DETECTION, FACE_DETECTION, SPEECH_TRANSCRIPTION, TEXT_DETECTION, OBJECT_TRACKING, LOGO_RECOGNITION, PERSON_DETECTION): Specifies which feature is being tracked if the request contains more than one feature.
  * inputUri `string`: Video file location in [Cloud Storage](https://cloud.google.com/storage/).
  * progressPercent `integer`: Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
  * segment [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)
  * startTime `string`: Time when the request was received.
  * updateTime `string`: Time of the most recent update.

### GoogleCloudVideointelligenceV1_VideoAnnotationResults
* GoogleCloudVideointelligenceV1_VideoAnnotationResults `object`: Annotation results for a single video.
  * error [GoogleRpc_Status](#googlerpc_status)
  * explicitAnnotation [GoogleCloudVideointelligenceV1_ExplicitContentAnnotation](#googlecloudvideointelligencev1_explicitcontentannotation)
  * faceAnnotations `array`: Deprecated. Please use `face_detection_annotations` instead.
    * items [GoogleCloudVideointelligenceV1_FaceAnnotation](#googlecloudvideointelligencev1_faceannotation)
  * faceDetectionAnnotations `array`: Face detection annotations.
    * items [GoogleCloudVideointelligenceV1_FaceDetectionAnnotation](#googlecloudvideointelligencev1_facedetectionannotation)
  * frameLabelAnnotations `array`: Label annotations on frame level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1_LabelAnnotation](#googlecloudvideointelligencev1_labelannotation)
  * inputUri `string`: Video file location in [Cloud Storage](https://cloud.google.com/storage/).
  * logoRecognitionAnnotations `array`: Annotations for list of logos detected, tracked and recognized in video.
    * items [GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation](#googlecloudvideointelligencev1_logorecognitionannotation)
  * objectAnnotations `array`: Annotations for list of objects detected and tracked in video.
    * items [GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation](#googlecloudvideointelligencev1_objecttrackingannotation)
  * personDetectionAnnotations `array`: Person detection annotations.
    * items [GoogleCloudVideointelligenceV1_PersonDetectionAnnotation](#googlecloudvideointelligencev1_persondetectionannotation)
  * segment [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)
  * segmentLabelAnnotations `array`: Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1_LabelAnnotation](#googlecloudvideointelligencev1_labelannotation)
  * segmentPresenceLabelAnnotations `array`: Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
    * items [GoogleCloudVideointelligenceV1_LabelAnnotation](#googlecloudvideointelligencev1_labelannotation)
  * shotAnnotations `array`: Shot annotations. Each shot is represented as a video segment.
    * items [GoogleCloudVideointelligenceV1_VideoSegment](#googlecloudvideointelligencev1_videosegment)
  * shotLabelAnnotations `array`: Topical label annotations on shot level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1_LabelAnnotation](#googlecloudvideointelligencev1_labelannotation)
  * shotPresenceLabelAnnotations `array`: Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
    * items [GoogleCloudVideointelligenceV1_LabelAnnotation](#googlecloudvideointelligencev1_labelannotation)
  * speechTranscriptions `array`: Speech transcription.
    * items [GoogleCloudVideointelligenceV1_SpeechTranscription](#googlecloudvideointelligencev1_speechtranscription)
  * textAnnotations `array`: OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
    * items [GoogleCloudVideointelligenceV1_TextAnnotation](#googlecloudvideointelligencev1_textannotation)

### GoogleCloudVideointelligenceV1_VideoSegment
* GoogleCloudVideointelligenceV1_VideoSegment `object`: Video segment.
  * endTimeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
  * startTimeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).

### GoogleCloudVideointelligenceV1_WordInfo
* GoogleCloudVideointelligenceV1_WordInfo `object`: Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
  * endTime `string`: Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
  * speakerTag `integer`: Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.
  * startTime `string`: Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
  * word `string`: The word corresponding to this set of information.

### GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress
* GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress `object`: Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * annotationProgress `array`: Progress metadata for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress](#googlecloudvideointelligencev1beta2_videoannotationprogress)

### GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse
* GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse `object`: Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * annotationResults `array`: Annotation results for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults](#googlecloudvideointelligencev1beta2_videoannotationresults)

### GoogleCloudVideointelligenceV1beta2_DetectedAttribute
* GoogleCloudVideointelligenceV1beta2_DetectedAttribute `object`: A generic detected attribute represented by name in string format.
  * confidence `number`: Detected attribute confidence. Range [0, 1].
  * name `string`: The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
  * value `string`: Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.

### GoogleCloudVideointelligenceV1beta2_DetectedLandmark
* GoogleCloudVideointelligenceV1beta2_DetectedLandmark `object`: A generic detected landmark represented by name in string format and a 2D location.
  * confidence `number`: The confidence score of the detected landmark. Range [0, 1].
  * name `string`: The name of this landmark, for example, left_hand, right_shoulder.
  * point [GoogleCloudVideointelligenceV1beta2_NormalizedVertex](#googlecloudvideointelligencev1beta2_normalizedvertex)

### GoogleCloudVideointelligenceV1beta2_Entity
* GoogleCloudVideointelligenceV1beta2_Entity `object`: Detected entity from video analysis.
  * description `string`: Textual description, e.g., `Fixed-gear bicycle`.
  * entityId `string`: Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
  * languageCode `string`: Language code for `description` in BCP-47 format.

### GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation
* GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation `object`: Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
  * frames `array`: All video frames where explicit content was detected.
    * items [GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame](#googlecloudvideointelligencev1beta2_explicitcontentframe)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame
* GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame `object`: Video frame level annotation results for explicit content.
  * pornographyLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of the pornography content..
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1beta2_FaceAnnotation
* GoogleCloudVideointelligenceV1beta2_FaceAnnotation `object`: Deprecated. No effect.
  * frames `array`: All video frames where a face was detected.
    * items [GoogleCloudVideointelligenceV1beta2_FaceFrame](#googlecloudvideointelligencev1beta2_faceframe)
  * segments `array`: All video segments where a face was detected.
    * items [GoogleCloudVideointelligenceV1beta2_FaceSegment](#googlecloudvideointelligencev1beta2_facesegment)
  * thumbnail `string`: Thumbnail of a representative face view (in JPEG format).

### GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation
* GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation `object`: Face detection annotation.
  * thumbnail `string`: The thumbnail of a person's face.
  * tracks `array`: The face tracks with attributes.
    * items [GoogleCloudVideointelligenceV1beta2_Track](#googlecloudvideointelligencev1beta2_track)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1beta2_FaceFrame
* GoogleCloudVideointelligenceV1beta2_FaceFrame `object`: Deprecated. No effect.
  * normalizedBoundingBoxes `array`: Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
    * items [GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox](#googlecloudvideointelligencev1beta2_normalizedboundingbox)
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1beta2_FaceSegment
* GoogleCloudVideointelligenceV1beta2_FaceSegment `object`: Video segment level annotation results for face detection.
  * segment [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)

### GoogleCloudVideointelligenceV1beta2_LabelAnnotation
* GoogleCloudVideointelligenceV1beta2_LabelAnnotation `object`: Label annotation.
  * categoryEntities `array`: Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.
    * items [GoogleCloudVideointelligenceV1beta2_Entity](#googlecloudvideointelligencev1beta2_entity)
  * entity [GoogleCloudVideointelligenceV1beta2_Entity](#googlecloudvideointelligencev1beta2_entity)
  * frames `array`: All video frames where a label was detected.
    * items [GoogleCloudVideointelligenceV1beta2_LabelFrame](#googlecloudvideointelligencev1beta2_labelframe)
  * segments `array`: All video segments where a label was detected.
    * items [GoogleCloudVideointelligenceV1beta2_LabelSegment](#googlecloudvideointelligencev1beta2_labelsegment)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1beta2_LabelFrame
* GoogleCloudVideointelligenceV1beta2_LabelFrame `object`: Video frame level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1beta2_LabelSegment
* GoogleCloudVideointelligenceV1beta2_LabelSegment `object`: Video segment level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * segment [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)

### GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation
* GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation `object`: Annotation corresponding to one detected, tracked and recognized logo class.
  * entity [GoogleCloudVideointelligenceV1beta2_Entity](#googlecloudvideointelligencev1beta2_entity)
  * segments `array`: All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
    * items [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)
  * tracks `array`: All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
    * items [GoogleCloudVideointelligenceV1beta2_Track](#googlecloudvideointelligencev1beta2_track)

### GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox
* GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox `object`: Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
  * bottom `number`: Bottom Y coordinate.
  * left `number`: Left X coordinate.
  * right `number`: Right X coordinate.
  * top `number`: Top Y coordinate.

### GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly
* GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly `object`: Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.
  * vertices `array`: Normalized vertices of the bounding polygon.
    * items [GoogleCloudVideointelligenceV1beta2_NormalizedVertex](#googlecloudvideointelligencev1beta2_normalizedvertex)

### GoogleCloudVideointelligenceV1beta2_NormalizedVertex
* GoogleCloudVideointelligenceV1beta2_NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation
* GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation `object`: Annotations corresponding to one tracked object.
  * confidence `number`: Object category's labeling confidence of this track.
  * entity [GoogleCloudVideointelligenceV1beta2_Entity](#googlecloudvideointelligencev1beta2_entity)
  * frames `array`: Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
    * items [GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame](#googlecloudvideointelligencev1beta2_objecttrackingframe)
  * segment [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)
  * trackId `string`: Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame
* GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame `object`: Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox](#googlecloudvideointelligencev1beta2_normalizedboundingbox)
  * timeOffset `string`: The timestamp of the frame in microseconds.

### GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation
* GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation `object`: Person detection annotation per video.
  * tracks `array`: The detected tracks of a person.
    * items [GoogleCloudVideointelligenceV1beta2_Track](#googlecloudvideointelligencev1beta2_track)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative
* GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative `object`: Alternative hypotheses (a.k.a. n-best list).
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
  * transcript `string`: Transcript text representing the words that the user spoke.
  * words `array`: Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.
    * items [GoogleCloudVideointelligenceV1beta2_WordInfo](#googlecloudvideointelligencev1beta2_wordinfo)

### GoogleCloudVideointelligenceV1beta2_SpeechTranscription
* GoogleCloudVideointelligenceV1beta2_SpeechTranscription `object`: A speech recognition result corresponding to a portion of the audio.
  * alternatives `array`: May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
    * items [GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative](#googlecloudvideointelligencev1beta2_speechrecognitionalternative)
  * languageCode `string`: Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.

### GoogleCloudVideointelligenceV1beta2_TextAnnotation
* GoogleCloudVideointelligenceV1beta2_TextAnnotation `object`: Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
  * segments `array`: All video segments where OCR detected text appears.
    * items [GoogleCloudVideointelligenceV1beta2_TextSegment](#googlecloudvideointelligencev1beta2_textsegment)
  * text `string`: The detected text.
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1beta2_TextFrame
* GoogleCloudVideointelligenceV1beta2_TextFrame `object`: Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
  * rotatedBoundingBox [GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly](#googlecloudvideointelligencev1beta2_normalizedboundingpoly)
  * timeOffset `string`: Timestamp of this frame.

### GoogleCloudVideointelligenceV1beta2_TextSegment
* GoogleCloudVideointelligenceV1beta2_TextSegment `object`: Video segment level annotation results for text detection.
  * confidence `number`: Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
  * frames `array`: Information related to the frames where OCR detected text appears.
    * items [GoogleCloudVideointelligenceV1beta2_TextFrame](#googlecloudvideointelligencev1beta2_textframe)
  * segment [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)

### GoogleCloudVideointelligenceV1beta2_TimestampedObject
* GoogleCloudVideointelligenceV1beta2_TimestampedObject `object`: For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.
  * attributes `array`: Optional. The attributes of the object in the bounding box.
    * items [GoogleCloudVideointelligenceV1beta2_DetectedAttribute](#googlecloudvideointelligencev1beta2_detectedattribute)
  * landmarks `array`: Optional. The detected landmarks.
    * items [GoogleCloudVideointelligenceV1beta2_DetectedLandmark](#googlecloudvideointelligencev1beta2_detectedlandmark)
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox](#googlecloudvideointelligencev1beta2_normalizedboundingbox)
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.

### GoogleCloudVideointelligenceV1beta2_Track
* GoogleCloudVideointelligenceV1beta2_Track `object`: A track of an object instance.
  * attributes `array`: Optional. Attributes in the track level.
    * items [GoogleCloudVideointelligenceV1beta2_DetectedAttribute](#googlecloudvideointelligencev1beta2_detectedattribute)
  * confidence `number`: Optional. The confidence score of the tracked object.
  * segment [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)
  * timestampedObjects `array`: The object with timestamp and attributes per frame in the track.
    * items [GoogleCloudVideointelligenceV1beta2_TimestampedObject](#googlecloudvideointelligencev1beta2_timestampedobject)

### GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress
* GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress `object`: Annotation progress for a single video.
  * feature `string` (values: FEATURE_UNSPECIFIED, LABEL_DETECTION, SHOT_CHANGE_DETECTION, EXPLICIT_CONTENT_DETECTION, FACE_DETECTION, SPEECH_TRANSCRIPTION, TEXT_DETECTION, OBJECT_TRACKING, LOGO_RECOGNITION, PERSON_DETECTION): Specifies which feature is being tracked if the request contains more than one feature.
  * inputUri `string`: Video file location in [Cloud Storage](https://cloud.google.com/storage/).
  * progressPercent `integer`: Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
  * segment [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)
  * startTime `string`: Time when the request was received.
  * updateTime `string`: Time of the most recent update.

### GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults
* GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults `object`: Annotation results for a single video.
  * error [GoogleRpc_Status](#googlerpc_status)
  * explicitAnnotation [GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation](#googlecloudvideointelligencev1beta2_explicitcontentannotation)
  * faceAnnotations `array`: Deprecated. Please use `face_detection_annotations` instead.
    * items [GoogleCloudVideointelligenceV1beta2_FaceAnnotation](#googlecloudvideointelligencev1beta2_faceannotation)
  * faceDetectionAnnotations `array`: Face detection annotations.
    * items [GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation](#googlecloudvideointelligencev1beta2_facedetectionannotation)
  * frameLabelAnnotations `array`: Label annotations on frame level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#googlecloudvideointelligencev1beta2_labelannotation)
  * inputUri `string`: Video file location in [Cloud Storage](https://cloud.google.com/storage/).
  * logoRecognitionAnnotations `array`: Annotations for list of logos detected, tracked and recognized in video.
    * items [GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation](#googlecloudvideointelligencev1beta2_logorecognitionannotation)
  * objectAnnotations `array`: Annotations for list of objects detected and tracked in video.
    * items [GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation](#googlecloudvideointelligencev1beta2_objecttrackingannotation)
  * personDetectionAnnotations `array`: Person detection annotations.
    * items [GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation](#googlecloudvideointelligencev1beta2_persondetectionannotation)
  * segment [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)
  * segmentLabelAnnotations `array`: Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#googlecloudvideointelligencev1beta2_labelannotation)
  * segmentPresenceLabelAnnotations `array`: Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
    * items [GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#googlecloudvideointelligencev1beta2_labelannotation)
  * shotAnnotations `array`: Shot annotations. Each shot is represented as a video segment.
    * items [GoogleCloudVideointelligenceV1beta2_VideoSegment](#googlecloudvideointelligencev1beta2_videosegment)
  * shotLabelAnnotations `array`: Topical label annotations on shot level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#googlecloudvideointelligencev1beta2_labelannotation)
  * shotPresenceLabelAnnotations `array`: Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
    * items [GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#googlecloudvideointelligencev1beta2_labelannotation)
  * speechTranscriptions `array`: Speech transcription.
    * items [GoogleCloudVideointelligenceV1beta2_SpeechTranscription](#googlecloudvideointelligencev1beta2_speechtranscription)
  * textAnnotations `array`: OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
    * items [GoogleCloudVideointelligenceV1beta2_TextAnnotation](#googlecloudvideointelligencev1beta2_textannotation)

### GoogleCloudVideointelligenceV1beta2_VideoSegment
* GoogleCloudVideointelligenceV1beta2_VideoSegment `object`: Video segment.
  * endTimeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
  * startTimeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).

### GoogleCloudVideointelligenceV1beta2_WordInfo
* GoogleCloudVideointelligenceV1beta2_WordInfo `object`: Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
  * endTime `string`: Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
  * speakerTag `integer`: Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.
  * startTime `string`: Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
  * word `string`: The word corresponding to this set of information.

### GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress
* GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress `object`: Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * annotationProgress `array`: Progress metadata for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress](#googlecloudvideointelligencev1p1beta1_videoannotationprogress)

### GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse
* GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse `object`: Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * annotationResults `array`: Annotation results for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults](#googlecloudvideointelligencev1p1beta1_videoannotationresults)

### GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute
* GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute `object`: A generic detected attribute represented by name in string format.
  * confidence `number`: Detected attribute confidence. Range [0, 1].
  * name `string`: The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
  * value `string`: Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.

### GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark
* GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark `object`: A generic detected landmark represented by name in string format and a 2D location.
  * confidence `number`: The confidence score of the detected landmark. Range [0, 1].
  * name `string`: The name of this landmark, for example, left_hand, right_shoulder.
  * point [GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex](#googlecloudvideointelligencev1p1beta1_normalizedvertex)

### GoogleCloudVideointelligenceV1p1beta1_Entity
* GoogleCloudVideointelligenceV1p1beta1_Entity `object`: Detected entity from video analysis.
  * description `string`: Textual description, e.g., `Fixed-gear bicycle`.
  * entityId `string`: Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
  * languageCode `string`: Language code for `description` in BCP-47 format.

### GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation
* GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation `object`: Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
  * frames `array`: All video frames where explicit content was detected.
    * items [GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame](#googlecloudvideointelligencev1p1beta1_explicitcontentframe)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame
* GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame `object`: Video frame level annotation results for explicit content.
  * pornographyLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of the pornography content..
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation
* GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation `object`: Deprecated. No effect.
  * frames `array`: All video frames where a face was detected.
    * items [GoogleCloudVideointelligenceV1p1beta1_FaceFrame](#googlecloudvideointelligencev1p1beta1_faceframe)
  * segments `array`: All video segments where a face was detected.
    * items [GoogleCloudVideointelligenceV1p1beta1_FaceSegment](#googlecloudvideointelligencev1p1beta1_facesegment)
  * thumbnail `string`: Thumbnail of a representative face view (in JPEG format).

### GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation
* GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation `object`: Face detection annotation.
  * thumbnail `string`: The thumbnail of a person's face.
  * tracks `array`: The face tracks with attributes.
    * items [GoogleCloudVideointelligenceV1p1beta1_Track](#googlecloudvideointelligencev1p1beta1_track)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p1beta1_FaceFrame
* GoogleCloudVideointelligenceV1p1beta1_FaceFrame `object`: Deprecated. No effect.
  * normalizedBoundingBoxes `array`: Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
    * items [GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox](#googlecloudvideointelligencev1p1beta1_normalizedboundingbox)
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1p1beta1_FaceSegment
* GoogleCloudVideointelligenceV1p1beta1_FaceSegment `object`: Video segment level annotation results for face detection.
  * segment [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)

### GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation
* GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation `object`: Label annotation.
  * categoryEntities `array`: Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.
    * items [GoogleCloudVideointelligenceV1p1beta1_Entity](#googlecloudvideointelligencev1p1beta1_entity)
  * entity [GoogleCloudVideointelligenceV1p1beta1_Entity](#googlecloudvideointelligencev1p1beta1_entity)
  * frames `array`: All video frames where a label was detected.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelFrame](#googlecloudvideointelligencev1p1beta1_labelframe)
  * segments `array`: All video segments where a label was detected.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelSegment](#googlecloudvideointelligencev1p1beta1_labelsegment)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p1beta1_LabelFrame
* GoogleCloudVideointelligenceV1p1beta1_LabelFrame `object`: Video frame level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1p1beta1_LabelSegment
* GoogleCloudVideointelligenceV1p1beta1_LabelSegment `object`: Video segment level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * segment [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)

### GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation
* GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation `object`: Annotation corresponding to one detected, tracked and recognized logo class.
  * entity [GoogleCloudVideointelligenceV1p1beta1_Entity](#googlecloudvideointelligencev1p1beta1_entity)
  * segments `array`: All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
    * items [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)
  * tracks `array`: All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
    * items [GoogleCloudVideointelligenceV1p1beta1_Track](#googlecloudvideointelligencev1p1beta1_track)

### GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox
* GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox `object`: Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
  * bottom `number`: Bottom Y coordinate.
  * left `number`: Left X coordinate.
  * right `number`: Right X coordinate.
  * top `number`: Top Y coordinate.

### GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly
* GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly `object`: Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.
  * vertices `array`: Normalized vertices of the bounding polygon.
    * items [GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex](#googlecloudvideointelligencev1p1beta1_normalizedvertex)

### GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex
* GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation
* GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation `object`: Annotations corresponding to one tracked object.
  * confidence `number`: Object category's labeling confidence of this track.
  * entity [GoogleCloudVideointelligenceV1p1beta1_Entity](#googlecloudvideointelligencev1p1beta1_entity)
  * frames `array`: Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
    * items [GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame](#googlecloudvideointelligencev1p1beta1_objecttrackingframe)
  * segment [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)
  * trackId `string`: Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame
* GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame `object`: Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox](#googlecloudvideointelligencev1p1beta1_normalizedboundingbox)
  * timeOffset `string`: The timestamp of the frame in microseconds.

### GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation
* GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation `object`: Person detection annotation per video.
  * tracks `array`: The detected tracks of a person.
    * items [GoogleCloudVideointelligenceV1p1beta1_Track](#googlecloudvideointelligencev1p1beta1_track)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative
* GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative `object`: Alternative hypotheses (a.k.a. n-best list).
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
  * transcript `string`: Transcript text representing the words that the user spoke.
  * words `array`: Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.
    * items [GoogleCloudVideointelligenceV1p1beta1_WordInfo](#googlecloudvideointelligencev1p1beta1_wordinfo)

### GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription
* GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription `object`: A speech recognition result corresponding to a portion of the audio.
  * alternatives `array`: May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
    * items [GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative](#googlecloudvideointelligencev1p1beta1_speechrecognitionalternative)
  * languageCode `string`: Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.

### GoogleCloudVideointelligenceV1p1beta1_TextAnnotation
* GoogleCloudVideointelligenceV1p1beta1_TextAnnotation `object`: Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
  * segments `array`: All video segments where OCR detected text appears.
    * items [GoogleCloudVideointelligenceV1p1beta1_TextSegment](#googlecloudvideointelligencev1p1beta1_textsegment)
  * text `string`: The detected text.
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p1beta1_TextFrame
* GoogleCloudVideointelligenceV1p1beta1_TextFrame `object`: Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
  * rotatedBoundingBox [GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly](#googlecloudvideointelligencev1p1beta1_normalizedboundingpoly)
  * timeOffset `string`: Timestamp of this frame.

### GoogleCloudVideointelligenceV1p1beta1_TextSegment
* GoogleCloudVideointelligenceV1p1beta1_TextSegment `object`: Video segment level annotation results for text detection.
  * confidence `number`: Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
  * frames `array`: Information related to the frames where OCR detected text appears.
    * items [GoogleCloudVideointelligenceV1p1beta1_TextFrame](#googlecloudvideointelligencev1p1beta1_textframe)
  * segment [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)

### GoogleCloudVideointelligenceV1p1beta1_TimestampedObject
* GoogleCloudVideointelligenceV1p1beta1_TimestampedObject `object`: For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.
  * attributes `array`: Optional. The attributes of the object in the bounding box.
    * items [GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute](#googlecloudvideointelligencev1p1beta1_detectedattribute)
  * landmarks `array`: Optional. The detected landmarks.
    * items [GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark](#googlecloudvideointelligencev1p1beta1_detectedlandmark)
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox](#googlecloudvideointelligencev1p1beta1_normalizedboundingbox)
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.

### GoogleCloudVideointelligenceV1p1beta1_Track
* GoogleCloudVideointelligenceV1p1beta1_Track `object`: A track of an object instance.
  * attributes `array`: Optional. Attributes in the track level.
    * items [GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute](#googlecloudvideointelligencev1p1beta1_detectedattribute)
  * confidence `number`: Optional. The confidence score of the tracked object.
  * segment [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)
  * timestampedObjects `array`: The object with timestamp and attributes per frame in the track.
    * items [GoogleCloudVideointelligenceV1p1beta1_TimestampedObject](#googlecloudvideointelligencev1p1beta1_timestampedobject)

### GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress
* GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress `object`: Annotation progress for a single video.
  * feature `string` (values: FEATURE_UNSPECIFIED, LABEL_DETECTION, SHOT_CHANGE_DETECTION, EXPLICIT_CONTENT_DETECTION, FACE_DETECTION, SPEECH_TRANSCRIPTION, TEXT_DETECTION, OBJECT_TRACKING, LOGO_RECOGNITION, PERSON_DETECTION): Specifies which feature is being tracked if the request contains more than one feature.
  * inputUri `string`: Video file location in [Cloud Storage](https://cloud.google.com/storage/).
  * progressPercent `integer`: Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
  * segment [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)
  * startTime `string`: Time when the request was received.
  * updateTime `string`: Time of the most recent update.

### GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults
* GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults `object`: Annotation results for a single video.
  * error [GoogleRpc_Status](#googlerpc_status)
  * explicitAnnotation [GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation](#googlecloudvideointelligencev1p1beta1_explicitcontentannotation)
  * faceAnnotations `array`: Deprecated. Please use `face_detection_annotations` instead.
    * items [GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation](#googlecloudvideointelligencev1p1beta1_faceannotation)
  * faceDetectionAnnotations `array`: Face detection annotations.
    * items [GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation](#googlecloudvideointelligencev1p1beta1_facedetectionannotation)
  * frameLabelAnnotations `array`: Label annotations on frame level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#googlecloudvideointelligencev1p1beta1_labelannotation)
  * inputUri `string`: Video file location in [Cloud Storage](https://cloud.google.com/storage/).
  * logoRecognitionAnnotations `array`: Annotations for list of logos detected, tracked and recognized in video.
    * items [GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation](#googlecloudvideointelligencev1p1beta1_logorecognitionannotation)
  * objectAnnotations `array`: Annotations for list of objects detected and tracked in video.
    * items [GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation](#googlecloudvideointelligencev1p1beta1_objecttrackingannotation)
  * personDetectionAnnotations `array`: Person detection annotations.
    * items [GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation](#googlecloudvideointelligencev1p1beta1_persondetectionannotation)
  * segment [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)
  * segmentLabelAnnotations `array`: Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#googlecloudvideointelligencev1p1beta1_labelannotation)
  * segmentPresenceLabelAnnotations `array`: Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#googlecloudvideointelligencev1p1beta1_labelannotation)
  * shotAnnotations `array`: Shot annotations. Each shot is represented as a video segment.
    * items [GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#googlecloudvideointelligencev1p1beta1_videosegment)
  * shotLabelAnnotations `array`: Topical label annotations on shot level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#googlecloudvideointelligencev1p1beta1_labelannotation)
  * shotPresenceLabelAnnotations `array`: Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
    * items [GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#googlecloudvideointelligencev1p1beta1_labelannotation)
  * speechTranscriptions `array`: Speech transcription.
    * items [GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription](#googlecloudvideointelligencev1p1beta1_speechtranscription)
  * textAnnotations `array`: OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
    * items [GoogleCloudVideointelligenceV1p1beta1_TextAnnotation](#googlecloudvideointelligencev1p1beta1_textannotation)

### GoogleCloudVideointelligenceV1p1beta1_VideoSegment
* GoogleCloudVideointelligenceV1p1beta1_VideoSegment `object`: Video segment.
  * endTimeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
  * startTimeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).

### GoogleCloudVideointelligenceV1p1beta1_WordInfo
* GoogleCloudVideointelligenceV1p1beta1_WordInfo `object`: Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
  * endTime `string`: Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
  * speakerTag `integer`: Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.
  * startTime `string`: Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
  * word `string`: The word corresponding to this set of information.

### GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgress
* GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgress `object`: Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * annotationProgress `array`: Progress metadata for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress](#googlecloudvideointelligencev1p2beta1_videoannotationprogress)

### GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponse
* GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponse `object`: Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * annotationResults `array`: Annotation results for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults](#googlecloudvideointelligencev1p2beta1_videoannotationresults)

### GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute
* GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute `object`: A generic detected attribute represented by name in string format.
  * confidence `number`: Detected attribute confidence. Range [0, 1].
  * name `string`: The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
  * value `string`: Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.

### GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark
* GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark `object`: A generic detected landmark represented by name in string format and a 2D location.
  * confidence `number`: The confidence score of the detected landmark. Range [0, 1].
  * name `string`: The name of this landmark, for example, left_hand, right_shoulder.
  * point [GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex](#googlecloudvideointelligencev1p2beta1_normalizedvertex)

### GoogleCloudVideointelligenceV1p2beta1_Entity
* GoogleCloudVideointelligenceV1p2beta1_Entity `object`: Detected entity from video analysis.
  * description `string`: Textual description, e.g., `Fixed-gear bicycle`.
  * entityId `string`: Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
  * languageCode `string`: Language code for `description` in BCP-47 format.

### GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation
* GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation `object`: Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
  * frames `array`: All video frames where explicit content was detected.
    * items [GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame](#googlecloudvideointelligencev1p2beta1_explicitcontentframe)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame
* GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame `object`: Video frame level annotation results for explicit content.
  * pornographyLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of the pornography content..
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation
* GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation `object`: Deprecated. No effect.
  * frames `array`: All video frames where a face was detected.
    * items [GoogleCloudVideointelligenceV1p2beta1_FaceFrame](#googlecloudvideointelligencev1p2beta1_faceframe)
  * segments `array`: All video segments where a face was detected.
    * items [GoogleCloudVideointelligenceV1p2beta1_FaceSegment](#googlecloudvideointelligencev1p2beta1_facesegment)
  * thumbnail `string`: Thumbnail of a representative face view (in JPEG format).

### GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation
* GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation `object`: Face detection annotation.
  * thumbnail `string`: The thumbnail of a person's face.
  * tracks `array`: The face tracks with attributes.
    * items [GoogleCloudVideointelligenceV1p2beta1_Track](#googlecloudvideointelligencev1p2beta1_track)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p2beta1_FaceFrame
* GoogleCloudVideointelligenceV1p2beta1_FaceFrame `object`: Deprecated. No effect.
  * normalizedBoundingBoxes `array`: Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
    * items [GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox](#googlecloudvideointelligencev1p2beta1_normalizedboundingbox)
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1p2beta1_FaceSegment
* GoogleCloudVideointelligenceV1p2beta1_FaceSegment `object`: Video segment level annotation results for face detection.
  * segment [GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#googlecloudvideointelligencev1p2beta1_videosegment)

### GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation
* GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation `object`: Label annotation.
  * categoryEntities `array`: Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.
    * items [GoogleCloudVideointelligenceV1p2beta1_Entity](#googlecloudvideointelligencev1p2beta1_entity)
  * entity [GoogleCloudVideointelligenceV1p2beta1_Entity](#googlecloudvideointelligencev1p2beta1_entity)
  * frames `array`: All video frames where a label was detected.
    * items [GoogleCloudVideointelligenceV1p2beta1_LabelFrame](#googlecloudvideointelligencev1p2beta1_labelframe)
  * segments `array`: All video segments where a label was detected.
    * items [GoogleCloudVideointelligenceV1p2beta1_LabelSegment](#googlecloudvideointelligencev1p2beta1_labelsegment)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p2beta1_LabelFrame
* GoogleCloudVideointelligenceV1p2beta1_LabelFrame `object`: Video frame level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1p2beta1_LabelSegment
* GoogleCloudVideointelligenceV1p2beta1_LabelSegment `object`: Video segment level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * segment [GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#googlecloudvideointelligencev1p2beta1_videosegment)

### GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation
* GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation `object`: Annotation corresponding to one detected, tracked and recognized logo class.
  * entity [GoogleCloudVideointelligenceV1p2beta1_Entity](#googlecloudvideointelligencev1p2beta1_entity)
  * segments `array`: All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
    * items [GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#googlecloudvideointelligencev1p2beta1_videosegment)
  * tracks `array`: All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
    * items [GoogleCloudVideointelligenceV1p2beta1_Track](#googlecloudvideointelligencev1p2beta1_track)

### GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox
* GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox `object`: Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
  * bottom `number`: Bottom Y coordinate.
  * left `number`: Left X coordinate.
  * right `number`: Right X coordinate.
  * top `number`: Top Y coordinate.

### GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly
* GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly `object`: Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.
  * vertices `array`: Normalized vertices of the bounding polygon.
    * items [GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex](#googlecloudvideointelligencev1p2beta1_normalizedvertex)

### GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex
* GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation
* GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation `object`: Annotations corresponding to one tracked object.
  * confidence `number`: Object category's labeling confidence of this track.
  * entity [GoogleCloudVideointelligenceV1p2beta1_Entity](#googlecloudvideointelligencev1p2beta1_entity)
  * frames `array`: Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
    * items [GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame](#googlecloudvideointelligencev1p2beta1_objecttrackingframe)
  * segment [GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#googlecloudvideointelligencev1p2beta1_videosegment)
  * trackId `string`: Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame
* GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame `object`: Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox](#googlecloudvideointelligencev1p2beta1_normalizedboundingbox)
  * timeOffset `string`: The timestamp of the frame in microseconds.

### GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation
* GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation `object`: Person detection annotation per video.
  * tracks `array`: The detected tracks of a person.
    * items [GoogleCloudVideointelligenceV1p2beta1_Track](#googlecloudvideointelligencev1p2beta1_track)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative
* GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative `object`: Alternative hypotheses (a.k.a. n-best list).
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
  * transcript `string`: Transcript text representing the words that the user spoke.
  * words `array`: Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.
    * items [GoogleCloudVideointelligenceV1p2beta1_WordInfo](#googlecloudvideointelligencev1p2beta1_wordinfo)

### GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription
* GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription `object`: A speech recognition result corresponding to a portion of the audio.
  * alternatives `array`: May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
    * items [GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative](#googlecloudvideointelligencev1p2beta1_speechrecognitionalternative)
  * languageCode `string`: Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.

### GoogleCloudVideointelligenceV1p2beta1_TextAnnotation
* GoogleCloudVideointelligenceV1p2beta1_TextAnnotation `object`: Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
  * segments `array`: All video segments where OCR detected text appears.
    * items [GoogleCloudVideointelligenceV1p2beta1_TextSegment](#googlecloudvideointelligencev1p2beta1_textsegment)
  * text `string`: The detected text.
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p2beta1_TextFrame
* GoogleCloudVideointelligenceV1p2beta1_TextFrame `object`: Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
  * rotatedBoundingBox [GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly](#googlecloudvideointelligencev1p2beta1_normalizedboundingpoly)
  * timeOffset `string`: Timestamp of this frame.

### GoogleCloudVideointelligenceV1p2beta1_TextSegment
* GoogleCloudVideointelligenceV1p2beta1_TextSegment `object`: Video segment level annotation results for text detection.
  * confidence `number`: Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
  * frames `array`: Information related to the frames where OCR detected text appears.
    * items [GoogleCloudVideointelligenceV1p2beta1_TextFrame](#googlecloudvideointelligencev1p2beta1_textframe)
  * segment [GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#googlecloudvideointelligencev1p2beta1_videosegment)

### GoogleCloudVideointelligenceV1p2beta1_TimestampedObject
* GoogleCloudVideointelligenceV1p2beta1_TimestampedObject `object`: For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.
  * attributes `array`: Optional. The attributes of the object in the bounding box.
    * items [GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute](#googlecloudvideointelligencev1p2beta1_detectedattribute)
  * landmarks `array`: Optional. The detected landmarks.
    * items [GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark](#googlecloudvideointelligencev1p2beta1_detectedlandmark)
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox](#googlecloudvideointelligencev1p2beta1_normalizedboundingbox)
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.

### GoogleCloudVideointelligenceV1p2beta1_Track
* GoogleCloudVideointelligenceV1p2beta1_Track `object`: A track of an object instance.
  * attributes `array`: Optional. Attributes in the track level.
    * items [GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute](#googlecloudvideointelligencev1p2beta1_detectedattribute)
  * confidence `number`: Optional. The confidence score of the tracked object.
  * segment [GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#googlecloudvideointelligencev1p2beta1_videosegment)
  * timestampedObjects `array`: The object with timestamp and attributes per frame in the track.
    * items [GoogleCloudVideointelligenceV1p2beta1_TimestampedObject](#googlecloudvideointelligencev1p2beta1_timestampedobject)

### GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress
* GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress `object`: Annotation progress for a single video.
  * feature `string` (values: FEATURE_UNSPECIFIED, LABEL_DETECTION, SHOT_CHANGE_DETECTION, EXPLICIT_CONTENT_DETECTION, FACE_DETECTION, SPEECH_TRANSCRIPTION, TEXT_DETECTION, OBJECT_TRACKING, LOGO_RECOGNITION, PERSON_DETECTION): Specifies which feature is being tracked if the request contains more than one feature.
  * inputUri `string`: Video file location in [Cloud Storage](https://cloud.google.com/storage/).
  * progressPercent `integer`: Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
  * segment [GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#googlecloudvideointelligencev1p2beta1_videosegment)
  * startTime `string`: Time when the request was received.
  * updateTime `string`: Time of the most recent update.

### GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults
* GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults `object`: Annotation results for a single video.
  * error [GoogleRpc_Status](#googlerpc_status)
  * explicitAnnotation [GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation](#googlecloudvideointelligencev1p2beta1_explicitcontentannotation)
  * faceAnnotations `array`: Deprecated. Please use `face_detection_annotations` instead.
    * items [GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation](#googlecloudvideointelligencev1p2beta1_faceannotation)
  * faceDetectionAnnotations `array`: Face detection annotations.
    * items [GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation](#googlecloudvideointelligencev1p2beta1_facedetectionannotation)
  * frameLabelAnnotations `array`: Label annotations on frame level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation](#googlecloudvideointelligencev1p2beta1_labelannotation)
  * inputUri `string`: Video file location in [Cloud Storage](https://cloud.google.com/storage/).
  * logoRecognitionAnnotations `array`: Annotations for list of logos detected, tracked and recognized in video.
    * items [GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation](#googlecloudvideointelligencev1p2beta1_logorecognitionannotation)
  * objectAnnotations `array`: Annotations for list of objects detected and tracked in video.
    * items [GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation](#googlecloudvideointelligencev1p2beta1_objecttrackingannotation)
  * personDetectionAnnotations `array`: Person detection annotations.
    * items [GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation](#googlecloudvideointelligencev1p2beta1_persondetectionannotation)
  * segment [GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#googlecloudvideointelligencev1p2beta1_videosegment)
  * segmentLabelAnnotations `array`: Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation](#googlecloudvideointelligencev1p2beta1_labelannotation)
  * segmentPresenceLabelAnnotations `array`: Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
    * items [GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation](#googlecloudvideointelligencev1p2beta1_labelannotation)
  * shotAnnotations `array`: Shot annotations. Each shot is represented as a video segment.
    * items [GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#googlecloudvideointelligencev1p2beta1_videosegment)
  * shotLabelAnnotations `array`: Topical label annotations on shot level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation](#googlecloudvideointelligencev1p2beta1_labelannotation)
  * shotPresenceLabelAnnotations `array`: Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
    * items [GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation](#googlecloudvideointelligencev1p2beta1_labelannotation)
  * speechTranscriptions `array`: Speech transcription.
    * items [GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription](#googlecloudvideointelligencev1p2beta1_speechtranscription)
  * textAnnotations `array`: OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
    * items [GoogleCloudVideointelligenceV1p2beta1_TextAnnotation](#googlecloudvideointelligencev1p2beta1_textannotation)

### GoogleCloudVideointelligenceV1p2beta1_VideoSegment
* GoogleCloudVideointelligenceV1p2beta1_VideoSegment `object`: Video segment.
  * endTimeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
  * startTimeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).

### GoogleCloudVideointelligenceV1p2beta1_WordInfo
* GoogleCloudVideointelligenceV1p2beta1_WordInfo `object`: Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
  * endTime `string`: Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
  * speakerTag `integer`: Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.
  * startTime `string`: Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
  * word `string`: The word corresponding to this set of information.

### GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgress
* GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgress `object`: Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * annotationProgress `array`: Progress metadata for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress](#googlecloudvideointelligencev1p3beta1_videoannotationprogress)

### GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoRequest
* GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoRequest `object`: Video annotation request.
  * features `array`: Required. Requested video annotation features.
    * items `string` (values: FEATURE_UNSPECIFIED, LABEL_DETECTION, SHOT_CHANGE_DETECTION, EXPLICIT_CONTENT_DETECTION, FACE_DETECTION, SPEECH_TRANSCRIPTION, TEXT_DETECTION, OBJECT_TRACKING, LOGO_RECOGNITION, CELEBRITY_RECOGNITION, PERSON_DETECTION)
  * inputContent `string`: The video data bytes. If unset, the input video(s) should be specified via the `input_uri`. If set, `input_uri` must be unset.
  * inputUri `string`: Input video location. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. URIs must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). To identify multiple videos, a video URI may include wildcards in the `object-id`. Supported wildcards: '*' to match 0 or more characters; '?' to match 1 character. If unset, the input video should be embedded in the request as `input_content`. If set, `input_content` must be unset.
  * locationId `string`: Optional. Cloud region where annotation should take place. Supported cloud regions are: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region is specified, the region will be determined based on video file location.
  * outputUri `string`: Optional. Location where the output (in JSON format) should be stored. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. These must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).
  * videoContext [GoogleCloudVideointelligenceV1p3beta1_VideoContext](#googlecloudvideointelligencev1p3beta1_videocontext)

### GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponse
* GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponse `object`: Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * annotationResults `array`: Annotation results for all videos specified in `AnnotateVideoRequest`.
    * items [GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults](#googlecloudvideointelligencev1p3beta1_videoannotationresults)

### GoogleCloudVideointelligenceV1p3beta1_Celebrity
* GoogleCloudVideointelligenceV1p3beta1_Celebrity `object`: Celebrity definition.
  * description `string`: Textual description of additional information about the celebrity, if applicable.
  * displayName `string`: The celebrity name.
  * name `string`: The resource name of the celebrity. Have the format `video-intelligence/kg-mid` indicates a celebrity from preloaded gallery. kg-mid is the id in Google knowledge graph, which is unique for the celebrity.

### GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation
* GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation `object`: Celebrity recognition annotation per video.
  * celebrityTracks `array`: The tracks detected from the input video, including recognized celebrities and other detected faces in the video.
    * items [GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack](#googlecloudvideointelligencev1p3beta1_celebritytrack)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack
* GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack `object`: The annotation result of a celebrity face track. RecognizedCelebrity field could be empty if the face track does not have any matched celebrities.
  * celebrities `array`: Top N match of the celebrities for the face in this track.
    * items [GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity](#googlecloudvideointelligencev1p3beta1_recognizedcelebrity)
  * faceTrack [GoogleCloudVideointelligenceV1p3beta1_Track](#googlecloudvideointelligencev1p3beta1_track)

### GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute
* GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute `object`: A generic detected attribute represented by name in string format.
  * confidence `number`: Detected attribute confidence. Range [0, 1].
  * name `string`: The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
  * value `string`: Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.

### GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark
* GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark `object`: A generic detected landmark represented by name in string format and a 2D location.
  * confidence `number`: The confidence score of the detected landmark. Range [0, 1].
  * name `string`: The name of this landmark, for example, left_hand, right_shoulder.
  * point [GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex](#googlecloudvideointelligencev1p3beta1_normalizedvertex)

### GoogleCloudVideointelligenceV1p3beta1_Entity
* GoogleCloudVideointelligenceV1p3beta1_Entity `object`: Detected entity from video analysis.
  * description `string`: Textual description, e.g., `Fixed-gear bicycle`.
  * entityId `string`: Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
  * languageCode `string`: Language code for `description` in BCP-47 format.

### GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation
* GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation `object`: Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
  * frames `array`: All video frames where explicit content was detected.
    * items [GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame](#googlecloudvideointelligencev1p3beta1_explicitcontentframe)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p3beta1_ExplicitContentDetectionConfig
* GoogleCloudVideointelligenceV1p3beta1_ExplicitContentDetectionConfig `object`: Config for EXPLICIT_CONTENT_DETECTION.
  * model `string`: Model to use for explicit content detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".

### GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame
* GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame `object`: Video frame level annotation results for explicit content.
  * pornographyLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood of the pornography content..
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation
* GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation `object`: Deprecated. No effect.
  * frames `array`: All video frames where a face was detected.
    * items [GoogleCloudVideointelligenceV1p3beta1_FaceFrame](#googlecloudvideointelligencev1p3beta1_faceframe)
  * segments `array`: All video segments where a face was detected.
    * items [GoogleCloudVideointelligenceV1p3beta1_FaceSegment](#googlecloudvideointelligencev1p3beta1_facesegment)
  * thumbnail `string`: Thumbnail of a representative face view (in JPEG format).

### GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation
* GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation `object`: Face detection annotation.
  * thumbnail `string`: The thumbnail of a person's face.
  * tracks `array`: The face tracks with attributes.
    * items [GoogleCloudVideointelligenceV1p3beta1_Track](#googlecloudvideointelligencev1p3beta1_track)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p3beta1_FaceDetectionConfig
* GoogleCloudVideointelligenceV1p3beta1_FaceDetectionConfig `object`: Config for FACE_DETECTION.
  * includeAttributes `boolean`: Whether to enable face attributes detection, such as glasses, dark_glasses, mouth_open etc. Ignored if 'include_bounding_boxes' is set to false.
  * includeBoundingBoxes `boolean`: Whether bounding boxes are included in the face annotation output.
  * model `string`: Model to use for face detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".

### GoogleCloudVideointelligenceV1p3beta1_FaceFrame
* GoogleCloudVideointelligenceV1p3beta1_FaceFrame `object`: Deprecated. No effect.
  * normalizedBoundingBoxes `array`: Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
    * items [GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox](#googlecloudvideointelligencev1p3beta1_normalizedboundingbox)
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1p3beta1_FaceSegment
* GoogleCloudVideointelligenceV1p3beta1_FaceSegment `object`: Video segment level annotation results for face detection.
  * segment [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)

### GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation
* GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation `object`: Label annotation.
  * categoryEntities `array`: Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.
    * items [GoogleCloudVideointelligenceV1p3beta1_Entity](#googlecloudvideointelligencev1p3beta1_entity)
  * entity [GoogleCloudVideointelligenceV1p3beta1_Entity](#googlecloudvideointelligencev1p3beta1_entity)
  * frames `array`: All video frames where a label was detected.
    * items [GoogleCloudVideointelligenceV1p3beta1_LabelFrame](#googlecloudvideointelligencev1p3beta1_labelframe)
  * segments `array`: All video segments where a label was detected.
    * items [GoogleCloudVideointelligenceV1p3beta1_LabelSegment](#googlecloudvideointelligencev1p3beta1_labelsegment)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p3beta1_LabelDetectionConfig
* GoogleCloudVideointelligenceV1p3beta1_LabelDetectionConfig `object`: Config for LABEL_DETECTION.
  * frameConfidenceThreshold `number`: The confidence threshold we perform filtering on the labels from frame-level detection. If not set, it is set to 0.4 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model.
  * labelDetectionMode `string` (values: LABEL_DETECTION_MODE_UNSPECIFIED, SHOT_MODE, FRAME_MODE, SHOT_AND_FRAME_MODE): What labels should be detected with LABEL_DETECTION, in addition to video-level labels or segment-level labels. If unspecified, defaults to `SHOT_MODE`.
  * model `string`: Model to use for label detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
  * stationaryCamera `boolean`: Whether the video has been shot from a stationary (i.e., non-moving) camera. When set to true, might improve detection accuracy for moving objects. Should be used with `SHOT_AND_FRAME_MODE` enabled.
  * videoConfidenceThreshold `number`: The confidence threshold we perform filtering on the labels from video-level and shot-level detections. If not set, it's set to 0.3 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model.

### GoogleCloudVideointelligenceV1p3beta1_LabelFrame
* GoogleCloudVideointelligenceV1p3beta1_LabelFrame `object`: Video frame level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.

### GoogleCloudVideointelligenceV1p3beta1_LabelSegment
* GoogleCloudVideointelligenceV1p3beta1_LabelSegment `object`: Video segment level annotation results for label detection.
  * confidence `number`: Confidence that the label is accurate. Range: [0, 1].
  * segment [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)

### GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation
* GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation `object`: Annotation corresponding to one detected, tracked and recognized logo class.
  * entity [GoogleCloudVideointelligenceV1p3beta1_Entity](#googlecloudvideointelligencev1p3beta1_entity)
  * segments `array`: All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
    * items [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)
  * tracks `array`: All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
    * items [GoogleCloudVideointelligenceV1p3beta1_Track](#googlecloudvideointelligencev1p3beta1_track)

### GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox
* GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox `object`: Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
  * bottom `number`: Bottom Y coordinate.
  * left `number`: Left X coordinate.
  * right `number`: Right X coordinate.
  * top `number`: Top Y coordinate.

### GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly
* GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly `object`: Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.
  * vertices `array`: Normalized vertices of the bounding polygon.
    * items [GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex](#googlecloudvideointelligencev1p3beta1_normalizedvertex)

### GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex
* GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation
* GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation `object`: Annotations corresponding to one tracked object.
  * confidence `number`: Object category's labeling confidence of this track.
  * entity [GoogleCloudVideointelligenceV1p3beta1_Entity](#googlecloudvideointelligencev1p3beta1_entity)
  * frames `array`: Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
    * items [GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame](#googlecloudvideointelligencev1p3beta1_objecttrackingframe)
  * segment [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)
  * trackId `string`: Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingConfig
* GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingConfig `object`: Config for OBJECT_TRACKING.
  * model `string`: Model to use for object tracking. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".

### GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame
* GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame `object`: Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox](#googlecloudvideointelligencev1p3beta1_normalizedboundingbox)
  * timeOffset `string`: The timestamp of the frame in microseconds.

### GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation
* GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation `object`: Person detection annotation per video.
  * tracks `array`: The detected tracks of a person.
    * items [GoogleCloudVideointelligenceV1p3beta1_Track](#googlecloudvideointelligencev1p3beta1_track)
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p3beta1_PersonDetectionConfig
* GoogleCloudVideointelligenceV1p3beta1_PersonDetectionConfig `object`: Config for PERSON_DETECTION.
  * includeAttributes `boolean`: Whether to enable person attributes detection, such as cloth color (black, blue, etc), type (coat, dress, etc), pattern (plain, floral, etc), hair, etc. Ignored if 'include_bounding_boxes' is set to false.
  * includeBoundingBoxes `boolean`: Whether bounding boxes are included in the person detection annotation output.
  * includePoseLandmarks `boolean`: Whether to enable pose landmarks detection. Ignored if 'include_bounding_boxes' is set to false.

### GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity
* GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity `object`: The recognized celebrity with confidence score.
  * celebrity [GoogleCloudVideointelligenceV1p3beta1_Celebrity](#googlecloudvideointelligencev1p3beta1_celebrity)
  * confidence `number`: Recognition confidence. Range [0, 1].

### GoogleCloudVideointelligenceV1p3beta1_ShotChangeDetectionConfig
* GoogleCloudVideointelligenceV1p3beta1_ShotChangeDetectionConfig `object`: Config for SHOT_CHANGE_DETECTION.
  * model `string`: Model to use for shot change detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".

### GoogleCloudVideointelligenceV1p3beta1_SpeechContext
* GoogleCloudVideointelligenceV1p3beta1_SpeechContext `object`: Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
  * phrases `array`: Optional. A list of strings containing words and phrases "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech/limits#content).
    * items `string`

### GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative
* GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative `object`: Alternative hypotheses (a.k.a. n-best list).
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
  * transcript `string`: Transcript text representing the words that the user spoke.
  * words `array`: Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.
    * items [GoogleCloudVideointelligenceV1p3beta1_WordInfo](#googlecloudvideointelligencev1p3beta1_wordinfo)

### GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription
* GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription `object`: A speech recognition result corresponding to a portion of the audio.
  * alternatives `array`: May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
    * items [GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative](#googlecloudvideointelligencev1p3beta1_speechrecognitionalternative)
  * languageCode `string`: Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.

### GoogleCloudVideointelligenceV1p3beta1_SpeechTranscriptionConfig
* GoogleCloudVideointelligenceV1p3beta1_SpeechTranscriptionConfig `object`: Config for SPEECH_TRANSCRIPTION.
  * audioTracks `array`: Optional. For file formats, such as MXF or MKV, supporting multiple audio tracks, specify up to two tracks. Default: track 0.
    * items `integer`
  * diarizationSpeakerCount `integer`: Optional. If set, specifies the estimated number of speakers in the conversation. If not set, defaults to '2'. Ignored unless enable_speaker_diarization is set to true.
  * enableAutomaticPunctuation `boolean`: Optional. If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default 'false' value does not add punctuation to result hypotheses. NOTE: "This is currently offered as an experimental service, complimentary to all users. In the future this may be exclusively available as a premium feature."
  * enableSpeakerDiarization `boolean`: Optional. If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_tag provided in the WordInfo. Note: When this is true, we send all the words from the beginning of the audio for the top alternative in every consecutive response. This is done in order to improve our speaker tags as our models learn to identify the speakers in the conversation over time.
  * enableWordConfidence `boolean`: Optional. If `true`, the top result includes a list of words and the confidence for those words. If `false`, no word-level confidence information is returned. The default is `false`.
  * filterProfanity `boolean`: Optional. If set to `true`, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. "f***". If set to `false` or omitted, profanities won't be filtered out.
  * languageCode `string`: Required. *Required* The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See [Language Support](https://cloud.google.com/speech/docs/languages) for a list of the currently supported language codes.
  * maxAlternatives `integer`: Optional. Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of `SpeechRecognitionAlternative` messages within each `SpeechTranscription`. The server may return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of one. If omitted, will return a maximum of one.
  * speechContexts `array`: Optional. A means to provide context to assist the speech recognition.
    * items [GoogleCloudVideointelligenceV1p3beta1_SpeechContext](#googlecloudvideointelligencev1p3beta1_speechcontext)

### GoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponse
* GoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponse `object`: `StreamingAnnotateVideoResponse` is the only message returned to the client by `StreamingAnnotateVideo`. A series of zero or more `StreamingAnnotateVideoResponse` messages are streamed back to the client.
  * annotationResults [GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults](#googlecloudvideointelligencev1p3beta1_streamingvideoannotationresults)
  * annotationResultsUri `string`: Google Cloud Storage URI that stores annotation results of one streaming session in JSON format. It is the annotation_result_storage_directory from the request followed by '/cloud_project_number-session_id'.
  * error [GoogleRpc_Status](#googlerpc_status)

### GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults
* GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults `object`: Streaming annotation results corresponding to a portion of the video that is currently being processed. Only ONE type of annotation will be specified in the response.
  * explicitAnnotation [GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation](#googlecloudvideointelligencev1p3beta1_explicitcontentannotation)
  * frameTimestamp `string`: Timestamp of the processed frame in microseconds.
  * labelAnnotations `array`: Label annotation results.
    * items [GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#googlecloudvideointelligencev1p3beta1_labelannotation)
  * objectAnnotations `array`: Object tracking results.
    * items [GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation](#googlecloudvideointelligencev1p3beta1_objecttrackingannotation)
  * shotAnnotations `array`: Shot annotation results. Each shot is represented as a video segment.
    * items [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)

### GoogleCloudVideointelligenceV1p3beta1_TextAnnotation
* GoogleCloudVideointelligenceV1p3beta1_TextAnnotation `object`: Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
  * segments `array`: All video segments where OCR detected text appears.
    * items [GoogleCloudVideointelligenceV1p3beta1_TextSegment](#googlecloudvideointelligencev1p3beta1_textsegment)
  * text `string`: The detected text.
  * version `string`: Feature version.

### GoogleCloudVideointelligenceV1p3beta1_TextDetectionConfig
* GoogleCloudVideointelligenceV1p3beta1_TextDetectionConfig `object`: Config for TEXT_DETECTION.
  * languageHints `array`: Language hint can be specified if the language to be detected is known a priori. It can increase the accuracy of the detection. Language hint must be language code in BCP-47 format. Automatic language detection is performed if no hint is provided.
    * items `string`
  * model `string`: Model to use for text detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".

### GoogleCloudVideointelligenceV1p3beta1_TextFrame
* GoogleCloudVideointelligenceV1p3beta1_TextFrame `object`: Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
  * rotatedBoundingBox [GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly](#googlecloudvideointelligencev1p3beta1_normalizedboundingpoly)
  * timeOffset `string`: Timestamp of this frame.

### GoogleCloudVideointelligenceV1p3beta1_TextSegment
* GoogleCloudVideointelligenceV1p3beta1_TextSegment `object`: Video segment level annotation results for text detection.
  * confidence `number`: Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
  * frames `array`: Information related to the frames where OCR detected text appears.
    * items [GoogleCloudVideointelligenceV1p3beta1_TextFrame](#googlecloudvideointelligencev1p3beta1_textframe)
  * segment [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)

### GoogleCloudVideointelligenceV1p3beta1_TimestampedObject
* GoogleCloudVideointelligenceV1p3beta1_TimestampedObject `object`: For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.
  * attributes `array`: Optional. The attributes of the object in the bounding box.
    * items [GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute](#googlecloudvideointelligencev1p3beta1_detectedattribute)
  * landmarks `array`: Optional. The detected landmarks.
    * items [GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark](#googlecloudvideointelligencev1p3beta1_detectedlandmark)
  * normalizedBoundingBox [GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox](#googlecloudvideointelligencev1p3beta1_normalizedboundingbox)
  * timeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.

### GoogleCloudVideointelligenceV1p3beta1_Track
* GoogleCloudVideointelligenceV1p3beta1_Track `object`: A track of an object instance.
  * attributes `array`: Optional. Attributes in the track level.
    * items [GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute](#googlecloudvideointelligencev1p3beta1_detectedattribute)
  * confidence `number`: Optional. The confidence score of the tracked object.
  * segment [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)
  * timestampedObjects `array`: The object with timestamp and attributes per frame in the track.
    * items [GoogleCloudVideointelligenceV1p3beta1_TimestampedObject](#googlecloudvideointelligencev1p3beta1_timestampedobject)

### GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress
* GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress `object`: Annotation progress for a single video.
  * feature `string` (values: FEATURE_UNSPECIFIED, LABEL_DETECTION, SHOT_CHANGE_DETECTION, EXPLICIT_CONTENT_DETECTION, FACE_DETECTION, SPEECH_TRANSCRIPTION, TEXT_DETECTION, OBJECT_TRACKING, LOGO_RECOGNITION, CELEBRITY_RECOGNITION, PERSON_DETECTION): Specifies which feature is being tracked if the request contains more than one feature.
  * inputUri `string`: Video file location in [Cloud Storage](https://cloud.google.com/storage/).
  * progressPercent `integer`: Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
  * segment [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)
  * startTime `string`: Time when the request was received.
  * updateTime `string`: Time of the most recent update.

### GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults
* GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults `object`: Annotation results for a single video.
  * celebrityRecognitionAnnotations [GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation](#googlecloudvideointelligencev1p3beta1_celebrityrecognitionannotation)
  * error [GoogleRpc_Status](#googlerpc_status)
  * explicitAnnotation [GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation](#googlecloudvideointelligencev1p3beta1_explicitcontentannotation)
  * faceAnnotations `array`: Deprecated. Please use `face_detection_annotations` instead.
    * items [GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation](#googlecloudvideointelligencev1p3beta1_faceannotation)
  * faceDetectionAnnotations `array`: Face detection annotations.
    * items [GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation](#googlecloudvideointelligencev1p3beta1_facedetectionannotation)
  * frameLabelAnnotations `array`: Label annotations on frame level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#googlecloudvideointelligencev1p3beta1_labelannotation)
  * inputUri `string`: Video file location in [Cloud Storage](https://cloud.google.com/storage/).
  * logoRecognitionAnnotations `array`: Annotations for list of logos detected, tracked and recognized in video.
    * items [GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation](#googlecloudvideointelligencev1p3beta1_logorecognitionannotation)
  * objectAnnotations `array`: Annotations for list of objects detected and tracked in video.
    * items [GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation](#googlecloudvideointelligencev1p3beta1_objecttrackingannotation)
  * personDetectionAnnotations `array`: Person detection annotations.
    * items [GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation](#googlecloudvideointelligencev1p3beta1_persondetectionannotation)
  * segment [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)
  * segmentLabelAnnotations `array`: Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#googlecloudvideointelligencev1p3beta1_labelannotation)
  * segmentPresenceLabelAnnotations `array`: Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
    * items [GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#googlecloudvideointelligencev1p3beta1_labelannotation)
  * shotAnnotations `array`: Shot annotations. Each shot is represented as a video segment.
    * items [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)
  * shotLabelAnnotations `array`: Topical label annotations on shot level. There is exactly one element for each unique label.
    * items [GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#googlecloudvideointelligencev1p3beta1_labelannotation)
  * shotPresenceLabelAnnotations `array`: Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
    * items [GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#googlecloudvideointelligencev1p3beta1_labelannotation)
  * speechTranscriptions `array`: Speech transcription.
    * items [GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription](#googlecloudvideointelligencev1p3beta1_speechtranscription)
  * textAnnotations `array`: OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
    * items [GoogleCloudVideointelligenceV1p3beta1_TextAnnotation](#googlecloudvideointelligencev1p3beta1_textannotation)

### GoogleCloudVideointelligenceV1p3beta1_VideoContext
* GoogleCloudVideointelligenceV1p3beta1_VideoContext `object`: Video context and/or feature-specific parameters.
  * explicitContentDetectionConfig [GoogleCloudVideointelligenceV1p3beta1_ExplicitContentDetectionConfig](#googlecloudvideointelligencev1p3beta1_explicitcontentdetectionconfig)
  * faceDetectionConfig [GoogleCloudVideointelligenceV1p3beta1_FaceDetectionConfig](#googlecloudvideointelligencev1p3beta1_facedetectionconfig)
  * labelDetectionConfig [GoogleCloudVideointelligenceV1p3beta1_LabelDetectionConfig](#googlecloudvideointelligencev1p3beta1_labeldetectionconfig)
  * objectTrackingConfig [GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingConfig](#googlecloudvideointelligencev1p3beta1_objecttrackingconfig)
  * personDetectionConfig [GoogleCloudVideointelligenceV1p3beta1_PersonDetectionConfig](#googlecloudvideointelligencev1p3beta1_persondetectionconfig)
  * segments `array`: Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.
    * items [GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#googlecloudvideointelligencev1p3beta1_videosegment)
  * shotChangeDetectionConfig [GoogleCloudVideointelligenceV1p3beta1_ShotChangeDetectionConfig](#googlecloudvideointelligencev1p3beta1_shotchangedetectionconfig)
  * speechTranscriptionConfig [GoogleCloudVideointelligenceV1p3beta1_SpeechTranscriptionConfig](#googlecloudvideointelligencev1p3beta1_speechtranscriptionconfig)
  * textDetectionConfig [GoogleCloudVideointelligenceV1p3beta1_TextDetectionConfig](#googlecloudvideointelligencev1p3beta1_textdetectionconfig)

### GoogleCloudVideointelligenceV1p3beta1_VideoSegment
* GoogleCloudVideointelligenceV1p3beta1_VideoSegment `object`: Video segment.
  * endTimeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
  * startTimeOffset `string`: Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).

### GoogleCloudVideointelligenceV1p3beta1_WordInfo
* GoogleCloudVideointelligenceV1p3beta1_WordInfo `object`: Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.
  * confidence `number`: Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
  * endTime `string`: Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
  * speakerTag `integer`: Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.
  * startTime `string`: Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
  * word `string`: The word corresponding to this set of information.

### GoogleLongrunning_Operation
* GoogleLongrunning_Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [GoogleRpc_Status](#googlerpc_status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### GoogleRpc_Status
* GoogleRpc_Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.


