# @datafire/winsms_co_za

Client library for WINSMS

## Installation and Usage
```bash
npm install --save @datafire/winsms_co_za
```
```js
let winsms_co_za = require('@datafire/winsms_co_za').create({
  APIKeyHeader: ""
});

.then(data => {
  console.log(data);
});
```

## Description

WinSMS RESTful API

## Actions

### getCreditBalance
Get the current remaining credit balance for the account.

***Note*** - The credit balance is expressed as a value with a single decimal place.



```js
winsms_co_za.getCreditBalance(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [creditBalanceResponse](#creditbalanceresponse)

### transferCredits
Transfer credits between accounts.
- From Main account to Sub account.

- From Sub account to Main account.

- From Sub account to another Sub account.

Your WinSMS account number and sub account number/s can be obtained by logging in to the WinSMS Client Zone (www.winsms.co.za/cz) with the main account's credentials.

The main account number is on the home tab and the sub account numbers are under the sub accounts tab.

Account numbers should be submitted as integers. Do not add the 'W' prefix.



```js
winsms_co_za.transferCredits({
  "creditTransferDetails": {
    "receivingAccountNumber": 0,
    "sendingAccountNumber": 0,
    "transferQuantity": 0
  }
}, context)
```

#### Input
* input `object`
  * creditTransferDetails **required** [creditTransferDetails](#credittransferdetails)

#### Output
* output [creditTransferResponse](#credittransferresponse)

### getShortCodeMessages
***Only available to users with a [WinSMS Short/Long Code](https://support.winsms.co.za/winsms-long-short-code-system/).***
Get a list of all incoming short/long code messages received by the account.

Only the first 100 incoming short/long code messages will be returned if no ***offset*** and ***limit*** parameters are specified.



```js
winsms_co_za.getShortCodeMessages({}, context)
```

#### Input
* input `object`
  * offset `integer`: ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.
  * limit `integer`: ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.

#### Output
* output [shortcodeMessageResponse](#shortcodemessageresponse)

### getIncomingMessages
Get a list of all incoming SMS messages received by the account.

Only the first 100 incoming messages will be returned if no ***offset*** and ***limit*** parameters are specified.



```js
winsms_co_za.getIncomingMessages({}, context)
```

#### Input
* input `object`
  * offset `integer`: ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.
  * limit `integer`: ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.

#### Output
* output [incomingMessageResponse](#incomingmessageresponse)

### getOptoutMessages
Get a list of all opt-out SMS messages received by the account, as well as all manually added opt-out numbers.<br>


```js
winsms_co_za.getOptoutMessages(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [optoutMessageResponse](#optoutmessageresponse)

### smsSend
Submit 1 or more SMS messages to be sent by WinSMS. Maximum 1000 recipients per request.

The SMS message text can be a maximum of 918 characters long. If you are submitting a message longer than 160 characters, you should change the value of ***maxSegments***.



```js
winsms_co_za.smsSend({
  "newMessageDetails": {
    "message": "",
    "recipients": []
  }
}, context)
```

#### Input
* input `object`
  * newMessageDetails **required** [newMessageDetails](#newmessagedetails)

#### Output
* output [newMessageResponse](#newmessageresponse)

### smsSendBatch
Submit multiple different SMS messages to be sent to multiple recipients. Maximum 1000 recipients across all messages.

Each SMS message text can be a maximum of 918 characters long. If you are submitting a message longer than 160 characters, you should change the value of ***maxSegments***.



```js
winsms_co_za.smsSendBatch({
  "multiMessageDetails": {}
}, context)
```

#### Input
* input `object`
  * multiMessageDetails **required** [multiMessageDetails](#multimessagedetails)

#### Output
* output [multiMessageResponse](#multimessageresponse)

### smsStatus
Get a list of previously submitted SMS message delivery statuses.

Post an array of API Message Ids received from the ***/sms/outgoing/send*** endpoint.



```js
winsms_co_za.smsStatus({
  "messageStatusRequest": []
}, context)
```

#### Input
* input `object`
  * messageStatusRequest **required** `array`
    * items `integer`

#### Output
* output [messageStatusResponse](#messagestatusresponse)

### getScheduledMessages
Get a list of all scheduled SMS messages that have not yet been sent.

Only the first 100 scheduled messages will be returned if no ***offset*** and ***limit*** parameters are specified.



```js
winsms_co_za.getScheduledMessages({}, context)
```

#### Input
* input `object`
  * offset `integer`: ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.
  * limit `integer`: ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.

#### Output
* output [scheduledMessageResponse](#scheduledmessageresponse)

### deleteScheduledMessages
Delete a list of previously scheduled SMS messages that have not yet been sent.

Credits originally deducted for each SMS message will be refunded to your account upon successful deletion.



```js
winsms_co_za.deleteScheduledMessages({
  "messageDeleteRequest": []
}, context)
```

#### Input
* input `object`
  * messageDeleteRequest **required** `array`
    * items `integer`

#### Output
* output [deleteScheduledResponse](#deletescheduledresponse)

### getSubAccounts
Get a list of all the Sub Accounts owned by the Main Account.


```js
winsms_co_za.getSubAccounts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [subAccountsResponse](#subaccountsresponse)



## Definitions

### creditBalanceResponse
* creditBalanceResponse `object`
  * creditBalance `number`: The current remaining credit balance for the account. Contains a single decimal place
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called

### creditTransferDetails
* creditTransferDetails `object`
  * receivingAccountNumber **required** `integer`: The WinSMS account number of the account to which credits will be added.
  * sendingAccountNumber **required** `integer`: The WinSMS account number of the account from which credits will be deducted.
  * transferQuantity **required** `integer`: The number of credits to transfer from the sending account to the receiving account.

### creditTransferResponse
* creditTransferResponse `object`
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * transferSuccessful `boolean`: A boolean value indictating whether the credits were successfully transfered from the sending account into the receiving account.
  * version `string`: The current version of the API of the endpoint that was called

### deleteScheduledResponse
* deleteScheduledResponse `object`
  * deletedMessageStatuses `array`: An array of ***deletedMessageStatus*** objects detailing the deleted status of each message requested for deletion.
    * items [deletedMessageStatus](#deletedmessagestatus)
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called

### deletedMessageStatus
* deletedMessageStatus `object`
  * apiMessageId `integer`: The WinSMS API Message Id identifying the SMS message.
  * creditCost `number`: The number of credits refunded to your account after deleting the scheduled message.
  * deleteError `string`: If the ***deleted*** value is false, this will contain an error code indicating the reason for the failure. If the scheduled SMS message was successfully deleted, this value will be blank.
  * deleted `boolean`: A boolean value indicating whether a scheduled SMS message was successfully deleted
  * mobileNumber `string`: The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format

### errorDetails
* errorDetails `object`
  * errorMessage `string`: A plain text description of the error that occurred, and possible solutions if available. 
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called

### incomingMessage
* incomingMessage `object`
  * incomingApiMessageId `number`: The unique API message id assigned to this incoming message.
  * messageText `string`: The text of the incoming SMS message.
  * mobileNumber `string`: The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format
  * outgoingApiMessageId `number`: The API message id of the most recent message sent to the mobile number that responded.
  * receiveTime `string`: The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.

### incomingMessageResponse
* incomingMessageResponse `object`
  * incomingMessages `array`: An array of ***incomingMessage*** objects containing properties of each incoming message.
    * items [incomingMessage](#incomingmessage)
  * resultsLimit `integer`: The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
  * resultsOffset `integer`: The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
  * resultsTotalAvailable `integer`: The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called

### incomingOptoutMessage
* incomingOptoutMessage `object`
  * incomingApiMessageId `number`: The unique API message id assigned to this incoming opt-out message.
  * messageText `string`: The text of the opt-out SMS message.
  * mobileNumber `string`: The mobile number that sent the opt-out SMS message, displayed using the international E164 (without the plus) format
  * receiveTime `string`: The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.

### messageDetails
* messageDetails `object`
  * maxSegments `integer`: ***Optional*** - The maximum [GSM Encoded segment count]("https://support.winsms.co.za/rest/GSM") that the message is allowed to utilise.
  * message **required** `string`: The SMS text to be sent.
  * recipients **required** `array`: An array of messageRecipientDetails objects.
    * items [messageRecipientDetails](#messagerecipientdetails)
  * scheduledTime `string`: ***Optional*** - The date and time that an SMS should be delivered. If not specified, or is set for a date/time prior to the current date/time, the SMS message will be sent immediately.

### messageDetailsResponse
* messageDetailsResponse `object`
  * message `string`: The message text that was sent.
  * recipients `array`: An array of messageRecipientResponse objects
    * items [messageRecipientResponse](#messagerecipientresponse)

### messageRecipientDetails
* messageRecipientDetails `object`
  * clientMessageId `string`: ***Optional*** - A parameter to identify an individual SMS message recipient on your system. The clientMessageId parameter is NOT saved by the WinSMS API. 
  * mobileNumber **required** `string`: A recipient mobile number, using the international E164 (without the plus) format.

### messageRecipientResponse
* messageRecipientResponse `object`
  * acceptError `string`: If the ***accepted*** value is **false**, this will contain the reason that delivery to the recipient was declined by the API. If the recipient was accepted, this value will be blank.
  * accepted `boolean`: A boolean value indicating whether the API accepted the recipient for SMS delivery. This will be **false** If you have insufficient credits or the recipient mobile number supplied is not valid.
  * apiMessageId `integer`: The WinSMS Message Id assigned to the specific message recipient. This Id can be used to obtain the status of the message, and to delete the message if it was scheduled. If the API did not accept the recipient for delivery, the value will be **null**.
  * clientMessageId `string`: If the optional ***clientMessageId*** value was specified in the recipient object for the recipient, it will be returned here. If not, ***clientMessageId*** will be **null**.
  * creditCost `number`: The number of credits deducted from your account for the SMS to this recipient.
  * mobileNumber `string`: The mobile number specified as the ***mobileNumber*** value of the recipient object of the request.
  * newCreditBalance `number`: The number of WinSMS credits remaining in your account after processing this recipient.
  * scheduledTime `string`: The date and time that the message was scheduled for delivery to the recipient.

### messageStatus
* messageStatus `object`
  * apiMessageId `integer`: The WinSMS API Message Id identifying the SMS message.
  * creditCost `number`: The number of credits deducted from your account for the SMS to this recipient.
  * mobileNumber `string`: The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format
  * statusDelivered `boolean`: A boolean value indicating whether an SMS message was successfully delivered to the recipient's mobile number
  * statusErrorCode `string`: If the SMS message was successfully delivered, this value will be blank.
  * statusTime `string`: The date and time of the last status update for this message, in the format YYYYMMDDHHmm.

### messageStatusResponse
* messageStatusResponse `object`
  * messageStatuses `array`: An array of ***messageStatus*** objects detailing the delivery status of each message
    * items [messageStatus](#messagestatus)
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called

### multiMessageDetails
* multiMessageDetails `object`
  * messages `array`
    * items [messageDetails](#messagedetails)

### multiMessageResponse
* multiMessageResponse `object`
  * messages `array`: An array of messageDetailsResponse objects
    * items [messageDetailsResponse](#messagedetailsresponse)
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called

### newMessageDetails
* newMessageDetails `object`
  * maxSegments `integer`: ***Optional*** - The maximum [GSM Encoded segment count]("https://support.winsms.co.za/rest/GSM") that the message is allowed to utilise.
  * message **required** `string`: The SMS text to be sent.
  * recipients **required** `array`: An array of messageRecipientDetails objects.
    * items [messageRecipientDetails](#messagerecipientdetails)
  * scheduledTime `string`: ***Optional*** - The date and time that an SMS should be delivered. If not specified, or is set for a date/time prior to the current date/time, the SMS message will be sent immediately.

### newMessageResponse
* newMessageResponse `object`
  * recipients `array`: An array of messageRecipientResponse objects
    * items [messageRecipientResponse](#messagerecipientresponse)
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called

### optoutMessageResponse
* optoutMessageResponse `object`
  * incomingOptoutMessages `array`: An array of ***incomingOptoutMessage*** objects containing properties of each opt-out message received.
    * items [incomingOptoutMessage](#incomingoptoutmessage)
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called

### scheduledMessage
* scheduledMessage `object`
  * apiMessageId `integer`: The WinSMS API Message Id identifying the SMS message.
  * creditCost `number`: The number of credits deducted from your account for the SMS to this recipient.
  * mobileNumber `string`: The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format
  * scheduledSendTime `string`: The date and time the message is scheduled to be delivered to the recipient, in the format YYYYMMDDHHmm.
  * submitTime `string`: The date and time the message was originally submitted for scheduled delivery, in the format YYYYMMDDHHmm.

### scheduledMessageResponse
* scheduledMessageResponse `object`
  * resultsLimit `integer`: The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
  * resultsOffset `integer`: The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
  * resultsTotalAvailable `integer`: The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.
  * scheduledMessages `array`: An array of ***scheduledMessage*** objects containing properties of each unsent scheduled message.
    * items [scheduledMessage](#scheduledmessage)
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called

### shortcodeMessage
* shortcodeMessage `object`
  * incomingApiMessageId `number`: The unique API message id assigned to this incoming message.
  * messageText `string`: The text of the incoming SMS message.
  * mobileNumber `string`: The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format
  * receiveTime `string`: The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.

### shortcodeMessageResponse
* shortcodeMessageResponse `object`
  * resultsLimit `integer`: The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
  * resultsOffset `integer`: The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
  * resultsTotalAvailable `integer`: The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.
  * shortcodeMessages `array`: An array of ***shortcodeMessage*** objects containing properties of each incoming shortcode message received by WinSMS.
    * items [shortcodeMessage](#shortcodemessage)
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called

### subAccount
* subAccount `object`
  * accountNumber `integer`: The WinSMS account number of the Sub Account. This is supplied as an integer, without the leading 'W' displayed in the WinSMS Client Zone.
  * creditBalance `number`: The remaining credit balance for the Sub Account.
  * firstName `string`: The first name of the user that the Sub Account is registered to.
  * loginName `string`: The login name of the user that the Sub Account is registered to.
  * surname `string`: The surname of the user that the Sub Account is registered to.

### subAccountsResponse
* subAccountsResponse `object`
  * statusCode `integer`: The http status code returned - reflected in the body for convenience
  * subAccounts `array`: An array of ***subAccount*** objects containing properties of each Sub Account owned by the Main Account.
    * items [subAccount](#subaccount)
  * timeStamp `string`: The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
  * version `string`: The current version of the API of the endpoint that was called


