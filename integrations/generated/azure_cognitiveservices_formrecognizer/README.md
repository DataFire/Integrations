# @datafire/azure_cognitiveservices_formrecognizer

Client library for Form Recognizer Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_formrecognizer
```
```js
let azure_cognitiveservices_formrecognizer = require('@datafire/azure_cognitiveservices_formrecognizer').create({
  apim_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Extracts information from forms and images into structured data.

## Actions

### GetCustomModels
Get information about all custom models


```js
azure_cognitiveservices_formrecognizer.GetCustomModels({}, context)
```

#### Input
* input `object`
  * op `string` (values: full, summary): Specify whether to return summary or full list of models.

#### Output
* output [Models](#models)

### TrainCustomModelAsync
Create and train a custom model. The request must include a source parameter that is either an externally accessible Azure storage blob container Uri (preferably a Shared Access Signature Uri) or valid path to a data folder in a locally mounted drive. When local paths are specified, they must follow the Linux/Unix path format and be an absolute path rooted to the input mount configuration setting value e.g., if '{Mounts:Input}' configuration setting value is '/input' then a valid source path would be '/input/contosodataset'. All data to be trained is expected to be under the source folder or sub folders under it. Models are trained using documents that are of the following content type - 'application/pdf', 'image/jpeg', 'image/png', 'image/tiff'. Other type of content is ignored.


```js
azure_cognitiveservices_formrecognizer.TrainCustomModelAsync({
  "trainRequest": {
    "source": ""
  }
}, context)
```

#### Input
* input `object`
  * trainRequest **required** [TrainRequest](#trainrequest)

#### Output
*Output schema unknown*

### DeleteCustomModel
Mark model for deletion. Model artifacts will be permanently removed within a predetermined period.


```js
azure_cognitiveservices_formrecognizer.DeleteCustomModel({
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * modelId **required** `string`: Model identifier.

#### Output
*Output schema unknown*

### GetCustomModel
Get detailed information about a custom model.


```js
azure_cognitiveservices_formrecognizer.GetCustomModel({
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * modelId **required** `string`: Model identifier.
  * includeKeys `boolean`: Include list of extracted keys in model information.

#### Output
* output [Model](#model)

### AnalyzeWithCustomModel
Extract key-value pairs, tables, and semantic values from a given document. The input document must be of one of the supported content types - 'application/pdf', 'image/jpeg', 'image/png' or 'image/tiff'. Alternatively, use 'application/json' type to specify the location (Uri or local path) of the document to be analyzed.


```js
azure_cognitiveservices_formrecognizer.AnalyzeWithCustomModel({
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * modelId **required** `string`: Model identifier.
  * includeTextDetails `boolean`: Include text lines and element references in the result.
  * fileStream [SourceDataStream](#sourcedatastream)

#### Output
*Output schema unknown*

### GetAnalyzeFormResult
Obtain current status and the result of the analyze form operation.


```js
azure_cognitiveservices_formrecognizer.GetAnalyzeFormResult({
  "modelId": "",
  "resultId": ""
}, context)
```

#### Input
* input `object`
  * modelId **required** `string`: Model identifier.
  * resultId **required** `string`: Analyze operation result identifier.

#### Output
* output [AnalyzeOperationResult](#analyzeoperationresult)

### AnalyzeLayoutAsync
Extract text and layout information from a given document. The input document must be of one of the supported content types - 'application/pdf', 'image/jpeg', 'image/png' or 'image/tiff'. Alternatively, use 'application/json' type to specify the location (Uri or local path) of the document to be analyzed.


```js
azure_cognitiveservices_formrecognizer.AnalyzeLayoutAsync({}, context)
```

#### Input
* input `object`
  * fileStream [SourceDataStream](#sourcedatastream)

#### Output
*Output schema unknown*

### GetAnalyzeLayoutResult
Track the progress and obtain the result of the analyze layout operation


```js
azure_cognitiveservices_formrecognizer.GetAnalyzeLayoutResult({
  "resultId": ""
}, context)
```

#### Input
* input `object`
  * resultId **required** `string`: Analyze operation result identifier.

#### Output
* output [AnalyzeOperationResult](#analyzeoperationresult)

### AnalyzeReceiptAsync
Extract field text and semantic values from a given receipt document. The input document must be of one of the supported content types - 'application/pdf', 'image/jpeg', 'image/png' or 'image/tiff'. Alternatively, use 'application/json' type to specify the location (Uri or local path) of the document to be analyzed.


```js
azure_cognitiveservices_formrecognizer.AnalyzeReceiptAsync({}, context)
```

#### Input
* input `object`
  * includeTextDetails `boolean`: Include text lines and element references in the result.
  * fileStream [SourceDataStream](#sourcedatastream)

#### Output
*Output schema unknown*

### GetAnalyzeReceiptResult
Track the progress and obtain the result of the analyze receipt operation.


```js
azure_cognitiveservices_formrecognizer.GetAnalyzeReceiptResult({
  "resultId": ""
}, context)
```

#### Input
* input `object`
  * resultId **required** `string`: Analyze operation result identifier.

#### Output
* output [AnalyzeOperationResult](#analyzeoperationresult)



## Definitions

### AnalyzeOperationResult
* AnalyzeOperationResult `object`: Status and result of the queued analyze operation.
  * analyzeResult [AnalyzeResult](#analyzeresult)
  * createdDateTime **required** `string`: Date and time (UTC) when the analyze operation was submitted.
  * lastUpdatedDateTime **required** `string`: Date and time (UTC) when the status was last updated.
  * status **required** [OperationStatus](#operationstatus)

### AnalyzeResult
* AnalyzeResult `object`: Analyze operation result.
  * documentResults `array`: Document-level information extracted from the input.
    * items [DocumentResult](#documentresult)
  * errors `array`: List of errors reported during the analyze operation.
    * items [ErrorInformation](#errorinformation)
  * pageResults `array`: Page-level information extracted from the input.
    * items [PageResult](#pageresult)
  * readResults **required** `array`: Text extracted from the input.
    * items [ReadResult](#readresult)
  * version **required** `string`: Version of schema used for this result.

### BoundingBox
* BoundingBox `array`: Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches.
  * items `number`

### Confidence
* Confidence `number`: Confidence value.

### DataTable
* DataTable `object`: Information about the extracted table contained in a page.
  * cells **required** `array`: List of cells contained in the table.
    * items [DataTableCell](#datatablecell)
  * columns **required** `integer`: Number of columns.
  * rows **required** `integer`: Number of rows.

### DataTableCell
* DataTableCell `object`: Information about the extracted cell in a table.
  * boundingBox **required** [BoundingBox](#boundingbox)
  * columnIndex **required** `integer`: Column index of the cell.
  * columnSpan `integer`: Number of columns spanned by this cell.
  * confidence **required** [Confidence](#confidence)
  * elements `array`: When includeTextDetails is set to true, a list of references to the text elements constituting this table cell.
    * items [ElementReference](#elementreference)
  * isFooter `boolean`: Is the current cell a footer cell?
  * isHeader `boolean`: Is the current cell a header cell?
  * rowIndex **required** `integer`: Row index of the cell.
  * rowSpan `integer`: Number of rows spanned by this cell.
  * text **required** `string`: Text content of the cell.

### DocumentResult
* DocumentResult `object`: A set of extracted fields corresponding to the input document.
  * docType **required** `string`: Document type.
  * fields **required** `object`: Dictionary of named field values.
  * pageRange **required** `array`: First and last page number where the document is found.
    * items `integer`

### ElementReference
* ElementReference `string`: Reference to a line or word.

### ErrorInformation
* ErrorInformation `object`
  * code **required** `string`
  * message **required** `string`

### ErrorResponse
* ErrorResponse `object`
  * error **required** [ErrorInformation](#errorinformation)

### FieldValue
* FieldValue `object`: Recognized field value.
  * boundingBox [BoundingBox](#boundingbox)
  * confidence [Confidence](#confidence)
  * elements `array`: When includeTextDetails is set to true, a list of references to the text elements constituting this field.
    * items [ElementReference](#elementreference)
  * page `integer`: The 1-based page number in the input document.
  * text `string`: Text content of the extracted field.
  * type **required** [FieldValueType](#fieldvaluetype)
  * valueArray `array`: Array of field values.
    * items [FieldValue](#fieldvalue)
  * valueDate `string`: Date value.
  * valueInteger `integer`: Integer value.
  * valueNumber `number`: Floating point value.
  * valueObject `object`: Dictionary of named field values.
  * valuePhoneNumber `string`: Phone number value.
  * valueString `string`: String value.
  * valueTime `string`: Time value.

### FieldValueType
* FieldValueType `string` (values: string, date, time, phoneNumber, number, integer, array, object): Semantic data type of the field value.

### FormFieldsReport
* FormFieldsReport `object`: Report for a custom model training field.
  * accuracy **required** `number`: Estimated extraction accuracy for this field.
  * fieldName **required** `string`: Training field name.

### KeyValueElement
* KeyValueElement `object`: Information about the extracted key or value in a key-value pair.
  * boundingBox [BoundingBox](#boundingbox)
  * elements `array`: When includeTextDetails is set to true, a list of references to the text elements constituting this key or value.
    * items [ElementReference](#elementreference)
  * text **required** `string`: The text content of the key or value.

### KeyValuePair
* KeyValuePair `object`: Information about the extracted key-value pair.
  * confidence **required** [Confidence](#confidence)
  * key **required** [KeyValueElement](#keyvalueelement)
  * label `string`: A user defined label for the key/value pair entry.
  * value **required** [KeyValueElement](#keyvalueelement)

### KeysResult
* KeysResult `object`: Keys extracted by the custom model.
  * clusters **required** `object`: Object mapping clusterIds to a list of keys.

### Language
* Language `string` (values: en, es): Language code

### Model
* Model `object`: Response to the get custom model operation.
  * keys [KeysResult](#keysresult)
  * modelInfo **required** [ModelInfo](#modelinfo)
  * trainResult [TrainResult](#trainresult)

### ModelInfo
* ModelInfo `object`: Basic custom model information.
  * createdDateTime **required** `string`: Date and time (UTC) when the model was created.
  * lastUpdatedDateTime **required** `string`: Date and time (UTC) when the status was last updated.
  * modelId **required** `string`: Model identifier.
  * status **required** `string` (values: creating, ready, invalid): Status of the model.

### Models
* Models `object`: Response to the list custom models operation.
  * modelList `array`: Collection of trained custom models.
    * items [ModelInfo](#modelinfo)
  * nextLink `string`: Link to the next page of custom models.
  * summary `object`: Summary of all trained custom models.
    * count **required** `integer`: Current count of trained custom models.
    * lastUpdatedDateTime **required** `string`: Date and time (UTC) when the summary was last updated.
    * limit **required** `integer`: Max number of models that can be trained for this subscription.

### OperationStatus
* OperationStatus `string` (values: notStarted, running, succeeded, failed): Status of the queued operation.

### PageResult
* PageResult `object`: Extracted information from a single page.
  * clusterId `integer`: Cluster identifier.
  * keyValuePairs `array`: List of key-value pairs extracted from the page.
    * items [KeyValuePair](#keyvaluepair)
  * page **required** `integer`: Page number.
  * tables `array`: List of data tables extracted from the page.
    * items [DataTable](#datatable)

### ReadResult
* ReadResult `object`: Text extracted from a page in the input document.
  * angle **required** `number`: The general orientation of the text in clockwise direction, measured in degrees between (-180, 180].
  * height **required** `number`: The height of the image/PDF in pixels/inches, respectively.
  * language [Language](#language)
  * lines `array`: When includeTextDetails is set to true, a list of recognized text lines. The maximum number of lines returned is 300 per page. The lines are sorted top to bottom, left to right, although in certain cases proximity is treated with higher priority. As the sorting order depends on the detected text, it may change across images and OCR version updates. Thus, business logic should be built upon the actual line location instead of order.
    * items [TextLine](#textline)
  * page **required** `integer`: The 1-based page number in the input document.
  * unit **required** `string` (values: pixel, inch): The unit used by the width, height and boundingBox properties. For images, the unit is "pixel". For PDF, the unit is "inch".
  * width **required** `number`: The width of the image/PDF in pixels/inches, respectively.

### SourceDataStream
* SourceDataStream `object`: A PDF document, image (jpg/png/tiff), or JSON file to analyze.

### SourcePath
* SourcePath `object`: Uri or local path to source data.
  * source `string`: File source path.

### TextLine
* TextLine `object`: An object representing an extracted text line.
  * boundingBox **required** [BoundingBox](#boundingbox)
  * language [Language](#language)
  * text **required** `string`: The text content of the line.
  * words **required** `array`: List of words in the text line.
    * items [TextWord](#textword)

### TextWord
* TextWord `object`: An object representing a word.
  * boundingBox **required** [BoundingBox](#boundingbox)
  * confidence [Confidence](#confidence)
  * text **required** `string`: The text content of the word.

### TrainRequest
* TrainRequest `object`: Request parameter to train a new custom model.
  * source **required** `string`: Source path containing the training documents.
  * sourceFilter [TrainSourceFilter](#trainsourcefilter)
  * useLabelFile `boolean`: Use label file for training a model.

### TrainResult
* TrainResult `object`: Custom model training result.
  * averageModelAccuracy `number`: Average accuracy.
  * errors `array`: Errors returned during the training operation.
    * items [ErrorInformation](#errorinformation)
  * fields `array`: List of fields used to train the model and the train operation error reported by each.
    * items [FormFieldsReport](#formfieldsreport)
  * trainingDocuments **required** `array`: List of the documents used to train the model and any errors reported in each document.
    * items [TrainingDocumentInfo](#trainingdocumentinfo)

### TrainSourceFilter
* TrainSourceFilter `object`: Filter to apply to the documents in the source path for training.
  * includeSubFolders `boolean`: A flag to indicate if sub folders within the set of prefix folders will also need to be included when searching for content to be preprocessed.
  * prefix `string`: A case-sensitive prefix string to filter documents in the source path for training. For example, when using a Azure storage blob Uri, use the prefix to restrict sub folders for training.

### TrainingDocumentInfo
* TrainingDocumentInfo `object`: Report for a custom model training document.
  * documentName **required** `string`: Training document name.
  * errors **required** `array`: List of errors.
    * items [ErrorInformation](#errorinformation)
  * pages **required** `integer`: Total number of pages trained.
  * status **required** `string` (values: succeeded, partiallySucceeded, failed): Status of the training operation.


