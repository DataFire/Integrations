# @datafire/1forge

Client library for 1Forge Finance APIs

## Installation and Usage
```bash
npm install --save @datafire/1forge
```
```js
let forge = require('@datafire/1forge').create();

forge.quotes.get({}).then(data => {
  console.log(data);
})
```

## Description

Stock and Forex Data and Realtime Quotes

## Actions

### quotes.get
Get quotes


```js
forge.quotes.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### symbols.get
Symbol List


```js
forge.symbols.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`



## Definitions

*This integration has no definitions*
