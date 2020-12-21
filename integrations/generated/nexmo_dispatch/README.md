# @datafire/nexmo_dispatch

Client library for Dispatch API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_dispatch
```
```js
let nexmo_dispatch = require('@datafire/nexmo_dispatch').create({
  username: "",
  password: "",
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Dispatch API enables the developer to specify a multiple message workflow. A workflow follows a template. The first one we are adding is the failover template. The failover template instructs the Messages API to first send a message to the specified channel. If that message fails immediately or if the condition_status is not reached within the given time period the next message is sent. The developer will also receive status webhooks from the messages resource for each delivery and read event. This API is currently in Beta.

## Actions

### createWorkflow
Create a workflow


```js
nexmo_dispatch.createWorkflow({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [createWorkflow](#createworkflow)

#### Output
* output [Response](#response)



## Definitions

### AudioProperty
* AudioProperty `object`
  * url `string`: The URL of the audio attachment. `messenger` supports .mp3. `whatsapp` supports .aac, .m4a, .amr, .mp3 and .opus.

### Error
* Error `object`: The error format is standardized to the 4xx/5xx range with a code and a human readable explanation.
  * detail **required** `string`
  * instance **required** `string`
  * invalid_parameters `object`
    * name `string`
    * reason `string`
  * type **required** `string`

### FailoverProperty
* FailoverProperty `object`: Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.
  * condition_status `string` (values: delivered, read): Set the status the message must reach in the expiry_time before failing over. Options are delivered or read.
  * expiry_time `integer`: In seconds. Minimum value is 15 and maximum value is 86,400 seconds (1 day).

### FileProperty
* FileProperty `object`
  * caption `string`: Additional text to accompany the image. Supported by WhatsApp and MMS.
  * url `string`: The URL of the file attachment. `messenger` supports a wide range of attachments including .zip, .csv and .pdf. `whatsapp` supports .pdf, .doc(x), .ppt(x) and .xls(x).

### FromProperty
* FromProperty `object`
  * id `string`: Your ID for the platform that you are sending from.
  * number `string`: **SMS**: or **MMS**: The phone number of the message sender in the [E.164](https://en.wikipedia.org/wiki/E.164) format.
  * type **required** `string` (values: sms, viber_service_msg, messenger, whatsapp): The type of message that you want to send.

### ImageProperty
* ImageProperty `object`
  * caption `string`: Additional text to accompany the image. Supported by WhatsApp and MMS.
  * url `string`: The URL of the image attachment. `messenger` and `mms` supports .jpg, .jpeg, .png and .gif. `viber_service_msg` supports .jpg .jpeg, and .png. `whatsapp` supports .jpg .jpeg, and .png.

### MessageProperty
* MessageProperty `object`
  * content **required** `object`
    * audio [AudioProperty](#audioproperty)
    * file [FileProperty](#fileproperty)
    * image [ImageProperty](#imageproperty)
    * template [TemplateProperty](#templateproperty)
    * text `string`: The text of the message.
    * type **required** `string` (values: text, image, audio, video, file, template, custom): The type of message that you are sending.
    * video [VideoProperty](#videoproperty)
  * messenger `object`
    * category `string` (values: response, update, message_tag): The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy]( https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
    * tag `string`: ‘A full list of the possible tags is available on [developers.facebook.com](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)'
  * viber_service_msg `object`
    * category `string` (values: transaction, promotion): The use of different category tags enables the business to send messages for different use cases. For Viber Service Messages the first message sent from a business to a user must be personal, informative and a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Service Messages.
    * ttl `integer`: Only valid for Viber Service Messages. Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.
  * whatsapp `object`
    * locale `string`: We are using the industry standard, BCP 47, for locales. So in your API call to the /messages API you will need to put “en-GB” and this will refer to the “en_GB” template for WhatsApp. A full list of the possible locales is available on [developers.facebook.com](https://developers.facebook.com/docs/whatsapp/message-templates/creation#translations).
    * policy `string` (values: fallback, deterministic): Please note that WhatsApp will deprecate `fallback` policy in January 2020. There are two policies that you can specify when sending a Message Template: `deterministic` and `fallback`. `deterministic` — Deliver the Message Template in exactly the language and locale asked for. `fallback` — Deliver the Message Template in the language that matches users language/locale setting on device. If one can not be found, deliver using the specified fallback language.

### MessageStatus
* MessageStatus `object`: The callbacks for the message status are the same as defined in the Messaging API. The only difference will be that dispatch_uuid and link will be appended.
  * _links `object`
    * workflow `object`
      * dispatch_uuid `string`
      * href `string`: Please note GET is not currently supported
  * error `object`
    * code `integer`: The error code. See [our errors list](/api-errors/messages-olympus) for a list of possible errors
    * reason `string`: Text describing the error. See [our errors list](/api-errors/messages-olympus) for a list of possible errors
  * from [FromProperty](#fromproperty)
  * message_uuid `string`
  * status `string` (values: submitted, delivered, read, rejected, undeliverable): The status of the message.
  * timestamp [TimestampProperty](#timestampproperty)
  * to [ToProperty](#toproperty)
  * usage `object`
    * currency `string` (values: EUR): The charge currency in ISO 4217 format.
    * price `string`: The charge amount as a stringified number.

### Response
* Response `object`
  * dispatch_uuid **required** `string`: The parent ID for workflow request.

### TemplateProperty
* TemplateProperty `object`
  * parameters `array`
    * items `object`
      * default `string`: The parameters are an array. The first value being {{1}} in the template.
  * name `string`: The name of the template.

### TimestampProperty
* TimestampProperty `string`: The datetime of when the event occurred.

### ToProperty
* ToProperty `object`
  * id `string`: The ID of the message recipient.
  * number `string`: **SMS**: or **MMS**: or **Viber**: or **WhatsApp** The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
  * type **required** `string` (values: sms, viber_service_msg, messenger, whatsapp): The type of message that you want to send.

### VideoProperty
* VideoProperty `object`
  * url `string`: The URL of the video attachment.

### createWorkflow
* createWorkflow `object`
  * template `string` (values: failover): The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover
  * workflow `array`: Contains a message object that must reflect the current /messages resource. All parameters within the content object reflect the /messages docs.

### finalReport
* finalReport `object`
  * _links `object`
    * messages `array`
      * items `object`
        * channel `string` (values: messenger, viber_sevice_msg, sms, whatsapp, mms)
        * href `string`: Please note GET is not currently supported
        * message_uuid `string`
        * status `string` (values: submitted, delivered, read, rejected, undeliverable)
        * usage `object`
          * currency `string` (values: EUR): The charge currency in ISO 4217 format.
          * price `string`: The charge amount as a stringified number.
  * dispatch_uuid `string`
  * status `string` (values: completed, error)
  * template `string` (values: failover)
  * timestamp [TimestampProperty](#timestampproperty)
  * usage `object`: This is the total cost of your Workflow request. Please note if a preceding message in the workflow request is delivered after the final message in the workflow is delivered it may not reflect the true total cost of the workflow.
    * currency `string` (values: EUR): The charge currency in ISO 4217 format.
    * price `string`: The charge amount as a stringified number.

### sendMessage
* sendMessage `object`: Send Message
  * from **required** [FromProperty](#fromproperty)
  * message **required** [MessageProperty](#messageproperty)
  * to **required** [ToProperty](#toproperty)

### sendWithFailoverMessage
* sendWithFailoverMessage `object`: Send With Failover Message
  * failover [FailoverProperty](#failoverproperty)
  * from **required** [FromProperty](#fromproperty)
  * message **required** [MessageProperty](#messageproperty)
  * to **required** [ToProperty](#toproperty)


