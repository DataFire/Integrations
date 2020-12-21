# @datafire/nexmo_conversion

Client library for Nexmo Conversion API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_conversion
```
```js
let nexmo_conversion = require('@datafire/nexmo_conversion').create({
  apiKey: "",
  apiSecret: "",
  apiSig: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Conversion API allows you to tell Nexmo about the reliability of your 2FA communications. Sending conversion data back to us means that Nexmo can deliver messages faster and more reliably.
The conversion data you send us is confidential: Nexmo does not share it with third parties.
In order to identify the carriers who provide the best performance, Nexmo continually tests the routes we use to deliver SMS and voice calls. Using Adaptive Routing™, Nexmo actively reroutes messages through different carrier routes and ensures faster and more reliable delivery for your messages. The route choice is made using millions of real-time conversion data points.

## Actions

### smsConversion
Send a Conversion API request with information about the SMS message identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.


```js
nexmo_conversion.smsConversion({
  "message-id": "",
  "delivered": null,
  "timestamp": ""
}, context)
```

#### Input
* input `object`
  * message-id **required** `string`: The ID you receive in the response to a request. * From the Verify API - use the `event_id` in the response to Verify Check. * From the SMS API - use the `message-id` * From the Text-To-Speech API - use the `call-id` * From the Text-To-Speech-Prompt API - use the `call-id`
  * delivered **required** `boolean` (values: true, false, 0, 1): Set to _true_ if your user replied to the message you sent. Otherwise, set to _false_.
  * timestamp **required** `string`: When the user completed your call-to-action (e.g. visited your website, installed your app) in [UTC±00:00](https://en.wikipedia.org/wiki/UTC%C2%B100:00) format: _yyyy-MM-dd HH:mm:ss_.

#### Output
*Output schema unknown*

### voiceConversion
Send a Conversion API request with information about the Call or Text-To-Speech identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.


```js
nexmo_conversion.voiceConversion({
  "message-id": "",
  "delivered": null,
  "timestamp": ""
}, context)
```

#### Input
* input `object`
  * message-id **required** `string`: The ID you receive in the response to a request. * From the Verify API - use the `event_id` in the response to Verify Check. * From the SMS API - use the `message-id` * From the Text-To-Speech API - use the `call-id` * From the Text-To-Speech-Prompt API - use the `call-id`
  * delivered **required** `boolean` (values: true, false, 0, 1): Set to _true_ if your user replied to the message you sent. Otherwise, set to _false_.
  * timestamp **required** `string`: When the user completed your call-to-action (e.g. visited your website, installed your app) in [UTC±00:00](https://en.wikipedia.org/wiki/UTC%C2%B100:00) format: _yyyy-MM-dd HH:mm:ss_.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
