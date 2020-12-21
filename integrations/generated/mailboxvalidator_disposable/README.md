# @datafire/mailboxvalidator_disposable

Client library for MailboxValidator Disposable Email Checker

## Installation and Usage
```bash
npm install --save @datafire/mailboxvalidator_disposable
```
```js
let mailboxvalidator_disposable = require('@datafire/mailboxvalidator_disposable').create();

.then(data => {
  console.log(data);
});
```

## Description

The MailboxValidator Disposable Email Checker API checks if a single email address is from a disposable email provider and returns the results in either JSON or XML format. Refer to https://www.mailboxvalidator.com/api-email-disposable for further information.

## Actions

### v1.email.disposable.get
The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.


```js
mailboxvalidator_disposable.v1.email.disposable.get({
  "email": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * format `string` (values: json, xml): Return the result in json (default) or xml format.
  * email **required** `string`: The email address to check if is from a disposable email provider.
  * key **required** `string`: API key.

#### Output
* output `string`



## Definitions

*This integration has no definitions*
