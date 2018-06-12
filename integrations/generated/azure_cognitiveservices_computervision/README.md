# @datafire/azure_cognitiveservices_computervision

Client library for Computer Vision

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_computervision
```
```js
let azure_cognitiveservices_computervision = require('@datafire/azure_cognitiveservices_computervision').create({
  apim_key: ""
});

azure_cognitiveservices_computervision.AnalyzeImage({
  "ImageUrl": {
    "url": ""
  }
}).then(data => {
  console.log(data);
});
```

## Description

The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image.  It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences.  Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.

## Actions

### AnalyzeImage
This operation extracts a rich set of visual features based on the image content. Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  Within your request, there is an optional parameter to allow you to choose which features to return.  By default, image categories are returned in the response.


```js
azure_cognitiveservices_computervision.AnalyzeImage({
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * visualFeatures `array`: A string indicating what visual feature types to return. Multiple values should be comma-separated. Valid visual feature types include:Categories - categorizes image content according to a taxonomy defined in documentation. Tags - tags the image with a detailed list of words related to the image content. Description - describes the image content with a complete English sentence. Faces - detects if faces are present. If present, generate coordinates, gender and age. ImageType - detects if image is clipart or a line drawing. Color - determines the accent color, dominant color, and whether an image is black&white.Adult - detects if the image is pornographic in nature (depicts nudity or a sex act).  Sexually suggestive content is also detected.
  * details `array`: A string indicating which domain-specific details to return. Multiple values should be comma-separated. Valid visual feature types include:Celebrities - identifies celebrities if detected in the image.
  * language `string` (values: en, ja, pt, zh): The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default.ja - Japanese pt - Portuguese zh - Simplified Chinese.
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image

#### Output
* output [ImageAnalysis](#imageanalysis)

### DescribeImage
This operation generates a description of an image in human readable language with complete sentences.  The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image.  Descriptions are ordered by their confidence score. All descriptions are in English. Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.


```js
azure_cognitiveservices_computervision.DescribeImage({
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * maxCandidates `string`: Maximum number of candidate descriptions to be returned.  The default is 1.
  * language `string` (values: en, ja, pt, zh): The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default.ja - Japanese pt - Portuguese zh - Simplified Chinese.
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image

#### Output
* output [ImageDescription](#imagedescription)

### GenerateThumbnail
This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image. A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.


```js
azure_cognitiveservices_computervision.GenerateThumbnail({
  "width": 0,
  "height": 0,
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * width **required** `integer`: Width of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.
  * height **required** `integer`: Height of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image
  * smartCropping `boolean`: Boolean flag for enabling smart cropping.

#### Output
* output `file`

### ListModels
This operation returns the list of domain-specific models that are supported by the Computer Vision API.  Currently, the API only supports one domain-specific model: a celebrity recognizer. A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.


```js
azure_cognitiveservices_computervision.ListModels(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ListModelsResult](#listmodelsresult)

### AnalyzeImageByDomain
This operation recognizes content within an image by applying a domain-specific model.  The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.  Currently, the API only provides a single domain-specific model: celebrities. Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.


```js
azure_cognitiveservices_computervision.AnalyzeImageByDomain({
  "model": "",
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** `string` (values: Celebrities, Landmarks): The domain-specific content to recognize.
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image

#### Output
* output [DomainModelResults](#domainmodelresults)

### RecognizePrintedText
Optical Character Recognition (OCR) detects printed text in an image and extracts the recognized characters into a machine-usable character stream.   Upon success, the OCR results will be returned. Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,  NotSupportedLanguage, or InternalServerError.


```js
azure_cognitiveservices_computervision.RecognizePrintedText({
  "detectOrientation": true,
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * detectOrientation **required** `boolean`: Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down). 
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image
  * language `string` (values: unk, zh-Hans, zh-Hant, cs, da, nl, en, fi, fr, de, el, hu, it, ja, ko, nb, pl, pt, ru, es, sv, tr, ar, ro, sr-Cyrl, sr-Latn, sk): The BCP-47 language code of the text to be detected in the image. The default value is 'unk'

#### Output
* output [OcrResult](#ocrresult)

### RecognizeText
Recognize Text operation. When you use the Recognize Text interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your Get Handwritten Text Operation Result operation.


```js
azure_cognitiveservices_computervision.RecognizeText({
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image
  * detectHandwriting `boolean`: If 'true' is specified, handwriting recognition is performed. If this parameter is set to 'false' or is not specified, printed text recognition is performed.

#### Output
*Output schema unknown*

### TagImage
This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag 'cello' may be accompanied by the hint 'musical instrument'. All tags are in English.


```js
azure_cognitiveservices_computervision.TagImage({
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * language `string` (values: en, ja, pt, zh): The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default.ja - Japanese pt - Portuguese zh - Simplified Chinese.
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image

#### Output
* output [TagResult](#tagresult)

### GetTextOperationResult
This interface is used for getting text operation result. The URL to this interface should be retrieved from 'Operation-Location' field returned from Recognize Text interface.


```js
azure_cognitiveservices_computervision.GetTextOperationResult({
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * operationId **required** `string`: Id of the text operation returned in the response of the 'Recognize Handwritten Text'

#### Output
* output [TextOperationResult](#textoperationresult)



## Definitions

### AdultInfo
* AdultInfo `object`: An object describing whether the image contains adult-oriented content and/or is racy.
  * adultScore `number`: Score from 0 to 1 that indicates how much of adult content is within the image.
  * isAdultContent `boolean`: A value indicating if the image contains adult-oriented content.
  * isRacyContent `boolean`: A value indicating if the image is race.
  * racyScore `number`: Score from 0 to 1 that indicates how suggestive is the image.

### BoundingBox
* BoundingBox `array`
  * items `integer`

### Category
* Category `object`: An object describing identified category.
  * detail [CategoryDetail](#categorydetail)
  * name `string`: Name of the category.
  * score `number`: Scoring of the category.

### CategoryDetail
* CategoryDetail `object`: An object describing additional category details.
  * celebrities `array`: An array of celebrities if any identified.
    * items [CelebritiesModel](#celebritiesmodel)

### CelebritiesModel
* CelebritiesModel `object`: An object describing possible celebrity identification.
  * confidence `number`: Level of confidence ranging from 0 to 1.
  * faceRectangle [FaceRectangle](#facerectangle)
  * name `string`: Name of the celebrity.

### ColorInfo
* ColorInfo `object`: An object providing additional metadata describing color attributes.
  * accentColor `string`: Possible accent color.
  * dominantColorBackground `string`: Possible dominant background color.
  * dominantColorForeground `string`: Possible dominant foreground color.
  * dominantColors `array`: An array of possible dominant colors.
    * items `string`
  * isBWImg `boolean`: A value indicating if the image is black and white.

### ComputerVisionError
* ComputerVisionError `object`
  * code **required** `string` (values: InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedVisualFeature, NotSupportedImage, InvalidDetails, NotSupportedLanguage, BadArgument, FailedToProcess, Timeout, InternalServerError, Unspecified, StorageException): The error code.
  * message **required** `string`: A message explaining the error reported by the service.
  * requestId `string`: A unique request identifier.

### DomainModelResult
* DomainModelResult `object`
  * celebrities `array`: An array of possible celebritied identified in the image.
    * items [CelebritiesModel](#celebritiesmodel)

### DomainModelResults
* DomainModelResults `object`: Result of image analysis using a specific domain model including additional metadata.
  * metadata [ImageMetadata](#imagemetadata)
  * requestId `string`: Id of the REST API request.
  * result [DomainModelResult](#domainmodelresult)

### FaceDescription
* FaceDescription `object`: An object describing a face identified in the image.
  * age `integer`: Possible age of the face.
  * faceRectangle [FaceRectangle](#facerectangle)
  * gender `string` (values: Male, Female): Possible gender of the face.

### FaceRectangle
* FaceRectangle `object`: An object describing face rectangle.
  * height `integer`: Height measured from the top-left point of the face.
  * left `integer`: X-coordinate of the top left point of the face.
  * top `integer`: Y-coordinate of the top left point of the face.
  * width `integer`: Width measured from the top-left point of the face.

### ImageAnalysis
* ImageAnalysis `object`: Result of AnalyzeImage operation.
  * adult [AdultInfo](#adultinfo)
  * categories `array`: An array indicating identified categories.
    * items [Category](#category)
  * color [ColorInfo](#colorinfo)
  * description [ImageDescriptionDetails](#imagedescriptiondetails)
  * faces `array`: An array of possible faces within the image.
    * items [FaceDescription](#facedescription)
  * imageType [ImageType](#imagetype)
  * metadata [ImageMetadata](#imagemetadata)
  * requestId `string`: Id of the request for tracking purposes.
  * tags `array`: A list of tags with confidence level.
    * items [ImageTag](#imagetag)

### ImageCaption
* ImageCaption `object`: An image caption, i.e. a brief description of what the image depicts.
  * confidence `number`: The level of confidence the service has in the caption
  * text `string`: The text of the caption

### ImageDescription
* ImageDescription `object`: A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.
  * description [ImageDescriptionDetails](#imagedescriptiondetails)

### ImageDescriptionDetails
* ImageDescriptionDetails `object`: A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.
  * captions `array`: A list of captions, sorted by confidence level.
    * items [ImageCaption](#imagecaption)
  * metadata [ImageMetadata](#imagemetadata)
  * requestId `string`: Id of the REST API request.
  * tags `array`: A collection of image tags.
    * items `string`

### ImageMetadata
* ImageMetadata `object`: Image metadata
  * format `string`: Image format
  * height `integer`: Image height
  * width `integer`: Image width

### ImageTag
* ImageTag `object`: An image caption, i.e. a brief description of what the image depicts.
  * confidence `number`: The level of confidence the service has in the caption
  * name `string`: The tag value

### ImageType
* ImageType `object`: An object providing possible image types and matching confidence levels.
  * clipArtType `number`: Confidence level that the image is a clip art.
  * lineDrawingType `number`: Confidence level that the image is a line drawing.

### Line
* Line `object`
  * boundingBox [BoundingBox](#boundingbox)
  * text `string`
  * words `array`
    * items [Word](#word)

### ListModelsResult
* ListModelsResult `object`: Result of the List Domain Models operation.
  * models `array`: An array of supported models.
    * items [ModelDescription](#modeldescription)

### ModelDescription
* ModelDescription `object`: An object describing supported model by name and categories.
  * categories `array`
    * items `string`
  * name `string`

### OcrLine
* OcrLine `object`: An object describing a single recognized line of text.
  * boundingBox `string`: Bounding box of a recognized line. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.
  * words `array`: An array of objects, where each object represents a recognized word.
    * items [OcrWord](#ocrword)

### OcrRegion
* OcrRegion `object`: A region consists of multiple lines (e.g. a column of text in a multi-column document).
  * boundingBox `string`: Bounding box of a recognized region. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.
  * lines `array`
    * items [OcrLine](#ocrline)

### OcrResult
* OcrResult `object`
  * language [OcrResult](#ocrresult)
  * orientation `string`: Orientation of the text recognized in the image. The value (up,down,left, or right) refers to the direction that the top of the recognized text is facing, after the image has been rotated around its center according to the detected text angle (see textAngle property).
  * regions `array`: An array of objects, where each object represents a region of recognized text.
    * items [OcrRegion](#ocrregion)
  * textAngle `number`: The angle, in degrees, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly.

### OcrWord
* OcrWord `object`: Information on a recognized word.
  * boundingBox `string`: Bounding box of a recognized word. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.
  * text `string`: String value of a recognized word.

### RecognitionResult
* RecognitionResult `object`
  * lines `array`
    * items [Line](#line)

### ServiceLanguage
* ServiceLanguage `string`

### TagResult
* TagResult `object`: The results of a image tag operation, including any tags and image metadata.
  * metadata [ImageMetadata](#imagemetadata)
  * requestId `string`: Id of the REST API request.
  * tags `array`: A list of tags with confidence level.
    * items [ImageTag](#imagetag)

### TextOperationResult
* TextOperationResult `object`
  * recognitionResult [RecognitionResult](#recognitionresult)
  * status `string` (values: Not Started, Running, Failed, Succeeded): Status of the text operation.

### Word
* Word `object`
  * boundingBox [BoundingBox](#boundingbox)
  * text `string`


