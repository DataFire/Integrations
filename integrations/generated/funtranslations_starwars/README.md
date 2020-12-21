# @datafire/funtranslations_starwars

Client library for Starwars Translations API

## Installation and Usage
```bash
npm install --save @datafire/funtranslations_starwars
```
```js
let funtranslations_starwars = require('@datafire/funtranslations_starwars').create({
  "X-Funtranslations-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Funtranslations Starwars API gives access to the full set of starwars language translations available at funtranslations.com so that you can integrate them in your workflow or an app. [Click here to get details and subscribe](http://funtranslations.com/api/starwars) .      

  You can also subscribe to individual translators. Here are the details.
  
  Ever wonder how to talk like Yoda? Well, use our API and let your APP/webpage speak like Yoda too.[Click here to subscribe](http://funtranslations.com/api/yoda)  
  
  Sith Translator API. [Click here to subscribe](http://funtranslations.com/api/sith) 
  
  Cheunh Translator API. [Click here to subscribe](http://funtranslations.com/api/cheunh) 
  
  Huttese Translator API. [Click here to subscribe](http://funtranslations.com/api/huttese)
  
  Mandalorian Translator API. [Click here to subscribe](http://funtranslations.com/api/mandalorian)
  
  Gungan Translator API. [Click here to subscribe](http://funtranslations.com/api/gungan)


## Actions

### translate.cheunh.get
Translate from English to Starwars cheunh.


```js
funtranslations_starwars.translate.cheunh.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.gungan.get
Translate from English to Starwars Gungan Language.


```js
funtranslations_starwars.translate.gungan.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.huttese.get
Translate from English to Starwars Huttese Language.


```js
funtranslations_starwars.translate.huttese.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.mandalorian.get
Translate from English to Starwars Mandalorian Language.


```js
funtranslations_starwars.translate.mandalorian.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.sith.get
Translate from English to Sith Speak.


```js
funtranslations_starwars.translate.sith.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.yoda.get
Translate from English to Yoda Speak.


```js
funtranslations_starwars.translate.yoda.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
