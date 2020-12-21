# @datafire/ably

Client library for Ably REST API

## Installation and Usage
```bash
npm install --save @datafire/ably
```
```js
let ably = require('@datafire/ably').create({
  username: "",
  password: "",
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The [REST API specification](https://www.ably.io/documentation/rest-api) for Ably.

## Actions

### getMetadataOfAllChannels
Enumerate all active channels of the application


```js
ably.getMetadataOfAllChannels({}, context)
```

#### Input
* input `object`
  * limit `integer`
  * prefix `string`: Optionally limits the query to only those channels whose name starts with the given prefix
  * by `string` (values: value, id): optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
*Output schema unknown*

### getMetadataOfChannel
Get metadata of a channel


```js
ably.getMetadataOfChannel({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: The [Channel's ID](https://www.ably.io/documentation/rest/channels).
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output [ChannelDetails](#channeldetails)

### getMessagesByChannel
Get message history for a channel


```js
ably.getMessagesByChannel({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: The [Channel's ID](https://www.ably.io/documentation/rest/channels).
  * start `string`
  * limit `integer`
  * end `string`
  * direction `string` (values: forwards, backwards)
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output `array`
  * items [Message](#message)

### publishMessagesToChannel
Publish a message to the specified channel


```js
ably.publishMessagesToChannel({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: The [Channel's ID](https://www.ably.io/documentation/rest/channels).
  * body [Message](#message)
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output `object`
  * channel `string`
  * messageId `string`

### getPresenceOfChannel
Get presence on a channel


```js
ably.getPresenceOfChannel({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: The [Channel's ID](https://www.ably.io/documentation/rest/channels).
  * clientId `string`
  * connectionId `string`
  * limit `integer`
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output `array`
  * items [PresenceMessage](#presencemessage)

### getPresenceHistoryOfChannel
Get presence on a channel


```js
ably.getPresenceHistoryOfChannel({
  "channel_id": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `string`: The [Channel's ID](https://www.ably.io/documentation/rest/channels).
  * start `string`
  * limit `integer`
  * end `string`
  * direction `string` (values: forwards, backwards)
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output `array`
  * items [PresenceMessage](#presencemessage)

### requestAccessToken
This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.


```js
ably.requestAccessToken({
  "keyName": ""
}, context)
```

#### Input
* input `object`
  * keyName **required** `string`: The [key name](https://www.ably.io/documentation/rest-api/token-request-spec#api-key-format) comprises of the app ID and key ID of an API key.
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output [TokenDetails](#tokendetails)

### deletePushDeviceDetails
Delete a device details object.


```js
ably.deletePushDeviceDetails({}, context)
```

#### Input
* input `object`
  * channel `string`: Filter to restrict to subscriptions associated with that channel.
  * deviceId `string`: Must be set when clientId is empty, cannot be used with clientId.
  * clientId `string`: Must be set when deviceId is empty, cannot be used with deviceId.
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
*Output schema unknown*

### getPushSubscriptionsOnChannels
Get a list of push notification subscriptions to channels.


```js
ably.getPushSubscriptionsOnChannels({}, context)
```

#### Input
* input `object`
  * channel `string`: Filter to restrict to subscriptions associated with that channel.
  * deviceId `string`: Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.
  * clientId `string`: Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.
  * limit `integer`: The maximum number of records to return.
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output [DeviceDetails](#devicedetails)

### subscribePushDeviceToChannel
Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.


```js
ably.subscribePushDeviceToChannel({}, context)
```

#### Input
* input `object`
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
*Output schema unknown*

### getChannelsWithPushSubscribers
Returns a paginated response of channel names.


```js
ably.getChannelsWithPushSubscribers({}, context)
```

#### Input
* input `object`
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output `array`
  * items `string`

### unregisterAllPushDevices
Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.


```js
ably.unregisterAllPushDevices({}, context)
```

#### Input
* input `object`
  * deviceId `string`: Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.
  * clientId `string`: Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
*Output schema unknown*

### getRegisteredPushDevices
List of device details of devices registed for push notifications.


```js
ably.getRegisteredPushDevices({}, context)
```

#### Input
* input `object`
  * deviceId `string`: Optional filter to restrict to devices associated with that deviceId.
  * clientId `string`: Optional filter to restrict to devices associated with that clientId.
  * limit `integer`: The maximum number of records to return.
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output [DeviceDetails](#devicedetails)

### registerPushDevice
Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.


```js
ably.registerPushDevice({}, context)
```

#### Input
* input `object`
  * body [DeviceDetails](#devicedetails)
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output [DeviceDetails](#devicedetails)

### unregisterPushDevice
Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.


```js
ably.unregisterPushDevice({
  "device_id": ""
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: Device's ID.
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
*Output schema unknown*

### getPushDeviceDetails
Get the full details of a device.


```js
ably.getPushDeviceDetails({
  "device_id": ""
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: Device's ID.
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output [DeviceDetails](#devicedetails)

### patchPushDeviceDetails
Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.


```js
ably.patchPushDeviceDetails({
  "device_id": ""
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: Device's ID.
  * body [DeviceDetails](#devicedetails)
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output [DeviceDetails](#devicedetails)

### putPushDeviceDetails
Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.


```js
ably.putPushDeviceDetails({
  "device_id": ""
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: Device's ID.
  * body [DeviceDetails](#devicedetails)
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output [DeviceDetails](#devicedetails)

### updatePushDeviceDetails
Gets an updated device details object.


```js
ably.updatePushDeviceDetails({
  "device_id": ""
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: Device's ID.
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output [DeviceDetails](#devicedetails)

### publishPushNotificationToDevices
A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.


```js
ably.publishPushNotificationToDevices({}, context)
```

#### Input
* input `object`
  * body `object`
    * push [Push](#push)
    * recipient **required** [Recipient](#recipient)
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
*Output schema unknown*

### getStats
The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.


```js
ably.getStats({}, context)
```

#### Input
* input `object`
  * start `string`
  * limit `integer`
  * end `string`
  * direction `string` (values: forwards, backwards)
  * unit `string` (values: minute, hour, day, month): Specifies the unit of aggregation in the returned results.
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output `object`

### getTime
This returns the service time in milliseconds since the epoch.


```js
ably.getTime({}, context)
```

#### Input
* input `object`
  * X-Ably-Version `string`: The version of the API you wish to use.
  * format `string` (values: json, jsonp, msgpack, html): The response format you would like

#### Output
* output `array`
  * items `integer`



## Definitions

### ChannelDetails
* ChannelDetails `object`
  * channelId **required** `string`: The required name of the channel including any qualifier, if any.
  * isGlobalMaster `boolean`: In events relating to the activity of a channel in a specific region, this optionally identifies whether or not that region is responsible for global coordination of the channel.
  * region `string`: In events relating to the activity of a channel in a specific region, this optionally identifies the region.
  * status [ChannelStatus](#channelstatus)

### ChannelStatus
* ChannelStatus `object`: A ChannelStatus instance.
  * isActive **required** `boolean`: A required boolean value indicating whether the channel that is the subject of the event is active. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
  * occupancy [Occupancy](#occupancy)

### DeviceDetails
* DeviceDetails `object`
  * clientId `string`: Optional trusted client identifier for the device.
  * deviceSecret `string`: Secret value for the device.
  * formFactor `string` (values: phone, tablet, desktop, tv, watch, car, embedded): Form factor of the push device.
  * id `string`: Unique identifier for the device generated by the device itself.
  * metadata `object`: Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.
  * platform `string` (values: ios, android): Platform of the push device.
  * push.recipient [Recipient](#recipient)
  * push.state `string` (values: Active, Failing, Failed): the current state of the push device.

### Error
* Error `object`: Returned error from failed REST.
  * code `integer`: Error code.
  * href `string`: Link to help with error.
  * message `string`: Message explaining the error's cause.
  * serverId `string`: Server ID with which error was encountered.
  * statusCode `integer`: Status error code.

### Extras
* Extras `object`: Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
  * push [Push](#push)

### Message
* Message `object`: Message object.
  * clientId `string`: The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.
  * connectionId `string`: The connection ID of the publisher of this message.
  * data `string`: The string encoded payload, with the encoding specified below.
  * encoding `string`: This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.
  * extras [Extras](#extras)
  * id `string`: A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).
  * name `string`: The event name, if provided.
  * timestamp `integer`: Timestamp when the message was received by the Ably, as milliseconds since the epoch.

### Notification
* Notification `object`
  * body `string`: Text below title on the expanded notification.
  * collapseKey `string`: Platform-specific, used to group notifications together.
  * icon `string`: Platform-specific icon for the notification.
  * sound `string`: Platform-specific sound for the notification.
  * title `string`: Title to display at the notification.

### Occupancy
* Occupancy `object`: An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
  * presenceConnections `integer`: The number of connections that are authorised to enter members into the presence channel.
  * presenceMembers `integer`: The number of members currently entered into the presence channel.
  * presenceSubscribers `integer`: The number of connections that are authorised to subscribe to presence messages.
  * publishers `integer`: The number of connections attached to the channel that are authorised to publish.
  * subscribers `integer`: The number of connections attached that are authorised to subscribe to messages.

### PresenceMessage
* PresenceMessage `object`
  * action `string` (values: ABSENT, PRESENT, ENTER, LEAVE, UPDATE): The event signified by a PresenceMessage.
  * clientId `string`: The client ID of the publisher of this presence update.
  * connectionId `string`: The connection ID of the publisher of this presence update.
  * data `string`: The presence update payload, if provided.
  * encoding `string`: This will typically be empty as all presence updates received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.
  * extras [Extras](#extras)
  * id `string`: Unique ID assigned by Ably to this presence update.
  * timestamp `integer`: Timestamp when the presence update was received by Ably, as milliseconds since the epoch.

### Push
* Push `object`
  * apns `object`: Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
    * notification [Notification](#notification)
  * data `string`: Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example).
  * fcm `object`: Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
    * notification [Notification](#notification)
  * notification [Notification](#notification)
  * web `object`: Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
    * notification [Notification](#notification)

### Recipient
* Recipient `object`: Push recipient details for a device.
  * clientId `string`: Client ID of recipient
  * deviceId `string`: Client ID of recipient
  * deviceToken `string`: when using APNs, specifies the required device token.
  * registrationToken `string`: when using GCM or FCM, specifies the required registration token.
  * transportType `string` (values: apns, fcm, gcm): Defines which push platform is being used.

### SignedTokenRequest
* SignedTokenRequest
  * capability **required** `object`: The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.
  * clientId `string`: The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used.
  * keyName **required** `string`: Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key.
  * nonce **required** `string`: An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused.
  * timestamp **required** `integer`: Time of creation of the Ably TokenRequest.
  * mac **required** `string`: A signature, generated as an HMAC of each of the above components, using the key secret value.

### TokenDetails
* TokenDetails `object`
  * capability `string`: Regular expression representation of the capabilities of the token.
  * expires `integer`: Timestamp of token expiration.
  * issued `integer`: Timestamp of token creation.
  * keyName `string`: Name of the key used to create the token
  * token `string`: The Ably Token.

### TokenRequest
* TokenRequest `object`
  * capability **required** `object`: The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.
  * clientId `string`: The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used.
  * keyName **required** `string`: Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key.
  * nonce **required** `string`: An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused.
  * timestamp **required** `integer`: Time of creation of the Ably TokenRequest.


