# @datafire/smtp

Client library for SMTP

## Installation and Usage
```bash
npm install --save @datafire/smtp
```
```js
let smtp = require('@datafire/smtp').create({
  host: "",
  port: "",
  username: "",
  password: ""
});

smtp.send({
  "envelope": {
    "from": "",
    "to": []
  },
  "message": ""
}).then(data => {
  console.log(data);
});
```

## Description

Send e-mail using the SMTP protocol

## Actions

### send



```js
smtp.send({
  "envelope": {
    "from": "",
    "to": []
  },
  "message": ""
}, context)
```

#### Input
* input `object`
  * envelope **required** `object`
    * from **required** `string`: The address of the message's sender
    * to **required** `array`: The addresses of all recipients
      * items `string`
    * size `integer`: (optional) predicted message size in bytes
    * use8BitMime `boolean`: If true then inform the server that this message might contain bytes outside 7bit ascii range
    * dsn `object`
      * ret `string` (values: FULL, HDRS): return either the full message (FULL) or only headers (HDRS)
      * envid `string`: Sender's envelope identifier, for tracking
      * notify `string`: When to send a DSN. Multiple options are OK - array or comma delimited. NEVER must appear by itself. Available options: NEVER, SUCCESS, FAILURE, DELAY
      * orcpt `string`: Original recipient
  * message **required** `string`: The message to send. All newlines are converted to \r\n and all dots are escaped automatically.

#### Output
* output `object`
  * accepted `array`
    * items `string`
  * rejected `array`
    * items `string`
  * envelopeTime `integer`
  * messageTime `integer`
  * messageSize `integer`
  * response `string`



## Definitions

*This integration has no definitions*
