# @datafire/winning_email

Client library for Winning Email

## Installation and Usage
```bash
npm install --save datafire @datafire/winning_email
```

```js
let datafire = require('datafire');
let winning_email = require('@datafire/winning_email').create({
  internalApiKey: "",
});

winning_email.emailBooster({}).then(data => {
  console.log(data);
})
```

## Description
The Winning Email API allows you to access our services from your applications. Contact us if you need help with anything, or require access to something we don't yet offer. The API overview is available <a href='/api/v1/docs' target='_blank'>here</a>.

## Actions
### emailBooster
With our API, you can access the same results available through the Winning Email website, but in a raw, JSON, format, that you can use however you wish in your application. Read more about Email Booster <a href='/email-booster/' target='_blank'>here</a>.<br><br><strong>Input Parameters</strong><br>If <strong>source</strong> provided, then all other inputs are ignored. Otherwise, <strong>subject</strong> AND one or both of <strong>html</strong> and <strong>text</strong> are required.


```js
winning_email.emailBooster({}, context)
```

#### Parameters
* subject (string) - email subject
* html (string) - html body
* text (string) - plain text body
* source (string) - raw source

### rateLimitStatus
Check how many API queries you've used, and what your limit is.


```js
winning_email.rateLimitStatus(null, context)
```

#### Parameters
*This action has no parameters*

### status
Check the status of the Winning Email API.


```js
winning_email.status(null, context)
```

#### Parameters
*This action has no parameters*

