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
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputAttachments [ListOfInputAttachment](#listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
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
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputSpecification [InputSpecification](#inputspecification)
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
  * WhitelistRules [ListOfInputWhitelistRuleCidr](#listofinputwhitelistrulecidr)

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
  * Destinations [ListOfInputDestinationRequest](#listofinputdestinationrequest)
  * InputSecurityGroups [ListOf__string](#listof__string)
  * Name [__string](#__string)
  * RequestId [__string](#__string)
  * Sources [ListOfInputSourceRequest](#listofinputsourcerequest)
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
  * Dialnorm [__integer](#__integer)
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
  * Destination [OutputLocationRef](#outputlocationref)
  * RolloverInterval [__integer](#__integer)

### ArchiveOutputSettings
* ArchiveOutputSettings `object`: Placeholder documentation for ArchiveOutputSettings
  * ContainerSettings [ArchiveContainerSettings](#archivecontainersettings)
  * Extension [__string](#__string)
  * NameModifier [__string](#__string)

### AribDestinationSettings
* AribDestinationSettings `object`: Placeholder documentation for AribDestinationSettings

### AribSourceSettings
* AribSourceSettings `object`: Placeholder documentation for AribSourceSettings

### AudioChannelMapping
* AudioChannelMapping `object`: Placeholder documentation for AudioChannelMapping
  * InputChannelLevels [ListOfInputChannelLevel](#listofinputchannellevel)
  * OutputChannel [__integer](#__integer)

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
  * AudioSelectorName [__string](#__string)
  * AudioType [AudioType](#audiotype)
  * AudioTypeControl [AudioDescriptionAudioTypeControl](#audiodescriptionaudiotypecontrol)
  * CodecSettings [AudioCodecSettings](#audiocodecsettings)
  * LanguageCode [__string](#__string)
  * LanguageCodeControl [AudioDescriptionLanguageCodeControl](#audiodescriptionlanguagecodecontrol)
  * Name [__string](#__string)
  * RemixSettings [RemixSettings](#remixsettings)
  * StreamName [__string](#__string)

### AudioDescriptionAudioTypeControl
* AudioDescriptionAudioTypeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Placeholder documentation for AudioDescriptionAudioTypeControl

### AudioDescriptionLanguageCodeControl
* AudioDescriptionLanguageCodeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Placeholder documentation for AudioDescriptionLanguageCodeControl

### AudioLanguageSelection
* AudioLanguageSelection `object`: Placeholder documentation for AudioLanguageSelection
  * LanguageCode [__string](#__string)
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
  * TargetLkfs [__double](#__double)

### AudioOnlyHlsSettings
* AudioOnlyHlsSettings `object`: Placeholder documentation for AudioOnlyHlsSettings
  * AudioGroupId [__string](#__string)
  * AudioOnlyImage [InputLocation](#inputlocation)
  * AudioTrackType [AudioOnlyHlsTrackType](#audioonlyhlstracktype)

### AudioOnlyHlsTrackType
* AudioOnlyHlsTrackType `string` (values: ALTERNATE_AUDIO_AUTO_SELECT, ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT, ALTERNATE_AUDIO_NOT_AUTO_SELECT, AUDIO_ONLY_VARIANT_STREAM): Placeholder documentation for AudioOnlyHlsTrackType

### AudioPidSelection
* AudioPidSelection `object`: Placeholder documentation for AudioPidSelection
  * Pid [__integer](#__integer)

### AudioSelector
* AudioSelector `object`: Placeholder documentation for AudioSelector
  * Name [__string](#__string)
  * SelectorSettings [AudioSelectorSettings](#audioselectorsettings)

### AudioSelectorSettings
* AudioSelectorSettings `object`: Placeholder documentation for AudioSelectorSettings
  * AudioLanguageSelection [AudioLanguageSelection](#audiolanguageselection)
  * AudioPidSelection [AudioPidSelection](#audiopidselection)

### AudioType
* AudioType `string` (values: CLEAN_EFFECTS, HEARING_IMPAIRED, UNDEFINED, VISUAL_IMPAIRED_COMMENTARY): Placeholder documentation for AudioType

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
  * NetworkId [__string](#__string)
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
  * BackgroundOpacity [__integer](#__integer)
  * Font [InputLocation](#inputlocation)
  * FontColor [BurnInFontColor](#burninfontcolor)
  * FontOpacity [__integer](#__integer)
  * FontResolution [__integer](#__integer)
  * FontSize [__string](#__string)
  * OutlineColor [BurnInOutlineColor](#burninoutlinecolor)
  * OutlineSize [__integer](#__integer)
  * ShadowColor [BurnInShadowColor](#burninshadowcolor)
  * ShadowOpacity [__integer](#__integer)
  * ShadowXOffset [__integer](#__integer)
  * ShadowYOffset [__integer](#__integer)
  * TeletextGridControl [BurnInTeletextGridControl](#burninteletextgridcontrol)
  * XPosition [__integer](#__integer)
  * YPosition [__integer](#__integer)

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
  * CaptionSelectorName [__string](#__string)
  * DestinationSettings [CaptionDestinationSettings](#captiondestinationsettings)
  * LanguageCode [__string](#__string)
  * LanguageDescription [__string](#__string)
  * Name [__string](#__string)

### CaptionDestinationSettings
* CaptionDestinationSettings `object`: Placeholder documentation for CaptionDestinationSettings
  * AribDestinationSettings [AribDestinationSettings](#aribdestinationsettings)
  * BurnInDestinationSettings [BurnInDestinationSettings](#burnindestinationsettings)
  * DvbSubDestinationSettings [DvbSubDestinationSettings](#dvbsubdestinationsettings)
  * EmbeddedDestinationSettings [EmbeddedDestinationSettings](#embeddeddestinationsettings)
  * EmbeddedPlusScte20DestinationSettings [EmbeddedPlusScte20DestinationSettings](#embeddedplusscte20destinationsettings)
  * Scte20PlusEmbeddedDestinationSettings [Scte20PlusEmbeddedDestinationSettings](#scte20plusembeddeddestinationsettings)
  * Scte27DestinationSettings [Scte27DestinationSettings](#scte27destinationsettings)
  * SmpteTtDestinationSettings [SmpteTtDestinationSettings](#smptettdestinationsettings)
  * TeletextDestinationSettings [TeletextDestinationSettings](#teletextdestinationsettings)
  * TtmlDestinationSettings [TtmlDestinationSettings](#ttmldestinationsettings)
  * WebvttDestinationSettings [WebvttDestinationSettings](#webvttdestinationsettings)

### CaptionLanguageMapping
* CaptionLanguageMapping `object`: Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
  * CaptionChannel [__integer](#__integer)
  * LanguageCode [__string](#__string)
  * LanguageDescription [__string](#__string)

### CaptionSelector
* CaptionSelector `object`: Output groups for this Live Event. Output groups contain information about where streams should be distributed.
  * LanguageCode [__string](#__string)
  * Name [__string](#__string)
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
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EgressEndpoints [ListOfChannelEgressEndpoint](#listofchannelegressendpoint)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * Id [__string](#__string)
  * InputAttachments [ListOfInputAttachment](#listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * Name [__string](#__string)
  * PipelinesRunningCount [__integer](#__integer)
  * RoleArn [__string](#__string)
  * State [ChannelState](#channelstate)

### ChannelConfigurationValidationError
* ChannelConfigurationValidationError `object`: Placeholder documentation for ChannelConfigurationValidationError
  * Message [__string](#__string)
  * ValidationErrors [ListOfValidationError](#listofvalidationerror)

### ChannelEgressEndpoint
* ChannelEgressEndpoint `object`: Placeholder documentation for ChannelEgressEndpoint
  * SourceIp [__string](#__string)

### ChannelState
* ChannelState `string` (values: CREATING, CREATE_FAILED, IDLE, STARTING, RUNNING, RECOVERING, STOPPING, DELETING, DELETED): Placeholder documentation for ChannelState

### ChannelSummary
* ChannelSummary `object`: Placeholder documentation for ChannelSummary
  * Arn [__string](#__string)
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EgressEndpoints [ListOfChannelEgressEndpoint](#listofchannelegressendpoint)
  * Id [__string](#__string)
  * InputAttachments [ListOfInputAttachment](#listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * Name [__string](#__string)
  * PipelinesRunningCount [__integer](#__integer)
  * RoleArn [__string](#__string)
  * State [ChannelState](#channelstate)

### ConflictException
* ConflictException `object`: Placeholder documentation for ConflictException
  * Message [__string](#__string)

### CreateChannel
* CreateChannel `object`: Placeholder documentation for CreateChannel
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputAttachments [ListOfInputAttachment](#listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * Name [__string](#__string)
  * RequestId [__string](#__string)
  * Reserved [__string](#__string)
  * RoleArn [__string](#__string)

### CreateChannelRequest
* CreateChannelRequest `object`: A request to create a channel
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputAttachments [ListOfInputAttachment](#listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
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
  * Destinations [ListOfInputDestinationRequest](#listofinputdestinationrequest)
  * InputSecurityGroups [ListOf__string](#listof__string)
  * Name [__string](#__string)
  * RequestId [__string](#__string)
  * Sources [ListOfInputSourceRequest](#listofinputsourcerequest)
  * Type [InputType](#inputtype)

### CreateInputRequest
* CreateInputRequest `object`: The name of the input
  * Destinations [ListOfInputDestinationRequest](#listofinputdestinationrequest)
  * InputSecurityGroups [ListOf__string](#listof__string)
  * Name [__string](#__string)
  * RequestId [__string](#__string)
  * Sources [ListOfInputSourceRequest](#listofinputsourcerequest)
  * Type [InputType](#inputtype)

### CreateInputResponse
* CreateInputResponse `object`: Placeholder documentation for CreateInputResponse
  * Input [Input](#input)

### CreateInputResultModel
* CreateInputResultModel `object`: Placeholder documentation for CreateInputResultModel
  * Input [Input](#input)

### CreateInputSecurityGroupRequest
* CreateInputSecurityGroupRequest `object`: The IPv4 CIDRs to whitelist for this Input Security Group
  * WhitelistRules [ListOfInputWhitelistRuleCidr](#listofinputwhitelistrulecidr)

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
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EgressEndpoints [ListOfChannelEgressEndpoint](#listofchannelegressendpoint)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * Id [__string](#__string)
  * InputAttachments [ListOfInputAttachment](#listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
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
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EgressEndpoints [ListOfChannelEgressEndpoint](#listofchannelegressendpoint)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * Id [__string](#__string)
  * InputAttachments [ListOfInputAttachment](#listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * Name [__string](#__string)
  * PipelinesRunningCount [__integer](#__integer)
  * RoleArn [__string](#__string)
  * State [ChannelState](#channelstate)

### DescribeInputRequest
* DescribeInputRequest `object`: Placeholder documentation for DescribeInputRequest

### DescribeInputResponse
* DescribeInputResponse `object`: Placeholder documentation for DescribeInputResponse
  * Arn [__string](#__string)
  * AttachedChannels [ListOf__string](#listof__string)
  * Destinations [ListOfInputDestination](#listofinputdestination)
  * Id [__string](#__string)
  * Name [__string](#__string)
  * SecurityGroups [ListOf__string](#listof__string)
  * Sources [ListOfInputSource](#listofinputsource)
  * State [InputState](#inputstate)
  * Type [InputType](#inputtype)

### DescribeInputSecurityGroupRequest
* DescribeInputSecurityGroupRequest `object`: Placeholder documentation for DescribeInputSecurityGroupRequest

### DescribeInputSecurityGroupResponse
* DescribeInputSecurityGroupResponse `object`: Placeholder documentation for DescribeInputSecurityGroupResponse
  * Arn [__string](#__string)
  * Id [__string](#__string)
  * WhitelistRules [ListOfInputWhitelistRule](#listofinputwhitelistrule)

### DvbNitSettings
* DvbNitSettings `object`: DVB Network Information Table (NIT)
  * NetworkId [__integer](#__integer)
  * NetworkName [__string](#__string)
  * RepInterval [__integer](#__integer)

### DvbSdtOutputSdt
* DvbSdtOutputSdt `string` (values: SDT_FOLLOW, SDT_FOLLOW_IF_PRESENT, SDT_MANUAL, SDT_NONE): Placeholder documentation for DvbSdtOutputSdt

### DvbSdtSettings
* DvbSdtSettings `object`: DVB Service Description Table (SDT)
  * OutputSdt [DvbSdtOutputSdt](#dvbsdtoutputsdt)
  * RepInterval [__integer](#__integer)
  * ServiceName [__string](#__string)
  * ServiceProviderName [__string](#__string)

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
  * BackgroundOpacity [__integer](#__integer)
  * Font [InputLocation](#inputlocation)
  * FontColor [DvbSubDestinationFontColor](#dvbsubdestinationfontcolor)
  * FontOpacity [__integer](#__integer)
  * FontResolution [__integer](#__integer)
  * FontSize [__string](#__string)
  * OutlineColor [DvbSubDestinationOutlineColor](#dvbsubdestinationoutlinecolor)
  * OutlineSize [__integer](#__integer)
  * ShadowColor [DvbSubDestinationShadowColor](#dvbsubdestinationshadowcolor)
  * ShadowOpacity [__integer](#__integer)
  * ShadowXOffset [__integer](#__integer)
  * ShadowYOffset [__integer](#__integer)
  * TeletextGridControl [DvbSubDestinationTeletextGridControl](#dvbsubdestinationteletextgridcontrol)
  * XPosition [__integer](#__integer)
  * YPosition [__integer](#__integer)

### DvbSubDestinationShadowColor
* DvbSubDestinationShadowColor `string` (values: BLACK, NONE, WHITE): Placeholder documentation for DvbSubDestinationShadowColor

### DvbSubDestinationTeletextGridControl
* DvbSubDestinationTeletextGridControl `string` (values: FIXED, SCALED): Placeholder documentation for DvbSubDestinationTeletextGridControl

### DvbSubSourceSettings
* DvbSubSourceSettings `object`: Placeholder documentation for DvbSubSourceSettings
  * Pid [__integer](#__integer)

### DvbTdtSettings
* DvbTdtSettings `object`: DVB Time and Date Table (SDT)
  * RepInterval [__integer](#__integer)

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
  * Dialnorm [__integer](#__integer)
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
  * Source608ChannelNumber [__integer](#__integer)
  * Source608TrackNumber [__integer](#__integer)

### Empty
* Empty `object`: Placeholder documentation for Empty

### EncoderSettings
* EncoderSettings `object`: Placeholder documentation for EncoderSettings
  * AudioDescriptions [ListOfAudioDescription](#listofaudiodescription)
  * AvailBlanking [AvailBlanking](#availblanking)
  * AvailConfiguration [AvailConfiguration](#availconfiguration)
  * BlackoutSlate [BlackoutSlate](#blackoutslate)
  * CaptionDescriptions [ListOfCaptionDescription](#listofcaptiondescription)
  * GlobalConfiguration [GlobalConfiguration](#globalconfiguration)
  * OutputGroups [ListOfOutputGroup](#listofoutputgroup)
  * TimecodeConfig [TimecodeConfig](#timecodeconfig)
  * VideoDescriptions [ListOfVideoDescription](#listofvideodescription)

### FecOutputIncludeFec
* FecOutputIncludeFec `string` (values: COLUMN, COLUMN_AND_ROW): Placeholder documentation for FecOutputIncludeFec

### FecOutputSettings
* FecOutputSettings `object`: Placeholder documentation for FecOutputSettings
  * ColumnDepth [__integer](#__integer)
  * IncludeFec [FecOutputIncludeFec](#fecoutputincludefec)
  * RowLength [__integer](#__integer)

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
  * InitialAudioGain [__integer](#__integer)
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
  * Bitrate [__integer](#__integer)
  * BufFillPct [__integer](#__integer)
  * BufSize [__integer](#__integer)
  * ColorMetadata [H264ColorMetadata](#h264colormetadata)
  * EntropyEncoding [H264EntropyEncoding](#h264entropyencoding)
  * FixedAfd [FixedAfd](#fixedafd)
  * FlickerAq [H264FlickerAq](#h264flickeraq)
  * FramerateControl [H264FramerateControl](#h264frameratecontrol)
  * FramerateDenominator [__integer](#__integer)
  * FramerateNumerator [__integer](#__integer)
  * GopBReference [H264GopBReference](#h264gopbreference)
  * GopClosedCadence [__integer](#__integer)
  * GopNumBFrames [__integer](#__integer)
  * GopSize [__double](#__double)
  * GopSizeUnits [H264GopSizeUnits](#h264gopsizeunits)
  * Level [H264Level](#h264level)
  * LookAheadRateControl [H264LookAheadRateControl](#h264lookaheadratecontrol)
  * MaxBitrate [__integer](#__integer)
  * MinIInterval [__integer](#__integer)
  * NumRefFrames [__integer](#__integer)
  * ParControl [H264ParControl](#h264parcontrol)
  * ParDenominator [__integer](#__integer)
  * ParNumerator [__integer](#__integer)
  * Profile [H264Profile](#h264profile)
  * RateControlMode [H264RateControlMode](#h264ratecontrolmode)
  * ScanType [H264ScanType](#h264scantype)
  * SceneChangeDetect [H264SceneChangeDetect](#h264scenechangedetect)
  * Slices [__integer](#__integer)
  * Softness [__integer](#__integer)
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
  * ConnectionRetryInterval [__integer](#__integer)
  * FilecacheDuration [__integer](#__integer)
  * HttpTransferMode [HlsAkamaiHttpTransferMode](#hlsakamaihttptransfermode)
  * NumRetries [__integer](#__integer)
  * RestartDelay [__integer](#__integer)
  * Salt [__string](#__string)
  * Token [__string](#__string)

### HlsBasicPutSettings
* HlsBasicPutSettings `object`: Placeholder documentation for HlsBasicPutSettings
  * ConnectionRetryInterval [__integer](#__integer)
  * FilecacheDuration [__integer](#__integer)
  * NumRetries [__integer](#__integer)
  * RestartDelay [__integer](#__integer)

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
  * AdMarkers [ListOfHlsAdMarkers](#listofhlsadmarkers)
  * BaseUrlContent [__string](#__string)
  * BaseUrlManifest [__string](#__string)
  * CaptionLanguageMappings [ListOfCaptionLanguageMapping](#listofcaptionlanguagemapping)
  * CaptionLanguageSetting [HlsCaptionLanguageSetting](#hlscaptionlanguagesetting)
  * ClientCache [HlsClientCache](#hlsclientcache)
  * CodecSpecification [HlsCodecSpecification](#hlscodecspecification)
  * ConstantIv [__string](#__string)
  * Destination [OutputLocationRef](#outputlocationref)
  * DirectoryStructure [HlsDirectoryStructure](#hlsdirectorystructure)
  * EncryptionType [HlsEncryptionType](#hlsencryptiontype)
  * HlsCdnSettings [HlsCdnSettings](#hlscdnsettings)
  * IndexNSegments [__integer](#__integer)
  * InputLossAction [InputLossActionForHlsOut](#inputlossactionforhlsout)
  * IvInManifest [HlsIvInManifest](#hlsivinmanifest)
  * IvSource [HlsIvSource](#hlsivsource)
  * KeepSegments [__integer](#__integer)
  * KeyFormat [__string](#__string)
  * KeyFormatVersions [__string](#__string)
  * KeyProviderSettings [KeyProviderSettings](#keyprovidersettings)
  * ManifestCompression [HlsManifestCompression](#hlsmanifestcompression)
  * ManifestDurationFormat [HlsManifestDurationFormat](#hlsmanifestdurationformat)
  * MinSegmentLength [__integer](#__integer)
  * Mode [HlsMode](#hlsmode)
  * OutputSelection [HlsOutputSelection](#hlsoutputselection)
  * ProgramDateTime [HlsProgramDateTime](#hlsprogramdatetime)
  * ProgramDateTimePeriod [__integer](#__integer)
  * SegmentLength [__integer](#__integer)
  * SegmentationMode [HlsSegmentationMode](#hlssegmentationmode)
  * SegmentsPerSubdirectory [__integer](#__integer)
  * StreamInfResolution [HlsStreamInfResolution](#hlsstreaminfresolution)
  * TimedMetadataId3Frame [HlsTimedMetadataId3Frame](#hlstimedmetadataid3frame)
  * TimedMetadataId3Period [__integer](#__integer)
  * TimestampDeltaMilliseconds [__integer](#__integer)
  * TsFileMode [HlsTsFileMode](#hlstsfilemode)

### HlsInputSettings
* HlsInputSettings `object`: Placeholder documentation for HlsInputSettings
  * Bandwidth [__integer](#__integer)
  * BufferSegments [__integer](#__integer)
  * Retries [__integer](#__integer)
  * RetryInterval [__integer](#__integer)

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
  * ConnectionRetryInterval [__integer](#__integer)
  * FilecacheDuration [__integer](#__integer)
  * MediaStoreStorageClass [HlsMediaStoreStorageClass](#hlsmediastorestorageclass)
  * NumRetries [__integer](#__integer)
  * RestartDelay [__integer](#__integer)

### HlsMediaStoreStorageClass
* HlsMediaStoreStorageClass `string` (values: TEMPORAL): Placeholder documentation for HlsMediaStoreStorageClass

### HlsMode
* HlsMode `string` (values: LIVE, VOD): Placeholder documentation for HlsMode

### HlsOutputSelection
* HlsOutputSelection `string` (values: MANIFESTS_AND_SEGMENTS, SEGMENTS_ONLY): Placeholder documentation for HlsOutputSelection

### HlsOutputSettings
* HlsOutputSettings `object`: Placeholder documentation for HlsOutputSettings
  * HlsSettings [HlsSettings](#hlssettings)
  * NameModifier [__string](#__string)
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
  * ConnectionRetryInterval [__integer](#__integer)
  * FilecacheDuration [__integer](#__integer)
  * HttpTransferMode [HlsWebdavHttpTransferMode](#hlswebdavhttptransfermode)
  * NumRetries [__integer](#__integer)
  * RestartDelay [__integer](#__integer)

### Input
* Input `object`: Placeholder documentation for Input
  * Arn [__string](#__string)
  * AttachedChannels [ListOf__string](#listof__string)
  * Destinations [ListOfInputDestination](#listofinputdestination)
  * Id [__string](#__string)
  * Name [__string](#__string)
  * SecurityGroups [ListOf__string](#listof__string)
  * Sources [ListOfInputSource](#listofinputsource)
  * State [InputState](#inputstate)
  * Type [InputType](#inputtype)

### InputAttachment
* InputAttachment `object`: Placeholder documentation for InputAttachment
  * InputId [__string](#__string)
  * InputSettings [InputSettings](#inputsettings)

### InputChannelLevel
* InputChannelLevel `object`: Placeholder documentation for InputChannelLevel
  * Gain [__integer](#__integer)
  * InputChannel [__integer](#__integer)

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
  * Uri [__string](#__string)
  * Username [__string](#__string)

### InputLossActionForHlsOut
* InputLossActionForHlsOut `string` (values: EMIT_OUTPUT, PAUSE_OUTPUT): Placeholder documentation for InputLossActionForHlsOut

### InputLossActionForMsSmoothOut
* InputLossActionForMsSmoothOut `string` (values: EMIT_OUTPUT, PAUSE_OUTPUT): Placeholder documentation for InputLossActionForMsSmoothOut

### InputLossActionForUdpOut
* InputLossActionForUdpOut `string` (values: DROP_PROGRAM, DROP_TS, EMIT_PROGRAM): Placeholder documentation for InputLossActionForUdpOut

### InputLossBehavior
* InputLossBehavior `object`: Placeholder documentation for InputLossBehavior
  * BlackFrameMsec [__integer](#__integer)
  * InputLossImageColor [__string](#__string)
  * InputLossImageSlate [InputLocation](#inputlocation)
  * InputLossImageType [InputLossImageType](#inputlossimagetype)
  * RepeatFrameMsec [__integer](#__integer)

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
  * WhitelistRules [ListOfInputWhitelistRule](#listofinputwhitelistrule)

### InputSecurityGroupWhitelistRequest
* InputSecurityGroupWhitelistRequest `object`: Request of IPv4 CIDR addresses to whitelist in a security group.
  * WhitelistRules [ListOfInputWhitelistRuleCidr](#listofinputwhitelistrulecidr)

### InputSettings
* InputSettings `object`: Live Event input parameters. There can be multiple inputs in a single Live Event.
  * AudioSelectors [ListOfAudioSelector](#listofaudioselector)
  * CaptionSelectors [ListOfCaptionSelector](#listofcaptionselector)
  * DeblockFilter [InputDeblockFilter](#inputdeblockfilter)
  * DenoiseFilter [InputDenoiseFilter](#inputdenoisefilter)
  * FilterStrength [__integer](#__integer)
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
  * Channels [ListOfChannelSummary](#listofchannelsummary)
  * NextToken [__string](#__string)

### ListChannelsResultModel
* ListChannelsResultModel `object`: Placeholder documentation for ListChannelsResultModel
  * Channels [ListOfChannelSummary](#listofchannelsummary)
  * NextToken [__string](#__string)

### ListInputSecurityGroupsRequest
* ListInputSecurityGroupsRequest `object`: Placeholder documentation for ListInputSecurityGroupsRequest

### ListInputSecurityGroupsResponse
* ListInputSecurityGroupsResponse `object`: Placeholder documentation for ListInputSecurityGroupsResponse
  * InputSecurityGroups [ListOfInputSecurityGroup](#listofinputsecuritygroup)
  * NextToken [__string](#__string)

### ListInputSecurityGroupsResultModel
* ListInputSecurityGroupsResultModel `object`: Result of input security group list request
  * InputSecurityGroups [ListOfInputSecurityGroup](#listofinputsecuritygroup)
  * NextToken [__string](#__string)

### ListInputsRequest
* ListInputsRequest `object`: Placeholder documentation for ListInputsRequest

### ListInputsResponse
* ListInputsResponse `object`: Placeholder documentation for ListInputsResponse
  * Inputs [ListOfInput](#listofinput)
  * NextToken [__string](#__string)

### ListInputsResultModel
* ListInputsResultModel `object`: Placeholder documentation for ListInputsResultModel
  * Inputs [ListOfInput](#listofinput)
  * NextToken [__string](#__string)

### ListOfAudioChannelMapping
* ListOfAudioChannelMapping `array`: Placeholder documentation for ListOfAudioChannelMapping
  * items [AudioChannelMapping](#audiochannelmapping)

### ListOfAudioDescription
* ListOfAudioDescription `array`: Placeholder documentation for ListOfAudioDescription
  * items [AudioDescription](#audiodescription)

### ListOfAudioSelector
* ListOfAudioSelector `array`: Placeholder documentation for ListOfAudioSelector
  * items [AudioSelector](#audioselector)

### ListOfCaptionDescription
* ListOfCaptionDescription `array`: Placeholder documentation for ListOfCaptionDescription
  * items [CaptionDescription](#captiondescription)

### ListOfCaptionLanguageMapping
* ListOfCaptionLanguageMapping `array`: Placeholder documentation for ListOfCaptionLanguageMapping
  * items [CaptionLanguageMapping](#captionlanguagemapping)

### ListOfCaptionSelector
* ListOfCaptionSelector `array`: Placeholder documentation for ListOfCaptionSelector
  * items [CaptionSelector](#captionselector)

### ListOfChannelEgressEndpoint
* ListOfChannelEgressEndpoint `array`: Placeholder documentation for ListOfChannelEgressEndpoint
  * items [ChannelEgressEndpoint](#channelegressendpoint)

### ListOfChannelSummary
* ListOfChannelSummary `array`: Placeholder documentation for ListOfChannelSummary
  * items [ChannelSummary](#channelsummary)

### ListOfHlsAdMarkers
* ListOfHlsAdMarkers `array`: Placeholder documentation for ListOfHlsAdMarkers
  * items [HlsAdMarkers](#hlsadmarkers)

### ListOfInput
* ListOfInput `array`: Placeholder documentation for ListOfInput
  * items [Input](#input)

### ListOfInputAttachment
* ListOfInputAttachment `array`: Placeholder documentation for ListOfInputAttachment
  * items [InputAttachment](#inputattachment)

### ListOfInputChannelLevel
* ListOfInputChannelLevel `array`: Placeholder documentation for ListOfInputChannelLevel
  * items [InputChannelLevel](#inputchannellevel)

### ListOfInputDestination
* ListOfInputDestination `array`: Placeholder documentation for ListOfInputDestination
  * items [InputDestination](#inputdestination)

### ListOfInputDestinationRequest
* ListOfInputDestinationRequest `array`: Placeholder documentation for ListOfInputDestinationRequest
  * items [InputDestinationRequest](#inputdestinationrequest)

### ListOfInputSecurityGroup
* ListOfInputSecurityGroup `array`: Placeholder documentation for ListOfInputSecurityGroup
  * items [InputSecurityGroup](#inputsecuritygroup)

### ListOfInputSource
* ListOfInputSource `array`: Placeholder documentation for ListOfInputSource
  * items [InputSource](#inputsource)

### ListOfInputSourceRequest
* ListOfInputSourceRequest `array`: Placeholder documentation for ListOfInputSourceRequest
  * items [InputSourceRequest](#inputsourcerequest)

### ListOfInputWhitelistRule
* ListOfInputWhitelistRule `array`: Placeholder documentation for ListOfInputWhitelistRule
  * items [InputWhitelistRule](#inputwhitelistrule)

### ListOfInputWhitelistRuleCidr
* ListOfInputWhitelistRuleCidr `array`: Placeholder documentation for ListOfInputWhitelistRuleCidr
  * items [InputWhitelistRuleCidr](#inputwhitelistrulecidr)

### ListOfOutput
* ListOfOutput `array`: Placeholder documentation for ListOfOutput
  * items [Output](#output)

### ListOfOutputDestination
* ListOfOutputDestination `array`: Placeholder documentation for ListOfOutputDestination
  * items [OutputDestination](#outputdestination)

### ListOfOutputDestinationSettings
* ListOfOutputDestinationSettings `array`: Placeholder documentation for ListOfOutputDestinationSettings
  * items [OutputDestinationSettings](#outputdestinationsettings)

### ListOfOutputGroup
* ListOfOutputGroup `array`: Placeholder documentation for ListOfOutputGroup
  * items [OutputGroup](#outputgroup)

### ListOfValidationError
* ListOfValidationError `array`: Placeholder documentation for ListOfValidationError
  * items [ValidationError](#validationerror)

### ListOfVideoDescription
* ListOfVideoDescription `array`: Placeholder documentation for ListOfVideoDescription
  * items [VideoDescription](#videodescription)

### ListOf__string
* ListOf__string `array`: Placeholder documentation for ListOf__string
  * items [__string](#__string)

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
  * AudioFramesPerPes [__integer](#__integer)
  * AudioPids [__string](#__string)
  * AudioStreamType [M2tsAudioStreamType](#m2tsaudiostreamtype)
  * Bitrate [__integer](#__integer)
  * BufferModel [M2tsBufferModel](#m2tsbuffermodel)
  * CcDescriptor [M2tsCcDescriptor](#m2tsccdescriptor)
  * DvbNitSettings [DvbNitSettings](#dvbnitsettings)
  * DvbSdtSettings [DvbSdtSettings](#dvbsdtsettings)
  * DvbSubPids [__string](#__string)
  * DvbTdtSettings [DvbTdtSettings](#dvbtdtsettings)
  * DvbTeletextPid [__string](#__string)
  * Ebif [M2tsEbifControl](#m2tsebifcontrol)
  * EbpAudioInterval [M2tsAudioInterval](#m2tsaudiointerval)
  * EbpLookaheadMs [__integer](#__integer)
  * EbpPlacement [M2tsEbpPlacement](#m2tsebpplacement)
  * EcmPid [__string](#__string)
  * EsRateInPes [M2tsEsRateInPes](#m2tsesrateinpes)
  * EtvPlatformPid [__string](#__string)
  * EtvSignalPid [__string](#__string)
  * FragmentTime [__double](#__double)
  * Klv [M2tsKlv](#m2tsklv)
  * KlvDataPids [__string](#__string)
  * NullPacketBitrate [__double](#__double)
  * PatInterval [__integer](#__integer)
  * PcrControl [M2tsPcrControl](#m2tspcrcontrol)
  * PcrPeriod [__integer](#__integer)
  * PcrPid [__string](#__string)
  * PmtInterval [__integer](#__integer)
  * PmtPid [__string](#__string)
  * ProgramNum [__integer](#__integer)
  * RateMode [M2tsRateMode](#m2tsratemode)
  * Scte27Pids [__string](#__string)
  * Scte35Control [M2tsScte35Control](#m2tsscte35control)
  * Scte35Pid [__string](#__string)
  * SegmentationMarkers [M2tsSegmentationMarkers](#m2tssegmentationmarkers)
  * SegmentationStyle [M2tsSegmentationStyle](#m2tssegmentationstyle)
  * SegmentationTime [__double](#__double)
  * TimedMetadataBehavior [M2tsTimedMetadataBehavior](#m2tstimedmetadatabehavior)
  * TimedMetadataPid [__string](#__string)
  * TransportStreamId [__integer](#__integer)
  * VideoPid [__string](#__string)

### M2tsTimedMetadataBehavior
* M2tsTimedMetadataBehavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): Placeholder documentation for M2tsTimedMetadataBehavior

### M3u8PcrControl
* M3u8PcrControl `string` (values: CONFIGURED_PCR_PERIOD, PCR_EVERY_PES_PACKET): Placeholder documentation for M3u8PcrControl

### M3u8Scte35Behavior
* M3u8Scte35Behavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): Placeholder documentation for M3u8Scte35Behavior

### M3u8Settings
* M3u8Settings `object`: Settings information for the .m3u8 container
  * AudioFramesPerPes [__integer](#__integer)
  * AudioPids [__string](#__string)
  * EcmPid [__string](#__string)
  * PatInterval [__integer](#__integer)
  * PcrControl [M3u8PcrControl](#m3u8pcrcontrol)
  * PcrPeriod [__integer](#__integer)
  * PcrPid [__string](#__string)
  * PmtInterval [__integer](#__integer)
  * PmtPid [__string](#__string)
  * ProgramNum [__integer](#__integer)
  * Scte35Behavior [M3u8Scte35Behavior](#m3u8scte35behavior)
  * Scte35Pid [__string](#__string)
  * TimedMetadataBehavior [M3u8TimedMetadataBehavior](#m3u8timedmetadatabehavior)
  * TransportStreamId [__integer](#__integer)
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
  * ConnectionRetryInterval [__integer](#__integer)
  * Destination [OutputLocationRef](#outputlocationref)
  * EventId [__string](#__string)
  * EventIdMode [SmoothGroupEventIdMode](#smoothgroupeventidmode)
  * EventStopBehavior [SmoothGroupEventStopBehavior](#smoothgroupeventstopbehavior)
  * FilecacheDuration [__integer](#__integer)
  * FragmentLength [__integer](#__integer)
  * InputLossAction [InputLossActionForMsSmoothOut](#inputlossactionformssmoothout)
  * NumRetries [__integer](#__integer)
  * RestartDelay [__integer](#__integer)
  * SegmentationMode [SmoothGroupSegmentationMode](#smoothgroupsegmentationmode)
  * SendDelayMs [__integer](#__integer)
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
  * AudioDescriptionNames [ListOf__string](#listof__string)
  * CaptionDescriptionNames [ListOf__string](#listof__string)
  * OutputName [__string](#__string)
  * OutputSettings [OutputSettings](#outputsettings)
  * VideoDescriptionName [__string](#__string)

### OutputDestination
* OutputDestination `object`: Placeholder documentation for OutputDestination
  * Id [__string](#__string)
  * Settings [ListOfOutputDestinationSettings](#listofoutputdestinationsettings)

### OutputDestinationSettings
* OutputDestinationSettings `object`: Placeholder documentation for OutputDestinationSettings
  * PasswordParam [__string](#__string)
  * Url [__string](#__string)
  * Username [__string](#__string)

### OutputGroup
* OutputGroup `object`: Output groups for this Live Event. Output groups contain information about where streams should be distributed.
  * Name [__string](#__string)
  * OutputGroupSettings [OutputGroupSettings](#outputgroupsettings)
  * Outputs [ListOfOutput](#listofoutput)

### OutputGroupSettings
* OutputGroupSettings `object`: Placeholder documentation for OutputGroupSettings
  * ArchiveGroupSettings [ArchiveGroupSettings](#archivegroupsettings)
  * HlsGroupSettings [HlsGroupSettings](#hlsgroupsettings)
  * MsSmoothGroupSettings [MsSmoothGroupSettings](#mssmoothgroupsettings)
  * UdpGroupSettings [UdpGroupSettings](#udpgroupsettings)

### OutputLocationRef
* OutputLocationRef `object`: Reference to an OutputDestination ID defined in the channel
  * DestinationRefId [__string](#__string)

### OutputSettings
* OutputSettings `object`: Placeholder documentation for OutputSettings
  * ArchiveOutputSettings [ArchiveOutputSettings](#archiveoutputsettings)
  * HlsOutputSettings [HlsOutputSettings](#hlsoutputsettings)
  * MsSmoothOutputSettings [MsSmoothOutputSettings](#mssmoothoutputsettings)
  * UdpOutputSettings [UdpOutputSettings](#udpoutputsettings)

### PassThroughSettings
* PassThroughSettings `object`: Placeholder documentation for PassThroughSettings

### RemixSettings
* RemixSettings `object`: Placeholder documentation for RemixSettings
  * ChannelMappings [ListOfAudioChannelMapping](#listofaudiochannelmapping)
  * ChannelsIn [__integer](#__integer)
  * ChannelsOut [__integer](#__integer)

### ResourceConflict
* ResourceConflict `object`: Placeholder documentation for ResourceConflict
  * Message [__string](#__string)

### ResourceNotFound
* ResourceNotFound `object`: Placeholder documentation for ResourceNotFound
  * Message [__string](#__string)

### Scte20Convert608To708
* Scte20Convert608To708 `string` (values: DISABLED, UPCONVERT): Placeholder documentation for Scte20Convert608To708

### Scte20PlusEmbeddedDestinationSettings
* Scte20PlusEmbeddedDestinationSettings `object`: Placeholder documentation for Scte20PlusEmbeddedDestinationSettings

### Scte20SourceSettings
* Scte20SourceSettings `object`: Placeholder documentation for Scte20SourceSettings
  * Convert608To708 [Scte20Convert608To708](#scte20convert608to708)
  * Source608ChannelNumber [__integer](#__integer)

### Scte27DestinationSettings
* Scte27DestinationSettings `object`: Placeholder documentation for Scte27DestinationSettings

### Scte27SourceSettings
* Scte27SourceSettings `object`: Placeholder documentation for Scte27SourceSettings
  * Pid [__integer](#__integer)

### Scte35AposNoRegionalBlackoutBehavior
* Scte35AposNoRegionalBlackoutBehavior `string` (values: FOLLOW, IGNORE): Placeholder documentation for Scte35AposNoRegionalBlackoutBehavior

### Scte35AposWebDeliveryAllowedBehavior
* Scte35AposWebDeliveryAllowedBehavior `string` (values: FOLLOW, IGNORE): Placeholder documentation for Scte35AposWebDeliveryAllowedBehavior

### Scte35SpliceInsert
* Scte35SpliceInsert `object`: Placeholder documentation for Scte35SpliceInsert
  * AdAvailOffset [__integer](#__integer)
  * NoRegionalBlackoutFlag [Scte35SpliceInsertNoRegionalBlackoutBehavior](#scte35spliceinsertnoregionalblackoutbehavior)
  * WebDeliveryAllowedFlag [Scte35SpliceInsertWebDeliveryAllowedBehavior](#scte35spliceinsertwebdeliveryallowedbehavior)

### Scte35SpliceInsertNoRegionalBlackoutBehavior
* Scte35SpliceInsertNoRegionalBlackoutBehavior `string` (values: FOLLOW, IGNORE): Placeholder documentation for Scte35SpliceInsertNoRegionalBlackoutBehavior

### Scte35SpliceInsertWebDeliveryAllowedBehavior
* Scte35SpliceInsertWebDeliveryAllowedBehavior `string` (values: FOLLOW, IGNORE): Placeholder documentation for Scte35SpliceInsertWebDeliveryAllowedBehavior

### Scte35TimeSignalApos
* Scte35TimeSignalApos `object`: Placeholder documentation for Scte35TimeSignalApos
  * AdAvailOffset [__integer](#__integer)
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
  * M3u8Settings [M3u8Settings](#m3u8settings)

### StartChannelRequest
* StartChannelRequest `object`: Placeholder documentation for StartChannelRequest

### StartChannelResponse
* StartChannelResponse `object`: Placeholder documentation for StartChannelResponse
  * Arn [__string](#__string)
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EgressEndpoints [ListOfChannelEgressEndpoint](#listofchannelegressendpoint)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * Id [__string](#__string)
  * InputAttachments [ListOfInputAttachment](#listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
  * Name [__string](#__string)
  * PipelinesRunningCount [__integer](#__integer)
  * RoleArn [__string](#__string)
  * State [ChannelState](#channelstate)

### StaticKeySettings
* StaticKeySettings `object`: Placeholder documentation for StaticKeySettings
  * KeyProviderServer [InputLocation](#inputlocation)
  * StaticKeyValue [__string](#__string)

### StopChannelRequest
* StopChannelRequest `object`: Placeholder documentation for StopChannelRequest

### StopChannelResponse
* StopChannelResponse `object`: Placeholder documentation for StopChannelResponse
  * Arn [__string](#__string)
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EgressEndpoints [ListOfChannelEgressEndpoint](#listofchannelegressendpoint)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * Id [__string](#__string)
  * InputAttachments [ListOfInputAttachment](#listofinputattachment)
  * InputSpecification [InputSpecification](#inputspecification)
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
  * Source [TimecodeConfigSource](#timecodeconfigsource)
  * SyncThreshold [__integer](#__integer)

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
  * TimedMetadataId3Period [__integer](#__integer)

### UdpOutputSettings
* UdpOutputSettings `object`: Placeholder documentation for UdpOutputSettings
  * BufferMsec [__integer](#__integer)
  * ContainerSettings [UdpContainerSettings](#udpcontainersettings)
  * Destination [OutputLocationRef](#outputlocationref)
  * FecOutputSettings [FecOutputSettings](#fecoutputsettings)

### UdpTimedMetadataId3Frame
* UdpTimedMetadataId3Frame `string` (values: NONE, PRIV, TDRL): Placeholder documentation for UdpTimedMetadataId3Frame

### UnprocessableEntityException
* UnprocessableEntityException `object`: Placeholder documentation for UnprocessableEntityException
  * Message [__string](#__string)
  * ValidationErrors [ListOfValidationError](#listofvalidationerror)

### UpdateChannel
* UpdateChannel `object`: Placeholder documentation for UpdateChannel
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputSpecification [InputSpecification](#inputspecification)
  * Name [__string](#__string)
  * RoleArn [__string](#__string)

### UpdateChannelRequest
* UpdateChannelRequest `object`: A request to update a channel.
  * Destinations [ListOfOutputDestination](#listofoutputdestination)
  * EncoderSettings [EncoderSettings](#encodersettings)
  * InputSpecification [InputSpecification](#inputspecification)
  * Name [__string](#__string)
  * RoleArn [__string](#__string)

### UpdateChannelResponse
* UpdateChannelResponse `object`: Placeholder documentation for UpdateChannelResponse
  * Channel [Channel](#channel)

### UpdateChannelResultModel
* UpdateChannelResultModel `object`: The updated channel's description.
  * Channel [Channel](#channel)

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
  * Name [__string](#__string)
  * RespondToAfd [VideoDescriptionRespondToAfd](#videodescriptionrespondtoafd)
  * ScalingBehavior [VideoDescriptionScalingBehavior](#videodescriptionscalingbehavior)
  * Sharpness [__integer](#__integer)
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
  * Pid [__integer](#__integer)

### VideoSelectorProgramId
* VideoSelectorProgramId `object`: Placeholder documentation for VideoSelectorProgramId
  * ProgramId [__integer](#__integer)

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

### __integer
* __integer `integer`: Placeholder documentation for __integer

### __string
* __string `string`: Placeholder documentation for __string

### __timestamp
* __timestamp `string`: Placeholder documentation for __timestamp


