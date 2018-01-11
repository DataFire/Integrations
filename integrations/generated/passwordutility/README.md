# @datafire/passwordutility

Client library for PasswordUtility.Web

## Installation and Usage
```bash
npm install --save @datafire/passwordutility
```
```js
let passwordutility = require('@datafire/passwordutility').create();

passwordutility.Password_Generate({}).then(data => {
  console.log(data);
})
```

## Description

Validate and generate passwords using open source tools

## Actions

### Password_Generate



```js
passwordutility.Password_Generate({
  "length": 0
}, context)
```

#### Input
* input `object`
  * length **required** `integer`
  * upperCase `boolean`
  * digits `boolean`
  * specialCharacters `boolean`

#### Output
* output [Object](#object)

### Password_Validate



```js
passwordutility.Password_Validate({
  "password": ""
}, context)
```

#### Input
* input `object`
  * password **required** `string`

#### Output
* output [Object](#object)



## Definitions

### Object
* Object `object`


