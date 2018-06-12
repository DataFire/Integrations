# @datafire/amazonaws_medialive

Client library for AWS Elemental MediaLive

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_medialive
```
```js
let amazonaws_medialive = require('@datafire/amazonaws_medialive').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_medialive.ListChannels({}).then(data => {
  console.log(data);
});
```

## Description

API for AWS Elemental MediaLive

## Actions

### ListChannels



```js
amazonaws_medialive.ListChannels({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListChannelsResponse](#listchannelsresponse)

### CreateChannel



```js
amazonaws_medialive.CreateChannel({}, context)
```

#### Input
* input `object`
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * RequestId [__string](#__string)
  * Reserved [__string](#__string)
  * RoleArn [__string](#__string)

#### Output
*Output schema unknown*

### DeleteChannel



```js
amazonaws_medialive.DeleteChannel({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`

#### Output
* output [DeleteChannelResponse](#deletechannelresponse)

### DescribeChannel



```js
amazonaws_medialive.DescribeChannel({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`

#### Output
* output [DescribeChannelResponse](#describechannelresponse)

### UpdateChannel



```js
amazonaws_medialive.UpdateChannel({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * RoleArn [__string](#__string)

#### Output
* output [UpdateChannelResponse](#updatechannelresponse)

### StartChannel



```js
amazonaws_medialive.StartChannel({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`

#### Output
* output [StartChannelResponse](#startchannelresponse)

### StopChannel



```js
amazonaws_medialive.StopChannel({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`

#### Output
* output [StopChannelResponse](#stopchannelresponse)

### ListInputSecurityGroups



```js
amazonaws_medialive.ListInputSecurityGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListInputSecurityGroupsResponse](#listinputsecuritygroupsresponse)

### CreateInputSecurityGroup



```js
amazonaws_medialive.CreateInputSecurityGroup({}, context)
```

#### Input
* input `object`
  * WhitelistRules [__listOfInputWhitelistRuleCidr](#__listofinputwhitelistrulecidr)

#### Output
* output [CreateInputSecurityGroupResponse](#createinputsecuritygroupresponse)

### DeleteInputSecurityGroup



```js
amazonaws_medialive.DeleteInputSecurityGroup({
  "inputSecurityGroupId": ""
}, context)
```

#### Input
* input `object`
  * inputSecurityGroupId **required** `string`

#### Output
* output [DeleteInputSecurityGroupResponse](#deleteinputsecuritygroupresponse)

### DescribeInputSecurityGroup



```js
amazonaws_medialive.DescribeInputSecurityGroup({
  "inputSecurityGroupId": ""
}, context)
```

#### Input
* input `object`
  * inputSecurityGroupId **required** `string`

#### Output
* output [DescribeInputSecurityGroupResponse](#describeinputsecuritygroupresponse)

### UpdateInputSecurityGroup



```js
amazonaws_medialive.UpdateInputSecurityGroup({
  "inputSecurityGroupId": ""
}, context)
```

#### Input
* input `object`
  * inputSecurityGroupId **required** `string`
  * WhitelistRules [__listOfInputWhitelistRuleCidr](#__listofinputwhitelistrulecidr)

#### Output
* output [UpdateInputSecurityGroupResponse](#updateinputsecuritygroupresponse)

### ListInputs



```js
amazonaws_medialive.ListInputs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListInputsResponse](#listinputsresponse)

### CreateInput



```js
amazonaws_medialive.CreateInput({}, context)
```

#### Input
* input `object`
  * Destinations [__listOfInputDestinationRequest](#__listofinputdestinationrequest)
  * InputSecurityGroups [__listOf__string](#__listof__string)
  * Name [__string](#__string)
  * RequestId [__string](#__string)
  * Sources [__listOfInputSourceRequest](#__listofinputsourcerequest)
  * Type [InputType](#inputtype)

#### Output
*Output schema unknown*

### DeleteInput



```js
amazonaws_medialive.DeleteInput({
  "inputId": ""
}, context)
```

#### Input
* input `object`
  * inputId **required** `string`

#### Output
* output [DeleteInputResponse](#deleteinputresponse)

### DescribeInput



```js
amazonaws_medialive.DescribeInput({
  "inputId": ""
}, context)
```

#### Input
* input `object`
  * inputId **required** `string`

#### Output
* output [DescribeInputResponse](#describeinputresponse)

### UpdateInput



```js
amazonaws_medialive.UpdateInput({
  "inputId": ""
}, context)
```

#### Input
* input `object`
  * inputId **required** `string`
  * Destinations [__listOfInputDestinationRequest](#__listofinputdestinationrequest)
  * InputSecurityGroups [__listOf__string](#__listof__string)
  * Name [__string](#__string)
  * Sources [__listOfInputSourceRequest](#__listofinputsourcerequest)

#### Output
* output [UpdateInputResponse](#updateinputresponse)



## Definitions

### AacCodingMode
* AacCodingMode `string` (values: AD_RECEIVER_MIX, CODING_MODE_1_0, CODING_MODE_1_1, CODING_MODE_2_0, CODING_MODE_5_1): Placeholder documentation for AacCodingMode

### AacInputType
* AacInputType `string` (values: BROADCASTER_MIXED_AD, NORMAL): Placeholder documentation for AacInputType

### AacProfile
* AacProfile `string` (values: HEV1, HEV2, LC): Placeholder documentation for AacProfile

### AacRateControlMode
* AacRateControlMode `string` (values: CBR, VBR): Placeholder documentation for AacRateControlMode

### AacRawFormat
* AacRawFormat `string` (values: LATM_LOAS, NONE): Placeholder documentation for AacRawFormat

### AacSettings
* AacSettings `object`: Placeholder documentation for AacSettings
  * Bitrate [__double](#__double)
  * CodingMode [AacCodingMode](#aaccodingmode)
  * InputType [AacInputType](#aacinputtype)
  * Profile [AacProfile](#aacprofile)
  * RateControlMode [AacRateControlMode](#aacratecontrolmode)
  * RawFormat [AacRawFormat](#aacrawformat)
  * SampleRate [__double](#__double)
  * Spec [AacSpec](#aacspec)
  * VbrQuality [AacVbrQuality](#aacvbrquality)

### AacSpec
* AacSpec `string` (values: MPEG2, MPEG4): Placeholder documentation for AacSpec

### AacVbrQuality
* AacVbrQuality `string` (values: HIGH, LOW, MEDIUM_HIGH, MEDIUM_LOW): Placeholder documentation for AacVbrQuality

### Ac3BitstreamMode
* Ac3BitstreamMode `string` (values: COMMENTARY, COMPLETE_MAIN, DIALOGUE, EMERGENCY, HEARING_IMPAIRED, MUSIC_AND_EFFECTS, VISUALLY_IMPAIRED, VOICE_OVER): Placeholder documentation for Ac3BitstreamMode

### Ac3CodingMode
* Ac3CodingMode `string` (values: CODING_MODE_1_0, CODING_MODE_1_1, CODING_MODE_2_0, CODING_MODE_3_2_LFE): Placeholder documentation for Ac3CodingMode

### Ac3DrcProfile
* Ac3DrcProfile `string` (values: FILM_STANDARD, NONE): Placeholder documentation for Ac3DrcProfile

### Ac3LfeFilter
* Ac3LfeFilter `string` (values: DISABLED, ENABLED): Placeholder documentation for Ac3LfeFilter

### Ac3MetadataControl
* Ac3MetadataControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Placeholder documentation for Ac3MetadataControl

### Ac3Settings
* Ac3Settings `object`: Placeholder documentation for Ac3Settings
  * Bitrate [__double](#__double)
  * BitstreamMode [Ac3BitstreamMode](#ac3bitstreammode)
  * CodingMode [Ac3CodingMode](#ac3codingmode)
  * Dialnorm [__integerMin1Max31](#__integermin1max31)
  * DrcProfile [Ac3DrcProfile](#ac3drcprofile)
  * LfeFilter [Ac3LfeFilter](#ac3lfefilter)
  * MetadataControl [Ac3MetadataControl](#ac3metadatacontrol)

### AccessDenied
* AccessDenied `object`: Placeholder documentation for AccessDenied
  * Message [__string](#__string)

### AfdSignaling
* AfdSignaling `string` (values: AUTO, FIXED, NONE): Placeholder documentation for AfdSignaling

### ArchiveContainerSettings
* ArchiveContainerSettings `object`: Placeholder documentation for ArchiveContainerSettings
  * M2tsSettings [M2tsSettings](#m2tssettings)

### ArchiveGroupSettings
* ArchiveGroupSettings `object`: Placeholder documentation for ArchiveGroupSettings
  * Destination **required** [OutputLocationRef](#outputlocationref)
  * RolloverInterval [__integerMin1](#__integermin1)

### ArchiveOutputSettings
* ArchiveOutputSettings `object`: Placeholder documentation for ArchiveOutputSettings
  * ContainerSettings **required** [ArchiveContainerSettings](#archivecontainersettings)
  * Extension [__string](#__string)
  * NameModifier [__string](#__string)

### AribDestinationSettings
* AribDestinationSettings `object`: Placeholder documentation for AribDestinationSettings

### AribSourceSettings
* AribSourceSettings `object`: Placeholder documentation for AribSourceSettings

### AudioChannelMapping
* AudioChannelMapping `object`: Placeholder documentation for AudioChannelMapping
  * InputChannelLevels **required** [__listOfInputChannelLevel](#__listofinputchannellevel)
  * OutputChannel **required** [__integerMin0Max7](#__integermin0max7)

### AudioCodecSettings
* AudioCodecSettings `object`: Placeholder documentation for AudioCodecSettings
  * AacSettings [AacSettings](#aacsettings)
  * Ac3Settings [Ac3Settings](#ac3settings)
  * Eac3Settings [Eac3Settings](#eac3settings)
  * Mp2Settings [Mp2Settings](#mp2settings)
  * PassThroughSettings [PassThroughSettings](#passthroughsettings)

### AudioDescription
* AudioDescription `object`: Placeholder documentation for AudioDescription
  * AudioNormalizationSettings [AudioNormalizationSettings](#audionormalizationsettings)
  * AudioSelectorName **required** [__string](#__string)
  * AudioType [AudioType](#audiotype)
  * AudioTypeControl [AudioDescriptionAudioTypeControl](#audiodescriptionaudiotypecontrol)
  * CodecSettings [AudioCodecSettings](#audiocodecsettings)
  * LanguageCode [__stringMin3Max3](#__stringmin3max3)
  * LanguageCodeControl [AudioDescriptionLanguageCodeControl](#audiodescriptionlanguagecodecontrol)
  * Name **required** [__string](#__string)
  * RemixSettings [RemixSettings](#remixsettings)
  * StreamName [__string](#__string)

### AudioDescriptionAudioTypeControl
* AudioDescriptionAudioTypeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Placeholder documentation for AudioDescriptionAudioTypeControl

### AudioDescriptionLanguageCodeControl
* AudioDescriptionLanguageCodeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Placeholder documentation for AudioDescriptionLanguageCodeControl

### AudioLanguageSelection
* AudioLanguageSelection `object`: Placeholder documentation for AudioLanguageSelection
  * LanguageCode **required** [__string](#__string)
  * LanguageSelectionPolicy [AudioLanguageSelectionPolicy](#audiolanguageselectionpolicy)

### AudioLanguageSelectionPolicy
* AudioLanguageSelectionPolicy `string` (values: LOOSE, STRICT): Placeholder documentation for AudioLanguageSelectionPolicy

### AudioNormalizationAlgorithm
* AudioNormalizationAlgorithm `string` (values: ITU_1770_1, ITU_1770_2): Placeholder documentation for AudioNormalizationAlgorithm

### AudioNormalizationAlgorithmControl
* AudioNormalizationAlgorithmControl `string` (values: CORRECT_AUDIO): Placeholder documentation for AudioNormalizationAlgorithmControl

### AudioNormalizationSettings
* AudioNormalizationSettings `object`: Placeholder documentation for AudioNormalizationSettings
  * Algorithm [AudioNormalizationAlgorithm](#audionormalizationalgorithm)
  * AlgorithmControl [AudioNormalizationAlgorithmControl](#audionormalizationalgorithmcontrol)
  * TargetLkfs [__doubleMinNegative59Max0](#__doubleminnegative59max0)

### AudioOnlyHlsSettings
* AudioOnlyHlsSettings `object`: Placeholder documentation for AudioOnlyHlsSettings
  * AudioGroupId [__string](#__string)
  * AudioOnlyImage [InputLocation](#inputlocation)
  * AudioTrackType [AudioOnlyHlsTrackType](#audioonlyhlstracktype)

### AudioOnlyHlsTrackType
* AudioOnlyHlsTrackType `string` (values: ALTERNATE_AUDIO_AUTO_SELECT, ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT, ALTERNATE_AUDIO_NOT_AUTO_SELECT, AUDIO_ONLY_VARIANT_STREAM): Placeholder documentation for AudioOnlyHlsTrackType

### AudioPidSelection
* AudioPidSelection `object`: Placeholder documentation for AudioPidSelection
  * Pid **required** [__integerMin0Max8191](#__integermin0max8191)

### AudioSelector
* AudioSelector `object`: Placeholder documentation for AudioSelector
  * Name **required** [__string](#__string)
  * SelectorSettings [AudioSelectorSettings](#audioselectorsettings)

### AudioSelectorSettings
* AudioSelectorSettings `object`: Placeholder documentation for AudioSelectorSettings
  * AudioLanguageSelection [AudioLanguageSelection](#audiolanguageselection)
  * AudioPidSelection [AudioPidSelection](#audiopidselection)

### AudioType
* AudioType `string` (values: CLEAN_EFFECTS, HEARING_IMPAIRED, UNDEFINED, VISUAL_IMPAIRED_COMMENTARY): Placeholder documentation for AudioType

### AuthenticationScheme
* AuthenticationScheme `string` (values: AKAMAI, COMMON): Placeholder documentation for AuthenticationScheme

### AvailBlanking
* AvailBlanking `object`: Placeholder documentation for AvailBlanking
  * AvailBlankingImage [InputLocation](#inputlocation)
  * State [AvailBlankingState](#availblankingstate)

### AvailBlankingState
* AvailBlankingState `string` (values: DISABLED, ENABLED): Placeholder documentation for AvailBlankingState

### AvailConfiguration
* AvailConfiguration `object`: Placeholder documentation for AvailConfiguration
  * AvailSettings [AvailSettings](#availsettings)

### AvailSettings
* AvailSettings `object`: Placeholder documentation for AvailSettings
  * Scte35SpliceInsert [Scte35SpliceInsert](#scte35spliceinsert)
  * Scte35TimeSignalApos [Scte35TimeSignalApos](#scte35timesignalapos)

### BadGatewayException
* BadGatewayException `object`: Placeholder documentation for BadGatewayException
  * Message [__string](#__string)

### BadRequestException
* BadRequestException `object`: Placeholder documentation for BadRequestException
  * Message [__string](#__string)

### BlackoutSlate
* BlackoutSlate `object`: Placeholder documentation for BlackoutSlate
  * BlackoutSlateImage [InputLocation](#inputlocation)
  * NetworkEndBlackout [BlackoutSlateNetworkEndBlackout](#blackoutslatenetworkendblackout)
  * NetworkEndBlackoutImage [InputLocation](#inputlocation)
  * NetworkId [__stringMin34Max34](#__stringmin34max34)
  * State [BlackoutSlateState](#blackoutslatestate)

### BlackoutSlateNetworkEndBlackout
* BlackoutSlateNetworkEndBlackout `string` (values: DISABLED, ENABLED): Placeholder documentation for BlackoutSlateNetworkEndBlackout

### BlackoutSlateState
* BlackoutSlateState `string` (values: DISABLED, ENABLED): Placeholder documentation for BlackoutSlateState

### BurnInAlignment
* BurnInAlignment `string` (values: CENTERED, LEFT, SMART): Placeholder documentation for BurnInAlignment

### BurnInBackgroundColor
* BurnInBackgroundColor `string` (values: BLACK, NONE, WHITE): Placeholder documentation for BurnInBackgroundColor

### BurnInDestinationSettings
* BurnInDestinationSettings `object`: Placeholder documentation for BurnInDestinationSettings
  * Alignment [BurnInAlignment](#burninalignment)
  * BackgroundColor [BurnInBackgroundColor](#burninbackgroundcolor)
  * BackgroundOpacity [__integerMin0Max255](#__integermin0max255)
  * Font [InputLocation](#inputlocation)
  * FontColor [BurnInFontColor](#burninfontcolor)
  * FontOpacity [__integerMin0Max255](#__integermin0max255)
  * FontResolution [__integerMin96Max600](#__integermin96max600)
  * FontSize [__string](#__string)
  * OutlineColor [BurnInOutlineColor](#burninoutlinecolor)
  * OutlineSize [__integerMin0Max10](#__integermin0max10)
  * ShadowColor [BurnInShadowColor](#burninshadowcolor)
  * ShadowOpacity [__integerMin0Max255](#__integermin0max255)
  * ShadowXOffset [__integer](#__integer)
  * ShadowYOffset [__integer](#__integer)
  * TeletextGridControl [BurnInTeletextGridControl](#burninteletextgridcontrol)
  * XPosition [__integerMin0](#__integermin0)
  * YPosition [__integerMin0](#__integermin0)

### BurnInFontColor
* BurnInFontColor `string` (values: BLACK, BLUE, GREEN, RED, WHITE, YELLOW): Placeholder documentation for BurnInFontColor

### BurnInOutlineColor
* BurnInOutlineColor `string` (values: BLACK, BLUE, GREEN, RED, WHITE, YELLOW): Placeholder documentation for BurnInOutlineColor

### BurnInShadowColor
* BurnInShadowColor `string` (values: BLACK, NONE, WHITE): Placeholder documentation for BurnInShadowColor

### BurnInTeletextGridControl
* BurnInTeletextGridControl `string` (values: FIXED, SCALED): Placeholder documentation for BurnInTeletextGridControl

### CaptionDescription
* CaptionDescription `object`: Output groups for this Live Event. Output groups contain information about where streams should be distributed.
  * CaptionSelectorName **required** [__string](#__string)
  * DestinationSettings [CaptionDestinationSettings](#captiondestinationsettings)
  * LanguageCode [__string](#__string)
  * LanguageDescription [__string](#__string)
  * Name **required** [__string](#__string)

### CaptionDestinationSettings
* CaptionDestinationSettings `object`: Placeholder documentation for CaptionDestinationSettings
  * AribDestinationSettings [AribDestinationSettings](#aribdestinationsettings)
  * BurnInDestinationSettings [BurnInDestinationSettings](#burnindestinationsettings)
  * DvbSubDestinationSettings [DvbSubDestinationSettings](#dvbsubdestinationsettings)
  * EmbeddedDestinationSettings [EmbeddedDestinationSettings](#embeddeddestinationsettings)
  * EmbeddedPlusScte20DestinationSettings [EmbeddedPlusScte20DestinationSettings](#embeddedplusscte20destinationsettings)
  * RtmpCaptionInfoDestinationSettings [RtmpCaptionInfoDestinationSettings](#rtmpcaptioninfodestinationsettings)
  * Scte20PlusEmbeddedDestinationSettings [Scte20PlusEmbeddedDestinationSettings](#scte20plusembeddeddestinationsettings)
  * Scte27DestinationSettings [Scte27DestinationSettings](#scte27destinationsettings)
  * SmpteTtDestinationSettings [SmpteTtDestinationSettings](#smptettdestinationsettings)
  * TeletextDestinationSettings [TeletextDestinationSettings](#teletextdestinationsettings)
  * TtmlDestinationSettings [TtmlDestinationSettings](#ttmldestinationsettings)
  * WebvttDestinationSettings [WebvttDestinationSettings](#webvttdestinationsettings)

### CaptionLanguageMapping
* CaptionLanguageMapping `object`: Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
  * CaptionChannel **required** [__integerMin1Max4](#__integermin1max4)
  * LanguageCode **required** [__stringMin3Max3](#__stringmin3max3)
  * LanguageDescription **required** [__stringMin1](#__stringmin1)

### CaptionSelector
* CaptionSelector `object`: Output groups for this Live Event. Output groups contain information about where streams should be distributed.
  * LanguageCode [__string](#__string)
  * Name **required** [__string](#__string)
  * SelectorSettings [CaptionSelectorSettings](#captionselectorsettings)

### CaptionSelectorSettings
* CaptionSelectorSettings `object`: Placeholder documentation for CaptionSelectorSettings
  * AribSourceSettings [AribSourceSettings](#aribsourcesettings)
  * DvbSubSourceSettings [DvbSubSourceSettings](#dvbsubsourcesettings)
  * EmbeddedSourceSettings [EmbeddedSourceSettings](#embeddedsourcesettings)
  * Scte20SourceSettings [Scte20SourceSettings](#scte20sourcesettings)
  * Scte27SourceSettings [Scte27SourceSettings](#scte27sourcesettings)
  * TeletextSourceSettings [TeletextSourceSettings](#teletextsourcesettings)

### Channel
* Channel `object`: Placeholder documentation for Channel
  * Arn [__string](#__string)
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EgressEndpoints [__listOfChannelEgressEndpoint](#__listofchannelegressendpoint)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * Id [__string](#__string)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * PipelinesRunningCount [__integer](#__integer)
  * RoleArn [__string](#__string)
  * State [ChannelState](#channelstate)

### ChannelConfigurationValidationError
* ChannelConfigurationValidationError `object`: Placeholder documentation for ChannelConfigurationValidationError
  * Message [__string](#__string)
  * ValidationErrors [__listOfValidationError](#__listofvalidationerror)

### ChannelEgressEndpoint
* ChannelEgressEndpoint `object`: Placeholder documentation for ChannelEgressEndpoint
  * SourceIp [__string](#__string)

### ChannelState
* ChannelState `string` (values: CREATING, CREATE_FAILED, IDLE, STARTING, RUNNING, RECOVERING, STOPPING, DELETING, DELETED): Placeholder documentation for ChannelState

### ChannelSummary
* ChannelSummary `object`: Placeholder documentation for ChannelSummary
  * Arn [__string](#__string)
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EgressEndpoints [__listOfChannelEgressEndpoint](#__listofchannelegressendpoint)
  * Id [__string](#__string)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * PipelinesRunningCount [__integer](#__integer)
  * RoleArn [__string](#__string)
  * State [ChannelState](#channelstate)

### ConflictException
* ConflictException `object`: Placeholder documentation for ConflictException
  * Message [__string](#__string)

### CreateChannel
* CreateChannel `object`: Placeholder documentation for CreateChannel
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * RequestId [__string](#__string)
  * Reserved [__string](#__string)
  * RoleArn [__string](#__string)

### CreateChannelRequest
* CreateChannelRequest `object`: A request to create a channel
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * RequestId [__string](#__string)
  * Reserved [__string](#__string)
  * RoleArn [__string](#__string)

### CreateChannelResponse
* CreateChannelResponse `object`: Placeholder documentation for CreateChannelResponse
  * Channel [Channel](#channel)

### CreateChannelResultModel
* CreateChannelResultModel `object`: Placeholder documentation for CreateChannelResultModel
  * Channel [Channel](#channel)

### CreateInput
* CreateInput `object`: Placeholder documentation for CreateInput
  * Destinations [__listOfInputDestinationRequest](#__listofinputdestinationrequest)
  * InputSecurityGroups [__listOf__string](#__listof__string)
  * Name [__string](#__string)
  * RequestId [__string](#__string)
  * Sources [__listOfInputSourceRequest](#__listofinputsourcerequest)
  * Type [InputType](#inputtype)

### CreateInputRequest
* CreateInputRequest `object`: The name of the input
  * Destinations [__listOfInputDestinationRequest](#__listofinputdestinationrequest)
  * InputSecurityGroups [__listOf__string](#__listof__string)
  * Name [__string](#__string)
  * RequestId [__string](#__string)
  * Sources [__listOfInputSourceRequest](#__listofinputsourcerequest)
  * Type [InputType](#inputtype)

### CreateInputResponse
* CreateInputResponse `object`: Placeholder documentation for CreateInputResponse
  * Input [Input](#input)

### CreateInputResultModel
* CreateInputResultModel `object`: Placeholder documentation for CreateInputResultModel
  * Input [Input](#input)

### CreateInputSecurityGroupRequest
* CreateInputSecurityGroupRequest `object`: The IPv4 CIDRs to whitelist for this Input Security Group
  * WhitelistRules [__listOfInputWhitelistRuleCidr](#__listofinputwhitelistrulecidr)

### CreateInputSecurityGroupResponse
* CreateInputSecurityGroupResponse `object`: Placeholder documentation for CreateInputSecurityGroupResponse
  * SecurityGroup [InputSecurityGroup](#inputsecuritygroup)

### CreateInputSecurityGroupResultModel
* CreateInputSecurityGroupResultModel `object`: Placeholder documentation for CreateInputSecurityGroupResultModel
  * SecurityGroup [InputSecurityGroup](#inputsecuritygroup)

### DeleteChannelRequest
* DeleteChannelRequest `object`: Placeholder documentation for DeleteChannelRequest

### DeleteChannelResponse
* DeleteChannelResponse `object`: Placeholder documentation for DeleteChannelResponse
  * Arn [__string](#__string)
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EgressEndpoints [__listOfChannelEgressEndpoint](#__listofchannelegressendpoint)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * Id [__string](#__string)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * PipelinesRunningCount [__integer](#__integer)
  * RoleArn [__string](#__string)
  * State [ChannelState](#channelstate)

### DeleteInputRequest
* DeleteInputRequest `object`: Placeholder documentation for DeleteInputRequest

### DeleteInputResponse
* DeleteInputResponse `object`: Placeholder documentation for DeleteInputResponse

### DeleteInputSecurityGroupRequest
* DeleteInputSecurityGroupRequest `object`: Placeholder documentation for DeleteInputSecurityGroupRequest

### DeleteInputSecurityGroupResponse
* DeleteInputSecurityGroupResponse `object`: Placeholder documentation for DeleteInputSecurityGroupResponse

### DescribeChannelRequest
* DescribeChannelRequest `object`: Placeholder documentation for DescribeChannelRequest

### DescribeChannelResponse
* DescribeChannelResponse `object`: Placeholder documentation for DescribeChannelResponse
  * Arn [__string](#__string)
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EgressEndpoints [__listOfChannelEgressEndpoint](#__listofchannelegressendpoint)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * Id [__string](#__string)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * PipelinesRunningCount [__integer](#__integer)
  * RoleArn [__string](#__string)
  * State [ChannelState](#channelstate)

### DescribeInputRequest
* DescribeInputRequest `object`: Placeholder documentation for DescribeInputRequest

### DescribeInputResponse
* DescribeInputResponse `object`: Placeholder documentation for DescribeInputResponse
  * Arn [__string](#__string)
  * AttachedChannels [__listOf__string](#__listof__string)
  * Destinations [__listOfInputDestination](#__listofinputdestination)
  * Id [__string](#__string)
  * Name [__string](#__string)
  * SecurityGroups [__listOf__string](#__listof__string)
  * Sources [__listOfInputSource](#__listofinputsource)
  * State [InputState](#inputstate)
  * Type [InputType](#inputtype)

### DescribeInputSecurityGroupRequest
* DescribeInputSecurityGroupRequest `object`: Placeholder documentation for DescribeInputSecurityGroupRequest

### DescribeInputSecurityGroupResponse
* DescribeInputSecurityGroupResponse `object`: Placeholder documentation for DescribeInputSecurityGroupResponse
  * Arn [__string](#__string)
  * Id [__string](#__string)
  * Inputs [__listOf__string](#__listof__string)
  * State [InputSecurityGroupState](#inputsecuritygroupstate)
  * WhitelistRules [__listOfInputWhitelistRule](#__listofinputwhitelistrule)

### DvbNitSettings
* DvbNitSettings `object`: DVB Network Information Table (NIT)
  * NetworkId **required** [__integerMin0Max65536](#__integermin0max65536)
  * NetworkName **required** [__stringMin1Max256](#__stringmin1max256)
  * RepInterval [__integerMin25Max10000](#__integermin25max10000)

### DvbSdtOutputSdt
* DvbSdtOutputSdt `string` (values: SDT_FOLLOW, SDT_FOLLOW_IF_PRESENT, SDT_MANUAL, SDT_NONE): Placeholder documentation for DvbSdtOutputSdt

### DvbSdtSettings
* DvbSdtSettings `object`: DVB Service Description Table (SDT)
  * OutputSdt [DvbSdtOutputSdt](#dvbsdtoutputsdt)
  * RepInterval [__integerMin25Max2000](#__integermin25max2000)
  * ServiceName [__stringMin1Max256](#__stringmin1max256)
  * ServiceProviderName [__stringMin1Max256](#__stringmin1max256)

### DvbSubDestinationAlignment
* DvbSubDestinationAlignment `string` (values: CENTERED, LEFT, SMART): Placeholder documentation for DvbSubDestinationAlignment

### DvbSubDestinationBackgroundColor
* DvbSubDestinationBackgroundColor `string` (values: BLACK, NONE, WHITE): Placeholder documentation for DvbSubDestinationBackgroundColor

### DvbSubDestinationFontColor
* DvbSubDestinationFontColor `string` (values: BLACK, BLUE, GREEN, RED, WHITE, YELLOW): Placeholder documentation for DvbSubDestinationFontColor

### DvbSubDestinationOutlineColor
* DvbSubDestinationOutlineColor `string` (values: BLACK, BLUE, GREEN, RED, WHITE, YELLOW): Placeholder documentation for DvbSubDestinationOutlineColor

### DvbSubDestinationSettings
* DvbSubDestinationSettings `object`: Placeholder documentation for DvbSubDestinationSettings
  * Alignment [DvbSubDestinationAlignment](#dvbsubdestinationalignment)
  * BackgroundColor [DvbSubDestinationBackgroundColor](#dvbsubdestinationbackgroundcolor)
  * BackgroundOpacity [__integerMin0Max255](#__integermin0max255)
  * Font [InputLocation](#inputlocation)
  * FontColor [DvbSubDestinationFontColor](#dvbsubdestinationfontcolor)
  * FontOpacity [__integerMin0Max255](#__integermin0max255)
  * FontResolution [__integerMin96Max600](#__integermin96max600)
  * FontSize [__string](#__string)
  * OutlineColor [DvbSubDestinationOutlineColor](#dvbsubdestinationoutlinecolor)
  * OutlineSize [__integerMin0Max10](#__integermin0max10)
  * ShadowColor [DvbSubDestinationShadowColor](#dvbsubdestinationshadowcolor)
  * ShadowOpacity [__integerMin0Max255](#__integermin0max255)
  * ShadowXOffset [__integer](#__integer)
  * ShadowYOffset [__integer](#__integer)
  * TeletextGridControl [DvbSubDestinationTeletextGridControl](#dvbsubdestinationteletextgridcontrol)
  * XPosition [__integerMin0](#__integermin0)
  * YPosition [__integerMin0](#__integermin0)

### DvbSubDestinationShadowColor
* DvbSubDestinationShadowColor `string` (values: BLACK, NONE, WHITE): Placeholder documentation for DvbSubDestinationShadowColor

### DvbSubDestinationTeletextGridControl
* DvbSubDestinationTeletextGridControl `string` (values: FIXED, SCALED): Placeholder documentation for DvbSubDestinationTeletextGridControl

### DvbSubSourceSettings
* DvbSubSourceSettings `object`: Placeholder documentation for DvbSubSourceSettings
  * Pid [__integerMin1](#__integermin1)

### DvbTdtSettings
* DvbTdtSettings `object`: DVB Time and Date Table (SDT)
  * RepInterval [__integerMin1000Max30000](#__integermin1000max30000)

### Eac3AttenuationControl
* Eac3AttenuationControl `string` (values: ATTENUATE_3_DB, NONE): Placeholder documentation for Eac3AttenuationControl

### Eac3BitstreamMode
* Eac3BitstreamMode `string` (values: COMMENTARY, COMPLETE_MAIN, EMERGENCY, HEARING_IMPAIRED, VISUALLY_IMPAIRED): Placeholder documentation for Eac3BitstreamMode

### Eac3CodingMode
* Eac3CodingMode `string` (values: CODING_MODE_1_0, CODING_MODE_2_0, CODING_MODE_3_2): Placeholder documentation for Eac3CodingMode

### Eac3DcFilter
* Eac3DcFilter `string` (values: DISABLED, ENABLED): Placeholder documentation for Eac3DcFilter

### Eac3DrcLine
* Eac3DrcLine `string` (values: FILM_LIGHT, FILM_STANDARD, MUSIC_LIGHT, MUSIC_STANDARD, NONE, SPEECH): Placeholder documentation for Eac3DrcLine

### Eac3DrcRf
* Eac3DrcRf `string` (values: FILM_LIGHT, FILM_STANDARD, MUSIC_LIGHT, MUSIC_STANDARD, NONE, SPEECH): Placeholder documentation for Eac3DrcRf

### Eac3LfeControl
* Eac3LfeControl `string` (values: LFE, NO_LFE): Placeholder documentation for Eac3LfeControl

### Eac3LfeFilter
* Eac3LfeFilter `string` (values: DISABLED, ENABLED): Placeholder documentation for Eac3LfeFilter

### Eac3MetadataControl
* Eac3MetadataControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Placeholder documentation for Eac3MetadataControl

### Eac3PassthroughControl
* Eac3PassthroughControl `string` (values: NO_PASSTHROUGH, WHEN_POSSIBLE): Placeholder documentation for Eac3PassthroughControl

### Eac3PhaseControl
* Eac3PhaseControl `string` (values: NO_SHIFT, SHIFT_90_DEGREES): Placeholder documentation for Eac3PhaseControl

### Eac3Settings
* Eac3Settings `object`: Placeholder documentation for Eac3Settings
  * AttenuationControl [Eac3AttenuationControl](#eac3attenuationcontrol)
  * Bitrate [__double](#__double)
  * BitstreamMode [Eac3BitstreamMode](#eac3bitstreammode)
  * CodingMode [Eac3CodingMode](#eac3codingmode)
  * DcFilter [Eac3DcFilter](#eac3dcfilter)
  * Dialnorm [__integerMin1Max31](#__integermin1max31)
  * DrcLine [Eac3DrcLine](#eac3drcline)
  * DrcRf [Eac3DrcRf](#eac3drcrf)
  * LfeControl [Eac3LfeControl](#eac3lfecontrol)
  * LfeFilter [Eac3LfeFilter](#eac3lfefilter)
  * LoRoCenterMixLevel [__double](#__double)
  * LoRoSurroundMixLevel [__double](#__double)
  * LtRtCenterMixLevel [__double](#__double)
  * LtRtSurroundMixLevel [__double](#__double)
  * MetadataControl [Eac3MetadataControl](#eac3metadatacontrol)
  * PassthroughControl [Eac3PassthroughControl](#eac3passthroughcontrol)
  * PhaseControl [Eac3PhaseControl](#eac3phasecontrol)
  * StereoDownmix [Eac3StereoDownmix](#eac3stereodownmix)
  * SurroundExMode [Eac3SurroundExMode](#eac3surroundexmode)
  * SurroundMode [Eac3SurroundMode](#eac3surroundmode)

### Eac3StereoDownmix
* Eac3StereoDownmix `string` (values: DPL2, LO_RO, LT_RT, NOT_INDICATED): Placeholder documentation for Eac3StereoDownmix

### Eac3SurroundExMode
* Eac3SurroundExMode `string` (values: DISABLED, ENABLED, NOT_INDICATED): Placeholder documentation for Eac3SurroundExMode

### Eac3SurroundMode
* Eac3SurroundMode `string` (values: DISABLED, ENABLED, NOT_INDICATED): Placeholder documentation for Eac3SurroundMode

### EmbeddedConvert608To708
* EmbeddedConvert608To708 `string` (values: DISABLED, UPCONVERT): Placeholder documentation for EmbeddedConvert608To708

### EmbeddedDestinationSettings
* EmbeddedDestinationSettings `object`: Placeholder documentation for EmbeddedDestinationSettings

### EmbeddedPlusScte20DestinationSettings
* EmbeddedPlusScte20DestinationSettings `object`: Placeholder documentation for EmbeddedPlusScte20DestinationSettings

### EmbeddedScte20Detection
* EmbeddedScte20Detection `string` (values: AUTO, OFF): Placeholder documentation for EmbeddedScte20Detection

### EmbeddedSourceSettings
* EmbeddedSourceSettings `object`: Placeholder documentation for EmbeddedSourceSettings
  * Convert608To708 [EmbeddedConvert608To708](#embeddedconvert608to708)
  * Scte20Detection [EmbeddedScte20Detection](#embeddedscte20detection)
  * Source608ChannelNumber [__integerMin1Max4](#__integermin1max4)
  * Source608TrackNumber [__integerMin1Max5](#__integermin1max5)

### Empty
* Empty `object`: Placeholder documentation for Empty

### EncoderSettings
* EncoderSettings `object`: Placeholder documentation for EncoderSettings
  * AudioDescriptions **required** [__listOfAudioDescription](#__listofaudiodescription)
  * AvailBlanking [AvailBlanking](#availblanking)
  * AvailConfiguration [AvailConfiguration](#availconfiguration)
  * BlackoutSlate [BlackoutSlate](#blackoutslate)
  * CaptionDescriptions [__listOfCaptionDescription](#__listofcaptiondescription)
  * GlobalConfiguration [GlobalConfiguration](#globalconfiguration)
  * OutputGroups **required** [__listOfOutputGroup](#__listofoutputgroup)
  * TimecodeConfig **required** [TimecodeConfig](#timecodeconfig)
  * VideoDescriptions **required** [__listOfVideoDescription](#__listofvideodescription)

### FecOutputIncludeFec
* FecOutputIncludeFec `string` (values: COLUMN, COLUMN_AND_ROW): Placeholder documentation for FecOutputIncludeFec

### FecOutputSettings
* FecOutputSettings `object`: Placeholder documentation for FecOutputSettings
  * ColumnDepth [__integerMin4Max20](#__integermin4max20)
  * IncludeFec [FecOutputIncludeFec](#fecoutputincludefec)
  * RowLength [__integerMin1Max20](#__integermin1max20)

### FixedAfd
* FixedAfd `string` (values: AFD_0000, AFD_0010, AFD_0011, AFD_0100, AFD_1000, AFD_1001, AFD_1010, AFD_1011, AFD_1101, AFD_1110, AFD_1111): Placeholder documentation for FixedAfd

### ForbiddenException
* ForbiddenException `object`: Placeholder documentation for ForbiddenException
  * Message [__string](#__string)

### GatewayTimeoutException
* GatewayTimeoutException `object`: Placeholder documentation for GatewayTimeoutException
  * Message [__string](#__string)

### GlobalConfiguration
* GlobalConfiguration `object`: Placeholder documentation for GlobalConfiguration
  * InitialAudioGain [__integerMinNegative60Max60](#__integerminnegative60max60)
  * InputEndAction [GlobalConfigurationInputEndAction](#globalconfigurationinputendaction)
  * InputLossBehavior [InputLossBehavior](#inputlossbehavior)
  * OutputTimingSource [GlobalConfigurationOutputTimingSource](#globalconfigurationoutputtimingsource)
  * SupportLowFramerateInputs [GlobalConfigurationLowFramerateInputs](#globalconfigurationlowframerateinputs)

### GlobalConfigurationInputEndAction
* GlobalConfigurationInputEndAction `string` (values: NONE, SWITCH_AND_LOOP_INPUTS): Placeholder documentation for GlobalConfigurationInputEndAction

### GlobalConfigurationLowFramerateInputs
* GlobalConfigurationLowFramerateInputs `string` (values: DISABLED, ENABLED): Placeholder documentation for GlobalConfigurationLowFramerateInputs

### GlobalConfigurationOutputTimingSource
* GlobalConfigurationOutputTimingSource `string` (values: INPUT_CLOCK, SYSTEM_CLOCK): Placeholder documentation for GlobalConfigurationOutputTimingSource

### H264AdaptiveQuantization
* H264AdaptiveQuantization `string` (values: HIGH, HIGHER, LOW, MAX, MEDIUM, OFF): Placeholder documentation for H264AdaptiveQuantization

### H264ColorMetadata
* H264ColorMetadata `string` (values: IGNORE, INSERT): Placeholder documentation for H264ColorMetadata

### H264EntropyEncoding
* H264EntropyEncoding `string` (values: CABAC, CAVLC): Placeholder documentation for H264EntropyEncoding

### H264FlickerAq
* H264FlickerAq `string` (values: DISABLED, ENABLED): Placeholder documentation for H264FlickerAq

### H264FramerateControl
* H264FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Placeholder documentation for H264FramerateControl

### H264GopBReference
* H264GopBReference `string` (values: DISABLED, ENABLED): Placeholder documentation for H264GopBReference

### H264GopSizeUnits
* H264GopSizeUnits `string` (values: FRAMES, SECONDS): Placeholder documentation for H264GopSizeUnits

### H264Level
* H264Level `string` (values: H264_LEVEL_1, H264_LEVEL_1_1, H264_LEVEL_1_2, H264_LEVEL_1_3, H264_LEVEL_2, H264_LEVEL_2_1, H264_LEVEL_2_2, H264_LEVEL_3, H264_LEVEL_3_1, H264_LEVEL_3_2, H264_LEVEL_4, H264_LEVEL_4_1, H264_LEVEL_4_2, H264_LEVEL_5, H264_LEVEL_5_1, H264_LEVEL_5_2, H264_LEVEL_AUTO): Placeholder documentation for H264Level

### H264LookAheadRateControl
* H264LookAheadRateControl `string` (values: HIGH, LOW, MEDIUM): Placeholder documentation for H264LookAheadRateControl

### H264ParControl
* H264ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): Placeholder documentation for H264ParControl

### H264Profile
* H264Profile `string` (values: BASELINE, HIGH, HIGH_10BIT, HIGH_422, HIGH_422_10BIT, MAIN): Placeholder documentation for H264Profile

### H264RateControlMode
* H264RateControlMode `string` (values: CBR, VBR): Placeholder documentation for H264RateControlMode

### H264ScanType
* H264ScanType `string` (values: INTERLACED, PROGRESSIVE): Placeholder documentation for H264ScanType

### H264SceneChangeDetect
* H264SceneChangeDetect `string` (values: DISABLED, ENABLED): Placeholder documentation for H264SceneChangeDetect

### H264Settings
* H264Settings `object`: Placeholder documentation for H264Settings
  * AdaptiveQuantization [H264AdaptiveQuantization](#h264adaptivequantization)
  * AfdSignaling [AfdSignaling](#afdsignaling)
  * Bitrate [__integerMin1000](#__integermin1000)
  * BufFillPct [__integerMin0Max100](#__integermin0max100)
  * BufSize [__integerMin0](#__integermin0)
  * ColorMetadata [H264ColorMetadata](#h264colormetadata)
  * EntropyEncoding [H264EntropyEncoding](#h264entropyencoding)
  * FixedAfd [FixedAfd](#fixedafd)
  * FlickerAq [H264FlickerAq](#h264flickeraq)
  * FramerateControl [H264FramerateControl](#h264frameratecontrol)
  * FramerateDenominator [__integer](#__integer)
  * FramerateNumerator [__integer](#__integer)
  * GopBReference [H264GopBReference](#h264gopbreference)
  * GopClosedCadence [__integerMin0](#__integermin0)
  * GopNumBFrames [__integerMin0Max7](#__integermin0max7)
  * GopSize [__doubleMin1](#__doublemin1)
  * GopSizeUnits [H264GopSizeUnits](#h264gopsizeunits)
  * Level [H264Level](#h264level)
  * LookAheadRateControl [H264LookAheadRateControl](#h264lookaheadratecontrol)
  * MaxBitrate [__integerMin1000](#__integermin1000)
  * MinIInterval [__integerMin0Max30](#__integermin0max30)
  * NumRefFrames [__integerMin1Max6](#__integermin1max6)
  * ParControl [H264ParControl](#h264parcontrol)
  * ParDenominator [__integerMin1](#__integermin1)
  * ParNumerator [__integer](#__integer)
  * Profile [H264Profile](#h264profile)
  * RateControlMode [H264RateControlMode](#h264ratecontrolmode)
  * ScanType [H264ScanType](#h264scantype)
  * SceneChangeDetect [H264SceneChangeDetect](#h264scenechangedetect)
  * Slices [__integerMin1Max32](#__integermin1max32)
  * Softness [__integerMin0Max128](#__integermin0max128)
  * SpatialAq [H264SpatialAq](#h264spatialaq)
  * Syntax [H264Syntax](#h264syntax)
  * TemporalAq [H264TemporalAq](#h264temporalaq)
  * TimecodeInsertion [H264TimecodeInsertionBehavior](#h264timecodeinsertionbehavior)

### H264SpatialAq
* H264SpatialAq `string` (values: DISABLED, ENABLED): Placeholder documentation for H264SpatialAq

### H264Syntax
* H264Syntax `string` (values: DEFAULT, RP2027): Placeholder documentation for H264Syntax

### H264TemporalAq
* H264TemporalAq `string` (values: DISABLED, ENABLED): Placeholder documentation for H264TemporalAq

### H264TimecodeInsertionBehavior
* H264TimecodeInsertionBehavior `string` (values: DISABLED, PIC_TIMING_SEI): Placeholder documentation for H264TimecodeInsertionBehavior

### HlsAdMarkers
* HlsAdMarkers `string` (values: ADOBE, ELEMENTAL, ELEMENTAL_SCTE35): Placeholder documentation for HlsAdMarkers

### HlsAkamaiHttpTransferMode
* HlsAkamaiHttpTransferMode `string` (values: CHUNKED, NON_CHUNKED): Placeholder documentation for HlsAkamaiHttpTransferMode

### HlsAkamaiSettings
* HlsAkamaiSettings `object`: Placeholder documentation for HlsAkamaiSettings
  * ConnectionRetryInterval [__integerMin0](#__integermin0)
  * FilecacheDuration [__integerMin0Max600](#__integermin0max600)
  * HttpTransferMode [HlsAkamaiHttpTransferMode](#hlsakamaihttptransfermode)
  * NumRetries [__integerMin0](#__integermin0)
  * RestartDelay [__integerMin0Max15](#__integermin0max15)
  * Salt [__string](#__string)
  * Token [__string](#__string)

### HlsBasicPutSettings
* HlsBasicPutSettings `object`: Placeholder documentation for HlsBasicPutSettings
  * ConnectionRetryInterval [__integerMin0](#__integermin0)
  * FilecacheDuration [__integerMin0Max600](#__integermin0max600)
  * NumRetries [__integerMin0](#__integermin0)
  * RestartDelay [__integerMin0Max15](#__integermin0max15)

### HlsCaptionLanguageSetting
* HlsCaptionLanguageSetting `string` (values: INSERT, NONE, OMIT): Placeholder documentation for HlsCaptionLanguageSetting

### HlsCdnSettings
* HlsCdnSettings `object`: Placeholder documentation for HlsCdnSettings
  * HlsAkamaiSettings [HlsAkamaiSettings](#hlsakamaisettings)
  * HlsBasicPutSettings [HlsBasicPutSettings](#hlsbasicputsettings)
  * HlsMediaStoreSettings [HlsMediaStoreSettings](#hlsmediastoresettings)
  * HlsWebdavSettings [HlsWebdavSettings](#hlswebdavsettings)

### HlsClientCache
* HlsClientCache `string` (values: DISABLED, ENABLED): Placeholder documentation for HlsClientCache

### HlsCodecSpecification
* HlsCodecSpecification `string` (values: RFC_4281, RFC_6381): Placeholder documentation for HlsCodecSpecification

### HlsDirectoryStructure
* HlsDirectoryStructure `string` (values: SINGLE_DIRECTORY, SUBDIRECTORY_PER_STREAM): Placeholder documentation for HlsDirectoryStructure

### HlsEncryptionType
* HlsEncryptionType `string` (values: AES128, SAMPLE_AES): Placeholder documentation for HlsEncryptionType

### HlsGroupSettings
* HlsGroupSettings `object`: Placeholder documentation for HlsGroupSettings
  * AdMarkers [__listOfHlsAdMarkers](#__listofhlsadmarkers)
  * BaseUrlContent [__string](#__string)
  * BaseUrlManifest [__string](#__string)
  * CaptionLanguageMappings [__listOfCaptionLanguageMapping](#__listofcaptionlanguagemapping)
  * CaptionLanguageSetting [HlsCaptionLanguageSetting](#hlscaptionlanguagesetting)
  * ClientCache [HlsClientCache](#hlsclientcache)
  * CodecSpecification [HlsCodecSpecification](#hlscodecspecification)
  * ConstantIv [__stringMin32Max32](#__stringmin32max32)
  * Destination **required** [OutputLocationRef](#outputlocationref)
  * DirectoryStructure [HlsDirectoryStructure](#hlsdirectorystructure)
  * EncryptionType [HlsEncryptionType](#hlsencryptiontype)
  * HlsCdnSettings [HlsCdnSettings](#hlscdnsettings)
  * IndexNSegments [__integerMin3](#__integermin3)
  * InputLossAction [InputLossActionForHlsOut](#inputlossactionforhlsout)
  * IvInManifest [HlsIvInManifest](#hlsivinmanifest)
  * IvSource [HlsIvSource](#hlsivsource)
  * KeepSegments [__integerMin1](#__integermin1)
  * KeyFormat [__string](#__string)
  * KeyFormatVersions [__string](#__string)
  * KeyProviderSettings [KeyProviderSettings](#keyprovidersettings)
  * ManifestCompression [HlsManifestCompression](#hlsmanifestcompression)
  * ManifestDurationFormat [HlsManifestDurationFormat](#hlsmanifestdurationformat)
  * MinSegmentLength [__integerMin0](#__integermin0)
  * Mode [HlsMode](#hlsmode)
  * OutputSelection [HlsOutputSelection](#hlsoutputselection)
  * ProgramDateTime [HlsProgramDateTime](#hlsprogramdatetime)
  * ProgramDateTimePeriod [__integerMin0Max3600](#__integermin0max3600)
  * SegmentLength [__integerMin1](#__integermin1)
  * SegmentationMode [HlsSegmentationMode](#hlssegmentationmode)
  * SegmentsPerSubdirectory [__integerMin1](#__integermin1)
  * StreamInfResolution [HlsStreamInfResolution](#hlsstreaminfresolution)
  * TimedMetadataId3Frame [HlsTimedMetadataId3Frame](#hlstimedmetadataid3frame)
  * TimedMetadataId3Period [__integerMin0](#__integermin0)
  * TimestampDeltaMilliseconds [__integerMin0](#__integermin0)
  * TsFileMode [HlsTsFileMode](#hlstsfilemode)

### HlsInputSettings
* HlsInputSettings `object`: Placeholder documentation for HlsInputSettings
  * Bandwidth [__integerMin0](#__integermin0)
  * BufferSegments [__integerMin0](#__integermin0)
  * Retries [__integerMin0](#__integermin0)
  * RetryInterval [__integerMin0](#__integermin0)

### HlsIvInManifest
* HlsIvInManifest `string` (values: EXCLUDE, INCLUDE): Placeholder documentation for HlsIvInManifest

### HlsIvSource
* HlsIvSource `string` (values: EXPLICIT, FOLLOWS_SEGMENT_NUMBER): Placeholder documentation for HlsIvSource

### HlsManifestCompression
* HlsManifestCompression `string` (values: GZIP, NONE): Placeholder documentation for HlsManifestCompression

### HlsManifestDurationFormat
* HlsManifestDurationFormat `string` (values: FLOATING_POINT, INTEGER): Placeholder documentation for HlsManifestDurationFormat

### HlsMediaStoreSettings
* HlsMediaStoreSettings `object`: Placeholder documentation for HlsMediaStoreSettings
  * ConnectionRetryInterval [__integerMin0](#__integermin0)
  * FilecacheDuration [__integerMin0Max600](#__integermin0max600)
  * MediaStoreStorageClass [HlsMediaStoreStorageClass](#hlsmediastorestorageclass)
  * NumRetries [__integerMin0](#__integermin0)
  * RestartDelay [__integerMin0Max15](#__integermin0max15)

### HlsMediaStoreStorageClass
* HlsMediaStoreStorageClass `string` (values: TEMPORAL): Placeholder documentation for HlsMediaStoreStorageClass

### HlsMode
* HlsMode `string` (values: LIVE, VOD): Placeholder documentation for HlsMode

### HlsOutputSelection
* HlsOutputSelection `string` (values: MANIFESTS_AND_SEGMENTS, SEGMENTS_ONLY): Placeholder documentation for HlsOutputSelection

### HlsOutputSettings
* HlsOutputSettings `object`: Placeholder documentation for HlsOutputSettings
  * HlsSettings **required** [HlsSettings](#hlssettings)
  * NameModifier [__stringMin1](#__stringmin1)
  * SegmentModifier [__string](#__string)

### HlsProgramDateTime
* HlsProgramDateTime `string` (values: EXCLUDE, INCLUDE): Placeholder documentation for HlsProgramDateTime

### HlsSegmentationMode
* HlsSegmentationMode `string` (values: USE_INPUT_SEGMENTATION, USE_SEGMENT_DURATION): Placeholder documentation for HlsSegmentationMode

### HlsSettings
* HlsSettings `object`: Placeholder documentation for HlsSettings
  * AudioOnlyHlsSettings [AudioOnlyHlsSettings](#audioonlyhlssettings)
  * StandardHlsSettings [StandardHlsSettings](#standardhlssettings)

### HlsStreamInfResolution
* HlsStreamInfResolution `string` (values: EXCLUDE, INCLUDE): Placeholder documentation for HlsStreamInfResolution

### HlsTimedMetadataId3Frame
* HlsTimedMetadataId3Frame `string` (values: NONE, PRIV, TDRL): Placeholder documentation for HlsTimedMetadataId3Frame

### HlsTsFileMode
* HlsTsFileMode `string` (values: SEGMENTED_FILES, SINGLE_FILE): Placeholder documentation for HlsTsFileMode

### HlsWebdavHttpTransferMode
* HlsWebdavHttpTransferMode `string` (values: CHUNKED, NON_CHUNKED): Placeholder documentation for HlsWebdavHttpTransferMode

### HlsWebdavSettings
* HlsWebdavSettings `object`: Placeholder documentation for HlsWebdavSettings
  * ConnectionRetryInterval [__integerMin0](#__integermin0)
  * FilecacheDuration [__integerMin0Max600](#__integermin0max600)
  * HttpTransferMode [HlsWebdavHttpTransferMode](#hlswebdavhttptransfermode)
  * NumRetries [__integerMin0](#__integermin0)
  * RestartDelay [__integerMin0Max15](#__integermin0max15)

### Input
* Input `object`: Placeholder documentation for Input
  * Arn [__string](#__string)
  * AttachedChannels [__listOf__string](#__listof__string)
  * Destinations [__listOfInputDestination](#__listofinputdestination)
  * Id [__string](#__string)
  * Name [__string](#__string)
  * SecurityGroups [__listOf__string](#__listof__string)
  * Sources [__listOfInputSource](#__listofinputsource)
  * State [InputState](#inputstate)
  * Type [InputType](#inputtype)

### InputAttachment
* InputAttachment `object`: Placeholder documentation for InputAttachment
  * InputId [__string](#__string)
  * InputSettings [InputSettings](#inputsettings)

### InputChannelLevel
* InputChannelLevel `object`: Placeholder documentation for InputChannelLevel
  * Gain **required** [__integerMinNegative60Max6](#__integerminnegative60max6)
  * InputChannel **required** [__integerMin0Max15](#__integermin0max15)

### InputCodec
* InputCodec `string` (values: MPEG2, AVC, HEVC): codec in increasing order of complexity

### InputDeblockFilter
* InputDeblockFilter `string` (values: DISABLED, ENABLED): Placeholder documentation for InputDeblockFilter

### InputDenoiseFilter
* InputDenoiseFilter `string` (values: DISABLED, ENABLED): Placeholder documentation for InputDenoiseFilter

### InputDestination
* InputDestination `object`: The settings for a PUSH type input.
  * Ip [__string](#__string)
  * Port [__string](#__string)
  * Url [__string](#__string)

### InputDestinationRequest
* InputDestinationRequest `object`: Endpoint settings for a PUSH type input.
  * StreamName [__string](#__string)

### InputFilter
* InputFilter `string` (values: AUTO, DISABLED, FORCED): Placeholder documentation for InputFilter

### InputLocation
* InputLocation `object`: Placeholder documentation for InputLocation
  * PasswordParam [__string](#__string)
  * Uri **required** [__string](#__string)
  * Username [__string](#__string)

### InputLossActionForHlsOut
* InputLossActionForHlsOut `string` (values: EMIT_OUTPUT, PAUSE_OUTPUT): Placeholder documentation for InputLossActionForHlsOut

### InputLossActionForMsSmoothOut
* InputLossActionForMsSmoothOut `string` (values: EMIT_OUTPUT, PAUSE_OUTPUT): Placeholder documentation for InputLossActionForMsSmoothOut

### InputLossActionForUdpOut
* InputLossActionForUdpOut `string` (values: DROP_PROGRAM, DROP_TS, EMIT_PROGRAM): Placeholder documentation for InputLossActionForUdpOut

### InputLossBehavior
* InputLossBehavior `object`: Placeholder documentation for InputLossBehavior
  * BlackFrameMsec [__integerMin0Max1000000](#__integermin0max1000000)
  * InputLossImageColor [__stringMin6Max6](#__stringmin6max6)
  * InputLossImageSlate [InputLocation](#inputlocation)
  * InputLossImageType [InputLossImageType](#inputlossimagetype)
  * RepeatFrameMsec [__integerMin0Max1000000](#__integermin0max1000000)

### InputLossImageType
* InputLossImageType `string` (values: COLOR, SLATE): Placeholder documentation for InputLossImageType

### InputMaximumBitrate
* InputMaximumBitrate `string` (values: MAX_10_MBPS, MAX_20_MBPS, MAX_50_MBPS): Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently.

### InputResolution
* InputResolution `string` (values: SD, HD, UHD): Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines

### InputSecurityGroup
* InputSecurityGroup `object`: An Input Security Group
  * Arn [__string](#__string)
  * Id [__string](#__string)
  * Inputs [__listOf__string](#__listof__string)
  * State [InputSecurityGroupState](#inputsecuritygroupstate)
  * WhitelistRules [__listOfInputWhitelistRule](#__listofinputwhitelistrule)

### InputSecurityGroupState
* InputSecurityGroupState `string` (values: IDLE, IN_USE, UPDATING, DELETED): Placeholder documentation for InputSecurityGroupState

### InputSecurityGroupWhitelistRequest
* InputSecurityGroupWhitelistRequest `object`: Request of IPv4 CIDR addresses to whitelist in a security group.
  * WhitelistRules [__listOfInputWhitelistRuleCidr](#__listofinputwhitelistrulecidr)

### InputSettings
* InputSettings `object`: Live Event input parameters. There can be multiple inputs in a single Live Event.
  * AudioSelectors [__listOfAudioSelector](#__listofaudioselector)
  * CaptionSelectors [__listOfCaptionSelector](#__listofcaptionselector)
  * DeblockFilter [InputDeblockFilter](#inputdeblockfilter)
  * DenoiseFilter [InputDenoiseFilter](#inputdenoisefilter)
  * FilterStrength [__integerMin1Max5](#__integermin1max5)
  * InputFilter [InputFilter](#inputfilter)
  * NetworkInputSettings [NetworkInputSettings](#networkinputsettings)
  * SourceEndBehavior [InputSourceEndBehavior](#inputsourceendbehavior)
  * VideoSelector [VideoSelector](#videoselector)

### InputSource
* InputSource `object`: The settings for a PULL type input.
  * PasswordParam [__string](#__string)
  * Url [__string](#__string)
  * Username [__string](#__string)

### InputSourceEndBehavior
* InputSourceEndBehavior `string` (values: CONTINUE, LOOP): Placeholder documentation for InputSourceEndBehavior

### InputSourceRequest
* InputSourceRequest `object`: Settings for for a PULL type input.
  * PasswordParam [__string](#__string)
  * Url [__string](#__string)
  * Username [__string](#__string)

### InputSpecification
* InputSpecification `object`: Placeholder documentation for InputSpecification
  * Codec [InputCodec](#inputcodec)
  * MaximumBitrate [InputMaximumBitrate](#inputmaximumbitrate)
  * Resolution [InputResolution](#inputresolution)

### InputState
* InputState `string` (values: CREATING, DETACHED, ATTACHED, DELETING, DELETED): Placeholder documentation for InputState

### InputType
* InputType `string` (values: UDP_PUSH, RTP_PUSH, RTMP_PUSH, RTMP_PULL, URL_PULL): Placeholder documentation for InputType

### InputWhitelistRule
* InputWhitelistRule `object`: Whitelist rule
  * Cidr [__string](#__string)

### InputWhitelistRuleCidr
* InputWhitelistRuleCidr `object`: An IPv4 CIDR to whitelist.
  * Cidr [__string](#__string)

### InternalServerErrorException
* InternalServerErrorException `object`: Placeholder documentation for InternalServerErrorException
  * Message [__string](#__string)

### InternalServiceError
* InternalServiceError `object`: Placeholder documentation for InternalServiceError
  * Message [__string](#__string)

### InvalidRequest
* InvalidRequest `object`: Placeholder documentation for InvalidRequest
  * Message [__string](#__string)

### KeyProviderSettings
* KeyProviderSettings `object`: Placeholder documentation for KeyProviderSettings
  * StaticKeySettings [StaticKeySettings](#statickeysettings)

### LimitExceeded
* LimitExceeded `object`: Placeholder documentation for LimitExceeded
  * Message [__string](#__string)

### ListChannelsRequest
* ListChannelsRequest `object`: Placeholder documentation for ListChannelsRequest

### ListChannelsResponse
* ListChannelsResponse `object`: Placeholder documentation for ListChannelsResponse
  * Channels [__listOfChannelSummary](#__listofchannelsummary)
  * NextToken [__string](#__string)

### ListChannelsResultModel
* ListChannelsResultModel `object`: Placeholder documentation for ListChannelsResultModel
  * Channels [__listOfChannelSummary](#__listofchannelsummary)
  * NextToken [__string](#__string)

### ListInputSecurityGroupsRequest
* ListInputSecurityGroupsRequest `object`: Placeholder documentation for ListInputSecurityGroupsRequest

### ListInputSecurityGroupsResponse
* ListInputSecurityGroupsResponse `object`: Placeholder documentation for ListInputSecurityGroupsResponse
  * InputSecurityGroups [__listOfInputSecurityGroup](#__listofinputsecuritygroup)
  * NextToken [__string](#__string)

### ListInputSecurityGroupsResultModel
* ListInputSecurityGroupsResultModel `object`: Result of input security group list request
  * InputSecurityGroups [__listOfInputSecurityGroup](#__listofinputsecuritygroup)
  * NextToken [__string](#__string)

### ListInputsRequest
* ListInputsRequest `object`: Placeholder documentation for ListInputsRequest

### ListInputsResponse
* ListInputsResponse `object`: Placeholder documentation for ListInputsResponse
  * Inputs [__listOfInput](#__listofinput)
  * NextToken [__string](#__string)

### ListInputsResultModel
* ListInputsResultModel `object`: Placeholder documentation for ListInputsResultModel
  * Inputs [__listOfInput](#__listofinput)
  * NextToken [__string](#__string)

### LogLevel
* LogLevel `string` (values: ERROR, WARNING, INFO, DEBUG, DISABLED): The log level the user wants for their channel.

### M2tsAbsentInputAudioBehavior
* M2tsAbsentInputAudioBehavior `string` (values: DROP, ENCODE_SILENCE): Placeholder documentation for M2tsAbsentInputAudioBehavior

### M2tsArib
* M2tsArib `string` (values: DISABLED, ENABLED): Placeholder documentation for M2tsArib

### M2tsAribCaptionsPidControl
* M2tsAribCaptionsPidControl `string` (values: AUTO, USE_CONFIGURED): Placeholder documentation for M2tsAribCaptionsPidControl

### M2tsAudioBufferModel
* M2tsAudioBufferModel `string` (values: ATSC, DVB): Placeholder documentation for M2tsAudioBufferModel

### M2tsAudioInterval
* M2tsAudioInterval `string` (values: VIDEO_AND_FIXED_INTERVALS, VIDEO_INTERVAL): Placeholder documentation for M2tsAudioInterval

### M2tsAudioStreamType
* M2tsAudioStreamType `string` (values: ATSC, DVB): Placeholder documentation for M2tsAudioStreamType

### M2tsBufferModel
* M2tsBufferModel `string` (values: MULTIPLEX, NONE): Placeholder documentation for M2tsBufferModel

### M2tsCcDescriptor
* M2tsCcDescriptor `string` (values: DISABLED, ENABLED): Placeholder documentation for M2tsCcDescriptor

### M2tsEbifControl
* M2tsEbifControl `string` (values: NONE, PASSTHROUGH): Placeholder documentation for M2tsEbifControl

### M2tsEbpPlacement
* M2tsEbpPlacement `string` (values: VIDEO_AND_AUDIO_PIDS, VIDEO_PID): Placeholder documentation for M2tsEbpPlacement

### M2tsEsRateInPes
* M2tsEsRateInPes `string` (values: EXCLUDE, INCLUDE): Placeholder documentation for M2tsEsRateInPes

### M2tsKlv
* M2tsKlv `string` (values: NONE, PASSTHROUGH): Placeholder documentation for M2tsKlv

### M2tsPcrControl
* M2tsPcrControl `string` (values: CONFIGURED_PCR_PERIOD, PCR_EVERY_PES_PACKET): Placeholder documentation for M2tsPcrControl

### M2tsRateMode
* M2tsRateMode `string` (values: CBR, VBR): Placeholder documentation for M2tsRateMode

### M2tsScte35Control
* M2tsScte35Control `string` (values: NONE, PASSTHROUGH): Placeholder documentation for M2tsScte35Control

### M2tsSegmentationMarkers
* M2tsSegmentationMarkers `string` (values: EBP, EBP_LEGACY, NONE, PSI_SEGSTART, RAI_ADAPT, RAI_SEGSTART): Placeholder documentation for M2tsSegmentationMarkers

### M2tsSegmentationStyle
* M2tsSegmentationStyle `string` (values: MAINTAIN_CADENCE, RESET_CADENCE): Placeholder documentation for M2tsSegmentationStyle

### M2tsSettings
* M2tsSettings `object`: Placeholder documentation for M2tsSettings
  * AbsentInputAudioBehavior [M2tsAbsentInputAudioBehavior](#m2tsabsentinputaudiobehavior)
  * Arib [M2tsArib](#m2tsarib)
  * AribCaptionsPid [__string](#__string)
  * AribCaptionsPidControl [M2tsAribCaptionsPidControl](#m2tsaribcaptionspidcontrol)
  * AudioBufferModel [M2tsAudioBufferModel](#m2tsaudiobuffermodel)
  * AudioFramesPerPes [__integerMin0](#__integermin0)
  * AudioPids [__string](#__string)
  * AudioStreamType [M2tsAudioStreamType](#m2tsaudiostreamtype)
  * Bitrate [__integerMin0](#__integermin0)
  * BufferModel [M2tsBufferModel](#m2tsbuffermodel)
  * CcDescriptor [M2tsCcDescriptor](#m2tsccdescriptor)
  * DvbNitSettings [DvbNitSettings](#dvbnitsettings)
  * DvbSdtSettings [DvbSdtSettings](#dvbsdtsettings)
  * DvbSubPids [__string](#__string)
  * DvbTdtSettings [DvbTdtSettings](#dvbtdtsettings)
  * DvbTeletextPid [__string](#__string)
  * Ebif [M2tsEbifControl](#m2tsebifcontrol)
  * EbpAudioInterval [M2tsAudioInterval](#m2tsaudiointerval)
  * EbpLookaheadMs [__integerMin0Max10000](#__integermin0max10000)
  * EbpPlacement [M2tsEbpPlacement](#m2tsebpplacement)
  * EcmPid [__string](#__string)
  * EsRateInPes [M2tsEsRateInPes](#m2tsesrateinpes)
  * EtvPlatformPid [__string](#__string)
  * EtvSignalPid [__string](#__string)
  * FragmentTime [__doubleMin0](#__doublemin0)
  * Klv [M2tsKlv](#m2tsklv)
  * KlvDataPids [__string](#__string)
  * NullPacketBitrate [__doubleMin0](#__doublemin0)
  * PatInterval [__integerMin0Max1000](#__integermin0max1000)
  * PcrControl [M2tsPcrControl](#m2tspcrcontrol)
  * PcrPeriod [__integerMin0Max500](#__integermin0max500)
  * PcrPid [__string](#__string)
  * PmtInterval [__integerMin0Max1000](#__integermin0max1000)
  * PmtPid [__string](#__string)
  * ProgramNum [__integerMin0Max65535](#__integermin0max65535)
  * RateMode [M2tsRateMode](#m2tsratemode)
  * Scte27Pids [__string](#__string)
  * Scte35Control [M2tsScte35Control](#m2tsscte35control)
  * Scte35Pid [__string](#__string)
  * SegmentationMarkers [M2tsSegmentationMarkers](#m2tssegmentationmarkers)
  * SegmentationStyle [M2tsSegmentationStyle](#m2tssegmentationstyle)
  * SegmentationTime [__doubleMin1](#__doublemin1)
  * TimedMetadataBehavior [M2tsTimedMetadataBehavior](#m2tstimedmetadatabehavior)
  * TimedMetadataPid [__string](#__string)
  * TransportStreamId [__integerMin0Max65535](#__integermin0max65535)
  * VideoPid [__string](#__string)

### M2tsTimedMetadataBehavior
* M2tsTimedMetadataBehavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): Placeholder documentation for M2tsTimedMetadataBehavior

### M3u8PcrControl
* M3u8PcrControl `string` (values: CONFIGURED_PCR_PERIOD, PCR_EVERY_PES_PACKET): Placeholder documentation for M3u8PcrControl

### M3u8Scte35Behavior
* M3u8Scte35Behavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): Placeholder documentation for M3u8Scte35Behavior

### M3u8Settings
* M3u8Settings `object`: Settings information for the .m3u8 container
  * AudioFramesPerPes [__integerMin0](#__integermin0)
  * AudioPids [__string](#__string)
  * EcmPid [__string](#__string)
  * PatInterval [__integerMin0Max1000](#__integermin0max1000)
  * PcrControl [M3u8PcrControl](#m3u8pcrcontrol)
  * PcrPeriod [__integerMin0Max500](#__integermin0max500)
  * PcrPid [__string](#__string)
  * PmtInterval [__integerMin0Max1000](#__integermin0max1000)
  * PmtPid [__string](#__string)
  * ProgramNum [__integerMin0Max65535](#__integermin0max65535)
  * Scte35Behavior [M3u8Scte35Behavior](#m3u8scte35behavior)
  * Scte35Pid [__string](#__string)
  * TimedMetadataBehavior [M3u8TimedMetadataBehavior](#m3u8timedmetadatabehavior)
  * TimedMetadataPid [__string](#__string)
  * TransportStreamId [__integerMin0Max65535](#__integermin0max65535)
  * VideoPid [__string](#__string)

### M3u8TimedMetadataBehavior
* M3u8TimedMetadataBehavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): Placeholder documentation for M3u8TimedMetadataBehavior

### MaxResults
* MaxResults `integer`: Placeholder documentation for MaxResults

### Mp2CodingMode
* Mp2CodingMode `string` (values: CODING_MODE_1_0, CODING_MODE_2_0): Placeholder documentation for Mp2CodingMode

### Mp2Settings
* Mp2Settings `object`: Placeholder documentation for Mp2Settings
  * Bitrate [__double](#__double)
  * CodingMode [Mp2CodingMode](#mp2codingmode)
  * SampleRate [__double](#__double)

### MsSmoothGroupSettings
* MsSmoothGroupSettings `object`: Placeholder documentation for MsSmoothGroupSettings
  * AcquisitionPointId [__string](#__string)
  * AudioOnlyTimecodeControl [SmoothGroupAudioOnlyTimecodeControl](#smoothgroupaudioonlytimecodecontrol)
  * CertificateMode [SmoothGroupCertificateMode](#smoothgroupcertificatemode)
  * ConnectionRetryInterval [__integerMin0](#__integermin0)
  * Destination **required** [OutputLocationRef](#outputlocationref)
  * EventId [__string](#__string)
  * EventIdMode [SmoothGroupEventIdMode](#smoothgroupeventidmode)
  * EventStopBehavior [SmoothGroupEventStopBehavior](#smoothgroupeventstopbehavior)
  * FilecacheDuration [__integerMin0](#__integermin0)
  * FragmentLength [__integerMin1](#__integermin1)
  * InputLossAction [InputLossActionForMsSmoothOut](#inputlossactionformssmoothout)
  * NumRetries [__integerMin0](#__integermin0)
  * RestartDelay [__integerMin0](#__integermin0)
  * SegmentationMode [SmoothGroupSegmentationMode](#smoothgroupsegmentationmode)
  * SendDelayMs [__integerMin0Max10000](#__integermin0max10000)
  * SparseTrackType [SmoothGroupSparseTrackType](#smoothgroupsparsetracktype)
  * StreamManifestBehavior [SmoothGroupStreamManifestBehavior](#smoothgroupstreammanifestbehavior)
  * TimestampOffset [__string](#__string)
  * TimestampOffsetMode [SmoothGroupTimestampOffsetMode](#smoothgrouptimestampoffsetmode)

### MsSmoothOutputSettings
* MsSmoothOutputSettings `object`: Placeholder documentation for MsSmoothOutputSettings
  * NameModifier [__string](#__string)

### NetworkInputServerValidation
* NetworkInputServerValidation `string` (values: CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME, CHECK_CRYPTOGRAPHY_ONLY): Placeholder documentation for NetworkInputServerValidation

### NetworkInputSettings
* NetworkInputSettings `object`: Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection.
  * HlsInputSettings [HlsInputSettings](#hlsinputsettings)
  * ServerValidation [NetworkInputServerValidation](#networkinputservervalidation)

### NotFoundException
* NotFoundException `object`: Placeholder documentation for NotFoundException
  * Message [__string](#__string)

### Output
* Output `object`: Output settings. There can be multiple outputs within a group.
  * AudioDescriptionNames [__listOf__string](#__listof__string)
  * CaptionDescriptionNames [__listOf__string](#__listof__string)
  * OutputName [__stringMin1Max255](#__stringmin1max255)
  * OutputSettings **required** [OutputSettings](#outputsettings)
  * VideoDescriptionName [__string](#__string)

### OutputDestination
* OutputDestination `object`: Placeholder documentation for OutputDestination
  * Id [__string](#__string)
  * Settings [__listOfOutputDestinationSettings](#__listofoutputdestinationsettings)

### OutputDestinationSettings
* OutputDestinationSettings `object`: Placeholder documentation for OutputDestinationSettings
  * PasswordParam [__string](#__string)
  * StreamName [__string](#__string)
  * Url [__string](#__string)
  * Username [__string](#__string)

### OutputGroup
* OutputGroup `object`: Output groups for this Live Event. Output groups contain information about where streams should be distributed.
  * Name [__stringMax32](#__stringmax32)
  * OutputGroupSettings **required** [OutputGroupSettings](#outputgroupsettings)
  * Outputs **required** [__listOfOutput](#__listofoutput)

### OutputGroupSettings
* OutputGroupSettings `object`: Placeholder documentation for OutputGroupSettings
  * ArchiveGroupSettings [ArchiveGroupSettings](#archivegroupsettings)
  * HlsGroupSettings [HlsGroupSettings](#hlsgroupsettings)
  * MsSmoothGroupSettings [MsSmoothGroupSettings](#mssmoothgroupsettings)
  * RtmpGroupSettings [RtmpGroupSettings](#rtmpgroupsettings)
  * UdpGroupSettings [UdpGroupSettings](#udpgroupsettings)

### OutputLocationRef
* OutputLocationRef `object`: Reference to an OutputDestination ID defined in the channel
  * DestinationRefId [__string](#__string)

### OutputSettings
* OutputSettings `object`: Placeholder documentation for OutputSettings
  * ArchiveOutputSettings [ArchiveOutputSettings](#archiveoutputsettings)
  * HlsOutputSettings [HlsOutputSettings](#hlsoutputsettings)
  * MsSmoothOutputSettings [MsSmoothOutputSettings](#mssmoothoutputsettings)
  * RtmpOutputSettings [RtmpOutputSettings](#rtmpoutputsettings)
  * UdpOutputSettings [UdpOutputSettings](#udpoutputsettings)

### PassThroughSettings
* PassThroughSettings `object`: Placeholder documentation for PassThroughSettings

### RemixSettings
* RemixSettings `object`: Placeholder documentation for RemixSettings
  * ChannelMappings **required** [__listOfAudioChannelMapping](#__listofaudiochannelmapping)
  * ChannelsIn [__integerMin1Max16](#__integermin1max16)
  * ChannelsOut [__integerMin1Max8](#__integermin1max8)

### ResourceConflict
* ResourceConflict `object`: Placeholder documentation for ResourceConflict
  * Message [__string](#__string)

### ResourceNotFound
* ResourceNotFound `object`: Placeholder documentation for ResourceNotFound
  * Message [__string](#__string)

### RtmpCacheFullBehavior
* RtmpCacheFullBehavior `string` (values: DISCONNECT_IMMEDIATELY, WAIT_FOR_SERVER): Placeholder documentation for RtmpCacheFullBehavior

### RtmpCaptionData
* RtmpCaptionData `string` (values: ALL, FIELD1_608, FIELD1_AND_FIELD2_608): Placeholder documentation for RtmpCaptionData

### RtmpCaptionInfoDestinationSettings
* RtmpCaptionInfoDestinationSettings `object`: Placeholder documentation for RtmpCaptionInfoDestinationSettings

### RtmpGroupSettings
* RtmpGroupSettings `object`: Placeholder documentation for RtmpGroupSettings
  * AuthenticationScheme [AuthenticationScheme](#authenticationscheme)
  * CacheFullBehavior [RtmpCacheFullBehavior](#rtmpcachefullbehavior)
  * CacheLength [__integerMin30](#__integermin30)
  * CaptionData [RtmpCaptionData](#rtmpcaptiondata)
  * RestartDelay [__integerMin0](#__integermin0)

### RtmpOutputCertificateMode
* RtmpOutputCertificateMode `string` (values: SELF_SIGNED, VERIFY_AUTHENTICITY): Placeholder documentation for RtmpOutputCertificateMode

### RtmpOutputSettings
* RtmpOutputSettings `object`: Placeholder documentation for RtmpOutputSettings
  * CertificateMode [RtmpOutputCertificateMode](#rtmpoutputcertificatemode)
  * ConnectionRetryInterval [__integerMin1](#__integermin1)
  * Destination **required** [OutputLocationRef](#outputlocationref)
  * NumRetries [__integerMin0](#__integermin0)

### Scte20Convert608To708
* Scte20Convert608To708 `string` (values: DISABLED, UPCONVERT): Placeholder documentation for Scte20Convert608To708

### Scte20PlusEmbeddedDestinationSettings
* Scte20PlusEmbeddedDestinationSettings `object`: Placeholder documentation for Scte20PlusEmbeddedDestinationSettings

### Scte20SourceSettings
* Scte20SourceSettings `object`: Placeholder documentation for Scte20SourceSettings
  * Convert608To708 [Scte20Convert608To708](#scte20convert608to708)
  * Source608ChannelNumber [__integerMin1Max4](#__integermin1max4)

### Scte27DestinationSettings
* Scte27DestinationSettings `object`: Placeholder documentation for Scte27DestinationSettings

### Scte27SourceSettings
* Scte27SourceSettings `object`: Placeholder documentation for Scte27SourceSettings
  * Pid [__integerMin1](#__integermin1)

### Scte35AposNoRegionalBlackoutBehavior
* Scte35AposNoRegionalBlackoutBehavior `string` (values: FOLLOW, IGNORE): Placeholder documentation for Scte35AposNoRegionalBlackoutBehavior

### Scte35AposWebDeliveryAllowedBehavior
* Scte35AposWebDeliveryAllowedBehavior `string` (values: FOLLOW, IGNORE): Placeholder documentation for Scte35AposWebDeliveryAllowedBehavior

### Scte35SpliceInsert
* Scte35SpliceInsert `object`: Placeholder documentation for Scte35SpliceInsert
  * AdAvailOffset [__integerMinNegative1000Max1000](#__integerminnegative1000max1000)
  * NoRegionalBlackoutFlag [Scte35SpliceInsertNoRegionalBlackoutBehavior](#scte35spliceinsertnoregionalblackoutbehavior)
  * WebDeliveryAllowedFlag [Scte35SpliceInsertWebDeliveryAllowedBehavior](#scte35spliceinsertwebdeliveryallowedbehavior)

### Scte35SpliceInsertNoRegionalBlackoutBehavior
* Scte35SpliceInsertNoRegionalBlackoutBehavior `string` (values: FOLLOW, IGNORE): Placeholder documentation for Scte35SpliceInsertNoRegionalBlackoutBehavior

### Scte35SpliceInsertWebDeliveryAllowedBehavior
* Scte35SpliceInsertWebDeliveryAllowedBehavior `string` (values: FOLLOW, IGNORE): Placeholder documentation for Scte35SpliceInsertWebDeliveryAllowedBehavior

### Scte35TimeSignalApos
* Scte35TimeSignalApos `object`: Placeholder documentation for Scte35TimeSignalApos
  * AdAvailOffset [__integerMinNegative1000Max1000](#__integerminnegative1000max1000)
  * NoRegionalBlackoutFlag [Scte35AposNoRegionalBlackoutBehavior](#scte35aposnoregionalblackoutbehavior)
  * WebDeliveryAllowedFlag [Scte35AposWebDeliveryAllowedBehavior](#scte35aposwebdeliveryallowedbehavior)

### SmoothGroupAudioOnlyTimecodeControl
* SmoothGroupAudioOnlyTimecodeControl `string` (values: PASSTHROUGH, USE_CONFIGURED_CLOCK): Placeholder documentation for SmoothGroupAudioOnlyTimecodeControl

### SmoothGroupCertificateMode
* SmoothGroupCertificateMode `string` (values: SELF_SIGNED, VERIFY_AUTHENTICITY): Placeholder documentation for SmoothGroupCertificateMode

### SmoothGroupEventIdMode
* SmoothGroupEventIdMode `string` (values: NO_EVENT_ID, USE_CONFIGURED, USE_TIMESTAMP): Placeholder documentation for SmoothGroupEventIdMode

### SmoothGroupEventStopBehavior
* SmoothGroupEventStopBehavior `string` (values: NONE, SEND_EOS): Placeholder documentation for SmoothGroupEventStopBehavior

### SmoothGroupSegmentationMode
* SmoothGroupSegmentationMode `string` (values: USE_INPUT_SEGMENTATION, USE_SEGMENT_DURATION): Placeholder documentation for SmoothGroupSegmentationMode

### SmoothGroupSparseTrackType
* SmoothGroupSparseTrackType `string` (values: NONE, SCTE_35): Placeholder documentation for SmoothGroupSparseTrackType

### SmoothGroupStreamManifestBehavior
* SmoothGroupStreamManifestBehavior `string` (values: DO_NOT_SEND, SEND): Placeholder documentation for SmoothGroupStreamManifestBehavior

### SmoothGroupTimestampOffsetMode
* SmoothGroupTimestampOffsetMode `string` (values: USE_CONFIGURED_OFFSET, USE_EVENT_START_DATE): Placeholder documentation for SmoothGroupTimestampOffsetMode

### SmpteTtDestinationSettings
* SmpteTtDestinationSettings `object`: Placeholder documentation for SmpteTtDestinationSettings

### StandardHlsSettings
* StandardHlsSettings `object`: Placeholder documentation for StandardHlsSettings
  * AudioRenditionSets [__string](#__string)
  * M3u8Settings **required** [M3u8Settings](#m3u8settings)

### StartChannelRequest
* StartChannelRequest `object`: Placeholder documentation for StartChannelRequest

### StartChannelResponse
* StartChannelResponse `object`: Placeholder documentation for StartChannelResponse
  * Arn [__string](#__string)
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EgressEndpoints [__listOfChannelEgressEndpoint](#__listofchannelegressendpoint)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * Id [__string](#__string)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * PipelinesRunningCount [__integer](#__integer)
  * RoleArn [__string](#__string)
  * State [ChannelState](#channelstate)

### StaticKeySettings
* StaticKeySettings `object`: Placeholder documentation for StaticKeySettings
  * KeyProviderServer [InputLocation](#inputlocation)
  * StaticKeyValue **required** [__stringMin32Max32](#__stringmin32max32)

### StopChannelRequest
* StopChannelRequest `object`: Placeholder documentation for StopChannelRequest

### StopChannelResponse
* StopChannelResponse `object`: Placeholder documentation for StopChannelResponse
  * Arn [__string](#__string)
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EgressEndpoints [__listOfChannelEgressEndpoint](#__listofchannelegressendpoint)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * Id [__string](#__string)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * PipelinesRunningCount [__integer](#__integer)
  * RoleArn [__string](#__string)
  * State [ChannelState](#channelstate)

### TeletextDestinationSettings
* TeletextDestinationSettings `object`: Placeholder documentation for TeletextDestinationSettings

### TeletextSourceSettings
* TeletextSourceSettings `object`: Placeholder documentation for TeletextSourceSettings
  * PageNumber [__string](#__string)

### TimecodeConfig
* TimecodeConfig `object`: Placeholder documentation for TimecodeConfig
  * Source **required** [TimecodeConfigSource](#timecodeconfigsource)
  * SyncThreshold [__integerMin1Max1000000](#__integermin1max1000000)

### TimecodeConfigSource
* TimecodeConfigSource `string` (values: EMBEDDED, SYSTEMCLOCK, ZEROBASED): Placeholder documentation for TimecodeConfigSource

### TooManyRequestsException
* TooManyRequestsException `object`: Placeholder documentation for TooManyRequestsException
  * Message [__string](#__string)

### TtmlDestinationSettings
* TtmlDestinationSettings `object`: Placeholder documentation for TtmlDestinationSettings
  * StyleControl [TtmlDestinationStyleControl](#ttmldestinationstylecontrol)

### TtmlDestinationStyleControl
* TtmlDestinationStyleControl `string` (values: PASSTHROUGH, USE_CONFIGURED): Placeholder documentation for TtmlDestinationStyleControl

### UdpContainerSettings
* UdpContainerSettings `object`: Placeholder documentation for UdpContainerSettings
  * M2tsSettings [M2tsSettings](#m2tssettings)

### UdpGroupSettings
* UdpGroupSettings `object`: Placeholder documentation for UdpGroupSettings
  * InputLossAction [InputLossActionForUdpOut](#inputlossactionforudpout)
  * TimedMetadataId3Frame [UdpTimedMetadataId3Frame](#udptimedmetadataid3frame)
  * TimedMetadataId3Period [__integerMin0](#__integermin0)

### UdpOutputSettings
* UdpOutputSettings `object`: Placeholder documentation for UdpOutputSettings
  * BufferMsec [__integerMin0Max10000](#__integermin0max10000)
  * ContainerSettings **required** [UdpContainerSettings](#udpcontainersettings)
  * Destination **required** [OutputLocationRef](#outputlocationref)
  * FecOutputSettings [FecOutputSettings](#fecoutputsettings)

### UdpTimedMetadataId3Frame
* UdpTimedMetadataId3Frame `string` (values: NONE, PRIV, TDRL): Placeholder documentation for UdpTimedMetadataId3Frame

### UnprocessableEntityException
* UnprocessableEntityException `object`: Placeholder documentation for UnprocessableEntityException
  * Message [__string](#__string)
  * ValidationErrors [__listOfValidationError](#__listofvalidationerror)

### UpdateChannel
* UpdateChannel `object`: Placeholder documentation for UpdateChannel
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * RoleArn [__string](#__string)

### UpdateChannelRequest
* UpdateChannelRequest `object`: A request to update a channel.
  * Destinations [__listOfOutputDestination](#__listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputAttachments [__listOfInputAttachment](#__listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * LogLevel [LogLevel](#loglevel)
  * Name [__string](#__string)
  * RoleArn [__string](#__string)

### UpdateChannelResponse
* UpdateChannelResponse `object`: Placeholder documentation for UpdateChannelResponse
  * Channel [Channel](#channel)

### UpdateChannelResultModel
* UpdateChannelResultModel `object`: The updated channel's description.
  * Channel [Channel](#channel)

### UpdateInput
* UpdateInput `object`: Placeholder documentation for UpdateInput
  * Destinations [__listOfInputDestinationRequest](#__listofinputdestinationrequest)
  * InputSecurityGroups [__listOf__string](#__listof__string)
  * Name [__string](#__string)
  * Sources [__listOfInputSourceRequest](#__listofinputsourcerequest)

### UpdateInputRequest
* UpdateInputRequest `object`: A request to update an input.
  * Destinations [__listOfInputDestinationRequest](#__listofinputdestinationrequest)
  * InputSecurityGroups [__listOf__string](#__listof__string)
  * Name [__string](#__string)
  * Sources [__listOfInputSourceRequest](#__listofinputsourcerequest)

### UpdateInputResponse
* UpdateInputResponse `object`: Placeholder documentation for UpdateInputResponse
  * Input [Input](#input)

### UpdateInputResultModel
* UpdateInputResultModel `object`: Placeholder documentation for UpdateInputResultModel
  * Input [Input](#input)

### UpdateInputSecurityGroupRequest
* UpdateInputSecurityGroupRequest `object`: The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.
  * WhitelistRules [__listOfInputWhitelistRuleCidr](#__listofinputwhitelistrulecidr)

### UpdateInputSecurityGroupResponse
* UpdateInputSecurityGroupResponse `object`: Placeholder documentation for UpdateInputSecurityGroupResponse
  * SecurityGroup [InputSecurityGroup](#inputsecuritygroup)

### UpdateInputSecurityGroupResultModel
* UpdateInputSecurityGroupResultModel `object`: Placeholder documentation for UpdateInputSecurityGroupResultModel
  * SecurityGroup [InputSecurityGroup](#inputsecuritygroup)

### ValidationError
* ValidationError `object`: Placeholder documentation for ValidationError
  * ElementPath [__string](#__string)
  * ErrorMessage [__string](#__string)

### VideoCodecSettings
* VideoCodecSettings `object`: Placeholder documentation for VideoCodecSettings
  * H264Settings [H264Settings](#h264settings)

### VideoDescription
* VideoDescription `object`: Video settings for this stream.
  * CodecSettings [VideoCodecSettings](#videocodecsettings)
  * Height [__integer](#__integer)
  * Name **required** [__string](#__string)
  * RespondToAfd [VideoDescriptionRespondToAfd](#videodescriptionrespondtoafd)
  * ScalingBehavior [VideoDescriptionScalingBehavior](#videodescriptionscalingbehavior)
  * Sharpness [__integerMin0Max100](#__integermin0max100)
  * Width [__integer](#__integer)

### VideoDescriptionRespondToAfd
* VideoDescriptionRespondToAfd `string` (values: NONE, PASSTHROUGH, RESPOND): Placeholder documentation for VideoDescriptionRespondToAfd

### VideoDescriptionScalingBehavior
* VideoDescriptionScalingBehavior `string` (values: DEFAULT, STRETCH_TO_OUTPUT): Placeholder documentation for VideoDescriptionScalingBehavior

### VideoSelector
* VideoSelector `object`: Specifies a particular video stream within an input source. An input may have only a single video selector.
  * ColorSpace [VideoSelectorColorSpace](#videoselectorcolorspace)
  * ColorSpaceUsage [VideoSelectorColorSpaceUsage](#videoselectorcolorspaceusage)
  * SelectorSettings [VideoSelectorSettings](#videoselectorsettings)

### VideoSelectorColorSpace
* VideoSelectorColorSpace `string` (values: FOLLOW, REC_601, REC_709): Placeholder documentation for VideoSelectorColorSpace

### VideoSelectorColorSpaceUsage
* VideoSelectorColorSpaceUsage `string` (values: FALLBACK, FORCE): Placeholder documentation for VideoSelectorColorSpaceUsage

### VideoSelectorPid
* VideoSelectorPid `object`: Placeholder documentation for VideoSelectorPid
  * Pid [__integerMin0Max8191](#__integermin0max8191)

### VideoSelectorProgramId
* VideoSelectorProgramId `object`: Placeholder documentation for VideoSelectorProgramId
  * ProgramId [__integerMin0Max65536](#__integermin0max65536)

### VideoSelectorSettings
* VideoSelectorSettings `object`: Placeholder documentation for VideoSelectorSettings
  * VideoSelectorPid [VideoSelectorPid](#videoselectorpid)
  * VideoSelectorProgramId [VideoSelectorProgramId](#videoselectorprogramid)

### WebvttDestinationSettings
* WebvttDestinationSettings `object`: Placeholder documentation for WebvttDestinationSettings

### __boolean
* __boolean `boolean`: Placeholder documentation for __boolean

### __double
* __double `number`: Placeholder documentation for __double

### __doubleMin0
* __doubleMin0 `number`: Placeholder documentation for __doubleMin0

### __doubleMin1
* __doubleMin1 `number`: Placeholder documentation for __doubleMin1

### __doubleMinNegative59Max0
* __doubleMinNegative59Max0 `number`: Placeholder documentation for __doubleMinNegative59Max0

### __integer
* __integer `integer`: Placeholder documentation for __integer

### __integerMin0
* __integerMin0 `integer`: Placeholder documentation for __integerMin0

### __integerMin0Max10
* __integerMin0Max10 `integer`: Placeholder documentation for __integerMin0Max10

### __integerMin0Max100
* __integerMin0Max100 `integer`: Placeholder documentation for __integerMin0Max100

### __integerMin0Max1000
* __integerMin0Max1000 `integer`: Placeholder documentation for __integerMin0Max1000

### __integerMin0Max10000
* __integerMin0Max10000 `integer`: Placeholder documentation for __integerMin0Max10000

### __integerMin0Max1000000
* __integerMin0Max1000000 `integer`: Placeholder documentation for __integerMin0Max1000000

### __integerMin0Max128
* __integerMin0Max128 `integer`: Placeholder documentation for __integerMin0Max128

### __integerMin0Max15
* __integerMin0Max15 `integer`: Placeholder documentation for __integerMin0Max15

### __integerMin0Max255
* __integerMin0Max255 `integer`: Placeholder documentation for __integerMin0Max255

### __integerMin0Max30
* __integerMin0Max30 `integer`: Placeholder documentation for __integerMin0Max30

### __integerMin0Max3600
* __integerMin0Max3600 `integer`: Placeholder documentation for __integerMin0Max3600

### __integerMin0Max500
* __integerMin0Max500 `integer`: Placeholder documentation for __integerMin0Max500

### __integerMin0Max600
* __integerMin0Max600 `integer`: Placeholder documentation for __integerMin0Max600

### __integerMin0Max65535
* __integerMin0Max65535 `integer`: Placeholder documentation for __integerMin0Max65535

### __integerMin0Max65536
* __integerMin0Max65536 `integer`: Placeholder documentation for __integerMin0Max65536

### __integerMin0Max7
* __integerMin0Max7 `integer`: Placeholder documentation for __integerMin0Max7

### __integerMin0Max8191
* __integerMin0Max8191 `integer`: Placeholder documentation for __integerMin0Max8191

### __integerMin1
* __integerMin1 `integer`: Placeholder documentation for __integerMin1

### __integerMin1000
* __integerMin1000 `integer`: Placeholder documentation for __integerMin1000

### __integerMin1000Max30000
* __integerMin1000Max30000 `integer`: Placeholder documentation for __integerMin1000Max30000

### __integerMin1Max1000000
* __integerMin1Max1000000 `integer`: Placeholder documentation for __integerMin1Max1000000

### __integerMin1Max16
* __integerMin1Max16 `integer`: Placeholder documentation for __integerMin1Max16

### __integerMin1Max20
* __integerMin1Max20 `integer`: Placeholder documentation for __integerMin1Max20

### __integerMin1Max31
* __integerMin1Max31 `integer`: Placeholder documentation for __integerMin1Max31

### __integerMin1Max32
* __integerMin1Max32 `integer`: Placeholder documentation for __integerMin1Max32

### __integerMin1Max4
* __integerMin1Max4 `integer`: Placeholder documentation for __integerMin1Max4

### __integerMin1Max5
* __integerMin1Max5 `integer`: Placeholder documentation for __integerMin1Max5

### __integerMin1Max6
* __integerMin1Max6 `integer`: Placeholder documentation for __integerMin1Max6

### __integerMin1Max8
* __integerMin1Max8 `integer`: Placeholder documentation for __integerMin1Max8

### __integerMin25Max10000
* __integerMin25Max10000 `integer`: Placeholder documentation for __integerMin25Max10000

### __integerMin25Max2000
* __integerMin25Max2000 `integer`: Placeholder documentation for __integerMin25Max2000

### __integerMin3
* __integerMin3 `integer`: Placeholder documentation for __integerMin3

### __integerMin30
* __integerMin30 `integer`: Placeholder documentation for __integerMin30

### __integerMin4Max20
* __integerMin4Max20 `integer`: Placeholder documentation for __integerMin4Max20

### __integerMin96Max600
* __integerMin96Max600 `integer`: Placeholder documentation for __integerMin96Max600

### __integerMinNegative1000Max1000
* __integerMinNegative1000Max1000 `integer`: Placeholder documentation for __integerMinNegative1000Max1000

### __integerMinNegative60Max6
* __integerMinNegative60Max6 `integer`: Placeholder documentation for __integerMinNegative60Max6

### __integerMinNegative60Max60
* __integerMinNegative60Max60 `integer`: Placeholder documentation for __integerMinNegative60Max60

### __listOfAudioChannelMapping
* __listOfAudioChannelMapping `array`: Placeholder documentation for __listOfAudioChannelMapping
  * items [AudioChannelMapping](#audiochannelmapping)

### __listOfAudioDescription
* __listOfAudioDescription `array`: Placeholder documentation for __listOfAudioDescription
  * items [AudioDescription](#audiodescription)

### __listOfAudioSelector
* __listOfAudioSelector `array`: Placeholder documentation for __listOfAudioSelector
  * items [AudioSelector](#audioselector)

### __listOfCaptionDescription
* __listOfCaptionDescription `array`: Placeholder documentation for __listOfCaptionDescription
  * items [CaptionDescription](#captiondescription)

### __listOfCaptionLanguageMapping
* __listOfCaptionLanguageMapping `array`: Placeholder documentation for __listOfCaptionLanguageMapping
  * items [CaptionLanguageMapping](#captionlanguagemapping)

### __listOfCaptionSelector
* __listOfCaptionSelector `array`: Placeholder documentation for __listOfCaptionSelector
  * items [CaptionSelector](#captionselector)

### __listOfChannelEgressEndpoint
* __listOfChannelEgressEndpoint `array`: Placeholder documentation for __listOfChannelEgressEndpoint
  * items [ChannelEgressEndpoint](#channelegressendpoint)

### __listOfChannelSummary
* __listOfChannelSummary `array`: Placeholder documentation for __listOfChannelSummary
  * items [ChannelSummary](#channelsummary)

### __listOfHlsAdMarkers
* __listOfHlsAdMarkers `array`: Placeholder documentation for __listOfHlsAdMarkers
  * items [HlsAdMarkers](#hlsadmarkers)

### __listOfInput
* __listOfInput `array`: Placeholder documentation for __listOfInput
  * items [Input](#input)

### __listOfInputAttachment
* __listOfInputAttachment `array`: Placeholder documentation for __listOfInputAttachment
  * items [InputAttachment](#inputattachment)

### __listOfInputChannelLevel
* __listOfInputChannelLevel `array`: Placeholder documentation for __listOfInputChannelLevel
  * items [InputChannelLevel](#inputchannellevel)

### __listOfInputDestination
* __listOfInputDestination `array`: Placeholder documentation for __listOfInputDestination
  * items [InputDestination](#inputdestination)

### __listOfInputDestinationRequest
* __listOfInputDestinationRequest `array`: Placeholder documentation for __listOfInputDestinationRequest
  * items [InputDestinationRequest](#inputdestinationrequest)

### __listOfInputSecurityGroup
* __listOfInputSecurityGroup `array`: Placeholder documentation for __listOfInputSecurityGroup
  * items [InputSecurityGroup](#inputsecuritygroup)

### __listOfInputSource
* __listOfInputSource `array`: Placeholder documentation for __listOfInputSource
  * items [InputSource](#inputsource)

### __listOfInputSourceRequest
* __listOfInputSourceRequest `array`: Placeholder documentation for __listOfInputSourceRequest
  * items [InputSourceRequest](#inputsourcerequest)

### __listOfInputWhitelistRule
* __listOfInputWhitelistRule `array`: Placeholder documentation for __listOfInputWhitelistRule
  * items [InputWhitelistRule](#inputwhitelistrule)

### __listOfInputWhitelistRuleCidr
* __listOfInputWhitelistRuleCidr `array`: Placeholder documentation for __listOfInputWhitelistRuleCidr
  * items [InputWhitelistRuleCidr](#inputwhitelistrulecidr)

### __listOfOutput
* __listOfOutput `array`: Placeholder documentation for __listOfOutput
  * items [Output](#output)

### __listOfOutputDestination
* __listOfOutputDestination `array`: Placeholder documentation for __listOfOutputDestination
  * items [OutputDestination](#outputdestination)

### __listOfOutputDestinationSettings
* __listOfOutputDestinationSettings `array`: Placeholder documentation for __listOfOutputDestinationSettings
  * items [OutputDestinationSettings](#outputdestinationsettings)

### __listOfOutputGroup
* __listOfOutputGroup `array`: Placeholder documentation for __listOfOutputGroup
  * items [OutputGroup](#outputgroup)

### __listOfValidationError
* __listOfValidationError `array`: Placeholder documentation for __listOfValidationError
  * items [ValidationError](#validationerror)

### __listOfVideoDescription
* __listOfVideoDescription `array`: Placeholder documentation for __listOfVideoDescription
  * items [VideoDescription](#videodescription)

### __listOf__string
* __listOf__string `array`: Placeholder documentation for __listOf__string
  * items [__string](#__string)

### __long
* __long `integer`: Placeholder documentation for __long

### __string
* __string `string`: Placeholder documentation for __string

### __stringMax32
* __stringMax32 `string`: Placeholder documentation for __stringMax32

### __stringMin1
* __stringMin1 `string`: Placeholder documentation for __stringMin1

### __stringMin1Max255
* __stringMin1Max255 `string`: Placeholder documentation for __stringMin1Max255

### __stringMin1Max256
* __stringMin1Max256 `string`: Placeholder documentation for __stringMin1Max256

### __stringMin32Max32
* __stringMin32Max32 `string`: Placeholder documentation for __stringMin32Max32

### __stringMin34Max34
* __stringMin34Max34 `string`: Placeholder documentation for __stringMin34Max34

### __stringMin3Max3
* __stringMin3Max3 `string`: Placeholder documentation for __stringMin3Max3

### __stringMin6Max6
* __stringMin6Max6 `string`: Placeholder documentation for __stringMin6Max6


