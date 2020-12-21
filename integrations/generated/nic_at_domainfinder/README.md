# @datafire/nic_at_domainfinder

Client library for nic.at Domainfinder API Documentation

## Installation and Usage
```bash
npm install --save @datafire/nic_at_domainfinder
```
```js
let nic_at_domainfinder = require('@datafire/nic_at_domainfinder').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### api.v1.suggest.get
Provides a list of available .at domain names related to the given input term or domain


```js
nic_at_domainfinder.api.v1.suggest.get({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: Domainname/term to obtain suggestions for

#### Output
* output `object`
  *  `array`
    * items `string`



## Definitions

*This integration has no definitions*
