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

amazonaws_mediaconvert.DescribeEndpoints({}).then(data => {
  console.log(data);
});
```

## Description

AWS Elemental MediaConvert

## Actions

### DescribeEndpoints



```js
amazonaws_mediaconvert.DescribeEndpoints({}, context)
```

#### Input
* input `object`
  * MaxResults [__integer](#__integer)
  * NextToken [__string](#__string)

#### Output
* output [DescribeEndpointsResponse](#describeendpointsresponse)

### ListJobTemplates



```js
amazonaws_mediaconvert.ListJobTemplates({}, context)
```

#### Input
* input `object`

#### Output
* output [ListJobTemplatesResponse](#listjobtemplatesresponse)

### UpdateJobTemplate



```js
amazonaws_mediaconvert.UpdateJobTemplate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * Category [__string](#__string)
  * Description [__string](#__string)
  * Queue [__string](#__string)
  * Settings [JobTemplateSettings](#jobtemplatesettings)

#### Output
* output [UpdateJobTemplateResponse](#updatejobtemplateresponse)

### ListJobs



```js
amazonaws_mediaconvert.ListJobs({}, context)
```

#### Input
* input `object`

#### Output
* output [ListJobsResponse](#listjobsresponse)

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

#### Output
* output [ListPresetsResponse](#listpresetsresponse)

### UpdatePreset



```js
amazonaws_mediaconvert.UpdatePreset({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * Category [__string](#__string)
  * Description [__string](#__string)
  * Settings [PresetSettings](#presetsettings)

#### Output
* output [UpdatePresetResponse](#updatepresetresponse)

### ListQueues



```js
amazonaws_mediaconvert.ListQueues({}, context)
```

#### Input
* input `object`

#### Output
* output [ListQueuesResponse](#listqueuesresponse)

### UpdateQueue



```js
amazonaws_mediaconvert.UpdateQueue({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * Description [__string](#__string)
  * Status [QueueStatus](#queuestatus)

#### Output
* output [UpdateQueueResponse](#updatequeueresponse)



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
* AacSettings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC.
  * AudioDescriptionBroadcasterMix [AacAudioDescriptionBroadcasterMix](#aacaudiodescriptionbroadcastermix)
  * Bitrate [__integer](#__integer)
  * CodecProfile [AacCodecProfile](#aaccodecprofile)
  * CodingMode [AacCodingMode](#aaccodingmode)
  * RateControlMode [AacRateControlMode](#aacratecontrolmode)
  * RawFormat [AacRawFormat](#aacrawformat)
  * SampleRate [__integer](#__integer)
  * Specification [AacSpecification](#aacspecification)
  * VbrQuality [AacVbrQuality](#aacvbrquality)

### AacSpecification
* AacSpecification `string` (values: MPEG2, MPEG4): Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.

### AacVbrQuality
* AacVbrQuality `string` (values: LOW, MEDIUM_LOW, MEDIUM_HIGH, HIGH): VBR Quality Level - Only used if rate_control_mode is VBR.

### Ac3BitstreamMode
* Ac3BitstreamMode `string` (values: COMPLETE_MAIN, COMMENTARY, DIALOGUE, EMERGENCY, HEARING_IMPAIRED, MUSIC_AND_EFFECTS, VISUALLY_IMPAIRED, VOICE_OVER): Specifies the "Bitstream Mode" (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values.

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
  * Bitrate [__integer](#__integer)
  * BitstreamMode [Ac3BitstreamMode](#ac3bitstreammode)
  * CodingMode [Ac3CodingMode](#ac3codingmode)
  * Dialnorm [__integer](#__integer)
  * DynamicRangeCompressionProfile [Ac3DynamicRangeCompressionProfile](#ac3dynamicrangecompressionprofile)
  * LfeFilter [Ac3LfeFilter](#ac3lfefilter)
  * MetadataControl [Ac3MetadataControl](#ac3metadatacontrol)
  * SampleRate [__integer](#__integer)

### AfdSignaling
* AfdSignaling `string` (values: NONE, AUTO, FIXED): This setting only applies to H.264 and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to whether there are AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.

### AiffSettings
* AiffSettings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
  * BitDepth [__integer](#__integer)
  * Channels [__integer](#__integer)
  * SampleRate [__integer](#__integer)

### AncillarySourceSettings
* AncillarySourceSettings `object`: Settings for ancillary captions source.
  * SourceAncillaryChannelNumber [__integer](#__integer)

### AntiAlias
* AntiAlias `string` (values: DISABLED, ENABLED): Enable Anti-alias (AntiAlias) to enhance sharp edges in video output when your input resolution is much larger than your output resolution. Default is enabled.

### AudioCodec
* AudioCodec `string` (values: AAC, MP2, WAV, AIFF, AC3, EAC3, PASSTHROUGH): Type of Audio codec.

### AudioCodecSettings
* AudioCodecSettings `object`: Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value you choose for Audio codec (Codec). For each codec enum you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings
  * AacSettings [AacSettings](#aacsettings)
  * Ac3Settings [Ac3Settings](#ac3settings)
  * AiffSettings [AiffSettings](#aiffsettings)
  * Codec [AudioCodec](#audiocodec)
  * Eac3Settings [Eac3Settings](#eac3settings)
  * Mp2Settings [Mp2Settings](#mp2settings)
  * WavSettings [WavSettings](#wavsettings)

### AudioDefaultSelection
* AudioDefaultSelection `string` (values: DEFAULT, NOT_DEFAULT): When an "Audio Description":#audio_description specifies an AudioSelector or AudioSelectorGroup  for which no matching source is found in the input, then the audio selector marked as DEFAULT will be used.  If none are marked as default, silence will be inserted for the duration of the input.

### AudioDescription
* AudioDescription `object`: Description of audio output
  * AudioNormalizationSettings [AudioNormalizationSettings](#audionormalizationsettings)
  * AudioSourceName [__string](#__string)
  * AudioType [__integer](#__integer)
  * AudioTypeControl [AudioTypeControl](#audiotypecontrol)
  * CodecSettings [AudioCodecSettings](#audiocodecsettings)
  * LanguageCode [LanguageCode](#languagecode)
  * LanguageCodeControl [AudioLanguageCodeControl](#audiolanguagecodecontrol)
  * RemixSettings [RemixSettings](#remixsettings)
  * StreamName [__string](#__string)

### AudioLanguageCodeControl
* AudioLanguageCodeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Choosing FOLLOW_INPUT will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The language specified for languageCode' will be used when USE_CONFIGURED is selected or when FOLLOW_INPUT is selected but there is no ISO 639 language code specified by the input.

### AudioNormalizationAlgorithm
* AudioNormalizationAlgorithm `string` (values: ITU_BS_1770_1, ITU_BS_1770_2): Audio normalization algorithm to use. 1770-1 conforms to the CALM Act specification, 1770-2 conforms to the EBU R-128 specification.

### AudioNormalizationAlgorithmControl
* AudioNormalizationAlgorithmControl `string` (values: CORRECT_AUDIO, MEASURE_ONLY): When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.

### AudioNormalizationLoudnessLogging
* AudioNormalizationLoudnessLogging `string` (values: LOG, DONT_LOG): If set to LOG, log each output's audio track loudness to a CSV file.

### AudioNormalizationPeakCalculation
* AudioNormalizationPeakCalculation `string` (values: TRUE_PEAK, NONE): If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.

### AudioNormalizationSettings
* AudioNormalizationSettings `object`: Advanced audio normalization settings.
  * Algorithm [AudioNormalizationAlgorithm](#audionormalizationalgorithm)
  * AlgorithmControl [AudioNormalizationAlgorithmControl](#audionormalizationalgorithmcontrol)
  * CorrectionGateLevel [__integer](#__integer)
  * LoudnessLogging [AudioNormalizationLoudnessLogging](#audionormalizationloudnesslogging)
  * PeakCalculation [AudioNormalizationPeakCalculation](#audionormalizationpeakcalculation)
  * TargetLkfs [__double](#__double)

### AudioSelector
* AudioSelector `object`: Selector for Audio
  * DefaultSelection [AudioDefaultSelection](#audiodefaultselection)
  * ExternalAudioFileInput [__string](#__string)
  * LanguageCode [LanguageCode](#languagecode)
  * Offset [__integer](#__integer)
  * Pids [ListOf__integer](#listof__integer)
  * ProgramSelection [__integer](#__integer)
  * RemixSettings [RemixSettings](#remixsettings)
  * SelectorType [AudioSelectorType](#audioselectortype)
  * Tracks [ListOf__integer](#listof__integer)

### AudioSelectorGroup
* AudioSelectorGroup `object`: Group of Audio Selectors
  * AudioSelectorNames [ListOf__string](#listof__string)

### AudioSelectorType
* AudioSelectorType `string` (values: PID, TRACK, LANGUAGE_CODE): Specifies the type of the audio selector.

### AudioTypeControl
* AudioTypeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.

### AvailBlanking
* AvailBlanking `object`: Settings for Avail Blanking
  * AvailBlankingImage [__string](#__string)

### BadRequestException
* BadRequestException `object`: The service can't process your request because of a problem in the request. Please check your request form and syntax.
  * Message [__string](#__string)

### BurninDestinationSettings
* BurninDestinationSettings `object`: Burn-In Destination Settings.
  * Alignment [BurninSubtitleAlignment](#burninsubtitlealignment)
  * BackgroundColor [BurninSubtitleBackgroundColor](#burninsubtitlebackgroundcolor)
  * BackgroundOpacity [__integer](#__integer)
  * FontColor [BurninSubtitleFontColor](#burninsubtitlefontcolor)
  * FontOpacity [__integer](#__integer)
  * FontResolution [__integer](#__integer)
  * FontSize [__integer](#__integer)
  * OutlineColor [BurninSubtitleOutlineColor](#burninsubtitleoutlinecolor)
  * OutlineSize [__integer](#__integer)
  * ShadowColor [BurninSubtitleShadowColor](#burninsubtitleshadowcolor)
  * ShadowOpacity [__integer](#__integer)
  * ShadowXOffset [__integer](#__integer)
  * ShadowYOffset [__integer](#__integer)
  * TeletextSpacing [BurninSubtitleTeletextSpacing](#burninsubtitleteletextspacing)
  * XPosition [__integer](#__integer)
  * YPosition [__integer](#__integer)

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
* BurninSubtitleTeletextSpacing `string` (values: FIXED_GRID, PROPORTIONAL): Controls whether a fixed grid size or proportional font spacing will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.

### CancelJobRequest
* CancelJobRequest `object`

### CancelJobResponse
* CancelJobResponse `object`

### CaptionDescription
* CaptionDescription `object`: Description of Caption output
  * CaptionSelectorName [__string](#__string)
  * DestinationSettings [CaptionDestinationSettings](#captiondestinationsettings)
  * LanguageCode [LanguageCode](#languagecode)
  * LanguageDescription [__string](#__string)

### CaptionDescriptionPreset
* CaptionDescriptionPreset `object`: Caption Description for preset
  * DestinationSettings [CaptionDestinationSettings](#captiondestinationsettings)
  * LanguageCode [LanguageCode](#languagecode)
  * LanguageDescription [__string](#__string)

### CaptionDestinationSettings
* CaptionDestinationSettings `object`: Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
  * BurninDestinationSettings [BurninDestinationSettings](#burnindestinationsettings)
  * DestinationType [CaptionDestinationType](#captiondestinationtype)
  * DvbSubDestinationSettings [DvbSubDestinationSettings](#dvbsubdestinationsettings)
  * SccDestinationSettings [SccDestinationSettings](#sccdestinationsettings)
  * TeletextDestinationSettings [TeletextDestinationSettings](#teletextdestinationsettings)
  * TtmlDestinationSettings [TtmlDestinationSettings](#ttmldestinationsettings)

### CaptionDestinationType
* CaptionDestinationType `string` (values: BURN_IN, DVB_SUB, EMBEDDED, SCC, SRT, TELETEXT, TTML, WEBVTT)

### CaptionSelector
* CaptionSelector `object`: Caption inputs to be mapped to caption outputs.
  * LanguageCode [LanguageCode](#languagecode)
  * SourceSettings [CaptionSourceSettings](#captionsourcesettings)

### CaptionSourceSettings
* CaptionSourceSettings `object`: Source settings (SourceSettings) contains the group of settings for captions in the input.
  * AncillarySourceSettings [AncillarySourceSettings](#ancillarysourcesettings)
  * DvbSubSourceSettings [DvbSubSourceSettings](#dvbsubsourcesettings)
  * EmbeddedSourceSettings [EmbeddedSourceSettings](#embeddedsourcesettings)
  * FileSourceSettings [FileSourceSettings](#filesourcesettings)
  * SourceType [CaptionSourceType](#captionsourcetype)
  * TeletextSourceSettings [TeletextSourceSettings](#teletextsourcesettings)

### CaptionSourceType
* CaptionSourceType `string` (values: ANCILLARY, DVB_SUB, EMBEDDED, SCC, TTML, STL, SRT, TELETEXT, NULL_SOURCE): Use Source (SourceType) to identify the format of your input captions.  The service cannot auto-detect caption format.

### ChannelMapping
* ChannelMapping `object`: Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
  * OutputChannels [ListOfOutputChannelMapping](#listofoutputchannelmapping)

### ColorCorrector
* ColorCorrector `object`: Settings for color correction.
  * Brightness [__integer](#__integer)
  * ColorSpaceConversion [ColorSpaceConversion](#colorspaceconversion)
  * Contrast [__integer](#__integer)
  * Hdr10Metadata [Hdr10Metadata](#hdr10metadata)
  * Hue [__integer](#__integer)
  * Saturation [__integer](#__integer)

### ColorMetadata
* ColorMetadata `string` (values: IGNORE, INSERT): Enable Insert color metadata (ColorMetadata) to include color metadata in this output. This setting is enabled by default.

### ColorSpace
* ColorSpace `string` (values: FOLLOW, REC_601, REC_709, HDR10, HLG_2020): Specifies the colorspace of an input. This setting works in tandem with "Color Corrector":#color_corrector > color_space_conversion to determine if any conversion will be performed.

### ColorSpaceConversion
* ColorSpaceConversion `string` (values: NONE, FORCE_601, FORCE_709, FORCE_HDR10, FORCE_HLG_2020): Determines if colorspace conversion will be performed. If set to _None_, no conversion will be performed. If _Force 601_ or _Force 709_ are selected, conversion will be performed for inputs with differing colorspaces. An input's colorspace can be specified explicitly in the "Video Selector":#inputs-video_selector if necessary.

### ColorSpaceUsage
* ColorSpaceUsage `string` (values: FORCE, FALLBACK): There are two sources for color metadata, the input file and the job configuration. This enum controls which takes precedence. FORCE: System will use color metadata supplied by user, if any. If the user does not supply color metadata the system will use data from the source. FALLBACK: System will use color metadata from the source. If source has no color metadata, the system will use user-supplied color metadata values if available.

### ConflictException
* ConflictException `object`: The service could not complete your request because there is a conflict with the current state of the resource.
  * Message [__string](#__string)

### ContainerSettings
* ContainerSettings `object`: Container specific settings.
  * Container [ContainerType](#containertype)
  * F4vSettings [F4vSettings](#f4vsettings)
  * M2tsSettings [M2tsSettings](#m2tssettings)
  * M3u8Settings [M3u8Settings](#m3u8settings)
  * MovSettings [MovSettings](#movsettings)
  * Mp4Settings [Mp4Settings](#mp4settings)

### ContainerType
* ContainerType `string` (values: F4V, ISMV, M2TS, M3U8, MOV, MP4, MPD, MXF, RAW): Container for this output. Some containers require a container settings object. If not specified, the default object will be created.

### CreateJobRequest
* CreateJobRequest `object`
  * ClientRequestToken [__string](#__string)
  * JobTemplate [__string](#__string)
  * Queue [__string](#__string)
  * Role [__string](#__string)
  * Settings [JobSettings](#jobsettings)
  * UserMetadata [MapOf__string](#mapof__string)

### CreateJobResponse
* CreateJobResponse `object`
  * Job [Job](#job)

### CreateJobTemplateRequest
* CreateJobTemplateRequest `object`
  * Category [__string](#__string)
  * Description [__string](#__string)
  * Name [__string](#__string)
  * Queue [__string](#__string)
  * Settings [JobTemplateSettings](#jobtemplatesettings)

### CreateJobTemplateResponse
* CreateJobTemplateResponse `object`
  * JobTemplate [JobTemplate](#jobtemplate)

### CreatePresetRequest
* CreatePresetRequest `object`
  * Category [__string](#__string)
  * Description [__string](#__string)
  * Name [__string](#__string)
  * Settings [PresetSettings](#presetsettings)

### CreatePresetResponse
* CreatePresetResponse `object`
  * Preset [Preset](#preset)

### CreateQueueRequest
* CreateQueueRequest `object`
  * Description [__string](#__string)
  * Name [__string](#__string)

### CreateQueueResponse
* CreateQueueResponse `object`
  * Queue [Queue](#queue)

### DashIsoEncryptionSettings
* DashIsoEncryptionSettings `object`: Specifies DRM settings for DASH outputs.
  * SpekeKeyProvider [SpekeKeyProvider](#spekekeyprovider)

### DashIsoGroupSettings
* DashIsoGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
  * BaseUrl [__string](#__string)
  * Destination [__string](#__string)
  * Encryption [DashIsoEncryptionSettings](#dashisoencryptionsettings)
  * FragmentLength [__integer](#__integer)
  * HbbtvCompliance [DashIsoHbbtvCompliance](#dashisohbbtvcompliance)
  * MinBufferTime [__integer](#__integer)
  * SegmentControl [DashIsoSegmentControl](#dashisosegmentcontrol)
  * SegmentLength [__integer](#__integer)

### DashIsoHbbtvCompliance
* DashIsoHbbtvCompliance `string` (values: HBBTV_1_5, NONE): Supports HbbTV specification as indicated

### DashIsoSegmentControl
* DashIsoSegmentControl `string` (values: SINGLE_FILE, SEGMENTED_FILES): When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.

### DeinterlaceAlgorithm
* DeinterlaceAlgorithm `string` (values: INTERPOLATE, INTERPOLATE_TICKER, BLEND, BLEND_TICKER): Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.

### Deinterlacer
* Deinterlacer `object`: Settings for deinterlacer
  * Algorithm [DeinterlaceAlgorithm](#deinterlacealgorithm)
  * Control [DeinterlacerControl](#deinterlacercontrol)
  * Mode [DeinterlacerMode](#deinterlacermode)

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

### DescribeEndpointsRequest
* DescribeEndpointsRequest `object`: DescribeEndpointsRequest
  * MaxResults [__integer](#__integer)
  * NextToken [__string](#__string)

### DescribeEndpointsResponse
* DescribeEndpointsResponse `object`
  * Endpoints [ListOfEndpoint](#listofendpoint)
  * NextToken [__string](#__string)

### DropFrameTimecode
* DropFrameTimecode `string` (values: DISABLED, ENABLED): Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.

### DvbNitSettings
* DvbNitSettings `object`: Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
  * NetworkId [__integer](#__integer)
  * NetworkName [__string](#__string)
  * NitInterval [__integer](#__integer)

### DvbSdtSettings
* DvbSdtSettings `object`: Inserts DVB Service Description Table (NIT) at the specified table repetition interval.
  * OutputSdt [OutputSdt](#outputsdt)
  * SdtInterval [__integer](#__integer)
  * ServiceName [__string](#__string)
  * ServiceProviderName [__string](#__string)

### DvbSubDestinationSettings
* DvbSubDestinationSettings `object`: DVB-Sub Destination Settings
  * Alignment [DvbSubtitleAlignment](#dvbsubtitlealignment)
  * BackgroundColor [DvbSubtitleBackgroundColor](#dvbsubtitlebackgroundcolor)
  * BackgroundOpacity [__integer](#__integer)
  * FontColor [DvbSubtitleFontColor](#dvbsubtitlefontcolor)
  * FontOpacity [__integer](#__integer)
  * FontResolution [__integer](#__integer)
  * FontSize [__integer](#__integer)
  * OutlineColor [DvbSubtitleOutlineColor](#dvbsubtitleoutlinecolor)
  * OutlineSize [__integer](#__integer)
  * ShadowColor [DvbSubtitleShadowColor](#dvbsubtitleshadowcolor)
  * ShadowOpacity [__integer](#__integer)
  * ShadowXOffset [__integer](#__integer)
  * ShadowYOffset [__integer](#__integer)
  * TeletextSpacing [DvbSubtitleTeletextSpacing](#dvbsubtitleteletextspacing)
  * XPosition [__integer](#__integer)
  * YPosition [__integer](#__integer)

### DvbSubSourceSettings
* DvbSubSourceSettings `object`: DVB Sub Source Settings
  * Pid [__integer](#__integer)

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
* DvbSubtitleTeletextSpacing `string` (values: FIXED_GRID, PROPORTIONAL): Controls whether a fixed grid size or proportional font spacing will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.

### DvbTdtSettings
* DvbTdtSettings `object`: Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
  * TdtInterval [__integer](#__integer)

### Eac3AttenuationControl
* Eac3AttenuationControl `string` (values: ATTENUATE_3_DB, NONE): If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.

### Eac3BitstreamMode
* Eac3BitstreamMode `string` (values: COMPLETE_MAIN, COMMENTARY, EMERGENCY, HEARING_IMPAIRED, VISUALLY_IMPAIRED): Specifies the "Bitstream Mode" (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values.

### Eac3CodingMode
* Eac3CodingMode `string` (values: CODING_MODE_1_0, CODING_MODE_2_0, CODING_MODE_3_2): Dolby Digital Plus coding mode. Determines number of channels.

### Eac3DcFilter
* Eac3DcFilter `string` (values: ENABLED, DISABLED): Activates a DC highpass filter for all input channels.

### Eac3DynamicRangeCompressionLine
* Eac3DynamicRangeCompressionLine `string` (values: NONE, FILM_STANDARD, FILM_LIGHT, MUSIC_STANDARD, MUSIC_LIGHT, SPEECH): Enables Dynamic Range Compression that restricts the absolute peak level for a signal.

### Eac3DynamicRangeCompressionRf
* Eac3DynamicRangeCompressionRf `string` (values: NONE, FILM_STANDARD, FILM_LIGHT, MUSIC_STANDARD, MUSIC_LIGHT, SPEECH): Enables Heavy Dynamic Range Compression, ensures that the instantaneous signal peaks do not exceed specified levels.

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
  * AttenuationControl [Eac3AttenuationControl](#eac3attenuationcontrol)
  * Bitrate [__integer](#__integer)
  * BitstreamMode [Eac3BitstreamMode](#eac3bitstreammode)
  * CodingMode [Eac3CodingMode](#eac3codingmode)
  * DcFilter [Eac3DcFilter](#eac3dcfilter)
  * Dialnorm [__integer](#__integer)
  * DynamicRangeCompressionLine [Eac3DynamicRangeCompressionLine](#eac3dynamicrangecompressionline)
  * DynamicRangeCompressionRf [Eac3DynamicRangeCompressionRf](#eac3dynamicrangecompressionrf)
  * LfeControl [Eac3LfeControl](#eac3lfecontrol)
  * LfeFilter [Eac3LfeFilter](#eac3lfefilter)
  * LoRoCenterMixLevel [__double](#__double)
  * LoRoSurroundMixLevel [__double](#__double)
  * LtRtCenterMixLevel [__double](#__double)
  * LtRtSurroundMixLevel [__double](#__double)
  * MetadataControl [Eac3MetadataControl](#eac3metadatacontrol)
  * PassthroughControl [Eac3PassthroughControl](#eac3passthroughcontrol)
  * PhaseControl [Eac3PhaseControl](#eac3phasecontrol)
  * SampleRate [__integer](#__integer)
  * StereoDownmix [Eac3StereoDownmix](#eac3stereodownmix)
  * SurroundExMode [Eac3SurroundExMode](#eac3surroundexmode)
  * SurroundMode [Eac3SurroundMode](#eac3surroundmode)

### Eac3StereoDownmix
* Eac3StereoDownmix `string` (values: NOT_INDICATED, LO_RO, LT_RT, DPL2): Stereo downmix preference. Only used for 3/2 coding mode.

### Eac3SurroundExMode
* Eac3SurroundExMode `string` (values: NOT_INDICATED, ENABLED, DISABLED): When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.

### Eac3SurroundMode
* Eac3SurroundMode `string` (values: NOT_INDICATED, ENABLED, DISABLED): When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.

### EmbeddedConvert608To708
* EmbeddedConvert608To708 `string` (values: UPCONVERT, DISABLED): When set to UPCONVERT, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.

### EmbeddedSourceSettings
* EmbeddedSourceSettings `object`: Settings for embedded captions Source
  * Convert608To708 [EmbeddedConvert608To708](#embeddedconvert608to708)
  * Source608ChannelNumber [__integer](#__integer)
  * Source608TrackNumber [__integer](#__integer)

### Endpoint
* Endpoint `object`: Describes account specific API endpoint
  * Url [__string](#__string)

### ExceptionBody
* ExceptionBody `object`
  * Message [__string](#__string)

### F4vMoovPlacement
* F4vMoovPlacement `string` (values: PROGRESSIVE_DOWNLOAD, NORMAL): If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.

### F4vSettings
* F4vSettings `object`: Settings for F4v container
  * MoovPlacement [F4vMoovPlacement](#f4vmoovplacement)

### FileGroupSettings
* FileGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS.
  * Destination [__string](#__string)

### FileSourceConvert608To708
* FileSourceConvert608To708 `string` (values: UPCONVERT, DISABLED): If set to UPCONVERT, 608 caption data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.

### FileSourceSettings
* FileSourceSettings `object`: Settings for File-based Captions in Source
  * Convert608To708 [FileSourceConvert608To708](#filesourceconvert608to708)
  * SourceFile [__string](#__string)
  * TimeDelta [__integer](#__integer)

### ForbiddenException
* ForbiddenException `object`: You don't have permissions for this action with the credentials you sent.
  * Message [__string](#__string)

### FrameCaptureSettings
* FrameCaptureSettings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
  * FramerateDenominator [__integer](#__integer)
  * FramerateNumerator [__integer](#__integer)
  * MaxCaptures [__integer](#__integer)
  * Quality [__integer](#__integer)

### GetJobRequest
* GetJobRequest `object`

### GetJobResponse
* GetJobResponse `object`
  * Job [Job](#job)

### GetJobTemplateRequest
* GetJobTemplateRequest `object`

### GetJobTemplateResponse
* GetJobTemplateResponse `object`
  * JobTemplate [JobTemplate](#jobtemplate)

### GetPresetRequest
* GetPresetRequest `object`

### GetPresetResponse
* GetPresetResponse `object`
  * Preset [Preset](#preset)

### GetQueueRequest
* GetQueueRequest `object`

### GetQueueResponse
* GetQueueResponse `object`
  * Queue [Queue](#queue)

### H264AdaptiveQuantization
* H264AdaptiveQuantization `string` (values: OFF, LOW, MEDIUM, HIGH, HIGHER, MAX): Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.

### H264CodecLevel
* H264CodecLevel `string` (values: AUTO, LEVEL_1, LEVEL_1_1, LEVEL_1_2, LEVEL_1_3, LEVEL_2, LEVEL_2_1, LEVEL_2_2, LEVEL_3, LEVEL_3_1, LEVEL_3_2, LEVEL_4, LEVEL_4_1, LEVEL_4_2, LEVEL_5, LEVEL_5_1, LEVEL_5_2): H.264 Level.

### H264CodecProfile
* H264CodecProfile `string` (values: BASELINE, HIGH, HIGH_10BIT, HIGH_422, HIGH_422_10BIT, MAIN): H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License.

### H264EntropyEncoding
* H264EntropyEncoding `string` (values: CABAC, CAVLC): Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC.

### H264FieldEncoding
* H264FieldEncoding `string` (values: PAFF, FORCE_FIELD): Choosing FORCE_FIELD disables PAFF encoding for interlaced outputs.

### H264FlickerAdaptiveQuantization
* H264FlickerAdaptiveQuantization `string` (values: DISABLED, ENABLED): Adjust quantization within each frame to reduce flicker or 'pop' on I-frames.

### H264FramerateControl
* H264FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Using the API, set FramerateControl to INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Using the console, do this by choosing INITIALIZE_FROM_SOURCE for Framerate.

### H264FramerateConversionAlgorithm
* H264FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE): When set to INTERPOLATE, produces smoother motion during framerate conversion.

### H264GopBReference
* H264GopBReference `string` (values: DISABLED, ENABLED): If enable, use reference B frames for GOP structures that have B frames > 1.

### H264GopSizeUnits
* H264GopSizeUnits `string` (values: FRAMES, SECONDS): Indicates if the GOP Size in H264 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.

### H264InterlaceMode
* H264InterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOw_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same  field polarity as the source. Therefore, behavior depends on the input scan type. - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first". - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.

### H264ParControl
* H264ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.

### H264QualityTuningLevel
* H264QualityTuningLevel `string` (values: SINGLE_PASS, SINGLE_PASS_HQ, MULTI_PASS_HQ): Use Quality tuning level (H264QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.

### H264RateControlMode
* H264RateControlMode `string` (values: VBR, CBR): Rate control mode. CQ uses constant quantizer (qp), ABR (average bitrate) does not write HRD parameters.

### H264RepeatPps
* H264RepeatPps `string` (values: DISABLED, ENABLED): Places a PPS header on each encoded picture, even if repeated.

### H264SceneChangeDetect
* H264SceneChangeDetect `string` (values: DISABLED, ENABLED): Scene change detection (inserts I-frames on scene changes).

### H264Settings
* H264Settings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
  * AdaptiveQuantization [H264AdaptiveQuantization](#h264adaptivequantization)
  * Bitrate [__integer](#__integer)
  * CodecLevel [H264CodecLevel](#h264codeclevel)
  * CodecProfile [H264CodecProfile](#h264codecprofile)
  * EntropyEncoding [H264EntropyEncoding](#h264entropyencoding)
  * FieldEncoding [H264FieldEncoding](#h264fieldencoding)
  * FlickerAdaptiveQuantization [H264FlickerAdaptiveQuantization](#h264flickeradaptivequantization)
  * FramerateControl [H264FramerateControl](#h264frameratecontrol)
  * FramerateConversionAlgorithm [H264FramerateConversionAlgorithm](#h264framerateconversionalgorithm)
  * FramerateDenominator [__integer](#__integer)
  * FramerateNumerator [__integer](#__integer)
  * GopBReference [H264GopBReference](#h264gopbreference)
  * GopClosedCadence [__integer](#__integer)
  * GopSize [__double](#__double)
  * GopSizeUnits [H264GopSizeUnits](#h264gopsizeunits)
  * HrdBufferInitialFillPercentage [__integer](#__integer)
  * HrdBufferSize [__integer](#__integer)
  * InterlaceMode [H264InterlaceMode](#h264interlacemode)
  * MaxBitrate [__integer](#__integer)
  * MinIInterval [__integer](#__integer)
  * NumberBFramesBetweenReferenceFrames [__integer](#__integer)
  * NumberReferenceFrames [__integer](#__integer)
  * ParControl [H264ParControl](#h264parcontrol)
  * ParDenominator [__integer](#__integer)
  * ParNumerator [__integer](#__integer)
  * QualityTuningLevel [H264QualityTuningLevel](#h264qualitytuninglevel)
  * RateControlMode [H264RateControlMode](#h264ratecontrolmode)
  * RepeatPps [H264RepeatPps](#h264repeatpps)
  * SceneChangeDetect [H264SceneChangeDetect](#h264scenechangedetect)
  * Slices [__integer](#__integer)
  * SlowPal [H264SlowPal](#h264slowpal)
  * Softness [__integer](#__integer)
  * SpatialAdaptiveQuantization [H264SpatialAdaptiveQuantization](#h264spatialadaptivequantization)
  * Syntax [H264Syntax](#h264syntax)
  * Telecine [H264Telecine](#h264telecine)
  * TemporalAdaptiveQuantization [H264TemporalAdaptiveQuantization](#h264temporaladaptivequantization)
  * UnregisteredSeiTimecode [H264UnregisteredSeiTimecode](#h264unregisteredseitimecode)

### H264SlowPal
* H264SlowPal `string` (values: DISABLED, ENABLED): Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.

### H264SpatialAdaptiveQuantization
* H264SpatialAdaptiveQuantization `string` (values: DISABLED, ENABLED): Adjust quantization within each frame based on spatial variation of content complexity.

### H264Syntax
* H264Syntax `string` (values: DEFAULT, RP2027): Produces a bitstream compliant with SMPTE RP-2027.

### H264Telecine
* H264Telecine `string` (values: NONE, SOFT, HARD): This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.

### H264TemporalAdaptiveQuantization
* H264TemporalAdaptiveQuantization `string` (values: DISABLED, ENABLED): Adjust quantization within each frame based on temporal variation of content complexity.

### H264UnregisteredSeiTimecode
* H264UnregisteredSeiTimecode `string` (values: DISABLED, ENABLED): Inserts timecode for each frame as 4 bytes of an unregistered SEI message.

### H265AdaptiveQuantization
* H265AdaptiveQuantization `string` (values: OFF, LOW, MEDIUM, HIGH, HIGHER, MAX): Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.

### H265AlternateTransferFunctionSei
* H265AlternateTransferFunctionSei `string` (values: DISABLED, ENABLED): Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF).

### H265CodecLevel
* H265CodecLevel `string` (values: AUTO, LEVEL_1, LEVEL_2, LEVEL_2_1, LEVEL_3, LEVEL_3_1, LEVEL_4, LEVEL_4_1, LEVEL_5, LEVEL_5_1, LEVEL_5_2, LEVEL_6, LEVEL_6_1, LEVEL_6_2): H.265 Level.

### H265CodecProfile
* H265CodecProfile `string` (values: MAIN_MAIN, MAIN_HIGH, MAIN10_MAIN, MAIN10_HIGH, MAIN_422_8BIT_MAIN, MAIN_422_8BIT_HIGH, MAIN_422_10BIT_MAIN, MAIN_422_10BIT_HIGH): Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License.

### H265FlickerAdaptiveQuantization
* H265FlickerAdaptiveQuantization `string` (values: DISABLED, ENABLED): Adjust quantization within each frame to reduce flicker or 'pop' on I-frames.

### H265FramerateControl
* H265FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Using the API, set FramerateControl to INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Using the console, do this by choosing INITIALIZE_FROM_SOURCE for Framerate.

### H265FramerateConversionAlgorithm
* H265FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE): When set to INTERPOLATE, produces smoother motion during framerate conversion.

### H265GopBReference
* H265GopBReference `string` (values: DISABLED, ENABLED): If enable, use reference B frames for GOP structures that have B frames > 1.

### H265GopSizeUnits
* H265GopSizeUnits `string` (values: FRAMES, SECONDS): Indicates if the GOP Size in H265 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.

### H265InterlaceMode
* H265InterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOw_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same  field polarity as the source. Therefore, behavior depends on the input scan type. - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first". - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.

### H265ParControl
* H265ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.

### H265QualityTuningLevel
* H265QualityTuningLevel `string` (values: SINGLE_PASS, SINGLE_PASS_HQ, MULTI_PASS_HQ): Use Quality tuning level (H265QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.

### H265RateControlMode
* H265RateControlMode `string` (values: VBR, CBR): Rate control mode. CQ uses constant quantizer (qp), ABR (average bitrate) does not write HRD parameters.

### H265SampleAdaptiveOffsetFilterMode
* H265SampleAdaptiveOffsetFilterMode `string` (values: DEFAULT, ADAPTIVE, OFF): Specify Sample Adaptive Offset (SAO) filter strength.  Adaptive mode dynamically selects best strength based on content

### H265SceneChangeDetect
* H265SceneChangeDetect `string` (values: DISABLED, ENABLED): Scene change detection (inserts I-frames on scene changes).

### H265Settings
* H265Settings `object`: Settings for H265 codec
  * AdaptiveQuantization [H265AdaptiveQuantization](#h265adaptivequantization)
  * AlternateTransferFunctionSei [H265AlternateTransferFunctionSei](#h265alternatetransferfunctionsei)
  * Bitrate [__integer](#__integer)
  * CodecLevel [H265CodecLevel](#h265codeclevel)
  * CodecProfile [H265CodecProfile](#h265codecprofile)
  * FlickerAdaptiveQuantization [H265FlickerAdaptiveQuantization](#h265flickeradaptivequantization)
  * FramerateControl [H265FramerateControl](#h265frameratecontrol)
  * FramerateConversionAlgorithm [H265FramerateConversionAlgorithm](#h265framerateconversionalgorithm)
  * FramerateDenominator [__integer](#__integer)
  * FramerateNumerator [__integer](#__integer)
  * GopBReference [H265GopBReference](#h265gopbreference)
  * GopClosedCadence [__integer](#__integer)
  * GopSize [__double](#__double)
  * GopSizeUnits [H265GopSizeUnits](#h265gopsizeunits)
  * HrdBufferInitialFillPercentage [__integer](#__integer)
  * HrdBufferSize [__integer](#__integer)
  * InterlaceMode [H265InterlaceMode](#h265interlacemode)
  * MaxBitrate [__integer](#__integer)
  * MinIInterval [__integer](#__integer)
  * NumberBFramesBetweenReferenceFrames [__integer](#__integer)
  * NumberReferenceFrames [__integer](#__integer)
  * ParControl [H265ParControl](#h265parcontrol)
  * ParDenominator [__integer](#__integer)
  * ParNumerator [__integer](#__integer)
  * QualityTuningLevel [H265QualityTuningLevel](#h265qualitytuninglevel)
  * RateControlMode [H265RateControlMode](#h265ratecontrolmode)
  * SampleAdaptiveOffsetFilterMode [H265SampleAdaptiveOffsetFilterMode](#h265sampleadaptiveoffsetfiltermode)
  * SceneChangeDetect [H265SceneChangeDetect](#h265scenechangedetect)
  * Slices [__integer](#__integer)
  * SlowPal [H265SlowPal](#h265slowpal)
  * SpatialAdaptiveQuantization [H265SpatialAdaptiveQuantization](#h265spatialadaptivequantization)
  * Telecine [H265Telecine](#h265telecine)
  * TemporalAdaptiveQuantization [H265TemporalAdaptiveQuantization](#h265temporaladaptivequantization)
  * TemporalIds [H265TemporalIds](#h265temporalids)
  * Tiles [H265Tiles](#h265tiles)
  * UnregisteredSeiTimecode [H265UnregisteredSeiTimecode](#h265unregisteredseitimecode)

### H265SlowPal
* H265SlowPal `string` (values: DISABLED, ENABLED): Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.

### H265SpatialAdaptiveQuantization
* H265SpatialAdaptiveQuantization `string` (values: DISABLED, ENABLED): Adjust quantization within each frame based on spatial variation of content complexity.

### H265Telecine
* H265Telecine `string` (values: NONE, SOFT, HARD): This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.

### H265TemporalAdaptiveQuantization
* H265TemporalAdaptiveQuantization `string` (values: DISABLED, ENABLED): Adjust quantization within each frame based on temporal variation of content complexity.

### H265TemporalIds
* H265TemporalIds `string` (values: DISABLED, ENABLED): Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output.

### H265Tiles
* H265Tiles `string` (values: DISABLED, ENABLED): Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures.

### H265UnregisteredSeiTimecode
* H265UnregisteredSeiTimecode `string` (values: DISABLED, ENABLED): Inserts timecode for each frame as 4 bytes of an unregistered SEI message.

### Hdr10Metadata
* Hdr10Metadata `object`: Use the HDR master display (Hdr10Metadata) settings to provide values for HDR color. These values vary depending on the input video and must be provided by a color grader. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate.
  * BluePrimaryX [__integer](#__integer)
  * BluePrimaryY [__integer](#__integer)
  * GreenPrimaryX [__integer](#__integer)
  * GreenPrimaryY [__integer](#__integer)
  * MaxContentLightLevel [__integer](#__integer)
  * MaxFrameAverageLightLevel [__integer](#__integer)
  * MaxLuminance [__integer](#__integer)
  * MinLuminance [__integer](#__integer)
  * RedPrimaryX [__integer](#__integer)
  * RedPrimaryY [__integer](#__integer)
  * WhitePointX [__integer](#__integer)
  * WhitePointY [__integer](#__integer)

### HlsAdMarkers
* HlsAdMarkers `string` (values: ELEMENTAL, ELEMENTAL_SCTE35)

### HlsAudioTrackType
* HlsAudioTrackType `string` (values: ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT, ALTERNATE_AUDIO_AUTO_SELECT, ALTERNATE_AUDIO_NOT_AUTO_SELECT, AUDIO_ONLY_VARIANT_STREAM): Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO

### HlsCaptionLanguageMapping
* HlsCaptionLanguageMapping `object`: Caption Language Mapping
  * CaptionChannel [__integer](#__integer)
  * LanguageCode [LanguageCode](#languagecode)
  * LanguageDescription [__string](#__string)

### HlsCaptionLanguageSetting
* HlsCaptionLanguageSetting `string` (values: INSERT, OMIT, NONE): Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.

### HlsClientCache
* HlsClientCache `string` (values: DISABLED, ENABLED): When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay.

### HlsCodecSpecification
* HlsCodecSpecification `string` (values: RFC_6381, RFC_4281): Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.

### HlsDirectoryStructure
* HlsDirectoryStructure `string` (values: SINGLE_DIRECTORY, SUBDIRECTORY_PER_STREAM): Indicates whether segments should be placed in subdirectories.

### HlsEncryptionSettings
* HlsEncryptionSettings `object`: Settings for HLS encryption
  * ConstantInitializationVector [__string](#__string)
  * EncryptionMethod [HlsEncryptionType](#hlsencryptiontype)
  * InitializationVectorInManifest [HlsInitializationVectorInManifest](#hlsinitializationvectorinmanifest)
  * SpekeKeyProvider [SpekeKeyProvider](#spekekeyprovider)
  * StaticKeyProvider [StaticKeyProvider](#statickeyprovider)
  * Type [HlsKeyProviderType](#hlskeyprovidertype)

### HlsEncryptionType
* HlsEncryptionType `string` (values: AES128, SAMPLE_AES): Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.

### HlsGroupSettings
* HlsGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
  * AdMarkers [ListOfHlsAdMarkers](#listofhlsadmarkers)
  * BaseUrl [__string](#__string)
  * CaptionLanguageMappings [ListOfHlsCaptionLanguageMapping](#listofhlscaptionlanguagemapping)
  * CaptionLanguageSetting [HlsCaptionLanguageSetting](#hlscaptionlanguagesetting)
  * ClientCache [HlsClientCache](#hlsclientcache)
  * CodecSpecification [HlsCodecSpecification](#hlscodecspecification)
  * Destination [__string](#__string)
  * DirectoryStructure [HlsDirectoryStructure](#hlsdirectorystructure)
  * Encryption [HlsEncryptionSettings](#hlsencryptionsettings)
  * ManifestCompression [HlsManifestCompression](#hlsmanifestcompression)
  * ManifestDurationFormat [HlsManifestDurationFormat](#hlsmanifestdurationformat)
  * MinSegmentLength [__integer](#__integer)
  * OutputSelection [HlsOutputSelection](#hlsoutputselection)
  * ProgramDateTime [HlsProgramDateTime](#hlsprogramdatetime)
  * ProgramDateTimePeriod [__integer](#__integer)
  * SegmentControl [HlsSegmentControl](#hlssegmentcontrol)
  * SegmentLength [__integer](#__integer)
  * SegmentsPerSubdirectory [__integer](#__integer)
  * StreamInfResolution [HlsStreamInfResolution](#hlsstreaminfresolution)
  * TimedMetadataId3Frame [HlsTimedMetadataId3Frame](#hlstimedmetadataid3frame)
  * TimedMetadataId3Period [__integer](#__integer)
  * TimestampDeltaMilliseconds [__integer](#__integer)

### HlsIFrameOnlyManifest
* HlsIFrameOnlyManifest `string` (values: INCLUDE, EXCLUDE): When set to INCLUDE, writes I-Frame Only Manifest in addition to the HLS manifest

### HlsInitializationVectorInManifest
* HlsInitializationVectorInManifest `string` (values: INCLUDE, EXCLUDE): The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.

### HlsKeyProviderType
* HlsKeyProviderType `string` (values: SPEKE, STATIC_KEY): Indicates which type of key provider is used for encryption.

### HlsManifestCompression
* HlsManifestCompression `string` (values: GZIP, NONE): When set to GZIP, compresses HLS playlist.

### HlsManifestDurationFormat
* HlsManifestDurationFormat `string` (values: FLOATING_POINT, INTEGER): Indicates whether the output manifest should use floating point values for segment duration.

### HlsOutputSelection
* HlsOutputSelection `string` (values: MANIFESTS_AND_SEGMENTS, SEGMENTS_ONLY): Indicates whether the .m3u8 manifest file should be generated for this HLS output group.

### HlsProgramDateTime
* HlsProgramDateTime `string` (values: INCLUDE, EXCLUDE): Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.

### HlsSegmentControl
* HlsSegmentControl `string` (values: SINGLE_FILE, SEGMENTED_FILES): When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.

### HlsSettings
* HlsSettings `object`: Settings for HLS output groups
  * AudioGroupId [__string](#__string)
  * AudioRenditionSets [__string](#__string)
  * AudioTrackType [HlsAudioTrackType](#hlsaudiotracktype)
  * IFrameOnlyManifest [HlsIFrameOnlyManifest](#hlsiframeonlymanifest)
  * SegmentModifier [__string](#__string)

### HlsStreamInfResolution
* HlsStreamInfResolution `string` (values: INCLUDE, EXCLUDE): Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.

### HlsTimedMetadataId3Frame
* HlsTimedMetadataId3Frame `string` (values: NONE, PRIV, TDRL): Indicates ID3 frame that has the timecode.

### Id3Insertion
* Id3Insertion `object`: To insert ID3 tags in your output, specify two values. Use ID3 tag (Id3) to specify the base 64 encoded string and use Timecode (TimeCode) to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create mulitple instances of ID3 insertion (Id3Insertion).
  * Id3 [__string](#__string)
  * Timecode [__string](#__string)

### ImageInserter
* ImageInserter `object`: Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.
  * InsertableImages [ListOfInsertableImage](#listofinsertableimage)

### Input
* Input `object`: Specifies media input
  * AudioSelectorGroups [MapOfAudioSelectorGroup](#mapofaudioselectorgroup)
  * AudioSelectors [MapOfAudioSelector](#mapofaudioselector)
  * CaptionSelectors [MapOfCaptionSelector](#mapofcaptionselector)
  * DeblockFilter [InputDeblockFilter](#inputdeblockfilter)
  * DenoiseFilter [InputDenoiseFilter](#inputdenoisefilter)
  * FileInput [__string](#__string)
  * FilterEnable [InputFilterEnable](#inputfilterenable)
  * FilterStrength [__integer](#__integer)
  * InputClippings [ListOfInputClipping](#listofinputclipping)
  * ProgramNumber [__integer](#__integer)
  * PsiControl [InputPsiControl](#inputpsicontrol)
  * TimecodeSource [InputTimecodeSource](#inputtimecodesource)
  * VideoSelector [VideoSelector](#videoselector)

### InputClipping
* InputClipping `object`: Include one instance of (InputClipping) for each input clip.
  * EndTimecode [__string](#__string)
  * StartTimecode [__string](#__string)

### InputDeblockFilter
* InputDeblockFilter `string` (values: ENABLED, DISABLED): Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manaully controllable for MPEG2 and uncompressed video inputs.

### InputDenoiseFilter
* InputDenoiseFilter `string` (values: ENABLED, DISABLED): Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.

### InputFilterEnable
* InputFilterEnable `string` (values: AUTO, DISABLE, FORCE): Use Filter enable (InputFilterEnable) to specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The in put is filtered regardless of input type.

### InputPsiControl
* InputPsiControl `string` (values: IGNORE_PSI, USE_PSI): Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.

### InputTemplate
* InputTemplate `object`: Specified video input in a template.
  * AudioSelectorGroups [MapOfAudioSelectorGroup](#mapofaudioselectorgroup)
  * AudioSelectors [MapOfAudioSelector](#mapofaudioselector)
  * CaptionSelectors [MapOfCaptionSelector](#mapofcaptionselector)
  * DeblockFilter [InputDeblockFilter](#inputdeblockfilter)
  * DenoiseFilter [InputDenoiseFilter](#inputdenoisefilter)
  * FilterEnable [InputFilterEnable](#inputfilterenable)
  * FilterStrength [__integer](#__integer)
  * InputClippings [ListOfInputClipping](#listofinputclipping)
  * ProgramNumber [__integer](#__integer)
  * PsiControl [InputPsiControl](#inputpsicontrol)
  * TimecodeSource [InputTimecodeSource](#inputtimecodesource)
  * VideoSelector [VideoSelector](#videoselector)

### InputTimecodeSource
* InputTimecodeSource `string` (values: EMBEDDED, ZEROBASED, SPECIFIEDSTART): Use Timecode source (InputTimecodeSource) to specify how timecode information from your input is adjusted and encoded in all outputs for the job. Default is embedded. Set to Embedded (EMBEDDED) to use the timecode that is in the input video. If no embedded timecode is in the source, will set the timecode for the first frame to 00:00:00:00. Set to Start at 0 (ZEROBASED) to set the timecode of the initial frame to 00:00:00:00. Set to Specified start (SPECIFIEDSTART) to provide the initial timecode yourself the setting (Start).

### InsertableImage
* InsertableImage `object`: Settings for Insertable Image
  * Duration [__integer](#__integer)
  * FadeIn [__integer](#__integer)
  * FadeOut [__integer](#__integer)
  * Height [__integer](#__integer)
  * ImageInserterInput [__string](#__string)
  * ImageX [__integer](#__integer)
  * ImageY [__integer](#__integer)
  * Layer [__integer](#__integer)
  * Opacity [__integer](#__integer)
  * StartTime [__string](#__string)
  * Width [__integer](#__integer)

### InternalServerErrorException
* InternalServerErrorException `object`: The service encountered an unexpected condition and cannot fulfill your request.
  * Message [__string](#__string)

### Job
* Job `object`: Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
  * Arn [__string](#__string)
  * CreatedAt [__timestamp](#__timestamp)
  * ErrorCode [__integer](#__integer)
  * ErrorMessage [__string](#__string)
  * Id [__string](#__string)
  * JobTemplate [__string](#__string)
  * OutputGroupDetails [ListOfOutputGroupDetail](#listofoutputgroupdetail)
  * Queue [__string](#__string)
  * Role [__string](#__string)
  * Settings [JobSettings](#jobsettings)
  * Status [JobStatus](#jobstatus)
  * Timing [Timing](#timing)
  * UserMetadata [MapOf__string](#mapof__string)

### JobSettings
* JobSettings `object`: JobSettings contains all the transcode settings for a job.
  * AdAvailOffset [__integer](#__integer)
  * AvailBlanking [AvailBlanking](#availblanking)
  * Inputs [ListOfInput](#listofinput)
  * NielsenConfiguration [NielsenConfiguration](#nielsenconfiguration)
  * OutputGroups [ListOfOutputGroup](#listofoutputgroup)
  * TimecodeConfig [TimecodeConfig](#timecodeconfig)
  * TimedMetadataInsertion [TimedMetadataInsertion](#timedmetadatainsertion)

### JobStatus
* JobStatus `string` (values: SUBMITTED, PROGRESSING, COMPLETE, CANCELED, ERROR): A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.

### JobTemplate
* JobTemplate `object`: A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
  * Arn [__string](#__string)
  * Category [__string](#__string)
  * CreatedAt [__timestamp](#__timestamp)
  * Description [__string](#__string)
  * LastUpdated [__timestamp](#__timestamp)
  * Name [__string](#__string)
  * Queue [__string](#__string)
  * Settings [JobTemplateSettings](#jobtemplatesettings)
  * Type [Type](#type)

### JobTemplateListBy
* JobTemplateListBy `string` (values: NAME, CREATION_DATE, SYSTEM): Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.

### JobTemplateSettings
* JobTemplateSettings `object`: JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
  * AdAvailOffset [__integer](#__integer)
  * AvailBlanking [AvailBlanking](#availblanking)
  * Inputs [ListOfInputTemplate](#listofinputtemplate)
  * NielsenConfiguration [NielsenConfiguration](#nielsenconfiguration)
  * OutputGroups [ListOfOutputGroup](#listofoutputgroup)
  * TimecodeConfig [TimecodeConfig](#timecodeconfig)
  * TimedMetadataInsertion [TimedMetadataInsertion](#timedmetadatainsertion)

### LanguageCode
* LanguageCode `string` (values: ENG, SPA, FRA, DEU, GER, ZHO, ARA, HIN, JPN, RUS, POR, ITA, URD, VIE, KOR, PAN, ABK, AAR, AFR, AKA, SQI, AMH, ARG, HYE, ASM, AVA, AVE, AYM, AZE, BAM, BAK, EUS, BEL, BEN, BIH, BIS, BOS, BRE, BUL, MYA, CAT, KHM, CHA, CHE, NYA, CHU, CHV, COR, COS, CRE, HRV, CES, DAN, DIV, NLD, DZO, ENM, EPO, EST, EWE, FAO, FIJ, FIN, FRM, FUL, GLA, GLG, LUG, KAT, ELL, GRN, GUJ, HAT, HAU, HEB, HER, HMO, HUN, ISL, IDO, IBO, IND, INA, ILE, IKU, IPK, GLE, JAV, KAL, KAN, KAU, KAS, KAZ, KIK, KIN, KIR, KOM, KON, KUA, KUR, LAO, LAT, LAV, LIM, LIN, LIT, LUB, LTZ, MKD, MLG, MSA, MAL, MLT, GLV, MRI, MAR, MAH, MON, NAU, NAV, NDE, NBL, NDO, NEP, SME, NOR, NOB, NNO, OCI, OJI, ORI, ORM, OSS, PLI, FAS, POL, PUS, QUE, QAA, RON, ROH, RUN, SMO, SAG, SAN, SRD, SRB, SNA, III, SND, SIN, SLK, SLV, SOM, SOT, SUN, SWA, SSW, SWE, TGL, TAH, TGK, TAM, TAT, TEL, THA, BOD, TIR, TON, TSO, TSN, TUR, TUK, TWI, UIG, UKR, UZB, VEN, VOL, WLN, CYM, FRY, WOL, XHO, YID, YOR, ZHA, ZUL, ORJ, QPC, TNG): Code to specify the language, following the specification "ISO 639-2 three-digit code":http://www.loc.gov/standards/iso639-2/

### ListJobTemplatesRequest
* ListJobTemplatesRequest `object`

### ListJobTemplatesResponse
* ListJobTemplatesResponse `object`
  * JobTemplates [ListOfJobTemplate](#listofjobtemplate)
  * NextToken [__string](#__string)

### ListJobsRequest
* ListJobsRequest `object`

### ListJobsResponse
* ListJobsResponse `object`
  * Jobs [ListOfJob](#listofjob)
  * NextToken [__string](#__string)

### ListOfAudioDescription
* ListOfAudioDescription `array`
  * items [AudioDescription](#audiodescription)

### ListOfCaptionDescription
* ListOfCaptionDescription `array`
  * items [CaptionDescription](#captiondescription)

### ListOfCaptionDescriptionPreset
* ListOfCaptionDescriptionPreset `array`
  * items [CaptionDescriptionPreset](#captiondescriptionpreset)

### ListOfEndpoint
* ListOfEndpoint `array`
  * items [Endpoint](#endpoint)

### ListOfHlsAdMarkers
* ListOfHlsAdMarkers `array`
  * items [HlsAdMarkers](#hlsadmarkers)

### ListOfHlsCaptionLanguageMapping
* ListOfHlsCaptionLanguageMapping `array`
  * items [HlsCaptionLanguageMapping](#hlscaptionlanguagemapping)

### ListOfId3Insertion
* ListOfId3Insertion `array`
  * items [Id3Insertion](#id3insertion)

### ListOfInput
* ListOfInput `array`
  * items [Input](#input)

### ListOfInputClipping
* ListOfInputClipping `array`
  * items [InputClipping](#inputclipping)

### ListOfInputTemplate
* ListOfInputTemplate `array`
  * items [InputTemplate](#inputtemplate)

### ListOfInsertableImage
* ListOfInsertableImage `array`
  * items [InsertableImage](#insertableimage)

### ListOfJob
* ListOfJob `array`
  * items [Job](#job)

### ListOfJobTemplate
* ListOfJobTemplate `array`
  * items [JobTemplate](#jobtemplate)

### ListOfOutput
* ListOfOutput `array`
  * items [Output](#output)

### ListOfOutputChannelMapping
* ListOfOutputChannelMapping `array`
  * items [OutputChannelMapping](#outputchannelmapping)

### ListOfOutputDetail
* ListOfOutputDetail `array`
  * items [OutputDetail](#outputdetail)

### ListOfOutputGroup
* ListOfOutputGroup `array`
  * items [OutputGroup](#outputgroup)

### ListOfOutputGroupDetail
* ListOfOutputGroupDetail `array`
  * items [OutputGroupDetail](#outputgroupdetail)

### ListOfPreset
* ListOfPreset `array`
  * items [Preset](#preset)

### ListOfQueue
* ListOfQueue `array`
  * items [Queue](#queue)

### ListOf__integer
* ListOf__integer `array`
  * items [__integer](#__integer)

### ListOf__string
* ListOf__string `array`
  * items [__string](#__string)

### ListPresetsRequest
* ListPresetsRequest `object`

### ListPresetsResponse
* ListPresetsResponse `object`
  * NextToken [__string](#__string)
  * Presets [ListOfPreset](#listofpreset)

### ListQueuesRequest
* ListQueuesRequest `object`

### ListQueuesResponse
* ListQueuesResponse `object`
  * NextToken [__string](#__string)
  * Queues [ListOfQueue](#listofqueue)

### M2tsAudioBufferModel
* M2tsAudioBufferModel `string` (values: DVB, ATSC): Selects between the DVB and ATSC buffer models for Dolby Digital audio.

### M2tsBufferModel
* M2tsBufferModel `string` (values: MULTIPLEX, NONE): Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex  buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.

### M2tsEbpAudioInterval
* M2tsEbpAudioInterval `string` (values: VIDEO_AND_FIXED_INTERVALS, VIDEO_INTERVAL): When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).

### M2tsEbpPlacement
* M2tsEbpPlacement `string` (values: VIDEO_AND_AUDIO_PIDS, VIDEO_PID): Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).

### M2tsEsRateInPes
* M2tsEsRateInPes `string` (values: INCLUDE, EXCLUDE): Controls whether to include the ES Rate field in the PES header.

### M2tsPcrControl
* M2tsPcrControl `string` (values: PCR_EVERY_PES_PACKET, CONFIGURED_PCR_PERIOD): When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream.

### M2tsRateMode
* M2tsRateMode `string` (values: VBR, CBR): When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate.

### M2tsScte35Source
* M2tsScte35Source `string` (values: PASSTHROUGH, NONE): Enables SCTE-35 passthrough (scte35Source) to pass any SCTE-35 signals from input to output. This is only available for certain containers.

### M2tsSegmentationMarkers
* M2tsSegmentationMarkers `string` (values: NONE, RAI_SEGSTART, RAI_ADAPT, PSI_SEGSTART, EBP, EBP_LEGACY): Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.

### M2tsSegmentationStyle
* M2tsSegmentationStyle `string` (values: MAINTAIN_CADENCE, RESET_CADENCE): The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule.

### M2tsSettings
* M2tsSettings `object`: Settings for M2TS Container.
  * AudioBufferModel [M2tsAudioBufferModel](#m2tsaudiobuffermodel)
  * AudioFramesPerPes [__integer](#__integer)
  * AudioPids [ListOf__integer](#listof__integer)
  * Bitrate [__integer](#__integer)
  * BufferModel [M2tsBufferModel](#m2tsbuffermodel)
  * DvbNitSettings [DvbNitSettings](#dvbnitsettings)
  * DvbSdtSettings [DvbSdtSettings](#dvbsdtsettings)
  * DvbSubPids [ListOf__integer](#listof__integer)
  * DvbTdtSettings [DvbTdtSettings](#dvbtdtsettings)
  * DvbTeletextPid [__integer](#__integer)
  * EbpAudioInterval [M2tsEbpAudioInterval](#m2tsebpaudiointerval)
  * EbpPlacement [M2tsEbpPlacement](#m2tsebpplacement)
  * EsRateInPes [M2tsEsRateInPes](#m2tsesrateinpes)
  * FragmentTime [__double](#__double)
  * MaxPcrInterval [__integer](#__integer)
  * MinEbpInterval [__integer](#__integer)
  * NullPacketBitrate [__double](#__double)
  * PatInterval [__integer](#__integer)
  * PcrControl [M2tsPcrControl](#m2tspcrcontrol)
  * PcrPid [__integer](#__integer)
  * PmtInterval [__integer](#__integer)
  * PmtPid [__integer](#__integer)
  * PrivateMetadataPid [__integer](#__integer)
  * ProgramNumber [__integer](#__integer)
  * RateMode [M2tsRateMode](#m2tsratemode)
  * Scte35Pid [__integer](#__integer)
  * Scte35Source [M2tsScte35Source](#m2tsscte35source)
  * SegmentationMarkers [M2tsSegmentationMarkers](#m2tssegmentationmarkers)
  * SegmentationStyle [M2tsSegmentationStyle](#m2tssegmentationstyle)
  * SegmentationTime [__double](#__double)
  * TransportStreamId [__integer](#__integer)
  * VideoPid [__integer](#__integer)

### M3u8PcrControl
* M3u8PcrControl `string` (values: PCR_EVERY_PES_PACKET, CONFIGURED_PCR_PERIOD): When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.

### M3u8Scte35Source
* M3u8Scte35Source `string` (values: PASSTHROUGH, NONE): Enables SCTE-35 passthrough (scte35Source) to pass any SCTE-35 signals from input to output. This is only available for certain containers.

### M3u8Settings
* M3u8Settings `object`: Settings for TS segments in HLS
  * AudioFramesPerPes [__integer](#__integer)
  * AudioPids [ListOf__integer](#listof__integer)
  * PatInterval [__integer](#__integer)
  * PcrControl [M3u8PcrControl](#m3u8pcrcontrol)
  * PcrPid [__integer](#__integer)
  * PmtInterval [__integer](#__integer)
  * PmtPid [__integer](#__integer)
  * PrivateMetadataPid [__integer](#__integer)
  * ProgramNumber [__integer](#__integer)
  * Scte35Pid [__integer](#__integer)
  * Scte35Source [M3u8Scte35Source](#m3u8scte35source)
  * TimedMetadata [TimedMetadata](#timedmetadata)
  * TimedMetadataPid [__integer](#__integer)
  * TransportStreamId [__integer](#__integer)
  * VideoPid [__integer](#__integer)

### MapOfAudioSelector
* MapOfAudioSelector `array`
  * items `object`
    * key [__string](#__string)
    * value [AudioSelector](#audioselector)

### MapOfAudioSelectorGroup
* MapOfAudioSelectorGroup `array`
  * items `object`
    * key [__string](#__string)
    * value [AudioSelectorGroup](#audioselectorgroup)

### MapOfCaptionSelector
* MapOfCaptionSelector `array`
  * items `object`
    * key [__string](#__string)
    * value [CaptionSelector](#captionselector)

### MapOf__string
* MapOf__string `array`
  * items `object`
    * key [__string](#__string)
    * value [__string](#__string)

### MovClapAtom
* MovClapAtom `string` (values: INCLUDE, EXCLUDE): When enabled, include 'clap' atom if appropriate for the video output settings.

### MovCslgAtom
* MovCslgAtom `string` (values: INCLUDE, EXCLUDE): When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.

### MovMpeg2FourCCControl
* MovMpeg2FourCCControl `string` (values: XDCAM, MPEG): When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2.

### MovPaddingControl
* MovPaddingControl `string` (values: OMNEON, NONE): If set to OMNEON, inserts Omneon-compatible padding

### MovReference
* MovReference `string` (values: SELF_CONTAINED, EXTERNAL): A value of 'external' creates separate media files and the wrapper file (.mov) contains references to these media files. A value of 'self_contained' creates only a wrapper (.mov) file and this file contains all of the media.

### MovSettings
* MovSettings `object`: Settings for MOV Container.
  * ClapAtom [MovClapAtom](#movclapatom)
  * CslgAtom [MovCslgAtom](#movcslgatom)
  * Mpeg2FourCCControl [MovMpeg2FourCCControl](#movmpeg2fourcccontrol)
  * PaddingControl [MovPaddingControl](#movpaddingcontrol)
  * Reference [MovReference](#movreference)

### Mp2Settings
* Mp2Settings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
  * Bitrate [__integer](#__integer)
  * Channels [__integer](#__integer)
  * SampleRate [__integer](#__integer)

### Mp4CslgAtom
* Mp4CslgAtom `string` (values: INCLUDE, EXCLUDE): When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.

### Mp4FreeSpaceBox
* Mp4FreeSpaceBox `string` (values: INCLUDE, EXCLUDE): Inserts a free-space box immediately after the moov box.

### Mp4MoovPlacement
* Mp4MoovPlacement `string` (values: PROGRESSIVE_DOWNLOAD, NORMAL): If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.

### Mp4Settings
* Mp4Settings `object`: Settings for MP4 Container
  * CslgAtom [Mp4CslgAtom](#mp4cslgatom)
  * FreeSpaceBox [Mp4FreeSpaceBox](#mp4freespacebox)
  * MoovPlacement [Mp4MoovPlacement](#mp4moovplacement)
  * Mp4MajorBrand [__string](#__string)

### Mpeg2AdaptiveQuantization
* Mpeg2AdaptiveQuantization `string` (values: OFF, LOW, MEDIUM, HIGH): Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.

### Mpeg2CodecLevel
* Mpeg2CodecLevel `string` (values: AUTO, LOW, MAIN, HIGH1440, HIGH): Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output.

### Mpeg2CodecProfile
* Mpeg2CodecProfile `string` (values: MAIN, PROFILE_422): Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output.

### Mpeg2FramerateControl
* Mpeg2FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Using the API, set FramerateControl to INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Using the console, do this by choosing INITIALIZE_FROM_SOURCE for Framerate.

### Mpeg2FramerateConversionAlgorithm
* Mpeg2FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE): When set to INTERPOLATE, produces smoother motion during framerate conversion.

### Mpeg2GopSizeUnits
* Mpeg2GopSizeUnits `string` (values: FRAMES, SECONDS): Indicates if the GOP Size in MPEG2 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.

### Mpeg2InterlaceMode
* Mpeg2InterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOw_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same  field polarity as the source. Therefore, behavior depends on the input scan type. - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first". - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.

### Mpeg2IntraDcPrecision
* Mpeg2IntraDcPrecision `string` (values: AUTO, INTRA_DC_PRECISION_8, INTRA_DC_PRECISION_9, INTRA_DC_PRECISION_10, INTRA_DC_PRECISION_11): Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.

### Mpeg2ParControl
* Mpeg2ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.

### Mpeg2QualityTuningLevel
* Mpeg2QualityTuningLevel `string` (values: SINGLE_PASS, MULTI_PASS): Use Quality tuning level (Mpeg2QualityTuningLevel) to specifiy whether to use single-pass or multipass video encoding.

### Mpeg2RateControlMode
* Mpeg2RateControlMode `string` (values: VBR, CBR): Use Rate control mode (Mpeg2RateControlMode) to specifiy whether the bitrate is variable (vbr) or constant (cbr).

### Mpeg2SceneChangeDetect
* Mpeg2SceneChangeDetect `string` (values: DISABLED, ENABLED): Scene change detection (inserts I-frames on scene changes).

### Mpeg2Settings
* Mpeg2Settings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
  * AdaptiveQuantization [Mpeg2AdaptiveQuantization](#mpeg2adaptivequantization)
  * Bitrate [__integer](#__integer)
  * CodecLevel [Mpeg2CodecLevel](#mpeg2codeclevel)
  * CodecProfile [Mpeg2CodecProfile](#mpeg2codecprofile)
  * FramerateControl [Mpeg2FramerateControl](#mpeg2frameratecontrol)
  * FramerateConversionAlgorithm [Mpeg2FramerateConversionAlgorithm](#mpeg2framerateconversionalgorithm)
  * FramerateDenominator [__integer](#__integer)
  * FramerateNumerator [__integer](#__integer)
  * GopClosedCadence [__integer](#__integer)
  * GopSize [__double](#__double)
  * GopSizeUnits [Mpeg2GopSizeUnits](#mpeg2gopsizeunits)
  * HrdBufferInitialFillPercentage [__integer](#__integer)
  * HrdBufferSize [__integer](#__integer)
  * InterlaceMode [Mpeg2InterlaceMode](#mpeg2interlacemode)
  * IntraDcPrecision [Mpeg2IntraDcPrecision](#mpeg2intradcprecision)
  * MaxBitrate [__integer](#__integer)
  * MinIInterval [__integer](#__integer)
  * NumberBFramesBetweenReferenceFrames [__integer](#__integer)
  * ParControl [Mpeg2ParControl](#mpeg2parcontrol)
  * ParDenominator [__integer](#__integer)
  * ParNumerator [__integer](#__integer)
  * QualityTuningLevel [Mpeg2QualityTuningLevel](#mpeg2qualitytuninglevel)
  * RateControlMode [Mpeg2RateControlMode](#mpeg2ratecontrolmode)
  * SceneChangeDetect [Mpeg2SceneChangeDetect](#mpeg2scenechangedetect)
  * SlowPal [Mpeg2SlowPal](#mpeg2slowpal)
  * Softness [__integer](#__integer)
  * SpatialAdaptiveQuantization [Mpeg2SpatialAdaptiveQuantization](#mpeg2spatialadaptivequantization)
  * Syntax [Mpeg2Syntax](#mpeg2syntax)
  * Telecine [Mpeg2Telecine](#mpeg2telecine)
  * TemporalAdaptiveQuantization [Mpeg2TemporalAdaptiveQuantization](#mpeg2temporaladaptivequantization)

### Mpeg2SlowPal
* Mpeg2SlowPal `string` (values: DISABLED, ENABLED): Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.

### Mpeg2SpatialAdaptiveQuantization
* Mpeg2SpatialAdaptiveQuantization `string` (values: DISABLED, ENABLED): Adjust quantization within each frame based on spatial variation of content complexity.

### Mpeg2Syntax
* Mpeg2Syntax `string` (values: DEFAULT, D_10): Produces a Type D-10 compatible bitstream (SMPTE 356M-2001).

### Mpeg2Telecine
* Mpeg2Telecine `string` (values: NONE, SOFT, HARD): Only use Telecine (Mpeg2Telecine) when you set Framerate (Framerate) to 29.970. Set Telecine (Mpeg2Telecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.

### Mpeg2TemporalAdaptiveQuantization
* Mpeg2TemporalAdaptiveQuantization `string` (values: DISABLED, ENABLED): Adjust quantization within each frame based on temporal variation of content complexity.

### MsSmoothAudioDeduplication
* MsSmoothAudioDeduplication `string` (values: COMBINE_DUPLICATE_STREAMS, NONE): COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.

### MsSmoothEncryptionSettings
* MsSmoothEncryptionSettings `object`: If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
  * SpekeKeyProvider [SpekeKeyProvider](#spekekeyprovider)

### MsSmoothGroupSettings
* MsSmoothGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
  * AudioDeduplication [MsSmoothAudioDeduplication](#mssmoothaudiodeduplication)
  * Destination [__string](#__string)
  * Encryption [MsSmoothEncryptionSettings](#mssmoothencryptionsettings)
  * FragmentLength [__integer](#__integer)
  * ManifestEncoding [MsSmoothManifestEncoding](#mssmoothmanifestencoding)

### MsSmoothManifestEncoding
* MsSmoothManifestEncoding `string` (values: UTF8, UTF16): Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.

### NielsenConfiguration
* NielsenConfiguration `object`: Settings for Nielsen Configuration
  * BreakoutCode [__integer](#__integer)
  * DistributorId [__string](#__string)

### NoiseReducer
* NoiseReducer `object`: Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer (NoiseReducer), you must also select a value for Noise reducer filter (NoiseReducerFilter).
  * Filter [NoiseReducerFilter](#noisereducerfilter)
  * FilterSettings [NoiseReducerFilterSettings](#noisereducerfiltersettings)
  * SpatialFilterSettings [NoiseReducerSpatialFilterSettings](#noisereducerspatialfiltersettings)

### NoiseReducerFilter
* NoiseReducerFilter `string` (values: BILATERAL, MEAN, GAUSSIAN, LANCZOS, SHARPEN, CONSERVE, SPATIAL): Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral is an edge preserving noise reduction filter * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) are convolution filters * Conserve is a min/max noise reduction filter * Spatial is frequency-domain filter based on JND principles.

### NoiseReducerFilterSettings
* NoiseReducerFilterSettings `object`: Settings for a noise reducer filter
  * Strength [__integer](#__integer)

### NoiseReducerSpatialFilterSettings
* NoiseReducerSpatialFilterSettings `object`: Noise reducer filter settings for spatial filter.
  * PostFilterSharpenStrength [__integer](#__integer)
  * Speed [__integer](#__integer)
  * Strength [__integer](#__integer)

### NotFoundException
* NotFoundException `object`: The resource you requested does not exist.
  * Message [__string](#__string)

### Order
* Order `string` (values: ASCENDING, DESCENDING): When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.

### Output
* Output `object`: An output object describes the settings for a single output file or stream in an output group.
  * AudioDescriptions [ListOfAudioDescription](#listofaudiodescription)
  * CaptionDescriptions [ListOfCaptionDescription](#listofcaptiondescription)
  * ContainerSettings [ContainerSettings](#containersettings)
  * Extension [__string](#__string)
  * NameModifier [__string](#__string)
  * OutputSettings [OutputSettings](#outputsettings)
  * Preset [__string](#__string)
  * VideoDescription [VideoDescription](#videodescription)

### OutputChannelMapping
* OutputChannelMapping `object`: OutputChannel mapping settings.
  * InputChannels [ListOf__integer](#listof__integer)

### OutputDetail
* OutputDetail `object`: Details regarding output
  * DurationInMs [__integer](#__integer)
  * VideoDetails [VideoDetail](#videodetail)

### OutputGroup
* OutputGroup `object`: Group of outputs
  * CustomName [__string](#__string)
  * Name [__string](#__string)
  * OutputGroupSettings [OutputGroupSettings](#outputgroupsettings)
  * Outputs [ListOfOutput](#listofoutput)

### OutputGroupDetail
* OutputGroupDetail `object`: Contains details about the output groups specified in the job settings.
  * OutputDetails [ListOfOutputDetail](#listofoutputdetail)

### OutputGroupSettings
* OutputGroupSettings `object`: Output Group settings, including type
  * DashIsoGroupSettings [DashIsoGroupSettings](#dashisogroupsettings)
  * FileGroupSettings [FileGroupSettings](#filegroupsettings)
  * HlsGroupSettings [HlsGroupSettings](#hlsgroupsettings)
  * MsSmoothGroupSettings [MsSmoothGroupSettings](#mssmoothgroupsettings)
  * Type [OutputGroupType](#outputgrouptype)

### OutputGroupType
* OutputGroupType `string` (values: HLS_GROUP_SETTINGS, DASH_ISO_GROUP_SETTINGS, FILE_GROUP_SETTINGS, MS_SMOOTH_GROUP_SETTINGS)

### OutputSdt
* OutputSdt `string` (values: SDT_FOLLOW, SDT_FOLLOW_IF_PRESENT, SDT_MANUAL, SDT_NONE): Selects method of inserting SDT information into output stream.  "Follow input SDT" copies SDT information from input stream to  output stream. "Follow input SDT if present" copies SDT information from  input stream to output stream if SDT information is present in the input,  otherwise it will fall back on the user-defined values. Enter "SDT  Manually" means user will enter the SDT information. "No SDT" means output  stream will not contain SDT information.

### OutputSettings
* OutputSettings `object`: Specific settings for this type of output.
  * HlsSettings [HlsSettings](#hlssettings)

### Preset
* Preset `object`: A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
  * Arn [__string](#__string)
  * Category [__string](#__string)
  * CreatedAt [__timestamp](#__timestamp)
  * Description [__string](#__string)
  * LastUpdated [__timestamp](#__timestamp)
  * Name [__string](#__string)
  * Settings [PresetSettings](#presetsettings)
  * Type [Type](#type)

### PresetListBy
* PresetListBy `string` (values: NAME, CREATION_DATE, SYSTEM): Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.

### PresetSettings
* PresetSettings `object`: Settings for preset
  * AudioDescriptions [ListOfAudioDescription](#listofaudiodescription)
  * CaptionDescriptions [ListOfCaptionDescriptionPreset](#listofcaptiondescriptionpreset)
  * ContainerSettings [ContainerSettings](#containersettings)
  * VideoDescription [VideoDescription](#videodescription)

### ProresCodecProfile
* ProresCodecProfile `string` (values: APPLE_PRORES_422, APPLE_PRORES_422_HQ, APPLE_PRORES_422_LT, APPLE_PRORES_422_PROXY): Use Profile (ProResCodecProfile) to specifiy the type of Apple ProRes codec to use for this output.

### ProresFramerateControl
* ProresFramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Using the API, set FramerateControl to INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Using the console, do this by choosing INITIALIZE_FROM_SOURCE for Framerate.

### ProresFramerateConversionAlgorithm
* ProresFramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE): When set to INTERPOLATE, produces smoother motion during framerate conversion.

### ProresInterlaceMode
* ProresInterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOw_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same  field polarity as the source. Therefore, behavior depends on the input scan type. - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first". - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.

### ProresParControl
* ProresParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Use (ProresParControl) to specify how the service determines the pixel aspect ratio. Set to Follow source (INITIALIZE_FROM_SOURCE) to use the pixel aspect ratio from the input.  To specify a different pixel aspect ratio: Using the console, choose it from the dropdown menu. Using the API, set ProresParControl to (SPECIFIED) and provide  for (ParNumerator) and (ParDenominator).

### ProresSettings
* ProresSettings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
  * CodecProfile [ProresCodecProfile](#prorescodecprofile)
  * FramerateControl [ProresFramerateControl](#proresframeratecontrol)
  * FramerateConversionAlgorithm [ProresFramerateConversionAlgorithm](#proresframerateconversionalgorithm)
  * FramerateDenominator [__integer](#__integer)
  * FramerateNumerator [__integer](#__integer)
  * InterlaceMode [ProresInterlaceMode](#proresinterlacemode)
  * ParControl [ProresParControl](#proresparcontrol)
  * ParDenominator [__integer](#__integer)
  * ParNumerator [__integer](#__integer)
  * SlowPal [ProresSlowPal](#proresslowpal)
  * Telecine [ProresTelecine](#prorestelecine)

### ProresSlowPal
* ProresSlowPal `string` (values: DISABLED, ENABLED): Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.

### ProresTelecine
* ProresTelecine `string` (values: NONE, HARD): Only use Telecine (ProresTelecine) when you set Framerate (Framerate) to 29.970. Set Telecine (ProresTelecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.

### Queue
* Queue `object`: MediaConvert jobs are submitted to a queue. Unless specified otherwise jobs are submitted to a built-in default queue. User can create additional queues to separate the jobs of different categories or priority.
  * Arn [__string](#__string)
  * CreatedAt [__timestamp](#__timestamp)
  * Description [__string](#__string)
  * LastUpdated [__timestamp](#__timestamp)
  * Name [__string](#__string)
  * Status [QueueStatus](#queuestatus)
  * Type [Type](#type)

### QueueListBy
* QueueListBy `string` (values: NAME, CREATION_DATE): Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.

### QueueStatus
* QueueStatus `string` (values: ACTIVE, PAUSED): Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue will not begin. Jobs running when a queue is paused continue to run until they finish or error out.

### Rectangle
* Rectangle `object`: Use Rectangle to identify a specific area of the video frame.
  * Height [__integer](#__integer)
  * Width [__integer](#__integer)
  * X [__integer](#__integer)
  * Y [__integer](#__integer)

### RemixSettings
* RemixSettings `object`: Use Manual audio remixing (RemixSettings) to adjust audio levels for each output channel. With audio remixing, you can output more or fewer audio channels than your input audio source provides.
  * ChannelMapping [ChannelMapping](#channelmapping)
  * ChannelsIn [__integer](#__integer)
  * ChannelsOut [__integer](#__integer)

### RespondToAfd
* RespondToAfd `string` (values: NONE, RESPOND, PASSTHROUGH): Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output.

### ScalingBehavior
* ScalingBehavior `string` (values: DEFAULT, STRETCH_TO_OUTPUT): Applies only if your input aspect ratio is different from your output aspect ratio. Enable Stretch to output (StretchToOutput) to have the service stretch your video image to fit. Leave this setting disabled to allow the service to letterbox your video instead. This setting overrides any positioning value you specify elsewhere in the job.

### SccDestinationFramerate
* SccDestinationFramerate `string` (values: FRAMERATE_23_97, FRAMERATE_24, FRAMERATE_29_97_DROPFRAME, FRAMERATE_29_97_NON_DROPFRAME): Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a framerate that matches the framerate of the associated video. If the video framerate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME).

### SccDestinationSettings
* SccDestinationSettings `object`: Settings for SCC caption output.
  * Framerate [SccDestinationFramerate](#sccdestinationframerate)

### SpekeKeyProvider
* SpekeKeyProvider `object`: Settings for use with a SPEKE key provider
  * ResourceId [__string](#__string)
  * SystemIds [ListOf__string](#listof__string)
  * Url [__string](#__string)

### StaticKeyProvider
* StaticKeyProvider `object`: Settings for use with a SPEKE key provider.
  * KeyFormat [__string](#__string)
  * KeyFormatVersions [__string](#__string)
  * StaticKeyValue [__string](#__string)
  * Url [__string](#__string)

### TeletextDestinationSettings
* TeletextDestinationSettings `object`: Settings for Teletext caption output
  * PageNumber [__string](#__string)

### TeletextSourceSettings
* TeletextSourceSettings `object`: Settings specific to Teletext caption sources, including Page number.
  * PageNumber [__string](#__string)

### TimecodeBurnin
* TimecodeBurnin `object`: Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output.
  * FontSize [__integer](#__integer)
  * Position [TimecodeBurninPosition](#timecodeburninposition)
  * Prefix [__string](#__string)

### TimecodeBurninPosition
* TimecodeBurninPosition `string` (values: TOP_CENTER, TOP_LEFT, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT): Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video.

### TimecodeConfig
* TimecodeConfig `object`: Contains settings used to acquire and adjust timecode information from inputs.
  * Anchor [__string](#__string)
  * Source [TimecodeSource](#timecodesource)
  * Start [__string](#__string)
  * TimestampOffset [__string](#__string)

### TimecodeSource
* TimecodeSource `string` (values: EMBEDDED, ZEROBASED, SPECIFIEDSTART): Use Timecode source (TimecodeSource) to set how timecodes are handled within this input. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value.

### TimedMetadata
* TimedMetadata `string` (values: PASSTHROUGH, NONE): If PASSTHROUGH, inserts ID3 timed metadata from the timed_metadata REST command into this output. Only available for certain containers.

### TimedMetadataInsertion
* TimedMetadataInsertion `object`: Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
  * Id3Insertions [ListOfId3Insertion](#listofid3insertion)

### Timing
* Timing `object`: Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
  * FinishTime [__timestamp](#__timestamp)
  * StartTime [__timestamp](#__timestamp)
  * SubmitTime [__timestamp](#__timestamp)

### TooManyRequestsException
* TooManyRequestsException `object`: Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
  * Message [__string](#__string)

### TtmlDestinationSettings
* TtmlDestinationSettings `object`: Settings for TTML caption output
  * StylePassthrough [TtmlStylePassthrough](#ttmlstylepassthrough)

### TtmlStylePassthrough
* TtmlStylePassthrough `string` (values: ENABLED, DISABLED): Pass through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output.

### Type
* Type `string` (values: SYSTEM, CUSTOM)

### UpdateJobTemplateRequest
* UpdateJobTemplateRequest `object`
  * Category [__string](#__string)
  * Description [__string](#__string)
  * Queue [__string](#__string)
  * Settings [JobTemplateSettings](#jobtemplatesettings)

### UpdateJobTemplateResponse
* UpdateJobTemplateResponse `object`
  * JobTemplate [JobTemplate](#jobtemplate)

### UpdatePresetRequest
* UpdatePresetRequest `object`
  * Category [__string](#__string)
  * Description [__string](#__string)
  * Settings [PresetSettings](#presetsettings)

### UpdatePresetResponse
* UpdatePresetResponse `object`
  * Preset [Preset](#preset)

### UpdateQueueRequest
* UpdateQueueRequest `object`
  * Description [__string](#__string)
  * Status [QueueStatus](#queuestatus)

### UpdateQueueResponse
* UpdateQueueResponse `object`
  * Queue [Queue](#queue)

### VideoCodec
* VideoCodec `string` (values: FRAME_CAPTURE, H_264, H_265, MPEG2, PRORES): Type of video codec

### VideoCodecSettings
* VideoCodecSettings `object`: Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value you choose for Video codec (Codec). For each codec enum you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * FRAME_CAPTURE, FrameCaptureSettings
  * Codec [VideoCodec](#videocodec)
  * FrameCaptureSettings [FrameCaptureSettings](#framecapturesettings)
  * H264Settings [H264Settings](#h264settings)
  * H265Settings [H265Settings](#h265settings)
  * Mpeg2Settings [Mpeg2Settings](#mpeg2settings)
  * ProresSettings [ProresSettings](#proressettings)

### VideoDescription
* VideoDescription `object`: Settings for video outputs
  * AfdSignaling [AfdSignaling](#afdsignaling)
  * AntiAlias [AntiAlias](#antialias)
  * CodecSettings [VideoCodecSettings](#videocodecsettings)
  * ColorMetadata [ColorMetadata](#colormetadata)
  * Crop [Rectangle](#rectangle)
  * DropFrameTimecode [DropFrameTimecode](#dropframetimecode)
  * FixedAfd [__integer](#__integer)
  * Height [__integer](#__integer)
  * Position [Rectangle](#rectangle)
  * RespondToAfd [RespondToAfd](#respondtoafd)
  * ScalingBehavior [ScalingBehavior](#scalingbehavior)
  * Sharpness [__integer](#__integer)
  * TimecodeInsertion [VideoTimecodeInsertion](#videotimecodeinsertion)
  * VideoPreprocessors [VideoPreprocessor](#videopreprocessor)
  * Width [__integer](#__integer)

### VideoDetail
* VideoDetail `object`: Contains details about the output's video stream
  * HeightInPx [__integer](#__integer)
  * WidthInPx [__integer](#__integer)

### VideoPreprocessor
* VideoPreprocessor `object`: Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
  * ColorCorrector [ColorCorrector](#colorcorrector)
  * Deinterlacer [Deinterlacer](#deinterlacer)
  * ImageInserter [ImageInserter](#imageinserter)
  * NoiseReducer [NoiseReducer](#noisereducer)
  * TimecodeBurnin [TimecodeBurnin](#timecodeburnin)

### VideoSelector
* VideoSelector `object`: Selector for video.
  * ColorSpace [ColorSpace](#colorspace)
  * ColorSpaceUsage [ColorSpaceUsage](#colorspaceusage)
  * Hdr10Metadata [Hdr10Metadata](#hdr10metadata)
  * Pid [__integer](#__integer)
  * ProgramNumber [__integer](#__integer)

### VideoTimecodeInsertion
* VideoTimecodeInsertion `string` (values: DISABLED, PIC_TIMING_SEI): Enable Timecode insertion to include timecode information in this output. Do this in the API by setting (VideoTimecodeInsertion) to (PIC_TIMING_SEI). To get timecodes to appear correctly in your output, also set up the timecode configuration for your job in the input settings. Only enable Timecode insertion when the input framerate is identical to output framerate. Disable this setting to remove the timecode from the output. Default is disabled.

### WavSettings
* WavSettings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
  * BitDepth [__integer](#__integer)
  * Channels [__integer](#__integer)
  * SampleRate [__integer](#__integer)

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __string
* __string `string`

### __timestamp
* __timestamp `string`


