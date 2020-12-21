# @datafire/etmdb

Client library for EtMDB REST API v1

## Installation and Usage
```bash
npm install --save @datafire/etmdb
```
```js
let etmdb = require('@datafire/etmdb').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Ethiopian Movie Database

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
etmdb.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
etmdb.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### api.v1.cinema_detail.search.cinema_name.get
Return cinema details search result

### Response Class (Status 200)

* __{cinema_name}__: Used as a key word to search cinemas,

For more details on how cinemas are listed [see here][ref].
[ref]: https://etmdb.com/en/cinema-list/-updated_date


```js
etmdb.api.v1.cinema_detail.search.cinema_name.get({
  "cinema_name": ""
}, context)
```

#### Input
* input `object`
  * cinema_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.cinema_schedule.search.movie_title.get
Return cinema schedule search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.api.v1.cinema_schedule.search.movie_title.get({
  "movie_title": ""
}, context)
```

#### Input
* input `object`
  * movie_title **required** `string`

#### Output
*Output schema unknown*

### api.v1.cinema_schedule.searchall.param.get
Return cinema schedule search result

### Response Class (Status 200)
__{param}__ argument can be
* movie title
* cinema name
* cinema hall name or
* cinema technology

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.api.v1.cinema_schedule.searchall.param.get({
  "param": ""
}, context)
```

#### Input
* input `object`
  * param **required** `string`

#### Output
*Output schema unknown*

### api.v1.cinema_shedule_showtime.search.movie_title.get
Return cinema schedule and showtime search result

### Response Class (Status 200)
* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.api.v1.cinema_shedule_showtime.search.movie_title.get({
  "movie_title": ""
}, context)
```

#### Input
* input `object`
  * movie_title **required** `string`

#### Output
*Output schema unknown*

### api.v1.cinema_shedule_showtime.searchall.param.get
Return cinema schedule and showtime search result

### Response Class (Status 200)
__{param}__ argument can be
* movie title
* cinema name
* cinema hall name
* showtime starting date
* showtime ending date or
* cinema technology

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.api.v1.cinema_shedule_showtime.searchall.param.get({
  "param": ""
}, context)
```

#### Input
* input `object`
  * param **required** `string`

#### Output
*Output schema unknown*

### cinema_search_read
Return cinema search result

### Response Class (Status 200)

* __{id}__: Used as a key to search cinemas,

For more details on how cinemas are listed [see here][ref].
[ref]: https://etmdb.com/en/cinema-list/-updated_date


```js
etmdb.cinema_search_read({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### api.v1.company_credits.search.movie_title.get
Return company credits search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search company credits for the movie
* You can use both Amharic or English charset/font to search

For more details on how company credits are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.api.v1.company_credits.search.movie_title.get({
  "movie_title": ""
}, context)
```

#### Input
* input `object`
  * movie_title **required** `string`

#### Output
*Output schema unknown*

### api.v1.company_credits.searchall.param.get
Return company credits search result

### Response Class (Status 200)
__{param}__ argument can be
* company name
* movie title or
* company credit description (such as production, cinematography, etc)

For more details on how company credits are listed [see here][ref].
[ref]: https://etmdb.com/en/company-list/company_name


```js
etmdb.api.v1.company_credits.searchall.param.get({
  "param": ""
}, context)
```

#### Input
* input `object`
  * param **required** `string`

#### Output
*Output schema unknown*

### company_search_read
Return company search result

### Response Class (Status 200)

* __{company_name}__: Used as a key word to search companies,

For more details on how companies are listed [see here][ref].
[ref]: https://etmdb.com/en/company-list/-updated_date


```js
etmdb.company_search_read({
  "company_name": ""
}, context)
```

#### Input
* input `object`
  * company_name **required** `string`

#### Output
*Output schema unknown*

### api.v1.filmography_type.search.filmography_description.get
Return filmography type search result

### Response Class (Status 200)

* __{filmography_description}__: Used as a key word to search filmography types

For more details on how filmography types are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.api.v1.filmography_type.search.filmography_description.get({
  "filmography_description": ""
}, context)
```

#### Input
* input `object`
  * filmography_description **required** `string`

#### Output
*Output schema unknown*

### filmography_search_read
Return filmography search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies
* You can use both Amharic or English charset/font to search

For more details on how filmographies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.filmography_search_read({
  "movie_title": ""
}, context)
```

#### Input
* input `object`
  * movie_title **required** `string`

#### Output
*Output schema unknown*

### filmography_searchall_read
Return filmography search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or
* filmography description (such as director, actor, producer, etc)

For more details on how filmographies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.filmography_searchall_read({
  "param": ""
}, context)
```

#### Input
* input `object`
  * param **required** `string`

#### Output
*Output schema unknown*

### api.v1.genre_type.search.genre_description.get
Return genre type search result

### Response Class (Status 200)

* __{genre_description}__: Used as a key word to search genre types

For more details on how genre types are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.api.v1.genre_type.search.genre_description.get({
  "genre_description": ""
}, context)
```

#### Input
* input `object`
  * genre_description **required** `string`

#### Output
*Output schema unknown*

### genre_search_read
Return movie genre search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie genres
* You can use both Amharic or English charset/font to search

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.genre_search_read({
  "movie_title": ""
}, context)
```

#### Input
* input `object`
  * movie_title **required** `string`

#### Output
*Output schema unknown*

### genre_searchall_read
Return movie genre search result

### Response Class (Status 200)

* __{movie_genre_type}__: Used as a key word to search movie genres

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.genre_searchall_read({
  "movie_genre_type": ""
}, context)
```

#### Input
* input `object`
  * movie_genre_type **required** `string`

#### Output
*Output schema unknown*

### job_search_read
Return job details search result

### Response Class (Status 200)

* __{job_title}__: Used as a key word to search jobs,

For more details on how job are listed [see here][ref].
[ref]: https://etmdb.com/en/job-list/-updated_date


```js
etmdb.job_search_read({
  "job_title": ""
}, context)
```

#### Input
* input `object`
  * job_title **required** `string`

#### Output
*Output schema unknown*

### job_searchall_read
Return job details search result

### Response Class (Status 200)

* __{company_name}__: Used as a key word to search jobs,

For more details on how job are listed [see here][ref].
[ref]: https://etmdb.com/en/job-list/-updated_date


```js
etmdb.job_searchall_read({
  "company_name": ""
}, context)
```

#### Input
* input `object`
  * company_name **required** `string`

#### Output
*Output schema unknown*

### media_search_read
Return movie media search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search media for movies
* You can use both Amharic or English charset/font to search

For more details on how media is listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.media_search_read({
  "movie_title": ""
}, context)
```

#### Input
* input `object`
  * movie_title **required** `string`

#### Output
*Output schema unknown*

### media_searchall_read
Return cast media search result

### Response Class (Status 200)
__{user}__ argument can be
* artist first name
* artist last name
* artist username

For more details on how cast media is listed [see here][ref].
[ref]: https://etmdb.com/en/cast-list/-updated_date


```js
etmdb.media_searchall_read({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`

#### Output
*Output schema unknown*

### api.v1.movie_cast.search.movie_title.get
Return movie cast search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details on how movie casts are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.api.v1.movie_cast.search.movie_title.get({
  "movie_title": ""
}, context)
```

#### Input
* input `object`
  * movie_title **required** `string`

#### Output
*Output schema unknown*

### api.v1.movie_cast.searchall.param.get
Return movie cast search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or
* character name

For more details on how movie casts are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.api.v1.movie_cast.searchall.param.get({
  "param": ""
}, context)
```

#### Input
* input `object`
  * param **required** `string`

#### Output
*Output schema unknown*

### movie_search_read
Return movie search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies
* You can use both Amharic or English charset/font to search

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.movie_search_read({
  "movie_title": ""
}, context)
```

#### Input
* input `object`
  * movie_title **required** `string`

#### Output
*Output schema unknown*

### news_search_read
Return news or article search result

### Response Class (Status 200)

* __{title}__: Used as a key word to search news and articles,

For more details on how news & articles are listed [see here][ref].
[ref]: https://etmdb.com/en/news-list/-updated_date


```js
etmdb.news_search_read({
  "title": ""
}, context)
```

#### Input
* input `object`
  * title **required** `string`

#### Output
*Output schema unknown*

### people_search_read
Return cast search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username

For more details on how cast are listed [see here][ref].
[ref]: https://etmdb.com/en/cast-list/-updated_date


```js
etmdb.people_search_read({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`

#### Output
*Output schema unknown*

### showtime_searchall_read
Return showtime search result

### Response Class (Status 200)
__{param}__ argument can be
* show time or
* day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]

For more details about showtime, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date


```js
etmdb.showtime_searchall_read({
  "param": ""
}, context)
```

#### Input
* input `object`
  * param **required** `string`

#### Output
*Output schema unknown*

### watchlist_search_read
Return watchlist search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies on watchlist
* You can use both Amharic or English charset/font to search

For more details on how watchlist are listed [see here][ref].
[ref]: https://etmdb.com/en/movies/watchlist/id


```js
etmdb.watchlist_search_read({
  "movie_title": ""
}, context)
```

#### Input
* input `object`
  * movie_title **required** `string`

#### Output
*Output schema unknown*

### watchlist_searchall_read
Return watchlist search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or

For more details on how watchlist are listed [see here][ref].
[ref]: https://etmdb.com/en/movies/watchlist/id


```js
etmdb.watchlist_searchall_read({
  "param": ""
}, context)
```

#### Input
* input `object`
  * param **required** `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
