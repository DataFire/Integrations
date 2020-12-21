# @datafire/spinbot

Client library for Article Rewriter and Article Extractor API

## Installation and Usage
```bash
npm install --save @datafire/spinbot
```
```js
let spinbot = require('@datafire/spinbot').create({
  key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Spinbot.net propose a new solution based on high technologies for faster article spinner and extractor that you will love to use it. 

## Actions

### getInfo
Return the user credit information.


```js
spinbot.getInfo({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Your api key

#### Output
*Output schema unknown*

### postArticle
Extracting the main article of the given URL. The response is in JSON format.


```js
spinbot.postArticle({
  "key": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Your spinbot API key
  * url **required** `string`: The url of target article
  * faster_mode `string`: you can set this input value to 1 to skip detecting the size (width and height in pixel) of all the images inside the extracted article. The response time of your request will be shortened if you set this input value to 1.

#### Output
*Output schema unknown*

### postSpiner
Rewriting (spinning) you input article. The response is in JSON format.


```js
spinbot.postSpiner({
  "key": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Your spinbot API key
  * text **required** `string`: Input article that need to be rewrited.

#### Output
*Output schema unknown*

### postSpintax
Generate Spintax format for the input article, so you can rewrite it yourself. The response is in JSON format.


```js
spinbot.postSpintax({
  "key": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Your spinbot API key
  * text **required** `string`: Input article that need to be rewritten.
  * full_mode `string`: Full mode option.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
