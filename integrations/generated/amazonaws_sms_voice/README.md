# @datafire/amazonaws_sms_voice

Client library for Amazon Pinpoint SMS and Voice Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sms_voice
```
```js
let amazonaws_sms_voice = require('@datafire/amazonaws_sms_voice').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Pinpoint SMS and Voice Messaging public facing APIs

## Actions

### ListConfigurationSets



```js
amazonaws_sms_voice.ListConfigurationSets({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `string`

#### Output
* output [ListConfigurationSetsResponse](#listconfigurationsetsresponse)

### CreateConfigurationSet



```js
amazonaws_sms_voice.CreateConfigurationSet({}, context)
```

#### Input
* input `object`
  * ConfigurationSetName `string`: The name that you want to give the configuration set.

#### Output
* output [CreateConfigurationSetResponse](#createconfigurationsetresponse)

### DeleteConfigurationSet



```js
amazonaws_sms_voice.DeleteConfigurationSet({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`

#### Output
* output [DeleteConfigurationSetResponse](#deleteconfigurationsetresponse)

### GetConfigurationSetEventDestinations



```js
amazonaws_sms_voice.GetConfigurationSetEventDestinations({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`

#### Output
* output [GetConfigurationSetEventDestinationsResponse](#getconfigurationseteventdestinationsresponse)

### CreateConfigurationSetEventDestination



```js
amazonaws_sms_voice.CreateConfigurationSetEventDestination({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * EventDestination `object`: An object that defines a single event destination.
    * CloudWatchLogsDestination [CloudWatchLogsDestination](#cloudwatchlogsdestination)
    * Enabled
    * KinesisFirehoseDestination [KinesisFirehoseDestination](#kinesisfirehosedestination)
    * MatchingEventTypes [EventTypes](#eventtypes)
    * SnsDestination [SnsDestination](#snsdestination)
  * EventDestinationName `string`: A name that identifies the event destination.

#### Output
* output [CreateConfigurationSetEventDestinationResponse](#createconfigurationseteventdestinationresponse)

### DeleteConfigurationSetEventDestination



```js
amazonaws_sms_voice.DeleteConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestinationName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * EventDestinationName **required** `string`

#### Output
* output [DeleteConfigurationSetEventDestinationResponse](#deleteconfigurationseteventdestinationresponse)

### UpdateConfigurationSetEventDestination



```js
amazonaws_sms_voice.UpdateConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestinationName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * EventDestinationName **required** `string`
  * EventDestination `object`: An object that defines a single event destination.
    * CloudWatchLogsDestination [CloudWatchLogsDestination](#cloudwatchlogsdestination)
    * Enabled
    * KinesisFirehoseDestination [KinesisFirehoseDestination](#kinesisfirehosedestination)
    * MatchingEventTypes [EventTypes](#eventtypes)
    * SnsDestination [SnsDestination](#snsdestination)

#### Output
* output [UpdateConfigurationSetEventDestinationResponse](#updateconfigurationseteventdestinationresponse)

### SendVoiceMessage



```js
amazonaws_sms_voice.SendVoiceMessage({}, context)
```

#### Input
* input `object`
  * CallerId `string`: The phone number that appears on recipients' devices when they receive the message.
  * ConfigurationSetName `string`: The name of the configuration set that you want to use to send the message.
  * Content `object`: An object that contains a voice message and information about the recipient that you want to send it to.
    * CallInstructionsMessage [CallInstructionsMessageType](#callinstructionsmessagetype)
    * PlainTextMessage [PlainTextMessageType](#plaintextmessagetype)
    * SSMLMessage [SSMLMessageType](#ssmlmessagetype)
  * DestinationPhoneNumber `string`: The phone number that you want to send the voice message to.
  * OriginationPhoneNumber `string`: The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request.

#### Output
* output [SendVoiceMessageResponse](#sendvoicemessageresponse)



## Definitions

### AlreadyExistsException


### BadRequestException


### Boolean
* Boolean `boolean`

### CallInstructionsMessageType
* CallInstructionsMessageType `object`: An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
  * Text

### CloudWatchLogsDestination
* CloudWatchLogsDestination `object`: An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
  * IamRoleArn
  * LogGroupArn

### ConfigurationSets
* ConfigurationSets `array`: An array that contains all of the configuration sets in your Amazon Pinpoint account in the current AWS Region.
  * items [WordCharactersWithDelimiters](#wordcharacterswithdelimiters)

### CreateConfigurationSetEventDestinationRequest
* CreateConfigurationSetEventDestinationRequest `object`: Create a new event destination in a configuration set.
  * EventDestination [EventDestinationDefinition](#eventdestinationdefinition)
  * EventDestinationName

### CreateConfigurationSetEventDestinationResponse
* CreateConfigurationSetEventDestinationResponse `object`: An empty object that indicates that the event destination was created successfully.

### CreateConfigurationSetRequest
* CreateConfigurationSetRequest `object`: A request to create a new configuration set.
  * ConfigurationSetName

### CreateConfigurationSetResponse
* CreateConfigurationSetResponse `object`: An empty object that indicates that the configuration set was successfully created.

### DeleteConfigurationSetEventDestinationRequest
* DeleteConfigurationSetEventDestinationRequest `object`

### DeleteConfigurationSetEventDestinationResponse
* DeleteConfigurationSetEventDestinationResponse `object`: An empty object that indicates that the event destination was deleted successfully.

### DeleteConfigurationSetRequest
* DeleteConfigurationSetRequest `object`

### DeleteConfigurationSetResponse
* DeleteConfigurationSetResponse `object`: An empty object that indicates that the configuration set was deleted successfully.

### EventDestination
* EventDestination `object`: An object that defines an event destination.
  * CloudWatchLogsDestination [CloudWatchLogsDestination](#cloudwatchlogsdestination)
  * Enabled
  * KinesisFirehoseDestination [KinesisFirehoseDestination](#kinesisfirehosedestination)
  * MatchingEventTypes [EventTypes](#eventtypes)
  * Name
  * SnsDestination [SnsDestination](#snsdestination)

### EventDestinationDefinition
* EventDestinationDefinition `object`: An object that defines a single event destination.
  * CloudWatchLogsDestination [CloudWatchLogsDestination](#cloudwatchlogsdestination)
  * Enabled
  * KinesisFirehoseDestination [KinesisFirehoseDestination](#kinesisfirehosedestination)
  * MatchingEventTypes [EventTypes](#eventtypes)
  * SnsDestination [SnsDestination](#snsdestination)

### EventDestinations
* EventDestinations `array`: An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
  * items [EventDestination](#eventdestination)

### EventType
* EventType `string` (values: INITIATED_CALL, RINGING, ANSWERED, COMPLETED_CALL, BUSY, FAILED, NO_ANSWER): The types of events that are sent to the event destination.

### EventTypes
* EventTypes `array`: An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
  * items [EventType](#eventtype)

### GetConfigurationSetEventDestinationsRequest
* GetConfigurationSetEventDestinationsRequest `object`

### GetConfigurationSetEventDestinationsResponse
* GetConfigurationSetEventDestinationsResponse `object`: An object that contains information about an event destination.
  * EventDestinations [EventDestinations](#eventdestinations)

### InternalServiceErrorException


### KinesisFirehoseDestination
* KinesisFirehoseDestination `object`: An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
  * DeliveryStreamArn
  * IamRoleArn

### LimitExceededException


### ListConfigurationSetsRequest
* ListConfigurationSetsRequest `object`

### ListConfigurationSetsResponse
* ListConfigurationSetsResponse `object`: An object that contains information about the configuration sets for your account in the current region.
  * ConfigurationSets
    * items [WordCharactersWithDelimiters](#wordcharacterswithdelimiters)
  * NextToken

### NextTokenString
* NextTokenString `string`

### NonEmptyString
* NonEmptyString `string`

### NotFoundException


### PlainTextMessageType
* PlainTextMessageType `object`: An object that defines a message that contains unformatted text.
  * LanguageCode
  * Text
  * VoiceId

### SSMLMessageType
* SSMLMessageType `object`: An object that defines a message that contains SSML-formatted text.
  * LanguageCode
  * Text
  * VoiceId

### SendVoiceMessageRequest
* SendVoiceMessageRequest `object`: SendVoiceMessageRequest
  * CallerId
  * ConfigurationSetName
  * Content [VoiceMessageContent](#voicemessagecontent)
  * DestinationPhoneNumber
  * OriginationPhoneNumber

### SendVoiceMessageResponse
* SendVoiceMessageResponse `object`: An object that that contains the Message ID of a Voice message that was sent successfully.
  * MessageId

### SnsDestination
* SnsDestination `object`: An object that contains information about an event destination that sends data to Amazon SNS.
  * TopicArn

### String
* String `string`

### TooManyRequestsException


### UpdateConfigurationSetEventDestinationRequest
* UpdateConfigurationSetEventDestinationRequest `object`: UpdateConfigurationSetEventDestinationRequest
  * EventDestination [EventDestinationDefinition](#eventdestinationdefinition)

### UpdateConfigurationSetEventDestinationResponse
* UpdateConfigurationSetEventDestinationResponse `object`: An empty object that indicates that the event destination was updated successfully.

### VoiceMessageContent
* VoiceMessageContent `object`: An object that contains a voice message and information about the recipient that you want to send it to.
  * CallInstructionsMessage [CallInstructionsMessageType](#callinstructionsmessagetype)
  * PlainTextMessage [PlainTextMessageType](#plaintextmessagetype)
  * SSMLMessage [SSMLMessageType](#ssmlmessagetype)

### WordCharactersWithDelimiters
* WordCharactersWithDelimiters `string`

### __string
* __string `string`


