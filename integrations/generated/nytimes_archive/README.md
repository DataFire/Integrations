# @datafire/nytimes_archive

Client library for Archive

## Installation and Usage
```bash
npm install --save @datafire/nytimes_archive
```
```js
let nytimes_archive = require('@datafire/nytimes_archive').create({
  apikey: ""
});

nytimes_archive.year.month.json.get({
  "year": 0,
  "month": 0
}).then(data => {
  console.log(data);
});
```

## Description

The Archive API provides lists of NYT articles by month going back to 1851.  You can use it to build your own local database of NYT article metadata.

## Actions

### year.month.json.get
The Archive API provides lists of NYT articles by month going back to 1851.  Simply pass in the year and month you want and it returns a JSON object with all articles for that month.



```js
nytimes_archive.year.month.json.get({
  "year": 0,
  "month": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: The year (e.g. 2016).
  * month **required** `integer`: The month number (e.g. 1 for January).

#### Output
* output `object`
  * response `object`
    * docs `array`
      * items [Doc](#doc)
    * meta `object`
      * hits `integer`
      * offset `integer`
      * time `integer`



## Definitions

### Doc
* Doc `object`
  * _id `string`
  * abstract `string`
  * blog `array`
    * items `string`
  * byline `object`
    * organization `string`
    * original `string`
    * person `array`
      * items `string`
  * document_type `string`
  * headline `object`
    * kicker `string`
    * main `string`
  * keywords `object`
    * name `string`
    * rank `string`
    * value `string`
  * lead_paragraph `string`
  * multimedia `array`
    * items `object`
      * caption `string`
      * copyright `string`
      * format `string`
      * height `integer`
      * subtype `string`
      * type `string`
      * url `string`
      * width `integer`
  * news_desK `string`
  * print_page `string`
  * pub_date `string`
  * section_name `string`
  * slideshow_credits `string`
  * snippet `string`
  * source `string`
  * subsection_name `string`
  * type_of_material `string`
  * web_url `string`
  * word_count `string`


