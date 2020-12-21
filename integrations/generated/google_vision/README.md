# @datafire/google_vision

Client library for Cloud Vision API

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

.then(data => {
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

### vision.files.annotate
Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.


```js
google_vision.vision.files.annotate({}, context)
```

#### Input
* input `object`
  * body [GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest](#googlecloudvisionv1p2beta1batchannotatefilesrequest)
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
* output [GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse](#googlecloudvisionv1p2beta1batchannotatefilesresponse)

### vision.files.asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).


```js
google_vision.vision.files.asyncBatchAnnotate({}, context)
```

#### Input
* input `object`
  * body [GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest](#googlecloudvisionv1p2beta1asyncbatchannotatefilesrequest)
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
* output [Operation](#operation)

### vision.images.annotate
Run image detection and annotation for a batch of images.


```js
google_vision.vision.images.annotate({}, context)
```

#### Input
* input `object`
  * body [GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest](#googlecloudvisionv1p2beta1batchannotateimagesrequest)
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
* output [GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse](#googlecloudvisionv1p2beta1batchannotateimagesresponse)

### vision.images.asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.


```js
google_vision.vision.images.asyncBatchAnnotate({}, context)
```

#### Input
* input `object`
  * body [GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest](#googlecloudvisionv1p2beta1asyncbatchannotateimagesrequest)
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
* output [Operation](#operation)

### vision.projects.locations.files.annotate
Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.


```js
google_vision.vision.projects.locations.files.annotate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
  * body [GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest](#googlecloudvisionv1p2beta1batchannotatefilesrequest)
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
* output [GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse](#googlecloudvisionv1p2beta1batchannotatefilesresponse)

### vision.projects.locations.files.asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).


```js
google_vision.vision.projects.locations.files.asyncBatchAnnotate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
  * body [GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest](#googlecloudvisionv1p2beta1asyncbatchannotatefilesrequest)
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
* output [Operation](#operation)

### vision.projects.locations.images.annotate
Run image detection and annotation for a batch of images.


```js
google_vision.vision.projects.locations.images.annotate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
  * body [GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest](#googlecloudvisionv1p2beta1batchannotateimagesrequest)
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
* output [GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse](#googlecloudvisionv1p2beta1batchannotateimagesresponse)

### vision.projects.locations.images.asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.


```js
google_vision.vision.projects.locations.images.asyncBatchAnnotate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
  * body [GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest](#googlecloudvisionv1p2beta1asyncbatchannotateimagesrequest)
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
* output [Operation](#operation)



## Definitions

### AnnotateFileResponse
* AnnotateFileResponse `object`: Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
  * responses `array`: Individual responses to images found within the file. This field will be empty if the `error` field is set.
    * items [AnnotateImageResponse](#annotateimageresponse)
  * error [Status](#status)
  * inputConfig [InputConfig](#inputconfig)
  * totalPages `integer`: This field gives the total number of pages in the file.

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
  * localizedObjectAnnotations `array`: If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
    * items [LocalizedObjectAnnotation](#localizedobjectannotation)
  * logoAnnotations `array`: If present, logo detection has completed successfully.
    * items [EntityAnnotation](#entityannotation)
  * productSearchResults [ProductSearchResults](#productsearchresults)
  * safeSearchAnnotation [SafeSearchAnnotation](#safesearchannotation)
  * textAnnotations `array`: If present, text (OCR) detection has completed successfully.
    * items [EntityAnnotation](#entityannotation)
  * webDetection [WebDetection](#webdetection)

### AsyncAnnotateFileResponse
* AsyncAnnotateFileResponse `object`: The response for a single offline file annotation request.
  * outputConfig [OutputConfig](#outputconfig)

### AsyncBatchAnnotateFilesResponse
* AsyncBatchAnnotateFilesResponse `object`: Response to an async batch file annotation request.
  * responses `array`: The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
    * items [AsyncAnnotateFileResponse](#asyncannotatefileresponse)

### AsyncBatchAnnotateImagesResponse
* AsyncBatchAnnotateImagesResponse `object`: Response to an async batch image annotation request.
  * outputConfig [OutputConfig](#outputconfig)

### BatchAnnotateFilesResponse
* BatchAnnotateFilesResponse `object`: A list of file annotation responses.
  * responses `array`: The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.
    * items [AnnotateFileResponse](#annotatefileresponse)

### BatchOperationMetadata
* BatchOperationMetadata `object`: Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * endTime `string`: The time when the batch request is finished and google.longrunning.Operation.done is set to true.
  * state `string` (values: STATE_UNSPECIFIED, PROCESSING, SUCCESSFUL, FAILED, CANCELLED): The current state of the batch operation.
  * submitTime `string`: The time when the batch request was submitted to the server.

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

### Color
* Color `object`: Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness; for example, the fields of this representation can be trivially provided to the constructor of "java.awt.Color" in Java; it can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha" method in iOS; and, with just a little work, it can be easily formatted into a CSS "rgba()" string in JavaScript, as well. Note: this proto does not carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color space. Note: when color equality needs to be decided, implementations, unless documented otherwise, will treat two colors to be equal if all their red, green, blue and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor_(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor_ = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...
  * alpha `number`: The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (this color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is to be rendered as a solid color (as if the alpha value had been explicitly given with a value of 1.0).
  * blue `number`: The amount of blue in the color as a value in the interval [0, 1].
  * green `number`: The amount of green in the color as a value in the interval [0, 1].
  * red `number`: The amount of red in the color as a value in the interval [0, 1].

### ColorInfo
* ColorInfo `object`: Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
  * color [Color](#color)
  * pixelFraction `number`: The fraction of pixels the color occupies in the image. Value in range [0, 1].
  * score `number`: Image-specific score for this color. Value in range [0, 1].

### CropHint
* CropHint `object`: Single crop hint that is used to generate a new crop when serving an image.
  * boundingPoly [BoundingPoly](#boundingpoly)
  * confidence `number`: Confidence of this being a salient region. Range [0, 1].
  * importanceFraction `number`: Fraction of importance of this salient region with respect to the original image.

### CropHintsAnnotation
* CropHintsAnnotation `object`: Set of crop hints that are used to generate new crops when serving images.
  * cropHints `array`: Crop hint results.
    * items [CropHint](#crophint)

### DetectedBreak
* DetectedBreak `object`: Detected start or end of a structural component.
  * isPrefix `boolean`: True if break prepends the element.
  * type `string` (values: UNKNOWN, SPACE, SURE_SPACE, EOL_SURE_SPACE, HYPHEN, LINE_BREAK): Detected break type.

### DetectedLanguage
* DetectedLanguage `object`: Detected language for a structural component.
  * confidence `number`: Confidence of detected language. Range [0, 1].
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### DominantColorsAnnotation
* DominantColorsAnnotation `object`: Set of dominant colors and their corresponding scores.
  * colors `array`: RGB color values with their score and pixel fraction.
    * items [ColorInfo](#colorinfo)

### EntityAnnotation
* EntityAnnotation `object`: Set of detected entity features.
  * boundingPoly [BoundingPoly](#boundingpoly)
  * confidence `number`: **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
  * description `string`: Entity textual description, expressed in its `locale` language.
  * locale `string`: The language code for the locale in which the entity textual `description` is expressed.
  * locations `array`: The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
    * items [LocationInfo](#locationinfo)
  * mid `string`: Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
  * properties `array`: Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
    * items [Property](#property)
  * score `number`: Overall score of the result. Range [0, 1].
  * topicality `number`: The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].

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
  * panAngle `number`: Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
  * rollAngle `number`: Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
  * sorrowLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Sorrow likelihood.
  * surpriseLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Surprise likelihood.
  * tiltAngle `number`: Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
  * underExposedLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Under-exposed likelihood.

### GcsDestination
* GcsDestination `object`: The Google Cloud Storage location where the output will be written to.
  * uri `string`: Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.

### GcsSource
* GcsSource `object`: The Google Cloud Storage location where the input will be read from.
  * uri `string`: Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.

### GoogleCloudVisionV1p1beta1AnnotateFileResponse
* GoogleCloudVisionV1p1beta1AnnotateFileResponse `object`: Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
  * responses `array`: Individual responses to images found within the file. This field will be empty if the `error` field is set.
    * items [GoogleCloudVisionV1p1beta1AnnotateImageResponse](#googlecloudvisionv1p1beta1annotateimageresponse)
  * error [Status](#status)
  * inputConfig [GoogleCloudVisionV1p1beta1InputConfig](#googlecloudvisionv1p1beta1inputconfig)
  * totalPages `integer`: This field gives the total number of pages in the file.

### GoogleCloudVisionV1p1beta1AnnotateImageResponse
* GoogleCloudVisionV1p1beta1AnnotateImageResponse `object`: Response to an image annotation request.
  * context [GoogleCloudVisionV1p1beta1ImageAnnotationContext](#googlecloudvisionv1p1beta1imageannotationcontext)
  * cropHintsAnnotation [GoogleCloudVisionV1p1beta1CropHintsAnnotation](#googlecloudvisionv1p1beta1crophintsannotation)
  * error [Status](#status)
  * faceAnnotations `array`: If present, face detection has completed successfully.
    * items [GoogleCloudVisionV1p1beta1FaceAnnotation](#googlecloudvisionv1p1beta1faceannotation)
  * fullTextAnnotation [GoogleCloudVisionV1p1beta1TextAnnotation](#googlecloudvisionv1p1beta1textannotation)
  * imagePropertiesAnnotation [GoogleCloudVisionV1p1beta1ImageProperties](#googlecloudvisionv1p1beta1imageproperties)
  * labelAnnotations `array`: If present, label detection has completed successfully.
    * items [GoogleCloudVisionV1p1beta1EntityAnnotation](#googlecloudvisionv1p1beta1entityannotation)
  * landmarkAnnotations `array`: If present, landmark detection has completed successfully.
    * items [GoogleCloudVisionV1p1beta1EntityAnnotation](#googlecloudvisionv1p1beta1entityannotation)
  * localizedObjectAnnotations `array`: If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
    * items [GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation](#googlecloudvisionv1p1beta1localizedobjectannotation)
  * logoAnnotations `array`: If present, logo detection has completed successfully.
    * items [GoogleCloudVisionV1p1beta1EntityAnnotation](#googlecloudvisionv1p1beta1entityannotation)
  * productSearchResults [GoogleCloudVisionV1p1beta1ProductSearchResults](#googlecloudvisionv1p1beta1productsearchresults)
  * safeSearchAnnotation [GoogleCloudVisionV1p1beta1SafeSearchAnnotation](#googlecloudvisionv1p1beta1safesearchannotation)
  * textAnnotations `array`: If present, text (OCR) detection has completed successfully.
    * items [GoogleCloudVisionV1p1beta1EntityAnnotation](#googlecloudvisionv1p1beta1entityannotation)
  * webDetection [GoogleCloudVisionV1p1beta1WebDetection](#googlecloudvisionv1p1beta1webdetection)

### GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse
* GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse `object`: The response for a single offline file annotation request.
  * outputConfig [GoogleCloudVisionV1p1beta1OutputConfig](#googlecloudvisionv1p1beta1outputconfig)

### GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse
* GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse `object`: Response to an async batch file annotation request.
  * responses `array`: The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
    * items [GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse](#googlecloudvisionv1p1beta1asyncannotatefileresponse)

### GoogleCloudVisionV1p1beta1Block
* GoogleCloudVisionV1p1beta1Block `object`: Logical element on the page.
  * blockType `string` (values: UNKNOWN, TEXT, TABLE, PICTURE, RULER, BARCODE): Detected block type (text, image etc) for this block.
  * boundingBox [GoogleCloudVisionV1p1beta1BoundingPoly](#googlecloudvisionv1p1beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results on the block. Range [0, 1].
  * paragraphs `array`: List of paragraphs in this block (if this blocks is of type text).
    * items [GoogleCloudVisionV1p1beta1Paragraph](#googlecloudvisionv1p1beta1paragraph)
  * property [GoogleCloudVisionV1p1beta1TextAnnotationTextProperty](#googlecloudvisionv1p1beta1textannotationtextproperty)

### GoogleCloudVisionV1p1beta1BoundingPoly
* GoogleCloudVisionV1p1beta1BoundingPoly `object`: A bounding polygon for the detected image annotation.
  * normalizedVertices `array`: The bounding polygon normalized vertices.
    * items [GoogleCloudVisionV1p1beta1NormalizedVertex](#googlecloudvisionv1p1beta1normalizedvertex)
  * vertices `array`: The bounding polygon vertices.
    * items [GoogleCloudVisionV1p1beta1Vertex](#googlecloudvisionv1p1beta1vertex)

### GoogleCloudVisionV1p1beta1ColorInfo
* GoogleCloudVisionV1p1beta1ColorInfo `object`: Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
  * color [Color](#color)
  * pixelFraction `number`: The fraction of pixels the color occupies in the image. Value in range [0, 1].
  * score `number`: Image-specific score for this color. Value in range [0, 1].

### GoogleCloudVisionV1p1beta1CropHint
* GoogleCloudVisionV1p1beta1CropHint `object`: Single crop hint that is used to generate a new crop when serving an image.
  * boundingPoly [GoogleCloudVisionV1p1beta1BoundingPoly](#googlecloudvisionv1p1beta1boundingpoly)
  * confidence `number`: Confidence of this being a salient region. Range [0, 1].
  * importanceFraction `number`: Fraction of importance of this salient region with respect to the original image.

### GoogleCloudVisionV1p1beta1CropHintsAnnotation
* GoogleCloudVisionV1p1beta1CropHintsAnnotation `object`: Set of crop hints that are used to generate new crops when serving images.
  * cropHints `array`: Crop hint results.
    * items [GoogleCloudVisionV1p1beta1CropHint](#googlecloudvisionv1p1beta1crophint)

### GoogleCloudVisionV1p1beta1DominantColorsAnnotation
* GoogleCloudVisionV1p1beta1DominantColorsAnnotation `object`: Set of dominant colors and their corresponding scores.
  * colors `array`: RGB color values with their score and pixel fraction.
    * items [GoogleCloudVisionV1p1beta1ColorInfo](#googlecloudvisionv1p1beta1colorinfo)

### GoogleCloudVisionV1p1beta1EntityAnnotation
* GoogleCloudVisionV1p1beta1EntityAnnotation `object`: Set of detected entity features.
  * boundingPoly [GoogleCloudVisionV1p1beta1BoundingPoly](#googlecloudvisionv1p1beta1boundingpoly)
  * confidence `number`: **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
  * description `string`: Entity textual description, expressed in its `locale` language.
  * locale `string`: The language code for the locale in which the entity textual `description` is expressed.
  * locations `array`: The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
    * items [GoogleCloudVisionV1p1beta1LocationInfo](#googlecloudvisionv1p1beta1locationinfo)
  * mid `string`: Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
  * properties `array`: Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
    * items [GoogleCloudVisionV1p1beta1Property](#googlecloudvisionv1p1beta1property)
  * score `number`: Overall score of the result. Range [0, 1].
  * topicality `number`: The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].

### GoogleCloudVisionV1p1beta1FaceAnnotation
* GoogleCloudVisionV1p1beta1FaceAnnotation `object`: A face annotation object contains the results of face detection.
  * angerLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Anger likelihood.
  * blurredLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Blurred likelihood.
  * boundingPoly [GoogleCloudVisionV1p1beta1BoundingPoly](#googlecloudvisionv1p1beta1boundingpoly)
  * detectionConfidence `number`: Detection confidence. Range [0, 1].
  * fdBoundingPoly [GoogleCloudVisionV1p1beta1BoundingPoly](#googlecloudvisionv1p1beta1boundingpoly)
  * headwearLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Headwear likelihood.
  * joyLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Joy likelihood.
  * landmarkingConfidence `number`: Face landmarking confidence. Range [0, 1].
  * landmarks `array`: Detected face landmarks.
    * items [GoogleCloudVisionV1p1beta1FaceAnnotationLandmark](#googlecloudvisionv1p1beta1faceannotationlandmark)
  * panAngle `number`: Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
  * rollAngle `number`: Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
  * sorrowLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Sorrow likelihood.
  * surpriseLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Surprise likelihood.
  * tiltAngle `number`: Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
  * underExposedLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Under-exposed likelihood.

### GoogleCloudVisionV1p1beta1FaceAnnotationLandmark
* GoogleCloudVisionV1p1beta1FaceAnnotationLandmark `object`: A face-specific landmark (for example, a face feature).
  * position [GoogleCloudVisionV1p1beta1Position](#googlecloudvisionv1p1beta1position)
  * type `string` (values: UNKNOWN_LANDMARK, LEFT_EYE, RIGHT_EYE, LEFT_OF_LEFT_EYEBROW, RIGHT_OF_LEFT_EYEBROW, LEFT_OF_RIGHT_EYEBROW, RIGHT_OF_RIGHT_EYEBROW, MIDPOINT_BETWEEN_EYES, NOSE_TIP, UPPER_LIP, LOWER_LIP, MOUTH_LEFT, MOUTH_RIGHT, MOUTH_CENTER, NOSE_BOTTOM_RIGHT, NOSE_BOTTOM_LEFT, NOSE_BOTTOM_CENTER, LEFT_EYE_TOP_BOUNDARY, LEFT_EYE_RIGHT_CORNER, LEFT_EYE_BOTTOM_BOUNDARY, LEFT_EYE_LEFT_CORNER, RIGHT_EYE_TOP_BOUNDARY, RIGHT_EYE_RIGHT_CORNER, RIGHT_EYE_BOTTOM_BOUNDARY, RIGHT_EYE_LEFT_CORNER, LEFT_EYEBROW_UPPER_MIDPOINT, RIGHT_EYEBROW_UPPER_MIDPOINT, LEFT_EAR_TRAGION, RIGHT_EAR_TRAGION, LEFT_EYE_PUPIL, RIGHT_EYE_PUPIL, FOREHEAD_GLABELLA, CHIN_GNATHION, CHIN_LEFT_GONION, CHIN_RIGHT_GONION, LEFT_CHEEK_CENTER, RIGHT_CHEEK_CENTER): Face landmark type.

### GoogleCloudVisionV1p1beta1GcsDestination
* GoogleCloudVisionV1p1beta1GcsDestination `object`: The Google Cloud Storage location where the output will be written to.
  * uri `string`: Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.

### GoogleCloudVisionV1p1beta1GcsSource
* GoogleCloudVisionV1p1beta1GcsSource `object`: The Google Cloud Storage location where the input will be read from.
  * uri `string`: Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.

### GoogleCloudVisionV1p1beta1ImageAnnotationContext
* GoogleCloudVisionV1p1beta1ImageAnnotationContext `object`: If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
  * pageNumber `integer`: If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
  * uri `string`: The URI of the file used to produce the image.

### GoogleCloudVisionV1p1beta1ImageProperties
* GoogleCloudVisionV1p1beta1ImageProperties `object`: Stores image properties, such as dominant colors.
  * dominantColors [GoogleCloudVisionV1p1beta1DominantColorsAnnotation](#googlecloudvisionv1p1beta1dominantcolorsannotation)

### GoogleCloudVisionV1p1beta1InputConfig
* GoogleCloudVisionV1p1beta1InputConfig `object`: The desired input location and metadata.
  * content `string`: File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
  * gcsSource [GoogleCloudVisionV1p1beta1GcsSource](#googlecloudvisionv1p1beta1gcssource)
  * mimeType `string`: The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.

### GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation
* GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation `object`: Set of detected objects with bounding boxes.
  * boundingPoly [GoogleCloudVisionV1p1beta1BoundingPoly](#googlecloudvisionv1p1beta1boundingpoly)
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mid `string`: Object ID that should align with EntityAnnotation mid.
  * name `string`: Object name, expressed in its `language_code` language.
  * score `number`: Score of the result. Range [0, 1].

### GoogleCloudVisionV1p1beta1LocationInfo
* GoogleCloudVisionV1p1beta1LocationInfo `object`: Detected entity location information.
  * latLng [LatLng](#latlng)

### GoogleCloudVisionV1p1beta1NormalizedVertex
* GoogleCloudVisionV1p1beta1NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVisionV1p1beta1OperationMetadata
* GoogleCloudVisionV1p1beta1OperationMetadata `object`: Contains metadata for the BatchAnnotateImages operation.
  * createTime `string`: The time when the batch request was received.
  * state `string` (values: STATE_UNSPECIFIED, CREATED, RUNNING, DONE, CANCELLED): Current state of the batch operation.
  * updateTime `string`: The time when the operation result was last updated.

### GoogleCloudVisionV1p1beta1OutputConfig
* GoogleCloudVisionV1p1beta1OutputConfig `object`: The desired output location and metadata.
  * batchSize `integer`: The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
  * gcsDestination [GoogleCloudVisionV1p1beta1GcsDestination](#googlecloudvisionv1p1beta1gcsdestination)

### GoogleCloudVisionV1p1beta1Page
* GoogleCloudVisionV1p1beta1Page `object`: Detected page from OCR.
  * blocks `array`: List of blocks of text, images etc on this page.
    * items [GoogleCloudVisionV1p1beta1Block](#googlecloudvisionv1p1beta1block)
  * confidence `number`: Confidence of the OCR results on the page. Range [0, 1].
  * height `integer`: Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
  * property [GoogleCloudVisionV1p1beta1TextAnnotationTextProperty](#googlecloudvisionv1p1beta1textannotationtextproperty)
  * width `integer`: Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.

### GoogleCloudVisionV1p1beta1Paragraph
* GoogleCloudVisionV1p1beta1Paragraph `object`: Structural unit of text representing a number of words in certain order.
  * boundingBox [GoogleCloudVisionV1p1beta1BoundingPoly](#googlecloudvisionv1p1beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the paragraph. Range [0, 1].
  * property [GoogleCloudVisionV1p1beta1TextAnnotationTextProperty](#googlecloudvisionv1p1beta1textannotationtextproperty)
  * words `array`: List of all words in this paragraph.
    * items [GoogleCloudVisionV1p1beta1Word](#googlecloudvisionv1p1beta1word)

### GoogleCloudVisionV1p1beta1Position
* GoogleCloudVisionV1p1beta1Position `object`: A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.
  * z `number`: Z coordinate (or depth).

### GoogleCloudVisionV1p1beta1Product
* GoogleCloudVisionV1p1beta1Product `object`: A Product contains ReferenceImages.
  * description `string`: User-provided metadata to be stored with this product. Must be at most 4096 characters long.
  * displayName `string`: The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
  * name `string`: The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.
  * productCategory `string`: Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.
  * productLabels `array`: Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
    * items [GoogleCloudVisionV1p1beta1ProductKeyValue](#googlecloudvisionv1p1beta1productkeyvalue)

### GoogleCloudVisionV1p1beta1ProductKeyValue
* GoogleCloudVisionV1p1beta1ProductKeyValue `object`: A product label represented as a key-value pair.
  * key `string`: The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
  * value `string`: The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.

### GoogleCloudVisionV1p1beta1ProductSearchResults
* GoogleCloudVisionV1p1beta1ProductSearchResults `object`: Results for a product search request.
  * indexTime `string`: Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
  * productGroupedResults `array`: List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
    * items [GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult](#googlecloudvisionv1p1beta1productsearchresultsgroupedresult)
  * results `array`: List of results, one for each product match.
    * items [GoogleCloudVisionV1p1beta1ProductSearchResultsResult](#googlecloudvisionv1p1beta1productsearchresultsresult)

### GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult
* GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult `object`: Information about the products similar to a single product in a query image.
  * boundingPoly [GoogleCloudVisionV1p1beta1BoundingPoly](#googlecloudvisionv1p1beta1boundingpoly)
  * objectAnnotations `array`: List of generic predictions for the object in the bounding box.
    * items [GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation](#googlecloudvisionv1p1beta1productsearchresultsobjectannotation)
  * results `array`: List of results, one for each product match.
    * items [GoogleCloudVisionV1p1beta1ProductSearchResultsResult](#googlecloudvisionv1p1beta1productsearchresultsresult)

### GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation
* GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation `object`: Prediction for what the object in the bounding box is.
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mid `string`: Object ID that should align with EntityAnnotation mid.
  * name `string`: Object name, expressed in its `language_code` language.
  * score `number`: Score of the result. Range [0, 1].

### GoogleCloudVisionV1p1beta1ProductSearchResultsResult
* GoogleCloudVisionV1p1beta1ProductSearchResultsResult `object`: Information about a product.
  * image `string`: The resource name of the image from the product that is the closest match to the query.
  * product [GoogleCloudVisionV1p1beta1Product](#googlecloudvisionv1p1beta1product)
  * score `number`: A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).

### GoogleCloudVisionV1p1beta1Property
* GoogleCloudVisionV1p1beta1Property `object`: A `Property` consists of a user-supplied name/value pair.
  * name `string`: Name of the property.
  * uint64Value `string`: Value of numeric properties.
  * value `string`: Value of the property.

### GoogleCloudVisionV1p1beta1SafeSearchAnnotation
* GoogleCloudVisionV1p1beta1SafeSearchAnnotation `object`: Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
  * adult `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
  * medical `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this is a medical image.
  * racy `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
  * spoof `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.
  * violence `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this image contains violent content.

### GoogleCloudVisionV1p1beta1Symbol
* GoogleCloudVisionV1p1beta1Symbol `object`: A single symbol representation.
  * boundingBox [GoogleCloudVisionV1p1beta1BoundingPoly](#googlecloudvisionv1p1beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the symbol. Range [0, 1].
  * property [GoogleCloudVisionV1p1beta1TextAnnotationTextProperty](#googlecloudvisionv1p1beta1textannotationtextproperty)
  * text `string`: The actual UTF-8 representation of the symbol.

### GoogleCloudVisionV1p1beta1TextAnnotation
* GoogleCloudVisionV1p1beta1TextAnnotation `object`: TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
  * pages `array`: List of pages detected by OCR.
    * items [GoogleCloudVisionV1p1beta1Page](#googlecloudvisionv1p1beta1page)
  * text `string`: UTF-8 text detected on the pages.

### GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak
* GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak `object`: Detected start or end of a structural component.
  * isPrefix `boolean`: True if break prepends the element.
  * type `string` (values: UNKNOWN, SPACE, SURE_SPACE, EOL_SURE_SPACE, HYPHEN, LINE_BREAK): Detected break type.

### GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage
* GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage `object`: Detected language for a structural component.
  * confidence `number`: Confidence of detected language. Range [0, 1].
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudVisionV1p1beta1TextAnnotationTextProperty
* GoogleCloudVisionV1p1beta1TextAnnotationTextProperty `object`: Additional information detected on the structural component.
  * detectedBreak [GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak](#googlecloudvisionv1p1beta1textannotationdetectedbreak)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage](#googlecloudvisionv1p1beta1textannotationdetectedlanguage)

### GoogleCloudVisionV1p1beta1Vertex
* GoogleCloudVisionV1p1beta1Vertex `object`: A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### GoogleCloudVisionV1p1beta1WebDetection
* GoogleCloudVisionV1p1beta1WebDetection `object`: Relevant information for the image from the Internet.
  * bestGuessLabels `array`: The service's best guess as to the topic of the request image. Inferred from similar images on the open web.
    * items [GoogleCloudVisionV1p1beta1WebDetectionWebLabel](#googlecloudvisionv1p1beta1webdetectionweblabel)
  * fullMatchingImages `array`: Fully matching images from the Internet. Can include resized copies of the query image.
    * items [GoogleCloudVisionV1p1beta1WebDetectionWebImage](#googlecloudvisionv1p1beta1webdetectionwebimage)
  * pagesWithMatchingImages `array`: Web pages containing the matching images from the Internet.
    * items [GoogleCloudVisionV1p1beta1WebDetectionWebPage](#googlecloudvisionv1p1beta1webdetectionwebpage)
  * partialMatchingImages `array`: Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
    * items [GoogleCloudVisionV1p1beta1WebDetectionWebImage](#googlecloudvisionv1p1beta1webdetectionwebimage)
  * visuallySimilarImages `array`: The visually similar image results.
    * items [GoogleCloudVisionV1p1beta1WebDetectionWebImage](#googlecloudvisionv1p1beta1webdetectionwebimage)
  * webEntities `array`: Deduced entities from similar images on the Internet.
    * items [GoogleCloudVisionV1p1beta1WebDetectionWebEntity](#googlecloudvisionv1p1beta1webdetectionwebentity)

### GoogleCloudVisionV1p1beta1WebDetectionWebEntity
* GoogleCloudVisionV1p1beta1WebDetectionWebEntity `object`: Entity deduced from similar images on the Internet.
  * description `string`: Canonical description of the entity, in English.
  * entityId `string`: Opaque entity ID.
  * score `number`: Overall relevancy score for the entity. Not normalized and not comparable across different image queries.

### GoogleCloudVisionV1p1beta1WebDetectionWebImage
* GoogleCloudVisionV1p1beta1WebDetectionWebImage `object`: Metadata for online images.
  * score `number`: (Deprecated) Overall relevancy score for the image.
  * url `string`: The result image URL.

### GoogleCloudVisionV1p1beta1WebDetectionWebLabel
* GoogleCloudVisionV1p1beta1WebDetectionWebLabel `object`: Label to provide extra metadata for the web detection.
  * label `string`: Label for extra metadata.
  * languageCode `string`: The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudVisionV1p1beta1WebDetectionWebPage
* GoogleCloudVisionV1p1beta1WebDetectionWebPage `object`: Metadata for web pages.
  * fullMatchingImages `array`: Fully matching images on the page. Can include resized copies of the query image.
    * items [GoogleCloudVisionV1p1beta1WebDetectionWebImage](#googlecloudvisionv1p1beta1webdetectionwebimage)
  * pageTitle `string`: Title for the web page, may contain HTML markups.
  * partialMatchingImages `array`: Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
    * items [GoogleCloudVisionV1p1beta1WebDetectionWebImage](#googlecloudvisionv1p1beta1webdetectionwebimage)
  * score `number`: (Deprecated) Overall relevancy score for the web page.
  * url `string`: The result web page URL.

### GoogleCloudVisionV1p1beta1Word
* GoogleCloudVisionV1p1beta1Word `object`: A word representation.
  * boundingBox [GoogleCloudVisionV1p1beta1BoundingPoly](#googlecloudvisionv1p1beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the word. Range [0, 1].
  * property [GoogleCloudVisionV1p1beta1TextAnnotationTextProperty](#googlecloudvisionv1p1beta1textannotationtextproperty)
  * symbols `array`: List of symbols in the word. The order of the symbols follows the natural reading order.
    * items [GoogleCloudVisionV1p1beta1Symbol](#googlecloudvisionv1p1beta1symbol)

### GoogleCloudVisionV1p2beta1AnnotateFileRequest
* GoogleCloudVisionV1p2beta1AnnotateFileRequest `object`: A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
  * features `array`: Required. Requested features.
    * items [GoogleCloudVisionV1p2beta1Feature](#googlecloudvisionv1p2beta1feature)
  * imageContext [GoogleCloudVisionV1p2beta1ImageContext](#googlecloudvisionv1p2beta1imagecontext)
  * inputConfig [GoogleCloudVisionV1p2beta1InputConfig](#googlecloudvisionv1p2beta1inputconfig)
  * pages `array`: Pages of the file to perform image annotation. Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative. Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page. If the file is GIF instead of PDF or TIFF, page refers to GIF frames. If this field is empty, by default the service performs image annotation for the first 5 pages of the file.
    * items `integer`

### GoogleCloudVisionV1p2beta1AnnotateFileResponse
* GoogleCloudVisionV1p2beta1AnnotateFileResponse `object`: Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
  * responses `array`: Individual responses to images found within the file. This field will be empty if the `error` field is set.
    * items [GoogleCloudVisionV1p2beta1AnnotateImageResponse](#googlecloudvisionv1p2beta1annotateimageresponse)
  * error [Status](#status)
  * inputConfig [GoogleCloudVisionV1p2beta1InputConfig](#googlecloudvisionv1p2beta1inputconfig)
  * totalPages `integer`: This field gives the total number of pages in the file.

### GoogleCloudVisionV1p2beta1AnnotateImageRequest
* GoogleCloudVisionV1p2beta1AnnotateImageRequest `object`: Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
  * features `array`: Requested features.
    * items [GoogleCloudVisionV1p2beta1Feature](#googlecloudvisionv1p2beta1feature)
  * image [GoogleCloudVisionV1p2beta1Image](#googlecloudvisionv1p2beta1image)
  * imageContext [GoogleCloudVisionV1p2beta1ImageContext](#googlecloudvisionv1p2beta1imagecontext)

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
  * localizedObjectAnnotations `array`: If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
    * items [GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation](#googlecloudvisionv1p2beta1localizedobjectannotation)
  * logoAnnotations `array`: If present, logo detection has completed successfully.
    * items [GoogleCloudVisionV1p2beta1EntityAnnotation](#googlecloudvisionv1p2beta1entityannotation)
  * productSearchResults [GoogleCloudVisionV1p2beta1ProductSearchResults](#googlecloudvisionv1p2beta1productsearchresults)
  * safeSearchAnnotation [GoogleCloudVisionV1p2beta1SafeSearchAnnotation](#googlecloudvisionv1p2beta1safesearchannotation)
  * textAnnotations `array`: If present, text (OCR) detection has completed successfully.
    * items [GoogleCloudVisionV1p2beta1EntityAnnotation](#googlecloudvisionv1p2beta1entityannotation)
  * webDetection [GoogleCloudVisionV1p2beta1WebDetection](#googlecloudvisionv1p2beta1webdetection)

### GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest
* GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest `object`: An offline file annotation request.
  * features `array`: Required. Requested features.
    * items [GoogleCloudVisionV1p2beta1Feature](#googlecloudvisionv1p2beta1feature)
  * imageContext [GoogleCloudVisionV1p2beta1ImageContext](#googlecloudvisionv1p2beta1imagecontext)
  * inputConfig [GoogleCloudVisionV1p2beta1InputConfig](#googlecloudvisionv1p2beta1inputconfig)
  * outputConfig [GoogleCloudVisionV1p2beta1OutputConfig](#googlecloudvisionv1p2beta1outputconfig)

### GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse
* GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse `object`: The response for a single offline file annotation request.
  * outputConfig [GoogleCloudVisionV1p2beta1OutputConfig](#googlecloudvisionv1p2beta1outputconfig)

### GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest
* GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest `object`: Multiple async file annotation requests are batched into a single service call.
  * parent `string`: Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
  * requests `array`: Required. Individual async file annotation requests for this batch.
    * items [GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest](#googlecloudvisionv1p2beta1asyncannotatefilerequest)

### GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse
* GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse `object`: Response to an async batch file annotation request.
  * responses `array`: The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
    * items [GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse](#googlecloudvisionv1p2beta1asyncannotatefileresponse)

### GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest
* GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest `object`: Request for async image annotation for a list of images.
  * outputConfig [GoogleCloudVisionV1p2beta1OutputConfig](#googlecloudvisionv1p2beta1outputconfig)
  * parent `string`: Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
  * requests `array`: Required. Individual image annotation requests for this batch.
    * items [GoogleCloudVisionV1p2beta1AnnotateImageRequest](#googlecloudvisionv1p2beta1annotateimagerequest)

### GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest
* GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest `object`: A list of requests to annotate files using the BatchAnnotateFiles API.
  * parent `string`: Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
  * requests `array`: Required. The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest.
    * items [GoogleCloudVisionV1p2beta1AnnotateFileRequest](#googlecloudvisionv1p2beta1annotatefilerequest)

### GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse
* GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse `object`: A list of file annotation responses.
  * responses `array`: The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.
    * items [GoogleCloudVisionV1p2beta1AnnotateFileResponse](#googlecloudvisionv1p2beta1annotatefileresponse)

### GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest
* GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest `object`: Multiple image annotation requests are batched into a single service call.
  * parent `string`: Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
  * requests `array`: Required. Individual image annotation requests for this batch.
    * items [GoogleCloudVisionV1p2beta1AnnotateImageRequest](#googlecloudvisionv1p2beta1annotateimagerequest)

### GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse
* GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse `object`: Response to a batch image annotation request.
  * responses `array`: Individual responses to image annotation requests within the batch.
    * items [GoogleCloudVisionV1p2beta1AnnotateImageResponse](#googlecloudvisionv1p2beta1annotateimageresponse)

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
* GoogleCloudVisionV1p2beta1ColorInfo `object`: Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
  * color [Color](#color)
  * pixelFraction `number`: The fraction of pixels the color occupies in the image. Value in range [0, 1].
  * score `number`: Image-specific score for this color. Value in range [0, 1].

### GoogleCloudVisionV1p2beta1CropHint
* GoogleCloudVisionV1p2beta1CropHint `object`: Single crop hint that is used to generate a new crop when serving an image.
  * boundingPoly [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: Confidence of this being a salient region. Range [0, 1].
  * importanceFraction `number`: Fraction of importance of this salient region with respect to the original image.

### GoogleCloudVisionV1p2beta1CropHintsAnnotation
* GoogleCloudVisionV1p2beta1CropHintsAnnotation `object`: Set of crop hints that are used to generate new crops when serving images.
  * cropHints `array`: Crop hint results.
    * items [GoogleCloudVisionV1p2beta1CropHint](#googlecloudvisionv1p2beta1crophint)

### GoogleCloudVisionV1p2beta1CropHintsParams
* GoogleCloudVisionV1p2beta1CropHintsParams `object`: Parameters for crop hints annotation request.
  * aspectRatios `array`: Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored.
    * items `number`

### GoogleCloudVisionV1p2beta1DominantColorsAnnotation
* GoogleCloudVisionV1p2beta1DominantColorsAnnotation `object`: Set of dominant colors and their corresponding scores.
  * colors `array`: RGB color values with their score and pixel fraction.
    * items [GoogleCloudVisionV1p2beta1ColorInfo](#googlecloudvisionv1p2beta1colorinfo)

### GoogleCloudVisionV1p2beta1EntityAnnotation
* GoogleCloudVisionV1p2beta1EntityAnnotation `object`: Set of detected entity features.
  * boundingPoly [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
  * description `string`: Entity textual description, expressed in its `locale` language.
  * locale `string`: The language code for the locale in which the entity textual `description` is expressed.
  * locations `array`: The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
    * items [GoogleCloudVisionV1p2beta1LocationInfo](#googlecloudvisionv1p2beta1locationinfo)
  * mid `string`: Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
  * properties `array`: Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
    * items [GoogleCloudVisionV1p2beta1Property](#googlecloudvisionv1p2beta1property)
  * score `number`: Overall score of the result. Range [0, 1].
  * topicality `number`: The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].

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
  * panAngle `number`: Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
  * rollAngle `number`: Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
  * sorrowLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Sorrow likelihood.
  * surpriseLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Surprise likelihood.
  * tiltAngle `number`: Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
  * underExposedLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Under-exposed likelihood.

### GoogleCloudVisionV1p2beta1FaceAnnotationLandmark
* GoogleCloudVisionV1p2beta1FaceAnnotationLandmark `object`: A face-specific landmark (for example, a face feature).
  * position [GoogleCloudVisionV1p2beta1Position](#googlecloudvisionv1p2beta1position)
  * type `string` (values: UNKNOWN_LANDMARK, LEFT_EYE, RIGHT_EYE, LEFT_OF_LEFT_EYEBROW, RIGHT_OF_LEFT_EYEBROW, LEFT_OF_RIGHT_EYEBROW, RIGHT_OF_RIGHT_EYEBROW, MIDPOINT_BETWEEN_EYES, NOSE_TIP, UPPER_LIP, LOWER_LIP, MOUTH_LEFT, MOUTH_RIGHT, MOUTH_CENTER, NOSE_BOTTOM_RIGHT, NOSE_BOTTOM_LEFT, NOSE_BOTTOM_CENTER, LEFT_EYE_TOP_BOUNDARY, LEFT_EYE_RIGHT_CORNER, LEFT_EYE_BOTTOM_BOUNDARY, LEFT_EYE_LEFT_CORNER, RIGHT_EYE_TOP_BOUNDARY, RIGHT_EYE_RIGHT_CORNER, RIGHT_EYE_BOTTOM_BOUNDARY, RIGHT_EYE_LEFT_CORNER, LEFT_EYEBROW_UPPER_MIDPOINT, RIGHT_EYEBROW_UPPER_MIDPOINT, LEFT_EAR_TRAGION, RIGHT_EAR_TRAGION, LEFT_EYE_PUPIL, RIGHT_EYE_PUPIL, FOREHEAD_GLABELLA, CHIN_GNATHION, CHIN_LEFT_GONION, CHIN_RIGHT_GONION, LEFT_CHEEK_CENTER, RIGHT_CHEEK_CENTER): Face landmark type.

### GoogleCloudVisionV1p2beta1Feature
* GoogleCloudVisionV1p2beta1Feature `object`: The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
  * maxResults `integer`: Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.
  * model `string`: Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
  * type `string` (values: TYPE_UNSPECIFIED, FACE_DETECTION, LANDMARK_DETECTION, LOGO_DETECTION, LABEL_DETECTION, TEXT_DETECTION, DOCUMENT_TEXT_DETECTION, SAFE_SEARCH_DETECTION, IMAGE_PROPERTIES, CROP_HINTS, WEB_DETECTION, PRODUCT_SEARCH, OBJECT_LOCALIZATION): The feature type.

### GoogleCloudVisionV1p2beta1GcsDestination
* GoogleCloudVisionV1p2beta1GcsDestination `object`: The Google Cloud Storage location where the output will be written to.
  * uri `string`: Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.

### GoogleCloudVisionV1p2beta1GcsSource
* GoogleCloudVisionV1p2beta1GcsSource `object`: The Google Cloud Storage location where the input will be read from.
  * uri `string`: Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.

### GoogleCloudVisionV1p2beta1Image
* GoogleCloudVisionV1p2beta1Image `object`: Client image to perform Google Cloud Vision API tasks over.
  * content `string`: Image content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateImages requests. It does not work for AsyncBatchAnnotateImages requests.
  * source [GoogleCloudVisionV1p2beta1ImageSource](#googlecloudvisionv1p2beta1imagesource)

### GoogleCloudVisionV1p2beta1ImageAnnotationContext
* GoogleCloudVisionV1p2beta1ImageAnnotationContext `object`: If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
  * pageNumber `integer`: If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
  * uri `string`: The URI of the file used to produce the image.

### GoogleCloudVisionV1p2beta1ImageContext
* GoogleCloudVisionV1p2beta1ImageContext `object`: Image context and/or feature-specific parameters.
  * cropHintsParams [GoogleCloudVisionV1p2beta1CropHintsParams](#googlecloudvisionv1p2beta1crophintsparams)
  * languageHints `array`: List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages).
    * items `string`
  * latLongRect [GoogleCloudVisionV1p2beta1LatLongRect](#googlecloudvisionv1p2beta1latlongrect)
  * productSearchParams [GoogleCloudVisionV1p2beta1ProductSearchParams](#googlecloudvisionv1p2beta1productsearchparams)
  * webDetectionParams [GoogleCloudVisionV1p2beta1WebDetectionParams](#googlecloudvisionv1p2beta1webdetectionparams)

### GoogleCloudVisionV1p2beta1ImageProperties
* GoogleCloudVisionV1p2beta1ImageProperties `object`: Stores image properties, such as dominant colors.
  * dominantColors [GoogleCloudVisionV1p2beta1DominantColorsAnnotation](#googlecloudvisionv1p2beta1dominantcolorsannotation)

### GoogleCloudVisionV1p2beta1ImageSource
* GoogleCloudVisionV1p2beta1ImageSource `object`: External image source (Google Cloud Storage or web URL image location).
  * gcsImageUri `string`: **Use `image_uri` instead.** The Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.
  * imageUri `string`: The URI of the source image. Can be either: 1. A Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes precedence.

### GoogleCloudVisionV1p2beta1InputConfig
* GoogleCloudVisionV1p2beta1InputConfig `object`: The desired input location and metadata.
  * content `string`: File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
  * gcsSource [GoogleCloudVisionV1p2beta1GcsSource](#googlecloudvisionv1p2beta1gcssource)
  * mimeType `string`: The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.

### GoogleCloudVisionV1p2beta1LatLongRect
* GoogleCloudVisionV1p2beta1LatLongRect `object`: Rectangle determined by min and max `LatLng` pairs.
  * maxLatLng [LatLng](#latlng)
  * minLatLng [LatLng](#latlng)

### GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation
* GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation `object`: Set of detected objects with bounding boxes.
  * boundingPoly [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mid `string`: Object ID that should align with EntityAnnotation mid.
  * name `string`: Object name, expressed in its `language_code` language.
  * score `number`: Score of the result. Range [0, 1].

### GoogleCloudVisionV1p2beta1LocationInfo
* GoogleCloudVisionV1p2beta1LocationInfo `object`: Detected entity location information.
  * latLng [LatLng](#latlng)

### GoogleCloudVisionV1p2beta1NormalizedVertex
* GoogleCloudVisionV1p2beta1NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVisionV1p2beta1OperationMetadata
* GoogleCloudVisionV1p2beta1OperationMetadata `object`: Contains metadata for the BatchAnnotateImages operation.
  * createTime `string`: The time when the batch request was received.
  * state `string` (values: STATE_UNSPECIFIED, CREATED, RUNNING, DONE, CANCELLED): Current state of the batch operation.
  * updateTime `string`: The time when the operation result was last updated.

### GoogleCloudVisionV1p2beta1OutputConfig
* GoogleCloudVisionV1p2beta1OutputConfig `object`: The desired output location and metadata.
  * batchSize `integer`: The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
  * gcsDestination [GoogleCloudVisionV1p2beta1GcsDestination](#googlecloudvisionv1p2beta1gcsdestination)

### GoogleCloudVisionV1p2beta1Page
* GoogleCloudVisionV1p2beta1Page `object`: Detected page from OCR.
  * blocks `array`: List of blocks of text, images etc on this page.
    * items [GoogleCloudVisionV1p2beta1Block](#googlecloudvisionv1p2beta1block)
  * confidence `number`: Confidence of the OCR results on the page. Range [0, 1].
  * height `integer`: Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
  * property [GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#googlecloudvisionv1p2beta1textannotationtextproperty)
  * width `integer`: Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.

### GoogleCloudVisionV1p2beta1Paragraph
* GoogleCloudVisionV1p2beta1Paragraph `object`: Structural unit of text representing a number of words in certain order.
  * boundingBox [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the paragraph. Range [0, 1].
  * property [GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#googlecloudvisionv1p2beta1textannotationtextproperty)
  * words `array`: List of all words in this paragraph.
    * items [GoogleCloudVisionV1p2beta1Word](#googlecloudvisionv1p2beta1word)

### GoogleCloudVisionV1p2beta1Position
* GoogleCloudVisionV1p2beta1Position `object`: A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.
  * z `number`: Z coordinate (or depth).

### GoogleCloudVisionV1p2beta1Product
* GoogleCloudVisionV1p2beta1Product `object`: A Product contains ReferenceImages.
  * description `string`: User-provided metadata to be stored with this product. Must be at most 4096 characters long.
  * displayName `string`: The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
  * name `string`: The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.
  * productCategory `string`: Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.
  * productLabels `array`: Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
    * items [GoogleCloudVisionV1p2beta1ProductKeyValue](#googlecloudvisionv1p2beta1productkeyvalue)

### GoogleCloudVisionV1p2beta1ProductKeyValue
* GoogleCloudVisionV1p2beta1ProductKeyValue `object`: A product label represented as a key-value pair.
  * key `string`: The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
  * value `string`: The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.

### GoogleCloudVisionV1p2beta1ProductSearchParams
* GoogleCloudVisionV1p2beta1ProductSearchParams `object`: Parameters for a product search request.
  * boundingPoly [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * filter `string`: The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An '=' should be used to connect the key and value. For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a ':' instead of an '='.
  * productCategories `array`: The list of product categories to search in. Currently, we only consider the first category, and either "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1", or "general-v1" should be specified. The legacy categories "homegoods", "apparel", and "toys" are still supported but will be deprecated. For new products, please use "homegoods-v2", "apparel-v2", or "toys-v2" for better product search accuracy. It is recommended to migrate existing products to these categories as well.
    * items `string`
  * productSet `string`: The resource name of a ProductSet to be searched for similar images. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.

### GoogleCloudVisionV1p2beta1ProductSearchResults
* GoogleCloudVisionV1p2beta1ProductSearchResults `object`: Results for a product search request.
  * indexTime `string`: Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
  * productGroupedResults `array`: List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
    * items [GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult](#googlecloudvisionv1p2beta1productsearchresultsgroupedresult)
  * results `array`: List of results, one for each product match.
    * items [GoogleCloudVisionV1p2beta1ProductSearchResultsResult](#googlecloudvisionv1p2beta1productsearchresultsresult)

### GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult
* GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult `object`: Information about the products similar to a single product in a query image.
  * boundingPoly [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * objectAnnotations `array`: List of generic predictions for the object in the bounding box.
    * items [GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation](#googlecloudvisionv1p2beta1productsearchresultsobjectannotation)
  * results `array`: List of results, one for each product match.
    * items [GoogleCloudVisionV1p2beta1ProductSearchResultsResult](#googlecloudvisionv1p2beta1productsearchresultsresult)

### GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation
* GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation `object`: Prediction for what the object in the bounding box is.
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mid `string`: Object ID that should align with EntityAnnotation mid.
  * name `string`: Object name, expressed in its `language_code` language.
  * score `number`: Score of the result. Range [0, 1].

### GoogleCloudVisionV1p2beta1ProductSearchResultsResult
* GoogleCloudVisionV1p2beta1ProductSearchResultsResult `object`: Information about a product.
  * image `string`: The resource name of the image from the product that is the closest match to the query.
  * product [GoogleCloudVisionV1p2beta1Product](#googlecloudvisionv1p2beta1product)
  * score `number`: A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).

### GoogleCloudVisionV1p2beta1Property
* GoogleCloudVisionV1p2beta1Property `object`: A `Property` consists of a user-supplied name/value pair.
  * name `string`: Name of the property.
  * uint64Value `string`: Value of numeric properties.
  * value `string`: Value of the property.

### GoogleCloudVisionV1p2beta1SafeSearchAnnotation
* GoogleCloudVisionV1p2beta1SafeSearchAnnotation `object`: Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
  * adult `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
  * medical `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this is a medical image.
  * racy `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
  * spoof `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.
  * violence `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this image contains violent content.

### GoogleCloudVisionV1p2beta1Symbol
* GoogleCloudVisionV1p2beta1Symbol `object`: A single symbol representation.
  * boundingBox [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the symbol. Range [0, 1].
  * property [GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#googlecloudvisionv1p2beta1textannotationtextproperty)
  * text `string`: The actual UTF-8 representation of the symbol.

### GoogleCloudVisionV1p2beta1TextAnnotation
* GoogleCloudVisionV1p2beta1TextAnnotation `object`: TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
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
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudVisionV1p2beta1TextAnnotationTextProperty
* GoogleCloudVisionV1p2beta1TextAnnotationTextProperty `object`: Additional information detected on the structural component.
  * detectedBreak [GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak](#googlecloudvisionv1p2beta1textannotationdetectedbreak)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage](#googlecloudvisionv1p2beta1textannotationdetectedlanguage)

### GoogleCloudVisionV1p2beta1Vertex
* GoogleCloudVisionV1p2beta1Vertex `object`: A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### GoogleCloudVisionV1p2beta1WebDetection
* GoogleCloudVisionV1p2beta1WebDetection `object`: Relevant information for the image from the Internet.
  * bestGuessLabels `array`: The service's best guess as to the topic of the request image. Inferred from similar images on the open web.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebLabel](#googlecloudvisionv1p2beta1webdetectionweblabel)
  * fullMatchingImages `array`: Fully matching images from the Internet. Can include resized copies of the query image.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebImage](#googlecloudvisionv1p2beta1webdetectionwebimage)
  * pagesWithMatchingImages `array`: Web pages containing the matching images from the Internet.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebPage](#googlecloudvisionv1p2beta1webdetectionwebpage)
  * partialMatchingImages `array`: Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebImage](#googlecloudvisionv1p2beta1webdetectionwebimage)
  * visuallySimilarImages `array`: The visually similar image results.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebImage](#googlecloudvisionv1p2beta1webdetectionwebimage)
  * webEntities `array`: Deduced entities from similar images on the Internet.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebEntity](#googlecloudvisionv1p2beta1webdetectionwebentity)

### GoogleCloudVisionV1p2beta1WebDetectionParams
* GoogleCloudVisionV1p2beta1WebDetectionParams `object`: Parameters for web detection request.
  * includeGeoResults `boolean`: Whether to include results derived from the geo information in the image.

### GoogleCloudVisionV1p2beta1WebDetectionWebEntity
* GoogleCloudVisionV1p2beta1WebDetectionWebEntity `object`: Entity deduced from similar images on the Internet.
  * description `string`: Canonical description of the entity, in English.
  * entityId `string`: Opaque entity ID.
  * score `number`: Overall relevancy score for the entity. Not normalized and not comparable across different image queries.

### GoogleCloudVisionV1p2beta1WebDetectionWebImage
* GoogleCloudVisionV1p2beta1WebDetectionWebImage `object`: Metadata for online images.
  * score `number`: (Deprecated) Overall relevancy score for the image.
  * url `string`: The result image URL.

### GoogleCloudVisionV1p2beta1WebDetectionWebLabel
* GoogleCloudVisionV1p2beta1WebDetectionWebLabel `object`: Label to provide extra metadata for the web detection.
  * label `string`: Label for extra metadata.
  * languageCode `string`: The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudVisionV1p2beta1WebDetectionWebPage
* GoogleCloudVisionV1p2beta1WebDetectionWebPage `object`: Metadata for web pages.
  * fullMatchingImages `array`: Fully matching images on the page. Can include resized copies of the query image.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebImage](#googlecloudvisionv1p2beta1webdetectionwebimage)
  * pageTitle `string`: Title for the web page, may contain HTML markups.
  * partialMatchingImages `array`: Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
    * items [GoogleCloudVisionV1p2beta1WebDetectionWebImage](#googlecloudvisionv1p2beta1webdetectionwebimage)
  * score `number`: (Deprecated) Overall relevancy score for the web page.
  * url `string`: The result web page URL.

### GoogleCloudVisionV1p2beta1Word
* GoogleCloudVisionV1p2beta1Word `object`: A word representation.
  * boundingBox [GoogleCloudVisionV1p2beta1BoundingPoly](#googlecloudvisionv1p2beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the word. Range [0, 1].
  * property [GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#googlecloudvisionv1p2beta1textannotationtextproperty)
  * symbols `array`: List of symbols in the word. The order of the symbols follows the natural reading order.
    * items [GoogleCloudVisionV1p2beta1Symbol](#googlecloudvisionv1p2beta1symbol)

### GoogleCloudVisionV1p3beta1AnnotateFileResponse
* GoogleCloudVisionV1p3beta1AnnotateFileResponse `object`: Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
  * responses `array`: Individual responses to images found within the file. This field will be empty if the `error` field is set.
    * items [GoogleCloudVisionV1p3beta1AnnotateImageResponse](#googlecloudvisionv1p3beta1annotateimageresponse)
  * error [Status](#status)
  * inputConfig [GoogleCloudVisionV1p3beta1InputConfig](#googlecloudvisionv1p3beta1inputconfig)
  * totalPages `integer`: This field gives the total number of pages in the file.

### GoogleCloudVisionV1p3beta1AnnotateImageResponse
* GoogleCloudVisionV1p3beta1AnnotateImageResponse `object`: Response to an image annotation request.
  * context [GoogleCloudVisionV1p3beta1ImageAnnotationContext](#googlecloudvisionv1p3beta1imageannotationcontext)
  * cropHintsAnnotation [GoogleCloudVisionV1p3beta1CropHintsAnnotation](#googlecloudvisionv1p3beta1crophintsannotation)
  * error [Status](#status)
  * faceAnnotations `array`: If present, face detection has completed successfully.
    * items [GoogleCloudVisionV1p3beta1FaceAnnotation](#googlecloudvisionv1p3beta1faceannotation)
  * fullTextAnnotation [GoogleCloudVisionV1p3beta1TextAnnotation](#googlecloudvisionv1p3beta1textannotation)
  * imagePropertiesAnnotation [GoogleCloudVisionV1p3beta1ImageProperties](#googlecloudvisionv1p3beta1imageproperties)
  * labelAnnotations `array`: If present, label detection has completed successfully.
    * items [GoogleCloudVisionV1p3beta1EntityAnnotation](#googlecloudvisionv1p3beta1entityannotation)
  * landmarkAnnotations `array`: If present, landmark detection has completed successfully.
    * items [GoogleCloudVisionV1p3beta1EntityAnnotation](#googlecloudvisionv1p3beta1entityannotation)
  * localizedObjectAnnotations `array`: If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
    * items [GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation](#googlecloudvisionv1p3beta1localizedobjectannotation)
  * logoAnnotations `array`: If present, logo detection has completed successfully.
    * items [GoogleCloudVisionV1p3beta1EntityAnnotation](#googlecloudvisionv1p3beta1entityannotation)
  * productSearchResults [GoogleCloudVisionV1p3beta1ProductSearchResults](#googlecloudvisionv1p3beta1productsearchresults)
  * safeSearchAnnotation [GoogleCloudVisionV1p3beta1SafeSearchAnnotation](#googlecloudvisionv1p3beta1safesearchannotation)
  * textAnnotations `array`: If present, text (OCR) detection has completed successfully.
    * items [GoogleCloudVisionV1p3beta1EntityAnnotation](#googlecloudvisionv1p3beta1entityannotation)
  * webDetection [GoogleCloudVisionV1p3beta1WebDetection](#googlecloudvisionv1p3beta1webdetection)

### GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse
* GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse `object`: The response for a single offline file annotation request.
  * outputConfig [GoogleCloudVisionV1p3beta1OutputConfig](#googlecloudvisionv1p3beta1outputconfig)

### GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse
* GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse `object`: Response to an async batch file annotation request.
  * responses `array`: The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
    * items [GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse](#googlecloudvisionv1p3beta1asyncannotatefileresponse)

### GoogleCloudVisionV1p3beta1BatchOperationMetadata
* GoogleCloudVisionV1p3beta1BatchOperationMetadata `object`: Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * endTime `string`: The time when the batch request is finished and google.longrunning.Operation.done is set to true.
  * state `string` (values: STATE_UNSPECIFIED, PROCESSING, SUCCESSFUL, FAILED, CANCELLED): The current state of the batch operation.
  * submitTime `string`: The time when the batch request was submitted to the server.

### GoogleCloudVisionV1p3beta1Block
* GoogleCloudVisionV1p3beta1Block `object`: Logical element on the page.
  * blockType `string` (values: UNKNOWN, TEXT, TABLE, PICTURE, RULER, BARCODE): Detected block type (text, image etc) for this block.
  * boundingBox [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results on the block. Range [0, 1].
  * paragraphs `array`: List of paragraphs in this block (if this blocks is of type text).
    * items [GoogleCloudVisionV1p3beta1Paragraph](#googlecloudvisionv1p3beta1paragraph)
  * property [GoogleCloudVisionV1p3beta1TextAnnotationTextProperty](#googlecloudvisionv1p3beta1textannotationtextproperty)

### GoogleCloudVisionV1p3beta1BoundingPoly
* GoogleCloudVisionV1p3beta1BoundingPoly `object`: A bounding polygon for the detected image annotation.
  * normalizedVertices `array`: The bounding polygon normalized vertices.
    * items [GoogleCloudVisionV1p3beta1NormalizedVertex](#googlecloudvisionv1p3beta1normalizedvertex)
  * vertices `array`: The bounding polygon vertices.
    * items [GoogleCloudVisionV1p3beta1Vertex](#googlecloudvisionv1p3beta1vertex)

### GoogleCloudVisionV1p3beta1ColorInfo
* GoogleCloudVisionV1p3beta1ColorInfo `object`: Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
  * color [Color](#color)
  * pixelFraction `number`: The fraction of pixels the color occupies in the image. Value in range [0, 1].
  * score `number`: Image-specific score for this color. Value in range [0, 1].

### GoogleCloudVisionV1p3beta1CropHint
* GoogleCloudVisionV1p3beta1CropHint `object`: Single crop hint that is used to generate a new crop when serving an image.
  * boundingPoly [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * confidence `number`: Confidence of this being a salient region. Range [0, 1].
  * importanceFraction `number`: Fraction of importance of this salient region with respect to the original image.

### GoogleCloudVisionV1p3beta1CropHintsAnnotation
* GoogleCloudVisionV1p3beta1CropHintsAnnotation `object`: Set of crop hints that are used to generate new crops when serving images.
  * cropHints `array`: Crop hint results.
    * items [GoogleCloudVisionV1p3beta1CropHint](#googlecloudvisionv1p3beta1crophint)

### GoogleCloudVisionV1p3beta1DominantColorsAnnotation
* GoogleCloudVisionV1p3beta1DominantColorsAnnotation `object`: Set of dominant colors and their corresponding scores.
  * colors `array`: RGB color values with their score and pixel fraction.
    * items [GoogleCloudVisionV1p3beta1ColorInfo](#googlecloudvisionv1p3beta1colorinfo)

### GoogleCloudVisionV1p3beta1EntityAnnotation
* GoogleCloudVisionV1p3beta1EntityAnnotation `object`: Set of detected entity features.
  * boundingPoly [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * confidence `number`: **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
  * description `string`: Entity textual description, expressed in its `locale` language.
  * locale `string`: The language code for the locale in which the entity textual `description` is expressed.
  * locations `array`: The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
    * items [GoogleCloudVisionV1p3beta1LocationInfo](#googlecloudvisionv1p3beta1locationinfo)
  * mid `string`: Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
  * properties `array`: Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
    * items [GoogleCloudVisionV1p3beta1Property](#googlecloudvisionv1p3beta1property)
  * score `number`: Overall score of the result. Range [0, 1].
  * topicality `number`: The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].

### GoogleCloudVisionV1p3beta1FaceAnnotation
* GoogleCloudVisionV1p3beta1FaceAnnotation `object`: A face annotation object contains the results of face detection.
  * angerLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Anger likelihood.
  * blurredLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Blurred likelihood.
  * boundingPoly [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * detectionConfidence `number`: Detection confidence. Range [0, 1].
  * fdBoundingPoly [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * headwearLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Headwear likelihood.
  * joyLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Joy likelihood.
  * landmarkingConfidence `number`: Face landmarking confidence. Range [0, 1].
  * landmarks `array`: Detected face landmarks.
    * items [GoogleCloudVisionV1p3beta1FaceAnnotationLandmark](#googlecloudvisionv1p3beta1faceannotationlandmark)
  * panAngle `number`: Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
  * rollAngle `number`: Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
  * sorrowLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Sorrow likelihood.
  * surpriseLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Surprise likelihood.
  * tiltAngle `number`: Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
  * underExposedLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Under-exposed likelihood.

### GoogleCloudVisionV1p3beta1FaceAnnotationLandmark
* GoogleCloudVisionV1p3beta1FaceAnnotationLandmark `object`: A face-specific landmark (for example, a face feature).
  * position [GoogleCloudVisionV1p3beta1Position](#googlecloudvisionv1p3beta1position)
  * type `string` (values: UNKNOWN_LANDMARK, LEFT_EYE, RIGHT_EYE, LEFT_OF_LEFT_EYEBROW, RIGHT_OF_LEFT_EYEBROW, LEFT_OF_RIGHT_EYEBROW, RIGHT_OF_RIGHT_EYEBROW, MIDPOINT_BETWEEN_EYES, NOSE_TIP, UPPER_LIP, LOWER_LIP, MOUTH_LEFT, MOUTH_RIGHT, MOUTH_CENTER, NOSE_BOTTOM_RIGHT, NOSE_BOTTOM_LEFT, NOSE_BOTTOM_CENTER, LEFT_EYE_TOP_BOUNDARY, LEFT_EYE_RIGHT_CORNER, LEFT_EYE_BOTTOM_BOUNDARY, LEFT_EYE_LEFT_CORNER, RIGHT_EYE_TOP_BOUNDARY, RIGHT_EYE_RIGHT_CORNER, RIGHT_EYE_BOTTOM_BOUNDARY, RIGHT_EYE_LEFT_CORNER, LEFT_EYEBROW_UPPER_MIDPOINT, RIGHT_EYEBROW_UPPER_MIDPOINT, LEFT_EAR_TRAGION, RIGHT_EAR_TRAGION, LEFT_EYE_PUPIL, RIGHT_EYE_PUPIL, FOREHEAD_GLABELLA, CHIN_GNATHION, CHIN_LEFT_GONION, CHIN_RIGHT_GONION, LEFT_CHEEK_CENTER, RIGHT_CHEEK_CENTER): Face landmark type.

### GoogleCloudVisionV1p3beta1GcsDestination
* GoogleCloudVisionV1p3beta1GcsDestination `object`: The Google Cloud Storage location where the output will be written to.
  * uri `string`: Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.

### GoogleCloudVisionV1p3beta1GcsSource
* GoogleCloudVisionV1p3beta1GcsSource `object`: The Google Cloud Storage location where the input will be read from.
  * uri `string`: Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.

### GoogleCloudVisionV1p3beta1ImageAnnotationContext
* GoogleCloudVisionV1p3beta1ImageAnnotationContext `object`: If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
  * pageNumber `integer`: If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
  * uri `string`: The URI of the file used to produce the image.

### GoogleCloudVisionV1p3beta1ImageProperties
* GoogleCloudVisionV1p3beta1ImageProperties `object`: Stores image properties, such as dominant colors.
  * dominantColors [GoogleCloudVisionV1p3beta1DominantColorsAnnotation](#googlecloudvisionv1p3beta1dominantcolorsannotation)

### GoogleCloudVisionV1p3beta1ImportProductSetsResponse
* GoogleCloudVisionV1p3beta1ImportProductSetsResponse `object`: Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.
  * referenceImages `array`: The list of reference_images that are imported successfully.
    * items [GoogleCloudVisionV1p3beta1ReferenceImage](#googlecloudvisionv1p3beta1referenceimage)
  * statuses `array`: The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.
    * items [Status](#status)

### GoogleCloudVisionV1p3beta1InputConfig
* GoogleCloudVisionV1p3beta1InputConfig `object`: The desired input location and metadata.
  * content `string`: File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
  * gcsSource [GoogleCloudVisionV1p3beta1GcsSource](#googlecloudvisionv1p3beta1gcssource)
  * mimeType `string`: The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.

### GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation
* GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation `object`: Set of detected objects with bounding boxes.
  * boundingPoly [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mid `string`: Object ID that should align with EntityAnnotation mid.
  * name `string`: Object name, expressed in its `language_code` language.
  * score `number`: Score of the result. Range [0, 1].

### GoogleCloudVisionV1p3beta1LocationInfo
* GoogleCloudVisionV1p3beta1LocationInfo `object`: Detected entity location information.
  * latLng [LatLng](#latlng)

### GoogleCloudVisionV1p3beta1NormalizedVertex
* GoogleCloudVisionV1p3beta1NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVisionV1p3beta1OperationMetadata
* GoogleCloudVisionV1p3beta1OperationMetadata `object`: Contains metadata for the BatchAnnotateImages operation.
  * createTime `string`: The time when the batch request was received.
  * state `string` (values: STATE_UNSPECIFIED, CREATED, RUNNING, DONE, CANCELLED): Current state of the batch operation.
  * updateTime `string`: The time when the operation result was last updated.

### GoogleCloudVisionV1p3beta1OutputConfig
* GoogleCloudVisionV1p3beta1OutputConfig `object`: The desired output location and metadata.
  * batchSize `integer`: The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
  * gcsDestination [GoogleCloudVisionV1p3beta1GcsDestination](#googlecloudvisionv1p3beta1gcsdestination)

### GoogleCloudVisionV1p3beta1Page
* GoogleCloudVisionV1p3beta1Page `object`: Detected page from OCR.
  * blocks `array`: List of blocks of text, images etc on this page.
    * items [GoogleCloudVisionV1p3beta1Block](#googlecloudvisionv1p3beta1block)
  * confidence `number`: Confidence of the OCR results on the page. Range [0, 1].
  * height `integer`: Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
  * property [GoogleCloudVisionV1p3beta1TextAnnotationTextProperty](#googlecloudvisionv1p3beta1textannotationtextproperty)
  * width `integer`: Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.

### GoogleCloudVisionV1p3beta1Paragraph
* GoogleCloudVisionV1p3beta1Paragraph `object`: Structural unit of text representing a number of words in certain order.
  * boundingBox [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the paragraph. Range [0, 1].
  * property [GoogleCloudVisionV1p3beta1TextAnnotationTextProperty](#googlecloudvisionv1p3beta1textannotationtextproperty)
  * words `array`: List of all words in this paragraph.
    * items [GoogleCloudVisionV1p3beta1Word](#googlecloudvisionv1p3beta1word)

### GoogleCloudVisionV1p3beta1Position
* GoogleCloudVisionV1p3beta1Position `object`: A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.
  * z `number`: Z coordinate (or depth).

### GoogleCloudVisionV1p3beta1Product
* GoogleCloudVisionV1p3beta1Product `object`: A Product contains ReferenceImages.
  * description `string`: User-provided metadata to be stored with this product. Must be at most 4096 characters long.
  * displayName `string`: The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
  * name `string`: The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.
  * productCategory `string`: Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.
  * productLabels `array`: Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
    * items [GoogleCloudVisionV1p3beta1ProductKeyValue](#googlecloudvisionv1p3beta1productkeyvalue)

### GoogleCloudVisionV1p3beta1ProductKeyValue
* GoogleCloudVisionV1p3beta1ProductKeyValue `object`: A product label represented as a key-value pair.
  * key `string`: The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
  * value `string`: The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.

### GoogleCloudVisionV1p3beta1ProductSearchResults
* GoogleCloudVisionV1p3beta1ProductSearchResults `object`: Results for a product search request.
  * indexTime `string`: Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
  * productGroupedResults `array`: List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
    * items [GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult](#googlecloudvisionv1p3beta1productsearchresultsgroupedresult)
  * results `array`: List of results, one for each product match.
    * items [GoogleCloudVisionV1p3beta1ProductSearchResultsResult](#googlecloudvisionv1p3beta1productsearchresultsresult)

### GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult
* GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult `object`: Information about the products similar to a single product in a query image.
  * boundingPoly [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * objectAnnotations `array`: List of generic predictions for the object in the bounding box.
    * items [GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation](#googlecloudvisionv1p3beta1productsearchresultsobjectannotation)
  * results `array`: List of results, one for each product match.
    * items [GoogleCloudVisionV1p3beta1ProductSearchResultsResult](#googlecloudvisionv1p3beta1productsearchresultsresult)

### GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation
* GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation `object`: Prediction for what the object in the bounding box is.
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mid `string`: Object ID that should align with EntityAnnotation mid.
  * name `string`: Object name, expressed in its `language_code` language.
  * score `number`: Score of the result. Range [0, 1].

### GoogleCloudVisionV1p3beta1ProductSearchResultsResult
* GoogleCloudVisionV1p3beta1ProductSearchResultsResult `object`: Information about a product.
  * image `string`: The resource name of the image from the product that is the closest match to the query.
  * product [GoogleCloudVisionV1p3beta1Product](#googlecloudvisionv1p3beta1product)
  * score `number`: A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).

### GoogleCloudVisionV1p3beta1Property
* GoogleCloudVisionV1p3beta1Property `object`: A `Property` consists of a user-supplied name/value pair.
  * name `string`: Name of the property.
  * uint64Value `string`: Value of numeric properties.
  * value `string`: Value of the property.

### GoogleCloudVisionV1p3beta1ReferenceImage
* GoogleCloudVisionV1p3beta1ReferenceImage `object`: A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
  * boundingPolys `array`: Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).
    * items [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * name `string`: The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.
  * uri `string`: Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.

### GoogleCloudVisionV1p3beta1SafeSearchAnnotation
* GoogleCloudVisionV1p3beta1SafeSearchAnnotation `object`: Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
  * adult `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
  * medical `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this is a medical image.
  * racy `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
  * spoof `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.
  * violence `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this image contains violent content.

### GoogleCloudVisionV1p3beta1Symbol
* GoogleCloudVisionV1p3beta1Symbol `object`: A single symbol representation.
  * boundingBox [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the symbol. Range [0, 1].
  * property [GoogleCloudVisionV1p3beta1TextAnnotationTextProperty](#googlecloudvisionv1p3beta1textannotationtextproperty)
  * text `string`: The actual UTF-8 representation of the symbol.

### GoogleCloudVisionV1p3beta1TextAnnotation
* GoogleCloudVisionV1p3beta1TextAnnotation `object`: TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
  * pages `array`: List of pages detected by OCR.
    * items [GoogleCloudVisionV1p3beta1Page](#googlecloudvisionv1p3beta1page)
  * text `string`: UTF-8 text detected on the pages.

### GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak
* GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak `object`: Detected start or end of a structural component.
  * isPrefix `boolean`: True if break prepends the element.
  * type `string` (values: UNKNOWN, SPACE, SURE_SPACE, EOL_SURE_SPACE, HYPHEN, LINE_BREAK): Detected break type.

### GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage
* GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage `object`: Detected language for a structural component.
  * confidence `number`: Confidence of detected language. Range [0, 1].
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudVisionV1p3beta1TextAnnotationTextProperty
* GoogleCloudVisionV1p3beta1TextAnnotationTextProperty `object`: Additional information detected on the structural component.
  * detectedBreak [GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak](#googlecloudvisionv1p3beta1textannotationdetectedbreak)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage](#googlecloudvisionv1p3beta1textannotationdetectedlanguage)

### GoogleCloudVisionV1p3beta1Vertex
* GoogleCloudVisionV1p3beta1Vertex `object`: A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### GoogleCloudVisionV1p3beta1WebDetection
* GoogleCloudVisionV1p3beta1WebDetection `object`: Relevant information for the image from the Internet.
  * bestGuessLabels `array`: The service's best guess as to the topic of the request image. Inferred from similar images on the open web.
    * items [GoogleCloudVisionV1p3beta1WebDetectionWebLabel](#googlecloudvisionv1p3beta1webdetectionweblabel)
  * fullMatchingImages `array`: Fully matching images from the Internet. Can include resized copies of the query image.
    * items [GoogleCloudVisionV1p3beta1WebDetectionWebImage](#googlecloudvisionv1p3beta1webdetectionwebimage)
  * pagesWithMatchingImages `array`: Web pages containing the matching images from the Internet.
    * items [GoogleCloudVisionV1p3beta1WebDetectionWebPage](#googlecloudvisionv1p3beta1webdetectionwebpage)
  * partialMatchingImages `array`: Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
    * items [GoogleCloudVisionV1p3beta1WebDetectionWebImage](#googlecloudvisionv1p3beta1webdetectionwebimage)
  * visuallySimilarImages `array`: The visually similar image results.
    * items [GoogleCloudVisionV1p3beta1WebDetectionWebImage](#googlecloudvisionv1p3beta1webdetectionwebimage)
  * webEntities `array`: Deduced entities from similar images on the Internet.
    * items [GoogleCloudVisionV1p3beta1WebDetectionWebEntity](#googlecloudvisionv1p3beta1webdetectionwebentity)

### GoogleCloudVisionV1p3beta1WebDetectionWebEntity
* GoogleCloudVisionV1p3beta1WebDetectionWebEntity `object`: Entity deduced from similar images on the Internet.
  * description `string`: Canonical description of the entity, in English.
  * entityId `string`: Opaque entity ID.
  * score `number`: Overall relevancy score for the entity. Not normalized and not comparable across different image queries.

### GoogleCloudVisionV1p3beta1WebDetectionWebImage
* GoogleCloudVisionV1p3beta1WebDetectionWebImage `object`: Metadata for online images.
  * score `number`: (Deprecated) Overall relevancy score for the image.
  * url `string`: The result image URL.

### GoogleCloudVisionV1p3beta1WebDetectionWebLabel
* GoogleCloudVisionV1p3beta1WebDetectionWebLabel `object`: Label to provide extra metadata for the web detection.
  * label `string`: Label for extra metadata.
  * languageCode `string`: The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudVisionV1p3beta1WebDetectionWebPage
* GoogleCloudVisionV1p3beta1WebDetectionWebPage `object`: Metadata for web pages.
  * fullMatchingImages `array`: Fully matching images on the page. Can include resized copies of the query image.
    * items [GoogleCloudVisionV1p3beta1WebDetectionWebImage](#googlecloudvisionv1p3beta1webdetectionwebimage)
  * pageTitle `string`: Title for the web page, may contain HTML markups.
  * partialMatchingImages `array`: Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
    * items [GoogleCloudVisionV1p3beta1WebDetectionWebImage](#googlecloudvisionv1p3beta1webdetectionwebimage)
  * score `number`: (Deprecated) Overall relevancy score for the web page.
  * url `string`: The result web page URL.

### GoogleCloudVisionV1p3beta1Word
* GoogleCloudVisionV1p3beta1Word `object`: A word representation.
  * boundingBox [GoogleCloudVisionV1p3beta1BoundingPoly](#googlecloudvisionv1p3beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the word. Range [0, 1].
  * property [GoogleCloudVisionV1p3beta1TextAnnotationTextProperty](#googlecloudvisionv1p3beta1textannotationtextproperty)
  * symbols `array`: List of symbols in the word. The order of the symbols follows the natural reading order.
    * items [GoogleCloudVisionV1p3beta1Symbol](#googlecloudvisionv1p3beta1symbol)

### GoogleCloudVisionV1p4beta1AnnotateFileResponse
* GoogleCloudVisionV1p4beta1AnnotateFileResponse `object`: Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
  * responses `array`: Individual responses to images found within the file. This field will be empty if the `error` field is set.
    * items [GoogleCloudVisionV1p4beta1AnnotateImageResponse](#googlecloudvisionv1p4beta1annotateimageresponse)
  * error [Status](#status)
  * inputConfig [GoogleCloudVisionV1p4beta1InputConfig](#googlecloudvisionv1p4beta1inputconfig)
  * totalPages `integer`: This field gives the total number of pages in the file.

### GoogleCloudVisionV1p4beta1AnnotateImageResponse
* GoogleCloudVisionV1p4beta1AnnotateImageResponse `object`: Response to an image annotation request.
  * context [GoogleCloudVisionV1p4beta1ImageAnnotationContext](#googlecloudvisionv1p4beta1imageannotationcontext)
  * cropHintsAnnotation [GoogleCloudVisionV1p4beta1CropHintsAnnotation](#googlecloudvisionv1p4beta1crophintsannotation)
  * error [Status](#status)
  * faceAnnotations `array`: If present, face detection has completed successfully.
    * items [GoogleCloudVisionV1p4beta1FaceAnnotation](#googlecloudvisionv1p4beta1faceannotation)
  * fullTextAnnotation [GoogleCloudVisionV1p4beta1TextAnnotation](#googlecloudvisionv1p4beta1textannotation)
  * imagePropertiesAnnotation [GoogleCloudVisionV1p4beta1ImageProperties](#googlecloudvisionv1p4beta1imageproperties)
  * labelAnnotations `array`: If present, label detection has completed successfully.
    * items [GoogleCloudVisionV1p4beta1EntityAnnotation](#googlecloudvisionv1p4beta1entityannotation)
  * landmarkAnnotations `array`: If present, landmark detection has completed successfully.
    * items [GoogleCloudVisionV1p4beta1EntityAnnotation](#googlecloudvisionv1p4beta1entityannotation)
  * localizedObjectAnnotations `array`: If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
    * items [GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation](#googlecloudvisionv1p4beta1localizedobjectannotation)
  * logoAnnotations `array`: If present, logo detection has completed successfully.
    * items [GoogleCloudVisionV1p4beta1EntityAnnotation](#googlecloudvisionv1p4beta1entityannotation)
  * productSearchResults [GoogleCloudVisionV1p4beta1ProductSearchResults](#googlecloudvisionv1p4beta1productsearchresults)
  * safeSearchAnnotation [GoogleCloudVisionV1p4beta1SafeSearchAnnotation](#googlecloudvisionv1p4beta1safesearchannotation)
  * textAnnotations `array`: If present, text (OCR) detection has completed successfully.
    * items [GoogleCloudVisionV1p4beta1EntityAnnotation](#googlecloudvisionv1p4beta1entityannotation)
  * webDetection [GoogleCloudVisionV1p4beta1WebDetection](#googlecloudvisionv1p4beta1webdetection)

### GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse
* GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse `object`: The response for a single offline file annotation request.
  * outputConfig [GoogleCloudVisionV1p4beta1OutputConfig](#googlecloudvisionv1p4beta1outputconfig)

### GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse
* GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse `object`: Response to an async batch file annotation request.
  * responses `array`: The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
    * items [GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse](#googlecloudvisionv1p4beta1asyncannotatefileresponse)

### GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse
* GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse `object`: Response to an async batch image annotation request.
  * outputConfig [GoogleCloudVisionV1p4beta1OutputConfig](#googlecloudvisionv1p4beta1outputconfig)

### GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse
* GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse `object`: A list of file annotation responses.
  * responses `array`: The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.
    * items [GoogleCloudVisionV1p4beta1AnnotateFileResponse](#googlecloudvisionv1p4beta1annotatefileresponse)

### GoogleCloudVisionV1p4beta1BatchOperationMetadata
* GoogleCloudVisionV1p4beta1BatchOperationMetadata `object`: Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
  * endTime `string`: The time when the batch request is finished and google.longrunning.Operation.done is set to true.
  * state `string` (values: STATE_UNSPECIFIED, PROCESSING, SUCCESSFUL, FAILED, CANCELLED): The current state of the batch operation.
  * submitTime `string`: The time when the batch request was submitted to the server.

### GoogleCloudVisionV1p4beta1Block
* GoogleCloudVisionV1p4beta1Block `object`: Logical element on the page.
  * blockType `string` (values: UNKNOWN, TEXT, TABLE, PICTURE, RULER, BARCODE): Detected block type (text, image etc) for this block.
  * boundingBox [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results on the block. Range [0, 1].
  * paragraphs `array`: List of paragraphs in this block (if this blocks is of type text).
    * items [GoogleCloudVisionV1p4beta1Paragraph](#googlecloudvisionv1p4beta1paragraph)
  * property [GoogleCloudVisionV1p4beta1TextAnnotationTextProperty](#googlecloudvisionv1p4beta1textannotationtextproperty)

### GoogleCloudVisionV1p4beta1BoundingPoly
* GoogleCloudVisionV1p4beta1BoundingPoly `object`: A bounding polygon for the detected image annotation.
  * normalizedVertices `array`: The bounding polygon normalized vertices.
    * items [GoogleCloudVisionV1p4beta1NormalizedVertex](#googlecloudvisionv1p4beta1normalizedvertex)
  * vertices `array`: The bounding polygon vertices.
    * items [GoogleCloudVisionV1p4beta1Vertex](#googlecloudvisionv1p4beta1vertex)

### GoogleCloudVisionV1p4beta1Celebrity
* GoogleCloudVisionV1p4beta1Celebrity `object`: A Celebrity is a group of Faces with an identity.
  * description `string`: The Celebrity's description.
  * displayName `string`: The Celebrity's display name.
  * name `string`: The resource name of the preloaded Celebrity. Has the format `builtin/{mid}`.

### GoogleCloudVisionV1p4beta1ColorInfo
* GoogleCloudVisionV1p4beta1ColorInfo `object`: Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
  * color [Color](#color)
  * pixelFraction `number`: The fraction of pixels the color occupies in the image. Value in range [0, 1].
  * score `number`: Image-specific score for this color. Value in range [0, 1].

### GoogleCloudVisionV1p4beta1CropHint
* GoogleCloudVisionV1p4beta1CropHint `object`: Single crop hint that is used to generate a new crop when serving an image.
  * boundingPoly [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * confidence `number`: Confidence of this being a salient region. Range [0, 1].
  * importanceFraction `number`: Fraction of importance of this salient region with respect to the original image.

### GoogleCloudVisionV1p4beta1CropHintsAnnotation
* GoogleCloudVisionV1p4beta1CropHintsAnnotation `object`: Set of crop hints that are used to generate new crops when serving images.
  * cropHints `array`: Crop hint results.
    * items [GoogleCloudVisionV1p4beta1CropHint](#googlecloudvisionv1p4beta1crophint)

### GoogleCloudVisionV1p4beta1DominantColorsAnnotation
* GoogleCloudVisionV1p4beta1DominantColorsAnnotation `object`: Set of dominant colors and their corresponding scores.
  * colors `array`: RGB color values with their score and pixel fraction.
    * items [GoogleCloudVisionV1p4beta1ColorInfo](#googlecloudvisionv1p4beta1colorinfo)

### GoogleCloudVisionV1p4beta1EntityAnnotation
* GoogleCloudVisionV1p4beta1EntityAnnotation `object`: Set of detected entity features.
  * boundingPoly [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * confidence `number`: **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
  * description `string`: Entity textual description, expressed in its `locale` language.
  * locale `string`: The language code for the locale in which the entity textual `description` is expressed.
  * locations `array`: The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
    * items [GoogleCloudVisionV1p4beta1LocationInfo](#googlecloudvisionv1p4beta1locationinfo)
  * mid `string`: Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
  * properties `array`: Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
    * items [GoogleCloudVisionV1p4beta1Property](#googlecloudvisionv1p4beta1property)
  * score `number`: Overall score of the result. Range [0, 1].
  * topicality `number`: The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].

### GoogleCloudVisionV1p4beta1FaceAnnotation
* GoogleCloudVisionV1p4beta1FaceAnnotation `object`: A face annotation object contains the results of face detection.
  * angerLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Anger likelihood.
  * blurredLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Blurred likelihood.
  * boundingPoly [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * detectionConfidence `number`: Detection confidence. Range [0, 1].
  * fdBoundingPoly [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * headwearLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Headwear likelihood.
  * joyLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Joy likelihood.
  * landmarkingConfidence `number`: Face landmarking confidence. Range [0, 1].
  * landmarks `array`: Detected face landmarks.
    * items [GoogleCloudVisionV1p4beta1FaceAnnotationLandmark](#googlecloudvisionv1p4beta1faceannotationlandmark)
  * panAngle `number`: Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
  * recognitionResult `array`: Additional recognition information. Only computed if image_context.face_recognition_params is provided, **and** a match is found to a Celebrity in the input CelebritySet. This field is sorted in order of decreasing confidence values.
    * items [GoogleCloudVisionV1p4beta1FaceRecognitionResult](#googlecloudvisionv1p4beta1facerecognitionresult)
  * rollAngle `number`: Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
  * sorrowLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Sorrow likelihood.
  * surpriseLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Surprise likelihood.
  * tiltAngle `number`: Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
  * underExposedLikelihood `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Under-exposed likelihood.

### GoogleCloudVisionV1p4beta1FaceAnnotationLandmark
* GoogleCloudVisionV1p4beta1FaceAnnotationLandmark `object`: A face-specific landmark (for example, a face feature).
  * position [GoogleCloudVisionV1p4beta1Position](#googlecloudvisionv1p4beta1position)
  * type `string` (values: UNKNOWN_LANDMARK, LEFT_EYE, RIGHT_EYE, LEFT_OF_LEFT_EYEBROW, RIGHT_OF_LEFT_EYEBROW, LEFT_OF_RIGHT_EYEBROW, RIGHT_OF_RIGHT_EYEBROW, MIDPOINT_BETWEEN_EYES, NOSE_TIP, UPPER_LIP, LOWER_LIP, MOUTH_LEFT, MOUTH_RIGHT, MOUTH_CENTER, NOSE_BOTTOM_RIGHT, NOSE_BOTTOM_LEFT, NOSE_BOTTOM_CENTER, LEFT_EYE_TOP_BOUNDARY, LEFT_EYE_RIGHT_CORNER, LEFT_EYE_BOTTOM_BOUNDARY, LEFT_EYE_LEFT_CORNER, RIGHT_EYE_TOP_BOUNDARY, RIGHT_EYE_RIGHT_CORNER, RIGHT_EYE_BOTTOM_BOUNDARY, RIGHT_EYE_LEFT_CORNER, LEFT_EYEBROW_UPPER_MIDPOINT, RIGHT_EYEBROW_UPPER_MIDPOINT, LEFT_EAR_TRAGION, RIGHT_EAR_TRAGION, LEFT_EYE_PUPIL, RIGHT_EYE_PUPIL, FOREHEAD_GLABELLA, CHIN_GNATHION, CHIN_LEFT_GONION, CHIN_RIGHT_GONION, LEFT_CHEEK_CENTER, RIGHT_CHEEK_CENTER): Face landmark type.

### GoogleCloudVisionV1p4beta1FaceRecognitionResult
* GoogleCloudVisionV1p4beta1FaceRecognitionResult `object`: Information about a face's identity.
  * celebrity [GoogleCloudVisionV1p4beta1Celebrity](#googlecloudvisionv1p4beta1celebrity)
  * confidence `number`: Recognition confidence. Range [0, 1].

### GoogleCloudVisionV1p4beta1GcsDestination
* GoogleCloudVisionV1p4beta1GcsDestination `object`: The Google Cloud Storage location where the output will be written to.
  * uri `string`: Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.

### GoogleCloudVisionV1p4beta1GcsSource
* GoogleCloudVisionV1p4beta1GcsSource `object`: The Google Cloud Storage location where the input will be read from.
  * uri `string`: Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.

### GoogleCloudVisionV1p4beta1ImageAnnotationContext
* GoogleCloudVisionV1p4beta1ImageAnnotationContext `object`: If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
  * pageNumber `integer`: If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
  * uri `string`: The URI of the file used to produce the image.

### GoogleCloudVisionV1p4beta1ImageProperties
* GoogleCloudVisionV1p4beta1ImageProperties `object`: Stores image properties, such as dominant colors.
  * dominantColors [GoogleCloudVisionV1p4beta1DominantColorsAnnotation](#googlecloudvisionv1p4beta1dominantcolorsannotation)

### GoogleCloudVisionV1p4beta1ImportProductSetsResponse
* GoogleCloudVisionV1p4beta1ImportProductSetsResponse `object`: Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.
  * referenceImages `array`: The list of reference_images that are imported successfully.
    * items [GoogleCloudVisionV1p4beta1ReferenceImage](#googlecloudvisionv1p4beta1referenceimage)
  * statuses `array`: The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.
    * items [Status](#status)

### GoogleCloudVisionV1p4beta1InputConfig
* GoogleCloudVisionV1p4beta1InputConfig `object`: The desired input location and metadata.
  * content `string`: File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
  * gcsSource [GoogleCloudVisionV1p4beta1GcsSource](#googlecloudvisionv1p4beta1gcssource)
  * mimeType `string`: The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.

### GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation
* GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation `object`: Set of detected objects with bounding boxes.
  * boundingPoly [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mid `string`: Object ID that should align with EntityAnnotation mid.
  * name `string`: Object name, expressed in its `language_code` language.
  * score `number`: Score of the result. Range [0, 1].

### GoogleCloudVisionV1p4beta1LocationInfo
* GoogleCloudVisionV1p4beta1LocationInfo `object`: Detected entity location information.
  * latLng [LatLng](#latlng)

### GoogleCloudVisionV1p4beta1NormalizedVertex
* GoogleCloudVisionV1p4beta1NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudVisionV1p4beta1OperationMetadata
* GoogleCloudVisionV1p4beta1OperationMetadata `object`: Contains metadata for the BatchAnnotateImages operation.
  * createTime `string`: The time when the batch request was received.
  * state `string` (values: STATE_UNSPECIFIED, CREATED, RUNNING, DONE, CANCELLED): Current state of the batch operation.
  * updateTime `string`: The time when the operation result was last updated.

### GoogleCloudVisionV1p4beta1OutputConfig
* GoogleCloudVisionV1p4beta1OutputConfig `object`: The desired output location and metadata.
  * batchSize `integer`: The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
  * gcsDestination [GoogleCloudVisionV1p4beta1GcsDestination](#googlecloudvisionv1p4beta1gcsdestination)

### GoogleCloudVisionV1p4beta1Page
* GoogleCloudVisionV1p4beta1Page `object`: Detected page from OCR.
  * blocks `array`: List of blocks of text, images etc on this page.
    * items [GoogleCloudVisionV1p4beta1Block](#googlecloudvisionv1p4beta1block)
  * confidence `number`: Confidence of the OCR results on the page. Range [0, 1].
  * height `integer`: Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
  * property [GoogleCloudVisionV1p4beta1TextAnnotationTextProperty](#googlecloudvisionv1p4beta1textannotationtextproperty)
  * width `integer`: Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.

### GoogleCloudVisionV1p4beta1Paragraph
* GoogleCloudVisionV1p4beta1Paragraph `object`: Structural unit of text representing a number of words in certain order.
  * boundingBox [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the paragraph. Range [0, 1].
  * property [GoogleCloudVisionV1p4beta1TextAnnotationTextProperty](#googlecloudvisionv1p4beta1textannotationtextproperty)
  * words `array`: List of all words in this paragraph.
    * items [GoogleCloudVisionV1p4beta1Word](#googlecloudvisionv1p4beta1word)

### GoogleCloudVisionV1p4beta1Position
* GoogleCloudVisionV1p4beta1Position `object`: A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.
  * z `number`: Z coordinate (or depth).

### GoogleCloudVisionV1p4beta1Product
* GoogleCloudVisionV1p4beta1Product `object`: A Product contains ReferenceImages.
  * description `string`: User-provided metadata to be stored with this product. Must be at most 4096 characters long.
  * displayName `string`: The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
  * name `string`: The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.
  * productCategory `string`: Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.
  * productLabels `array`: Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
    * items [GoogleCloudVisionV1p4beta1ProductKeyValue](#googlecloudvisionv1p4beta1productkeyvalue)

### GoogleCloudVisionV1p4beta1ProductKeyValue
* GoogleCloudVisionV1p4beta1ProductKeyValue `object`: A product label represented as a key-value pair.
  * key `string`: The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
  * value `string`: The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.

### GoogleCloudVisionV1p4beta1ProductSearchResults
* GoogleCloudVisionV1p4beta1ProductSearchResults `object`: Results for a product search request.
  * indexTime `string`: Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
  * productGroupedResults `array`: List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
    * items [GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult](#googlecloudvisionv1p4beta1productsearchresultsgroupedresult)
  * results `array`: List of results, one for each product match.
    * items [GoogleCloudVisionV1p4beta1ProductSearchResultsResult](#googlecloudvisionv1p4beta1productsearchresultsresult)

### GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult
* GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult `object`: Information about the products similar to a single product in a query image.
  * boundingPoly [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * objectAnnotations `array`: List of generic predictions for the object in the bounding box.
    * items [GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation](#googlecloudvisionv1p4beta1productsearchresultsobjectannotation)
  * results `array`: List of results, one for each product match.
    * items [GoogleCloudVisionV1p4beta1ProductSearchResultsResult](#googlecloudvisionv1p4beta1productsearchresultsresult)

### GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation
* GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation `object`: Prediction for what the object in the bounding box is.
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mid `string`: Object ID that should align with EntityAnnotation mid.
  * name `string`: Object name, expressed in its `language_code` language.
  * score `number`: Score of the result. Range [0, 1].

### GoogleCloudVisionV1p4beta1ProductSearchResultsResult
* GoogleCloudVisionV1p4beta1ProductSearchResultsResult `object`: Information about a product.
  * image `string`: The resource name of the image from the product that is the closest match to the query.
  * product [GoogleCloudVisionV1p4beta1Product](#googlecloudvisionv1p4beta1product)
  * score `number`: A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).

### GoogleCloudVisionV1p4beta1Property
* GoogleCloudVisionV1p4beta1Property `object`: A `Property` consists of a user-supplied name/value pair.
  * name `string`: Name of the property.
  * uint64Value `string`: Value of numeric properties.
  * value `string`: Value of the property.

### GoogleCloudVisionV1p4beta1ReferenceImage
* GoogleCloudVisionV1p4beta1ReferenceImage `object`: A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
  * boundingPolys `array`: Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).
    * items [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * name `string`: The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.
  * uri `string`: Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.

### GoogleCloudVisionV1p4beta1SafeSearchAnnotation
* GoogleCloudVisionV1p4beta1SafeSearchAnnotation `object`: Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
  * adult `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
  * medical `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this is a medical image.
  * racy `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
  * spoof `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.
  * violence `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this image contains violent content.

### GoogleCloudVisionV1p4beta1Symbol
* GoogleCloudVisionV1p4beta1Symbol `object`: A single symbol representation.
  * boundingBox [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the symbol. Range [0, 1].
  * property [GoogleCloudVisionV1p4beta1TextAnnotationTextProperty](#googlecloudvisionv1p4beta1textannotationtextproperty)
  * text `string`: The actual UTF-8 representation of the symbol.

### GoogleCloudVisionV1p4beta1TextAnnotation
* GoogleCloudVisionV1p4beta1TextAnnotation `object`: TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
  * pages `array`: List of pages detected by OCR.
    * items [GoogleCloudVisionV1p4beta1Page](#googlecloudvisionv1p4beta1page)
  * text `string`: UTF-8 text detected on the pages.

### GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak
* GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak `object`: Detected start or end of a structural component.
  * isPrefix `boolean`: True if break prepends the element.
  * type `string` (values: UNKNOWN, SPACE, SURE_SPACE, EOL_SURE_SPACE, HYPHEN, LINE_BREAK): Detected break type.

### GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage
* GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage `object`: Detected language for a structural component.
  * confidence `number`: Confidence of detected language. Range [0, 1].
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudVisionV1p4beta1TextAnnotationTextProperty
* GoogleCloudVisionV1p4beta1TextAnnotationTextProperty `object`: Additional information detected on the structural component.
  * detectedBreak [GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak](#googlecloudvisionv1p4beta1textannotationdetectedbreak)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage](#googlecloudvisionv1p4beta1textannotationdetectedlanguage)

### GoogleCloudVisionV1p4beta1Vertex
* GoogleCloudVisionV1p4beta1Vertex `object`: A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### GoogleCloudVisionV1p4beta1WebDetection
* GoogleCloudVisionV1p4beta1WebDetection `object`: Relevant information for the image from the Internet.
  * bestGuessLabels `array`: The service's best guess as to the topic of the request image. Inferred from similar images on the open web.
    * items [GoogleCloudVisionV1p4beta1WebDetectionWebLabel](#googlecloudvisionv1p4beta1webdetectionweblabel)
  * fullMatchingImages `array`: Fully matching images from the Internet. Can include resized copies of the query image.
    * items [GoogleCloudVisionV1p4beta1WebDetectionWebImage](#googlecloudvisionv1p4beta1webdetectionwebimage)
  * pagesWithMatchingImages `array`: Web pages containing the matching images from the Internet.
    * items [GoogleCloudVisionV1p4beta1WebDetectionWebPage](#googlecloudvisionv1p4beta1webdetectionwebpage)
  * partialMatchingImages `array`: Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
    * items [GoogleCloudVisionV1p4beta1WebDetectionWebImage](#googlecloudvisionv1p4beta1webdetectionwebimage)
  * visuallySimilarImages `array`: The visually similar image results.
    * items [GoogleCloudVisionV1p4beta1WebDetectionWebImage](#googlecloudvisionv1p4beta1webdetectionwebimage)
  * webEntities `array`: Deduced entities from similar images on the Internet.
    * items [GoogleCloudVisionV1p4beta1WebDetectionWebEntity](#googlecloudvisionv1p4beta1webdetectionwebentity)

### GoogleCloudVisionV1p4beta1WebDetectionWebEntity
* GoogleCloudVisionV1p4beta1WebDetectionWebEntity `object`: Entity deduced from similar images on the Internet.
  * description `string`: Canonical description of the entity, in English.
  * entityId `string`: Opaque entity ID.
  * score `number`: Overall relevancy score for the entity. Not normalized and not comparable across different image queries.

### GoogleCloudVisionV1p4beta1WebDetectionWebImage
* GoogleCloudVisionV1p4beta1WebDetectionWebImage `object`: Metadata for online images.
  * score `number`: (Deprecated) Overall relevancy score for the image.
  * url `string`: The result image URL.

### GoogleCloudVisionV1p4beta1WebDetectionWebLabel
* GoogleCloudVisionV1p4beta1WebDetectionWebLabel `object`: Label to provide extra metadata for the web detection.
  * label `string`: Label for extra metadata.
  * languageCode `string`: The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudVisionV1p4beta1WebDetectionWebPage
* GoogleCloudVisionV1p4beta1WebDetectionWebPage `object`: Metadata for web pages.
  * fullMatchingImages `array`: Fully matching images on the page. Can include resized copies of the query image.
    * items [GoogleCloudVisionV1p4beta1WebDetectionWebImage](#googlecloudvisionv1p4beta1webdetectionwebimage)
  * pageTitle `string`: Title for the web page, may contain HTML markups.
  * partialMatchingImages `array`: Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
    * items [GoogleCloudVisionV1p4beta1WebDetectionWebImage](#googlecloudvisionv1p4beta1webdetectionwebimage)
  * score `number`: (Deprecated) Overall relevancy score for the web page.
  * url `string`: The result web page URL.

### GoogleCloudVisionV1p4beta1Word
* GoogleCloudVisionV1p4beta1Word `object`: A word representation.
  * boundingBox [GoogleCloudVisionV1p4beta1BoundingPoly](#googlecloudvisionv1p4beta1boundingpoly)
  * confidence `number`: Confidence of the OCR results for the word. Range [0, 1].
  * property [GoogleCloudVisionV1p4beta1TextAnnotationTextProperty](#googlecloudvisionv1p4beta1textannotationtextproperty)
  * symbols `array`: List of symbols in the word. The order of the symbols follows the natural reading order.
    * items [GoogleCloudVisionV1p4beta1Symbol](#googlecloudvisionv1p4beta1symbol)

### GroupedResult
* GroupedResult `object`: Information about the products similar to a single product in a query image.
  * boundingPoly [BoundingPoly](#boundingpoly)
  * objectAnnotations `array`: List of generic predictions for the object in the bounding box.
    * items [ObjectAnnotation](#objectannotation)
  * results `array`: List of results, one for each product match.
    * items [Result](#result)

### ImageAnnotationContext
* ImageAnnotationContext `object`: If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
  * pageNumber `integer`: If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
  * uri `string`: The URI of the file used to produce the image.

### ImageProperties
* ImageProperties `object`: Stores image properties, such as dominant colors.
  * dominantColors [DominantColorsAnnotation](#dominantcolorsannotation)

### ImportProductSetsResponse
* ImportProductSetsResponse `object`: Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.
  * referenceImages `array`: The list of reference_images that are imported successfully.
    * items [ReferenceImage](#referenceimage)
  * statuses `array`: The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.
    * items [Status](#status)

### InputConfig
* InputConfig `object`: The desired input location and metadata.
  * content `string`: File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
  * gcsSource [GcsSource](#gcssource)
  * mimeType `string`: The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.

### KeyValue
* KeyValue `object`: A product label represented as a key-value pair.
  * key `string`: The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
  * value `string`: The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.

### Landmark
* Landmark `object`: A face-specific landmark (for example, a face feature).
  * position [Position](#position)
  * type `string` (values: UNKNOWN_LANDMARK, LEFT_EYE, RIGHT_EYE, LEFT_OF_LEFT_EYEBROW, RIGHT_OF_LEFT_EYEBROW, LEFT_OF_RIGHT_EYEBROW, RIGHT_OF_RIGHT_EYEBROW, MIDPOINT_BETWEEN_EYES, NOSE_TIP, UPPER_LIP, LOWER_LIP, MOUTH_LEFT, MOUTH_RIGHT, MOUTH_CENTER, NOSE_BOTTOM_RIGHT, NOSE_BOTTOM_LEFT, NOSE_BOTTOM_CENTER, LEFT_EYE_TOP_BOUNDARY, LEFT_EYE_RIGHT_CORNER, LEFT_EYE_BOTTOM_BOUNDARY, LEFT_EYE_LEFT_CORNER, RIGHT_EYE_TOP_BOUNDARY, RIGHT_EYE_RIGHT_CORNER, RIGHT_EYE_BOTTOM_BOUNDARY, RIGHT_EYE_LEFT_CORNER, LEFT_EYEBROW_UPPER_MIDPOINT, RIGHT_EYEBROW_UPPER_MIDPOINT, LEFT_EAR_TRAGION, RIGHT_EAR_TRAGION, LEFT_EYE_PUPIL, RIGHT_EYE_PUPIL, FOREHEAD_GLABELLA, CHIN_GNATHION, CHIN_LEFT_GONION, CHIN_RIGHT_GONION, LEFT_CHEEK_CENTER, RIGHT_CHEEK_CENTER): Face landmark type.

### LatLng
* LatLng `object`: An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].

### LocalizedObjectAnnotation
* LocalizedObjectAnnotation `object`: Set of detected objects with bounding boxes.
  * boundingPoly [BoundingPoly](#boundingpoly)
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mid `string`: Object ID that should align with EntityAnnotation mid.
  * name `string`: Object name, expressed in its `language_code` language.
  * score `number`: Score of the result. Range [0, 1].

### LocationInfo
* LocationInfo `object`: Detected entity location information.
  * latLng [LatLng](#latlng)

### NormalizedVertex
* NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### ObjectAnnotation
* ObjectAnnotation `object`: Prediction for what the object in the bounding box is.
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mid `string`: Object ID that should align with EntityAnnotation mid.
  * name `string`: Object name, expressed in its `language_code` language.
  * score `number`: Score of the result. Range [0, 1].

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### OperationMetadata
* OperationMetadata `object`: Contains metadata for the BatchAnnotateImages operation.
  * createTime `string`: The time when the batch request was received.
  * state `string` (values: STATE_UNSPECIFIED, CREATED, RUNNING, DONE, CANCELLED): Current state of the batch operation.
  * updateTime `string`: The time when the operation result was last updated.

### OutputConfig
* OutputConfig `object`: The desired output location and metadata.
  * batchSize `integer`: The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
  * gcsDestination [GcsDestination](#gcsdestination)

### Page
* Page `object`: Detected page from OCR.
  * blocks `array`: List of blocks of text, images etc on this page.
    * items [Block](#block)
  * confidence `number`: Confidence of the OCR results on the page. Range [0, 1].
  * height `integer`: Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
  * property [TextProperty](#textproperty)
  * width `integer`: Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.

### Paragraph
* Paragraph `object`: Structural unit of text representing a number of words in certain order.
  * boundingBox [BoundingPoly](#boundingpoly)
  * confidence `number`: Confidence of the OCR results for the paragraph. Range [0, 1].
  * property [TextProperty](#textproperty)
  * words `array`: List of all words in this paragraph.
    * items [Word](#word)

### Position
* Position `object`: A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.
  * z `number`: Z coordinate (or depth).

### Product
* Product `object`: A Product contains ReferenceImages.
  * description `string`: User-provided metadata to be stored with this product. Must be at most 4096 characters long.
  * displayName `string`: The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
  * name `string`: The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.
  * productCategory `string`: Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.
  * productLabels `array`: Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
    * items [KeyValue](#keyvalue)

### ProductSearchResults
* ProductSearchResults `object`: Results for a product search request.
  * indexTime `string`: Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
  * productGroupedResults `array`: List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
    * items [GroupedResult](#groupedresult)
  * results `array`: List of results, one for each product match.
    * items [Result](#result)

### Property
* Property `object`: A `Property` consists of a user-supplied name/value pair.
  * name `string`: Name of the property.
  * uint64Value `string`: Value of numeric properties.
  * value `string`: Value of the property.

### ReferenceImage
* ReferenceImage `object`: A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
  * boundingPolys `array`: Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).
    * items [BoundingPoly](#boundingpoly)
  * name `string`: The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.
  * uri `string`: Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.

### Result
* Result `object`: Information about a product.
  * image `string`: The resource name of the image from the product that is the closest match to the query.
  * product [Product](#product)
  * score `number`: A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).

### SafeSearchAnnotation
* SafeSearchAnnotation `object`: Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
  * adult `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
  * medical `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this is a medical image.
  * racy `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
  * spoof `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.
  * violence `string` (values: UNKNOWN, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood that this image contains violent content.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### Symbol
* Symbol `object`: A single symbol representation.
  * boundingBox [BoundingPoly](#boundingpoly)
  * confidence `number`: Confidence of the OCR results for the symbol. Range [0, 1].
  * property [TextProperty](#textproperty)
  * text `string`: The actual UTF-8 representation of the symbol.

### TextAnnotation
* TextAnnotation `object`: TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
  * pages `array`: List of pages detected by OCR.
    * items [Page](#page)
  * text `string`: UTF-8 text detected on the pages.

### TextProperty
* TextProperty `object`: Additional information detected on the structural component.
  * detectedBreak [DetectedBreak](#detectedbreak)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [DetectedLanguage](#detectedlanguage)

### Vertex
* Vertex `object`: A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### WebDetection
* WebDetection `object`: Relevant information for the image from the Internet.
  * bestGuessLabels `array`: The service's best guess as to the topic of the request image. Inferred from similar images on the open web.
    * items [WebLabel](#weblabel)
  * fullMatchingImages `array`: Fully matching images from the Internet. Can include resized copies of the query image.
    * items [WebImage](#webimage)
  * pagesWithMatchingImages `array`: Web pages containing the matching images from the Internet.
    * items [WebPage](#webpage)
  * partialMatchingImages `array`: Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
    * items [WebImage](#webimage)
  * visuallySimilarImages `array`: The visually similar image results.
    * items [WebImage](#webimage)
  * webEntities `array`: Deduced entities from similar images on the Internet.
    * items [WebEntity](#webentity)

### WebEntity
* WebEntity `object`: Entity deduced from similar images on the Internet.
  * description `string`: Canonical description of the entity, in English.
  * entityId `string`: Opaque entity ID.
  * score `number`: Overall relevancy score for the entity. Not normalized and not comparable across different image queries.

### WebImage
* WebImage `object`: Metadata for online images.
  * score `number`: (Deprecated) Overall relevancy score for the image.
  * url `string`: The result image URL.

### WebLabel
* WebLabel `object`: Label to provide extra metadata for the web detection.
  * label `string`: Label for extra metadata.
  * languageCode `string`: The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### WebPage
* WebPage `object`: Metadata for web pages.
  * fullMatchingImages `array`: Fully matching images on the page. Can include resized copies of the query image.
    * items [WebImage](#webimage)
  * pageTitle `string`: Title for the web page, may contain HTML markups.
  * partialMatchingImages `array`: Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
    * items [WebImage](#webimage)
  * score `number`: (Deprecated) Overall relevancy score for the web page.
  * url `string`: The result web page URL.

### Word
* Word `object`: A word representation.
  * boundingBox [BoundingPoly](#boundingpoly)
  * confidence `number`: Confidence of the OCR results for the word. Range [0, 1].
  * property [TextProperty](#textproperty)
  * symbols `array`: List of symbols in the word. The order of the symbols follows the natural reading order.
    * items [Symbol](#symbol)


