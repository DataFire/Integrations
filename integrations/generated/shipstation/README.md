# @datafire/shipstation

Client library for shipstation

## Installation and Usage
```bash
npm install --save @datafire/shipstation
```
```js
let shipstation = require('@datafire/shipstation').create();

.then(data => {
  console.log(data);
});
```

## Description

Polls is a simple API allowing consumers to view polls and vote in them.

## Actions

### questions.get
List All Questions


```js
shipstation.questions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### questions.post
You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.


```js
shipstation.questions.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * choices `array`
      * items `string`
    * question `string`

#### Output
*Output schema unknown*



## Definitions

### Questions_Collection



