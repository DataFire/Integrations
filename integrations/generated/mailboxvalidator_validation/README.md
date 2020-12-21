# @datafire/mailboxvalidator_validation

Client library for MailboxValidator Email Validation

## Installation and Usage
```bash
npm install --save @datafire/mailboxvalidator_validation
```
```js
let mailboxvalidator_validation = require('@datafire/mailboxvalidator_validation').create();

.then(data => {
  console.log(data);
});
```

## Description

The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format. Refer to https://www.mailboxvalidator.com for further information.

## Actions

### v1.validation.single.get
The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.


```js
mailboxvalidator_validation.v1.validation.single.get({
  "email": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * format `string` (values: json, xml): Return the result in json (default) or xml format.
  * email **required** `string`: The email address to be validated.
  * key **required** `string`: API key.

#### Output
* output `string`



## Definitions

*This integration has no definitions*
