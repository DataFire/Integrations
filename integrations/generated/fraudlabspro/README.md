# @datafire/fraudlabspro

Client library for FraudLabs Pro Fraud Detection

## Installation and Usage
```bash
npm install --save @datafire/fraudlabspro
```
```js
let fraudlabspro = require('@datafire/fraudlabspro').create();

fraudlabspro.v1.order.feedback.post({
  "id": "",
  "key": "",
  "action": ""
}).then(data => {
  console.log(data);
});
```

## Description

Online payment fraud detection service. It helps merchants to minimize chargebacks and therefore maximize the revenue. It can be used to detect fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

## Actions

### v1.order.feedback.post
Feedback the status of an order transaction.


```js
fraudlabspro.v1.order.feedback.post({
  "id": "",
  "key": "",
  "action": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * key **required** `string`
  * format `string` (values: json, xml)
  * action **required** `string` (values: APPROVE, REJECT, REJECT_BLACKLIST)
  * notes `string`

#### Output
* output `string`

### v1.order.screen.post
Screen order for payment fraud.


```js
fraudlabspro.v1.order.screen.post({
  "ip": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`
  * key **required** `string`
  * format `string` (values: json, xml)
  * last_name `string`
  * first_name `string`
  * bill_addr `string`
  * bill_city `string`
  * bill_state `string`
  * bill_country `string`
  * bill_zip_code `string`
  * ship_addr `string`
  * ship_city `string`
  * ship_state `string`
  * ship_country `string`
  * ship_zip_code `string`
  * email_domain `string`
  * user_phone `string`
  * email `string`
  * email_hash `string`
  * username_hash `string`
  * password_hash `string`
  * bin_no `string`
  * card_hash `string`
  * avs_result `string`
  * cvv_result `string`
  * user_order_id `string`
  * user_order_memo `string`
  * amount `number`
  * quantity `integer`
  * currency `string`
  * department `string`
  * payment_mode `string`
  * flp_checksum `string`

#### Output
* output `string`



## Definitions

*This integration has no definitions*
