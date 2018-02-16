# @datafire/thesmsworks

Client library for The SMS Works

## Installation and Usage
```bash
npm install --save @datafire/thesmsworks
```
```js
let thesmsworks = require('@datafire/thesmsworks').create({
  JWT: ""
});

thesmsworks.keySecret({
  "customerid": ""
}).then(data => {
  console.log(data);
});
```

## Description

The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed messages are refunded.

## Actions

### keySecret
Generates an API Key/Secret pair


```js
thesmsworks.keySecret({
  "customerid": ""
}, context)
```

#### Input
* input `object`
  * customerid **required** `string`: The Customer ID

#### Output
* output [apiKeyResponse](#apikeyresponse)

### login
Generates a Json Web Token


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
Schedules a batch of SMS messages to be sent at the date-time you specify


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
* output [MessagesResponse](#messagesresponse)

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

### sendMessage
Sends an SMS message


```js
thesmsworks.sendMessage({
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
* output [MessagesResponse](#messagesresponse)

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
* output [MessagesResponse](#messagesresponse)

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
  * destinations **required** `array`: Telephone numbers of each of the recipients
    * items `string`
  * schedule **required** `string`: Date-time at which to send the batch. This is only used by the batch/schedule service.
  * sender **required** `string`: The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.

### BatchMessageResponse
* BatchMessageResponse `object`
  * batchid **required** `string`
  * status **required** `string`

### CancelledMessageResponse
* CancelledMessageResponse `object`
  * messageid **required** `string`
  * status **required** `string`

### ErrorModel
* ErrorModel `object`
  * code **required** `integer`
  * message **required** `string`

### ExtendedErrorModel
* ExtendedErrorModel
  * code **required** `integer`
  * message **required** `string`
  * errorCode **required** `number`

### Login
* Login `object`: authorisation object
  * customerid `string`: Your customer ID, available from your account area at https://thesmsworks.co.uk/user/login
  * key `string`: API Key
  * secret `string`: API Secret

### Message
* Message `object`: SMS message object
  * content **required** `string`: Message to send to the recipient. Content can be up to 640 characters in length. You will be charged 1 credit for each 160 characters, up to a maximum of 4 credits. Messages sent to numbers registered outside the UK will be charged double credits (i.e. 2 credits per 160 characters, up to maximum of 8 credits).
  * destination **required** `string`: Telephone number of the recipient
  * schedule **required** `string`: Date at which to send the message. This is only used by the message/schedule service and can be left empty for other services.
  * sender **required** `string`: The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
  * tag `string`: An identifying label for the message, which you can use to filter and report on messages you've sent later. Ideal for campaigns.

### MessageResponse
* MessageResponse `object`
  * batchid **required** `string`
  * content **required** `string`
  * created **required** `string`
  * customerid **required** `string`
  * destination **required** `number`
  * id `string`
  * keyword **required** `string`
  * messageid **required** `string`
  * modified **required** `string`
  * schedule **required** `string`
  * sender **required** `string`
  * status **required** `string`
  * tag **required** `string`

### MessagesResponse
* MessagesResponse `object`
  * messages **required** `array`
    * schema [MessageResponse](#messageresponse)
    * items `object`

### Query
* Query `object`: search parameters for querying the message database
  * destination `string`: The phone number of the recipient. Start UK numbers with 44 and drop the leading 0.
  * from `string`: The date-time from which you would like matching messages
  * keyword `string`: The keyword used in the inbound message
  * sender `string`: The sender of the message (this can be the configured sender name for an outbound message or the senders phone number for an inbound message).
  * status `string`: The status of the messages you would like returned (either 'SENT', 'DELIVERED', 'EXPIRED', 'DELETED', 'UNDELIVERABLE', 'ACCEPTED', 'UNKNOWN', 'REJECTED')
  * to `string`: The date-time to which you would like matching messages

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
  * credits **required** `integer`
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


