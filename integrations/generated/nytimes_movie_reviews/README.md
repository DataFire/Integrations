# @datafire/nytimes_movie_reviews

Client library for Movie Reviews

## Installation and Usage
```bash
npm install --save datafire @datafire/nytimes_movie_reviews
```

```js
let datafire = require('datafire');
let nytimes_movie_reviews = require('@datafire/nytimes_movie_reviews').actions;

let account = {
  apikey: "",
}
let context = new datafire.Context({
  accounts: {
    nytimes_movie_reviews: account,
  }
})

nytimes_movie_reviews.reviews.search.json.get({}, context).then(data => {
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

#### Parameters
* resource-type (string) **required** - all | full-time | part-time | [reviewer-name]

### reviews.search.json.get



```js
nytimes_movie_reviews.reviews.search.json.get({}, context)
```

#### Parameters
* query (string) - Search keywords; matches movie title and indexed terms
* critics-pick (string) - Set this parameter to Y to limit the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick=N. (To get all reviews regardless of critics-pick status, simply omit this parameter.)
* reviewer (string) - Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis.
* publication-date (string) - Single date: YYYY-MM-DD
* opening-date (string) - Single date: YYYY-MM-DD
* offset (integer) - Positive integer, multiple of 20
* order (string) - Sets the sort order of the results.

### reviews.resource_type.json.get



```js
nytimes_movie_reviews.reviews.resource_type.json.get({
  "resource-type": ""
}, context)
```

#### Parameters
* resource-type (string) **required** - Specify all to retrieve all reviews, including NYT Critics' Picks.
* offset (integer) - Positive integer, multiple of 20
* order (string) - Sets the sort order of the results.

