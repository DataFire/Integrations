# @datafire/amazonaws_elastictranscoder

Client library for Amazon Elastic Transcoder

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_elastictranscoder
```
```js
let amazonaws_elastictranscoder = require('@datafire/amazonaws_elastictranscoder').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Elastic Transcoder Service</fullname> <p>The AWS Elastic Transcoder Service.</p>

## Actions

### CreateJob



```js
amazonaws_elastictranscoder.CreateJob({
  "PipelineId": ""
}, context)
```

#### Input
* input `object`
  * Input `object`: Information about the file that you're transcoding.
    * AspectRatio
    * Container
    * DetectedProperties
      * DurationMillis
      * FileSize
      * FrameRate
      * Height
      * Width
    * Encryption
      * InitializationVector
      * Key
      * KeyMd5
      * Mode
    * FrameRate
    * InputCaptions
      * CaptionSources
        * items [CaptionSource](#captionsource)
      * MergePolicy
    * Interlaced
    * Key
    * Resolution
    * TimeSpan
      * Duration
      * StartTime
  * Inputs `array`: A section of the request body that provides information about the files that are being transcoded.
    * items [JobInput](#jobinput)
  * Output `object`: The <code>CreateJobOutput</code> structure.
    * AlbumArt
      * Artwork
        * items [Artwork](#artwork)
      * MergePolicy
    * Captions
      * CaptionFormats
        * items [CaptionFormat](#captionformat)
      * CaptionSources
        * items [CaptionSource](#captionsource)
      * MergePolicy
    * Composition
      * items [Clip](#clip)
    * Encryption
      * InitializationVector
      * Key
      * KeyMd5
      * Mode
    * Key
    * PresetId
    * Rotate
    * SegmentDuration
    * ThumbnailEncryption
      * InitializationVector
      * Key
      * KeyMd5
      * Mode
    * ThumbnailPattern
    * Watermarks
      * items [JobWatermark](#jobwatermark)
  * OutputKeyPrefix `string`: The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job creates, including output files, thumbnails, and playlists.
  * Outputs `array`:  A section of the request body that provides information about the transcoded (target) files. We recommend that you use the <code>Outputs</code> syntax instead of the <code>Output</code> syntax. 
    * items [CreateJobOutput](#createjoboutput)
  * PipelineId **required** `string`: The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the files to transcode and the bucket into which Elastic Transcoder puts the transcoded files.
  * Playlists `array`: <p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create.</p> <p>The maximum number of master playlists in a job is 30.</p>
    * items [CreateJobPlaylist](#createjobplaylist)
  * UserMetadata `object`: User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job. Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same order in which you specify them.

#### Output
*Output schema unknown*

### CancelJob



```js
amazonaws_elastictranscoder.CancelJob({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### ReadJob



```js
amazonaws_elastictranscoder.ReadJob({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [ReadJobResponse](#readjobresponse)

### ListJobsByPipeline



```js
amazonaws_elastictranscoder.ListJobsByPipeline({
  "PipelineId": ""
}, context)
```

#### Input
* input `object`
  * PipelineId **required** `string`
  * Ascending `string`
  * PageToken `string`

#### Output
* output [ListJobsByPipelineResponse](#listjobsbypipelineresponse)

### ListJobsByStatus



```js
amazonaws_elastictranscoder.ListJobsByStatus({
  "Status": ""
}, context)
```

#### Input
* input `object`
  * Status **required** `string`
  * Ascending `string`
  * PageToken `string`

#### Output
* output [ListJobsByStatusResponse](#listjobsbystatusresponse)

### ListPipelines



```js
amazonaws_elastictranscoder.ListPipelines({}, context)
```

#### Input
* input `object`
  * Ascending `string`
  * PageToken `string`

#### Output
* output [ListPipelinesResponse](#listpipelinesresponse)

### CreatePipeline



```js
amazonaws_elastictranscoder.CreatePipeline({
  "Name": "",
  "InputBucket": "",
  "Role": ""
}, context)
```

#### Input
* input `object`
  * AwsKmsKeyArn `string`: <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>
  * ContentConfig `object`: The <code>PipelineOutputConfig</code> structure.
    * Bucket
    * Permissions
      * items [Permission](#permission)
    * StorageClass
  * InputBucket **required** `string`: The Amazon S3 bucket in which you saved the media files that you want to transcode.
  * Name **required** `string`: <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters.</p>
  * Notifications `object`: <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
    * Completed
    * Error
    * Progressing
    * Warning
  * OutputBucket `string`: <p>The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. (Use this, or use ContentConfig:Bucket plus ThumbnailConfig:Bucket.)</p> <p>Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files. </p> <important> <p>When Elastic Transcoder saves files in <code>OutputBucket</code>, it grants full control over the files only to the AWS account that owns the role that is specified by <code>Role</code>.</p> </important> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit <code>OutputBucket</code> and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead.</p>
  * Role **required** `string`: The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to create the pipeline.
  * ThumbnailConfig `object`: The <code>PipelineOutputConfig</code> structure.
    * Bucket
    * Permissions
      * items [Permission](#permission)
    * StorageClass

#### Output
*Output schema unknown*

### DeletePipeline



```js
amazonaws_elastictranscoder.DeletePipeline({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### ReadPipeline



```js
amazonaws_elastictranscoder.ReadPipeline({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [ReadPipelineResponse](#readpipelineresponse)

### UpdatePipeline



```js
amazonaws_elastictranscoder.UpdatePipeline({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * AwsKmsKeyArn `string`: <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>
  * ContentConfig `object`: The <code>PipelineOutputConfig</code> structure.
    * Bucket
    * Permissions
      * items [Permission](#permission)
    * StorageClass
  * InputBucket `string`: The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.
  * Name `string`: <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters</p>
  * Notifications `object`: <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
    * Completed
    * Error
    * Progressing
    * Warning
  * Role `string`: The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.
  * ThumbnailConfig `object`: The <code>PipelineOutputConfig</code> structure.
    * Bucket
    * Permissions
      * items [Permission](#permission)
    * StorageClass

#### Output
* output [UpdatePipelineResponse](#updatepipelineresponse)

### UpdatePipelineNotifications



```js
amazonaws_elastictranscoder.UpdatePipelineNotifications({
  "Id": "",
  "Notifications": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Notifications **required** `object`: <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
    * Completed
    * Error
    * Progressing
    * Warning

#### Output
* output [UpdatePipelineNotificationsResponse](#updatepipelinenotificationsresponse)

### UpdatePipelineStatus



```js
amazonaws_elastictranscoder.UpdatePipelineStatus({
  "Id": "",
  "Status": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Status **required** `string`: <p>The desired status of the pipeline:</p> <ul> <li> <p> <code>Active</code>: The pipeline is processing jobs.</p> </li> <li> <p> <code>Paused</code>: The pipeline is not currently processing jobs.</p> </li> </ul>

#### Output
* output [UpdatePipelineStatusResponse](#updatepipelinestatusresponse)

### ListPresets



```js
amazonaws_elastictranscoder.ListPresets({}, context)
```

#### Input
* input `object`
  * Ascending `string`
  * PageToken `string`

#### Output
* output [ListPresetsResponse](#listpresetsresponse)

### CreatePreset



```js
amazonaws_elastictranscoder.CreatePreset({
  "Name": "",
  "Container": ""
}, context)
```

#### Input
* input `object`
  * Audio `object`: Parameters required for transcoding audio.
    * AudioPackingMode
    * BitRate
    * Channels
    * Codec
    * CodecOptions
      * BitDepth
      * BitOrder
      * Profile
      * Signed
    * SampleRate
  * Container **required** `string`: The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.
  * Description `string`: A description of the preset.
  * Name **required** `string`: The name of the preset. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.
  * Thumbnails `object`: Thumbnails for videos.
    * AspectRatio
    * Format
    * Interval
    * MaxHeight
    * MaxWidth
    * PaddingPolicy
    * Resolution
    * SizingPolicy
  * Video `object`: The <code>VideoParameters</code> structure.
    * AspectRatio
    * BitRate
    * Codec
    * CodecOptions
    * DisplayAspectRatio
    * FixedGOP
    * FrameRate
    * KeyframesMaxDist
    * MaxFrameRate
    * MaxHeight
    * MaxWidth
    * PaddingPolicy
    * Resolution
    * SizingPolicy
    * Watermarks
      * items [PresetWatermark](#presetwatermark)

#### Output
*Output schema unknown*

### DeletePreset



```js
amazonaws_elastictranscoder.DeletePreset({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### ReadPreset



```js
amazonaws_elastictranscoder.ReadPreset({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [ReadPresetResponse](#readpresetresponse)

### TestRole



```js
amazonaws_elastictranscoder.TestRole({
  "Role": "",
  "InputBucket": "",
  "OutputBucket": "",
  "Topics": []
}, context)
```

#### Input
* input `object`
  * InputBucket **required** `string`: The Amazon S3 bucket that contains media files to be transcoded. The action attempts to read from this bucket.
  * OutputBucket **required** `string`: The Amazon S3 bucket that Elastic Transcoder writes transcoded media files to. The action attempts to read from this bucket.
  * Role **required** `string`: The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to test.
  * Topics **required** `array`: The ARNs of one or more Amazon Simple Notification Service (Amazon SNS) topics that you want the action to send a test notification to.
    * items [SnsTopic](#snstopic)

#### Output
* output [TestRoleResponse](#testroleresponse)



## Definitions

### AccessControl
* AccessControl `string`

### AccessControls
* AccessControls `array`
  * items [AccessControl](#accesscontrol)

### AccessDeniedException


### Artwork
* Artwork `object`: <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p>
  * AlbumArtFormat
  * Encryption
    * InitializationVector
    * Key
    * KeyMd5
    * Mode
  * InputKey
  * MaxHeight
  * MaxWidth
  * PaddingPolicy
  * SizingPolicy

### Artworks
* Artworks `array`
  * items [Artwork](#artwork)

### Ascending
* Ascending `string`

### AspectRatio
* AspectRatio `string`

### AudioBitDepth
* AudioBitDepth `string`

### AudioBitOrder
* AudioBitOrder `string`

### AudioBitRate
* AudioBitRate `string`

### AudioChannels
* AudioChannels `string`

### AudioCodec
* AudioCodec `string`

### AudioCodecOptions
* AudioCodecOptions `object`: Options associated with your audio codec.
  * BitDepth
  * BitOrder
  * Profile
  * Signed

### AudioCodecProfile
* AudioCodecProfile `string`

### AudioPackingMode
* AudioPackingMode `string`

### AudioParameters
* AudioParameters `object`: Parameters required for transcoding audio.
  * AudioPackingMode
  * BitRate
  * Channels
  * Codec
  * CodecOptions
    * BitDepth
    * BitOrder
    * Profile
    * Signed
  * SampleRate

### AudioSampleRate
* AudioSampleRate `string`

### AudioSigned
* AudioSigned `string`

### Base64EncodedString
* Base64EncodedString `string`

### BucketName
* BucketName `string`

### CancelJobRequest
* CancelJobRequest `object`: The <code>CancelJobRequest</code> structure.

### CancelJobResponse
* CancelJobResponse `object`: The response body contains a JSON object. If the job is successfully canceled, the value of <code>Success</code> is <code>true</code>.

### CaptionFormat
* CaptionFormat `object`: The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error.
  * Encryption
    * InitializationVector
    * Key
    * KeyMd5
    * Mode
  * Format
  * Pattern

### CaptionFormatFormat
* CaptionFormatFormat `string`

### CaptionFormatPattern
* CaptionFormatPattern `string`

### CaptionFormats
* CaptionFormats `array`
  * items [CaptionFormat](#captionformat)

### CaptionMergePolicy
* CaptionMergePolicy `string`

### CaptionSource
* CaptionSource `object`: A source file for the input sidecar captions used during the transcoding process.
  * Encryption
    * InitializationVector
    * Key
    * KeyMd5
    * Mode
  * Key
  * Label
  * Language
  * TimeOffset

### CaptionSources
* CaptionSources `array`
  * items [CaptionSource](#captionsource)

### Captions
* Captions `object`: The captions to be created, if any.
  * CaptionFormats
    * items [CaptionFormat](#captionformat)
  * CaptionSources
    * items [CaptionSource](#captionsource)
  * MergePolicy

### Clip
* Clip `object`: Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.
  * TimeSpan
    * Duration
    * StartTime

### CodecOption
* CodecOption `string`

### CodecOptions
* CodecOptions `object`

### Composition
* Composition `array`
  * items [Clip](#clip)

### CreateJobOutput
* CreateJobOutput `object`: The <code>CreateJobOutput</code> structure.
  * AlbumArt
    * Artwork
      * items [Artwork](#artwork)
    * MergePolicy
  * Captions
    * CaptionFormats
      * items [CaptionFormat](#captionformat)
    * CaptionSources
      * items [CaptionSource](#captionsource)
    * MergePolicy
  * Composition
    * items [Clip](#clip)
  * Encryption
    * InitializationVector
    * Key
    * KeyMd5
    * Mode
  * Key
  * PresetId
  * Rotate
  * SegmentDuration
  * ThumbnailEncryption
    * InitializationVector
    * Key
    * KeyMd5
    * Mode
  * ThumbnailPattern
  * Watermarks
    * items [JobWatermark](#jobwatermark)

### CreateJobOutputs
* CreateJobOutputs `array`
  * items [CreateJobOutput](#createjoboutput)

### CreateJobPlaylist
* CreateJobPlaylist `object`: Information about the master playlist.
  * Format
  * HlsContentProtection
    * InitializationVector
    * Key
    * KeyMd5
    * KeyStoragePolicy
    * LicenseAcquisitionUrl
    * Method
  * Name
  * OutputKeys
    * items [Key](#key)
  * PlayReadyDrm
    * Format
    * InitializationVector
    * Key
    * KeyId
    * KeyMd5
    * LicenseAcquisitionUrl

### CreateJobPlaylists
* CreateJobPlaylists `array`
  * items [CreateJobPlaylist](#createjobplaylist)

### CreateJobRequest
* CreateJobRequest `object`: The <code>CreateJobRequest</code> structure.
  * Input
    * AspectRatio
    * Container
    * DetectedProperties
      * DurationMillis
      * FileSize
      * FrameRate
      * Height
      * Width
    * Encryption
      * InitializationVector
      * Key
      * KeyMd5
      * Mode
    * FrameRate
    * InputCaptions
      * CaptionSources
        * items [CaptionSource](#captionsource)
      * MergePolicy
    * Interlaced
    * Key
    * Resolution
    * TimeSpan
      * Duration
      * StartTime
  * Inputs
    * items [JobInput](#jobinput)
  * Output
    * AlbumArt
      * Artwork
        * items [Artwork](#artwork)
      * MergePolicy
    * Captions
      * CaptionFormats
        * items [CaptionFormat](#captionformat)
      * CaptionSources
        * items [CaptionSource](#captionsource)
      * MergePolicy
    * Composition
      * items [Clip](#clip)
    * Encryption
      * InitializationVector
      * Key
      * KeyMd5
      * Mode
    * Key
    * PresetId
    * Rotate
    * SegmentDuration
    * ThumbnailEncryption
      * InitializationVector
      * Key
      * KeyMd5
      * Mode
    * ThumbnailPattern
    * Watermarks
      * items [JobWatermark](#jobwatermark)
  * OutputKeyPrefix
  * Outputs
    * items [CreateJobOutput](#createjoboutput)
  * PipelineId **required**
  * Playlists
    * items [CreateJobPlaylist](#createjobplaylist)
  * UserMetadata

### CreateJobResponse
* CreateJobResponse `object`: The CreateJobResponse structure.
  * Job
    * Arn
    * Id
    * Input
      * AspectRatio
      * Container
      * DetectedProperties
        * DurationMillis
        * FileSize
        * FrameRate
        * Height
        * Width
      * Encryption
        * InitializationVector
        * Key
        * KeyMd5
        * Mode
      * FrameRate
      * InputCaptions
        * CaptionSources
          * items [CaptionSource](#captionsource)
        * MergePolicy
      * Interlaced
      * Key
      * Resolution
      * TimeSpan
        * Duration
        * StartTime
    * Inputs
      * items [JobInput](#jobinput)
    * Output
      * AlbumArt
        * Artwork
          * items [Artwork](#artwork)
        * MergePolicy
      * AppliedColorSpaceConversion
      * Captions
        * CaptionFormats
          * items [CaptionFormat](#captionformat)
        * CaptionSources
          * items [CaptionSource](#captionsource)
        * MergePolicy
      * Composition
        * items [Clip](#clip)
      * Duration
      * DurationMillis
      * Encryption
        * InitializationVector
        * Key
        * KeyMd5
        * Mode
      * FileSize
      * FrameRate
      * Height
      * Id
      * Key
      * PresetId
      * Rotate
      * SegmentDuration
      * Status
      * StatusDetail
      * ThumbnailEncryption
        * InitializationVector
        * Key
        * KeyMd5
        * Mode
      * ThumbnailPattern
      * Watermarks
        * items [JobWatermark](#jobwatermark)
      * Width
    * OutputKeyPrefix
    * Outputs
      * items [JobOutput](#joboutput)
    * PipelineId
    * Playlists
      * items [Playlist](#playlist)
    * Status
    * Timing
      * FinishTimeMillis
      * StartTimeMillis
      * SubmitTimeMillis
    * UserMetadata

### CreatePipelineRequest
* CreatePipelineRequest `object`: The <code>CreatePipelineRequest</code> structure.
  * AwsKmsKeyArn
  * ContentConfig
    * Bucket
    * Permissions
      * items [Permission](#permission)
    * StorageClass
  * InputBucket **required**
  * Name **required**
  * Notifications
    * Completed
    * Error
    * Progressing
    * Warning
  * OutputBucket
  * Role **required**
  * ThumbnailConfig
    * Bucket
    * Permissions
      * items [Permission](#permission)
    * StorageClass

### CreatePipelineResponse
* CreatePipelineResponse `object`: When you create a pipeline, Elastic Transcoder returns the values that you specified in the request.
  * Pipeline
    * Arn
    * AwsKmsKeyArn
    * ContentConfig
      * Bucket
      * Permissions
        * items [Permission](#permission)
      * StorageClass
    * Id
    * InputBucket
    * Name
    * Notifications
      * Completed
      * Error
      * Progressing
      * Warning
    * OutputBucket
    * Role
    * Status
    * ThumbnailConfig
      * Bucket
      * Permissions
        * items [Permission](#permission)
      * StorageClass
  * Warnings
    * items [Warning](#warning)

### CreatePresetRequest
* CreatePresetRequest `object`: The <code>CreatePresetRequest</code> structure.
  * Audio
    * AudioPackingMode
    * BitRate
    * Channels
    * Codec
    * CodecOptions
      * BitDepth
      * BitOrder
      * Profile
      * Signed
    * SampleRate
  * Container **required**
  * Description
  * Name **required**
  * Thumbnails
    * AspectRatio
    * Format
    * Interval
    * MaxHeight
    * MaxWidth
    * PaddingPolicy
    * Resolution
    * SizingPolicy
  * Video
    * AspectRatio
    * BitRate
    * Codec
    * CodecOptions
    * DisplayAspectRatio
    * FixedGOP
    * FrameRate
    * KeyframesMaxDist
    * MaxFrameRate
    * MaxHeight
    * MaxWidth
    * PaddingPolicy
    * Resolution
    * SizingPolicy
    * Watermarks
      * items [PresetWatermark](#presetwatermark)

### CreatePresetResponse
* CreatePresetResponse `object`: The <code>CreatePresetResponse</code> structure.
  * Preset
    * Arn
    * Audio
      * AudioPackingMode
      * BitRate
      * Channels
      * Codec
      * CodecOptions
        * BitDepth
        * BitOrder
        * Profile
        * Signed
      * SampleRate
    * Container
    * Description
    * Id
    * Name
    * Thumbnails
      * AspectRatio
      * Format
      * Interval
      * MaxHeight
      * MaxWidth
      * PaddingPolicy
      * Resolution
      * SizingPolicy
    * Type
    * Video
      * AspectRatio
      * BitRate
      * Codec
      * CodecOptions
      * DisplayAspectRatio
      * FixedGOP
      * FrameRate
      * KeyframesMaxDist
      * MaxFrameRate
      * MaxHeight
      * MaxWidth
      * PaddingPolicy
      * Resolution
      * SizingPolicy
      * Watermarks
        * items [PresetWatermark](#presetwatermark)
  * Warning

### DeletePipelineRequest
* DeletePipelineRequest `object`: The <code>DeletePipelineRequest</code> structure.

### DeletePipelineResponse
* DeletePipelineResponse `object`: The <code>DeletePipelineResponse</code> structure.

### DeletePresetRequest
* DeletePresetRequest `object`: The <code>DeletePresetRequest</code> structure.

### DeletePresetResponse
* DeletePresetResponse `object`: The <code>DeletePresetResponse</code> structure.

### Description
* Description `string`

### DetectedProperties
* DetectedProperties `object`: The detected properties of the input file. Elastic Transcoder identifies these values from the input file.
  * DurationMillis
  * FileSize
  * FrameRate
  * Height
  * Width

### Digits
* Digits `string`

### DigitsOrAuto
* DigitsOrAuto `string`

### Encryption
* Encryption `object`: The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files.
  * InitializationVector
  * Key
  * KeyMd5
  * Mode

### EncryptionMode
* EncryptionMode `string`

### ExceptionMessages
* ExceptionMessages `array`
  * items [String](#string)

### Filename
* Filename `string`

### FixedGOP
* FixedGOP `string`

### FloatString
* FloatString `string`

### FrameRate
* FrameRate `string`

### Grantee
* Grantee `string`

### GranteeType
* GranteeType `string`

### HlsContentProtection
* HlsContentProtection `object`: The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files.
  * InitializationVector
  * Key
  * KeyMd5
  * KeyStoragePolicy
  * LicenseAcquisitionUrl
  * Method

### HlsContentProtectionMethod
* HlsContentProtectionMethod `string`

### HorizontalAlign
* HorizontalAlign `string`

### Id
* Id `string`

### IncompatibleVersionException


### InputCaptions
* InputCaptions `object`: The captions to be created, if any.
  * CaptionSources
    * items [CaptionSource](#captionsource)
  * MergePolicy

### Interlaced
* Interlaced `string`

### InternalServiceException


### Job
* Job `object`: A section of the response body that provides information about the job that is created.
  * Arn
  * Id
  * Input
    * AspectRatio
    * Container
    * DetectedProperties
      * DurationMillis
      * FileSize
      * FrameRate
      * Height
      * Width
    * Encryption
      * InitializationVector
      * Key
      * KeyMd5
      * Mode
    * FrameRate
    * InputCaptions
      * CaptionSources
        * items [CaptionSource](#captionsource)
      * MergePolicy
    * Interlaced
    * Key
    * Resolution
    * TimeSpan
      * Duration
      * StartTime
  * Inputs
    * items [JobInput](#jobinput)
  * Output
    * AlbumArt
      * Artwork
        * items [Artwork](#artwork)
      * MergePolicy
    * AppliedColorSpaceConversion
    * Captions
      * CaptionFormats
        * items [CaptionFormat](#captionformat)
      * CaptionSources
        * items [CaptionSource](#captionsource)
      * MergePolicy
    * Composition
      * items [Clip](#clip)
    * Duration
    * DurationMillis
    * Encryption
      * InitializationVector
      * Key
      * KeyMd5
      * Mode
    * FileSize
    * FrameRate
    * Height
    * Id
    * Key
    * PresetId
    * Rotate
    * SegmentDuration
    * Status
    * StatusDetail
    * ThumbnailEncryption
      * InitializationVector
      * Key
      * KeyMd5
      * Mode
    * ThumbnailPattern
    * Watermarks
      * items [JobWatermark](#jobwatermark)
    * Width
  * OutputKeyPrefix
  * Outputs
    * items [JobOutput](#joboutput)
  * PipelineId
  * Playlists
    * items [Playlist](#playlist)
  * Status
  * Timing
    * FinishTimeMillis
    * StartTimeMillis
    * SubmitTimeMillis
  * UserMetadata

### JobAlbumArt
* JobAlbumArt `object`: The .jpg or .png file associated with an audio file.
  * Artwork
    * items [Artwork](#artwork)
  * MergePolicy

### JobContainer
* JobContainer `string`

### JobInput
* JobInput `object`: Information about the file that you're transcoding.
  * AspectRatio
  * Container
  * DetectedProperties
    * DurationMillis
    * FileSize
    * FrameRate
    * Height
    * Width
  * Encryption
    * InitializationVector
    * Key
    * KeyMd5
    * Mode
  * FrameRate
  * InputCaptions
    * CaptionSources
      * items [CaptionSource](#captionsource)
    * MergePolicy
  * Interlaced
  * Key
  * Resolution
  * TimeSpan
    * Duration
    * StartTime

### JobInputs
* JobInputs `array`
  * items [JobInput](#jobinput)

### JobOutput
* JobOutput `object`: <important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p>
  * AlbumArt
    * Artwork
      * items [Artwork](#artwork)
    * MergePolicy
  * AppliedColorSpaceConversion
  * Captions
    * CaptionFormats
      * items [CaptionFormat](#captionformat)
    * CaptionSources
      * items [CaptionSource](#captionsource)
    * MergePolicy
  * Composition
    * items [Clip](#clip)
  * Duration
  * DurationMillis
  * Encryption
    * InitializationVector
    * Key
    * KeyMd5
    * Mode
  * FileSize
  * FrameRate
  * Height
  * Id
  * Key
  * PresetId
  * Rotate
  * SegmentDuration
  * Status
  * StatusDetail
  * ThumbnailEncryption
    * InitializationVector
    * Key
    * KeyMd5
    * Mode
  * ThumbnailPattern
  * Watermarks
    * items [JobWatermark](#jobwatermark)
  * Width

### JobOutputs
* JobOutputs `array`
  * items [JobOutput](#joboutput)

### JobStatus
* JobStatus `string`

### JobWatermark
* JobWatermark `object`: Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.
  * Encryption
    * InitializationVector
    * Key
    * KeyMd5
    * Mode
  * InputKey
  * PresetWatermarkId

### JobWatermarks
* JobWatermarks `array`
  * items [JobWatermark](#jobwatermark)

### Jobs
* Jobs `array`
  * items [Job](#job)

### JpgOrPng
* JpgOrPng `string`

### Key
* Key `string`

### KeyArn
* KeyArn `string`

### KeyIdGuid
* KeyIdGuid `string`

### KeyStoragePolicy
* KeyStoragePolicy `string`

### KeyframesMaxDist
* KeyframesMaxDist `string`

### LimitExceededException


### ListJobsByPipelineRequest
* ListJobsByPipelineRequest `object`: The <code>ListJobsByPipelineRequest</code> structure.

### ListJobsByPipelineResponse
* ListJobsByPipelineResponse `object`: The <code>ListJobsByPipelineResponse</code> structure.
  * Jobs
    * items [Job](#job)
  * NextPageToken

### ListJobsByStatusRequest
* ListJobsByStatusRequest `object`: The <code>ListJobsByStatusRequest</code> structure.

### ListJobsByStatusResponse
* ListJobsByStatusResponse `object`:  The <code>ListJobsByStatusResponse</code> structure. 
  * Jobs
    * items [Job](#job)
  * NextPageToken

### ListPipelinesRequest
* ListPipelinesRequest `object`: The <code>ListPipelineRequest</code> structure.

### ListPipelinesResponse
* ListPipelinesResponse `object`: A list of the pipelines associated with the current AWS account.
  * NextPageToken
  * Pipelines
    * items [Pipeline](#pipeline)

### ListPresetsRequest
* ListPresetsRequest `object`: The <code>ListPresetsRequest</code> structure.

### ListPresetsResponse
* ListPresetsResponse `object`: The <code>ListPresetsResponse</code> structure.
  * NextPageToken
  * Presets
    * items [Preset](#preset)

### LongKey
* LongKey `string`

### MaxFrameRate
* MaxFrameRate `string`

### MergePolicy
* MergePolicy `string`

### Name
* Name `string`

### NonEmptyBase64EncodedString
* NonEmptyBase64EncodedString `string`

### Notifications
* Notifications `object`: <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
  * Completed
  * Error
  * Progressing
  * Warning

### NullableInteger
* NullableInteger `integer`

### NullableLong
* NullableLong `integer`

### OneTo512String
* OneTo512String `string`

### Opacity
* Opacity `string`

### OutputKeys
* OutputKeys `array`
  * items [Key](#key)

### PaddingPolicy
* PaddingPolicy `string`

### Permission
* Permission `object`: The <code>Permission</code> structure.
  * Access
    * items [AccessControl](#accesscontrol)
  * Grantee
  * GranteeType

### Permissions
* Permissions `array`
  * items [Permission](#permission)

### Pipeline
* Pipeline `object`: The pipeline (queue) that is used to manage jobs.
  * Arn
  * AwsKmsKeyArn
  * ContentConfig
    * Bucket
    * Permissions
      * items [Permission](#permission)
    * StorageClass
  * Id
  * InputBucket
  * Name
  * Notifications
    * Completed
    * Error
    * Progressing
    * Warning
  * OutputBucket
  * Role
  * Status
  * ThumbnailConfig
    * Bucket
    * Permissions
      * items [Permission](#permission)
    * StorageClass

### PipelineOutputConfig
* PipelineOutputConfig `object`: The <code>PipelineOutputConfig</code> structure.
  * Bucket
  * Permissions
    * items [Permission](#permission)
  * StorageClass

### PipelineStatus
* PipelineStatus `string`

### Pipelines
* Pipelines `array`
  * items [Pipeline](#pipeline)

### PixelsOrPercent
* PixelsOrPercent `string`

### PlayReadyDrm
* PlayReadyDrm `object`: <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>
  * Format
  * InitializationVector
  * Key
  * KeyId
  * KeyMd5
  * LicenseAcquisitionUrl

### PlayReadyDrmFormatString
* PlayReadyDrmFormatString `string`

### Playlist
* Playlist `object`:  Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30. 
  * Format
  * HlsContentProtection
    * InitializationVector
    * Key
    * KeyMd5
    * KeyStoragePolicy
    * LicenseAcquisitionUrl
    * Method
  * Name
  * OutputKeys
    * items [Key](#key)
  * PlayReadyDrm
    * Format
    * InitializationVector
    * Key
    * KeyId
    * KeyMd5
    * LicenseAcquisitionUrl
  * Status
  * StatusDetail

### PlaylistFormat
* PlaylistFormat `string`

### Playlists
* Playlists `array`
  * items [Playlist](#playlist)

### Preset
* Preset `object`: Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job.
  * Arn
  * Audio
    * AudioPackingMode
    * BitRate
    * Channels
    * Codec
    * CodecOptions
      * BitDepth
      * BitOrder
      * Profile
      * Signed
    * SampleRate
  * Container
  * Description
  * Id
  * Name
  * Thumbnails
    * AspectRatio
    * Format
    * Interval
    * MaxHeight
    * MaxWidth
    * PaddingPolicy
    * Resolution
    * SizingPolicy
  * Type
  * Video
    * AspectRatio
    * BitRate
    * Codec
    * CodecOptions
    * DisplayAspectRatio
    * FixedGOP
    * FrameRate
    * KeyframesMaxDist
    * MaxFrameRate
    * MaxHeight
    * MaxWidth
    * PaddingPolicy
    * Resolution
    * SizingPolicy
    * Watermarks
      * items [PresetWatermark](#presetwatermark)

### PresetContainer
* PresetContainer `string`

### PresetType
* PresetType `string`

### PresetWatermark
* PresetWatermark `object`: <p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p>
  * HorizontalAlign
  * HorizontalOffset
  * Id
  * MaxHeight
  * MaxWidth
  * Opacity
  * SizingPolicy
  * Target
  * VerticalAlign
  * VerticalOffset

### PresetWatermarkId
* PresetWatermarkId `string`

### PresetWatermarks
* PresetWatermarks `array`
  * items [PresetWatermark](#presetwatermark)

### Presets
* Presets `array`
  * items [Preset](#preset)

### ReadJobRequest
* ReadJobRequest `object`: The <code>ReadJobRequest</code> structure.

### ReadJobResponse
* ReadJobResponse `object`: The <code>ReadJobResponse</code> structure.
  * Job
    * Arn
    * Id
    * Input
      * AspectRatio
      * Container
      * DetectedProperties
        * DurationMillis
        * FileSize
        * FrameRate
        * Height
        * Width
      * Encryption
        * InitializationVector
        * Key
        * KeyMd5
        * Mode
      * FrameRate
      * InputCaptions
        * CaptionSources
          * items [CaptionSource](#captionsource)
        * MergePolicy
      * Interlaced
      * Key
      * Resolution
      * TimeSpan
        * Duration
        * StartTime
    * Inputs
      * items [JobInput](#jobinput)
    * Output
      * AlbumArt
        * Artwork
          * items [Artwork](#artwork)
        * MergePolicy
      * AppliedColorSpaceConversion
      * Captions
        * CaptionFormats
          * items [CaptionFormat](#captionformat)
        * CaptionSources
          * items [CaptionSource](#captionsource)
        * MergePolicy
      * Composition
        * items [Clip](#clip)
      * Duration
      * DurationMillis
      * Encryption
        * InitializationVector
        * Key
        * KeyMd5
        * Mode
      * FileSize
      * FrameRate
      * Height
      * Id
      * Key
      * PresetId
      * Rotate
      * SegmentDuration
      * Status
      * StatusDetail
      * ThumbnailEncryption
        * InitializationVector
        * Key
        * KeyMd5
        * Mode
      * ThumbnailPattern
      * Watermarks
        * items [JobWatermark](#jobwatermark)
      * Width
    * OutputKeyPrefix
    * Outputs
      * items [JobOutput](#joboutput)
    * PipelineId
    * Playlists
      * items [Playlist](#playlist)
    * Status
    * Timing
      * FinishTimeMillis
      * StartTimeMillis
      * SubmitTimeMillis
    * UserMetadata

### ReadPipelineRequest
* ReadPipelineRequest `object`: The <code>ReadPipelineRequest</code> structure.

### ReadPipelineResponse
* ReadPipelineResponse `object`: The <code>ReadPipelineResponse</code> structure.
  * Pipeline
    * Arn
    * AwsKmsKeyArn
    * ContentConfig
      * Bucket
      * Permissions
        * items [Permission](#permission)
      * StorageClass
    * Id
    * InputBucket
    * Name
    * Notifications
      * Completed
      * Error
      * Progressing
      * Warning
    * OutputBucket
    * Role
    * Status
    * ThumbnailConfig
      * Bucket
      * Permissions
        * items [Permission](#permission)
      * StorageClass
  * Warnings
    * items [Warning](#warning)

### ReadPresetRequest
* ReadPresetRequest `object`: The <code>ReadPresetRequest</code> structure.

### ReadPresetResponse
* ReadPresetResponse `object`: The <code>ReadPresetResponse</code> structure.
  * Preset
    * Arn
    * Audio
      * AudioPackingMode
      * BitRate
      * Channels
      * Codec
      * CodecOptions
        * BitDepth
        * BitOrder
        * Profile
        * Signed
      * SampleRate
    * Container
    * Description
    * Id
    * Name
    * Thumbnails
      * AspectRatio
      * Format
      * Interval
      * MaxHeight
      * MaxWidth
      * PaddingPolicy
      * Resolution
      * SizingPolicy
    * Type
    * Video
      * AspectRatio
      * BitRate
      * Codec
      * CodecOptions
      * DisplayAspectRatio
      * FixedGOP
      * FrameRate
      * KeyframesMaxDist
      * MaxFrameRate
      * MaxHeight
      * MaxWidth
      * PaddingPolicy
      * Resolution
      * SizingPolicy
      * Watermarks
        * items [PresetWatermark](#presetwatermark)

### Resolution
* Resolution `string`

### ResourceInUseException


### ResourceNotFoundException


### Role
* Role `string`

### Rotate
* Rotate `string`

### SizingPolicy
* SizingPolicy `string`

### SnsTopic
* SnsTopic `string`

### SnsTopics
* SnsTopics `array`
  * items [SnsTopic](#snstopic)

### StorageClass
* StorageClass `string`

### String
* String `string`

### Success
* Success `string`

### Target
* Target `string`

### TestRoleRequest
* TestRoleRequest `object`:  The <code>TestRoleRequest</code> structure. 
  * InputBucket **required**
  * OutputBucket **required**
  * Role **required**
  * Topics **required**
    * items [SnsTopic](#snstopic)

### TestRoleResponse
* TestRoleResponse `object`: The <code>TestRoleResponse</code> structure.
  * Messages
    * items [String](#string)
  * Success

### ThumbnailPattern
* ThumbnailPattern `string`

### ThumbnailResolution
* ThumbnailResolution `string`

### Thumbnails
* Thumbnails `object`: Thumbnails for videos.
  * AspectRatio
  * Format
  * Interval
  * MaxHeight
  * MaxWidth
  * PaddingPolicy
  * Resolution
  * SizingPolicy

### Time
* Time `string`

### TimeOffset
* TimeOffset `string`

### TimeSpan
* TimeSpan `object`: Settings that determine when a clip begins and how long it lasts.
  * Duration
  * StartTime

### Timing
* Timing `object`: Details about the timing of a job.
  * FinishTimeMillis
  * StartTimeMillis
  * SubmitTimeMillis

### UpdatePipelineNotificationsRequest
* UpdatePipelineNotificationsRequest `object`: The <code>UpdatePipelineNotificationsRequest</code> structure.
  * Notifications **required**
    * Completed
    * Error
    * Progressing
    * Warning

### UpdatePipelineNotificationsResponse
* UpdatePipelineNotificationsResponse `object`: The <code>UpdatePipelineNotificationsResponse</code> structure.
  * Pipeline
    * Arn
    * AwsKmsKeyArn
    * ContentConfig
      * Bucket
      * Permissions
        * items [Permission](#permission)
      * StorageClass
    * Id
    * InputBucket
    * Name
    * Notifications
      * Completed
      * Error
      * Progressing
      * Warning
    * OutputBucket
    * Role
    * Status
    * ThumbnailConfig
      * Bucket
      * Permissions
        * items [Permission](#permission)
      * StorageClass

### UpdatePipelineRequest
* UpdatePipelineRequest `object`: The <code>UpdatePipelineRequest</code> structure.
  * AwsKmsKeyArn
  * ContentConfig
    * Bucket
    * Permissions
      * items [Permission](#permission)
    * StorageClass
  * InputBucket
  * Name
  * Notifications
    * Completed
    * Error
    * Progressing
    * Warning
  * Role
  * ThumbnailConfig
    * Bucket
    * Permissions
      * items [Permission](#permission)
    * StorageClass

### UpdatePipelineResponse
* UpdatePipelineResponse `object`: When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.
  * Pipeline
    * Arn
    * AwsKmsKeyArn
    * ContentConfig
      * Bucket
      * Permissions
        * items [Permission](#permission)
      * StorageClass
    * Id
    * InputBucket
    * Name
    * Notifications
      * Completed
      * Error
      * Progressing
      * Warning
    * OutputBucket
    * Role
    * Status
    * ThumbnailConfig
      * Bucket
      * Permissions
        * items [Permission](#permission)
      * StorageClass
  * Warnings
    * items [Warning](#warning)

### UpdatePipelineStatusRequest
* UpdatePipelineStatusRequest `object`: The <code>UpdatePipelineStatusRequest</code> structure.
  * Status **required**

### UpdatePipelineStatusResponse
* UpdatePipelineStatusResponse `object`: When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request.
  * Pipeline
    * Arn
    * AwsKmsKeyArn
    * ContentConfig
      * Bucket
      * Permissions
        * items [Permission](#permission)
      * StorageClass
    * Id
    * InputBucket
    * Name
    * Notifications
      * Completed
      * Error
      * Progressing
      * Warning
    * OutputBucket
    * Role
    * Status
    * ThumbnailConfig
      * Bucket
      * Permissions
        * items [Permission](#permission)
      * StorageClass

### UserMetadata
* UserMetadata `object`

### ValidationException


### VerticalAlign
* VerticalAlign `string`

### VideoBitRate
* VideoBitRate `string`

### VideoCodec
* VideoCodec `string`

### VideoParameters
* VideoParameters `object`: The <code>VideoParameters</code> structure.
  * AspectRatio
  * BitRate
  * Codec
  * CodecOptions
  * DisplayAspectRatio
  * FixedGOP
  * FrameRate
  * KeyframesMaxDist
  * MaxFrameRate
  * MaxHeight
  * MaxWidth
  * PaddingPolicy
  * Resolution
  * SizingPolicy
  * Watermarks
    * items [PresetWatermark](#presetwatermark)

### Warning
* Warning `object`: <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>
  * Code
  * Message

### Warnings
* Warnings `array`
  * items [Warning](#warning)

### WatermarkKey
* WatermarkKey `string`

### WatermarkSizingPolicy
* WatermarkSizingPolicy `string`

### ZeroTo255String
* ZeroTo255String `string`

### ZeroTo512String
* ZeroTo512String `string`


