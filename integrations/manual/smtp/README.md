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

.then(data => {
  console.log(data);
});
```

## Description

Send e-mail using the SMTP protocol

## Actions

### send



```js
smtp.send({
  "from": "",
  "to": []
}, context)
```

#### Input
* input `object`
  * from **required** `string`: Email address of the sender
  * to **required** `array`: Email addresses of the recipients
    * items `string`
  * cc `array`: Email addresses of CC recipients
    * items `string`
  * bcc `array`: Email addresses of BCC recipients
    * items `string`
  * subject `string`: The subject of the email
  * text `string`: Plaintext content of the email message
  * html `string`: HTML content of the email message
  * attachments `array`
    * items `object`
      * filename `string`
      * cid `string`: optional content ID
      * content `string`: File contents
      * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
      * contentType `string`
      * contentDisposition `string`
  * envelope `object`
    * from `string`: From header for the email
    * to `array`: To header for the email
      * items `string`
    * size `integer`: (optional) predicted message size in bytes
    * use8BitMime `boolean`: If true then inform the server that this message might contain bytes outside 7bit ascii range
    * dsn `object`
      * ret `string` (values: FULL, HDRS): return either the full message (FULL) or only headers (HDRS)
      * envid `string`: Sender's envelope identifier, for tracking
      * notify `string`: When to send a DSN. Multiple options are OK - array or comma delimited. NEVER must appear by itself. Available options: NEVER, SUCCESS, FAILURE, DELAY
      * orcpt `string`: Original recipient

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
