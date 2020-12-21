# @datafire/rhapsody

Client library for Rhapsody

## Installation and Usage
```bash
npm install --save @datafire/rhapsody
```
```js
let rhapsody = require('@datafire/rhapsody').create();

.then(data => {
  console.log(data);
});
```

## Description

Access Rhapsody technologies and content, including metadeta, search and music player.

## Actions

### artists.top.get
Returns a list of top artists.


```js
rhapsody.artists.top.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`
  * limit `string`
  * offset `string`

#### Output
*Output schema unknown*

### artists.art.id.get



```js
rhapsody.artists.art.id.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### artists.art.id.full.get



```js
rhapsody.artists.art.id.full.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### artists.art.id.albums.get



```js
rhapsody.artists.art.id.albums.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### artists.art.id.recommendations.get



```js
rhapsody.artists.art.id.recommendations.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### artists.art.id.similar.get



```js
rhapsody.artists.art.id.similar.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### artists.art.id.tracks.top.get



```js
rhapsody.artists.art.id.tracks.top.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`
  * limit `string`
  * offset `string`

#### Output
*Output schema unknown*

### albums.top.get
Returns a list of top albums.


```js
rhapsody.albums.top.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`
  * limit `string`
  * offset `string`

#### Output
*Output schema unknown*

### albums.new.get



```js
rhapsody.albums.new.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### albums.alb.id.get



```js
rhapsody.albums.alb.id.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### albums.alb.id.tracks.get



```js
rhapsody.albums.alb.id.tracks.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### albums.alb.id.similar.get



```js
rhapsody.albums.alb.id.similar.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### albums.alb.id.recommendations.get



```js
rhapsody.albums.alb.id.recommendations.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### albums.alb.id.reviews.get



```js
rhapsody.albums.alb.id.reviews.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### search.typeahead.get
Returns a list of tracks, artists and albums based on the search term for authenticated users.


```js
rhapsody.search.typeahead.get({
  "apikey": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`
  * q **required** `string`: Typeahead search term.
  * limit `string`
  * offset `string`

#### Output
*Output schema unknown*

### tracks.top.get
Returns a list of top tracks.


```js
rhapsody.tracks.top.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`
  * limit `string`
  * offset `string`

#### Output
*Output schema unknown*

### tracks.tra.id.get



```js
rhapsody.tracks.tra.id.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`
  * limit `string`
  * offset `string`

#### Output
*Output schema unknown*

### tracks.tra.id.recommendations.get



```js
rhapsody.tracks.tra.id.recommendations.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`
  * limit `string`
  * offset `string`

#### Output
*Output schema unknown*

### genres.get
Returns a list of available genres.


```js
rhapsody.genres.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*

### genres.g.id.get



```js
rhapsody.genres.g.id.get({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
