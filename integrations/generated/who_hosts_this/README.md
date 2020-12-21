# @datafire/who_hosts_this

Client library for Who Hosts This API

## Installation and Usage
```bash
npm install --save @datafire/who_hosts_this
```
```js
let who_hosts_this = require('@datafire/who_hosts_this').create({
  QueryKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Discover the hosting provider for any web site

## Actions

### Detect.get
Discover the hosting provider for a web site


```js
who_hosts_this.Detect.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The url of the page to check

#### Output
*Output schema unknown*

### Status.get
View usage details for the current billing period


```js
who_hosts_this.Status.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
