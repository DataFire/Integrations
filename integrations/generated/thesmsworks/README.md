# @datafire/thesmsworks

Client library for The SMS Works API

## Installation and Usage
```bash
npm install --save @datafire/thesmsworks
```
```js
let thesmsworks = require('@datafire/thesmsworks').create({
  JWT: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed messages are refunded.

## Actions

### keySecret
Utility method. Please generate your API key by following the instructions on your account page at https://thesmsworks.co.uk/user/login


```js
thesmsworks.keySecret({
  "customerid": ""
}, context)
```

#### Input
* input `object`
  * customerid **required** `string`: Utility method. Please generate your API key by following the instructions on your account page at https://thesmsworks.co.uk/user/login

#### Output
* output [apiKeyResponse](#apikeyresponse)

### login
Generates a JSON Web Token for including in the Authorization header of all your calls to the API. This only needs to be done once. Generate the customer ID, API Key & Secret required for this call from the API Key tab your account page.


```js
thesmsworks.login({
  "credentials": null
}, context)
```

#### Input
* input `object`
  * credentials **required** [Login](#login)

#### Output
* output [TokenResponse](#tokenresponse)

### scheduleBatch
Schedules a batch of SMS messages to be sent at the date time you specify


```js
thesmsworks.scheduleBatch({
  "smsMessage": null
}, context)
```

#### Input
* input `object`
  * smsMessage **required** [BatchMessage](#batchmessage)

#### Output
* output [ScheduledBatchResponse](#scheduledbatchresponse)

### sendBatch
Send a single SMS message to multiple recipients


```js
thesmsworks.sendBatch({
  "smsMessage": null
}, context)
```

#### Input
* input `object`
  * smsMessage **required** [BatchMessage](#batchmessage)

#### Output
* output [BatchMessageResponse](#batchmessageresponse)

### getBatchById
Retrieve all messages in a batch with the given batch ID


```js
thesmsworks.getBatchById({
  "batchid": ""
}, context)
```

#### Input
* input `object`
  * batchid **required** `string`: The ID of the batch you would like returned

#### Output
* output `array`
  * items [MessageResponse](#messageresponse)

### cancelScheduledBatchJob
Cancels a scheduled SMS message


```js
thesmsworks.cancelScheduledBatchJob({
  "batchid": ""
}, context)
```

#### Input
* input `object`
  * batchid **required** `string`: The ID of the batch you would like returned

#### Output
* output [CancelledMessageResponse](#cancelledmessageresponse)

### credits
Returns the number of credits currently available on the account


```js
thesmsworks.credits(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CreditsResponse](#creditsresponse)

### sendFlashMessage
Sends an SMS flash message, which appears on the recipients lock screen


```js
thesmsworks.sendFlashMessage({
  "smsMessage": null
}, context)
```

#### Input
* input `object`
  * smsMessage **required** [Message](#message)

#### Output
* output [SendMessageResponse](#sendmessageresponse)

### scheduleMessage
Schedules an SMS message to be sent at the date-time you specify


```js
thesmsworks.scheduleMessage({
  "smsMessage": null
}, context)
```

#### Input
* input `object`
  * smsMessage **required** [Message](#message)

#### Output
* output [ScheduledMessageResponse](#scheduledmessageresponse)

### message.send.post
Sends an SMS message


```js
thesmsworks.message.send.post({
  "smsMessage": null
}, context)
```

#### Input
* input `object`
  * smsMessage **required** [Message](#message)

#### Output
* output [SendMessageResponse](#sendmessageresponse)

### getMessages
Get messages matching your search criteria


```js
thesmsworks.getMessages({
  "query": null
}, context)
```

#### Input
* input `object`
  * query **required** [Query](#query)

#### Output
* output `array`
  * items [MessageResponse](#messageresponse)

### getFailedMessages
Get failed messages matching your search criteria


```js
thesmsworks.getFailedMessages({
  "query": null
}, context)
```

#### Input
* input `object`
  * query **required** [Query](#query)

#### Output
* output `array`
  * items [MessageResponse](#messageresponse)

### getInboxMessages
Get unread uncoming messages matching your search criteria


```js
thesmsworks.getInboxMessages({
  "query": null
}, context)
```

#### Input
* input `object`
  * query **required** [Query](#query)

#### Output
* output `array`
  * items [MessageResponse](#messageresponse)

### cancelScheduledJob
Cancels a scheduled SMS message


```js
thesmsworks.cancelScheduledJob({
  "messageid": ""
}, context)
```

#### Input
* input `object`
  * messageid **required** `string`: The ID of the message you would like returned

#### Output
* output [CancelledMessageResponse](#cancelledmessageresponse)

### getMessageById
Retrieve a logged message by the message ID


```js
thesmsworks.getMessageById({
  "messageid": ""
}, context)
```

#### Input
* input `object`
  * messageid **required** `string`: The ID of the message you would like returned

#### Output
* output [MessageResponse](#messageresponse)

### getError
Returns a sample error object for the given error code. Useful for designing code to react to errors when they occur for real.


```js
thesmsworks.getError({
  "errorcode": ""
}, context)
```

#### Input
* input `object`
  * errorcode **required** `string`: The code of the error you would like returned

#### Output
* output [ExtendedErrorModel](#extendederrormodel)

### test
Returns the customer ID to the caller


```js
thesmsworks.test(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TestResponse](#testresponse)



## Definitions

### BatchMessage
* BatchMessage `object`: SMS Message Batch
  * content **required** `string`: Message to send to the recipient
  * deliveryreporturl `string`: The url to which we should POST delivery reports to for this message. If none is specified, we'll use the global delivery report URL that you've configured on your account page.
  * destinations **required** `array`: Telephone numbers of each of the recipients
    * items `string`
  * schedule `string`: Date-time at which to send the batch. This is only used by the batch/schedule service.
  * sender **required** `string`: The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
  * tag `string`: An identifying label for the message, which you can use to filter and report on messages you've sent later. Ideal for campaigns. A maximum of 280 characters.
  * ttl `number`: The number of minutes before the message is deleted. Optional. Omit to prevent delivery report deletion. Integer.

### BatchMessageResponse
* BatchMessageResponse `object`
  * batchid **required** `string`
  * status **required** `string`

### CancelledMessageResponse
* CancelledMessageResponse `object`
  * messageid **required** `string`
  * status **required** `string`

### CreditsResponse
* CreditsResponse `object`
  * credits **required** `number`: The number of remaining credits on your SMS Works account. Floating point number.

### ErrorModel
* ErrorModel `object`
  * message **required** `string`

### ExtendedErrorModel
* ExtendedErrorModel
  * message **required** `string`
  * errorCode **required** `number`: Numeric code used to identify the error. Integer.
  * permanent `boolean`
  * status **required** `string`

### Login
* Login `object`: authorisation object
  * customerid `string`: Your customer ID, available from your account area at https://thesmsworks.co.uk/user/login
  * key `string`: API Key, available from your account area at https://thesmsworks.co.uk/user/login
  * secret `string`: API Secret, available from your account area at https://thesmsworks.co.uk/user/login

### Message
* Message `object`: SMS message object
  * content **required** `string`: Message to send to the recipient. Content can be up to 1280 characters in length. Messages of 160 characters or fewer are charged 1 credit. If your message is longer than 160 characters then it will be broken down in to chunks of 153 characters before being sent to the recipient's handset, and you will be charged 1 credit for each 153 characters. Messages sent to numbers registered outside the UK will be typically charged double credits, but for certain countries may be charged fractions of credits (e.g. 2.5). Please contact us for rates for each country.
  * deliveryreporturl `string`: The url to which we should POST delivery reports to for this message. If none is specified, we'll use the global delivery report URL that you've configured on your account page.
  * destination **required** `string`: Telephone number of the recipient
  * metadata `array`
    * schema [MetaData](#metadata)
    * items `object`
  * responseemail `array`: An optional list of email addresses to forward responses to this specific message to. An SMS Works Reply Number is required to use this feature.
    * items `string`
  * schedule `string`: Date at which to send the message. This is only used by the message/schedule service and can be left empty for other services.
  * sender **required** `string`: The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
  * tag `string`: An identifying label for the message, which you can use to filter and report on messages you've sent later. Ideal for campaigns. A maximum of 280 characters.
  * ttl `number`: The optional number of minutes before the message is deleted. Optional. Omit to prevent delivery report deletion. Integer.

### MessageResponse
* MessageResponse `object`
  * batchid `string`
  * content **required** `string`
  * created **required** `string`
  * customerid **required** `string`
  * deliveryreporturl `string`
  * destination **required** `number`
  * failurereason `object`
    * code `number`: Numeric code that defines the error. Integer.
    * details `string`
    * permanent `boolean`
  * id `string`
  * identifier `string`
  * keyword `string`
  * messageid **required** `string`
  * modified **required** `string`
  * schedule **required** `string`
  * sender **required** `string`
  * status **required** `string`
  * tag **required** `string`

### MetaData
* MetaData `object`: Key/value pair that will be returned to you in the API call response.
  * key `string`: key of the key/value pair
  * value `string`: value of the key/value pair

### Query
* Query `object`: search parameters for querying the message database
  * credits `number`: The number of credits used on the message. Floating point number.
  * destination `string`: The phone number of the recipient. Start UK numbers with 44 and drop the leading 0.
  * from `string`: The date-time from which you would like matching messages
  * keyword `string`: The keyword used in the inbound message
  * metadata `array`: An array of objects containing metadata key/value pairs that have been saved on messages.
    * schema [MetaData](#metadata)
    * items `object`
  * sender `string`: The sender of the message (this can be the configured sender name for an outbound message or the senders phone number for an inbound message).
  * status `string`: The status of the messages you would like returned (either 'SENT', 'DELIVERED', 'EXPIRED', 'UNDELIVERABLE', 'REJECTED' or 'INCOMING')
  * to `string`: The date-time to which you would like matching messages
  * unread `boolean`: In queries for incoming messages ('status' is 'INCOMING'), specify whether you explicitly want unread messages (true) or read messages (false). Omit this parameter in other circumstances.

### ScheduledBatchResponse
* ScheduledBatchResponse `object`
  * batchid **required** `string`
  * status **required** `string`

### ScheduledMessageResponse
* ScheduledMessageResponse `object`
  * messageid **required** `string`
  * status **required** `string`

### SendMessageResponse
* SendMessageResponse `object`
  * credits **required** `number`: The number of remaining credits on your SMS Works account. Floating point number.
  * creditsUsed **required** `number`: The number of credits used to send the message. Floating point number.
  * messageid **required** `string`
  * status **required** `string`

### TestResponse
* TestResponse `object`
  * message **required** `string`

### TokenResponse
* TokenResponse `object`
  * token **required** `string`

### apiKeyResponse
* apiKeyResponse `object`
  * key **required** `string`
  * secret **required** `string`


