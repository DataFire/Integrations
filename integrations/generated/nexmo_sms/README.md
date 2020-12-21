# @datafire/nexmo_sms

Client library for SMS API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_sms
```
```js
let nexmo_sms = require('@datafire/nexmo_sms').create();

.then(data => {
  console.log(data);
});
```

## Description

With the SMS API you can send SMS from your account and lookup messages both messages that you've sent as well as messages sent to your virtual numbers. Numbers are specified in E.164 format. More SMS API documentation is at <https://developer.nexmo.com/messaging/sms/overview>

## Actions

### format.post
Send an outbound SMS from your Vonage account


```js
nexmo_sms.format.post({
  "format": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml): The format of the response

#### Output
*Output schema unknown*



## Definitions

### DeliveryReceipt
* DeliveryReceipt `object`
  * api-key `string`: The API key that sent the SMS. This is useful when multiple accounts are sending webhooks to the same endpoint.
  * client-ref `string`: If the `client-ref` is set when the SMS is sent, it will be included in the delivery receipt
  * err-code `string`: The status of the request. Will be a non `0` value if there has been an error, or if the status is unknown. See the [Delivery Receipt documentation](/messaging/sms/guides/delivery-receipts#dlr-error-codes) for more details
  * message-timestamp `string`: The time when Vonage started to push this Delivery Receipt to your webhook endpoint.
  * messageId `string`: The Vonage ID for this message.
  * msisdn `string`: The number the message was sent to. Numbers are specified in E.164 format.
  * network-code `string`: The Mobile Country Code Mobile Network Code (MCCMNC) of the carrier this phone number is registered with.
  * nonce `string`: A random string to be used when calculating the signature. _Only included if you have signatures enabled_
  * price `string`: The cost of the message
  * scts `string`: When the DLR was received from the carrier in the following format `YYMMDDHHMM`. For example, `2001011400` is at `2020-01-01 14:00`
  * sig `string`: The signature to enable verification of the source of this webhook. Please see the [developer documentation for validating signatures](/concepts/guides/signing-messages) for more information, or use one of our published SDKs. _Only included if you have signatures enabled_
  * status `string`: A code that explains where the message is in the delivery process.
  * timestamp `string`: A timestamp in Unix (seconds since the epoch) format. _Only included if you have signatures enabled_
  * to `string`: The SenderID you set in `from` in your request.

### Error
* Error `object`: Error
  * message-count `string`: The amount of messages in the request
  * messages `array`
    * items [ErrorMessage](#errormessage)

### ErrorMessage
* ErrorMessage `object`
  * error-text `string`: The description of the error
  * status `string`: The error status of the message

### ErrorXml
* ErrorXml `object`: Error
  * messages `array`
    * items [ErrorMessage](#errormessage)

### InboundMessage
* InboundMessage `object`
  * api-key **required** `string`: The Vonage API Key of the receiving account.
  * concat `string`: True - if this is a concatenated message. This field does not exist if it is a single message
  * concat-part `string`: The number of this part in the message. Counting starts at 1.
  * concat-ref `string`: The transaction reference. All parts of this message share this value.
  * concat-total `string`: The number of parts in this concatenated message.
  * data `string`: The content of this message, if type is binary.
  * keyword **required** `string`: The first word in the message body. Converted to upper case.
  * message-timestamp **required** `string`: The time when Vonage started to push this Delivery Receipt to your webhook endpoint.
  * messageId **required** `string`: The ID of the message
  * msisdn **required** `string`: The phone number that this inbound message was sent from. Numbers are specified in E.164 format.
  * nonce `string`: A random string that forms part of the signed set of parameters, it adds an extra element of unpredictability into the signature for the request. You use the nonce and timestamp parameters with your shared secret to calculate and validate the signature for inbound messages.
  * text **required** `string`: The message body for this inbound message.
  * timestamp `string`: A unix timestamp representation of message-timestamp.
  * to **required** `string`: The phone number the message was sent to. **This is your virtual number**. Numbers are specified in E.164 format.
  * type **required** `string`: Possible values are:
  * udh `string`: The hex encoded User Data Header, if type is binary

### Message
* Message `object`
  * account-ref `string`: **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com)
  * client-ref `string`: If a `client-ref` was included when sending the SMS, this field will be included and hold the value that was sent.
  * message-id `string`: The ID of the message
  * message-price `string`: The cost of the message
  * network `string`: The ID of the network of the recipient
  * remaining-balance `string`: Your remaining balance
  * status `string`: The status of the message. See [Troubleshooting Failed SMS](/messaging/sms/guides/troubleshooting-sms).
  * to `string`: The number the message was sent to. Numbers are specified in E.164 format.

### NewMessage
* NewMessage `object`
  * account-ref `string`: **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com)
  * api_key **required** `string`: Your API key
  * api_secret `string`: Your API secret. Required unless `sig` is provided
  * body `string`: **Advanced**: Hex encoded binary data. Depends on `type` parameter having the value `binary`.
  * callback `string`: **Advanced**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard.
  * client-ref `string`: **Advanced**: You can optionally include your own reference of up to 40 characters.
  * from **required** `string`: The name or number the message should be sent from. Alphanumeric senderID's are not supported in all countries, see [Global Messaging](/messaging/sms/guides/global-messaging#country-specific-features) for more details. If alphanumeric, spaces will be ignored. Numbers are specified in E.164 format.
  * message-class `integer` (values: 0, 1, 2, 3): **Advanced**: The Data Coding Scheme value of the message
  * protocol-id `integer`: **Advanced**: The value of the [protocol identifier](https://en.wikipedia.org/wiki/GSM_03.40#Protocol_Identifier) to use. Ensure that the value is aligned with `udh`.
  * sig `string`: The hash of the request parameters in alphabetical order, a timestamp and the signature secret. See [Signing Requests](/concepts/guides/signing-messages) for more details.
  * status-report-req `boolean`: **Advanced**: Boolean indicating if you like to receive a [Delivery Receipt](/messaging/sms/building-blocks/receive-a-delivery-receipt).
  * text `string`: The body of the message being sent. If your message contains characters that can be encoded according to the GSM Standard and Extended tables then you can set the `type` to `text`. If your message contains characters outside this range, then you will need to set the `type` to `unicode`.
  * title `string`: **Advanced**: The title for a wappush SMS. Depends on `type` parameter having the value `wappush`.
  * to **required** `string`: The number that the message should be sent to. Numbers are specified in E.164 format.
  * ttl `integer`: **Advanced**: The duration in milliseconds the delivery of an SMS will be attempted.§§ By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes.
  * type `string` (values: text, binary, wappush, unicode, vcal, vcard): **Advanced**: The format of the message body
  * udh `string`: **Advanced**: Your custom Hex encoded [User Data Header](https://en.wikipedia.org/wiki/User_Data_Header). Depends on `type` parameter having the value `binary`.
  * url `string`: **Advanced**: The URL of your website. Depends on `type` parameter having the value `wappush`.
  * validity `string`: **Advanced**: The availability for an SMS in milliseconds. Depends on `type` parameter having the value `wappush`.
  * vcal `string`: **Advanced**: A calendar event in [vCal format](https://en.wikipedia.org/wiki/VCal). Depends on `type` parameter having the value `vcal`.
  * vcard `string`: **Advanced**: A business card in [vCard format](https://en.wikipedia.org/wiki/VCard). Depends on `type` parameter having the value `vcard`.

### SMS
* SMS `object`: Message sent
  * message-count `string`: The amount of messages in the request
  * messages `array`
    * items [Message](#message)

### SMSXml
* SMSXml `object`: Message sent
  * messages `array`
    * count `integer`
    * items [Message](#message)


