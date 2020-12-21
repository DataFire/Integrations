# @datafire/azure_cognitiveservices_qnamakerruntime

Client library for QnAMaker Runtime Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_qnamakerruntime
```
```js
let azure_cognitiveservices_qnamakerruntime = require('@datafire/azure_cognitiveservices_qnamakerruntime').create({
  auth_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

An API for QnAMaker runtime

## Actions

### Runtime_GenerateAnswer
GenerateAnswer call to query the knowledgebase.


```js
azure_cognitiveservices_qnamakerruntime.Runtime_GenerateAnswer({
  "kbId": "",
  "generateAnswerPayload": {}
}, context)
```

#### Input
* input `object`
  * kbId **required** `string`: Knowledgebase id.
  * generateAnswerPayload **required** [QueryDTO](#querydto)

#### Output
* output [QnASearchResultList](#qnasearchresultlist)

### Runtime_Train
Train call to add suggestions to the knowledgebase.


```js
azure_cognitiveservices_qnamakerruntime.Runtime_Train({
  "kbId": "",
  "trainPayload": {}
}, context)
```

#### Input
* input `object`
  * kbId **required** `string`: Knowledgebase id.
  * trainPayload **required** [FeedbackRecordsDTO](#feedbackrecordsdto)

#### Output
*Output schema unknown*



## Definitions

### ContextDTO
* ContextDTO `object`: Context associated with Qna.
  * isContextOnly `boolean`: To mark if a prompt is relevant only with a previous question or not.
  * prompts `array`: List of prompts associated with the answer.
    * items [PromptDTO](#promptdto)

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

### FeedbackRecordDTO
* FeedbackRecordDTO `object`: Active learning feedback record.
  * qnaId `integer`: The qnaId for which the suggested question is provided as feedback.
  * userId `string`: Unique identifier for the user.
  * userQuestion `string`: The suggested question being provided as feedback.

### FeedbackRecordsDTO
* FeedbackRecordsDTO `object`: Active learning feedback records.
  * feedbackRecords `array`: List of feedback records.
    * items [FeedbackRecordDTO](#feedbackrecorddto)

### InnerErrorModel
* InnerErrorModel `object`: An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses.
  * code `string`: A more specific error code than was provided by the containing error.
  * innerError [InnerErrorModel](#innererrormodel)

### MetadataDTO
* MetadataDTO `object`: Name - value pair of metadata.
  * name **required** `string`: Metadata name.
  * value **required** `string`: Metadata value.

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

### QnASearchResult
* QnASearchResult `object`: Represents Search Result.
  * answer `string`: Answer.
  * context `object`: Context object of the QnA
    * isContextOnly `boolean`: To mark if a prompt is relevant only with a previous question or not.
    * prompts `array`: List of prompts associated with the answer.
      * items [PromptDTO](#promptdto)
  * id `integer`: Id of the QnA result.
  * metadata `array`: List of metadata.
    * items [MetadataDTO](#metadatadto)
  * questions `array`: List of questions.
    * items `string`
  * score `number`: Search result score.
  * source `string`: Source of QnA result.

### QnASearchResultList
* QnASearchResultList `object`: Represents List of Question Answers.
  * answers `array`: Represents Search Result list.
    * items [QnASearchResult](#qnasearchresult)

### QueryContextDTO
* QueryContextDTO `object`: Context object with previous QnA's information.
  * previousQnaId `string`: Previous QnA Id - qnaId of the top result.
  * previousUserQuery `string`: Previous user query.

### QueryDTO
* QueryDTO `object`: POST body schema to query the knowledgebase.
  * context: Context object with previous QnA's information.
    * previousQnaId `string`: Previous QnA Id - qnaId of the top result.
    * previousUserQuery `string`: Previous user query.
  * isTest `boolean`: Query against the test index.
  * qnaId `string`: Exact qnaId to fetch from the knowledgebase, this field takes priority over question.
  * question `string`: User question to query against the knowledge base.
  * rankerType `string`: Optional field. Set to 'QuestionOnly' for using a question only Ranker.
  * scoreThreshold `number`: Threshold for answers returned based on score.
  * strictFilters `array`: Find only answers that contain these metadata.
    * items [MetadataDTO](#metadatadto)
  * top `integer`: Max number of answers to be returned for the question.
  * userId `string`: Unique identifier for the user.


