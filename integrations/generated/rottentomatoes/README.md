# @datafire/rottentomatoes

Client library for Rotten Tomatoes

## Installation and Usage
```bash
npm install --save @datafire/rottentomatoes
```
```js
let rottentomatoes = require('@datafire/rottentomatoes').create({
  key: ""
});

rottentomatoes.MoviesSearchSearch({}).then(data => {
  console.log(data);
});
```

## Description

Test our API services using I/O Docs.

## Actions

### ListsDirectoryTopLevelLists



```js
rottentomatoes.ListsDirectoryTopLevelLists(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### DVDListsDirectoryTopLevelLists



```js
rottentomatoes.DVDListsDirectoryTopLevelLists(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### CurrentReleaseDVDsDVDLists



```js
rottentomatoes.CurrentReleaseDVDsDVDLists({}, context)
```

#### Input
* input `object`
  * page_limit `string`: The amount of new release dvds to show per page
  * page `string`: The selected page of current DVD releases
  * country `string`: Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### Output
*Output schema unknown*

### NewReleaseDVDsDVDLists



```js
rottentomatoes.NewReleaseDVDsDVDLists({}, context)
```

#### Input
* input `object`
  * page_limit `string`: The amount of new release dvds to show per page
  * page `string`: The selected page of new release DVDs
  * country `string`: Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### Output
*Output schema unknown*

### TopRentalsDVDLists



```js
rottentomatoes.TopRentalsDVDLists({}, context)
```

#### Input
* input `object`
  * limit `string`: Limits the number of top rentals returned
  * country `string`: Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### Output
*Output schema unknown*

### UpcomingDVDsDVDLists



```js
rottentomatoes.UpcomingDVDsDVDLists({}, context)
```

#### Input
* input `object`
  * page_limit `string`: The amount of upcoming dvds to show per page
  * page `string`: The selected page of upcoming DVDs
  * country `string`: Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### Output
*Output schema unknown*

### MovieListsDirectoryTopLevelLists



```js
rottentomatoes.MovieListsDirectoryTopLevelLists(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### BoxOfficeMovieLists



```js
rottentomatoes.BoxOfficeMovieLists({}, context)
```

#### Input
* input `object`
  * limit `string`: Limits the number of movies returned
  * country `string`: Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### Output
*Output schema unknown*

### InTheatersMovieLists



```js
rottentomatoes.InTheatersMovieLists({}, context)
```

#### Input
* input `object`
  * page_limit `string`: The amount of movies in theaters to show per page
  * page `string`: The selected page of in theaters movies
  * country `string`: Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### Output
*Output schema unknown*

### OpeningMoviesMovieLists



```js
rottentomatoes.OpeningMoviesMovieLists({}, context)
```

#### Input
* input `object`
  * limit `string`: Limits the number of opening movies returned
  * country `string`: Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### Output
*Output schema unknown*

### UpcomingMoviesMovieLists



```js
rottentomatoes.UpcomingMoviesMovieLists({}, context)
```

#### Input
* input `object`
  * page_limit `string`: The amount of upcoming movies to show per page
  * page `string`: The selected page of upcoming movies
  * country `string`: Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### Output
*Output schema unknown*

### MoviesAliasDetailedInfo



```js
rottentomatoes.MoviesAliasDetailedInfo({}, context)
```

#### Input
* input `object`
  * id `string`: Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
  * type `string`: Only supports imdb lookup at this time

#### Output
*Output schema unknown*

### MoviesSearchSearch



```js
rottentomatoes.MoviesSearchSearch({}, context)
```

#### Input
* input `object`
  * q `string`: The plain text search query to search for a movie. Remember to URI encode this!
  * page_limit `string`: The amount of movie search results to show per page
  * page `string`: The selected page of movie search results

#### Output
*Output schema unknown*

### MoviesInfoDetailedInfo



```js
rottentomatoes.MoviesInfoDetailedInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

#### Output
*Output schema unknown*

### CastInfoDetailedInfo



```js
rottentomatoes.CastInfoDetailedInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

#### Output
*Output schema unknown*

### MovieClipsDetailedInfo



```js
rottentomatoes.MovieClipsDetailedInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

#### Output
*Output schema unknown*

### MoviesReviewsDetailedInfo



```js
rottentomatoes.MoviesReviewsDetailedInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
  * review_type `string`: 3 different review types are possible: 'all', 'top_critic' and 'dvd'. 'top_critic' shows all the Rotten Tomatoes designated top critics. 'dvd' pulls the reviews given on the DVD of the movie. 'all' as the name implies retrieves all reviews.
  * page_limit `string`: The number of reviews to show per page
  * page `string`: The selected page of reviews
  * country `string`: Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### Output
*Output schema unknown*

### MoviesSimilarDetailedInfo



```js
rottentomatoes.MoviesSimilarDetailedInfo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
  * limit `string`: Limit the number of similar movies to show

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
