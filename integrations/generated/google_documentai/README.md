# @datafire/google_documentai

Client library for Cloud Document AI API

## Installation and Usage
```bash
npm install --save @datafire/google_documentai
```
```js
let google_documentai = require('@datafire/google_documentai').create({
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

Service to parse structured information from unstructured or semi-structured documents using state-of-the-art Google AI such as natural language, computer vision, translation, and AutoML.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_documentai.oauthCallback({
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
google_documentai.oauthRefresh(null, context)
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

### documentai.projects.locations.processors.humanReviewConfig.reviewDocument
Send a document for Human Review. The input document should be processed by the specified processor.


```js
google_documentai.documentai.projects.locations.processors.humanReviewConfig.reviewDocument({
  "humanReviewConfig": ""
}, context)
```

#### Input
* input `object`
  * humanReviewConfig **required** `string`: Required. The resource name of the HumanReviewConfig that the document will be reviewed with.
  * body [GoogleCloudDocumentaiV1beta3ReviewDocumentRequest](#googleclouddocumentaiv1beta3reviewdocumentrequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### documentai.projects.locations.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_documentai.documentai.projects.locations.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### documentai.projects.locations.list
Lists information about the supported locations for this service.


```js
google_documentai.documentai.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource that owns the locations collection, if applicable.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [GoogleCloudLocationListLocationsResponse](#googlecloudlocationlistlocationsresponse)

### documentai.projects.locations.processors.processorVersions.batchProcess
LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.


```js
google_documentai.documentai.projects.locations.processors.processorVersions.batchProcess({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of Processor or ProcessorVersion. Format: projects/{project}/locations/{location}/processors/{processor}, or projects/{project}/locations/{location}/processors/{processor}/processorVerions/{processorVersion}
  * body [GoogleCloudDocumentaiV1beta3BatchProcessRequest](#googleclouddocumentaiv1beta3batchprocessrequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### documentai.projects.locations.processors.processorVersions.process
Processes a single document.


```js
google_documentai.documentai.projects.locations.processors.processorVersions.process({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: projects/{project}/locations/{location}/processors/{processor}, or projects/{project}/locations/{location}/processors/{processor}/processorVerions/{processorVersion}
  * body [GoogleCloudDocumentaiV1beta3ProcessRequest](#googleclouddocumentaiv1beta3processrequest)
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
* output [GoogleCloudDocumentaiV1beta3ProcessResponse](#googleclouddocumentaiv1beta3processresponse)



## Definitions

### GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata
* GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata `object`: The common metadata for long running operations.
  * createTime `string`: The creation time of the operation.
  * state `string` (values: STATE_UNSPECIFIED, RUNNING, CANCELLING, SUCCEEDED, FAILED, CANCELLED): The state of the operation.
  * stateMessage `string`: A message providing more details about the current state of processing.
  * updateTime `string`: The last update time of the operation.

### GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadata
* GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadata `object`: The long running operation metadata for CreateLabelerPool.
  * commonMetadata [GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#googleclouddocumentaiuiv1beta3commonoperationmetadata)

### GoogleCloudDocumentaiUiv1beta3CreateProcessorVersionMetadata
* GoogleCloudDocumentaiUiv1beta3CreateProcessorVersionMetadata `object`: The metadata that represents a processor version being created.
  * createTime `string`: The creation time of the operation.
  * state `string` (values: STATE_UNSPECIFIED, QUEUED, PREPARING, RUNNING, SUCCEEDED, FAILED, CANCELLING, CANCELLED): The state of the current disable processor operation.
  * updateTime `string`: The last update time of the operation.

### GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadata
* GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadata `object`: The long running operation metadata for DeleteLabelerPool.
  * commonMetadata [GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#googleclouddocumentaiuiv1beta3commonoperationmetadata)

### GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadata
* GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadata `object`: The long running operation metadata for delete processor method.
  * commonMetadata [GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#googleclouddocumentaiuiv1beta3commonoperationmetadata)
  * createTime `string`: The creation time of the operation.
  * state `string` (values: STATE_UNSPECIFIED, WAITING, RUNNING, SUCCEEDED, FAILED): The state of the current delete processor operation.
  * stateMessage `string`: A message providing more details about the current state of processing. For example, the error message if the operation is failed.
  * updateTime `string`: The last update time of the operation.

### GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadata
* GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadata `object`: The long running operation metadata for delete processor version method.
  * commonMetadata [GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#googleclouddocumentaiuiv1beta3commonoperationmetadata)

### GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadata
* GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadata `object`: The long running operation metadata for deploy processor version method.
  * commonMetadata [GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#googleclouddocumentaiuiv1beta3commonoperationmetadata)

### GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponse
* GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponse `object`: Response message for the deploy processor version method.

### GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadata
* GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadata `object`: The long running operation metadata for disable processor method.
  * commonMetadata [GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#googleclouddocumentaiuiv1beta3commonoperationmetadata)
  * createTime `string`: The creation time of the operation.
  * state `string` (values: STATE_UNSPECIFIED, WAITING, RUNNING, SUCCEEDED, CANCELLING, CANCELLED, FAILED): The state of the current disable processor operation.
  * stateMessage `string`: A message providing more details about the current state of processing. For example, the error message if the operation is failed.
  * updateTime `string`: The last update time of the operation.

### GoogleCloudDocumentaiUiv1beta3DisableProcessorResponse
* GoogleCloudDocumentaiUiv1beta3DisableProcessorResponse `object`: Response message for the disable processor method. Intentionally empty proto for adding fields in future.

### GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadata
* GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadata `object`: The long running operation metadata for enable processor method.
  * commonMetadata [GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#googleclouddocumentaiuiv1beta3commonoperationmetadata)
  * createTime `string`: The creation time of the operation.
  * state `string` (values: STATE_UNSPECIFIED, WAITING, RUNNING, SUCCEEDED, CANCELLING, CANCELLED, FAILED): The state of the current enable processor operation.
  * stateMessage `string`: A message providing more details about the current state of processing. For example, the error message if the operation is failed.
  * updateTime `string`: The last update time of the operation.

### GoogleCloudDocumentaiUiv1beta3EnableProcessorResponse
* GoogleCloudDocumentaiUiv1beta3EnableProcessorResponse `object`: Response message for the enable processor method. Intentionally empty proto for adding fields in future.

### GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadata
* GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadata `object`: The long running operation metadata for the undeploy processor version method.
  * commonMetadata [GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#googleclouddocumentaiuiv1beta3commonoperationmetadata)

### GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponse
* GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponse `object`: Response message for the undeploy processor version method.

### GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadata
* GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadata `object`: The long running operation metadata for updating the human review configuration.
  * commonMetadata [GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#googleclouddocumentaiuiv1beta3commonoperationmetadata)

### GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadata
* GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadata `object`: The long running operation metadata for UpdateLabelerPool.
  * commonMetadata [GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata](#googleclouddocumentaiuiv1beta3commonoperationmetadata)

### GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponse
* GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponse `object`: Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.
  * responses `array`: Responses for each individual document.
    * items [GoogleCloudDocumentaiV1beta1ProcessDocumentResponse](#googleclouddocumentaiv1beta1processdocumentresponse)

### GoogleCloudDocumentaiV1beta1BoundingPoly
* GoogleCloudDocumentaiV1beta1BoundingPoly `object`: A bounding polygon for the detected image annotation.
  * normalizedVertices `array`: The bounding polygon normalized vertices.
    * items [GoogleCloudDocumentaiV1beta1NormalizedVertex](#googleclouddocumentaiv1beta1normalizedvertex)
  * vertices `array`: The bounding polygon vertices.
    * items [GoogleCloudDocumentaiV1beta1Vertex](#googleclouddocumentaiv1beta1vertex)

### GoogleCloudDocumentaiV1beta1Document
* GoogleCloudDocumentaiV1beta1Document `object`: Document represents the canonical document resource in Document Understanding AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document Understanding AI to iterate and optimize for quality.
  * content `string`: Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
  * entities `array`: A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.
    * items [GoogleCloudDocumentaiV1beta1DocumentEntity](#googleclouddocumentaiv1beta1documententity)
  * entityRelations `array`: Relationship among Document.entities.
    * items [GoogleCloudDocumentaiV1beta1DocumentEntityRelation](#googleclouddocumentaiv1beta1documententityrelation)
  * error [GoogleRpcStatus](#googlerpcstatus)
  * mimeType `string`: An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.
  * pages `array`: Visual page layout for the Document.
    * items [GoogleCloudDocumentaiV1beta1DocumentPage](#googleclouddocumentaiv1beta1documentpage)
  * revisions `array`: Revision history of this document.
    * items [GoogleCloudDocumentaiV1beta1DocumentRevision](#googleclouddocumentaiv1beta1documentrevision)
  * shardInfo [GoogleCloudDocumentaiV1beta1DocumentShardInfo](#googleclouddocumentaiv1beta1documentshardinfo)
  * text `string`: UTF-8 encoded text in reading order from the document.
  * textChanges `array`: A list of text corrections made to [Document.text]. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.
    * items [GoogleCloudDocumentaiV1beta1DocumentTextChange](#googleclouddocumentaiv1beta1documenttextchange)
  * textStyles `array`: Styles for the Document.text.
    * items [GoogleCloudDocumentaiV1beta1DocumentStyle](#googleclouddocumentaiv1beta1documentstyle)
  * translations `array`: A list of translations on Document.text. For document shards, translations in this list may cross shard boundaries.
    * items [GoogleCloudDocumentaiV1beta1DocumentTranslation](#googleclouddocumentaiv1beta1documenttranslation)
  * uri `string`: Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.

### GoogleCloudDocumentaiV1beta1DocumentEntity
* GoogleCloudDocumentaiV1beta1DocumentEntity `object`: A phrase in the text that is a known entity type, such as a person, an organization, or location.
  * confidence `number`: Optional. Confidence of detected Schema entity. Range [0, 1].
  * id `string`: Optional. Canonical id. This will be a unique value in the entity list for this document.
  * mentionId `string`: Deprecated. Use `id` field instead.
  * mentionText `string`: Text value in the document e.g. `1600 Amphitheatre Pkwy`.
  * normalizedValue [GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue](#googleclouddocumentaiv1beta1documententitynormalizedvalue)
  * pageAnchor [GoogleCloudDocumentaiV1beta1DocumentPageAnchor](#googleclouddocumentaiv1beta1documentpageanchor)
  * properties `array`: Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.
    * items [GoogleCloudDocumentaiV1beta1DocumentEntity](#googleclouddocumentaiv1beta1documententity)
  * provenance [GoogleCloudDocumentaiV1beta1DocumentProvenance](#googleclouddocumentaiv1beta1documentprovenance)
  * redacted `boolean`: Optional. Whether the entity will be redacted for de-identification purposes.
  * textAnchor [GoogleCloudDocumentaiV1beta1DocumentTextAnchor](#googleclouddocumentaiv1beta1documenttextanchor)
  * type `string`: Entity type from a schema e.g. `Address`.

### GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue
* GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue `object`: Parsed and normalized entity value.
  * addressValue [GoogleTypePostalAddress](#googletypepostaladdress)
  * dateValue [GoogleTypeDate](#googletypedate)
  * datetimeValue [GoogleTypeDateTime](#googletypedatetime)
  * moneyValue [GoogleTypeMoney](#googletypemoney)
  * text `string`: Required. Normalized entity value stored as a string. This field is populated for supported document type (e.g. Invoice). For some entity types, one of respective 'structured_value' fields may also be populated. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.

### GoogleCloudDocumentaiV1beta1DocumentEntityRelation
* GoogleCloudDocumentaiV1beta1DocumentEntityRelation `object`: Relationship between Entities.
  * objectId `string`: Object entity id.
  * relation `string`: Relationship description.
  * subjectId `string`: Subject entity id.

### GoogleCloudDocumentaiV1beta1DocumentPage
* GoogleCloudDocumentaiV1beta1DocumentPage `object`: A page in a Document.
  * blocks `array`: A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageBlock](#googleclouddocumentaiv1beta1documentpageblock)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta1documentpagedetectedlanguage)
  * dimension [GoogleCloudDocumentaiV1beta1DocumentPageDimension](#googleclouddocumentaiv1beta1documentpagedimension)
  * formFields `array`: A list of visually detected form fields on the page.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageFormField](#googleclouddocumentaiv1beta1documentpageformfield)
  * image [GoogleCloudDocumentaiV1beta1DocumentPageImage](#googleclouddocumentaiv1beta1documentpageimage)
  * layout [GoogleCloudDocumentaiV1beta1DocumentPageLayout](#googleclouddocumentaiv1beta1documentpagelayout)
  * lines `array`: A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageLine](#googleclouddocumentaiv1beta1documentpageline)
  * pageNumber `integer`: 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
  * paragraphs `array`: A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageParagraph](#googleclouddocumentaiv1beta1documentpageparagraph)
  * tables `array`: A list of visually detected tables on the page.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageTable](#googleclouddocumentaiv1beta1documentpagetable)
  * tokens `array`: A list of visually detected tokens on the page.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageToken](#googleclouddocumentaiv1beta1documentpagetoken)
  * transforms `array`: Transformation matrices that were applied to the original document image to produce Page.image.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageMatrix](#googleclouddocumentaiv1beta1documentpagematrix)
  * visualElements `array`: A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageVisualElement](#googleclouddocumentaiv1beta1documentpagevisualelement)

### GoogleCloudDocumentaiV1beta1DocumentPageAnchor
* GoogleCloudDocumentaiV1beta1DocumentPageAnchor `object`: Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
  * pageRefs `array`: One or more references to visual page elements
    * items [GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef](#googleclouddocumentaiv1beta1documentpageanchorpageref)

### GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef
* GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef `object`: Represents a weak reference to a page element within a document.
  * boundingPoly [GoogleCloudDocumentaiV1beta1BoundingPoly](#googleclouddocumentaiv1beta1boundingpoly)
  * layoutId `string`: Optional. Deprecated. Use PageRef.bounding_poly instead.
  * layoutType `string` (values: LAYOUT_TYPE_UNSPECIFIED, BLOCK, PARAGRAPH, LINE, TOKEN, VISUAL_ELEMENT, TABLE, FORM_FIELD): Optional. The type of the layout element that is being referenced if any.
  * page `string`: Required. Index into the Document.pages element, for example using Document.pages to locate the related page element.

### GoogleCloudDocumentaiV1beta1DocumentPageBlock
* GoogleCloudDocumentaiV1beta1DocumentPageBlock `object`: A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta1documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta1DocumentPageLayout](#googleclouddocumentaiv1beta1documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta1DocumentProvenance](#googleclouddocumentaiv1beta1documentprovenance)

### GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage
* GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage `object`: Detected language for a structural component.
  * confidence `number`: Confidence of detected language. Range [0, 1].
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudDocumentaiV1beta1DocumentPageDimension
* GoogleCloudDocumentaiV1beta1DocumentPageDimension `object`: Dimension for the page.
  * height `number`: Page height.
  * unit `string`: Dimension unit.
  * width `number`: Page width.

### GoogleCloudDocumentaiV1beta1DocumentPageFormField
* GoogleCloudDocumentaiV1beta1DocumentPageFormField `object`: A form field detected on the page.
  * fieldName [GoogleCloudDocumentaiV1beta1DocumentPageLayout](#googleclouddocumentaiv1beta1documentpagelayout)
  * fieldValue [GoogleCloudDocumentaiV1beta1DocumentPageLayout](#googleclouddocumentaiv1beta1documentpagelayout)
  * nameDetectedLanguages `array`: A list of detected languages for name together with confidence.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta1documentpagedetectedlanguage)
  * valueDetectedLanguages `array`: A list of detected languages for value together with confidence.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta1documentpagedetectedlanguage)
  * valueType `string`: If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the field_value is normal text) - "unfilled_checkbox" - "filled_checkbox"

### GoogleCloudDocumentaiV1beta1DocumentPageImage
* GoogleCloudDocumentaiV1beta1DocumentPageImage `object`: Rendered image contents for this page.
  * content `string`: Raw byte content of the image.
  * height `integer`: Height of the image in pixels.
  * mimeType `string`: Encoding mime type for the image.
  * width `integer`: Width of the image in pixels.

### GoogleCloudDocumentaiV1beta1DocumentPageLayout
* GoogleCloudDocumentaiV1beta1DocumentPageLayout `object`: Visual element describing a layout unit on a page.
  * boundingPoly [GoogleCloudDocumentaiV1beta1BoundingPoly](#googleclouddocumentaiv1beta1boundingpoly)
  * confidence `number`: Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range [0, 1].
  * orientation `string` (values: ORIENTATION_UNSPECIFIED, PAGE_UP, PAGE_RIGHT, PAGE_DOWN, PAGE_LEFT): Detected orientation for the Layout.
  * textAnchor [GoogleCloudDocumentaiV1beta1DocumentTextAnchor](#googleclouddocumentaiv1beta1documenttextanchor)

### GoogleCloudDocumentaiV1beta1DocumentPageLine
* GoogleCloudDocumentaiV1beta1DocumentPageLine `object`: A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta1documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta1DocumentPageLayout](#googleclouddocumentaiv1beta1documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta1DocumentProvenance](#googleclouddocumentaiv1beta1documentprovenance)

### GoogleCloudDocumentaiV1beta1DocumentPageMatrix
* GoogleCloudDocumentaiV1beta1DocumentPageMatrix `object`: Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
  * cols `integer`: Number of columns in the matrix.
  * data `string`: The matrix data.
  * rows `integer`: Number of rows in the matrix.
  * type `integer`: This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html

### GoogleCloudDocumentaiV1beta1DocumentPageParagraph
* GoogleCloudDocumentaiV1beta1DocumentPageParagraph `object`: A collection of lines that a human would perceive as a paragraph.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta1documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta1DocumentPageLayout](#googleclouddocumentaiv1beta1documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta1DocumentProvenance](#googleclouddocumentaiv1beta1documentprovenance)

### GoogleCloudDocumentaiV1beta1DocumentPageTable
* GoogleCloudDocumentaiV1beta1DocumentPageTable `object`: A table representation similar to HTML table structure.
  * bodyRows `array`: Body rows of the table.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow](#googleclouddocumentaiv1beta1documentpagetabletablerow)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta1documentpagedetectedlanguage)
  * headerRows `array`: Header rows of the table.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow](#googleclouddocumentaiv1beta1documentpagetabletablerow)
  * layout [GoogleCloudDocumentaiV1beta1DocumentPageLayout](#googleclouddocumentaiv1beta1documentpagelayout)

### GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell
* GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell `object`: A cell representation inside the table.
  * colSpan `integer`: How many columns this cell spans.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta1documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta1DocumentPageLayout](#googleclouddocumentaiv1beta1documentpagelayout)
  * rowSpan `integer`: How many rows this cell spans.

### GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow
* GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow `object`: A row of table cells.
  * cells `array`: Cells that make up this row.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell](#googleclouddocumentaiv1beta1documentpagetabletablecell)

### GoogleCloudDocumentaiV1beta1DocumentPageToken
* GoogleCloudDocumentaiV1beta1DocumentPageToken `object`: A detected token.
  * detectedBreak [GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak](#googleclouddocumentaiv1beta1documentpagetokendetectedbreak)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta1documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta1DocumentPageLayout](#googleclouddocumentaiv1beta1documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta1DocumentProvenance](#googleclouddocumentaiv1beta1documentprovenance)

### GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak
* GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak `object`: Detected break at the end of a Token.
  * type `string` (values: TYPE_UNSPECIFIED, SPACE, WIDE_SPACE, HYPHEN): Detected break type.

### GoogleCloudDocumentaiV1beta1DocumentPageVisualElement
* GoogleCloudDocumentaiV1beta1DocumentPageVisualElement `object`: Detected non-text visual elements e.g. checkbox, signature etc. on the page.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta1documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta1DocumentPageLayout](#googleclouddocumentaiv1beta1documentpagelayout)
  * type `string`: Type of the VisualElement.

### GoogleCloudDocumentaiV1beta1DocumentProvenance
* GoogleCloudDocumentaiV1beta1DocumentProvenance `object`: Structure to identify provenance relationships between annotations in different revisions.
  * id `integer`: The Id of this operation. Needs to be unique within the scope of the revision.
  * parents `array`: References to the original elements that are replaced.
    * items [GoogleCloudDocumentaiV1beta1DocumentProvenanceParent](#googleclouddocumentaiv1beta1documentprovenanceparent)
  * revision `integer`: The index of the revision that produced this element.
  * type `string` (values: OPERATION_TYPE_UNSPECIFIED, ADD, REMOVE, REPLACE, EVAL_REQUESTED, EVAL_APPROVED): The type of provenance operation.

### GoogleCloudDocumentaiV1beta1DocumentProvenanceParent
* GoogleCloudDocumentaiV1beta1DocumentProvenanceParent `object`: Structure for referencing parent provenances. When an element replaces one of more other elements parent references identify the elements that are replaced.
  * id `integer`: The id of the parent provenance.
  * revision `integer`: The index of the [Document.revisions] identifying the parent revision.

### GoogleCloudDocumentaiV1beta1DocumentRevision
* GoogleCloudDocumentaiV1beta1DocumentRevision `object`: Contains past or forward revisions of this document.
  * agent `string`: If the change was made by a person specify the name or id of that person.
  * createTime `string`: The time that the revision was created.
  * humanReview [GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview](#googleclouddocumentaiv1beta1documentrevisionhumanreview)
  * id `string`: Id of the revision. Unique within the context of the document.
  * parent `array`: The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.
    * items `integer`
  * processor `string`: If the annotation was made by processor identify the processor by its resource name.

### GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview
* GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview `object`: Human Review information of the document.
  * state `string`: Human review state. e.g. `requested`, `succeeded`, `rejected`.
  * stateMessage `string`: A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.

### GoogleCloudDocumentaiV1beta1DocumentShardInfo
* GoogleCloudDocumentaiV1beta1DocumentShardInfo `object`: For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
  * shardCount `string`: Total number of shards.
  * shardIndex `string`: The 0-based index of this shard.
  * textOffset `string`: The index of the first character in Document.text in the overall document global text.

### GoogleCloudDocumentaiV1beta1DocumentStyle
* GoogleCloudDocumentaiV1beta1DocumentStyle `object`: Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
  * backgroundColor [GoogleTypeColor](#googletypecolor)
  * color [GoogleTypeColor](#googletypecolor)
  * fontSize [GoogleCloudDocumentaiV1beta1DocumentStyleFontSize](#googleclouddocumentaiv1beta1documentstylefontsize)
  * fontWeight `string`: Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp
  * textAnchor [GoogleCloudDocumentaiV1beta1DocumentTextAnchor](#googleclouddocumentaiv1beta1documenttextanchor)
  * textDecoration `string`: Text decoration. Follows CSS standard. https://www.w3schools.com/cssref/pr_text_text-decoration.asp
  * textStyle `string`: Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp

### GoogleCloudDocumentaiV1beta1DocumentStyleFontSize
* GoogleCloudDocumentaiV1beta1DocumentStyleFontSize `object`: Font size with unit.
  * size `number`: Font size for the text.
  * unit `string`: Unit for the font size. Follows CSS naming (in, px, pt, etc.).

### GoogleCloudDocumentaiV1beta1DocumentTextAnchor
* GoogleCloudDocumentaiV1beta1DocumentTextAnchor `object`: Text reference indexing into the Document.text.
  * content `string`: Contains the content of the text span so that users do not have to look it up in the text_segments.
  * textSegments `array`: The text segments from the Document.text.
    * items [GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment](#googleclouddocumentaiv1beta1documenttextanchortextsegment)

### GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment
* GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment `object`: A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
  * endIndex `string`: TextSegment half open end UTF-8 char index in the Document.text.
  * startIndex `string`: TextSegment start UTF-8 char index in the Document.text.

### GoogleCloudDocumentaiV1beta1DocumentTextChange
* GoogleCloudDocumentaiV1beta1DocumentTextChange `object`: This message is used for text changes aka. OCR corrections.
  * changedText `string`: The text that replaces the text identified in the `text_anchor`.
  * provenance `array`: The history of this annotation.
    * items [GoogleCloudDocumentaiV1beta1DocumentProvenance](#googleclouddocumentaiv1beta1documentprovenance)
  * textAnchor [GoogleCloudDocumentaiV1beta1DocumentTextAnchor](#googleclouddocumentaiv1beta1documenttextanchor)

### GoogleCloudDocumentaiV1beta1DocumentTranslation
* GoogleCloudDocumentaiV1beta1DocumentTranslation `object`: A translation of the text segment.
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * provenance `array`: The history of this annotation.
    * items [GoogleCloudDocumentaiV1beta1DocumentProvenance](#googleclouddocumentaiv1beta1documentprovenance)
  * textAnchor [GoogleCloudDocumentaiV1beta1DocumentTextAnchor](#googleclouddocumentaiv1beta1documenttextanchor)
  * translatedText `string`: Text translated into the target language.

### GoogleCloudDocumentaiV1beta1GcsDestination
* GoogleCloudDocumentaiV1beta1GcsDestination `object`: The Google Cloud Storage location where the output file will be written to.
  * uri `string`

### GoogleCloudDocumentaiV1beta1GcsSource
* GoogleCloudDocumentaiV1beta1GcsSource `object`: The Google Cloud Storage location where the input file will be read from.
  * uri `string`

### GoogleCloudDocumentaiV1beta1InputConfig
* GoogleCloudDocumentaiV1beta1InputConfig `object`: The desired input location and metadata.
  * gcsSource [GoogleCloudDocumentaiV1beta1GcsSource](#googleclouddocumentaiv1beta1gcssource)
  * mimeType `string`: Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.

### GoogleCloudDocumentaiV1beta1NormalizedVertex
* GoogleCloudDocumentaiV1beta1NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudDocumentaiV1beta1OperationMetadata
* GoogleCloudDocumentaiV1beta1OperationMetadata `object`: Contains metadata for the BatchProcessDocuments operation.
  * createTime `string`: The creation time of the operation.
  * state `string` (values: STATE_UNSPECIFIED, ACCEPTED, WAITING, RUNNING, SUCCEEDED, CANCELLED, FAILED): The state of the current batch processing.
  * stateMessage `string`: A message providing more details about the current state of processing.
  * updateTime `string`: The last update time of the operation.

### GoogleCloudDocumentaiV1beta1OutputConfig
* GoogleCloudDocumentaiV1beta1OutputConfig `object`: The desired output location and metadata.
  * gcsDestination [GoogleCloudDocumentaiV1beta1GcsDestination](#googleclouddocumentaiv1beta1gcsdestination)
  * pagesPerShard `integer`: The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json

### GoogleCloudDocumentaiV1beta1ProcessDocumentResponse
* GoogleCloudDocumentaiV1beta1ProcessDocumentResponse `object`: Response to a single document processing request.
  * inputConfig [GoogleCloudDocumentaiV1beta1InputConfig](#googleclouddocumentaiv1beta1inputconfig)
  * outputConfig [GoogleCloudDocumentaiV1beta1OutputConfig](#googleclouddocumentaiv1beta1outputconfig)

### GoogleCloudDocumentaiV1beta1Vertex
* GoogleCloudDocumentaiV1beta1Vertex `object`: A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse
* GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse `object`: Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.
  * responses `array`: Responses for each individual document.
    * items [GoogleCloudDocumentaiV1beta2ProcessDocumentResponse](#googleclouddocumentaiv1beta2processdocumentresponse)

### GoogleCloudDocumentaiV1beta2BoundingPoly
* GoogleCloudDocumentaiV1beta2BoundingPoly `object`: A bounding polygon for the detected image annotation.
  * normalizedVertices `array`: The bounding polygon normalized vertices.
    * items [GoogleCloudDocumentaiV1beta2NormalizedVertex](#googleclouddocumentaiv1beta2normalizedvertex)
  * vertices `array`: The bounding polygon vertices.
    * items [GoogleCloudDocumentaiV1beta2Vertex](#googleclouddocumentaiv1beta2vertex)

### GoogleCloudDocumentaiV1beta2Document
* GoogleCloudDocumentaiV1beta2Document `object`: Document represents the canonical document resource in Document Understanding AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document Understanding AI to iterate and optimize for quality.
  * content `string`: Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
  * entities `array`: A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.
    * items [GoogleCloudDocumentaiV1beta2DocumentEntity](#googleclouddocumentaiv1beta2documententity)
  * entityRelations `array`: Relationship among Document.entities.
    * items [GoogleCloudDocumentaiV1beta2DocumentEntityRelation](#googleclouddocumentaiv1beta2documententityrelation)
  * error [GoogleRpcStatus](#googlerpcstatus)
  * labels `array`: Labels for this document.
    * items [GoogleCloudDocumentaiV1beta2DocumentLabel](#googleclouddocumentaiv1beta2documentlabel)
  * mimeType `string`: An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.
  * pages `array`: Visual page layout for the Document.
    * items [GoogleCloudDocumentaiV1beta2DocumentPage](#googleclouddocumentaiv1beta2documentpage)
  * revisions `array`: Revision history of this document.
    * items [GoogleCloudDocumentaiV1beta2DocumentRevision](#googleclouddocumentaiv1beta2documentrevision)
  * shardInfo [GoogleCloudDocumentaiV1beta2DocumentShardInfo](#googleclouddocumentaiv1beta2documentshardinfo)
  * text `string`: UTF-8 encoded text in reading order from the document.
  * textChanges `array`: A list of text corrections made to [Document.text]. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.
    * items [GoogleCloudDocumentaiV1beta2DocumentTextChange](#googleclouddocumentaiv1beta2documenttextchange)
  * textStyles `array`: Styles for the Document.text.
    * items [GoogleCloudDocumentaiV1beta2DocumentStyle](#googleclouddocumentaiv1beta2documentstyle)
  * translations `array`: A list of translations on Document.text. For document shards, translations in this list may cross shard boundaries.
    * items [GoogleCloudDocumentaiV1beta2DocumentTranslation](#googleclouddocumentaiv1beta2documenttranslation)
  * uri `string`: Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.

### GoogleCloudDocumentaiV1beta2DocumentEntity
* GoogleCloudDocumentaiV1beta2DocumentEntity `object`: A phrase in the text that is a known entity type, such as a person, an organization, or location.
  * confidence `number`: Optional. Confidence of detected Schema entity. Range [0, 1].
  * id `string`: Optional. Canonical id. This will be a unique value in the entity list for this document.
  * mentionId `string`: Deprecated. Use `id` field instead.
  * mentionText `string`: Text value in the document e.g. `1600 Amphitheatre Pkwy`.
  * normalizedValue [GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue](#googleclouddocumentaiv1beta2documententitynormalizedvalue)
  * pageAnchor [GoogleCloudDocumentaiV1beta2DocumentPageAnchor](#googleclouddocumentaiv1beta2documentpageanchor)
  * properties `array`: Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.
    * items [GoogleCloudDocumentaiV1beta2DocumentEntity](#googleclouddocumentaiv1beta2documententity)
  * provenance [GoogleCloudDocumentaiV1beta2DocumentProvenance](#googleclouddocumentaiv1beta2documentprovenance)
  * redacted `boolean`: Optional. Whether the entity will be redacted for de-identification purposes.
  * textAnchor [GoogleCloudDocumentaiV1beta2DocumentTextAnchor](#googleclouddocumentaiv1beta2documenttextanchor)
  * type `string`: Entity type from a schema e.g. `Address`.

### GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue
* GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue `object`: Parsed and normalized entity value.
  * addressValue [GoogleTypePostalAddress](#googletypepostaladdress)
  * dateValue [GoogleTypeDate](#googletypedate)
  * datetimeValue [GoogleTypeDateTime](#googletypedatetime)
  * moneyValue [GoogleTypeMoney](#googletypemoney)
  * text `string`: Required. Normalized entity value stored as a string. This field is populated for supported document type (e.g. Invoice). For some entity types, one of respective 'structured_value' fields may also be populated. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.

### GoogleCloudDocumentaiV1beta2DocumentEntityRelation
* GoogleCloudDocumentaiV1beta2DocumentEntityRelation `object`: Relationship between Entities.
  * objectId `string`: Object entity id.
  * relation `string`: Relationship description.
  * subjectId `string`: Subject entity id.

### GoogleCloudDocumentaiV1beta2DocumentLabel
* GoogleCloudDocumentaiV1beta2DocumentLabel `object`: Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.
  * automlModel `string`: Label is generated AutoML model. This field stores the full resource name of the AutoML model. Format: `projects/{project-id}/locations/{location-id}/models/{model-id}`
  * confidence `number`: Confidence score between 0 and 1 for label assignment.
  * name `string`: Name of the label. When the label is generated from AutoML Text Classification model, this field represents the name of the category.

### GoogleCloudDocumentaiV1beta2DocumentPage
* GoogleCloudDocumentaiV1beta2DocumentPage `object`: A page in a Document.
  * blocks `array`: A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageBlock](#googleclouddocumentaiv1beta2documentpageblock)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta2documentpagedetectedlanguage)
  * dimension [GoogleCloudDocumentaiV1beta2DocumentPageDimension](#googleclouddocumentaiv1beta2documentpagedimension)
  * formFields `array`: A list of visually detected form fields on the page.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageFormField](#googleclouddocumentaiv1beta2documentpageformfield)
  * image [GoogleCloudDocumentaiV1beta2DocumentPageImage](#googleclouddocumentaiv1beta2documentpageimage)
  * layout [GoogleCloudDocumentaiV1beta2DocumentPageLayout](#googleclouddocumentaiv1beta2documentpagelayout)
  * lines `array`: A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageLine](#googleclouddocumentaiv1beta2documentpageline)
  * pageNumber `integer`: 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
  * paragraphs `array`: A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageParagraph](#googleclouddocumentaiv1beta2documentpageparagraph)
  * tables `array`: A list of visually detected tables on the page.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageTable](#googleclouddocumentaiv1beta2documentpagetable)
  * tokens `array`: A list of visually detected tokens on the page.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageToken](#googleclouddocumentaiv1beta2documentpagetoken)
  * transforms `array`: Transformation matrices that were applied to the original document image to produce Page.image.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageMatrix](#googleclouddocumentaiv1beta2documentpagematrix)
  * visualElements `array`: A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageVisualElement](#googleclouddocumentaiv1beta2documentpagevisualelement)

### GoogleCloudDocumentaiV1beta2DocumentPageAnchor
* GoogleCloudDocumentaiV1beta2DocumentPageAnchor `object`: Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
  * pageRefs `array`: One or more references to visual page elements
    * items [GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef](#googleclouddocumentaiv1beta2documentpageanchorpageref)

### GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef
* GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef `object`: Represents a weak reference to a page element within a document.
  * boundingPoly [GoogleCloudDocumentaiV1beta2BoundingPoly](#googleclouddocumentaiv1beta2boundingpoly)
  * layoutId `string`: Optional. Deprecated. Use PageRef.bounding_poly instead.
  * layoutType `string` (values: LAYOUT_TYPE_UNSPECIFIED, BLOCK, PARAGRAPH, LINE, TOKEN, VISUAL_ELEMENT, TABLE, FORM_FIELD): Optional. The type of the layout element that is being referenced if any.
  * page `string`: Required. Index into the Document.pages element, for example using Document.pages to locate the related page element.

### GoogleCloudDocumentaiV1beta2DocumentPageBlock
* GoogleCloudDocumentaiV1beta2DocumentPageBlock `object`: A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta2documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta2DocumentPageLayout](#googleclouddocumentaiv1beta2documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta2DocumentProvenance](#googleclouddocumentaiv1beta2documentprovenance)

### GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage
* GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `object`: Detected language for a structural component.
  * confidence `number`: Confidence of detected language. Range [0, 1].
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudDocumentaiV1beta2DocumentPageDimension
* GoogleCloudDocumentaiV1beta2DocumentPageDimension `object`: Dimension for the page.
  * height `number`: Page height.
  * unit `string`: Dimension unit.
  * width `number`: Page width.

### GoogleCloudDocumentaiV1beta2DocumentPageFormField
* GoogleCloudDocumentaiV1beta2DocumentPageFormField `object`: A form field detected on the page.
  * fieldName [GoogleCloudDocumentaiV1beta2DocumentPageLayout](#googleclouddocumentaiv1beta2documentpagelayout)
  * fieldValue [GoogleCloudDocumentaiV1beta2DocumentPageLayout](#googleclouddocumentaiv1beta2documentpagelayout)
  * nameDetectedLanguages `array`: A list of detected languages for name together with confidence.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta2documentpagedetectedlanguage)
  * valueDetectedLanguages `array`: A list of detected languages for value together with confidence.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta2documentpagedetectedlanguage)
  * valueType `string`: If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the field_value is normal text) - "unfilled_checkbox" - "filled_checkbox"

### GoogleCloudDocumentaiV1beta2DocumentPageImage
* GoogleCloudDocumentaiV1beta2DocumentPageImage `object`: Rendered image contents for this page.
  * content `string`: Raw byte content of the image.
  * height `integer`: Height of the image in pixels.
  * mimeType `string`: Encoding mime type for the image.
  * width `integer`: Width of the image in pixels.

### GoogleCloudDocumentaiV1beta2DocumentPageLayout
* GoogleCloudDocumentaiV1beta2DocumentPageLayout `object`: Visual element describing a layout unit on a page.
  * boundingPoly [GoogleCloudDocumentaiV1beta2BoundingPoly](#googleclouddocumentaiv1beta2boundingpoly)
  * confidence `number`: Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range [0, 1].
  * orientation `string` (values: ORIENTATION_UNSPECIFIED, PAGE_UP, PAGE_RIGHT, PAGE_DOWN, PAGE_LEFT): Detected orientation for the Layout.
  * textAnchor [GoogleCloudDocumentaiV1beta2DocumentTextAnchor](#googleclouddocumentaiv1beta2documenttextanchor)

### GoogleCloudDocumentaiV1beta2DocumentPageLine
* GoogleCloudDocumentaiV1beta2DocumentPageLine `object`: A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta2documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta2DocumentPageLayout](#googleclouddocumentaiv1beta2documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta2DocumentProvenance](#googleclouddocumentaiv1beta2documentprovenance)

### GoogleCloudDocumentaiV1beta2DocumentPageMatrix
* GoogleCloudDocumentaiV1beta2DocumentPageMatrix `object`: Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
  * cols `integer`: Number of columns in the matrix.
  * data `string`: The matrix data.
  * rows `integer`: Number of rows in the matrix.
  * type `integer`: This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html

### GoogleCloudDocumentaiV1beta2DocumentPageParagraph
* GoogleCloudDocumentaiV1beta2DocumentPageParagraph `object`: A collection of lines that a human would perceive as a paragraph.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta2documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta2DocumentPageLayout](#googleclouddocumentaiv1beta2documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta2DocumentProvenance](#googleclouddocumentaiv1beta2documentprovenance)

### GoogleCloudDocumentaiV1beta2DocumentPageTable
* GoogleCloudDocumentaiV1beta2DocumentPageTable `object`: A table representation similar to HTML table structure.
  * bodyRows `array`: Body rows of the table.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow](#googleclouddocumentaiv1beta2documentpagetabletablerow)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta2documentpagedetectedlanguage)
  * headerRows `array`: Header rows of the table.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow](#googleclouddocumentaiv1beta2documentpagetabletablerow)
  * layout [GoogleCloudDocumentaiV1beta2DocumentPageLayout](#googleclouddocumentaiv1beta2documentpagelayout)

### GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell
* GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell `object`: A cell representation inside the table.
  * colSpan `integer`: How many columns this cell spans.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta2documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta2DocumentPageLayout](#googleclouddocumentaiv1beta2documentpagelayout)
  * rowSpan `integer`: How many rows this cell spans.

### GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow
* GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow `object`: A row of table cells.
  * cells `array`: Cells that make up this row.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell](#googleclouddocumentaiv1beta2documentpagetabletablecell)

### GoogleCloudDocumentaiV1beta2DocumentPageToken
* GoogleCloudDocumentaiV1beta2DocumentPageToken `object`: A detected token.
  * detectedBreak [GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak](#googleclouddocumentaiv1beta2documentpagetokendetectedbreak)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta2documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta2DocumentPageLayout](#googleclouddocumentaiv1beta2documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta2DocumentProvenance](#googleclouddocumentaiv1beta2documentprovenance)

### GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak
* GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak `object`: Detected break at the end of a Token.
  * type `string` (values: TYPE_UNSPECIFIED, SPACE, WIDE_SPACE, HYPHEN): Detected break type.

### GoogleCloudDocumentaiV1beta2DocumentPageVisualElement
* GoogleCloudDocumentaiV1beta2DocumentPageVisualElement `object`: Detected non-text visual elements e.g. checkbox, signature etc. on the page.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta2documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta2DocumentPageLayout](#googleclouddocumentaiv1beta2documentpagelayout)
  * type `string`: Type of the VisualElement.

### GoogleCloudDocumentaiV1beta2DocumentProvenance
* GoogleCloudDocumentaiV1beta2DocumentProvenance `object`: Structure to identify provenance relationships between annotations in different revisions.
  * id `integer`: The Id of this operation. Needs to be unique within the scope of the revision.
  * parents `array`: References to the original elements that are replaced.
    * items [GoogleCloudDocumentaiV1beta2DocumentProvenanceParent](#googleclouddocumentaiv1beta2documentprovenanceparent)
  * revision `integer`: The index of the revision that produced this element.
  * type `string` (values: OPERATION_TYPE_UNSPECIFIED, ADD, REMOVE, REPLACE, EVAL_REQUESTED, EVAL_APPROVED): The type of provenance operation.

### GoogleCloudDocumentaiV1beta2DocumentProvenanceParent
* GoogleCloudDocumentaiV1beta2DocumentProvenanceParent `object`: Structure for referencing parent provenances. When an element replaces one of more other elements parent references identify the elements that are replaced.
  * id `integer`: The id of the parent provenance.
  * revision `integer`: The index of the [Document.revisions] identifying the parent revision.

### GoogleCloudDocumentaiV1beta2DocumentRevision
* GoogleCloudDocumentaiV1beta2DocumentRevision `object`: Contains past or forward revisions of this document.
  * agent `string`: If the change was made by a person specify the name or id of that person.
  * createTime `string`: The time that the revision was created.
  * humanReview [GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview](#googleclouddocumentaiv1beta2documentrevisionhumanreview)
  * id `string`: Id of the revision. Unique within the context of the document.
  * parent `array`: The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.
    * items `integer`
  * processor `string`: If the annotation was made by processor identify the processor by its resource name.

### GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview
* GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview `object`: Human Review information of the document.
  * state `string`: Human review state. e.g. `requested`, `succeeded`, `rejected`.
  * stateMessage `string`: A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.

### GoogleCloudDocumentaiV1beta2DocumentShardInfo
* GoogleCloudDocumentaiV1beta2DocumentShardInfo `object`: For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
  * shardCount `string`: Total number of shards.
  * shardIndex `string`: The 0-based index of this shard.
  * textOffset `string`: The index of the first character in Document.text in the overall document global text.

### GoogleCloudDocumentaiV1beta2DocumentStyle
* GoogleCloudDocumentaiV1beta2DocumentStyle `object`: Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
  * backgroundColor [GoogleTypeColor](#googletypecolor)
  * color [GoogleTypeColor](#googletypecolor)
  * fontSize [GoogleCloudDocumentaiV1beta2DocumentStyleFontSize](#googleclouddocumentaiv1beta2documentstylefontsize)
  * fontWeight `string`: Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp
  * textAnchor [GoogleCloudDocumentaiV1beta2DocumentTextAnchor](#googleclouddocumentaiv1beta2documenttextanchor)
  * textDecoration `string`: Text decoration. Follows CSS standard. https://www.w3schools.com/cssref/pr_text_text-decoration.asp
  * textStyle `string`: Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp

### GoogleCloudDocumentaiV1beta2DocumentStyleFontSize
* GoogleCloudDocumentaiV1beta2DocumentStyleFontSize `object`: Font size with unit.
  * size `number`: Font size for the text.
  * unit `string`: Unit for the font size. Follows CSS naming (in, px, pt, etc.).

### GoogleCloudDocumentaiV1beta2DocumentTextAnchor
* GoogleCloudDocumentaiV1beta2DocumentTextAnchor `object`: Text reference indexing into the Document.text.
  * content `string`: Contains the content of the text span so that users do not have to look it up in the text_segments.
  * textSegments `array`: The text segments from the Document.text.
    * items [GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment](#googleclouddocumentaiv1beta2documenttextanchortextsegment)

### GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment
* GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment `object`: A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
  * endIndex `string`: TextSegment half open end UTF-8 char index in the Document.text.
  * startIndex `string`: TextSegment start UTF-8 char index in the Document.text.

### GoogleCloudDocumentaiV1beta2DocumentTextChange
* GoogleCloudDocumentaiV1beta2DocumentTextChange `object`: This message is used for text changes aka. OCR corrections.
  * changedText `string`: The text that replaces the text identified in the `text_anchor`.
  * provenance `array`: The history of this annotation.
    * items [GoogleCloudDocumentaiV1beta2DocumentProvenance](#googleclouddocumentaiv1beta2documentprovenance)
  * textAnchor [GoogleCloudDocumentaiV1beta2DocumentTextAnchor](#googleclouddocumentaiv1beta2documenttextanchor)

### GoogleCloudDocumentaiV1beta2DocumentTranslation
* GoogleCloudDocumentaiV1beta2DocumentTranslation `object`: A translation of the text segment.
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * provenance `array`: The history of this annotation.
    * items [GoogleCloudDocumentaiV1beta2DocumentProvenance](#googleclouddocumentaiv1beta2documentprovenance)
  * textAnchor [GoogleCloudDocumentaiV1beta2DocumentTextAnchor](#googleclouddocumentaiv1beta2documenttextanchor)
  * translatedText `string`: Text translated into the target language.

### GoogleCloudDocumentaiV1beta2GcsDestination
* GoogleCloudDocumentaiV1beta2GcsDestination `object`: The Google Cloud Storage location where the output file will be written to.
  * uri `string`

### GoogleCloudDocumentaiV1beta2GcsSource
* GoogleCloudDocumentaiV1beta2GcsSource `object`: The Google Cloud Storage location where the input file will be read from.
  * uri `string`

### GoogleCloudDocumentaiV1beta2InputConfig
* GoogleCloudDocumentaiV1beta2InputConfig `object`: The desired input location and metadata.
  * contents `string`: Content in bytes, represented as a stream of bytes. Note: As with all `bytes` fields, proto buffer messages use a pure binary representation, whereas JSON representations use base64. This field only works for synchronous ProcessDocument method.
  * gcsSource [GoogleCloudDocumentaiV1beta2GcsSource](#googleclouddocumentaiv1beta2gcssource)
  * mimeType `string`: Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.

### GoogleCloudDocumentaiV1beta2NormalizedVertex
* GoogleCloudDocumentaiV1beta2NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudDocumentaiV1beta2OperationMetadata
* GoogleCloudDocumentaiV1beta2OperationMetadata `object`: Contains metadata for the BatchProcessDocuments operation.
  * createTime `string`: The creation time of the operation.
  * state `string` (values: STATE_UNSPECIFIED, ACCEPTED, WAITING, RUNNING, SUCCEEDED, CANCELLED, FAILED): The state of the current batch processing.
  * stateMessage `string`: A message providing more details about the current state of processing.
  * updateTime `string`: The last update time of the operation.

### GoogleCloudDocumentaiV1beta2OutputConfig
* GoogleCloudDocumentaiV1beta2OutputConfig `object`: The desired output location and metadata.
  * gcsDestination [GoogleCloudDocumentaiV1beta2GcsDestination](#googleclouddocumentaiv1beta2gcsdestination)
  * pagesPerShard `integer`: The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json

### GoogleCloudDocumentaiV1beta2ProcessDocumentResponse
* GoogleCloudDocumentaiV1beta2ProcessDocumentResponse `object`: Response to a single document processing request.
  * inputConfig [GoogleCloudDocumentaiV1beta2InputConfig](#googleclouddocumentaiv1beta2inputconfig)
  * outputConfig [GoogleCloudDocumentaiV1beta2OutputConfig](#googleclouddocumentaiv1beta2outputconfig)

### GoogleCloudDocumentaiV1beta2Vertex
* GoogleCloudDocumentaiV1beta2Vertex `object`: A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### GoogleCloudDocumentaiV1beta3BatchProcessMetadata
* GoogleCloudDocumentaiV1beta3BatchProcessMetadata `object`: The long running operation metadata for batch process method.
  * createTime `string`: The creation time of the operation.
  * individualProcessStatuses `array`: The list of response details of each document.
    * items [GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus](#googleclouddocumentaiv1beta3batchprocessmetadataindividualprocessstatus)
  * state `string` (values: STATE_UNSPECIFIED, WAITING, RUNNING, SUCCEEDED, CANCELLING, CANCELLED, FAILED): The state of the current batch processing.
  * stateMessage `string`: A message providing more details about the current state of processing. For example, the error message if the operation is failed.
  * updateTime `string`: The last update time of the operation.

### GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus
* GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus `object`: The status of a each individual document in the batch process.
  * humanReviewOperation `string`: The name of the operation triggered by the processed document. If the human review process is not triggered, this field will be empty. It has the same response type and metadata as the long running operation returned by ReviewDocument method.
  * inputGcsSource `string`: The source of the document, same as the [input_gcs_source] field in the request when the batch process started. The batch process is started by take snapshot of that document, since a user can move or change that document during the process.
  * outputGcsDestination `string`: The output_gcs_destination (in the request as 'output_gcs_destination') of the processed document if it was successful, otherwise empty.
  * status [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDocumentaiV1beta3BatchProcessRequest
* GoogleCloudDocumentaiV1beta3BatchProcessRequest `object`: Request message for batch process document method.
  * inputConfigs `array`: The input config for each single document in the batch process.
    * items [GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig](#googleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig)
  * outputConfig [GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig](#googleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig)

### GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig
* GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig `object`: The message for input config in batch process.
  * gcsSource `string`: The Cloud Storage location as the source of the document.
  * mimeType `string`: Mimetype of the input. If the input is a raw document, the supported mimetypes are application/pdf, image/tiff, and image/gif. If the input is a [Document] proto, the type should be application/json.

### GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig
* GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig `object`: The message for output config in batch process.
  * gcsDestination `string`: The output Cloud Storage directory to put the processed documents.

### GoogleCloudDocumentaiV1beta3BatchProcessResponse
* GoogleCloudDocumentaiV1beta3BatchProcessResponse `object`: Response message for batch process document method.

### GoogleCloudDocumentaiV1beta3BoundingPoly
* GoogleCloudDocumentaiV1beta3BoundingPoly `object`: A bounding polygon for the detected image annotation.
  * normalizedVertices `array`: The bounding polygon normalized vertices.
    * items [GoogleCloudDocumentaiV1beta3NormalizedVertex](#googleclouddocumentaiv1beta3normalizedvertex)
  * vertices `array`: The bounding polygon vertices.
    * items [GoogleCloudDocumentaiV1beta3Vertex](#googleclouddocumentaiv1beta3vertex)

### GoogleCloudDocumentaiV1beta3Document
* GoogleCloudDocumentaiV1beta3Document `object`: Document represents the canonical document resource in Document Understanding AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document Understanding AI to iterate and optimize for quality.
  * content `string`: Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
  * entities `array`: A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.
    * items [GoogleCloudDocumentaiV1beta3DocumentEntity](#googleclouddocumentaiv1beta3documententity)
  * entityRelations `array`: Relationship among Document.entities.
    * items [GoogleCloudDocumentaiV1beta3DocumentEntityRelation](#googleclouddocumentaiv1beta3documententityrelation)
  * error [GoogleRpcStatus](#googlerpcstatus)
  * mimeType `string`: An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.
  * pages `array`: Visual page layout for the Document.
    * items [GoogleCloudDocumentaiV1beta3DocumentPage](#googleclouddocumentaiv1beta3documentpage)
  * revisions `array`: Revision history of this document.
    * items [GoogleCloudDocumentaiV1beta3DocumentRevision](#googleclouddocumentaiv1beta3documentrevision)
  * shardInfo [GoogleCloudDocumentaiV1beta3DocumentShardInfo](#googleclouddocumentaiv1beta3documentshardinfo)
  * text `string`: UTF-8 encoded text in reading order from the document.
  * textChanges `array`: A list of text corrections made to [Document.text]. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.
    * items [GoogleCloudDocumentaiV1beta3DocumentTextChange](#googleclouddocumentaiv1beta3documenttextchange)
  * textStyles `array`: Styles for the Document.text.
    * items [GoogleCloudDocumentaiV1beta3DocumentStyle](#googleclouddocumentaiv1beta3documentstyle)
  * translations `array`: A list of translations on Document.text. For document shards, translations in this list may cross shard boundaries.
    * items [GoogleCloudDocumentaiV1beta3DocumentTranslation](#googleclouddocumentaiv1beta3documenttranslation)
  * uri `string`: Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.

### GoogleCloudDocumentaiV1beta3DocumentEntity
* GoogleCloudDocumentaiV1beta3DocumentEntity `object`: A phrase in the text that is a known entity type, such as a person, an organization, or location.
  * confidence `number`: Optional. Confidence of detected Schema entity. Range [0, 1].
  * id `string`: Optional. Canonical id. This will be a unique value in the entity list for this document.
  * mentionId `string`: Deprecated. Use `id` field instead.
  * mentionText `string`: Text value in the document e.g. `1600 Amphitheatre Pkwy`.
  * normalizedValue [GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue](#googleclouddocumentaiv1beta3documententitynormalizedvalue)
  * pageAnchor [GoogleCloudDocumentaiV1beta3DocumentPageAnchor](#googleclouddocumentaiv1beta3documentpageanchor)
  * properties `array`: Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.
    * items [GoogleCloudDocumentaiV1beta3DocumentEntity](#googleclouddocumentaiv1beta3documententity)
  * provenance [GoogleCloudDocumentaiV1beta3DocumentProvenance](#googleclouddocumentaiv1beta3documentprovenance)
  * redacted `boolean`: Optional. Whether the entity will be redacted for de-identification purposes.
  * textAnchor [GoogleCloudDocumentaiV1beta3DocumentTextAnchor](#googleclouddocumentaiv1beta3documenttextanchor)
  * type `string`: Entity type from a schema e.g. `Address`.

### GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue
* GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue `object`: Parsed and normalized entity value.
  * addressValue [GoogleTypePostalAddress](#googletypepostaladdress)
  * dateValue [GoogleTypeDate](#googletypedate)
  * datetimeValue [GoogleTypeDateTime](#googletypedatetime)
  * moneyValue [GoogleTypeMoney](#googletypemoney)
  * text `string`: Required. Normalized entity value stored as a string. This field is populated for supported document type (e.g. Invoice). For some entity types, one of respective 'structured_value' fields may also be populated. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.

### GoogleCloudDocumentaiV1beta3DocumentEntityRelation
* GoogleCloudDocumentaiV1beta3DocumentEntityRelation `object`: Relationship between Entities.
  * objectId `string`: Object entity id.
  * relation `string`: Relationship description.
  * subjectId `string`: Subject entity id.

### GoogleCloudDocumentaiV1beta3DocumentPage
* GoogleCloudDocumentaiV1beta3DocumentPage `object`: A page in a Document.
  * blocks `array`: A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageBlock](#googleclouddocumentaiv1beta3documentpageblock)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta3documentpagedetectedlanguage)
  * dimension [GoogleCloudDocumentaiV1beta3DocumentPageDimension](#googleclouddocumentaiv1beta3documentpagedimension)
  * formFields `array`: A list of visually detected form fields on the page.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageFormField](#googleclouddocumentaiv1beta3documentpageformfield)
  * image [GoogleCloudDocumentaiV1beta3DocumentPageImage](#googleclouddocumentaiv1beta3documentpageimage)
  * layout [GoogleCloudDocumentaiV1beta3DocumentPageLayout](#googleclouddocumentaiv1beta3documentpagelayout)
  * lines `array`: A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageLine](#googleclouddocumentaiv1beta3documentpageline)
  * pageNumber `integer`: 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
  * paragraphs `array`: A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageParagraph](#googleclouddocumentaiv1beta3documentpageparagraph)
  * tables `array`: A list of visually detected tables on the page.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageTable](#googleclouddocumentaiv1beta3documentpagetable)
  * tokens `array`: A list of visually detected tokens on the page.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageToken](#googleclouddocumentaiv1beta3documentpagetoken)
  * transforms `array`: Transformation matrices that were applied to the original document image to produce Page.image.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageMatrix](#googleclouddocumentaiv1beta3documentpagematrix)
  * visualElements `array`: A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageVisualElement](#googleclouddocumentaiv1beta3documentpagevisualelement)

### GoogleCloudDocumentaiV1beta3DocumentPageAnchor
* GoogleCloudDocumentaiV1beta3DocumentPageAnchor `object`: Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
  * pageRefs `array`: One or more references to visual page elements
    * items [GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef](#googleclouddocumentaiv1beta3documentpageanchorpageref)

### GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef
* GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef `object`: Represents a weak reference to a page element within a document.
  * boundingPoly [GoogleCloudDocumentaiV1beta3BoundingPoly](#googleclouddocumentaiv1beta3boundingpoly)
  * layoutId `string`: Optional. Deprecated. Use PageRef.bounding_poly instead.
  * layoutType `string` (values: LAYOUT_TYPE_UNSPECIFIED, BLOCK, PARAGRAPH, LINE, TOKEN, VISUAL_ELEMENT, TABLE, FORM_FIELD): Optional. The type of the layout element that is being referenced if any.
  * page `string`: Required. Index into the Document.pages element, for example using Document.pages to locate the related page element.

### GoogleCloudDocumentaiV1beta3DocumentPageBlock
* GoogleCloudDocumentaiV1beta3DocumentPageBlock `object`: A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta3documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta3DocumentPageLayout](#googleclouddocumentaiv1beta3documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta3DocumentProvenance](#googleclouddocumentaiv1beta3documentprovenance)

### GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage
* GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `object`: Detected language for a structural component.
  * confidence `number`: Confidence of detected language. Range [0, 1].
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.

### GoogleCloudDocumentaiV1beta3DocumentPageDimension
* GoogleCloudDocumentaiV1beta3DocumentPageDimension `object`: Dimension for the page.
  * height `number`: Page height.
  * unit `string`: Dimension unit.
  * width `number`: Page width.

### GoogleCloudDocumentaiV1beta3DocumentPageFormField
* GoogleCloudDocumentaiV1beta3DocumentPageFormField `object`: A form field detected on the page.
  * fieldName [GoogleCloudDocumentaiV1beta3DocumentPageLayout](#googleclouddocumentaiv1beta3documentpagelayout)
  * fieldValue [GoogleCloudDocumentaiV1beta3DocumentPageLayout](#googleclouddocumentaiv1beta3documentpagelayout)
  * nameDetectedLanguages `array`: A list of detected languages for name together with confidence.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta3documentpagedetectedlanguage)
  * valueDetectedLanguages `array`: A list of detected languages for value together with confidence.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta3documentpagedetectedlanguage)
  * valueType `string`: If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the field_value is normal text) - "unfilled_checkbox" - "filled_checkbox"

### GoogleCloudDocumentaiV1beta3DocumentPageImage
* GoogleCloudDocumentaiV1beta3DocumentPageImage `object`: Rendered image contents for this page.
  * content `string`: Raw byte content of the image.
  * height `integer`: Height of the image in pixels.
  * mimeType `string`: Encoding mime type for the image.
  * width `integer`: Width of the image in pixels.

### GoogleCloudDocumentaiV1beta3DocumentPageLayout
* GoogleCloudDocumentaiV1beta3DocumentPageLayout `object`: Visual element describing a layout unit on a page.
  * boundingPoly [GoogleCloudDocumentaiV1beta3BoundingPoly](#googleclouddocumentaiv1beta3boundingpoly)
  * confidence `number`: Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range [0, 1].
  * orientation `string` (values: ORIENTATION_UNSPECIFIED, PAGE_UP, PAGE_RIGHT, PAGE_DOWN, PAGE_LEFT): Detected orientation for the Layout.
  * textAnchor [GoogleCloudDocumentaiV1beta3DocumentTextAnchor](#googleclouddocumentaiv1beta3documenttextanchor)

### GoogleCloudDocumentaiV1beta3DocumentPageLine
* GoogleCloudDocumentaiV1beta3DocumentPageLine `object`: A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta3documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta3DocumentPageLayout](#googleclouddocumentaiv1beta3documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta3DocumentProvenance](#googleclouddocumentaiv1beta3documentprovenance)

### GoogleCloudDocumentaiV1beta3DocumentPageMatrix
* GoogleCloudDocumentaiV1beta3DocumentPageMatrix `object`: Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
  * cols `integer`: Number of columns in the matrix.
  * data `string`: The matrix data.
  * rows `integer`: Number of rows in the matrix.
  * type `integer`: This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html

### GoogleCloudDocumentaiV1beta3DocumentPageParagraph
* GoogleCloudDocumentaiV1beta3DocumentPageParagraph `object`: A collection of lines that a human would perceive as a paragraph.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta3documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta3DocumentPageLayout](#googleclouddocumentaiv1beta3documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta3DocumentProvenance](#googleclouddocumentaiv1beta3documentprovenance)

### GoogleCloudDocumentaiV1beta3DocumentPageTable
* GoogleCloudDocumentaiV1beta3DocumentPageTable `object`: A table representation similar to HTML table structure.
  * bodyRows `array`: Body rows of the table.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow](#googleclouddocumentaiv1beta3documentpagetabletablerow)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta3documentpagedetectedlanguage)
  * headerRows `array`: Header rows of the table.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow](#googleclouddocumentaiv1beta3documentpagetabletablerow)
  * layout [GoogleCloudDocumentaiV1beta3DocumentPageLayout](#googleclouddocumentaiv1beta3documentpagelayout)

### GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell
* GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell `object`: A cell representation inside the table.
  * colSpan `integer`: How many columns this cell spans.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta3documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta3DocumentPageLayout](#googleclouddocumentaiv1beta3documentpagelayout)
  * rowSpan `integer`: How many rows this cell spans.

### GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow
* GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow `object`: A row of table cells.
  * cells `array`: Cells that make up this row.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell](#googleclouddocumentaiv1beta3documentpagetabletablecell)

### GoogleCloudDocumentaiV1beta3DocumentPageToken
* GoogleCloudDocumentaiV1beta3DocumentPageToken `object`: A detected token.
  * detectedBreak [GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak](#googleclouddocumentaiv1beta3documentpagetokendetectedbreak)
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta3documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta3DocumentPageLayout](#googleclouddocumentaiv1beta3documentpagelayout)
  * provenance [GoogleCloudDocumentaiV1beta3DocumentProvenance](#googleclouddocumentaiv1beta3documentprovenance)

### GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak
* GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak `object`: Detected break at the end of a Token.
  * type `string` (values: TYPE_UNSPECIFIED, SPACE, WIDE_SPACE, HYPHEN): Detected break type.

### GoogleCloudDocumentaiV1beta3DocumentPageVisualElement
* GoogleCloudDocumentaiV1beta3DocumentPageVisualElement `object`: Detected non-text visual elements e.g. checkbox, signature etc. on the page.
  * detectedLanguages `array`: A list of detected languages together with confidence.
    * items [GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage](#googleclouddocumentaiv1beta3documentpagedetectedlanguage)
  * layout [GoogleCloudDocumentaiV1beta3DocumentPageLayout](#googleclouddocumentaiv1beta3documentpagelayout)
  * type `string`: Type of the VisualElement.

### GoogleCloudDocumentaiV1beta3DocumentProvenance
* GoogleCloudDocumentaiV1beta3DocumentProvenance `object`: Structure to identify provenance relationships between annotations in different revisions.
  * id `integer`: The Id of this operation. Needs to be unique within the scope of the revision.
  * parents `array`: References to the original elements that are replaced.
    * items [GoogleCloudDocumentaiV1beta3DocumentProvenanceParent](#googleclouddocumentaiv1beta3documentprovenanceparent)
  * revision `integer`: The index of the revision that produced this element.
  * type `string` (values: OPERATION_TYPE_UNSPECIFIED, ADD, REMOVE, REPLACE, EVAL_REQUESTED, EVAL_APPROVED): The type of provenance operation.

### GoogleCloudDocumentaiV1beta3DocumentProvenanceParent
* GoogleCloudDocumentaiV1beta3DocumentProvenanceParent `object`: Structure for referencing parent provenances. When an element replaces one of more other elements parent references identify the elements that are replaced.
  * id `integer`: The id of the parent provenance.
  * revision `integer`: The index of the [Document.revisions] identifying the parent revision.

### GoogleCloudDocumentaiV1beta3DocumentRevision
* GoogleCloudDocumentaiV1beta3DocumentRevision `object`: Contains past or forward revisions of this document.
  * agent `string`: If the change was made by a person specify the name or id of that person.
  * createTime `string`: The time that the revision was created.
  * humanReview [GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview](#googleclouddocumentaiv1beta3documentrevisionhumanreview)
  * id `string`: Id of the revision. Unique within the context of the document.
  * parent `array`: The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.
    * items `integer`
  * processor `string`: If the annotation was made by processor identify the processor by its resource name.

### GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview
* GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview `object`: Human Review information of the document.
  * state `string`: Human review state. e.g. `requested`, `succeeded`, `rejected`.
  * stateMessage `string`: A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.

### GoogleCloudDocumentaiV1beta3DocumentShardInfo
* GoogleCloudDocumentaiV1beta3DocumentShardInfo `object`: For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
  * shardCount `string`: Total number of shards.
  * shardIndex `string`: The 0-based index of this shard.
  * textOffset `string`: The index of the first character in Document.text in the overall document global text.

### GoogleCloudDocumentaiV1beta3DocumentStyle
* GoogleCloudDocumentaiV1beta3DocumentStyle `object`: Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
  * backgroundColor [GoogleTypeColor](#googletypecolor)
  * color [GoogleTypeColor](#googletypecolor)
  * fontSize [GoogleCloudDocumentaiV1beta3DocumentStyleFontSize](#googleclouddocumentaiv1beta3documentstylefontsize)
  * fontWeight `string`: Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp
  * textAnchor [GoogleCloudDocumentaiV1beta3DocumentTextAnchor](#googleclouddocumentaiv1beta3documenttextanchor)
  * textDecoration `string`: Text decoration. Follows CSS standard. https://www.w3schools.com/cssref/pr_text_text-decoration.asp
  * textStyle `string`: Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp

### GoogleCloudDocumentaiV1beta3DocumentStyleFontSize
* GoogleCloudDocumentaiV1beta3DocumentStyleFontSize `object`: Font size with unit.
  * size `number`: Font size for the text.
  * unit `string`: Unit for the font size. Follows CSS naming (in, px, pt, etc.).

### GoogleCloudDocumentaiV1beta3DocumentTextAnchor
* GoogleCloudDocumentaiV1beta3DocumentTextAnchor `object`: Text reference indexing into the Document.text.
  * content `string`: Contains the content of the text span so that users do not have to look it up in the text_segments.
  * textSegments `array`: The text segments from the Document.text.
    * items [GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment](#googleclouddocumentaiv1beta3documenttextanchortextsegment)

### GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment
* GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment `object`: A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
  * endIndex `string`: TextSegment half open end UTF-8 char index in the Document.text.
  * startIndex `string`: TextSegment start UTF-8 char index in the Document.text.

### GoogleCloudDocumentaiV1beta3DocumentTextChange
* GoogleCloudDocumentaiV1beta3DocumentTextChange `object`: This message is used for text changes aka. OCR corrections.
  * changedText `string`: The text that replaces the text identified in the `text_anchor`.
  * provenance `array`: The history of this annotation.
    * items [GoogleCloudDocumentaiV1beta3DocumentProvenance](#googleclouddocumentaiv1beta3documentprovenance)
  * textAnchor [GoogleCloudDocumentaiV1beta3DocumentTextAnchor](#googleclouddocumentaiv1beta3documenttextanchor)

### GoogleCloudDocumentaiV1beta3DocumentTranslation
* GoogleCloudDocumentaiV1beta3DocumentTranslation `object`: A translation of the text segment.
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * provenance `array`: The history of this annotation.
    * items [GoogleCloudDocumentaiV1beta3DocumentProvenance](#googleclouddocumentaiv1beta3documentprovenance)
  * textAnchor [GoogleCloudDocumentaiV1beta3DocumentTextAnchor](#googleclouddocumentaiv1beta3documenttextanchor)
  * translatedText `string`: Text translated into the target language.

### GoogleCloudDocumentaiV1beta3NormalizedVertex
* GoogleCloudDocumentaiV1beta3NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudDocumentaiV1beta3ProcessRequest
* GoogleCloudDocumentaiV1beta3ProcessRequest `object`: Request message for the process document method.
  * document [GoogleCloudDocumentaiV1beta3Document](#googleclouddocumentaiv1beta3document)
  * skipHumanReview `boolean`: Whether Human Review feature should be skipped for this request. Default to false.

### GoogleCloudDocumentaiV1beta3ProcessResponse
* GoogleCloudDocumentaiV1beta3ProcessResponse `object`: Response message for the process document method.
  * document [GoogleCloudDocumentaiV1beta3Document](#googleclouddocumentaiv1beta3document)
  * humanReviewOperation `string`: The name of the operation triggered by the processed document. If the human review process is not triggered, this field will be empty. It has the same response type and metadata as the long running operation returned by ReviewDocument method.

### GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata
* GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata `object`: The long running operation metadata for review document method.
  * createTime `string`: The creation time of the operation.
  * state `string` (values: STATE_UNSPECIFIED, RUNNING, CANCELLING, SUCCEEDED, FAILED, CANCELLED): Used only when Operation.done is false.
  * stateMessage `string`: A message providing more details about the current state of processing. For example, the error message if the operation is failed.
  * updateTime `string`: The last update time of the operation.

### GoogleCloudDocumentaiV1beta3ReviewDocumentRequest
* GoogleCloudDocumentaiV1beta3ReviewDocumentRequest `object`: Request message for review document method.
  * document [GoogleCloudDocumentaiV1beta3Document](#googleclouddocumentaiv1beta3document)

### GoogleCloudDocumentaiV1beta3ReviewDocumentResponse
* GoogleCloudDocumentaiV1beta3ReviewDocumentResponse `object`: Response message for review document method.
  * gcsDestination `string`: The Cloud Storage uri for the human reviewed document.

### GoogleCloudDocumentaiV1beta3Vertex
* GoogleCloudDocumentaiV1beta3Vertex `object`: A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### GoogleCloudLocationListLocationsResponse
* GoogleCloudLocationListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [GoogleCloudLocationLocation](#googlecloudlocationlocation)
  * nextPageToken `string`: The standard List next-page token.

### GoogleCloudLocationLocation
* GoogleCloudLocationLocation `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### GoogleLongrunningOperation
* GoogleLongrunningOperation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [GoogleRpcStatus](#googlerpcstatus)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GoogleRpcStatus
* GoogleRpcStatus `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### GoogleTypeColor
* GoogleTypeColor `object`: Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness; for example, the fields of this representation can be trivially provided to the constructor of "java.awt.Color" in Java; it can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha" method in iOS; and, with just a little work, it can be easily formatted into a CSS "rgba()" string in JavaScript, as well. Note: this proto does not carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color space. Note: when color equality needs to be decided, implementations, unless documented otherwise, will treat two colors to be equal if all their red, green, blue and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor_(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor_ = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...
  * alpha `number`: The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (this color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is to be rendered as a solid color (as if the alpha value had been explicitly given with a value of 1.0).
  * blue `number`: The amount of blue in the color as a value in the interval [0, 1].
  * green `number`: The amount of green in the color as a value in the interval [0, 1].
  * red `number`: The amount of red in the color as a value in the interval [0, 1].

### GoogleTypeDate
* GoogleTypeDate `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### GoogleTypeDateTime
* GoogleTypeDateTime `object`: Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year is 0, the DateTime is considered not to have a specific year. month and day must have valid, non-zero values. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
  * day `integer`: Required. Day of month. Must be from 1 to 31 and valid for the year and month.
  * hours `integer`: Required. Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * minutes `integer`: Required. Minutes of hour of day. Must be from 0 to 59.
  * month `integer`: Required. Month of year. Must be from 1 to 12.
  * nanos `integer`: Required. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Required. Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  * timeZone [GoogleTypeTimeZone](#googletypetimezone)
  * utcOffset `string`: UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
  * year `integer`: Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.

### GoogleTypeMoney
* GoogleTypeMoney `object`: Represents an amount of money with its currency type.
  * currencyCode `string`: The three-letter currency code defined in ISO 4217.
  * nanos `integer`: Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
  * units `string`: The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.

### GoogleTypePostalAddress
* GoogleTypePostalAddress `object`: Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
  * addressLines `array`: Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
    * items `string`
  * administrativeArea `string`: Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.
  * languageCode `string`: Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
  * locality `string`: Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.
  * organization `string`: Optional. The name of the organization at the address.
  * postalCode `string`: Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
  * recipients `array`: Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
    * items `string`
  * regionCode `string`: Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
  * revision `integer`: The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.
  * sortingCode `string`: Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).
  * sublocality `string`: Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.

### GoogleTypeTimeZone
* GoogleTypeTimeZone `object`: Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
  * id `string`: IANA Time Zone Database time zone, e.g. "America/New_York".
  * version `string`: Optional. IANA Time Zone Database version number, e.g. "2019a".


