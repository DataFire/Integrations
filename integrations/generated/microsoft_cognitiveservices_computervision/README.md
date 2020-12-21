# @datafire/microsoft_cognitiveservices_computervision

Client library for Computer Vision Client

## Installation and Usage
```bash
npm install --save @datafire/microsoft_cognitiveservices_computervision
```
```js
let microsoft_cognitiveservices_computervision = require('@datafire/microsoft_cognitiveservices_computervision').create({
  apim_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image.  It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences.  Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.

## Actions

### AnalyzeImage
This operation extracts a rich set of visual features based on the image content.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.


```js
microsoft_cognitiveservices_computervision.AnalyzeImage({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * visualFeatures `array`: A string indicating what visual feature types to return. Multiple values should be comma-separated. Valid visual feature types include: Categories - categorizes image content according to a taxonomy defined in documentation. Tags - tags the image with a detailed list of words related to the image content. Description - describes the image content with a complete English sentence. Faces - detects if faces are present. If present, generate coordinates, gender and age. ImageType - detects if image is clipart or a line drawing. Color - determines the accent color, dominant color, and whether an image is black&white. Adult - detects if the image is pornographic in nature (depicts nudity or a sex act), or is gory (depicts extreme violence or blood). Sexually suggestive content (aka racy content) is also detected. Objects - detects various objects within an image, including the approximate location. The Objects argument is only available in English. Brands - detects various brands within an image, including the approximate location. The Brands argument is only available in English.
  * details `array`: A string indicating which domain-specific details to return. Multiple values should be comma-separated. Valid visual feature types include: Celebrities - identifies celebrities if detected in the image, Landmarks - identifies notable landmarks in the image.
  * language `string` (values: en, es, ja, pt, zh): The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
  * descriptionExclude `array`: Turn off specified domain models when generating the description.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [ImageAnalysis](#imageanalysis)

### GetAreaOfInterest
This operation returns a bounding box around the most important area of the image.
A successful response will be returned in JSON. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.


```js
microsoft_cognitiveservices_computervision.GetAreaOfInterest({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [AreaOfInterestResult](#areaofinterestresult)

### DescribeImage
This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. Descriptions may include results from celebrity and landmark domain models, if applicable.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.


```js
microsoft_cognitiveservices_computervision.DescribeImage({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * maxCandidates `integer`: Maximum number of candidate descriptions to be returned.  The default is 1.
  * language `string` (values: en, es, ja, pt, zh): The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
  * descriptionExclude `array`: Turn off specified domain models when generating the description.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [ImageDescription](#imagedescription)

### DetectObjects
Performs object detection on the specified image.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.


```js
microsoft_cognitiveservices_computervision.DetectObjects({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [DetectResult](#detectresult)

### GenerateThumbnail
This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image.
A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.


```js
microsoft_cognitiveservices_computervision.GenerateThumbnail({
  "width": 0,
  "height": 0,
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * width **required** `integer`: Width of the thumbnail, in pixels. It must be between 1 and 1024. Recommended minimum of 50.
  * height **required** `integer`: Height of the thumbnail, in pixels. It must be between 1 and 1024. Recommended minimum of 50.
  * smartCropping `boolean`: Boolean flag for enabling smart cropping.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output `string`

### ListModels
This operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.


```js
microsoft_cognitiveservices_computervision.ListModels(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ListModelsResult](#listmodelsresult)

### AnalyzeImageByDomain
This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API provides following domain-specific models: celebrities, landmarks.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON.
If the request failed, the response will contain an error code and a message to help understand what went wrong.


```js
microsoft_cognitiveservices_computervision.AnalyzeImageByDomain({
  "model": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** `string`: The domain-specific content to recognize.
  * language `string` (values: en, es, ja, pt, zh): The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [DomainModelResults](#domainmodelresults)

### RecognizePrintedText
Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.
Upon success, the OCR results will be returned.
Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError.


```js
microsoft_cognitiveservices_computervision.RecognizePrintedText({
  "detectOrientation": true,
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * detectOrientation **required** `boolean`: Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down).
  * language `string` (values: unk, zh-Hans, zh-Hant, cs, da, nl, en, fi, fr, de, el, hu, it, ja, ko, nb, pl, pt, ru, es, sv, tr, ar, ro, sr-Cyrl, sr-Latn, sk): The BCP-47 language code of the text to be detected in the image. The default value is 'unk'.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [OcrResult](#ocrresult)

### TagImage
This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag "ascomycete" may be accompanied by the hint "fungus".
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.


```js
microsoft_cognitiveservices_computervision.TagImage({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * language `string` (values: en, es, ja, pt, zh): The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [TagResult](#tagresult)



## Definitions

### AdultInfo
* AdultInfo `object`: An object describing whether the image contains adult-oriented content and/or is racy.
  * adultScore `number`: Score from 0 to 1 that indicates how much the content is considered adult-oriented within the image.
  * goreScore `number`: Score from 0 to 1 that indicates how gory is the image.
  * isAdultContent `boolean`: A value indicating if the image contains adult-oriented content.
  * isGoryContent `boolean`: A value indicating if the image is gory.
  * isRacyContent `boolean`: A value indicating if the image is racy.
  * racyScore `number`: Score from 0 to 1 that indicates how suggestive is the image.

### AreaOfInterestResult
* AreaOfInterestResult `object`: Result of AreaOfInterest operation.
  * areaOfInterest [BoundingRect](#boundingrect)
  * metadata [ImageMetadata](#imagemetadata)
  * requestId `string`: Id of the REST API request.

### BoundingRect
* BoundingRect `object`: A bounding box for an area inside an image.
  * h `integer`: Height measured from the top-left point of the area, in pixels.
  * w `integer`: Width measured from the top-left point of the area, in pixels.
  * x `integer`: X-coordinate of the top left point of the area, in pixels.
  * y `integer`: Y-coordinate of the top left point of the area, in pixels.

### Category
* Category `object`: An object describing identified category.
  * detail [CategoryDetail](#categorydetail)
  * name `string`: Name of the category.
  * score `number`: Scoring of the category.

### CategoryDetail
* CategoryDetail `object`: An object describing additional category details.
  * celebrities `array`: An array of celebrities if any identified.
    * items [CelebritiesModel](#celebritiesmodel)
  * landmarks `array`: An array of landmarks if any identified.
    * items [LandmarksModel](#landmarksmodel)

### CelebritiesModel
* CelebritiesModel `object`: An object describing possible celebrity identification.
  * confidence `number`: Confidence level for the celebrity recognition as a value ranging from 0 to 1.
  * faceRectangle [FaceRectangle](#facerectangle)
  * name `string`: Name of the celebrity.

### CelebrityResults
* CelebrityResults `object`: Result of domain-specific classifications for the domain of celebrities.
  * celebrities `array`: List of celebrities recognized in the image.
    * items [CelebritiesModel](#celebritiesmodel)
  * metadata [ImageMetadata](#imagemetadata)
  * requestId `string`: Id of the REST API request.

### ColorInfo
* ColorInfo `object`: An object providing additional metadata describing color attributes.
  * accentColor `string`: Possible accent color.
  * dominantColorBackground `string`: Possible dominant background color.
  * dominantColorForeground `string`: Possible dominant foreground color.
  * dominantColors `array`: An array of possible dominant colors.
    * items `string`
  * isBWImg `boolean`: A value indicating if the image is black and white.

### ComputerVisionError
* ComputerVisionError `object`: Details about the API request error.
  * code **required** `string` (values: InvalidImageFormat, UnsupportedMediaType, InvalidImageUrl, NotSupportedFeature, NotSupportedImage, Timeout, InternalServerError, InvalidImageSize, BadArgument, DetectFaceError, NotSupportedLanguage, InvalidThumbnailSize, InvalidDetails, InvalidModel, CancelledRequest, NotSupportedVisualFeature, FailedToProcess, Unspecified, StorageException): The error code.
  * message **required** `string`: A message explaining the error reported by the service.
  * requestId `string`: A unique request identifier.

### DetectResult
* DetectResult `object`: Result of a DetectImage call.
  * metadata [ImageMetadata](#imagemetadata)
  * objects `array`: An array of detected objects.
    * items [DetectedObject](#detectedobject)
  * requestId `string`: Id of the REST API request.

### DetectedBrand
* DetectedBrand `object`: A brand detected in an image.
  * confidence `number`: Confidence score of having observed the brand in the image, as a value ranging from 0 to 1.
  * name `string`: Label for the brand.
  * rectangle [BoundingRect](#boundingrect)

### DetectedObject
* DetectedObject `object`: An object detected in an image.
  * confidence `number`: Confidence score of having observed the object in the image, as a value ranging from 0 to 1.
  * object `string`: Label for the object.
  * parent [ObjectHierarchy](#objecthierarchy)
  * rectangle [BoundingRect](#boundingrect)

### DomainModelResults
* DomainModelResults `object`: Result of image analysis using a specific domain model including additional metadata.
  * metadata [ImageMetadata](#imagemetadata)
  * requestId `string`: Id of the REST API request.
  * result `object`: Model-specific response.

### FaceDescription
* FaceDescription `object`: An object describing a face identified in the image.
  * age `integer`: Possible age of the face.
  * faceRectangle [FaceRectangle](#facerectangle)
  * gender `string` (values: Male, Female): Possible gender of the face.

### FaceRectangle
* FaceRectangle `object`: An object describing face rectangle.
  * height `integer`: Height measured from the top-left point of the face, in pixels.
  * left `integer`: X-coordinate of the top left point of the face, in pixels.
  * top `integer`: Y-coordinate of the top left point of the face, in pixels.
  * width `integer`: Width measured from the top-left point of the face, in pixels.

### ImageAnalysis
* ImageAnalysis `object`: Result of AnalyzeImage operation.
  * tags `array`: A list of tags with confidence level.
    * items [ImageTag](#imagetag)
  * adult [AdultInfo](#adultinfo)
  * brands `array`: Array of brands detected in the image.
    * items [DetectedBrand](#detectedbrand)
  * categories `array`: An array indicating identified categories.
    * items [Category](#category)
  * color [ColorInfo](#colorinfo)
  * description [ImageDescriptionDetails](#imagedescriptiondetails)
  * faces `array`: An array of possible faces within the image.
    * items [FaceDescription](#facedescription)
  * imageType [ImageType](#imagetype)
  * metadata [ImageMetadata](#imagemetadata)
  * objects `array`: Array of objects describing what was detected in the image.
    * items [DetectedObject](#detectedobject)
  * requestId `string`: Id of the REST API request.

### ImageCaption
* ImageCaption `object`: An image caption, i.e. a brief description of what the image depicts.
  * confidence `number`: The level of confidence the service has in the caption.
  * text `string`: The text of the caption.

### ImageDescription
* ImageDescription `object`: A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.
  * description [ImageDescriptionDetails](#imagedescriptiondetails)
  * metadata [ImageMetadata](#imagemetadata)
  * requestId `string`: Id of the REST API request.

### ImageDescriptionDetails
* ImageDescriptionDetails `object`: A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.
  * tags `array`: A collection of image tags.
    * items `string`
  * captions `array`: A list of captions, sorted by confidence level.
    * items [ImageCaption](#imagecaption)

### ImageMetadata
* ImageMetadata `object`: Image metadata.
  * format `string`: Image format.
  * height `integer`: Image height, in pixels.
  * width `integer`: Image width, in pixels.

### ImageTag
* ImageTag `object`: An entity observation in the image, along with the confidence score.
  * confidence `number`: The level of confidence that the entity was observed.
  * hint `string`: Optional hint/details for this tag.
  * name `string`: Name of the entity.

### ImageType
* ImageType `object`: An object providing possible image types and matching confidence levels.
  * clipArtType `integer`: Confidence level that the image is a clip art.
  * lineDrawingType `integer`: Confidence level that the image is a line drawing.

### ImageUrl
* ImageUrl `object`
  * url **required** `string`: Publicly reachable URL of an image.

### LandmarkResults
* LandmarkResults `object`: Result of domain-specific classifications for the domain of landmarks.
  * landmarks `array`: List of landmarks recognized in the image.
    * items [LandmarksModel](#landmarksmodel)
  * metadata [ImageMetadata](#imagemetadata)
  * requestId `string`: Id of the REST API request.

### LandmarksModel
* LandmarksModel `object`: A landmark recognized in the image.
  * confidence `number`: Confidence level for the landmark recognition as a value ranging from 0 to 1.
  * name `string`: Name of the landmark.

### ListModelsResult
* ListModelsResult `object`: Result of the List Domain Models operation.
  * models `array`: An array of supported models.
    * items [ModelDescription](#modeldescription)

### ModelDescription
* ModelDescription `object`: An object describing supported model by name and categories.
  * categories `array`: Categories of the model.
    * items `string`
  * name `string`: The name of the model.

### ObjectHierarchy
* ObjectHierarchy `object`: An object detected inside an image.
  * confidence `number`: Confidence score of having observed the object in the image, as a value ranging from 0 to 1.
  * object `string`: Label for the object.
  * parent [ObjectHierarchy](#objecthierarchy)

### OcrLine
* OcrLine `object`: An object describing a single recognized line of text.
  * boundingBox `string`: Bounding box of a recognized line. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.
  * words `array`: An array of objects, where each object represents a recognized word.
    * items [OcrWord](#ocrword)

### OcrRegion
* OcrRegion `object`: A region consists of multiple lines (e.g. a column of text in a multi-column document).
  * boundingBox `string`: Bounding box of a recognized region. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.
  * lines `array`: An array of recognized lines of text.
    * items [OcrLine](#ocrline)

### OcrResult
* OcrResult `object`
  * language `string`: The BCP-47 language code of the text in the image.
  * orientation `string`: Orientation of the text recognized in the image, if requested. The value (up, down, left, or right) refers to the direction that the top of the recognized text is facing, after the image has been rotated around its center according to the detected text angle (see textAngle property).
  * regions `array`: An array of objects, where each object represents a region of recognized text.
    * items [OcrRegion](#ocrregion)
  * textAngle `number`: The angle, in radians, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly.

### OcrWord
* OcrWord `object`: Information on a recognized word.
  * boundingBox `string`: Bounding box of a recognized word. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.
  * text `string`: String value of a recognized word.

### TagResult
* TagResult `object`: The results of a image tag operation, including any tags and image metadata.
  * tags `array`: A list of tags with confidence level.
    * items [ImageTag](#imagetag)
  * metadata [ImageMetadata](#imagemetadata)
  * requestId `string`: Id of the REST API request.


