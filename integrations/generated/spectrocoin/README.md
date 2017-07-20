# @datafire/spectrocoin

Client library for SpectroCoin Merchant

## Installation and Usage
```bash
npm install --save datafire @datafire/spectrocoin
```

```js
let datafire = require('datafire');
let spectrocoin = require('@datafire/spectrocoin').actions;
let context = new datafire.Context();

spectrocoin.createOrder({}, context).then(data => {
  console.log(data);
})
```

## Description
This is an API designed for merchants who are using SpectroCoin services and wishes to integrate them locally.

## Actions
### createOrder
Create merchant order


```js
spectrocoin.createOrder({}, context)
```

#### Parameters
* body (object)

