# @datafire/nextcaller

Client library for Next Caller

## Installation and Usage
```bash
npm install --save @datafire/nextcaller
```
```js
let nextcaller = require('@datafire/nextcaller').create();

nextcaller.version.records.get({}).then(data => {
  console.log(data);
})
```

## Description

Advanced Caller ID. Obtain name, address, and email of your inbound callers.

## Actions

### version.records.get
Returns Nextcaller member detailed info.


```js
nextcaller.version.records.get({
  "version": "",
  "phone": 0,
  "format": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v2, v3): Specifies a api version.
  * phone **required** `integer`: Specifies the caller's phone number.
  * format **required** `string` (values: json, xml): Specifies a format of response: JSON or XML.

#### Output
*Output schema unknown*

### version.users.nextcaller_id._format_format.post
Allows you to update caller's info on Nextcaller.


```js
nextcaller.version.users.nextcaller_id._format_format.post({
  "Content-Type": "",
  "version": "",
  "nextcaller_id": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * version **required** `string` (values: v2, v3): Specifies a api version.
  * nextcaller_id **required** `string`: The ID of the user whose profile you wish to edit
  * format **required** `string` (values: json, xml): Specifies a format of response: JSON or XML.

#### Output
*Output schema unknown*



## Definitions

** No definitions **
