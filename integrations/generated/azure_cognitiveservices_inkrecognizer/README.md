# @datafire/azure_cognitiveservices_inkrecognizer

Client library for Ink Recognizer Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_inkrecognizer
```
```js
let azure_cognitiveservices_inkrecognizer = require('@datafire/azure_cognitiveservices_inkrecognizer').create({
  apim_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The service is used to perform ink layout and recognition of written words and shapes. Ink strokes passed to the service are recognized and organized into recognition results in the response

## Actions

### InkRecognizer_Recognize
Ink Recognition operation is used to perform ink layout and recognition of written words and shapes. It allows passing the ink strokes to the service to get the recognition results in the response.


```js
azure_cognitiveservices_inkrecognizer.InkRecognizer_Recognize({
  "body": {
    "strokes": [],
    "language": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [analysisRequest](#analysisrequest)
  * x-ms-client-request-id `string`: The request id used to uniquely identify each request during troubleshooting. This is an optional parameter useful for correlating logs and other artifacts.

#### Output
* output [analysisResponse](#analysisresponse)



## Definitions

### alternatePattern
* alternatePattern `array`: The list of alternates for the core recognition result. In case of handwriting related recognition units, this list includes other words that are close possibilities to the results provided as 'recognizedText'.
  * items `object`
    * category **required** [leafCategoryPattern](#leafcategorypattern)
    * confidence `number`: A number between 0 and 1 which indicates the confidence level in the result
    * points `array`: Array of point objects that represent points that are relevant to the type of recognition unit. For example, for leaf node of inkDrawing category that represents a triangle, points would include the x,y coordinates of the vertices of the recognized triangle. The points represent the coordinates of points used to create the perfectly drawn shape that is closest to the original input. They may not exactly match.
      * items [pointDetailsPattern](#pointdetailspattern)
    * recognizedString **required** `string`: The recognized string from an inkWord or the name of a recognized shape in an inkDrawing object
    * rotationAngle `number`: The angular orientation of an object relative to the horizontal axis

### analysisRequest
* analysisRequest `object`: This shows the expected contents of a request
  * applicationType `string` (values: drawing, writing, mixed): This describes the domain of the client application
  * inkPointValueAttributes `array`
    * items [inkPointValueAttribute](#inkpointvalueattribute)
  * inputDeviceKind `string` (values: digitizer, pen, lightPen, touchScreen, touchPad, whiteBoard, 3dDigitizer, stereoPlotter, articulatedArm, armature): This identifies the kind of device used as the writing instrument
  * language **required** `string`: The IETF BCP 47 language code (for ex. en-US, en-GB, hi-IN etc.) of the expected language for the handwritten content in the ink strokes. The response will include results from this language.
  * strokes **required** `array`: This is the array of strokes sent for recognition. Best results are produced when the order of strokes added in the array matches the order in which the user created them. Changing the stroke order may produce unexpected results.
    * items [stroke](#stroke)
  * unit `string` (values: mm, cm, in): This is the physical unit of the ink strokes. It is up to the application developer to decide how to convert the device specific units to physical units before calling the service. The conversion factor can be different based on the type of the device used.
  * unitMultiple `number`:  This is a scaling factor to be applied to the point coordinates when interpreting them in the physical units specified.

### analysisResponse
* analysisResponse `object`: This shows the expected contents of a response from the service
  * language `string`: This is the language used for recognizing handwriting from the ink strokes in the request.
  * recognitionUnits **required** [recognitionUnit](#recognitionunit)
  * unit `string` (values: mm, cm, in): This is the physical unit of the ink strokes. It is up to the application developer to decide how to convert the device specific units to physical units before calling the service. The conversion factor can be different based on the type of the device used.
  * unitMultiple `number`:  This is a scaling factor to be applied to the point coordinates when interpreting them in the physical units specified.

### categoryPattern
* categoryPattern `string` (values: root, writingRegion, paragraph, line, inkBullet, inkDrawing, inkWord, unknown): The category of a recognition unit represents the type of content for that unit.

### classPattern
* classPattern `string` (values: container, leaf): The class represents the type of the recognition unit. A recognition unit can be a leaf node or a container node. Container nodes typically have leaf nodes as children.

### containerCategoryPattern
* containerCategoryPattern `string` (values: root, writingRegion, paragraph, line): The category of recognition units that represent types that have children recognition units.

### drawingAttributesPattern
* drawingAttributesPattern `object`: The properties to use when rendering ink
  * color `object`: This shows the components of the color in rgba format
    * a `number`: The alpha component of the color
    * b `number`: The blue component of the color
    * g `number`: The green component of the color
    * r `number`: The red component of the color
  * fitToCurve `boolean`:  This indicates whether Bezier smoothing is used to render the stroke
  * height `number`: The height of the stylus used to draw the stroke
  * ignorePressure `boolean`:  This indicates whether the thickness of a rendered Stroke changes according the amount of pressure applied.
  * rasterOp `string` (values: noOperation, copyPen, maskPen)
  * tip `string` (values: ellipse, rectangle): This specifies the tip to be used to draw a stroke
  * width `number`: The width of the stylus used to draw the stroke

### errorModel
* errorModel `object`
  * code **required** `string`: This represents the error code
  * details `array`: This gives details of the reason(s) for the error
    * items `object`
      * code `string`: This represents the error code
      * message `string`: This represents the error message
      * target `string`: This represents the target of the error message
  * message **required** `string`: This represents the error message
  * target `string`: This represents the target of the error message

### inkPoint
* inkPoint `object`: An object containing the properties of an point in the path of an ink stroke. The main properties are the x and y values. Other include tip pressure, x tilt etc. For the coordinate values, it is recommended to have a precision of 8 digits after the decimal to obtain most accurate recognition results. The origin (0,0) of the canvas is assumed to be at the top left corner of the canvas
  * barrelPressure `number`: The force exerted directly by the user on a transducer sensor, such as a pressure-sensitive button on the barrel of a stylus. This may not be used for recognition.
  * barrelSwitch `boolean`: A non-tip button located on the barrel of a stylus. Its function is typically mapped to a system secondary button. This may not be used for recognition.
  * eraser `boolean`: The control is used for erasing objects. It is typically located opposite the writing end of a stylus. This may not be used for recognition.
  * height `number`: The height of the tip of the writing instrument. This is used by touch screen devices to report the height of the finger contact on the writing surface. This may not be used for recognition.
  * inverted `boolean`: A value that indicates that the currently sensed position originates from the end of a stylus opposite the tip switch. This may not be used for recognition.
  * secondaryTip `boolean`: A secondary switch used in conjunction with the tip switch to indicate pressure above a certain threshold applied with the stylus. This may not be used for recognition.
  * timestamp `number`: The time relative to the absolute time the transducer last became active. This may not be used for recognition.
  * tipPressure `number`: The force exerted against the tablet surface by the transducer, typically a stylus. This may not be used for recognition.
  * tipSwitch `boolean`: A switch located on the tip of a stylus indicating contact of the stylus with a surface. This may not be used for recognition.
  * width `number`: The width of the tip of the writing instrument. This is used by touch screen devices to report the width of the finger contact on the writing surface. This may not be used for recognition.
  * x **required** `number`: The x coordinate of the pen location on the writing surface.
  * xTilt `number`: The plane angle between the Y-Z plane and the plane containing the transducer axis and the Y axis. This may not be used for recognition.
  * y **required** `number`: The y coordinate of the pen location on the writing surface.
  * yTilt `number`: The angle between the X-Z and transducer-X planes. A positive Y Tilt is toward the user. This may not be used for recognition.
  * z `number`: The z coordinate of the pen location on the writing space. This may not be used for recognition.

### inkPointValueAttribute
* inkPointValueAttribute `object`: A container for the attributes of a value contained in the ink point object.
  * logicalMaximum `number`: The maximum value for the attribute
  * logicalMinimum `number`: The minimum value for the attribute
  * name `string`: The name of the point attribute.

### leafCategoryPattern
* leafCategoryPattern `string` (values: inkDrawing, inkBullet, inkWord, unknown): The category of recognition units that represent types that don't have children recognition units.

### pointDetailsPattern
* pointDetailsPattern `object`: This holds all the properties of one point
  * x **required** `number`: This represents the x coordinate of the point
  * y **required** `number`: This represents the y coordinate of the point

### recognitionUnit
* recognitionUnit `array`: The list of recognition units based on the analysis of the ink strokes.
  * items `object`: This identifies the recognized entity
    * alternates [alternatePattern](#alternatepattern)
    * boundingRectangle `object`: The bounding rectangle of the recognition unit represented by the coordinates of the top left corner (topX,topY) along with width and height of the rectangle. Note that this rectangle is not rotated. So for  rotated objects such as slanted handwriting, it will cover the entire object. The unit will be matched to the one specified in the original request (mm by default.) 
      * height `number`: The is the height of the bounding rectangle
      * topX `number`: This is the top left x coordinate
      * topY `number`: This is the top left y coordinate
      * width `number`: This is width of the bounding rectangle
    * category **required** [categoryPattern](#categorypattern)
    * center [pointDetailsPattern](#pointdetailspattern)
    * childIds `array`: An array of integers representing the identifier of each child of the current recognition unit.
      * items `integer`
    * class **required** [classPattern](#classpattern)
    * confidence `number`: A number between 0 and 1 which indicates the confidence level in the result.
    * id **required** `integer`: The identifier of the recognition unit. This id is used to indicate parent/child relationship between different recognition units.
    * parentId **required** `integer`: The id of the parent node in the tree structure of the recognition results. parent = 0 indicates that there is no dedicated parent node for this unit.
    * points `array`: Array of point objects that represent points that are relevant to the type of recognition unit. For example, for a leaf node of inkDrawing category that represents a triangle, points would include the x, y coordinates of the vertices of the recognized triangle. The points represent the coordinates used to create the perfectly drawn shape that is closest to the original input. They may not exactly match.
      * items [pointDetailsPattern](#pointdetailspattern)
    * recognizedObject [shapePattern](#shapepattern)
    * recognizedText `string`: The string contains the text that was recognized. It can be an empty string if the recognizer cannot determine the text.
    * rotatedBoundingRectangle `array`: This is the rotated bounding rectangle that covers the entire recognized object along the angle of rotation of the object. Note that this is NOT the same as rotating the boundingRectangle by the rotation angle.
      * items [pointDetailsPattern](#pointdetailspattern)
    * rotationAngle `number`: This is the angle at which the unit is rotated in degrees with respect to the positive X axis.
    * strokeIds **required** `array`: This is an array of integers representing the list of stroke Identifiers from the input request body that belong to this recognition unit.
      * items `integer`

### shapePattern
* shapePattern `string` (values: drawing, square, rectangle, circle, ellipse, triangle, isoscelesTriangle, equilateralTriangle, rightTriangle, quadrilateral, diamond, trapezoid, parallelogram, pentagon, hexagon, blockArrow, heart, starSimple, starCrossed, cloud, line, curve, polyLine): The category should be used to determines the field to read the recognition result. Recognized Object represents the shape that was recognized for the node with category as inkDrawing. For handwriting related nodes, recognizedText contains the actual recognition result.

### stroke
* stroke `object`
  * drawingAttributes [drawingAttributesPattern](#drawingattributespattern)
  * id **required** `integer`: This is treated as a unique identifier for each stroke within a request. If the id is repeated within the same request, the service will return an error.
  * kind `string` (values: inkDrawing, inkWriting): This is an optional property which influences the decision about what the stroke kind is between inkWriting and inkDrawing. This property should be set ONLY if the type of user content is known ahead of time. Not setting this value implies the kind is not known ahead of time. Kind represents the type of content the stroke is a part of.
  * language `string`: The IETF BCP 47 language code (for ex. en-US, en-GB, hi-IN etc.) of the expected language for the handwritten content in this stroke. The response will include results from this language.
  * points **required** `array`
    * items [inkPoint](#inkpoint)


