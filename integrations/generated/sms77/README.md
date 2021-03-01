# @datafire/sms77

Client library for Sms77.io

## Installation and Usage

```bash
npm install --save @datafire/sms77
```

```javascript
const sms77 = require('@datafire/sms77').create({
    apiKey: "",
}).then(console.log).catch(console.error);
```

## Description

Sms77.io allows you to reach your customers via SMS. Sms77.io allows safe and economical
SMS services to companies across all sectors and ambitions to join together all soils
through straight communication.

## Actions

### BalanceGet

Check account balance

```js
sms77.Balance(null, context)
```

#### Input

*This action has no parameters*

#### Output

* output `string`

### SendPost

Send SMS to one/multiple recipient(s) using the Sms77.io SMS Gateway

```js
sms77.Sms({
    "body": {
        "to": "+491771783130",
        "text": "Greetings from Sms77.io!"
    }
}, context)
```

#### Input

* input `object`
    * body **required** [SmsParameters](#smsparameters)

#### Output

* output `string`


## Definitions

### SmsParameters

* SmsParameters `object`: SMS Parameters
    * text **required** `string`: Message Content
    * to **required** `integer`: Recipient Phone Number
    * debug `string` (values: 0, 1): Enable Debug
    * delay `string`: Set Delay
    * details `string` (values: 0, 1): Append Details
    * foreign_id `string`: Foreign ID
    * flash `string` (values: 0, 1): Enable Flash
    * from `string`: Caller ID (Sender)
    * json `string` (values: 0, 1): Return JSON
    * label `string`: Custom Label
    * no_reload `string` (values: 0, 1): Disable Reload Lock
    * performance_tracking `string` (values: 0, 1): Enable Performance Tracking
    * return_msg_id `string` (values: 0, 1): Append Message ID
    * ttl `string`: Custom Time To Live
    * udh `string`: Custom User Data Header
    * unicode `string` (values: 0, 1): Force Unicode
    * utf8 `string` (values: 0, 1): Force UTF-8