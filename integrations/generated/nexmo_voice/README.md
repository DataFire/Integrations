# @datafire/nexmo_voice

Client library for Voice API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_voice
```
```js
let nexmo_voice = require('@datafire/nexmo_voice').create({
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Voice API lets you create outbound calls, control in-progress calls and get information about historical calls. More information about the Voice API can be found at <https://developer.nexmo.com/voice/voice-api/overview>.

## Actions

### getCalls
Get details of your calls


```js
nexmo_voice.getCalls({}, context)
```

#### Input
* input `object`
  * status `string` (values: started, ringing, answered, machine, completed, busy, cancelled, failed, rejected, timeout, unanswered): Filter by call status
  * date_start `string`: Return the records that occurred after this point in time
  * date_end `string`: Return the records that occurred before this point in time
  * page_size `integer`: Return this amount of records in the response
  * record_index `integer`: Return calls from this index in the response
  * order `string` (values: asc, desc): Either ascending or  descending order.
  * conversation_uuid `string`: Return all the records associated with a specific conversation.

#### Output
* output [GetCallsResponse](#getcallsresponse)

### createCall
Create an outbound Call


```js
nexmo_voice.createCall({}, context)
```

#### Input
* input `object`

#### Output
* output [CreateCallResponse](#createcallresponse)

### getCall
Get detail of a specific call


```js
nexmo_voice.getCall({
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * uuid **required** `string`: UUID of the Call

#### Output
* output [GetCallResponse](#getcallresponse)

### updateCall
Modify an in progress call


```js
nexmo_voice.updateCall({
  "body": null,
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * uuid **required** `string`: UUID of the Call

#### Output
*Output schema unknown*

### startDTMF
Play DTMF tones into a call


```js
nexmo_voice.startDTMF({
  "body": {},
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * body **required** [DTMFRequest](#dtmfrequest)
  * uuid **required** `string`: UUID of the Call Leg

#### Output
* output [DTMFResponse](#dtmfresponse)

### stopStream
Stop playing an audio file into a call


```js
nexmo_voice.stopStream({
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * uuid **required** `string`: UUID of the Call Leg

#### Output
* output [StopStreamResponse](#stopstreamresponse)

### startStream
Play an audio file into a call


```js
nexmo_voice.startStream({
  "body": {
    "stream_url": []
  },
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * body **required** [StartStreamRequest](#startstreamrequest)
  * uuid **required** `string`: UUID of the Call Leg

#### Output
* output [StartStreamResponse](#startstreamresponse)

### stopTalk
Stop text to speech in a call


```js
nexmo_voice.stopTalk({
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * uuid **required** `string`: UUID of the Call Leg

#### Output
* output [StopTalkResponse](#stoptalkresponse)

### startTalk
Play text to speech into a call


```js
nexmo_voice.startTalk({
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * body [StartTalkRequest](#starttalkrequest)
  * uuid **required** `string`: UUID of the Call Leg

#### Output
* output [StartTalkResponse](#starttalkresponse)



## Definitions

### AddressE164
* AddressE164 `string`: The phone number to connect to

### AddressSip
* AddressSip `string`: The SIP URI to connect to

### AddressWebsocket
* AddressWebsocket `string`

### CreateCallRequestAnswerUrl
* CreateCallRequestAnswerUrl
  * answer_method `string` (values: POST, GET): The HTTP method used to send event information to answer_url.
  * answer_url `array`: The webhook endpoint where you provide the [Nexmo Call Control Object](/voice/voice-api/ncco-reference) that governs this call.
    * items `string`
  * event_method `string` (values: POST, GET): The HTTP method used to send event information to `event_url`.
  * event_url `array`: **Required** unless `event_url` is configured at the application
    * items `string`
  * from **required** [EndpointPhoneFrom](#endpointphonefrom)
  * length_timer `integer`: Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered.
  * machine_detection `string` (values: continue, hangup): Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call.
  * ringing_timer `integer`: Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’.
  * to **required** `array`

### CreateCallRequestBase
* CreateCallRequestBase `object`
  * event_method `string` (values: POST, GET): The HTTP method used to send event information to `event_url`.
  * event_url `array`: **Required** unless `event_url` is configured at the application
    * items `string`
  * from **required** [EndpointPhoneFrom](#endpointphonefrom)
  * length_timer `integer`: Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered.
  * machine_detection `string` (values: continue, hangup): Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call.
  * ringing_timer `integer`: Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’.
  * to **required** `array`

### CreateCallRequestNcco
* CreateCallRequestNcco
  * ncco `array`: The [Nexmo Call Control Object](/voice/voice-api/ncco-reference) to use for this call.
    * items `object`
  * event_method `string` (values: POST, GET): The HTTP method used to send event information to `event_url`.
  * event_url `array`: **Required** unless `event_url` is configured at the application
    * items `string`
  * from **required** [EndpointPhoneFrom](#endpointphonefrom)
  * length_timer `integer`: Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered.
  * machine_detection `string` (values: continue, hangup): Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call.
  * ringing_timer `integer`: Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’.
  * to **required** `array`

### CreateCallResponse
* CreateCallResponse `object`
  * conversation_uuid [conversation_uuid](#conversation_uuid)
  * direction [direction](#direction)
  * status [status](#status)
  * uuid [uuid](#uuid)

### DTMFRequest
* DTMFRequest `object`
  * digits `string`: The digits to send

### DTMFResponse
* DTMFResponse `object`
  * message `string`: Description of the action taken
  * uuid [uuid](#uuid)

### EndpointApp
* EndpointApp `object`: Connect to an App User
  * type **required** `string`: The type of connection. Must be `app`
  * user **required** `string`: The username to connect to

### EndpointPhoneFrom
* EndpointPhoneFrom `object`: Connect to a Phone (PSTN) number
  * number **required** [AddressE164](#addresse164)
  * type **required** `string`: The type of connection. Must be `phone`

### EndpointPhoneTo
* EndpointPhoneTo `object`: Connect to a Phone (PSTN) number
  * dtmfAnswer `string`: Provide [DTMF digits](https://developer.nexmo.com/voice/voice-api/guides/dtmf) to send when the call is answered
  * number **required** [AddressE164](#addresse164)
  * type **required** `string`: The type of connection. Must be `phone`

### EndpointSip
* EndpointSip `object`: Connect to a SIP Endpoint
  * type **required** `string`: The type of connection. Must be `sip`
  * uri [AddressSip](#addresssip)

### EndpointVBCExtension
* EndpointVBCExtension `object`: Connect to a VBC extension
  * extension **required** `string`
  * type **required** `string`: The type of connection. Must be `vbc`

### EndpointWebsocket
* EndpointWebsocket `object`: Connect to a Websocket
  * content-type **required** `string` (values: audio/l16;rate=8000, audio/l16;rate=16000)
  * headers `object`: Details of the Websocket you want to connect to
    * customer_id `string`: This is an example header. You can provide any headers you may need
  * type **required** `string`: The type of connection. Must be `websocket`
  * uri [AddressWebsocket](#addresswebsocket)

### GetCallResponse
* GetCallResponse `object`
  * _links `object`
    * self `object`
      * href `string`
  * conversation_uuid [conversation_uuid](#conversation_uuid)
  * direction [direction](#direction)
  * duration [duration](#duration)
  * end_time [end_time](#end_time)
  * from [from](#from)
  * network [network](#network)
  * price [price](#price)
  * rate [rate](#rate)
  * start_time [start_time](#start_time)
  * status [status](#status)
  * to [to](#to)
  * uuid [uuid](#uuid)

### GetCallsResponse
* GetCallsResponse `object`
  * _embedded `object`: A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects
    * calls `array`
      * items [GetCallResponse](#getcallresponse)
  * _links `object`
    * self `object`
      * href `string`
  * count `integer`
  * page_size `integer`
  * record_index `integer`

### RequestTransferActionParam
* RequestTransferActionParam `string` (values: transfer): Transfer the call to a new NCCO

### StartStreamRequest
* StartStreamRequest `object`
  * level `string`: Set the audio level of the stream in the range `-1 >= level <= 1` with a precision of 0.1. The default value is 0.
  * loop `integer`: the number of times to play the file, 0 for infinite
  * stream_url **required** `array`
    * items `string`

### StartStreamResponse
* StartStreamResponse `object`
  * message `string`: Description of the action taken
  * uuid [uuid](#uuid)

### StartTalkRequest
* StartTalkRequest `object`
  * language [language](#language)
  * level `string`: The volume level that the speech is played. This can be any value between `-1` to `1` in `0.1` increments, with `0` being the default.
  * loop `integer`: The number of times to repeat the text the file, 0 for infinite
  * style [style](#style)
  * text **required** `string`: The text to read
  * voice_name [voice_name](#voice_name)

### StartTalkResponse
* StartTalkResponse `object`
  * message `string`: Description of the action taken
  * uuid [uuid](#uuid)

### StopStreamResponse
* StopStreamResponse `object`
  * message `string`: Description of the action taken
  * uuid [uuid](#uuid)

### StopTalkResponse
* StopTalkResponse `object`
  * message `string`: Description of the action taken
  * uuid [uuid](#uuid)

### UpdateCallRequestEarmuff
* Earmuff `object`
  * action `string` (values: earmuff): Prevent the specified UUID from hearing audio

### UpdateCallRequestHangup
* Hangup `object`
  * action `string` (values: hangup): End the call for the specified UUID

### UpdateCallRequestMute
* Mute `object`
  * action `string` (values: mute): Mute the specified UUID

### UpdateCallRequestTransferAnswerUrl
* Transfer with Answer URL `object`
  * action **required** [RequestTransferActionParam](#requesttransferactionparam)
  * destination **required** `object`
    * type **required** `string`: Always `ncco`
    * url **required** `array`: The URL that Vonage makes a request to. Must return an NCCO.
      * items `string`

### UpdateCallRequestTransferNcco
* Transfer with NCCO `object`
  * action **required** [RequestTransferActionParam](#requesttransferactionparam)
  * destination **required** `object`
    * ncco **required** `array`: Refer to the [NCCO Guide](https://developer.nexmo.com/voice/voice-api/ncco-reference) for a description of possible NCCO parameters.
      * items `object`
    * type **required** `string`: Always `ncco`

### UpdateCallRequestUnearmuff
* Unearmuff `object`
  * action `string` (values: unearmuff): Allow the specified UUID to hear audio

### UpdateCallRequestUnmute
* Unmute `object`
  * action `string` (values: mute): Unmute the specified UUID

### conversation_uuid
* The UUID of the Conversation `string`: The unique identifier for the conversation this call leg is part of.

### direction
* direction `string` (values: outbound, inbound): Possible values are `outbound` or `inbound`

### duration
* The Duration of the call  `string`: The time elapsed for the call to take place in seconds. This is only sent if `status` is `completed`.

### end_time
* The End Time of the call  `string`: The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For xample, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`.

### from
* from `object`: The endpoint you called from. Possible values are the same as `to`.
  * number `string`
  * type `string`

### language
* language `string` (values: ar, ca-ES, cmn-CN, cmn-TW, cs-CZ, cy-GB, da-DK, de-DE, el-GR, en-AU, en-GB, en-GB-WLS, en-IN, en-US, en-ZA, es-ES, es-MX, es-US, eu-ES, fi-FI, fil-PH, fr-CA, fr-FR, he-IL, hi-IN, hu-HU, id-ID, is-IS, it-IT, ja-JP, ko-KR, nb-NO, nl-NL, no-NO, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sk-SK, sv-SE, th-TH, tr-TR, uk-UA, vi-VN, yue-CN): The language to use

### network
* The Network ID of the destination  `string`: The Mobile Country Code Mobile Network Code ([MCCMNC](https://en.wikipedia.org/wiki/Mobile_country_code)) for the carrier network used to make this call.

### price
* The total price of the call  `string`: The total price charged for this call. This is only sent if `status` is `completed`.

### rate
* The Price per minute of the called destination `string`: The price per minute for this call. This is only sent if `status` is `completed`.

### start_time
* The Start Time of the call  `string`: The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For example, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`.

### status
* The State of the call `string`: The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects)

### style
* style `integer`: The vocal style (vocal range, tessitura, and timbre) to use

### to
* to `object`: The single or mixed collection of endpoint types you connected to
  * number `string`
  * type `string`

### uuid
* The UUID of the Call Leg `string`: The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls

### voice_name
* voice_name `string` (values: Aditi, Agnieszka, Alva, Amy, Astrid, Bianca, Brian, Carla, Carmen, Carmit, Catarina, Celine, Cem, Chantal, Chipmunk, Conchita, Cristiano, Damayanti, Dora, Emma, Empar, Enrique, Eric, Ewa, Felipe, Filiz, Geraint, Giorgio, Gwyneth, Hans, Henrik, Ines, Ioana, Iveta, Ivy, Jacek, Jan, Jennifer, Joana, Joanna, Joey, Jordi, Justin, Kanya, Karl, Kendra, Kimberly, Laila, Laura, Lea, Lekha, Liv, Lotte, Lucia, Luciana, Mads, Maged, Maja, Mariska, Marlene, Mathieu, Matthew, Maxim, Mei-Jia, Melina, Mia, Miguel, Miren, Mizuki, Montserrat, Naja, Nicole, Nikos, Nora, Oskar, Penelope, Raveena, Ricardo, Ruben, Russell, Salli, Satu, Seoyeon, Sin-Ji, Sora, Takumi, Tarik, Tatyana, Tessa, Tian-Tian, Vicki, Vitoria, Yelda, Zeina, Zhiyu, Zuzana): <strong>DEPRECATED</strong> The voice & language to use


