# @datafire/fungenerators_pirate

Client library for Pirates API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_pirate
```
```js
let fungenerators_pirate = require('@datafire/fungenerators_pirate').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Ahoy matey! We help the landlubbers to get to know about the seamen way! You can generate pirate names, get some real pirate insults and pirate filler text. Oh you can translate to pirate lingo as well. [Click here to subscribe](http://fungenerators.com/api/pirate/) 


## Actions

### pirate.generate.insult.get
Generate random pirate insults.


```js
fungenerators_pirate.pirate.generate.insult.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: No of insults to generate

#### Output
*Output schema unknown*

### pirate.generate.lorem_ipsum.get
Generate pirate lorem ipsum.


```js
fungenerators_pirate.pirate.generate.lorem_ipsum.get({}, context)
```

#### Input
* input `object`
  * type `string`: Type of element to generate `paragraphs/sentences/words`.
  * limit `integer`: No of elements to generate

#### Output
*Output schema unknown*

### pirate.generate.name.get
Generate random pirate names.


```js
fungenerators_pirate.pirate.generate.name.get({}, context)
```

#### Input
* input `object`
  * variation `string`: Variation to generate `male/female`.
  * limit `integer`: No of names to generate

#### Output
*Output schema unknown*

### pirate.translate.get
Translate from English to pirate.


```js
fungenerators_pirate.pirate.translate.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate to pirate lingo.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
