# @datafire/nytimes_movie_reviews

Client library for Movie Reviews

## Installation and Usage
```bash
npm install --save @datafire/nytimes_movie_reviews
```
```js
let nytimes_movie_reviews = require('@datafire/nytimes_movie_reviews').create({
  apikey: ""
});

nytimes_movie_reviews.reviews.search.json.get({}).then(data => {
  console.log(data);
})
```

## Description

With the Movie Reviews API, you can search New York Times movie reviews by keyword and get lists of NYT Critics' Picks.

## Actions

### critics.resource_type.json.get



```js
nytimes_movie_reviews.critics.resource_type.json.get({
  "resource-type": ""
}, context)
```

#### Input
* input `object`
  * resource-type **required** `string`: all | full-time | part-time | [reviewer-name]

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [Critic](#critic)
  * status `string`

### reviews.search.json.get



```js
nytimes_movie_reviews.reviews.search.json.get({}, context)
```

#### Input
* input `object`
  * query `string`: Search keywords; matches movie title and indexed terms
  * critics-pick `string` (values: Y, N): Set this parameter to Y to limit the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick=N. (To get all reviews regardless of critics-pick status, simply omit this parameter.)
  * reviewer `string`: Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis.
  * publication-date `string`: Single date: YYYY-MM-DD
  * opening-date `string`: Single date: YYYY-MM-DD
  * offset `integer`: Positive integer, multiple of 20
  * order `string`: Sets the sort order of the results.

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [Movie](#movie)
  * status `string`

### reviews.resource_type.json.get



```js
nytimes_movie_reviews.reviews.resource_type.json.get({
  "resource-type": ""
}, context)
```

#### Input
* input `object`
  * resource-type **required** `string` (values: all, picks): Specify all to retrieve all reviews, including NYT Critics' Picks.
  * offset `integer`: Positive integer, multiple of 20
  * order `string` (values: by-title, by-publication-date, by-opening-date): Sets the sort order of the results.

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [Movie](#movie)
  * status `string`



## Definitions

### Critic
* Critic `object`
  * bio `string`
  * display_name `string`
  * multimedia `object`
    * resource `object`
      * credit `string`
      * height `integer`
      * src `string`
      * type `string`
      * width `integer`
  * seo_name `string`
  * sort_name `string`
  * status `string`

### Movie
* Movie `object`
  * byline `string`
  * critics_pick `integer`
  * date_updated `string`
  * display_title `string`
  * headline `string`
  * link `object`
    * suggested_link_text `string`
    * type `string`
    * url `string`
  * mpaa_rating `string`
  * multimedia `object`
    * resource `object`
      * height `integer`
      * src `string`
      * type `string`
      * width `integer`
  * opening_date `string`
  * publication_date `string`
  * summary_short `string`


