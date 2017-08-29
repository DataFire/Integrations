# @datafire/nextcaller

Client library for Next Caller

## Installation and Usage
```bash
npm install --save datafire @datafire/nextcaller
```

```js
let datafire = require('datafire');
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

#### Parameters
* version (string) **required** - Specifies a api version.
* phone (integer) **required** - Specifies the caller's phone number.
* format (string) **required** - Specifies a format of response: JSON or XML.

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

#### Parameters
* Content-Type (string) **required**
* version (string) **required** - Specifies a api version.
* nextcaller_id (string) **required** - The ID of the user whose profile you wish to edit
* format (string) **required** - Specifies a format of response: JSON or XML.

