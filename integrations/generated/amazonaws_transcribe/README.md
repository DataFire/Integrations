# @datafire/amazonaws_transcribe

Client library for Amazon Transcribe Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_transcribe
```
```js
let amazonaws_transcribe = require('@datafire/amazonaws_transcribe').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Operations and objects for transcribing speech to text.

## Actions

### CreateLanguageModel



```js
amazonaws_transcribe.CreateLanguageModel({
  "LanguageCode": null,
  "BaseModelName": null,
  "ModelName": null,
  "InputDataConfig": null
}, context)
```

#### Input
* input `object`
  * BaseModelName **required**
  * InputDataConfig **required**
    * DataAccessRoleArn **required**
    * S3Uri **required**
    * TuningDataS3Uri
  * LanguageCode **required**
  * ModelName **required**

#### Output
* output [CreateLanguageModelResponse](#createlanguagemodelresponse)

### CreateMedicalVocabulary



```js
amazonaws_transcribe.CreateMedicalVocabulary({
  "VocabularyName": null,
  "LanguageCode": null,
  "VocabularyFileUri": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * VocabularyFileUri **required**
  * VocabularyName **required**

#### Output
* output [CreateMedicalVocabularyResponse](#createmedicalvocabularyresponse)

### CreateVocabulary



```js
amazonaws_transcribe.CreateVocabulary({
  "VocabularyName": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * Phrases
    * items [Phrase](#phrase)
  * VocabularyFileUri
  * VocabularyName **required**

#### Output
* output [CreateVocabularyResponse](#createvocabularyresponse)

### CreateVocabularyFilter



```js
amazonaws_transcribe.CreateVocabularyFilter({
  "VocabularyFilterName": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * VocabularyFilterFileUri
  * VocabularyFilterName **required**
  * Words
    * items [Word](#word)

#### Output
* output [CreateVocabularyFilterResponse](#createvocabularyfilterresponse)

### DeleteLanguageModel



```js
amazonaws_transcribe.DeleteLanguageModel({
  "ModelName": null
}, context)
```

#### Input
* input `object`
  * ModelName **required**

#### Output
*Output schema unknown*

### DeleteMedicalTranscriptionJob



```js
amazonaws_transcribe.DeleteMedicalTranscriptionJob({
  "MedicalTranscriptionJobName": null
}, context)
```

#### Input
* input `object`
  * MedicalTranscriptionJobName **required**

#### Output
*Output schema unknown*

### DeleteMedicalVocabulary



```js
amazonaws_transcribe.DeleteMedicalVocabulary({
  "VocabularyName": null
}, context)
```

#### Input
* input `object`
  * VocabularyName **required**

#### Output
*Output schema unknown*

### DeleteTranscriptionJob



```js
amazonaws_transcribe.DeleteTranscriptionJob({
  "TranscriptionJobName": null
}, context)
```

#### Input
* input `object`
  * TranscriptionJobName **required**

#### Output
*Output schema unknown*

### DeleteVocabulary



```js
amazonaws_transcribe.DeleteVocabulary({
  "VocabularyName": null
}, context)
```

#### Input
* input `object`
  * VocabularyName **required**

#### Output
*Output schema unknown*

### DeleteVocabularyFilter



```js
amazonaws_transcribe.DeleteVocabularyFilter({
  "VocabularyFilterName": null
}, context)
```

#### Input
* input `object`
  * VocabularyFilterName **required**

#### Output
*Output schema unknown*

### DescribeLanguageModel



```js
amazonaws_transcribe.DescribeLanguageModel({
  "ModelName": null
}, context)
```

#### Input
* input `object`
  * ModelName **required**

#### Output
* output [DescribeLanguageModelResponse](#describelanguagemodelresponse)

### GetMedicalTranscriptionJob



```js
amazonaws_transcribe.GetMedicalTranscriptionJob({
  "MedicalTranscriptionJobName": null
}, context)
```

#### Input
* input `object`
  * MedicalTranscriptionJobName **required**

#### Output
* output [GetMedicalTranscriptionJobResponse](#getmedicaltranscriptionjobresponse)

### GetMedicalVocabulary



```js
amazonaws_transcribe.GetMedicalVocabulary({
  "VocabularyName": null
}, context)
```

#### Input
* input `object`
  * VocabularyName **required**

#### Output
* output [GetMedicalVocabularyResponse](#getmedicalvocabularyresponse)

### GetTranscriptionJob



```js
amazonaws_transcribe.GetTranscriptionJob({
  "TranscriptionJobName": null
}, context)
```

#### Input
* input `object`
  * TranscriptionJobName **required**

#### Output
* output [GetTranscriptionJobResponse](#gettranscriptionjobresponse)

### GetVocabulary



```js
amazonaws_transcribe.GetVocabulary({
  "VocabularyName": null
}, context)
```

#### Input
* input `object`
  * VocabularyName **required**

#### Output
* output [GetVocabularyResponse](#getvocabularyresponse)

### GetVocabularyFilter



```js
amazonaws_transcribe.GetVocabularyFilter({
  "VocabularyFilterName": null
}, context)
```

#### Input
* input `object`
  * VocabularyFilterName **required**

#### Output
* output [GetVocabularyFilterResponse](#getvocabularyfilterresponse)

### ListLanguageModels



```js
amazonaws_transcribe.ListLanguageModels({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NameContains
  * NextToken
  * StatusEquals

#### Output
* output [ListLanguageModelsResponse](#listlanguagemodelsresponse)

### ListMedicalTranscriptionJobs



```js
amazonaws_transcribe.ListMedicalTranscriptionJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobNameContains
  * MaxResults
  * NextToken
  * Status

#### Output
* output [ListMedicalTranscriptionJobsResponse](#listmedicaltranscriptionjobsresponse)

### ListMedicalVocabularies



```js
amazonaws_transcribe.ListMedicalVocabularies({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NameContains
  * NextToken
  * StateEquals

#### Output
* output [ListMedicalVocabulariesResponse](#listmedicalvocabulariesresponse)

### ListTranscriptionJobs



```js
amazonaws_transcribe.ListTranscriptionJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobNameContains
  * MaxResults
  * NextToken
  * Status

#### Output
* output [ListTranscriptionJobsResponse](#listtranscriptionjobsresponse)

### ListVocabularies



```js
amazonaws_transcribe.ListVocabularies({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NameContains
  * NextToken
  * StateEquals

#### Output
* output [ListVocabulariesResponse](#listvocabulariesresponse)

### ListVocabularyFilters



```js
amazonaws_transcribe.ListVocabularyFilters({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NameContains
  * NextToken

#### Output
* output [ListVocabularyFiltersResponse](#listvocabularyfiltersresponse)

### StartMedicalTranscriptionJob



```js
amazonaws_transcribe.StartMedicalTranscriptionJob({
  "MedicalTranscriptionJobName": null,
  "LanguageCode": null,
  "Media": {},
  "OutputBucketName": null,
  "Specialty": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * Media **required** [Media](#media)
  * MediaFormat
  * MediaSampleRateHertz
  * MedicalTranscriptionJobName **required**
  * OutputBucketName **required**
  * OutputEncryptionKMSKeyId
  * OutputKey
  * Settings
    * ChannelIdentification
    * MaxAlternatives
    * MaxSpeakerLabels
    * ShowAlternatives
    * ShowSpeakerLabels
    * VocabularyName
  * Specialty **required**
  * Type **required**

#### Output
* output [StartMedicalTranscriptionJobResponse](#startmedicaltranscriptionjobresponse)

### StartTranscriptionJob



```js
amazonaws_transcribe.StartTranscriptionJob({
  "TranscriptionJobName": null,
  "Media": null
}, context)
```

#### Input
* input `object`
  * ContentRedaction
    * RedactionOutput **required**
    * RedactionType **required**
  * IdentifyLanguage
  * JobExecutionSettings
    * AllowDeferredExecution
    * DataAccessRoleArn
  * LanguageCode
  * LanguageOptions
    * items [LanguageCode](#languagecode)
  * Media **required**
    * MediaFileUri
  * MediaFormat
  * MediaSampleRateHertz
  * ModelSettings
    * LanguageModelName
  * OutputBucketName
  * OutputEncryptionKMSKeyId
  * OutputKey
  * Settings
    * ChannelIdentification
    * MaxAlternatives
    * MaxSpeakerLabels
    * ShowAlternatives
    * ShowSpeakerLabels
    * VocabularyFilterMethod
    * VocabularyFilterName
    * VocabularyName
  * TranscriptionJobName **required**

#### Output
* output [StartTranscriptionJobResponse](#starttranscriptionjobresponse)

### UpdateMedicalVocabulary



```js
amazonaws_transcribe.UpdateMedicalVocabulary({
  "VocabularyName": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * VocabularyFileUri
  * VocabularyName **required**

#### Output
* output [UpdateMedicalVocabularyResponse](#updatemedicalvocabularyresponse)

### UpdateVocabulary



```js
amazonaws_transcribe.UpdateVocabulary({
  "VocabularyName": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * Phrases
    * items [Phrase](#phrase)
  * VocabularyFileUri
  * VocabularyName **required**

#### Output
* output [UpdateVocabularyResponse](#updatevocabularyresponse)

### UpdateVocabularyFilter



```js
amazonaws_transcribe.UpdateVocabularyFilter({
  "VocabularyFilterName": null
}, context)
```

#### Input
* input `object`
  * VocabularyFilterFileUri
  * VocabularyFilterName **required**
  * Words
    * items [Word](#word)

#### Output
* output [UpdateVocabularyFilterResponse](#updatevocabularyfilterresponse)



## Definitions

### BadRequestException


### BaseModelName
* BaseModelName `string` (values: NarrowBand, WideBand)

### Boolean
* Boolean `boolean`

### CLMLanguageCode
* CLMLanguageCode `string` (values: en-US)

### ConflictException


### ContentRedaction
* ContentRedaction `object`: Settings for content redaction within a transcription job.
  * RedactionOutput **required**
  * RedactionType **required**

### CreateLanguageModelRequest
* CreateLanguageModelRequest `object`
  * BaseModelName **required**
  * InputDataConfig **required**
    * DataAccessRoleArn **required**
    * S3Uri **required**
    * TuningDataS3Uri
  * LanguageCode **required**
  * ModelName **required**

### CreateLanguageModelResponse
* CreateLanguageModelResponse `object`
  * BaseModelName
  * InputDataConfig
    * DataAccessRoleArn **required**
    * S3Uri **required**
    * TuningDataS3Uri
  * LanguageCode
  * ModelName
  * ModelStatus

### CreateMedicalVocabularyRequest
* CreateMedicalVocabularyRequest `object`
  * LanguageCode **required**
  * VocabularyFileUri **required**
  * VocabularyName **required**

### CreateMedicalVocabularyResponse
* CreateMedicalVocabularyResponse `object`
  * FailureReason
  * LanguageCode
  * LastModifiedTime
  * VocabularyName
  * VocabularyState

### CreateVocabularyFilterRequest
* CreateVocabularyFilterRequest `object`
  * LanguageCode **required**
  * VocabularyFilterFileUri
  * VocabularyFilterName **required**
  * Words
    * items [Word](#word)

### CreateVocabularyFilterResponse
* CreateVocabularyFilterResponse `object`
  * LanguageCode
  * LastModifiedTime
  * VocabularyFilterName

### CreateVocabularyRequest
* CreateVocabularyRequest `object`
  * LanguageCode **required**
  * Phrases
    * items [Phrase](#phrase)
  * VocabularyFileUri
  * VocabularyName **required**

### CreateVocabularyResponse
* CreateVocabularyResponse `object`
  * FailureReason
  * LanguageCode
  * LastModifiedTime
  * VocabularyName
  * VocabularyState

### DataAccessRoleArn
* DataAccessRoleArn `string`

### DateTime
* DateTime `string`

### DeleteLanguageModelRequest
* DeleteLanguageModelRequest `object`
  * ModelName **required**

### DeleteMedicalTranscriptionJobRequest
* DeleteMedicalTranscriptionJobRequest `object`
  * MedicalTranscriptionJobName **required**

### DeleteMedicalVocabularyRequest
* DeleteMedicalVocabularyRequest `object`
  * VocabularyName **required**

### DeleteTranscriptionJobRequest
* DeleteTranscriptionJobRequest `object`
  * TranscriptionJobName **required**

### DeleteVocabularyFilterRequest
* DeleteVocabularyFilterRequest `object`
  * VocabularyFilterName **required**

### DeleteVocabularyRequest
* DeleteVocabularyRequest `object`
  * VocabularyName **required**

### DescribeLanguageModelRequest
* DescribeLanguageModelRequest `object`
  * ModelName **required**

### DescribeLanguageModelResponse
* DescribeLanguageModelResponse `object`
  * LanguageModel
    * BaseModelName
    * CreateTime
    * FailureReason
    * InputDataConfig
      * DataAccessRoleArn **required**
      * S3Uri **required**
      * TuningDataS3Uri
    * LanguageCode
    * LastModifiedTime
    * ModelName
    * ModelStatus
    * UpgradeAvailability

### FailureReason
* FailureReason `string`

### GetMedicalTranscriptionJobRequest
* GetMedicalTranscriptionJobRequest `object`
  * MedicalTranscriptionJobName **required**

### GetMedicalTranscriptionJobResponse
* GetMedicalTranscriptionJobResponse `object`
  * MedicalTranscriptionJob
    * CompletionTime
    * CreationTime
    * FailureReason
    * LanguageCode
    * Media [Media](#media)
    * MediaFormat
    * MediaSampleRateHertz
    * MedicalTranscriptionJobName
    * Settings
      * ChannelIdentification
      * MaxAlternatives
      * MaxSpeakerLabels
      * ShowAlternatives
      * ShowSpeakerLabels
      * VocabularyName
    * Specialty
    * StartTime
    * Transcript
      * TranscriptFileUri
    * TranscriptionJobStatus
    * Type

### GetMedicalVocabularyRequest
* GetMedicalVocabularyRequest `object`
  * VocabularyName **required**

### GetMedicalVocabularyResponse
* GetMedicalVocabularyResponse `object`
  * DownloadUri
  * FailureReason
  * LanguageCode
  * LastModifiedTime
  * VocabularyName
  * VocabularyState

### GetTranscriptionJobRequest
* GetTranscriptionJobRequest `object`
  * TranscriptionJobName **required**

### GetTranscriptionJobResponse
* GetTranscriptionJobResponse `object`
  * TranscriptionJob
    * CompletionTime
    * ContentRedaction
      * RedactionOutput **required**
      * RedactionType **required**
    * CreationTime
    * FailureReason
    * IdentifiedLanguageScore
    * IdentifyLanguage
    * JobExecutionSettings
      * AllowDeferredExecution
      * DataAccessRoleArn
    * LanguageCode
    * LanguageOptions
      * items [LanguageCode](#languagecode)
    * Media
      * MediaFileUri
    * MediaFormat
    * MediaSampleRateHertz
    * ModelSettings
      * LanguageModelName
    * Settings
      * ChannelIdentification
      * MaxAlternatives
      * MaxSpeakerLabels
      * ShowAlternatives
      * ShowSpeakerLabels
      * VocabularyFilterMethod
      * VocabularyFilterName
      * VocabularyName
    * StartTime
    * Transcript
      * RedactedTranscriptFileUri
      * TranscriptFileUri
    * TranscriptionJobName
    * TranscriptionJobStatus

### GetVocabularyFilterRequest
* GetVocabularyFilterRequest `object`
  * VocabularyFilterName **required**

### GetVocabularyFilterResponse
* GetVocabularyFilterResponse `object`
  * DownloadUri
  * LanguageCode
  * LastModifiedTime
  * VocabularyFilterName

### GetVocabularyRequest
* GetVocabularyRequest `object`
  * VocabularyName **required**

### GetVocabularyResponse
* GetVocabularyResponse `object`
  * DownloadUri
  * FailureReason
  * LanguageCode
  * LastModifiedTime
  * VocabularyName
  * VocabularyState

### IdentifiedLanguageScore
* IdentifiedLanguageScore `number`

### InputDataConfig
* InputDataConfig `object`: The object that contains the Amazon S3 object location and access role required to train and tune your custom language model.
  * DataAccessRoleArn **required**
  * S3Uri **required**
  * TuningDataS3Uri

### InternalFailureException


### JobExecutionSettings
* JobExecutionSettings `object`: Provides information about when a transcription job should be executed.
  * AllowDeferredExecution
  * DataAccessRoleArn

### KMSKeyId
* KMSKeyId `string`

### LanguageCode
* LanguageCode `string` (values: af-ZA, ar-AE, ar-SA, cy-GB, da-DK, de-CH, de-DE, en-AB, en-AU, en-GB, en-IE, en-IN, en-US, en-WL, es-ES, es-US, fa-IR, fr-CA, fr-FR, ga-IE, gd-GB, he-IL, hi-IN, id-ID, it-IT, ja-JP, ko-KR, ms-MY, nl-NL, pt-BR, pt-PT, ru-RU, ta-IN, te-IN, tr-TR, zh-CN)

### LanguageModel
* LanguageModel `object`: The structure used to describe a custom language model.
  * BaseModelName
  * CreateTime
  * FailureReason
  * InputDataConfig
    * DataAccessRoleArn **required**
    * S3Uri **required**
    * TuningDataS3Uri
  * LanguageCode
  * LastModifiedTime
  * ModelName
  * ModelStatus
  * UpgradeAvailability

### LanguageOptions
* LanguageOptions `array`
  * items [LanguageCode](#languagecode)

### LimitExceededException


### ListLanguageModelsRequest
* ListLanguageModelsRequest `object`
  * MaxResults
  * NameContains
  * NextToken
  * StatusEquals

### ListLanguageModelsResponse
* ListLanguageModelsResponse `object`
  * Models
    * items [LanguageModel](#languagemodel)
  * NextToken

### ListMedicalTranscriptionJobsRequest
* ListMedicalTranscriptionJobsRequest `object`
  * JobNameContains
  * MaxResults
  * NextToken
  * Status

### ListMedicalTranscriptionJobsResponse
* ListMedicalTranscriptionJobsResponse `object`
  * MedicalTranscriptionJobSummaries
    * items [MedicalTranscriptionJobSummary](#medicaltranscriptionjobsummary)
  * NextToken
  * Status

### ListMedicalVocabulariesRequest
* ListMedicalVocabulariesRequest `object`
  * MaxResults
  * NameContains
  * NextToken
  * StateEquals

### ListMedicalVocabulariesResponse
* ListMedicalVocabulariesResponse `object`
  * NextToken
  * Status
  * Vocabularies
    * items [VocabularyInfo](#vocabularyinfo)

### ListTranscriptionJobsRequest
* ListTranscriptionJobsRequest `object`
  * JobNameContains
  * MaxResults
  * NextToken
  * Status

### ListTranscriptionJobsResponse
* ListTranscriptionJobsResponse `object`
  * NextToken
  * Status
  * TranscriptionJobSummaries
    * items [TranscriptionJobSummary](#transcriptionjobsummary)

### ListVocabulariesRequest
* ListVocabulariesRequest `object`
  * MaxResults
  * NameContains
  * NextToken
  * StateEquals

### ListVocabulariesResponse
* ListVocabulariesResponse `object`
  * NextToken
  * Status
  * Vocabularies
    * items [VocabularyInfo](#vocabularyinfo)

### ListVocabularyFiltersRequest
* ListVocabularyFiltersRequest `object`
  * MaxResults
  * NameContains
  * NextToken

### ListVocabularyFiltersResponse
* ListVocabularyFiltersResponse `object`
  * NextToken
  * VocabularyFilters
    * items [VocabularyFilterInfo](#vocabularyfilterinfo)

### MaxAlternatives
* MaxAlternatives `integer`

### MaxResults
* MaxResults `integer`

### MaxSpeakers
* MaxSpeakers `integer`

### Media
* Media `object`: Describes the input media file in a transcription request.
  * MediaFileUri

### MediaFormat
* MediaFormat `string` (values: mp3, mp4, wav, flac, ogg, amr, webm)

### MediaSampleRateHertz
* MediaSampleRateHertz `integer`

### MedicalTranscript
* MedicalTranscript `object`: Identifies the location of a medical transcript.
  * TranscriptFileUri

### MedicalTranscriptionJob
* MedicalTranscriptionJob `object`: The data structure that contains the information for a medical transcription job.
  * CompletionTime
  * CreationTime
  * FailureReason
  * LanguageCode
  * Media [Media](#media)
  * MediaFormat
  * MediaSampleRateHertz
  * MedicalTranscriptionJobName
  * Settings
    * ChannelIdentification
    * MaxAlternatives
    * MaxSpeakerLabels
    * ShowAlternatives
    * ShowSpeakerLabels
    * VocabularyName
  * Specialty
  * StartTime
  * Transcript
    * TranscriptFileUri
  * TranscriptionJobStatus
  * Type

### MedicalTranscriptionJobSummaries
* MedicalTranscriptionJobSummaries `array`
  * items [MedicalTranscriptionJobSummary](#medicaltranscriptionjobsummary)

### MedicalTranscriptionJobSummary
* MedicalTranscriptionJobSummary `object`: Provides summary information about a transcription job.
  * CompletionTime
  * CreationTime
  * FailureReason
  * LanguageCode
  * MedicalTranscriptionJobName
  * OutputLocationType
  * Specialty
  * StartTime
  * TranscriptionJobStatus
  * Type

### MedicalTranscriptionSetting
* MedicalTranscriptionSetting `object`: Optional settings for the <a>StartMedicalTranscriptionJob</a> operation.
  * ChannelIdentification
  * MaxAlternatives
  * MaxSpeakerLabels
  * ShowAlternatives
  * ShowSpeakerLabels
  * VocabularyName

### ModelName
* ModelName `string`

### ModelSettings
* ModelSettings `object`: The object used to call your custom language model to your transcription job.
  * LanguageModelName

### ModelStatus
* ModelStatus `string` (values: IN_PROGRESS, FAILED, COMPLETED)

### Models
* Models `array`
  * items [LanguageModel](#languagemodel)

### NextToken
* NextToken `string`

### NotFoundException


### OutputBucketName
* OutputBucketName `string`

### OutputKey
* OutputKey `string`

### OutputLocationType
* OutputLocationType `string` (values: CUSTOMER_BUCKET, SERVICE_BUCKET)

### Phrase
* Phrase `string`

### Phrases
* Phrases `array`
  * items [Phrase](#phrase)

### RedactionOutput
* RedactionOutput `string` (values: redacted, redacted_and_unredacted)

### RedactionType
* RedactionType `string` (values: PII)

### Settings
* Settings `object`: Provides optional settings for the <code>StartTranscriptionJob</code> operation.
  * ChannelIdentification
  * MaxAlternatives
  * MaxSpeakerLabels
  * ShowAlternatives
  * ShowSpeakerLabels
  * VocabularyFilterMethod
  * VocabularyFilterName
  * VocabularyName

### Specialty
* Specialty `string` (values: PRIMARYCARE)

### StartMedicalTranscriptionJobRequest
* StartMedicalTranscriptionJobRequest `object`
  * LanguageCode **required**
  * Media **required** [Media](#media)
  * MediaFormat
  * MediaSampleRateHertz
  * MedicalTranscriptionJobName **required**
  * OutputBucketName **required**
  * OutputEncryptionKMSKeyId
  * OutputKey
  * Settings
    * ChannelIdentification
    * MaxAlternatives
    * MaxSpeakerLabels
    * ShowAlternatives
    * ShowSpeakerLabels
    * VocabularyName
  * Specialty **required**
  * Type **required**

### StartMedicalTranscriptionJobResponse
* StartMedicalTranscriptionJobResponse `object`
  * MedicalTranscriptionJob
    * CompletionTime
    * CreationTime
    * FailureReason
    * LanguageCode
    * Media [Media](#media)
    * MediaFormat
    * MediaSampleRateHertz
    * MedicalTranscriptionJobName
    * Settings
      * ChannelIdentification
      * MaxAlternatives
      * MaxSpeakerLabels
      * ShowAlternatives
      * ShowSpeakerLabels
      * VocabularyName
    * Specialty
    * StartTime
    * Transcript
      * TranscriptFileUri
    * TranscriptionJobStatus
    * Type

### StartTranscriptionJobRequest
* StartTranscriptionJobRequest `object`
  * ContentRedaction
    * RedactionOutput **required**
    * RedactionType **required**
  * IdentifyLanguage
  * JobExecutionSettings
    * AllowDeferredExecution
    * DataAccessRoleArn
  * LanguageCode
  * LanguageOptions
    * items [LanguageCode](#languagecode)
  * Media **required**
    * MediaFileUri
  * MediaFormat
  * MediaSampleRateHertz
  * ModelSettings
    * LanguageModelName
  * OutputBucketName
  * OutputEncryptionKMSKeyId
  * OutputKey
  * Settings
    * ChannelIdentification
    * MaxAlternatives
    * MaxSpeakerLabels
    * ShowAlternatives
    * ShowSpeakerLabels
    * VocabularyFilterMethod
    * VocabularyFilterName
    * VocabularyName
  * TranscriptionJobName **required**

### StartTranscriptionJobResponse
* StartTranscriptionJobResponse `object`
  * TranscriptionJob
    * CompletionTime
    * ContentRedaction
      * RedactionOutput **required**
      * RedactionType **required**
    * CreationTime
    * FailureReason
    * IdentifiedLanguageScore
    * IdentifyLanguage
    * JobExecutionSettings
      * AllowDeferredExecution
      * DataAccessRoleArn
    * LanguageCode
    * LanguageOptions
      * items [LanguageCode](#languagecode)
    * Media
      * MediaFileUri
    * MediaFormat
    * MediaSampleRateHertz
    * ModelSettings
      * LanguageModelName
    * Settings
      * ChannelIdentification
      * MaxAlternatives
      * MaxSpeakerLabels
      * ShowAlternatives
      * ShowSpeakerLabels
      * VocabularyFilterMethod
      * VocabularyFilterName
      * VocabularyName
    * StartTime
    * Transcript
      * RedactedTranscriptFileUri
      * TranscriptFileUri
    * TranscriptionJobName
    * TranscriptionJobStatus

### Transcript
* Transcript `object`: Identifies the location of a transcription.
  * RedactedTranscriptFileUri
  * TranscriptFileUri

### TranscriptionJob
* TranscriptionJob `object`: Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation. 
  * CompletionTime
  * ContentRedaction
    * RedactionOutput **required**
    * RedactionType **required**
  * CreationTime
  * FailureReason
  * IdentifiedLanguageScore
  * IdentifyLanguage
  * JobExecutionSettings
    * AllowDeferredExecution
    * DataAccessRoleArn
  * LanguageCode
  * LanguageOptions
    * items [LanguageCode](#languagecode)
  * Media
    * MediaFileUri
  * MediaFormat
  * MediaSampleRateHertz
  * ModelSettings
    * LanguageModelName
  * Settings
    * ChannelIdentification
    * MaxAlternatives
    * MaxSpeakerLabels
    * ShowAlternatives
    * ShowSpeakerLabels
    * VocabularyFilterMethod
    * VocabularyFilterName
    * VocabularyName
  * StartTime
  * Transcript
    * RedactedTranscriptFileUri
    * TranscriptFileUri
  * TranscriptionJobName
  * TranscriptionJobStatus

### TranscriptionJobName
* TranscriptionJobName `string`

### TranscriptionJobStatus
* TranscriptionJobStatus `string` (values: QUEUED, IN_PROGRESS, FAILED, COMPLETED)

### TranscriptionJobSummaries
* TranscriptionJobSummaries `array`
  * items [TranscriptionJobSummary](#transcriptionjobsummary)

### TranscriptionJobSummary
* TranscriptionJobSummary `object`: Provides a summary of information about a transcription job.
  * CompletionTime
  * ContentRedaction
    * RedactionOutput **required**
    * RedactionType **required**
  * CreationTime
  * FailureReason
  * IdentifiedLanguageScore
  * IdentifyLanguage
  * LanguageCode
  * ModelSettings [ModelSettings](#modelsettings)
  * OutputLocationType
  * StartTime
  * TranscriptionJobName
  * TranscriptionJobStatus

### Type
* Type `string` (values: CONVERSATION, DICTATION)

### UpdateMedicalVocabularyRequest
* UpdateMedicalVocabularyRequest `object`
  * LanguageCode **required**
  * VocabularyFileUri
  * VocabularyName **required**

### UpdateMedicalVocabularyResponse
* UpdateMedicalVocabularyResponse `object`
  * LanguageCode
  * LastModifiedTime
  * VocabularyName
  * VocabularyState

### UpdateVocabularyFilterRequest
* UpdateVocabularyFilterRequest `object`
  * VocabularyFilterFileUri
  * VocabularyFilterName **required**
  * Words
    * items [Word](#word)

### UpdateVocabularyFilterResponse
* UpdateVocabularyFilterResponse `object`
  * LanguageCode
  * LastModifiedTime
  * VocabularyFilterName

### UpdateVocabularyRequest
* UpdateVocabularyRequest `object`
  * LanguageCode **required**
  * Phrases
    * items [Phrase](#phrase)
  * VocabularyFileUri
  * VocabularyName **required**

### UpdateVocabularyResponse
* UpdateVocabularyResponse `object`
  * LanguageCode
  * LastModifiedTime
  * VocabularyName
  * VocabularyState

### Uri
* Uri `string`

### Vocabularies
* Vocabularies `array`
  * items [VocabularyInfo](#vocabularyinfo)

### VocabularyFilterInfo
* VocabularyFilterInfo `object`: Provides information about a vocabulary filter.
  * LanguageCode
  * LastModifiedTime
  * VocabularyFilterName

### VocabularyFilterMethod
* VocabularyFilterMethod `string` (values: remove, mask)

### VocabularyFilterName
* VocabularyFilterName `string`

### VocabularyFilters
* VocabularyFilters `array`
  * items [VocabularyFilterInfo](#vocabularyfilterinfo)

### VocabularyInfo
* VocabularyInfo `object`: Provides information about a custom vocabulary. 
  * LanguageCode
  * LastModifiedTime
  * VocabularyName
  * VocabularyState

### VocabularyName
* VocabularyName `string`

### VocabularyState
* VocabularyState `string` (values: PENDING, READY, FAILED)

### Word
* Word `string`

### Words
* Words `array`
  * items [Word](#word)


