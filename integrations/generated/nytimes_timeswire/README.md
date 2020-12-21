# @datafire/nytimes_timeswire

Client library for Times Newswire API

## Installation and Usage
```bash
npm install --save @datafire/nytimes_timeswire
```
```js
let nytimes_timeswire = require('@datafire/nytimes_timeswire').create({
  apikey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

With the Times Newswire API, you can get links and metadata for Times articles and blog posts as soon as they are published on NYTimes.com. The Times Newswire API provides an up-to-the-minute stream of published items.

## Actions

### content.json.get



```js
nytimes_timeswire.content.json.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The complete URL of a specific news item, URL-encoded or backslash-escaped

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [Article](#article)
  * status `string`

### content.source.section.json.get



```js
nytimes_timeswire.content.source.section.json.get({
  "source": "",
  "section": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: all, nyt, iht): Limits the set of items by originating source
  * section **required** `string`: Limits the set of items by one or more sections
  * limit `integer`: Limits the number of results, between 1 and 20
  * offset `integer`: Sets the starting point of the result set

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [Article](#article)
  * status `string`

### content.source.section.time_period.json.get



```js
nytimes_timeswire.content.source.section.time_period.json.get({
  "source": "",
  "section": "",
  "time-period": 0
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: all, nyt, iht): Limits the set of items by originating source
  * section **required** `string`: Limits the set of items by one or more sections
  * time-period **required** `integer`: Limits the set of items by time published, integer in number of hours
  * limit `integer`: Limits the number of results, between 1 and 20
  * offset `integer`: Sets the starting point of the result set

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [Article](#article)
  * status `string`



## Definitions

### Article
* Article `object`
  * abstract `string`
  * blog_name `string`
  * byline `string`
  * created_date `string`
  * des_facet `array`
    * items `string`
  * geo_facet `array`
    * items `string`
  * headline `string`
  * item_type `string`
  * kicker `string`
  * material_type_facet `string`
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
  * org_facet `string`
  * per_facet `array`
    * items `string`
  * published_date `string`
  * related_urls `array`
    * items `object`
      * suggested_link_text `string`
      * url `string`
  * section `string`
  * short_url `string`
  * source `string`
  * subsection `string`
  * thumbnail_standard `string`
  * title `string`
  * updated_date `string`
  * url `string`


