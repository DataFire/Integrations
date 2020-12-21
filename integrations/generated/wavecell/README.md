# @datafire/wavecell

Client library for Wavecell.Sms.Api

## Installation and Usage
```bash
npm install --save @datafire/wavecell
```
```js
let wavecell = require('@datafire/wavecell').create({
  BearerTokenHeader: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This API allows Wavecell customers to originate request to send SMS messages anywhere in the World. The messages can be send individually or as a bulk request.

## Actions

### SmsV1StatusGet



```js
wavecell.SmsV1StatusGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### SendManyMessages



```js
wavecell.SendManyMessages({
  "subAccountId": ""
}, context)
```

#### Input
* input `object`
  * subAccountId **required** `string`
  * body [BulkSmsRequest](#bulksmsrequest)

#### Output
* output [BulkSmsResponse](#bulksmsresponse)

### SendManyMessagesInCompactForm



```js
wavecell.SendManyMessagesInCompactForm({
  "subAccountId": ""
}, context)
```

#### Input
* input `object`
  * subAccountId **required** `string`
  * body [BulkSmsRequestCompact](#bulksmsrequestcompact)

#### Output
* output [BulkSmsResponse](#bulksmsresponse)

### SendSingleMessage



```js
wavecell.SendSingleMessage({
  "subAccountId": ""
}, context)
```

#### Input
* input `object`
  * subAccountId **required** `string`
  * body [SmsRequest](#smsrequest)

#### Output
* output [SmsResponse](#smsresponse)



## Definitions

### BulkSmsRequest
* BulkSmsRequest `object`
  * clientBatchId `string`
  * includeMessagesInResponse `boolean`
  * messages **required** `array`
    * items [SmsRequest](#smsrequest)
  * template [SmsTemplate](#smstemplate)

### BulkSmsRequestCompact
* BulkSmsRequestCompact `object`
  * clientBatchId `string`
  * destinations **required** `array`
    * items `string`
  * includeMessagesInResponse `boolean`
  * template **required** [SmsTemplate](#smstemplate)

### BulkSmsResponse
* BulkSmsResponse `object`
  * acceptedCount `integer`
  * batchId `string`
  * clientBatchId `string`
  * messages `array`
    * items [SmsResponse](#smsresponse)
  * rejectedCount `integer`

### ErrorResponse
* ErrorResponse `object`
  * code `integer`
  * errorId `string`
  * message `string`
  * timestamp `string`

### SmsRequest
* SmsRequest `object`
  * clientMessageId `string`
  * destination **required** `string`
  * encoding `string` (values: AUTO, GSM7bit, UNICODE)
  * expiry `string`
  * scheduled `string`
  * source `string`
  * text `string`

### SmsResponse
* SmsResponse `object`
  * clientMessageId `string`
  * destination `string`
  * status [SmsStatus](#smsstatus)
  * umid `string`

### SmsStatus
* SmsStatus `object`
  * code `string`
  * description `string`

### SmsTemplate
* SmsTemplate `object`
  * encoding `string` (values: AUTO, GSM7bit, UNICODE)
  * expiry `string`
  * scheduled `string`
  * source `string`
  * text `string`


