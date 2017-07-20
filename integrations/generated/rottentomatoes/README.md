# @datafire/rottentomatoes

Client library for Rotten Tomatoes

## Installation and Usage
```bash
npm install --save datafire @datafire/rottentomatoes
```

```js
let datafire = require('datafire');
let rottentomatoes = require('@datafire/rottentomatoes').actions;

let account = {
  key: "",
}
let context = new datafire.Context({
  accounts: {
    rottentomatoes: account,
  }
})


rottentomatoes.MoviesSearchSearch({}, context).then(data => {
  console.log(data);
})
```

## Description
Test our API services using I/O Docs.

## Actions
### ListsDirectoryTopLevelLists



```js
rottentomatoes.ListsDirectoryTopLevelLists(null, context)
```


### DVDListsDirectoryTopLevelLists



```js
rottentomatoes.DVDListsDirectoryTopLevelLists(null, context)
```


### CurrentReleaseDVDsDVDLists



```js
rottentomatoes.CurrentReleaseDVDsDVDLists({}, context)
```


### NewReleaseDVDsDVDLists



```js
rottentomatoes.NewReleaseDVDsDVDLists({}, context)
```


### TopRentalsDVDLists



```js
rottentomatoes.TopRentalsDVDLists({}, context)
```


### UpcomingDVDsDVDLists



```js
rottentomatoes.UpcomingDVDsDVDLists({}, context)
```


### MovieListsDirectoryTopLevelLists



```js
rottentomatoes.MovieListsDirectoryTopLevelLists(null, context)
```


### BoxOfficeMovieLists



```js
rottentomatoes.BoxOfficeMovieLists({}, context)
```


### InTheatersMovieLists



```js
rottentomatoes.InTheatersMovieLists({}, context)
```


### OpeningMoviesMovieLists



```js
rottentomatoes.OpeningMoviesMovieLists({}, context)
```


### UpcomingMoviesMovieLists



```js
rottentomatoes.UpcomingMoviesMovieLists({}, context)
```


### MoviesAliasDetailedInfo



```js
rottentomatoes.MoviesAliasDetailedInfo({}, context)
```


### MoviesSearchSearch



```js
rottentomatoes.MoviesSearchSearch({}, context)
```


### MoviesInfoDetailedInfo



```js
rottentomatoes.MoviesInfoDetailedInfo({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

### CastInfoDetailedInfo



```js
rottentomatoes.CastInfoDetailedInfo({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

### MovieClipsDetailedInfo



```js
rottentomatoes.MovieClipsDetailedInfo({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

### MoviesReviewsDetailedInfo



```js
rottentomatoes.MoviesReviewsDetailedInfo({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
* review_type (string) - 3 different review types are possible: 'all', 'top_critic' and 'dvd'. 'top_critic' shows all the Rotten Tomatoes designated top critics. 'dvd' pulls the reviews given on the DVD of the movie. 'all' as the name implies retrieves all reviews.
* page_limit (string) - The number of reviews to show per page
* page (string) - The selected page of reviews
* country (string) - Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

### MoviesSimilarDetailedInfo



```js
rottentomatoes.MoviesSimilarDetailedInfo({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
* limit (string) - Limit the number of similar movies to show

