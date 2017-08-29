# @datafire/omdbapi

Client library for OMDb

## Installation and Usage
```bash
npm install --save datafire @datafire/omdbapi
```

```js
let datafire = require('datafire');
let omdbapi = require('@datafire/omdbapi').create();

omdbapi..get({}).then(data => {
  console.log(data);
})
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

#### Parameters
* t (string) - Movie title to search for. One of t, i or s is required.
* i (string) - A valid IMDb ID (e.g. tt1285016). One of t, i or s is required.
* s (string) - Movie title to search for. One of t, i or s is required.
* y (integer) - Year of release.
* type (string) - Type of result to return.
* plot (string) - Return short or full plot.
* tomatoes (boolean) - Include Rotten Tomatoes ratings.
* r (string) **required** - The data type to return.
* v (integer) - API version (reserved for future use).
* page (integer) - Page number to return.
* callback (string) - JSONP callback name.

