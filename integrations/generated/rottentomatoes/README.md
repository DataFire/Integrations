# @datafire/rottentomatoes

Client library for Rotten Tomatoes

## Installation and Usage
```bash
npm install --save datafire @datafire/rottentomatoes
```

```js
let datafire = require('datafire');
let rottentomatoes = require('@datafire/rottentomatoes').create({
  key: "",
});

rottentomatoes.MoviesSearchSearch({}).then(data => {
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

#### Parameters
*This action has no parameters*

### DVDListsDirectoryTopLevelLists



```js
rottentomatoes.DVDListsDirectoryTopLevelLists(null, context)
```

#### Parameters
*This action has no parameters*

### CurrentReleaseDVDsDVDLists



```js
rottentomatoes.CurrentReleaseDVDsDVDLists({}, context)
```

#### Parameters
* page_limit (string) - The amount of new release dvds to show per page
* page (string) - The selected page of current DVD releases
* country (string) - Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

### NewReleaseDVDsDVDLists



```js
rottentomatoes.NewReleaseDVDsDVDLists({}, context)
```

#### Parameters
* page_limit (string) - The amount of new release dvds to show per page
* page (string) - The selected page of new release DVDs
* country (string) - Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

### TopRentalsDVDLists



```js
rottentomatoes.TopRentalsDVDLists({}, context)
```

#### Parameters
* limit (string) - Limits the number of top rentals returned
* country (string) - Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

### UpcomingDVDsDVDLists



```js
rottentomatoes.UpcomingDVDsDVDLists({}, context)
```

#### Parameters
* page_limit (string) - The amount of upcoming dvds to show per page
* page (string) - The selected page of upcoming DVDs
* country (string) - Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

### MovieListsDirectoryTopLevelLists



```js
rottentomatoes.MovieListsDirectoryTopLevelLists(null, context)
```

#### Parameters
*This action has no parameters*

### BoxOfficeMovieLists



```js
rottentomatoes.BoxOfficeMovieLists({}, context)
```

#### Parameters
* limit (string) - Limits the number of movies returned
* country (string) - Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

### InTheatersMovieLists



```js
rottentomatoes.InTheatersMovieLists({}, context)
```

#### Parameters
* page_limit (string) - The amount of movies in theaters to show per page
* page (string) - The selected page of in theaters movies
* country (string) - Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

### OpeningMoviesMovieLists



```js
rottentomatoes.OpeningMoviesMovieLists({}, context)
```

#### Parameters
* limit (string) - Limits the number of opening movies returned
* country (string) - Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

### UpcomingMoviesMovieLists



```js
rottentomatoes.UpcomingMoviesMovieLists({}, context)
```

#### Parameters
* page_limit (string) - The amount of upcoming movies to show per page
* page (string) - The selected page of upcoming movies
* country (string) - Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

### MoviesAliasDetailedInfo



```js
rottentomatoes.MoviesAliasDetailedInfo({}, context)
```

#### Parameters
* id (string) - Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
* type (string) - Only supports imdb lookup at this time

### MoviesSearchSearch



```js
rottentomatoes.MoviesSearchSearch({}, context)
```

#### Parameters
* q (string) - The plain text search query to search for a movie. Remember to URI encode this!
* page_limit (string) - The amount of movie search results to show per page
* page (string) - The selected page of movie search results

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

