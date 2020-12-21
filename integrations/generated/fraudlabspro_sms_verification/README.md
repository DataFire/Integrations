# @datafire/fraudlabspro_sms_verification

Client library for FraudLabs Pro SMS Verification

## Installation and Usage
```bash
npm install --save @datafire/fraudlabspro_sms_verification
```
```js
let fraudlabspro_sms_verification = require('@datafire/fraudlabspro_sms_verification').create();

.then(data => {
  console.log(data);
});
```

## Description

Send an SMS with verification code and a custom message for authentication purpose. It helps merchants to minimize chargebacks and fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

## Actions

### v1.verification.result.get
Verify that an OTP sent by the Send SMS Verification API is valid.


```js
fraudlabspro_sms_verification.v1.verification.result.get({
  "tran_id": "",
  "key": "",
  "otp": ""
}, context)
```

#### Input
* input `object`
  * tran_id **required** `string`: The unique ID that was returned by the Send Verification SMS API that triggered the OTP sms.
  * key **required** `string`: FraudLabs Pro API key.
  * format `string` (values: json, xml): Returns the API response in json (default) or xml format.
  * otp **required** `string`: The OTP that was sent to the recipient’s phone.

#### Output
* output `string`

### v1.verification.send.post
Send an SMS with verification code and a custom message for authentication purpose.


```js
fraudlabspro_sms_verification.v1.verification.send.post({
  "tel": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * country_code `string`: ISO 3166 country code for the recipient mobile phone number. If parameter is supplied, then some basic telephone number validation is done.
  * format `string` (values: json, xml): Returns the API response in json (default) or xml format.
  * tel **required** `string`: The recipient mobile phone number in E164 format which is a plus followed by just numbers with no spaces or parentheses.
  * key **required** `string`: FraudLabs Pro API key.
  * mesg `string`: The message template for the SMS. Add <otp> as placeholder for the actual OTP to be generated. Max length is 140 characters.

#### Output
* output `string`



## Definitions

*This integration has no definitions*
