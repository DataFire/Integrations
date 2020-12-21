# @datafire/fungenerators_shakespeare

Client library for Shakespeare API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_shakespeare
```
```js
let fungenerators_shakespeare = require('@datafire/fungenerators_shakespeare').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Shakespeare API. Generate random Shakespeare quotes, names, insults, lorem ipsum etc. Translate normal English to Shakespeare English.  [Click here to subscribe](http://fungenerators.com/api/shakespeare/) 


## Actions

### shakespeare.generate.insult.get
Generate random Shakespeare style insults.


```js
fungenerators_shakespeare.shakespeare.generate.insult.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: No of insults to generate

#### Output
*Output schema unknown*

### shakespeare.generate.lorem_ipsum.get
Generate Shakespeare lorem ipsum.


```js
fungenerators_shakespeare.shakespeare.generate.lorem_ipsum.get({}, context)
```

#### Input
* input `object`
  * type `string`: Type of element to generate `paragraphs/sentences/words`.
  * limit `integer`: No of elements to generate

#### Output
*Output schema unknown*

### shakespeare.generate.name.get
Generate random Shakespearen names.


```js
fungenerators_shakespeare.shakespeare.generate.name.get({}, context)
```

#### Input
* input `object`
  * variation `string`: Variation to generate `male/female`.
  * limit `integer`: No of names to generate

#### Output
*Output schema unknown*

### shakespeare.quote.get
Get a random Shakespeare quote.


```js
fungenerators_shakespeare.shakespeare.quote.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shakespeare.translate.get
Translate from English to Shakespeare English.


```js
fungenerators_shakespeare.shakespeare.translate.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate to Shakespeare English.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
