# @datafire/amazonaws_comprehend

Client library for Amazon Comprehend

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_comprehend
```
```js
let amazonaws_comprehend = require('@datafire/amazonaws_comprehend').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_comprehend.BatchDetectDominantLanguage({
  "TextList": []
}).then(data => {
  console.log(data);
});
```

## Description

Amazon Comprehend is an AWS service for gaining insight into the content of documents. Use these actions to determine the topics contained in your documents, the topics they discuss, the predominant sentiment expressed in them, the predominant language used, and more.

## Actions

### BatchDetectDominantLanguage



```js
amazonaws_comprehend.BatchDetectDominantLanguage({
  "TextList": []
}, context)
```

#### Input
* input `object`
  * TextList **required** [StringList](#stringlist)

#### Output
* output [BatchDetectDominantLanguageResponse](#batchdetectdominantlanguageresponse)

### BatchDetectEntities



```js
amazonaws_comprehend.BatchDetectEntities({
  "TextList": [],
  "LanguageCode": ""
}, context)
```

#### Input
* input `object`
  * LanguageCode **required** [String](#string)
  * TextList **required** [StringList](#stringlist)

#### Output
* output [BatchDetectEntitiesResponse](#batchdetectentitiesresponse)

### BatchDetectKeyPhrases



```js
amazonaws_comprehend.BatchDetectKeyPhrases({
  "TextList": [],
  "LanguageCode": ""
}, context)
```

#### Input
* input `object`
  * LanguageCode **required** [String](#string)
  * TextList **required** [StringList](#stringlist)

#### Output
* output [BatchDetectKeyPhrasesResponse](#batchdetectkeyphrasesresponse)

### BatchDetectSentiment



```js
amazonaws_comprehend.BatchDetectSentiment({
  "TextList": [],
  "LanguageCode": ""
}, context)
```

#### Input
* input `object`
  * LanguageCode **required** [String](#string)
  * TextList **required** [StringList](#stringlist)

#### Output
* output [BatchDetectSentimentResponse](#batchdetectsentimentresponse)

### DescribeTopicsDetectionJob



```js
amazonaws_comprehend.DescribeTopicsDetectionJob({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** [JobId](#jobid)

#### Output
* output [DescribeTopicsDetectionJobResponse](#describetopicsdetectionjobresponse)

### DetectDominantLanguage



```js
amazonaws_comprehend.DetectDominantLanguage({
  "Text": ""
}, context)
```

#### Input
* input `object`
  * Text **required** [String](#string)

#### Output
* output [DetectDominantLanguageResponse](#detectdominantlanguageresponse)

### DetectEntities



```js
amazonaws_comprehend.DetectEntities({
  "Text": "",
  "LanguageCode": ""
}, context)
```

#### Input
* input `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Text **required** [String](#string)

#### Output
* output [DetectEntitiesResponse](#detectentitiesresponse)

### DetectKeyPhrases



```js
amazonaws_comprehend.DetectKeyPhrases({
  "Text": "",
  "LanguageCode": ""
}, context)
```

#### Input
* input `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Text **required** [String](#string)

#### Output
* output [DetectKeyPhrasesResponse](#detectkeyphrasesresponse)

### DetectSentiment



```js
amazonaws_comprehend.DetectSentiment({
  "Text": "",
  "LanguageCode": ""
}, context)
```

#### Input
* input `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Text **required** [String](#string)

#### Output
* output [DetectSentimentResponse](#detectsentimentresponse)

### ListTopicsDetectionJobs



```js
amazonaws_comprehend.ListTopicsDetectionJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter [TopicsDetectionJobFilter](#topicsdetectionjobfilter)
  * MaxResults [MaxResultsInteger](#maxresultsinteger)
  * NextToken [String](#string)

#### Output
* output [ListTopicsDetectionJobsResponse](#listtopicsdetectionjobsresponse)

### StartTopicsDetectionJob



```js
amazonaws_comprehend.StartTopicsDetectionJob({
  "InputDataConfig": {
    "S3Uri": ""
  },
  "OutputDataConfig": {
    "S3Uri": ""
  },
  "DataAccessRoleArn": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestTokenString](#clientrequesttokenstring)
  * DataAccessRoleArn **required** [IamRoleArn](#iamrolearn)
  * InputDataConfig **required** [InputDataConfig](#inputdataconfig)
  * JobName [JobName](#jobname)
  * NumberOfTopics [NumberOfTopicsInteger](#numberoftopicsinteger)
  * OutputDataConfig **required** [OutputDataConfig](#outputdataconfig)

#### Output
* output [StartTopicsDetectionJobResponse](#starttopicsdetectionjobresponse)



## Definitions

### AnyLengthString
* AnyLengthString `string`

### BatchDetectDominantLanguageItemResult
* BatchDetectDominantLanguageItemResult `object`: The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
  * Index [Integer](#integer)
  * Languages [ListOfDominantLanguages](#listofdominantlanguages)

### BatchDetectDominantLanguageRequest
* BatchDetectDominantLanguageRequest `object`
  * TextList **required** [StringList](#stringlist)

### BatchDetectDominantLanguageResponse
* BatchDetectDominantLanguageResponse `object`
  * ErrorList **required** [BatchItemErrorList](#batchitemerrorlist)
  * ResultList **required** [ListOfDetectDominantLanguageResult](#listofdetectdominantlanguageresult)

### BatchDetectEntitiesItemResult
* BatchDetectEntitiesItemResult `object`: The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
  * Entities [ListOfEntities](#listofentities)
  * Index [Integer](#integer)

### BatchDetectEntitiesRequest
* BatchDetectEntitiesRequest `object`
  * LanguageCode **required** [String](#string)
  * TextList **required** [StringList](#stringlist)

### BatchDetectEntitiesResponse
* BatchDetectEntitiesResponse `object`
  * ErrorList **required** [BatchItemErrorList](#batchitemerrorlist)
  * ResultList **required** [ListOfDetectEntitiesResult](#listofdetectentitiesresult)

### BatchDetectKeyPhrasesItemResult
* BatchDetectKeyPhrasesItemResult `object`: The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
  * Index [Integer](#integer)
  * KeyPhrases [ListOfKeyPhrases](#listofkeyphrases)

### BatchDetectKeyPhrasesRequest
* BatchDetectKeyPhrasesRequest `object`
  * LanguageCode **required** [String](#string)
  * TextList **required** [StringList](#stringlist)

### BatchDetectKeyPhrasesResponse
* BatchDetectKeyPhrasesResponse `object`
  * ErrorList **required** [BatchItemErrorList](#batchitemerrorlist)
  * ResultList **required** [ListOfDetectKeyPhrasesResult](#listofdetectkeyphrasesresult)

### BatchDetectSentimentItemResult
* BatchDetectSentimentItemResult `object`: The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
  * Index [Integer](#integer)
  * Sentiment [SentimentType](#sentimenttype)
  * SentimentScore [SentimentScore](#sentimentscore)

### BatchDetectSentimentRequest
* BatchDetectSentimentRequest `object`
  * LanguageCode **required** [String](#string)
  * TextList **required** [StringList](#stringlist)

### BatchDetectSentimentResponse
* BatchDetectSentimentResponse `object`
  * ErrorList **required** [BatchItemErrorList](#batchitemerrorlist)
  * ResultList **required** [ListOfDetectSentimentResult](#listofdetectsentimentresult)

### BatchItemError
* BatchItemError `object`: Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error.
  * ErrorCode [String](#string)
  * ErrorMessage [String](#string)
  * Index [Integer](#integer)

### BatchItemErrorList
* BatchItemErrorList `array`
  * items [BatchItemError](#batchitemerror)

### BatchSizeLimitExceededException
* BatchSizeLimitExceededException `object`: The number of documents in the request exceeds the limit of 25. Try your request again with fewer documents.
  * Message [String](#string)

### ClientRequestTokenString
* ClientRequestTokenString `string`

### DescribeTopicsDetectionJobRequest
* DescribeTopicsDetectionJobRequest `object`
  * JobId **required** [JobId](#jobid)

### DescribeTopicsDetectionJobResponse
* DescribeTopicsDetectionJobResponse `object`
  * TopicsDetectionJobProperties [TopicsDetectionJobProperties](#topicsdetectionjobproperties)

### DetectDominantLanguageRequest
* DetectDominantLanguageRequest `object`
  * Text **required** [String](#string)

### DetectDominantLanguageResponse
* DetectDominantLanguageResponse `object`
  * Languages [ListOfDominantLanguages](#listofdominantlanguages)

### DetectEntitiesRequest
* DetectEntitiesRequest `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Text **required** [String](#string)

### DetectEntitiesResponse
* DetectEntitiesResponse `object`
  * Entities [ListOfEntities](#listofentities)

### DetectKeyPhrasesRequest
* DetectKeyPhrasesRequest `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Text **required** [String](#string)

### DetectKeyPhrasesResponse
* DetectKeyPhrasesResponse `object`
  * KeyPhrases [ListOfKeyPhrases](#listofkeyphrases)

### DetectSentimentRequest
* DetectSentimentRequest `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Text **required** [String](#string)

### DetectSentimentResponse
* DetectSentimentResponse `object`
  * Sentiment [SentimentType](#sentimenttype)
  * SentimentScore [SentimentScore](#sentimentscore)

### DominantLanguage
* DominantLanguage `object`: Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.
  * LanguageCode [String](#string)
  * Score [Float](#float)

### Entity
* Entity `object`: <p>Provides information about an entity. </p> <p> </p>
  * BeginOffset [Integer](#integer)
  * EndOffset [Integer](#integer)
  * Score [Float](#float)
  * Text [String](#string)
  * Type [EntityType](#entitytype)

### EntityType
* EntityType `string` (values: PERSON, LOCATION, ORGANIZATION, COMMERCIAL_ITEM, EVENT, DATE, QUANTITY, TITLE, OTHER)

### Float
* Float `number`

### IamRoleArn
* IamRoleArn `string`

### InputDataConfig
* InputDataConfig `object`: The input properties for a topic detection job.
  * InputFormat [InputFormat](#inputformat)
  * S3Uri **required** [S3Uri](#s3uri)

### InputFormat
* InputFormat `string` (values: ONE_DOC_PER_FILE, ONE_DOC_PER_LINE)

### Integer
* Integer `integer`

### InternalServerException
* InternalServerException `object`: An internal server error occurred. Retry your request.
  * Message [String](#string)

### InvalidFilterException
* InvalidFilterException `object`: The filter specified for the <code>ListTopicDetectionJobs</code> operation is invalid. Specify a different filter.
  * Message [String](#string)

### InvalidRequestException
* InvalidRequestException `object`: The request is invalid.
  * Message [String](#string)

### JobId
* JobId `string`

### JobName
* JobName `string`

### JobNotFoundException
* JobNotFoundException `object`: The specified job was not found. Check the job ID and try again.
  * Message [String](#string)

### JobStatus
* JobStatus `string` (values: SUBMITTED, IN_PROGRESS, COMPLETED, FAILED)

### KeyPhrase
* KeyPhrase `object`: Describes a key noun phrase.
  * BeginOffset [Integer](#integer)
  * EndOffset [Integer](#integer)
  * Score [Float](#float)
  * Text [String](#string)

### LanguageCode
* LanguageCode `string` (values: en, es)

### ListOfDetectDominantLanguageResult
* ListOfDetectDominantLanguageResult `array`
  * items [BatchDetectDominantLanguageItemResult](#batchdetectdominantlanguageitemresult)

### ListOfDetectEntitiesResult
* ListOfDetectEntitiesResult `array`
  * items [BatchDetectEntitiesItemResult](#batchdetectentitiesitemresult)

### ListOfDetectKeyPhrasesResult
* ListOfDetectKeyPhrasesResult `array`
  * items [BatchDetectKeyPhrasesItemResult](#batchdetectkeyphrasesitemresult)

### ListOfDetectSentimentResult
* ListOfDetectSentimentResult `array`
  * items [BatchDetectSentimentItemResult](#batchdetectsentimentitemresult)

### ListOfDominantLanguages
* ListOfDominantLanguages `array`
  * items [DominantLanguage](#dominantlanguage)

### ListOfEntities
* ListOfEntities `array`
  * items [Entity](#entity)

### ListOfKeyPhrases
* ListOfKeyPhrases `array`
  * items [KeyPhrase](#keyphrase)

### ListTopicsDetectionJobsRequest
* ListTopicsDetectionJobsRequest `object`
  * Filter [TopicsDetectionJobFilter](#topicsdetectionjobfilter)
  * MaxResults [MaxResultsInteger](#maxresultsinteger)
  * NextToken [String](#string)

### ListTopicsDetectionJobsResponse
* ListTopicsDetectionJobsResponse `object`
  * NextToken [String](#string)
  * TopicsDetectionJobPropertiesList [TopicsDetectionJobPropertiesList](#topicsdetectionjobpropertieslist)

### MaxResultsInteger
* MaxResultsInteger `integer`

### NumberOfTopicsInteger
* NumberOfTopicsInteger `integer`

### OutputDataConfig
* OutputDataConfig `object`: <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
  * S3Uri **required** [S3Uri](#s3uri)

### S3Uri
* S3Uri `string`

### SentimentScore
* SentimentScore `object`: Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.
  * Mixed [Float](#float)
  * Negative [Float](#float)
  * Neutral [Float](#float)
  * Positive [Float](#float)

### SentimentType
* SentimentType `string` (values: POSITIVE, NEGATIVE, NEUTRAL, MIXED)

### StartTopicsDetectionJobRequest
* StartTopicsDetectionJobRequest `object`
  * ClientRequestToken [ClientRequestTokenString](#clientrequesttokenstring)
  * DataAccessRoleArn **required** [IamRoleArn](#iamrolearn)
  * InputDataConfig **required** [InputDataConfig](#inputdataconfig)
  * JobName [JobName](#jobname)
  * NumberOfTopics [NumberOfTopicsInteger](#numberoftopicsinteger)
  * OutputDataConfig **required** [OutputDataConfig](#outputdataconfig)

### StartTopicsDetectionJobResponse
* StartTopicsDetectionJobResponse `object`
  * JobId [JobId](#jobid)
  * JobStatus [JobStatus](#jobstatus)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### TextSizeLimitExceededException
* TextSizeLimitExceededException `object`: The size of the input text exceeds the limit. Use a smaller document.
  * Message [String](#string)

### Timestamp
* Timestamp `string`

### TooManyRequestsException
* TooManyRequestsException `object`: The number of requests exceeds the limit. Resubmit your request later.
  * Message [String](#string)

### TopicsDetectionJobFilter
* TopicsDetectionJobFilter `object`: Provides information for filtering topic detection jobs. For more information, see .
  * JobName [JobName](#jobname)
  * JobStatus [JobStatus](#jobstatus)
  * SubmitTimeAfter [Timestamp](#timestamp)
  * SubmitTimeBefore [Timestamp](#timestamp)

### TopicsDetectionJobProperties
* TopicsDetectionJobProperties `object`: Provides information about a topic detection job.
  * EndTime [Timestamp](#timestamp)
  * InputDataConfig [InputDataConfig](#inputdataconfig)
  * JobId [JobId](#jobid)
  * JobName [JobName](#jobname)
  * JobStatus [JobStatus](#jobstatus)
  * Message [AnyLengthString](#anylengthstring)
  * NumberOfTopics [Integer](#integer)
  * OutputDataConfig [OutputDataConfig](#outputdataconfig)
  * SubmitTime [Timestamp](#timestamp)

### TopicsDetectionJobPropertiesList
* TopicsDetectionJobPropertiesList `array`
  * items [TopicsDetectionJobProperties](#topicsdetectionjobproperties)

### UnsupportedLanguageException
* UnsupportedLanguageException `object`: Amazon Comprehend can't process the language of the input text. For all APIs except <code>DetectDominantLanguage</code>, Amazon Comprehend accepts only English or Spanish text. For the <code>DetectDominantLanguage</code> API, Amazon Comprehend detects 100 languages. For a list of languages, see <a>how-languages</a> 
  * Message [String](#string)


