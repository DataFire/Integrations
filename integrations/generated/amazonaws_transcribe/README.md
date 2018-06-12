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

amazonaws_transcribe.CreateVocabulary({
  "VocabularyName": "",
  "LanguageCode": "",
  "Phrases": []
}).then(data => {
  console.log(data);
});
```

## Description

Operations and objects for transcribing speech to text.

## Actions

### CreateVocabulary



```js
amazonaws_transcribe.CreateVocabulary({
  "VocabularyName": "",
  "LanguageCode": "",
  "Phrases": []
}, context)
```

#### Input
* input `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Phrases **required** [Phrases](#phrases)
  * VocabularyName **required** [VocabularyName](#vocabularyname)

#### Output
* output [CreateVocabularyResponse](#createvocabularyresponse)

### DeleteVocabulary



```js
amazonaws_transcribe.DeleteVocabulary({
  "VocabularyName": ""
}, context)
```

#### Input
* input `object`
  * VocabularyName **required** [VocabularyName](#vocabularyname)

#### Output
*Output schema unknown*

### GetTranscriptionJob



```js
amazonaws_transcribe.GetTranscriptionJob({
  "TranscriptionJobName": ""
}, context)
```

#### Input
* input `object`
  * TranscriptionJobName **required** [TranscriptionJobName](#transcriptionjobname)

#### Output
* output [GetTranscriptionJobResponse](#gettranscriptionjobresponse)

### GetVocabulary



```js
amazonaws_transcribe.GetVocabulary({
  "VocabularyName": ""
}, context)
```

#### Input
* input `object`
  * VocabularyName **required** [VocabularyName](#vocabularyname)

#### Output
* output [GetVocabularyResponse](#getvocabularyresponse)

### ListTranscriptionJobs



```js
amazonaws_transcribe.ListTranscriptionJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * JobNameContains [TranscriptionJobName](#transcriptionjobname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * Status [TranscriptionJobStatus](#transcriptionjobstatus)

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
  * MaxResults [MaxResults](#maxresults)
  * NameContains [VocabularyName](#vocabularyname)
  * NextToken [NextToken](#nexttoken)
  * StateEquals [VocabularyState](#vocabularystate)

#### Output
* output [ListVocabulariesResponse](#listvocabulariesresponse)

### StartTranscriptionJob



```js
amazonaws_transcribe.StartTranscriptionJob({
  "TranscriptionJobName": "",
  "LanguageCode": "",
  "MediaFormat": "",
  "Media": {}
}, context)
```

#### Input
* input `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Media **required** [Media](#media)
  * MediaFormat **required** [MediaFormat](#mediaformat)
  * MediaSampleRateHertz [MediaSampleRateHertz](#mediasampleratehertz)
  * Settings [Settings](#settings)
  * TranscriptionJobName **required** [TranscriptionJobName](#transcriptionjobname)

#### Output
* output [StartTranscriptionJobResponse](#starttranscriptionjobresponse)

### UpdateVocabulary



```js
amazonaws_transcribe.UpdateVocabulary({
  "VocabularyName": "",
  "LanguageCode": "",
  "Phrases": []
}, context)
```

#### Input
* input `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Phrases **required** [Phrases](#phrases)
  * VocabularyName **required** [VocabularyName](#vocabularyname)

#### Output
* output [UpdateVocabularyResponse](#updatevocabularyresponse)



## Definitions

### BadRequestException
* BadRequestException `object`: Your request didn't pass one or more validation tests. For example, a name already exists when createing a resource or a name may not exist when getting a transcription job or custom vocabulary. See the exception <code>Message</code> field for more information.
  * Message [FailureReason](#failurereason)

### Boolean
* Boolean `boolean`

### ConflictException
* ConflictException `object`: The <code>JobName</code> field is a duplicate of a previously entered job name. Resend your request with a different name.
  * Message [String](#string)

### CreateVocabularyRequest
* CreateVocabularyRequest `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Phrases **required** [Phrases](#phrases)
  * VocabularyName **required** [VocabularyName](#vocabularyname)

### CreateVocabularyResponse
* CreateVocabularyResponse `object`
  * FailureReason [FailureReason](#failurereason)
  * LanguageCode [LanguageCode](#languagecode)
  * LastModifiedTime [DateTime](#datetime)
  * VocabularyName [VocabularyName](#vocabularyname)
  * VocabularyState [VocabularyState](#vocabularystate)

### DateTime
* DateTime `string`

### DeleteVocabularyRequest
* DeleteVocabularyRequest `object`
  * VocabularyName **required** [VocabularyName](#vocabularyname)

### FailureReason
* FailureReason `string`

### GetTranscriptionJobRequest
* GetTranscriptionJobRequest `object`
  * TranscriptionJobName **required** [TranscriptionJobName](#transcriptionjobname)

### GetTranscriptionJobResponse
* GetTranscriptionJobResponse `object`
  * TranscriptionJob [TranscriptionJob](#transcriptionjob)

### GetVocabularyRequest
* GetVocabularyRequest `object`
  * VocabularyName **required** [VocabularyName](#vocabularyname)

### GetVocabularyResponse
* GetVocabularyResponse `object`
  * DownloadUri [Uri](#uri)
  * FailureReason [FailureReason](#failurereason)
  * LanguageCode [LanguageCode](#languagecode)
  * LastModifiedTime [DateTime](#datetime)
  * VocabularyName [VocabularyName](#vocabularyname)
  * VocabularyState [VocabularyState](#vocabularystate)

### InternalFailureException
* InternalFailureException `object`: There was an internal error. Check the error message and try your request again.
  * Message [String](#string)

### LanguageCode
* LanguageCode `string` (values: en-US, es-US)

### LimitExceededException
* LimitExceededException `object`: Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.
  * Message [String](#string)

### ListTranscriptionJobsRequest
* ListTranscriptionJobsRequest `object`
  * JobNameContains [TranscriptionJobName](#transcriptionjobname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * Status [TranscriptionJobStatus](#transcriptionjobstatus)

### ListTranscriptionJobsResponse
* ListTranscriptionJobsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Status [TranscriptionJobStatus](#transcriptionjobstatus)
  * TranscriptionJobSummaries [TranscriptionJobSummaries](#transcriptionjobsummaries)

### ListVocabulariesRequest
* ListVocabulariesRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NameContains [VocabularyName](#vocabularyname)
  * NextToken [NextToken](#nexttoken)
  * StateEquals [VocabularyState](#vocabularystate)

### ListVocabulariesResponse
* ListVocabulariesResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Status [TranscriptionJobStatus](#transcriptionjobstatus)
  * Vocabularies [Vocabularies](#vocabularies)

### MaxResults
* MaxResults `integer`

### MaxSpeakers
* MaxSpeakers `integer`

### Media
* Media `object`: Describes the input media file in a transcription request.
  * MediaFileUri [Uri](#uri)

### MediaFormat
* MediaFormat `string` (values: mp3, mp4, wav, flac)

### MediaSampleRateHertz
* MediaSampleRateHertz `integer`

### NextToken
* NextToken `string`

### NotFoundException
* NotFoundException `object`: We can't find the requested transcription job or custom vocabulary. Check the name and try your request again.
  * Message [String](#string)

### Phrase
* Phrase `string`

### Phrases
* Phrases `array`
  * items [Phrase](#phrase)

### Settings
* Settings `object`: Provides optional settings for the <code>StartTranscriptionJob</code> operation.
  * MaxSpeakerLabels [MaxSpeakers](#maxspeakers)
  * ShowSpeakerLabels [Boolean](#boolean)
  * VocabularyName [VocabularyName](#vocabularyname)

### StartTranscriptionJobRequest
* StartTranscriptionJobRequest `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Media **required** [Media](#media)
  * MediaFormat **required** [MediaFormat](#mediaformat)
  * MediaSampleRateHertz [MediaSampleRateHertz](#mediasampleratehertz)
  * Settings [Settings](#settings)
  * TranscriptionJobName **required** [TranscriptionJobName](#transcriptionjobname)

### StartTranscriptionJobResponse
* StartTranscriptionJobResponse `object`
  * TranscriptionJob [TranscriptionJob](#transcriptionjob)

### String
* String `string`

### Transcript
* Transcript `object`: Describes the output of a transcription job.
  * TranscriptFileUri [Uri](#uri)

### TranscriptionJob
* TranscriptionJob `object`: Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation.
  * CompletionTime [DateTime](#datetime)
  * CreationTime [DateTime](#datetime)
  * FailureReason [FailureReason](#failurereason)
  * LanguageCode [LanguageCode](#languagecode)
  * Media [Media](#media)
  * MediaFormat [MediaFormat](#mediaformat)
  * MediaSampleRateHertz [MediaSampleRateHertz](#mediasampleratehertz)
  * Settings [Settings](#settings)
  * Transcript [Transcript](#transcript)
  * TranscriptionJobName [TranscriptionJobName](#transcriptionjobname)
  * TranscriptionJobStatus [TranscriptionJobStatus](#transcriptionjobstatus)

### TranscriptionJobName
* TranscriptionJobName `string`

### TranscriptionJobStatus
* TranscriptionJobStatus `string` (values: IN_PROGRESS, FAILED, COMPLETED)

### TranscriptionJobSummaries
* TranscriptionJobSummaries `array`
  * items [TranscriptionJobSummary](#transcriptionjobsummary)

### TranscriptionJobSummary
* TranscriptionJobSummary `object`: Provides a summary of information about a transcription job.
  * CompletionTime [DateTime](#datetime)
  * CreationTime [DateTime](#datetime)
  * FailureReason [FailureReason](#failurereason)
  * LanguageCode [LanguageCode](#languagecode)
  * TranscriptionJobName [TranscriptionJobName](#transcriptionjobname)
  * TranscriptionJobStatus [TranscriptionJobStatus](#transcriptionjobstatus)

### UpdateVocabularyRequest
* UpdateVocabularyRequest `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Phrases **required** [Phrases](#phrases)
  * VocabularyName **required** [VocabularyName](#vocabularyname)

### UpdateVocabularyResponse
* UpdateVocabularyResponse `object`
  * LanguageCode [LanguageCode](#languagecode)
  * LastModifiedTime [DateTime](#datetime)
  * VocabularyName [VocabularyName](#vocabularyname)
  * VocabularyState [VocabularyState](#vocabularystate)

### Uri
* Uri `string`

### Vocabularies
* Vocabularies `array`
  * items [VocabularyInfo](#vocabularyinfo)

### VocabularyInfo
* VocabularyInfo `object`: Provides information about a custom vocabulary.
  * LanguageCode [LanguageCode](#languagecode)
  * LastModifiedTime [DateTime](#datetime)
  * VocabularyName [VocabularyName](#vocabularyname)
  * VocabularyState [VocabularyState](#vocabularystate)

### VocabularyName
* VocabularyName `string`

### VocabularyState
* VocabularyState `string` (values: PENDING, READY, FAILED)


