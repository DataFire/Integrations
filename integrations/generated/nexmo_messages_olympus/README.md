# @datafire/nexmo_messages_olympus

Client library for Messages API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_messages_olympus
```
```js
let nexmo_messages_olympus = require('@datafire/nexmo_messages_olympus').create({
  username: "",
  password: "",
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Messages API enables you to send messages to customers via their preferred channels (currently Facebook Messenger, WhatsApp, Viber, and SMS/MMS) using a single API. The Messages API is currently in Beta.

## Actions

### NewMessage
Send a Message over SMS, WhatsApp, Viber, Facebook Messenger, or MMS


```js
nexmo_messages_olympus.NewMessage({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [message](#message)

#### Output
* output [Response](#response)



## Definitions

### Error
* Error `object`: The error format is standardized to the 4xx/5xx range with a code and a human readable explanation.
  * detail **required** `string`
  * instance **required** `string`
  * title **required** `string`
  * type **required** `string`

### FromProperty
* FromProperty `object`
  * id `string`: Your ID for the platform that you are sending from.
  * number `string`: **SMS**: The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
  * type **required** `string` (values: sms, viber_service_msg, messenger, whatsapp, mms): The type of message that you want to send.

### MessageStatus
* MessageStatus `object`
  * client_ref `string`: The client's reference.
  * error `object`
    * code `integer`: The error code. See [our errors list](/api-errors/messages-olympus) for a list of possible errors
    * reason `string`: Text describing the error. See [our errors list](/api-errors/messages-olympus) for a list of possible errors
  * from **required** [FromProperty](#fromproperty)
  * message_uuid **required** `string`: The UUID of the message.
  * status **required** `string` (values: submitted, delivered, read, rejected, undeliverable): The status of the message. The `read` message status is available for `messenger`, `whatsapp` and `viber`.
  * timestamp **required** [TimestampProperty](#timestampproperty)
  * to **required** [ToProperty](#toproperty)
  * usage `object`
    * currency `string` (values: EUR): The charge currency in ISO 4217 format.
    * price `string`: The charge amount as a stringified number.

### Response
* Response `object`
  * message_uuid **required** `string`: The UUID of the message.

### Sms
* Sms
  * client_ref [client_ref](#client_ref)
  * from **required** `object`
    * number **required** `string`: The Vonage Virtual number the message is originating from in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
    * type **required** `string` (values: sms): The channel the message is coming from
  * message **required** `object`
    * content **required** `object`
      * text **required** `string`: Limited to 1000 characters. The Messages API automatically detects unicode characters when sending SMS and sends the message as a unicode SMS. For more information on how concatenation and encoding please visit: developer.nexmo.com/messaging/sms/guides/concatenation-and-encoding.
      * type **required** `string` (values: text): The content type of the message
  * to **required** `object`
    * number **required** [toNumber](#tonumber)
    * type **required** `string` (values: sms): The channel the message is going to.

### SmsCommon
* SmsCommon `object`
  * from **required** `object`
    * number **required** `string`: The Vonage Virtual number the message is originating from in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
    * type **required** `string` (values: sms): The channel the message is coming from
  * message **required** `object`
    * content **required** `object`
      * text **required** `string`: Limited to 1000 characters. The Messages API automatically detects unicode characters when sending SMS and sends the message as a unicode SMS. For more information on how concatenation and encoding please visit: developer.nexmo.com/messaging/sms/guides/concatenation-and-encoding.
      * type **required** `string` (values: text): The content type of the message
  * to **required** `object`
    * number **required** [toNumber](#tonumber)
    * type **required** `string` (values: sms): The channel the message is going to.

### TimestampProperty
* TimestampProperty `string`: The datetime of when the event occurred.

### ToProperty
* ToProperty `object`
  * id `string`: **Messenger**: The ID of the message recipient. This value should be the `from.id` value you received in the inbound messenger event.
  * number `string`: **SMS**, **Viber**, **WhatsApp** or **MMS**: 
  * type **required** `string` (values: sms, viber_service_msg, messenger, whatsapp, mms): The type of message that you want to send.

### audioMessageFacebook
* audioMessageFacebook `object`
  * message **required** `object`
    * content **required** [audioMessageFacebookContent](#audiomessagefacebookcontent)
    * messenger [messenger](#messenger)

### audioMessageFacebookContent
* audioMessageFacebookContent `object`
  * audio **required** `object`: The audio content being sent to the recipient.
    * url **required** `string`: The URL of the audio attachment. Supports .mp3.
  * type **required** `string` (values: audio): The type of message being sent.

### audioMessageFacebookInbound
* audioMessageFacebookInbound `object`
  * message **required** `object`
    * content **required** [audioMessageFacebookContent](#audiomessagefacebookcontent)

### audioMessageWhatsApp
* audioMessageWhatsApp `object`
  * message **required** `object`
    * content **required** `object`
      * audio **required** `object`: The audio content object for the request
        * url **required** `string`: The publicly accessible URL of the audio attachment. The audio file is available for 48 hours after it is created.
      * type **required** `string` (values: audio): the type of message that you are sending

### channelOptionsFacebook
* channelOptionsFacebook
  * from **required** `object`
    * id **required** `string`: This value should be the `to.id` value you received in the inbound messenger event. Can also be found using your [account dashboard](https://dashboard.nexmo.com/applications/) when trying to link external accounts to your applications.
    * type **required** `string` (values: messenger): The channel that you are sending from
  * to **required** `object`
    * id **required** `string`: The ID of the Message recipient. This value should be the `from.id` value you receive on an inbound message from messenger
    * type **required** `string` (values: messenger): The channel that you are sending to
  * client_ref [client_ref](#client_ref)

### channelOptionsFacebookCommon
* channelOptionsFacebookCommon `object`
  * from **required** `object`
    * id **required** `string`: This value should be the `to.id` value you received in the inbound messenger event. Can also be found using your [account dashboard](https://dashboard.nexmo.com/applications/) when trying to link external accounts to your applications.
    * type **required** `string` (values: messenger): The channel that you are sending from
  * to **required** `object`
    * id **required** `string`: The ID of the Message recipient. This value should be the `from.id` value you receive on an inbound message from messenger
    * type **required** `string` (values: messenger): The channel that you are sending to

### channelOptionsInboundViberCommon
* channelOptionsInboundViberCommon `object`
  * from **required** `object`
    * number **required** `string`: The Viber number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.            
    * type **required** `string` (values: viber_service_msg): The channel your message will be coming from.
  * to **required** `object`
    * id **required** `string`: This is your Service Message ID given to you by Vonage Account Manager. To find out more please visit [vonage.com/products/messages](https://www.vonage.com/communications-apis/messages/).
    * type **required** `string` (values: viber_service_msg): The channel you are sending to

### channelOptionsViber
* channelOptionsViber
  * from **required** `object`
    * id **required** `string`: This is your Service Message ID given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).
    * type **required** `string` (values: viber_service_msg): The channel your message will be coming from.
  * to **required** `object`
    * number **required** `string`: The Viber number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
    * type **required** `string` (values: viber_service_msg): The channel you are sending to
  * client_ref [client_ref](#client_ref)

### channelOptionsViberCommon
* channelOptionsViberCommon `object`
  * from **required** `object`
    * id **required** `string`: This is your Service Message ID given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).
    * type **required** `string` (values: viber_service_msg): The channel your message will be coming from.
  * to **required** `object`
    * number **required** `string`: The Viber number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
    * type **required** `string` (values: viber_service_msg): The channel you are sending to

### channelOptionsWhatsapp
* channelOptionsWhatsapp
  * from **required** `object`
    * number **required** `string`: WhatsApp Number the message is to be sent from.
    * type **required** `string` (values: whatsapp): Channel the message is going to be sent from.
  * to **required** `object`
    * number **required** `string`: The WhatsApp number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
    * type **required** `string` (values: whatsapp): Channel the message is going to
  * client_ref [client_ref](#client_ref)

### channelOptionsWhatsappCommon
* channelOptionsWhatsappCommon `object`
  * from **required** `object`
    * number **required** `string`: WhatsApp Number the message is to be sent from.
    * type **required** `string` (values: whatsapp): Channel the message is going to be sent from.
  * to **required** `object`
    * number **required** `string`: The WhatsApp number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
    * type **required** `string` (values: whatsapp): Channel the message is going to

### client_ref
* client_ref `string`: client reference up to 40 characters, the reference will be present in every message status

### fileMessageFacebook
* fileMessageFacebook `object`
  * message **required** `object`
    * content **required** [fileMessageFacebookContent](#filemessagefacebookcontent)
    * messenger [messenger](#messenger)

### fileMessageFacebookContent
* fileMessageFacebookContent `object`
  * file **required** `object`: The file content being sent to the recipient.
    * url **required** `string`: The URL of the file attachment. Supports .zip, .csv, and .pdf
  * type **required** `string` (values: file): The type of message being sent.

### fileMessageFacebookInbound
* fileMessageFacebookInbound `object`
  * message **required** `object`
    * content **required** [fileMessageFacebookContent](#filemessagefacebookcontent)

### fileMessageWhatsApp
* fileMessageWhatsApp `object`
  * message **required** `object`
    * content **required** `object`
      * file **required** `object`: The file content object to be sent.
        * url **required** `string`: The publicly accessible URL of the file to be sent. Supports .pdf, .doc(x), .ppt(x), and .xls(x)
      * type **required** `string` (values: file): The type of message that you are sending.

### imageMessageFacebook
* imageMessageFacebook `object`
  * message **required** `object`
    * content **required** [imageMessageFacebookContent](#imagemessagefacebookcontent)
    * messenger [messenger](#messenger)

### imageMessageFacebookContent
* imageMessageFacebookContent `object`
  * image **required** `object`: The image content being sent to the recipient.
    * url **required** `string`: The URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, .png, and .gif
  * type **required** `string` (values: image): The type of message being sent.

### imageMessageFacebookInbound
* imageMessageFacebookInbound `object`
  * message **required** `object`
    * content **required** [imageMessageFacebookContent](#imagemessagefacebookcontent)

### imageMessageViber
* imageMessageViber `object`
  * message **required** `object`
    * content **required** [imageMessageViberContent](#imagemessagevibercontent)
    * viber_service_msg [viber_service_msg](#viber_service_msg)

### imageMessageViberContent
* imageMessageViberContent `object`
  * image **required** `object`: Image content to be sent
    * url **required** `string`: Publicly accessible URL of the image to be attached. The image file is available for 48 hours after it's created. Supports .jpg, .jpeg, and .png.
  * type **required** `string` (values: image): The type of message being sent

### imageMessageViberInbound
* imageMessageViberInbound `object`
  * message **required** `object`
    * content **required** [imageMessageViberContent](#imagemessagevibercontent)

### imageMessageWhatsApp
* imageMessageWhatsApp `object`
  * message **required** `object`
    * content **required** `object`
      * image **required** `object`: image content object
        * caption `string`: Additional text to accompany the image.
        * url **required** `string`: The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png
      * type **required** `string` (values: image): The type of message that you are sending

### inbound-common
* inbound-common `object`
  * message_uuid **required** `string`: The UUID of the message.
  * timestamp **required** `string`: The datetime of when the event occurred.

### inbound-message


### locationMessageWhatsApp
* locationMessageWhatsApp `object`
  * message **required** `object`
    * content **required** `object`
      * location **required** `object`: location content object
        * address `string`: The address of the location, only displays if name is present
        * latitude **required** `string`: The latitude of the location
        * longitude **required** `string`: The longitude of the location
        * name `string`: Name of the Location.
      * type **required** `string` (values: location): The type of message that you are sending

### message


### messenger
* messenger `object`
  * category `string` (values: response, update, message_tag): The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
  * tag `string`: A full list of the possible tags is available on [developers.facebook.com](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)

### mmsMessage
* mmsMessage
  * from **required** `object`
    * number **required** `string`: A US shortcode
    * type **required** `string` (values: mms): The channel the message is coming from
  * message **required** `object`
    * content **required** `object`
      * image **required** `object`
        * url **required** `string`: The URL of the image attachment. The image file is available for 48 hours after it is created. Supported file types are .jpg, .jpeg, .png, and .gif
      * type **required** `string` (values: image): The type of message to be sent
  * to **required** `object`
    * number **required** `string`: The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
    * type **required** `string` (values: mms): The channel the message is going to
  * client_ref [client_ref](#client_ref)

### mmsMessageCommon
* mmsMessageCommon `object`
  * from **required** `object`
    * number **required** `string`: A US shortcode
    * type **required** `string` (values: mms): The channel the message is coming from
  * message **required** `object`
    * content **required** `object`
      * image **required** `object`
        * url **required** `string`: The URL of the image attachment. The image file is available for 48 hours after it is created. Supported file types are .jpg, .jpeg, .png, and .gif
      * type **required** `string` (values: image): The type of message to be sent
  * to **required** `object`
    * number **required** `string`: The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
    * type **required** `string` (values: mms): The channel the message is going to

### templateMessageViber
* templateMessageViber `object`
  * message **required** `object`
    * content **required** [templateMessageViberContent](#templatemessagevibercontent)

### templateMessageViberContent
* templateMessageViberContent `object`
  * template **required** `object`: The template to be sent.
    * parameters [templateParameters](#templateparameters)
    * name **required** `string`: The name of the template to be sent
  * type **required** `string` (values: template): The type of message you are sending

### templateMessageViber_outbound
* templateMessageViber_outbound `object`
  * message **required** `object`
    * content **required** [templateMessageViberContent](#templatemessagevibercontent)
    * viber_service_msg [viber_service_msg](#viber_service_msg)

### templateMessageWhatsApp
* templateMessageWhatsApp `object`
  * message **required** `object`
    * content **required** [templateMessageWhatsAppContent](#templatemessagewhatsappcontent)
    * whatsapp **required** `object`
      * locale **required** `string`: The [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language of the template. Vonage will translate the BCP 47 format to the [WhatsApp equivalent](https://developers.facebook.com/docs/whatsapp/message-templates/creation#translations). For examples `en-GB` will be auto-translate to en_GB.
      * policy `string` (values: deterministic): Policy for resolving what language template to use. Please note that WhatsApp deprecated the `fallback` policy in January of 2020, all requests carrying a `fallback` policy will be rejected with a 400 error

### templateMessageWhatsAppContent
* templateMessageWhatsAppContent `object`
  * template **required** `object`: The Template request object to be sent to WhatsApp.
    * parameters [templateParameters](#templateparameters)
    * name **required** `string`: The name of the template. For WhatsApp use your WhatsApp namespace (available via Facebook Business Manager), followed by a colon `:` and the name of the template to use.
  * type **required** `string` (values: template): the type of message that you are sending

### templateMessageWhatsAppInbound
* templateMessageWhatsAppInbound `object`
  * message **required** `object`
    * content **required** [templateMessageWhatsAppContent](#templatemessagewhatsappcontent)

### templateParameters
* templateParameters `array`: The parameters are an array. The first value being {{1}} in the template.
  * items `string`

### textMessageFacebook
* textMessageFacebook `object`
  * message **required** `object`
    * content **required** [textMessageFacebookContent](#textmessagefacebookcontent)
    * messenger [messenger](#messenger)

### textMessageFacebookContent
* textMessageFacebookContent `object`
  * text **required** `string`: The text to be sent to the recipient's Facebook Messenger account.
  * type **required** `string` (values: text): The type of message being sent.

### textMessageFacebookInbound
* textMessageFacebookInbound `object`
  * message **required** `object`
    * content **required** [textMessageFacebookContent](#textmessagefacebookcontent)

### textMessageViber
* textMessageViber `object`
  * message **required** `object`
    * content **required** [textMessageViberContent](#textmessagevibercontent)
    * viber_service_msg [viber_service_msg](#viber_service_msg)

### textMessageViberContent
* textMessageViberContent `object`
  * text **required** `string`: Text to be sent to the user, limited to 1000 characters, including unicode.
  * type **required** `string` (values: text): The type of message being sent

### textMessageViberInbound
* textMessageViberInbound `object`
  * message **required** `object`
    * content **required** [textMessageViberContent](#textmessagevibercontent)

### textMessageWhatsApp
* textMessageWhatsApp `object`
  * message **required** `object`
    * content **required** `object`: Content of the whatsapp message
      * text **required** `string`: Text Message limited to 4096 characters, including unicode.
      * type **required** `string` (values: text): The type of message that you are sending

### toNumber
* toNumber `string`: The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.

### unsupportedMessage
* unsupportedMessage `object`
  * message **required** `object`
    * content **required** `object`
      * type **required** `string` (values: unsupported): The type of message will be `unsupported` if a message is received is of an unsupported type

### viber_service_msg
* viber_service_msg `object`
  * category `string` (values: transaction, promotion): The use of different category tags enables the business to send messages for different use cases. For Viber Service Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Service Messages.
  * ttl `integer`: Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.
  * type `string`: Viber-specific type definition. To use "template", please contact Vonage Account Manager to setup your templates. To find out more please visit [vonage.com/products/messages](https://www.vonage.com/communications-apis/messages/).

### videoMessageFacebook
* videoMessageFacebook `object`
  * message **required** `object`
    * content **required** [videoMessageFacebookContent](#videomessagefacebookcontent)
    * messenger [messenger](#messenger)

### videoMessageFacebookContent
* videoMessageFacebookContent `object`
  * type **required** `string` (values: video): The type of message being sent.
  * video **required** `object`: The video content being sent to the recipient.
    * url **required** `string`: The URL of the video attachment. Supports .mp4.

### videoMessageFacebookInbound
* videoMessageFacebookInbound `object`
  * message **required** `object`
    * content **required** [videoMessageFacebookContent](#videomessagefacebookcontent)

### videoMessageWhatsApp
* videoMessageWhatsApp `object`
  * message **required** `object`
    * content **required** `object`
      * type **required** `string` (values: video): The type of message that you are sending
      * video **required** `object`: the video content object for the WhatsApp request
        * url **required** `string`: Publicly accessible URL of the video attachment.


