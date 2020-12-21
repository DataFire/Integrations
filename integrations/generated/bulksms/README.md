# @datafire/bulksms

Client library for BulkSMS JSON

## Installation and Usage
```bash
npm install --save @datafire/bulksms
```
```js
let bulksms = require('@datafire/bulksms').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

## Overview

The JSON REST API allows you to submit and receive [BulkSMS](https://www.bulksms.com/) messages. You can also get access to past messages and see your account profile.

The base URL to use for this service is `https://api.bulksms.com/v1`.  The base URL cannot be used on its own; you must append a path that identifies an operation and you may have to specify some path parameters as well.

[Click here](/) to go to the main BulkSMS developer site.

In order to give you an idea on how the API can be used, some JSON snippets are provided below.  Have a look at the [messages section](#tag/Message) for more information.

Probably the most simple example

```
{
    "to": "+27001234567",
    "body": "Hello World!"
}
```


You can send unicode automatically using the `auto-unicode` query parameter. 
Alternatively, you can specify UNICODE in the request body. Here is an example that sets the `encoding` explicitly

```
{
  "to": "+27001234567",
  "body": "Dobrá práce! Jak se máš?",
  "encoding": "UNICODE"
}
```

You can also specify a from number

```
{
    "from": "+27007654321",
    "to": "+27001234567",
    "body": "Hello World!"
}
```

Similar to above, but repliable

```
{
    "from": { "type": "REPLIABLE" },
    "to": "+27001234567",
    "body": "Hello World!"
}
```

A message to a group called Everyone

```
{
    "to": { "type": "GROUP", "name": "Everyone" },
    "body": "Hello World!"
}
```

A message to multiple recipients

```
{
    "to": ["+27001234567", "+27002345678", "+27003456789"],
    "body": "Happy Holidays!"
}
```

Sending more than one message in the same request

```
[
    {
        "to": "+27001234567",
        "body": "Hello World!"
    },
    {
        "to": "+27002345678",
        "body": "Hello Universe!"
    }
]
```

**The insecure base URL `http://api.bulksms.com/v1` is deprecated** and may in future result in a `301` redirect response, or insecure requests may be rejected outright. Please use the secure (`https`) URI above.

### HTTP Content Type

All API methods expect requests to supply a `Content-Type` header with the value `application/json`. All responses will have the `Content-Type` header set to `application/json`.

### JSON Formatting

You are advised to format your JSON resources according to strict JSON format rules. While the API does attempt to parse strictly invalid JSON documents, doing so may lead to incorrect interpretation and unexpected results.

Good JSON libraries will produce valid JSON suitable for submission, but if you are manually generating the JSON text, be careful to follow the JSON format. This include correct escaping of control characters and double quoting of property names.

See the [JSON specification](https://tools.ietf.org/html/rfc4627) for further information.

### Date Formatting

Dates are formatted according to ISO-8601, such as `1970-01-01T10:00:00+01:00` for 1st January 1970, 10AM UTC+1.

See the [Wikipedia ISO 8601 reference](https://en.wikipedia.org/wiki/ISO_8601) for further information.

Specifically, calendar dates are formatted with the 'extended' format `YYYY-MM-DD`. Basic format, week dates and ordinal dates are not supported. Times are also formatted in the 'extended' format `hh:mm:ss`. Hours, minutes and seconds are mandatory. Offset from UTC must be provided; this is to ensure that there is no misunderstanding regarding times provided to the API.

The format we look for is `yyyy-MM-ddThh:mm:ss[Z|[+-]hh:mm]`

Examples of valid date/times are`2011-12-31T12:00:00Z` `2011-12-31T12:00:00+02:00`

### Entity Format Modifications

It is expected that over time some changes will be made to the request and response formats of various methods available in the API.
Where possible, these will be implemented in a backwards compatible way.
To make this possible you are required to ignore unknown properties.
This enables the addition of information in response documents while maintaining compatibility with older clients.

### Optional Request Entity Properties

There are many instances where requests can be made without having to specify every single property allowable in the request format.
Any such optional properties are noted as such in the documentation and their default value is noted.


## Actions

### messages.get
Retrieve the messages you have sent or received.

All the parameters are optional.  If a value is not supplied for `filter`, the messages are not filtered.

Messages can be filtered by supplying query clauses in the `filter` parameter. Each clause has the form `name=value` where `name` is the name of a filter field and `value` is a valid value for that field.  A value for a field is optional. Include a clause for a field in the filter only when there is a need to fetch messages that match some value for that field.
For a numeric filter field, you can also use the less than operator (`<`).

If present, the filter value must have at least one clause, but it can contain a combination of clauses. Multiple clauses are separated with the `&` symbol.  Semantically, multiple clauses form a [logical conjunction](https://en.wikipedia.org/wiki/Logical_conjunction).

For example, if you want to list all messages that were sent as part of a particular submission, your filter contains two clauses and will look something like this
```
type%3DSENT&submission.id%3D1-00000000000522347562
```
Because `filter` is a request parameter, it is important to note that the value for this parameter must be *URL encoded*. In particular, the `=` encodes to `%3D` and the `&` encodes to `%26`.  Note that you do not have to encode the `<` character.

Using the previous example to illustrate; after encoding and encasing it, the clauses are transformed into a request that looks like this
```
GET /v1/messages?filter=type%3DSENT%26submission.id%3D1-00000000000522347562
```
If the field name or the field value of a clause is not valid, a [bad_request error](errors#bad-request) is returned instead of the usual result.  The `detail` field of this error provides more information about the problem.

The table below lists the fields available for filtering

| Field | Type   | Values | Note and example |
|-------|------|--------------------|------|
| id            | Integer  | Positive integer  | Use the `id` field with `<` (or with `>`) to fetch messages that are older (or newer) than those that are already fetched. <br/>`filter=id<123456` |
| type          | String  | SENT, RECEIVED  | SENT are Mobile Terminating (MT) SMSs; RECEIVED are Mobile Originating (MO) SMSs.<br/>`filter=type%3DSENT` |
| submission.id | String  |  | `filter=submission.id%3D1-00000000000522347562` |
| status.type   | String  | ACCEPTED, SCHEDULED, SENT, DELIVERED, FAILED  | See the message `status.type` field for more information. <br/>`filter=status.type%3DDELIVERED` |
| status.id| String  |  | See the message `status.id` field for more information. `filter=status.id%3DFAILED.EXPIRED`|
| submission.date | String | Formatted Date | A fully specified date (e.g. 2017-01-01T10:00:00+01:00).  Use this field with `<=`, `<`, `>` or `>=` to limit the values. <br/>`filter=submission.date%3E%3D2017-01-01T10%3A00%3A00%2B01%3A00` |
| userSuppliedId  | String | | Use a string value you specified in the `userSuppliedId` property when you sent the message. Only `SENT` messages will be retrieved. <br/>`filter=userSuppliedId%3Dacc009876` |



```js
bulksms.messages.get({}, context)
```

#### Input
* input `object`
  * limit `number`: The maximum number of messages that are returned.  The default is 1000.
  * filter `string`: See the message filtering for more information.
  * sortOrder `string` (values: ASCENDING): The default value is DESCENDING

#### Output
* output `array`
  * items [Message](#message)

### messages.post
Send messages to one or more recipients.

#### Repliability

When a sent message is _repliable_,  the BulkSMS system can process an SMS response sent by your recipient.

The message sent by your customer is called a mobile originating (MO) message and would be available under `RECEIVED` messages. 
You can obtain a list of MOs using the [retrieve messages API call](#tag/Message%2Fpaths%2F~1messages%2Fget).
In addition you can also get a list of the MOs that are associated with a specific sent message (see the [list related messages API call](#tag/Message%2Fpaths%2F~1messages~1%7Bid%7D~1relatedReceivedMessages%2Fget)).

If you use a specific _sender id_ in the `from` property of the send message, the message will not be repliable.
If you want a message to be repliable, you need to specify `REPLIABLE` in the `from.type` property.

If you do not set the `from` property, your account settings are considered to determine whether or not the message is repliable.
If the _default repliable_ setting on your account is _yes_ then the message will be repliable. 
If this setting is _no_, the message will not be repliable.


#### Body templates

When sending a message you can use template fields to customise the message text.

*Field based templates* allow you to create a message with place-holders for custom fields.  Fields are identified by a zero based index; the first field is `F0`, the second is `F1` and so on.  

For example, let's say you want to send a daily SMS message to all your clients that tell them what their current balance is.  The `body` of the message could look something like this 

```
Good morning {F0######}, your balance is {F1######}
```

In this message, the first field, `F0`, is the name  of the customer and he second field `F1` is the balance for that customer.  The `#` used to specify the maximum length  of the field.  Note that the maximum length allowed for the value includes the space taken by the braces, template name and hash symbol.  For example, the value `{F0#}` specifies a maximum length of `5`.  If the data is longer than this length, the data will be truncated when the message body is constructed.

The data fields are provided in the property named `fields` in the `to` element.  Here is a complete example of how this might look

```
{
  "body": "Good morning {F0######}, your balance is {F1######}",
  "to":  [
      {"address": "27456789","fields": ["Harry", "$1345.23"] },
      {"address": "27456785","fields": ["Sally", "$2345.58"] }
  ]
}
```

If you are sending to contacts (or to groups) in your phonebook, you can use the *Phonebook based templates*.  These are similar to the templates described above, but they have specific names. The template for the contact's first name is identified by `fn` and the template for the contact's surname is identified by `sn`.  Below in an example that will work if the numbers are registered in your phonebook. 

```
{
  "body": "Hi {fn######} {sn######}, have a great day!",
  "to":  [
      {"address": "27456789" },
      {"address": "27456785" }
  ]
}
```



```js
bulksms.messages.post({
  "body": []
}, context)
```

#### Input
* input `object`
  * deduplication-id `integer`: Safeguards against the possibility of sending the same messages more than once.
  * auto-unicode `boolean`: Specifies how to deal with message text that contains characters not present in the GSM 03.38 character set.
  * schedule-date `string`: Allows you to send a message in the future.
  * schedule-description `string`: A note that is stored together with a scheduled submission, which could be used to more easily identify the scheduled submission at a later date.
  * body **required** `array`
    * items [SubmissionEntry](#submissionentry)

#### Output
* output `array`
  * items [Message](#message)

### messages.send.get
A really simple interface for people who require a GET mechanism to submit a message.

The URI is interpreted as UTF-8.

__Note__ BulkSMS recommends that you use the more flexible Send Messages Operation when submitting SMS messages from your application.

Here is an example of a GET
```http
GET /v1/messages/send?to=%2b270000000&body=Hello%20World
```

You can also use the same parameters to POST form encoded fields to `/messages`.
Here is an example of a POST
```http
POST /v1/messages
Content-Type: application/x-www-form-urlencoded

to=%2b27000000000&body=Hello+World
```



```js
bulksms.messages.send.get({
  "to": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * to **required** `string`: The phone number of the recipient.
  * body **required** `string`: The text you want to send.
  * deduplication-id `integer`: Refer to the `deduplication-id` parameter.

#### Output
* output `array`
  * items [Message](#message)

### messages.id.get
Get a the message by `id`.
```http
GET /v1/messages/4023457654
```



```js
bulksms.messages.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The `id` of the message you want to retrieve

#### Output
* output [Message](#message)

### messages.id.relatedReceivedMessages.get
Get the messages related to a sent message identified by `id`.

For more information how this work, see the `relatedSentMessageId` field in the message.



```js
bulksms.messages.id.relatedReceivedMessages.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The `id` of the sent message

#### Output
* output `array`
  * items [Message](#message)

### profile.get
Returns information about your user profile


```js
bulksms.profile.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Profile](#profile)

### webhooks.get
Contains a list of your webhooks


```js
bulksms.webhooks.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Webhook](#webhook)

### webhooks.post
A webhook is an URL that you can register if you want the BulkSMS system to notify you about your messages.
You can create multiple webhooks, and each one will be called.
If you want to be notified of `SENT` messages and `RECEIVED` messages you need to create two webhooks.

__Important:__ The Webhooks methods do not work with an API Token, a username and password is required.

### Implementing your webhook

When you implement your webhook, there are a few rules to be aware of:
- Your webhook must process `POST` requests that contains an array of messages in the post body.  This input given to your webhook has the same structure as the output produced when you call [Retrieve Messages](#tag/Message%2Fpaths%2F~1messages%2Fget).
- When you register or update your webhook, the URL will be tested by invoking it with an empty array (`[]`).
- It is possible for your webhook to receive multiple updates for the same message and status. It happens from time to time that the mobile network duplicates status updates.
- The order by which the webhook is invoked can be unexpected.  For example, if sender A replies before sender B, your webhook might get the reply from B first.
- The webhook is expected to comply with good practices with regard to the status code it responds with.
  - A status code in the `1xx` and `2xx` range is taken as an acknowledgement that the invocation was received and that the webhook host is ready to receive another.
  - A status code in the `4xx` range is taken as a permanent problem and indicates that the webhook cannot process the message. The specific message that caused the error will be discarded, but your webhook will be invoked again when another message becomes available.
  - Any other status code will be taken as a temporary problem; and indicates that the BulkSMS system should retry. The specific message that caused the error will not be discarded and your webhook will be invoked again with this message (see the subsequent section for more details on retry processing).
- Your webhook has to respond within `30` seconds.  If no response is given in this time, the invocation will be retried.
- It is good practise to add a secret to your URL in order to make it more secure. Here is an example:
`https://www.example.com/hook.php?secret=pass763265word`
- You can also use a non-standard port if necessary, for example: `https://www.example.com:8321/hook.php?secret=pass763265word`


### The retry process

The process the BulkSMS systems follow to handle retries is roughly the following:
- The first retry is scheduled for 90 seconds into the future.
- After the first retry, subsequent failures will have longer delays, following this sequence - 3 minutes, 6 minutes, 12 minutes, 24 minutes, 48 minutes, 96 minutes, 3 hours, 6 hours, 12 hours, 24 hours.
- When a failure occurs after the last delay in the sequence, the message is discarded.

### Problem reports via email

It is strongly suggested that you provide an email address when you configure your webhook.
An email will be sent to this address to keep you in the loop whenever there are problems with your webhook.
In order to prevent your mailbox from being flooded, the BulksSMS system reports an observed error code no more than once in a 24 hour period.

The following emails can be expected
 - A __message retrying__ email is sent after an invocation has failed with a retry-able error.  This email is an early warning, allowing you to investigate your systems.
 - A __message discarded__ email is sent after failure email is send when a message is discarded as a consequence of a non-retry-able error; or when the system decides to stop retrying.



```js
bulksms.webhooks.post({
  "body": {
    "name": "",
    "url": "",
    "triggerScope": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WebhookEntry](#webhookentry)

#### Output
* output [Webhook](#webhook)

### webhooks.id.delete
Delete a webhook


```js
bulksms.webhooks.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The `id` of the webhook

#### Output
*Output schema unknown*

### webhooks.id.get
Read a webhook


```js
bulksms.webhooks.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The `id` of the webhook

#### Output
* output [Webhook](#webhook)

### webhooks.id.post
Update a webhook


```js
bulksms.webhooks.id.post({
  "body": {
    "name": "",
    "url": "",
    "triggerScope": ""
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [WebhookEntry](#webhookentry)
  * id **required** `string`: The `id` of the webhook

#### Output
* output [Webhook](#webhook)



## Definitions

### Error
* Error `object`: See the [errors page](errors/) for more detail on what kind of errors you can get.
  * detail `string`: More information about why the error occurred.
  * status **required** `integer`: The HTTP status code
  * title **required** `string`: A short description of the type
  * type **required** `string`: A URL to one of the [error types](errors/).

### Message
* Message `object`
  * creditCost `number`: The cost of the message (in credits).   Note that this field does not have a value in the submission response.
  * encoding `string` (values: TEXT, UNICODE, BINARY): The type of the content.  See the `encoding` field for more information.
  * from `string`: The address part of the sender id
  * id **required** `string`: A unique identifier that is assigned when the message is created.
  * messageClass `integer`: See the `messageClass` field for more information.
  * numberOfParts `integer`: The number of parts.  If this is a concatenated message, the number of parts will be more than 1.  Note that this field does not have a value in the submission response.
  * protocolId `integer`: See the `protocolId` field for more information.
  * relatedSentMessageId `string`: This field has a value only if the type is RECEIVED.
  * status **required** `object`: The status of the message
    * id **required** `string`: A concatenated value A.B where A is the `status.type` and B is the `status.subtype`.  
    * subtype `string` (values: EXPIRED, HANDSET_ERROR, BLOCKED, NOT_SENT): Has a value only if the `type` is FAILED.
    * type **required** `string` (values: ACCEPTED, SCHEDULED, SENT, DELIVERED, UNKNOWN, FAILED): 
  * submission `object`: Identifies the submission.
    * date **required** `string`: The date and time the submission was processed.
    * id **required** `string`: A unique identity shared by all messages that were created from the same submission.
  * to **required** `string`: The phone number of the recipient
  * type **required** `string` (values: SENT, RECEIVED): The message direction
  * userSuppliedId `string`: This is the value you supplied in the `userSuppliedId` field.

### Profile
* Profile `object`
  * commerce `object`
    * address `object`
      * city `string`
      * country `string`
      * postalCode `string`
      * region `string`
      * street `array`
        * items `string`
    * bankPaymentReference `string`
  * company `object`
    * name `string`
    * taxReference `string`
  * created **required** `string`
  * credits **required** `object`
    * balance `number`
    * isTransferAllowed `boolean`
    * limit `integer`
  * id **required** `string`
  * originAddresses `object`
    * allowed `array`
      * items `string`
    * isFullControlAllowed `boolean`
  * quota **required** `object`
    * remaining **required** `integer`: The number of messages you can still send today.
    * size **required** `integer`: The setting that limits the number of messages you can send in a day.
  * username **required** `string`

### SubmissionEntry
* SubmissionEntry `object`: An object that you use when posting messages.
  * body **required** `string`: The message content as described in the `encoding`. If the `encoding` is BINARY, the body must contain only hexadecimal digits where one byte is represented as two digits. For example, if you want to send two bytes '0x05' and '0x1F', the message body must contain the text '051F'.
  * deliveryReports `string` (values: ALL, ERRORS, NONE): The type of delivery reports to request from the delivering network.
  * encoding `string` (values: TEXT, UNICODE, BINARY): Describes the content of the message body.
  * from `object`: Identifies the sender.
    * address `string`: The address of the sender id.
    * type **required** `string` (values: INTERNATIONAL, ALPHANUMERIC, SHORTCODE, REPLIABLE): The type of the sender id.
  * longMessageMaxParts `integer`: The maximum number of message parts that can be used for a [concatenated message](https://en.wikipedia.org/wiki/Concatenated_SMS).
  * messageClass `string` (values: FLASH_SMS, ME_SPECIFIC, SIM_SPECIFIC, TE_SPECIFIC): The class of the message, as specified by §4 of the GSM 03.38 specification.
  * protocolId `string` (values: IMPLICIT, SHORT_MESSAGE_TYPE_0, REPLACE_MESSAGE_1, REPLACE_MESSAGE_2, REPLACE_MESSAGE_3, REPLACE_MESSAGE_4, REPLACE_MESSAGE_5, REPLACE_MESSAGE_6, REPLACE_MESSAGE_7, RETURN_CALL, ME_DOWNLOAD, ME_DEPERSONALIZE, SIM_DOWNLOAD): The TP-PID value from GSM 03.40[.750] §9.2.3.9.
  * routingGroup `string` (values: ECONOMY, STANDARD, PREMIUM): Allows you to choose routing. The default is STANDARD.
  * to **required** `array`: Identifies the recipients
    * items `object`
      * address `string`: The phone number of the recipient.  It must be supplied if the `type` is INTERNATIONAL
      * fields `array`: Custom fields that can be used in the message body. A value can be given if the `type` is INTERNATIONAL
        * items `string`
      * id `string`: The id of a group in your phonebook.  A value can be given if the `type` is GROUP.
      * name `string`: The name of a group in your phonebook. A value can be given if the `type` is GROUP.
      * type `string` (values: INTERNATIONAL, GROUP): Type of the recipient. The default value is INTERNATIONAL.
  * userSuppliedId `string`: Correlate the messages created from this submission to your data.

### Webhook
* Webhook `object`
  * active `boolean`
  * contactEmailAddress `string`
  * id `number`
  * name `string`
  * onWebApp `boolean`
  * triggerScope `string`
  * url `string`

### WebhookEntry
* WebhookEntry `object`
  * active `boolean`: Indicates whether you want the webhook activated.
  * contactEmailAddress `string`: The email address to which emails will be sent if there are problem with invoking the webhook.
  * name **required** `string`: A text identifier for the webhook.
  * onWebApp `boolean`: Indicates whether you want to show this webhook on the Web App.
  * triggerScope **required** `string` (values: SENT, RECEIVED): Specifies when the webhook will be triggered.  
  * url **required** `string`: The location of the webhook.


