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

amazonaws_transcribe.GetTranscriptionJob({
  "TranscriptionJobName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Operations and objects for transcribing speech to text.

## Actions

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

### ListTranscriptionJobs



```js
amazonaws_transcribe.ListTranscriptionJobs({
  "Status": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * Status **required** [TranscriptionJobStatus](#transcriptionjobstatus)

#### Output
* output [ListTranscriptionJobsResponse](#listtranscriptionjobsresponse)

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
  * TranscriptionJobName **required** [TranscriptionJobName](#transcriptionjobname)

#### Output
* output [StartTranscriptionJobResponse](#starttranscriptionjobresponse)



## Definitions

### BadRequestException
* BadRequestException `object`: There is a problem with one of the input fields. Check the S3 bucket name, make sure that the job name is not a duplicate, and confirm that you are using the correct file format. Then resend your request.
  * Message [FailureReason](#failurereason)

### ConflictException
* ConflictException `object`: The <code>JobName</code> field is a duplicate of a previously entered job name. Resend your request with a different name.
  * Message [String](#string)

### DateTime
* DateTime `string`

### FailureReason
* FailureReason `string`

### GetTranscriptionJobRequest
* GetTranscriptionJobRequest `object`
  * TranscriptionJobName **required** [TranscriptionJobName](#transcriptionjobname)

### GetTranscriptionJobResponse
* GetTranscriptionJobResponse `object`
  * TranscriptionJob [TranscriptionJob](#transcriptionjob)

### InternalFailureException
* InternalFailureException `object`: There was an internal error. Check the error message and try your request again.
  * Message [String](#string)

### LanguageCode
* LanguageCode `string` (values: en-US, es-US)

### LimitExceededException
* LimitExceededException `object`: Either you have sent too many requests or your input file is longer than 2 hours. Wait before you resend your request, or use a smaller file and resend the request.
  * Message [String](#string)

### ListTranscriptionJobsRequest
* ListTranscriptionJobsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * Status **required** [TranscriptionJobStatus](#transcriptionjobstatus)

### ListTranscriptionJobsResponse
* ListTranscriptionJobsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Status [TranscriptionJobStatus](#transcriptionjobstatus)
  * TranscriptionJobSummaries [TranscriptionJobSummaries](#transcriptionjobsummaries)

### MaxResults
* MaxResults `integer`

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
* NotFoundException `object`: We can't find the requested job. Check the job name and try your request again.
  * Message [String](#string)

### StartTranscriptionJobRequest
* StartTranscriptionJobRequest `object`
  * LanguageCode **required** [LanguageCode](#languagecode)
  * Media **required** [Media](#media)
  * MediaFormat **required** [MediaFormat](#mediaformat)
  * MediaSampleRateHertz [MediaSampleRateHertz](#mediasampleratehertz)
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

### Uri
* Uri `string`


