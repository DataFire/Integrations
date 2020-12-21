# @datafire/amazonaws_textract

Client library for Amazon Textract

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_textract
```
```js
let amazonaws_textract = require('@datafire/amazonaws_textract').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon Textract detects and analyzes text in documents and converts it into machine-readable text. This is the API reference documentation for Amazon Textract.

## Actions

### AnalyzeDocument



```js
amazonaws_textract.AnalyzeDocument({
  "Document": null,
  "FeatureTypes": null
}, context)
```

#### Input
* input `object`
  * Document **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * FeatureTypes **required**
    * items [FeatureType](#featuretype)
  * HumanLoopConfig
    * DataAttributes
      * ContentClassifiers
        * items [ContentClassifier](#contentclassifier)
    * FlowDefinitionArn **required**
    * HumanLoopName **required**

#### Output
* output [AnalyzeDocumentResponse](#analyzedocumentresponse)

### DetectDocumentText



```js
amazonaws_textract.DetectDocumentText({
  "Document": null
}, context)
```

#### Input
* input `object`
  * Document **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version

#### Output
* output [DetectDocumentTextResponse](#detectdocumenttextresponse)

### GetDocumentAnalysis



```js
amazonaws_textract.GetDocumentAnalysis({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * MaxResults
  * NextToken

#### Output
* output [GetDocumentAnalysisResponse](#getdocumentanalysisresponse)

### GetDocumentTextDetection



```js
amazonaws_textract.GetDocumentTextDetection({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * MaxResults
  * NextToken

#### Output
* output [GetDocumentTextDetectionResponse](#getdocumenttextdetectionresponse)

### StartDocumentAnalysis



```js
amazonaws_textract.StartDocumentAnalysis({
  "DocumentLocation": null,
  "FeatureTypes": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DocumentLocation **required**
    * S3Object
      * Bucket
      * Name
      * Version
  * FeatureTypes **required**
    * items [FeatureType](#featuretype)
  * JobTag
  * KMSKeyId
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * OutputConfig
    * S3Bucket **required**
    * S3Prefix

#### Output
* output [StartDocumentAnalysisResponse](#startdocumentanalysisresponse)

### StartDocumentTextDetection



```js
amazonaws_textract.StartDocumentTextDetection({
  "DocumentLocation": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DocumentLocation **required**
    * S3Object
      * Bucket
      * Name
      * Version
  * JobTag
  * KMSKeyId
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * OutputConfig
    * S3Bucket **required**
    * S3Prefix

#### Output
* output [StartDocumentTextDetectionResponse](#startdocumenttextdetectionresponse)



## Definitions

### AccessDeniedException


### AnalyzeDocumentRequest
* AnalyzeDocumentRequest `object`
  * Document **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version
  * FeatureTypes **required**
    * items [FeatureType](#featuretype)
  * HumanLoopConfig
    * DataAttributes
      * ContentClassifiers
        * items [ContentClassifier](#contentclassifier)
    * FlowDefinitionArn **required**
    * HumanLoopName **required**

### AnalyzeDocumentResponse
* AnalyzeDocumentResponse `object`
  * AnalyzeDocumentModelVersion
  * Blocks
    * items [Block](#block)
  * DocumentMetadata
    * Pages
  * HumanLoopActivationOutput
    * HumanLoopActivationConditionsEvaluationResults
    * HumanLoopActivationReasons
      * items [HumanLoopActivationReason](#humanloopactivationreason)
    * HumanLoopArn

### BadDocumentException


### Block
* Block `object`: <p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p>
  * BlockType
  * ColumnIndex
  * ColumnSpan
  * Confidence
  * EntityTypes
    * items [EntityType](#entitytype)
  * Geometry
    * BoundingBox
      * Height
      * Left
      * Top
      * Width
    * Polygon
      * items [Point](#point)
  * Id
  * Page
  * Relationships
    * items [Relationship](#relationship)
  * RowIndex
  * RowSpan
  * SelectionStatus
  * Text
  * TextType

### BlockList
* BlockList `array`
  * items [Block](#block)

### BlockType
* BlockType `string` (values: KEY_VALUE_SET, PAGE, LINE, WORD, TABLE, CELL, SELECTION_ELEMENT)

### BoundingBox
* BoundingBox `object`: <p>The bounding box around the detected page, text, key-value pair, table, table cell, or selection element on a document page. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall document page size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall document page dimension. For example, if the document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p>
  * Height
  * Left
  * Top
  * Width

### ClientRequestToken
* ClientRequestToken `string`

### ContentClassifier
* ContentClassifier `string` (values: FreeOfPersonallyIdentifiableInformation, FreeOfAdultContent)

### ContentClassifiers
* ContentClassifiers `array`
  * items [ContentClassifier](#contentclassifier)

### DetectDocumentTextRequest
* DetectDocumentTextRequest `object`
  * Document **required**
    * Bytes
    * S3Object
      * Bucket
      * Name
      * Version

### DetectDocumentTextResponse
* DetectDocumentTextResponse `object`
  * Blocks
    * items [Block](#block)
  * DetectDocumentTextModelVersion
  * DocumentMetadata
    * Pages

### Document
* Document `object`: <p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p>
  * Bytes
  * S3Object
    * Bucket
    * Name
    * Version

### DocumentLocation
* DocumentLocation `object`: <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations such as <a>StartDocumentTextDetection</a>.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>
  * S3Object
    * Bucket
    * Name
    * Version

### DocumentMetadata
* DocumentMetadata `object`: Information about the input document.
  * Pages

### DocumentTooLargeException


### EntityType
* EntityType `string` (values: KEY, VALUE)

### EntityTypes
* EntityTypes `array`
  * items [EntityType](#entitytype)

### ErrorCode
* ErrorCode `string`

### FeatureType
* FeatureType `string` (values: TABLES, FORMS)

### FeatureTypes
* FeatureTypes `array`
  * items [FeatureType](#featuretype)

### Float
* Float `number`

### FlowDefinitionArn
* FlowDefinitionArn `string`

### Geometry
* Geometry `object`: Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
  * BoundingBox
    * Height
    * Left
    * Top
    * Width
  * Polygon
    * items [Point](#point)

### GetDocumentAnalysisRequest
* GetDocumentAnalysisRequest `object`
  * JobId **required**
  * MaxResults
  * NextToken

### GetDocumentAnalysisResponse
* GetDocumentAnalysisResponse `object`
  * AnalyzeDocumentModelVersion
  * Blocks
    * items [Block](#block)
  * DocumentMetadata
    * Pages
  * JobStatus
  * NextToken
  * StatusMessage
  * Warnings
    * items [Warning](#warning)

### GetDocumentTextDetectionRequest
* GetDocumentTextDetectionRequest `object`
  * JobId **required**
  * MaxResults
  * NextToken

### GetDocumentTextDetectionResponse
* GetDocumentTextDetectionResponse `object`
  * Blocks
    * items [Block](#block)
  * DetectDocumentTextModelVersion
  * DocumentMetadata
    * Pages
  * JobStatus
  * NextToken
  * StatusMessage
  * Warnings
    * items [Warning](#warning)

### HumanLoopActivationConditionsEvaluationResults
* HumanLoopActivationConditionsEvaluationResults `string`

### HumanLoopActivationOutput
* HumanLoopActivationOutput `object`: Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.
  * HumanLoopActivationConditionsEvaluationResults
  * HumanLoopActivationReasons
    * items [HumanLoopActivationReason](#humanloopactivationreason)
  * HumanLoopArn

### HumanLoopActivationReason
* HumanLoopActivationReason `string`

### HumanLoopActivationReasons
* HumanLoopActivationReasons `array`
  * items [HumanLoopActivationReason](#humanloopactivationreason)

### HumanLoopArn
* HumanLoopArn `string`

### HumanLoopConfig
* HumanLoopConfig `object`: Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. 
  * DataAttributes
    * ContentClassifiers
      * items [ContentClassifier](#contentclassifier)
  * FlowDefinitionArn **required**
  * HumanLoopName **required**

### HumanLoopDataAttributes
* HumanLoopDataAttributes `object`: Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information and adult content. 
  * ContentClassifiers
    * items [ContentClassifier](#contentclassifier)

### HumanLoopName
* HumanLoopName `string`

### HumanLoopQuotaExceededException


### IdList
* IdList `array`
  * items [NonEmptyString](#nonemptystring)

### IdempotentParameterMismatchException


### ImageBlob
* ImageBlob `string`

### InternalServerError


### InvalidJobIdException


### InvalidKMSKeyException


### InvalidParameterException


### InvalidS3ObjectException


### JobId
* JobId `string`

### JobStatus
* JobStatus `string` (values: IN_PROGRESS, SUCCEEDED, FAILED, PARTIAL_SUCCESS)

### JobTag
* JobTag `string`

### KMSKeyId
* KMSKeyId `string`

### LimitExceededException


### MaxResults
* MaxResults `integer`

### NonEmptyString
* NonEmptyString `string`

### NotificationChannel
* NotificationChannel `object`: The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation, such as <a>StartDocumentTextDetection</a>. 
  * RoleArn **required**
  * SNSTopicArn **required**

### OutputConfig
* OutputConfig `object`: Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.
  * S3Bucket **required**
  * S3Prefix

### Pages
* Pages `array`
  * items [UInteger](#uinteger)

### PaginationToken
* PaginationToken `string`

### Percent
* Percent `number`

### Point
* Point `object`: <p>The X and Y coordinates of a point on a document page. The X and Y values that are returned are ratios of the overall document page size. For example, if the input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the document page.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained polygon around detected text. For more information, see Geometry in the Amazon Textract Developer Guide. </p>
  * X
  * Y

### Polygon
* Polygon `array`
  * items [Point](#point)

### ProvisionedThroughputExceededException


### Relationship
* Relationship `object`: <p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p>
  * Ids
    * items [NonEmptyString](#nonemptystring)
  * Type

### RelationshipList
* RelationshipList `array`
  * items [Relationship](#relationship)

### RelationshipType
* RelationshipType `string` (values: VALUE, CHILD, COMPLEX_FEATURES)

### RoleArn
* RoleArn `string`

### S3Bucket
* S3Bucket `string`

### S3Object
* S3Object `object`: <p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p>
  * Bucket
  * Name
  * Version

### S3ObjectName
* S3ObjectName `string`

### S3ObjectVersion
* S3ObjectVersion `string`

### SNSTopicArn
* SNSTopicArn `string`

### SelectionStatus
* SelectionStatus `string` (values: SELECTED, NOT_SELECTED)

### StartDocumentAnalysisRequest
* StartDocumentAnalysisRequest `object`
  * ClientRequestToken
  * DocumentLocation **required**
    * S3Object
      * Bucket
      * Name
      * Version
  * FeatureTypes **required**
    * items [FeatureType](#featuretype)
  * JobTag
  * KMSKeyId
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * OutputConfig
    * S3Bucket **required**
    * S3Prefix

### StartDocumentAnalysisResponse
* StartDocumentAnalysisResponse `object`
  * JobId

### StartDocumentTextDetectionRequest
* StartDocumentTextDetectionRequest `object`
  * ClientRequestToken
  * DocumentLocation **required**
    * S3Object
      * Bucket
      * Name
      * Version
  * JobTag
  * KMSKeyId
  * NotificationChannel
    * RoleArn **required**
    * SNSTopicArn **required**
  * OutputConfig
    * S3Bucket **required**
    * S3Prefix

### StartDocumentTextDetectionResponse
* StartDocumentTextDetectionResponse `object`
  * JobId

### StatusMessage
* StatusMessage `string`

### String
* String `string`

### TextType
* TextType `string` (values: HANDWRITING, PRINTED)

### ThrottlingException


### UInteger
* UInteger `integer`

### UnsupportedDocumentException


### Warning
* Warning `object`: A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>). 
  * ErrorCode
  * Pages
    * items [UInteger](#uinteger)

### Warnings
* Warnings `array`
  * items [Warning](#warning)


