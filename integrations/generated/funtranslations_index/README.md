# @datafire/funtranslations_index

Client library for FunTranslations API

## Installation and Usage
```bash
npm install --save @datafire/funtranslations_index
```
```js
let funtranslations_index = require('@datafire/funtranslations_index').create({
  "X-Funtranslations-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Funtranslations API gives access to the full set of translations available at funtranslations.com so that you can integrate them in your workflow or an app. [Click here to get details and subscribe](http://funtranslations.com/api) . Here are the individual API links:

  ## Morse code API ##
  Morse code conversion API on the cloud. Translate to and from Morse Code.[Click here to subscribe](http://funtranslations.com/api/morse)
  ## Braille API ##
  Braille conversion API on the cloud. Translate to Braille and get Braille results suitable for many display types.[Click here to subscribe](http://funtranslations.com/api/braille)     
  ## Starwars Translation API ##
  Ever wonder how to talk like Yoda? Well, use our API and let your APP/webpage speak like Yoda too.[Click here to subscribe](http://funtranslations.com/api/yoda)  
  
  Sith Translator API. [Click here to subscribe](http://funtranslations.com/api/sith) 
  
  Cheunh Translator API. [Click here to subscribe](http://funtranslations.com/api/cheunh) 
  
  Huttese Translator API. [Click here to subscribe](http://funtranslations.com/api/huttese)
  
  Mandalorian Translator API. [Click here to subscribe](http://funtranslations.com/api/mandalorian)
  
  Gungan Translator API. [Click here to subscribe](http://funtranslations.com/api/gungan)
  
  ## Pirate Speak Translation API ##
  Ahoy, matey. Let's get those land lubbers speak our tounge too! Our evergreen pirate speak tranlsator API.[Click here to subscribe](http://funtranslations.com/api/pirate) 
  ## Valley Speak Translation API ##
  Our throwback Valspeak translations API.[Click here to subscribe](http://funtranslations.com/api/valspeak)    
  ## Minion Speak Translation API ##
  Our evil master following minion speak translations API.[Click here to subscribe](http://funtranslations.com/api/minion)     


## Actions

### translate.braille.get
Translate from English to Braille. This is what you use if you have a braille display. This API translates the English text into characters that a braille display understands and you can feed the translated text directly to the display.


```js
funtranslations_index.translate.braille.get({
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
funtranslations_index.translate.braille.dots.get({
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
funtranslations_index.translate.braille.html.get({
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
funtranslations_index.translate.braille.image.get({
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
funtranslations_index.translate.braille.unicode.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.brooklyn.get
Translate from English to Brooklyn Speak.


```js
funtranslations_index.translate.brooklyn.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.chef.get
Translate from English to Swedish Chef speak.


```js
funtranslations_index.translate.chef.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.cheunh.get
Translate from English to Starwars cheunh.


```js
funtranslations_index.translate.cheunh.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.cockney.get
Translate from English to Cockney Speak.


```js
funtranslations_index.translate.cockney.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.dolan.get
Translate from English to Dolan Speak.


```js
funtranslations_index.translate.dolan.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.dothraki.get
Translate from English to Dothraki.


```js
funtranslations_index.translate.dothraki.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.ermahgerd.get
Translate from English to ERMAHGERD.


```js
funtranslations_index.translate.ermahgerd.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.ferblatin.get
Translate from English to Ferb Latin.


```js
funtranslations_index.translate.ferblatin.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.fudd.get
Translate from English to Fudd Speak.


```js
funtranslations_index.translate.fudd.get({
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
funtranslations_index.translate.gungan.get({
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
funtranslations_index.translate.huttese.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.jive.get
Translate from normal English to Jive Speak.


```js
funtranslations_index.translate.jive.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.klingon.get
Translate from English to Startrek Klingon Language.


```js
funtranslations_index.translate.klingon.get({
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
funtranslations_index.translate.mandalorian.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.minion.get
Translate from English to Minion Speak.


```js
funtranslations_index.translate.minion.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.morse.get
Translate from English to morse code.


```js
funtranslations_index.translate.morse.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.morse.audio.get
Translate from English to morse code and get the result as an audio file.


```js
funtranslations_index.translate.morse.audio.get({
  "text": "",
  "speed": 0,
  "tone": 0
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate
  * speed **required** `integer`: Audio Speed (Words/Minute)
  * tone **required** `integer`: Audio Tone Frequency(Hz)

#### Output
*Output schema unknown*

### translate.morse2english.get
Translate from Morse code to English.


```js
funtranslations_index.translate.morse2english.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.oldenglish.get
Translate from English to Old English.


```js
funtranslations_index.translate.oldenglish.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.piglatin.get
Translate from English to Pig Latin.


```js
funtranslations_index.translate.piglatin.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.pirate.get
Translate from English to Pirate Speak.


```js
funtranslations_index.translate.pirate.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.quneya.get
Translate from English to Elvish Quenya Language.


```js
funtranslations_index.translate.quneya.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.shakespeare.get
Translate from English to Shakespeare English.


```js
funtranslations_index.translate.shakespeare.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.sindarin.get
Translate from English to Elvish Sindarin Language.


```js
funtranslations_index.translate.sindarin.get({
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
funtranslations_index.translate.sith.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.uk2us.get
Translate from UK English to US English.


```js
funtranslations_index.translate.uk2us.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.us2uk.get
Translate from US English to UK English.


```js
funtranslations_index.translate.us2uk.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.valspeak.get
Translate from English to Valley Speak.


```js
funtranslations_index.translate.valspeak.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.valyrian.get
Translate from English to Valyrian.


```js
funtranslations_index.translate.valyrian.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text to translate

#### Output
*Output schema unknown*

### translate.vulcan.get
Translate from English to Startrek Vulcan Language.


```js
funtranslations_index.translate.vulcan.get({
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
funtranslations_index.translate.yoda.get({
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
