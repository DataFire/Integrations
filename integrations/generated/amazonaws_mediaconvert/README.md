# @datafire/amazonaws_mediaconvert

Client library for AWS Elemental MediaConvert

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mediaconvert
```
```js
let amazonaws_mediaconvert = require('@datafire/amazonaws_mediaconvert').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS Elemental MediaConvert

## Actions

### AssociateCertificate



```js
amazonaws_mediaconvert.AssociateCertificate({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`: The ARN of the ACM certificate that you want to associate with your MediaConvert resource.

#### Output
*Output schema unknown*

### DisassociateCertificate



```js
amazonaws_mediaconvert.DisassociateCertificate({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`

#### Output
*Output schema unknown*

### DescribeEndpoints



```js
amazonaws_mediaconvert.DescribeEndpoints({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * maxResults `integer`: Optional. Max number of endpoints, up to twenty, that will be returned at one time.
  * mode `string` (values: DEFAULT, GET_ONLY): Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.
  * nextToken `string`: Use this string, provided with the response to a previous request, to request the next batch of endpoints.

#### Output
* output [DescribeEndpointsResponse](#describeendpointsresponse)

### ListJobTemplates



```js
amazonaws_mediaconvert.ListJobTemplates({}, context)
```

#### Input
* input `object`
  * category `string`
  * listBy `string`
  * maxResults `integer`
  * nextToken `string`
  * order `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListJobTemplatesResponse](#listjobtemplatesresponse)

### CreateJobTemplate



```js
amazonaws_mediaconvert.CreateJobTemplate({
  "name": "",
  "settings": {}
}, context)
```

#### Input
* input `object`
  * tags `object`: The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
  * accelerationSettings `object`: Accelerated transcoding can significantly speed up jobs with long, visually complex content.
    * Mode
  * category `string`: Optional. A category for the job template you are creating
  * description `string`: Optional. A description of the job template you are creating.
  * hopDestinations `array`: Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
    * items [HopDestination](#hopdestination)
  * name **required** `string`: The name of the job template you are creating.
  * priority `integer`: Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
  * queue `string`: Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
  * settings **required** `object`: JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
    * AdAvailOffset
    * AvailBlanking
      * AvailBlankingImage
    * Esam
      * ManifestConfirmConditionNotification
        * MccXml
      * ResponseSignalPreroll
      * SignalProcessingNotification
        * SccXml
    * Inputs
      * items [InputTemplate](#inputtemplate)
    * MotionImageInserter
      * Framerate
        * FramerateDenominator
        * FramerateNumerator
      * Input
      * InsertionMode
      * Offset
        * ImageX
        * ImageY
      * Playback
      * StartTime
    * NielsenConfiguration
      * BreakoutCode
      * DistributorId
    * NielsenNonLinearWatermark
      * ActiveWatermarkProcess
      * AdiFilename
      * AssetId
      * AssetName
      * CbetSourceId
      * EpisodeId
      * MetadataDestination
      * SourceId
      * SourceWatermarkStatus
      * TicServerUrl
      * UniqueTicPerAudioTrack
    * OutputGroups
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig
      * Anchor
      * Source
      * Start
      * TimestampOffset
    * TimedMetadataInsertion
      * Id3Insertions
        * items [Id3Insertion](#id3insertion)
  * statusUpdateInterval `string` (values: SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600): Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.

#### Output
*Output schema unknown*

### DeleteJobTemplate



```js
amazonaws_mediaconvert.DeleteJobTemplate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
*Output schema unknown*

### GetJobTemplate



```js
amazonaws_mediaconvert.GetJobTemplate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [GetJobTemplateResponse](#getjobtemplateresponse)

### UpdateJobTemplate



```js
amazonaws_mediaconvert.UpdateJobTemplate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * accelerationSettings `object`: Accelerated transcoding can significantly speed up jobs with long, visually complex content.
    * Mode
  * category `string`: The new category for the job template, if you are changing it.
  * description `string`: The new description for the job template, if you are changing it.
  * hopDestinations `array`: Optional list of hop destinations.
    * items [HopDestination](#hopdestination)
  * priority `integer`: Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
  * queue `string`: The new queue for the job template, if you are changing it.
  * settings `object`: JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
    * AdAvailOffset
    * AvailBlanking
      * AvailBlankingImage
    * Esam
      * ManifestConfirmConditionNotification
        * MccXml
      * ResponseSignalPreroll
      * SignalProcessingNotification
        * SccXml
    * Inputs
      * items [InputTemplate](#inputtemplate)
    * MotionImageInserter
      * Framerate
        * FramerateDenominator
        * FramerateNumerator
      * Input
      * InsertionMode
      * Offset
        * ImageX
        * ImageY
      * Playback
      * StartTime
    * NielsenConfiguration
      * BreakoutCode
      * DistributorId
    * NielsenNonLinearWatermark
      * ActiveWatermarkProcess
      * AdiFilename
      * AssetId
      * AssetName
      * CbetSourceId
      * EpisodeId
      * MetadataDestination
      * SourceId
      * SourceWatermarkStatus
      * TicServerUrl
      * UniqueTicPerAudioTrack
    * OutputGroups
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig
      * Anchor
      * Source
      * Start
      * TimestampOffset
    * TimedMetadataInsertion
      * Id3Insertions
        * items [Id3Insertion](#id3insertion)
  * statusUpdateInterval `string` (values: SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600): Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.

#### Output
* output [UpdateJobTemplateResponse](#updatejobtemplateresponse)

### ListJobs



```js
amazonaws_mediaconvert.ListJobs({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * order `string`
  * queue `string`
  * status `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListJobsResponse](#listjobsresponse)

### CreateJob



```js
amazonaws_mediaconvert.CreateJob({
  "role": "",
  "settings": {}
}, context)
```

#### Input
* input `object`
  * tags `object`: Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.  Use standard AWS tags on your job for automatic integration with AWS services and for custom integrations and workflows.
  * accelerationSettings `object`: Accelerated transcoding can significantly speed up jobs with long, visually complex content.
    * Mode
  * billingTagsSource `string` (values: QUEUE, PRESET, JOB_TEMPLATE, JOB): The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.
  * clientRequestToken `string`: Optional. Idempotency token for CreateJob operation.
  * hopDestinations `array`: Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
    * items [HopDestination](#hopdestination)
  * jobTemplate `string`: Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually.
  * priority `integer`: Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
  * queue `string`: Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
  * role **required** `string`: Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
  * settings **required** `object`: JobSettings contains all the transcode settings for a job.
    * AdAvailOffset
    * AvailBlanking
      * AvailBlankingImage
    * Esam
      * ManifestConfirmConditionNotification
        * MccXml
      * ResponseSignalPreroll
      * SignalProcessingNotification
        * SccXml
    * Inputs
      * items [Input](#input)
    * MotionImageInserter
      * Framerate
        * FramerateDenominator
        * FramerateNumerator
      * Input
      * InsertionMode
      * Offset
        * ImageX
        * ImageY
      * Playback
      * StartTime
    * NielsenConfiguration
      * BreakoutCode
      * DistributorId
    * NielsenNonLinearWatermark
      * ActiveWatermarkProcess
      * AdiFilename
      * AssetId
      * AssetName
      * CbetSourceId
      * EpisodeId
      * MetadataDestination
      * SourceId
      * SourceWatermarkStatus
      * TicServerUrl
      * UniqueTicPerAudioTrack
    * OutputGroups
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig
      * Anchor
      * Source
      * Start
      * TimestampOffset
    * TimedMetadataInsertion
      * Id3Insertions
        * items [Id3Insertion](#id3insertion)
  * simulateReservedQueue `string` (values: DISABLED, ENABLED): Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
  * statusUpdateInterval `string` (values: SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600): Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
  * userMetadata `object`: Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.  Use only for existing integrations or workflows that rely on job metadata tags. Otherwise, we recommend that you use standard AWS tags.

#### Output
*Output schema unknown*

### CancelJob



```js
amazonaws_mediaconvert.CancelJob({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### GetJob



```js
amazonaws_mediaconvert.GetJob({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [GetJobResponse](#getjobresponse)

### ListPresets



```js
amazonaws_mediaconvert.ListPresets({}, context)
```

#### Input
* input `object`
  * category `string`
  * listBy `string`
  * maxResults `integer`
  * nextToken `string`
  * order `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListPresetsResponse](#listpresetsresponse)

### CreatePreset



```js
amazonaws_mediaconvert.CreatePreset({
  "name": "",
  "settings": {}
}, context)
```

#### Input
* input `object`
  * tags `object`: The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
  * category `string`: Optional. A category for the preset you are creating.
  * description `string`: Optional. A description of the preset you are creating.
  * name **required** `string`: The name of the preset you are creating.
  * settings **required** `object`: Settings for preset
    * AudioDescriptions
      * items [AudioDescription](#audiodescription)
    * CaptionDescriptions
      * items [CaptionDescriptionPreset](#captiondescriptionpreset)
    * ContainerSettings
      * CmfcSettings
        * AudioDuration
        * Scte35Esam
        * Scte35Source
      * Container
      * F4vSettings
        * MoovPlacement
      * M2tsSettings
        * AudioBufferModel
        * AudioDuration
        * AudioFramesPerPes
        * AudioPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * Bitrate
        * BufferModel
        * DvbNitSettings
          * NetworkId
          * NetworkName
          * NitInterval
        * DvbSdtSettings
          * OutputSdt
          * SdtInterval
          * ServiceName
          * ServiceProviderName
        * DvbSubPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * DvbTdtSettings
          * TdtInterval
        * DvbTeletextPid
        * EbpAudioInterval
        * EbpPlacement
        * EsRateInPes
        * ForceTsVideoEbpOrder
        * FragmentTime
        * MaxPcrInterval
        * MinEbpInterval
        * NielsenId3
        * NullPacketBitrate
        * PatInterval
        * PcrControl
        * PcrPid
        * PmtInterval
        * PmtPid
        * PrivateMetadataPid
        * ProgramNumber
        * RateMode
        * Scte35Esam
          * Scte35EsamPid
        * Scte35Pid
        * Scte35Source
        * SegmentationMarkers
        * SegmentationStyle
        * SegmentationTime
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * M3u8Settings
        * AudioDuration
        * AudioFramesPerPes
        * AudioPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * NielsenId3
        * PatInterval
        * PcrControl
        * PcrPid
        * PmtInterval
        * PmtPid
        * PrivateMetadataPid
        * ProgramNumber
        * Scte35Pid
        * Scte35Source
        * TimedMetadata
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * MovSettings
        * ClapAtom
        * CslgAtom
        * Mpeg2FourCCControl
        * PaddingControl
        * Reference
      * Mp4Settings
        * AudioDuration
        * CslgAtom
        * CttsVersion
        * FreeSpaceBox
        * MoovPlacement
        * Mp4MajorBrand
      * MpdSettings
        * AccessibilityCaptionHints
        * AudioDuration
        * CaptionContainerType
        * Scte35Esam
        * Scte35Source
      * MxfSettings
        * AfdSignaling
        * Profile
    * VideoDescription
      * AfdSignaling
      * AntiAlias
      * CodecSettings
        * Av1Settings
          * AdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * MaxBitrate
          * NumberBFramesBetweenReferenceFrames
          * QvbrSettings
          * RateControlMode
          * Slices
          * SpatialAdaptiveQuantization
        * AvcIntraSettings
          * AvcIntraClass
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * SlowPal
          * Telecine
        * Codec
        * FrameCaptureSettings
          * FramerateDenominator
          * FramerateNumerator
          * MaxCaptures
          * Quality
        * H264Settings
          * AdaptiveQuantization
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * EntropyEncoding
          * FieldEncoding
          * FlickerAdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopBReference
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * NumberReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * QvbrSettings
          * RateControlMode
          * RepeatPps
          * SceneChangeDetect
          * Slices
          * SlowPal
          * Softness
          * SpatialAdaptiveQuantization
          * Syntax
          * Telecine
          * TemporalAdaptiveQuantization
          * UnregisteredSeiTimecode
        * H265Settings
          * AdaptiveQuantization
          * AlternateTransferFunctionSei
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * FlickerAdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopBReference
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * NumberReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * QvbrSettings
          * RateControlMode
          * SampleAdaptiveOffsetFilterMode
          * SceneChangeDetect
          * Slices
          * SlowPal
          * SpatialAdaptiveQuantization
          * Telecine
          * TemporalAdaptiveQuantization
          * TemporalIds
          * Tiles
          * UnregisteredSeiTimecode
          * WriteMp4PackagingType
        * Mpeg2Settings
          * AdaptiveQuantization
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * IntraDcPrecision
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
          * SceneChangeDetect
          * SlowPal
          * Softness
          * SpatialAdaptiveQuantization
          * Syntax
          * Telecine
          * TemporalAdaptiveQuantization
        * ProresSettings
          * CodecProfile
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * ParControl
          * ParDenominator
          * ParNumerator
          * SlowPal
          * Telecine
        * Vc3Settings
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * SlowPal
          * Telecine
          * Vc3Class
        * Vp8Settings
          * Bitrate
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * HrdBufferSize
          * MaxBitrate
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
        * Vp9Settings
          * Bitrate
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * HrdBufferSize
          * MaxBitrate
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
      * ColorMetadata
      * Crop
        * Height
        * Width
        * X
        * Y
      * DropFrameTimecode
      * FixedAfd
      * Height
      * Position
        * Height
        * Width
        * X
        * Y
      * RespondToAfd
      * ScalingBehavior
      * Sharpness
      * TimecodeInsertion
      * VideoPreprocessors
        * ColorCorrector
          * Brightness
          * ColorSpaceConversion
          * Contrast
          * Hdr10Metadata
          * Hue
          * Saturation
        * Deinterlacer
          * Algorithm
          * Control
          * Mode
        * DolbyVision
          * L6Metadata
          * L6Mode
          * Profile
        * ImageInserter
          * InsertableImages
        * NoiseReducer
          * Filter
          * FilterSettings
          * SpatialFilterSettings
          * TemporalFilterSettings
        * PartnerWatermarking
          * NexguardFileMarkerSettings
        * TimecodeBurnin
          * FontSize
          * Position
          * Prefix
      * Width

#### Output
*Output schema unknown*

### DeletePreset



```js
amazonaws_mediaconvert.DeletePreset({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
*Output schema unknown*

### GetPreset



```js
amazonaws_mediaconvert.GetPreset({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [GetPresetResponse](#getpresetresponse)

### UpdatePreset



```js
amazonaws_mediaconvert.UpdatePreset({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * category `string`: The new category for the preset, if you are changing it.
  * description `string`: The new description for the preset, if you are changing it.
  * settings `object`: Settings for preset
    * AudioDescriptions
      * items [AudioDescription](#audiodescription)
    * CaptionDescriptions
      * items [CaptionDescriptionPreset](#captiondescriptionpreset)
    * ContainerSettings
      * CmfcSettings
        * AudioDuration
        * Scte35Esam
        * Scte35Source
      * Container
      * F4vSettings
        * MoovPlacement
      * M2tsSettings
        * AudioBufferModel
        * AudioDuration
        * AudioFramesPerPes
        * AudioPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * Bitrate
        * BufferModel
        * DvbNitSettings
          * NetworkId
          * NetworkName
          * NitInterval
        * DvbSdtSettings
          * OutputSdt
          * SdtInterval
          * ServiceName
          * ServiceProviderName
        * DvbSubPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * DvbTdtSettings
          * TdtInterval
        * DvbTeletextPid
        * EbpAudioInterval
        * EbpPlacement
        * EsRateInPes
        * ForceTsVideoEbpOrder
        * FragmentTime
        * MaxPcrInterval
        * MinEbpInterval
        * NielsenId3
        * NullPacketBitrate
        * PatInterval
        * PcrControl
        * PcrPid
        * PmtInterval
        * PmtPid
        * PrivateMetadataPid
        * ProgramNumber
        * RateMode
        * Scte35Esam
          * Scte35EsamPid
        * Scte35Pid
        * Scte35Source
        * SegmentationMarkers
        * SegmentationStyle
        * SegmentationTime
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * M3u8Settings
        * AudioDuration
        * AudioFramesPerPes
        * AudioPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * NielsenId3
        * PatInterval
        * PcrControl
        * PcrPid
        * PmtInterval
        * PmtPid
        * PrivateMetadataPid
        * ProgramNumber
        * Scte35Pid
        * Scte35Source
        * TimedMetadata
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * MovSettings
        * ClapAtom
        * CslgAtom
        * Mpeg2FourCCControl
        * PaddingControl
        * Reference
      * Mp4Settings
        * AudioDuration
        * CslgAtom
        * CttsVersion
        * FreeSpaceBox
        * MoovPlacement
        * Mp4MajorBrand
      * MpdSettings
        * AccessibilityCaptionHints
        * AudioDuration
        * CaptionContainerType
        * Scte35Esam
        * Scte35Source
      * MxfSettings
        * AfdSignaling
        * Profile
    * VideoDescription
      * AfdSignaling
      * AntiAlias
      * CodecSettings
        * Av1Settings
          * AdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * MaxBitrate
          * NumberBFramesBetweenReferenceFrames
          * QvbrSettings
          * RateControlMode
          * Slices
          * SpatialAdaptiveQuantization
        * AvcIntraSettings
          * AvcIntraClass
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * SlowPal
          * Telecine
        * Codec
        * FrameCaptureSettings
          * FramerateDenominator
          * FramerateNumerator
          * MaxCaptures
          * Quality
        * H264Settings
          * AdaptiveQuantization
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * EntropyEncoding
          * FieldEncoding
          * FlickerAdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopBReference
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * NumberReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * QvbrSettings
          * RateControlMode
          * RepeatPps
          * SceneChangeDetect
          * Slices
          * SlowPal
          * Softness
          * SpatialAdaptiveQuantization
          * Syntax
          * Telecine
          * TemporalAdaptiveQuantization
          * UnregisteredSeiTimecode
        * H265Settings
          * AdaptiveQuantization
          * AlternateTransferFunctionSei
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * FlickerAdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopBReference
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * NumberReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * QvbrSettings
          * RateControlMode
          * SampleAdaptiveOffsetFilterMode
          * SceneChangeDetect
          * Slices
          * SlowPal
          * SpatialAdaptiveQuantization
          * Telecine
          * TemporalAdaptiveQuantization
          * TemporalIds
          * Tiles
          * UnregisteredSeiTimecode
          * WriteMp4PackagingType
        * Mpeg2Settings
          * AdaptiveQuantization
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * IntraDcPrecision
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
          * SceneChangeDetect
          * SlowPal
          * Softness
          * SpatialAdaptiveQuantization
          * Syntax
          * Telecine
          * TemporalAdaptiveQuantization
        * ProresSettings
          * CodecProfile
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * ParControl
          * ParDenominator
          * ParNumerator
          * SlowPal
          * Telecine
        * Vc3Settings
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * SlowPal
          * Telecine
          * Vc3Class
        * Vp8Settings
          * Bitrate
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * HrdBufferSize
          * MaxBitrate
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
        * Vp9Settings
          * Bitrate
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * HrdBufferSize
          * MaxBitrate
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
      * ColorMetadata
      * Crop
        * Height
        * Width
        * X
        * Y
      * DropFrameTimecode
      * FixedAfd
      * Height
      * Position
        * Height
        * Width
        * X
        * Y
      * RespondToAfd
      * ScalingBehavior
      * Sharpness
      * TimecodeInsertion
      * VideoPreprocessors
        * ColorCorrector
          * Brightness
          * ColorSpaceConversion
          * Contrast
          * Hdr10Metadata
          * Hue
          * Saturation
        * Deinterlacer
          * Algorithm
          * Control
          * Mode
        * DolbyVision
          * L6Metadata
          * L6Mode
          * Profile
        * ImageInserter
          * InsertableImages
        * NoiseReducer
          * Filter
          * FilterSettings
          * SpatialFilterSettings
          * TemporalFilterSettings
        * PartnerWatermarking
          * NexguardFileMarkerSettings
        * TimecodeBurnin
          * FontSize
          * Position
          * Prefix
      * Width

#### Output
* output [UpdatePresetResponse](#updatepresetresponse)

### ListQueues



```js
amazonaws_mediaconvert.ListQueues({}, context)
```

#### Input
* input `object`
  * listBy `string`
  * maxResults `integer`
  * nextToken `string`
  * order `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListQueuesResponse](#listqueuesresponse)

### CreateQueue



```js
amazonaws_mediaconvert.CreateQueue({
  "name": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
  * description `string`: Optional. A description of the queue that you are creating.
  * name **required** `string`: The name of the queue that you are creating.
  * pricingPlan `string` (values: ON_DEMAND, RESERVED): Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.
  * reservationPlanSettings `object`: Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
    * Commitment
    * RenewalType
    * ReservedSlots
  * status `string` (values: ACTIVE, PAUSED): Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error.

#### Output
*Output schema unknown*

### DeleteQueue



```js
amazonaws_mediaconvert.DeleteQueue({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
*Output schema unknown*

### GetQueue



```js
amazonaws_mediaconvert.GetQueue({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [GetQueueResponse](#getqueueresponse)

### UpdateQueue



```js
amazonaws_mediaconvert.UpdateQueue({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * description `string`: The new description for the queue, if you are changing it.
  * reservationPlanSettings `object`: Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
    * Commitment
    * RenewalType
    * ReservedSlots
  * status `string` (values: ACTIVE, PAUSED): Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error.

#### Output
* output [UpdateQueueResponse](#updatequeueresponse)

### TagResource



```js
amazonaws_mediaconvert.TagResource({
  "arn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * tags **required** `object`: The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
  * arn **required** `string`: The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### ListTagsForResource



```js
amazonaws_mediaconvert.ListTagsForResource({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### UntagResource



```js
amazonaws_mediaconvert.UntagResource({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`
  * tagKeys `array`: The keys of the tags that you want to remove from the resource.
    * items [__string](#__string)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AacAudioDescriptionBroadcasterMix
* AacAudioDescriptionBroadcasterMix `string` (values: BROADCASTER_MIXED_AD, NORMAL): Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and  FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.

### AacCodecProfile
* AacCodecProfile `string` (values: LC, HEV1, HEV2): AAC Profile.

### AacCodingMode
* AacCodingMode `string` (values: AD_RECEIVER_MIX, CODING_MODE_1_0, CODING_MODE_1_1, CODING_MODE_2_0, CODING_MODE_5_1): Mono (Audio Description), Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. "1.0 - Audio Description (Receiver Mix)" setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.

### AacRateControlMode
* AacRateControlMode `string` (values: CBR, VBR): Rate Control Mode.

### AacRawFormat
* AacRawFormat `string` (values: LATM_LOAS, NONE): Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container.

### AacSettings
* AacSettings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
  * AudioDescriptionBroadcasterMix
  * Bitrate
  * CodecProfile
  * CodingMode
  * RateControlMode
  * RawFormat
  * SampleRate
  * Specification
  * VbrQuality

### AacSpecification
* AacSpecification `string` (values: MPEG2, MPEG4): Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.

### AacVbrQuality
* AacVbrQuality `string` (values: LOW, MEDIUM_LOW, MEDIUM_HIGH, HIGH): VBR Quality Level - Only used if rate_control_mode is VBR.

### Ac3BitstreamMode
* Ac3BitstreamMode `string` (values: COMPLETE_MAIN, COMMENTARY, DIALOGUE, EMERGENCY, HEARING_IMPAIRED, MUSIC_AND_EFFECTS, VISUALLY_IMPAIRED, VOICE_OVER): Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E).

### Ac3CodingMode
* Ac3CodingMode `string` (values: CODING_MODE_1_0, CODING_MODE_1_1, CODING_MODE_2_0, CODING_MODE_3_2_LFE): Dolby Digital coding mode. Determines number of channels.

### Ac3DynamicRangeCompressionProfile
* Ac3DynamicRangeCompressionProfile `string` (values: FILM_STANDARD, NONE): If set to FILM_STANDARD, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.

### Ac3LfeFilter
* Ac3LfeFilter `string` (values: ENABLED, DISABLED): Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.

### Ac3MetadataControl
* Ac3MetadataControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.

### Ac3Settings
* Ac3Settings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
  * Bitrate
  * BitstreamMode
  * CodingMode
  * Dialnorm
  * DynamicRangeCompressionProfile
  * LfeFilter
  * MetadataControl
  * SampleRate

### AccelerationMode
* AccelerationMode `string` (values: DISABLED, ENABLED, PREFERRED): Specify whether the service runs your job with accelerated transcoding. Choose DISABLED if you don't want accelerated transcoding. Choose ENABLED if you want your job to run with accelerated transcoding and to fail if your input files or your job settings aren't compatible with accelerated transcoding. Choose PREFERRED if you want your job to run with accelerated transcoding if the job is compatible with the feature and to run at standard speed if it's not.

### AccelerationSettings
* AccelerationSettings `object`: Accelerated transcoding can significantly speed up jobs with long, visually complex content.
  * Mode **required**

### AccelerationStatus
* AccelerationStatus `string` (values: NOT_APPLICABLE, IN_PROGRESS, ACCELERATED, NOT_ACCELERATED): Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED.

### AfdSignaling
* AfdSignaling `string` (values: NONE, AUTO, FIXED): This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.

### AiffSettings
* AiffSettings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
  * BitDepth
  * Channels
  * SampleRate

### AlphaBehavior
* AlphaBehavior `string` (values: DISCARD, REMAP_TO_LUMA): Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs.

### AncillaryConvert608To708
* AncillaryConvert608To708 `string` (values: UPCONVERT, DISABLED): Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.

### AncillarySourceSettings
* AncillarySourceSettings `object`: Settings for ancillary captions source.
  * Convert608To708
  * SourceAncillaryChannelNumber
  * TerminateCaptions

### AncillaryTerminateCaptions
* AncillaryTerminateCaptions `string` (values: END_OF_INPUT, DISABLED): By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.

### AntiAlias
* AntiAlias `string` (values: DISABLED, ENABLED): The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting.

### AssociateCertificateRequest
* AssociateCertificateRequest `object`
  * Arn **required**

### AssociateCertificateResponse
* AssociateCertificateResponse `object`

### AudioChannelTag
* AudioChannelTag `string` (values: L, R, C, LFE, LS, RS, LC, RC, CS, LSD, RSD, TCS, VHL, VHC, VHR): You can add a tag for this mono-channel audio track to mimic its placement in a multi-channel layout.  For example, if this track is the left surround channel, choose Left surround (LS).

### AudioChannelTaggingSettings
* AudioChannelTaggingSettings `object`: When you mimic a multi-channel audio layout with multiple mono-channel tracks, you can tag each channel layout manually. For example, you would tag the tracks that contain your left, right, and center audio with Left (L), Right (R), and Center (C), respectively. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use audio layout tagging, your output must be in a QuickTime (.mov) container; your audio codec must be AAC, WAV, or AIFF; and you must set up your audio track to have only one channel.
  * ChannelTag

### AudioCodec
* AudioCodec `string` (values: AAC, MP2, MP3, WAV, AIFF, AC3, EAC3, EAC3_ATMOS, VORBIS, OPUS, PASSTHROUGH): Type of Audio codec.

### AudioCodecSettings
* AudioCodecSettings `object`: Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * MP3, Mp3Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings * VORBIS, VorbisSettings * OPUS, OpusSettings
  * AacSettings
    * AudioDescriptionBroadcasterMix
    * Bitrate
    * CodecProfile
    * CodingMode
    * RateControlMode
    * RawFormat
    * SampleRate
    * Specification
    * VbrQuality
  * Ac3Settings
    * Bitrate
    * BitstreamMode
    * CodingMode
    * Dialnorm
    * DynamicRangeCompressionProfile
    * LfeFilter
    * MetadataControl
    * SampleRate
  * AiffSettings
    * BitDepth
    * Channels
    * SampleRate
  * Codec
  * Eac3AtmosSettings
    * Bitrate
    * BitstreamMode
    * CodingMode
    * DialogueIntelligence
    * DynamicRangeCompressionLine
    * DynamicRangeCompressionRf
    * LoRoCenterMixLevel
    * LoRoSurroundMixLevel
    * LtRtCenterMixLevel
    * LtRtSurroundMixLevel
    * MeteringMode
    * SampleRate
    * SpeechThreshold
    * StereoDownmix
    * SurroundExMode
  * Eac3Settings
    * AttenuationControl
    * Bitrate
    * BitstreamMode
    * CodingMode
    * DcFilter
    * Dialnorm
    * DynamicRangeCompressionLine
    * DynamicRangeCompressionRf
    * LfeControl
    * LfeFilter
    * LoRoCenterMixLevel
    * LoRoSurroundMixLevel
    * LtRtCenterMixLevel
    * LtRtSurroundMixLevel
    * MetadataControl
    * PassthroughControl
    * PhaseControl
    * SampleRate
    * StereoDownmix
    * SurroundExMode
    * SurroundMode
  * Mp2Settings
    * Bitrate
    * Channels
    * SampleRate
  * Mp3Settings
    * Bitrate
    * Channels
    * RateControlMode
    * SampleRate
    * VbrQuality
  * OpusSettings
    * Bitrate
    * Channels
    * SampleRate
  * VorbisSettings
    * Channels
    * SampleRate
    * VbrQuality
  * WavSettings
    * BitDepth
    * Channels
    * Format
    * SampleRate

### AudioDefaultSelection
* AudioDefaultSelection `string` (values: DEFAULT, NOT_DEFAULT): Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.

### AudioDescription
* AudioDescription `object`: Description of audio output
  * AudioChannelTaggingSettings
    * ChannelTag
  * AudioNormalizationSettings
    * Algorithm
    * AlgorithmControl
    * CorrectionGateLevel
    * LoudnessLogging
    * PeakCalculation
    * TargetLkfs
  * AudioSourceName
  * AudioType
  * AudioTypeControl
  * CodecSettings
    * AacSettings
      * AudioDescriptionBroadcasterMix
      * Bitrate
      * CodecProfile
      * CodingMode
      * RateControlMode
      * RawFormat
      * SampleRate
      * Specification
      * VbrQuality
    * Ac3Settings
      * Bitrate
      * BitstreamMode
      * CodingMode
      * Dialnorm
      * DynamicRangeCompressionProfile
      * LfeFilter
      * MetadataControl
      * SampleRate
    * AiffSettings
      * BitDepth
      * Channels
      * SampleRate
    * Codec
    * Eac3AtmosSettings
      * Bitrate
      * BitstreamMode
      * CodingMode
      * DialogueIntelligence
      * DynamicRangeCompressionLine
      * DynamicRangeCompressionRf
      * LoRoCenterMixLevel
      * LoRoSurroundMixLevel
      * LtRtCenterMixLevel
      * LtRtSurroundMixLevel
      * MeteringMode
      * SampleRate
      * SpeechThreshold
      * StereoDownmix
      * SurroundExMode
    * Eac3Settings
      * AttenuationControl
      * Bitrate
      * BitstreamMode
      * CodingMode
      * DcFilter
      * Dialnorm
      * DynamicRangeCompressionLine
      * DynamicRangeCompressionRf
      * LfeControl
      * LfeFilter
      * LoRoCenterMixLevel
      * LoRoSurroundMixLevel
      * LtRtCenterMixLevel
      * LtRtSurroundMixLevel
      * MetadataControl
      * PassthroughControl
      * PhaseControl
      * SampleRate
      * StereoDownmix
      * SurroundExMode
      * SurroundMode
    * Mp2Settings
      * Bitrate
      * Channels
      * SampleRate
    * Mp3Settings
      * Bitrate
      * Channels
      * RateControlMode
      * SampleRate
      * VbrQuality
    * OpusSettings
      * Bitrate
      * Channels
      * SampleRate
    * VorbisSettings
      * Channels
      * SampleRate
      * VbrQuality
    * WavSettings
      * BitDepth
      * Channels
      * Format
      * SampleRate
  * CustomLanguageCode
  * LanguageCode
  * LanguageCodeControl
  * RemixSettings
    * ChannelMapping
      * OutputChannels
        * items [OutputChannelMapping](#outputchannelmapping)
    * ChannelsIn
    * ChannelsOut
  * StreamName

### AudioLanguageCodeControl
* AudioLanguageCodeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Specify which source for language code takes precedence for this audio track. When you choose Follow input (FOLLOW_INPUT), the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code (languageCode or customLanguageCode). When you choose Use configured (USE_CONFIGURED), the service uses the language code that you specify.

### AudioNormalizationAlgorithm
* AudioNormalizationAlgorithm `string` (values: ITU_BS_1770_1, ITU_BS_1770_2, ITU_BS_1770_3, ITU_BS_1770_4): Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1.

### AudioNormalizationAlgorithmControl
* AudioNormalizationAlgorithmControl `string` (values: CORRECT_AUDIO, MEASURE_ONLY): When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.

### AudioNormalizationLoudnessLogging
* AudioNormalizationLoudnessLogging `string` (values: LOG, DONT_LOG): If set to LOG, log each output's audio track loudness to a CSV file.

### AudioNormalizationPeakCalculation
* AudioNormalizationPeakCalculation `string` (values: TRUE_PEAK, NONE): If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.

### AudioNormalizationSettings
* AudioNormalizationSettings `object`: Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
  * Algorithm
  * AlgorithmControl
  * CorrectionGateLevel
  * LoudnessLogging
  * PeakCalculation
  * TargetLkfs

### AudioSelector
* AudioSelector `object`: Selector for Audio
  * CustomLanguageCode
  * DefaultSelection
  * ExternalAudioFileInput
  * LanguageCode
  * Offset
  * Pids
    * items [__integerMin1Max2147483647](#__integermin1max2147483647)
  * ProgramSelection
  * RemixSettings
    * ChannelMapping
      * OutputChannels
        * items [OutputChannelMapping](#outputchannelmapping)
    * ChannelsIn
    * ChannelsOut
  * SelectorType
  * Tracks
    * items [__integerMin1Max2147483647](#__integermin1max2147483647)

### AudioSelectorGroup
* AudioSelectorGroup `object`: Group of Audio Selectors
  * AudioSelectorNames
    * items [__stringMin1](#__stringmin1)

### AudioSelectorType
* AudioSelectorType `string` (values: PID, TRACK, LANGUAGE_CODE): Specifies the type of the audio selector.

### AudioTypeControl
* AudioTypeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.

### AutomatedAbrSettings
* AutomatedAbrSettings `object`: Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.
  * MaxAbrBitrate
  * MaxRenditions
  * MinAbrBitrate

### AutomatedEncodingSettings
* AutomatedEncodingSettings `object`: Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video.
  * AbrSettings
    * MaxAbrBitrate
    * MaxRenditions
    * MinAbrBitrate

### Av1AdaptiveQuantization
* Av1AdaptiveQuantization `string` (values: OFF, LOW, MEDIUM, HIGH, HIGHER, MAX): Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to Spatial adaptive quantization (spatialAdaptiveQuantization).

### Av1FramerateControl
* Av1FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.

### Av1FramerateConversionAlgorithm
* Av1FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE, FRAMEFORMER): Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.

### Av1QvbrSettings
* Av1QvbrSettings `object`: Settings for quality-defined variable bitrate encoding with the AV1 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
  * QvbrQualityLevel
  * QvbrQualityLevelFineTune

### Av1RateControlMode
* Av1RateControlMode `string` (values: QVBR): 'With AV1 outputs, for rate control mode, MediaConvert supports only quality-defined variable bitrate (QVBR). You can''t use CBR or VBR.'

### Av1Settings
* Av1Settings `object`: Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.
  * AdaptiveQuantization
  * FramerateControl
  * FramerateConversionAlgorithm
  * FramerateDenominator
  * FramerateNumerator
  * GopSize
  * MaxBitrate
  * NumberBFramesBetweenReferenceFrames
  * QvbrSettings
    * QvbrQualityLevel
    * QvbrQualityLevelFineTune
  * RateControlMode
  * Slices
  * SpatialAdaptiveQuantization

### Av1SpatialAdaptiveQuantization
* Av1SpatialAdaptiveQuantization `string` (values: DISABLED, ENABLED): Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.

### AvailBlanking
* AvailBlanking `object`: Settings for Avail Blanking
  * AvailBlankingImage

### AvcIntraClass
* AvcIntraClass `string` (values: CLASS_50, CLASS_100, CLASS_200): Specify the AVC-Intra class of your output. The AVC-Intra class selection determines the output video bit rate depending on the frame rate of the output. Outputs with higher class values have higher bitrates and improved image quality.

### AvcIntraFramerateControl
* AvcIntraFramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.

### AvcIntraFramerateConversionAlgorithm
* AvcIntraFramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE, FRAMEFORMER): Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.

### AvcIntraInterlaceMode
* AvcIntraInterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.

### AvcIntraSettings
* AvcIntraSettings `object`: Required when you set your output video codec to AVC-Intra. For more information about the AVC-I settings, see the relevant specification. For detailed information about SD and HD in AVC-I, see https://ieeexplore.ieee.org/document/7290936.
  * AvcIntraClass
  * FramerateControl
  * FramerateConversionAlgorithm
  * FramerateDenominator
  * FramerateNumerator
  * InterlaceMode
  * SlowPal
  * Telecine

### AvcIntraSlowPal
* AvcIntraSlowPal `string` (values: DISABLED, ENABLED): Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.

### AvcIntraTelecine
* AvcIntraTelecine `string` (values: NONE, HARD): When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.

### BadRequestException


### BillingTagsSource
* BillingTagsSource `string` (values: QUEUE, PRESET, JOB_TEMPLATE, JOB): The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.

### BurninDestinationSettings
* BurninDestinationSettings `object`: Burn-In Destination Settings.
  * Alignment
  * BackgroundColor
  * BackgroundOpacity
  * FontColor
  * FontOpacity
  * FontResolution
  * FontScript
  * FontSize
  * OutlineColor
  * OutlineSize
  * ShadowColor
  * ShadowOpacity
  * ShadowXOffset
  * ShadowYOffset
  * TeletextSpacing
  * XPosition
  * YPosition

### BurninSubtitleAlignment
* BurninSubtitleAlignment `string` (values: CENTERED, LEFT): If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.

### BurninSubtitleBackgroundColor
* BurninSubtitleBackgroundColor `string` (values: NONE, BLACK, WHITE): Specifies the color of the rectangle behind the captions.

### BurninSubtitleFontColor
* BurninSubtitleFontColor `string` (values: WHITE, BLACK, YELLOW, RED, GREEN, BLUE): Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.

### BurninSubtitleOutlineColor
* BurninSubtitleOutlineColor `string` (values: BLACK, WHITE, YELLOW, RED, GREEN, BLUE): Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.

### BurninSubtitleShadowColor
* BurninSubtitleShadowColor `string` (values: NONE, BLACK, WHITE): Specifies the color of the shadow cast by the captions.

### BurninSubtitleTeletextSpacing
* BurninSubtitleTeletextSpacing `string` (values: FIXED_GRID, PROPORTIONAL): Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.

### CancelJobRequest
* CancelJobRequest `object`

### CancelJobResponse
* CancelJobResponse `object`

### CaptionDescription
* CaptionDescription `object`: Description of Caption output
  * CaptionSelectorName
  * CustomLanguageCode
  * DestinationSettings
    * BurninDestinationSettings
      * Alignment
      * BackgroundColor
      * BackgroundOpacity
      * FontColor
      * FontOpacity
      * FontResolution
      * FontScript
      * FontSize
      * OutlineColor
      * OutlineSize
      * ShadowColor
      * ShadowOpacity
      * ShadowXOffset
      * ShadowYOffset
      * TeletextSpacing
      * XPosition
      * YPosition
    * DestinationType
    * DvbSubDestinationSettings
      * Alignment
      * BackgroundColor
      * BackgroundOpacity
      * FontColor
      * FontOpacity
      * FontResolution
      * FontScript
      * FontSize
      * OutlineColor
      * OutlineSize
      * ShadowColor
      * ShadowOpacity
      * ShadowXOffset
      * ShadowYOffset
      * SubtitlingType
      * TeletextSpacing
      * XPosition
      * YPosition
    * EmbeddedDestinationSettings
      * Destination608ChannelNumber
      * Destination708ServiceNumber
    * ImscDestinationSettings
      * StylePassthrough
    * SccDestinationSettings
      * Framerate
    * TeletextDestinationSettings
      * PageNumber
      * PageTypes
        * items [TeletextPageType](#teletextpagetype)
    * TtmlDestinationSettings
      * StylePassthrough
  * LanguageCode
  * LanguageDescription

### CaptionDescriptionPreset
* CaptionDescriptionPreset `object`: Caption Description for preset
  * CustomLanguageCode
  * DestinationSettings
    * BurninDestinationSettings
      * Alignment
      * BackgroundColor
      * BackgroundOpacity
      * FontColor
      * FontOpacity
      * FontResolution
      * FontScript
      * FontSize
      * OutlineColor
      * OutlineSize
      * ShadowColor
      * ShadowOpacity
      * ShadowXOffset
      * ShadowYOffset
      * TeletextSpacing
      * XPosition
      * YPosition
    * DestinationType
    * DvbSubDestinationSettings
      * Alignment
      * BackgroundColor
      * BackgroundOpacity
      * FontColor
      * FontOpacity
      * FontResolution
      * FontScript
      * FontSize
      * OutlineColor
      * OutlineSize
      * ShadowColor
      * ShadowOpacity
      * ShadowXOffset
      * ShadowYOffset
      * SubtitlingType
      * TeletextSpacing
      * XPosition
      * YPosition
    * EmbeddedDestinationSettings
      * Destination608ChannelNumber
      * Destination708ServiceNumber
    * ImscDestinationSettings
      * StylePassthrough
    * SccDestinationSettings
      * Framerate
    * TeletextDestinationSettings
      * PageNumber
      * PageTypes
        * items [TeletextPageType](#teletextpagetype)
    * TtmlDestinationSettings
      * StylePassthrough
  * LanguageCode
  * LanguageDescription

### CaptionDestinationSettings
* CaptionDestinationSettings `object`: Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
  * BurninDestinationSettings
    * Alignment
    * BackgroundColor
    * BackgroundOpacity
    * FontColor
    * FontOpacity
    * FontResolution
    * FontScript
    * FontSize
    * OutlineColor
    * OutlineSize
    * ShadowColor
    * ShadowOpacity
    * ShadowXOffset
    * ShadowYOffset
    * TeletextSpacing
    * XPosition
    * YPosition
  * DestinationType
  * DvbSubDestinationSettings
    * Alignment
    * BackgroundColor
    * BackgroundOpacity
    * FontColor
    * FontOpacity
    * FontResolution
    * FontScript
    * FontSize
    * OutlineColor
    * OutlineSize
    * ShadowColor
    * ShadowOpacity
    * ShadowXOffset
    * ShadowYOffset
    * SubtitlingType
    * TeletextSpacing
    * XPosition
    * YPosition
  * EmbeddedDestinationSettings
    * Destination608ChannelNumber
    * Destination708ServiceNumber
  * ImscDestinationSettings
    * StylePassthrough
  * SccDestinationSettings
    * Framerate
  * TeletextDestinationSettings
    * PageNumber
    * PageTypes
      * items [TeletextPageType](#teletextpagetype)
  * TtmlDestinationSettings
    * StylePassthrough

### CaptionDestinationType
* CaptionDestinationType `string` (values: BURN_IN, DVB_SUB, EMBEDDED, EMBEDDED_PLUS_SCTE20, IMSC, SCTE20_PLUS_EMBEDDED, SCC, SRT, SMI, TELETEXT, TTML, WEBVTT): Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Other options are embedded with SCTE-20, burn-in, DVB-sub, IMSC, SCC, SRT, teletext, TTML, and web-VTT. If you are using SCTE-20, choose SCTE-20 plus embedded (SCTE20_PLUS_EMBEDDED) to create an output that complies with the SCTE-43 spec. To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20 (EMBEDDED_PLUS_SCTE20).

### CaptionSelector
* CaptionSelector `object`: Set up captions in your outputs by first selecting them from your input here.
  * CustomLanguageCode
  * LanguageCode
  * SourceSettings
    * AncillarySourceSettings
      * Convert608To708
      * SourceAncillaryChannelNumber
      * TerminateCaptions
    * DvbSubSourceSettings
      * Pid
    * EmbeddedSourceSettings
      * Convert608To708
      * Source608ChannelNumber
      * Source608TrackNumber
      * TerminateCaptions
    * FileSourceSettings
      * Convert608To708
      * Framerate
        * FramerateDenominator
        * FramerateNumerator
      * SourceFile
      * TimeDelta
    * SourceType
    * TeletextSourceSettings
      * PageNumber
    * TrackSourceSettings
      * TrackNumber

### CaptionSourceFramerate
* CaptionSourceFramerate `object`: Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction, using the settings Framerate numerator (framerateNumerator) and Framerate denominator (framerateDenominator). For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.
  * FramerateDenominator
  * FramerateNumerator

### CaptionSourceSettings
* CaptionSourceSettings `object`: If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
  * AncillarySourceSettings
    * Convert608To708
    * SourceAncillaryChannelNumber
    * TerminateCaptions
  * DvbSubSourceSettings
    * Pid
  * EmbeddedSourceSettings
    * Convert608To708
    * Source608ChannelNumber
    * Source608TrackNumber
    * TerminateCaptions
  * FileSourceSettings
    * Convert608To708
    * Framerate
      * FramerateDenominator
      * FramerateNumerator
    * SourceFile
    * TimeDelta
  * SourceType
  * TeletextSourceSettings
    * PageNumber
  * TrackSourceSettings
    * TrackNumber

### CaptionSourceType
* CaptionSourceType `string` (values: ANCILLARY, DVB_SUB, EMBEDDED, SCTE20, SCC, TTML, STL, SRT, SMI, TELETEXT, NULL_SOURCE, IMSC): Use Source (SourceType) to identify the format of your input captions.  The service cannot auto-detect caption format.

### ChannelMapping
* ChannelMapping `object`: Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
  * OutputChannels
    * items [OutputChannelMapping](#outputchannelmapping)

### CmafAdditionalManifest
* CmafAdditionalManifest `object`: Specify the details for each pair of HLS and DASH additional manifests that you want the service to generate for this CMAF output group. Each pair of manifests can reference a different subset of outputs in the group.
  * ManifestNameModifier
  * SelectedOutputs
    * items [__stringMin1](#__stringmin1)

### CmafClientCache
* CmafClientCache `string` (values: DISABLED, ENABLED): Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled (ENABLED) and control caching in your video distribution set up. For example, use the Cache-Control http header.

### CmafCodecSpecification
* CmafCodecSpecification `string` (values: RFC_6381, RFC_4281): Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.

### CmafEncryptionSettings
* CmafEncryptionSettings `object`: Settings for CMAF encryption
  * ConstantInitializationVector
  * EncryptionMethod
  * InitializationVectorInManifest
  * SpekeKeyProvider
    * CertificateArn
    * DashSignaledSystemIds
      * items [__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringmin36max36pattern09afaf809afaf409afaf409afaf409afaf12)
    * HlsSignaledSystemIds
      * items [__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringmin36max36pattern09afaf809afaf409afaf409afaf409afaf12)
    * ResourceId
    * Url
  * StaticKeyProvider
    * KeyFormat
    * KeyFormatVersions
    * StaticKeyValue
    * Url
  * Type

### CmafEncryptionType
* CmafEncryptionType `string` (values: SAMPLE_AES, AES_CTR): Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample (SAMPLE-AES) or AES_CTR (AES-CTR).

### CmafGroupSettings
* CmafGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output.
  * AdditionalManifests
    * items [CmafAdditionalManifest](#cmafadditionalmanifest)
  * BaseUrl
  * ClientCache
  * CodecSpecification
  * Destination
  * DestinationSettings
    * S3Settings
      * AccessControl
        * CannedAcl
      * Encryption
        * EncryptionType
        * KmsKeyArn
  * Encryption
    * ConstantInitializationVector
    * EncryptionMethod
    * InitializationVectorInManifest
    * SpekeKeyProvider
      * CertificateArn
      * DashSignaledSystemIds
        * items [__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringmin36max36pattern09afaf809afaf409afaf409afaf409afaf12)
      * HlsSignaledSystemIds
        * items [__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringmin36max36pattern09afaf809afaf409afaf409afaf409afaf12)
      * ResourceId
      * Url
    * StaticKeyProvider
      * KeyFormat
      * KeyFormatVersions
      * StaticKeyValue
      * Url
    * Type
  * FragmentLength
  * ManifestCompression
  * ManifestDurationFormat
  * MinBufferTime
  * MinFinalSegmentLength
  * MpdProfile
  * SegmentControl
  * SegmentLength
  * StreamInfResolution
  * WriteDashManifest
  * WriteHlsManifest
  * WriteSegmentTimelineInRepresentation

### CmafInitializationVectorInManifest
* CmafInitializationVectorInManifest `string` (values: INCLUDE, EXCLUDE): When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests.

### CmafKeyProviderType
* CmafKeyProviderType `string` (values: SPEKE, STATIC_KEY): Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.

### CmafManifestCompression
* CmafManifestCompression `string` (values: GZIP, NONE): When set to GZIP, compresses HLS playlist.

### CmafManifestDurationFormat
* CmafManifestDurationFormat `string` (values: FLOATING_POINT, INTEGER): Indicates whether the output manifest should use floating point values for segment duration.

### CmafMpdProfile
* CmafMpdProfile `string` (values: MAIN_PROFILE, ON_DEMAND_PROFILE): Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).

### CmafSegmentControl
* CmafSegmentControl `string` (values: SINGLE_FILE, SEGMENTED_FILES): When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.

### CmafStreamInfResolution
* CmafStreamInfResolution `string` (values: INCLUDE, EXCLUDE): Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.

### CmafWriteDASHManifest
* CmafWriteDASHManifest `string` (values: DISABLED, ENABLED): When set to ENABLED, a DASH MPD manifest will be generated for this output.

### CmafWriteHLSManifest
* CmafWriteHLSManifest `string` (values: DISABLED, ENABLED): When set to ENABLED, an Apple HLS manifest will be generated for this output.

### CmafWriteSegmentTimelineInRepresentation
* CmafWriteSegmentTimelineInRepresentation `string` (values: ENABLED, DISABLED): When you enable Precise segment duration in DASH manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.

### CmfcAudioDuration
* CmfcAudioDuration `string` (values: DEFAULT_CODEC_DURATION, MATCH_VIDEO_DURATION): Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.

### CmfcScte35Esam
* CmfcScte35Esam `string` (values: INSERT, NONE): Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).

### CmfcScte35Source
* CmfcScte35Source `string` (values: PASSTHROUGH, NONE): Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.

### CmfcSettings
* CmfcSettings `object`: Settings for MP4 segments in CMAF
  * AudioDuration
  * Scte35Esam
  * Scte35Source

### ColorCorrector
* ColorCorrector `object`: Settings for color correction.
  * Brightness
  * ColorSpaceConversion
  * Contrast
  * Hdr10Metadata
    * BluePrimaryX
    * BluePrimaryY
    * GreenPrimaryX
    * GreenPrimaryY
    * MaxContentLightLevel
    * MaxFrameAverageLightLevel
    * MaxLuminance
    * MinLuminance
    * RedPrimaryX
    * RedPrimaryY
    * WhitePointX
    * WhitePointY
  * Hue
  * Saturation

### ColorMetadata
* ColorMetadata `string` (values: IGNORE, INSERT): Choose Insert (INSERT) for this setting to include color metadata in this output. Choose Ignore (IGNORE) to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default.

### ColorSpace
* ColorSpace `string` (values: FOLLOW, REC_601, REC_709, HDR10, HLG_2020): If your input video has accurate color space metadata, or if you don't know about color space, leave this set to the default value Follow (FOLLOW). The service will automatically detect your input color space. If your input video has metadata indicating the wrong color space, specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate, choose Force HDR 10 (FORCE_HDR10) here and specify correct values in the input HDR 10 metadata (Hdr10Metadata) settings. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.

### ColorSpaceConversion
* ColorSpaceConversion `string` (values: NONE, FORCE_601, FORCE_709, FORCE_HDR10, FORCE_HLG_2020): Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, from SDR to HDR, and from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output. HDR to SDR conversion uses Elemental tone mapping technology to approximate the outcome of manually regrading from HDR to SDR.

### ColorSpaceUsage
* ColorSpaceUsage `string` (values: FORCE, FALLBACK): There are two sources for color metadata, the input file and the job input settings Color space (ColorSpace) and HDR master display information settings(Hdr10Metadata). The Color space usage setting determines which takes precedence. Choose Force (FORCE) to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback (FALLBACK) to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings.

### Commitment
* Commitment `string` (values: ONE_YEAR): The length of the term of your reserved queue pricing plan commitment.

### ConflictException


### ContainerSettings
* ContainerSettings `object`: Container specific settings.
  * CmfcSettings
    * AudioDuration
    * Scte35Esam
    * Scte35Source
  * Container
  * F4vSettings
    * MoovPlacement
  * M2tsSettings
    * AudioBufferModel
    * AudioDuration
    * AudioFramesPerPes
    * AudioPids
      * items [__integerMin32Max8182](#__integermin32max8182)
    * Bitrate
    * BufferModel
    * DvbNitSettings
      * NetworkId
      * NetworkName
      * NitInterval
    * DvbSdtSettings
      * OutputSdt
      * SdtInterval
      * ServiceName
      * ServiceProviderName
    * DvbSubPids
      * items [__integerMin32Max8182](#__integermin32max8182)
    * DvbTdtSettings
      * TdtInterval
    * DvbTeletextPid
    * EbpAudioInterval
    * EbpPlacement
    * EsRateInPes
    * ForceTsVideoEbpOrder
    * FragmentTime
    * MaxPcrInterval
    * MinEbpInterval
    * NielsenId3
    * NullPacketBitrate
    * PatInterval
    * PcrControl
    * PcrPid
    * PmtInterval
    * PmtPid
    * PrivateMetadataPid
    * ProgramNumber
    * RateMode
    * Scte35Esam
      * Scte35EsamPid
    * Scte35Pid
    * Scte35Source
    * SegmentationMarkers
    * SegmentationStyle
    * SegmentationTime
    * TimedMetadataPid
    * TransportStreamId
    * VideoPid
  * M3u8Settings
    * AudioDuration
    * AudioFramesPerPes
    * AudioPids
      * items [__integerMin32Max8182](#__integermin32max8182)
    * NielsenId3
    * PatInterval
    * PcrControl
    * PcrPid
    * PmtInterval
    * PmtPid
    * PrivateMetadataPid
    * ProgramNumber
    * Scte35Pid
    * Scte35Source
    * TimedMetadata
    * TimedMetadataPid
    * TransportStreamId
    * VideoPid
  * MovSettings
    * ClapAtom
    * CslgAtom
    * Mpeg2FourCCControl
    * PaddingControl
    * Reference
  * Mp4Settings
    * AudioDuration
    * CslgAtom
    * CttsVersion
    * FreeSpaceBox
    * MoovPlacement
    * Mp4MajorBrand
  * MpdSettings
    * AccessibilityCaptionHints
    * AudioDuration
    * CaptionContainerType
    * Scte35Esam
    * Scte35Source
  * MxfSettings
    * AfdSignaling
    * Profile

### ContainerType
* ContainerType `string` (values: F4V, ISMV, M2TS, M3U8, CMFC, MOV, MP4, MPD, MXF, WEBM, RAW): Container for this output. Some containers require a container settings object. If not specified, the default object will be created.

### CreateJobRequest
* CreateJobRequest `object`
  * AccelerationSettings
    * Mode **required**
  * BillingTagsSource
  * ClientRequestToken
  * HopDestinations
    * items [HopDestination](#hopdestination)
  * JobTemplate
  * Priority
  * Queue
  * Role **required**
  * Settings **required**
    * AdAvailOffset
    * AvailBlanking
      * AvailBlankingImage
    * Esam
      * ManifestConfirmConditionNotification
        * MccXml
      * ResponseSignalPreroll
      * SignalProcessingNotification
        * SccXml
    * Inputs
      * items [Input](#input)
    * MotionImageInserter
      * Framerate
        * FramerateDenominator
        * FramerateNumerator
      * Input
      * InsertionMode
      * Offset
        * ImageX
        * ImageY
      * Playback
      * StartTime
    * NielsenConfiguration
      * BreakoutCode
      * DistributorId
    * NielsenNonLinearWatermark
      * ActiveWatermarkProcess
      * AdiFilename
      * AssetId
      * AssetName
      * CbetSourceId
      * EpisodeId
      * MetadataDestination
      * SourceId
      * SourceWatermarkStatus
      * TicServerUrl
      * UniqueTicPerAudioTrack
    * OutputGroups
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig
      * Anchor
      * Source
      * Start
      * TimestampOffset
    * TimedMetadataInsertion
      * Id3Insertions
        * items [Id3Insertion](#id3insertion)
  * SimulateReservedQueue
  * StatusUpdateInterval
  * Tags
  * UserMetadata

### CreateJobResponse
* CreateJobResponse `object`
  * Job
    * AccelerationSettings
      * Mode **required**
    * AccelerationStatus
    * Arn
    * BillingTagsSource
    * CreatedAt
    * CurrentPhase
    * ErrorCode
    * ErrorMessage
    * HopDestinations
      * items [HopDestination](#hopdestination)
    * Id
    * JobPercentComplete
    * JobTemplate
    * Messages
      * Info
        * items [__string](#__string)
      * Warning
        * items [__string](#__string)
    * OutputGroupDetails
      * items [OutputGroupDetail](#outputgroupdetail)
    * Priority
    * Queue
    * QueueTransitions
      * items [QueueTransition](#queuetransition)
    * RetryCount
    * Role **required**
    * Settings **required**
      * AdAvailOffset
      * AvailBlanking
        * AvailBlankingImage
      * Esam
        * ManifestConfirmConditionNotification
          * MccXml
        * ResponseSignalPreroll
        * SignalProcessingNotification
          * SccXml
      * Inputs
        * items [Input](#input)
      * MotionImageInserter
        * Framerate
          * FramerateDenominator
          * FramerateNumerator
        * Input
        * InsertionMode
        * Offset
          * ImageX
          * ImageY
        * Playback
        * StartTime
      * NielsenConfiguration
        * BreakoutCode
        * DistributorId
      * NielsenNonLinearWatermark
        * ActiveWatermarkProcess
        * AdiFilename
        * AssetId
        * AssetName
        * CbetSourceId
        * EpisodeId
        * MetadataDestination
        * SourceId
        * SourceWatermarkStatus
        * TicServerUrl
        * UniqueTicPerAudioTrack
      * OutputGroups
        * items [OutputGroup](#outputgroup)
      * TimecodeConfig
        * Anchor
        * Source
        * Start
        * TimestampOffset
      * TimedMetadataInsertion
        * Id3Insertions
          * items [Id3Insertion](#id3insertion)
    * SimulateReservedQueue
    * Status
    * StatusUpdateInterval
    * Timing
      * FinishTime
      * StartTime
      * SubmitTime
    * UserMetadata

### CreateJobTemplateRequest
* CreateJobTemplateRequest `object`
  * AccelerationSettings
    * Mode **required**
  * Category
  * Description
  * HopDestinations
    * items [HopDestination](#hopdestination)
  * Name **required**
  * Priority
  * Queue
  * Settings **required**
    * AdAvailOffset
    * AvailBlanking
      * AvailBlankingImage
    * Esam
      * ManifestConfirmConditionNotification
        * MccXml
      * ResponseSignalPreroll
      * SignalProcessingNotification
        * SccXml
    * Inputs
      * items [InputTemplate](#inputtemplate)
    * MotionImageInserter
      * Framerate
        * FramerateDenominator
        * FramerateNumerator
      * Input
      * InsertionMode
      * Offset
        * ImageX
        * ImageY
      * Playback
      * StartTime
    * NielsenConfiguration
      * BreakoutCode
      * DistributorId
    * NielsenNonLinearWatermark
      * ActiveWatermarkProcess
      * AdiFilename
      * AssetId
      * AssetName
      * CbetSourceId
      * EpisodeId
      * MetadataDestination
      * SourceId
      * SourceWatermarkStatus
      * TicServerUrl
      * UniqueTicPerAudioTrack
    * OutputGroups
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig
      * Anchor
      * Source
      * Start
      * TimestampOffset
    * TimedMetadataInsertion
      * Id3Insertions
        * items [Id3Insertion](#id3insertion)
  * StatusUpdateInterval
  * Tags

### CreateJobTemplateResponse
* CreateJobTemplateResponse `object`
  * JobTemplate
    * AccelerationSettings
      * Mode **required**
    * Arn
    * Category
    * CreatedAt
    * Description
    * HopDestinations
      * items [HopDestination](#hopdestination)
    * LastUpdated
    * Name **required**
    * Priority
    * Queue
    * Settings **required**
      * AdAvailOffset
      * AvailBlanking
        * AvailBlankingImage
      * Esam
        * ManifestConfirmConditionNotification
          * MccXml
        * ResponseSignalPreroll
        * SignalProcessingNotification
          * SccXml
      * Inputs
        * items [InputTemplate](#inputtemplate)
      * MotionImageInserter
        * Framerate
          * FramerateDenominator
          * FramerateNumerator
        * Input
        * InsertionMode
        * Offset
          * ImageX
          * ImageY
        * Playback
        * StartTime
      * NielsenConfiguration
        * BreakoutCode
        * DistributorId
      * NielsenNonLinearWatermark
        * ActiveWatermarkProcess
        * AdiFilename
        * AssetId
        * AssetName
        * CbetSourceId
        * EpisodeId
        * MetadataDestination
        * SourceId
        * SourceWatermarkStatus
        * TicServerUrl
        * UniqueTicPerAudioTrack
      * OutputGroups
        * items [OutputGroup](#outputgroup)
      * TimecodeConfig
        * Anchor
        * Source
        * Start
        * TimestampOffset
      * TimedMetadataInsertion
        * Id3Insertions
          * items [Id3Insertion](#id3insertion)
    * StatusUpdateInterval
    * Type

### CreatePresetRequest
* CreatePresetRequest `object`
  * Category
  * Description
  * Name **required**
  * Settings **required**
    * AudioDescriptions
      * items [AudioDescription](#audiodescription)
    * CaptionDescriptions
      * items [CaptionDescriptionPreset](#captiondescriptionpreset)
    * ContainerSettings
      * CmfcSettings
        * AudioDuration
        * Scte35Esam
        * Scte35Source
      * Container
      * F4vSettings
        * MoovPlacement
      * M2tsSettings
        * AudioBufferModel
        * AudioDuration
        * AudioFramesPerPes
        * AudioPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * Bitrate
        * BufferModel
        * DvbNitSettings
          * NetworkId
          * NetworkName
          * NitInterval
        * DvbSdtSettings
          * OutputSdt
          * SdtInterval
          * ServiceName
          * ServiceProviderName
        * DvbSubPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * DvbTdtSettings
          * TdtInterval
        * DvbTeletextPid
        * EbpAudioInterval
        * EbpPlacement
        * EsRateInPes
        * ForceTsVideoEbpOrder
        * FragmentTime
        * MaxPcrInterval
        * MinEbpInterval
        * NielsenId3
        * NullPacketBitrate
        * PatInterval
        * PcrControl
        * PcrPid
        * PmtInterval
        * PmtPid
        * PrivateMetadataPid
        * ProgramNumber
        * RateMode
        * Scte35Esam
          * Scte35EsamPid
        * Scte35Pid
        * Scte35Source
        * SegmentationMarkers
        * SegmentationStyle
        * SegmentationTime
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * M3u8Settings
        * AudioDuration
        * AudioFramesPerPes
        * AudioPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * NielsenId3
        * PatInterval
        * PcrControl
        * PcrPid
        * PmtInterval
        * PmtPid
        * PrivateMetadataPid
        * ProgramNumber
        * Scte35Pid
        * Scte35Source
        * TimedMetadata
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * MovSettings
        * ClapAtom
        * CslgAtom
        * Mpeg2FourCCControl
        * PaddingControl
        * Reference
      * Mp4Settings
        * AudioDuration
        * CslgAtom
        * CttsVersion
        * FreeSpaceBox
        * MoovPlacement
        * Mp4MajorBrand
      * MpdSettings
        * AccessibilityCaptionHints
        * AudioDuration
        * CaptionContainerType
        * Scte35Esam
        * Scte35Source
      * MxfSettings
        * AfdSignaling
        * Profile
    * VideoDescription
      * AfdSignaling
      * AntiAlias
      * CodecSettings
        * Av1Settings
          * AdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * MaxBitrate
          * NumberBFramesBetweenReferenceFrames
          * QvbrSettings
          * RateControlMode
          * Slices
          * SpatialAdaptiveQuantization
        * AvcIntraSettings
          * AvcIntraClass
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * SlowPal
          * Telecine
        * Codec
        * FrameCaptureSettings
          * FramerateDenominator
          * FramerateNumerator
          * MaxCaptures
          * Quality
        * H264Settings
          * AdaptiveQuantization
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * EntropyEncoding
          * FieldEncoding
          * FlickerAdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopBReference
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * NumberReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * QvbrSettings
          * RateControlMode
          * RepeatPps
          * SceneChangeDetect
          * Slices
          * SlowPal
          * Softness
          * SpatialAdaptiveQuantization
          * Syntax
          * Telecine
          * TemporalAdaptiveQuantization
          * UnregisteredSeiTimecode
        * H265Settings
          * AdaptiveQuantization
          * AlternateTransferFunctionSei
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * FlickerAdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopBReference
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * NumberReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * QvbrSettings
          * RateControlMode
          * SampleAdaptiveOffsetFilterMode
          * SceneChangeDetect
          * Slices
          * SlowPal
          * SpatialAdaptiveQuantization
          * Telecine
          * TemporalAdaptiveQuantization
          * TemporalIds
          * Tiles
          * UnregisteredSeiTimecode
          * WriteMp4PackagingType
        * Mpeg2Settings
          * AdaptiveQuantization
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * IntraDcPrecision
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
          * SceneChangeDetect
          * SlowPal
          * Softness
          * SpatialAdaptiveQuantization
          * Syntax
          * Telecine
          * TemporalAdaptiveQuantization
        * ProresSettings
          * CodecProfile
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * ParControl
          * ParDenominator
          * ParNumerator
          * SlowPal
          * Telecine
        * Vc3Settings
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * SlowPal
          * Telecine
          * Vc3Class
        * Vp8Settings
          * Bitrate
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * HrdBufferSize
          * MaxBitrate
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
        * Vp9Settings
          * Bitrate
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * HrdBufferSize
          * MaxBitrate
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
      * ColorMetadata
      * Crop
        * Height
        * Width
        * X
        * Y
      * DropFrameTimecode
      * FixedAfd
      * Height
      * Position
        * Height
        * Width
        * X
        * Y
      * RespondToAfd
      * ScalingBehavior
      * Sharpness
      * TimecodeInsertion
      * VideoPreprocessors
        * ColorCorrector
          * Brightness
          * ColorSpaceConversion
          * Contrast
          * Hdr10Metadata
          * Hue
          * Saturation
        * Deinterlacer
          * Algorithm
          * Control
          * Mode
        * DolbyVision
          * L6Metadata
          * L6Mode
          * Profile
        * ImageInserter
          * InsertableImages
        * NoiseReducer
          * Filter
          * FilterSettings
          * SpatialFilterSettings
          * TemporalFilterSettings
        * PartnerWatermarking
          * NexguardFileMarkerSettings
        * TimecodeBurnin
          * FontSize
          * Position
          * Prefix
      * Width
  * Tags

### CreatePresetResponse
* CreatePresetResponse `object`
  * Preset
    * Arn
    * Category
    * CreatedAt
    * Description
    * LastUpdated
    * Name **required**
    * Settings **required**
      * AudioDescriptions
        * items [AudioDescription](#audiodescription)
      * CaptionDescriptions
        * items [CaptionDescriptionPreset](#captiondescriptionpreset)
      * ContainerSettings
        * CmfcSettings
          * AudioDuration
          * Scte35Esam
          * Scte35Source
        * Container
        * F4vSettings
          * MoovPlacement
        * M2tsSettings
          * AudioBufferModel
          * AudioDuration
          * AudioFramesPerPes
          * AudioPids
          * Bitrate
          * BufferModel
          * DvbNitSettings
          * DvbSdtSettings
          * DvbSubPids
          * DvbTdtSettings
          * DvbTeletextPid
          * EbpAudioInterval
          * EbpPlacement
          * EsRateInPes
          * ForceTsVideoEbpOrder
          * FragmentTime
          * MaxPcrInterval
          * MinEbpInterval
          * NielsenId3
          * NullPacketBitrate
          * PatInterval
          * PcrControl
          * PcrPid
          * PmtInterval
          * PmtPid
          * PrivateMetadataPid
          * ProgramNumber
          * RateMode
          * Scte35Esam
          * Scte35Pid
          * Scte35Source
          * SegmentationMarkers
          * SegmentationStyle
          * SegmentationTime
          * TimedMetadataPid
          * TransportStreamId
          * VideoPid
        * M3u8Settings
          * AudioDuration
          * AudioFramesPerPes
          * AudioPids
          * NielsenId3
          * PatInterval
          * PcrControl
          * PcrPid
          * PmtInterval
          * PmtPid
          * PrivateMetadataPid
          * ProgramNumber
          * Scte35Pid
          * Scte35Source
          * TimedMetadata
          * TimedMetadataPid
          * TransportStreamId
          * VideoPid
        * MovSettings
          * ClapAtom
          * CslgAtom
          * Mpeg2FourCCControl
          * PaddingControl
          * Reference
        * Mp4Settings
          * AudioDuration
          * CslgAtom
          * CttsVersion
          * FreeSpaceBox
          * MoovPlacement
          * Mp4MajorBrand
        * MpdSettings
          * AccessibilityCaptionHints
          * AudioDuration
          * CaptionContainerType
          * Scte35Esam
          * Scte35Source
        * MxfSettings
          * AfdSignaling
          * Profile
      * VideoDescription
        * AfdSignaling
        * AntiAlias
        * CodecSettings
          * Av1Settings
          * AvcIntraSettings
          * Codec
          * FrameCaptureSettings
          * H264Settings
          * H265Settings
          * Mpeg2Settings
          * ProresSettings
          * Vc3Settings
          * Vp8Settings
          * Vp9Settings
        * ColorMetadata
        * Crop
          * Height
          * Width
          * X
          * Y
        * DropFrameTimecode
        * FixedAfd
        * Height
        * Position
          * Height
          * Width
          * X
          * Y
        * RespondToAfd
        * ScalingBehavior
        * Sharpness
        * TimecodeInsertion
        * VideoPreprocessors
          * ColorCorrector
          * Deinterlacer
          * DolbyVision
          * ImageInserter
          * NoiseReducer
          * PartnerWatermarking
          * TimecodeBurnin
        * Width
    * Type

### CreateQueueRequest
* CreateQueueRequest `object`
  * Description
  * Name **required**
  * PricingPlan
  * ReservationPlanSettings
    * Commitment **required**
    * RenewalType **required**
    * ReservedSlots **required**
  * Status
  * Tags

### CreateQueueResponse
* CreateQueueResponse `object`
  * Queue
    * Arn
    * CreatedAt
    * Description
    * LastUpdated
    * Name **required**
    * PricingPlan
    * ProgressingJobsCount
    * ReservationPlan
      * Commitment
      * ExpiresAt
      * PurchasedAt
      * RenewalType
      * ReservedSlots
      * Status
    * Status
    * SubmittedJobsCount
    * Type

### DashAdditionalManifest
* DashAdditionalManifest `object`: Specify the details for each additional DASH manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
  * ManifestNameModifier
  * SelectedOutputs
    * items [__stringMin1](#__stringmin1)

### DashIsoEncryptionSettings
* DashIsoEncryptionSettings `object`: Specifies DRM settings for DASH outputs.
  * PlaybackDeviceCompatibility
  * SpekeKeyProvider
    * CertificateArn
    * ResourceId
    * SystemIds
      * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)
    * Url

### DashIsoGroupSettings
* DashIsoGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
  * AdditionalManifests
    * items [DashAdditionalManifest](#dashadditionalmanifest)
  * BaseUrl
  * Destination
  * DestinationSettings
    * S3Settings
      * AccessControl
        * CannedAcl
      * Encryption
        * EncryptionType
        * KmsKeyArn
  * Encryption
    * PlaybackDeviceCompatibility
    * SpekeKeyProvider
      * CertificateArn
      * ResourceId
      * SystemIds
        * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)
      * Url
  * FragmentLength
  * HbbtvCompliance
  * MinBufferTime
  * MinFinalSegmentLength
  * MpdProfile
  * SegmentControl
  * SegmentLength
  * WriteSegmentTimelineInRepresentation

### DashIsoHbbtvCompliance
* DashIsoHbbtvCompliance `string` (values: HBBTV_1_5, NONE): Supports HbbTV specification as indicated

### DashIsoMpdProfile
* DashIsoMpdProfile `string` (values: MAIN_PROFILE, ON_DEMAND_PROFILE): Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).

### DashIsoPlaybackDeviceCompatibility
* DashIsoPlaybackDeviceCompatibility `string` (values: CENC_V1, UNENCRYPTED_SEI): This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI (UNENCRYPTED_SEI) only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1 (CENC_V1). If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted.

### DashIsoSegmentControl
* DashIsoSegmentControl `string` (values: SINGLE_FILE, SEGMENTED_FILES): When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.

### DashIsoWriteSegmentTimelineInRepresentation
* DashIsoWriteSegmentTimelineInRepresentation `string` (values: ENABLED, DISABLED): When you enable Precise segment duration in manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.

### DecryptionMode
* DecryptionMode `string` (values: AES_CTR, AES_CBC, AES_GCM): Specify the encryption mode that you used to encrypt your input files.

### DeinterlaceAlgorithm
* DeinterlaceAlgorithm `string` (values: INTERPOLATE, INTERPOLATE_TICKER, BLEND, BLEND_TICKER): Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.

### Deinterlacer
* Deinterlacer `object`: Settings for deinterlacer
  * Algorithm
  * Control
  * Mode

### DeinterlacerControl
* DeinterlacerControl `string` (values: FORCE_ALL_FRAMES, NORMAL): - When set to NORMAL (default), the deinterlacer does not convert frames that are tagged  in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is  a good chance that the metadata has tagged frames as progressive when they are not  progressive. Do not turn on otherwise; processing frames that are already progressive  into progressive will probably result in lower quality video.

### DeinterlacerMode
* DeinterlacerMode `string` (values: DEINTERLACE, INVERSE_TELECINE, ADAPTIVE): Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive.

### DeleteJobTemplateRequest
* DeleteJobTemplateRequest `object`

### DeleteJobTemplateResponse
* DeleteJobTemplateResponse `object`

### DeletePresetRequest
* DeletePresetRequest `object`

### DeletePresetResponse
* DeletePresetResponse `object`

### DeleteQueueRequest
* DeleteQueueRequest `object`

### DeleteQueueResponse
* DeleteQueueResponse `object`

### DescribeEndpointsMode
* DescribeEndpointsMode `string` (values: DEFAULT, GET_ONLY): Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.

### DescribeEndpointsRequest
* DescribeEndpointsRequest `object`: DescribeEndpointsRequest
  * MaxResults
  * Mode
  * NextToken

### DescribeEndpointsResponse
* DescribeEndpointsResponse `object`
  * Endpoints
    * items [Endpoint](#endpoint)
  * NextToken

### DestinationSettings
* DestinationSettings `object`: Settings associated with the destination. Will vary based on the type of destination
  * S3Settings
    * AccessControl
      * CannedAcl
    * Encryption
      * EncryptionType
      * KmsKeyArn

### DisassociateCertificateRequest
* DisassociateCertificateRequest `object`

### DisassociateCertificateResponse
* DisassociateCertificateResponse `object`

### DolbyVision
* DolbyVision `object`: Settings for Dolby Vision
  * L6Metadata
    * MaxCll
    * MaxFall
  * L6Mode
  * Profile

### DolbyVisionLevel6Metadata
* DolbyVisionLevel6Metadata `object`: Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.
  * MaxCll
  * MaxFall

### DolbyVisionLevel6Mode
* DolbyVisionLevel6Mode `string` (values: PASSTHROUGH, RECALCULATE, SPECIFY): Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies.

### DolbyVisionProfile
* DolbyVisionProfile `string` (values: PROFILE_5): In the current MediaConvert implementation, the Dolby Vision profile is always 5 (PROFILE_5). Therefore, all of your inputs must contain Dolby Vision frame interleaved data.

### DropFrameTimecode
* DropFrameTimecode `string` (values: DISABLED, ENABLED): Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.

### DvbNitSettings
* DvbNitSettings `object`: Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
  * NetworkId
  * NetworkName
  * NitInterval

### DvbSdtSettings
* DvbSdtSettings `object`: Inserts DVB Service Description Table (NIT) at the specified table repetition interval.
  * OutputSdt
  * SdtInterval
  * ServiceName
  * ServiceProviderName

### DvbSubDestinationSettings
* DvbSubDestinationSettings `object`: DVB-Sub Destination Settings
  * Alignment
  * BackgroundColor
  * BackgroundOpacity
  * FontColor
  * FontOpacity
  * FontResolution
  * FontScript
  * FontSize
  * OutlineColor
  * OutlineSize
  * ShadowColor
  * ShadowOpacity
  * ShadowXOffset
  * ShadowYOffset
  * SubtitlingType
  * TeletextSpacing
  * XPosition
  * YPosition

### DvbSubSourceSettings
* DvbSubSourceSettings `object`: DVB Sub Source Settings
  * Pid

### DvbSubtitleAlignment
* DvbSubtitleAlignment `string` (values: CENTERED, LEFT): If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.

### DvbSubtitleBackgroundColor
* DvbSubtitleBackgroundColor `string` (values: NONE, BLACK, WHITE): Specifies the color of the rectangle behind the captions.

### DvbSubtitleFontColor
* DvbSubtitleFontColor `string` (values: WHITE, BLACK, YELLOW, RED, GREEN, BLUE): Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.

### DvbSubtitleOutlineColor
* DvbSubtitleOutlineColor `string` (values: BLACK, WHITE, YELLOW, RED, GREEN, BLUE): Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.

### DvbSubtitleShadowColor
* DvbSubtitleShadowColor `string` (values: NONE, BLACK, WHITE): Specifies the color of the shadow cast by the captions.

### DvbSubtitleTeletextSpacing
* DvbSubtitleTeletextSpacing `string` (values: FIXED_GRID, PROPORTIONAL): Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.

### DvbSubtitlingType
* DvbSubtitlingType `string` (values: HEARING_IMPAIRED, STANDARD): Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue.

### DvbTdtSettings
* DvbTdtSettings `object`: Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
  * TdtInterval

### Eac3AtmosBitstreamMode
* Eac3AtmosBitstreamMode `string` (values: COMPLETE_MAIN): Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).

### Eac3AtmosCodingMode
* Eac3AtmosCodingMode `string` (values: CODING_MODE_9_1_6): The coding mode for Dolby Digital Plus JOC (Atmos) is always 9.1.6 (CODING_MODE_9_1_6).

### Eac3AtmosDialogueIntelligence
* Eac3AtmosDialogueIntelligence `string` (values: ENABLED, DISABLED): Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis.

### Eac3AtmosDynamicRangeCompressionLine
* Eac3AtmosDynamicRangeCompressionLine `string` (values: NONE, FILM_STANDARD, FILM_LIGHT, MUSIC_STANDARD, MUSIC_LIGHT, SPEECH): Specify the absolute peak level for a signal with dynamic range compression.

### Eac3AtmosDynamicRangeCompressionRf
* Eac3AtmosDynamicRangeCompressionRf `string` (values: NONE, FILM_STANDARD, FILM_LIGHT, MUSIC_STANDARD, MUSIC_LIGHT, SPEECH): Specify how the service limits the audio dynamic range when compressing the audio.

### Eac3AtmosMeteringMode
* Eac3AtmosMeteringMode `string` (values: LEQ_A, ITU_BS_1770_1, ITU_BS_1770_2, ITU_BS_1770_3, ITU_BS_1770_4): Choose how the service meters the loudness of your audio.

### Eac3AtmosSettings
* Eac3AtmosSettings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
  * Bitrate
  * BitstreamMode
  * CodingMode
  * DialogueIntelligence
  * DynamicRangeCompressionLine
  * DynamicRangeCompressionRf
  * LoRoCenterMixLevel
  * LoRoSurroundMixLevel
  * LtRtCenterMixLevel
  * LtRtSurroundMixLevel
  * MeteringMode
  * SampleRate
  * SpeechThreshold
  * StereoDownmix
  * SurroundExMode

### Eac3AtmosStereoDownmix
* Eac3AtmosStereoDownmix `string` (values: NOT_INDICATED, STEREO, SURROUND, DPL2): Choose how the service does stereo downmixing.

### Eac3AtmosSurroundExMode
* Eac3AtmosSurroundExMode `string` (values: NOT_INDICATED, ENABLED, DISABLED): Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels.

### Eac3AttenuationControl
* Eac3AttenuationControl `string` (values: ATTENUATE_3_DB, NONE): If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.

### Eac3BitstreamMode
* Eac3BitstreamMode `string` (values: COMPLETE_MAIN, COMMENTARY, EMERGENCY, HEARING_IMPAIRED, VISUALLY_IMPAIRED): Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).

### Eac3CodingMode
* Eac3CodingMode `string` (values: CODING_MODE_1_0, CODING_MODE_2_0, CODING_MODE_3_2): Dolby Digital Plus coding mode. Determines number of channels.

### Eac3DcFilter
* Eac3DcFilter `string` (values: ENABLED, DISABLED): Activates a DC highpass filter for all input channels.

### Eac3DynamicRangeCompressionLine
* Eac3DynamicRangeCompressionLine `string` (values: NONE, FILM_STANDARD, FILM_LIGHT, MUSIC_STANDARD, MUSIC_LIGHT, SPEECH): Specify the absolute peak level for a signal with dynamic range compression.

### Eac3DynamicRangeCompressionRf
* Eac3DynamicRangeCompressionRf `string` (values: NONE, FILM_STANDARD, FILM_LIGHT, MUSIC_STANDARD, MUSIC_LIGHT, SPEECH): Specify how the service limits the audio dynamic range when compressing the audio.

### Eac3LfeControl
* Eac3LfeControl `string` (values: LFE, NO_LFE): When encoding 3/2 audio, controls whether the LFE channel is enabled

### Eac3LfeFilter
* Eac3LfeFilter `string` (values: ENABLED, DISABLED): Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.

### Eac3MetadataControl
* Eac3MetadataControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.

### Eac3PassthroughControl
* Eac3PassthroughControl `string` (values: WHEN_POSSIBLE, NO_PASSTHROUGH): When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.

### Eac3PhaseControl
* Eac3PhaseControl `string` (values: SHIFT_90_DEGREES, NO_SHIFT): Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.

### Eac3Settings
* Eac3Settings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
  * AttenuationControl
  * Bitrate
  * BitstreamMode
  * CodingMode
  * DcFilter
  * Dialnorm
  * DynamicRangeCompressionLine
  * DynamicRangeCompressionRf
  * LfeControl
  * LfeFilter
  * LoRoCenterMixLevel
  * LoRoSurroundMixLevel
  * LtRtCenterMixLevel
  * LtRtSurroundMixLevel
  * MetadataControl
  * PassthroughControl
  * PhaseControl
  * SampleRate
  * StereoDownmix
  * SurroundExMode
  * SurroundMode

### Eac3StereoDownmix
* Eac3StereoDownmix `string` (values: NOT_INDICATED, LO_RO, LT_RT, DPL2): Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Stereo downmix (Eac3StereoDownmix).

### Eac3SurroundExMode
* Eac3SurroundExMode `string` (values: NOT_INDICATED, ENABLED, DISABLED): When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.

### Eac3SurroundMode
* Eac3SurroundMode `string` (values: NOT_INDICATED, ENABLED, DISABLED): When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.

### EmbeddedConvert608To708
* EmbeddedConvert608To708 `string` (values: UPCONVERT, DISABLED): Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.

### EmbeddedDestinationSettings
* EmbeddedDestinationSettings `object`: Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number.
  * Destination608ChannelNumber
  * Destination708ServiceNumber

### EmbeddedSourceSettings
* EmbeddedSourceSettings `object`: Settings for embedded captions Source
  * Convert608To708
  * Source608ChannelNumber
  * Source608TrackNumber
  * TerminateCaptions

### EmbeddedTerminateCaptions
* EmbeddedTerminateCaptions `string` (values: END_OF_INPUT, DISABLED): By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.

### Endpoint
* Endpoint `object`: Describes an account-specific API endpoint.
  * Url

### EsamManifestConfirmConditionNotification
* EsamManifestConfirmConditionNotification `object`: ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025.
  * MccXml

### EsamSettings
* EsamSettings `object`: Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
  * ManifestConfirmConditionNotification
    * MccXml
  * ResponseSignalPreroll
  * SignalProcessingNotification
    * SccXml

### EsamSignalProcessingNotification
* EsamSignalProcessingNotification `object`: ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025.
  * SccXml

### F4vMoovPlacement
* F4vMoovPlacement `string` (values: PROGRESSIVE_DOWNLOAD, NORMAL): If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.

### F4vSettings
* F4vSettings `object`: Settings for F4v container
  * MoovPlacement

### FileGroupSettings
* FileGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS.
  * Destination
  * DestinationSettings
    * S3Settings
      * AccessControl
        * CannedAcl
      * Encryption
        * EncryptionType
        * KmsKeyArn

### FileSourceConvert608To708
* FileSourceConvert608To708 `string` (values: UPCONVERT, DISABLED): Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.

### FileSourceSettings
* FileSourceSettings `object`: If your input captions are SCC, SMI, SRT, STL, TTML, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
  * Convert608To708
  * Framerate
    * FramerateDenominator
    * FramerateNumerator
  * SourceFile
  * TimeDelta

### FontScript
* FontScript `string` (values: AUTOMATIC, HANS, HANT): Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset.

### ForbiddenException


### FrameCaptureSettings
* FrameCaptureSettings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
  * FramerateDenominator
  * FramerateNumerator
  * MaxCaptures
  * Quality

### GetJobRequest
* GetJobRequest `object`

### GetJobResponse
* GetJobResponse `object`
  * Job
    * AccelerationSettings
      * Mode **required**
    * AccelerationStatus
    * Arn
    * BillingTagsSource
    * CreatedAt
    * CurrentPhase
    * ErrorCode
    * ErrorMessage
    * HopDestinations
      * items [HopDestination](#hopdestination)
    * Id
    * JobPercentComplete
    * JobTemplate
    * Messages
      * Info
        * items [__string](#__string)
      * Warning
        * items [__string](#__string)
    * OutputGroupDetails
      * items [OutputGroupDetail](#outputgroupdetail)
    * Priority
    * Queue
    * QueueTransitions
      * items [QueueTransition](#queuetransition)
    * RetryCount
    * Role **required**
    * Settings **required**
      * AdAvailOffset
      * AvailBlanking
        * AvailBlankingImage
      * Esam
        * ManifestConfirmConditionNotification
          * MccXml
        * ResponseSignalPreroll
        * SignalProcessingNotification
          * SccXml
      * Inputs
        * items [Input](#input)
      * MotionImageInserter
        * Framerate
          * FramerateDenominator
          * FramerateNumerator
        * Input
        * InsertionMode
        * Offset
          * ImageX
          * ImageY
        * Playback
        * StartTime
      * NielsenConfiguration
        * BreakoutCode
        * DistributorId
      * NielsenNonLinearWatermark
        * ActiveWatermarkProcess
        * AdiFilename
        * AssetId
        * AssetName
        * CbetSourceId
        * EpisodeId
        * MetadataDestination
        * SourceId
        * SourceWatermarkStatus
        * TicServerUrl
        * UniqueTicPerAudioTrack
      * OutputGroups
        * items [OutputGroup](#outputgroup)
      * TimecodeConfig
        * Anchor
        * Source
        * Start
        * TimestampOffset
      * TimedMetadataInsertion
        * Id3Insertions
          * items [Id3Insertion](#id3insertion)
    * SimulateReservedQueue
    * Status
    * StatusUpdateInterval
    * Timing
      * FinishTime
      * StartTime
      * SubmitTime
    * UserMetadata

### GetJobTemplateRequest
* GetJobTemplateRequest `object`

### GetJobTemplateResponse
* GetJobTemplateResponse `object`
  * JobTemplate
    * AccelerationSettings
      * Mode **required**
    * Arn
    * Category
    * CreatedAt
    * Description
    * HopDestinations
      * items [HopDestination](#hopdestination)
    * LastUpdated
    * Name **required**
    * Priority
    * Queue
    * Settings **required**
      * AdAvailOffset
      * AvailBlanking
        * AvailBlankingImage
      * Esam
        * ManifestConfirmConditionNotification
          * MccXml
        * ResponseSignalPreroll
        * SignalProcessingNotification
          * SccXml
      * Inputs
        * items [InputTemplate](#inputtemplate)
      * MotionImageInserter
        * Framerate
          * FramerateDenominator
          * FramerateNumerator
        * Input
        * InsertionMode
        * Offset
          * ImageX
          * ImageY
        * Playback
        * StartTime
      * NielsenConfiguration
        * BreakoutCode
        * DistributorId
      * NielsenNonLinearWatermark
        * ActiveWatermarkProcess
        * AdiFilename
        * AssetId
        * AssetName
        * CbetSourceId
        * EpisodeId
        * MetadataDestination
        * SourceId
        * SourceWatermarkStatus
        * TicServerUrl
        * UniqueTicPerAudioTrack
      * OutputGroups
        * items [OutputGroup](#outputgroup)
      * TimecodeConfig
        * Anchor
        * Source
        * Start
        * TimestampOffset
      * TimedMetadataInsertion
        * Id3Insertions
          * items [Id3Insertion](#id3insertion)
    * StatusUpdateInterval
    * Type

### GetPresetRequest
* GetPresetRequest `object`

### GetPresetResponse
* GetPresetResponse `object`
  * Preset
    * Arn
    * Category
    * CreatedAt
    * Description
    * LastUpdated
    * Name **required**
    * Settings **required**
      * AudioDescriptions
        * items [AudioDescription](#audiodescription)
      * CaptionDescriptions
        * items [CaptionDescriptionPreset](#captiondescriptionpreset)
      * ContainerSettings
        * CmfcSettings
          * AudioDuration
          * Scte35Esam
          * Scte35Source
        * Container
        * F4vSettings
          * MoovPlacement
        * M2tsSettings
          * AudioBufferModel
          * AudioDuration
          * AudioFramesPerPes
          * AudioPids
          * Bitrate
          * BufferModel
          * DvbNitSettings
          * DvbSdtSettings
          * DvbSubPids
          * DvbTdtSettings
          * DvbTeletextPid
          * EbpAudioInterval
          * EbpPlacement
          * EsRateInPes
          * ForceTsVideoEbpOrder
          * FragmentTime
          * MaxPcrInterval
          * MinEbpInterval
          * NielsenId3
          * NullPacketBitrate
          * PatInterval
          * PcrControl
          * PcrPid
          * PmtInterval
          * PmtPid
          * PrivateMetadataPid
          * ProgramNumber
          * RateMode
          * Scte35Esam
          * Scte35Pid
          * Scte35Source
          * SegmentationMarkers
          * SegmentationStyle
          * SegmentationTime
          * TimedMetadataPid
          * TransportStreamId
          * VideoPid
        * M3u8Settings
          * AudioDuration
          * AudioFramesPerPes
          * AudioPids
          * NielsenId3
          * PatInterval
          * PcrControl
          * PcrPid
          * PmtInterval
          * PmtPid
          * PrivateMetadataPid
          * ProgramNumber
          * Scte35Pid
          * Scte35Source
          * TimedMetadata
          * TimedMetadataPid
          * TransportStreamId
          * VideoPid
        * MovSettings
          * ClapAtom
          * CslgAtom
          * Mpeg2FourCCControl
          * PaddingControl
          * Reference
        * Mp4Settings
          * AudioDuration
          * CslgAtom
          * CttsVersion
          * FreeSpaceBox
          * MoovPlacement
          * Mp4MajorBrand
        * MpdSettings
          * AccessibilityCaptionHints
          * AudioDuration
          * CaptionContainerType
          * Scte35Esam
          * Scte35Source
        * MxfSettings
          * AfdSignaling
          * Profile
      * VideoDescription
        * AfdSignaling
        * AntiAlias
        * CodecSettings
          * Av1Settings
          * AvcIntraSettings
          * Codec
          * FrameCaptureSettings
          * H264Settings
          * H265Settings
          * Mpeg2Settings
          * ProresSettings
          * Vc3Settings
          * Vp8Settings
          * Vp9Settings
        * ColorMetadata
        * Crop
          * Height
          * Width
          * X
          * Y
        * DropFrameTimecode
        * FixedAfd
        * Height
        * Position
          * Height
          * Width
          * X
          * Y
        * RespondToAfd
        * ScalingBehavior
        * Sharpness
        * TimecodeInsertion
        * VideoPreprocessors
          * ColorCorrector
          * Deinterlacer
          * DolbyVision
          * ImageInserter
          * NoiseReducer
          * PartnerWatermarking
          * TimecodeBurnin
        * Width
    * Type

### GetQueueRequest
* GetQueueRequest `object`

### GetQueueResponse
* GetQueueResponse `object`
  * Queue
    * Arn
    * CreatedAt
    * Description
    * LastUpdated
    * Name **required**
    * PricingPlan
    * ProgressingJobsCount
    * ReservationPlan
      * Commitment
      * ExpiresAt
      * PurchasedAt
      * RenewalType
      * ReservedSlots
      * Status
    * Status
    * SubmittedJobsCount
    * Type

### H264AdaptiveQuantization
* H264AdaptiveQuantization `string` (values: OFF, AUTO, LOW, MEDIUM, HIGH, HIGHER, MAX): Keep the default value, Auto (AUTO), for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set H264AdaptiveQuantization to a value other than Auto (AUTO). Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization (H264AdaptiveQuantization) to Off (OFF). Related settings: The value that you choose here applies to the following settings: H264FlickerAdaptiveQuantization, H264SpatialAdaptiveQuantization, and H264TemporalAdaptiveQuantization.

### H264CodecLevel
* H264CodecLevel `string` (values: AUTO, LEVEL_1, LEVEL_1_1, LEVEL_1_2, LEVEL_1_3, LEVEL_2, LEVEL_2_1, LEVEL_2_2, LEVEL_3, LEVEL_3_1, LEVEL_3_2, LEVEL_4, LEVEL_4_1, LEVEL_4_2, LEVEL_5, LEVEL_5_1, LEVEL_5_2): Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto (AUTO).

### H264CodecProfile
* H264CodecProfile `string` (values: BASELINE, HIGH, HIGH_10BIT, HIGH_422, HIGH_422_10BIT, MAIN): H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License.

### H264DynamicSubGop
* H264DynamicSubGop `string` (values: ADAPTIVE, STATIC): Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).

### H264EntropyEncoding
* H264EntropyEncoding `string` (values: CABAC, CAVLC): Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC.

### H264FieldEncoding
* H264FieldEncoding `string` (values: PAFF, FORCE_FIELD): Keep the default value, PAFF, to have MediaConvert use PAFF encoding for interlaced outputs. Choose Force field (FORCE_FIELD) to disable PAFF encoding and create separate interlaced fields.

### H264FlickerAdaptiveQuantization
* H264FlickerAdaptiveQuantization `string` (values: DISABLED, ENABLED): Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264FlickerAdaptiveQuantization is Disabled (DISABLED). Change this value to Enabled (ENABLED) to reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. To manually enable or disable H264FlickerAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.

### H264FramerateControl
* H264FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.

### H264FramerateConversionAlgorithm
* H264FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE, FRAMEFORMER): Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.

### H264GopBReference
* H264GopBReference `string` (values: DISABLED, ENABLED): If enable, use reference B frames for GOP structures that have B frames > 1.

### H264GopSizeUnits
* H264GopSizeUnits `string` (values: FRAMES, SECONDS): Indicates if the GOP Size in H264 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.

### H264InterlaceMode
* H264InterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.

### H264ParControl
* H264ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.

### H264QualityTuningLevel
* H264QualityTuningLevel `string` (values: SINGLE_PASS, SINGLE_PASS_HQ, MULTI_PASS_HQ): Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.

### H264QvbrSettings
* H264QvbrSettings `object`: Settings for quality-defined variable bitrate encoding with the H.264 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
  * MaxAverageBitrate
  * QvbrQualityLevel
  * QvbrQualityLevelFineTune

### H264RateControlMode
* H264RateControlMode `string` (values: VBR, CBR, QVBR): Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).

### H264RepeatPps
* H264RepeatPps `string` (values: DISABLED, ENABLED): Places a PPS header on each encoded picture, even if repeated.

### H264SceneChangeDetect
* H264SceneChangeDetect `string` (values: DISABLED, ENABLED, TRANSITION_DETECTION): Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.

### H264Settings
* H264Settings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
  * AdaptiveQuantization
  * Bitrate
  * CodecLevel
  * CodecProfile
  * DynamicSubGop
  * EntropyEncoding
  * FieldEncoding
  * FlickerAdaptiveQuantization
  * FramerateControl
  * FramerateConversionAlgorithm
  * FramerateDenominator
  * FramerateNumerator
  * GopBReference
  * GopClosedCadence
  * GopSize
  * GopSizeUnits
  * HrdBufferInitialFillPercentage
  * HrdBufferSize
  * InterlaceMode
  * MaxBitrate
  * MinIInterval
  * NumberBFramesBetweenReferenceFrames
  * NumberReferenceFrames
  * ParControl
  * ParDenominator
  * ParNumerator
  * QualityTuningLevel
  * QvbrSettings
    * MaxAverageBitrate
    * QvbrQualityLevel
    * QvbrQualityLevelFineTune
  * RateControlMode
  * RepeatPps
  * SceneChangeDetect
  * Slices
  * SlowPal
  * Softness
  * SpatialAdaptiveQuantization
  * Syntax
  * Telecine
  * TemporalAdaptiveQuantization
  * UnregisteredSeiTimecode

### H264SlowPal
* H264SlowPal `string` (values: DISABLED, ENABLED): Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.

### H264SpatialAdaptiveQuantization
* H264SpatialAdaptiveQuantization `string` (values: DISABLED, ENABLED): Only use this setting when you change the default value, Auto (AUTO), for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264SpatialAdaptiveQuantization is Enabled (ENABLED). Keep this default value to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to set H264SpatialAdaptiveQuantization to Disabled (DISABLED). Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (H264AdaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. To manually enable or disable H264SpatialAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.

### H264Syntax
* H264Syntax `string` (values: DEFAULT, RP2027): Produces a bitstream compliant with SMPTE RP-2027.

### H264Telecine
* H264Telecine `string` (values: NONE, SOFT, HARD): When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine (HARD) produces a 29.97i output. Soft telecine (SOFT) produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.

### H264TemporalAdaptiveQuantization
* H264TemporalAdaptiveQuantization `string` (values: DISABLED, ENABLED): Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264TemporalAdaptiveQuantization is Enabled (ENABLED). Keep this default value to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to set H264TemporalAdaptiveQuantization to Disabled (DISABLED). Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization). To manually enable or disable H264TemporalAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.

### H264UnregisteredSeiTimecode
* H264UnregisteredSeiTimecode `string` (values: DISABLED, ENABLED): Inserts timecode for each frame as 4 bytes of an unregistered SEI message.

### H265AdaptiveQuantization
* H265AdaptiveQuantization `string` (values: OFF, LOW, MEDIUM, HIGH, HIGHER, MAX): Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to the following settings: Flicker adaptive quantization (flickerAdaptiveQuantization), Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).

### H265AlternateTransferFunctionSei
* H265AlternateTransferFunctionSei `string` (values: DISABLED, ENABLED): Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF).

### H265CodecLevel
* H265CodecLevel `string` (values: AUTO, LEVEL_1, LEVEL_2, LEVEL_2_1, LEVEL_3, LEVEL_3_1, LEVEL_4, LEVEL_4_1, LEVEL_5, LEVEL_5_1, LEVEL_5_2, LEVEL_6, LEVEL_6_1, LEVEL_6_2): H.265 Level.

### H265CodecProfile
* H265CodecProfile `string` (values: MAIN_MAIN, MAIN_HIGH, MAIN10_MAIN, MAIN10_HIGH, MAIN_422_8BIT_MAIN, MAIN_422_8BIT_HIGH, MAIN_422_10BIT_MAIN, MAIN_422_10BIT_HIGH): Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License.

### H265DynamicSubGop
* H265DynamicSubGop `string` (values: ADAPTIVE, STATIC): Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).

### H265FlickerAdaptiveQuantization
* H265FlickerAdaptiveQuantization `string` (values: DISABLED, ENABLED): Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set adaptiveQuantization to a value other than Off (OFF).

### H265FramerateControl
* H265FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.

### H265FramerateConversionAlgorithm
* H265FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE, FRAMEFORMER): Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.

### H265GopBReference
* H265GopBReference `string` (values: DISABLED, ENABLED): If enable, use reference B frames for GOP structures that have B frames > 1.

### H265GopSizeUnits
* H265GopSizeUnits `string` (values: FRAMES, SECONDS): Indicates if the GOP Size in H265 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.

### H265InterlaceMode
* H265InterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.

### H265ParControl
* H265ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.

### H265QualityTuningLevel
* H265QualityTuningLevel `string` (values: SINGLE_PASS, SINGLE_PASS_HQ, MULTI_PASS_HQ): Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.

### H265QvbrSettings
* H265QvbrSettings `object`: Settings for quality-defined variable bitrate encoding with the H.265 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
  * MaxAverageBitrate
  * QvbrQualityLevel
  * QvbrQualityLevelFineTune

### H265RateControlMode
* H265RateControlMode `string` (values: VBR, CBR, QVBR): Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).

### H265SampleAdaptiveOffsetFilterMode
* H265SampleAdaptiveOffsetFilterMode `string` (values: DEFAULT, ADAPTIVE, OFF): Specify Sample Adaptive Offset (SAO) filter strength.  Adaptive mode dynamically selects best strength based on content

### H265SceneChangeDetect
* H265SceneChangeDetect `string` (values: DISABLED, ENABLED, TRANSITION_DETECTION): Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.

### H265Settings
* H265Settings `object`: Settings for H265 codec
  * AdaptiveQuantization
  * AlternateTransferFunctionSei
  * Bitrate
  * CodecLevel
  * CodecProfile
  * DynamicSubGop
  * FlickerAdaptiveQuantization
  * FramerateControl
  * FramerateConversionAlgorithm
  * FramerateDenominator
  * FramerateNumerator
  * GopBReference
  * GopClosedCadence
  * GopSize
  * GopSizeUnits
  * HrdBufferInitialFillPercentage
  * HrdBufferSize
  * InterlaceMode
  * MaxBitrate
  * MinIInterval
  * NumberBFramesBetweenReferenceFrames
  * NumberReferenceFrames
  * ParControl
  * ParDenominator
  * ParNumerator
  * QualityTuningLevel
  * QvbrSettings
    * MaxAverageBitrate
    * QvbrQualityLevel
    * QvbrQualityLevelFineTune
  * RateControlMode
  * SampleAdaptiveOffsetFilterMode
  * SceneChangeDetect
  * Slices
  * SlowPal
  * SpatialAdaptiveQuantization
  * Telecine
  * TemporalAdaptiveQuantization
  * TemporalIds
  * Tiles
  * UnregisteredSeiTimecode
  * WriteMp4PackagingType

### H265SlowPal
* H265SlowPal `string` (values: DISABLED, ENABLED): Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.

### H265SpatialAdaptiveQuantization
* H265SpatialAdaptiveQuantization `string` (values: DISABLED, ENABLED): Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.

### H265Telecine
* H265Telecine `string` (values: NONE, SOFT, HARD): This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.

### H265TemporalAdaptiveQuantization
* H265TemporalAdaptiveQuantization `string` (values: DISABLED, ENABLED): Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).

### H265TemporalIds
* H265TemporalIds `string` (values: DISABLED, ENABLED): Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output.

### H265Tiles
* H265Tiles `string` (values: DISABLED, ENABLED): Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures.

### H265UnregisteredSeiTimecode
* H265UnregisteredSeiTimecode `string` (values: DISABLED, ENABLED): Inserts timecode for each frame as 4 bytes of an unregistered SEI message.

### H265WriteMp4PackagingType
* H265WriteMp4PackagingType `string` (values: HVC1, HEV1): If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting only with CMAF or DASH outputs, or with standalone file outputs in an MPEG-4 container (MP4 outputs). Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. For MP4 outputs, when you choose HVC1, your output video might not work properly with some downstream systems and video players. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples.

### Hdr10Metadata
* Hdr10Metadata `object`: Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator.
  * BluePrimaryX
  * BluePrimaryY
  * GreenPrimaryX
  * GreenPrimaryY
  * MaxContentLightLevel
  * MaxFrameAverageLightLevel
  * MaxLuminance
  * MinLuminance
  * RedPrimaryX
  * RedPrimaryY
  * WhitePointX
  * WhitePointY

### HlsAdMarkers
* HlsAdMarkers `string` (values: ELEMENTAL, ELEMENTAL_SCTE35)

### HlsAdditionalManifest
* HlsAdditionalManifest `object`: Specify the details for each additional HLS manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
  * ManifestNameModifier
  * SelectedOutputs
    * items [__stringMin1](#__stringmin1)

### HlsAudioOnlyContainer
* HlsAudioOnlyContainer `string` (values: AUTOMATIC, M2TS): Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic (AUTOMATIC) to create a raw audio-only file with no container. Regardless of the value that you specify here, if this output has video, the service will place outputs into an MPEG2-TS container.

### HlsAudioOnlyHeader
* HlsAudioOnlyHeader `string` (values: INCLUDE, EXCLUDE): Ignore this setting unless you are using FairPlay DRM with Verimatrix and you encounter playback issues. Keep the default value, Include (INCLUDE), to output audio-only headers. Choose Exclude (EXCLUDE) to remove the audio-only headers from your audio segments.

### HlsAudioTrackType
* HlsAudioTrackType `string` (values: ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT, ALTERNATE_AUDIO_AUTO_SELECT, ALTERNATE_AUDIO_NOT_AUTO_SELECT, AUDIO_ONLY_VARIANT_STREAM): Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO

### HlsCaptionLanguageMapping
* HlsCaptionLanguageMapping `object`: Caption Language Mapping
  * CaptionChannel
  * CustomLanguageCode
  * LanguageCode
  * LanguageDescription

### HlsCaptionLanguageSetting
* HlsCaptionLanguageSetting `string` (values: INSERT, OMIT, NONE): Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.

### HlsClientCache
* HlsClientCache `string` (values: DISABLED, ENABLED): Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled (ENABLED) and control caching in your video distribution set up. For example, use the Cache-Control http header.

### HlsCodecSpecification
* HlsCodecSpecification `string` (values: RFC_6381, RFC_4281): Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.

### HlsDirectoryStructure
* HlsDirectoryStructure `string` (values: SINGLE_DIRECTORY, SUBDIRECTORY_PER_STREAM): Indicates whether segments should be placed in subdirectories.

### HlsEncryptionSettings
* HlsEncryptionSettings `object`: Settings for HLS encryption
  * ConstantInitializationVector
  * EncryptionMethod
  * InitializationVectorInManifest
  * OfflineEncrypted
  * SpekeKeyProvider
    * CertificateArn
    * ResourceId
    * SystemIds
      * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)
    * Url
  * StaticKeyProvider
    * KeyFormat
    * KeyFormatVersions
    * StaticKeyValue
    * Url
  * Type

### HlsEncryptionType
* HlsEncryptionType `string` (values: AES128, SAMPLE_AES): Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.

### HlsGroupSettings
* HlsGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
  * AdMarkers
    * items [HlsAdMarkers](#hlsadmarkers)
  * AdditionalManifests
    * items [HlsAdditionalManifest](#hlsadditionalmanifest)
  * AudioOnlyHeader
  * BaseUrl
  * CaptionLanguageMappings
    * items [HlsCaptionLanguageMapping](#hlscaptionlanguagemapping)
  * CaptionLanguageSetting
  * ClientCache
  * CodecSpecification
  * Destination
  * DestinationSettings
    * S3Settings
      * AccessControl
        * CannedAcl
      * Encryption
        * EncryptionType
        * KmsKeyArn
  * DirectoryStructure
  * Encryption
    * ConstantInitializationVector
    * EncryptionMethod
    * InitializationVectorInManifest
    * OfflineEncrypted
    * SpekeKeyProvider
      * CertificateArn
      * ResourceId
      * SystemIds
        * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)
      * Url
    * StaticKeyProvider
      * KeyFormat
      * KeyFormatVersions
      * StaticKeyValue
      * Url
    * Type
  * ManifestCompression
  * ManifestDurationFormat
  * MinFinalSegmentLength
  * MinSegmentLength
  * OutputSelection
  * ProgramDateTime
  * ProgramDateTimePeriod
  * SegmentControl
  * SegmentLength
  * SegmentsPerSubdirectory
  * StreamInfResolution
  * TimedMetadataId3Frame
  * TimedMetadataId3Period
  * TimestampDeltaMilliseconds

### HlsIFrameOnlyManifest
* HlsIFrameOnlyManifest `string` (values: INCLUDE, EXCLUDE): When set to INCLUDE, writes I-Frame Only Manifest in addition to the HLS manifest

### HlsInitializationVectorInManifest
* HlsInitializationVectorInManifest `string` (values: INCLUDE, EXCLUDE): The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.

### HlsKeyProviderType
* HlsKeyProviderType `string` (values: SPEKE, STATIC_KEY): Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.

### HlsManifestCompression
* HlsManifestCompression `string` (values: GZIP, NONE): When set to GZIP, compresses HLS playlist.

### HlsManifestDurationFormat
* HlsManifestDurationFormat `string` (values: FLOATING_POINT, INTEGER): Indicates whether the output manifest should use floating point values for segment duration.

### HlsOfflineEncrypted
* HlsOfflineEncrypted `string` (values: ENABLED, DISABLED): Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection.

### HlsOutputSelection
* HlsOutputSelection `string` (values: MANIFESTS_AND_SEGMENTS, SEGMENTS_ONLY): Indicates whether the .m3u8 manifest file should be generated for this HLS output group.

### HlsProgramDateTime
* HlsProgramDateTime `string` (values: INCLUDE, EXCLUDE): Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.

### HlsSegmentControl
* HlsSegmentControl `string` (values: SINGLE_FILE, SEGMENTED_FILES): When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.

### HlsSettings
* HlsSettings `object`: Settings for HLS output groups
  * AudioGroupId
  * AudioOnlyContainer
  * AudioRenditionSets
  * AudioTrackType
  * IFrameOnlyManifest
  * SegmentModifier

### HlsStreamInfResolution
* HlsStreamInfResolution `string` (values: INCLUDE, EXCLUDE): Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.

### HlsTimedMetadataId3Frame
* HlsTimedMetadataId3Frame `string` (values: NONE, PRIV, TDRL): Indicates ID3 frame that has the timecode.

### HopDestination
* HopDestination `object`: Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.
  * Priority
  * Queue
  * WaitMinutes

### Id3Insertion
* Id3Insertion `object`: To insert ID3 tags in your output, specify two values. Use ID3 tag (Id3) to specify the base 64 encoded string and use Timecode (TimeCode) to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion (Id3Insertion).
  * Id3
  * Timecode

### ImageInserter
* ImageInserter `object`: Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. This setting is disabled by default.
  * InsertableImages
    * items [InsertableImage](#insertableimage)

### ImscDestinationSettings
* ImscDestinationSettings `object`: Settings specific to IMSC caption outputs.
  * StylePassthrough

### ImscStylePassthrough
* ImscStylePassthrough `string` (values: ENABLED, DISABLED): Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions.

### Input
* Input `object`: Specifies media input
  * AudioSelectorGroups
  * AudioSelectors
  * CaptionSelectors
  * Crop
    * Height
    * Width
    * X
    * Y
  * DeblockFilter
  * DecryptionSettings
    * DecryptionMode
    * EncryptedDecryptionKey
    * InitializationVector
    * KmsKeyRegion
  * DenoiseFilter
  * FileInput
  * FilterEnable
  * FilterStrength
  * ImageInserter
    * InsertableImages
      * items [InsertableImage](#insertableimage)
  * InputClippings
    * items [InputClipping](#inputclipping)
  * InputScanType
  * Position
    * Height
    * Width
    * X
    * Y
  * ProgramNumber
  * PsiControl
  * SupplementalImps
    * items [__stringPatternS3ASSETMAPXml](#__stringpatterns3assetmapxml)
  * TimecodeSource
  * TimecodeStart
  * VideoSelector
    * AlphaBehavior
    * ColorSpace
    * ColorSpaceUsage
    * Hdr10Metadata
      * BluePrimaryX
      * BluePrimaryY
      * GreenPrimaryX
      * GreenPrimaryY
      * MaxContentLightLevel
      * MaxFrameAverageLightLevel
      * MaxLuminance
      * MinLuminance
      * RedPrimaryX
      * RedPrimaryY
      * WhitePointX
      * WhitePointY
    * Pid
    * ProgramNumber
    * Rotate

### InputClipping
* InputClipping `object`: To transcode only portions of your input (clips), include one Input clipping (one instance of InputClipping in the JSON job file) for each input clip. All input clips you specify will be included in every output of the job.
  * EndTimecode
  * StartTimecode

### InputDeblockFilter
* InputDeblockFilter `string` (values: ENABLED, DISABLED): Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.

### InputDecryptionSettings
* InputDecryptionSettings `object`: Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
  * DecryptionMode
  * EncryptedDecryptionKey
  * InitializationVector
  * KmsKeyRegion

### InputDenoiseFilter
* InputDenoiseFilter `string` (values: ENABLED, DISABLED): Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.

### InputFilterEnable
* InputFilterEnable `string` (values: AUTO, DISABLE, FORCE): Specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The input is filtered regardless of input type.

### InputPsiControl
* InputPsiControl `string` (values: IGNORE_PSI, USE_PSI): Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.

### InputRotate
* InputRotate `string` (values: DEGREE_0, DEGREES_90, DEGREES_180, DEGREES_270, AUTO): Use Rotate (InputRotate) to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata.

### InputScanType
* InputScanType `string` (values: AUTO, PSF): When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto (AUTO). Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.

### InputTemplate
* InputTemplate `object`: Specified video input in a template.
  * AudioSelectorGroups
  * AudioSelectors
  * CaptionSelectors
  * Crop
    * Height
    * Width
    * X
    * Y
  * DeblockFilter
  * DenoiseFilter
  * FilterEnable
  * FilterStrength
  * ImageInserter
    * InsertableImages
      * items [InsertableImage](#insertableimage)
  * InputClippings
    * items [InputClipping](#inputclipping)
  * InputScanType
  * Position
    * Height
    * Width
    * X
    * Y
  * ProgramNumber
  * PsiControl
  * TimecodeSource
  * TimecodeStart
  * VideoSelector
    * AlphaBehavior
    * ColorSpace
    * ColorSpaceUsage
    * Hdr10Metadata
      * BluePrimaryX
      * BluePrimaryY
      * GreenPrimaryX
      * GreenPrimaryY
      * MaxContentLightLevel
      * MaxFrameAverageLightLevel
      * MaxLuminance
      * MinLuminance
      * RedPrimaryX
      * RedPrimaryY
      * WhitePointX
      * WhitePointY
    * Pid
    * ProgramNumber
    * Rotate

### InputTimecodeSource
* InputTimecodeSource `string` (values: EMBEDDED, ZEROBASED, SPECIFIEDSTART): Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.

### InsertableImage
* InsertableImage `object`: Settings that specify how your still graphic overlay appears.
  * Duration
  * FadeIn
  * FadeOut
  * Height
  * ImageInserterInput
  * ImageX
  * ImageY
  * Layer
  * Opacity
  * StartTime
  * Width

### InternalServerErrorException


### Job
* Job `object`: Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
  * AccelerationSettings
    * Mode **required**
  * AccelerationStatus
  * Arn
  * BillingTagsSource
  * CreatedAt
  * CurrentPhase
  * ErrorCode
  * ErrorMessage
  * HopDestinations
    * items [HopDestination](#hopdestination)
  * Id
  * JobPercentComplete
  * JobTemplate
  * Messages
    * Info
      * items [__string](#__string)
    * Warning
      * items [__string](#__string)
  * OutputGroupDetails
    * items [OutputGroupDetail](#outputgroupdetail)
  * Priority
  * Queue
  * QueueTransitions
    * items [QueueTransition](#queuetransition)
  * RetryCount
  * Role **required**
  * Settings **required**
    * AdAvailOffset
    * AvailBlanking
      * AvailBlankingImage
    * Esam
      * ManifestConfirmConditionNotification
        * MccXml
      * ResponseSignalPreroll
      * SignalProcessingNotification
        * SccXml
    * Inputs
      * items [Input](#input)
    * MotionImageInserter
      * Framerate
        * FramerateDenominator
        * FramerateNumerator
      * Input
      * InsertionMode
      * Offset
        * ImageX
        * ImageY
      * Playback
      * StartTime
    * NielsenConfiguration
      * BreakoutCode
      * DistributorId
    * NielsenNonLinearWatermark
      * ActiveWatermarkProcess
      * AdiFilename
      * AssetId
      * AssetName
      * CbetSourceId
      * EpisodeId
      * MetadataDestination
      * SourceId
      * SourceWatermarkStatus
      * TicServerUrl
      * UniqueTicPerAudioTrack
    * OutputGroups
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig
      * Anchor
      * Source
      * Start
      * TimestampOffset
    * TimedMetadataInsertion
      * Id3Insertions
        * items [Id3Insertion](#id3insertion)
  * SimulateReservedQueue
  * Status
  * StatusUpdateInterval
  * Timing
    * FinishTime
    * StartTime
    * SubmitTime
  * UserMetadata

### JobMessages
* JobMessages `object`: Provides messages from the service about jobs that you have already successfully submitted.
  * Info
    * items [__string](#__string)
  * Warning
    * items [__string](#__string)

### JobPhase
* JobPhase `string` (values: PROBING, TRANSCODING, UPLOADING): A job's phase can be PROBING, TRANSCODING OR UPLOADING

### JobSettings
* JobSettings `object`: JobSettings contains all the transcode settings for a job.
  * AdAvailOffset
  * AvailBlanking
    * AvailBlankingImage
  * Esam
    * ManifestConfirmConditionNotification
      * MccXml
    * ResponseSignalPreroll
    * SignalProcessingNotification
      * SccXml
  * Inputs
    * items [Input](#input)
  * MotionImageInserter
    * Framerate
      * FramerateDenominator
      * FramerateNumerator
    * Input
    * InsertionMode
    * Offset
      * ImageX
      * ImageY
    * Playback
    * StartTime
  * NielsenConfiguration
    * BreakoutCode
    * DistributorId
  * NielsenNonLinearWatermark
    * ActiveWatermarkProcess
    * AdiFilename
    * AssetId
    * AssetName
    * CbetSourceId
    * EpisodeId
    * MetadataDestination
    * SourceId
    * SourceWatermarkStatus
    * TicServerUrl
    * UniqueTicPerAudioTrack
  * OutputGroups
    * items [OutputGroup](#outputgroup)
  * TimecodeConfig
    * Anchor
    * Source
    * Start
    * TimestampOffset
  * TimedMetadataInsertion
    * Id3Insertions
      * items [Id3Insertion](#id3insertion)

### JobStatus
* JobStatus `string` (values: SUBMITTED, PROGRESSING, COMPLETE, CANCELED, ERROR): A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.

### JobTemplate
* JobTemplate `object`: A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
  * AccelerationSettings
    * Mode **required**
  * Arn
  * Category
  * CreatedAt
  * Description
  * HopDestinations
    * items [HopDestination](#hopdestination)
  * LastUpdated
  * Name **required**
  * Priority
  * Queue
  * Settings **required**
    * AdAvailOffset
    * AvailBlanking
      * AvailBlankingImage
    * Esam
      * ManifestConfirmConditionNotification
        * MccXml
      * ResponseSignalPreroll
      * SignalProcessingNotification
        * SccXml
    * Inputs
      * items [InputTemplate](#inputtemplate)
    * MotionImageInserter
      * Framerate
        * FramerateDenominator
        * FramerateNumerator
      * Input
      * InsertionMode
      * Offset
        * ImageX
        * ImageY
      * Playback
      * StartTime
    * NielsenConfiguration
      * BreakoutCode
      * DistributorId
    * NielsenNonLinearWatermark
      * ActiveWatermarkProcess
      * AdiFilename
      * AssetId
      * AssetName
      * CbetSourceId
      * EpisodeId
      * MetadataDestination
      * SourceId
      * SourceWatermarkStatus
      * TicServerUrl
      * UniqueTicPerAudioTrack
    * OutputGroups
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig
      * Anchor
      * Source
      * Start
      * TimestampOffset
    * TimedMetadataInsertion
      * Id3Insertions
        * items [Id3Insertion](#id3insertion)
  * StatusUpdateInterval
  * Type

### JobTemplateListBy
* JobTemplateListBy `string` (values: NAME, CREATION_DATE, SYSTEM): Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.

### JobTemplateSettings
* JobTemplateSettings `object`: JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
  * AdAvailOffset
  * AvailBlanking
    * AvailBlankingImage
  * Esam
    * ManifestConfirmConditionNotification
      * MccXml
    * ResponseSignalPreroll
    * SignalProcessingNotification
      * SccXml
  * Inputs
    * items [InputTemplate](#inputtemplate)
  * MotionImageInserter
    * Framerate
      * FramerateDenominator
      * FramerateNumerator
    * Input
    * InsertionMode
    * Offset
      * ImageX
      * ImageY
    * Playback
    * StartTime
  * NielsenConfiguration
    * BreakoutCode
    * DistributorId
  * NielsenNonLinearWatermark
    * ActiveWatermarkProcess
    * AdiFilename
    * AssetId
    * AssetName
    * CbetSourceId
    * EpisodeId
    * MetadataDestination
    * SourceId
    * SourceWatermarkStatus
    * TicServerUrl
    * UniqueTicPerAudioTrack
  * OutputGroups
    * items [OutputGroup](#outputgroup)
  * TimecodeConfig
    * Anchor
    * Source
    * Start
    * TimestampOffset
  * TimedMetadataInsertion
    * Id3Insertions
      * items [Id3Insertion](#id3insertion)

### LanguageCode
* LanguageCode `string` (values: ENG, SPA, FRA, DEU, GER, ZHO, ARA, HIN, JPN, RUS, POR, ITA, URD, VIE, KOR, PAN, ABK, AAR, AFR, AKA, SQI, AMH, ARG, HYE, ASM, AVA, AVE, AYM, AZE, BAM, BAK, EUS, BEL, BEN, BIH, BIS, BOS, BRE, BUL, MYA, CAT, KHM, CHA, CHE, NYA, CHU, CHV, COR, COS, CRE, HRV, CES, DAN, DIV, NLD, DZO, ENM, EPO, EST, EWE, FAO, FIJ, FIN, FRM, FUL, GLA, GLG, LUG, KAT, ELL, GRN, GUJ, HAT, HAU, HEB, HER, HMO, HUN, ISL, IDO, IBO, IND, INA, ILE, IKU, IPK, GLE, JAV, KAL, KAN, KAU, KAS, KAZ, KIK, KIN, KIR, KOM, KON, KUA, KUR, LAO, LAT, LAV, LIM, LIN, LIT, LUB, LTZ, MKD, MLG, MSA, MAL, MLT, GLV, MRI, MAR, MAH, MON, NAU, NAV, NDE, NBL, NDO, NEP, SME, NOR, NOB, NNO, OCI, OJI, ORI, ORM, OSS, PLI, FAS, POL, PUS, QUE, QAA, RON, ROH, RUN, SMO, SAG, SAN, SRD, SRB, SNA, III, SND, SIN, SLK, SLV, SOM, SOT, SUN, SWA, SSW, SWE, TGL, TAH, TGK, TAM, TAT, TEL, THA, BOD, TIR, TON, TSO, TSN, TUR, TUK, TWI, UIG, UKR, UZB, VEN, VOL, WLN, CYM, FRY, WOL, XHO, YID, YOR, ZHA, ZUL, ORJ, QPC, TNG): Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php.

### ListJobTemplatesRequest
* ListJobTemplatesRequest `object`

### ListJobTemplatesResponse
* ListJobTemplatesResponse `object`
  * JobTemplates
    * items [JobTemplate](#jobtemplate)
  * NextToken

### ListJobsRequest
* ListJobsRequest `object`

### ListJobsResponse
* ListJobsResponse `object`
  * Jobs
    * items [Job](#job)
  * NextToken

### ListPresetsRequest
* ListPresetsRequest `object`

### ListPresetsResponse
* ListPresetsResponse `object`
  * NextToken
  * Presets
    * items [Preset](#preset)

### ListQueuesRequest
* ListQueuesRequest `object`

### ListQueuesResponse
* ListQueuesResponse `object`
  * NextToken
  * Queues
    * items [Queue](#queue)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * ResourceTags
    * Arn
    * Tags

### M2tsAudioBufferModel
* M2tsAudioBufferModel `string` (values: DVB, ATSC): Selects between the DVB and ATSC buffer models for Dolby Digital audio.

### M2tsAudioDuration
* M2tsAudioDuration `string` (values: DEFAULT_CODEC_DURATION, MATCH_VIDEO_DURATION): Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.

### M2tsBufferModel
* M2tsBufferModel `string` (values: MULTIPLEX, NONE): Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex  buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.

### M2tsEbpAudioInterval
* M2tsEbpAudioInterval `string` (values: VIDEO_AND_FIXED_INTERVALS, VIDEO_INTERVAL): When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).

### M2tsEbpPlacement
* M2tsEbpPlacement `string` (values: VIDEO_AND_AUDIO_PIDS, VIDEO_PID): Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).

### M2tsEsRateInPes
* M2tsEsRateInPes `string` (values: INCLUDE, EXCLUDE): Controls whether to include the ES Rate field in the PES header.

### M2tsForceTsVideoEbpOrder
* M2tsForceTsVideoEbpOrder `string` (values: FORCE, DEFAULT): Keep the default value (DEFAULT) unless you know that your audio EBP markers are incorrectly appearing before your video EBP markers. To correct this problem, set this value to Force (FORCE).

### M2tsNielsenId3
* M2tsNielsenId3 `string` (values: INSERT, NONE): If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.

### M2tsPcrControl
* M2tsPcrControl `string` (values: PCR_EVERY_PES_PACKET, CONFIGURED_PCR_PERIOD): When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream.

### M2tsRateMode
* M2tsRateMode `string` (values: VBR, CBR): When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate.

### M2tsScte35Esam
* M2tsScte35Esam `object`: Settings for SCTE-35 signals from ESAM. Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
  * Scte35EsamPid

### M2tsScte35Source
* M2tsScte35Source `string` (values: PASSTHROUGH, NONE): For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE). Also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml). Also enable ESAM SCTE-35 (include the property scte35Esam).

### M2tsSegmentationMarkers
* M2tsSegmentationMarkers `string` (values: NONE, RAI_SEGSTART, RAI_ADAPT, PSI_SEGSTART, EBP, EBP_LEGACY): Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.

### M2tsSegmentationStyle
* M2tsSegmentationStyle `string` (values: MAINTAIN_CADENCE, RESET_CADENCE): The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule.

### M2tsSettings
* M2tsSettings `object`: MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
  * AudioBufferModel
  * AudioDuration
  * AudioFramesPerPes
  * AudioPids
    * items [__integerMin32Max8182](#__integermin32max8182)
  * Bitrate
  * BufferModel
  * DvbNitSettings
    * NetworkId
    * NetworkName
    * NitInterval
  * DvbSdtSettings
    * OutputSdt
    * SdtInterval
    * ServiceName
    * ServiceProviderName
  * DvbSubPids
    * items [__integerMin32Max8182](#__integermin32max8182)
  * DvbTdtSettings
    * TdtInterval
  * DvbTeletextPid
  * EbpAudioInterval
  * EbpPlacement
  * EsRateInPes
  * ForceTsVideoEbpOrder
  * FragmentTime
  * MaxPcrInterval
  * MinEbpInterval
  * NielsenId3
  * NullPacketBitrate
  * PatInterval
  * PcrControl
  * PcrPid
  * PmtInterval
  * PmtPid
  * PrivateMetadataPid
  * ProgramNumber
  * RateMode
  * Scte35Esam
    * Scte35EsamPid
  * Scte35Pid
  * Scte35Source
  * SegmentationMarkers
  * SegmentationStyle
  * SegmentationTime
  * TimedMetadataPid
  * TransportStreamId
  * VideoPid

### M3u8AudioDuration
* M3u8AudioDuration `string` (values: DEFAULT_CODEC_DURATION, MATCH_VIDEO_DURATION): Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.

### M3u8NielsenId3
* M3u8NielsenId3 `string` (values: INSERT, NONE): If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.

### M3u8PcrControl
* M3u8PcrControl `string` (values: PCR_EVERY_PES_PACKET, CONFIGURED_PCR_PERIOD): When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.

### M3u8Scte35Source
* M3u8Scte35Source `string` (values: PASSTHROUGH, NONE): For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE) if you don't want manifest conditioning. Choose Passthrough (PASSTHROUGH) and choose Ad markers (adMarkers) if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml).

### M3u8Settings
* M3u8Settings `object`: Settings for TS segments in HLS
  * AudioDuration
  * AudioFramesPerPes
  * AudioPids
    * items [__integerMin32Max8182](#__integermin32max8182)
  * NielsenId3
  * PatInterval
  * PcrControl
  * PcrPid
  * PmtInterval
  * PmtPid
  * PrivateMetadataPid
  * ProgramNumber
  * Scte35Pid
  * Scte35Source
  * TimedMetadata
  * TimedMetadataPid
  * TransportStreamId
  * VideoPid

### MotionImageInserter
* MotionImageInserter `object`: Overlay motion graphics on top of your video at the time that you specify.
  * Framerate
    * FramerateDenominator
    * FramerateNumerator
  * Input
  * InsertionMode
  * Offset
    * ImageX
    * ImageY
  * Playback
  * StartTime

### MotionImageInsertionFramerate
* MotionImageInsertionFramerate `object`: For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video.
  * FramerateDenominator
  * FramerateNumerator

### MotionImageInsertionMode
* MotionImageInsertionMode `string` (values: MOV, PNG): Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files.

### MotionImageInsertionOffset
* MotionImageInsertionOffset `object`: Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay.
  * ImageX
  * ImageY

### MotionImagePlayback
* MotionImagePlayback `string` (values: ONCE, REPEAT): Specify whether your motion graphic overlay repeats on a loop or plays only once.

### MovClapAtom
* MovClapAtom `string` (values: INCLUDE, EXCLUDE): When enabled, include 'clap' atom if appropriate for the video output settings.

### MovCslgAtom
* MovCslgAtom `string` (values: INCLUDE, EXCLUDE): When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.

### MovMpeg2FourCCControl
* MovMpeg2FourCCControl `string` (values: XDCAM, MPEG): When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2.

### MovPaddingControl
* MovPaddingControl `string` (values: OMNEON, NONE): To make this output compatible with Omenon, keep the default value, OMNEON. Unless you need Omneon compatibility, set this value to NONE. When you keep the default value, OMNEON, MediaConvert increases the length of the edit list atom. This might cause file rejections when a recipient of the output file doesn't expct this extra padding.

### MovReference
* MovReference `string` (values: SELF_CONTAINED, EXTERNAL): Always keep the default value (SELF_CONTAINED) for this setting.

### MovSettings
* MovSettings `object`: Settings for MOV Container.
  * ClapAtom
  * CslgAtom
  * Mpeg2FourCCControl
  * PaddingControl
  * Reference

### Mp2Settings
* Mp2Settings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
  * Bitrate
  * Channels
  * SampleRate

### Mp3RateControlMode
* Mp3RateControlMode `string` (values: CBR, VBR): Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR).

### Mp3Settings
* Mp3Settings `object`: Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
  * Bitrate
  * Channels
  * RateControlMode
  * SampleRate
  * VbrQuality

### Mp4CslgAtom
* Mp4CslgAtom `string` (values: INCLUDE, EXCLUDE): When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.

### Mp4FreeSpaceBox
* Mp4FreeSpaceBox `string` (values: INCLUDE, EXCLUDE): Inserts a free-space box immediately after the moov box.

### Mp4MoovPlacement
* Mp4MoovPlacement `string` (values: PROGRESSIVE_DOWNLOAD, NORMAL): If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.

### Mp4Settings
* Mp4Settings `object`: Settings for MP4 container. You can create audio-only AAC outputs with this container.
  * AudioDuration
  * CslgAtom
  * CttsVersion
  * FreeSpaceBox
  * MoovPlacement
  * Mp4MajorBrand

### MpdAccessibilityCaptionHints
* MpdAccessibilityCaptionHints `string` (values: INCLUDE, EXCLUDE): Optional. Choose Include (INCLUDE) to have MediaConvert mark up your DASH manifest with <Accessibility> elements for embedded 608 captions. This markup isn't generally required, but some video players require it to discover and play embedded 608 captions. Keep the default value, Exclude (EXCLUDE), to leave these elements out. When you enable this setting, this is the markup that MediaConvert includes in your manifest: <Accessibility schemeIdUri="urn:scte:dash:cc:cea-608:2015" value="CC1=eng"/>

### MpdAudioDuration
* MpdAudioDuration `string` (values: DEFAULT_CODEC_DURATION, MATCH_VIDEO_DURATION): Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.

### MpdCaptionContainerType
* MpdCaptionContainerType `string` (values: RAW, FRAGMENTED_MP4): Use this setting only in DASH output groups that include sidecar TTML or IMSC captions.  You specify sidecar captions in a separate output from your audio and video. Choose Raw (RAW) for captions in a single XML file in a raw container. Choose Fragmented MPEG-4 (FRAGMENTED_MP4) for captions in XML format contained within fragmented MP4 files. This set of fragmented MP4 files is separate from your video and audio fragmented MP4 files.

### MpdScte35Esam
* MpdScte35Esam `string` (values: INSERT, NONE): Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).

### MpdScte35Source
* MpdScte35Source `string` (values: PASSTHROUGH, NONE): Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.

### MpdSettings
* MpdSettings `object`: Settings for MP4 segments in DASH
  * AccessibilityCaptionHints
  * AudioDuration
  * CaptionContainerType
  * Scte35Esam
  * Scte35Source

### Mpeg2AdaptiveQuantization
* Mpeg2AdaptiveQuantization `string` (values: OFF, LOW, MEDIUM, HIGH): Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to the following settings: Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).

### Mpeg2CodecLevel
* Mpeg2CodecLevel `string` (values: AUTO, LOW, MAIN, HIGH1440, HIGH): Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output.

### Mpeg2CodecProfile
* Mpeg2CodecProfile `string` (values: MAIN, PROFILE_422): Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output.

### Mpeg2DynamicSubGop
* Mpeg2DynamicSubGop `string` (values: ADAPTIVE, STATIC): Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).

### Mpeg2FramerateControl
* Mpeg2FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.

### Mpeg2FramerateConversionAlgorithm
* Mpeg2FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE, FRAMEFORMER): Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.

### Mpeg2GopSizeUnits
* Mpeg2GopSizeUnits `string` (values: FRAMES, SECONDS): Indicates if the GOP Size in MPEG2 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.

### Mpeg2InterlaceMode
* Mpeg2InterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.

### Mpeg2IntraDcPrecision
* Mpeg2IntraDcPrecision `string` (values: AUTO, INTRA_DC_PRECISION_8, INTRA_DC_PRECISION_9, INTRA_DC_PRECISION_10, INTRA_DC_PRECISION_11): Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.

### Mpeg2ParControl
* Mpeg2ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.

### Mpeg2QualityTuningLevel
* Mpeg2QualityTuningLevel `string` (values: SINGLE_PASS, MULTI_PASS): Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.

### Mpeg2RateControlMode
* Mpeg2RateControlMode `string` (values: VBR, CBR): Use Rate control mode (Mpeg2RateControlMode) to specifiy whether the bitrate is variable (vbr) or constant (cbr).

### Mpeg2SceneChangeDetect
* Mpeg2SceneChangeDetect `string` (values: DISABLED, ENABLED): Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default.

### Mpeg2Settings
* Mpeg2Settings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
  * AdaptiveQuantization
  * Bitrate
  * CodecLevel
  * CodecProfile
  * DynamicSubGop
  * FramerateControl
  * FramerateConversionAlgorithm
  * FramerateDenominator
  * FramerateNumerator
  * GopClosedCadence
  * GopSize
  * GopSizeUnits
  * HrdBufferInitialFillPercentage
  * HrdBufferSize
  * InterlaceMode
  * IntraDcPrecision
  * MaxBitrate
  * MinIInterval
  * NumberBFramesBetweenReferenceFrames
  * ParControl
  * ParDenominator
  * ParNumerator
  * QualityTuningLevel
  * RateControlMode
  * SceneChangeDetect
  * SlowPal
  * Softness
  * SpatialAdaptiveQuantization
  * Syntax
  * Telecine
  * TemporalAdaptiveQuantization

### Mpeg2SlowPal
* Mpeg2SlowPal `string` (values: DISABLED, ENABLED): Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.

### Mpeg2SpatialAdaptiveQuantization
* Mpeg2SpatialAdaptiveQuantization `string` (values: DISABLED, ENABLED): Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.

### Mpeg2Syntax
* Mpeg2Syntax `string` (values: DEFAULT, D_10): Specify whether this output's video uses the D10 syntax. Keep the default value to  not use the syntax. Related settings: When you choose D10 (D_10) for your MXF  profile (profile), you must also set this value to to D10 (D_10).

### Mpeg2Telecine
* Mpeg2Telecine `string` (values: NONE, SOFT, HARD): When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine (HARD) produces a 29.97i output. Soft telecine (SOFT) produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.

### Mpeg2TemporalAdaptiveQuantization
* Mpeg2TemporalAdaptiveQuantization `string` (values: DISABLED, ENABLED): Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).

### MsSmoothAdditionalManifest
* MsSmoothAdditionalManifest `object`: Specify the details for each additional Microsoft Smooth Streaming manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
  * ManifestNameModifier
  * SelectedOutputs
    * items [__stringMin1](#__stringmin1)

### MsSmoothAudioDeduplication
* MsSmoothAudioDeduplication `string` (values: COMBINE_DUPLICATE_STREAMS, NONE): COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.

### MsSmoothEncryptionSettings
* MsSmoothEncryptionSettings `object`: If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
  * SpekeKeyProvider
    * CertificateArn
    * ResourceId
    * SystemIds
      * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)
    * Url

### MsSmoothGroupSettings
* MsSmoothGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
  * AdditionalManifests
    * items [MsSmoothAdditionalManifest](#mssmoothadditionalmanifest)
  * AudioDeduplication
  * Destination
  * DestinationSettings
    * S3Settings
      * AccessControl
        * CannedAcl
      * Encryption
        * EncryptionType
        * KmsKeyArn
  * Encryption
    * SpekeKeyProvider
      * CertificateArn
      * ResourceId
      * SystemIds
        * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)
      * Url
  * FragmentLength
  * ManifestEncoding

### MsSmoothManifestEncoding
* MsSmoothManifestEncoding `string` (values: UTF8, UTF16): Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.

### MxfAfdSignaling
* MxfAfdSignaling `string` (values: NO_COPY, COPY_FROM_VIDEO): Optional. When you have AFD signaling set up in your output video stream, use this setting to choose whether to also include it in the MXF wrapper. Choose Don't copy (NO_COPY) to exclude AFD signaling from the MXF wrapper. Choose Copy from video stream (COPY_FROM_VIDEO) to copy the AFD values from the video stream for this output to the MXF wrapper. Regardless of which option you choose, the AFD values remain in the video stream. Related settings: To set up your output to include or exclude AFD values, see AfdSignaling, under VideoDescription. On the console, find AFD signaling under the output's video encoding settings.

### MxfProfile
* MxfProfile `string` (values: D_10, XDCAM, OP1A): Specify the MXF profile, also called shim, for this output. When you choose Auto, MediaConvert chooses a profile based on the video codec and resolution. For a list of codecs supported with each MXF profile, see https://docs.aws.amazon.com/mediaconvert/latest/ug/codecs-supported-with-each-mxf-profile.html. For more information about the automatic selection behavior, see https://docs.aws.amazon.com/mediaconvert/latest/ug/default-automatic-selection-of-mxf-profiles.html.

### MxfSettings
* MxfSettings `object`: MXF settings
  * AfdSignaling
  * Profile

### NexGuardFileMarkerSettings
* NexGuardFileMarkerSettings `object`: For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows.
  * License
  * Payload
  * Preset
  * Strength

### NielsenActiveWatermarkProcessType
* NielsenActiveWatermarkProcessType `string` (values: NAES2_AND_NW, CBET, NAES2_AND_NW_AND_CBET): Choose the type of Nielsen watermarks that you want in your outputs. When you choose NAES 2 and NW (NAES2_AND_NW), you must provide a value for the setting SID (sourceId). When you choose CBET (CBET), you must provide a value for the setting CSID (cbetSourceId). When you choose NAES 2, NW, and CBET (NAES2_AND_NW_AND_CBET), you must provide values for both of these settings.

### NielsenConfiguration
* NielsenConfiguration `object`: Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
  * BreakoutCode
  * DistributorId

### NielsenNonLinearWatermarkSettings
* NielsenNonLinearWatermarkSettings `object`: Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that  MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to  specifying these values, you also need to set up your cloud TIC server. These settings apply to  every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]
  * ActiveWatermarkProcess
  * AdiFilename
  * AssetId
  * AssetName
  * CbetSourceId
  * EpisodeId
  * MetadataDestination
  * SourceId
  * SourceWatermarkStatus
  * TicServerUrl
  * UniqueTicPerAudioTrack

### NielsenSourceWatermarkStatusType
* NielsenSourceWatermarkStatusType `string` (values: CLEAN, WATERMARKED): Required. Specify whether your source content already contains Nielsen non-linear watermarks. When you set this value to Watermarked (WATERMARKED), the service fails the job. Nielsen requires that you add non-linear watermarking to only clean content that doesn't already  have non-linear Nielsen watermarks.

### NielsenUniqueTicPerAudioTrackType
* NielsenUniqueTicPerAudioTrackType `string` (values: RESERVE_UNIQUE_TICS_PER_TRACK, SAME_TICS_PER_TRACK): To create assets that have the same TIC values in each audio track, keep the default value Share TICs (SAME_TICS_PER_TRACK). To create assets that have unique TIC values for each audio track, choose Use unique TICs (RESERVE_UNIQUE_TICS_PER_TRACK).

### NoiseFilterPostTemporalSharpening
* NoiseFilterPostTemporalSharpening `string` (values: DISABLED, ENABLED, AUTO): Optional. When you set Noise reducer (noiseReducer) to Temporal (TEMPORAL), you can use this setting to apply sharpening. The default behavior, Auto (AUTO), allows the transcoder to determine whether to apply filtering, depending on input type and quality. When you set Noise reducer to Temporal, your output bandwidth is reduced. When Post temporal sharpening is also enabled, that bandwidth reduction is smaller.

### NoiseReducer
* NoiseReducer `object`: Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer (NoiseReducer), you must also select a value for Noise reducer filter (NoiseReducerFilter).
  * Filter
  * FilterSettings
    * Strength
  * SpatialFilterSettings
    * PostFilterSharpenStrength
    * Speed
    * Strength
  * TemporalFilterSettings
    * AggressiveMode
    * PostTemporalSharpening
    * Speed
    * Strength

### NoiseReducerFilter
* NoiseReducerFilter `string` (values: BILATERAL, MEAN, GAUSSIAN, LANCZOS, SHARPEN, CONSERVE, SPATIAL, TEMPORAL): Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion.

### NoiseReducerFilterSettings
* NoiseReducerFilterSettings `object`: Settings for a noise reducer filter
  * Strength

### NoiseReducerSpatialFilterSettings
* NoiseReducerSpatialFilterSettings `object`: Noise reducer filter settings for spatial filter.
  * PostFilterSharpenStrength
  * Speed
  * Strength

### NoiseReducerTemporalFilterSettings
* NoiseReducerTemporalFilterSettings `object`: Noise reducer filter settings for temporal filter.
  * AggressiveMode
  * PostTemporalSharpening
  * Speed
  * Strength

### NotFoundException


### OpusSettings
* OpusSettings `object`: Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.
  * Bitrate
  * Channels
  * SampleRate

### Order
* Order `string` (values: ASCENDING, DESCENDING): Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.

### Output
* Output `object`: An output object describes the settings for a single output file or stream in an output group.
  * AudioDescriptions
    * items [AudioDescription](#audiodescription)
  * CaptionDescriptions
    * items [CaptionDescription](#captiondescription)
  * ContainerSettings
    * CmfcSettings
      * AudioDuration
      * Scte35Esam
      * Scte35Source
    * Container
    * F4vSettings
      * MoovPlacement
    * M2tsSettings
      * AudioBufferModel
      * AudioDuration
      * AudioFramesPerPes
      * AudioPids
        * items [__integerMin32Max8182](#__integermin32max8182)
      * Bitrate
      * BufferModel
      * DvbNitSettings
        * NetworkId
        * NetworkName
        * NitInterval
      * DvbSdtSettings
        * OutputSdt
        * SdtInterval
        * ServiceName
        * ServiceProviderName
      * DvbSubPids
        * items [__integerMin32Max8182](#__integermin32max8182)
      * DvbTdtSettings
        * TdtInterval
      * DvbTeletextPid
      * EbpAudioInterval
      * EbpPlacement
      * EsRateInPes
      * ForceTsVideoEbpOrder
      * FragmentTime
      * MaxPcrInterval
      * MinEbpInterval
      * NielsenId3
      * NullPacketBitrate
      * PatInterval
      * PcrControl
      * PcrPid
      * PmtInterval
      * PmtPid
      * PrivateMetadataPid
      * ProgramNumber
      * RateMode
      * Scte35Esam
        * Scte35EsamPid
      * Scte35Pid
      * Scte35Source
      * SegmentationMarkers
      * SegmentationStyle
      * SegmentationTime
      * TimedMetadataPid
      * TransportStreamId
      * VideoPid
    * M3u8Settings
      * AudioDuration
      * AudioFramesPerPes
      * AudioPids
        * items [__integerMin32Max8182](#__integermin32max8182)
      * NielsenId3
      * PatInterval
      * PcrControl
      * PcrPid
      * PmtInterval
      * PmtPid
      * PrivateMetadataPid
      * ProgramNumber
      * Scte35Pid
      * Scte35Source
      * TimedMetadata
      * TimedMetadataPid
      * TransportStreamId
      * VideoPid
    * MovSettings
      * ClapAtom
      * CslgAtom
      * Mpeg2FourCCControl
      * PaddingControl
      * Reference
    * Mp4Settings
      * AudioDuration
      * CslgAtom
      * CttsVersion
      * FreeSpaceBox
      * MoovPlacement
      * Mp4MajorBrand
    * MpdSettings
      * AccessibilityCaptionHints
      * AudioDuration
      * CaptionContainerType
      * Scte35Esam
      * Scte35Source
    * MxfSettings
      * AfdSignaling
      * Profile
  * Extension
  * NameModifier
  * OutputSettings
    * HlsSettings
      * AudioGroupId
      * AudioOnlyContainer
      * AudioRenditionSets
      * AudioTrackType
      * IFrameOnlyManifest
      * SegmentModifier
  * Preset
  * VideoDescription
    * AfdSignaling
    * AntiAlias
    * CodecSettings
      * Av1Settings
        * AdaptiveQuantization
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopSize
        * MaxBitrate
        * NumberBFramesBetweenReferenceFrames
        * QvbrSettings
          * QvbrQualityLevel
          * QvbrQualityLevelFineTune
        * RateControlMode
        * Slices
        * SpatialAdaptiveQuantization
      * AvcIntraSettings
        * AvcIntraClass
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * InterlaceMode
        * SlowPal
        * Telecine
      * Codec
      * FrameCaptureSettings
        * FramerateDenominator
        * FramerateNumerator
        * MaxCaptures
        * Quality
      * H264Settings
        * AdaptiveQuantization
        * Bitrate
        * CodecLevel
        * CodecProfile
        * DynamicSubGop
        * EntropyEncoding
        * FieldEncoding
        * FlickerAdaptiveQuantization
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopBReference
        * GopClosedCadence
        * GopSize
        * GopSizeUnits
        * HrdBufferInitialFillPercentage
        * HrdBufferSize
        * InterlaceMode
        * MaxBitrate
        * MinIInterval
        * NumberBFramesBetweenReferenceFrames
        * NumberReferenceFrames
        * ParControl
        * ParDenominator
        * ParNumerator
        * QualityTuningLevel
        * QvbrSettings
          * MaxAverageBitrate
          * QvbrQualityLevel
          * QvbrQualityLevelFineTune
        * RateControlMode
        * RepeatPps
        * SceneChangeDetect
        * Slices
        * SlowPal
        * Softness
        * SpatialAdaptiveQuantization
        * Syntax
        * Telecine
        * TemporalAdaptiveQuantization
        * UnregisteredSeiTimecode
      * H265Settings
        * AdaptiveQuantization
        * AlternateTransferFunctionSei
        * Bitrate
        * CodecLevel
        * CodecProfile
        * DynamicSubGop
        * FlickerAdaptiveQuantization
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopBReference
        * GopClosedCadence
        * GopSize
        * GopSizeUnits
        * HrdBufferInitialFillPercentage
        * HrdBufferSize
        * InterlaceMode
        * MaxBitrate
        * MinIInterval
        * NumberBFramesBetweenReferenceFrames
        * NumberReferenceFrames
        * ParControl
        * ParDenominator
        * ParNumerator
        * QualityTuningLevel
        * QvbrSettings
          * MaxAverageBitrate
          * QvbrQualityLevel
          * QvbrQualityLevelFineTune
        * RateControlMode
        * SampleAdaptiveOffsetFilterMode
        * SceneChangeDetect
        * Slices
        * SlowPal
        * SpatialAdaptiveQuantization
        * Telecine
        * TemporalAdaptiveQuantization
        * TemporalIds
        * Tiles
        * UnregisteredSeiTimecode
        * WriteMp4PackagingType
      * Mpeg2Settings
        * AdaptiveQuantization
        * Bitrate
        * CodecLevel
        * CodecProfile
        * DynamicSubGop
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopClosedCadence
        * GopSize
        * GopSizeUnits
        * HrdBufferInitialFillPercentage
        * HrdBufferSize
        * InterlaceMode
        * IntraDcPrecision
        * MaxBitrate
        * MinIInterval
        * NumberBFramesBetweenReferenceFrames
        * ParControl
        * ParDenominator
        * ParNumerator
        * QualityTuningLevel
        * RateControlMode
        * SceneChangeDetect
        * SlowPal
        * Softness
        * SpatialAdaptiveQuantization
        * Syntax
        * Telecine
        * TemporalAdaptiveQuantization
      * ProresSettings
        * CodecProfile
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * InterlaceMode
        * ParControl
        * ParDenominator
        * ParNumerator
        * SlowPal
        * Telecine
      * Vc3Settings
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * InterlaceMode
        * SlowPal
        * Telecine
        * Vc3Class
      * Vp8Settings
        * Bitrate
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopSize
        * HrdBufferSize
        * MaxBitrate
        * ParControl
        * ParDenominator
        * ParNumerator
        * QualityTuningLevel
        * RateControlMode
      * Vp9Settings
        * Bitrate
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopSize
        * HrdBufferSize
        * MaxBitrate
        * ParControl
        * ParDenominator
        * ParNumerator
        * QualityTuningLevel
        * RateControlMode
    * ColorMetadata
    * Crop
      * Height
      * Width
      * X
      * Y
    * DropFrameTimecode
    * FixedAfd
    * Height
    * Position
      * Height
      * Width
      * X
      * Y
    * RespondToAfd
    * ScalingBehavior
    * Sharpness
    * TimecodeInsertion
    * VideoPreprocessors
      * ColorCorrector
        * Brightness
        * ColorSpaceConversion
        * Contrast
        * Hdr10Metadata
          * BluePrimaryX
          * BluePrimaryY
          * GreenPrimaryX
          * GreenPrimaryY
          * MaxContentLightLevel
          * MaxFrameAverageLightLevel
          * MaxLuminance
          * MinLuminance
          * RedPrimaryX
          * RedPrimaryY
          * WhitePointX
          * WhitePointY
        * Hue
        * Saturation
      * Deinterlacer
        * Algorithm
        * Control
        * Mode
      * DolbyVision
        * L6Metadata
          * MaxCll
          * MaxFall
        * L6Mode
        * Profile
      * ImageInserter
        * InsertableImages
          * items [InsertableImage](#insertableimage)
      * NoiseReducer
        * Filter
        * FilterSettings
          * Strength
        * SpatialFilterSettings
          * PostFilterSharpenStrength
          * Speed
          * Strength
        * TemporalFilterSettings
          * AggressiveMode
          * PostTemporalSharpening
          * Speed
          * Strength
      * PartnerWatermarking
        * NexguardFileMarkerSettings
          * License
          * Payload
          * Preset
          * Strength
      * TimecodeBurnin
        * FontSize
        * Position
        * Prefix
    * Width

### OutputChannelMapping
* OutputChannelMapping `object`: OutputChannel mapping settings.
  * InputChannels
    * items [__integerMinNegative60Max6](#__integerminnegative60max6)

### OutputDetail
* OutputDetail `object`: Details regarding output
  * DurationInMs
  * VideoDetails
    * HeightInPx
    * WidthInPx

### OutputGroup
* OutputGroup `object`: Group of outputs
  * AutomatedEncodingSettings
    * AbrSettings
      * MaxAbrBitrate
      * MaxRenditions
      * MinAbrBitrate
  * CustomName
  * Name
  * OutputGroupSettings
    * CmafGroupSettings
      * AdditionalManifests
        * items [CmafAdditionalManifest](#cmafadditionalmanifest)
      * BaseUrl
      * ClientCache
      * CodecSpecification
      * Destination
      * DestinationSettings
        * S3Settings
          * AccessControl
          * Encryption
      * Encryption
        * ConstantInitializationVector
        * EncryptionMethod
        * InitializationVectorInManifest
        * SpekeKeyProvider
          * CertificateArn
          * DashSignaledSystemIds
          * HlsSignaledSystemIds
          * ResourceId
          * Url
        * StaticKeyProvider
          * KeyFormat
          * KeyFormatVersions
          * StaticKeyValue
          * Url
        * Type
      * FragmentLength
      * ManifestCompression
      * ManifestDurationFormat
      * MinBufferTime
      * MinFinalSegmentLength
      * MpdProfile
      * SegmentControl
      * SegmentLength
      * StreamInfResolution
      * WriteDashManifest
      * WriteHlsManifest
      * WriteSegmentTimelineInRepresentation
    * DashIsoGroupSettings
      * AdditionalManifests
        * items [DashAdditionalManifest](#dashadditionalmanifest)
      * BaseUrl
      * Destination
      * DestinationSettings
        * S3Settings
          * AccessControl
          * Encryption
      * Encryption
        * PlaybackDeviceCompatibility
        * SpekeKeyProvider
          * CertificateArn
          * ResourceId
          * SystemIds
          * Url
      * FragmentLength
      * HbbtvCompliance
      * MinBufferTime
      * MinFinalSegmentLength
      * MpdProfile
      * SegmentControl
      * SegmentLength
      * WriteSegmentTimelineInRepresentation
    * FileGroupSettings
      * Destination
      * DestinationSettings
        * S3Settings
          * AccessControl
          * Encryption
    * HlsGroupSettings
      * AdMarkers
        * items [HlsAdMarkers](#hlsadmarkers)
      * AdditionalManifests
        * items [HlsAdditionalManifest](#hlsadditionalmanifest)
      * AudioOnlyHeader
      * BaseUrl
      * CaptionLanguageMappings
        * items [HlsCaptionLanguageMapping](#hlscaptionlanguagemapping)
      * CaptionLanguageSetting
      * ClientCache
      * CodecSpecification
      * Destination
      * DestinationSettings
        * S3Settings
          * AccessControl
          * Encryption
      * DirectoryStructure
      * Encryption
        * ConstantInitializationVector
        * EncryptionMethod
        * InitializationVectorInManifest
        * OfflineEncrypted
        * SpekeKeyProvider
          * CertificateArn
          * ResourceId
          * SystemIds
          * Url
        * StaticKeyProvider
          * KeyFormat
          * KeyFormatVersions
          * StaticKeyValue
          * Url
        * Type
      * ManifestCompression
      * ManifestDurationFormat
      * MinFinalSegmentLength
      * MinSegmentLength
      * OutputSelection
      * ProgramDateTime
      * ProgramDateTimePeriod
      * SegmentControl
      * SegmentLength
      * SegmentsPerSubdirectory
      * StreamInfResolution
      * TimedMetadataId3Frame
      * TimedMetadataId3Period
      * TimestampDeltaMilliseconds
    * MsSmoothGroupSettings
      * AdditionalManifests
        * items [MsSmoothAdditionalManifest](#mssmoothadditionalmanifest)
      * AudioDeduplication
      * Destination
      * DestinationSettings
        * S3Settings
          * AccessControl
          * Encryption
      * Encryption
        * SpekeKeyProvider
          * CertificateArn
          * ResourceId
          * SystemIds
          * Url
      * FragmentLength
      * ManifestEncoding
    * Type
  * Outputs
    * items [Output](#output)

### OutputGroupDetail
* OutputGroupDetail `object`: Contains details about the output groups specified in the job settings.
  * OutputDetails
    * items [OutputDetail](#outputdetail)

### OutputGroupSettings
* OutputGroupSettings `object`: Output Group settings, including type
  * CmafGroupSettings
    * AdditionalManifests
      * items [CmafAdditionalManifest](#cmafadditionalmanifest)
    * BaseUrl
    * ClientCache
    * CodecSpecification
    * Destination
    * DestinationSettings
      * S3Settings
        * AccessControl
          * CannedAcl
        * Encryption
          * EncryptionType
          * KmsKeyArn
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * InitializationVectorInManifest
      * SpekeKeyProvider
        * CertificateArn
        * DashSignaledSystemIds
          * items [__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringmin36max36pattern09afaf809afaf409afaf409afaf409afaf12)
        * HlsSignaledSystemIds
          * items [__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringmin36max36pattern09afaf809afaf409afaf409afaf409afaf12)
        * ResourceId
        * Url
      * StaticKeyProvider
        * KeyFormat
        * KeyFormatVersions
        * StaticKeyValue
        * Url
      * Type
    * FragmentLength
    * ManifestCompression
    * ManifestDurationFormat
    * MinBufferTime
    * MinFinalSegmentLength
    * MpdProfile
    * SegmentControl
    * SegmentLength
    * StreamInfResolution
    * WriteDashManifest
    * WriteHlsManifest
    * WriteSegmentTimelineInRepresentation
  * DashIsoGroupSettings
    * AdditionalManifests
      * items [DashAdditionalManifest](#dashadditionalmanifest)
    * BaseUrl
    * Destination
    * DestinationSettings
      * S3Settings
        * AccessControl
          * CannedAcl
        * Encryption
          * EncryptionType
          * KmsKeyArn
    * Encryption
      * PlaybackDeviceCompatibility
      * SpekeKeyProvider
        * CertificateArn
        * ResourceId
        * SystemIds
          * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)
        * Url
    * FragmentLength
    * HbbtvCompliance
    * MinBufferTime
    * MinFinalSegmentLength
    * MpdProfile
    * SegmentControl
    * SegmentLength
    * WriteSegmentTimelineInRepresentation
  * FileGroupSettings
    * Destination
    * DestinationSettings
      * S3Settings
        * AccessControl
          * CannedAcl
        * Encryption
          * EncryptionType
          * KmsKeyArn
  * HlsGroupSettings
    * AdMarkers
      * items [HlsAdMarkers](#hlsadmarkers)
    * AdditionalManifests
      * items [HlsAdditionalManifest](#hlsadditionalmanifest)
    * AudioOnlyHeader
    * BaseUrl
    * CaptionLanguageMappings
      * items [HlsCaptionLanguageMapping](#hlscaptionlanguagemapping)
    * CaptionLanguageSetting
    * ClientCache
    * CodecSpecification
    * Destination
    * DestinationSettings
      * S3Settings
        * AccessControl
          * CannedAcl
        * Encryption
          * EncryptionType
          * KmsKeyArn
    * DirectoryStructure
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * InitializationVectorInManifest
      * OfflineEncrypted
      * SpekeKeyProvider
        * CertificateArn
        * ResourceId
        * SystemIds
          * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)
        * Url
      * StaticKeyProvider
        * KeyFormat
        * KeyFormatVersions
        * StaticKeyValue
        * Url
      * Type
    * ManifestCompression
    * ManifestDurationFormat
    * MinFinalSegmentLength
    * MinSegmentLength
    * OutputSelection
    * ProgramDateTime
    * ProgramDateTimePeriod
    * SegmentControl
    * SegmentLength
    * SegmentsPerSubdirectory
    * StreamInfResolution
    * TimedMetadataId3Frame
    * TimedMetadataId3Period
    * TimestampDeltaMilliseconds
  * MsSmoothGroupSettings
    * AdditionalManifests
      * items [MsSmoothAdditionalManifest](#mssmoothadditionalmanifest)
    * AudioDeduplication
    * Destination
    * DestinationSettings
      * S3Settings
        * AccessControl
          * CannedAcl
        * Encryption
          * EncryptionType
          * KmsKeyArn
    * Encryption
      * SpekeKeyProvider
        * CertificateArn
        * ResourceId
        * SystemIds
          * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)
        * Url
    * FragmentLength
    * ManifestEncoding
  * Type

### OutputGroupType
* OutputGroupType `string` (values: HLS_GROUP_SETTINGS, DASH_ISO_GROUP_SETTINGS, FILE_GROUP_SETTINGS, MS_SMOOTH_GROUP_SETTINGS, CMAF_GROUP_SETTINGS): Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)

### OutputSdt
* OutputSdt `string` (values: SDT_FOLLOW, SDT_FOLLOW_IF_PRESENT, SDT_MANUAL, SDT_NONE): Selects method of inserting SDT information into output stream.  "Follow input SDT" copies SDT information from input stream to  output stream. "Follow input SDT if present" copies SDT information from  input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT  Manually" means user will enter the SDT information. "No SDT" means output  stream will not contain SDT information.

### OutputSettings
* OutputSettings `object`: Specific settings for this type of output.
  * HlsSettings
    * AudioGroupId
    * AudioOnlyContainer
    * AudioRenditionSets
    * AudioTrackType
    * IFrameOnlyManifest
    * SegmentModifier

### PartnerWatermarking
* PartnerWatermarking `object`: If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output.
  * NexguardFileMarkerSettings
    * License
    * Payload
    * Preset
    * Strength

### Preset
* Preset `object`: A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
  * Arn
  * Category
  * CreatedAt
  * Description
  * LastUpdated
  * Name **required**
  * Settings **required**
    * AudioDescriptions
      * items [AudioDescription](#audiodescription)
    * CaptionDescriptions
      * items [CaptionDescriptionPreset](#captiondescriptionpreset)
    * ContainerSettings
      * CmfcSettings
        * AudioDuration
        * Scte35Esam
        * Scte35Source
      * Container
      * F4vSettings
        * MoovPlacement
      * M2tsSettings
        * AudioBufferModel
        * AudioDuration
        * AudioFramesPerPes
        * AudioPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * Bitrate
        * BufferModel
        * DvbNitSettings
          * NetworkId
          * NetworkName
          * NitInterval
        * DvbSdtSettings
          * OutputSdt
          * SdtInterval
          * ServiceName
          * ServiceProviderName
        * DvbSubPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * DvbTdtSettings
          * TdtInterval
        * DvbTeletextPid
        * EbpAudioInterval
        * EbpPlacement
        * EsRateInPes
        * ForceTsVideoEbpOrder
        * FragmentTime
        * MaxPcrInterval
        * MinEbpInterval
        * NielsenId3
        * NullPacketBitrate
        * PatInterval
        * PcrControl
        * PcrPid
        * PmtInterval
        * PmtPid
        * PrivateMetadataPid
        * ProgramNumber
        * RateMode
        * Scte35Esam
          * Scte35EsamPid
        * Scte35Pid
        * Scte35Source
        * SegmentationMarkers
        * SegmentationStyle
        * SegmentationTime
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * M3u8Settings
        * AudioDuration
        * AudioFramesPerPes
        * AudioPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * NielsenId3
        * PatInterval
        * PcrControl
        * PcrPid
        * PmtInterval
        * PmtPid
        * PrivateMetadataPid
        * ProgramNumber
        * Scte35Pid
        * Scte35Source
        * TimedMetadata
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * MovSettings
        * ClapAtom
        * CslgAtom
        * Mpeg2FourCCControl
        * PaddingControl
        * Reference
      * Mp4Settings
        * AudioDuration
        * CslgAtom
        * CttsVersion
        * FreeSpaceBox
        * MoovPlacement
        * Mp4MajorBrand
      * MpdSettings
        * AccessibilityCaptionHints
        * AudioDuration
        * CaptionContainerType
        * Scte35Esam
        * Scte35Source
      * MxfSettings
        * AfdSignaling
        * Profile
    * VideoDescription
      * AfdSignaling
      * AntiAlias
      * CodecSettings
        * Av1Settings
          * AdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * MaxBitrate
          * NumberBFramesBetweenReferenceFrames
          * QvbrSettings
          * RateControlMode
          * Slices
          * SpatialAdaptiveQuantization
        * AvcIntraSettings
          * AvcIntraClass
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * SlowPal
          * Telecine
        * Codec
        * FrameCaptureSettings
          * FramerateDenominator
          * FramerateNumerator
          * MaxCaptures
          * Quality
        * H264Settings
          * AdaptiveQuantization
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * EntropyEncoding
          * FieldEncoding
          * FlickerAdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopBReference
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * NumberReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * QvbrSettings
          * RateControlMode
          * RepeatPps
          * SceneChangeDetect
          * Slices
          * SlowPal
          * Softness
          * SpatialAdaptiveQuantization
          * Syntax
          * Telecine
          * TemporalAdaptiveQuantization
          * UnregisteredSeiTimecode
        * H265Settings
          * AdaptiveQuantization
          * AlternateTransferFunctionSei
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * FlickerAdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopBReference
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * NumberReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * QvbrSettings
          * RateControlMode
          * SampleAdaptiveOffsetFilterMode
          * SceneChangeDetect
          * Slices
          * SlowPal
          * SpatialAdaptiveQuantization
          * Telecine
          * TemporalAdaptiveQuantization
          * TemporalIds
          * Tiles
          * UnregisteredSeiTimecode
          * WriteMp4PackagingType
        * Mpeg2Settings
          * AdaptiveQuantization
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * IntraDcPrecision
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
          * SceneChangeDetect
          * SlowPal
          * Softness
          * SpatialAdaptiveQuantization
          * Syntax
          * Telecine
          * TemporalAdaptiveQuantization
        * ProresSettings
          * CodecProfile
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * ParControl
          * ParDenominator
          * ParNumerator
          * SlowPal
          * Telecine
        * Vc3Settings
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * SlowPal
          * Telecine
          * Vc3Class
        * Vp8Settings
          * Bitrate
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * HrdBufferSize
          * MaxBitrate
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
        * Vp9Settings
          * Bitrate
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * HrdBufferSize
          * MaxBitrate
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
      * ColorMetadata
      * Crop
        * Height
        * Width
        * X
        * Y
      * DropFrameTimecode
      * FixedAfd
      * Height
      * Position
        * Height
        * Width
        * X
        * Y
      * RespondToAfd
      * ScalingBehavior
      * Sharpness
      * TimecodeInsertion
      * VideoPreprocessors
        * ColorCorrector
          * Brightness
          * ColorSpaceConversion
          * Contrast
          * Hdr10Metadata
          * Hue
          * Saturation
        * Deinterlacer
          * Algorithm
          * Control
          * Mode
        * DolbyVision
          * L6Metadata
          * L6Mode
          * Profile
        * ImageInserter
          * InsertableImages
        * NoiseReducer
          * Filter
          * FilterSettings
          * SpatialFilterSettings
          * TemporalFilterSettings
        * PartnerWatermarking
          * NexguardFileMarkerSettings
        * TimecodeBurnin
          * FontSize
          * Position
          * Prefix
      * Width
  * Type

### PresetListBy
* PresetListBy `string` (values: NAME, CREATION_DATE, SYSTEM): Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.

### PresetSettings
* PresetSettings `object`: Settings for preset
  * AudioDescriptions
    * items [AudioDescription](#audiodescription)
  * CaptionDescriptions
    * items [CaptionDescriptionPreset](#captiondescriptionpreset)
  * ContainerSettings
    * CmfcSettings
      * AudioDuration
      * Scte35Esam
      * Scte35Source
    * Container
    * F4vSettings
      * MoovPlacement
    * M2tsSettings
      * AudioBufferModel
      * AudioDuration
      * AudioFramesPerPes
      * AudioPids
        * items [__integerMin32Max8182](#__integermin32max8182)
      * Bitrate
      * BufferModel
      * DvbNitSettings
        * NetworkId
        * NetworkName
        * NitInterval
      * DvbSdtSettings
        * OutputSdt
        * SdtInterval
        * ServiceName
        * ServiceProviderName
      * DvbSubPids
        * items [__integerMin32Max8182](#__integermin32max8182)
      * DvbTdtSettings
        * TdtInterval
      * DvbTeletextPid
      * EbpAudioInterval
      * EbpPlacement
      * EsRateInPes
      * ForceTsVideoEbpOrder
      * FragmentTime
      * MaxPcrInterval
      * MinEbpInterval
      * NielsenId3
      * NullPacketBitrate
      * PatInterval
      * PcrControl
      * PcrPid
      * PmtInterval
      * PmtPid
      * PrivateMetadataPid
      * ProgramNumber
      * RateMode
      * Scte35Esam
        * Scte35EsamPid
      * Scte35Pid
      * Scte35Source
      * SegmentationMarkers
      * SegmentationStyle
      * SegmentationTime
      * TimedMetadataPid
      * TransportStreamId
      * VideoPid
    * M3u8Settings
      * AudioDuration
      * AudioFramesPerPes
      * AudioPids
        * items [__integerMin32Max8182](#__integermin32max8182)
      * NielsenId3
      * PatInterval
      * PcrControl
      * PcrPid
      * PmtInterval
      * PmtPid
      * PrivateMetadataPid
      * ProgramNumber
      * Scte35Pid
      * Scte35Source
      * TimedMetadata
      * TimedMetadataPid
      * TransportStreamId
      * VideoPid
    * MovSettings
      * ClapAtom
      * CslgAtom
      * Mpeg2FourCCControl
      * PaddingControl
      * Reference
    * Mp4Settings
      * AudioDuration
      * CslgAtom
      * CttsVersion
      * FreeSpaceBox
      * MoovPlacement
      * Mp4MajorBrand
    * MpdSettings
      * AccessibilityCaptionHints
      * AudioDuration
      * CaptionContainerType
      * Scte35Esam
      * Scte35Source
    * MxfSettings
      * AfdSignaling
      * Profile
  * VideoDescription
    * AfdSignaling
    * AntiAlias
    * CodecSettings
      * Av1Settings
        * AdaptiveQuantization
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopSize
        * MaxBitrate
        * NumberBFramesBetweenReferenceFrames
        * QvbrSettings
          * QvbrQualityLevel
          * QvbrQualityLevelFineTune
        * RateControlMode
        * Slices
        * SpatialAdaptiveQuantization
      * AvcIntraSettings
        * AvcIntraClass
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * InterlaceMode
        * SlowPal
        * Telecine
      * Codec
      * FrameCaptureSettings
        * FramerateDenominator
        * FramerateNumerator
        * MaxCaptures
        * Quality
      * H264Settings
        * AdaptiveQuantization
        * Bitrate
        * CodecLevel
        * CodecProfile
        * DynamicSubGop
        * EntropyEncoding
        * FieldEncoding
        * FlickerAdaptiveQuantization
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopBReference
        * GopClosedCadence
        * GopSize
        * GopSizeUnits
        * HrdBufferInitialFillPercentage
        * HrdBufferSize
        * InterlaceMode
        * MaxBitrate
        * MinIInterval
        * NumberBFramesBetweenReferenceFrames
        * NumberReferenceFrames
        * ParControl
        * ParDenominator
        * ParNumerator
        * QualityTuningLevel
        * QvbrSettings
          * MaxAverageBitrate
          * QvbrQualityLevel
          * QvbrQualityLevelFineTune
        * RateControlMode
        * RepeatPps
        * SceneChangeDetect
        * Slices
        * SlowPal
        * Softness
        * SpatialAdaptiveQuantization
        * Syntax
        * Telecine
        * TemporalAdaptiveQuantization
        * UnregisteredSeiTimecode
      * H265Settings
        * AdaptiveQuantization
        * AlternateTransferFunctionSei
        * Bitrate
        * CodecLevel
        * CodecProfile
        * DynamicSubGop
        * FlickerAdaptiveQuantization
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopBReference
        * GopClosedCadence
        * GopSize
        * GopSizeUnits
        * HrdBufferInitialFillPercentage
        * HrdBufferSize
        * InterlaceMode
        * MaxBitrate
        * MinIInterval
        * NumberBFramesBetweenReferenceFrames
        * NumberReferenceFrames
        * ParControl
        * ParDenominator
        * ParNumerator
        * QualityTuningLevel
        * QvbrSettings
          * MaxAverageBitrate
          * QvbrQualityLevel
          * QvbrQualityLevelFineTune
        * RateControlMode
        * SampleAdaptiveOffsetFilterMode
        * SceneChangeDetect
        * Slices
        * SlowPal
        * SpatialAdaptiveQuantization
        * Telecine
        * TemporalAdaptiveQuantization
        * TemporalIds
        * Tiles
        * UnregisteredSeiTimecode
        * WriteMp4PackagingType
      * Mpeg2Settings
        * AdaptiveQuantization
        * Bitrate
        * CodecLevel
        * CodecProfile
        * DynamicSubGop
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopClosedCadence
        * GopSize
        * GopSizeUnits
        * HrdBufferInitialFillPercentage
        * HrdBufferSize
        * InterlaceMode
        * IntraDcPrecision
        * MaxBitrate
        * MinIInterval
        * NumberBFramesBetweenReferenceFrames
        * ParControl
        * ParDenominator
        * ParNumerator
        * QualityTuningLevel
        * RateControlMode
        * SceneChangeDetect
        * SlowPal
        * Softness
        * SpatialAdaptiveQuantization
        * Syntax
        * Telecine
        * TemporalAdaptiveQuantization
      * ProresSettings
        * CodecProfile
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * InterlaceMode
        * ParControl
        * ParDenominator
        * ParNumerator
        * SlowPal
        * Telecine
      * Vc3Settings
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * InterlaceMode
        * SlowPal
        * Telecine
        * Vc3Class
      * Vp8Settings
        * Bitrate
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopSize
        * HrdBufferSize
        * MaxBitrate
        * ParControl
        * ParDenominator
        * ParNumerator
        * QualityTuningLevel
        * RateControlMode
      * Vp9Settings
        * Bitrate
        * FramerateControl
        * FramerateConversionAlgorithm
        * FramerateDenominator
        * FramerateNumerator
        * GopSize
        * HrdBufferSize
        * MaxBitrate
        * ParControl
        * ParDenominator
        * ParNumerator
        * QualityTuningLevel
        * RateControlMode
    * ColorMetadata
    * Crop
      * Height
      * Width
      * X
      * Y
    * DropFrameTimecode
    * FixedAfd
    * Height
    * Position
      * Height
      * Width
      * X
      * Y
    * RespondToAfd
    * ScalingBehavior
    * Sharpness
    * TimecodeInsertion
    * VideoPreprocessors
      * ColorCorrector
        * Brightness
        * ColorSpaceConversion
        * Contrast
        * Hdr10Metadata
          * BluePrimaryX
          * BluePrimaryY
          * GreenPrimaryX
          * GreenPrimaryY
          * MaxContentLightLevel
          * MaxFrameAverageLightLevel
          * MaxLuminance
          * MinLuminance
          * RedPrimaryX
          * RedPrimaryY
          * WhitePointX
          * WhitePointY
        * Hue
        * Saturation
      * Deinterlacer
        * Algorithm
        * Control
        * Mode
      * DolbyVision
        * L6Metadata
          * MaxCll
          * MaxFall
        * L6Mode
        * Profile
      * ImageInserter
        * InsertableImages
          * items [InsertableImage](#insertableimage)
      * NoiseReducer
        * Filter
        * FilterSettings
          * Strength
        * SpatialFilterSettings
          * PostFilterSharpenStrength
          * Speed
          * Strength
        * TemporalFilterSettings
          * AggressiveMode
          * PostTemporalSharpening
          * Speed
          * Strength
      * PartnerWatermarking
        * NexguardFileMarkerSettings
          * License
          * Payload
          * Preset
          * Strength
      * TimecodeBurnin
        * FontSize
        * Position
        * Prefix
    * Width

### PricingPlan
* PricingPlan `string` (values: ON_DEMAND, RESERVED): Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.

### ProresCodecProfile
* ProresCodecProfile `string` (values: APPLE_PRORES_422, APPLE_PRORES_422_HQ, APPLE_PRORES_422_LT, APPLE_PRORES_422_PROXY): Use Profile (ProResCodecProfile) to specifiy the type of Apple ProRes codec to use for this output.

### ProresFramerateControl
* ProresFramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.

### ProresFramerateConversionAlgorithm
* ProresFramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE, FRAMEFORMER): Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.

### ProresInterlaceMode
* ProresInterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.

### ProresParControl
* ProresParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.

### ProresSettings
* ProresSettings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
  * CodecProfile
  * FramerateControl
  * FramerateConversionAlgorithm
  * FramerateDenominator
  * FramerateNumerator
  * InterlaceMode
  * ParControl
  * ParDenominator
  * ParNumerator
  * SlowPal
  * Telecine

### ProresSlowPal
* ProresSlowPal `string` (values: DISABLED, ENABLED): Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.

### ProresTelecine
* ProresTelecine `string` (values: NONE, HARD): When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.

### Queue
* Queue `object`: You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
  * Arn
  * CreatedAt
  * Description
  * LastUpdated
  * Name **required**
  * PricingPlan
  * ProgressingJobsCount
  * ReservationPlan
    * Commitment
    * ExpiresAt
    * PurchasedAt
    * RenewalType
    * ReservedSlots
    * Status
  * Status
  * SubmittedJobsCount
  * Type

### QueueListBy
* QueueListBy `string` (values: NAME, CREATION_DATE): Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.

### QueueStatus
* QueueStatus `string` (values: ACTIVE, PAUSED): Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error.

### QueueTransition
* QueueTransition `object`: Description of the source and destination queues between which the job has moved, along with the timestamp of the move
  * DestinationQueue
  * SourceQueue
  * Timestamp

### Rectangle
* Rectangle `object`: Use Rectangle to identify a specific area of the video frame.
  * Height
  * Width
  * X
  * Y

### RemixSettings
* RemixSettings `object`: Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides.
  * ChannelMapping
    * OutputChannels
      * items [OutputChannelMapping](#outputchannelmapping)
  * ChannelsIn
  * ChannelsOut

### RenewalType
* RenewalType `string` (values: AUTO_RENEW, EXPIRE): Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term.

### ReservationPlan
* ReservationPlan `object`: Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
  * Commitment
  * ExpiresAt
  * PurchasedAt
  * RenewalType
  * ReservedSlots
  * Status

### ReservationPlanSettings
* ReservationPlanSettings `object`: Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
  * Commitment **required**
  * RenewalType **required**
  * ReservedSlots **required**

### ReservationPlanStatus
* ReservationPlanStatus `string` (values: ACTIVE, EXPIRED): Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.

### ResourceTags
* ResourceTags `object`: The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
  * Arn
  * Tags

### RespondToAfd
* RespondToAfd `string` (values: NONE, RESPOND, PASSTHROUGH): Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output.

### S3DestinationAccessControl
* S3DestinationAccessControl `object`: Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
  * CannedAcl

### S3DestinationSettings
* S3DestinationSettings `object`: Settings associated with S3 destination
  * AccessControl
    * CannedAcl
  * Encryption
    * EncryptionType
    * KmsKeyArn

### S3EncryptionSettings
* S3EncryptionSettings `object`: Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
  * EncryptionType
  * KmsKeyArn

### S3ObjectCannedAcl
* S3ObjectCannedAcl `string` (values: PUBLIC_READ, AUTHENTICATED_READ, BUCKET_OWNER_READ, BUCKET_OWNER_FULL_CONTROL): Choose an Amazon S3 canned ACL for MediaConvert to apply to this output.

### S3ServerSideEncryptionType
* S3ServerSideEncryptionType `string` (values: SERVER_SIDE_ENCRYPTION_S3, SERVER_SIDE_ENCRYPTION_KMS): Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3 (SERVER_SIDE_ENCRYPTION_S3). If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting  KMS ARN (kmsKeyArn).

### ScalingBehavior
* ScalingBehavior `string` (values: DEFAULT, STRETCH_TO_OUTPUT): Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output (STRETCH_TO_OUTPUT) to have the service stretch your video image to fit. Keep the setting Default (DEFAULT) to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement (position) in this output.

### SccDestinationFramerate
* SccDestinationFramerate `string` (values: FRAMERATE_23_97, FRAMERATE_24, FRAMERATE_25, FRAMERATE_29_97_DROPFRAME, FRAMERATE_29_97_NON_DROPFRAME): Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME).

### SccDestinationSettings
* SccDestinationSettings `object`: Settings for SCC caption output.
  * Framerate

### SimulateReservedQueue
* SimulateReservedQueue `string` (values: DISABLED, ENABLED): Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.

### SpekeKeyProvider
* SpekeKeyProvider `object`: If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
  * CertificateArn
  * ResourceId
  * SystemIds
    * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)
  * Url

### SpekeKeyProviderCmaf
* SpekeKeyProviderCmaf `object`: If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
  * CertificateArn
  * DashSignaledSystemIds
    * items [__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringmin36max36pattern09afaf809afaf409afaf409afaf409afaf12)
  * HlsSignaledSystemIds
    * items [__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringmin36max36pattern09afaf809afaf409afaf409afaf409afaf12)
  * ResourceId
  * Url

### StaticKeyProvider
* StaticKeyProvider `object`: Use these settings to set up encryption with a static key provider.
  * KeyFormat
  * KeyFormatVersions
  * StaticKeyValue
  * Url

### StatusUpdateInterval
* StatusUpdateInterval `string` (values: SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600): Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.

### TagResourceRequest
* TagResourceRequest `object`
  * Arn **required**
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TeletextDestinationSettings
* TeletextDestinationSettings `object`: Settings for Teletext caption output
  * PageNumber
  * PageTypes
    * items [TeletextPageType](#teletextpagetype)

### TeletextPageType
* TeletextPageType `string` (values: PAGE_TYPE_INITIAL, PAGE_TYPE_SUBTITLE, PAGE_TYPE_ADDL_INFO, PAGE_TYPE_PROGRAM_SCHEDULE, PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE): A page type as defined in the standard ETSI EN 300 468, Table 94

### TeletextSourceSettings
* TeletextSourceSettings `object`: Settings specific to Teletext caption sources, including Page number.
  * PageNumber

### TimecodeBurnin
* TimecodeBurnin `object`: Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output.
  * FontSize
  * Position
  * Prefix

### TimecodeBurninPosition
* TimecodeBurninPosition `string` (values: TOP_CENTER, TOP_LEFT, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT): Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video.

### TimecodeConfig
* TimecodeConfig `object`: These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
  * Anchor
  * Source
  * Start
  * TimestampOffset

### TimecodeSource
* TimecodeSource `string` (values: EMBEDDED, ZEROBASED, SPECIFIEDSTART): Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value.

### TimedMetadata
* TimedMetadata `string` (values: PASSTHROUGH, NONE): Applies only to HLS outputs. Use this setting to specify whether the service inserts the ID3 timed metadata from the input in this output.

### TimedMetadataInsertion
* TimedMetadataInsertion `object`: Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in any HLS outputs. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
  * Id3Insertions
    * items [Id3Insertion](#id3insertion)

### Timing
* Timing `object`: Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
  * FinishTime
  * StartTime
  * SubmitTime

### TooManyRequestsException


### TrackSourceSettings
* TrackSourceSettings `object`: Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
  * TrackNumber

### TtmlDestinationSettings
* TtmlDestinationSettings `object`: Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough).
  * StylePassthrough

### TtmlStylePassthrough
* TtmlStylePassthrough `string` (values: ENABLED, DISABLED): Pass through style and position information from a TTML-like input source (TTML, SMPTE-TT) to the TTML output.

### Type
* Type `string` (values: SYSTEM, CUSTOM)

### UntagResourceRequest
* UntagResourceRequest `object`
  * TagKeys
    * items [__string](#__string)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateJobTemplateRequest
* UpdateJobTemplateRequest `object`
  * AccelerationSettings
    * Mode **required**
  * Category
  * Description
  * HopDestinations
    * items [HopDestination](#hopdestination)
  * Priority
  * Queue
  * Settings
    * AdAvailOffset
    * AvailBlanking
      * AvailBlankingImage
    * Esam
      * ManifestConfirmConditionNotification
        * MccXml
      * ResponseSignalPreroll
      * SignalProcessingNotification
        * SccXml
    * Inputs
      * items [InputTemplate](#inputtemplate)
    * MotionImageInserter
      * Framerate
        * FramerateDenominator
        * FramerateNumerator
      * Input
      * InsertionMode
      * Offset
        * ImageX
        * ImageY
      * Playback
      * StartTime
    * NielsenConfiguration
      * BreakoutCode
      * DistributorId
    * NielsenNonLinearWatermark
      * ActiveWatermarkProcess
      * AdiFilename
      * AssetId
      * AssetName
      * CbetSourceId
      * EpisodeId
      * MetadataDestination
      * SourceId
      * SourceWatermarkStatus
      * TicServerUrl
      * UniqueTicPerAudioTrack
    * OutputGroups
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig
      * Anchor
      * Source
      * Start
      * TimestampOffset
    * TimedMetadataInsertion
      * Id3Insertions
        * items [Id3Insertion](#id3insertion)
  * StatusUpdateInterval

### UpdateJobTemplateResponse
* UpdateJobTemplateResponse `object`
  * JobTemplate
    * AccelerationSettings
      * Mode **required**
    * Arn
    * Category
    * CreatedAt
    * Description
    * HopDestinations
      * items [HopDestination](#hopdestination)
    * LastUpdated
    * Name **required**
    * Priority
    * Queue
    * Settings **required**
      * AdAvailOffset
      * AvailBlanking
        * AvailBlankingImage
      * Esam
        * ManifestConfirmConditionNotification
          * MccXml
        * ResponseSignalPreroll
        * SignalProcessingNotification
          * SccXml
      * Inputs
        * items [InputTemplate](#inputtemplate)
      * MotionImageInserter
        * Framerate
          * FramerateDenominator
          * FramerateNumerator
        * Input
        * InsertionMode
        * Offset
          * ImageX
          * ImageY
        * Playback
        * StartTime
      * NielsenConfiguration
        * BreakoutCode
        * DistributorId
      * NielsenNonLinearWatermark
        * ActiveWatermarkProcess
        * AdiFilename
        * AssetId
        * AssetName
        * CbetSourceId
        * EpisodeId
        * MetadataDestination
        * SourceId
        * SourceWatermarkStatus
        * TicServerUrl
        * UniqueTicPerAudioTrack
      * OutputGroups
        * items [OutputGroup](#outputgroup)
      * TimecodeConfig
        * Anchor
        * Source
        * Start
        * TimestampOffset
      * TimedMetadataInsertion
        * Id3Insertions
          * items [Id3Insertion](#id3insertion)
    * StatusUpdateInterval
    * Type

### UpdatePresetRequest
* UpdatePresetRequest `object`
  * Category
  * Description
  * Settings
    * AudioDescriptions
      * items [AudioDescription](#audiodescription)
    * CaptionDescriptions
      * items [CaptionDescriptionPreset](#captiondescriptionpreset)
    * ContainerSettings
      * CmfcSettings
        * AudioDuration
        * Scte35Esam
        * Scte35Source
      * Container
      * F4vSettings
        * MoovPlacement
      * M2tsSettings
        * AudioBufferModel
        * AudioDuration
        * AudioFramesPerPes
        * AudioPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * Bitrate
        * BufferModel
        * DvbNitSettings
          * NetworkId
          * NetworkName
          * NitInterval
        * DvbSdtSettings
          * OutputSdt
          * SdtInterval
          * ServiceName
          * ServiceProviderName
        * DvbSubPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * DvbTdtSettings
          * TdtInterval
        * DvbTeletextPid
        * EbpAudioInterval
        * EbpPlacement
        * EsRateInPes
        * ForceTsVideoEbpOrder
        * FragmentTime
        * MaxPcrInterval
        * MinEbpInterval
        * NielsenId3
        * NullPacketBitrate
        * PatInterval
        * PcrControl
        * PcrPid
        * PmtInterval
        * PmtPid
        * PrivateMetadataPid
        * ProgramNumber
        * RateMode
        * Scte35Esam
          * Scte35EsamPid
        * Scte35Pid
        * Scte35Source
        * SegmentationMarkers
        * SegmentationStyle
        * SegmentationTime
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * M3u8Settings
        * AudioDuration
        * AudioFramesPerPes
        * AudioPids
          * items [__integerMin32Max8182](#__integermin32max8182)
        * NielsenId3
        * PatInterval
        * PcrControl
        * PcrPid
        * PmtInterval
        * PmtPid
        * PrivateMetadataPid
        * ProgramNumber
        * Scte35Pid
        * Scte35Source
        * TimedMetadata
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * MovSettings
        * ClapAtom
        * CslgAtom
        * Mpeg2FourCCControl
        * PaddingControl
        * Reference
      * Mp4Settings
        * AudioDuration
        * CslgAtom
        * CttsVersion
        * FreeSpaceBox
        * MoovPlacement
        * Mp4MajorBrand
      * MpdSettings
        * AccessibilityCaptionHints
        * AudioDuration
        * CaptionContainerType
        * Scte35Esam
        * Scte35Source
      * MxfSettings
        * AfdSignaling
        * Profile
    * VideoDescription
      * AfdSignaling
      * AntiAlias
      * CodecSettings
        * Av1Settings
          * AdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * MaxBitrate
          * NumberBFramesBetweenReferenceFrames
          * QvbrSettings
          * RateControlMode
          * Slices
          * SpatialAdaptiveQuantization
        * AvcIntraSettings
          * AvcIntraClass
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * SlowPal
          * Telecine
        * Codec
        * FrameCaptureSettings
          * FramerateDenominator
          * FramerateNumerator
          * MaxCaptures
          * Quality
        * H264Settings
          * AdaptiveQuantization
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * EntropyEncoding
          * FieldEncoding
          * FlickerAdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopBReference
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * NumberReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * QvbrSettings
          * RateControlMode
          * RepeatPps
          * SceneChangeDetect
          * Slices
          * SlowPal
          * Softness
          * SpatialAdaptiveQuantization
          * Syntax
          * Telecine
          * TemporalAdaptiveQuantization
          * UnregisteredSeiTimecode
        * H265Settings
          * AdaptiveQuantization
          * AlternateTransferFunctionSei
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * FlickerAdaptiveQuantization
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopBReference
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * NumberReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * QvbrSettings
          * RateControlMode
          * SampleAdaptiveOffsetFilterMode
          * SceneChangeDetect
          * Slices
          * SlowPal
          * SpatialAdaptiveQuantization
          * Telecine
          * TemporalAdaptiveQuantization
          * TemporalIds
          * Tiles
          * UnregisteredSeiTimecode
          * WriteMp4PackagingType
        * Mpeg2Settings
          * AdaptiveQuantization
          * Bitrate
          * CodecLevel
          * CodecProfile
          * DynamicSubGop
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopClosedCadence
          * GopSize
          * GopSizeUnits
          * HrdBufferInitialFillPercentage
          * HrdBufferSize
          * InterlaceMode
          * IntraDcPrecision
          * MaxBitrate
          * MinIInterval
          * NumberBFramesBetweenReferenceFrames
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
          * SceneChangeDetect
          * SlowPal
          * Softness
          * SpatialAdaptiveQuantization
          * Syntax
          * Telecine
          * TemporalAdaptiveQuantization
        * ProresSettings
          * CodecProfile
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * ParControl
          * ParDenominator
          * ParNumerator
          * SlowPal
          * Telecine
        * Vc3Settings
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * InterlaceMode
          * SlowPal
          * Telecine
          * Vc3Class
        * Vp8Settings
          * Bitrate
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * HrdBufferSize
          * MaxBitrate
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
        * Vp9Settings
          * Bitrate
          * FramerateControl
          * FramerateConversionAlgorithm
          * FramerateDenominator
          * FramerateNumerator
          * GopSize
          * HrdBufferSize
          * MaxBitrate
          * ParControl
          * ParDenominator
          * ParNumerator
          * QualityTuningLevel
          * RateControlMode
      * ColorMetadata
      * Crop
        * Height
        * Width
        * X
        * Y
      * DropFrameTimecode
      * FixedAfd
      * Height
      * Position
        * Height
        * Width
        * X
        * Y
      * RespondToAfd
      * ScalingBehavior
      * Sharpness
      * TimecodeInsertion
      * VideoPreprocessors
        * ColorCorrector
          * Brightness
          * ColorSpaceConversion
          * Contrast
          * Hdr10Metadata
          * Hue
          * Saturation
        * Deinterlacer
          * Algorithm
          * Control
          * Mode
        * DolbyVision
          * L6Metadata
          * L6Mode
          * Profile
        * ImageInserter
          * InsertableImages
        * NoiseReducer
          * Filter
          * FilterSettings
          * SpatialFilterSettings
          * TemporalFilterSettings
        * PartnerWatermarking
          * NexguardFileMarkerSettings
        * TimecodeBurnin
          * FontSize
          * Position
          * Prefix
      * Width

### UpdatePresetResponse
* UpdatePresetResponse `object`
  * Preset
    * Arn
    * Category
    * CreatedAt
    * Description
    * LastUpdated
    * Name **required**
    * Settings **required**
      * AudioDescriptions
        * items [AudioDescription](#audiodescription)
      * CaptionDescriptions
        * items [CaptionDescriptionPreset](#captiondescriptionpreset)
      * ContainerSettings
        * CmfcSettings
          * AudioDuration
          * Scte35Esam
          * Scte35Source
        * Container
        * F4vSettings
          * MoovPlacement
        * M2tsSettings
          * AudioBufferModel
          * AudioDuration
          * AudioFramesPerPes
          * AudioPids
          * Bitrate
          * BufferModel
          * DvbNitSettings
          * DvbSdtSettings
          * DvbSubPids
          * DvbTdtSettings
          * DvbTeletextPid
          * EbpAudioInterval
          * EbpPlacement
          * EsRateInPes
          * ForceTsVideoEbpOrder
          * FragmentTime
          * MaxPcrInterval
          * MinEbpInterval
          * NielsenId3
          * NullPacketBitrate
          * PatInterval
          * PcrControl
          * PcrPid
          * PmtInterval
          * PmtPid
          * PrivateMetadataPid
          * ProgramNumber
          * RateMode
          * Scte35Esam
          * Scte35Pid
          * Scte35Source
          * SegmentationMarkers
          * SegmentationStyle
          * SegmentationTime
          * TimedMetadataPid
          * TransportStreamId
          * VideoPid
        * M3u8Settings
          * AudioDuration
          * AudioFramesPerPes
          * AudioPids
          * NielsenId3
          * PatInterval
          * PcrControl
          * PcrPid
          * PmtInterval
          * PmtPid
          * PrivateMetadataPid
          * ProgramNumber
          * Scte35Pid
          * Scte35Source
          * TimedMetadata
          * TimedMetadataPid
          * TransportStreamId
          * VideoPid
        * MovSettings
          * ClapAtom
          * CslgAtom
          * Mpeg2FourCCControl
          * PaddingControl
          * Reference
        * Mp4Settings
          * AudioDuration
          * CslgAtom
          * CttsVersion
          * FreeSpaceBox
          * MoovPlacement
          * Mp4MajorBrand
        * MpdSettings
          * AccessibilityCaptionHints
          * AudioDuration
          * CaptionContainerType
          * Scte35Esam
          * Scte35Source
        * MxfSettings
          * AfdSignaling
          * Profile
      * VideoDescription
        * AfdSignaling
        * AntiAlias
        * CodecSettings
          * Av1Settings
          * AvcIntraSettings
          * Codec
          * FrameCaptureSettings
          * H264Settings
          * H265Settings
          * Mpeg2Settings
          * ProresSettings
          * Vc3Settings
          * Vp8Settings
          * Vp9Settings
        * ColorMetadata
        * Crop
          * Height
          * Width
          * X
          * Y
        * DropFrameTimecode
        * FixedAfd
        * Height
        * Position
          * Height
          * Width
          * X
          * Y
        * RespondToAfd
        * ScalingBehavior
        * Sharpness
        * TimecodeInsertion
        * VideoPreprocessors
          * ColorCorrector
          * Deinterlacer
          * DolbyVision
          * ImageInserter
          * NoiseReducer
          * PartnerWatermarking
          * TimecodeBurnin
        * Width
    * Type

### UpdateQueueRequest
* UpdateQueueRequest `object`
  * Description
  * ReservationPlanSettings
    * Commitment **required**
    * RenewalType **required**
    * ReservedSlots **required**
  * Status

### UpdateQueueResponse
* UpdateQueueResponse `object`
  * Queue
    * Arn
    * CreatedAt
    * Description
    * LastUpdated
    * Name **required**
    * PricingPlan
    * ProgressingJobsCount
    * ReservationPlan
      * Commitment
      * ExpiresAt
      * PurchasedAt
      * RenewalType
      * ReservedSlots
      * Status
    * Status
    * SubmittedJobsCount
    * Type

### Vc3Class
* Vc3Class `string` (values: CLASS_145_8BIT, CLASS_220_8BIT, CLASS_220_10BIT): Specify the VC3 class to choose the quality characteristics for this output. VC3 class, together with the settings Framerate (framerateNumerator and framerateDenominator) and Resolution (height and width), determine your output bitrate. For example, say that your video resolution is 1920x1080 and your framerate is 29.97. Then Class 145 (CLASS_145) gives you an output with a bitrate of approximately 145 Mbps and Class 220 (CLASS_220) gives you and output with a bitrate of approximately 220 Mbps. VC3 class also specifies the color bit depth of your output.

### Vc3FramerateControl
* Vc3FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.

### Vc3FramerateConversionAlgorithm
* Vc3FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE, FRAMEFORMER): Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.

### Vc3InterlaceMode
* Vc3InterlaceMode `string` (values: INTERLACED, PROGRESSIVE): Optional. Choose the scan line type for this output. If you don't specify a value, MediaConvert will create a progressive output.

### Vc3Settings
* Vc3Settings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VC3
  * FramerateControl
  * FramerateConversionAlgorithm
  * FramerateDenominator
  * FramerateNumerator
  * InterlaceMode
  * SlowPal
  * Telecine
  * Vc3Class

### Vc3SlowPal
* Vc3SlowPal `string` (values: DISABLED, ENABLED): Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.

### Vc3Telecine
* Vc3Telecine `string` (values: NONE, HARD): When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.

### VideoCodec
* VideoCodec `string` (values: AV1, AVC_INTRA, FRAME_CAPTURE, H_264, H_265, MPEG2, PRORES, VC3, VP8, VP9): Type of video codec

### VideoCodecSettings
* VideoCodecSettings `object`: Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings
  * Av1Settings
    * AdaptiveQuantization
    * FramerateControl
    * FramerateConversionAlgorithm
    * FramerateDenominator
    * FramerateNumerator
    * GopSize
    * MaxBitrate
    * NumberBFramesBetweenReferenceFrames
    * QvbrSettings
      * QvbrQualityLevel
      * QvbrQualityLevelFineTune
    * RateControlMode
    * Slices
    * SpatialAdaptiveQuantization
  * AvcIntraSettings
    * AvcIntraClass
    * FramerateControl
    * FramerateConversionAlgorithm
    * FramerateDenominator
    * FramerateNumerator
    * InterlaceMode
    * SlowPal
    * Telecine
  * Codec
  * FrameCaptureSettings
    * FramerateDenominator
    * FramerateNumerator
    * MaxCaptures
    * Quality
  * H264Settings
    * AdaptiveQuantization
    * Bitrate
    * CodecLevel
    * CodecProfile
    * DynamicSubGop
    * EntropyEncoding
    * FieldEncoding
    * FlickerAdaptiveQuantization
    * FramerateControl
    * FramerateConversionAlgorithm
    * FramerateDenominator
    * FramerateNumerator
    * GopBReference
    * GopClosedCadence
    * GopSize
    * GopSizeUnits
    * HrdBufferInitialFillPercentage
    * HrdBufferSize
    * InterlaceMode
    * MaxBitrate
    * MinIInterval
    * NumberBFramesBetweenReferenceFrames
    * NumberReferenceFrames
    * ParControl
    * ParDenominator
    * ParNumerator
    * QualityTuningLevel
    * QvbrSettings
      * MaxAverageBitrate
      * QvbrQualityLevel
      * QvbrQualityLevelFineTune
    * RateControlMode
    * RepeatPps
    * SceneChangeDetect
    * Slices
    * SlowPal
    * Softness
    * SpatialAdaptiveQuantization
    * Syntax
    * Telecine
    * TemporalAdaptiveQuantization
    * UnregisteredSeiTimecode
  * H265Settings
    * AdaptiveQuantization
    * AlternateTransferFunctionSei
    * Bitrate
    * CodecLevel
    * CodecProfile
    * DynamicSubGop
    * FlickerAdaptiveQuantization
    * FramerateControl
    * FramerateConversionAlgorithm
    * FramerateDenominator
    * FramerateNumerator
    * GopBReference
    * GopClosedCadence
    * GopSize
    * GopSizeUnits
    * HrdBufferInitialFillPercentage
    * HrdBufferSize
    * InterlaceMode
    * MaxBitrate
    * MinIInterval
    * NumberBFramesBetweenReferenceFrames
    * NumberReferenceFrames
    * ParControl
    * ParDenominator
    * ParNumerator
    * QualityTuningLevel
    * QvbrSettings
      * MaxAverageBitrate
      * QvbrQualityLevel
      * QvbrQualityLevelFineTune
    * RateControlMode
    * SampleAdaptiveOffsetFilterMode
    * SceneChangeDetect
    * Slices
    * SlowPal
    * SpatialAdaptiveQuantization
    * Telecine
    * TemporalAdaptiveQuantization
    * TemporalIds
    * Tiles
    * UnregisteredSeiTimecode
    * WriteMp4PackagingType
  * Mpeg2Settings
    * AdaptiveQuantization
    * Bitrate
    * CodecLevel
    * CodecProfile
    * DynamicSubGop
    * FramerateControl
    * FramerateConversionAlgorithm
    * FramerateDenominator
    * FramerateNumerator
    * GopClosedCadence
    * GopSize
    * GopSizeUnits
    * HrdBufferInitialFillPercentage
    * HrdBufferSize
    * InterlaceMode
    * IntraDcPrecision
    * MaxBitrate
    * MinIInterval
    * NumberBFramesBetweenReferenceFrames
    * ParControl
    * ParDenominator
    * ParNumerator
    * QualityTuningLevel
    * RateControlMode
    * SceneChangeDetect
    * SlowPal
    * Softness
    * SpatialAdaptiveQuantization
    * Syntax
    * Telecine
    * TemporalAdaptiveQuantization
  * ProresSettings
    * CodecProfile
    * FramerateControl
    * FramerateConversionAlgorithm
    * FramerateDenominator
    * FramerateNumerator
    * InterlaceMode
    * ParControl
    * ParDenominator
    * ParNumerator
    * SlowPal
    * Telecine
  * Vc3Settings
    * FramerateControl
    * FramerateConversionAlgorithm
    * FramerateDenominator
    * FramerateNumerator
    * InterlaceMode
    * SlowPal
    * Telecine
    * Vc3Class
  * Vp8Settings
    * Bitrate
    * FramerateControl
    * FramerateConversionAlgorithm
    * FramerateDenominator
    * FramerateNumerator
    * GopSize
    * HrdBufferSize
    * MaxBitrate
    * ParControl
    * ParDenominator
    * ParNumerator
    * QualityTuningLevel
    * RateControlMode
  * Vp9Settings
    * Bitrate
    * FramerateControl
    * FramerateConversionAlgorithm
    * FramerateDenominator
    * FramerateNumerator
    * GopSize
    * HrdBufferSize
    * MaxBitrate
    * ParControl
    * ParDenominator
    * ParNumerator
    * QualityTuningLevel
    * RateControlMode

### VideoDescription
* VideoDescription `object`: Settings for video outputs
  * AfdSignaling
  * AntiAlias
  * CodecSettings
    * Av1Settings
      * AdaptiveQuantization
      * FramerateControl
      * FramerateConversionAlgorithm
      * FramerateDenominator
      * FramerateNumerator
      * GopSize
      * MaxBitrate
      * NumberBFramesBetweenReferenceFrames
      * QvbrSettings
        * QvbrQualityLevel
        * QvbrQualityLevelFineTune
      * RateControlMode
      * Slices
      * SpatialAdaptiveQuantization
    * AvcIntraSettings
      * AvcIntraClass
      * FramerateControl
      * FramerateConversionAlgorithm
      * FramerateDenominator
      * FramerateNumerator
      * InterlaceMode
      * SlowPal
      * Telecine
    * Codec
    * FrameCaptureSettings
      * FramerateDenominator
      * FramerateNumerator
      * MaxCaptures
      * Quality
    * H264Settings
      * AdaptiveQuantization
      * Bitrate
      * CodecLevel
      * CodecProfile
      * DynamicSubGop
      * EntropyEncoding
      * FieldEncoding
      * FlickerAdaptiveQuantization
      * FramerateControl
      * FramerateConversionAlgorithm
      * FramerateDenominator
      * FramerateNumerator
      * GopBReference
      * GopClosedCadence
      * GopSize
      * GopSizeUnits
      * HrdBufferInitialFillPercentage
      * HrdBufferSize
      * InterlaceMode
      * MaxBitrate
      * MinIInterval
      * NumberBFramesBetweenReferenceFrames
      * NumberReferenceFrames
      * ParControl
      * ParDenominator
      * ParNumerator
      * QualityTuningLevel
      * QvbrSettings
        * MaxAverageBitrate
        * QvbrQualityLevel
        * QvbrQualityLevelFineTune
      * RateControlMode
      * RepeatPps
      * SceneChangeDetect
      * Slices
      * SlowPal
      * Softness
      * SpatialAdaptiveQuantization
      * Syntax
      * Telecine
      * TemporalAdaptiveQuantization
      * UnregisteredSeiTimecode
    * H265Settings
      * AdaptiveQuantization
      * AlternateTransferFunctionSei
      * Bitrate
      * CodecLevel
      * CodecProfile
      * DynamicSubGop
      * FlickerAdaptiveQuantization
      * FramerateControl
      * FramerateConversionAlgorithm
      * FramerateDenominator
      * FramerateNumerator
      * GopBReference
      * GopClosedCadence
      * GopSize
      * GopSizeUnits
      * HrdBufferInitialFillPercentage
      * HrdBufferSize
      * InterlaceMode
      * MaxBitrate
      * MinIInterval
      * NumberBFramesBetweenReferenceFrames
      * NumberReferenceFrames
      * ParControl
      * ParDenominator
      * ParNumerator
      * QualityTuningLevel
      * QvbrSettings
        * MaxAverageBitrate
        * QvbrQualityLevel
        * QvbrQualityLevelFineTune
      * RateControlMode
      * SampleAdaptiveOffsetFilterMode
      * SceneChangeDetect
      * Slices
      * SlowPal
      * SpatialAdaptiveQuantization
      * Telecine
      * TemporalAdaptiveQuantization
      * TemporalIds
      * Tiles
      * UnregisteredSeiTimecode
      * WriteMp4PackagingType
    * Mpeg2Settings
      * AdaptiveQuantization
      * Bitrate
      * CodecLevel
      * CodecProfile
      * DynamicSubGop
      * FramerateControl
      * FramerateConversionAlgorithm
      * FramerateDenominator
      * FramerateNumerator
      * GopClosedCadence
      * GopSize
      * GopSizeUnits
      * HrdBufferInitialFillPercentage
      * HrdBufferSize
      * InterlaceMode
      * IntraDcPrecision
      * MaxBitrate
      * MinIInterval
      * NumberBFramesBetweenReferenceFrames
      * ParControl
      * ParDenominator
      * ParNumerator
      * QualityTuningLevel
      * RateControlMode
      * SceneChangeDetect
      * SlowPal
      * Softness
      * SpatialAdaptiveQuantization
      * Syntax
      * Telecine
      * TemporalAdaptiveQuantization
    * ProresSettings
      * CodecProfile
      * FramerateControl
      * FramerateConversionAlgorithm
      * FramerateDenominator
      * FramerateNumerator
      * InterlaceMode
      * ParControl
      * ParDenominator
      * ParNumerator
      * SlowPal
      * Telecine
    * Vc3Settings
      * FramerateControl
      * FramerateConversionAlgorithm
      * FramerateDenominator
      * FramerateNumerator
      * InterlaceMode
      * SlowPal
      * Telecine
      * Vc3Class
    * Vp8Settings
      * Bitrate
      * FramerateControl
      * FramerateConversionAlgorithm
      * FramerateDenominator
      * FramerateNumerator
      * GopSize
      * HrdBufferSize
      * MaxBitrate
      * ParControl
      * ParDenominator
      * ParNumerator
      * QualityTuningLevel
      * RateControlMode
    * Vp9Settings
      * Bitrate
      * FramerateControl
      * FramerateConversionAlgorithm
      * FramerateDenominator
      * FramerateNumerator
      * GopSize
      * HrdBufferSize
      * MaxBitrate
      * ParControl
      * ParDenominator
      * ParNumerator
      * QualityTuningLevel
      * RateControlMode
  * ColorMetadata
  * Crop
    * Height
    * Width
    * X
    * Y
  * DropFrameTimecode
  * FixedAfd
  * Height
  * Position
    * Height
    * Width
    * X
    * Y
  * RespondToAfd
  * ScalingBehavior
  * Sharpness
  * TimecodeInsertion
  * VideoPreprocessors
    * ColorCorrector
      * Brightness
      * ColorSpaceConversion
      * Contrast
      * Hdr10Metadata
        * BluePrimaryX
        * BluePrimaryY
        * GreenPrimaryX
        * GreenPrimaryY
        * MaxContentLightLevel
        * MaxFrameAverageLightLevel
        * MaxLuminance
        * MinLuminance
        * RedPrimaryX
        * RedPrimaryY
        * WhitePointX
        * WhitePointY
      * Hue
      * Saturation
    * Deinterlacer
      * Algorithm
      * Control
      * Mode
    * DolbyVision
      * L6Metadata
        * MaxCll
        * MaxFall
      * L6Mode
      * Profile
    * ImageInserter
      * InsertableImages
        * items [InsertableImage](#insertableimage)
    * NoiseReducer
      * Filter
      * FilterSettings
        * Strength
      * SpatialFilterSettings
        * PostFilterSharpenStrength
        * Speed
        * Strength
      * TemporalFilterSettings
        * AggressiveMode
        * PostTemporalSharpening
        * Speed
        * Strength
    * PartnerWatermarking
      * NexguardFileMarkerSettings
        * License
        * Payload
        * Preset
        * Strength
    * TimecodeBurnin
      * FontSize
      * Position
      * Prefix
  * Width

### VideoDetail
* VideoDetail `object`: Contains details about the output's video stream
  * HeightInPx
  * WidthInPx

### VideoPreprocessor
* VideoPreprocessor `object`: Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
  * ColorCorrector
    * Brightness
    * ColorSpaceConversion
    * Contrast
    * Hdr10Metadata
      * BluePrimaryX
      * BluePrimaryY
      * GreenPrimaryX
      * GreenPrimaryY
      * MaxContentLightLevel
      * MaxFrameAverageLightLevel
      * MaxLuminance
      * MinLuminance
      * RedPrimaryX
      * RedPrimaryY
      * WhitePointX
      * WhitePointY
    * Hue
    * Saturation
  * Deinterlacer
    * Algorithm
    * Control
    * Mode
  * DolbyVision
    * L6Metadata
      * MaxCll
      * MaxFall
    * L6Mode
    * Profile
  * ImageInserter
    * InsertableImages
      * items [InsertableImage](#insertableimage)
  * NoiseReducer
    * Filter
    * FilterSettings
      * Strength
    * SpatialFilterSettings
      * PostFilterSharpenStrength
      * Speed
      * Strength
    * TemporalFilterSettings
      * AggressiveMode
      * PostTemporalSharpening
      * Speed
      * Strength
  * PartnerWatermarking
    * NexguardFileMarkerSettings
      * License
      * Payload
      * Preset
      * Strength
  * TimecodeBurnin
    * FontSize
    * Position
    * Prefix

### VideoSelector
* VideoSelector `object`: Selector for video.
  * AlphaBehavior
  * ColorSpace
  * ColorSpaceUsage
  * Hdr10Metadata
    * BluePrimaryX
    * BluePrimaryY
    * GreenPrimaryX
    * GreenPrimaryY
    * MaxContentLightLevel
    * MaxFrameAverageLightLevel
    * MaxLuminance
    * MinLuminance
    * RedPrimaryX
    * RedPrimaryY
    * WhitePointX
    * WhitePointY
  * Pid
  * ProgramNumber
  * Rotate

### VideoTimecodeInsertion
* VideoTimecodeInsertion `string` (values: DISABLED, PIC_TIMING_SEI): Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does.

### VorbisSettings
* VorbisSettings `object`: Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.
  * Channels
  * SampleRate
  * VbrQuality

### Vp8FramerateControl
* Vp8FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.

### Vp8FramerateConversionAlgorithm
* Vp8FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE, FRAMEFORMER): Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.

### Vp8ParControl
* Vp8ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.

### Vp8QualityTuningLevel
* Vp8QualityTuningLevel `string` (values: MULTI_PASS, MULTI_PASS_HQ): Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.

### Vp8RateControlMode
* Vp8RateControlMode `string` (values: VBR): With the VP8 codec, you can use only the variable bitrate (VBR) rate control mode.

### Vp8Settings
* Vp8Settings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP8.
  * Bitrate
  * FramerateControl
  * FramerateConversionAlgorithm
  * FramerateDenominator
  * FramerateNumerator
  * GopSize
  * HrdBufferSize
  * MaxBitrate
  * ParControl
  * ParDenominator
  * ParNumerator
  * QualityTuningLevel
  * RateControlMode

### Vp9FramerateControl
* Vp9FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.

### Vp9FramerateConversionAlgorithm
* Vp9FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE, FRAMEFORMER): Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.

### Vp9ParControl
* Vp9ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.

### Vp9QualityTuningLevel
* Vp9QualityTuningLevel `string` (values: MULTI_PASS, MULTI_PASS_HQ): Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.

### Vp9RateControlMode
* Vp9RateControlMode `string` (values: VBR): With the VP9 codec, you can use only the variable bitrate (VBR) rate control mode.

### Vp9Settings
* Vp9Settings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP9.
  * Bitrate
  * FramerateControl
  * FramerateConversionAlgorithm
  * FramerateDenominator
  * FramerateNumerator
  * GopSize
  * HrdBufferSize
  * MaxBitrate
  * ParControl
  * ParDenominator
  * ParNumerator
  * QualityTuningLevel
  * RateControlMode

### WatermarkingStrength
* WatermarkingStrength `string` (values: LIGHTEST, LIGHTER, DEFAULT, STRONGER, STRONGEST): Optional. Ignore this setting unless Nagra support directs you to specify a value. When you don't specify a value here, the Nagra NexGuard library uses its default value.

### WavFormat
* WavFormat `string` (values: RIFF, RF64): The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64.

### WavSettings
* WavSettings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
  * BitDepth
  * Channels
  * Format
  * SampleRate

### __doubleMin0
* __doubleMin0 `number`

### __doubleMin0Max1
* __doubleMin0Max1 `number`

### __doubleMin0Max2147483647
* __doubleMin0Max2147483647 `number`

### __doubleMinNegative59Max0
* __doubleMinNegative59Max0 `number`

### __doubleMinNegative60Max3
* __doubleMinNegative60Max3 `number`

### __doubleMinNegative60MaxNegative1
* __doubleMinNegative60MaxNegative1 `number`

### __doubleMinNegative6Max3
* __doubleMinNegative6Max3 `number`

### __integer
* __integer `integer`

### __integerMin0Max0
* __integerMin0Max0 `integer`

### __integerMin0Max1
* __integerMin0Max1 `integer`

### __integerMin0Max10
* __integerMin0Max10 `integer`

### __integerMin0Max100
* __integerMin0Max100 `integer`

### __integerMin0Max1000
* __integerMin0Max1000 `integer`

### __integerMin0Max10000
* __integerMin0Max10000 `integer`

### __integerMin0Max1152000000
* __integerMin0Max1152000000 `integer`

### __integerMin0Max128
* __integerMin0Max128 `integer`

### __integerMin0Max1466400000
* __integerMin0Max1466400000 `integer`

### __integerMin0Max15
* __integerMin0Max15 `integer`

### __integerMin0Max16
* __integerMin0Max16 `integer`

### __integerMin0Max2147483647
* __integerMin0Max2147483647 `integer`

### __integerMin0Max255
* __integerMin0Max255 `integer`

### __integerMin0Max3
* __integerMin0Max3 `integer`

### __integerMin0Max30
* __integerMin0Max30 `integer`

### __integerMin0Max30000
* __integerMin0Max30000 `integer`

### __integerMin0Max3600
* __integerMin0Max3600 `integer`

### __integerMin0Max4
* __integerMin0Max4 `integer`

### __integerMin0Max4194303
* __integerMin0Max4194303 `integer`

### __integerMin0Max47185920
* __integerMin0Max47185920 `integer`

### __integerMin0Max500
* __integerMin0Max500 `integer`

### __integerMin0Max50000
* __integerMin0Max50000 `integer`

### __integerMin0Max65534
* __integerMin0Max65534 `integer`

### __integerMin0Max65535
* __integerMin0Max65535 `integer`

### __integerMin0Max7
* __integerMin0Max7 `integer`

### __integerMin0Max8
* __integerMin0Max8 `integer`

### __integerMin0Max9
* __integerMin0Max9 `integer`

### __integerMin0Max96
* __integerMin0Max96 `integer`

### __integerMin0Max99
* __integerMin0Max99 `integer`

### __integerMin100000Max100000000
* __integerMin100000Max100000000 `integer`

### __integerMin1000Max1152000000
* __integerMin1000Max1152000000 `integer`

### __integerMin1000Max1466400000
* __integerMin1000Max1466400000 `integer`

### __integerMin1000Max288000000
* __integerMin1000Max288000000 `integer`

### __integerMin1000Max30000
* __integerMin1000Max30000 `integer`

### __integerMin1000Max300000000
* __integerMin1000Max300000000 `integer`

### __integerMin1000Max480000000
* __integerMin1000Max480000000 `integer`

### __integerMin10Max48
* __integerMin10Max48 `integer`

### __integerMin16000Max320000
* __integerMin16000Max320000 `integer`

### __integerMin16000Max48000
* __integerMin16000Max48000 `integer`

### __integerMin16Max24
* __integerMin16Max24 `integer`

### __integerMin1Max1
* __integerMin1Max1 `integer`

### __integerMin1Max10
* __integerMin1Max10 `integer`

### __integerMin1Max100
* __integerMin1Max100 `integer`

### __integerMin1Max10000000
* __integerMin1Max10000000 `integer`

### __integerMin1Max1001
* __integerMin1Max1001 `integer`

### __integerMin1Max17895697
* __integerMin1Max17895697 `integer`

### __integerMin1Max2
* __integerMin1Max2 `integer`

### __integerMin1Max20
* __integerMin1Max20 `integer`

### __integerMin1Max2147483640
* __integerMin1Max2147483640 `integer`

### __integerMin1Max2147483647
* __integerMin1Max2147483647 `integer`

### __integerMin1Max31
* __integerMin1Max31 `integer`

### __integerMin1Max32
* __integerMin1Max32 `integer`

### __integerMin1Max4
* __integerMin1Max4 `integer`

### __integerMin1Max6
* __integerMin1Max6 `integer`

### __integerMin1Max60000
* __integerMin1Max60000 `integer`

### __integerMin1Max64
* __integerMin1Max64 `integer`

### __integerMin22050Max48000
* __integerMin22050Max48000 `integer`

### __integerMin24Max60000
* __integerMin24Max60000 `integer`

### __integerMin25Max10000
* __integerMin25Max10000 `integer`

### __integerMin25Max2000
* __integerMin25Max2000 `integer`

### __integerMin2Max2147483647
* __integerMin2Max2147483647 `integer`

### __integerMin32000Max192000
* __integerMin32000Max192000 `integer`

### __integerMin32000Max384000
* __integerMin32000Max384000 `integer`

### __integerMin32000Max48000
* __integerMin32000Max48000 `integer`

### __integerMin32Max8182
* __integerMin32Max8182 `integer`

### __integerMin32Max8192
* __integerMin32Max8192 `integer`

### __integerMin384000Max768000
* __integerMin384000Max768000 `integer`

### __integerMin3Max15
* __integerMin3Max15 `integer`

### __integerMin48000Max48000
* __integerMin48000Max48000 `integer`

### __integerMin6000Max1024000
* __integerMin6000Max1024000 `integer`

### __integerMin64000Max640000
* __integerMin64000Max640000 `integer`

### __integerMin7Max15
* __integerMin7Max15 `integer`

### __integerMin8000Max192000
* __integerMin8000Max192000 `integer`

### __integerMin8000Max96000
* __integerMin8000Max96000 `integer`

### __integerMin96Max600
* __integerMin96Max600 `integer`

### __integerMinNegative1000Max1000
* __integerMinNegative1000Max1000 `integer`

### __integerMinNegative180Max180
* __integerMinNegative180Max180 `integer`

### __integerMinNegative1Max10
* __integerMinNegative1Max10 `integer`

### __integerMinNegative1Max3
* __integerMinNegative1Max3 `integer`

### __integerMinNegative2147483648Max2147483647
* __integerMinNegative2147483648Max2147483647 `integer`

### __integerMinNegative2Max3
* __integerMinNegative2Max3 `integer`

### __integerMinNegative50Max50
* __integerMinNegative50Max50 `integer`

### __integerMinNegative5Max5
* __integerMinNegative5Max5 `integer`

### __integerMinNegative60Max6
* __integerMinNegative60Max6 `integer`

### __integerMinNegative70Max0
* __integerMinNegative70Max0 `integer`

### __listOfAudioDescription
* __listOfAudioDescription `array`
  * items [AudioDescription](#audiodescription)

### __listOfCaptionDescription
* __listOfCaptionDescription `array`
  * items [CaptionDescription](#captiondescription)

### __listOfCaptionDescriptionPreset
* __listOfCaptionDescriptionPreset `array`
  * items [CaptionDescriptionPreset](#captiondescriptionpreset)

### __listOfCmafAdditionalManifest
* __listOfCmafAdditionalManifest `array`
  * items [CmafAdditionalManifest](#cmafadditionalmanifest)

### __listOfDashAdditionalManifest
* __listOfDashAdditionalManifest `array`
  * items [DashAdditionalManifest](#dashadditionalmanifest)

### __listOfEndpoint
* __listOfEndpoint `array`
  * items [Endpoint](#endpoint)

### __listOfHlsAdMarkers
* __listOfHlsAdMarkers `array`
  * items [HlsAdMarkers](#hlsadmarkers)

### __listOfHlsAdditionalManifest
* __listOfHlsAdditionalManifest `array`
  * items [HlsAdditionalManifest](#hlsadditionalmanifest)

### __listOfHlsCaptionLanguageMapping
* __listOfHlsCaptionLanguageMapping `array`
  * items [HlsCaptionLanguageMapping](#hlscaptionlanguagemapping)

### __listOfHopDestination
* __listOfHopDestination `array`
  * items [HopDestination](#hopdestination)

### __listOfId3Insertion
* __listOfId3Insertion `array`
  * items [Id3Insertion](#id3insertion)

### __listOfInput
* __listOfInput `array`
  * items [Input](#input)

### __listOfInputClipping
* __listOfInputClipping `array`
  * items [InputClipping](#inputclipping)

### __listOfInputTemplate
* __listOfInputTemplate `array`
  * items [InputTemplate](#inputtemplate)

### __listOfInsertableImage
* __listOfInsertableImage `array`
  * items [InsertableImage](#insertableimage)

### __listOfJob
* __listOfJob `array`
  * items [Job](#job)

### __listOfJobTemplate
* __listOfJobTemplate `array`
  * items [JobTemplate](#jobtemplate)

### __listOfMsSmoothAdditionalManifest
* __listOfMsSmoothAdditionalManifest `array`
  * items [MsSmoothAdditionalManifest](#mssmoothadditionalmanifest)

### __listOfOutput
* __listOfOutput `array`
  * items [Output](#output)

### __listOfOutputChannelMapping
* __listOfOutputChannelMapping `array`
  * items [OutputChannelMapping](#outputchannelmapping)

### __listOfOutputDetail
* __listOfOutputDetail `array`
  * items [OutputDetail](#outputdetail)

### __listOfOutputGroup
* __listOfOutputGroup `array`
  * items [OutputGroup](#outputgroup)

### __listOfOutputGroupDetail
* __listOfOutputGroupDetail `array`
  * items [OutputGroupDetail](#outputgroupdetail)

### __listOfPreset
* __listOfPreset `array`
  * items [Preset](#preset)

### __listOfQueue
* __listOfQueue `array`
  * items [Queue](#queue)

### __listOfQueueTransition
* __listOfQueueTransition `array`
  * items [QueueTransition](#queuetransition)

### __listOfTeletextPageType
* __listOfTeletextPageType `array`
  * items [TeletextPageType](#teletextpagetype)

### __listOf__integerMin1Max2147483647
* __listOf__integerMin1Max2147483647 `array`
  * items [__integerMin1Max2147483647](#__integermin1max2147483647)

### __listOf__integerMin32Max8182
* __listOf__integerMin32Max8182 `array`
  * items [__integerMin32Max8182](#__integermin32max8182)

### __listOf__integerMinNegative60Max6
* __listOf__integerMinNegative60Max6 `array`
  * items [__integerMinNegative60Max6](#__integerminnegative60max6)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __listOf__stringMin1
* __listOf__stringMin1 `array`
  * items [__stringMin1](#__stringmin1)

### __listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12
* __listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 `array`
  * items [__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringmin36max36pattern09afaf809afaf409afaf409afaf409afaf12)

### __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12
* __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 `array`
  * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)

### __listOf__stringPatternS3ASSETMAPXml
* __listOf__stringPatternS3ASSETMAPXml `array`
  * items [__stringPatternS3ASSETMAPXml](#__stringpatterns3assetmapxml)

### __mapOfAudioSelector
* __mapOfAudioSelector `object`

### __mapOfAudioSelectorGroup
* __mapOfAudioSelectorGroup `object`

### __mapOfCaptionSelector
* __mapOfCaptionSelector `object`

### __mapOf__string
* __mapOf__string `object`

### __string
* __string `string`

### __stringMin0
* __stringMin0 `string`

### __stringMin1
* __stringMin1 `string`

### __stringMin11Max11Pattern01D20305D205D
* __stringMin11Max11Pattern01D20305D205D `string`

### __stringMin14Max1285PatternS3Mov09PngHttpsMov09Png
* __stringMin14Max1285PatternS3Mov09PngHttpsMov09Png `string`

### __stringMin14PatternS3BmpBMPPngPNGHttpsBmpBMPPngPNG
* __stringMin14PatternS3BmpBMPPngPNGHttpsBmpBMPPngPNG `string`

### __stringMin14PatternS3BmpBMPPngPNGTgaTGAHttpsBmpBMPPngPNGTgaTGA
* __stringMin14PatternS3BmpBMPPngPNGTgaTGAHttpsBmpBMPPngPNGTgaTGA `string`

### __stringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMIHttpsSccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMI
* __stringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMIHttpsSccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMI `string`

### __stringMin16Max24PatternAZaZ0922AZaZ0916
* __stringMin16Max24PatternAZaZ0922AZaZ0916 `string`

### __stringMin1Max100000
* __stringMin1Max100000 `string`

### __stringMin1Max20
* __stringMin1Max20 `string`

### __stringMin1Max256
* __stringMin1Max256 `string`

### __stringMin1Max50
* __stringMin1Max50 `string`

### __stringMin24Max512PatternAZaZ0902
* __stringMin24Max512PatternAZaZ0902 `string`

### __stringMin32Max32Pattern09aFAF32
* __stringMin32Max32Pattern09aFAF32 `string`

### __stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12
* __stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 `string`

### __stringMin3Max3Pattern1809aFAF09aEAE
* __stringMin3Max3Pattern1809aFAF09aEAE `string`

### __stringMin3Max3PatternAZaZ3
* __stringMin3Max3PatternAZaZ3 `string`

### __stringMin9Max19PatternAZ26EastWestCentralNorthSouthEastWest1912
* __stringMin9Max19PatternAZ26EastWestCentralNorthSouthEastWest1912 `string`

### __stringPattern
* __stringPattern `string`

### __stringPattern010920405090509092
* __stringPattern010920405090509092 `string`

### __stringPattern01D20305D205D
* __stringPattern01D20305D205D `string`

### __stringPattern0940191020191209301
* __stringPattern0940191020191209301 `string`

### __stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12
* __stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 `string`

### __stringPattern0xAFaF0908190908
* __stringPattern0xAFaF0908190908 `string`

### __stringPatternAZaZ0902
* __stringPatternAZaZ0902 `string`

### __stringPatternAZaZ0932
* __stringPatternAZaZ0932 `string`

### __stringPatternAZaZ23AZaZ
* __stringPatternAZaZ23AZaZ `string`

### __stringPatternArnAwsUsGovAcm
* __stringPatternArnAwsUsGovAcm `string`

### __stringPatternArnAwsUsGovCnKmsAZ26EastWestCentralNorthSouthEastWest1912D12KeyAFAF098AFAF094AFAF094AFAF094AFAF0912
* __stringPatternArnAwsUsGovCnKmsAZ26EastWestCentralNorthSouthEastWest1912D12KeyAFAF098AFAF094AFAF094AFAF094AFAF0912 `string`

### __stringPatternDD
* __stringPatternDD `string`

### __stringPatternHttps
* __stringPatternHttps `string`

### __stringPatternIdentityAZaZ26AZaZ09163
* __stringPatternIdentityAZaZ26AZaZ09163 `string`

### __stringPatternS3
* __stringPatternS3 `string`

### __stringPatternS3ASSETMAPXml
* __stringPatternS3ASSETMAPXml `string`

### __stringPatternS3MM2PPMM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMKKAAMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8WWEEBBMMLLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMXXMMLLOOGGGGaAHttpsMM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMKKAAMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8WWEEBBMMLLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMXXMMLLOOGGGGaA
* __stringPatternS3MM2PPMM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMKKAAMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8WWEEBBMMLLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMXXMMLLOOGGGGaAHttpsMM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMKKAAMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8WWEEBBMMLLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMXXMMLLOOGGGGaA `string`

### __stringPatternS3MM2PPWWEEBBMMMM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMKKAAMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEEHttpsMM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMKKAAMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE
* __stringPatternS3MM2PPWWEEBBMMMM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMKKAAMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEEHttpsMM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMKKAAMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE `string`

### __stringPatternSNManifestConfirmConditionNotificationNS
* __stringPatternSNManifestConfirmConditionNotificationNS `string`

### __stringPatternSNSignalProcessingNotificationNS
* __stringPatternSNSignalProcessingNotificationNS `string`

### __stringPatternW
* __stringPatternW `string`

### __stringPatternWS
* __stringPatternWS `string`

### __timestampUnix
* __timestampUnix `string`


