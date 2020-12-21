# @datafire/fungenerators_qrcode

Client library for Fun Generators API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_qrcode
```
```js
let fungenerators_qrcode = require('@datafire/fungenerators_qrcode').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Fungenerators API gives access to the full set of generators available at fungenerators.com so that you can integrate them in your workflow or an app. [Click here to get details and subscribe](http://fungenerators.com/api) . Here are the individual API links:

  ## QR Code API ##
  Generate QR Code images for text, url, email , business cards etc. You can decode QR Code images and get the contents as well. The best and complete QR Code API on the cloud. [Click here to subscribe](http://fungenerators.com/api/qrcode)


## Actions

### qrcode.business_card.get
Get a QR Code image for a business card aka VCARD


```js
fungenerators_qrcode.qrcode.business_card.get({
  "firstname": "",
  "lastname": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * firstname **required** `string`: First Name
  * lastname **required** `string`: Last Name
  * middlename `string`: Middle Name
  * email **required** `string`: Email id
  * company `string`: Company Name
  * phone_work `string`: Work Phone Number
  * phone_home `string`: Home Phone Number
  * phone_cell `string`: Cell Phone Number
  * street1 `string`: Street Address
  * street2 `string`: Street Address 2
  * city `string`: City
  * zip `string`: Zip Code
  * state `string`: State
  * country `string`: Country
  * format `string`: Output image format. Must be one of png/eps/raw/svg

#### Output
*Output schema unknown*

### qrcode.decode.post
Decode a QR Code image and return the cotents if successful


```js
fungenerators_qrcode.qrcode.decode.post({
  "qrimage": ""
}, context)
```

#### Input
* input `object`
  * qrimage **required** `string`, `object`: QR Code image to decode and get the content value
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
*Output schema unknown*

### qrcode.email.get
Get a QR Code image for an email


```js
fungenerators_qrcode.qrcode.email.get({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: Email id to send the email to
  * subject `string`: Subject of the email(optional)
  * body `string`: Body of the email(optional)
  * format `string`: Output image format. Must be one of png/png/eps/raw/svg

#### Output
*Output schema unknown*

### qrcode.phone.get
Get a QR Code image for a phone number


```js
fungenerators_qrcode.qrcode.phone.get({
  "number": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: Phone Number
  * format `string`: Output image format. Must be one of png/eps/raw/svg

#### Output
*Output schema unknown*

### qrcode.raw.get
Get a QR Code image for a block of raw data


```js
fungenerators_qrcode.qrcode.raw.get({
  "rawtext": ""
}, context)
```

#### Input
* input `object`
  * rawtext **required** `string`: Raw Text value
  * format `string`: Output image format. Must be one of png/eps/raw/svg

#### Output
*Output schema unknown*

### qrcode.skype.get
Get a QR Code image for a skype user


```js
fungenerators_qrcode.qrcode.skype.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: Skype User name
  * format `string`: Output image format. Must be one of png/eps/raw/svg

#### Output
*Output schema unknown*

### qrcode.sms.get
Get a QR Code image for a Phone number for SMS messaging


```js
fungenerators_qrcode.qrcode.sms.get({
  "number": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: Phone Number to SMS
  * format `string`: Output image format. Must be one of png/eps/raw/svg

#### Output
*Output schema unknown*

### qrcode.text.get
Get a QR Code image for a block of text


```js
fungenerators_qrcode.qrcode.text.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text value
  * format `string`: Output image format. Must be one of png/eps/raw/svg

#### Output
*Output schema unknown*

### qrcode.url.get
Get a QR Code image for a url


```js
fungenerators_qrcode.qrcode.url.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: URL value
  * format `string`: Output image format. Must be one of png/raw/eps/svg

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
