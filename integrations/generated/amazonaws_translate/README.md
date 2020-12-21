# @datafire/amazonaws_translate

Client library for Amazon Translate

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_translate
```
```js
let amazonaws_translate = require('@datafire/amazonaws_translate').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Provides translation between one source language and another of the same set of languages.

## Actions

### CreateParallelData



```js
amazonaws_translate.CreateParallelData({
  "Name": null,
  "ParallelDataConfig": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * Description
  * EncryptionKey [EncryptionKey](#encryptionkey)
  * Name **required**
  * ParallelDataConfig **required**
    * Format **required**
    * S3Uri **required**

#### Output
* output [CreateParallelDataResponse](#createparalleldataresponse)

### DeleteParallelData



```js
amazonaws_translate.DeleteParallelData({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteParallelDataResponse](#deleteparalleldataresponse)

### DeleteTerminology



```js
amazonaws_translate.DeleteTerminology({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
*Output schema unknown*

### DescribeTextTranslationJob



```js
amazonaws_translate.DescribeTextTranslationJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeTextTranslationJobResponse](#describetexttranslationjobresponse)

### GetParallelData



```js
amazonaws_translate.GetParallelData({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [GetParallelDataResponse](#getparalleldataresponse)

### GetTerminology



```js
amazonaws_translate.GetTerminology({
  "Name": null,
  "TerminologyDataFormat": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * TerminologyDataFormat **required**

#### Output
* output [GetTerminologyResponse](#getterminologyresponse)

### ImportTerminology



```js
amazonaws_translate.ImportTerminology({
  "Name": null,
  "MergeStrategy": null,
  "TerminologyData": null
}, context)
```

#### Input
* input `object`
  * Description
  * EncryptionKey
    * Id **required**
    * Type **required**
  * MergeStrategy **required**
  * Name **required**
  * TerminologyData **required**
    * File **required**
    * Format **required**

#### Output
* output [ImportTerminologyResponse](#importterminologyresponse)

### ListParallelData



```js
amazonaws_translate.ListParallelData({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListParallelDataResponse](#listparalleldataresponse)

### ListTerminologies



```js
amazonaws_translate.ListTerminologies({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListTerminologiesResponse](#listterminologiesresponse)

### ListTextTranslationJobs



```js
amazonaws_translate.ListTextTranslationJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * JobName
    * JobStatus
    * SubmittedAfterTime
    * SubmittedBeforeTime
  * MaxResults
  * NextToken

#### Output
* output [ListTextTranslationJobsResponse](#listtexttranslationjobsresponse)

### StartTextTranslationJob



```js
amazonaws_translate.StartTextTranslationJob({
  "InputDataConfig": null,
  "OutputDataConfig": null,
  "DataAccessRoleArn": null,
  "SourceLanguageCode": null,
  "TargetLanguageCodes": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * ContentType **required**
    * S3Uri **required**
  * JobName
  * OutputDataConfig **required**
    * S3Uri **required**
  * ParallelDataNames
    * items [ResourceName](#resourcename)
  * SourceLanguageCode **required**
  * TargetLanguageCodes **required**
    * items [LanguageCodeString](#languagecodestring)
  * TerminologyNames
    * items [ResourceName](#resourcename)

#### Output
* output [StartTextTranslationJobResponse](#starttexttranslationjobresponse)

### StopTextTranslationJob



```js
amazonaws_translate.StopTextTranslationJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopTextTranslationJobResponse](#stoptexttranslationjobresponse)

### TranslateText



```js
amazonaws_translate.TranslateText({
  "Text": null,
  "SourceLanguageCode": null,
  "TargetLanguageCode": null
}, context)
```

#### Input
* input `object`
  * SourceLanguageCode **required**
  * TargetLanguageCode **required**
  * TerminologyNames
    * items [ResourceName](#resourcename)
  * Text **required**

#### Output
* output [TranslateTextResponse](#translatetextresponse)

### UpdateParallelData



```js
amazonaws_translate.UpdateParallelData({
  "Name": null,
  "ParallelDataConfig": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * Description
  * Name **required**
  * ParallelDataConfig **required**
    * Format **required**
    * S3Uri **required**

#### Output
* output [UpdateParallelDataResponse](#updateparalleldataresponse)



## Definitions

### AppliedTerminology
* AppliedTerminology `object`: The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request.
  * Name
  * Terms
    * items [Term](#term)

### AppliedTerminologyList
* AppliedTerminologyList `array`
  * items [AppliedTerminology](#appliedterminology)

### BoundedLengthString
* BoundedLengthString `string`

### ClientTokenString
* ClientTokenString `string`

### ConcurrentModificationException


### ConflictException


### ContentType
* ContentType `string`

### CreateParallelDataRequest
* CreateParallelDataRequest `object`
  * ClientToken **required**
  * Description
  * EncryptionKey [EncryptionKey](#encryptionkey)
  * Name **required**
  * ParallelDataConfig **required**
    * Format **required**
    * S3Uri **required**

### CreateParallelDataResponse
* CreateParallelDataResponse `object`
  * Name
  * Status

### DeleteParallelDataRequest
* DeleteParallelDataRequest `object`
  * Name **required**

### DeleteParallelDataResponse
* DeleteParallelDataResponse `object`
  * Name
  * Status

### DeleteTerminologyRequest
* DeleteTerminologyRequest `object`
  * Name **required**

### DescribeTextTranslationJobRequest
* DescribeTextTranslationJobRequest `object`
  * JobId **required**

### DescribeTextTranslationJobResponse
* DescribeTextTranslationJobResponse `object`
  * TextTranslationJobProperties
    * DataAccessRoleArn
    * EndTime
    * InputDataConfig
      * ContentType **required**
      * S3Uri **required**
    * JobDetails
      * DocumentsWithErrorsCount
      * InputDocumentsCount
      * TranslatedDocumentsCount
    * JobId
    * JobName
    * JobStatus
    * Message
    * OutputDataConfig
      * S3Uri **required**
    * ParallelDataNames
      * items [ResourceName](#resourcename)
    * SourceLanguageCode
    * SubmittedTime
    * TargetLanguageCodes
      * items [LanguageCodeString](#languagecodestring)
    * TerminologyNames
      * items [ResourceName](#resourcename)

### Description
* Description `string`

### DetectedLanguageLowConfidenceException


### EncryptionKey
* EncryptionKey `object`: The encryption key used to encrypt this object.
  * Id **required**
  * Type **required**

### EncryptionKeyID
* EncryptionKeyID `string`

### EncryptionKeyType
* EncryptionKeyType `string` (values: KMS)

### GetParallelDataRequest
* GetParallelDataRequest `object`
  * Name **required**

### GetParallelDataResponse
* GetParallelDataResponse `object`
  * AuxiliaryDataLocation
    * Location **required**
    * RepositoryType **required**
  * DataLocation
    * Location **required**
    * RepositoryType **required**
  * LatestUpdateAttemptAuxiliaryDataLocation
    * Location **required**
    * RepositoryType **required**
  * ParallelDataProperties
    * Arn
    * CreatedAt
    * Description
    * EncryptionKey [EncryptionKey](#encryptionkey)
    * FailedRecordCount
    * ImportedDataSize
    * ImportedRecordCount
    * LastUpdatedAt
    * LatestUpdateAttemptAt
    * LatestUpdateAttemptStatus
    * Message
    * Name
    * ParallelDataConfig
      * Format **required**
      * S3Uri **required**
    * SkippedRecordCount
    * SourceLanguageCode
    * Status
    * TargetLanguageCodes
      * items [LanguageCodeString](#languagecodestring)

### GetTerminologyRequest
* GetTerminologyRequest `object`
  * Name **required**
  * TerminologyDataFormat **required**

### GetTerminologyResponse
* GetTerminologyResponse `object`
  * TerminologyDataLocation
    * Location **required**
    * RepositoryType **required**
  * TerminologyProperties
    * Arn
    * CreatedAt
    * Description
    * EncryptionKey
      * Id **required**
      * Type **required**
    * LastUpdatedAt
    * Name
    * SizeBytes
    * SourceLanguageCode
    * TargetLanguageCodes
      * items [LanguageCodeString](#languagecodestring)
    * TermCount

### IamRoleArn
* IamRoleArn `string`

### ImportTerminologyRequest
* ImportTerminologyRequest `object`
  * Description
  * EncryptionKey
    * Id **required**
    * Type **required**
  * MergeStrategy **required**
  * Name **required**
  * TerminologyData **required**
    * File **required**
    * Format **required**

### ImportTerminologyResponse
* ImportTerminologyResponse `object`
  * TerminologyProperties
    * Arn
    * CreatedAt
    * Description
    * EncryptionKey
      * Id **required**
      * Type **required**
    * LastUpdatedAt
    * Name
    * SizeBytes
    * SourceLanguageCode
    * TargetLanguageCodes
      * items [LanguageCodeString](#languagecodestring)
    * TermCount

### InputDataConfig
* InputDataConfig `object`: The input configuration properties for requesting a batch translation job.
  * ContentType **required**
  * S3Uri **required**

### Integer
* Integer `integer`

### InternalServerException


### InvalidFilterException


### InvalidParameterValueException


### InvalidRequestException


### JobDetails
* JobDetails `object`: The number of documents successfully and unsuccessfully processed during a translation job.
  * DocumentsWithErrorsCount
  * InputDocumentsCount
  * TranslatedDocumentsCount

### JobId
* JobId `string`

### JobName
* JobName `string`

### JobStatus
* JobStatus `string` (values: SUBMITTED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERROR, FAILED, STOP_REQUESTED, STOPPED)

### LanguageCodeString
* LanguageCodeString `string`

### LanguageCodeStringList
* LanguageCodeStringList `array`
  * items [LanguageCodeString](#languagecodestring)

### LimitExceededException


### ListParallelDataRequest
* ListParallelDataRequest `object`
  * MaxResults
  * NextToken

### ListParallelDataResponse
* ListParallelDataResponse `object`
  * NextToken
  * ParallelDataPropertiesList
    * items [ParallelDataProperties](#paralleldataproperties)

### ListTerminologiesRequest
* ListTerminologiesRequest `object`
  * MaxResults
  * NextToken

### ListTerminologiesResponse
* ListTerminologiesResponse `object`
  * NextToken
  * TerminologyPropertiesList
    * items [TerminologyProperties](#terminologyproperties)

### ListTextTranslationJobsRequest
* ListTextTranslationJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmittedAfterTime
    * SubmittedBeforeTime
  * MaxResults
  * NextToken

### ListTextTranslationJobsResponse
* ListTextTranslationJobsResponse `object`
  * NextToken
  * TextTranslationJobPropertiesList
    * items [TextTranslationJobProperties](#texttranslationjobproperties)

### Long
* Long `integer`

### MaxResultsInteger
* MaxResultsInteger `integer`

### MergeStrategy
* MergeStrategy `string` (values: OVERWRITE)

### NextToken
* NextToken `string`

### OutputDataConfig
* OutputDataConfig `object`: The output configuration properties for a batch translation job.
  * S3Uri **required**

### ParallelDataArn
* ParallelDataArn `string`

### ParallelDataConfig
* ParallelDataConfig `object`: Specifies the format and S3 location of the parallel data input file.
  * Format **required**
  * S3Uri **required**

### ParallelDataDataLocation
* ParallelDataDataLocation `object`: The location of the most recent parallel data input file that was successfully imported into Amazon Translate.
  * Location **required**
  * RepositoryType **required**

### ParallelDataFormat
* ParallelDataFormat `string` (values: TSV, CSV, TMX)

### ParallelDataProperties
* ParallelDataProperties `object`: The properties of a parallel data resource.
  * Arn
  * CreatedAt
  * Description
  * EncryptionKey [EncryptionKey](#encryptionkey)
  * FailedRecordCount
  * ImportedDataSize
  * ImportedRecordCount
  * LastUpdatedAt
  * LatestUpdateAttemptAt
  * LatestUpdateAttemptStatus
  * Message
  * Name
  * ParallelDataConfig
    * Format **required**
    * S3Uri **required**
  * SkippedRecordCount
  * SourceLanguageCode
  * Status
  * TargetLanguageCodes
    * items [LanguageCodeString](#languagecodestring)

### ParallelDataPropertiesList
* ParallelDataPropertiesList `array`
  * items [ParallelDataProperties](#paralleldataproperties)

### ParallelDataStatus
* ParallelDataStatus `string` (values: CREATING, UPDATING, ACTIVE, DELETING, FAILED)

### ResourceName
* ResourceName `string`

### ResourceNameList
* ResourceNameList `array`
  * items [ResourceName](#resourcename)

### ResourceNotFoundException


### S3Uri
* S3Uri `string`

### ServiceUnavailableException


### StartTextTranslationJobRequest
* StartTextTranslationJobRequest `object`
  * ClientToken **required**
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * ContentType **required**
    * S3Uri **required**
  * JobName
  * OutputDataConfig **required**
    * S3Uri **required**
  * ParallelDataNames
    * items [ResourceName](#resourcename)
  * SourceLanguageCode **required**
  * TargetLanguageCodes **required**
    * items [LanguageCodeString](#languagecodestring)
  * TerminologyNames
    * items [ResourceName](#resourcename)

### StartTextTranslationJobResponse
* StartTextTranslationJobResponse `object`
  * JobId
  * JobStatus

### StopTextTranslationJobRequest
* StopTextTranslationJobRequest `object`
  * JobId **required**

### StopTextTranslationJobResponse
* StopTextTranslationJobResponse `object`
  * JobId
  * JobStatus

### String
* String `string`

### TargetLanguageCodeStringList
* TargetLanguageCodeStringList `array`
  * items [LanguageCodeString](#languagecodestring)

### Term
* Term `object`: The term being translated by the custom terminology.
  * SourceText
  * TargetText

### TermList
* TermList `array`
  * items [Term](#term)

### TerminologyArn
* TerminologyArn `string`

### TerminologyData
* TerminologyData `object`: The data associated with the custom terminology.
  * File **required**
  * Format **required**

### TerminologyDataFormat
* TerminologyDataFormat `string` (values: CSV, TMX)

### TerminologyDataLocation
* TerminologyDataLocation `object`: The location of the custom terminology data.
  * Location **required**
  * RepositoryType **required**

### TerminologyFile
* TerminologyFile `string`

### TerminologyProperties
* TerminologyProperties `object`: The properties of the custom terminology.
  * Arn
  * CreatedAt
  * Description
  * EncryptionKey
    * Id **required**
    * Type **required**
  * LastUpdatedAt
  * Name
  * SizeBytes
  * SourceLanguageCode
  * TargetLanguageCodes
    * items [LanguageCodeString](#languagecodestring)
  * TermCount

### TerminologyPropertiesList
* TerminologyPropertiesList `array`
  * items [TerminologyProperties](#terminologyproperties)

### TextSizeLimitExceededException


### TextTranslationJobFilter
* TextTranslationJobFilter `object`: Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>.
  * JobName
  * JobStatus
  * SubmittedAfterTime
  * SubmittedBeforeTime

### TextTranslationJobProperties
* TextTranslationJobProperties `object`: Provides information about a translation job.
  * DataAccessRoleArn
  * EndTime
  * InputDataConfig
    * ContentType **required**
    * S3Uri **required**
  * JobDetails
    * DocumentsWithErrorsCount
    * InputDocumentsCount
    * TranslatedDocumentsCount
  * JobId
  * JobName
  * JobStatus
  * Message
  * OutputDataConfig
    * S3Uri **required**
  * ParallelDataNames
    * items [ResourceName](#resourcename)
  * SourceLanguageCode
  * SubmittedTime
  * TargetLanguageCodes
    * items [LanguageCodeString](#languagecodestring)
  * TerminologyNames
    * items [ResourceName](#resourcename)

### TextTranslationJobPropertiesList
* TextTranslationJobPropertiesList `array`
  * items [TextTranslationJobProperties](#texttranslationjobproperties)

### Timestamp
* Timestamp `string`

### TooManyRequestsException


### TranslateTextRequest
* TranslateTextRequest `object`
  * SourceLanguageCode **required**
  * TargetLanguageCode **required**
  * TerminologyNames
    * items [ResourceName](#resourcename)
  * Text **required**

### TranslateTextResponse
* TranslateTextResponse `object`
  * AppliedTerminologies
    * items [AppliedTerminology](#appliedterminology)
  * SourceLanguageCode **required**
  * TargetLanguageCode **required**
  * TranslatedText **required**

### UnboundedLengthString
* UnboundedLengthString `string`

### UnsupportedLanguagePairException


### UpdateParallelDataRequest
* UpdateParallelDataRequest `object`
  * ClientToken **required**
  * Description
  * Name **required**
  * ParallelDataConfig **required**
    * Format **required**
    * S3Uri **required**

### UpdateParallelDataResponse
* UpdateParallelDataResponse `object`
  * LatestUpdateAttemptAt
  * LatestUpdateAttemptStatus
  * Name
  * Status


