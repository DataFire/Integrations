# @datafire/nytimes_top_stories

Client library for Top Stories

## Installation and Usage
```bash
npm install --save @datafire/nytimes_top_stories
```
```js
let nytimes_top_stories = require('@datafire/nytimes_top_stories').create({
  apikey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Top Stories API provides lists of articles and associated images by section.

## Actions

### section.format.get
The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.



```js
nytimes_top_stories.section.format.get({
  "section": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * section **required** `string` (values: home, opinion, world, national, politics, upshot, nyregion, business, technology, science, health, sports, arts, books, movies, theater, sundayreview, fashion, tmagazine, food, travel, magazine, realestate, automobiles, obituaries, insider): The section the story appears in.
  * format **required** `string` (values: json, jsonp): if this is JSONP or JSON
  * callback `string`: The name of the function the API call results will be passed to. Required when using JSONP. This parameter has only one valid value per section. The format is {section_name}TopStoriesCallback.

#### Output
* output `object`
  * results `array`
    * items [Article](#article)



## Definitions

### Article
* Article `object`
  * abstract `string`
  * byline `string`
  * created_date `string`
  * des_facet `array`
    * items `string`
  * geo_facet `array`
    * items `string`
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
  * org_facet `array`
    * items `string`
  * per_facet `array`
    * items `string`
  * published_date `string`
  * related_urls `array`
    * items `object`
      * suggested_link_text `string`
      * url `string`
  * section `string`
  * short_url `string`
  * subsection `string`
  * thumbnail_standard `string`
  * title `string`
  * updated_date `string`
  * url `string`


