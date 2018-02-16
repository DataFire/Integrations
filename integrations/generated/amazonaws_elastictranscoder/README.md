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

amazonaws_elastictranscoder.CreateJob({
  "PipelineId": ""
}).then(data => {
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
  * Input [JobInput](#jobinput)
  * Inputs [JobInputs](#jobinputs)
  * Output [CreateJobOutput](#createjoboutput)
  * OutputKeyPrefix [Key](#key)
  * Outputs [CreateJobOutputs](#createjoboutputs)
  * PipelineId **required** [Id](#id)
  * Playlists [CreateJobPlaylists](#createjobplaylists)
  * UserMetadata [UserMetadata](#usermetadata)

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
  * PageToken `string`
  * PipelineId **required** `string`

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
  * PageToken `string`
  * Status **required** `string`

#### Output
* output [ListJobsByStatusResponse](#listjobsbystatusresponse)

### ListPipelines



```js
amazonaws_elastictranscoder.ListPipelines({}, context)
```

#### Input
* input `object`
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
  * AwsKmsKeyArn [KeyArn](#keyarn)
  * ContentConfig [PipelineOutputConfig](#pipelineoutputconfig)
  * InputBucket **required** [BucketName](#bucketname)
  * Name **required** [Name](#name)
  * Notifications [Notifications](#notifications)
  * OutputBucket [BucketName](#bucketname)
  * Role **required** [Role](#role)
  * ThumbnailConfig [PipelineOutputConfig](#pipelineoutputconfig)

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
  * AwsKmsKeyArn [KeyArn](#keyarn)
  * ContentConfig [PipelineOutputConfig](#pipelineoutputconfig)
  * InputBucket [BucketName](#bucketname)
  * Name [Name](#name)
  * Notifications [Notifications](#notifications)
  * Role [Role](#role)
  * ThumbnailConfig [PipelineOutputConfig](#pipelineoutputconfig)

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
  * Notifications **required** [Notifications](#notifications)

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
  * Status **required** [PipelineStatus](#pipelinestatus)

#### Output
* output [UpdatePipelineStatusResponse](#updatepipelinestatusresponse)

### ListPresets



```js
amazonaws_elastictranscoder.ListPresets({}, context)
```

#### Input
* input `object`
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
  * Audio [AudioParameters](#audioparameters)
  * Container **required** [PresetContainer](#presetcontainer)
  * Description [Description](#description)
  * Name **required** [Name](#name)
  * Thumbnails [Thumbnails](#thumbnails)
  * Video [VideoParameters](#videoparameters)

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
  * InputBucket **required** [BucketName](#bucketname)
  * OutputBucket **required** [BucketName](#bucketname)
  * Role **required** [Role](#role)
  * Topics **required** [SnsTopics](#snstopics)

#### Output
* output [TestRoleResponse](#testroleresponse)



## Definitions

### AccessControl
* AccessControl `string`

### AccessControls
* AccessControls `array`
  * items [AccessControl](#accesscontrol)

### AccessDeniedException
* AccessDeniedException `object`: General authentication failure. The request was not signed correctly.

### Artwork
* Artwork `object`: <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p>
  * AlbumArtFormat [JpgOrPng](#jpgorpng)
  * Encryption [Encryption](#encryption)
  * InputKey [WatermarkKey](#watermarkkey)
  * MaxHeight [DigitsOrAuto](#digitsorauto)
  * MaxWidth [DigitsOrAuto](#digitsorauto)
  * PaddingPolicy [PaddingPolicy](#paddingpolicy)
  * SizingPolicy [SizingPolicy](#sizingpolicy)

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
  * BitDepth [AudioBitDepth](#audiobitdepth)
  * BitOrder [AudioBitOrder](#audiobitorder)
  * Profile [AudioCodecProfile](#audiocodecprofile)
  * Signed [AudioSigned](#audiosigned)

### AudioCodecProfile
* AudioCodecProfile `string`

### AudioPackingMode
* AudioPackingMode `string`

### AudioParameters
* AudioParameters `object`: Parameters required for transcoding audio.
  * AudioPackingMode [AudioPackingMode](#audiopackingmode)
  * BitRate [AudioBitRate](#audiobitrate)
  * Channels [AudioChannels](#audiochannels)
  * Codec [AudioCodec](#audiocodec)
  * CodecOptions [AudioCodecOptions](#audiocodecoptions)
  * SampleRate [AudioSampleRate](#audiosamplerate)

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
  * Encryption [Encryption](#encryption)
  * Format [CaptionFormatFormat](#captionformatformat)
  * Pattern [CaptionFormatPattern](#captionformatpattern)

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
  * Encryption [Encryption](#encryption)
  * Key [LongKey](#longkey)
  * Label [Name](#name)
  * Language [Key](#key)
  * TimeOffset [TimeOffset](#timeoffset)

### CaptionSources
* CaptionSources `array`
  * items [CaptionSource](#captionsource)

### Captions
* Captions `object`: The captions to be created, if any.
  * CaptionFormats [CaptionFormats](#captionformats)
  * CaptionSources [CaptionSources](#captionsources)
  * MergePolicy [CaptionMergePolicy](#captionmergepolicy)

### Clip
* Clip `object`: Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.
  * TimeSpan [TimeSpan](#timespan)

### CodecOption
* CodecOption `string`

### CodecOptions
* CodecOptions `array`
  * items `object`
    * key [CodecOption](#codecoption)
    * value [CodecOption](#codecoption)

### Composition
* Composition `array`
  * items [Clip](#clip)

### CreateJobOutput
* CreateJobOutput `object`: The <code>CreateJobOutput</code> structure.
  * AlbumArt [JobAlbumArt](#jobalbumart)
  * Captions [Captions](#captions)
  * Composition [Composition](#composition)
  * Encryption [Encryption](#encryption)
  * Key [Key](#key)
  * PresetId [Id](#id)
  * Rotate [Rotate](#rotate)
  * SegmentDuration [FloatString](#floatstring)
  * ThumbnailEncryption [Encryption](#encryption)
  * ThumbnailPattern [ThumbnailPattern](#thumbnailpattern)
  * Watermarks [JobWatermarks](#jobwatermarks)

### CreateJobOutputs
* CreateJobOutputs `array`
  * items [CreateJobOutput](#createjoboutput)

### CreateJobPlaylist
* CreateJobPlaylist `object`: Information about the master playlist.
  * Format [PlaylistFormat](#playlistformat)
  * HlsContentProtection [HlsContentProtection](#hlscontentprotection)
  * Name [Filename](#filename)
  * OutputKeys [OutputKeys](#outputkeys)
  * PlayReadyDrm [PlayReadyDrm](#playreadydrm)

### CreateJobPlaylists
* CreateJobPlaylists `array`
  * items [CreateJobPlaylist](#createjobplaylist)

### CreateJobRequest
* CreateJobRequest `object`: The <code>CreateJobRequest</code> structure.
  * Input [JobInput](#jobinput)
  * Inputs [JobInputs](#jobinputs)
  * Output [CreateJobOutput](#createjoboutput)
  * OutputKeyPrefix [Key](#key)
  * Outputs [CreateJobOutputs](#createjoboutputs)
  * PipelineId **required** [Id](#id)
  * Playlists [CreateJobPlaylists](#createjobplaylists)
  * UserMetadata [UserMetadata](#usermetadata)

### CreateJobResponse
* CreateJobResponse `object`: The CreateJobResponse structure.
  * Job [Job](#job)

### CreatePipelineRequest
* CreatePipelineRequest `object`: The <code>CreatePipelineRequest</code> structure.
  * AwsKmsKeyArn [KeyArn](#keyarn)
  * ContentConfig [PipelineOutputConfig](#pipelineoutputconfig)
  * InputBucket **required** [BucketName](#bucketname)
  * Name **required** [Name](#name)
  * Notifications [Notifications](#notifications)
  * OutputBucket [BucketName](#bucketname)
  * Role **required** [Role](#role)
  * ThumbnailConfig [PipelineOutputConfig](#pipelineoutputconfig)

### CreatePipelineResponse
* CreatePipelineResponse `object`: When you create a pipeline, Elastic Transcoder returns the values that you specified in the request.
  * Pipeline [Pipeline](#pipeline)
  * Warnings [Warnings](#warnings)

### CreatePresetRequest
* CreatePresetRequest `object`: The <code>CreatePresetRequest</code> structure.
  * Audio [AudioParameters](#audioparameters)
  * Container **required** [PresetContainer](#presetcontainer)
  * Description [Description](#description)
  * Name **required** [Name](#name)
  * Thumbnails [Thumbnails](#thumbnails)
  * Video [VideoParameters](#videoparameters)

### CreatePresetResponse
* CreatePresetResponse `object`: The <code>CreatePresetResponse</code> structure.
  * Preset [Preset](#preset)
  * Warning [String](#string)

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
  * DurationMillis [NullableLong](#nullablelong)
  * FileSize [NullableLong](#nullablelong)
  * FrameRate [FloatString](#floatstring)
  * Height [NullableInteger](#nullableinteger)
  * Width [NullableInteger](#nullableinteger)

### Digits
* Digits `string`

### DigitsOrAuto
* DigitsOrAuto `string`

### Encryption
* Encryption `object`: The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files.
  * InitializationVector [ZeroTo255String](#zeroto255string)
  * Key [Base64EncodedString](#base64encodedstring)
  * KeyMd5 [Base64EncodedString](#base64encodedstring)
  * Mode [EncryptionMode](#encryptionmode)

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
  * InitializationVector [ZeroTo255String](#zeroto255string)
  * Key [Base64EncodedString](#base64encodedstring)
  * KeyMd5 [Base64EncodedString](#base64encodedstring)
  * KeyStoragePolicy [KeyStoragePolicy](#keystoragepolicy)
  * LicenseAcquisitionUrl [ZeroTo512String](#zeroto512string)
  * Method [HlsContentProtectionMethod](#hlscontentprotectionmethod)

### HlsContentProtectionMethod
* HlsContentProtectionMethod `string`

### HorizontalAlign
* HorizontalAlign `string`

### Id
* Id `string`

### IncompatibleVersionException
* IncompatibleVersionException `object`

### InputCaptions
* InputCaptions `object`: The captions to be created, if any.
  * CaptionSources [CaptionSources](#captionsources)
  * MergePolicy [CaptionMergePolicy](#captionmergepolicy)

### Interlaced
* Interlaced `string`

### InternalServiceException
* InternalServiceException `object`: Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.

### Job
* Job `object`: A section of the response body that provides information about the job that is created.
  * Arn [String](#string)
  * Id [Id](#id)
  * Input [JobInput](#jobinput)
  * Inputs [JobInputs](#jobinputs)
  * Output [JobOutput](#joboutput)
  * OutputKeyPrefix [Key](#key)
  * Outputs [JobOutputs](#joboutputs)
  * PipelineId [Id](#id)
  * Playlists [Playlists](#playlists)
  * Status [JobStatus](#jobstatus)
  * Timing [Timing](#timing)
  * UserMetadata [UserMetadata](#usermetadata)

### JobAlbumArt
* JobAlbumArt `object`: The .jpg or .png file associated with an audio file.
  * Artwork [Artworks](#artworks)
  * MergePolicy [MergePolicy](#mergepolicy)

### JobContainer
* JobContainer `string`

### JobInput
* JobInput `object`: Information about the file that you're transcoding.
  * AspectRatio [AspectRatio](#aspectratio)
  * Container [JobContainer](#jobcontainer)
  * DetectedProperties [DetectedProperties](#detectedproperties)
  * Encryption [Encryption](#encryption)
  * FrameRate [FrameRate](#framerate)
  * InputCaptions [InputCaptions](#inputcaptions)
  * Interlaced [Interlaced](#interlaced)
  * Key [LongKey](#longkey)
  * Resolution [Resolution](#resolution)
  * TimeSpan [TimeSpan](#timespan)

### JobInputs
* JobInputs `array`
  * items [JobInput](#jobinput)

### JobOutput
* JobOutput `object`: <important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p>
  * AlbumArt [JobAlbumArt](#jobalbumart)
  * AppliedColorSpaceConversion [String](#string)
  * Captions [Captions](#captions)
  * Composition [Composition](#composition)
  * Duration [NullableLong](#nullablelong)
  * DurationMillis [NullableLong](#nullablelong)
  * Encryption [Encryption](#encryption)
  * FileSize [NullableLong](#nullablelong)
  * FrameRate [FloatString](#floatstring)
  * Height [NullableInteger](#nullableinteger)
  * Id [String](#string)
  * Key [Key](#key)
  * PresetId [Id](#id)
  * Rotate [Rotate](#rotate)
  * SegmentDuration [FloatString](#floatstring)
  * Status [JobStatus](#jobstatus)
  * StatusDetail [Description](#description)
  * ThumbnailEncryption [Encryption](#encryption)
  * ThumbnailPattern [ThumbnailPattern](#thumbnailpattern)
  * Watermarks [JobWatermarks](#jobwatermarks)
  * Width [NullableInteger](#nullableinteger)

### JobOutputs
* JobOutputs `array`
  * items [JobOutput](#joboutput)

### JobStatus
* JobStatus `string`

### JobWatermark
* JobWatermark `object`: Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.
  * Encryption [Encryption](#encryption)
  * InputKey [WatermarkKey](#watermarkkey)
  * PresetWatermarkId [PresetWatermarkId](#presetwatermarkid)

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
* LimitExceededException `object`: Too many operations for a given AWS account. For example, the number of pipelines exceeds the maximum allowed.

### ListJobsByPipelineRequest
* ListJobsByPipelineRequest `object`: The <code>ListJobsByPipelineRequest</code> structure.

### ListJobsByPipelineResponse
* ListJobsByPipelineResponse `object`: The <code>ListJobsByPipelineResponse</code> structure.
  * Jobs [Jobs](#jobs)
  * NextPageToken [Id](#id)

### ListJobsByStatusRequest
* ListJobsByStatusRequest `object`: The <code>ListJobsByStatusRequest</code> structure.

### ListJobsByStatusResponse
* ListJobsByStatusResponse `object`:  The <code>ListJobsByStatusResponse</code> structure. 
  * Jobs [Jobs](#jobs)
  * NextPageToken [Id](#id)

### ListPipelinesRequest
* ListPipelinesRequest `object`: The <code>ListPipelineRequest</code> structure.

### ListPipelinesResponse
* ListPipelinesResponse `object`: A list of the pipelines associated with the current AWS account.
  * NextPageToken [Id](#id)
  * Pipelines [Pipelines](#pipelines)

### ListPresetsRequest
* ListPresetsRequest `object`: The <code>ListPresetsRequest</code> structure.

### ListPresetsResponse
* ListPresetsResponse `object`: The <code>ListPresetsResponse</code> structure.
  * NextPageToken [Id](#id)
  * Presets [Presets](#presets)

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
  * Completed [SnsTopic](#snstopic)
  * Error [SnsTopic](#snstopic)
  * Progressing [SnsTopic](#snstopic)
  * Warning [SnsTopic](#snstopic)

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
  * Access [AccessControls](#accesscontrols)
  * Grantee [Grantee](#grantee)
  * GranteeType [GranteeType](#granteetype)

### Permissions
* Permissions `array`
  * items [Permission](#permission)

### Pipeline
* Pipeline `object`: The pipeline (queue) that is used to manage jobs.
  * Arn [String](#string)
  * AwsKmsKeyArn [KeyArn](#keyarn)
  * ContentConfig [PipelineOutputConfig](#pipelineoutputconfig)
  * Id [Id](#id)
  * InputBucket [BucketName](#bucketname)
  * Name [Name](#name)
  * Notifications [Notifications](#notifications)
  * OutputBucket [BucketName](#bucketname)
  * Role [Role](#role)
  * Status [PipelineStatus](#pipelinestatus)
  * ThumbnailConfig [PipelineOutputConfig](#pipelineoutputconfig)

### PipelineOutputConfig
* PipelineOutputConfig `object`: The <code>PipelineOutputConfig</code> structure.
  * Bucket [BucketName](#bucketname)
  * Permissions [Permissions](#permissions)
  * StorageClass [StorageClass](#storageclass)

### PipelineStatus
* PipelineStatus `string`

### Pipelines
* Pipelines `array`
  * items [Pipeline](#pipeline)

### PixelsOrPercent
* PixelsOrPercent `string`

### PlayReadyDrm
* PlayReadyDrm `object`: <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>AES-CTR</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>
  * Format [PlayReadyDrmFormatString](#playreadydrmformatstring)
  * InitializationVector [ZeroTo255String](#zeroto255string)
  * Key [NonEmptyBase64EncodedString](#nonemptybase64encodedstring)
  * KeyId [KeyIdGuid](#keyidguid)
  * KeyMd5 [NonEmptyBase64EncodedString](#nonemptybase64encodedstring)
  * LicenseAcquisitionUrl [OneTo512String](#oneto512string)

### PlayReadyDrmFormatString
* PlayReadyDrmFormatString `string`

### Playlist
* Playlist `object`:  Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30. 
  * Format [PlaylistFormat](#playlistformat)
  * HlsContentProtection [HlsContentProtection](#hlscontentprotection)
  * Name [Filename](#filename)
  * OutputKeys [OutputKeys](#outputkeys)
  * PlayReadyDrm [PlayReadyDrm](#playreadydrm)
  * Status [JobStatus](#jobstatus)
  * StatusDetail [Description](#description)

### PlaylistFormat
* PlaylistFormat `string`

### Playlists
* Playlists `array`
  * items [Playlist](#playlist)

### Preset
* Preset `object`: Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job.
  * Arn [String](#string)
  * Audio [AudioParameters](#audioparameters)
  * Container [PresetContainer](#presetcontainer)
  * Description [Description](#description)
  * Id [Id](#id)
  * Name [Name](#name)
  * Thumbnails [Thumbnails](#thumbnails)
  * Type [PresetType](#presettype)
  * Video [VideoParameters](#videoparameters)

### PresetContainer
* PresetContainer `string`

### PresetType
* PresetType `string`

### PresetWatermark
* PresetWatermark `object`: <p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p>
  * HorizontalAlign [HorizontalAlign](#horizontalalign)
  * HorizontalOffset [PixelsOrPercent](#pixelsorpercent)
  * Id [PresetWatermarkId](#presetwatermarkid)
  * MaxHeight [PixelsOrPercent](#pixelsorpercent)
  * MaxWidth [PixelsOrPercent](#pixelsorpercent)
  * Opacity [Opacity](#opacity)
  * SizingPolicy [WatermarkSizingPolicy](#watermarksizingpolicy)
  * Target [Target](#target)
  * VerticalAlign [VerticalAlign](#verticalalign)
  * VerticalOffset [PixelsOrPercent](#pixelsorpercent)

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
  * Job [Job](#job)

### ReadPipelineRequest
* ReadPipelineRequest `object`: The <code>ReadPipelineRequest</code> structure.

### ReadPipelineResponse
* ReadPipelineResponse `object`: The <code>ReadPipelineResponse</code> structure.
  * Pipeline [Pipeline](#pipeline)
  * Warnings [Warnings](#warnings)

### ReadPresetRequest
* ReadPresetRequest `object`: The <code>ReadPresetRequest</code> structure.

### ReadPresetResponse
* ReadPresetResponse `object`: The <code>ReadPresetResponse</code> structure.
  * Preset [Preset](#preset)

### Resolution
* Resolution `string`

### ResourceInUseException
* ResourceInUseException `object`: The resource you are attempting to change is in use. For example, you are attempting to delete a pipeline that is currently in use.

### ResourceNotFoundException
* ResourceNotFoundException `object`: The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.

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
  * InputBucket **required** [BucketName](#bucketname)
  * OutputBucket **required** [BucketName](#bucketname)
  * Role **required** [Role](#role)
  * Topics **required** [SnsTopics](#snstopics)

### TestRoleResponse
* TestRoleResponse `object`: The <code>TestRoleResponse</code> structure.
  * Messages [ExceptionMessages](#exceptionmessages)
  * Success [Success](#success)

### ThumbnailPattern
* ThumbnailPattern `string`

### ThumbnailResolution
* ThumbnailResolution `string`

### Thumbnails
* Thumbnails `object`: Thumbnails for videos.
  * AspectRatio [AspectRatio](#aspectratio)
  * Format [JpgOrPng](#jpgorpng)
  * Interval [Digits](#digits)
  * MaxHeight [DigitsOrAuto](#digitsorauto)
  * MaxWidth [DigitsOrAuto](#digitsorauto)
  * PaddingPolicy [PaddingPolicy](#paddingpolicy)
  * Resolution [ThumbnailResolution](#thumbnailresolution)
  * SizingPolicy [SizingPolicy](#sizingpolicy)

### Time
* Time `string`

### TimeOffset
* TimeOffset `string`

### TimeSpan
* TimeSpan `object`: Settings that determine when a clip begins and how long it lasts.
  * Duration [Time](#time)
  * StartTime [Time](#time)

### Timing
* Timing `object`: Details about the timing of a job.
  * FinishTimeMillis [NullableLong](#nullablelong)
  * StartTimeMillis [NullableLong](#nullablelong)
  * SubmitTimeMillis [NullableLong](#nullablelong)

### UpdatePipelineNotificationsRequest
* UpdatePipelineNotificationsRequest `object`: The <code>UpdatePipelineNotificationsRequest</code> structure.
  * Notifications **required** [Notifications](#notifications)

### UpdatePipelineNotificationsResponse
* UpdatePipelineNotificationsResponse `object`: The <code>UpdatePipelineNotificationsResponse</code> structure.
  * Pipeline [Pipeline](#pipeline)

### UpdatePipelineRequest
* UpdatePipelineRequest `object`: The <code>UpdatePipelineRequest</code> structure.
  * AwsKmsKeyArn [KeyArn](#keyarn)
  * ContentConfig [PipelineOutputConfig](#pipelineoutputconfig)
  * InputBucket [BucketName](#bucketname)
  * Name [Name](#name)
  * Notifications [Notifications](#notifications)
  * Role [Role](#role)
  * ThumbnailConfig [PipelineOutputConfig](#pipelineoutputconfig)

### UpdatePipelineResponse
* UpdatePipelineResponse `object`: When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.
  * Pipeline [Pipeline](#pipeline)
  * Warnings [Warnings](#warnings)

### UpdatePipelineStatusRequest
* UpdatePipelineStatusRequest `object`: The <code>UpdatePipelineStatusRequest</code> structure.
  * Status **required** [PipelineStatus](#pipelinestatus)

### UpdatePipelineStatusResponse
* UpdatePipelineStatusResponse `object`: When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request.
  * Pipeline [Pipeline](#pipeline)

### UserMetadata
* UserMetadata `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### ValidationException
* ValidationException `object`: One or more required parameter values were not provided in the request.

### VerticalAlign
* VerticalAlign `string`

### VideoBitRate
* VideoBitRate `string`

### VideoCodec
* VideoCodec `string`

### VideoParameters
* VideoParameters `object`: The <code>VideoParameters</code> structure.
  * AspectRatio [AspectRatio](#aspectratio)
  * BitRate [VideoBitRate](#videobitrate)
  * Codec [VideoCodec](#videocodec)
  * CodecOptions [CodecOptions](#codecoptions)
  * DisplayAspectRatio [AspectRatio](#aspectratio)
  * FixedGOP [FixedGOP](#fixedgop)
  * FrameRate [FrameRate](#framerate)
  * KeyframesMaxDist [KeyframesMaxDist](#keyframesmaxdist)
  * MaxFrameRate [MaxFrameRate](#maxframerate)
  * MaxHeight [DigitsOrAuto](#digitsorauto)
  * MaxWidth [DigitsOrAuto](#digitsorauto)
  * PaddingPolicy [PaddingPolicy](#paddingpolicy)
  * Resolution [Resolution](#resolution)
  * SizingPolicy [SizingPolicy](#sizingpolicy)
  * Watermarks [PresetWatermarks](#presetwatermarks)

### Warning
* Warning `object`: <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>
  * Code [String](#string)
  * Message [String](#string)

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


