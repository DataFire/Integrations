# @datafire/google_vision

Client library for Cloud Vision

## Installation and Usage
```bash
npm install --save @datafire/google_vision
```
```js
let google_vision = require('@datafire/google_vision').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_vision.images.annotate({}).then(data => {
  console.log(data);
});
```

## Description

Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_vision.oauthCallback({
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
google_vision.oauthRefresh(null, context)
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

### files.asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of generic
files, such as PDF files, which may contain multiple pages and multiple
images per page. Progress and results can be retrieved through the
`google.longrunning.Operations` interface.
`Operation.metadata` contains `OperationMetadata` (metadata).
`Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).


```js
google_vision.files.asyncBatchAnnotate({}, context)
```

#### Input
* input `object`
  * body [AsyncBatchAnnotateFilesRequest](#asyncbatchannotatefilesrequest)
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
* output [Operation](#operation)

### images.annotate
Run image detection and annotation for a batch of images.


```js
google_vision.images.annotate({}, context)
```

#### Input
* input `object`
  * body [BatchAnnotateImagesRequest](#batchannotateimagesrequest)
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
* output [BatchAnnotateImagesResponse](#batchannotateimagesresponse)

### operations.delete
Deletes a long-running operation. This method indicates that the client is
no longer interested in the operation result. It does not cancel the
operation. If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.


```js
google_vision.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
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
* output [Empty](#empty)

### locations.operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_vision.locations.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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
* output [Operation](#operation)

### operations.cancel
Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.


```js
google_vision.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CancelOperationRequest](#canceloperationrequest)
  * name **required** `string`: The name of the operation resource to be cancelled.
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
* output [Empty](#empty)



## Definitions

### AnnotateFileResponse
* AnnotateFileResponse `object`: Response to a single file annotation request. A file may contain one or more
  * inputConfig [InputConfig](#inputconfig)
  * responses `array`: Individual responses to images found within the file.
    * items [AnnotateImageResponse](#annotateimageresponse)

### AnnotateImageRequest
* AnnotateImageRequest `object`: Request for performing Google Cloud Vision API tasks over a user-provided
  * features `array`: Requested features.
    * items [Feature](#feature)
  * image [Image](#image)
  * imageContext [ImageContext](#imagecontext)

### AnnotateImageResponse
* AnnotateImageResponse `object`: Response to an image annotation request.
  * context [ImageAnnotationContext](#imageannotationcontext)
  * cropHintsAnnotation [CropHintsAnnotation](#crophintsannotation)
  * error [Status](#status)
  * faceAnnotations `array`: If present, face detection has completed successfully.
    * items [FaceAnnotation](#faceannotation)
  * fullTextAnnotation [TextAnnotation](#textannotation)
  * imagePropertiesAnnotation [ImageProperties](#imageproperties)
  * labelAnnotations `array`: If present, label detection has completed successfully.
    * items [EntityAnnotation](#entityannotation)
  * landmarkAnnotations `array`: If present, landmark detection has completed successfully.
    * items [EntityAnnotation](#entityannotation)
  * logoAnnotations `array`: If present, logo detection has completed successfully.
    * items [EntityAnnotation](#entityannotation)
  * safeSearchAnnotation [SafeSearchAnnotation](#safesearchannotation)
  * textAnnotations `array`: If present, text (OCR) detection has completed successfully.
    * items [EntityAnnotation](#entityannotation)
  * webDetection [WebDetection](#webdetection)

### AsyncAnnotateFileRequest
* AsyncAnnotateFileRequest `object`: An offline file annotation request.
  * features `array`: Required. Requested features.
    * items [Feature](#feature)
  * imageContext [ImageContext](#imagecontext)
  * inputConfig [InputConfig](#inputconfig)
  * outputConfig [OutputConfig](#outputconfig)

### AsyncAnnotateFileResponse
* AsyncAnnotateFileResponse `object`: The response for a single offline file annotation request.
  * outputConfig [OutputConfig](#outputconfig)

### AsyncBatchAnnotateFilesRequest
* AsyncBatchAnnotateFilesRequest `object`: Multiple async file annotation requests are batched into a single service
  * requests `array`: Individual async file annotation requests for this batch.
    * items [AsyncAnnotateFileRequest](#asyncannotatefilerequest)

### AsyncBatchAnnotateFilesResponse
* AsyncBatchAnnotateFilesResponse `object`: Response to an async batch file annotation request.
  * responses `array`: The list of file annotation responses, one for each request in
    * items [AsyncAnnotateFileResponse](#asyncannotatefileresponse)

### BatchAnnotateImagesRequest
* BatchAnnotateImagesRequest `object`: Multiple image annotation requests are batched into a single service call.
  * requests `array`: Individual image annotation requests for this batch.
    * items [AnnotateImageRequest](#annotateimagerequest)

### BatchAnnotateImagesResponse
* BatchAnnotateImagesResponse `object`: Response to a batch image annotation request.
  * responses `array`: Individual responses to image annotation requests within the batch.
    * items [AnnotateImageResponse](#annotateimageresponse)

### Block
* Block `object`: Logical element on the page.
  * blockType `string` (values: UNKNOWN, TEXT, TABLE, PICTURE, RULER, BARCODE): Detected block type (text, image etc) for this block.
  * boundingBox [BoundingPoly](#boundingpoly)
  * confidence `number`: Confidence of the OCR results on the block. Range [0, 1].
  * paragraphs `array`: List of paragraphs in this block (if this blocks is of type text).
    * items [Paragraph](#paragraph)
  * property [TextProperty](#textproperty)

### BoundingPoly
* BoundingPoly `object`: A bounding polygon for the detected image annotation.
  * normalizedVertices `array`: The bounding polygon normalized vertices.
    * items [NormalizedVertex](#normalizedvertex)
  * vertices `array`: The bounding polygon vertices.
    * items [Vertex](#vertex)

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### Color
* Color `object`: Represents a color in the RGBA color space. This representation is designed
  * alpha `number`: The fraction of this color that should be applied to the pixel. That is,
  * blue `number`: The amount of blue in the color as a value in the interval [0, 1].
  * green `number`: The amount of green in the color as a value in the interval [0, 1].
  * red `number`: The amount of red in the color as a value in the interval [0, 1].

### ColorInfo
* ColorInfo `object`: Color information consists of RGB channels, score, and the fraction of
  * color [Color](#color)
  * pixelFraction `number`: The fraction of pixels the color occupies in the image.
  * score `number`: Image-specific score for this color. Value in range [0, 1].

### CropHint
* CropHint `object`: Single crop hint that is used to generate a new crop when serving an image.
  * boundingPoly [BoundingPoly](#boundingpoly)
  * confidence `number`: Confidence of this being a salient region.  Range [0, 1].
  * importanceFraction `number`: Fraction of importance of this salient region with respect to the original

### CropHintsAnnotation
* CropHintsAnnotation `object`: Set of crop hints that are used to generate new crops when serving images.
  * cropHints `array`: Crop hint results.
    * items [CropHint](#crophint)

### CropHintsParams
* CropHintsParams `object`: Parameters for crop hints annotation request.
  * aspectRatios `array`: Aspect ratios in floats, representing the ratio of the width to the height
    * items `number`

### DetectedBreak
* DetectedBreak `object`: Detected start or end of a structural component.
  * isPrefix `boolean`: True if break prepends the element.
  * type `string` (values: UNKNOWN, SPACE, SURE_SPACE, EOL_SURE_SPACE, HYPHEN, LINE_BREAK): Detected break type.

### DetectedLanguage
* DetectedLanguage `object`: Detected language for a structural component.
  * confidence `number`: Confidence of detected language. Range [0, 1].
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more

### DominantColorsAnnotation
* DominantColorsAnnotation `object`: Set of dominant colors and their corresponding scores.
  * colors `array`: RGB color values with their score and pixel fraction.
    * items [ColorInfo](#colorinfo)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### EntityAnnotation
* EntityAnnotation `object`: Set of detected entity features.
  * boundingPoly [BoundingPoly](#boundingpoly)
  * confidence `number`: **Deprecated. Use `score` instead.**
  * description `string`: Entity textual description, expressed in its `locale` language.
  * locale `string`: The language code for the locale in which the entity textual
  * locations `array`: The location information for the detected entity. Multiple
    * items [LocationInfo](#locationinfo)
  * mid `string`: Opaque entity ID. Some IDs may be available in
  * properties `array`: Some entities may have optional user-supplied `Property` (name/value)
    * items [Property](#property)
  * score `number`: Overall score of the result. Range [0, 1].
  * topicality `number`: The relevancy of the ICA (Image Content Annotation) label to the

### FaceAnnotation
* FaceAnnotation `object`: A face annotation object contains the results of face detection.
  * angerLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Anger likelihood.
  * blurredLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Blurred likelihood.
  * boundingPoly [BoundingPoly](#boundingpoly)
  * detectionConfidence `number`: Detection confidence. Range [0, 1].
  * fdBoundingPoly [BoundingPoly](#boundingpoly)
  * headwearLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Headwear likelihood.
  * joyLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Joy likelihood.
  * landmarkingConfidence `number`: Face landmarking confidence. Range [0, 1].
  * landmarks `array`: Detected face landmarks.
    * items [Landmark](#landmark)
  * panAngle `number`: Yaw angle, which indicates the leftward/rightward angle that the face is
  * rollAngle `number`: Roll angle, which indicates the amount of clockwise/anti-clockwise rotation
  * sorrowLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Sorrow likelihood.
  * surpriseLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Surprise likelihood.
  * tiltAngle `number`: Pitch angle, which indicates the upwards/downwards angle that the face is
  * underExposedLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Under-exposed likelihood.

### Feature
* Feature `object`: The type of Google Cloud Vision API detection to perform, and the maximum
  * maxResults `integer`: Maximum number of results of this type. Does not apply to
  * model `string`: Model to use for the feature.
  * type `string` (values: TYPE_UNSPECIFIED, FACE_DETECTION, LANDMARK_DETECTION, LOGO_DETECTION, LABEL_DETECTION, TEXT_DETECTION, DOCUMENT_TEXT_DETECTION, SAFE_SEARCH_DETECTION, IMAGE_PROPERTIES, CROP_HINTS, WEB_DETECTION): The feature type.

### GcsDestination
* GcsDestination `object`: The Google Cloud Storage location where the output will be written to.
  * uri `string`: Google Cloud Storage URI where the results will be stored. Results will

### GcsSource
* GcsSource `object`: The Google Cloud Storage location where the input will be read from.
  * uri `string`: Google Cloud Storage URI for the input file. This must only be a

### GoogleCloudVisionV1p2beta1AnnotateFileResponse
* GoogleCloudVisionV1p2beta1AnnotateFileResponse `object`: Response to a single file annotation request. A file may contain one or more
  * inputConfig [GoogleCloudVisionV1p2beta1InputConfig](#googlecloudvisionv1p2beta1inputconfig)
  * responses `array`: Individual responses to images found within the file.
    * items [GoogleCloudVisionV1p2beta1AnnotateImageResponse](#googlecloudvisionv1p2beta1annotateimageresponse)

### GoogleCloudVisionV1p2beta1AnnotateImageResponse
* GoogleCloudVisionV1p2beta1AnnotateImageResponse `object`: Response to an image annotation request.
  * context [GoogleCloudVisionV1p2beta1ImageAnnotationContext](#googlecloudvisionv1p2beta1imageannotationcontext)
  * cropHintsAnnotation [GoogleCloudVisionV1p2beta1CropHintsAnnotation](#googlecloudvisionv1p2beta1crophintsannotation)
  * error [Status](#status)
  * faceAnnotations `array`: If present, face detection has completed successfully.
    * items [GoogleCloudVisionV1p2beta1FaceAnnotation](#googlecloudvisionv1p2beta1faceannotation)
  * fullTextAnnotation [GoogleCloudVisionV1p2beta1TextAnnotation](#googlecloudvisionv1p2beta1textannotation)
  * imagePropertiesAnnotation [GoogleCloudVisionV1p2beta1ImageProperties](#googlecloudvisionv1p2beta1imageproperties)
  * labelAnnotations `array`: If present, label detection has completed successfully.
    * items [GoogleCloudVisionV1p2beta1EntityAnnotation](#googlecloudvisionv1p2beta1entityannotation)
  * landmarkAnnotations `array`: If present, landmark detection has completed successfully.
    * items [GoogleCloudVisionV1p2beta1EntityAnnotation](#googlecloudvisionv1p2beta1entityannotation)
  * logoAnnotations `array`: If present, logo detection has completed successfully.
    * items [GoogleCloudVisionV1p2beta1EntityAnnotation](#googlecloudvisionv1p2beta1entityannotation)
  * safeSearchAnnotation [GoogleCloudVisionV1p2beta1SafeSearchAnnotation](#googlecloudvisionv1p2beta1safesearchannotation)
  * textAnnotations `array`: If present, text (OCR) detection has completed successfully.
    * items [GoogleCloudVisionV1p2beta1EntityAnnotation](#googlecloudvisionv1p2beta1entityannotation)
  * webDetection [GoogleCloudVisionV1p2beta1WebDetection](#googlecloudvisionv1p2beta1webdetection)

### GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse
* GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse `object`: The response for a single offline file annotation request.
  * outputConfig [GoogleCloudVisionV1p2beta1OutputConfig](#googlecloudvisionv1p2beta1outputconfig)

### GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse
* GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse `object`: Response to an async batch file annotation request.
  * responses `array`: The list of file annotation responses, one for each request in
    * items [GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse](#googlecloudvisionv1p2beta1asyncannotatefileresponse)

### GoogleCloudVisionV1p2beta1Block
* GoogleCloudVisionV1p2beta1Block `object`: Logical element on the page.
  * blockType `string` (values: UNKNOWN, TEXT, TABLE, PICTURE, RULER, BARCODE): Detected block type (text, image etc) for this block.
  * boundingBox [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results on the block. Range [0, 1].
  * paragraphs `array`: List of paragraphs in this block (if this blocks is of type text).
    * items [GoogleCloudVisionV1p2beta1Paragraph](#googlecloudvisionv1p2beta1paragraph)
  * property [GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#googlecloudvisionv1p2beta1textannotationtextproperty)

### GoogleCloudVisionV1p2beta1BoundingPoly
* GoogleCloudVisionV1p2beta1BoundingPoly `object`: A bounding polygon for the detected image annotation.
  * normalizedVertices `array`: The bounding polygon normalized vertices.
    * items [GoogleCloudVisionV1p2beta1NormalizedVertex](#googlecloudvisionv1p2beta1normalizedvertex)
  * vertices `array`: The bounding polygon vertices.
    * items [GoogleCloudVisionV1p2beta1Vertex](#googlecloudvisionv1p2beta1vertex)

### GoogleCloudVisionV1p2beta1ColorInfo
* GoogleCloudVisionV1p2beta1ColorInfo `object`: Color information consists of RGB channels, score, and the fraction of
  * color [Color](#color)
  * pixelFraction `number`: The fraction of pixels the color occupies in the image.
  * score `number`: Image-specific score for this color. Value in range [0, 1].

### GoogleCloudVisionV1p2beta1CropHint
* GoogleCloudVisionV1p2beta1CropHint `object`: Single crop hint that is used to generate a new crop when serving an image.
  * boundingPoly [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: Confidence of this being a salient region.  Range [0, 1].
  * importanceFraction `number`: Fraction of importance of this salient region with respect to the original

### GoogleCloudVisionV1p2beta1CropHintsAnnotation
* GoogleCloudVisionV1p2beta1CropHintsAnnotation `object`: Set of crop hints that are used to generate new crops when serving images.
  * cropHints `array`: Crop hint results.
    * items [GoogleCloudVisionV1p2beta1CropHint](#googlecloudvisionv1p2beta1crophint)

### GoogleCloudVisionV1p2beta1DominantColorsAnnotation
* GoogleCloudVisionV1p2beta1DominantColorsAnnotation `object`: Set of dominant colors and their corresponding scores.
  * colors `array`: RGB color values with their score and pixel fraction.
    * items [GoogleCloudVisionV1p2beta1ColorInfo](#googlecloudvisionv1p2beta1colorinfo)

### GoogleCloudVisionV1p2beta1EntityAnnotation
* GoogleCloudVisionV1p2beta1EntityAnnotation `object`: Set of detected entity features.
  * boundingPoly [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: **Deprecated. Use `score` instead.**
  * description `string`: Entity textual description, expressed in its `locale` language.
  * locale `string`: The language code for the locale in which the entity textual
  * locations `array`: The location information for the detected entity. Multiple
    * items [GoogleCloudVisionV1p2beta1LocationInfo](#googlecloudvisionv1p2beta1locationinfo)
  * mid `string`: Opaque entity ID. Some IDs may be available in
  * properties `array`: Some entities may have optional user-supplied `Property` (name/value)
    * items [GoogleCloudVisionV1p2beta1Property](#googlecloudvisionv1p2beta1property)
  * score `number`: Overall score of the result. Range [0, 1].
  * topicality `number`: The relevancy of the ICA (Image Content Annotation) label to the

### GoogleCloudVisionV1p2beta1FaceAnnotation
* GoogleCloudVisionV1p2beta1FaceAnnotation `object`: A face annotation object contains the results of face detection.
  * angerLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Anger likelihood.
  * blurredLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Blurred likelihood.
  * boundingPoly [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * detectionConfidence `number`: Detection confidence. Range [0, 1].
  * fdBoundingPoly [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * headwearLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Headwear likelihood.
  * joyLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Joy likelihood.
  * landmarkingConfidence `number`: Face landmarking confidence. Range [0, 1].
  * landmarks `array`: Detected face landmarks.
    * items [GoogleCloudVisionV1p2beta1FaceAnnotationLandmark](#googlecloudvisionv1p2beta1faceannotationlandmark)
  * panAngle `number`: Yaw angle, which indicates the leftward/rightward angle that the face is
  * rollAngle `number`: Roll angle, which indicates the amount of clockwise/anti-clockwise rotation
  * sorrowLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Sorrow likelihood.
  * surpriseLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Surprise likelihood.
  * tiltAngle `number`: Pitch angle, which indicates the upwards/downwards angle that the face is
  * underExposedLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Under-exposed likelihood.

### GoogleCloudVisionV1p2beta1FaceAnnotationLandmark
* GoogleCloudVisionV1p2beta1FaceAnnotationLandmark `object`: A face-specific landmark (for example, a face feature).
  * position [GoogleCloudVisionV1p2beta1Position](#googlecloudvisionv1p2beta1position)
  * type `string` (values: UNKNOWN_LANDMARK, LEFT_EYE, RIGHT_EYE, LEFT_OF_LEFT_EYEBROW, RIGHT_OF_LEFT_EYEBROW, LEFT_OF_RIGHT_EYEBROW, RIGHT_OF_RIGHT_EYEBROW, MIDPOINT_BETWEEN_EYES, NOSE_TIP, UPPER_LIP, LOWER_LIP, MOUTH_LEFT, MOUTH_RIGHT, MOUTH_CENTER, NOSE_BOTTOM_RIGHT, NOSE_BOTTOM_LEFT, NOSE_BOTTOM_CENTER, LEFT_EYE_TOP_BOUNDARY, LEFT_EYE_RIGHT_CORNER, LEFT_EYE_BOTTOM_BOUNDARY, LEFT_EYE_LEFT_CORNER, RIGHT_EYE_TOP_BOUNDARY, RIGHT_EYE_RIGHT_CORNER, RIGHT_EYE_BOTTOM_BOUNDARY, RIGHT_EYE_LEFT_CORNER, LEFT_EYEBROW_UPPER_MIDPOINT, RIGHT_EYEBROW_UPPER_MIDPOINT, LEFT_EAR_TRAGION, RIGHT_EAR_TRAGION, LEFT_EYE_PUPIL, RIGHT_EYE_PUPIL, FOREHEAD_GLABELLA, CHIN_GNATHION, CHIN_LEFT_GONION, CHIN_RIGHT_GONION): Face landmark type.

### GoogleCloudVisionV1p2beta1GcsDestination
* GoogleCloudVisionV1p2beta1GcsDestination `object`: The Google Cloud Storage location where the output will be written to.
  * uri `string`: Google Cloud Storage URI where the results will be stored. Results will

### GoogleCloudVisionV1p2beta1GcsSource
* GoogleCloudVisionV1p2beta1GcsSource `object`: The Google Cloud Storage location where the input will be read from.
  * uri `string`: Google Cloud Storage URI for the input file. This must only be a

### GoogleCloudVisionV1p2beta1ImageAnnotationContext
* GoogleCloudVisionV1p2beta1ImageAnnotationContext `object`: If an image was produced from a file (e.g. a PDF), this message gives
  * pageNumber `integer`: If the file was a PDF or TIFF, this field gives the page number within
  * uri `string`: The URI of the file used to produce the image.

### GoogleCloudVisionV1p2beta1ImageProperties
* GoogleCloudVisionV1p2beta1ImageProperties `object`: Stores image properties, such as dominant colors.
  * dominantColors [GoogleCloudVisionV1p2beta1DominantColorsAnnotation](#googlecloudvisionv1p2beta1dominantcolorsannotation)

### GoogleCloudVisionV1p2beta1InputConfig
* GoogleCloudVisionV1p2beta1InputConfig `object`: The desired input location and metadata.
  * gcsSource [GoogleCloudVisionV1p2beta1GcsSource](#googlecloudvisionv1p2beta1gcssource)
  * mimeType `string`: The type of the file. Currently only "application/pdf" and "image/tiff"

### GoogleCloudVisionV1p2beta1LocationInfo
* GoogleCloudVisionV1p2beta1LocationInfo `object`: Detected entity location information.
  * latLng [LatLng](#latlng)

### GoogleCloudVisionV1p2beta1NormalizedVertex
* GoogleCloudVisionV1p2beta1NormalizedVertex `object`: A vertex represents a 2D point in the image.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVisionV1p2beta1OperationMetadata
* GoogleCloudVisionV1p2beta1OperationMetadata `object`: Contains metadata for the BatchAnnotateImages operation.
  * createTime `string`: The time when the batch request was received.
  * state `string` (values: STATE_UNSPECIFIED, CREATED, RUNNING, DONE, CANCELLED): Current state of the batch operation.
  * updateTime `string`: The time when the operation result was last updated.

### GoogleCloudVisionV1p2beta1OutputConfig
* GoogleCloudVisionV1p2beta1OutputConfig `object`: The desired output location and metadata.
  * batchSize `integer`: The max number of response protos to put into each output JSON file on
  * gcsDestination [GoogleCloudVisionV1p2beta1GcsDestination](#googlecloudvisionv1p2beta1gcsdestination)

### GoogleCloudVisionV1p2beta1Page
* GoogleCloudVisionV1p2beta1Page `object`: Detected page from OCR.
  * blocks `array`: List of blocks of text, images etc on this page.
    * items [GoogleCloudVisionV1p2beta1Block](#googlecloudvisionv1p2beta1block)
  * confidence `number`: Confidence of the OCR results on the page. Range [0, 1].
  * height `integer`: Page height. For PDFs the unit is points. For images (including
  * property [GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#googlecloudvisionv1p2beta1textannotationtextproperty)
  * width `integer`: Page width. For PDFs the unit is points. For images (including

### GoogleCloudVisionV1p2beta1Paragraph
* GoogleCloudVisionV1p2beta1Paragraph `object`: Structural unit of text representing a number of words in certain order.
  * boundingBox [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the paragraph. Range [0, 1].
  * property [GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#googlecloudvisionv1p2beta1textannotationtextproperty)
  * words `array`: List of words in this paragraph.
    * items [GoogleCloudVisionV1p2beta1Word](#googlecloudvisionv1p2beta1word)

### GoogleCloudVisionV1p2beta1Position
* GoogleCloudVisionV1p2beta1Position `object`: A 3D position in the image, used primarily for Face detection landmarks.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.
  * z `number`: Z coordinate (or depth).

### GoogleCloudVisionV1p2beta1Property
* GoogleCloudVisionV1p2beta1Property `object`: A `Property` consists of a user-supplied name/value pair.
  * name `string`: Name of the property.
  * uint64Value `string`: Value of numeric properties.
  * value `string`: Value of the property.

### GoogleCloudVisionV1p2beta1SafeSearchAnnotation
* GoogleCloudVisionV1p2beta1SafeSearchAnnotation `object`: Set of features pertaining to the image, computed by computer vision
  * adult `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Represents the adult content likelihood for the image. Adult content may
  * medical `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this is a medical image.
  * racy `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that the request image contains racy content. Racy content may
  * spoof `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Spoof likelihood. The likelihood that an modification
  * violence `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this image contains violent content.

### GoogleCloudVisionV1p2beta1Symbol
* GoogleCloudVisionV1p2beta1Symbol `object`: A single symbol representation.
  * boundingBox [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the symbol. Range [0, 1].
  * property [GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#googlecloudvisionv1p2beta1textannotationtextproperty)
  * text `string`: The actual UTF-8 representation of the symbol.

### GoogleCloudVisionV1p2beta1TextAnnotation
* GoogleCloudVisionV1p2beta1TextAnnotation `object`: TextAnnotation contains a structured representation of OCR extracted text.
  * pages `array`: List of pages detected by OCR.
    * items [GoogleCloudVisionV1p2beta1Page](#googlecloudvisionv1p2beta1page)
  * text `string`: UTF-8 text detected on the pages.

### GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak
* GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak `object`: Detected start or end of a structural component.
  * isPrefix `boolean`: True if break prepends the element.
  * type `string` (values: UNKNOWN, SPACE, SURE_SPACE, EOL_SURE_SPACE, HYPHEN, LINE_BREAK): Detected break type.

### GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage
* GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage `object`: Detected language for a structural component.
  * confidence `number`: Confidence of detected language. Range [0, 1].
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more

### GoogleCloudVisionV1p2beta1TextAnnotationTextProperty
* GoogleCloudVisionV1p2beta1TextAnnotationTextProperty `object`: Additional information detected on the structural component.
  * detectedBreak [GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak](#googlecloudvisionv1p2beta1textannotationdetectedbreak)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage](#googlecloudvisionv1p2beta1textannotationdetectedlanguage)

### GoogleCloudVisionV1p2beta1Vertex
* GoogleCloudVisionV1p2beta1Vertex `object`: A vertex represents a 2D point in the image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### GoogleCloudVisionV1p2beta1WebDetection
* GoogleCloudVisionV1p2beta1WebDetection `object`: Relevant information for the image from the Internet.
  * bestGuessLabels `array`: Best guess text labels for the request image.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebLabel](#googlecloudvisionv1p2beta1webdetectionweblabel)
  * fullMatchingImages `array`: Fully matching images from the Internet.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebImage](#googlecloudvisionv1p2beta1webdetectionwebimage)
  * pagesWithMatchingImages `array`: Web pages containing the matching images from the Internet.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebPage](#googlecloudvisionv1p2beta1webdetectionwebpage)
  * partialMatchingImages `array`: Partial matching images from the Internet.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebImage](#googlecloudvisionv1p2beta1webdetectionwebimage)
  * visuallySimilarImages `array`: The visually similar image results.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebImage](#googlecloudvisionv1p2beta1webdetectionwebimage)
  * webEntities `array`: Deduced entities from similar images on the Internet.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebEntity](#googlecloudvisionv1p2beta1webdetectionwebentity)

### GoogleCloudVisionV1p2beta1WebDetectionWebEntity
* GoogleCloudVisionV1p2beta1WebDetectionWebEntity `object`: Entity deduced from similar images on the Internet.
  * description `string`: Canonical description of the entity, in English.
  * entityId `string`: Opaque entity ID.
  * score `number`: Overall relevancy score for the entity.

### GoogleCloudVisionV1p2beta1WebDetectionWebImage
* GoogleCloudVisionV1p2beta1WebDetectionWebImage `object`: Metadata for online images.
  * score `number`: (Deprecated) Overall relevancy score for the image.
  * url `string`: The result image URL.

### GoogleCloudVisionV1p2beta1WebDetectionWebLabel
* GoogleCloudVisionV1p2beta1WebDetectionWebLabel `object`: Label to provide extra metadata for the web detection.
  * label `string`: Label for extra metadata.
  * languageCode `string`: The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".

### GoogleCloudVisionV1p2beta1WebDetectionWebPage
* GoogleCloudVisionV1p2beta1WebDetectionWebPage `object`: Metadata for web pages.
  * fullMatchingImages `array`: Fully matching images on the page.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebImage](#googlecloudvisionv1p2beta1webdetectionwebimage)
  * pageTitle `string`: Title for the web page, may contain HTML markups.
  * partialMatchingImages `array`: Partial matching images on the page.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebImage](#googlecloudvisionv1p2beta1webdetectionwebimage)
  * score `number`: (Deprecated) Overall relevancy score for the web page.
  * url `string`: The result web page URL.

### GoogleCloudVisionV1p2beta1Word
* GoogleCloudVisionV1p2beta1Word `object`: A word representation.
  * boundingBox [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the word. Range [0, 1].
  * property [GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#googlecloudvisionv1p2beta1textannotationtextproperty)
  * symbols `array`: List of symbols in the word.
    * items [GoogleCloudVisionV1p2beta1Symbol](#googlecloudvisionv1p2beta1symbol)

### GoogleCloudVisionV1p3beta1BatchOperationMetadata
* GoogleCloudVisionV1p3beta1BatchOperationMetadata `object`: Metadata for the batch operations such as the current state.
  * endTime `string`: The time when the batch request is finished and
  * state `string` (values: STATE_UNSPECIFIED, PROCESSING, SUCCESSFUL, FAILED, CANCELLED): The current state of the batch operation.
  * submitTime `string`: The time when the batch request was submitted to the server.

### GoogleCloudVisionV1p3beta1BoundingPoly
* GoogleCloudVisionV1p3beta1BoundingPoly `object`: A bounding polygon for the detected image annotation.
  * normalizedVertices `array`: The bounding polygon normalized vertices.
    * items [GoogleCloudVisionV1p3beta1NormalizedVertex](#googlecloudvisionv1p3beta1normalizedvertex)
  * vertices `array`: The bounding polygon vertices.
    * items [GoogleCloudVisionV1p3beta1Vertex](#googlecloudvisionv1p3beta1vertex)

### GoogleCloudVisionV1p3beta1ImportProductSetsResponse
* GoogleCloudVisionV1p3beta1ImportProductSetsResponse `object`: Response message for the `ImportProductSets` method.
  * referenceImages `array`: The list of reference_images that are imported successfully.
    * items [GoogleCloudVisionV1p3beta1ReferenceImage](#googlecloudvisionv1p3beta1referenceimage)
  * statuses `array`: The rpc status for each ImportProductSet request, including both successes
    * items [Status](#status)

### GoogleCloudVisionV1p3beta1NormalizedVertex
* GoogleCloudVisionV1p3beta1NormalizedVertex `object`: A vertex represents a 2D point in the image.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVisionV1p3beta1ReferenceImage
* GoogleCloudVisionV1p3beta1ReferenceImage `object`: A `ReferenceImage` represents a product image and its associated metadata,
  * boundingPolys `array`: Bounding polygons around the areas of interest in the reference image.
    * items [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * name `string`: The resource name of the reference image.
  * uri `string`: The Google Cloud Storage URI of the reference image.

### GoogleCloudVisionV1p3beta1Vertex
* GoogleCloudVisionV1p3beta1Vertex `object`: A vertex represents a 2D point in the image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### Image
* Image `object`: Client image to perform Google Cloud Vision API tasks over.
  * content `string`: Image content, represented as a stream of bytes.
  * source [ImageSource](#imagesource)

### ImageAnnotationContext
* ImageAnnotationContext `object`: If an image was produced from a file (e.g. a PDF), this message gives
  * pageNumber `integer`: If the file was a PDF or TIFF, this field gives the page number within
  * uri `string`: The URI of the file used to produce the image.

### ImageContext
* ImageContext `object`: Image context and/or feature-specific parameters.
  * cropHintsParams [CropHintsParams](#crophintsparams)
  * languageHints `array`: List of languages to use for TEXT_DETECTION. In most cases, an empty value
    * items `string`
  * latLongRect [LatLongRect](#latlongrect)
  * webDetectionParams [WebDetectionParams](#webdetectionparams)

### ImageProperties
* ImageProperties `object`: Stores image properties, such as dominant colors.
  * dominantColors [DominantColorsAnnotation](#dominantcolorsannotation)

### ImageSource
* ImageSource `object`: External image source (Google Cloud Storage or web URL image location).
  * gcsImageUri `string`: **Use `image_uri` instead.**
  * imageUri `string`: The URI of the source image. Can be either:

### InputConfig
* InputConfig `object`: The desired input location and metadata.
  * gcsSource [GcsSource](#gcssource)
  * mimeType `string`: The type of the file. Currently only "application/pdf" and "image/tiff"

### Landmark
* Landmark `object`: A face-specific landmark (for example, a face feature).
  * position [Position](#position)
  * type `string` (values: UNKNOWN_LANDMARK, LEFT_EYE, RIGHT_EYE, LEFT_OF_LEFT_EYEBROW, RIGHT_OF_LEFT_EYEBROW, LEFT_OF_RIGHT_EYEBROW, RIGHT_OF_RIGHT_EYEBROW, MIDPOINT_BETWEEN_EYES, NOSE_TIP, UPPER_LIP, LOWER_LIP, MOUTH_LEFT, MOUTH_RIGHT, MOUTH_CENTER, NOSE_BOTTOM_RIGHT, NOSE_BOTTOM_LEFT, NOSE_BOTTOM_CENTER, LEFT_EYE_TOP_BOUNDARY, LEFT_EYE_RIGHT_CORNER, LEFT_EYE_BOTTOM_BOUNDARY, LEFT_EYE_LEFT_CORNER, RIGHT_EYE_TOP_BOUNDARY, RIGHT_EYE_RIGHT_CORNER, RIGHT_EYE_BOTTOM_BOUNDARY, RIGHT_EYE_LEFT_CORNER, LEFT_EYEBROW_UPPER_MIDPOINT, RIGHT_EYEBROW_UPPER_MIDPOINT, LEFT_EAR_TRAGION, RIGHT_EAR_TRAGION, LEFT_EYE_PUPIL, RIGHT_EYE_PUPIL, FOREHEAD_GLABELLA, CHIN_GNATHION, CHIN_LEFT_GONION, CHIN_RIGHT_GONION): Face landmark type.

### LatLng
* LatLng `object`: An object representing a latitude/longitude pair. This is expressed as a pair
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].

### LatLongRect
* LatLongRect `object`: Rectangle determined by min and max `LatLng` pairs.
  * maxLatLng [LatLng](#latlng)
  * minLatLng [LatLng](#latlng)

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### LocationInfo
* LocationInfo `object`: Detected entity location information.
  * latLng [LatLng](#latlng)

### NormalizedVertex
* NormalizedVertex `object`: A vertex represents a 2D point in the image.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### OperationMetadata
* OperationMetadata `object`: Contains metadata for the BatchAnnotateImages operation.
  * createTime `string`: The time when the batch request was received.
  * state `string` (values: STATE_UNSPECIFIED, CREATED, RUNNING, DONE, CANCELLED): Current state of the batch operation.
  * updateTime `string`: The time when the operation result was last updated.

### OutputConfig
* OutputConfig `object`: The desired output location and metadata.
  * batchSize `integer`: The max number of response protos to put into each output JSON file on
  * gcsDestination [GcsDestination](#gcsdestination)

### Page
* Page `object`: Detected page from OCR.
  * blocks `array`: List of blocks of text, images etc on this page.
    * items [Block](#block)
  * confidence `number`: Confidence of the OCR results on the page. Range [0, 1].
  * height `integer`: Page height. For PDFs the unit is points. For images (including
  * property [TextProperty](#textproperty)
  * width `integer`: Page width. For PDFs the unit is points. For images (including

### Paragraph
* Paragraph `object`: Structural unit of text representing a number of words in certain order.
  * boundingBox [BoundingPoly](#boundingpoly)
  * confidence `number`: Confidence of the OCR results for the paragraph. Range [0, 1].
  * property [TextProperty](#textproperty)
  * words `array`: List of words in this paragraph.
    * items [Word](#word)

### Position
* Position `object`: A 3D position in the image, used primarily for Face detection landmarks.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.
  * z `number`: Z coordinate (or depth).

### Property
* Property `object`: A `Property` consists of a user-supplied name/value pair.
  * name `string`: Name of the property.
  * uint64Value `string`: Value of numeric properties.
  * value `string`: Value of the property.

### SafeSearchAnnotation
* SafeSearchAnnotation `object`: Set of features pertaining to the image, computed by computer vision
  * adult `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Represents the adult content likelihood for the image. Adult content may
  * medical `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this is a medical image.
  * racy `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that the request image contains racy content. Racy content may
  * spoof `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Spoof likelihood. The likelihood that an modification
  * violence `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this image contains violent content.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### Symbol
* Symbol `object`: A single symbol representation.
  * boundingBox [BoundingPoly](#boundingpoly)
  * confidence `number`: Confidence of the OCR results for the symbol. Range [0, 1].
  * property [TextProperty](#textproperty)
  * text `string`: The actual UTF-8 representation of the symbol.

### TextAnnotation
* TextAnnotation `object`: TextAnnotation contains a structured representation of OCR extracted text.
  * pages `array`: List of pages detected by OCR.
    * items [Page](#page)
  * text `string`: UTF-8 text detected on the pages.

### TextProperty
* TextProperty `object`: Additional information detected on the structural component.
  * detectedBreak [DetectedBreak](#detectedbreak)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [DetectedLanguage](#detectedlanguage)

### Vertex
* Vertex `object`: A vertex represents a 2D point in the image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### WebDetection
* WebDetection `object`: Relevant information for the image from the Internet.
  * bestGuessLabels `array`: Best guess text labels for the request image.
    * items [WebLabel](#weblabel)
  * fullMatchingImages `array`: Fully matching images from the Internet.
    * items [WebImage](#webimage)
  * pagesWithMatchingImages `array`: Web pages containing the matching images from the Internet.
    * items [WebPage](#webpage)
  * partialMatchingImages `array`: Partial matching images from the Internet.
    * items [WebImage](#webimage)
  * visuallySimilarImages `array`: The visually similar image results.
    * items [WebImage](#webimage)
  * webEntities `array`: Deduced entities from similar images on the Internet.
    * items [WebEntity](#webentity)

### WebDetectionParams
* WebDetectionParams `object`: Parameters for web detection request.
  * includeGeoResults `boolean`: Whether to include results derived from the geo information in the image.

### WebEntity
* WebEntity `object`: Entity deduced from similar images on the Internet.
  * description `string`: Canonical description of the entity, in English.
  * entityId `string`: Opaque entity ID.
  * score `number`: Overall relevancy score for the entity.

### WebImage
* WebImage `object`: Metadata for online images.
  * score `number`: (Deprecated) Overall relevancy score for the image.
  * url `string`: The result image URL.

### WebLabel
* WebLabel `object`: Label to provide extra metadata for the web detection.
  * label `string`: Label for extra metadata.
  * languageCode `string`: The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".

### WebPage
* WebPage `object`: Metadata for web pages.
  * fullMatchingImages `array`: Fully matching images on the page.
    * items [WebImage](#webimage)
  * pageTitle `string`: Title for the web page, may contain HTML markups.
  * partialMatchingImages `array`: Partial matching images on the page.
    * items [WebImage](#webimage)
  * score `number`: (Deprecated) Overall relevancy score for the web page.
  * url `string`: The result web page URL.

### Word
* Word `object`: A word representation.
  * boundingBox [BoundingPoly](#boundingpoly)
  * confidence `number`: Confidence of the OCR results for the word. Range [0, 1].
  * property [TextProperty](#textproperty)
  * symbols `array`: List of symbols in the word.
    * items [Symbol](#symbol)


