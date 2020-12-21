# @datafire/d7networks

Client library for D7SMS

## Installation and Usage
```bash
npm install --save @datafire/d7networks
```
```js
let d7networks = require('@datafire/d7networks').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

D7 SMS allows you to reach your customers via SMS over D7's own connectivity to global mobile networks. D7 provides reliable and cost-effective SMS services to businesses across all industries and aims to connect all countries and territories via direct connections.

## Actions

### BalanceGet
Check account balance


```js
d7networks.BalanceGet(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### SendPost
Send SMS  to recipients using D7 SMS Gateway


```js
d7networks.SendPost({
  "Content-Type": "",
  "Accept": "",
  "body": {
    "to": 0,
    "from": "",
    "content": ""
  }
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * Accept **required** `string`
  * body **required** [SendSMSRequest](#sendsmsrequest)

#### Output
*Output schema unknown*

### SendbatchPost
Send Bulk SMS  to multiple recipients using D7 SMS Gateway


```js
d7networks.SendbatchPost({
  "Content-Type": "",
  "Accept": "",
  "body": {
    "messages": []
  }
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * Accept **required** `string`
  * body **required** [BulkSMSRequest](#bulksmsrequest)

#### Output
*Output schema unknown*



## Definitions

### BulkSMSRequest
* BulkSMSRequest `object`: Bulk SMS Request
  * messages **required** `array`: Sendbatch message body
    * items [Message](#message)

### Message
* Message `object`
  * content **required** `string`
  * from **required** `string`
  * to **required** `array`: Destination Number
    * items `string`

### SendSMSRequest
* SendSMSRequest `object`: Send SMS Request
  * content **required** `string`: Message Content
  * from **required** `string`: Sender ID / Number
  * to **required** `integer`: Destination Mobile Number


