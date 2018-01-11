# @datafire/xkcd

Client library for XKCD

## Installation and Usage
```bash
npm install --save @datafire/xkcd
```
```js
let xkcd = require('@datafire/xkcd').create();

xkcd.getLatestComic({}).then(data => {
  console.log(data);
})
```

## Description

Webcomic of romance, sarcasm, math, and language.

## Actions

### getLatestComic
Fetch current comic and metadata.



```js
xkcd.getLatestComic(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [comic](#comic)

### getComic
Fetch comics and metadata  by comic id.



```js
xkcd.getComic({
  "comicId": 0
}, context)
```

#### Input
* input `object`
  * comicId **required** `number`

#### Output
* output [comic](#comic)



## Definitions

### comic
* comic `object`
  * alt `string`
  * day `string`
  * img `string`
  * link `string`
  * month `string`
  * news `string`
  * num `number`
  * safe_title `string`
  * title `string`
  * transcript `string`
  * year `string`


