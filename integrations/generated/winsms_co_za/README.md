# @datafire/winsms_co_za

Client library for WinSMS

## Installation and Usage
```bash
npm install --save @datafire/winsms_co_za
```
```js
let winsms_co_za = require('@datafire/winsms_co_za').create({
  APIKeyHeader: ""
});

winsms_co_za.getScheduledMessages({}).then(data => {
  console.log(data);
});
```

## Description

WinSMS RESTful API

## Actions

### getCreditBalance
Get the current remaining credit balance for the account. Note - The credit balance is expressed as a value with a single decimal place.


```js
winsms_co_za.getCreditBalance(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output
  * statusCode **required** `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp **required** `string`: The date/time of the call, in the format YYYYMMDDhhmmssSSS
  * version **required** `string`: The current version of the API of the endpoint that was called
  * creditBalance **required** `number`: The current remaining credit balance for the account. Contains a single decimal place

### transferCredits
Transfer credits between accounts.<br>
 * From Main account to Sub account.
 * From Sub account to Main account.
 * From Sub account to another Sub account.


```js
winsms_co_za.transferCredits({
  "creditTransferDetails": {
    "sendingAccountNumber": 0,
    "receivingAccountNumber": 0,
    "transferQuantity": 0
  }
}, context)
```

#### Input
* input `object`
  * creditTransferDetails **required** [creditTransferRequest](#credittransferrequest)

#### Output
* output
  * statusCode **required** `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp **required** `string`: The date/time of the call, in the format YYYYMMDDhhmmssSSS
  * version **required** `string`: The current version of the API of the endpoint that was called
  * transferSuccessful **required** `boolean`: A boolean value indictating whether the credits were successfully transfered from the sending account into the receiving account.

### getShortCodeMessages
Get a list of all incoming short/long code messages received by the account.<br>


```js
winsms_co_za.getShortCodeMessages({}, context)
```

#### Input
* input `object`
  * offset `integer`: Optional - The number of items to skip before starting to return results. Default 0. Minimum 0.
  * limit `integer`: Optional - The number of items to return. Default 100. Minimum 1. Maximum 1000.

#### Output
* output
  * statusCode **required** `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp **required** `string`: The date/time of the call, in the format YYYYMMDDhhmmssSSS
  * version **required** `string`: The current version of the API of the endpoint that was called
  * resultLimit **required** `integer`: The number of items returned in the results. This is the value specified in the ```limit``` parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
  * resultOffset **required** `integer`: The number of items skipped before the results were returned. This is the value specified in the ```offset``` parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
  * resultTotalAvailable **required** `integer`: The total number of results available for retrieval. The ```offset``` and ```limit``` properties specify which of the total available results have been returned.
  * shortcodeMessages **required** `array`: An array of shortcodeMessage objects containing properties of each incoming shortcode message received by WinSMS.
    * items [shortcodeMessage](#shortcodemessage)

### getIncomingMessages
Get a list of all incoming SMS messages received by the account.<br>


```js
winsms_co_za.getIncomingMessages({}, context)
```

#### Input
* input `object`
  * offset `integer`: Optional - The number of items to skip before starting to return results. Default 0. Minimum 0.
  * limit `integer`: Optional - The number of items to return. Default 100. Minimum 1. Maximum 1000.

#### Output
* output
  * statusCode **required** `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp **required** `string`: The date/time of the call, in the format YYYYMMDDhhmmssSSS
  * version **required** `string`: The current version of the API of the endpoint that was called
  * resultLimit **required** `integer`: The number of items returned in the results. This is the value specified in the ```limit``` parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
  * resultOffset **required** `integer`: The number of items skipped before the results were returned. This is the value specified in the ```offset``` parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
  * resultTotalAvailable **required** `integer`: The total number of results available for retrieval. The ```offset``` and ```limit``` properties specify which of the total available results have been returned.
  * incomingMessages **required** `array`: An array of incomingMessage objects containing properties of each incoming message.
    * items [incomingMessage](#incomingmessage)

### getIncomingOptoutMessages
Get a list of all opt-out SMS messages received by the account, as well as all manually added opt-out numbers.<br>


```js
winsms_co_za.getIncomingOptoutMessages(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output
  * statusCode **required** `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp **required** `string`: The date/time of the call, in the format YYYYMMDDhhmmssSSS
  * version **required** `string`: The current version of the API of the endpoint that was called
  * incomingOptoutMessages **required** `array`: An array of incomingOptoutMessage objects containing properties of each opt-out message.
    * items [incomingOptoutMessage](#incomingoptoutmessage)

### smsOutgoingSend
Submit 1 or more SMS messages to be sent by WinSMS. Maximum 1000 recipients per call.


```js
winsms_co_za.smsOutgoingSend({
  "newMessageDetails": {
    "message": "",
    "recipients": []
  }
}, context)
```

#### Input
* input `object`
  * newMessageDetails **required** [sendMessageRequest](#sendmessagerequest)

#### Output
* output
  * statusCode **required** `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp **required** `string`: The date/time of the call, in the format YYYYMMDDhhmmssSSS
  * version **required** `string`: The current version of the API of the endpoint that was called
  * recipients **required** `array`: An array of messageRecipientResponse objects
    * items [messageRecipientResponse](#messagerecipientresponse)

### smsOutgoingStatus
Get a list of previously submitted SMS message delivery statuses.<br> Post an array of API Message Ids received from the `/sms/outgoing/send` endpoint.


```js
winsms_co_za.smsOutgoingStatus({
  "apiIds": []
}, context)
```

#### Input
* input `object`
  * apiIds **required** `array`
    * items `integer`

#### Output
* output [messageStatusResponse](#messagestatusresponse)

### getScheduledMessages
Get a list of all scheduled SMS messages that have not yet been sent.


```js
winsms_co_za.getScheduledMessages({}, context)
```

#### Input
* input `object`
  * offset `integer`: Optional - The number of items to skip before starting to return results. Default 0. Minimum 0.
  * limit `integer`: Optional - The number of items to return. Default 100. Minimum 1. Maximum 1000.

#### Output
* output
  * statusCode **required** `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp **required** `string`: The date/time of the call, in the format YYYYMMDDhhmmssSSS
  * version **required** `string`: The current version of the API of the endpoint that was called
  * resultLimit **required** `integer`: The number of items returned in the results. This is the value specified in the ```limit``` parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
  * resultOffset **required** `integer`: The number of items skipped before the results were returned. This is the value specified in the ```offset``` parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
  * resultTotalAvailable **required** `integer`: The total number of results available for retrieval. The ```offset``` and ```limit``` properties specify which of the total available results have been returned.
  * scheduledMessages **required** `array`: An array of scheduledMessage objects containing properties of each unsent scheduled message.
    * items [scheduledMessage](#scheduledmessage)

### deleteScheduledMessages
Delete a list of previously scheduled SMS messages that have not yet been sent.<br> Credits originally deducted for each SMS message will be refunded to your account upon successful deletion.


```js
winsms_co_za.deleteScheduledMessages({
  "apiIds": []
}, context)
```

#### Input
* input `object`
  * apiIds **required** `array`
    * items `integer`

#### Output
* output [deleteScheduledResponse](#deletescheduledresponse)

### getSubAccounts
Get a list of all Sub Accounts.<br>


```js
winsms_co_za.getSubAccounts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output
  * statusCode **required** `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp **required** `string`: The date/time of the call, in the format YYYYMMDDhhmmssSSS
  * version **required** `string`: The current version of the API of the endpoint that was called
  * subAccounts `array`: An array of subAccount objects containing properties of each Sub Account owned by the Main Account.
    * items [subAccount](#subaccount)



## Definitions

### creditBalanceResponse
* creditBalanceResponse `object`
  * creditBalance **required** `number`: The current remaining credit balance for the account. Contains a single decimal place

### creditTransferRequest
* creditTransferRequest `object`
  * receivingAccountNumber **required** `integer`: The WinSMS account number of the account to which credits will be added.
  * sendingAccountNumber **required** `integer`: The WinSMS account number of the account from which credits will be deducted.
  * transferQuantity **required** `integer`: The number of credits to transfer from the sending account to the receiving account.

### creditTransferResponse
* creditTransferResponse `object`
  * transferSuccessful **required** `boolean`: A boolean value indictating whether the credits were successfully transfered from the sending account into the receiving account.

### deleteScheduledResponse
* deleteScheduledResponse `object`
  * deletedMessageStatuses **required** `array`: An array of deletedMessageStatus objects detailing the deleted status of each message requested for deletion.
    * items [deletedMessageStatus](#deletedmessagestatus)

### deletedMessageStatus
* deletedMessageStatus `object`
  * apiMessageId **required** `integer`: The WinSMS API Message Id identifying the SMS message.
  * creditCost **required** `number`: The number of credits refunded to your account after deleting the scheduled message.<br> If the deletion was unsuccessful, this value will be 0.
  * deleteError **required** `string`: If the `deleted` value is false, this will contain an error code indicating the reason for the failure. If the scheduled SMS message was successfully delivered, this value will be blank.
  * deleted **required** `boolean`: A boolean value indicating whether a scheduled SMS message was successfully deleted
  * mobileNumber **required** `string`: The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format

### errorDetails
* errorDetails `object`
  * errorMessage **required** `string`: A plain text description of the error that occurred, and possible solutions if available. 
  * statusCode **required** `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp **required** `string`: The date/time of the call, in the format YYYYMMDDhhmmssSSS
  * version **required** `string`: The current version of the API of the endpoint that was called

### incomingMessage
* incomingMessage `object`
  * incomingApiMessageId **required** `number`: The unique API message id assigned to this incoming message.
  * messageText **required** `string`: The text of the incoming SMS message.
  * mobileNumber **required** `string`: The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format
  * outgoingApiMessageId **required** `number`: The API message id of the most recent message sent to the mobile number that responded.
  * receiveTime **required** `integer`: The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.

### incomingMessageResponse
* incomingMessageResponse `object`
  * incomingMessages **required** `array`: An array of incomingMessage objects containing properties of each incoming message.
    * items [incomingMessage](#incomingmessage)

### incomingOptoutMessage
* incomingOptoutMessage `object`
  * incomingApiMessageId **required** `number`: The unique API message id assigned to this incoming opt-out message.
  * messageText **required** `string`: The text of the opt-out SMS message.
  * mobileNumber **required** `string`: The mobile number that sent the opt-out SMS message, displayed using the international E164 (without the plus) format
  * receiveTime **required** `integer`: The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.

### incomingOptoutMessageResponse
* incomingOptoutMessageResponse `object`
  * incomingOptoutMessages **required** `array`: An array of incomingOptoutMessage objects containing properties of each opt-out message.
    * items [incomingOptoutMessage](#incomingoptoutmessage)

### messageRecipientRequest
* messageRecipientRequest `object`
  * clientMessageId `string`: Optional -  <p>A parameter to identify an individual SMS message recipient on your system. The clientMessageId parameter is NOT saved by the WinSMS API.</p> <p> The value of the clientMessageId parameter is returned in the submittedRecipientResult object of the response, allowing you to match a sent message to a returned message result status. </p>
  * mobileNumber **required** `string`: A recipient mobile number, using the international E164 (without the plus) format.

### messageRecipientResponse
* messageRecipientResponse `object`
  * acceptError **required** `string`: If the "accepted" value is false, this will contain the reason that delivery to the recipient was declined by the API. If the recipient was accepted, this value will be blank.
  * accepted **required** `boolean`: A boolean value indicating whether the API accepted the recipient for SMS delivery. This will be false If you have insufficient credits or the recipient mobile number supplied is not valid.
  * apiMessageId **required** `integer`: The WinSMS Message Id assigned to the specific message recipient. This Id can be used to obtain the status of the message, and to delete the message if it was scheduled. If the API did not accept the recipient for delivery, the value will be null.
  * clientMessageId **required** `string`: If the optional clientMessageId value was specified in the recipient object for the recipient, it will be returned here. If not, clientMessageId will be null.
  * creditCost **required** `number`: The number of credits deducted from your account for the SMS to this recipient. The credit cost is based on the destination country of the recipient and the length (number of segments) of the message. This credit cost will be reimbursed if the message is scheduled and subsequently deleted. If the recipient is not accepted for delivery, the creditCost value will be null.
  * mobileNumber **required** `string`: The mobile number specified as the mobileNumber value of the recipient object of the request.
  * newCreditBalance **required** `number`: The number of WinSMS credits remaining in your account after processing this recipient.
  * scheduledTime **required** `integer`: The date and time that the message was scheduled for delivery to the recipient. If no scheduledTime value was specified in the request, or the recipient was not accepted for delivery, this value will be null.

### messageStatus
* messageStatus `object`
  * apiMessageId **required** `integer`: The WinSMS API Message Id identifying the SMS message.
  * creditCost **required** `number`: The number of credits deducted from your account for the SMS to this recipient.<br> If delivery to the recipient is unsuccessful, under certain conditions, this may be 0.
  * mobileNumber **required** `string`: The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format
  * statusDelivered **required** `boolean`: A boolean value indicating whether an SMS message was successfully delivered to the recipient's mobile number
  * statusErrorCode **required** `string`: If the `statusDelivered` value is false, this will contain an error code indicating the reason for the SMS delivery failure. If the SMS message was successfully delivered, this value will be blank.
  * statusTime **required** `integer`: The date and time of the last status update for this message, in the format YYYYMMDDHHmm. <br>If the message was delivered (**statusDelivered = true**) then this is a final status time. If the message is still awaiting delivery, this time might change when updates are received.

### messageStatusResponse
* messageStatusResponse `object`
  * messageStatuses **required** `array`: An array of Message Status objects detailing the delivery status of each message
    * items [messageStatus](#messagestatus)

### responseMetadata
* responseMetadata `object`
  * statusCode **required** `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp **required** `string`: The date/time of the call, in the format YYYYMMDDhhmmssSSS
  * version **required** `string`: The current version of the API of the endpoint that was called

### responsePagination
* responsePagination `object`
  * resultLimit **required** `integer`: The number of items returned in the results. This is the value specified in the ```limit``` parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
  * resultOffset **required** `integer`: The number of items skipped before the results were returned. This is the value specified in the ```offset``` parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
  * resultTotalAvailable **required** `integer`: The total number of results available for retrieval. The ```offset``` and ```limit``` properties specify which of the total available results have been returned.

### scheduledMessage
* scheduledMessage `object`
  * apiMessageId **required** `integer`: The WinSMS API Message Id identifying the SMS message.
  * creditCost **required** `number`: The number of credits deducted from your account for the SMS to this recipient.<br> This is the number of credits that will be refunded if you delete this scheduled message.
  * mobileNumber **required** `string`: The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format
  * scheduledSendTime **required** `integer`: The date and time the message is scheduled to be delivered to the recipient, in the format YYYYMMDDHHmm.
  * submitTime **required** `integer`: The date and time the message was originally submitted for scheduled delivery, in the format YYYYMMDDHHmm.

### scheduledMessageResponse
* scheduledMessageResponse `object`
  * scheduledMessages **required** `array`: An array of scheduledMessage objects containing properties of each unsent scheduled message.
    * items [scheduledMessage](#scheduledmessage)

### sendMessageRequest
* sendMessageRequest `object`
  * maxSegments `integer`: Optional - <p>The maximum <a href="https://support.winsms.co.za/rest/GSM">GSM Encoded segment count</a> that the message is allowed to utilise.</p> <p>This defaults to 1, allowing for a maximum GSM Encoded message length of 160 characters.</p> <p>The maximum value is 6, which allows for a GSM Encoded message length of 918 characters.</p> <p>If you intend to send a message longer than 160 characters, this value should be specified.</p>
  * message **required** `string`: The SMS text to be sent. The text can be a maximum of 918 characters long. If you are submitting a message longer than 160 characters, you should change the value of "maxSegments".
  * recipients **required** `array`: An array of messageRecipientRequest objects.
    * items [messageRecipientRequest](#messagerecipientrequest)
  * scheduledTime `integer`: Optional -<p> The date and time that an SMS should be delivered. If not specified, or is set for a date/time prior to now, the SMS message will be sent immediately.</p> <p>If specified, this value should have the format YYYYMMDDHHmm.</p>

### sendMessageResponse
* sendMessageResponse `object`
  * recipients **required** `array`: An array of messageRecipientResponse objects
    * items [messageRecipientResponse](#messagerecipientresponse)

### shortcodeMessage
* shortcodeMessage `object`
  * incomingApiMessageId **required** `number`: The unique API message id assigned to this incoming message.
  * messageText **required** `string`: The text of the incoming SMS message.
  * mobileNumber **required** `string`: The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format
  * receiveTime **required** `integer`: The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.

### shortcodeMessageResponse
* shortcodeMessageResponse `object`
  * shortcodeMessages **required** `array`: An array of shortcodeMessage objects containing properties of each incoming shortcode message received by WinSMS.
    * items [shortcodeMessage](#shortcodemessage)

### subAccount
* subAccount `object`
  * accountNumber **required** `integer`: The WinSMS account number of the Sub Account. This is supplied as an integer, without the leading 'W' displayed in the WinSMS Client Zone.
  * creditBalance `number`: The remaining credit balance for the Sub Account.
  * firstName **required** `integer`: The first name of the user that the Sub Account is registered to.
  * loginName **required** `string`: The login name of the user that the Sub Account is registered to.
  * surname **required** `string`: The surname of the user that the Sub Account is registered to.

### subAccountsListResponse
* subAccountsListResponse `object`
  * subAccounts `array`: An array of subAccount objects containing properties of each Sub Account owned by the Main Account.
    * items [subAccount](#subaccount)


