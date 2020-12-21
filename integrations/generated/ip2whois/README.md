# @datafire/ip2whois

Client library for IP2WHOIS Domain Lookup

## Installation and Usage
```bash
npm install --save @datafire/ip2whois
```
```js
let ip2whois = require('@datafire/ip2whois').create();

.then(data => {
  console.log(data);
});
```

## Description

IP2WHOIS is a free tool to allow you to check WHOIS information for a particular domain, such as domain assigned owner contact information, registrar information, registrant information, location and much more.

## Actions

### .get
Lookup WHOIS information


```js
ip2whois..get({
  "domain": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name for lookup purpose.
  * key **required** `string`: API key.

#### Output
* output `string`



## Definitions

*This integration has no definitions*
