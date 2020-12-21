# @datafire/mailboxvalidator_checker

Client library for MailboxValidator Free Email Checker

## Installation and Usage
```bash
npm install --save @datafire/mailboxvalidator_checker
```
```js
let mailboxvalidator_checker = require('@datafire/mailboxvalidator_checker').create();

.then(data => {
  console.log(data);
});
```

## Description

The MailboxValidator Free Email Checker checks if a single email address is from a free email provider and returns the results in either JSON or XML format. Refer to https://www.mailboxvalidator.com/api-email-freem for further information.

## Actions

### v1.email.free.get
The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.


```js
mailboxvalidator_checker.v1.email.free.get({
  "email": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * format `string` (values: json, xml): Return the result in json (default) or xml format.
  * email **required** `string`: The email address to check if is from a free email provider.
  * key **required** `string`: API key.

#### Output
* output `string`



## Definitions

*This integration has no definitions*
