# @datafire/omdbapi

Client library for OMDb

## Installation and Usage
```bash
npm install --save @datafire/omdbapi
```
```js
let omdbapi = require('@datafire/omdbapi').create();

.then(data => {
  console.log(data);
});
```

## Description

The Open Movie Database. The OMDb API is a free web service to obtain movie information, all content and images on the site are contributed and maintained by our users.

## Actions

### .get
Find a movie, series or episode from the OMDb by title, IMDb-id or by free-text search


```js
omdbapi..get({
  "r": ""
}, context)
```

#### Input
* input `object`
  * t `string`: Movie title to search for. One of t, i or s is required.
  * i `string`: A valid IMDb ID (e.g. tt1285016). One of t, i or s is required.
  * s `string`: Movie title to search for. One of t, i or s is required.
  * y `integer`: Year of release.
  * type `string` (values: movie, series, episode): Type of result to return.
  * plot `string` (values: short, full): Return short or full plot.
  * tomatoes `boolean`: Include Rotten Tomatoes ratings.
  * r **required** `string` (values: json, xml): The data type to return.
  * v `integer`: API version (reserved for future use).
  * page `integer`: Page number to return.
  * callback `string`: JSONP callback name.

#### Output
* output [combinedResult](#combinedresult)



## Definitions

### combinedResult
* combinedResult `object`
  * Actors `string`
  * Awards `string`
  * BoxOffice `string`
  * Country `string`
  * DVD `string`
  * Director `string`
  * Genre `string`
  * Language `string`
  * Metascore `string`
  * Plot `string`
  * Poster `string`
  * Production `string`
  * Rated `string`
  * Released `string`
  * Response **required** `string`
  * Runtime `string`
  * Search `array`
    * items `object`
      * Poster **required** `string`
      * Title **required** `string`
      * Type **required** `string`
      * Year **required** `string`
      * imdbID **required** `string`
  * Title `string`
  * Type `string`
  * Website `string`
  * Writer `string`
  * Year `string`
  * imdbID `string`
  * imdbRating `string`
  * imdbVotes `string`
  * tomatoConsensus `string`
  * tomatoFresh `string`
  * tomatoImage `string`
  * tomatoMeter `string`
  * tomatoRating `string`
  * tomatoReviews `string`
  * tomatoRotten `string`
  * tomatoURL `string`
  * tomatoUserMeter `string`
  * tomatoUserRating `string`
  * tomatoUserReviews `string`
  * totalResults `string`
  * totalSeasons `string`


