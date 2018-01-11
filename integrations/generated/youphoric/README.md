# @datafire/youphoric

Client library for Youphoric

## Installation and Usage
```bash
npm install --save @datafire/youphoric
```
```js
let youphoric = require('@datafire/youphoric').create();

youphoric.register.php_.get({}).then(data => {
  console.log(data);
})
```

## Description

Youphoric SMS API allows you to create and launch SMS-based apps quickly to reach Smart subscribers in the Philippines. 

## Actions

### register.php_.get



```js
youphoric.register.php_.get({
  "client": "",
  "FirstName": "",
  "LastName": "",
  "username": "",
  "password": null,
  "email": "",
  "contactno": ""
}, context)
```

#### Input
* input `object`
  * client **required** `string`
  * FirstName **required** `string`: First Name
  * LastName **required** `string`: Last Name
  * MiddleName `string`: Middle Name
  * Street `string`: Street
  * Barangay `string`: Barangay
  * CityTown `string`: City or Town
  * Province `string`: Province
  * ZipCode `string`: Zip or Postal Code
  * username **required** `string`: Username
  * email **required** `string`: Email
  * contactno **required** `string`: Mobile or Telephone

#### Output
*Output schema unknown*

### mt.php_.post



```js
youphoric.mt.php_.post({
  "from": "",
  "to": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: Characters limit 11
  * to **required** `string`: Mobile Number.
  * text **required** `string`: Text Message

#### Output
*Output schema unknown*



## Definitions

** No definitions **
