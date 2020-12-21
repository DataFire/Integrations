# @datafire/mastercard_billpay

Client library for Bill Payment Validator

## Installation and Usage
```bash
npm install --save @datafire/mastercard_billpay
```
```js
let mastercard_billpay = require('@datafire/mastercard_billpay').create();

.then(data => {
  console.log(data);
});
```

## Description

The Bill Payment Validator service allows RPPS origination (payment sender) customers to identify if a potential RPPS transaction would process successfully before transmitting the formal payment transaction, reducing RPPS payment rejects and costly payment processing exceptions.

## Actions

### isRoutingValid.post
Bill Payment Validator performs real time transaction validation against the specified Biller ID's account masks, account check digits and all other registered RPPS processing parameters.


```js
mastercard_billpay.isRoutingValid.post({}, context)
```

#### Input
* input `object`
  * BillPayRequest [BillPayRequest](#billpayrequest)

#### Output
* output [BillPayResponse](#billpayresponse)



## Definitions

### BillPayAccountValidation
* BillPayAccountValidation `object`
  * AccountNumber `string`: Consumer account number populated in the message.  The minimum length is 8 and the maximum length is 22.
  * BillerId `string`: Biller ID populated in the message. The maximum length is 10.
  * CustomerIdentifier1 `string`: Consumer identifier populated in the message.
  * CustomerIdentifier2 `string`: Consumer identifier populated in the message.
  * CustomerIdentifier3 `string`: Consumer identifier populated in the message.
  * CustomerIdentifier4 `string`: Consumer identifier populated in the message.
  * ResponseString `string`: Indicates if the bill payment transaction information passed all RPPS transaction processing edits for the specified biller ID or indicates errors. The minimum length is 0 and the maximum length is 120.
  * RppsId `string`: Originator RPPS ID populated in the message.  The maximum length is 8.
  * TransactionAmount `string`: Amount populated in the message.

### BillPayRequest
* BillPayRequest `object`
  * BillPayAccountValidation [BillPayAccountValidation](#billpayaccountvalidation)

### BillPayResponse
* BillPayResponse `object`
  * BillPayAccountValidation [BillPayAccountValidation](#billpayaccountvalidation)

### Error
* Error `object`
  * ReasonCode `string`: This will identify the reason for the error.
  * Source `string`: This is the unique identifier that attempts to define the field in error when available.  If a specific field can't be identified System will be returned.

### ErrorResponse
* ErrorResponse `object`
  * Errors [Errors](#errors)

### Errors
* Errors `object`
  * Error `array`
    * items [Error](#error)


