# @datafire/azure_cognitiveservices_qnamaker

Client library for QnAMaker Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_qnamaker
```
```js
let azure_cognitiveservices_qnamaker = require('@datafire/azure_cognitiveservices_qnamaker').create({
  apim_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

An API for QnAMaker Service

## Actions

### Alterations_Get
Download alterations from runtime.


```js
azure_cognitiveservices_qnamaker.Alterations_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WordAlterationsDTO](#wordalterationsdto)

### Alterations_Replace
Replace alterations data.


```js
azure_cognitiveservices_qnamaker.Alterations_Replace({
  "wordAlterations": {
    "wordAlterations": []
  }
}, context)
```

#### Input
* input `object`
  * wordAlterations **required** [WordAlterationsDTO](#wordalterationsdto)

#### Output
*Output schema unknown*

### EndpointSettings_GetSettings
Gets endpoint settings for an endpoint.


```js
azure_cognitiveservices_qnamaker.EndpointSettings_GetSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [EndpointSettingsDTO](#endpointsettingsdto)

### EndpointSettings_UpdateSettings
Updates endpoint settings for an endpoint.


```js
azure_cognitiveservices_qnamaker.EndpointSettings_UpdateSettings({
  "endpointSettingsPayload": {}
}, context)
```

#### Input
* input `object`
  * endpointSettingsPayload **required** [EndpointSettingsDTO](#endpointsettingsdto)

#### Output
* output `string`

### EndpointKeys_GetKeys
Gets endpoint keys for an endpoint


```js
azure_cognitiveservices_qnamaker.EndpointKeys_GetKeys(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [EndpointKeysDTO](#endpointkeysdto)

### EndpointKeys_RefreshKeys
Re-generates an endpoint key.


```js
azure_cognitiveservices_qnamaker.EndpointKeys_RefreshKeys({
  "keyType": ""
}, context)
```

#### Input
* input `object`
  * keyType **required** `string`: Type of Key

#### Output
* output [EndpointKeysDTO](#endpointkeysdto)

### Knowledgebase_ListAll
Gets all knowledgebases for a user.


```js
azure_cognitiveservices_qnamaker.Knowledgebase_ListAll(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [KnowledgebasesDTO](#knowledgebasesdto)

### Knowledgebase_Create
Asynchronous operation to create a new knowledgebase.


```js
azure_cognitiveservices_qnamaker.Knowledgebase_Create({
  "createKbPayload": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * createKbPayload **required** [CreateKbDTO](#createkbdto)

#### Output
* output [Operation](#operation)

### Knowledgebase_Delete
Deletes the knowledgebase and all its data.


```js
azure_cognitiveservices_qnamaker.Knowledgebase_Delete({
  "kbId": ""
}, context)
```

#### Input
* input `object`
  * kbId **required** `string`: Knowledgebase id.

#### Output
*Output schema unknown*

### Knowledgebase_GetDetails
Gets details of a specific knowledgebase.


```js
azure_cognitiveservices_qnamaker.Knowledgebase_GetDetails({
  "kbId": ""
}, context)
```

#### Input
* input `object`
  * kbId **required** `string`: Knowledgebase id.

#### Output
* output [KnowledgebaseDTO](#knowledgebasedto)

### Knowledgebase_Update
Asynchronous operation to modify a knowledgebase.


```js
azure_cognitiveservices_qnamaker.Knowledgebase_Update({
  "kbId": "",
  "updateKb": {}
}, context)
```

#### Input
* input `object`
  * kbId **required** `string`: Knowledgebase id.
  * updateKb **required** [UpdateKbOperationDTO](#updatekboperationdto)

#### Output
* output [Operation](#operation)

### Knowledgebase_Publish
Publishes all changes in test index of a knowledgebase to its prod index.


```js
azure_cognitiveservices_qnamaker.Knowledgebase_Publish({
  "kbId": ""
}, context)
```

#### Input
* input `object`
  * kbId **required** `string`: Knowledgebase id.

#### Output
*Output schema unknown*

### Knowledgebase_Replace
Replace knowledgebase contents.


```js
azure_cognitiveservices_qnamaker.Knowledgebase_Replace({
  "kbId": "",
  "replaceKb": {
    "qnAList": []
  }
}, context)
```

#### Input
* input `object`
  * kbId **required** `string`: Knowledgebase id.
  * replaceKb **required** [ReplaceKbDTO](#replacekbdto)

#### Output
*Output schema unknown*

### Knowledgebase_Download
Download the knowledgebase.


```js
azure_cognitiveservices_qnamaker.Knowledgebase_Download({
  "kbId": "",
  "environment": ""
}, context)
```

#### Input
* input `object`
  * kbId **required** `string`: Knowledgebase id.
  * environment **required** `string` (values: Prod, Test): Specifies whether environment is Test or Prod.

#### Output
* output [QnADocumentsDTO](#qnadocumentsdto)

### Operations_GetDetails
Gets details of a specific long running operation.


```js
azure_cognitiveservices_qnamaker.Operations_GetDetails({
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * operationId **required** `string`: Operation id.

#### Output
* output [Operation](#operation)



## Definitions

### ActiveLearningSettingsDTO
* ActiveLearningSettingsDTO `object`: Active Learning settings of the endpoint.
  * enable `string`: True/False string providing Active Learning

### AlterationsDTO
* AlterationsDTO `object`: Collection of words that are synonyms.
  * alterations **required** `array`: Words that are synonymous with each other.
    * items `string`

### ContextDTO
* ContextDTO `object`: Context associated with Qna.
  * isContextOnly `boolean`: To mark if a prompt is relevant only with a previous question or not.
  * prompts `array`: List of prompts associated with the answer.
    * items [PromptDTO](#promptdto)

### CreateKbDTO
* CreateKbDTO `object`: Post body schema for CreateKb operation.
  * defaultAnswerUsedForExtraction `string`: Text string to be used as the answer in any Q-A which has no extracted answer from the document but has a hierarchy. Required when EnableHierarchicalExtraction field is set to True.
  * enableHierarchicalExtraction `boolean`: Enable hierarchical extraction of Q-A from files and urls. Value to be considered False if this field is not present.
  * files `array`: List of files from which to Extract Q-A.
    * items [FileDTO](#filedto)
  * language `string`: Language of the knowledgebase.
  * name **required** `string`: Friendly name for the knowledgebase.
  * qnaList `array`: List of Q-A (QnADTO) to be added to the knowledgebase. Q-A Ids are assigned by the service and should be omitted.
    * items [QnADTO](#qnadto)
  * urls `array`: List of URLs to be used for extracting Q-A.
    * items `string`

### CreateKbInputDTO
* CreateKbInputDTO `object`: Input to create KB.
  * files `array`: List of files to be added to knowledgebase.
    * items [FileDTO](#filedto)
  * qnaList `array`: List of QNA to be added to the index. Ids are generated by the service and should be omitted.
    * items [QnADTO](#qnadto)
  * urls `array`: List of URLs to be added to knowledgebase.
    * items `string`

### DeleteKbContentsDTO
* DeleteKbContentsDTO `object`: PATCH body schema of Delete Operation in UpdateKb
  * ids `array`: List of Qna Ids to be deleted
    * items `integer`
  * sources `array`: List of sources to be deleted from knowledgebase.
    * items `string`

### EndpointKeysDTO
* EndpointKeysDTO `object`: Schema for EndpointKeys generate/refresh operations.
  * installedVersion `string`: Current version of runtime.
  * language `string`: Language setting of runtime.
  * lastStableVersion `string`: Latest version of runtime.
  * primaryEndpointKey `string`: Primary Access Key.
  * secondaryEndpointKey `string`: Secondary Access Key.

### EndpointSettingsDTO
* EndpointSettingsDTO `object`: Endpoint settings.
  * activeLearning: Active Learning settings of the endpoint.
    * enable `string`: True/False string providing Active Learning

### Error
* Error `object`: The error object. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses.
  * code **required** [ErrorCode](#errorcode)
  * details `array`: An array of details about specific errors that led to this reported error.
    * items [Error](#error)
  * innerError [InnerErrorModel](#innererrormodel)
  * message `string`: A human-readable representation of the error.
  * target `string`: The target of the error.

### ErrorCode
* ErrorCode `string` (values: BadArgument, Forbidden, NotFound, KbNotFound, Unauthorized, Unspecified, EndpointKeysError, QuotaExceeded, QnaRuntimeError, SKULimitExceeded, OperationNotFound, ServiceError, ValidationFailure, ExtractionFailure): Human readable error code.

### ErrorResponse
* ErrorResponse `object`: Error response. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses.
  * error: The error object.
    * code **required** [ErrorCode](#errorcode)
    * details `array`: An array of details about specific errors that led to this reported error.
      * items [Error](#error)
    * innerError [InnerErrorModel](#innererrormodel)
    * message `string`: A human-readable representation of the error.
    * target `string`: The target of the error.

### FileDTO
* FileDTO `object`: DTO to hold details of uploaded files.
  * fileName **required** `string`: File name. Supported file types are ".tsv", ".pdf", ".txt", ".docx", ".xlsx".
  * fileUri **required** `string`: Public URI of the file.

### InnerErrorModel
* InnerErrorModel `object`: An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses.
  * code `string`: A more specific error code than was provided by the containing error.
  * innerError [InnerErrorModel](#innererrormodel)

### KnowledgebaseDTO
* KnowledgebaseDTO `object`: Response schema for CreateKb operation.
  * hostName `string`: URL host name at which the knowledgebase is hosted.
  * id `string`: Unique id that identifies a knowledgebase.
  * lastAccessedTimestamp `string`: Time stamp at which the knowledgebase was last accessed (UTC).
  * lastChangedTimestamp `string`: Time stamp at which the knowledgebase was last modified (UTC).
  * lastPublishedTimestamp `string`: Time stamp at which the knowledgebase was last published (UTC).
  * name `string`: Friendly name of the knowledgebase.
  * sources `array`: Custom sources from which Q-A were extracted or explicitly added to the knowledgebase.
    * items `string`
  * urls `array`: URL sources from which Q-A were extracted and added to the knowledgebase.
    * items `string`
  * userId `string`: User who created / owns the knowledgebase.

### KnowledgebasesDTO
* KnowledgebasesDTO `object`: Collection of knowledgebases owned by a user.
  * knowledgebases `array`: Collection of knowledgebase records.
    * items [KnowledgebaseDTO](#knowledgebasedto)

### MetadataDTO
* MetadataDTO `object`: Name - value pair of metadata.
  * name **required** `string`: Metadata name.
  * value **required** `string`: Metadata value.

### Operation
* Operation `object`: Record to track long running operation.
  * createdTimestamp `string`: Timestamp when the operation was created.
  * errorResponse [ErrorResponse](#errorresponse)
  * lastActionTimestamp `string`: Timestamp when the current state was entered.
  * operationId `string`: Operation Id.
  * operationState [OperationState](#operationstate)
  * resourceLocation `string`: Relative URI to the target resource location for completed resources.
  * userId `string`: User Id

### OperationState
* OperationState `string` (values: Failed, NotStarted, Running, Succeeded): Enumeration of operation states.

### PromptDTO
* PromptDTO `object`: Prompt for an answer.
  * displayOrder `integer`: Index of the prompt - used in ordering of the prompts
  * displayText `string`: Text displayed to represent a follow up question prompt
  * qna: QnADTO - Either QnaId or QnADTO needs to be present in a PromptDTO object
    * answer **required** `string`: Answer text
    * context: Context of a QnA
      * isContextOnly `boolean`: To mark if a prompt is relevant only with a previous question or not.
      * prompts `array`: List of prompts associated with the answer.
        * items [PromptDTO](#promptdto)
    * id `integer`: Unique id for the Q-A.
    * metadata `array`: List of metadata associated with the answer.
      * items [MetadataDTO](#metadatadto)
    * questions **required** `array`: List of questions associated with the answer.
      * items `string`
    * source `string`: Source from which Q-A was indexed. eg. https://docs.microsoft.com/en-us/azure/cognitive-services/QnAMaker/FAQs
  * qnaId `integer`: Qna id corresponding to the prompt - if QnaId is present, QnADTO object is ignored.

### QnADTO
* QnADTO `object`: Q-A object.
  * answer **required** `string`: Answer text
  * context: Context of a QnA
    * isContextOnly `boolean`: To mark if a prompt is relevant only with a previous question or not.
    * prompts `array`: List of prompts associated with the answer.
      * items [PromptDTO](#promptdto)
  * id `integer`: Unique id for the Q-A.
  * metadata `array`: List of metadata associated with the answer.
    * items [MetadataDTO](#metadatadto)
  * questions **required** `array`: List of questions associated with the answer.
    * items `string`
  * source `string`: Source from which Q-A was indexed. eg. https://docs.microsoft.com/en-us/azure/cognitive-services/QnAMaker/FAQs

### QnADocumentsDTO
* QnADocumentsDTO `object`: List of QnADTO
  * qnaDocuments `array`: List of answers.
    * items [QnADTO](#qnadto)

### ReplaceKbDTO
* ReplaceKbDTO `object`: Post body schema for Replace KB operation.
  * qnAList **required** `array`: List of Q-A (QnADTO) to be added to the knowledgebase. Q-A Ids are assigned by the service and should be omitted.
    * items [QnADTO](#qnadto)

### UpdateContextDTO
* UpdateContextDTO `object`: Update Body schema to represent context to be updated
  * isContextOnly `boolean`: To mark if a prompt is relevant only with a previous question or not.
  * promptsToAdd `array`: List of prompts to be added to the qna.
    * items [PromptDTO](#promptdto)
  * promptsToDelete `array`: List of prompts associated with qna to be deleted
    * items `integer`

### UpdateKbContentsDTO
* UpdateKbContentsDTO `object`: PATCH body schema for Update operation in Update Kb
  * name `string`: Friendly name for the knowledgebase.
  * qnaList `array`: List of Q-A (UpdateQnaDTO) to be added to the knowledgebase.
    * items [UpdateQnaDTO](#updateqnadto)
  * urls `array`: List of existing URLs to be refreshed. The content will be extracted again and re-indexed.
    * items `string`

### UpdateKbOperationDTO
* UpdateKbOperationDTO `object`: Contains list of QnAs to be updated
  * add: An instance of CreateKbInputDTO for add operation
    * files `array`: List of files to be added to knowledgebase.
      * items [FileDTO](#filedto)
    * qnaList `array`: List of QNA to be added to the index. Ids are generated by the service and should be omitted.
      * items [QnADTO](#qnadto)
    * urls `array`: List of URLs to be added to knowledgebase.
      * items `string`
  * defaultAnswerUsedForExtraction `string`: Text string to be used as the answer in any Q-A which has no extracted answer from the document but has a hierarchy. Required when EnableHierarchicalExtraction field is set to True.
  * delete: An instance of DeleteKbContentsDTO for delete Operation
    * ids `array`: List of Qna Ids to be deleted
      * items `integer`
    * sources `array`: List of sources to be deleted from knowledgebase.
      * items `string`
  * enableHierarchicalExtraction `boolean`: Enable hierarchical extraction of Q-A from files and urls. The value set during KB creation will be used if this field is not present.
  * update: An instance of UpdateKbContentsDTO for Update Operation
    * name `string`: Friendly name for the knowledgebase.
    * qnaList `array`: List of Q-A (UpdateQnaDTO) to be added to the knowledgebase.
      * items [UpdateQnaDTO](#updateqnadto)
    * urls `array`: List of existing URLs to be refreshed. The content will be extracted again and re-indexed.
      * items `string`

### UpdateMetadataDTO
* UpdateMetadataDTO `object`: PATCH Body schema to represent list of Metadata to be updated
  * add `array`: List of metadata associated with answer to be added
    * items [MetadataDTO](#metadatadto)
  * delete `array`: List of Metadata associated with answer to be deleted
    * items [MetadataDTO](#metadatadto)

### UpdateQnaDTO
* UpdateQnaDTO `object`: PATCH Body schema for Update Qna List
  * answer `string`: Answer text
  * context: Context associated with Qna to be updated.
    * isContextOnly `boolean`: To mark if a prompt is relevant only with a previous question or not.
    * promptsToAdd `array`: List of prompts to be added to the qna.
      * items [PromptDTO](#promptdto)
    * promptsToDelete `array`: List of prompts associated with qna to be deleted
      * items `integer`
  * id `integer`: Unique id for the Q-A
  * metadata: List of metadata associated with the answer to be updated
    * add `array`: List of metadata associated with answer to be added
      * items [MetadataDTO](#metadatadto)
    * delete `array`: List of Metadata associated with answer to be deleted
      * items [MetadataDTO](#metadatadto)
  * questions: List of questions associated with the answer.
    * add `array`: List of questions to be added
      * items `string`
    * delete `array`: List of questions to be deleted.
      * items `string`
  * source `string`: Source from which Q-A was indexed. eg. https://docs.microsoft.com/en-us/azure/cognitive-services/QnAMaker/FAQs

### UpdateQuestionsDTO
* UpdateQuestionsDTO `object`: PATCH Body schema for Update Kb which contains list of questions to be added and deleted
  * add `array`: List of questions to be added
    * items `string`
  * delete `array`: List of questions to be deleted.
    * items `string`

### WordAlterationsDTO
* WordAlterationsDTO `object`: Collection of word alterations.
  * wordAlterations **required** `array`: Collection of word alterations.
    * items [AlterationsDTO](#alterationsdto)


