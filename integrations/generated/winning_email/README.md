# @datafire/winning_email

Client library for Winning Email

## Installation and Usage
```bash
npm install --save @datafire/winning_email
```
```js
let winning_email = require('@datafire/winning_email').create({
  internalApiKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Winning Email API allows you to access our services from your applications. Contact us if you need help with anything, or require access to something we don't yet offer. The API overview is available <a href='/api/v1/docs' target='_blank'>here</a>.

## Actions

### emailBooster
With our API, you can access the same results available through the Winning Email website, but in a raw, JSON, format, that you can use however you wish in your application. Read more about Email Booster <a href='/email-booster/' target='_blank'>here</a>.<br><br><strong>Input Parameters</strong><br>If <strong>source</strong> provided, then all other inputs are ignored. Otherwise, <strong>subject</strong> AND one or both of <strong>html</strong> and <strong>text</strong> are required.


```js
winning_email.emailBooster({}, context)
```

#### Input
* input `object`
  * subject `string`: email subject
  * html `string`: html body
  * text `string`: plain text body
  * source `string`: raw source

#### Output
* output `object`
  * message `string`
  * report [Report](#report)
  * status `integer`

### rateLimitStatus
Check how many API queries you've used, and what your limit is.


```js
winning_email.rateLimitStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`
  * services `array`
    * items [Service](#service)
  * status `integer`

### status
Check the status of the Winning Email API.


```js
winning_email.status(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`
  * status `integer`
  * uptime `number`



## Definitions

### ErrorModel
* ErrorModel `object`
  * message **required** `string`
  * status **required** `integer`

### Report
* Report `object`
  * baseScore `integer`
  * report `object`
    * bodyReport `object`
      * address `object`
      * hasForm `integer`
      * hasJS `integer`
      * htmlLength `integer`
      * score `number`
      * textLength `integer`
    * imageReport `object`
      * imagesNeedOptimization `integer`
      * imagesNoAlt `array`
      * optimization `array`
      * score `number`
    * linkReport `object`
      * errors `array`
      * score `number`
    * markupReport `object`
      * response `object`
        * errors `array`
        * groupedErrors `array`
        * tripleTree `array`
        * warnings `array`
      * score `number`
    * spamassassinReport `object`
      * baseSpamScore `number`
      * isSpam `boolean`
      * responseCode `integer`
      * responseMessage `string`
      * score `number`
      * spamScore `number`
      * tests `array`
        * items `object`
          * desc `string`
          * name `string`
          * score `number`
    * spellReport `object`
      * html `array`
      * score `number`
      * subject `array`
      * text `array`
    * subjectReport `object`
      * openrates `array`
      * overallOpenRate `string`
      * score `number`
      * subject `string`
      * subjectLength `integer`
    * validateHTML `object`
      * errors `array`
        * items `object`
          * lastColumn `integer`
          * lastLine `integer`
          * message `string`
          * type `string`
      * score `number`
  * score `number`
  * time `string`

### Service
* Service `object`
  * limit `integer`
  * name `string`
  * remaining `integer`
  * reset `integer`
  * used `integer`


