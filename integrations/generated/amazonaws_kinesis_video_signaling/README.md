# @datafire/amazonaws_kinesis_video_signaling

Client library for Amazon Kinesis Video Signaling Channels

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_kinesis_video_signaling
```
```js
let amazonaws_kinesis_video_signaling = require('@datafire/amazonaws_kinesis_video_signaling').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Kinesis Video Streams Signaling Service is a intermediate service that establishes a communication channel for discovering peers, transmitting offers and answers in order to establish peer-to-peer connection in webRTC technology.

## Actions

### GetIceServerConfig



```js
amazonaws_kinesis_video_signaling.GetIceServerConfig({
  "ChannelARN": ""
}, context)
```

#### Input
* input `object`
  * ChannelARN **required** `string`: The ARN of the signaling channel to be used for the peer-to-peer connection between configured peers. 
  * ClientId `string`: Unique identifier for the viewer. Must be unique within the signaling channel.
  * Service `string` (values: TURN): Specifies the desired service. Currently, <code>TURN</code> is the only valid value.
  * Username `string`: An optional user ID to be associated with the credentials.

#### Output
* output [GetIceServerConfigResponse](#geticeserverconfigresponse)

### SendAlexaOfferToMaster



```js
amazonaws_kinesis_video_signaling.SendAlexaOfferToMaster({
  "ChannelARN": "",
  "SenderClientId": "",
  "MessagePayload": ""
}, context)
```

#### Input
* input `object`
  * ChannelARN **required** `string`: The ARN of the signaling channel by which Alexa and the master peer communicate.
  * MessagePayload **required** `string`: The base64-encoded SDP offer content.
  * SenderClientId **required** `string`: The unique identifier for the sender client.

#### Output
* output [SendAlexaOfferToMasterResponse](#sendalexaoffertomasterresponse)



## Definitions

### Answer
* Answer `string`

### ClientId
* ClientId `string`

### ClientLimitExceededException


### GetIceServerConfigRequest
* GetIceServerConfigRequest `object`
  * ChannelARN **required**
  * ClientId
  * Service
  * Username

### GetIceServerConfigResponse
* GetIceServerConfigResponse `object`
  * IceServerList
    * items [IceServer](#iceserver)

### IceServer
* IceServer `object`: A structure for the ICE server connection data.
  * Password
  * Ttl
  * Uris
    * items [Uri](#uri)
  * Username

### IceServerList
* IceServerList `array`
  * items [IceServer](#iceserver)

### InvalidArgumentException


### InvalidClientException


### MessagePayload
* MessagePayload `string`

### NotAuthorizedException


### Password
* Password `string`

### ResourceARN
* ResourceARN `string`

### ResourceNotFoundException


### SendAlexaOfferToMasterRequest
* SendAlexaOfferToMasterRequest `object`
  * ChannelARN **required**
  * MessagePayload **required**
  * SenderClientId **required**

### SendAlexaOfferToMasterResponse
* SendAlexaOfferToMasterResponse `object`
  * Answer

### Service
* Service `string` (values: TURN)

### SessionExpiredException


### Ttl
* Ttl `integer`

### Uri
* Uri `string`

### Uris
* Uris `array`
  * items [Uri](#uri)

### Username
* Username `string`


