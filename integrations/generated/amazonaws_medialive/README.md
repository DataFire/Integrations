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

.then(data => {
  console.log(data);
});
```

## Description

API for AWS Elemental MediaLive

## Actions

### BatchDelete



```js
amazonaws_medialive.BatchDelete({}, context)
```

#### Input
* input `object`
  * channelIds `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)
  * inputIds `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)
  * inputSecurityGroupIds `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)
  * multiplexIds `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)

#### Output
* output [BatchDeleteResponse](#batchdeleteresponse)

### BatchStart



```js
amazonaws_medialive.BatchStart({}, context)
```

#### Input
* input `object`
  * channelIds `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)
  * multiplexIds `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)

#### Output
* output [BatchStartResponse](#batchstartresponse)

### BatchStop



```js
amazonaws_medialive.BatchStop({}, context)
```

#### Input
* input `object`
  * channelIds `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)
  * multiplexIds `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)

#### Output
* output [BatchStopResponse](#batchstopresponse)

### ListChannels



```js
amazonaws_medialive.ListChannels({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
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
  * tags `object`: Placeholder documentation for Tags
  * cdiInputSpecification `object`: Placeholder documentation for CdiInputSpecification
    * Resolution
  * channelClass `string` (values: STANDARD, SINGLE_PIPELINE): A standard channel has two encoding pipelines and a single pipeline channel only has one.
  * destinations `array`: Placeholder documentation for __listOfOutputDestination
    * items [OutputDestination](#outputdestination)
  * encoderSettings `object`: Encoder Settings
    * AudioDescriptions
      * items [AudioDescription](#audiodescription)
    * AvailBlanking
      * AvailBlankingImage
        * PasswordParam
        * Uri **required**
        * Username
      * State
    * AvailConfiguration
      * AvailSettings
        * Scte35SpliceInsert
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
        * Scte35TimeSignalApos
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
    * BlackoutSlate
      * BlackoutSlateImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkEndBlackout
      * NetworkEndBlackoutImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkId
      * State
    * CaptionDescriptions
      * items [CaptionDescription](#captiondescription)
    * FeatureActivations
      * InputPrepareScheduleActions
    * GlobalConfiguration
      * InitialAudioGain
      * InputEndAction
      * InputLossBehavior
        * BlackFrameMsec
        * InputLossImageColor
        * InputLossImageSlate
          * PasswordParam
          * Uri **required**
          * Username
        * InputLossImageType
        * RepeatFrameMsec
      * OutputLockingMode
      * OutputTimingSource
      * SupportLowFramerateInputs
    * NielsenConfiguration
      * DistributorId
      * NielsenPcmToId3Tagging
    * OutputGroups
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig
      * Source **required**
      * SyncThreshold
    * VideoDescriptions
      * items [VideoDescription](#videodescription)
  * inputAttachments `array`: Placeholder documentation for __listOfInputAttachment
    * items [InputAttachment](#inputattachment)
  * inputSpecification `object`: Placeholder documentation for InputSpecification
    * Codec
    * MaximumBitrate
    * Resolution
  * logLevel `string` (values: ERROR, WARNING, INFO, DEBUG, DISABLED): The log level the user wants for their channel.
  * name `string`: Placeholder documentation for __string
  * requestId `string`: Placeholder documentation for __string
  * reserved `string`: Placeholder documentation for __string
  * roleArn `string`: Placeholder documentation for __string

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
  * cdiInputSpecification `object`: Placeholder documentation for CdiInputSpecification
    * Resolution
  * destinations `array`: Placeholder documentation for __listOfOutputDestination
    * items [OutputDestination](#outputdestination)
  * encoderSettings `object`: Encoder Settings
    * AudioDescriptions
      * items [AudioDescription](#audiodescription)
    * AvailBlanking
      * AvailBlankingImage
        * PasswordParam
        * Uri **required**
        * Username
      * State
    * AvailConfiguration
      * AvailSettings
        * Scte35SpliceInsert
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
        * Scte35TimeSignalApos
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
    * BlackoutSlate
      * BlackoutSlateImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkEndBlackout
      * NetworkEndBlackoutImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkId
      * State
    * CaptionDescriptions
      * items [CaptionDescription](#captiondescription)
    * FeatureActivations
      * InputPrepareScheduleActions
    * GlobalConfiguration
      * InitialAudioGain
      * InputEndAction
      * InputLossBehavior
        * BlackFrameMsec
        * InputLossImageColor
        * InputLossImageSlate
          * PasswordParam
          * Uri **required**
          * Username
        * InputLossImageType
        * RepeatFrameMsec
      * OutputLockingMode
      * OutputTimingSource
      * SupportLowFramerateInputs
    * NielsenConfiguration
      * DistributorId
      * NielsenPcmToId3Tagging
    * OutputGroups
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig
      * Source **required**
      * SyncThreshold
    * VideoDescriptions
      * items [VideoDescription](#videodescription)
  * inputAttachments `array`: Placeholder documentation for __listOfInputAttachment
    * items [InputAttachment](#inputattachment)
  * inputSpecification `object`: Placeholder documentation for InputSpecification
    * Codec
    * MaximumBitrate
    * Resolution
  * logLevel `string` (values: ERROR, WARNING, INFO, DEBUG, DISABLED): The log level the user wants for their channel.
  * name `string`: Placeholder documentation for __string
  * roleArn `string`: Placeholder documentation for __string

#### Output
* output [UpdateChannelResponse](#updatechannelresponse)

### UpdateChannelClass



```js
amazonaws_medialive.UpdateChannelClass({
  "channelId": "",
  "channelClass": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`
  * channelClass **required** `string` (values: STANDARD, SINGLE_PIPELINE): A standard channel has two encoding pipelines and a single pipeline channel only has one.
  * destinations `array`: Placeholder documentation for __listOfOutputDestination
    * items [OutputDestination](#outputdestination)

#### Output
* output [UpdateChannelClassResponse](#updatechannelclassresponse)

### DeleteSchedule



```js
amazonaws_medialive.DeleteSchedule({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`

#### Output
* output [DeleteScheduleResponse](#deletescheduleresponse)

### DescribeSchedule



```js
amazonaws_medialive.DescribeSchedule({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [DescribeScheduleResponse](#describescheduleresponse)

### BatchUpdateSchedule



```js
amazonaws_medialive.BatchUpdateSchedule({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`
  * creates `object`: A list of schedule actions to create (in a request) or that have been created (in a response).
    * ScheduleActions
      * items [ScheduleAction](#scheduleaction)
  * deletes `object`: A list of schedule actions to delete.
    * ActionNames
      * items [__string](#__string)

#### Output
* output [BatchUpdateScheduleResponse](#batchupdatescheduleresponse)

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

### ListInputDeviceTransfers



```js
amazonaws_medialive.ListInputDeviceTransfers({
  "transferType": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * transferType **required** `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListInputDeviceTransfersResponse](#listinputdevicetransfersresponse)

### ListInputDevices



```js
amazonaws_medialive.ListInputDevices({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListInputDevicesResponse](#listinputdevicesresponse)

### DescribeInputDevice



```js
amazonaws_medialive.DescribeInputDevice({
  "inputDeviceId": ""
}, context)
```

#### Input
* input `object`
  * inputDeviceId **required** `string`

#### Output
* output [DescribeInputDeviceResponse](#describeinputdeviceresponse)

### UpdateInputDevice



```js
amazonaws_medialive.UpdateInputDevice({
  "inputDeviceId": ""
}, context)
```

#### Input
* input `object`
  * inputDeviceId **required** `string`
  * hdDeviceSettings `object`: Configurable settings for the input device.
    * ConfiguredInput
    * MaxBitrate
  * name `string`: Placeholder documentation for __string
  * uhdDeviceSettings `object`: Configurable settings for the input device.
    * ConfiguredInput
    * MaxBitrate

#### Output
* output [UpdateInputDeviceResponse](#updateinputdeviceresponse)

### AcceptInputDeviceTransfer



```js
amazonaws_medialive.AcceptInputDeviceTransfer({
  "inputDeviceId": ""
}, context)
```

#### Input
* input `object`
  * inputDeviceId **required** `string`

#### Output
* output [AcceptInputDeviceTransferResponse](#acceptinputdevicetransferresponse)

### CancelInputDeviceTransfer



```js
amazonaws_medialive.CancelInputDeviceTransfer({
  "inputDeviceId": ""
}, context)
```

#### Input
* input `object`
  * inputDeviceId **required** `string`

#### Output
* output [CancelInputDeviceTransferResponse](#cancelinputdevicetransferresponse)

### RejectInputDeviceTransfer



```js
amazonaws_medialive.RejectInputDeviceTransfer({
  "inputDeviceId": ""
}, context)
```

#### Input
* input `object`
  * inputDeviceId **required** `string`

#### Output
* output [RejectInputDeviceTransferResponse](#rejectinputdevicetransferresponse)

### DescribeInputDeviceThumbnail



```js
amazonaws_medialive.DescribeInputDeviceThumbnail({
  "inputDeviceId": "",
  "accept": ""
}, context)
```

#### Input
* input `object`
  * inputDeviceId **required** `string`
  * accept **required** `string`

#### Output
* output [DescribeInputDeviceThumbnailResponse](#describeinputdevicethumbnailresponse)

### TransferInputDevice



```js
amazonaws_medialive.TransferInputDevice({
  "inputDeviceId": ""
}, context)
```

#### Input
* input `object`
  * inputDeviceId **required** `string`
  * targetCustomerId `string`: Placeholder documentation for __string
  * transferMessage `string`: Placeholder documentation for __string

#### Output
* output [TransferInputDeviceResponse](#transferinputdeviceresponse)

### ListInputSecurityGroups



```js
amazonaws_medialive.ListInputSecurityGroups({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
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
  * tags `object`: Placeholder documentation for Tags
  * whitelistRules `array`: Placeholder documentation for __listOfInputWhitelistRuleCidr
    * items [InputWhitelistRuleCidr](#inputwhitelistrulecidr)

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
  * tags `object`: Placeholder documentation for Tags
  * whitelistRules `array`: Placeholder documentation for __listOfInputWhitelistRuleCidr
    * items [InputWhitelistRuleCidr](#inputwhitelistrulecidr)

#### Output
* output [UpdateInputSecurityGroupResponse](#updateinputsecuritygroupresponse)

### ListInputs



```js
amazonaws_medialive.ListInputs({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
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
  * tags `object`: Placeholder documentation for Tags
  * destinations `array`: Placeholder documentation for __listOfInputDestinationRequest
    * items [InputDestinationRequest](#inputdestinationrequest)
  * inputDevices `array`: Placeholder documentation for __listOfInputDeviceSettings
    * items [InputDeviceSettings](#inputdevicesettings)
  * inputSecurityGroups `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)
  * mediaConnectFlows `array`: Placeholder documentation for __listOfMediaConnectFlowRequest
    * items [MediaConnectFlowRequest](#mediaconnectflowrequest)
  * name `string`: Placeholder documentation for __string
  * requestId `string`: Placeholder documentation for __string
  * roleArn `string`: Placeholder documentation for __string
  * sources `array`: Placeholder documentation for __listOfInputSourceRequest
    * items [InputSourceRequest](#inputsourcerequest)
  * type `string` (values: UDP_PUSH, RTP_PUSH, RTMP_PUSH, RTMP_PULL, URL_PULL, MP4_FILE, MEDIACONNECT, INPUT_DEVICE, AWS_CDI): Placeholder documentation for InputType
  * vpc `object`: Settings for a private VPC Input.
    * SecurityGroupIds
      * items [__string](#__string)
    * SubnetIds
      * items [__string](#__string)

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
  * destinations `array`: Placeholder documentation for __listOfInputDestinationRequest
    * items [InputDestinationRequest](#inputdestinationrequest)
  * inputDevices `array`: Placeholder documentation for __listOfInputDeviceRequest
    * items [InputDeviceRequest](#inputdevicerequest)
  * inputSecurityGroups `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)
  * mediaConnectFlows `array`: Placeholder documentation for __listOfMediaConnectFlowRequest
    * items [MediaConnectFlowRequest](#mediaconnectflowrequest)
  * name `string`: Placeholder documentation for __string
  * roleArn `string`: Placeholder documentation for __string
  * sources `array`: Placeholder documentation for __listOfInputSourceRequest
    * items [InputSourceRequest](#inputsourcerequest)

#### Output
* output [UpdateInputResponse](#updateinputresponse)

### ListMultiplexes



```js
amazonaws_medialive.ListMultiplexes({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListMultiplexesResponse](#listmultiplexesresponse)

### CreateMultiplex



```js
amazonaws_medialive.CreateMultiplex({
  "availabilityZones": [],
  "multiplexSettings": {},
  "name": "",
  "requestId": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Placeholder documentation for Tags
  * availabilityZones **required** `array`: Placeholder documentation for __listOf__string
    * items [__string](#__string)
  * multiplexSettings **required** `object`: Contains configuration for a Multiplex event
    * MaximumVideoBufferDelayMilliseconds
    * TransportStreamBitrate
    * TransportStreamId
    * TransportStreamReservedBitrate
  * name **required** `string`: Placeholder documentation for __string
  * requestId **required** `string`: Placeholder documentation for __string

#### Output
*Output schema unknown*

### DeleteMultiplex



```js
amazonaws_medialive.DeleteMultiplex({
  "multiplexId": ""
}, context)
```

#### Input
* input `object`
  * multiplexId **required** `string`

#### Output
*Output schema unknown*

### DescribeMultiplex



```js
amazonaws_medialive.DescribeMultiplex({
  "multiplexId": ""
}, context)
```

#### Input
* input `object`
  * multiplexId **required** `string`

#### Output
* output [DescribeMultiplexResponse](#describemultiplexresponse)

### UpdateMultiplex



```js
amazonaws_medialive.UpdateMultiplex({
  "multiplexId": ""
}, context)
```

#### Input
* input `object`
  * multiplexId **required** `string`
  * multiplexSettings `object`: Contains configuration for a Multiplex event
    * MaximumVideoBufferDelayMilliseconds
    * TransportStreamBitrate
    * TransportStreamId
    * TransportStreamReservedBitrate
  * name `string`: Placeholder documentation for __string

#### Output
* output [UpdateMultiplexResponse](#updatemultiplexresponse)

### ListMultiplexPrograms



```js
amazonaws_medialive.ListMultiplexPrograms({
  "multiplexId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * multiplexId **required** `string`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListMultiplexProgramsResponse](#listmultiplexprogramsresponse)

### CreateMultiplexProgram



```js
amazonaws_medialive.CreateMultiplexProgram({
  "multiplexId": "",
  "multiplexProgramSettings": {},
  "programName": "",
  "requestId": ""
}, context)
```

#### Input
* input `object`
  * multiplexId **required** `string`
  * multiplexProgramSettings **required** `object`: Multiplex Program settings configuration.
    * PreferredChannelPipeline
    * ProgramNumber
    * ServiceDescriptor
      * ProviderName **required**
      * ServiceName **required**
    * VideoSettings
      * ConstantBitrate
      * StatmuxSettings
        * MaximumBitrate
        * MinimumBitrate
        * Priority
  * programName **required** `string`: Placeholder documentation for __string
  * requestId **required** `string`: Placeholder documentation for __string

#### Output
*Output schema unknown*

### DeleteMultiplexProgram



```js
amazonaws_medialive.DeleteMultiplexProgram({
  "multiplexId": "",
  "programName": ""
}, context)
```

#### Input
* input `object`
  * multiplexId **required** `string`
  * programName **required** `string`

#### Output
* output [DeleteMultiplexProgramResponse](#deletemultiplexprogramresponse)

### DescribeMultiplexProgram



```js
amazonaws_medialive.DescribeMultiplexProgram({
  "multiplexId": "",
  "programName": ""
}, context)
```

#### Input
* input `object`
  * multiplexId **required** `string`
  * programName **required** `string`

#### Output
* output [DescribeMultiplexProgramResponse](#describemultiplexprogramresponse)

### UpdateMultiplexProgram



```js
amazonaws_medialive.UpdateMultiplexProgram({
  "multiplexId": "",
  "programName": ""
}, context)
```

#### Input
* input `object`
  * multiplexId **required** `string`
  * programName **required** `string`
  * multiplexProgramSettings `object`: Multiplex Program settings configuration.
    * PreferredChannelPipeline
    * ProgramNumber
    * ServiceDescriptor
      * ProviderName **required**
      * ServiceName **required**
    * VideoSettings
      * ConstantBitrate
      * StatmuxSettings
        * MaximumBitrate
        * MinimumBitrate
        * Priority

#### Output
* output [UpdateMultiplexProgramResponse](#updatemultiplexprogramresponse)

### StartMultiplex



```js
amazonaws_medialive.StartMultiplex({
  "multiplexId": ""
}, context)
```

#### Input
* input `object`
  * multiplexId **required** `string`

#### Output
*Output schema unknown*

### StopMultiplex



```js
amazonaws_medialive.StopMultiplex({
  "multiplexId": ""
}, context)
```

#### Input
* input `object`
  * multiplexId **required** `string`

#### Output
*Output schema unknown*

### ListOfferings



```js
amazonaws_medialive.ListOfferings({}, context)
```

#### Input
* input `object`
  * channelClass `string`
  * channelConfiguration `string`
  * codec `string`
  * duration `string`
  * maxResults `integer`
  * maximumBitrate `string`
  * maximumFramerate `string`
  * nextToken `string`
  * resolution `string`
  * resourceType `string`
  * specialFeature `string`
  * videoQuality `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListOfferingsResponse](#listofferingsresponse)

### DescribeOffering



```js
amazonaws_medialive.DescribeOffering({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`

#### Output
* output [DescribeOfferingResponse](#describeofferingresponse)

### PurchaseOffering



```js
amazonaws_medialive.PurchaseOffering({
  "offeringId": "",
  "count": 0
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`
  * tags `object`: Placeholder documentation for Tags
  * count **required** `integer`: Placeholder documentation for __integerMin1
  * name `string`: Placeholder documentation for __string
  * requestId `string`: Placeholder documentation for __string
  * start `string`: Placeholder documentation for __string

#### Output
*Output schema unknown*

### ListReservations



```js
amazonaws_medialive.ListReservations({}, context)
```

#### Input
* input `object`
  * channelClass `string`
  * codec `string`
  * maxResults `integer`
  * maximumBitrate `string`
  * maximumFramerate `string`
  * nextToken `string`
  * resolution `string`
  * resourceType `string`
  * specialFeature `string`
  * videoQuality `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListReservationsResponse](#listreservationsresponse)

### DeleteReservation



```js
amazonaws_medialive.DeleteReservation({
  "reservationId": ""
}, context)
```

#### Input
* input `object`
  * reservationId **required** `string`

#### Output
* output [DeleteReservationResponse](#deletereservationresponse)

### DescribeReservation



```js
amazonaws_medialive.DescribeReservation({
  "reservationId": ""
}, context)
```

#### Input
* input `object`
  * reservationId **required** `string`

#### Output
* output [DescribeReservationResponse](#describereservationresponse)

### UpdateReservation



```js
amazonaws_medialive.UpdateReservation({
  "reservationId": ""
}, context)
```

#### Input
* input `object`
  * reservationId **required** `string`
  * name `string`: Placeholder documentation for __string

#### Output
* output [UpdateReservationResponse](#updatereservationresponse)

### ListTagsForResource



```js
amazonaws_medialive.ListTagsForResource({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### CreateTags



```js
amazonaws_medialive.CreateTags({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tags `object`: Placeholder documentation for Tags

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_medialive.DeleteTags({
  "resource-arn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*



## Definitions

### AacCodingMode
* AacCodingMode `string` (values: AD_RECEIVER_MIX, CODING_MODE_1_0, CODING_MODE_1_1, CODING_MODE_2_0, CODING_MODE_5_1): Aac Coding Mode

### AacInputType
* AacInputType `string` (values: BROADCASTER_MIXED_AD, NORMAL): Aac Input Type

### AacProfile
* AacProfile `string` (values: HEV1, HEV2, LC): Aac Profile

### AacRateControlMode
* AacRateControlMode `string` (values: CBR, VBR): Aac Rate Control Mode

### AacRawFormat
* AacRawFormat `string` (values: LATM_LOAS, NONE): Aac Raw Format

### AacSettings
* AacSettings `object`: Aac Settings
  * Bitrate
  * CodingMode
  * InputType
  * Profile
  * RateControlMode
  * RawFormat
  * SampleRate
  * Spec
  * VbrQuality

### AacSpec
* AacSpec `string` (values: MPEG2, MPEG4): Aac Spec

### AacVbrQuality
* AacVbrQuality `string` (values: HIGH, LOW, MEDIUM_HIGH, MEDIUM_LOW): Aac Vbr Quality

### Ac3BitstreamMode
* Ac3BitstreamMode `string` (values: COMMENTARY, COMPLETE_MAIN, DIALOGUE, EMERGENCY, HEARING_IMPAIRED, MUSIC_AND_EFFECTS, VISUALLY_IMPAIRED, VOICE_OVER): Ac3 Bitstream Mode

### Ac3CodingMode
* Ac3CodingMode `string` (values: CODING_MODE_1_0, CODING_MODE_1_1, CODING_MODE_2_0, CODING_MODE_3_2_LFE): Ac3 Coding Mode

### Ac3DrcProfile
* Ac3DrcProfile `string` (values: FILM_STANDARD, NONE): Ac3 Drc Profile

### Ac3LfeFilter
* Ac3LfeFilter `string` (values: DISABLED, ENABLED): Ac3 Lfe Filter

### Ac3MetadataControl
* Ac3MetadataControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Ac3 Metadata Control

### Ac3Settings
* Ac3Settings `object`: Ac3 Settings
  * Bitrate
  * BitstreamMode
  * CodingMode
  * Dialnorm
  * DrcProfile
  * LfeFilter
  * MetadataControl

### AcceptHeader
* AcceptHeader `string` (values: image/jpeg): The HTTP Accept header. Indicates the requested type fothe thumbnail.

### AcceptInputDeviceTransferRequest
* AcceptInputDeviceTransferRequest `object`: Placeholder documentation for AcceptInputDeviceTransferRequest

### AcceptInputDeviceTransferResponse
* AcceptInputDeviceTransferResponse `object`: Placeholder documentation for AcceptInputDeviceTransferResponse

### AfdSignaling
* AfdSignaling `string` (values: AUTO, FIXED, NONE): Afd Signaling

### AncillarySourceSettings
* AncillarySourceSettings `object`: Ancillary Source Settings
  * SourceAncillaryChannelNumber

### ArchiveContainerSettings
* ArchiveContainerSettings `object`: Archive Container Settings
  * M2tsSettings
    * AbsentInputAudioBehavior
    * Arib
    * AribCaptionsPid
    * AribCaptionsPidControl
    * AudioBufferModel
    * AudioFramesPerPes
    * AudioPids
    * AudioStreamType
    * Bitrate
    * BufferModel
    * CcDescriptor
    * DvbNitSettings
      * NetworkId **required**
      * NetworkName **required**
      * RepInterval
    * DvbSdtSettings
      * OutputSdt
      * RepInterval
      * ServiceName
      * ServiceProviderName
    * DvbSubPids
    * DvbTdtSettings
      * RepInterval
    * DvbTeletextPid
    * Ebif
    * EbpAudioInterval
    * EbpLookaheadMs
    * EbpPlacement
    * EcmPid
    * EsRateInPes
    * EtvPlatformPid
    * EtvSignalPid
    * FragmentTime
    * Klv
    * KlvDataPids
    * NielsenId3Behavior
    * NullPacketBitrate
    * PatInterval
    * PcrControl
    * PcrPeriod
    * PcrPid
    * PmtInterval
    * PmtPid
    * ProgramNum
    * RateMode
    * Scte27Pids
    * Scte35Control
    * Scte35Pid
    * SegmentationMarkers
    * SegmentationStyle
    * SegmentationTime
    * TimedMetadataBehavior
    * TimedMetadataPid
    * TransportStreamId
    * VideoPid
  * RawSettings

### ArchiveGroupSettings
* ArchiveGroupSettings `object`: Archive Group Settings
  * Destination **required**
    * DestinationRefId
  * RolloverInterval

### ArchiveOutputSettings
* ArchiveOutputSettings `object`: Archive Output Settings
  * ContainerSettings **required**
    * M2tsSettings
      * AbsentInputAudioBehavior
      * Arib
      * AribCaptionsPid
      * AribCaptionsPidControl
      * AudioBufferModel
      * AudioFramesPerPes
      * AudioPids
      * AudioStreamType
      * Bitrate
      * BufferModel
      * CcDescriptor
      * DvbNitSettings
        * NetworkId **required**
        * NetworkName **required**
        * RepInterval
      * DvbSdtSettings
        * OutputSdt
        * RepInterval
        * ServiceName
        * ServiceProviderName
      * DvbSubPids
      * DvbTdtSettings
        * RepInterval
      * DvbTeletextPid
      * Ebif
      * EbpAudioInterval
      * EbpLookaheadMs
      * EbpPlacement
      * EcmPid
      * EsRateInPes
      * EtvPlatformPid
      * EtvSignalPid
      * FragmentTime
      * Klv
      * KlvDataPids
      * NielsenId3Behavior
      * NullPacketBitrate
      * PatInterval
      * PcrControl
      * PcrPeriod
      * PcrPid
      * PmtInterval
      * PmtPid
      * ProgramNum
      * RateMode
      * Scte27Pids
      * Scte35Control
      * Scte35Pid
      * SegmentationMarkers
      * SegmentationStyle
      * SegmentationTime
      * TimedMetadataBehavior
      * TimedMetadataPid
      * TransportStreamId
      * VideoPid
    * RawSettings
  * Extension
  * NameModifier

### AribDestinationSettings
* AribDestinationSettings `object`: Arib Destination Settings

### AribSourceSettings
* AribSourceSettings `object`: Arib Source Settings

### AudioChannelMapping
* AudioChannelMapping `object`: Audio Channel Mapping
  * InputChannelLevels **required**
    * items [InputChannelLevel](#inputchannellevel)
  * OutputChannel **required**

### AudioCodecSettings
* AudioCodecSettings `object`: Audio Codec Settings
  * AacSettings
    * Bitrate
    * CodingMode
    * InputType
    * Profile
    * RateControlMode
    * RawFormat
    * SampleRate
    * Spec
    * VbrQuality
  * Ac3Settings
    * Bitrate
    * BitstreamMode
    * CodingMode
    * Dialnorm
    * DrcProfile
    * LfeFilter
    * MetadataControl
  * Eac3Settings
    * AttenuationControl
    * Bitrate
    * BitstreamMode
    * CodingMode
    * DcFilter
    * Dialnorm
    * DrcLine
    * DrcRf
    * LfeControl
    * LfeFilter
    * LoRoCenterMixLevel
    * LoRoSurroundMixLevel
    * LtRtCenterMixLevel
    * LtRtSurroundMixLevel
    * MetadataControl
    * PassthroughControl
    * PhaseControl
    * StereoDownmix
    * SurroundExMode
    * SurroundMode
  * Mp2Settings
    * Bitrate
    * CodingMode
    * SampleRate
  * PassThroughSettings
  * WavSettings
    * BitDepth
    * CodingMode
    * SampleRate

### AudioDescription
* AudioDescription `object`: Audio Description
  * AudioNormalizationSettings
    * Algorithm
    * AlgorithmControl
    * TargetLkfs
  * AudioSelectorName **required**
  * AudioType
  * AudioTypeControl
  * CodecSettings
    * AacSettings
      * Bitrate
      * CodingMode
      * InputType
      * Profile
      * RateControlMode
      * RawFormat
      * SampleRate
      * Spec
      * VbrQuality
    * Ac3Settings
      * Bitrate
      * BitstreamMode
      * CodingMode
      * Dialnorm
      * DrcProfile
      * LfeFilter
      * MetadataControl
    * Eac3Settings
      * AttenuationControl
      * Bitrate
      * BitstreamMode
      * CodingMode
      * DcFilter
      * Dialnorm
      * DrcLine
      * DrcRf
      * LfeControl
      * LfeFilter
      * LoRoCenterMixLevel
      * LoRoSurroundMixLevel
      * LtRtCenterMixLevel
      * LtRtSurroundMixLevel
      * MetadataControl
      * PassthroughControl
      * PhaseControl
      * StereoDownmix
      * SurroundExMode
      * SurroundMode
    * Mp2Settings
      * Bitrate
      * CodingMode
      * SampleRate
    * PassThroughSettings
    * WavSettings
      * BitDepth
      * CodingMode
      * SampleRate
  * LanguageCode
  * LanguageCodeControl
  * Name **required**
  * RemixSettings
    * ChannelMappings **required**
      * items [AudioChannelMapping](#audiochannelmapping)
    * ChannelsIn
    * ChannelsOut
  * StreamName

### AudioDescriptionAudioTypeControl
* AudioDescriptionAudioTypeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Audio Description Audio Type Control

### AudioDescriptionLanguageCodeControl
* AudioDescriptionLanguageCodeControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Audio Description Language Code Control

### AudioLanguageSelection
* AudioLanguageSelection `object`: Audio Language Selection
  * LanguageCode **required**
  * LanguageSelectionPolicy

### AudioLanguageSelectionPolicy
* AudioLanguageSelectionPolicy `string` (values: LOOSE, STRICT): Audio Language Selection Policy

### AudioNormalizationAlgorithm
* AudioNormalizationAlgorithm `string` (values: ITU_1770_1, ITU_1770_2): Audio Normalization Algorithm

### AudioNormalizationAlgorithmControl
* AudioNormalizationAlgorithmControl `string` (values: CORRECT_AUDIO): Audio Normalization Algorithm Control

### AudioNormalizationSettings
* AudioNormalizationSettings `object`: Audio Normalization Settings
  * Algorithm
  * AlgorithmControl
  * TargetLkfs

### AudioOnlyHlsSegmentType
* AudioOnlyHlsSegmentType `string` (values: AAC, FMP4): Audio Only Hls Segment Type

### AudioOnlyHlsSettings
* AudioOnlyHlsSettings `object`: Audio Only Hls Settings
  * AudioGroupId
  * AudioOnlyImage
    * PasswordParam
    * Uri **required**
    * Username
  * AudioTrackType
  * SegmentType

### AudioOnlyHlsTrackType
* AudioOnlyHlsTrackType `string` (values: ALTERNATE_AUDIO_AUTO_SELECT, ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT, ALTERNATE_AUDIO_NOT_AUTO_SELECT, AUDIO_ONLY_VARIANT_STREAM): Audio Only Hls Track Type

### AudioPidSelection
* AudioPidSelection `object`: Audio Pid Selection
  * Pid **required**

### AudioSelector
* AudioSelector `object`: Audio Selector
  * Name **required**
  * SelectorSettings
    * AudioLanguageSelection
      * LanguageCode **required**
      * LanguageSelectionPolicy
    * AudioPidSelection
      * Pid **required**
    * AudioTrackSelection
      * Tracks **required**
        * items [AudioTrack](#audiotrack)

### AudioSelectorSettings
* AudioSelectorSettings `object`: Audio Selector Settings
  * AudioLanguageSelection
    * LanguageCode **required**
    * LanguageSelectionPolicy
  * AudioPidSelection
    * Pid **required**
  * AudioTrackSelection
    * Tracks **required**
      * items [AudioTrack](#audiotrack)

### AudioSilenceFailoverSettings
* AudioSilenceFailoverSettings `object`: Placeholder documentation for AudioSilenceFailoverSettings
  * AudioSelectorName **required**
  * AudioSilenceThresholdMsec

### AudioTrack
* AudioTrack `object`: Audio Track
  * Track **required**

### AudioTrackSelection
* AudioTrackSelection `object`: Audio Track Selection
  * Tracks **required**
    * items [AudioTrack](#audiotrack)

### AudioType
* AudioType `string` (values: CLEAN_EFFECTS, HEARING_IMPAIRED, UNDEFINED, VISUAL_IMPAIRED_COMMENTARY): Audio Type

### AuthenticationScheme
* AuthenticationScheme `string` (values: AKAMAI, COMMON): Authentication Scheme

### AutomaticInputFailoverSettings
* AutomaticInputFailoverSettings `object`: The settings for Automatic Input Failover.
  * ErrorClearTimeMsec
  * FailoverConditions
    * items [FailoverCondition](#failovercondition)
  * InputPreference
  * SecondaryInputId **required**

### AvailBlanking
* AvailBlanking `object`: Avail Blanking
  * AvailBlankingImage
    * PasswordParam
    * Uri **required**
    * Username
  * State

### AvailBlankingState
* AvailBlankingState `string` (values: DISABLED, ENABLED): Avail Blanking State

### AvailConfiguration
* AvailConfiguration `object`: Avail Configuration
  * AvailSettings
    * Scte35SpliceInsert
      * AdAvailOffset
      * NoRegionalBlackoutFlag
      * WebDeliveryAllowedFlag
    * Scte35TimeSignalApos
      * AdAvailOffset
      * NoRegionalBlackoutFlag
      * WebDeliveryAllowedFlag

### AvailSettings
* AvailSettings `object`: Avail Settings
  * Scte35SpliceInsert
    * AdAvailOffset
    * NoRegionalBlackoutFlag
    * WebDeliveryAllowedFlag
  * Scte35TimeSignalApos
    * AdAvailOffset
    * NoRegionalBlackoutFlag
    * WebDeliveryAllowedFlag

### BadGatewayException


### BadRequestException


### BatchDeleteRequest
* BatchDeleteRequest `object`: A request to delete resources
  * ChannelIds
    * items [__string](#__string)
  * InputIds
    * items [__string](#__string)
  * InputSecurityGroupIds
    * items [__string](#__string)
  * MultiplexIds
    * items [__string](#__string)

### BatchDeleteResponse
* BatchDeleteResponse `object`: Placeholder documentation for BatchDeleteResponse
  * Failed
    * items [BatchFailedResultModel](#batchfailedresultmodel)
  * Successful
    * items [BatchSuccessfulResultModel](#batchsuccessfulresultmodel)

### BatchFailedResultModel
* BatchFailedResultModel `object`: Details from a failed operation
  * Arn
  * Code
  * Id
  * Message

### BatchScheduleActionCreateRequest
* BatchScheduleActionCreateRequest `object`: A list of schedule actions to create (in a request) or that have been created (in a response).
  * ScheduleActions **required**
    * items [ScheduleAction](#scheduleaction)

### BatchScheduleActionCreateResult
* BatchScheduleActionCreateResult `object`: List of actions that have been created in the schedule.
  * ScheduleActions **required**
    * items [ScheduleAction](#scheduleaction)

### BatchScheduleActionDeleteRequest
* BatchScheduleActionDeleteRequest `object`: A list of schedule actions to delete.
  * ActionNames **required**
    * items [__string](#__string)

### BatchScheduleActionDeleteResult
* BatchScheduleActionDeleteResult `object`: List of actions that have been deleted from the schedule.
  * ScheduleActions **required**
    * items [ScheduleAction](#scheduleaction)

### BatchStartRequest
* BatchStartRequest `object`: A request to start resources
  * ChannelIds
    * items [__string](#__string)
  * MultiplexIds
    * items [__string](#__string)

### BatchStartResponse
* BatchStartResponse `object`: Placeholder documentation for BatchStartResponse
  * Failed
    * items [BatchFailedResultModel](#batchfailedresultmodel)
  * Successful
    * items [BatchSuccessfulResultModel](#batchsuccessfulresultmodel)

### BatchStopRequest
* BatchStopRequest `object`: A request to stop resources
  * ChannelIds
    * items [__string](#__string)
  * MultiplexIds
    * items [__string](#__string)

### BatchStopResponse
* BatchStopResponse `object`: Placeholder documentation for BatchStopResponse
  * Failed
    * items [BatchFailedResultModel](#batchfailedresultmodel)
  * Successful
    * items [BatchSuccessfulResultModel](#batchsuccessfulresultmodel)

### BatchSuccessfulResultModel
* BatchSuccessfulResultModel `object`: Details from a successful operation
  * Arn
  * Id
  * State

### BatchUpdateScheduleRequest
* BatchUpdateScheduleRequest `object`: List of actions to create and list of actions to delete.
  * Creates
    * ScheduleActions **required**
      * items [ScheduleAction](#scheduleaction)
  * Deletes
    * ActionNames **required**
      * items [__string](#__string)

### BatchUpdateScheduleResponse
* BatchUpdateScheduleResponse `object`: Placeholder documentation for BatchUpdateScheduleResponse
  * Creates
    * ScheduleActions **required**
      * items [ScheduleAction](#scheduleaction)
  * Deletes
    * ScheduleActions **required**
      * items [ScheduleAction](#scheduleaction)

### BlackoutSlate
* BlackoutSlate `object`: Blackout Slate
  * BlackoutSlateImage
    * PasswordParam
    * Uri **required**
    * Username
  * NetworkEndBlackout
  * NetworkEndBlackoutImage
    * PasswordParam
    * Uri **required**
    * Username
  * NetworkId
  * State

### BlackoutSlateNetworkEndBlackout
* BlackoutSlateNetworkEndBlackout `string` (values: DISABLED, ENABLED): Blackout Slate Network End Blackout

### BlackoutSlateState
* BlackoutSlateState `string` (values: DISABLED, ENABLED): Blackout Slate State

### BurnInAlignment
* BurnInAlignment `string` (values: CENTERED, LEFT, SMART): Burn In Alignment

### BurnInBackgroundColor
* BurnInBackgroundColor `string` (values: BLACK, NONE, WHITE): Burn In Background Color

### BurnInDestinationSettings
* BurnInDestinationSettings `object`: Burn In Destination Settings
  * Alignment
  * BackgroundColor
  * BackgroundOpacity
  * Font
    * PasswordParam
    * Uri **required**
    * Username
  * FontColor
  * FontOpacity
  * FontResolution
  * FontSize
  * OutlineColor
  * OutlineSize
  * ShadowColor
  * ShadowOpacity
  * ShadowXOffset
  * ShadowYOffset
  * TeletextGridControl
  * XPosition
  * YPosition

### BurnInFontColor
* BurnInFontColor `string` (values: BLACK, BLUE, GREEN, RED, WHITE, YELLOW): Burn In Font Color

### BurnInOutlineColor
* BurnInOutlineColor `string` (values: BLACK, BLUE, GREEN, RED, WHITE, YELLOW): Burn In Outline Color

### BurnInShadowColor
* BurnInShadowColor `string` (values: BLACK, NONE, WHITE): Burn In Shadow Color

### BurnInTeletextGridControl
* BurnInTeletextGridControl `string` (values: FIXED, SCALED): Burn In Teletext Grid Control

### CancelInputDeviceTransferRequest
* CancelInputDeviceTransferRequest `object`: Placeholder documentation for CancelInputDeviceTransferRequest

### CancelInputDeviceTransferResponse
* CancelInputDeviceTransferResponse `object`: Placeholder documentation for CancelInputDeviceTransferResponse

### CaptionDescription
* CaptionDescription `object`: Caption Description
  * CaptionSelectorName **required**
  * DestinationSettings
    * AribDestinationSettings
    * BurnInDestinationSettings
      * Alignment
      * BackgroundColor
      * BackgroundOpacity
      * Font
        * PasswordParam
        * Uri **required**
        * Username
      * FontColor
      * FontOpacity
      * FontResolution
      * FontSize
      * OutlineColor
      * OutlineSize
      * ShadowColor
      * ShadowOpacity
      * ShadowXOffset
      * ShadowYOffset
      * TeletextGridControl
      * XPosition
      * YPosition
    * DvbSubDestinationSettings
      * Alignment
      * BackgroundColor
      * BackgroundOpacity
      * Font
        * PasswordParam
        * Uri **required**
        * Username
      * FontColor
      * FontOpacity
      * FontResolution
      * FontSize
      * OutlineColor
      * OutlineSize
      * ShadowColor
      * ShadowOpacity
      * ShadowXOffset
      * ShadowYOffset
      * TeletextGridControl
      * XPosition
      * YPosition
    * EbuTtDDestinationSettings
      * FillLineGap
      * FontFamily
      * StyleControl
    * EmbeddedDestinationSettings
    * EmbeddedPlusScte20DestinationSettings
    * RtmpCaptionInfoDestinationSettings
    * Scte20PlusEmbeddedDestinationSettings
    * Scte27DestinationSettings
    * SmpteTtDestinationSettings
    * TeletextDestinationSettings
    * TtmlDestinationSettings
      * StyleControl
    * WebvttDestinationSettings
  * LanguageCode
  * LanguageDescription
  * Name **required**

### CaptionDestinationSettings
* CaptionDestinationSettings `object`: Caption Destination Settings
  * AribDestinationSettings
  * BurnInDestinationSettings
    * Alignment
    * BackgroundColor
    * BackgroundOpacity
    * Font
      * PasswordParam
      * Uri **required**
      * Username
    * FontColor
    * FontOpacity
    * FontResolution
    * FontSize
    * OutlineColor
    * OutlineSize
    * ShadowColor
    * ShadowOpacity
    * ShadowXOffset
    * ShadowYOffset
    * TeletextGridControl
    * XPosition
    * YPosition
  * DvbSubDestinationSettings
    * Alignment
    * BackgroundColor
    * BackgroundOpacity
    * Font
      * PasswordParam
      * Uri **required**
      * Username
    * FontColor
    * FontOpacity
    * FontResolution
    * FontSize
    * OutlineColor
    * OutlineSize
    * ShadowColor
    * ShadowOpacity
    * ShadowXOffset
    * ShadowYOffset
    * TeletextGridControl
    * XPosition
    * YPosition
  * EbuTtDDestinationSettings
    * FillLineGap
    * FontFamily
    * StyleControl
  * EmbeddedDestinationSettings
  * EmbeddedPlusScte20DestinationSettings
  * RtmpCaptionInfoDestinationSettings
  * Scte20PlusEmbeddedDestinationSettings
  * Scte27DestinationSettings
  * SmpteTtDestinationSettings
  * TeletextDestinationSettings
  * TtmlDestinationSettings
    * StyleControl
  * WebvttDestinationSettings

### CaptionLanguageMapping
* CaptionLanguageMapping `object`: Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
  * CaptionChannel **required**
  * LanguageCode **required**
  * LanguageDescription **required**

### CaptionSelector
* CaptionSelector `object`: Output groups for this Live Event. Output groups contain information about where streams should be distributed.
  * LanguageCode
  * Name **required**
  * SelectorSettings
    * AncillarySourceSettings
      * SourceAncillaryChannelNumber
    * AribSourceSettings
    * DvbSubSourceSettings
      * Pid
    * EmbeddedSourceSettings
      * Convert608To708
      * Scte20Detection
      * Source608ChannelNumber
      * Source608TrackNumber
    * Scte20SourceSettings
      * Convert608To708
      * Source608ChannelNumber
    * Scte27SourceSettings
      * Pid
    * TeletextSourceSettings
      * PageNumber

### CaptionSelectorSettings
* CaptionSelectorSettings `object`: Caption Selector Settings
  * AncillarySourceSettings
    * SourceAncillaryChannelNumber
  * AribSourceSettings
  * DvbSubSourceSettings
    * Pid
  * EmbeddedSourceSettings
    * Convert608To708
    * Scte20Detection
    * Source608ChannelNumber
    * Source608TrackNumber
  * Scte20SourceSettings
    * Convert608To708
    * Source608ChannelNumber
  * Scte27SourceSettings
    * Pid
  * TeletextSourceSettings
    * PageNumber

### CdiInputResolution
* CdiInputResolution `string` (values: SD, HD, FHD, UHD): Maximum CDI input resolution; SD is 480i and 576i up to 30 frames-per-second (fps), HD is 720p up to 60 fps / 1080i up to 30 fps, FHD is 1080p up to 60 fps, UHD is 2160p up to 60 fps

### CdiInputSpecification
* CdiInputSpecification `object`: Placeholder documentation for CdiInputSpecification
  * Resolution

### Channel
* Channel `object`: Placeholder documentation for Channel
  * Arn
  * CdiInputSpecification
    * Resolution
  * ChannelClass
  * Destinations
    * items [OutputDestination](#outputdestination)
  * EgressEndpoints
    * items [ChannelEgressEndpoint](#channelegressendpoint)
  * EncoderSettings
    * AudioDescriptions **required**
      * items [AudioDescription](#audiodescription)
    * AvailBlanking
      * AvailBlankingImage
        * PasswordParam
        * Uri **required**
        * Username
      * State
    * AvailConfiguration
      * AvailSettings
        * Scte35SpliceInsert
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
        * Scte35TimeSignalApos
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
    * BlackoutSlate
      * BlackoutSlateImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkEndBlackout
      * NetworkEndBlackoutImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkId
      * State
    * CaptionDescriptions
      * items [CaptionDescription](#captiondescription)
    * FeatureActivations
      * InputPrepareScheduleActions
    * GlobalConfiguration
      * InitialAudioGain
      * InputEndAction
      * InputLossBehavior
        * BlackFrameMsec
        * InputLossImageColor
        * InputLossImageSlate
          * PasswordParam
          * Uri **required**
          * Username
        * InputLossImageType
        * RepeatFrameMsec
      * OutputLockingMode
      * OutputTimingSource
      * SupportLowFramerateInputs
    * NielsenConfiguration
      * DistributorId
      * NielsenPcmToId3Tagging
    * OutputGroups **required**
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig **required**
      * Source **required**
      * SyncThreshold
    * VideoDescriptions **required**
      * items [VideoDescription](#videodescription)
  * Id
  * InputAttachments
    * items [InputAttachment](#inputattachment)
  * InputSpecification
    * Codec
    * MaximumBitrate
    * Resolution
  * LogLevel
  * Name
  * PipelineDetails
    * items [PipelineDetail](#pipelinedetail)
  * PipelinesRunningCount
  * RoleArn
  * State
  * Tags

### ChannelClass
* ChannelClass `string` (values: STANDARD, SINGLE_PIPELINE): A standard channel has two encoding pipelines and a single pipeline channel only has one.

### ChannelEgressEndpoint
* ChannelEgressEndpoint `object`: Placeholder documentation for ChannelEgressEndpoint
  * SourceIp

### ChannelState
* ChannelState `string` (values: CREATING, CREATE_FAILED, IDLE, STARTING, RUNNING, RECOVERING, STOPPING, DELETING, DELETED, UPDATING, UPDATE_FAILED): Placeholder documentation for ChannelState

### ChannelSummary
* ChannelSummary `object`: Placeholder documentation for ChannelSummary
  * Arn
  * CdiInputSpecification
    * Resolution
  * ChannelClass
  * Destinations
    * items [OutputDestination](#outputdestination)
  * EgressEndpoints
    * items [ChannelEgressEndpoint](#channelegressendpoint)
  * Id
  * InputAttachments
    * items [InputAttachment](#inputattachment)
  * InputSpecification
    * Codec
    * MaximumBitrate
    * Resolution
  * LogLevel
  * Name
  * PipelinesRunningCount
  * RoleArn
  * State
  * Tags

### ColorSpacePassthroughSettings
* ColorSpacePassthroughSettings `object`: Passthrough applies no color space conversion to the output

### ConflictException


### ContentType
* ContentType `string` (values: image/jpeg): Specifies the media type of the thumbnail.

### CreateChannelRequest
* CreateChannelRequest `object`: A request to create a channel
  * CdiInputSpecification
    * Resolution
  * ChannelClass
  * Destinations
    * items [OutputDestination](#outputdestination)
  * EncoderSettings
    * AudioDescriptions **required**
      * items [AudioDescription](#audiodescription)
    * AvailBlanking
      * AvailBlankingImage
        * PasswordParam
        * Uri **required**
        * Username
      * State
    * AvailConfiguration
      * AvailSettings
        * Scte35SpliceInsert
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
        * Scte35TimeSignalApos
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
    * BlackoutSlate
      * BlackoutSlateImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkEndBlackout
      * NetworkEndBlackoutImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkId
      * State
    * CaptionDescriptions
      * items [CaptionDescription](#captiondescription)
    * FeatureActivations
      * InputPrepareScheduleActions
    * GlobalConfiguration
      * InitialAudioGain
      * InputEndAction
      * InputLossBehavior
        * BlackFrameMsec
        * InputLossImageColor
        * InputLossImageSlate
          * PasswordParam
          * Uri **required**
          * Username
        * InputLossImageType
        * RepeatFrameMsec
      * OutputLockingMode
      * OutputTimingSource
      * SupportLowFramerateInputs
    * NielsenConfiguration
      * DistributorId
      * NielsenPcmToId3Tagging
    * OutputGroups **required**
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig **required**
      * Source **required**
      * SyncThreshold
    * VideoDescriptions **required**
      * items [VideoDescription](#videodescription)
  * InputAttachments
    * items [InputAttachment](#inputattachment)
  * InputSpecification
    * Codec
    * MaximumBitrate
    * Resolution
  * LogLevel
  * Name
  * RequestId
  * Reserved
  * RoleArn
  * Tags

### CreateChannelResponse
* CreateChannelResponse `object`: Placeholder documentation for CreateChannelResponse
  * Channel
    * Arn
    * CdiInputSpecification
      * Resolution
    * ChannelClass
    * Destinations
      * items [OutputDestination](#outputdestination)
    * EgressEndpoints
      * items [ChannelEgressEndpoint](#channelegressendpoint)
    * EncoderSettings
      * AudioDescriptions **required**
        * items [AudioDescription](#audiodescription)
      * AvailBlanking
        * AvailBlankingImage
          * PasswordParam
          * Uri **required**
          * Username
        * State
      * AvailConfiguration
        * AvailSettings
          * Scte35SpliceInsert
          * Scte35TimeSignalApos
      * BlackoutSlate
        * BlackoutSlateImage
          * PasswordParam
          * Uri **required**
          * Username
        * NetworkEndBlackout
        * NetworkEndBlackoutImage
          * PasswordParam
          * Uri **required**
          * Username
        * NetworkId
        * State
      * CaptionDescriptions
        * items [CaptionDescription](#captiondescription)
      * FeatureActivations
        * InputPrepareScheduleActions
      * GlobalConfiguration
        * InitialAudioGain
        * InputEndAction
        * InputLossBehavior
          * BlackFrameMsec
          * InputLossImageColor
          * InputLossImageSlate
          * InputLossImageType
          * RepeatFrameMsec
        * OutputLockingMode
        * OutputTimingSource
        * SupportLowFramerateInputs
      * NielsenConfiguration
        * DistributorId
        * NielsenPcmToId3Tagging
      * OutputGroups **required**
        * items [OutputGroup](#outputgroup)
      * TimecodeConfig **required**
        * Source **required**
        * SyncThreshold
      * VideoDescriptions **required**
        * items [VideoDescription](#videodescription)
    * Id
    * InputAttachments
      * items [InputAttachment](#inputattachment)
    * InputSpecification
      * Codec
      * MaximumBitrate
      * Resolution
    * LogLevel
    * Name
    * PipelineDetails
      * items [PipelineDetail](#pipelinedetail)
    * PipelinesRunningCount
    * RoleArn
    * State
    * Tags

### CreateInputRequest
* CreateInputRequest `object`: The name of the input
  * Destinations
    * items [InputDestinationRequest](#inputdestinationrequest)
  * InputDevices
    * items [InputDeviceSettings](#inputdevicesettings)
  * InputSecurityGroups
    * items [__string](#__string)
  * MediaConnectFlows
    * items [MediaConnectFlowRequest](#mediaconnectflowrequest)
  * Name
  * RequestId
  * RoleArn
  * Sources
    * items [InputSourceRequest](#inputsourcerequest)
  * Tags
  * Type
  * Vpc
    * SecurityGroupIds
      * items [__string](#__string)
    * SubnetIds **required**
      * items [__string](#__string)

### CreateInputResponse
* CreateInputResponse `object`: Placeholder documentation for CreateInputResponse
  * Input
    * Arn
    * AttachedChannels
      * items [__string](#__string)
    * Destinations
      * items [InputDestination](#inputdestination)
    * Id
    * InputClass
    * InputDevices
      * items [InputDeviceSettings](#inputdevicesettings)
    * InputSourceType
    * MediaConnectFlows
      * items [MediaConnectFlow](#mediaconnectflow)
    * Name
    * RoleArn
    * SecurityGroups
      * items [__string](#__string)
    * Sources
      * items [InputSource](#inputsource)
    * State
    * Tags
    * Type

### CreateInputSecurityGroupRequest
* CreateInputSecurityGroupRequest `object`: The IPv4 CIDRs to whitelist for this Input Security Group
  * Tags
  * WhitelistRules
    * items [InputWhitelistRuleCidr](#inputwhitelistrulecidr)

### CreateInputSecurityGroupResponse
* CreateInputSecurityGroupResponse `object`: Placeholder documentation for CreateInputSecurityGroupResponse
  * SecurityGroup
    * Arn
    * Id
    * Inputs
      * items [__string](#__string)
    * State
    * Tags
    * WhitelistRules
      * items [InputWhitelistRule](#inputwhitelistrule)

### CreateMultiplexProgramRequest
* CreateMultiplexProgramRequest `object`: A request to create a program in a multiplex.
  * MultiplexProgramSettings **required**
    * PreferredChannelPipeline
    * ProgramNumber **required**
    * ServiceDescriptor
      * ProviderName **required**
      * ServiceName **required**
    * VideoSettings
      * ConstantBitrate
      * StatmuxSettings
        * MaximumBitrate
        * MinimumBitrate
        * Priority
  * ProgramName **required**
  * RequestId **required**

### CreateMultiplexProgramResponse
* CreateMultiplexProgramResponse `object`: Placeholder documentation for CreateMultiplexProgramResponse
  * MultiplexProgram
    * ChannelId
    * MultiplexProgramSettings
      * PreferredChannelPipeline
      * ProgramNumber **required**
      * ServiceDescriptor
        * ProviderName **required**
        * ServiceName **required**
      * VideoSettings
        * ConstantBitrate
        * StatmuxSettings
          * MaximumBitrate
          * MinimumBitrate
          * Priority
    * PacketIdentifiersMap
      * AudioPids
        * items [__integer](#__integer)
      * DvbSubPids
        * items [__integer](#__integer)
      * DvbTeletextPid
      * EtvPlatformPid
      * EtvSignalPid
      * KlvDataPids
        * items [__integer](#__integer)
      * PcrPid
      * PmtPid
      * PrivateMetadataPid
      * Scte27Pids
        * items [__integer](#__integer)
      * Scte35Pid
      * TimedMetadataPid
      * VideoPid
    * PipelineDetails
      * items [MultiplexProgramPipelineDetail](#multiplexprogrampipelinedetail)
    * ProgramName

### CreateMultiplexRequest
* CreateMultiplexRequest `object`: A request to create a multiplex.
  * AvailabilityZones **required**
    * items [__string](#__string)
  * MultiplexSettings **required**
    * MaximumVideoBufferDelayMilliseconds
    * TransportStreamBitrate **required**
    * TransportStreamId **required**
    * TransportStreamReservedBitrate
  * Name **required**
  * RequestId **required**
  * Tags

### CreateMultiplexResponse
* CreateMultiplexResponse `object`: Placeholder documentation for CreateMultiplexResponse
  * Multiplex
    * Arn
    * AvailabilityZones
      * items [__string](#__string)
    * Destinations
      * items [MultiplexOutputDestination](#multiplexoutputdestination)
    * Id
    * MultiplexSettings
      * MaximumVideoBufferDelayMilliseconds
      * TransportStreamBitrate **required**
      * TransportStreamId **required**
      * TransportStreamReservedBitrate
    * Name
    * PipelinesRunningCount
    * ProgramCount
    * State
    * Tags

### CreateTagsRequest
* CreateTagsRequest `object`: Placeholder documentation for CreateTagsRequest
  * Tags

### DeleteChannelRequest
* DeleteChannelRequest `object`: Placeholder documentation for DeleteChannelRequest

### DeleteChannelResponse
* DeleteChannelResponse `object`: Placeholder documentation for DeleteChannelResponse
  * Arn
  * CdiInputSpecification
    * Resolution
  * ChannelClass
  * Destinations
    * items [OutputDestination](#outputdestination)
  * EgressEndpoints
    * items [ChannelEgressEndpoint](#channelegressendpoint)
  * EncoderSettings
    * AudioDescriptions **required**
      * items [AudioDescription](#audiodescription)
    * AvailBlanking
      * AvailBlankingImage
        * PasswordParam
        * Uri **required**
        * Username
      * State
    * AvailConfiguration
      * AvailSettings
        * Scte35SpliceInsert
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
        * Scte35TimeSignalApos
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
    * BlackoutSlate
      * BlackoutSlateImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkEndBlackout
      * NetworkEndBlackoutImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkId
      * State
    * CaptionDescriptions
      * items [CaptionDescription](#captiondescription)
    * FeatureActivations
      * InputPrepareScheduleActions
    * GlobalConfiguration
      * InitialAudioGain
      * InputEndAction
      * InputLossBehavior
        * BlackFrameMsec
        * InputLossImageColor
        * InputLossImageSlate
          * PasswordParam
          * Uri **required**
          * Username
        * InputLossImageType
        * RepeatFrameMsec
      * OutputLockingMode
      * OutputTimingSource
      * SupportLowFramerateInputs
    * NielsenConfiguration
      * DistributorId
      * NielsenPcmToId3Tagging
    * OutputGroups **required**
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig **required**
      * Source **required**
      * SyncThreshold
    * VideoDescriptions **required**
      * items [VideoDescription](#videodescription)
  * Id
  * InputAttachments
    * items [InputAttachment](#inputattachment)
  * InputSpecification
    * Codec
    * MaximumBitrate
    * Resolution
  * LogLevel
  * Name
  * PipelineDetails
    * items [PipelineDetail](#pipelinedetail)
  * PipelinesRunningCount
  * RoleArn
  * State
  * Tags

### DeleteInputRequest
* DeleteInputRequest `object`: Placeholder documentation for DeleteInputRequest

### DeleteInputResponse
* DeleteInputResponse `object`: Placeholder documentation for DeleteInputResponse

### DeleteInputSecurityGroupRequest
* DeleteInputSecurityGroupRequest `object`: Placeholder documentation for DeleteInputSecurityGroupRequest

### DeleteInputSecurityGroupResponse
* DeleteInputSecurityGroupResponse `object`: Placeholder documentation for DeleteInputSecurityGroupResponse

### DeleteMultiplexProgramRequest
* DeleteMultiplexProgramRequest `object`: Placeholder documentation for DeleteMultiplexProgramRequest

### DeleteMultiplexProgramResponse
* DeleteMultiplexProgramResponse `object`: Placeholder documentation for DeleteMultiplexProgramResponse
  * ChannelId
  * MultiplexProgramSettings
    * PreferredChannelPipeline
    * ProgramNumber **required**
    * ServiceDescriptor
      * ProviderName **required**
      * ServiceName **required**
    * VideoSettings
      * ConstantBitrate
      * StatmuxSettings
        * MaximumBitrate
        * MinimumBitrate
        * Priority
  * PacketIdentifiersMap
    * AudioPids
      * items [__integer](#__integer)
    * DvbSubPids
      * items [__integer](#__integer)
    * DvbTeletextPid
    * EtvPlatformPid
    * EtvSignalPid
    * KlvDataPids
      * items [__integer](#__integer)
    * PcrPid
    * PmtPid
    * PrivateMetadataPid
    * Scte27Pids
      * items [__integer](#__integer)
    * Scte35Pid
    * TimedMetadataPid
    * VideoPid
  * PipelineDetails
    * items [MultiplexProgramPipelineDetail](#multiplexprogrampipelinedetail)
  * ProgramName

### DeleteMultiplexRequest
* DeleteMultiplexRequest `object`: Placeholder documentation for DeleteMultiplexRequest

### DeleteMultiplexResponse
* DeleteMultiplexResponse `object`: Placeholder documentation for DeleteMultiplexResponse
  * Arn
  * AvailabilityZones
    * items [__string](#__string)
  * Destinations
    * items [MultiplexOutputDestination](#multiplexoutputdestination)
  * Id
  * MultiplexSettings
    * MaximumVideoBufferDelayMilliseconds
    * TransportStreamBitrate **required**
    * TransportStreamId **required**
    * TransportStreamReservedBitrate
  * Name
  * PipelinesRunningCount
  * ProgramCount
  * State
  * Tags

### DeleteReservationRequest
* DeleteReservationRequest `object`: Placeholder documentation for DeleteReservationRequest

### DeleteReservationResponse
* DeleteReservationResponse `object`: Placeholder documentation for DeleteReservationResponse
  * Arn
  * Count
  * CurrencyCode
  * Duration
  * DurationUnits
  * End
  * FixedPrice
  * Name
  * OfferingDescription
  * OfferingId
  * OfferingType
  * Region
  * ReservationId
  * ResourceSpecification
    * ChannelClass
    * Codec
    * MaximumBitrate
    * MaximumFramerate
    * Resolution
    * ResourceType
    * SpecialFeature
    * VideoQuality
  * Start
  * State
  * Tags
  * UsagePrice

### DeleteScheduleRequest
* DeleteScheduleRequest `object`: Placeholder documentation for DeleteScheduleRequest

### DeleteScheduleResponse
* DeleteScheduleResponse `object`: Placeholder documentation for DeleteScheduleResponse

### DeleteTagsRequest
* DeleteTagsRequest `object`: Placeholder documentation for DeleteTagsRequest

### DescribeChannelRequest
* DescribeChannelRequest `object`: Placeholder documentation for DescribeChannelRequest

### DescribeChannelResponse
* DescribeChannelResponse `object`: Placeholder documentation for DescribeChannelResponse
  * Arn
  * CdiInputSpecification
    * Resolution
  * ChannelClass
  * Destinations
    * items [OutputDestination](#outputdestination)
  * EgressEndpoints
    * items [ChannelEgressEndpoint](#channelegressendpoint)
  * EncoderSettings
    * AudioDescriptions **required**
      * items [AudioDescription](#audiodescription)
    * AvailBlanking
      * AvailBlankingImage
        * PasswordParam
        * Uri **required**
        * Username
      * State
    * AvailConfiguration
      * AvailSettings
        * Scte35SpliceInsert
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
        * Scte35TimeSignalApos
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
    * BlackoutSlate
      * BlackoutSlateImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkEndBlackout
      * NetworkEndBlackoutImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkId
      * State
    * CaptionDescriptions
      * items [CaptionDescription](#captiondescription)
    * FeatureActivations
      * InputPrepareScheduleActions
    * GlobalConfiguration
      * InitialAudioGain
      * InputEndAction
      * InputLossBehavior
        * BlackFrameMsec
        * InputLossImageColor
        * InputLossImageSlate
          * PasswordParam
          * Uri **required**
          * Username
        * InputLossImageType
        * RepeatFrameMsec
      * OutputLockingMode
      * OutputTimingSource
      * SupportLowFramerateInputs
    * NielsenConfiguration
      * DistributorId
      * NielsenPcmToId3Tagging
    * OutputGroups **required**
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig **required**
      * Source **required**
      * SyncThreshold
    * VideoDescriptions **required**
      * items [VideoDescription](#videodescription)
  * Id
  * InputAttachments
    * items [InputAttachment](#inputattachment)
  * InputSpecification
    * Codec
    * MaximumBitrate
    * Resolution
  * LogLevel
  * Name
  * PipelineDetails
    * items [PipelineDetail](#pipelinedetail)
  * PipelinesRunningCount
  * RoleArn
  * State
  * Tags

### DescribeInputDeviceRequest
* DescribeInputDeviceRequest `object`: Placeholder documentation for DescribeInputDeviceRequest

### DescribeInputDeviceResponse
* DescribeInputDeviceResponse `object`: Placeholder documentation for DescribeInputDeviceResponse
  * Arn
  * ConnectionState
  * DeviceSettingsSyncState
  * DeviceUpdateStatus
  * HdDeviceSettings
    * ActiveInput
    * ConfiguredInput
    * DeviceState
    * Framerate
    * Height
    * MaxBitrate
    * ScanType
    * Width
  * Id
  * MacAddress
  * Name
  * NetworkSettings
    * DnsAddresses
      * items [__string](#__string)
    * Gateway
    * IpAddress
    * IpScheme
    * SubnetMask
  * SerialNumber
  * Type
  * UhdDeviceSettings
    * ActiveInput
    * ConfiguredInput
    * DeviceState
    * Framerate
    * Height
    * MaxBitrate
    * ScanType
    * Width

### DescribeInputDeviceThumbnailRequest
* DescribeInputDeviceThumbnailRequest `object`: Placeholder documentation for DescribeInputDeviceThumbnailRequest

### DescribeInputDeviceThumbnailResponse
* DescribeInputDeviceThumbnailResponse `object`: Placeholder documentation for DescribeInputDeviceThumbnailResponse
  * Body

### DescribeInputRequest
* DescribeInputRequest `object`: Placeholder documentation for DescribeInputRequest

### DescribeInputResponse
* DescribeInputResponse `object`: Placeholder documentation for DescribeInputResponse
  * Arn
  * AttachedChannels
    * items [__string](#__string)
  * Destinations
    * items [InputDestination](#inputdestination)
  * Id
  * InputClass
  * InputDevices
    * items [InputDeviceSettings](#inputdevicesettings)
  * InputSourceType
  * MediaConnectFlows
    * items [MediaConnectFlow](#mediaconnectflow)
  * Name
  * RoleArn
  * SecurityGroups
    * items [__string](#__string)
  * Sources
    * items [InputSource](#inputsource)
  * State
  * Tags
  * Type

### DescribeInputSecurityGroupRequest
* DescribeInputSecurityGroupRequest `object`: Placeholder documentation for DescribeInputSecurityGroupRequest

### DescribeInputSecurityGroupResponse
* DescribeInputSecurityGroupResponse `object`: Placeholder documentation for DescribeInputSecurityGroupResponse
  * Arn
  * Id
  * Inputs
    * items [__string](#__string)
  * State
  * Tags
  * WhitelistRules
    * items [InputWhitelistRule](#inputwhitelistrule)

### DescribeMultiplexProgramRequest
* DescribeMultiplexProgramRequest `object`: Placeholder documentation for DescribeMultiplexProgramRequest

### DescribeMultiplexProgramResponse
* DescribeMultiplexProgramResponse `object`: Placeholder documentation for DescribeMultiplexProgramResponse
  * ChannelId
  * MultiplexProgramSettings
    * PreferredChannelPipeline
    * ProgramNumber **required**
    * ServiceDescriptor
      * ProviderName **required**
      * ServiceName **required**
    * VideoSettings
      * ConstantBitrate
      * StatmuxSettings
        * MaximumBitrate
        * MinimumBitrate
        * Priority
  * PacketIdentifiersMap
    * AudioPids
      * items [__integer](#__integer)
    * DvbSubPids
      * items [__integer](#__integer)
    * DvbTeletextPid
    * EtvPlatformPid
    * EtvSignalPid
    * KlvDataPids
      * items [__integer](#__integer)
    * PcrPid
    * PmtPid
    * PrivateMetadataPid
    * Scte27Pids
      * items [__integer](#__integer)
    * Scte35Pid
    * TimedMetadataPid
    * VideoPid
  * PipelineDetails
    * items [MultiplexProgramPipelineDetail](#multiplexprogrampipelinedetail)
  * ProgramName

### DescribeMultiplexRequest
* DescribeMultiplexRequest `object`: Placeholder documentation for DescribeMultiplexRequest

### DescribeMultiplexResponse
* DescribeMultiplexResponse `object`: Placeholder documentation for DescribeMultiplexResponse
  * Arn
  * AvailabilityZones
    * items [__string](#__string)
  * Destinations
    * items [MultiplexOutputDestination](#multiplexoutputdestination)
  * Id
  * MultiplexSettings
    * MaximumVideoBufferDelayMilliseconds
    * TransportStreamBitrate **required**
    * TransportStreamId **required**
    * TransportStreamReservedBitrate
  * Name
  * PipelinesRunningCount
  * ProgramCount
  * State
  * Tags

### DescribeOfferingRequest
* DescribeOfferingRequest `object`: Placeholder documentation for DescribeOfferingRequest

### DescribeOfferingResponse
* DescribeOfferingResponse `object`: Placeholder documentation for DescribeOfferingResponse
  * Arn
  * CurrencyCode
  * Duration
  * DurationUnits
  * FixedPrice
  * OfferingDescription
  * OfferingId
  * OfferingType
  * Region
  * ResourceSpecification
    * ChannelClass
    * Codec
    * MaximumBitrate
    * MaximumFramerate
    * Resolution
    * ResourceType
    * SpecialFeature
    * VideoQuality
  * UsagePrice

### DescribeReservationRequest
* DescribeReservationRequest `object`: Placeholder documentation for DescribeReservationRequest

### DescribeReservationResponse
* DescribeReservationResponse `object`: Placeholder documentation for DescribeReservationResponse
  * Arn
  * Count
  * CurrencyCode
  * Duration
  * DurationUnits
  * End
  * FixedPrice
  * Name
  * OfferingDescription
  * OfferingId
  * OfferingType
  * Region
  * ReservationId
  * ResourceSpecification
    * ChannelClass
    * Codec
    * MaximumBitrate
    * MaximumFramerate
    * Resolution
    * ResourceType
    * SpecialFeature
    * VideoQuality
  * Start
  * State
  * Tags
  * UsagePrice

### DescribeScheduleRequest
* DescribeScheduleRequest `object`: Placeholder documentation for DescribeScheduleRequest

### DescribeScheduleResponse
* DescribeScheduleResponse `object`: Placeholder documentation for DescribeScheduleResponse
  * NextToken
  * ScheduleActions
    * items [ScheduleAction](#scheduleaction)

### DeviceSettingsSyncState
* DeviceSettingsSyncState `string` (values: SYNCED, SYNCING): The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.

### DeviceUpdateStatus
* DeviceUpdateStatus `string` (values: UP_TO_DATE, NOT_UP_TO_DATE): The status of software on the input device.

### DvbNitSettings
* DvbNitSettings `object`: DVB Network Information Table (NIT)
  * NetworkId **required**
  * NetworkName **required**
  * RepInterval

### DvbSdtOutputSdt
* DvbSdtOutputSdt `string` (values: SDT_FOLLOW, SDT_FOLLOW_IF_PRESENT, SDT_MANUAL, SDT_NONE): Dvb Sdt Output Sdt

### DvbSdtSettings
* DvbSdtSettings `object`: DVB Service Description Table (SDT)
  * OutputSdt
  * RepInterval
  * ServiceName
  * ServiceProviderName

### DvbSubDestinationAlignment
* DvbSubDestinationAlignment `string` (values: CENTERED, LEFT, SMART): Dvb Sub Destination Alignment

### DvbSubDestinationBackgroundColor
* DvbSubDestinationBackgroundColor `string` (values: BLACK, NONE, WHITE): Dvb Sub Destination Background Color

### DvbSubDestinationFontColor
* DvbSubDestinationFontColor `string` (values: BLACK, BLUE, GREEN, RED, WHITE, YELLOW): Dvb Sub Destination Font Color

### DvbSubDestinationOutlineColor
* DvbSubDestinationOutlineColor `string` (values: BLACK, BLUE, GREEN, RED, WHITE, YELLOW): Dvb Sub Destination Outline Color

### DvbSubDestinationSettings
* DvbSubDestinationSettings `object`: Dvb Sub Destination Settings
  * Alignment
  * BackgroundColor
  * BackgroundOpacity
  * Font
    * PasswordParam
    * Uri **required**
    * Username
  * FontColor
  * FontOpacity
  * FontResolution
  * FontSize
  * OutlineColor
  * OutlineSize
  * ShadowColor
  * ShadowOpacity
  * ShadowXOffset
  * ShadowYOffset
  * TeletextGridControl
  * XPosition
  * YPosition

### DvbSubDestinationShadowColor
* DvbSubDestinationShadowColor `string` (values: BLACK, NONE, WHITE): Dvb Sub Destination Shadow Color

### DvbSubDestinationTeletextGridControl
* DvbSubDestinationTeletextGridControl `string` (values: FIXED, SCALED): Dvb Sub Destination Teletext Grid Control

### DvbSubSourceSettings
* DvbSubSourceSettings `object`: Dvb Sub Source Settings
  * Pid

### DvbTdtSettings
* DvbTdtSettings `object`: DVB Time and Date Table (SDT)
  * RepInterval

### Eac3AttenuationControl
* Eac3AttenuationControl `string` (values: ATTENUATE_3_DB, NONE): Eac3 Attenuation Control

### Eac3BitstreamMode
* Eac3BitstreamMode `string` (values: COMMENTARY, COMPLETE_MAIN, EMERGENCY, HEARING_IMPAIRED, VISUALLY_IMPAIRED): Eac3 Bitstream Mode

### Eac3CodingMode
* Eac3CodingMode `string` (values: CODING_MODE_1_0, CODING_MODE_2_0, CODING_MODE_3_2): Eac3 Coding Mode

### Eac3DcFilter
* Eac3DcFilter `string` (values: DISABLED, ENABLED): Eac3 Dc Filter

### Eac3DrcLine
* Eac3DrcLine `string` (values: FILM_LIGHT, FILM_STANDARD, MUSIC_LIGHT, MUSIC_STANDARD, NONE, SPEECH): Eac3 Drc Line

### Eac3DrcRf
* Eac3DrcRf `string` (values: FILM_LIGHT, FILM_STANDARD, MUSIC_LIGHT, MUSIC_STANDARD, NONE, SPEECH): Eac3 Drc Rf

### Eac3LfeControl
* Eac3LfeControl `string` (values: LFE, NO_LFE): Eac3 Lfe Control

### Eac3LfeFilter
* Eac3LfeFilter `string` (values: DISABLED, ENABLED): Eac3 Lfe Filter

### Eac3MetadataControl
* Eac3MetadataControl `string` (values: FOLLOW_INPUT, USE_CONFIGURED): Eac3 Metadata Control

### Eac3PassthroughControl
* Eac3PassthroughControl `string` (values: NO_PASSTHROUGH, WHEN_POSSIBLE): Eac3 Passthrough Control

### Eac3PhaseControl
* Eac3PhaseControl `string` (values: NO_SHIFT, SHIFT_90_DEGREES): Eac3 Phase Control

### Eac3Settings
* Eac3Settings `object`: Eac3 Settings
  * AttenuationControl
  * Bitrate
  * BitstreamMode
  * CodingMode
  * DcFilter
  * Dialnorm
  * DrcLine
  * DrcRf
  * LfeControl
  * LfeFilter
  * LoRoCenterMixLevel
  * LoRoSurroundMixLevel
  * LtRtCenterMixLevel
  * LtRtSurroundMixLevel
  * MetadataControl
  * PassthroughControl
  * PhaseControl
  * StereoDownmix
  * SurroundExMode
  * SurroundMode

### Eac3StereoDownmix
* Eac3StereoDownmix `string` (values: DPL2, LO_RO, LT_RT, NOT_INDICATED): Eac3 Stereo Downmix

### Eac3SurroundExMode
* Eac3SurroundExMode `string` (values: DISABLED, ENABLED, NOT_INDICATED): Eac3 Surround Ex Mode

### Eac3SurroundMode
* Eac3SurroundMode `string` (values: DISABLED, ENABLED, NOT_INDICATED): Eac3 Surround Mode

### EbuTtDDestinationSettings
* EbuTtDDestinationSettings `object`: Ebu Tt DDestination Settings
  * FillLineGap
  * FontFamily
  * StyleControl

### EbuTtDDestinationStyleControl
* EbuTtDDestinationStyleControl `string` (values: EXCLUDE, INCLUDE): Ebu Tt DDestination Style Control

### EbuTtDFillLineGapControl
* EbuTtDFillLineGapControl `string` (values: DISABLED, ENABLED): Ebu Tt DFill Line Gap Control

### EmbeddedConvert608To708
* EmbeddedConvert608To708 `string` (values: DISABLED, UPCONVERT): Embedded Convert608 To708

### EmbeddedDestinationSettings
* EmbeddedDestinationSettings `object`: Embedded Destination Settings

### EmbeddedPlusScte20DestinationSettings
* EmbeddedPlusScte20DestinationSettings `object`: Embedded Plus Scte20 Destination Settings

### EmbeddedScte20Detection
* EmbeddedScte20Detection `string` (values: AUTO, OFF): Embedded Scte20 Detection

### EmbeddedSourceSettings
* EmbeddedSourceSettings `object`: Embedded Source Settings
  * Convert608To708
  * Scte20Detection
  * Source608ChannelNumber
  * Source608TrackNumber

### EncoderSettings
* EncoderSettings `object`: Encoder Settings
  * AudioDescriptions **required**
    * items [AudioDescription](#audiodescription)
  * AvailBlanking
    * AvailBlankingImage
      * PasswordParam
      * Uri **required**
      * Username
    * State
  * AvailConfiguration
    * AvailSettings
      * Scte35SpliceInsert
        * AdAvailOffset
        * NoRegionalBlackoutFlag
        * WebDeliveryAllowedFlag
      * Scte35TimeSignalApos
        * AdAvailOffset
        * NoRegionalBlackoutFlag
        * WebDeliveryAllowedFlag
  * BlackoutSlate
    * BlackoutSlateImage
      * PasswordParam
      * Uri **required**
      * Username
    * NetworkEndBlackout
    * NetworkEndBlackoutImage
      * PasswordParam
      * Uri **required**
      * Username
    * NetworkId
    * State
  * CaptionDescriptions
    * items [CaptionDescription](#captiondescription)
  * FeatureActivations
    * InputPrepareScheduleActions
  * GlobalConfiguration
    * InitialAudioGain
    * InputEndAction
    * InputLossBehavior
      * BlackFrameMsec
      * InputLossImageColor
      * InputLossImageSlate
        * PasswordParam
        * Uri **required**
        * Username
      * InputLossImageType
      * RepeatFrameMsec
    * OutputLockingMode
    * OutputTimingSource
    * SupportLowFramerateInputs
  * NielsenConfiguration
    * DistributorId
    * NielsenPcmToId3Tagging
  * OutputGroups **required**
    * items [OutputGroup](#outputgroup)
  * TimecodeConfig **required**
    * Source **required**
    * SyncThreshold
  * VideoDescriptions **required**
    * items [VideoDescription](#videodescription)

### FailoverCondition
* FailoverCondition `object`: Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings.
  * FailoverConditionSettings
    * AudioSilenceSettings
      * AudioSelectorName **required**
      * AudioSilenceThresholdMsec
    * InputLossSettings
      * InputLossThresholdMsec
    * VideoBlackSettings
      * BlackDetectThreshold
      * VideoBlackThresholdMsec

### FailoverConditionSettings
* FailoverConditionSettings `object`: Settings for one failover condition.
  * AudioSilenceSettings
    * AudioSelectorName **required**
    * AudioSilenceThresholdMsec
  * InputLossSettings
    * InputLossThresholdMsec
  * VideoBlackSettings
    * BlackDetectThreshold
    * VideoBlackThresholdMsec

### FeatureActivations
* FeatureActivations `object`: Feature Activations
  * InputPrepareScheduleActions

### FeatureActivationsInputPrepareScheduleActions
* FeatureActivationsInputPrepareScheduleActions `string` (values: DISABLED, ENABLED): Feature Activations Input Prepare Schedule Actions

### FecOutputIncludeFec
* FecOutputIncludeFec `string` (values: COLUMN, COLUMN_AND_ROW): Fec Output Include Fec

### FecOutputSettings
* FecOutputSettings `object`: Fec Output Settings
  * ColumnDepth
  * IncludeFec
  * RowLength

### FixedAfd
* FixedAfd `string` (values: AFD_0000, AFD_0010, AFD_0011, AFD_0100, AFD_1000, AFD_1001, AFD_1010, AFD_1011, AFD_1101, AFD_1110, AFD_1111): Fixed Afd

### FixedModeScheduleActionStartSettings
* FixedModeScheduleActionStartSettings `object`: Start time for the action.
  * Time **required**

### Fmp4HlsSettings
* Fmp4HlsSettings `object`: Fmp4 Hls Settings
  * AudioRenditionSets
  * NielsenId3Behavior
  * TimedMetadataBehavior

### Fmp4NielsenId3Behavior
* Fmp4NielsenId3Behavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): Fmp4 Nielsen Id3 Behavior

### Fmp4TimedMetadataBehavior
* Fmp4TimedMetadataBehavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): Fmp4 Timed Metadata Behavior

### FollowModeScheduleActionStartSettings
* FollowModeScheduleActionStartSettings `object`: Settings to specify if an action follows another.
  * FollowPoint **required**
  * ReferenceActionName **required**

### FollowPoint
* FollowPoint `string` (values: END, START): Follow reference point.

### ForbiddenException


### FrameCaptureGroupSettings
* FrameCaptureGroupSettings `object`: Frame Capture Group Settings
  * Destination **required**
    * DestinationRefId

### FrameCaptureIntervalUnit
* FrameCaptureIntervalUnit `string` (values: MILLISECONDS, SECONDS): Frame Capture Interval Unit

### FrameCaptureOutputSettings
* FrameCaptureOutputSettings `object`: Frame Capture Output Settings
  * NameModifier

### FrameCaptureSettings
* FrameCaptureSettings `object`: Frame Capture Settings
  * CaptureInterval **required**
  * CaptureIntervalUnits

### GatewayTimeoutException


### GlobalConfiguration
* GlobalConfiguration `object`: Global Configuration
  * InitialAudioGain
  * InputEndAction
  * InputLossBehavior
    * BlackFrameMsec
    * InputLossImageColor
    * InputLossImageSlate
      * PasswordParam
      * Uri **required**
      * Username
    * InputLossImageType
    * RepeatFrameMsec
  * OutputLockingMode
  * OutputTimingSource
  * SupportLowFramerateInputs

### GlobalConfigurationInputEndAction
* GlobalConfigurationInputEndAction `string` (values: NONE, SWITCH_AND_LOOP_INPUTS): Global Configuration Input End Action

### GlobalConfigurationLowFramerateInputs
* GlobalConfigurationLowFramerateInputs `string` (values: DISABLED, ENABLED): Global Configuration Low Framerate Inputs

### GlobalConfigurationOutputLockingMode
* GlobalConfigurationOutputLockingMode `string` (values: EPOCH_LOCKING, PIPELINE_LOCKING): Global Configuration Output Locking Mode

### GlobalConfigurationOutputTimingSource
* GlobalConfigurationOutputTimingSource `string` (values: INPUT_CLOCK, SYSTEM_CLOCK): Global Configuration Output Timing Source

### H264AdaptiveQuantization
* H264AdaptiveQuantization `string` (values: HIGH, HIGHER, LOW, MAX, MEDIUM, OFF): H264 Adaptive Quantization

### H264ColorMetadata
* H264ColorMetadata `string` (values: IGNORE, INSERT): H264 Color Metadata

### H264ColorSpaceSettings
* H264ColorSpaceSettings `object`: H264 Color Space Settings
  * ColorSpacePassthroughSettings
  * Rec601Settings
  * Rec709Settings

### H264EntropyEncoding
* H264EntropyEncoding `string` (values: CABAC, CAVLC): H264 Entropy Encoding

### H264FilterSettings
* H264FilterSettings `object`: H264 Filter Settings
  * TemporalFilterSettings
    * PostFilterSharpening
    * Strength

### H264FlickerAq
* H264FlickerAq `string` (values: DISABLED, ENABLED): H264 Flicker Aq

### H264ForceFieldPictures
* H264ForceFieldPictures `string` (values: DISABLED, ENABLED): H264 Force Field Pictures

### H264FramerateControl
* H264FramerateControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): H264 Framerate Control

### H264GopBReference
* H264GopBReference `string` (values: DISABLED, ENABLED): H264 Gop BReference

### H264GopSizeUnits
* H264GopSizeUnits `string` (values: FRAMES, SECONDS): H264 Gop Size Units

### H264Level
* H264Level `string` (values: H264_LEVEL_1, H264_LEVEL_1_1, H264_LEVEL_1_2, H264_LEVEL_1_3, H264_LEVEL_2, H264_LEVEL_2_1, H264_LEVEL_2_2, H264_LEVEL_3, H264_LEVEL_3_1, H264_LEVEL_3_2, H264_LEVEL_4, H264_LEVEL_4_1, H264_LEVEL_4_2, H264_LEVEL_5, H264_LEVEL_5_1, H264_LEVEL_5_2, H264_LEVEL_AUTO): H264 Level

### H264LookAheadRateControl
* H264LookAheadRateControl `string` (values: HIGH, LOW, MEDIUM): H264 Look Ahead Rate Control

### H264ParControl
* H264ParControl `string` (values: INITIALIZE_FROM_SOURCE, SPECIFIED): H264 Par Control

### H264Profile
* H264Profile `string` (values: BASELINE, HIGH, HIGH_10BIT, HIGH_422, HIGH_422_10BIT, MAIN): H264 Profile

### H264QualityLevel
* H264QualityLevel `string` (values: ENHANCED_QUALITY, STANDARD_QUALITY): H264 Quality Level

### H264RateControlMode
* H264RateControlMode `string` (values: CBR, MULTIPLEX, QVBR, VBR): H264 Rate Control Mode

### H264ScanType
* H264ScanType `string` (values: INTERLACED, PROGRESSIVE): H264 Scan Type

### H264SceneChangeDetect
* H264SceneChangeDetect `string` (values: DISABLED, ENABLED): H264 Scene Change Detect

### H264Settings
* H264Settings `object`: H264 Settings
  * AdaptiveQuantization
  * AfdSignaling
  * Bitrate
  * BufFillPct
  * BufSize
  * ColorMetadata
  * ColorSpaceSettings
    * ColorSpacePassthroughSettings
    * Rec601Settings
    * Rec709Settings
  * EntropyEncoding
  * FilterSettings
    * TemporalFilterSettings
      * PostFilterSharpening
      * Strength
  * FixedAfd
  * FlickerAq
  * ForceFieldPictures
  * FramerateControl
  * FramerateDenominator
  * FramerateNumerator
  * GopBReference
  * GopClosedCadence
  * GopNumBFrames
  * GopSize
  * GopSizeUnits
  * Level
  * LookAheadRateControl
  * MaxBitrate
  * MinIInterval
  * NumRefFrames
  * ParControl
  * ParDenominator
  * ParNumerator
  * Profile
  * QualityLevel
  * QvbrQualityLevel
  * RateControlMode
  * ScanType
  * SceneChangeDetect
  * Slices
  * Softness
  * SpatialAq
  * SubgopLength
  * Syntax
  * TemporalAq
  * TimecodeInsertion

### H264SpatialAq
* H264SpatialAq `string` (values: DISABLED, ENABLED): H264 Spatial Aq

### H264SubGopLength
* H264SubGopLength `string` (values: DYNAMIC, FIXED): H264 Sub Gop Length

### H264Syntax
* H264Syntax `string` (values: DEFAULT, RP2027): H264 Syntax

### H264TemporalAq
* H264TemporalAq `string` (values: DISABLED, ENABLED): H264 Temporal Aq

### H264TimecodeInsertionBehavior
* H264TimecodeInsertionBehavior `string` (values: DISABLED, PIC_TIMING_SEI): H264 Timecode Insertion Behavior

### H265AdaptiveQuantization
* H265AdaptiveQuantization `string` (values: HIGH, HIGHER, LOW, MAX, MEDIUM, OFF): H265 Adaptive Quantization

### H265AlternativeTransferFunction
* H265AlternativeTransferFunction `string` (values: INSERT, OMIT): H265 Alternative Transfer Function

### H265ColorMetadata
* H265ColorMetadata `string` (values: IGNORE, INSERT): H265 Color Metadata

### H265ColorSpaceSettings
* H265ColorSpaceSettings `object`: H265 Color Space Settings
  * ColorSpacePassthroughSettings
  * Hdr10Settings
    * MaxCll
    * MaxFall
  * Rec601Settings
  * Rec709Settings

### H265FilterSettings
* H265FilterSettings `object`: H265 Filter Settings
  * TemporalFilterSettings
    * PostFilterSharpening
    * Strength

### H265FlickerAq
* H265FlickerAq `string` (values: DISABLED, ENABLED): H265 Flicker Aq

### H265GopSizeUnits
* H265GopSizeUnits `string` (values: FRAMES, SECONDS): H265 Gop Size Units

### H265Level
* H265Level `string` (values: H265_LEVEL_1, H265_LEVEL_2, H265_LEVEL_2_1, H265_LEVEL_3, H265_LEVEL_3_1, H265_LEVEL_4, H265_LEVEL_4_1, H265_LEVEL_5, H265_LEVEL_5_1, H265_LEVEL_5_2, H265_LEVEL_6, H265_LEVEL_6_1, H265_LEVEL_6_2, H265_LEVEL_AUTO): H265 Level

### H265LookAheadRateControl
* H265LookAheadRateControl `string` (values: HIGH, LOW, MEDIUM): H265 Look Ahead Rate Control

### H265Profile
* H265Profile `string` (values: MAIN, MAIN_10BIT): H265 Profile

### H265RateControlMode
* H265RateControlMode `string` (values: CBR, MULTIPLEX, QVBR): H265 Rate Control Mode

### H265ScanType
* H265ScanType `string` (values: INTERLACED, PROGRESSIVE): H265 Scan Type

### H265SceneChangeDetect
* H265SceneChangeDetect `string` (values: DISABLED, ENABLED): H265 Scene Change Detect

### H265Settings
* H265Settings `object`: H265 Settings
  * AdaptiveQuantization
  * AfdSignaling
  * AlternativeTransferFunction
  * Bitrate
  * BufSize
  * ColorMetadata
  * ColorSpaceSettings
    * ColorSpacePassthroughSettings
    * Hdr10Settings
      * MaxCll
      * MaxFall
    * Rec601Settings
    * Rec709Settings
  * FilterSettings
    * TemporalFilterSettings
      * PostFilterSharpening
      * Strength
  * FixedAfd
  * FlickerAq
  * FramerateDenominator **required**
  * FramerateNumerator **required**
  * GopClosedCadence
  * GopSize
  * GopSizeUnits
  * Level
  * LookAheadRateControl
  * MaxBitrate
  * MinIInterval
  * ParDenominator
  * ParNumerator
  * Profile
  * QvbrQualityLevel
  * RateControlMode
  * ScanType
  * SceneChangeDetect
  * Slices
  * Tier
  * TimecodeInsertion

### H265Tier
* H265Tier `string` (values: HIGH, MAIN): H265 Tier

### H265TimecodeInsertionBehavior
* H265TimecodeInsertionBehavior `string` (values: DISABLED, PIC_TIMING_SEI): H265 Timecode Insertion Behavior

### Hdr10Settings
* Hdr10Settings `object`: Hdr10 Settings
  * MaxCll
  * MaxFall

### HlsAdMarkers
* HlsAdMarkers `string` (values: ADOBE, ELEMENTAL, ELEMENTAL_SCTE35): Hls Ad Markers

### HlsAkamaiHttpTransferMode
* HlsAkamaiHttpTransferMode `string` (values: CHUNKED, NON_CHUNKED): Hls Akamai Http Transfer Mode

### HlsAkamaiSettings
* HlsAkamaiSettings `object`: Hls Akamai Settings
  * ConnectionRetryInterval
  * FilecacheDuration
  * HttpTransferMode
  * NumRetries
  * RestartDelay
  * Salt
  * Token

### HlsBasicPutSettings
* HlsBasicPutSettings `object`: Hls Basic Put Settings
  * ConnectionRetryInterval
  * FilecacheDuration
  * NumRetries
  * RestartDelay

### HlsCaptionLanguageSetting
* HlsCaptionLanguageSetting `string` (values: INSERT, NONE, OMIT): Hls Caption Language Setting

### HlsCdnSettings
* HlsCdnSettings `object`: Hls Cdn Settings
  * HlsAkamaiSettings
    * ConnectionRetryInterval
    * FilecacheDuration
    * HttpTransferMode
    * NumRetries
    * RestartDelay
    * Salt
    * Token
  * HlsBasicPutSettings
    * ConnectionRetryInterval
    * FilecacheDuration
    * NumRetries
    * RestartDelay
  * HlsMediaStoreSettings
    * ConnectionRetryInterval
    * FilecacheDuration
    * MediaStoreStorageClass
    * NumRetries
    * RestartDelay
  * HlsWebdavSettings
    * ConnectionRetryInterval
    * FilecacheDuration
    * HttpTransferMode
    * NumRetries
    * RestartDelay

### HlsClientCache
* HlsClientCache `string` (values: DISABLED, ENABLED): Hls Client Cache

### HlsCodecSpecification
* HlsCodecSpecification `string` (values: RFC_4281, RFC_6381): Hls Codec Specification

### HlsDirectoryStructure
* HlsDirectoryStructure `string` (values: SINGLE_DIRECTORY, SUBDIRECTORY_PER_STREAM): Hls Directory Structure

### HlsDiscontinuityTags
* HlsDiscontinuityTags `string` (values: INSERT, NEVER_INSERT): Hls Discontinuity Tags

### HlsEncryptionType
* HlsEncryptionType `string` (values: AES128, SAMPLE_AES): Hls Encryption Type

### HlsGroupSettings
* HlsGroupSettings `object`: Hls Group Settings
  * AdMarkers
    * items [HlsAdMarkers](#hlsadmarkers)
  * BaseUrlContent
  * BaseUrlContent1
  * BaseUrlManifest
  * BaseUrlManifest1
  * CaptionLanguageMappings
    * items [CaptionLanguageMapping](#captionlanguagemapping)
  * CaptionLanguageSetting
  * ClientCache
  * CodecSpecification
  * ConstantIv
  * Destination **required**
    * DestinationRefId
  * DirectoryStructure
  * DiscontinuityTags
  * EncryptionType
  * HlsCdnSettings
    * HlsAkamaiSettings
      * ConnectionRetryInterval
      * FilecacheDuration
      * HttpTransferMode
      * NumRetries
      * RestartDelay
      * Salt
      * Token
    * HlsBasicPutSettings
      * ConnectionRetryInterval
      * FilecacheDuration
      * NumRetries
      * RestartDelay
    * HlsMediaStoreSettings
      * ConnectionRetryInterval
      * FilecacheDuration
      * MediaStoreStorageClass
      * NumRetries
      * RestartDelay
    * HlsWebdavSettings
      * ConnectionRetryInterval
      * FilecacheDuration
      * HttpTransferMode
      * NumRetries
      * RestartDelay
  * HlsId3SegmentTagging
  * IFrameOnlyPlaylists
  * IncompleteSegmentBehavior
  * IndexNSegments
  * InputLossAction
  * IvInManifest
  * IvSource
  * KeepSegments
  * KeyFormat
  * KeyFormatVersions
  * KeyProviderSettings
    * StaticKeySettings
      * KeyProviderServer
        * PasswordParam
        * Uri **required**
        * Username
      * StaticKeyValue **required**
  * ManifestCompression
  * ManifestDurationFormat
  * MinSegmentLength
  * Mode
  * OutputSelection
  * ProgramDateTime
  * ProgramDateTimePeriod
  * RedundantManifest
  * SegmentLength
  * SegmentationMode
  * SegmentsPerSubdirectory
  * StreamInfResolution
  * TimedMetadataId3Frame
  * TimedMetadataId3Period
  * TimestampDeltaMilliseconds
  * TsFileMode

### HlsH265PackagingType
* HlsH265PackagingType `string` (values: HEV1, HVC1): Hls H265 Packaging Type

### HlsId3SegmentTaggingScheduleActionSettings
* HlsId3SegmentTaggingScheduleActionSettings `object`: Settings for the action to insert a user-defined ID3 tag in each HLS segment
  * Tag **required**

### HlsId3SegmentTaggingState
* HlsId3SegmentTaggingState `string` (values: DISABLED, ENABLED): State of HLS ID3 Segment Tagging

### HlsIncompleteSegmentBehavior
* HlsIncompleteSegmentBehavior `string` (values: AUTO, SUPPRESS): Hls Incomplete Segment Behavior

### HlsInputSettings
* HlsInputSettings `object`: Hls Input Settings
  * Bandwidth
  * BufferSegments
  * Retries
  * RetryInterval

### HlsIvInManifest
* HlsIvInManifest `string` (values: EXCLUDE, INCLUDE): Hls Iv In Manifest

### HlsIvSource
* HlsIvSource `string` (values: EXPLICIT, FOLLOWS_SEGMENT_NUMBER): Hls Iv Source

### HlsManifestCompression
* HlsManifestCompression `string` (values: GZIP, NONE): Hls Manifest Compression

### HlsManifestDurationFormat
* HlsManifestDurationFormat `string` (values: FLOATING_POINT, INTEGER): Hls Manifest Duration Format

### HlsMediaStoreSettings
* HlsMediaStoreSettings `object`: Hls Media Store Settings
  * ConnectionRetryInterval
  * FilecacheDuration
  * MediaStoreStorageClass
  * NumRetries
  * RestartDelay

### HlsMediaStoreStorageClass
* HlsMediaStoreStorageClass `string` (values: TEMPORAL): Hls Media Store Storage Class

### HlsMode
* HlsMode `string` (values: LIVE, VOD): Hls Mode

### HlsOutputSelection
* HlsOutputSelection `string` (values: MANIFESTS_AND_SEGMENTS, SEGMENTS_ONLY, VARIANT_MANIFESTS_AND_SEGMENTS): Hls Output Selection

### HlsOutputSettings
* HlsOutputSettings `object`: Hls Output Settings
  * H265PackagingType
  * HlsSettings **required**
    * AudioOnlyHlsSettings
      * AudioGroupId
      * AudioOnlyImage
        * PasswordParam
        * Uri **required**
        * Username
      * AudioTrackType
      * SegmentType
    * Fmp4HlsSettings
      * AudioRenditionSets
      * NielsenId3Behavior
      * TimedMetadataBehavior
    * StandardHlsSettings
      * AudioRenditionSets
      * M3u8Settings **required**
        * AudioFramesPerPes
        * AudioPids
        * EcmPid
        * NielsenId3Behavior
        * PatInterval
        * PcrControl
        * PcrPeriod
        * PcrPid
        * PmtInterval
        * PmtPid
        * ProgramNum
        * Scte35Behavior
        * Scte35Pid
        * TimedMetadataBehavior
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
  * NameModifier
  * SegmentModifier

### HlsProgramDateTime
* HlsProgramDateTime `string` (values: EXCLUDE, INCLUDE): Hls Program Date Time

### HlsRedundantManifest
* HlsRedundantManifest `string` (values: DISABLED, ENABLED): Hls Redundant Manifest

### HlsSegmentationMode
* HlsSegmentationMode `string` (values: USE_INPUT_SEGMENTATION, USE_SEGMENT_DURATION): Hls Segmentation Mode

### HlsSettings
* HlsSettings `object`: Hls Settings
  * AudioOnlyHlsSettings
    * AudioGroupId
    * AudioOnlyImage
      * PasswordParam
      * Uri **required**
      * Username
    * AudioTrackType
    * SegmentType
  * Fmp4HlsSettings
    * AudioRenditionSets
    * NielsenId3Behavior
    * TimedMetadataBehavior
  * StandardHlsSettings
    * AudioRenditionSets
    * M3u8Settings **required**
      * AudioFramesPerPes
      * AudioPids
      * EcmPid
      * NielsenId3Behavior
      * PatInterval
      * PcrControl
      * PcrPeriod
      * PcrPid
      * PmtInterval
      * PmtPid
      * ProgramNum
      * Scte35Behavior
      * Scte35Pid
      * TimedMetadataBehavior
      * TimedMetadataPid
      * TransportStreamId
      * VideoPid

### HlsStreamInfResolution
* HlsStreamInfResolution `string` (values: EXCLUDE, INCLUDE): Hls Stream Inf Resolution

### HlsTimedMetadataId3Frame
* HlsTimedMetadataId3Frame `string` (values: NONE, PRIV, TDRL): Hls Timed Metadata Id3 Frame

### HlsTimedMetadataScheduleActionSettings
* HlsTimedMetadataScheduleActionSettings `object`: Settings for the action to emit HLS metadata
  * Id3 **required**

### HlsTsFileMode
* HlsTsFileMode `string` (values: SEGMENTED_FILES, SINGLE_FILE): Hls Ts File Mode

### HlsWebdavHttpTransferMode
* HlsWebdavHttpTransferMode `string` (values: CHUNKED, NON_CHUNKED): Hls Webdav Http Transfer Mode

### HlsWebdavSettings
* HlsWebdavSettings `object`: Hls Webdav Settings
  * ConnectionRetryInterval
  * FilecacheDuration
  * HttpTransferMode
  * NumRetries
  * RestartDelay

### IFrameOnlyPlaylistType
* IFrameOnlyPlaylistType `string` (values: DISABLED, STANDARD): When set to "standard", an I-Frame only playlist will be written out for each video output in the output group. This I-Frame only playlist will contain byte range offsets pointing to the I-frame(s) in each segment.

### ImmediateModeScheduleActionStartSettings
* ImmediateModeScheduleActionStartSettings `object`: Settings to configure an action so that it occurs as soon as possible.

### Input
* Input `object`: Placeholder documentation for Input
  * Arn
  * AttachedChannels
    * items [__string](#__string)
  * Destinations
    * items [InputDestination](#inputdestination)
  * Id
  * InputClass
  * InputDevices
    * items [InputDeviceSettings](#inputdevicesettings)
  * InputSourceType
  * MediaConnectFlows
    * items [MediaConnectFlow](#mediaconnectflow)
  * Name
  * RoleArn
  * SecurityGroups
    * items [__string](#__string)
  * Sources
    * items [InputSource](#inputsource)
  * State
  * Tags
  * Type

### InputAttachment
* InputAttachment `object`: Placeholder documentation for InputAttachment
  * AutomaticInputFailoverSettings
    * ErrorClearTimeMsec
    * FailoverConditions
      * items [FailoverCondition](#failovercondition)
    * InputPreference
    * SecondaryInputId **required**
  * InputAttachmentName
  * InputId
  * InputSettings
    * AudioSelectors
      * items [AudioSelector](#audioselector)
    * CaptionSelectors
      * items [CaptionSelector](#captionselector)
    * DeblockFilter
    * DenoiseFilter
    * FilterStrength
    * InputFilter
    * NetworkInputSettings
      * HlsInputSettings
        * Bandwidth
        * BufferSegments
        * Retries
        * RetryInterval
      * ServerValidation
    * Smpte2038DataPreference
    * SourceEndBehavior
    * VideoSelector
      * ColorSpace
      * ColorSpaceUsage
      * SelectorSettings
        * VideoSelectorPid
          * Pid
        * VideoSelectorProgramId
          * ProgramId

### InputChannelLevel
* InputChannelLevel `object`: Input Channel Level
  * Gain **required**
  * InputChannel **required**

### InputClass
* InputClass `string` (values: STANDARD, SINGLE_PIPELINE): A standard input has two sources and a single pipeline input only has one.

### InputClippingSettings
* InputClippingSettings `object`: Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
  * InputTimecodeSource **required**
  * StartTimecode
    * Timecode
  * StopTimecode
    * LastFrameClippingBehavior
    * Timecode

### InputCodec
* InputCodec `string` (values: MPEG2, AVC, HEVC): codec in increasing order of complexity

### InputDeblockFilter
* InputDeblockFilter `string` (values: DISABLED, ENABLED): Input Deblock Filter

### InputDenoiseFilter
* InputDenoiseFilter `string` (values: DISABLED, ENABLED): Input Denoise Filter

### InputDestination
* InputDestination `object`: The settings for a PUSH type input.
  * Ip
  * Port
  * Url
  * Vpc
    * AvailabilityZone
    * NetworkInterfaceId

### InputDestinationRequest
* InputDestinationRequest `object`: Endpoint settings for a PUSH type input.
  * StreamName

### InputDestinationVpc
* InputDestinationVpc `object`: The properties for a VPC type input destination.
  * AvailabilityZone
  * NetworkInterfaceId

### InputDeviceActiveInput
* InputDeviceActiveInput `string` (values: HDMI, SDI): The source at the input device that is currently active.

### InputDeviceConfigurableSettings
* InputDeviceConfigurableSettings `object`: Configurable settings for the input device.
  * ConfiguredInput
  * MaxBitrate

### InputDeviceConfiguredInput
* InputDeviceConfiguredInput `string` (values: AUTO, HDMI, SDI): The source to activate (use) from the input device.

### InputDeviceConnectionState
* InputDeviceConnectionState `string` (values: DISCONNECTED, CONNECTED): The state of the connection between the input device and AWS.

### InputDeviceHdSettings
* InputDeviceHdSettings `object`: Settings that describe the active source from the input device, and the video characteristics of that source.
  * ActiveInput
  * ConfiguredInput
  * DeviceState
  * Framerate
  * Height
  * MaxBitrate
  * ScanType
  * Width

### InputDeviceIpScheme
* InputDeviceIpScheme `string` (values: STATIC, DHCP): Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address.

### InputDeviceNetworkSettings
* InputDeviceNetworkSettings `object`: The network settings for the input device.
  * DnsAddresses
    * items [__string](#__string)
  * Gateway
  * IpAddress
  * IpScheme
  * SubnetMask

### InputDeviceRequest
* InputDeviceRequest `object`: Settings for an input device.
  * Id

### InputDeviceScanType
* InputDeviceScanType `string` (values: INTERLACED, PROGRESSIVE): The scan type of the video source.

### InputDeviceSettings
* InputDeviceSettings `object`: Settings for an input device.
  * Id

### InputDeviceState
* InputDeviceState `string` (values: IDLE, STREAMING): The state of the input device.

### InputDeviceSummary
* InputDeviceSummary `object`: Details of the input device.
  * Arn
  * ConnectionState
  * DeviceSettingsSyncState
  * DeviceUpdateStatus
  * HdDeviceSettings
    * ActiveInput
    * ConfiguredInput
    * DeviceState
    * Framerate
    * Height
    * MaxBitrate
    * ScanType
    * Width
  * Id
  * MacAddress
  * Name
  * NetworkSettings
    * DnsAddresses
      * items [__string](#__string)
    * Gateway
    * IpAddress
    * IpScheme
    * SubnetMask
  * SerialNumber
  * Type
  * UhdDeviceSettings
    * ActiveInput
    * ConfiguredInput
    * DeviceState
    * Framerate
    * Height
    * MaxBitrate
    * ScanType
    * Width

### InputDeviceThumbnail
* InputDeviceThumbnail `string`: The binary data for the thumbnail that the Link device has most recently sent to MediaLive.

### InputDeviceTransferType
* InputDeviceTransferType `string` (values: OUTGOING, INCOMING): The type of device transfer. INCOMING for an input device that is being transferred to you, OUTGOING for an input device that you are transferring to another AWS account.

### InputDeviceType
* InputDeviceType `string` (values: HD): The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD".

### InputDeviceUhdSettings
* InputDeviceUhdSettings `object`: Settings that describe the active source from the input device, and the video characteristics of that source.
  * ActiveInput
  * ConfiguredInput
  * DeviceState
  * Framerate
  * Height
  * MaxBitrate
  * ScanType
  * Width

### InputFilter
* InputFilter `string` (values: AUTO, DISABLED, FORCED): Input Filter

### InputLocation
* InputLocation `object`: Input Location
  * PasswordParam
  * Uri **required**
  * Username

### InputLossActionForHlsOut
* InputLossActionForHlsOut `string` (values: EMIT_OUTPUT, PAUSE_OUTPUT): Input Loss Action For Hls Out

### InputLossActionForMsSmoothOut
* InputLossActionForMsSmoothOut `string` (values: EMIT_OUTPUT, PAUSE_OUTPUT): Input Loss Action For Ms Smooth Out

### InputLossActionForRtmpOut
* InputLossActionForRtmpOut `string` (values: EMIT_OUTPUT, PAUSE_OUTPUT): Input Loss Action For Rtmp Out

### InputLossActionForUdpOut
* InputLossActionForUdpOut `string` (values: DROP_PROGRAM, DROP_TS, EMIT_PROGRAM): Input Loss Action For Udp Out

### InputLossBehavior
* InputLossBehavior `object`: Input Loss Behavior
  * BlackFrameMsec
  * InputLossImageColor
  * InputLossImageSlate
    * PasswordParam
    * Uri **required**
    * Username
  * InputLossImageType
  * RepeatFrameMsec

### InputLossFailoverSettings
* InputLossFailoverSettings `object`: MediaLive will perform a failover if content is not detected in this input for the specified period.
  * InputLossThresholdMsec

### InputLossImageType
* InputLossImageType `string` (values: COLOR, SLATE): Input Loss Image Type

### InputMaximumBitrate
* InputMaximumBitrate `string` (values: MAX_10_MBPS, MAX_20_MBPS, MAX_50_MBPS): Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently.

### InputPreference
* InputPreference `string` (values: EQUAL_INPUT_PREFERENCE, PRIMARY_INPUT_PREFERRED): Input preference when deciding which input to make active when a previously failed input has recovered.

### InputPrepareScheduleActionSettings
* InputPrepareScheduleActionSettings `object`: Action to prepare an input for a future immediate input switch.
  * InputAttachmentNameReference
  * InputClippingSettings
    * InputTimecodeSource **required**
    * StartTimecode
      * Timecode
    * StopTimecode
      * LastFrameClippingBehavior
      * Timecode
  * UrlPath
    * items [__string](#__string)

### InputResolution
* InputResolution `string` (values: SD, HD, UHD): Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines

### InputSecurityGroup
* InputSecurityGroup `object`: An Input Security Group
  * Arn
  * Id
  * Inputs
    * items [__string](#__string)
  * State
  * Tags
  * WhitelistRules
    * items [InputWhitelistRule](#inputwhitelistrule)

### InputSecurityGroupState
* InputSecurityGroupState `string` (values: IDLE, IN_USE, UPDATING, DELETED): Placeholder documentation for InputSecurityGroupState

### InputSettings
* InputSettings `object`: Live Event input parameters. There can be multiple inputs in a single Live Event.
  * AudioSelectors
    * items [AudioSelector](#audioselector)
  * CaptionSelectors
    * items [CaptionSelector](#captionselector)
  * DeblockFilter
  * DenoiseFilter
  * FilterStrength
  * InputFilter
  * NetworkInputSettings
    * HlsInputSettings
      * Bandwidth
      * BufferSegments
      * Retries
      * RetryInterval
    * ServerValidation
  * Smpte2038DataPreference
  * SourceEndBehavior
  * VideoSelector
    * ColorSpace
    * ColorSpaceUsage
    * SelectorSettings
      * VideoSelectorPid
        * Pid
      * VideoSelectorProgramId
        * ProgramId

### InputSource
* InputSource `object`: The settings for a PULL type input.
  * PasswordParam
  * Url
  * Username

### InputSourceEndBehavior
* InputSourceEndBehavior `string` (values: CONTINUE, LOOP): Input Source End Behavior

### InputSourceRequest
* InputSourceRequest `object`: Settings for for a PULL type input.
  * PasswordParam
  * Url
  * Username

### InputSourceType
* InputSourceType `string` (values: STATIC, DYNAMIC): There are two types of input sources, static and dynamic. If an input source is dynamic you can

### InputSpecification
* InputSpecification `object`: Placeholder documentation for InputSpecification
  * Codec
  * MaximumBitrate
  * Resolution

### InputState
* InputState `string` (values: CREATING, DETACHED, ATTACHED, DELETING, DELETED): Placeholder documentation for InputState

### InputSwitchScheduleActionSettings
* InputSwitchScheduleActionSettings `object`: Settings for the "switch input" action: to switch from ingesting one input to ingesting another input.
  * InputAttachmentNameReference **required**
  * InputClippingSettings
    * InputTimecodeSource **required**
    * StartTimecode
      * Timecode
    * StopTimecode
      * LastFrameClippingBehavior
      * Timecode
  * UrlPath
    * items [__string](#__string)

### InputTimecodeSource
* InputTimecodeSource `string` (values: ZEROBASED, EMBEDDED): Documentation update needed

### InputType
* InputType `string` (values: UDP_PUSH, RTP_PUSH, RTMP_PUSH, RTMP_PULL, URL_PULL, MP4_FILE, MEDIACONNECT, INPUT_DEVICE, AWS_CDI): Placeholder documentation for InputType

### InputVpcRequest
* InputVpcRequest `object`: Settings for a private VPC Input.
  * SecurityGroupIds
    * items [__string](#__string)
  * SubnetIds **required**
    * items [__string](#__string)

### InputWhitelistRule
* InputWhitelistRule `object`: Whitelist rule
  * Cidr

### InputWhitelistRuleCidr
* InputWhitelistRuleCidr `object`: An IPv4 CIDR to whitelist.
  * Cidr

### InternalServerErrorException


### KeyProviderSettings
* KeyProviderSettings `object`: Key Provider Settings
  * StaticKeySettings
    * KeyProviderServer
      * PasswordParam
      * Uri **required**
      * Username
    * StaticKeyValue **required**

### LastFrameClippingBehavior
* LastFrameClippingBehavior `string` (values: EXCLUDE_LAST_FRAME, INCLUDE_LAST_FRAME): If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.

### ListChannelsRequest
* ListChannelsRequest `object`: Placeholder documentation for ListChannelsRequest

### ListChannelsResponse
* ListChannelsResponse `object`: Placeholder documentation for ListChannelsResponse
  * Channels
    * items [ChannelSummary](#channelsummary)
  * NextToken

### ListInputDeviceTransfersRequest
* ListInputDeviceTransfersRequest `object`: Placeholder documentation for ListInputDeviceTransfersRequest

### ListInputDeviceTransfersResponse
* ListInputDeviceTransfersResponse `object`: Placeholder documentation for ListInputDeviceTransfersResponse
  * InputDeviceTransfers
    * items [TransferringInputDeviceSummary](#transferringinputdevicesummary)
  * NextToken

### ListInputDevicesRequest
* ListInputDevicesRequest `object`: Placeholder documentation for ListInputDevicesRequest

### ListInputDevicesResponse
* ListInputDevicesResponse `object`: Placeholder documentation for ListInputDevicesResponse
  * InputDevices
    * items [InputDeviceSummary](#inputdevicesummary)
  * NextToken

### ListInputSecurityGroupsRequest
* ListInputSecurityGroupsRequest `object`: Placeholder documentation for ListInputSecurityGroupsRequest

### ListInputSecurityGroupsResponse
* ListInputSecurityGroupsResponse `object`: Placeholder documentation for ListInputSecurityGroupsResponse
  * InputSecurityGroups
    * items [InputSecurityGroup](#inputsecuritygroup)
  * NextToken

### ListInputsRequest
* ListInputsRequest `object`: Placeholder documentation for ListInputsRequest

### ListInputsResponse
* ListInputsResponse `object`: Placeholder documentation for ListInputsResponse
  * Inputs
    * items [Input](#input)
  * NextToken

### ListMultiplexProgramsRequest
* ListMultiplexProgramsRequest `object`: Placeholder documentation for ListMultiplexProgramsRequest

### ListMultiplexProgramsResponse
* ListMultiplexProgramsResponse `object`: Placeholder documentation for ListMultiplexProgramsResponse
  * MultiplexPrograms
    * items [MultiplexProgramSummary](#multiplexprogramsummary)
  * NextToken

### ListMultiplexesRequest
* ListMultiplexesRequest `object`: Placeholder documentation for ListMultiplexesRequest

### ListMultiplexesResponse
* ListMultiplexesResponse `object`: Placeholder documentation for ListMultiplexesResponse
  * Multiplexes
    * items [MultiplexSummary](#multiplexsummary)
  * NextToken

### ListOfferingsRequest
* ListOfferingsRequest `object`: Placeholder documentation for ListOfferingsRequest

### ListOfferingsResponse
* ListOfferingsResponse `object`: Placeholder documentation for ListOfferingsResponse
  * NextToken
  * Offerings
    * items [Offering](#offering)

### ListReservationsRequest
* ListReservationsRequest `object`: Placeholder documentation for ListReservationsRequest

### ListReservationsResponse
* ListReservationsResponse `object`: Placeholder documentation for ListReservationsResponse
  * NextToken
  * Reservations
    * items [Reservation](#reservation)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`: Placeholder documentation for ListTagsForResourceRequest

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`: Placeholder documentation for ListTagsForResourceResponse
  * Tags

### LogLevel
* LogLevel `string` (values: ERROR, WARNING, INFO, DEBUG, DISABLED): The log level the user wants for their channel.

### M2tsAbsentInputAudioBehavior
* M2tsAbsentInputAudioBehavior `string` (values: DROP, ENCODE_SILENCE): M2ts Absent Input Audio Behavior

### M2tsArib
* M2tsArib `string` (values: DISABLED, ENABLED): M2ts Arib

### M2tsAribCaptionsPidControl
* M2tsAribCaptionsPidControl `string` (values: AUTO, USE_CONFIGURED): M2ts Arib Captions Pid Control

### M2tsAudioBufferModel
* M2tsAudioBufferModel `string` (values: ATSC, DVB): M2ts Audio Buffer Model

### M2tsAudioInterval
* M2tsAudioInterval `string` (values: VIDEO_AND_FIXED_INTERVALS, VIDEO_INTERVAL): M2ts Audio Interval

### M2tsAudioStreamType
* M2tsAudioStreamType `string` (values: ATSC, DVB): M2ts Audio Stream Type

### M2tsBufferModel
* M2tsBufferModel `string` (values: MULTIPLEX, NONE): M2ts Buffer Model

### M2tsCcDescriptor
* M2tsCcDescriptor `string` (values: DISABLED, ENABLED): M2ts Cc Descriptor

### M2tsEbifControl
* M2tsEbifControl `string` (values: NONE, PASSTHROUGH): M2ts Ebif Control

### M2tsEbpPlacement
* M2tsEbpPlacement `string` (values: VIDEO_AND_AUDIO_PIDS, VIDEO_PID): M2ts Ebp Placement

### M2tsEsRateInPes
* M2tsEsRateInPes `string` (values: EXCLUDE, INCLUDE): M2ts Es Rate In Pes

### M2tsKlv
* M2tsKlv `string` (values: NONE, PASSTHROUGH): M2ts Klv

### M2tsNielsenId3Behavior
* M2tsNielsenId3Behavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): M2ts Nielsen Id3 Behavior

### M2tsPcrControl
* M2tsPcrControl `string` (values: CONFIGURED_PCR_PERIOD, PCR_EVERY_PES_PACKET): M2ts Pcr Control

### M2tsRateMode
* M2tsRateMode `string` (values: CBR, VBR): M2ts Rate Mode

### M2tsScte35Control
* M2tsScte35Control `string` (values: NONE, PASSTHROUGH): M2ts Scte35 Control

### M2tsSegmentationMarkers
* M2tsSegmentationMarkers `string` (values: EBP, EBP_LEGACY, NONE, PSI_SEGSTART, RAI_ADAPT, RAI_SEGSTART): M2ts Segmentation Markers

### M2tsSegmentationStyle
* M2tsSegmentationStyle `string` (values: MAINTAIN_CADENCE, RESET_CADENCE): M2ts Segmentation Style

### M2tsSettings
* M2tsSettings `object`: M2ts Settings
  * AbsentInputAudioBehavior
  * Arib
  * AribCaptionsPid
  * AribCaptionsPidControl
  * AudioBufferModel
  * AudioFramesPerPes
  * AudioPids
  * AudioStreamType
  * Bitrate
  * BufferModel
  * CcDescriptor
  * DvbNitSettings
    * NetworkId **required**
    * NetworkName **required**
    * RepInterval
  * DvbSdtSettings
    * OutputSdt
    * RepInterval
    * ServiceName
    * ServiceProviderName
  * DvbSubPids
  * DvbTdtSettings
    * RepInterval
  * DvbTeletextPid
  * Ebif
  * EbpAudioInterval
  * EbpLookaheadMs
  * EbpPlacement
  * EcmPid
  * EsRateInPes
  * EtvPlatformPid
  * EtvSignalPid
  * FragmentTime
  * Klv
  * KlvDataPids
  * NielsenId3Behavior
  * NullPacketBitrate
  * PatInterval
  * PcrControl
  * PcrPeriod
  * PcrPid
  * PmtInterval
  * PmtPid
  * ProgramNum
  * RateMode
  * Scte27Pids
  * Scte35Control
  * Scte35Pid
  * SegmentationMarkers
  * SegmentationStyle
  * SegmentationTime
  * TimedMetadataBehavior
  * TimedMetadataPid
  * TransportStreamId
  * VideoPid

### M2tsTimedMetadataBehavior
* M2tsTimedMetadataBehavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): M2ts Timed Metadata Behavior

### M3u8NielsenId3Behavior
* M3u8NielsenId3Behavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): M3u8 Nielsen Id3 Behavior

### M3u8PcrControl
* M3u8PcrControl `string` (values: CONFIGURED_PCR_PERIOD, PCR_EVERY_PES_PACKET): M3u8 Pcr Control

### M3u8Scte35Behavior
* M3u8Scte35Behavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): M3u8 Scte35 Behavior

### M3u8Settings
* M3u8Settings `object`: Settings information for the .m3u8 container
  * AudioFramesPerPes
  * AudioPids
  * EcmPid
  * NielsenId3Behavior
  * PatInterval
  * PcrControl
  * PcrPeriod
  * PcrPid
  * PmtInterval
  * PmtPid
  * ProgramNum
  * Scte35Behavior
  * Scte35Pid
  * TimedMetadataBehavior
  * TimedMetadataPid
  * TransportStreamId
  * VideoPid

### M3u8TimedMetadataBehavior
* M3u8TimedMetadataBehavior `string` (values: NO_PASSTHROUGH, PASSTHROUGH): M3u8 Timed Metadata Behavior

### MaxResults
* MaxResults `integer`: Placeholder documentation for MaxResults

### MediaConnectFlow
* MediaConnectFlow `object`: The settings for a MediaConnect Flow.
  * FlowArn

### MediaConnectFlowRequest
* MediaConnectFlowRequest `object`: The settings for a MediaConnect Flow.
  * FlowArn

### MediaPackageGroupSettings
* MediaPackageGroupSettings `object`: Media Package Group Settings
  * Destination **required**
    * DestinationRefId

### MediaPackageOutputDestinationSettings
* MediaPackageOutputDestinationSettings `object`: MediaPackage Output Destination Settings
  * ChannelId

### MediaPackageOutputSettings
* MediaPackageOutputSettings `object`: Media Package Output Settings

### Mp2CodingMode
* Mp2CodingMode `string` (values: CODING_MODE_1_0, CODING_MODE_2_0): Mp2 Coding Mode

### Mp2Settings
* Mp2Settings `object`: Mp2 Settings
  * Bitrate
  * CodingMode
  * SampleRate

### Mpeg2AdaptiveQuantization
* Mpeg2AdaptiveQuantization `string` (values: AUTO, HIGH, LOW, MEDIUM, OFF): Mpeg2 Adaptive Quantization

### Mpeg2ColorMetadata
* Mpeg2ColorMetadata `string` (values: IGNORE, INSERT): Mpeg2 Color Metadata

### Mpeg2ColorSpace
* Mpeg2ColorSpace `string` (values: AUTO, PASSTHROUGH): Mpeg2 Color Space

### Mpeg2DisplayRatio
* Mpeg2DisplayRatio `string` (values: DISPLAYRATIO16X9, DISPLAYRATIO4X3): Mpeg2 Display Ratio

### Mpeg2FilterSettings
* Mpeg2FilterSettings `object`: Mpeg2 Filter Settings
  * TemporalFilterSettings
    * PostFilterSharpening
    * Strength

### Mpeg2GopSizeUnits
* Mpeg2GopSizeUnits `string` (values: FRAMES, SECONDS): Mpeg2 Gop Size Units

### Mpeg2ScanType
* Mpeg2ScanType `string` (values: INTERLACED, PROGRESSIVE): Mpeg2 Scan Type

### Mpeg2Settings
* Mpeg2Settings `object`: Mpeg2 Settings
  * AdaptiveQuantization
  * AfdSignaling
  * ColorMetadata
  * ColorSpace
  * DisplayAspectRatio
  * FilterSettings
    * TemporalFilterSettings
      * PostFilterSharpening
      * Strength
  * FixedAfd
  * FramerateDenominator **required**
  * FramerateNumerator **required**
  * GopClosedCadence
  * GopNumBFrames
  * GopSize
  * GopSizeUnits
  * ScanType
  * SubgopLength
  * TimecodeInsertion

### Mpeg2SubGopLength
* Mpeg2SubGopLength `string` (values: DYNAMIC, FIXED): Mpeg2 Sub Gop Length

### Mpeg2TimecodeInsertionBehavior
* Mpeg2TimecodeInsertionBehavior `string` (values: DISABLED, GOP_TIMECODE): Mpeg2 Timecode Insertion Behavior

### MsSmoothGroupSettings
* MsSmoothGroupSettings `object`: Ms Smooth Group Settings
  * AcquisitionPointId
  * AudioOnlyTimecodeControl
  * CertificateMode
  * ConnectionRetryInterval
  * Destination **required**
    * DestinationRefId
  * EventId
  * EventIdMode
  * EventStopBehavior
  * FilecacheDuration
  * FragmentLength
  * InputLossAction
  * NumRetries
  * RestartDelay
  * SegmentationMode
  * SendDelayMs
  * SparseTrackType
  * StreamManifestBehavior
  * TimestampOffset
  * TimestampOffsetMode

### MsSmoothH265PackagingType
* MsSmoothH265PackagingType `string` (values: HEV1, HVC1): Ms Smooth H265 Packaging Type

### MsSmoothOutputSettings
* MsSmoothOutputSettings `object`: Ms Smooth Output Settings
  * H265PackagingType
  * NameModifier

### Multiplex
* Multiplex `object`: The multiplex object.
  * Arn
  * AvailabilityZones
    * items [__string](#__string)
  * Destinations
    * items [MultiplexOutputDestination](#multiplexoutputdestination)
  * Id
  * MultiplexSettings
    * MaximumVideoBufferDelayMilliseconds
    * TransportStreamBitrate **required**
    * TransportStreamId **required**
    * TransportStreamReservedBitrate
  * Name
  * PipelinesRunningCount
  * ProgramCount
  * State
  * Tags

### MultiplexGroupSettings
* MultiplexGroupSettings `object`: Multiplex Group Settings

### MultiplexMediaConnectOutputDestinationSettings
* MultiplexMediaConnectOutputDestinationSettings `object`: Multiplex MediaConnect output destination settings.
  * EntitlementArn

### MultiplexOutputDestination
* MultiplexOutputDestination `object`: Multiplex output destination settings
  * MediaConnectSettings
    * EntitlementArn

### MultiplexOutputSettings
* MultiplexOutputSettings `object`: Multiplex Output Settings
  * Destination **required**
    * DestinationRefId

### MultiplexProgram
* MultiplexProgram `object`: The multiplex program object.
  * ChannelId
  * MultiplexProgramSettings
    * PreferredChannelPipeline
    * ProgramNumber **required**
    * ServiceDescriptor
      * ProviderName **required**
      * ServiceName **required**
    * VideoSettings
      * ConstantBitrate
      * StatmuxSettings
        * MaximumBitrate
        * MinimumBitrate
        * Priority
  * PacketIdentifiersMap
    * AudioPids
      * items [__integer](#__integer)
    * DvbSubPids
      * items [__integer](#__integer)
    * DvbTeletextPid
    * EtvPlatformPid
    * EtvSignalPid
    * KlvDataPids
      * items [__integer](#__integer)
    * PcrPid
    * PmtPid
    * PrivateMetadataPid
    * Scte27Pids
      * items [__integer](#__integer)
    * Scte35Pid
    * TimedMetadataPid
    * VideoPid
  * PipelineDetails
    * items [MultiplexProgramPipelineDetail](#multiplexprogrampipelinedetail)
  * ProgramName

### MultiplexProgramChannelDestinationSettings
* MultiplexProgramChannelDestinationSettings `object`: Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex
  * MultiplexId
  * ProgramName

### MultiplexProgramPacketIdentifiersMap
* MultiplexProgramPacketIdentifiersMap `object`: Packet identifiers map for a given Multiplex program.
  * AudioPids
    * items [__integer](#__integer)
  * DvbSubPids
    * items [__integer](#__integer)
  * DvbTeletextPid
  * EtvPlatformPid
  * EtvSignalPid
  * KlvDataPids
    * items [__integer](#__integer)
  * PcrPid
  * PmtPid
  * PrivateMetadataPid
  * Scte27Pids
    * items [__integer](#__integer)
  * Scte35Pid
  * TimedMetadataPid
  * VideoPid

### MultiplexProgramPipelineDetail
* MultiplexProgramPipelineDetail `object`: The current source for one of the pipelines in the multiplex.
  * ActiveChannelPipeline
  * PipelineId

### MultiplexProgramServiceDescriptor
* MultiplexProgramServiceDescriptor `object`: Transport stream service descriptor configuration for the Multiplex program.
  * ProviderName **required**
  * ServiceName **required**

### MultiplexProgramSettings
* MultiplexProgramSettings `object`: Multiplex Program settings configuration.
  * PreferredChannelPipeline
  * ProgramNumber **required**
  * ServiceDescriptor
    * ProviderName **required**
    * ServiceName **required**
  * VideoSettings
    * ConstantBitrate
    * StatmuxSettings
      * MaximumBitrate
      * MinimumBitrate
      * Priority

### MultiplexProgramSummary
* MultiplexProgramSummary `object`: Placeholder documentation for MultiplexProgramSummary
  * ChannelId
  * ProgramName

### MultiplexSettings
* MultiplexSettings `object`: Contains configuration for a Multiplex event
  * MaximumVideoBufferDelayMilliseconds
  * TransportStreamBitrate **required**
  * TransportStreamId **required**
  * TransportStreamReservedBitrate

### MultiplexSettingsSummary
* MultiplexSettingsSummary `object`: Contains summary configuration for a Multiplex event.
  * TransportStreamBitrate

### MultiplexState
* MultiplexState `string` (values: CREATING, CREATE_FAILED, IDLE, STARTING, RUNNING, RECOVERING, STOPPING, DELETING, DELETED): The current state of the multiplex.

### MultiplexStatmuxVideoSettings
* MultiplexStatmuxVideoSettings `object`: Statmux rate control settings
  * MaximumBitrate
  * MinimumBitrate
  * Priority

### MultiplexSummary
* MultiplexSummary `object`: Placeholder documentation for MultiplexSummary
  * Arn
  * AvailabilityZones
    * items [__string](#__string)
  * Id
  * MultiplexSettings
    * TransportStreamBitrate
  * Name
  * PipelinesRunningCount
  * ProgramCount
  * State
  * Tags

### MultiplexVideoSettings
* MultiplexVideoSettings `object`: The video configuration for each program in a multiplex.
  * ConstantBitrate
  * StatmuxSettings
    * MaximumBitrate
    * MinimumBitrate
    * Priority

### NetworkInputServerValidation
* NetworkInputServerValidation `string` (values: CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME, CHECK_CRYPTOGRAPHY_ONLY): Network Input Server Validation

### NetworkInputSettings
* NetworkInputSettings `object`: Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection.
  * HlsInputSettings
    * Bandwidth
    * BufferSegments
    * Retries
    * RetryInterval
  * ServerValidation

### NielsenConfiguration
* NielsenConfiguration `object`: Nielsen Configuration
  * DistributorId
  * NielsenPcmToId3Tagging

### NielsenPcmToId3TaggingState
* NielsenPcmToId3TaggingState `string` (values: DISABLED, ENABLED): State of Nielsen PCM to ID3 tagging

### NotFoundException


### Offering
* Offering `object`: Reserved resources available for purchase
  * Arn
  * CurrencyCode
  * Duration
  * DurationUnits
  * FixedPrice
  * OfferingDescription
  * OfferingId
  * OfferingType
  * Region
  * ResourceSpecification
    * ChannelClass
    * Codec
    * MaximumBitrate
    * MaximumFramerate
    * Resolution
    * ResourceType
    * SpecialFeature
    * VideoQuality
  * UsagePrice

### OfferingDurationUnits
* OfferingDurationUnits `string` (values: MONTHS): Units for duration, e.g. 'MONTHS'

### OfferingType
* OfferingType `string` (values: NO_UPFRONT): Offering type, e.g. 'NO_UPFRONT'

### Output
* Output `object`: Output settings. There can be multiple outputs within a group.
  * AudioDescriptionNames
    * items [__string](#__string)
  * CaptionDescriptionNames
    * items [__string](#__string)
  * OutputName
  * OutputSettings **required**
    * ArchiveOutputSettings
      * ContainerSettings **required**
        * M2tsSettings
          * AbsentInputAudioBehavior
          * Arib
          * AribCaptionsPid
          * AribCaptionsPidControl
          * AudioBufferModel
          * AudioFramesPerPes
          * AudioPids
          * AudioStreamType
          * Bitrate
          * BufferModel
          * CcDescriptor
          * DvbNitSettings
          * DvbSdtSettings
          * DvbSubPids
          * DvbTdtSettings
          * DvbTeletextPid
          * Ebif
          * EbpAudioInterval
          * EbpLookaheadMs
          * EbpPlacement
          * EcmPid
          * EsRateInPes
          * EtvPlatformPid
          * EtvSignalPid
          * FragmentTime
          * Klv
          * KlvDataPids
          * NielsenId3Behavior
          * NullPacketBitrate
          * PatInterval
          * PcrControl
          * PcrPeriod
          * PcrPid
          * PmtInterval
          * PmtPid
          * ProgramNum
          * RateMode
          * Scte27Pids
          * Scte35Control
          * Scte35Pid
          * SegmentationMarkers
          * SegmentationStyle
          * SegmentationTime
          * TimedMetadataBehavior
          * TimedMetadataPid
          * TransportStreamId
          * VideoPid
        * RawSettings
      * Extension
      * NameModifier
    * FrameCaptureOutputSettings
      * NameModifier
    * HlsOutputSettings
      * H265PackagingType
      * HlsSettings **required**
        * AudioOnlyHlsSettings
          * AudioGroupId
          * AudioOnlyImage
          * AudioTrackType
          * SegmentType
        * Fmp4HlsSettings
          * AudioRenditionSets
          * NielsenId3Behavior
          * TimedMetadataBehavior
        * StandardHlsSettings
          * AudioRenditionSets
          * M3u8Settings **required**
      * NameModifier
      * SegmentModifier
    * MediaPackageOutputSettings
    * MsSmoothOutputSettings
      * H265PackagingType
      * NameModifier
    * MultiplexOutputSettings
      * Destination **required**
        * DestinationRefId
    * RtmpOutputSettings
      * CertificateMode
      * ConnectionRetryInterval
      * Destination **required**
        * DestinationRefId
      * NumRetries
    * UdpOutputSettings
      * BufferMsec
      * ContainerSettings **required**
        * M2tsSettings
          * AbsentInputAudioBehavior
          * Arib
          * AribCaptionsPid
          * AribCaptionsPidControl
          * AudioBufferModel
          * AudioFramesPerPes
          * AudioPids
          * AudioStreamType
          * Bitrate
          * BufferModel
          * CcDescriptor
          * DvbNitSettings
          * DvbSdtSettings
          * DvbSubPids
          * DvbTdtSettings
          * DvbTeletextPid
          * Ebif
          * EbpAudioInterval
          * EbpLookaheadMs
          * EbpPlacement
          * EcmPid
          * EsRateInPes
          * EtvPlatformPid
          * EtvSignalPid
          * FragmentTime
          * Klv
          * KlvDataPids
          * NielsenId3Behavior
          * NullPacketBitrate
          * PatInterval
          * PcrControl
          * PcrPeriod
          * PcrPid
          * PmtInterval
          * PmtPid
          * ProgramNum
          * RateMode
          * Scte27Pids
          * Scte35Control
          * Scte35Pid
          * SegmentationMarkers
          * SegmentationStyle
          * SegmentationTime
          * TimedMetadataBehavior
          * TimedMetadataPid
          * TransportStreamId
          * VideoPid
      * Destination **required**
        * DestinationRefId
      * FecOutputSettings
        * ColumnDepth
        * IncludeFec
        * RowLength
  * VideoDescriptionName

### OutputDestination
* OutputDestination `object`: Placeholder documentation for OutputDestination
  * Id
  * MediaPackageSettings
    * items [MediaPackageOutputDestinationSettings](#mediapackageoutputdestinationsettings)
  * MultiplexSettings
    * MultiplexId
    * ProgramName
  * Settings
    * items [OutputDestinationSettings](#outputdestinationsettings)

### OutputDestinationSettings
* OutputDestinationSettings `object`: Placeholder documentation for OutputDestinationSettings
  * PasswordParam
  * StreamName
  * Url
  * Username

### OutputGroup
* OutputGroup `object`: Output groups for this Live Event. Output groups contain information about where streams should be distributed.
  * Name
  * OutputGroupSettings **required**
    * ArchiveGroupSettings
      * Destination **required**
        * DestinationRefId
      * RolloverInterval
    * FrameCaptureGroupSettings
      * Destination **required**
        * DestinationRefId
    * HlsGroupSettings
      * AdMarkers
        * items [HlsAdMarkers](#hlsadmarkers)
      * BaseUrlContent
      * BaseUrlContent1
      * BaseUrlManifest
      * BaseUrlManifest1
      * CaptionLanguageMappings
        * items [CaptionLanguageMapping](#captionlanguagemapping)
      * CaptionLanguageSetting
      * ClientCache
      * CodecSpecification
      * ConstantIv
      * Destination **required**
        * DestinationRefId
      * DirectoryStructure
      * DiscontinuityTags
      * EncryptionType
      * HlsCdnSettings
        * HlsAkamaiSettings
          * ConnectionRetryInterval
          * FilecacheDuration
          * HttpTransferMode
          * NumRetries
          * RestartDelay
          * Salt
          * Token
        * HlsBasicPutSettings
          * ConnectionRetryInterval
          * FilecacheDuration
          * NumRetries
          * RestartDelay
        * HlsMediaStoreSettings
          * ConnectionRetryInterval
          * FilecacheDuration
          * MediaStoreStorageClass
          * NumRetries
          * RestartDelay
        * HlsWebdavSettings
          * ConnectionRetryInterval
          * FilecacheDuration
          * HttpTransferMode
          * NumRetries
          * RestartDelay
      * HlsId3SegmentTagging
      * IFrameOnlyPlaylists
      * IncompleteSegmentBehavior
      * IndexNSegments
      * InputLossAction
      * IvInManifest
      * IvSource
      * KeepSegments
      * KeyFormat
      * KeyFormatVersions
      * KeyProviderSettings
        * StaticKeySettings
          * KeyProviderServer
          * StaticKeyValue **required**
      * ManifestCompression
      * ManifestDurationFormat
      * MinSegmentLength
      * Mode
      * OutputSelection
      * ProgramDateTime
      * ProgramDateTimePeriod
      * RedundantManifest
      * SegmentLength
      * SegmentationMode
      * SegmentsPerSubdirectory
      * StreamInfResolution
      * TimedMetadataId3Frame
      * TimedMetadataId3Period
      * TimestampDeltaMilliseconds
      * TsFileMode
    * MediaPackageGroupSettings
      * Destination **required**
        * DestinationRefId
    * MsSmoothGroupSettings
      * AcquisitionPointId
      * AudioOnlyTimecodeControl
      * CertificateMode
      * ConnectionRetryInterval
      * Destination **required**
        * DestinationRefId
      * EventId
      * EventIdMode
      * EventStopBehavior
      * FilecacheDuration
      * FragmentLength
      * InputLossAction
      * NumRetries
      * RestartDelay
      * SegmentationMode
      * SendDelayMs
      * SparseTrackType
      * StreamManifestBehavior
      * TimestampOffset
      * TimestampOffsetMode
    * MultiplexGroupSettings
    * RtmpGroupSettings
      * AdMarkers
        * items [RtmpAdMarkers](#rtmpadmarkers)
      * AuthenticationScheme
      * CacheFullBehavior
      * CacheLength
      * CaptionData
      * InputLossAction
      * RestartDelay
    * UdpGroupSettings
      * InputLossAction
      * TimedMetadataId3Frame
      * TimedMetadataId3Period
  * Outputs **required**
    * items [Output](#output)

### OutputGroupSettings
* OutputGroupSettings `object`: Output Group Settings
  * ArchiveGroupSettings
    * Destination **required**
      * DestinationRefId
    * RolloverInterval
  * FrameCaptureGroupSettings
    * Destination **required**
      * DestinationRefId
  * HlsGroupSettings
    * AdMarkers
      * items [HlsAdMarkers](#hlsadmarkers)
    * BaseUrlContent
    * BaseUrlContent1
    * BaseUrlManifest
    * BaseUrlManifest1
    * CaptionLanguageMappings
      * items [CaptionLanguageMapping](#captionlanguagemapping)
    * CaptionLanguageSetting
    * ClientCache
    * CodecSpecification
    * ConstantIv
    * Destination **required**
      * DestinationRefId
    * DirectoryStructure
    * DiscontinuityTags
    * EncryptionType
    * HlsCdnSettings
      * HlsAkamaiSettings
        * ConnectionRetryInterval
        * FilecacheDuration
        * HttpTransferMode
        * NumRetries
        * RestartDelay
        * Salt
        * Token
      * HlsBasicPutSettings
        * ConnectionRetryInterval
        * FilecacheDuration
        * NumRetries
        * RestartDelay
      * HlsMediaStoreSettings
        * ConnectionRetryInterval
        * FilecacheDuration
        * MediaStoreStorageClass
        * NumRetries
        * RestartDelay
      * HlsWebdavSettings
        * ConnectionRetryInterval
        * FilecacheDuration
        * HttpTransferMode
        * NumRetries
        * RestartDelay
    * HlsId3SegmentTagging
    * IFrameOnlyPlaylists
    * IncompleteSegmentBehavior
    * IndexNSegments
    * InputLossAction
    * IvInManifest
    * IvSource
    * KeepSegments
    * KeyFormat
    * KeyFormatVersions
    * KeyProviderSettings
      * StaticKeySettings
        * KeyProviderServer
          * PasswordParam
          * Uri **required**
          * Username
        * StaticKeyValue **required**
    * ManifestCompression
    * ManifestDurationFormat
    * MinSegmentLength
    * Mode
    * OutputSelection
    * ProgramDateTime
    * ProgramDateTimePeriod
    * RedundantManifest
    * SegmentLength
    * SegmentationMode
    * SegmentsPerSubdirectory
    * StreamInfResolution
    * TimedMetadataId3Frame
    * TimedMetadataId3Period
    * TimestampDeltaMilliseconds
    * TsFileMode
  * MediaPackageGroupSettings
    * Destination **required**
      * DestinationRefId
  * MsSmoothGroupSettings
    * AcquisitionPointId
    * AudioOnlyTimecodeControl
    * CertificateMode
    * ConnectionRetryInterval
    * Destination **required**
      * DestinationRefId
    * EventId
    * EventIdMode
    * EventStopBehavior
    * FilecacheDuration
    * FragmentLength
    * InputLossAction
    * NumRetries
    * RestartDelay
    * SegmentationMode
    * SendDelayMs
    * SparseTrackType
    * StreamManifestBehavior
    * TimestampOffset
    * TimestampOffsetMode
  * MultiplexGroupSettings
  * RtmpGroupSettings
    * AdMarkers
      * items [RtmpAdMarkers](#rtmpadmarkers)
    * AuthenticationScheme
    * CacheFullBehavior
    * CacheLength
    * CaptionData
    * InputLossAction
    * RestartDelay
  * UdpGroupSettings
    * InputLossAction
    * TimedMetadataId3Frame
    * TimedMetadataId3Period

### OutputLocationRef
* OutputLocationRef `object`: Reference to an OutputDestination ID defined in the channel
  * DestinationRefId

### OutputSettings
* OutputSettings `object`: Output Settings
  * ArchiveOutputSettings
    * ContainerSettings **required**
      * M2tsSettings
        * AbsentInputAudioBehavior
        * Arib
        * AribCaptionsPid
        * AribCaptionsPidControl
        * AudioBufferModel
        * AudioFramesPerPes
        * AudioPids
        * AudioStreamType
        * Bitrate
        * BufferModel
        * CcDescriptor
        * DvbNitSettings
          * NetworkId **required**
          * NetworkName **required**
          * RepInterval
        * DvbSdtSettings
          * OutputSdt
          * RepInterval
          * ServiceName
          * ServiceProviderName
        * DvbSubPids
        * DvbTdtSettings
          * RepInterval
        * DvbTeletextPid
        * Ebif
        * EbpAudioInterval
        * EbpLookaheadMs
        * EbpPlacement
        * EcmPid
        * EsRateInPes
        * EtvPlatformPid
        * EtvSignalPid
        * FragmentTime
        * Klv
        * KlvDataPids
        * NielsenId3Behavior
        * NullPacketBitrate
        * PatInterval
        * PcrControl
        * PcrPeriod
        * PcrPid
        * PmtInterval
        * PmtPid
        * ProgramNum
        * RateMode
        * Scte27Pids
        * Scte35Control
        * Scte35Pid
        * SegmentationMarkers
        * SegmentationStyle
        * SegmentationTime
        * TimedMetadataBehavior
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
      * RawSettings
    * Extension
    * NameModifier
  * FrameCaptureOutputSettings
    * NameModifier
  * HlsOutputSettings
    * H265PackagingType
    * HlsSettings **required**
      * AudioOnlyHlsSettings
        * AudioGroupId
        * AudioOnlyImage
          * PasswordParam
          * Uri **required**
          * Username
        * AudioTrackType
        * SegmentType
      * Fmp4HlsSettings
        * AudioRenditionSets
        * NielsenId3Behavior
        * TimedMetadataBehavior
      * StandardHlsSettings
        * AudioRenditionSets
        * M3u8Settings **required**
          * AudioFramesPerPes
          * AudioPids
          * EcmPid
          * NielsenId3Behavior
          * PatInterval
          * PcrControl
          * PcrPeriod
          * PcrPid
          * PmtInterval
          * PmtPid
          * ProgramNum
          * Scte35Behavior
          * Scte35Pid
          * TimedMetadataBehavior
          * TimedMetadataPid
          * TransportStreamId
          * VideoPid
    * NameModifier
    * SegmentModifier
  * MediaPackageOutputSettings
  * MsSmoothOutputSettings
    * H265PackagingType
    * NameModifier
  * MultiplexOutputSettings
    * Destination **required**
      * DestinationRefId
  * RtmpOutputSettings
    * CertificateMode
    * ConnectionRetryInterval
    * Destination **required**
      * DestinationRefId
    * NumRetries
  * UdpOutputSettings
    * BufferMsec
    * ContainerSettings **required**
      * M2tsSettings
        * AbsentInputAudioBehavior
        * Arib
        * AribCaptionsPid
        * AribCaptionsPidControl
        * AudioBufferModel
        * AudioFramesPerPes
        * AudioPids
        * AudioStreamType
        * Bitrate
        * BufferModel
        * CcDescriptor
        * DvbNitSettings
          * NetworkId **required**
          * NetworkName **required**
          * RepInterval
        * DvbSdtSettings
          * OutputSdt
          * RepInterval
          * ServiceName
          * ServiceProviderName
        * DvbSubPids
        * DvbTdtSettings
          * RepInterval
        * DvbTeletextPid
        * Ebif
        * EbpAudioInterval
        * EbpLookaheadMs
        * EbpPlacement
        * EcmPid
        * EsRateInPes
        * EtvPlatformPid
        * EtvSignalPid
        * FragmentTime
        * Klv
        * KlvDataPids
        * NielsenId3Behavior
        * NullPacketBitrate
        * PatInterval
        * PcrControl
        * PcrPeriod
        * PcrPid
        * PmtInterval
        * PmtPid
        * ProgramNum
        * RateMode
        * Scte27Pids
        * Scte35Control
        * Scte35Pid
        * SegmentationMarkers
        * SegmentationStyle
        * SegmentationTime
        * TimedMetadataBehavior
        * TimedMetadataPid
        * TransportStreamId
        * VideoPid
    * Destination **required**
      * DestinationRefId
    * FecOutputSettings
      * ColumnDepth
      * IncludeFec
      * RowLength

### PassThroughSettings
* PassThroughSettings `object`: Pass Through Settings

### PauseStateScheduleActionSettings
* PauseStateScheduleActionSettings `object`: Settings for the action to set pause state of a channel.
  * Pipelines
    * items [PipelinePauseStateSettings](#pipelinepausestatesettings)

### PipelineDetail
* PipelineDetail `object`: Runtime details of a pipeline when a channel is running.
  * ActiveInputAttachmentName
  * ActiveInputSwitchActionName
  * PipelineId

### PipelineId
* PipelineId `string` (values: PIPELINE_0, PIPELINE_1): Pipeline ID

### PipelinePauseStateSettings
* PipelinePauseStateSettings `object`: Settings for pausing a pipeline.
  * PipelineId **required**

### PreferredChannelPipeline
* PreferredChannelPipeline `string` (values: CURRENTLY_ACTIVE, PIPELINE_0, PIPELINE_1): Indicates which pipeline is preferred by the multiplex for program ingest.

### PurchaseOfferingRequest
* PurchaseOfferingRequest `object`: Placeholder documentation for PurchaseOfferingRequest
  * Count **required**
  * Name
  * RequestId
  * Start
  * Tags

### PurchaseOfferingResponse
* PurchaseOfferingResponse `object`: Placeholder documentation for PurchaseOfferingResponse
  * Reservation
    * Arn
    * Count
    * CurrencyCode
    * Duration
    * DurationUnits
    * End
    * FixedPrice
    * Name
    * OfferingDescription
    * OfferingId
    * OfferingType
    * Region
    * ReservationId
    * ResourceSpecification
      * ChannelClass
      * Codec
      * MaximumBitrate
      * MaximumFramerate
      * Resolution
      * ResourceType
      * SpecialFeature
      * VideoQuality
    * Start
    * State
    * Tags
    * UsagePrice

### RawSettings
* RawSettings `object`: Raw Settings

### Rec601Settings
* Rec601Settings `object`: Rec601 Settings

### Rec709Settings
* Rec709Settings `object`: Rec709 Settings

### RejectInputDeviceTransferRequest
* RejectInputDeviceTransferRequest `object`: Placeholder documentation for RejectInputDeviceTransferRequest

### RejectInputDeviceTransferResponse
* RejectInputDeviceTransferResponse `object`: Placeholder documentation for RejectInputDeviceTransferResponse

### RemixSettings
* RemixSettings `object`: Remix Settings
  * ChannelMappings **required**
    * items [AudioChannelMapping](#audiochannelmapping)
  * ChannelsIn
  * ChannelsOut

### Reservation
* Reservation `object`: Reserved resources available to use
  * Arn
  * Count
  * CurrencyCode
  * Duration
  * DurationUnits
  * End
  * FixedPrice
  * Name
  * OfferingDescription
  * OfferingId
  * OfferingType
  * Region
  * ReservationId
  * ResourceSpecification
    * ChannelClass
    * Codec
    * MaximumBitrate
    * MaximumFramerate
    * Resolution
    * ResourceType
    * SpecialFeature
    * VideoQuality
  * Start
  * State
  * Tags
  * UsagePrice

### ReservationCodec
* ReservationCodec `string` (values: MPEG2, AVC, HEVC, AUDIO, LINK): Codec, 'MPEG2', 'AVC', 'HEVC', or 'AUDIO'

### ReservationMaximumBitrate
* ReservationMaximumBitrate `string` (values: MAX_10_MBPS, MAX_20_MBPS, MAX_50_MBPS): Maximum bitrate in megabits per second

### ReservationMaximumFramerate
* ReservationMaximumFramerate `string` (values: MAX_30_FPS, MAX_60_FPS): Maximum framerate in frames per second (Outputs only)

### ReservationResolution
* ReservationResolution `string` (values: SD, HD, FHD, UHD): Resolution based on lines of vertical resolution; SD is less than 720 lines, HD is 720 to 1080 lines, FHD is 1080 lines, UHD is greater than 1080 lines

### ReservationResourceSpecification
* ReservationResourceSpecification `object`: Resource configuration (codec, resolution, bitrate, ...)
  * ChannelClass
  * Codec
  * MaximumBitrate
  * MaximumFramerate
  * Resolution
  * ResourceType
  * SpecialFeature
  * VideoQuality

### ReservationResourceType
* ReservationResourceType `string` (values: INPUT, OUTPUT, MULTIPLEX, CHANNEL): Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'

### ReservationSpecialFeature
* ReservationSpecialFeature `string` (values: ADVANCED_AUDIO, AUDIO_NORMALIZATION): Special features, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'

### ReservationState
* ReservationState `string` (values: ACTIVE, EXPIRED, CANCELED, DELETED): Current reservation state

### ReservationVideoQuality
* ReservationVideoQuality `string` (values: STANDARD, ENHANCED, PREMIUM): Video quality, e.g. 'STANDARD' (Outputs only)

### RtmpAdMarkers
* RtmpAdMarkers `string` (values: ON_CUE_POINT_SCTE35): Rtmp Ad Markers

### RtmpCacheFullBehavior
* RtmpCacheFullBehavior `string` (values: DISCONNECT_IMMEDIATELY, WAIT_FOR_SERVER): Rtmp Cache Full Behavior

### RtmpCaptionData
* RtmpCaptionData `string` (values: ALL, FIELD1_608, FIELD1_AND_FIELD2_608): Rtmp Caption Data

### RtmpCaptionInfoDestinationSettings
* RtmpCaptionInfoDestinationSettings `object`: Rtmp Caption Info Destination Settings

### RtmpGroupSettings
* RtmpGroupSettings `object`: Rtmp Group Settings
  * AdMarkers
    * items [RtmpAdMarkers](#rtmpadmarkers)
  * AuthenticationScheme
  * CacheFullBehavior
  * CacheLength
  * CaptionData
  * InputLossAction
  * RestartDelay

### RtmpOutputCertificateMode
* RtmpOutputCertificateMode `string` (values: SELF_SIGNED, VERIFY_AUTHENTICITY): Rtmp Output Certificate Mode

### RtmpOutputSettings
* RtmpOutputSettings `object`: Rtmp Output Settings
  * CertificateMode
  * ConnectionRetryInterval
  * Destination **required**
    * DestinationRefId
  * NumRetries

### ScheduleAction
* ScheduleAction `object`: Contains information on a single schedule action.
  * ActionName **required**
  * ScheduleActionSettings **required**
    * HlsId3SegmentTaggingSettings
      * Tag **required**
    * HlsTimedMetadataSettings
      * Id3 **required**
    * InputPrepareSettings
      * InputAttachmentNameReference
      * InputClippingSettings
        * InputTimecodeSource **required**
        * StartTimecode
          * Timecode
        * StopTimecode
          * LastFrameClippingBehavior
          * Timecode
      * UrlPath
        * items [__string](#__string)
    * InputSwitchSettings
      * InputAttachmentNameReference **required**
      * InputClippingSettings
        * InputTimecodeSource **required**
        * StartTimecode
          * Timecode
        * StopTimecode
          * LastFrameClippingBehavior
          * Timecode
      * UrlPath
        * items [__string](#__string)
    * PauseStateSettings
      * Pipelines
        * items [PipelinePauseStateSettings](#pipelinepausestatesettings)
    * Scte35ReturnToNetworkSettings
      * SpliceEventId **required**
    * Scte35SpliceInsertSettings
      * Duration
      * SpliceEventId **required**
    * Scte35TimeSignalSettings
      * Scte35Descriptors **required**
        * items [Scte35Descriptor](#scte35descriptor)
    * StaticImageActivateSettings
      * Duration
      * FadeIn
      * FadeOut
      * Height
      * Image **required**
        * PasswordParam
        * Uri **required**
        * Username
      * ImageX
      * ImageY
      * Layer
      * Opacity
      * Width
    * StaticImageDeactivateSettings
      * FadeOut
      * Layer
  * ScheduleActionStartSettings **required**
    * FixedModeScheduleActionStartSettings
      * Time **required**
    * FollowModeScheduleActionStartSettings
      * FollowPoint **required**
      * ReferenceActionName **required**
    * ImmediateModeScheduleActionStartSettings

### ScheduleActionSettings
* ScheduleActionSettings `object`: Holds the settings for a single schedule action.
  * HlsId3SegmentTaggingSettings
    * Tag **required**
  * HlsTimedMetadataSettings
    * Id3 **required**
  * InputPrepareSettings
    * InputAttachmentNameReference
    * InputClippingSettings
      * InputTimecodeSource **required**
      * StartTimecode
        * Timecode
      * StopTimecode
        * LastFrameClippingBehavior
        * Timecode
    * UrlPath
      * items [__string](#__string)
  * InputSwitchSettings
    * InputAttachmentNameReference **required**
    * InputClippingSettings
      * InputTimecodeSource **required**
      * StartTimecode
        * Timecode
      * StopTimecode
        * LastFrameClippingBehavior
        * Timecode
    * UrlPath
      * items [__string](#__string)
  * PauseStateSettings
    * Pipelines
      * items [PipelinePauseStateSettings](#pipelinepausestatesettings)
  * Scte35ReturnToNetworkSettings
    * SpliceEventId **required**
  * Scte35SpliceInsertSettings
    * Duration
    * SpliceEventId **required**
  * Scte35TimeSignalSettings
    * Scte35Descriptors **required**
      * items [Scte35Descriptor](#scte35descriptor)
  * StaticImageActivateSettings
    * Duration
    * FadeIn
    * FadeOut
    * Height
    * Image **required**
      * PasswordParam
      * Uri **required**
      * Username
    * ImageX
    * ImageY
    * Layer
    * Opacity
    * Width
  * StaticImageDeactivateSettings
    * FadeOut
    * Layer

### ScheduleActionStartSettings
* ScheduleActionStartSettings `object`: Settings to specify when an action should occur. Only one of the options must be selected.
  * FixedModeScheduleActionStartSettings
    * Time **required**
  * FollowModeScheduleActionStartSettings
    * FollowPoint **required**
    * ReferenceActionName **required**
  * ImmediateModeScheduleActionStartSettings

### Scte20Convert608To708
* Scte20Convert608To708 `string` (values: DISABLED, UPCONVERT): Scte20 Convert608 To708

### Scte20PlusEmbeddedDestinationSettings
* Scte20PlusEmbeddedDestinationSettings `object`: Scte20 Plus Embedded Destination Settings

### Scte20SourceSettings
* Scte20SourceSettings `object`: Scte20 Source Settings
  * Convert608To708
  * Source608ChannelNumber

### Scte27DestinationSettings
* Scte27DestinationSettings `object`: Scte27 Destination Settings

### Scte27SourceSettings
* Scte27SourceSettings `object`: Scte27 Source Settings
  * Pid

### Scte35AposNoRegionalBlackoutBehavior
* Scte35AposNoRegionalBlackoutBehavior `string` (values: FOLLOW, IGNORE): Scte35 Apos No Regional Blackout Behavior

### Scte35AposWebDeliveryAllowedBehavior
* Scte35AposWebDeliveryAllowedBehavior `string` (values: FOLLOW, IGNORE): Scte35 Apos Web Delivery Allowed Behavior

### Scte35ArchiveAllowedFlag
* Scte35ArchiveAllowedFlag `string` (values: ARCHIVE_NOT_ALLOWED, ARCHIVE_ALLOWED): Corresponds to the archive_allowed parameter. A value of ARCHIVE_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.

### Scte35DeliveryRestrictions
* Scte35DeliveryRestrictions `object`: Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element.
  * ArchiveAllowedFlag **required**
  * DeviceRestrictions **required**
  * NoRegionalBlackoutFlag **required**
  * WebDeliveryAllowedFlag **required**

### Scte35Descriptor
* Scte35Descriptor `object`: Holds one set of SCTE-35 Descriptor Settings.
  * Scte35DescriptorSettings **required**
    * SegmentationDescriptorScte35DescriptorSettings **required**
      * DeliveryRestrictions
        * ArchiveAllowedFlag **required**
        * DeviceRestrictions **required**
        * NoRegionalBlackoutFlag **required**
        * WebDeliveryAllowedFlag **required**
      * SegmentNum
      * SegmentationCancelIndicator **required**
      * SegmentationDuration
      * SegmentationEventId **required**
      * SegmentationTypeId
      * SegmentationUpid
      * SegmentationUpidType
      * SegmentsExpected
      * SubSegmentNum
      * SubSegmentsExpected

### Scte35DescriptorSettings
* Scte35DescriptorSettings `object`: SCTE-35 Descriptor settings.
  * SegmentationDescriptorScte35DescriptorSettings **required**
    * DeliveryRestrictions
      * ArchiveAllowedFlag **required**
      * DeviceRestrictions **required**
      * NoRegionalBlackoutFlag **required**
      * WebDeliveryAllowedFlag **required**
    * SegmentNum
    * SegmentationCancelIndicator **required**
    * SegmentationDuration
    * SegmentationEventId **required**
    * SegmentationTypeId
    * SegmentationUpid
    * SegmentationUpidType
    * SegmentsExpected
    * SubSegmentNum
    * SubSegmentsExpected

### Scte35DeviceRestrictions
* Scte35DeviceRestrictions `string` (values: NONE, RESTRICT_GROUP0, RESTRICT_GROUP1, RESTRICT_GROUP2): Corresponds to the device_restrictions parameter in a segmentation_descriptor. If you include one of the "restriction" flags then you must include all four of them.

### Scte35NoRegionalBlackoutFlag
* Scte35NoRegionalBlackoutFlag `string` (values: REGIONAL_BLACKOUT, NO_REGIONAL_BLACKOUT): Corresponds to the no_regional_blackout_flag parameter. A value of REGIONAL_BLACKOUT corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.

### Scte35ReturnToNetworkScheduleActionSettings
* Scte35ReturnToNetworkScheduleActionSettings `object`: Settings for a SCTE-35 return_to_network message.
  * SpliceEventId **required**

### Scte35SegmentationCancelIndicator
* Scte35SegmentationCancelIndicator `string` (values: SEGMENTATION_EVENT_NOT_CANCELED, SEGMENTATION_EVENT_CANCELED): Corresponds to SCTE-35 segmentation_event_cancel_indicator. SEGMENTATION_EVENT_NOT_CANCELED corresponds to 0 in the SCTE-35 specification and indicates that this is an insertion request. SEGMENTATION_EVENT_CANCELED corresponds to 1 in the SCTE-35 specification and indicates that this is a cancelation request, in which case complete this field and the existing event ID to cancel.

### Scte35SegmentationDescriptor
* Scte35SegmentationDescriptor `object`: Corresponds to SCTE-35 segmentation_descriptor.
  * DeliveryRestrictions
    * ArchiveAllowedFlag **required**
    * DeviceRestrictions **required**
    * NoRegionalBlackoutFlag **required**
    * WebDeliveryAllowedFlag **required**
  * SegmentNum
  * SegmentationCancelIndicator **required**
  * SegmentationDuration
  * SegmentationEventId **required**
  * SegmentationTypeId
  * SegmentationUpid
  * SegmentationUpidType
  * SegmentsExpected
  * SubSegmentNum
  * SubSegmentsExpected

### Scte35SpliceInsert
* Scte35SpliceInsert `object`: Scte35 Splice Insert
  * AdAvailOffset
  * NoRegionalBlackoutFlag
  * WebDeliveryAllowedFlag

### Scte35SpliceInsertNoRegionalBlackoutBehavior
* Scte35SpliceInsertNoRegionalBlackoutBehavior `string` (values: FOLLOW, IGNORE): Scte35 Splice Insert No Regional Blackout Behavior

### Scte35SpliceInsertScheduleActionSettings
* Scte35SpliceInsertScheduleActionSettings `object`: Settings for a SCTE-35 splice_insert message.
  * Duration
  * SpliceEventId **required**

### Scte35SpliceInsertWebDeliveryAllowedBehavior
* Scte35SpliceInsertWebDeliveryAllowedBehavior `string` (values: FOLLOW, IGNORE): Scte35 Splice Insert Web Delivery Allowed Behavior

### Scte35TimeSignalApos
* Scte35TimeSignalApos `object`: Scte35 Time Signal Apos
  * AdAvailOffset
  * NoRegionalBlackoutFlag
  * WebDeliveryAllowedFlag

### Scte35TimeSignalScheduleActionSettings
* Scte35TimeSignalScheduleActionSettings `object`: Settings for a SCTE-35 time_signal.
  * Scte35Descriptors **required**
    * items [Scte35Descriptor](#scte35descriptor)

### Scte35WebDeliveryAllowedFlag
* Scte35WebDeliveryAllowedFlag `string` (values: WEB_DELIVERY_NOT_ALLOWED, WEB_DELIVERY_ALLOWED): Corresponds to the web_delivery_allowed_flag parameter. A value of WEB_DELIVERY_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.

### SmoothGroupAudioOnlyTimecodeControl
* SmoothGroupAudioOnlyTimecodeControl `string` (values: PASSTHROUGH, USE_CONFIGURED_CLOCK): Smooth Group Audio Only Timecode Control

### SmoothGroupCertificateMode
* SmoothGroupCertificateMode `string` (values: SELF_SIGNED, VERIFY_AUTHENTICITY): Smooth Group Certificate Mode

### SmoothGroupEventIdMode
* SmoothGroupEventIdMode `string` (values: NO_EVENT_ID, USE_CONFIGURED, USE_TIMESTAMP): Smooth Group Event Id Mode

### SmoothGroupEventStopBehavior
* SmoothGroupEventStopBehavior `string` (values: NONE, SEND_EOS): Smooth Group Event Stop Behavior

### SmoothGroupSegmentationMode
* SmoothGroupSegmentationMode `string` (values: USE_INPUT_SEGMENTATION, USE_SEGMENT_DURATION): Smooth Group Segmentation Mode

### SmoothGroupSparseTrackType
* SmoothGroupSparseTrackType `string` (values: NONE, SCTE_35, SCTE_35_WITHOUT_SEGMENTATION): Smooth Group Sparse Track Type

### SmoothGroupStreamManifestBehavior
* SmoothGroupStreamManifestBehavior `string` (values: DO_NOT_SEND, SEND): Smooth Group Stream Manifest Behavior

### SmoothGroupTimestampOffsetMode
* SmoothGroupTimestampOffsetMode `string` (values: USE_CONFIGURED_OFFSET, USE_EVENT_START_DATE): Smooth Group Timestamp Offset Mode

### Smpte2038DataPreference
* Smpte2038DataPreference `string` (values: IGNORE, PREFER): Smpte2038 Data Preference

### SmpteTtDestinationSettings
* SmpteTtDestinationSettings `object`: Smpte Tt Destination Settings

### StandardHlsSettings
* StandardHlsSettings `object`: Standard Hls Settings
  * AudioRenditionSets
  * M3u8Settings **required**
    * AudioFramesPerPes
    * AudioPids
    * EcmPid
    * NielsenId3Behavior
    * PatInterval
    * PcrControl
    * PcrPeriod
    * PcrPid
    * PmtInterval
    * PmtPid
    * ProgramNum
    * Scte35Behavior
    * Scte35Pid
    * TimedMetadataBehavior
    * TimedMetadataPid
    * TransportStreamId
    * VideoPid

### StartChannelRequest
* StartChannelRequest `object`: Placeholder documentation for StartChannelRequest

### StartChannelResponse
* StartChannelResponse `object`: Placeholder documentation for StartChannelResponse
  * Arn
  * CdiInputSpecification
    * Resolution
  * ChannelClass
  * Destinations
    * items [OutputDestination](#outputdestination)
  * EgressEndpoints
    * items [ChannelEgressEndpoint](#channelegressendpoint)
  * EncoderSettings
    * AudioDescriptions **required**
      * items [AudioDescription](#audiodescription)
    * AvailBlanking
      * AvailBlankingImage
        * PasswordParam
        * Uri **required**
        * Username
      * State
    * AvailConfiguration
      * AvailSettings
        * Scte35SpliceInsert
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
        * Scte35TimeSignalApos
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
    * BlackoutSlate
      * BlackoutSlateImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkEndBlackout
      * NetworkEndBlackoutImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkId
      * State
    * CaptionDescriptions
      * items [CaptionDescription](#captiondescription)
    * FeatureActivations
      * InputPrepareScheduleActions
    * GlobalConfiguration
      * InitialAudioGain
      * InputEndAction
      * InputLossBehavior
        * BlackFrameMsec
        * InputLossImageColor
        * InputLossImageSlate
          * PasswordParam
          * Uri **required**
          * Username
        * InputLossImageType
        * RepeatFrameMsec
      * OutputLockingMode
      * OutputTimingSource
      * SupportLowFramerateInputs
    * NielsenConfiguration
      * DistributorId
      * NielsenPcmToId3Tagging
    * OutputGroups **required**
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig **required**
      * Source **required**
      * SyncThreshold
    * VideoDescriptions **required**
      * items [VideoDescription](#videodescription)
  * Id
  * InputAttachments
    * items [InputAttachment](#inputattachment)
  * InputSpecification
    * Codec
    * MaximumBitrate
    * Resolution
  * LogLevel
  * Name
  * PipelineDetails
    * items [PipelineDetail](#pipelinedetail)
  * PipelinesRunningCount
  * RoleArn
  * State
  * Tags

### StartMultiplexRequest
* StartMultiplexRequest `object`: Placeholder documentation for StartMultiplexRequest

### StartMultiplexResponse
* StartMultiplexResponse `object`: Placeholder documentation for StartMultiplexResponse
  * Arn
  * AvailabilityZones
    * items [__string](#__string)
  * Destinations
    * items [MultiplexOutputDestination](#multiplexoutputdestination)
  * Id
  * MultiplexSettings
    * MaximumVideoBufferDelayMilliseconds
    * TransportStreamBitrate **required**
    * TransportStreamId **required**
    * TransportStreamReservedBitrate
  * Name
  * PipelinesRunningCount
  * ProgramCount
  * State
  * Tags

### StartTimecode
* StartTimecode `object`: Settings to identify the start of the clip.
  * Timecode

### StaticImageActivateScheduleActionSettings
* StaticImageActivateScheduleActionSettings `object`: Settings for the action to activate a static image.
  * Duration
  * FadeIn
  * FadeOut
  * Height
  * Image **required**
    * PasswordParam
    * Uri **required**
    * Username
  * ImageX
  * ImageY
  * Layer
  * Opacity
  * Width

### StaticImageDeactivateScheduleActionSettings
* StaticImageDeactivateScheduleActionSettings `object`: Settings for the action to deactivate the image in a specific layer.
  * FadeOut
  * Layer

### StaticKeySettings
* StaticKeySettings `object`: Static Key Settings
  * KeyProviderServer
    * PasswordParam
    * Uri **required**
    * Username
  * StaticKeyValue **required**

### StopChannelRequest
* StopChannelRequest `object`: Placeholder documentation for StopChannelRequest

### StopChannelResponse
* StopChannelResponse `object`: Placeholder documentation for StopChannelResponse
  * Arn
  * CdiInputSpecification
    * Resolution
  * ChannelClass
  * Destinations
    * items [OutputDestination](#outputdestination)
  * EgressEndpoints
    * items [ChannelEgressEndpoint](#channelegressendpoint)
  * EncoderSettings
    * AudioDescriptions **required**
      * items [AudioDescription](#audiodescription)
    * AvailBlanking
      * AvailBlankingImage
        * PasswordParam
        * Uri **required**
        * Username
      * State
    * AvailConfiguration
      * AvailSettings
        * Scte35SpliceInsert
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
        * Scte35TimeSignalApos
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
    * BlackoutSlate
      * BlackoutSlateImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkEndBlackout
      * NetworkEndBlackoutImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkId
      * State
    * CaptionDescriptions
      * items [CaptionDescription](#captiondescription)
    * FeatureActivations
      * InputPrepareScheduleActions
    * GlobalConfiguration
      * InitialAudioGain
      * InputEndAction
      * InputLossBehavior
        * BlackFrameMsec
        * InputLossImageColor
        * InputLossImageSlate
          * PasswordParam
          * Uri **required**
          * Username
        * InputLossImageType
        * RepeatFrameMsec
      * OutputLockingMode
      * OutputTimingSource
      * SupportLowFramerateInputs
    * NielsenConfiguration
      * DistributorId
      * NielsenPcmToId3Tagging
    * OutputGroups **required**
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig **required**
      * Source **required**
      * SyncThreshold
    * VideoDescriptions **required**
      * items [VideoDescription](#videodescription)
  * Id
  * InputAttachments
    * items [InputAttachment](#inputattachment)
  * InputSpecification
    * Codec
    * MaximumBitrate
    * Resolution
  * LogLevel
  * Name
  * PipelineDetails
    * items [PipelineDetail](#pipelinedetail)
  * PipelinesRunningCount
  * RoleArn
  * State
  * Tags

### StopMultiplexRequest
* StopMultiplexRequest `object`: Placeholder documentation for StopMultiplexRequest

### StopMultiplexResponse
* StopMultiplexResponse `object`: Placeholder documentation for StopMultiplexResponse
  * Arn
  * AvailabilityZones
    * items [__string](#__string)
  * Destinations
    * items [MultiplexOutputDestination](#multiplexoutputdestination)
  * Id
  * MultiplexSettings
    * MaximumVideoBufferDelayMilliseconds
    * TransportStreamBitrate **required**
    * TransportStreamId **required**
    * TransportStreamReservedBitrate
  * Name
  * PipelinesRunningCount
  * ProgramCount
  * State
  * Tags

### StopTimecode
* StopTimecode `object`: Settings to identify the end of the clip.
  * LastFrameClippingBehavior
  * Timecode

### Tags
* Tags `object`: Placeholder documentation for Tags

### TeletextDestinationSettings
* TeletextDestinationSettings `object`: Teletext Destination Settings

### TeletextSourceSettings
* TeletextSourceSettings `object`: Teletext Source Settings
  * PageNumber

### TemporalFilterPostFilterSharpening
* TemporalFilterPostFilterSharpening `string` (values: AUTO, DISABLED, ENABLED): Temporal Filter Post Filter Sharpening

### TemporalFilterSettings
* TemporalFilterSettings `object`: Temporal Filter Settings
  * PostFilterSharpening
  * Strength

### TemporalFilterStrength
* TemporalFilterStrength `string` (values: AUTO, STRENGTH_1, STRENGTH_2, STRENGTH_3, STRENGTH_4, STRENGTH_5, STRENGTH_6, STRENGTH_7, STRENGTH_8, STRENGTH_9, STRENGTH_10, STRENGTH_11, STRENGTH_12, STRENGTH_13, STRENGTH_14, STRENGTH_15, STRENGTH_16): Temporal Filter Strength

### TimecodeConfig
* TimecodeConfig `object`: Timecode Config
  * Source **required**
  * SyncThreshold

### TimecodeConfigSource
* TimecodeConfigSource `string` (values: EMBEDDED, SYSTEMCLOCK, ZEROBASED): Timecode Config Source

### TooManyRequestsException


### TransferInputDeviceRequest
* TransferInputDeviceRequest `object`: A request to transfer an input device.
  * TargetCustomerId
  * TransferMessage

### TransferInputDeviceResponse
* TransferInputDeviceResponse `object`: Placeholder documentation for TransferInputDeviceResponse

### TransferringInputDeviceSummary
* TransferringInputDeviceSummary `object`: Details about the input device that is being transferred.
  * Id
  * Message
  * TargetCustomerId
  * TransferType

### TtmlDestinationSettings
* TtmlDestinationSettings `object`: Ttml Destination Settings
  * StyleControl

### TtmlDestinationStyleControl
* TtmlDestinationStyleControl `string` (values: PASSTHROUGH, USE_CONFIGURED): Ttml Destination Style Control

### UdpContainerSettings
* UdpContainerSettings `object`: Udp Container Settings
  * M2tsSettings
    * AbsentInputAudioBehavior
    * Arib
    * AribCaptionsPid
    * AribCaptionsPidControl
    * AudioBufferModel
    * AudioFramesPerPes
    * AudioPids
    * AudioStreamType
    * Bitrate
    * BufferModel
    * CcDescriptor
    * DvbNitSettings
      * NetworkId **required**
      * NetworkName **required**
      * RepInterval
    * DvbSdtSettings
      * OutputSdt
      * RepInterval
      * ServiceName
      * ServiceProviderName
    * DvbSubPids
    * DvbTdtSettings
      * RepInterval
    * DvbTeletextPid
    * Ebif
    * EbpAudioInterval
    * EbpLookaheadMs
    * EbpPlacement
    * EcmPid
    * EsRateInPes
    * EtvPlatformPid
    * EtvSignalPid
    * FragmentTime
    * Klv
    * KlvDataPids
    * NielsenId3Behavior
    * NullPacketBitrate
    * PatInterval
    * PcrControl
    * PcrPeriod
    * PcrPid
    * PmtInterval
    * PmtPid
    * ProgramNum
    * RateMode
    * Scte27Pids
    * Scte35Control
    * Scte35Pid
    * SegmentationMarkers
    * SegmentationStyle
    * SegmentationTime
    * TimedMetadataBehavior
    * TimedMetadataPid
    * TransportStreamId
    * VideoPid

### UdpGroupSettings
* UdpGroupSettings `object`: Udp Group Settings
  * InputLossAction
  * TimedMetadataId3Frame
  * TimedMetadataId3Period

### UdpOutputSettings
* UdpOutputSettings `object`: Udp Output Settings
  * BufferMsec
  * ContainerSettings **required**
    * M2tsSettings
      * AbsentInputAudioBehavior
      * Arib
      * AribCaptionsPid
      * AribCaptionsPidControl
      * AudioBufferModel
      * AudioFramesPerPes
      * AudioPids
      * AudioStreamType
      * Bitrate
      * BufferModel
      * CcDescriptor
      * DvbNitSettings
        * NetworkId **required**
        * NetworkName **required**
        * RepInterval
      * DvbSdtSettings
        * OutputSdt
        * RepInterval
        * ServiceName
        * ServiceProviderName
      * DvbSubPids
      * DvbTdtSettings
        * RepInterval
      * DvbTeletextPid
      * Ebif
      * EbpAudioInterval
      * EbpLookaheadMs
      * EbpPlacement
      * EcmPid
      * EsRateInPes
      * EtvPlatformPid
      * EtvSignalPid
      * FragmentTime
      * Klv
      * KlvDataPids
      * NielsenId3Behavior
      * NullPacketBitrate
      * PatInterval
      * PcrControl
      * PcrPeriod
      * PcrPid
      * PmtInterval
      * PmtPid
      * ProgramNum
      * RateMode
      * Scte27Pids
      * Scte35Control
      * Scte35Pid
      * SegmentationMarkers
      * SegmentationStyle
      * SegmentationTime
      * TimedMetadataBehavior
      * TimedMetadataPid
      * TransportStreamId
      * VideoPid
  * Destination **required**
    * DestinationRefId
  * FecOutputSettings
    * ColumnDepth
    * IncludeFec
    * RowLength

### UdpTimedMetadataId3Frame
* UdpTimedMetadataId3Frame `string` (values: NONE, PRIV, TDRL): Udp Timed Metadata Id3 Frame

### UnprocessableEntityException


### UpdateChannelClassRequest
* UpdateChannelClassRequest `object`: Channel class that the channel should be updated to.
  * ChannelClass **required**
  * Destinations
    * items [OutputDestination](#outputdestination)

### UpdateChannelClassResponse
* UpdateChannelClassResponse `object`: Placeholder documentation for UpdateChannelClassResponse
  * Channel
    * Arn
    * CdiInputSpecification
      * Resolution
    * ChannelClass
    * Destinations
      * items [OutputDestination](#outputdestination)
    * EgressEndpoints
      * items [ChannelEgressEndpoint](#channelegressendpoint)
    * EncoderSettings
      * AudioDescriptions **required**
        * items [AudioDescription](#audiodescription)
      * AvailBlanking
        * AvailBlankingImage
          * PasswordParam
          * Uri **required**
          * Username
        * State
      * AvailConfiguration
        * AvailSettings
          * Scte35SpliceInsert
          * Scte35TimeSignalApos
      * BlackoutSlate
        * BlackoutSlateImage
          * PasswordParam
          * Uri **required**
          * Username
        * NetworkEndBlackout
        * NetworkEndBlackoutImage
          * PasswordParam
          * Uri **required**
          * Username
        * NetworkId
        * State
      * CaptionDescriptions
        * items [CaptionDescription](#captiondescription)
      * FeatureActivations
        * InputPrepareScheduleActions
      * GlobalConfiguration
        * InitialAudioGain
        * InputEndAction
        * InputLossBehavior
          * BlackFrameMsec
          * InputLossImageColor
          * InputLossImageSlate
          * InputLossImageType
          * RepeatFrameMsec
        * OutputLockingMode
        * OutputTimingSource
        * SupportLowFramerateInputs
      * NielsenConfiguration
        * DistributorId
        * NielsenPcmToId3Tagging
      * OutputGroups **required**
        * items [OutputGroup](#outputgroup)
      * TimecodeConfig **required**
        * Source **required**
        * SyncThreshold
      * VideoDescriptions **required**
        * items [VideoDescription](#videodescription)
    * Id
    * InputAttachments
      * items [InputAttachment](#inputattachment)
    * InputSpecification
      * Codec
      * MaximumBitrate
      * Resolution
    * LogLevel
    * Name
    * PipelineDetails
      * items [PipelineDetail](#pipelinedetail)
    * PipelinesRunningCount
    * RoleArn
    * State
    * Tags

### UpdateChannelRequest
* UpdateChannelRequest `object`: A request to update a channel.
  * CdiInputSpecification
    * Resolution
  * Destinations
    * items [OutputDestination](#outputdestination)
  * EncoderSettings
    * AudioDescriptions **required**
      * items [AudioDescription](#audiodescription)
    * AvailBlanking
      * AvailBlankingImage
        * PasswordParam
        * Uri **required**
        * Username
      * State
    * AvailConfiguration
      * AvailSettings
        * Scte35SpliceInsert
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
        * Scte35TimeSignalApos
          * AdAvailOffset
          * NoRegionalBlackoutFlag
          * WebDeliveryAllowedFlag
    * BlackoutSlate
      * BlackoutSlateImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkEndBlackout
      * NetworkEndBlackoutImage
        * PasswordParam
        * Uri **required**
        * Username
      * NetworkId
      * State
    * CaptionDescriptions
      * items [CaptionDescription](#captiondescription)
    * FeatureActivations
      * InputPrepareScheduleActions
    * GlobalConfiguration
      * InitialAudioGain
      * InputEndAction
      * InputLossBehavior
        * BlackFrameMsec
        * InputLossImageColor
        * InputLossImageSlate
          * PasswordParam
          * Uri **required**
          * Username
        * InputLossImageType
        * RepeatFrameMsec
      * OutputLockingMode
      * OutputTimingSource
      * SupportLowFramerateInputs
    * NielsenConfiguration
      * DistributorId
      * NielsenPcmToId3Tagging
    * OutputGroups **required**
      * items [OutputGroup](#outputgroup)
    * TimecodeConfig **required**
      * Source **required**
      * SyncThreshold
    * VideoDescriptions **required**
      * items [VideoDescription](#videodescription)
  * InputAttachments
    * items [InputAttachment](#inputattachment)
  * InputSpecification
    * Codec
    * MaximumBitrate
    * Resolution
  * LogLevel
  * Name
  * RoleArn

### UpdateChannelResponse
* UpdateChannelResponse `object`: Placeholder documentation for UpdateChannelResponse
  * Channel
    * Arn
    * CdiInputSpecification
      * Resolution
    * ChannelClass
    * Destinations
      * items [OutputDestination](#outputdestination)
    * EgressEndpoints
      * items [ChannelEgressEndpoint](#channelegressendpoint)
    * EncoderSettings
      * AudioDescriptions **required**
        * items [AudioDescription](#audiodescription)
      * AvailBlanking
        * AvailBlankingImage
          * PasswordParam
          * Uri **required**
          * Username
        * State
      * AvailConfiguration
        * AvailSettings
          * Scte35SpliceInsert
          * Scte35TimeSignalApos
      * BlackoutSlate
        * BlackoutSlateImage
          * PasswordParam
          * Uri **required**
          * Username
        * NetworkEndBlackout
        * NetworkEndBlackoutImage
          * PasswordParam
          * Uri **required**
          * Username
        * NetworkId
        * State
      * CaptionDescriptions
        * items [CaptionDescription](#captiondescription)
      * FeatureActivations
        * InputPrepareScheduleActions
      * GlobalConfiguration
        * InitialAudioGain
        * InputEndAction
        * InputLossBehavior
          * BlackFrameMsec
          * InputLossImageColor
          * InputLossImageSlate
          * InputLossImageType
          * RepeatFrameMsec
        * OutputLockingMode
        * OutputTimingSource
        * SupportLowFramerateInputs
      * NielsenConfiguration
        * DistributorId
        * NielsenPcmToId3Tagging
      * OutputGroups **required**
        * items [OutputGroup](#outputgroup)
      * TimecodeConfig **required**
        * Source **required**
        * SyncThreshold
      * VideoDescriptions **required**
        * items [VideoDescription](#videodescription)
    * Id
    * InputAttachments
      * items [InputAttachment](#inputattachment)
    * InputSpecification
      * Codec
      * MaximumBitrate
      * Resolution
    * LogLevel
    * Name
    * PipelineDetails
      * items [PipelineDetail](#pipelinedetail)
    * PipelinesRunningCount
    * RoleArn
    * State
    * Tags

### UpdateInputDeviceRequest
* UpdateInputDeviceRequest `object`: A request to update an input device.
  * HdDeviceSettings
    * ConfiguredInput
    * MaxBitrate
  * Name
  * UhdDeviceSettings
    * ConfiguredInput
    * MaxBitrate

### UpdateInputDeviceResponse
* UpdateInputDeviceResponse `object`: Placeholder documentation for UpdateInputDeviceResponse
  * Arn
  * ConnectionState
  * DeviceSettingsSyncState
  * DeviceUpdateStatus
  * HdDeviceSettings
    * ActiveInput
    * ConfiguredInput
    * DeviceState
    * Framerate
    * Height
    * MaxBitrate
    * ScanType
    * Width
  * Id
  * MacAddress
  * Name
  * NetworkSettings
    * DnsAddresses
      * items [__string](#__string)
    * Gateway
    * IpAddress
    * IpScheme
    * SubnetMask
  * SerialNumber
  * Type
  * UhdDeviceSettings
    * ActiveInput
    * ConfiguredInput
    * DeviceState
    * Framerate
    * Height
    * MaxBitrate
    * ScanType
    * Width

### UpdateInputRequest
* UpdateInputRequest `object`: A request to update an input.
  * Destinations
    * items [InputDestinationRequest](#inputdestinationrequest)
  * InputDevices
    * items [InputDeviceRequest](#inputdevicerequest)
  * InputSecurityGroups
    * items [__string](#__string)
  * MediaConnectFlows
    * items [MediaConnectFlowRequest](#mediaconnectflowrequest)
  * Name
  * RoleArn
  * Sources
    * items [InputSourceRequest](#inputsourcerequest)

### UpdateInputResponse
* UpdateInputResponse `object`: Placeholder documentation for UpdateInputResponse
  * Input
    * Arn
    * AttachedChannels
      * items [__string](#__string)
    * Destinations
      * items [InputDestination](#inputdestination)
    * Id
    * InputClass
    * InputDevices
      * items [InputDeviceSettings](#inputdevicesettings)
    * InputSourceType
    * MediaConnectFlows
      * items [MediaConnectFlow](#mediaconnectflow)
    * Name
    * RoleArn
    * SecurityGroups
      * items [__string](#__string)
    * Sources
      * items [InputSource](#inputsource)
    * State
    * Tags
    * Type

### UpdateInputSecurityGroupRequest
* UpdateInputSecurityGroupRequest `object`: The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.
  * Tags
  * WhitelistRules
    * items [InputWhitelistRuleCidr](#inputwhitelistrulecidr)

### UpdateInputSecurityGroupResponse
* UpdateInputSecurityGroupResponse `object`: Placeholder documentation for UpdateInputSecurityGroupResponse
  * SecurityGroup
    * Arn
    * Id
    * Inputs
      * items [__string](#__string)
    * State
    * Tags
    * WhitelistRules
      * items [InputWhitelistRule](#inputwhitelistrule)

### UpdateMultiplexProgramRequest
* UpdateMultiplexProgramRequest `object`: A request to update a program in a multiplex.
  * MultiplexProgramSettings
    * PreferredChannelPipeline
    * ProgramNumber **required**
    * ServiceDescriptor
      * ProviderName **required**
      * ServiceName **required**
    * VideoSettings
      * ConstantBitrate
      * StatmuxSettings
        * MaximumBitrate
        * MinimumBitrate
        * Priority

### UpdateMultiplexProgramResponse
* UpdateMultiplexProgramResponse `object`: Placeholder documentation for UpdateMultiplexProgramResponse
  * MultiplexProgram
    * ChannelId
    * MultiplexProgramSettings
      * PreferredChannelPipeline
      * ProgramNumber **required**
      * ServiceDescriptor
        * ProviderName **required**
        * ServiceName **required**
      * VideoSettings
        * ConstantBitrate
        * StatmuxSettings
          * MaximumBitrate
          * MinimumBitrate
          * Priority
    * PacketIdentifiersMap
      * AudioPids
        * items [__integer](#__integer)
      * DvbSubPids
        * items [__integer](#__integer)
      * DvbTeletextPid
      * EtvPlatformPid
      * EtvSignalPid
      * KlvDataPids
        * items [__integer](#__integer)
      * PcrPid
      * PmtPid
      * PrivateMetadataPid
      * Scte27Pids
        * items [__integer](#__integer)
      * Scte35Pid
      * TimedMetadataPid
      * VideoPid
    * PipelineDetails
      * items [MultiplexProgramPipelineDetail](#multiplexprogrampipelinedetail)
    * ProgramName

### UpdateMultiplexRequest
* UpdateMultiplexRequest `object`: A request to update a multiplex.
  * MultiplexSettings
    * MaximumVideoBufferDelayMilliseconds
    * TransportStreamBitrate **required**
    * TransportStreamId **required**
    * TransportStreamReservedBitrate
  * Name

### UpdateMultiplexResponse
* UpdateMultiplexResponse `object`: Placeholder documentation for UpdateMultiplexResponse
  * Multiplex
    * Arn
    * AvailabilityZones
      * items [__string](#__string)
    * Destinations
      * items [MultiplexOutputDestination](#multiplexoutputdestination)
    * Id
    * MultiplexSettings
      * MaximumVideoBufferDelayMilliseconds
      * TransportStreamBitrate **required**
      * TransportStreamId **required**
      * TransportStreamReservedBitrate
    * Name
    * PipelinesRunningCount
    * ProgramCount
    * State
    * Tags

### UpdateReservationRequest
* UpdateReservationRequest `object`: Request to update a reservation
  * Name

### UpdateReservationResponse
* UpdateReservationResponse `object`: Placeholder documentation for UpdateReservationResponse
  * Reservation
    * Arn
    * Count
    * CurrencyCode
    * Duration
    * DurationUnits
    * End
    * FixedPrice
    * Name
    * OfferingDescription
    * OfferingId
    * OfferingType
    * Region
    * ReservationId
    * ResourceSpecification
      * ChannelClass
      * Codec
      * MaximumBitrate
      * MaximumFramerate
      * Resolution
      * ResourceType
      * SpecialFeature
      * VideoQuality
    * Start
    * State
    * Tags
    * UsagePrice

### VideoBlackFailoverSettings
* VideoBlackFailoverSettings `object`: Placeholder documentation for VideoBlackFailoverSettings
  * BlackDetectThreshold
  * VideoBlackThresholdMsec

### VideoCodecSettings
* VideoCodecSettings `object`: Video Codec Settings
  * FrameCaptureSettings
    * CaptureInterval **required**
    * CaptureIntervalUnits
  * H264Settings
    * AdaptiveQuantization
    * AfdSignaling
    * Bitrate
    * BufFillPct
    * BufSize
    * ColorMetadata
    * ColorSpaceSettings
      * ColorSpacePassthroughSettings
      * Rec601Settings
      * Rec709Settings
    * EntropyEncoding
    * FilterSettings
      * TemporalFilterSettings
        * PostFilterSharpening
        * Strength
    * FixedAfd
    * FlickerAq
    * ForceFieldPictures
    * FramerateControl
    * FramerateDenominator
    * FramerateNumerator
    * GopBReference
    * GopClosedCadence
    * GopNumBFrames
    * GopSize
    * GopSizeUnits
    * Level
    * LookAheadRateControl
    * MaxBitrate
    * MinIInterval
    * NumRefFrames
    * ParControl
    * ParDenominator
    * ParNumerator
    * Profile
    * QualityLevel
    * QvbrQualityLevel
    * RateControlMode
    * ScanType
    * SceneChangeDetect
    * Slices
    * Softness
    * SpatialAq
    * SubgopLength
    * Syntax
    * TemporalAq
    * TimecodeInsertion
  * H265Settings
    * AdaptiveQuantization
    * AfdSignaling
    * AlternativeTransferFunction
    * Bitrate
    * BufSize
    * ColorMetadata
    * ColorSpaceSettings
      * ColorSpacePassthroughSettings
      * Hdr10Settings
        * MaxCll
        * MaxFall
      * Rec601Settings
      * Rec709Settings
    * FilterSettings
      * TemporalFilterSettings
        * PostFilterSharpening
        * Strength
    * FixedAfd
    * FlickerAq
    * FramerateDenominator **required**
    * FramerateNumerator **required**
    * GopClosedCadence
    * GopSize
    * GopSizeUnits
    * Level
    * LookAheadRateControl
    * MaxBitrate
    * MinIInterval
    * ParDenominator
    * ParNumerator
    * Profile
    * QvbrQualityLevel
    * RateControlMode
    * ScanType
    * SceneChangeDetect
    * Slices
    * Tier
    * TimecodeInsertion
  * Mpeg2Settings
    * AdaptiveQuantization
    * AfdSignaling
    * ColorMetadata
    * ColorSpace
    * DisplayAspectRatio
    * FilterSettings
      * TemporalFilterSettings
        * PostFilterSharpening
        * Strength
    * FixedAfd
    * FramerateDenominator **required**
    * FramerateNumerator **required**
    * GopClosedCadence
    * GopNumBFrames
    * GopSize
    * GopSizeUnits
    * ScanType
    * SubgopLength
    * TimecodeInsertion

### VideoDescription
* VideoDescription `object`: Video settings for this stream.
  * CodecSettings
    * FrameCaptureSettings
      * CaptureInterval **required**
      * CaptureIntervalUnits
    * H264Settings
      * AdaptiveQuantization
      * AfdSignaling
      * Bitrate
      * BufFillPct
      * BufSize
      * ColorMetadata
      * ColorSpaceSettings
        * ColorSpacePassthroughSettings
        * Rec601Settings
        * Rec709Settings
      * EntropyEncoding
      * FilterSettings
        * TemporalFilterSettings
          * PostFilterSharpening
          * Strength
      * FixedAfd
      * FlickerAq
      * ForceFieldPictures
      * FramerateControl
      * FramerateDenominator
      * FramerateNumerator
      * GopBReference
      * GopClosedCadence
      * GopNumBFrames
      * GopSize
      * GopSizeUnits
      * Level
      * LookAheadRateControl
      * MaxBitrate
      * MinIInterval
      * NumRefFrames
      * ParControl
      * ParDenominator
      * ParNumerator
      * Profile
      * QualityLevel
      * QvbrQualityLevel
      * RateControlMode
      * ScanType
      * SceneChangeDetect
      * Slices
      * Softness
      * SpatialAq
      * SubgopLength
      * Syntax
      * TemporalAq
      * TimecodeInsertion
    * H265Settings
      * AdaptiveQuantization
      * AfdSignaling
      * AlternativeTransferFunction
      * Bitrate
      * BufSize
      * ColorMetadata
      * ColorSpaceSettings
        * ColorSpacePassthroughSettings
        * Hdr10Settings
          * MaxCll
          * MaxFall
        * Rec601Settings
        * Rec709Settings
      * FilterSettings
        * TemporalFilterSettings
          * PostFilterSharpening
          * Strength
      * FixedAfd
      * FlickerAq
      * FramerateDenominator **required**
      * FramerateNumerator **required**
      * GopClosedCadence
      * GopSize
      * GopSizeUnits
      * Level
      * LookAheadRateControl
      * MaxBitrate
      * MinIInterval
      * ParDenominator
      * ParNumerator
      * Profile
      * QvbrQualityLevel
      * RateControlMode
      * ScanType
      * SceneChangeDetect
      * Slices
      * Tier
      * TimecodeInsertion
    * Mpeg2Settings
      * AdaptiveQuantization
      * AfdSignaling
      * ColorMetadata
      * ColorSpace
      * DisplayAspectRatio
      * FilterSettings
        * TemporalFilterSettings
          * PostFilterSharpening
          * Strength
      * FixedAfd
      * FramerateDenominator **required**
      * FramerateNumerator **required**
      * GopClosedCadence
      * GopNumBFrames
      * GopSize
      * GopSizeUnits
      * ScanType
      * SubgopLength
      * TimecodeInsertion
  * Height
  * Name **required**
  * RespondToAfd
  * ScalingBehavior
  * Sharpness
  * Width

### VideoDescriptionRespondToAfd
* VideoDescriptionRespondToAfd `string` (values: NONE, PASSTHROUGH, RESPOND): Video Description Respond To Afd

### VideoDescriptionScalingBehavior
* VideoDescriptionScalingBehavior `string` (values: DEFAULT, STRETCH_TO_OUTPUT): Video Description Scaling Behavior

### VideoSelector
* VideoSelector `object`: Specifies a particular video stream within an input source. An input may have only a single video selector.
  * ColorSpace
  * ColorSpaceUsage
  * SelectorSettings
    * VideoSelectorPid
      * Pid
    * VideoSelectorProgramId
      * ProgramId

### VideoSelectorColorSpace
* VideoSelectorColorSpace `string` (values: FOLLOW, REC_601, REC_709): Video Selector Color Space

### VideoSelectorColorSpaceUsage
* VideoSelectorColorSpaceUsage `string` (values: FALLBACK, FORCE): Video Selector Color Space Usage

### VideoSelectorPid
* VideoSelectorPid `object`: Video Selector Pid
  * Pid

### VideoSelectorProgramId
* VideoSelectorProgramId `object`: Video Selector Program Id
  * ProgramId

### VideoSelectorSettings
* VideoSelectorSettings `object`: Video Selector Settings
  * VideoSelectorPid
    * Pid
  * VideoSelectorProgramId
    * ProgramId

### WavCodingMode
* WavCodingMode `string` (values: CODING_MODE_1_0, CODING_MODE_2_0, CODING_MODE_4_0, CODING_MODE_8_0): Wav Coding Mode

### WavSettings
* WavSettings `object`: Wav Settings
  * BitDepth
  * CodingMode
  * SampleRate

### WebvttDestinationSettings
* WebvttDestinationSettings `object`: Webvtt Destination Settings

### __double
* __double `number`: Placeholder documentation for __double

### __doubleMin0
* __doubleMin0 `number`: Placeholder documentation for __doubleMin0

### __doubleMin0Max1
* __doubleMin0Max1 `number`: Placeholder documentation for __doubleMin0Max1

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

### __integerMin0Max100000000
* __integerMin0Max100000000 `integer`: Placeholder documentation for __integerMin0Max100000000

### __integerMin0Max128
* __integerMin0Max128 `integer`: Placeholder documentation for __integerMin0Max128

### __integerMin0Max15
* __integerMin0Max15 `integer`: Placeholder documentation for __integerMin0Max15

### __integerMin0Max255
* __integerMin0Max255 `integer`: Placeholder documentation for __integerMin0Max255

### __integerMin0Max30
* __integerMin0Max30 `integer`: Placeholder documentation for __integerMin0Max30

### __integerMin0Max32768
* __integerMin0Max32768 `integer`: Placeholder documentation for __integerMin0Max32768

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

### __integerMin100
* __integerMin100 `integer`: Placeholder documentation for __integerMin100

### __integerMin1000
* __integerMin1000 `integer`: Placeholder documentation for __integerMin1000

### __integerMin1000000Max100000000
* __integerMin1000000Max100000000 `integer`: Placeholder documentation for __integerMin1000000Max100000000

### __integerMin100000Max100000000
* __integerMin100000Max100000000 `integer`: Placeholder documentation for __integerMin100000Max100000000

### __integerMin100000Max40000000
* __integerMin100000Max40000000 `integer`: Placeholder documentation for __integerMin100000Max40000000

### __integerMin100000Max80000000
* __integerMin100000Max80000000 `integer`: Placeholder documentation for __integerMin100000Max80000000

### __integerMin1000Max30000
* __integerMin1000Max30000 `integer`: Placeholder documentation for __integerMin1000Max30000

### __integerMin1Max10
* __integerMin1Max10 `integer`: Placeholder documentation for __integerMin1Max10

### __integerMin1Max1000000
* __integerMin1Max1000000 `integer`: Placeholder documentation for __integerMin1Max1000000

### __integerMin1Max16
* __integerMin1Max16 `integer`: Placeholder documentation for __integerMin1Max16

### __integerMin1Max20
* __integerMin1Max20 `integer`: Placeholder documentation for __integerMin1Max20

### __integerMin1Max3003
* __integerMin1Max3003 `integer`: Placeholder documentation for __integerMin1Max3003

### __integerMin1Max31
* __integerMin1Max31 `integer`: Placeholder documentation for __integerMin1Max31

### __integerMin1Max32
* __integerMin1Max32 `integer`: Placeholder documentation for __integerMin1Max32

### __integerMin1Max3600000
* __integerMin1Max3600000 `integer`: Placeholder documentation for __integerMin1Max3600000

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

### __integerMin800Max3000
* __integerMin800Max3000 `integer`: Placeholder documentation for __integerMin800Max3000

### __integerMin96Max600
* __integerMin96Max600 `integer`: Placeholder documentation for __integerMin96Max600

### __integerMinNegative1000Max1000
* __integerMinNegative1000Max1000 `integer`: Placeholder documentation for __integerMinNegative1000Max1000

### __integerMinNegative5Max5
* __integerMinNegative5Max5 `integer`: Placeholder documentation for __integerMinNegative5Max5

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

### __listOfAudioTrack
* __listOfAudioTrack `array`: Placeholder documentation for __listOfAudioTrack
  * items [AudioTrack](#audiotrack)

### __listOfBatchFailedResultModel
* __listOfBatchFailedResultModel `array`: Placeholder documentation for __listOfBatchFailedResultModel
  * items [BatchFailedResultModel](#batchfailedresultmodel)

### __listOfBatchSuccessfulResultModel
* __listOfBatchSuccessfulResultModel `array`: Placeholder documentation for __listOfBatchSuccessfulResultModel
  * items [BatchSuccessfulResultModel](#batchsuccessfulresultmodel)

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

### __listOfFailoverCondition
* __listOfFailoverCondition `array`: Placeholder documentation for __listOfFailoverCondition
  * items [FailoverCondition](#failovercondition)

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

### __listOfInputDeviceRequest
* __listOfInputDeviceRequest `array`: Placeholder documentation for __listOfInputDeviceRequest
  * items [InputDeviceRequest](#inputdevicerequest)

### __listOfInputDeviceSettings
* __listOfInputDeviceSettings `array`: Placeholder documentation for __listOfInputDeviceSettings
  * items [InputDeviceSettings](#inputdevicesettings)

### __listOfInputDeviceSummary
* __listOfInputDeviceSummary `array`: Placeholder documentation for __listOfInputDeviceSummary
  * items [InputDeviceSummary](#inputdevicesummary)

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

### __listOfMediaConnectFlow
* __listOfMediaConnectFlow `array`: Placeholder documentation for __listOfMediaConnectFlow
  * items [MediaConnectFlow](#mediaconnectflow)

### __listOfMediaConnectFlowRequest
* __listOfMediaConnectFlowRequest `array`: Placeholder documentation for __listOfMediaConnectFlowRequest
  * items [MediaConnectFlowRequest](#mediaconnectflowrequest)

### __listOfMediaPackageOutputDestinationSettings
* __listOfMediaPackageOutputDestinationSettings `array`: Placeholder documentation for __listOfMediaPackageOutputDestinationSettings
  * items [MediaPackageOutputDestinationSettings](#mediapackageoutputdestinationsettings)

### __listOfMultiplexOutputDestination
* __listOfMultiplexOutputDestination `array`: Placeholder documentation for __listOfMultiplexOutputDestination
  * items [MultiplexOutputDestination](#multiplexoutputdestination)

### __listOfMultiplexProgramPipelineDetail
* __listOfMultiplexProgramPipelineDetail `array`: Placeholder documentation for __listOfMultiplexProgramPipelineDetail
  * items [MultiplexProgramPipelineDetail](#multiplexprogrampipelinedetail)

### __listOfMultiplexProgramSummary
* __listOfMultiplexProgramSummary `array`: Placeholder documentation for __listOfMultiplexProgramSummary
  * items [MultiplexProgramSummary](#multiplexprogramsummary)

### __listOfMultiplexSummary
* __listOfMultiplexSummary `array`: Placeholder documentation for __listOfMultiplexSummary
  * items [MultiplexSummary](#multiplexsummary)

### __listOfOffering
* __listOfOffering `array`: Placeholder documentation for __listOfOffering
  * items [Offering](#offering)

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

### __listOfPipelineDetail
* __listOfPipelineDetail `array`: Placeholder documentation for __listOfPipelineDetail
  * items [PipelineDetail](#pipelinedetail)

### __listOfPipelinePauseStateSettings
* __listOfPipelinePauseStateSettings `array`: Placeholder documentation for __listOfPipelinePauseStateSettings
  * items [PipelinePauseStateSettings](#pipelinepausestatesettings)

### __listOfReservation
* __listOfReservation `array`: Placeholder documentation for __listOfReservation
  * items [Reservation](#reservation)

### __listOfRtmpAdMarkers
* __listOfRtmpAdMarkers `array`: Placeholder documentation for __listOfRtmpAdMarkers
  * items [RtmpAdMarkers](#rtmpadmarkers)

### __listOfScheduleAction
* __listOfScheduleAction `array`: Placeholder documentation for __listOfScheduleAction
  * items [ScheduleAction](#scheduleaction)

### __listOfScte35Descriptor
* __listOfScte35Descriptor `array`: Placeholder documentation for __listOfScte35Descriptor
  * items [Scte35Descriptor](#scte35descriptor)

### __listOfTransferringInputDeviceSummary
* __listOfTransferringInputDeviceSummary `array`: Placeholder documentation for __listOfTransferringInputDeviceSummary
  * items [TransferringInputDeviceSummary](#transferringinputdevicesummary)

### __listOfVideoDescription
* __listOfVideoDescription `array`: Placeholder documentation for __listOfVideoDescription
  * items [VideoDescription](#videodescription)

### __listOf__integer
* __listOf__integer `array`: Placeholder documentation for __listOf__integer
  * items [__integer](#__integer)

### __listOf__string
* __listOf__string `array`: Placeholder documentation for __listOf__string
  * items [__string](#__string)

### __long
* __long `integer`: Placeholder documentation for __long

### __longMin0Max1099511627775
* __longMin0Max1099511627775 `integer`: Placeholder documentation for __longMin0Max1099511627775

### __longMin0Max4294967295
* __longMin0Max4294967295 `integer`: Placeholder documentation for __longMin0Max4294967295

### __longMin0Max8589934591
* __longMin0Max8589934591 `integer`: Placeholder documentation for __longMin0Max8589934591

### __string
* __string `string`: Placeholder documentation for __string

### __stringMax256
* __stringMax256 `string`: Placeholder documentation for __stringMax256

### __stringMax32
* __stringMax32 `string`: Placeholder documentation for __stringMax32

### __stringMin1
* __stringMin1 `string`: Placeholder documentation for __stringMin1

### __stringMin1Max255
* __stringMin1Max255 `string`: Placeholder documentation for __stringMin1Max255

### __stringMin1Max256
* __stringMin1Max256 `string`: Placeholder documentation for __stringMin1Max256

### __stringMin1Max35
* __stringMin1Max35 `string`: Placeholder documentation for __stringMin1Max35

### __stringMin32Max32
* __stringMin32Max32 `string`: Placeholder documentation for __stringMin32Max32

### __stringMin34Max34
* __stringMin34Max34 `string`: Placeholder documentation for __stringMin34Max34

### __stringMin3Max3
* __stringMin3Max3 `string`: Placeholder documentation for __stringMin3Max3

### __stringMin6Max6
* __stringMin6Max6 `string`: Placeholder documentation for __stringMin6Max6

### __timestamp
* __timestamp `string`: Placeholder documentation for __timestamp


