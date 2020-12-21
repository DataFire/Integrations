# @datafire/funtranslations_braile

Client library for FunTranslations Braille API

## Installation and Usage
```bash
npm install --save @datafire/funtranslations_braile
```
```js
let funtranslations_braile = require('@datafire/funtranslations_braile').create({
  "X-Funtranslations-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Braille conversion API on the cloud. Translate from English text to Braille and get Braille results suitable for many display types.[Click here to subscribe](http://funtranslations.com/api/braille) 


## Actions

### translate.braille.get
Translate from English to Braille. This is what you use if you have a braille display. This API translates the English text into characters that a braille display understands and you can feed the translated text directly to the display.


```js
funtranslations_braile.translate.braille.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.braille.dots.get
Use this to see which dots are enabled for each Braille letters. This is highly educational (to see which dots are enabled) and can potentially drive a non braille display which works on individual dots.


```js
funtranslations_braile.translate.braille.dots.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.braille.html.get
Translate from English to Braille Image characters. This is probably what you want to use if you are displaying braille in a browser.


```js
funtranslations_braile.translate.braille.html.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.braille.image.get
Translate from English to Braille image characters. This is probably what you want to use if you are displaying braille in a browser.


```js
funtranslations_braile.translate.braille.image.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.braille.unicode.get
Translate from English to Braille Unicode characters.


```js
funtranslations_braile.translate.braille.unicode.get({
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
