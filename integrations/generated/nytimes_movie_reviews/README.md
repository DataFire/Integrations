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

