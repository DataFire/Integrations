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

### CreateJobTemplate



```js
amazonaws_mediaconvert.CreateJobTemplate({
  "Settings": {
    "OutputGroups": []
  },
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Category [__string](#__string)
  * Description [__string](#__string)
  * Name **required** [__string](#__string)
  * Queue [__string](#__string)
  * Settings **required** [JobTemplateSettings](#jobtemplatesettings)

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

### CreateJob



```js
amazonaws_mediaconvert.CreateJob({
  "Role": "",
  "Settings": {
    "OutputGroups": [],
    "Inputs": []
  }
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [__string](#__string)
  * JobTemplate [__string](#__string)
  * Queue [__string](#__string)
  * Role **required** [__string](#__string)
  * Settings **required** [JobSettings](#jobsettings)
  * UserMetadata [__mapOf__string](#__mapof__string)

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

#### Output
* output [ListPresetsResponse](#listpresetsresponse)

### CreatePreset



```js
amazonaws_mediaconvert.CreatePreset({
  "Settings": {},
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Category [__string](#__string)
  * Description [__string](#__string)
  * Name **required** [__string](#__string)
  * Settings **required** [PresetSettings](#presetsettings)

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

### CreateQueue



```js
amazonaws_mediaconvert.CreateQueue({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Description [__string](#__string)
  * Name **required** [__string](#__string)

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
* AacSettings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
  * AudioDescriptionBroadcasterMix [AacAudioDescriptionBroadcasterMix](#aacaudiodescriptionbroadcastermix)
  * Bitrate [__integerMin6000Max1024000](#__integermin6000max1024000)
  * CodecProfile [AacCodecProfile](#aaccodecprofile)
  * CodingMode **required** [AacCodingMode](#aaccodingmode)
  * RateControlMode [AacRateControlMode](#aacratecontrolmode)
  * RawFormat [AacRawFormat](#aacrawformat)
  * SampleRate **required** [__integerMin8000Max96000](#__integermin8000max96000)
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
  * Bitrate [__integerMin64000Max640000](#__integermin64000max640000)
  * BitstreamMode [Ac3BitstreamMode](#ac3bitstreammode)
  * CodingMode [Ac3CodingMode](#ac3codingmode)
  * Dialnorm [__integerMin1Max31](#__integermin1max31)
  * DynamicRangeCompressionProfile [Ac3DynamicRangeCompressionProfile](#ac3dynamicrangecompressionprofile)
  * LfeFilter [Ac3LfeFilter](#ac3lfefilter)
  * MetadataControl [Ac3MetadataControl](#ac3metadatacontrol)
  * SampleRate [__integerMin48000Max48000](#__integermin48000max48000)

### AfdSignaling
* AfdSignaling `string` (values: NONE, AUTO, FIXED): This setting only applies to H.264 and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.

### AiffSettings
* AiffSettings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
  * BitDepth [__integerMin16Max24](#__integermin16max24)
  * Channels [__integerMin1Max2](#__integermin1max2)
  * SampleRate [__integerMin8000Max192000](#__integermin8000max192000)

### AncillarySourceSettings
* AncillarySourceSettings `object`: Settings for ancillary captions source.
  * SourceAncillaryChannelNumber [__integerMin1Max4](#__integermin1max4)

### AntiAlias
* AntiAlias `string` (values: DISABLED, ENABLED): Enable Anti-alias (AntiAlias) to enhance sharp edges in video output when your input resolution is much larger than your output resolution. Default is enabled.

### AudioCodec
* AudioCodec `string` (values: AAC, MP2, WAV, AIFF, AC3, EAC3, PASSTHROUGH): Type of Audio codec.

### AudioCodecSettings
* AudioCodecSettings `object`: Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value you choose for Audio codec (Codec). For each codec enum you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings
  * AacSettings [AacSettings](#aacsettings)
  * Ac3Settings [Ac3Settings](#ac3settings)
  * AiffSettings [AiffSettings](#aiffsettings)
  * Codec **required** [AudioCodec](#audiocodec)
  * Eac3Settings [Eac3Settings](#eac3settings)
  * Mp2Settings [Mp2Settings](#mp2settings)
  * WavSettings [WavSettings](#wavsettings)

### AudioDefaultSelection
* AudioDefaultSelection `string` (values: DEFAULT, NOT_DEFAULT): Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.

### AudioDescription
* AudioDescription `object`: Description of audio output
  * AudioNormalizationSettings [AudioNormalizationSettings](#audionormalizationsettings)
  * AudioSourceName [__string](#__string)
  * AudioType [__integerMin0Max255](#__integermin0max255)
  * AudioTypeControl [AudioTypeControl](#audiotypecontrol)
  * CodecSettings **required** [AudioCodecSettings](#audiocodecsettings)
  * LanguageCode [LanguageCode](#languagecode)
  * LanguageCodeControl [AudioLanguageCodeControl](#audiolanguagecodecontrol)
  * RemixSettings [RemixSettings](#remixsettings)
  * StreamName [__stringPatternWS](#__stringpatternws)

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
  * CorrectionGateLevel [__integerMinNegative70Max0](#__integerminnegative70max0)
  * LoudnessLogging [AudioNormalizationLoudnessLogging](#audionormalizationloudnesslogging)
  * PeakCalculation [AudioNormalizationPeakCalculation](#audionormalizationpeakcalculation)
  * TargetLkfs [__doubleMinNegative59Max0](#__doubleminnegative59max0)

### AudioSelector
* AudioSelector `object`: Selector for Audio
  * DefaultSelection [AudioDefaultSelection](#audiodefaultselection)
  * ExternalAudioFileInput [__stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE](#__stringpatterns3mm2vvmmppeeggaavviimmpp4ffllvvmmppttmmppggmm4vvttrrppff4vvmm2ttssttss264hh264mmkkvvmmoovvmmttssmm2ttwwmmvvaassffvvoobb3ggpp3ggppppmmxxffddiivvxxxxvviiddrraawwddvvggxxffmm1vv3gg2vvmmffmm3uu8llcchhggxxffmmppeegg2mmxxffmmppeegg2mmxxffhhddwwaavvyy4mmaaaaccaaiiffffmmpp2aacc3eecc3ddttssee)
  * LanguageCode [LanguageCode](#languagecode)
  * Offset [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * Pids [__listOf__integerMin1Max2147483647](#__listof__integermin1max2147483647)
  * ProgramSelection [__integerMin0Max8](#__integermin0max8)
  * RemixSettings [RemixSettings](#remixsettings)
  * SelectorType [AudioSelectorType](#audioselectortype)
  * Tracks [__listOf__integerMin1Max2147483647](#__listof__integermin1max2147483647)

### AudioSelectorGroup
* AudioSelectorGroup `object`: Group of Audio Selectors
  * AudioSelectorNames **required** [__listOf__stringMin1](#__listof__stringmin1)

### AudioSelectorType
* AudioSelectorType `string` (values: PID, TRACK, LANGUAGE_CODE): Specifies the type of the audio selector.

### AudioTypeControl
* AudioTypeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.

### AvailBlanking
* AvailBlanking `object`: Settings for Avail Blanking
  * AvailBlankingImage [__stringMin14PatternS3BmpBMPPngPNG](#__stringmin14patterns3bmpbmppngpng)

### BadRequestException
* BadRequestException `object`: The service can't process your request because of a problem in the request. Please check your request form and syntax.
  * Message [__string](#__string)

### BurninDestinationSettings
* BurninDestinationSettings `object`: Burn-In Destination Settings.
  * Alignment **required** [BurninSubtitleAlignment](#burninsubtitlealignment)
  * BackgroundColor [BurninSubtitleBackgroundColor](#burninsubtitlebackgroundcolor)
  * BackgroundOpacity [__integerMin0Max255](#__integermin0max255)
  * FontColor [BurninSubtitleFontColor](#burninsubtitlefontcolor)
  * FontOpacity **required** [__integerMin0Max255](#__integermin0max255)
  * FontResolution [__integerMin96Max600](#__integermin96max600)
  * FontSize [__integerMin0Max96](#__integermin0max96)
  * OutlineColor **required** [BurninSubtitleOutlineColor](#burninsubtitleoutlinecolor)
  * OutlineSize **required** [__integerMin0Max10](#__integermin0max10)
  * ShadowColor [BurninSubtitleShadowColor](#burninsubtitleshadowcolor)
  * ShadowOpacity [__integerMin0Max255](#__integermin0max255)
  * ShadowXOffset [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * ShadowYOffset [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * TeletextSpacing [BurninSubtitleTeletextSpacing](#burninsubtitleteletextspacing)
  * XPosition [__integerMin0Max2147483647](#__integermin0max2147483647)
  * YPosition [__integerMin0Max2147483647](#__integermin0max2147483647)

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
  * CaptionSelectorName **required** [__stringMin1](#__stringmin1)
  * DestinationSettings **required** [CaptionDestinationSettings](#captiondestinationsettings)
  * LanguageCode [LanguageCode](#languagecode)
  * LanguageDescription [__string](#__string)

### CaptionDescriptionPreset
* CaptionDescriptionPreset `object`: Caption Description for preset
  * DestinationSettings **required** [CaptionDestinationSettings](#captiondestinationsettings)
  * LanguageCode [LanguageCode](#languagecode)
  * LanguageDescription [__string](#__string)

### CaptionDestinationSettings
* CaptionDestinationSettings `object`: Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
  * BurninDestinationSettings [BurninDestinationSettings](#burnindestinationsettings)
  * DestinationType **required** [CaptionDestinationType](#captiondestinationtype)
  * DvbSubDestinationSettings [DvbSubDestinationSettings](#dvbsubdestinationsettings)
  * SccDestinationSettings [SccDestinationSettings](#sccdestinationsettings)
  * TeletextDestinationSettings [TeletextDestinationSettings](#teletextdestinationsettings)
  * TtmlDestinationSettings [TtmlDestinationSettings](#ttmldestinationsettings)

### CaptionDestinationType
* CaptionDestinationType `string` (values: BURN_IN, DVB_SUB, EMBEDDED, SCC, SRT, TELETEXT, TTML, WEBVTT): Type of Caption output, including Burn-In, Embedded, SCC, SRT, TTML, WebVTT, DVB-Sub, Teletext.

### CaptionSelector
* CaptionSelector `object`: Set up captions in your outputs by first selecting them from your input here.
  * LanguageCode [LanguageCode](#languagecode)
  * SourceSettings **required** [CaptionSourceSettings](#captionsourcesettings)

### CaptionSourceSettings
* CaptionSourceSettings `object`: Source settings (SourceSettings) contains the group of settings for captions in the input.
  * AncillarySourceSettings [AncillarySourceSettings](#ancillarysourcesettings)
  * DvbSubSourceSettings [DvbSubSourceSettings](#dvbsubsourcesettings)
  * EmbeddedSourceSettings [EmbeddedSourceSettings](#embeddedsourcesettings)
  * FileSourceSettings [FileSourceSettings](#filesourcesettings)
  * SourceType **required** [CaptionSourceType](#captionsourcetype)
  * TeletextSourceSettings [TeletextSourceSettings](#teletextsourcesettings)

### CaptionSourceType
* CaptionSourceType `string` (values: ANCILLARY, DVB_SUB, EMBEDDED, SCC, TTML, STL, SRT, TELETEXT, NULL_SOURCE): Use Source (SourceType) to identify the format of your input captions.  The service cannot auto-detect caption format.

### ChannelMapping
* ChannelMapping `object`: Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
  * OutputChannels **required** [__listOfOutputChannelMapping](#__listofoutputchannelmapping)

### CmafClientCache
* CmafClientCache `string` (values: DISABLED, ENABLED): When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay.

### CmafCodecSpecification
* CmafCodecSpecification `string` (values: RFC_6381, RFC_4281): Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.

### CmafEncryptionSettings
* CmafEncryptionSettings `object`: Settings for CMAF encryption
  * ConstantInitializationVector [__stringMin32Max32Pattern09aFAF32](#__stringmin32max32pattern09afaf32)
  * EncryptionMethod [CmafEncryptionType](#cmafencryptiontype)
  * InitializationVectorInManifest [CmafInitializationVectorInManifest](#cmafinitializationvectorinmanifest)
  * StaticKeyProvider **required** [StaticKeyProvider](#statickeyprovider)
  * Type **required** [CmafKeyProviderType](#cmafkeyprovidertype)

### CmafEncryptionType
* CmafEncryptionType `string` (values: SAMPLE_AES): Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.

### CmafGroupSettings
* CmafGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS.
  * BaseUrl [__string](#__string)
  * ClientCache [CmafClientCache](#cmafclientcache)
  * CodecSpecification [CmafCodecSpecification](#cmafcodecspecification)
  * Destination [__stringPatternS3](#__stringpatterns3)
  * Encryption [CmafEncryptionSettings](#cmafencryptionsettings)
  * FragmentLength **required** [__integerMin1Max2147483647](#__integermin1max2147483647)
  * ManifestCompression [CmafManifestCompression](#cmafmanifestcompression)
  * ManifestDurationFormat [CmafManifestDurationFormat](#cmafmanifestdurationformat)
  * MinBufferTime [__integerMin0Max2147483647](#__integermin0max2147483647)
  * SegmentControl [CmafSegmentControl](#cmafsegmentcontrol)
  * SegmentLength **required** [__integerMin1Max2147483647](#__integermin1max2147483647)
  * StreamInfResolution [CmafStreamInfResolution](#cmafstreaminfresolution)
  * WriteDashManifest [CmafWriteDASHManifest](#cmafwritedashmanifest)
  * WriteHlsManifest [CmafWriteHLSManifest](#cmafwritehlsmanifest)

### CmafInitializationVectorInManifest
* CmafInitializationVectorInManifest `string` (values: INCLUDE, EXCLUDE): The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.

### CmafKeyProviderType
* CmafKeyProviderType `string` (values: STATIC_KEY): Indicates which type of key provider is used for encryption.

### CmafManifestCompression
* CmafManifestCompression `string` (values: GZIP, NONE): When set to GZIP, compresses HLS playlist.

### CmafManifestDurationFormat
* CmafManifestDurationFormat `string` (values: FLOATING_POINT, INTEGER): Indicates whether the output manifest should use floating point values for segment duration.

### CmafSegmentControl
* CmafSegmentControl `string` (values: SINGLE_FILE, SEGMENTED_FILES): When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.

### CmafStreamInfResolution
* CmafStreamInfResolution `string` (values: INCLUDE, EXCLUDE): Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.

### CmafWriteDASHManifest
* CmafWriteDASHManifest `string` (values: DISABLED, ENABLED): When set to ENABLED, a DASH MPD manifest will be generated for this output.

### CmafWriteHLSManifest
* CmafWriteHLSManifest `string` (values: DISABLED, ENABLED): When set to ENABLED, an Apple HLS manifest will be generated for this output.

### ColorCorrector
* ColorCorrector `object`: Settings for color correction.
  * Brightness [__integerMin1Max100](#__integermin1max100)
  * ColorSpaceConversion [ColorSpaceConversion](#colorspaceconversion)
  * Contrast [__integerMin1Max100](#__integermin1max100)
  * Hdr10Metadata [Hdr10Metadata](#hdr10metadata)
  * Hue [__integerMinNegative180Max180](#__integerminnegative180max180)
  * Saturation [__integerMin1Max100](#__integermin1max100)

### ColorMetadata
* ColorMetadata `string` (values: IGNORE, INSERT): Enable Insert color metadata (ColorMetadata) to include color metadata in this output. This setting is enabled by default.

### ColorSpace
* ColorSpace `string` (values: FOLLOW, REC_601, REC_709, HDR10, HLG_2020): If your input video has accurate color space metadata, or if you don't know about color space, leave this set to the default value FOLLOW. The service will automatically detect your input color space. If your input video has metadata indicating the wrong color space, or if your input video is missing color space metadata that should be there, specify the accurate color space here. If you choose HDR10, you can also correct inaccurate color space coefficients, using the HDR master display information controls. You must also set Color space usage (ColorSpaceUsage) to FORCE for the service to use these values.

### ColorSpaceConversion
* ColorSpaceConversion `string` (values: NONE, FORCE_601, FORCE_709, FORCE_HDR10, FORCE_HLG_2020): Determines if colorspace conversion will be performed. If set to _None_, no conversion will be performed. If _Force 601_ or _Force 709_ are selected, conversion will be performed for inputs with differing colorspaces. An input's colorspace can be specified explicitly in the "Video Selector":#inputs-video_selector if necessary.

### ColorSpaceUsage
* ColorSpaceUsage `string` (values: FORCE, FALLBACK): There are two sources for color metadata, the input file and the job configuration (in the Color space and HDR master display informaiton settings). The Color space usage setting controls which takes precedence. FORCE: The system will use color metadata supplied by user, if any. If the user does not supply color metadata, the system will use data from the source. FALLBACK: The system will use color metadata from the source. If source has no color metadata, the system will use user-supplied color metadata values if available.

### ConflictException
* ConflictException `object`: The service could not complete your request because there is a conflict with the current state of the resource.
  * Message [__string](#__string)

### ContainerSettings
* ContainerSettings `object`: Container specific settings.
  * Container **required** [ContainerType](#containertype)
  * F4vSettings [F4vSettings](#f4vsettings)
  * M2tsSettings [M2tsSettings](#m2tssettings)
  * M3u8Settings [M3u8Settings](#m3u8settings)
  * MovSettings [MovSettings](#movsettings)
  * Mp4Settings [Mp4Settings](#mp4settings)

### ContainerType
* ContainerType `string` (values: F4V, ISMV, M2TS, M3U8, CMFC, MOV, MP4, MPD, MXF, RAW): Container for this output. Some containers require a container settings object. If not specified, the default object will be created.

### CreateJobRequest
* CreateJobRequest `object`
  * ClientRequestToken [__string](#__string)
  * JobTemplate [__string](#__string)
  * Queue [__string](#__string)
  * Role **required** [__string](#__string)
  * Settings **required** [JobSettings](#jobsettings)
  * UserMetadata [__mapOf__string](#__mapof__string)

### CreateJobResponse
* CreateJobResponse `object`
  * Job [Job](#job)

### CreateJobTemplateRequest
* CreateJobTemplateRequest `object`
  * Category [__string](#__string)
  * Description [__string](#__string)
  * Name **required** [__string](#__string)
  * Queue [__string](#__string)
  * Settings **required** [JobTemplateSettings](#jobtemplatesettings)

### CreateJobTemplateResponse
* CreateJobTemplateResponse `object`
  * JobTemplate [JobTemplate](#jobtemplate)

### CreatePresetRequest
* CreatePresetRequest `object`
  * Category [__string](#__string)
  * Description [__string](#__string)
  * Name **required** [__string](#__string)
  * Settings **required** [PresetSettings](#presetsettings)

### CreatePresetResponse
* CreatePresetResponse `object`
  * Preset [Preset](#preset)

### CreateQueueRequest
* CreateQueueRequest `object`
  * Description [__string](#__string)
  * Name **required** [__string](#__string)

### CreateQueueResponse
* CreateQueueResponse `object`
  * Queue [Queue](#queue)

### DashIsoEncryptionSettings
* DashIsoEncryptionSettings `object`: Specifies DRM settings for DASH outputs.
  * SpekeKeyProvider **required** [SpekeKeyProvider](#spekekeyprovider)

### DashIsoGroupSettings
* DashIsoGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
  * BaseUrl [__string](#__string)
  * Destination [__stringPatternS3](#__stringpatterns3)
  * Encryption [DashIsoEncryptionSettings](#dashisoencryptionsettings)
  * FragmentLength **required** [__integerMin1Max2147483647](#__integermin1max2147483647)
  * HbbtvCompliance [DashIsoHbbtvCompliance](#dashisohbbtvcompliance)
  * MinBufferTime [__integerMin0Max2147483647](#__integermin0max2147483647)
  * SegmentControl [DashIsoSegmentControl](#dashisosegmentcontrol)
  * SegmentLength **required** [__integerMin1Max2147483647](#__integermin1max2147483647)

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
  * Endpoints [__listOfEndpoint](#__listofendpoint)
  * NextToken [__string](#__string)

### DropFrameTimecode
* DropFrameTimecode `string` (values: DISABLED, ENABLED): Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.

### DvbNitSettings
* DvbNitSettings `object`: Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
  * NetworkId **required** [__integerMin0Max65535](#__integermin0max65535)
  * NetworkName **required** [__stringMin1Max256](#__stringmin1max256)
  * NitInterval **required** [__integerMin25Max10000](#__integermin25max10000)

### DvbSdtSettings
* DvbSdtSettings `object`: Inserts DVB Service Description Table (NIT) at the specified table repetition interval.
  * OutputSdt [OutputSdt](#outputsdt)
  * SdtInterval [__integerMin25Max2000](#__integermin25max2000)
  * ServiceName [__stringMin1Max256](#__stringmin1max256)
  * ServiceProviderName [__stringMin1Max256](#__stringmin1max256)

### DvbSubDestinationSettings
* DvbSubDestinationSettings `object`: DVB-Sub Destination Settings
  * Alignment **required** [DvbSubtitleAlignment](#dvbsubtitlealignment)
  * BackgroundColor [DvbSubtitleBackgroundColor](#dvbsubtitlebackgroundcolor)
  * BackgroundOpacity [__integerMin0Max255](#__integermin0max255)
  * FontColor [DvbSubtitleFontColor](#dvbsubtitlefontcolor)
  * FontOpacity **required** [__integerMin0Max255](#__integermin0max255)
  * FontResolution [__integerMin96Max600](#__integermin96max600)
  * FontSize [__integerMin0Max96](#__integermin0max96)
  * OutlineColor **required** [DvbSubtitleOutlineColor](#dvbsubtitleoutlinecolor)
  * OutlineSize **required** [__integerMin0Max10](#__integermin0max10)
  * ShadowColor [DvbSubtitleShadowColor](#dvbsubtitleshadowcolor)
  * ShadowOpacity [__integerMin0Max255](#__integermin0max255)
  * ShadowXOffset [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * ShadowYOffset [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * TeletextSpacing [DvbSubtitleTeletextSpacing](#dvbsubtitleteletextspacing)
  * XPosition [__integerMin0Max2147483647](#__integermin0max2147483647)
  * YPosition [__integerMin0Max2147483647](#__integermin0max2147483647)

### DvbSubSourceSettings
* DvbSubSourceSettings `object`: DVB Sub Source Settings
  * Pid [__integerMin1Max2147483647](#__integermin1max2147483647)

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

### DvbTdtSettings
* DvbTdtSettings `object`: Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
  * TdtInterval **required** [__integerMin1000Max30000](#__integermin1000max30000)

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
  * Bitrate [__integerMin64000Max640000](#__integermin64000max640000)
  * BitstreamMode [Eac3BitstreamMode](#eac3bitstreammode)
  * CodingMode [Eac3CodingMode](#eac3codingmode)
  * DcFilter [Eac3DcFilter](#eac3dcfilter)
  * Dialnorm [__integerMin1Max31](#__integermin1max31)
  * DynamicRangeCompressionLine [Eac3DynamicRangeCompressionLine](#eac3dynamicrangecompressionline)
  * DynamicRangeCompressionRf [Eac3DynamicRangeCompressionRf](#eac3dynamicrangecompressionrf)
  * LfeControl [Eac3LfeControl](#eac3lfecontrol)
  * LfeFilter [Eac3LfeFilter](#eac3lfefilter)
  * LoRoCenterMixLevel [__doubleMinNegative60Max3](#__doubleminnegative60max3)
  * LoRoSurroundMixLevel [__doubleMinNegative60MaxNegative1](#__doubleminnegative60maxnegative1)
  * LtRtCenterMixLevel [__doubleMinNegative60Max3](#__doubleminnegative60max3)
  * LtRtSurroundMixLevel [__doubleMinNegative60MaxNegative1](#__doubleminnegative60maxnegative1)
  * MetadataControl [Eac3MetadataControl](#eac3metadatacontrol)
  * PassthroughControl [Eac3PassthroughControl](#eac3passthroughcontrol)
  * PhaseControl [Eac3PhaseControl](#eac3phasecontrol)
  * SampleRate [__integerMin48000Max48000](#__integermin48000max48000)
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
  * Source608ChannelNumber [__integerMin1Max4](#__integermin1max4)
  * Source608TrackNumber [__integerMin1Max1](#__integermin1max1)

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
  * Destination [__stringPatternS3](#__stringpatterns3)

### FileSourceConvert608To708
* FileSourceConvert608To708 `string` (values: UPCONVERT, DISABLED): If set to UPCONVERT, 608 caption data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.

### FileSourceSettings
* FileSourceSettings `object`: Settings for File-based Captions in Source
  * Convert608To708 [FileSourceConvert608To708](#filesourceconvert608to708)
  * SourceFile **required** [__stringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTSmiSMI](#__stringmin14patterns3sccsccttmlttmldfxpdfxpstlstlsrtsrtsmismi)
  * TimeDelta [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)

### ForbiddenException
* ForbiddenException `object`: You don't have permissions for this action with the credentials you sent.
  * Message [__string](#__string)

### FrameCaptureSettings
* FrameCaptureSettings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
  * FramerateDenominator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * FramerateNumerator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * MaxCaptures [__integerMin1Max10000000](#__integermin1max10000000)
  * Quality [__integerMin1Max100](#__integermin1max100)

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
* H264FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the framerate for this output. If you want to keep the same framerate as the input video, choose Follow source. If you want to do framerate conversion, choose a framerate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your framerate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the framerate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Choose SPECIFIED if you want the service to use the framerate you specify in the settings FramerateNumerator and FramerateDenominator.

### H264FramerateConversionAlgorithm
* H264FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE): When set to INTERPOLATE, produces smoother motion during framerate conversion.

### H264GopBReference
* H264GopBReference `string` (values: DISABLED, ENABLED): If enable, use reference B frames for GOP structures that have B frames > 1.

### H264GopSizeUnits
* H264GopSizeUnits `string` (values: FRAMES, SECONDS): Indicates if the GOP Size in H264 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.

### H264InterlaceMode
* H264InterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type, as follows.

### H264ParControl
* H264ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.

### H264QualityTuningLevel
* H264QualityTuningLevel `string` (values: SINGLE_PASS, SINGLE_PASS_HQ, MULTI_PASS_HQ): Use Quality tuning level (H264QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.

### H264RateControlMode
* H264RateControlMode `string` (values: VBR, CBR): Use this setting to specify whether this output has a variable bitrate (VBR) or constant bitrate (CBR).

### H264RepeatPps
* H264RepeatPps `string` (values: DISABLED, ENABLED): Places a PPS header on each encoded picture, even if repeated.

### H264SceneChangeDetect
* H264SceneChangeDetect `string` (values: DISABLED, ENABLED): Scene change detection (inserts I-frames on scene changes).

### H264Settings
* H264Settings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
  * AdaptiveQuantization [H264AdaptiveQuantization](#h264adaptivequantization)
  * Bitrate [__integerMin1000Max1152000000](#__integermin1000max1152000000)
  * CodecLevel [H264CodecLevel](#h264codeclevel)
  * CodecProfile [H264CodecProfile](#h264codecprofile)
  * EntropyEncoding [H264EntropyEncoding](#h264entropyencoding)
  * FieldEncoding [H264FieldEncoding](#h264fieldencoding)
  * FlickerAdaptiveQuantization [H264FlickerAdaptiveQuantization](#h264flickeradaptivequantization)
  * FramerateControl [H264FramerateControl](#h264frameratecontrol)
  * FramerateConversionAlgorithm [H264FramerateConversionAlgorithm](#h264framerateconversionalgorithm)
  * FramerateDenominator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * FramerateNumerator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * GopBReference [H264GopBReference](#h264gopbreference)
  * GopClosedCadence [__integerMin0Max2147483647](#__integermin0max2147483647)
  * GopSize [__doubleMin0](#__doublemin0)
  * GopSizeUnits [H264GopSizeUnits](#h264gopsizeunits)
  * HrdBufferInitialFillPercentage [__integerMin0Max100](#__integermin0max100)
  * HrdBufferSize [__integerMin0Max1152000000](#__integermin0max1152000000)
  * InterlaceMode [H264InterlaceMode](#h264interlacemode)
  * MaxBitrate [__integerMin1000Max1152000000](#__integermin1000max1152000000)
  * MinIInterval [__integerMin0Max30](#__integermin0max30)
  * NumberBFramesBetweenReferenceFrames [__integerMin0Max7](#__integermin0max7)
  * NumberReferenceFrames [__integerMin1Max6](#__integermin1max6)
  * ParControl [H264ParControl](#h264parcontrol)
  * ParDenominator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * ParNumerator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * QualityTuningLevel [H264QualityTuningLevel](#h264qualitytuninglevel)
  * RateControlMode [H264RateControlMode](#h264ratecontrolmode)
  * RepeatPps [H264RepeatPps](#h264repeatpps)
  * SceneChangeDetect [H264SceneChangeDetect](#h264scenechangedetect)
  * Slices [__integerMin1Max32](#__integermin1max32)
  * SlowPal [H264SlowPal](#h264slowpal)
  * Softness [__integerMin0Max128](#__integermin0max128)
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
* H265FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the framerate for this output. If you want to keep the same framerate as the input video, choose Follow source. If you want to do framerate conversion, choose a framerate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your framerate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the framerate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Choose SPECIFIED if you want the service to use the framerate you specify in the settings FramerateNumerator and FramerateDenominator.

### H265FramerateConversionAlgorithm
* H265FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE): When set to INTERPOLATE, produces smoother motion during framerate conversion.

### H265GopBReference
* H265GopBReference `string` (values: DISABLED, ENABLED): If enable, use reference B frames for GOP structures that have B frames > 1.

### H265GopSizeUnits
* H265GopSizeUnits `string` (values: FRAMES, SECONDS): Indicates if the GOP Size in H265 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.

### H265InterlaceMode
* H265InterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.

### H265ParControl
* H265ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.

### H265QualityTuningLevel
* H265QualityTuningLevel `string` (values: SINGLE_PASS, SINGLE_PASS_HQ, MULTI_PASS_HQ): Use Quality tuning level (H265QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.

### H265RateControlMode
* H265RateControlMode `string` (values: VBR, CBR): Use this setting to specify whether this output has a variable bitrate (VBR) or constant bitrate (CBR).

### H265SampleAdaptiveOffsetFilterMode
* H265SampleAdaptiveOffsetFilterMode `string` (values: DEFAULT, ADAPTIVE, OFF): Specify Sample Adaptive Offset (SAO) filter strength.  Adaptive mode dynamically selects best strength based on content

### H265SceneChangeDetect
* H265SceneChangeDetect `string` (values: DISABLED, ENABLED): Scene change detection (inserts I-frames on scene changes).

### H265Settings
* H265Settings `object`: Settings for H265 codec
  * AdaptiveQuantization [H265AdaptiveQuantization](#h265adaptivequantization)
  * AlternateTransferFunctionSei [H265AlternateTransferFunctionSei](#h265alternatetransferfunctionsei)
  * Bitrate [__integerMin1000Max1466400000](#__integermin1000max1466400000)
  * CodecLevel [H265CodecLevel](#h265codeclevel)
  * CodecProfile [H265CodecProfile](#h265codecprofile)
  * FlickerAdaptiveQuantization [H265FlickerAdaptiveQuantization](#h265flickeradaptivequantization)
  * FramerateControl [H265FramerateControl](#h265frameratecontrol)
  * FramerateConversionAlgorithm [H265FramerateConversionAlgorithm](#h265framerateconversionalgorithm)
  * FramerateDenominator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * FramerateNumerator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * GopBReference [H265GopBReference](#h265gopbreference)
  * GopClosedCadence [__integerMin0Max2147483647](#__integermin0max2147483647)
  * GopSize [__doubleMin0](#__doublemin0)
  * GopSizeUnits [H265GopSizeUnits](#h265gopsizeunits)
  * HrdBufferInitialFillPercentage [__integerMin0Max100](#__integermin0max100)
  * HrdBufferSize [__integerMin0Max1466400000](#__integermin0max1466400000)
  * InterlaceMode [H265InterlaceMode](#h265interlacemode)
  * MaxBitrate [__integerMin1000Max1466400000](#__integermin1000max1466400000)
  * MinIInterval [__integerMin0Max30](#__integermin0max30)
  * NumberBFramesBetweenReferenceFrames [__integerMin0Max7](#__integermin0max7)
  * NumberReferenceFrames [__integerMin1Max6](#__integermin1max6)
  * ParControl [H265ParControl](#h265parcontrol)
  * ParDenominator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * ParNumerator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * QualityTuningLevel [H265QualityTuningLevel](#h265qualitytuninglevel)
  * RateControlMode [H265RateControlMode](#h265ratecontrolmode)
  * SampleAdaptiveOffsetFilterMode [H265SampleAdaptiveOffsetFilterMode](#h265sampleadaptiveoffsetfiltermode)
  * SceneChangeDetect [H265SceneChangeDetect](#h265scenechangedetect)
  * Slices [__integerMin1Max32](#__integermin1max32)
  * SlowPal [H265SlowPal](#h265slowpal)
  * SpatialAdaptiveQuantization [H265SpatialAdaptiveQuantization](#h265spatialadaptivequantization)
  * Telecine [H265Telecine](#h265telecine)
  * TemporalAdaptiveQuantization [H265TemporalAdaptiveQuantization](#h265temporaladaptivequantization)
  * TemporalIds [H265TemporalIds](#h265temporalids)
  * Tiles [H265Tiles](#h265tiles)
  * UnregisteredSeiTimecode [H265UnregisteredSeiTimecode](#h265unregisteredseitimecode)
  * WriteMp4PackagingType [H265WriteMp4PackagingType](#h265writemp4packagingtype)

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

### H265WriteMp4PackagingType
* H265WriteMp4PackagingType `string` (values: HVC1, HEV1): If HVC1, output that is H.265 will be marked as HVC1 and adhere to the ISO-IECJTC1-SC29_N13798_Text_ISOIEC_FDIS_14496-15_3rd_E spec which states that parameter set NAL units will be stored in the sample headers but not in the samples directly. If HEV1, then H.265 will be marked as HEV1 and parameter set NAL units will be written into the samples.

### Hdr10Metadata
* Hdr10Metadata `object`: Use the HDR master display (Hdr10Metadata) settings to correct HDR metadata or to provide missing metadata. These values vary depending on the input video and must be provided by a color grader. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that these settings are not color correction. Note that if you are creating HDR outputs inside of an HLS CMAF package, to comply with the Apple specification, you must use the HVC1 for H.265 setting.
  * BluePrimaryX [__integerMin0Max50000](#__integermin0max50000)
  * BluePrimaryY [__integerMin0Max50000](#__integermin0max50000)
  * GreenPrimaryX [__integerMin0Max50000](#__integermin0max50000)
  * GreenPrimaryY [__integerMin0Max50000](#__integermin0max50000)
  * MaxContentLightLevel **required** [__integerMin0Max65535](#__integermin0max65535)
  * MaxFrameAverageLightLevel **required** [__integerMin0Max65535](#__integermin0max65535)
  * MaxLuminance [__integerMin0Max2147483647](#__integermin0max2147483647)
  * MinLuminance [__integerMin0Max2147483647](#__integermin0max2147483647)
  * RedPrimaryX [__integerMin0Max50000](#__integermin0max50000)
  * RedPrimaryY [__integerMin0Max50000](#__integermin0max50000)
  * WhitePointX [__integerMin0Max50000](#__integermin0max50000)
  * WhitePointY [__integerMin0Max50000](#__integermin0max50000)

### HlsAdMarkers
* HlsAdMarkers `string` (values: ELEMENTAL, ELEMENTAL_SCTE35)

### HlsAudioTrackType
* HlsAudioTrackType `string` (values: ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT, ALTERNATE_AUDIO_AUTO_SELECT, ALTERNATE_AUDIO_NOT_AUTO_SELECT, AUDIO_ONLY_VARIANT_STREAM): Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO

### HlsCaptionLanguageMapping
* HlsCaptionLanguageMapping `object`: Caption Language Mapping
  * CaptionChannel [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
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
  * ConstantInitializationVector [__stringMin32Max32Pattern09aFAF32](#__stringmin32max32pattern09afaf32)
  * EncryptionMethod [HlsEncryptionType](#hlsencryptiontype)
  * InitializationVectorInManifest [HlsInitializationVectorInManifest](#hlsinitializationvectorinmanifest)
  * SpekeKeyProvider [SpekeKeyProvider](#spekekeyprovider)
  * StaticKeyProvider [StaticKeyProvider](#statickeyprovider)
  * Type **required** [HlsKeyProviderType](#hlskeyprovidertype)

### HlsEncryptionType
* HlsEncryptionType `string` (values: AES128, SAMPLE_AES): Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.

### HlsGroupSettings
* HlsGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
  * AdMarkers [__listOfHlsAdMarkers](#__listofhlsadmarkers)
  * BaseUrl [__string](#__string)
  * CaptionLanguageMappings [__listOfHlsCaptionLanguageMapping](#__listofhlscaptionlanguagemapping)
  * CaptionLanguageSetting [HlsCaptionLanguageSetting](#hlscaptionlanguagesetting)
  * ClientCache [HlsClientCache](#hlsclientcache)
  * CodecSpecification [HlsCodecSpecification](#hlscodecspecification)
  * Destination [__stringPatternS3](#__stringpatterns3)
  * DirectoryStructure [HlsDirectoryStructure](#hlsdirectorystructure)
  * Encryption [HlsEncryptionSettings](#hlsencryptionsettings)
  * ManifestCompression [HlsManifestCompression](#hlsmanifestcompression)
  * ManifestDurationFormat [HlsManifestDurationFormat](#hlsmanifestdurationformat)
  * MinSegmentLength **required** [__integerMin0Max2147483647](#__integermin0max2147483647)
  * OutputSelection [HlsOutputSelection](#hlsoutputselection)
  * ProgramDateTime [HlsProgramDateTime](#hlsprogramdatetime)
  * ProgramDateTimePeriod [__integerMin0Max3600](#__integermin0max3600)
  * SegmentControl [HlsSegmentControl](#hlssegmentcontrol)
  * SegmentLength **required** [__integerMin1Max2147483647](#__integermin1max2147483647)
  * SegmentsPerSubdirectory [__integerMin1Max2147483647](#__integermin1max2147483647)
  * StreamInfResolution [HlsStreamInfResolution](#hlsstreaminfresolution)
  * TimedMetadataId3Frame [HlsTimedMetadataId3Frame](#hlstimedmetadataid3frame)
  * TimedMetadataId3Period [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * TimestampDeltaMilliseconds [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)

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
* Id3Insertion `object`: To insert ID3 tags in your output, specify two values. Use ID3 tag (Id3) to specify the base 64 encoded string and use Timecode (TimeCode) to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion (Id3Insertion).
  * Id3 **required** [__stringPatternAZaZ0902](#__stringpatternazaz0902)
  * Timecode **required** [__stringPattern010920405090509092](#__stringpattern010920405090509092)

### ImageInserter
* ImageInserter `object`: Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.
  * InsertableImages **required** [__listOfInsertableImage](#__listofinsertableimage)

### Input
* Input `object`: Specifies media input
  * AudioSelectorGroups [__mapOfAudioSelectorGroup](#__mapofaudioselectorgroup)
  * AudioSelectors [__mapOfAudioSelector](#__mapofaudioselector)
  * CaptionSelectors [__mapOfCaptionSelector](#__mapofcaptionselector)
  * DeblockFilter [InputDeblockFilter](#inputdeblockfilter)
  * DenoiseFilter [InputDenoiseFilter](#inputdenoisefilter)
  * FileInput **required** [__stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MM](#__stringpatterns3mm2vvmmppeeggaavviimmpp4ffllvvmmppttmmppggmm4vvttrrppff4vvmm2ttssttss264hh264mmkkvvmmoovvmmttssmm2ttwwmmvvaassffvvoobb3ggpp3ggppppmmxxffddiivvxxxxvviiddrraawwddvvggxxffmm1vv3gg2vvmmffmm3uu8llcchhggxxffmmppeegg2mmxxffmmppeegg2mmxxffhhddwwaavvyy4mm)
  * FilterEnable [InputFilterEnable](#inputfilterenable)
  * FilterStrength [__integerMinNegative5Max5](#__integerminnegative5max5)
  * InputClippings [__listOfInputClipping](#__listofinputclipping)
  * ProgramNumber [__integerMin1Max2147483647](#__integermin1max2147483647)
  * PsiControl [InputPsiControl](#inputpsicontrol)
  * TimecodeSource [InputTimecodeSource](#inputtimecodesource)
  * VideoSelector [VideoSelector](#videoselector)

### InputClipping
* InputClipping `object`: To transcode only portions of your input (clips), include one Input clipping (one instance of InputClipping in the JSON job file) for each input clip. All input clips you specify will be included in every output of the job.
  * EndTimecode [__stringPattern010920405090509092](#__stringpattern010920405090509092)
  * StartTimecode [__stringPattern010920405090509092](#__stringpattern010920405090509092)

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
  * AudioSelectorGroups [__mapOfAudioSelectorGroup](#__mapofaudioselectorgroup)
  * AudioSelectors [__mapOfAudioSelector](#__mapofaudioselector)
  * CaptionSelectors [__mapOfCaptionSelector](#__mapofcaptionselector)
  * DeblockFilter [InputDeblockFilter](#inputdeblockfilter)
  * DenoiseFilter [InputDenoiseFilter](#inputdenoisefilter)
  * FilterEnable [InputFilterEnable](#inputfilterenable)
  * FilterStrength [__integerMinNegative5Max5](#__integerminnegative5max5)
  * InputClippings [__listOfInputClipping](#__listofinputclipping)
  * ProgramNumber [__integerMin1Max2147483647](#__integermin1max2147483647)
  * PsiControl [InputPsiControl](#inputpsicontrol)
  * TimecodeSource [InputTimecodeSource](#inputtimecodesource)
  * VideoSelector [VideoSelector](#videoselector)

### InputTimecodeSource
* InputTimecodeSource `string` (values: EMBEDDED, ZEROBASED, SPECIFIEDSTART): Timecode source under input settings (InputTimecodeSource) only affects the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Use this setting to specify whether the service counts frames by timecodes embedded in the video (EMBEDDED) or by starting the first frame at zero (ZEROBASED). In both cases, the timecode format is HH:MM:SS:FF or HH:MM:SS;FF, where FF is the frame number. Only set this to EMBEDDED if your source video has embedded timecodes.

### InsertableImage
* InsertableImage `object`: Settings for Insertable Image
  * Duration [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * FadeIn [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * FadeOut [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * Height [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * ImageInserterInput **required** [__stringMin14PatternS3BmpBMPPngPNGTgaTGA](#__stringmin14patterns3bmpbmppngpngtgatga)
  * ImageX **required** [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * ImageY **required** [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * Layer **required** [__integerMin0Max99](#__integermin0max99)
  * Opacity **required** [__integerMin0Max100](#__integermin0max100)
  * StartTime [__stringPattern01D20305D205D](#__stringpattern01d20305d205d)
  * Width [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)

### InternalServerErrorException
* InternalServerErrorException `object`: The service encountered an unexpected condition and cannot fulfill your request.
  * Message [__string](#__string)

### Job
* Job `object`: Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
  * Arn [__string](#__string)
  * CreatedAt [__timestampIso8601](#__timestampiso8601)
  * ErrorCode [__integer](#__integer)
  * ErrorMessage [__string](#__string)
  * Id [__string](#__string)
  * JobTemplate [__string](#__string)
  * OutputGroupDetails [__listOfOutputGroupDetail](#__listofoutputgroupdetail)
  * Queue [__string](#__string)
  * Role **required** [__string](#__string)
  * Settings **required** [JobSettings](#jobsettings)
  * Status [JobStatus](#jobstatus)
  * Timing [Timing](#timing)
  * UserMetadata [__mapOf__string](#__mapof__string)

### JobSettings
* JobSettings `object`: JobSettings contains all the transcode settings for a job.
  * AdAvailOffset [__integerMinNegative1000Max1000](#__integerminnegative1000max1000)
  * AvailBlanking [AvailBlanking](#availblanking)
  * Inputs **required** [__listOfInput](#__listofinput)
  * NielsenConfiguration [NielsenConfiguration](#nielsenconfiguration)
  * OutputGroups **required** [__listOfOutputGroup](#__listofoutputgroup)
  * TimecodeConfig [TimecodeConfig](#timecodeconfig)
  * TimedMetadataInsertion [TimedMetadataInsertion](#timedmetadatainsertion)

### JobStatus
* JobStatus `string` (values: SUBMITTED, PROGRESSING, COMPLETE, CANCELED, ERROR): A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.

### JobTemplate
* JobTemplate `object`: A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
  * Arn [__string](#__string)
  * Category [__string](#__string)
  * CreatedAt [__timestampIso8601](#__timestampiso8601)
  * Description [__string](#__string)
  * LastUpdated [__timestampIso8601](#__timestampiso8601)
  * Name **required** [__string](#__string)
  * Queue [__string](#__string)
  * Settings **required** [JobTemplateSettings](#jobtemplatesettings)
  * Type [Type](#type)

### JobTemplateListBy
* JobTemplateListBy `string` (values: NAME, CREATION_DATE, SYSTEM): Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.

### JobTemplateSettings
* JobTemplateSettings `object`: JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
  * AdAvailOffset [__integerMinNegative1000Max1000](#__integerminnegative1000max1000)
  * AvailBlanking [AvailBlanking](#availblanking)
  * Inputs [__listOfInputTemplate](#__listofinputtemplate)
  * NielsenConfiguration [NielsenConfiguration](#nielsenconfiguration)
  * OutputGroups **required** [__listOfOutputGroup](#__listofoutputgroup)
  * TimecodeConfig [TimecodeConfig](#timecodeconfig)
  * TimedMetadataInsertion [TimedMetadataInsertion](#timedmetadatainsertion)

### LanguageCode
* LanguageCode `string` (values: ENG, SPA, FRA, DEU, GER, ZHO, ARA, HIN, JPN, RUS, POR, ITA, URD, VIE, KOR, PAN, ABK, AAR, AFR, AKA, SQI, AMH, ARG, HYE, ASM, AVA, AVE, AYM, AZE, BAM, BAK, EUS, BEL, BEN, BIH, BIS, BOS, BRE, BUL, MYA, CAT, KHM, CHA, CHE, NYA, CHU, CHV, COR, COS, CRE, HRV, CES, DAN, DIV, NLD, DZO, ENM, EPO, EST, EWE, FAO, FIJ, FIN, FRM, FUL, GLA, GLG, LUG, KAT, ELL, GRN, GUJ, HAT, HAU, HEB, HER, HMO, HUN, ISL, IDO, IBO, IND, INA, ILE, IKU, IPK, GLE, JAV, KAL, KAN, KAU, KAS, KAZ, KIK, KIN, KIR, KOM, KON, KUA, KUR, LAO, LAT, LAV, LIM, LIN, LIT, LUB, LTZ, MKD, MLG, MSA, MAL, MLT, GLV, MRI, MAR, MAH, MON, NAU, NAV, NDE, NBL, NDO, NEP, SME, NOR, NOB, NNO, OCI, OJI, ORI, ORM, OSS, PLI, FAS, POL, PUS, QUE, QAA, RON, ROH, RUN, SMO, SAG, SAN, SRD, SRB, SNA, III, SND, SIN, SLK, SLV, SOM, SOT, SUN, SWA, SSW, SWE, TGL, TAH, TGK, TAM, TAT, TEL, THA, BOD, TIR, TON, TSO, TSN, TUR, TUK, TWI, UIG, UKR, UZB, VEN, VOL, WLN, CYM, FRY, WOL, XHO, YID, YOR, ZHA, ZUL, ORJ, QPC, TNG): Code to specify the language, following the specification "ISO 639-2 three-digit code":http://www.loc.gov/standards/iso639-2/

### ListJobTemplatesRequest
* ListJobTemplatesRequest `object`

### ListJobTemplatesResponse
* ListJobTemplatesResponse `object`
  * JobTemplates [__listOfJobTemplate](#__listofjobtemplate)
  * NextToken [__string](#__string)

### ListJobsRequest
* ListJobsRequest `object`

### ListJobsResponse
* ListJobsResponse `object`
  * Jobs [__listOfJob](#__listofjob)
  * NextToken [__string](#__string)

### ListPresetsRequest
* ListPresetsRequest `object`

### ListPresetsResponse
* ListPresetsResponse `object`
  * NextToken [__string](#__string)
  * Presets [__listOfPreset](#__listofpreset)

### ListQueuesRequest
* ListQueuesRequest `object`

### ListQueuesResponse
* ListQueuesResponse `object`
  * NextToken [__string](#__string)
  * Queues [__listOfQueue](#__listofqueue)

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

### M2tsNielsenId3
* M2tsNielsenId3 `string` (values: INSERT, NONE): If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.

### M2tsPcrControl
* M2tsPcrControl `string` (values: PCR_EVERY_PES_PACKET, CONFIGURED_PCR_PERIOD): When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream.

### M2tsRateMode
* M2tsRateMode `string` (values: VBR, CBR): When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate.

### M2tsScte35Source
* M2tsScte35Source `string` (values: PASSTHROUGH, NONE): Enables SCTE-35 passthrough (scte35Source) to pass any SCTE-35 signals from input to output.

### M2tsSegmentationMarkers
* M2tsSegmentationMarkers `string` (values: NONE, RAI_SEGSTART, RAI_ADAPT, PSI_SEGSTART, EBP, EBP_LEGACY): Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.

### M2tsSegmentationStyle
* M2tsSegmentationStyle `string` (values: MAINTAIN_CADENCE, RESET_CADENCE): The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule.

### M2tsSettings
* M2tsSettings `object`: Settings for M2TS Container.
  * AudioBufferModel [M2tsAudioBufferModel](#m2tsaudiobuffermodel)
  * AudioFramesPerPes [__integerMin0Max2147483647](#__integermin0max2147483647)
  * AudioPids [__listOf__integerMin32Max8182](#__listof__integermin32max8182)
  * Bitrate [__integerMin0Max2147483647](#__integermin0max2147483647)
  * BufferModel [M2tsBufferModel](#m2tsbuffermodel)
  * DvbNitSettings [DvbNitSettings](#dvbnitsettings)
  * DvbSdtSettings [DvbSdtSettings](#dvbsdtsettings)
  * DvbSubPids [__listOf__integerMin32Max8182](#__listof__integermin32max8182)
  * DvbTdtSettings [DvbTdtSettings](#dvbtdtsettings)
  * DvbTeletextPid [__integerMin32Max8182](#__integermin32max8182)
  * EbpAudioInterval [M2tsEbpAudioInterval](#m2tsebpaudiointerval)
  * EbpPlacement [M2tsEbpPlacement](#m2tsebpplacement)
  * EsRateInPes [M2tsEsRateInPes](#m2tsesrateinpes)
  * FragmentTime [__doubleMin0](#__doublemin0)
  * MaxPcrInterval [__integerMin0Max500](#__integermin0max500)
  * MinEbpInterval [__integerMin0Max10000](#__integermin0max10000)
  * NielsenId3 [M2tsNielsenId3](#m2tsnielsenid3)
  * NullPacketBitrate [__doubleMin0](#__doublemin0)
  * PatInterval [__integerMin0Max1000](#__integermin0max1000)
  * PcrControl [M2tsPcrControl](#m2tspcrcontrol)
  * PcrPid [__integerMin32Max8182](#__integermin32max8182)
  * PmtInterval [__integerMin0Max1000](#__integermin0max1000)
  * PmtPid [__integerMin32Max8182](#__integermin32max8182)
  * PrivateMetadataPid [__integerMin32Max8182](#__integermin32max8182)
  * ProgramNumber [__integerMin0Max65535](#__integermin0max65535)
  * RateMode [M2tsRateMode](#m2tsratemode)
  * Scte35Pid [__integerMin32Max8182](#__integermin32max8182)
  * Scte35Source [M2tsScte35Source](#m2tsscte35source)
  * SegmentationMarkers [M2tsSegmentationMarkers](#m2tssegmentationmarkers)
  * SegmentationStyle [M2tsSegmentationStyle](#m2tssegmentationstyle)
  * SegmentationTime [__doubleMin0](#__doublemin0)
  * TimedMetadataPid [__integerMin32Max8182](#__integermin32max8182)
  * TransportStreamId [__integerMin0Max65535](#__integermin0max65535)
  * VideoPid [__integerMin32Max8182](#__integermin32max8182)

### M3u8NielsenId3
* M3u8NielsenId3 `string` (values: INSERT, NONE): If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.

### M3u8PcrControl
* M3u8PcrControl `string` (values: PCR_EVERY_PES_PACKET, CONFIGURED_PCR_PERIOD): When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.

### M3u8Scte35Source
* M3u8Scte35Source `string` (values: PASSTHROUGH, NONE): Enables SCTE-35 passthrough (scte35Source) to pass any SCTE-35 signals from input to output.

### M3u8Settings
* M3u8Settings `object`: Settings for TS segments in HLS
  * AudioFramesPerPes [__integerMin0Max2147483647](#__integermin0max2147483647)
  * AudioPids [__listOf__integerMin32Max8182](#__listof__integermin32max8182)
  * NielsenId3 [M3u8NielsenId3](#m3u8nielsenid3)
  * PatInterval [__integerMin0Max1000](#__integermin0max1000)
  * PcrControl [M3u8PcrControl](#m3u8pcrcontrol)
  * PcrPid [__integerMin32Max8182](#__integermin32max8182)
  * PmtInterval [__integerMin0Max1000](#__integermin0max1000)
  * PmtPid [__integerMin32Max8182](#__integermin32max8182)
  * PrivateMetadataPid [__integerMin32Max8182](#__integermin32max8182)
  * ProgramNumber [__integerMin0Max65535](#__integermin0max65535)
  * Scte35Pid [__integerMin32Max8182](#__integermin32max8182)
  * Scte35Source [M3u8Scte35Source](#m3u8scte35source)
  * TimedMetadata [TimedMetadata](#timedmetadata)
  * TimedMetadataPid [__integerMin32Max8182](#__integermin32max8182)
  * TransportStreamId [__integerMin0Max65535](#__integermin0max65535)
  * VideoPid [__integerMin32Max8182](#__integermin32max8182)

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
  * Bitrate [__integerMin32000Max384000](#__integermin32000max384000)
  * Channels [__integerMin1Max2](#__integermin1max2)
  * SampleRate [__integerMin32000Max48000](#__integermin32000max48000)

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
* Mpeg2FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the framerate for this output. If you want to keep the same framerate as the input video, choose Follow source. If you want to do framerate conversion, choose a framerate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your framerate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the framerate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Choose SPECIFIED if you want the service to use the framerate you specify in the settings FramerateNumerator and FramerateDenominator.

### Mpeg2FramerateConversionAlgorithm
* Mpeg2FramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE): When set to INTERPOLATE, produces smoother motion during framerate conversion.

### Mpeg2GopSizeUnits
* Mpeg2GopSizeUnits `string` (values: FRAMES, SECONDS): Indicates if the GOP Size in MPEG2 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.

### Mpeg2InterlaceMode
* Mpeg2InterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.

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
  * Bitrate [__integerMin1000Max288000000](#__integermin1000max288000000)
  * CodecLevel [Mpeg2CodecLevel](#mpeg2codeclevel)
  * CodecProfile [Mpeg2CodecProfile](#mpeg2codecprofile)
  * FramerateControl [Mpeg2FramerateControl](#mpeg2frameratecontrol)
  * FramerateConversionAlgorithm [Mpeg2FramerateConversionAlgorithm](#mpeg2framerateconversionalgorithm)
  * FramerateDenominator [__integerMin1Max1001](#__integermin1max1001)
  * FramerateNumerator [__integerMin24Max60000](#__integermin24max60000)
  * GopClosedCadence [__integerMin0Max2147483647](#__integermin0max2147483647)
  * GopSize [__doubleMin0](#__doublemin0)
  * GopSizeUnits [Mpeg2GopSizeUnits](#mpeg2gopsizeunits)
  * HrdBufferInitialFillPercentage [__integerMin0Max100](#__integermin0max100)
  * HrdBufferSize [__integerMin0Max47185920](#__integermin0max47185920)
  * InterlaceMode [Mpeg2InterlaceMode](#mpeg2interlacemode)
  * IntraDcPrecision [Mpeg2IntraDcPrecision](#mpeg2intradcprecision)
  * MaxBitrate [__integerMin1000Max300000000](#__integermin1000max300000000)
  * MinIInterval [__integerMin0Max30](#__integermin0max30)
  * NumberBFramesBetweenReferenceFrames [__integerMin0Max7](#__integermin0max7)
  * ParControl [Mpeg2ParControl](#mpeg2parcontrol)
  * ParDenominator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * ParNumerator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * QualityTuningLevel [Mpeg2QualityTuningLevel](#mpeg2qualitytuninglevel)
  * RateControlMode [Mpeg2RateControlMode](#mpeg2ratecontrolmode)
  * SceneChangeDetect [Mpeg2SceneChangeDetect](#mpeg2scenechangedetect)
  * SlowPal [Mpeg2SlowPal](#mpeg2slowpal)
  * Softness [__integerMin0Max128](#__integermin0max128)
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
  * SpekeKeyProvider **required** [SpekeKeyProvider](#spekekeyprovider)

### MsSmoothGroupSettings
* MsSmoothGroupSettings `object`: Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
  * AudioDeduplication [MsSmoothAudioDeduplication](#mssmoothaudiodeduplication)
  * Destination [__stringPatternS3](#__stringpatterns3)
  * Encryption [MsSmoothEncryptionSettings](#mssmoothencryptionsettings)
  * FragmentLength **required** [__integerMin1Max2147483647](#__integermin1max2147483647)
  * ManifestEncoding [MsSmoothManifestEncoding](#mssmoothmanifestencoding)

### MsSmoothManifestEncoding
* MsSmoothManifestEncoding `string` (values: UTF8, UTF16): Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.

### NielsenConfiguration
* NielsenConfiguration `object`: Settings for Nielsen Configuration
  * BreakoutCode [__integerMin0Max9](#__integermin0max9)
  * DistributorId [__string](#__string)

### NoiseReducer
* NoiseReducer `object`: Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer (NoiseReducer), you must also select a value for Noise reducer filter (NoiseReducerFilter).
  * Filter **required** [NoiseReducerFilter](#noisereducerfilter)
  * FilterSettings [NoiseReducerFilterSettings](#noisereducerfiltersettings)
  * SpatialFilterSettings [NoiseReducerSpatialFilterSettings](#noisereducerspatialfiltersettings)

### NoiseReducerFilter
* NoiseReducerFilter `string` (values: BILATERAL, MEAN, GAUSSIAN, LANCZOS, SHARPEN, CONSERVE, SPATIAL): Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral is an edge preserving noise reduction filter. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) are convolution filters. * Conserve is a min/max noise reduction filter. * Spatial is a frequency-domain filter based on JND principles.

### NoiseReducerFilterSettings
* NoiseReducerFilterSettings `object`: Settings for a noise reducer filter
  * Strength [__integerMin0Max3](#__integermin0max3)

### NoiseReducerSpatialFilterSettings
* NoiseReducerSpatialFilterSettings `object`: Noise reducer filter settings for spatial filter.
  * PostFilterSharpenStrength [__integerMin0Max3](#__integermin0max3)
  * Speed [__integerMinNegative2Max3](#__integerminnegative2max3)
  * Strength [__integerMin0Max16](#__integermin0max16)

### NotFoundException
* NotFoundException `object`: The resource you requested does not exist.
  * Message [__string](#__string)

### Order
* Order `string` (values: ASCENDING, DESCENDING): When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.

### Output
* Output `object`: An output object describes the settings for a single output file or stream in an output group.
  * AudioDescriptions [__listOfAudioDescription](#__listofaudiodescription)
  * CaptionDescriptions [__listOfCaptionDescription](#__listofcaptiondescription)
  * ContainerSettings [ContainerSettings](#containersettings)
  * Extension [__string](#__string)
  * NameModifier [__stringMin1](#__stringmin1)
  * OutputSettings [OutputSettings](#outputsettings)
  * Preset [__stringMin0](#__stringmin0)
  * VideoDescription [VideoDescription](#videodescription)

### OutputChannelMapping
* OutputChannelMapping `object`: OutputChannel mapping settings.
  * InputChannels **required** [__listOf__integerMinNegative60Max6](#__listof__integerminnegative60max6)

### OutputDetail
* OutputDetail `object`: Details regarding output
  * DurationInMs [__integer](#__integer)
  * VideoDetails [VideoDetail](#videodetail)

### OutputGroup
* OutputGroup `object`: Group of outputs
  * CustomName [__string](#__string)
  * Name [__string](#__string)
  * OutputGroupSettings **required** [OutputGroupSettings](#outputgroupsettings)
  * Outputs **required** [__listOfOutput](#__listofoutput)

### OutputGroupDetail
* OutputGroupDetail `object`: Contains details about the output groups specified in the job settings.
  * OutputDetails [__listOfOutputDetail](#__listofoutputdetail)

### OutputGroupSettings
* OutputGroupSettings `object`: Output Group settings, including type
  * CmafGroupSettings [CmafGroupSettings](#cmafgroupsettings)
  * DashIsoGroupSettings [DashIsoGroupSettings](#dashisogroupsettings)
  * FileGroupSettings [FileGroupSettings](#filegroupsettings)
  * HlsGroupSettings [HlsGroupSettings](#hlsgroupsettings)
  * MsSmoothGroupSettings [MsSmoothGroupSettings](#mssmoothgroupsettings)
  * Type **required** [OutputGroupType](#outputgrouptype)

### OutputGroupType
* OutputGroupType `string` (values: HLS_GROUP_SETTINGS, DASH_ISO_GROUP_SETTINGS, FILE_GROUP_SETTINGS, MS_SMOOTH_GROUP_SETTINGS, CMAF_GROUP_SETTINGS): Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)

### OutputSdt
* OutputSdt `string` (values: SDT_FOLLOW, SDT_FOLLOW_IF_PRESENT, SDT_MANUAL, SDT_NONE): Selects method of inserting SDT information into output stream.  "Follow input SDT" copies SDT information from input stream to  output stream. "Follow input SDT if present" copies SDT information from  input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT  Manually" means user will enter the SDT information. "No SDT" means output  stream will not contain SDT information.

### OutputSettings
* OutputSettings `object`: Specific settings for this type of output.
  * HlsSettings [HlsSettings](#hlssettings)

### Preset
* Preset `object`: A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
  * Arn [__string](#__string)
  * Category [__string](#__string)
  * CreatedAt [__timestampIso8601](#__timestampiso8601)
  * Description [__string](#__string)
  * LastUpdated [__timestampIso8601](#__timestampiso8601)
  * Name **required** [__string](#__string)
  * Settings **required** [PresetSettings](#presetsettings)
  * Type [Type](#type)

### PresetListBy
* PresetListBy `string` (values: NAME, CREATION_DATE, SYSTEM): Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.

### PresetSettings
* PresetSettings `object`: Settings for preset
  * AudioDescriptions [__listOfAudioDescription](#__listofaudiodescription)
  * CaptionDescriptions [__listOfCaptionDescriptionPreset](#__listofcaptiondescriptionpreset)
  * ContainerSettings [ContainerSettings](#containersettings)
  * VideoDescription [VideoDescription](#videodescription)

### ProresCodecProfile
* ProresCodecProfile `string` (values: APPLE_PRORES_422, APPLE_PRORES_422_HQ, APPLE_PRORES_422_LT, APPLE_PRORES_422_PROXY): Use Profile (ProResCodecProfile) to specifiy the type of Apple ProRes codec to use for this output.

### ProresFramerateControl
* ProresFramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): If you are using the console, use the Framerate setting to specify the framerate for this output. If you want to keep the same framerate as the input video, choose Follow source. If you want to do framerate conversion, choose a framerate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your framerate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the framerate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the framerate from the input. Choose SPECIFIED if you want the service to use the framerate you specify in the settings FramerateNumerator and FramerateDenominator.

### ProresFramerateConversionAlgorithm
* ProresFramerateConversionAlgorithm `string` (values: DUPLICATE_DROP, INTERPOLATE): When set to INTERPOLATE, produces smoother motion during framerate conversion.

### ProresInterlaceMode
* ProresInterlaceMode `string` (values: PROGRESSIVE, TOP_FIELD, BOTTOM_FIELD, FOLLOW_TOP_FIELD, FOLLOW_BOTTOM_FIELD): Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.

### ProresParControl
* ProresParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Use (ProresParControl) to specify how the service determines the pixel aspect ratio. Set to Follow source (INITIALIZE_FROM_SOURCE) to use the pixel aspect ratio from the input.  To specify a different pixel aspect ratio: Using the console, choose it from the dropdown menu. Using the API, set ProresParControl to (SPECIFIED) and provide  for (ParNumerator) and (ParDenominator).

### ProresSettings
* ProresSettings `object`: Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
  * CodecProfile [ProresCodecProfile](#prorescodecprofile)
  * FramerateControl [ProresFramerateControl](#proresframeratecontrol)
  * FramerateConversionAlgorithm [ProresFramerateConversionAlgorithm](#proresframerateconversionalgorithm)
  * FramerateDenominator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * FramerateNumerator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * InterlaceMode [ProresInterlaceMode](#proresinterlacemode)
  * ParControl [ProresParControl](#proresparcontrol)
  * ParDenominator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * ParNumerator [__integerMin1Max2147483647](#__integermin1max2147483647)
  * SlowPal [ProresSlowPal](#proresslowpal)
  * Telecine [ProresTelecine](#prorestelecine)

### ProresSlowPal
* ProresSlowPal `string` (values: DISABLED, ENABLED): Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.

### ProresTelecine
* ProresTelecine `string` (values: NONE, HARD): Only use Telecine (ProresTelecine) when you set Framerate (Framerate) to 29.970. Set Telecine (ProresTelecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.

### Queue
* Queue `object`: MediaConvert jobs are submitted to a queue. Unless specified otherwise jobs are submitted to a built-in default queue. User can create additional queues to separate the jobs of different categories or priority.
  * Arn [__string](#__string)
  * CreatedAt [__timestampIso8601](#__timestampiso8601)
  * Description [__string](#__string)
  * LastUpdated [__timestampIso8601](#__timestampiso8601)
  * Name **required** [__string](#__string)
  * Status [QueueStatus](#queuestatus)
  * Type [Type](#type)

### QueueListBy
* QueueListBy `string` (values: NAME, CREATION_DATE): Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.

### QueueStatus
* QueueStatus `string` (values: ACTIVE, PAUSED): Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue will not begin. Jobs running when a queue is paused continue to run until they finish or error out.

### Rectangle
* Rectangle `object`: Use Rectangle to identify a specific area of the video frame.
  * Height **required** [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * Width **required** [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * X **required** [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)
  * Y **required** [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)

### RemixSettings
* RemixSettings `object`: Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides.
  * ChannelMapping **required** [ChannelMapping](#channelmapping)
  * ChannelsIn **required** [__integerMin1Max16](#__integermin1max16)
  * ChannelsOut **required** [__integerMin1Max8](#__integermin1max8)

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
  * ResourceId **required** [__string](#__string)
  * SystemIds **required** [__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__listof__stringpattern09afaf809afaf409afaf409afaf409afaf12)
  * Url **required** [__stringPatternHttps](#__stringpatternhttps)

### StaticKeyProvider
* StaticKeyProvider `object`: Settings for use with a SPEKE key provider.
  * KeyFormat [__stringPatternIdentityAZaZ26AZaZ09163](#__stringpatternidentityazaz26azaz09163)
  * KeyFormatVersions [__stringPatternDD](#__stringpatterndd)
  * StaticKeyValue **required** [__stringPatternAZaZ0932](#__stringpatternazaz0932)
  * Url **required** [__string](#__string)

### TeletextDestinationSettings
* TeletextDestinationSettings `object`: Settings for Teletext caption output
  * PageNumber [__stringMin3Max3Pattern1809aFAF09aEAE](#__stringmin3max3pattern1809afaf09aeae)

### TeletextSourceSettings
* TeletextSourceSettings `object`: Settings specific to Teletext caption sources, including Page number.
  * PageNumber [__stringMin3Max3Pattern1809aFAF09aEAE](#__stringmin3max3pattern1809afaf09aeae)

### TimecodeBurnin
* TimecodeBurnin `object`: Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output.
  * FontSize [__integerMin10Max48](#__integermin10max48)
  * Position [TimecodeBurninPosition](#timecodeburninposition)
  * Prefix [__stringPattern](#__stringpattern)

### TimecodeBurninPosition
* TimecodeBurninPosition `string` (values: TOP_CENTER, TOP_LEFT, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT): Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video.

### TimecodeConfig
* TimecodeConfig `object`: These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
  * Anchor [__stringPattern010920405090509092](#__stringpattern010920405090509092)
  * Source [TimecodeSource](#timecodesource)
  * Start [__stringPattern010920405090509092](#__stringpattern010920405090509092)
  * TimestampOffset [__stringPattern0940191020191209301](#__stringpattern0940191020191209301)

### TimecodeSource
* TimecodeSource `string` (values: EMBEDDED, ZEROBASED, SPECIFIEDSTART): Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value.

### TimedMetadata
* TimedMetadata `string` (values: PASSTHROUGH, NONE): Applies only to HLS outputs. Use this setting to specify whether the service inserts the ID3 timed metadata from the input in this output.

### TimedMetadataInsertion
* TimedMetadataInsertion `object`: Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
  * Id3Insertions **required** [__listOfId3Insertion](#__listofid3insertion)

### Timing
* Timing `object`: Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
  * FinishTime [__timestampIso8601](#__timestampiso8601)
  * StartTime [__timestampIso8601](#__timestampiso8601)
  * SubmitTime [__timestampIso8601](#__timestampiso8601)

### TooManyRequestsException
* TooManyRequestsException `object`: Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
  * Message [__string](#__string)

### TtmlDestinationSettings
* TtmlDestinationSettings `object`: Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough).
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
  * Codec **required** [VideoCodec](#videocodec)
  * FrameCaptureSettings [FrameCaptureSettings](#framecapturesettings)
  * H264Settings [H264Settings](#h264settings)
  * H265Settings [H265Settings](#h265settings)
  * Mpeg2Settings [Mpeg2Settings](#mpeg2settings)
  * ProresSettings [ProresSettings](#proressettings)

### VideoDescription
* VideoDescription `object`: Settings for video outputs
  * AfdSignaling [AfdSignaling](#afdsignaling)
  * AntiAlias [AntiAlias](#antialias)
  * CodecSettings **required** [VideoCodecSettings](#videocodecsettings)
  * ColorMetadata [ColorMetadata](#colormetadata)
  * Crop [Rectangle](#rectangle)
  * DropFrameTimecode [DropFrameTimecode](#dropframetimecode)
  * FixedAfd [__integerMin0Max15](#__integermin0max15)
  * Height [__integerMin32Max2160](#__integermin32max2160)
  * Position [Rectangle](#rectangle)
  * RespondToAfd [RespondToAfd](#respondtoafd)
  * ScalingBehavior [ScalingBehavior](#scalingbehavior)
  * Sharpness [__integerMin0Max100](#__integermin0max100)
  * TimecodeInsertion [VideoTimecodeInsertion](#videotimecodeinsertion)
  * VideoPreprocessors [VideoPreprocessor](#videopreprocessor)
  * Width [__integerMin32Max4096](#__integermin32max4096)

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
  * Pid [__integerMin1Max2147483647](#__integermin1max2147483647)
  * ProgramNumber [__integerMinNegative2147483648Max2147483647](#__integerminnegative2147483648max2147483647)

### VideoTimecodeInsertion
* VideoTimecodeInsertion `string` (values: DISABLED, PIC_TIMING_SEI): Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input framerate is identical to the output framerate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does.

### WavFormat
* WavFormat `string` (values: RIFF, RF64): The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64.

### WavSettings
* WavSettings `object`: Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
  * BitDepth [__integerMin16Max24](#__integermin16max24)
  * Channels [__integerMin1Max8](#__integermin1max8)
  * Format [WavFormat](#wavformat)
  * SampleRate [__integerMin8000Max192000](#__integermin8000max192000)

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __doubleMin0
* __doubleMin0 `number`

### __doubleMinNegative59Max0
* __doubleMinNegative59Max0 `number`

### __doubleMinNegative60Max3
* __doubleMinNegative60Max3 `number`

### __doubleMinNegative60MaxNegative1
* __doubleMinNegative60MaxNegative1 `number`

### __integer
* __integer `integer`

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

### __integerMin0Max3600
* __integerMin0Max3600 `integer`

### __integerMin0Max47185920
* __integerMin0Max47185920 `integer`

### __integerMin0Max500
* __integerMin0Max500 `integer`

### __integerMin0Max50000
* __integerMin0Max50000 `integer`

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

### __integerMin10Max48
* __integerMin10Max48 `integer`

### __integerMin16Max24
* __integerMin16Max24 `integer`

### __integerMin1Max1
* __integerMin1Max1 `integer`

### __integerMin1Max100
* __integerMin1Max100 `integer`

### __integerMin1Max10000000
* __integerMin1Max10000000 `integer`

### __integerMin1Max1001
* __integerMin1Max1001 `integer`

### __integerMin1Max16
* __integerMin1Max16 `integer`

### __integerMin1Max2
* __integerMin1Max2 `integer`

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

### __integerMin1Max8
* __integerMin1Max8 `integer`

### __integerMin24Max60000
* __integerMin24Max60000 `integer`

### __integerMin25Max10000
* __integerMin25Max10000 `integer`

### __integerMin25Max2000
* __integerMin25Max2000 `integer`

### __integerMin32000Max384000
* __integerMin32000Max384000 `integer`

### __integerMin32000Max48000
* __integerMin32000Max48000 `integer`

### __integerMin32Max2160
* __integerMin32Max2160 `integer`

### __integerMin32Max4096
* __integerMin32Max4096 `integer`

### __integerMin32Max8182
* __integerMin32Max8182 `integer`

### __integerMin48000Max48000
* __integerMin48000Max48000 `integer`

### __integerMin6000Max1024000
* __integerMin6000Max1024000 `integer`

### __integerMin64000Max640000
* __integerMin64000Max640000 `integer`

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

### __integerMinNegative2147483648Max2147483647
* __integerMinNegative2147483648Max2147483647 `integer`

### __integerMinNegative2Max3
* __integerMinNegative2Max3 `integer`

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

### __listOfEndpoint
* __listOfEndpoint `array`
  * items [Endpoint](#endpoint)

### __listOfHlsAdMarkers
* __listOfHlsAdMarkers `array`
  * items [HlsAdMarkers](#hlsadmarkers)

### __listOfHlsCaptionLanguageMapping
* __listOfHlsCaptionLanguageMapping `array`
  * items [HlsCaptionLanguageMapping](#hlscaptionlanguagemapping)

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

### __listOf__integerMin1Max2147483647
* __listOf__integerMin1Max2147483647 `array`
  * items [__integerMin1Max2147483647](#__integermin1max2147483647)

### __listOf__integerMin32Max8182
* __listOf__integerMin32Max8182 `array`
  * items [__integerMin32Max8182](#__integermin32max8182)

### __listOf__integerMinNegative60Max6
* __listOf__integerMinNegative60Max6 `array`
  * items [__integerMinNegative60Max6](#__integerminnegative60max6)

### __listOf__stringMin1
* __listOf__stringMin1 `array`
  * items [__stringMin1](#__stringmin1)

### __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12
* __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 `array`
  * items [__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12](#__stringpattern09afaf809afaf409afaf409afaf409afaf12)

### __long
* __long `integer`

### __mapOfAudioSelector
* __mapOfAudioSelector `array`
  * items `object`
    * key [__string](#__string)
    * value [AudioSelector](#audioselector)

### __mapOfAudioSelectorGroup
* __mapOfAudioSelectorGroup `array`
  * items `object`
    * key [__string](#__string)
    * value [AudioSelectorGroup](#audioselectorgroup)

### __mapOfCaptionSelector
* __mapOfCaptionSelector `array`
  * items `object`
    * key [__string](#__string)
    * value [CaptionSelector](#captionselector)

### __mapOf__string
* __mapOf__string `array`
  * items `object`
    * key [__string](#__string)
    * value [__string](#__string)

### __string
* __string `string`

### __stringMin0
* __stringMin0 `string`

### __stringMin1
* __stringMin1 `string`

### __stringMin14PatternS3BmpBMPPngPNG
* __stringMin14PatternS3BmpBMPPngPNG `string`

### __stringMin14PatternS3BmpBMPPngPNGTgaTGA
* __stringMin14PatternS3BmpBMPPngPNGTgaTGA `string`

### __stringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTSmiSMI
* __stringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTSmiSMI `string`

### __stringMin1Max256
* __stringMin1Max256 `string`

### __stringMin32Max32Pattern09aFAF32
* __stringMin32Max32Pattern09aFAF32 `string`

### __stringMin3Max3Pattern1809aFAF09aEAE
* __stringMin3Max3Pattern1809aFAF09aEAE `string`

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

### __stringPatternAZaZ0902
* __stringPatternAZaZ0902 `string`

### __stringPatternAZaZ0932
* __stringPatternAZaZ0932 `string`

### __stringPatternDD
* __stringPatternDD `string`

### __stringPatternHttps
* __stringPatternHttps `string`

### __stringPatternIdentityAZaZ26AZaZ09163
* __stringPatternIdentityAZaZ26AZaZ09163 `string`

### __stringPatternS3
* __stringPatternS3 `string`

### __stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MM
* __stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MM `string`

### __stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE
* __stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE `string`

### __stringPatternWS
* __stringPatternWS `string`

### __timestampIso8601
* __timestampIso8601 `string`

### __timestampUnix
* __timestampUnix `string`


