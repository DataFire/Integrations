# @datafire/microsoft_cognitiveservices_ocr

Client library for Computer Vision Client

## Installation and Usage
```bash
npm install --save @datafire/microsoft_cognitiveservices_ocr
```
```js
let microsoft_cognitiveservices_ocr = require('@datafire/microsoft_cognitiveservices_ocr').create({
  apim_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image.  It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences.  Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.

## Actions

### BatchReadFile
Use this interface to get the result of a Read operation, employing the state-of-the-art Optical Character Recognition (OCR) algorithms optimized for text-heavy documents. When you use the Read File interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your 'GetReadOperationResult' operation to access OCR results.​


```js
microsoft_cognitiveservices_ocr.BatchReadFile({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ImageUrl](#imageurl)

#### Output
*Output schema unknown*

### GetReadOperationResult
This interface is used for getting OCR results of Read operation. The URL to this interface should be retrieved from 'Operation-Location' field returned from Batch Read File interface.


```js
microsoft_cognitiveservices_ocr.GetReadOperationResult({
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * operationId **required** `string`: Id of read operation returned in the response of the 'Batch Read File' interface.

#### Output
* output [ReadOperationResult](#readoperationresult)

### RecognizeText
Recognize Text operation. When you use the Recognize Text interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your Get Recognize Text Operation Result operation.


```js
microsoft_cognitiveservices_ocr.RecognizeText({
  "mode": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * mode **required** `string` (values: Handwritten, Printed): Type of text to recognize.
  * body **required** [ImageUrl](#imageurl)

#### Output
*Output schema unknown*

### GetTextOperationResult
This interface is used for getting text operation result. The URL to this interface should be retrieved from 'Operation-Location' field returned from Recognize Text interface.


```js
microsoft_cognitiveservices_ocr.GetTextOperationResult({
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * operationId **required** `string`: Id of the text operation returned in the response of the 'Recognize Text'

#### Output
* output [TextOperationResult](#textoperationresult)



## Definitions

### BoundingBox
* BoundingBox `array`: Quadrangle bounding box, with coordinates in original image. The eight numbers represent the four points (x-coordinate, y-coordinate from the left-top corner of the image) of the detected rectangle from the left-top corner in the clockwise direction. For images, coordinates are in pixels. For PDF, coordinates are in inches.
  * items `number`

### ComputerVisionError
* ComputerVisionError `object`: Details about the API request error.
  * code **required** `string` (values: InvalidImageFormat, UnsupportedMediaType, InvalidImageUrl, NotSupportedFeature, NotSupportedImage, Timeout, InternalServerError, InvalidImageSize, BadArgument, DetectFaceError, NotSupportedLanguage, InvalidThumbnailSize, InvalidDetails, InvalidModel, CancelledRequest, NotSupportedVisualFeature, FailedToProcess, Unspecified, StorageException): The error code.
  * message **required** `string`: A message explaining the error reported by the service.
  * requestId `string`: A unique request identifier.

### ImageUrl
* ImageUrl `object`
  * url **required** `string`: Publicly reachable URL of an image.

### Line
* Line `object`: An object representing a recognized text line.
  * boundingBox [BoundingBox](#boundingbox)
  * text `string`: The text content of the line.
  * words `array`: List of words in the text line.
    * items [Word](#word)

### OperationStatus
* OperationStatus `string` (values: NotStarted, Running, Failed, Succeeded): Status code of the text operation.

### ReadOperationResult
* ReadOperationResult `object`: OCR result of the read operation.
  * recognitionResults `array`: An array of text recognition result of the read operation.
    * items [TextRecognitionResult](#textrecognitionresult)
  * status [OperationStatus](#operationstatus)

### TextOperationResult
* TextOperationResult `object`: Result of recognition text operation.
  * recognitionResult [TextRecognitionResult](#textrecognitionresult)
  * status [OperationStatus](#operationstatus)

### TextRecognitionResult
* TextRecognitionResult `object`: An object representing a recognized text region
  * clockwiseOrientation `number`: The orientation of the image in degrees in the clockwise direction. Range between [0, 360).
  * height `number`: The height of the image in pixels or the PDF in inches.
  * lines **required** `array`: A list of recognized text lines.
    * items [Line](#line)
  * page `integer`: The 1-based page number of the recognition result.
  * unit `string` (values: pixel, inch): The unit used in the Width, Height and BoundingBox. For images, the unit is 'pixel'. For PDF, the unit is 'inch'.
  * width `number`: The width of the image in pixels or the PDF in inches.

### Word
* Word `object`: An object representing a recognized word.
  * boundingBox **required** [BoundingBox](#boundingbox)
  * confidence `string` (values: High, Low): Qualitative confidence measure.
  * text **required** `string`: The text content of the word.


