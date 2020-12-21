# @datafire/exude_api_herokuapp

Client library for Exude API Service

## Installation and Usage
```bash
npm install --save @datafire/exude_api_herokuapp
```
```js
let exude_api_herokuapp = require('@datafire/exude_api_herokuapp').create();

.then(data => {
  console.log(data);
});
```

## Description

Exude API is an Open Source project, It is used for the primary ways for filtering the stopping, stemming words from the text data. This API is in a very basic level of development need to work on for later changes.

## Actions

### filterStoppings
Filter the stopping words from the provided input data or links


```js
exude_api_herokuapp.filterStoppings({
  "type": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * type **required** `string`: provide the type of filtering required stopping/swear

#### Output
* output [ExudeResponseBean](#exuderesponsebean)

### filterFileDataStoppings
Filter the stopping words from the provided input file


```js
exude_api_herokuapp.filterFileDataStoppings({
  "type": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`: provide the type of filtering required stopping/swear
  * file `string`

#### Output
* output [ExudeResponseBean](#exuderesponsebean)



## Definitions

### ExudeBean
* ExudeBean `object`
  * data `string`
  * links `array`
    * items `string`

### ExudeResponseBean
* ExudeResponseBean `object`
  * data `string`


