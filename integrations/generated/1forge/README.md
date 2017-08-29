# @datafire/1forge

Client library for 1Forge Finance APIs

## Installation and Usage
```bash
npm install --save datafire @datafire/1forge
```

```js
let datafire = require('datafire');
let 1forge = require('@datafire/1forge').create();

1forge.quotes.get({}).then(data => {
  console.log(data);
})
```

## Description
Stock and Forex Data and Realtime Quotes

## Actions
### quotes.get
Get quotes


```js
1forge.quotes.get(null, context)
```


### symbols.get
Symbol List


```js
1forge.symbols.get(null, context)
```


