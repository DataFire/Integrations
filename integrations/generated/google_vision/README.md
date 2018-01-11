# @datafire/google_vision

Client library for Google Cloud Vision

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
})
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

### images.annotate
Run image detection and annotation for a batch of images.


```js
google_vision.images.annotate({}, context)
```

#### Input
* input `object`
  * body [BatchAnnotateImagesRequest](#batchannotateimagesrequest)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [BatchAnnotateImagesResponse](#batchannotateimagesresponse)



## Definitions

### AnnotateImageRequest
* AnnotateImageRequest `object`: Request for performing Google Cloud Vision API tasks over a user-provided
  * features `array`: Requested features.
    * items [Feature](#feature)
  * image [Image](#image)
  * imageContext [ImageContext](#imagecontext)

### AnnotateImageResponse
* AnnotateImageResponse `object`: Response to an image annotation request.
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
  * paragraphs `array`: List of paragraphs in this block (if this blocks is of type text).
    * items [Paragraph](#paragraph)
  * property [TextProperty](#textproperty)

### BoundingPoly
* BoundingPoly `object`: A bounding polygon for the detected image annotation.
  * vertices `array`: The bounding polygon vertices.
    * items [Vertex](#vertex)

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

### EntityAnnotation
* EntityAnnotation `object`: Set of detected entity features.
  * boundingPoly [BoundingPoly](#boundingpoly)
  * confidence `number`: The accuracy of the entity detection in an image.
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
* Feature `object`: Users describe the type of Google Cloud Vision API tasks to perform over
  * maxResults `integer`: Maximum number of results of this type.
  * type `string` (values: TYPE_UNSPECIFIED, FACE_DETECTION, LANDMARK_DETECTION, LOGO_DETECTION, LABEL_DETECTION, TEXT_DETECTION, DOCUMENT_TEXT_DETECTION, SAFE_SEARCH_DETECTION, IMAGE_PROPERTIES, CROP_HINTS, WEB_DETECTION): The feature type.

### Image
* Image `object`: Client image to perform Google Cloud Vision API tasks over.
  * content `string`: Image content, represented as a stream of bytes.
  * source [ImageSource](#imagesource)

### ImageContext
* ImageContext `object`: Image context and/or feature-specific parameters.
  * cropHintsParams [CropHintsParams](#crophintsparams)
  * languageHints `array`: List of languages to use for TEXT_DETECTION. In most cases, an empty value
    * items `string`
  * latLongRect [LatLongRect](#latlongrect)

### ImageProperties
* ImageProperties `object`: Stores image properties, such as dominant colors.
  * dominantColors [DominantColorsAnnotation](#dominantcolorsannotation)

### ImageSource
* ImageSource `object`: External image source (Google Cloud Storage image location).
  * gcsImageUri `string`: NOTE: For new code `image_uri` below is preferred.
  * imageUri `string`: Image URI which supports:

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

### LocationInfo
* LocationInfo `object`: Detected entity location information.
  * latLng [LatLng](#latlng)

### Page
* Page `object`: Detected page from OCR.
  * blocks `array`: List of blocks of text, images etc on this page.
    * items [Block](#block)
  * height `integer`: Page height in pixels.
  * property [TextProperty](#textproperty)
  * width `integer`: Page width in pixels.

### Paragraph
* Paragraph `object`: Structural unit of text representing a number of words in certain order.
  * boundingBox [BoundingPoly](#boundingpoly)
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

### WebEntity
* WebEntity `object`: Entity deduced from similar images on the Internet.
  * description `string`: Canonical description of the entity, in English.
  * entityId `string`: Opaque entity ID.
  * score `number`: Overall relevancy score for the entity.

### WebImage
* WebImage `object`: Metadata for online images.
  * score `number`: (Deprecated) Overall relevancy score for the image.
  * url `string`: The result image URL.

### WebPage
* WebPage `object`: Metadata for web pages.
  * score `number`: (Deprecated) Overall relevancy score for the web page.
  * url `string`: The result web page URL.

### Word
* Word `object`: A word representation.
  * boundingBox [BoundingPoly](#boundingpoly)
  * property [TextProperty](#textproperty)
  * symbols `array`: List of symbols in the word.
    * items [Symbol](#symbol)


