# @datafire/passwordutility

Client library for PasswordUtility.Web

## Installation and Usage
```bash
npm install --save datafire @datafire/passwordutility
```

```js
let datafire = require('datafire');
let passwordutility = require('@datafire/passwordutility').actions;
let context = new datafire.Context();

passwordutility.Password_Generate({}, context).then(data => {
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

#### Parameters
* length (integer) **required**
* upperCase (boolean)
* digits (boolean)
* specialCharacters (boolean)

### Password_Validate



```js
passwordutility.Password_Validate({
  "password": ""
}, context)
```

#### Parameters
* password (string) **required**

