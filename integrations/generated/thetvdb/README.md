# @datafire/thetvdb

Client library for TheTVDB API v2

## Installation and Usage
```bash
npm install --save @datafire/thetvdb
```
```js
let thetvdb = require('@datafire/thetvdb').create({
  jwtToken: ""
});

thetvdb.user.ratings.query.get({}).then(data => {
  console.log(data);
});
```

## Description

API v2 targets v1 functionality with a few minor additions. The API is accessible via https://api.thetvdb.com and provides the following REST endpoints in JSON format.


How to use this API documentation
----------------


You may browse the API routes without authentication, but if you wish to send requests to the API and see response data, then you must authenticate.
1. Obtain a JWT token by `POST`ing  to the `/login` route in the `Authentication` section with your API key and credentials.
1. Paste the JWT token from the response into the "JWT Token" field at the top of the page and click the 'Add Token' button.


You will now be able to use the remaining routes to send requests to the API and get a response.


Language Selection
----------------


Language selection is done via the `Accept-Language` header. At the moment, you may only pass one language abbreviation in the header at a time. Valid language abbreviations can be found at the `/languages` route..


Authentication
----------------


Authentication to use the API is similar to the How-to section above. Users must `POST` to the `/login` route with their API key and credentials in the following format in order to obtain a JWT token.

`{"apikey":"APIKEY","username":"USERNAME","userkey":"USERKEY"}`

Note that the username and key are ONLY required for the `/user` routes. The user's key is labled `Account Identifier` in the account section of the main site.
The token is then used in all subsequent requests by providing it in the `Authorization` header. The header will look like: `Authorization: Bearer <yourJWTtoken>`. Currently, the token expires after 24 hours. You can `GET` the `/refresh_token` route to extend that expiration date.


Versioning
----------------


You may request a different version of the API by including an `Accept` header in your request with the following format: `Accept:application/vnd.thetvdb.v$VERSION`. This documentation automatically uses the version seen at the top and bottom of the page.

## Actions

### episodes.id.get
Returns the full information for a given episode id. __Deprecation Warning:__ The _director_ key will be deprecated in favor of the new _directors_ key in a future release.


```js
thetvdb.episodes.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the episode
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
* output [EpisodeRecordData](#episoderecorddata)

### languages.get
All available languages. These language abbreviations can be used in the `Accept-Language` header for routes that return translation records.


```js
thetvdb.languages.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [LanguageData](#languagedata)

### languages.id.get
Information about a particular language, given the language ID.


```js
thetvdb.languages.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the language

#### Output
* output [Language](#language)

### login.post
Returns a session token to be included in the rest of the requests. Note that API key authentication is required for all subsequent requests and user auth is required for routes in the `User` section


```js
thetvdb.login.post({
  "Authentication string": null
}, context)
```

#### Input
* input `object`
  * Authentication string **required** [Auth](#auth)

#### Output
* output [Token](#token)

### refresh_token.get
Refreshes your current, valid JWT token and returns a new token. Hit this route so that you do not have to post to `/login` with your API key and credentials once you have already been authenticated.


```js
thetvdb.refresh_token.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Token](#token)

### search.series.get
Allows the user to search for a series based on the following parameters.


```js
thetvdb.search.series.get({}, context)
```

#### Input
* input `object`
  * name `string`: Name of the series to search for.
  * imdbId `string`: IMDB id of the series
  * zap2itId `string`: Zap2it ID of the series to search for.
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
* output [SeriesSearchData](#seriessearchdata)

### search.series.params.get
Returns an array of parameters to query by in the `/search/series` route.


```js
thetvdb.search.series.params.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [EpisodeDataQueryParams](#episodedataqueryparams)

### series.id.get
Returns a series records that contains all information known about a particular series id.


```js
thetvdb.series.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
* output [SeriesData](#seriesdata)

### series.id.head
Returns header information only about the given series ID.


```js
thetvdb.series.id.head({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
*Output schema unknown*

### series.id.actors.get
Returns actors for the given series id


```js
thetvdb.series.id.actors.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series

#### Output
* output [SeriesActors](#seriesactors)

### series.id.episodes.get
All episodes for a given series. Paginated with 100 results per page.


```js
thetvdb.series.id.episodes.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series
  * page `string`: Page of results to fetch. Defaults to page 1 if not provided.

#### Output
* output [SeriesEpisodes](#seriesepisodes)

### series.id.episodes.query.get
This route allows the user to query against episodes for the given series. The response is a paginated array of episode records that have been filtered down to basic information.


```js
thetvdb.series.id.episodes.query.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series
  * absoluteNumber `string`: Absolute number of the episode
  * airedSeason `string`: Aired season number
  * airedEpisode `string`: Aired episode number
  * dvdSeason `string`: DVD season number
  * dvdEpisode `string`: DVD episode number
  * imdbId `string`: IMDB id of the series
  * page `string`: Page of results to fetch. Defaults to page 1 if not provided.
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
* output [SeriesEpisodesQuery](#seriesepisodesquery)

### series.id.episodes.query.params.get
Returns the allowed query keys for the `/series/{id}/episodes/query` route


```js
thetvdb.series.id.episodes.query.params.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series

#### Output
* output [SeriesEpisodesQueryParams](#seriesepisodesqueryparams)

### series.id.episodes.summary.get
Returns a summary of the episodes and seasons available for the series.

__Note__: Season "0" is for all episodes that are considered to be specials.


```js
thetvdb.series.id.episodes.summary.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series

#### Output
* output [SeriesEpisodesSummary](#seriesepisodessummary)

### series.id.filter.get
Returns a series records, filtered by the supplied comma-separated list of keys. Query keys can be found at the `/series/{id}/filter/params` route.


```js
thetvdb.series.id.filter.get({
  "id": 0,
  "keys": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series
  * keys **required** `string`: Comma-separated list of keys to filter by
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
* output [SeriesData](#seriesdata)

### series.id.filter.params.get
Returns the list of keys available for the `/series/{id}/filter` route


```js
thetvdb.series.id.filter.params.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
* output [FilterKeys](#filterkeys)

### series.id.images.get
Returns a summary of the images for a particular series


```js
thetvdb.series.id.images.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
* output [SeriesImagesCounts](#seriesimagescounts)

### series.id.images.query.get
Query images for the given series ID.


```js
thetvdb.series.id.images.query.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series
  * keyType `string`: Type of image you're querying for (fanart, poster, etc. See ../images/query/params for more details).
  * resolution `string`: Resolution to filter by (1280x1024, for example)
  * subKey `string`: Subkey for the above query keys. See /series/{id}/images/query/params for more information
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
* output [SeriesImageQueryResults](#seriesimagequeryresults)

### series.id.images.query.params.get
Returns the allowed query keys for the `/series/{id}/images/query` route. Contains a parameter record for each unique `keyType`, listing values that will return results.


```js
thetvdb.series.id.images.query.params.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
* output [SeriesImagesQueryParams](#seriesimagesqueryparams)

### updated.query.get
Returns an array of series that have changed in a maximum of one week blocks since the provided `fromTime`.


The user may specify a `toTime` to grab results for less than a week. Any timespan larger than a week will be reduced down to one week automatically.


```js
thetvdb.updated.query.get({
  "fromTime": ""
}, context)
```

#### Input
* input `object`
  * fromTime **required** `string`: Epoch time to start your date range.
  * toTime `string`: Epoch time to end your date range. Must be one week from `fromTime`.
  * Accept-Language `string`: Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

#### Output
* output [UpdateData](#updatedata)

### updated.query.params.get
Returns an array of valid query keys for the `/updated/query/params` route.


```js
thetvdb.updated.query.params.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UpdateDataQueryParams](#updatedataqueryparams)

### user.get
Returns basic information about the currently authenticated user.


```js
thetvdb.user.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserData](#userdata)

### user.favorites.get
Returns an array of favorite series for a given user, will be a blank array if no favorites exist.


```js
thetvdb.user.favorites.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserFavoritesData](#userfavoritesdata)

### user.favorites.id.delete
Deletes the given series ID from the user’s favorite’s list and returns the updated list.


```js
thetvdb.user.favorites.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series

#### Output
* output [UserFavoritesData](#userfavoritesdata)

### user.favorites.id.put
Adds the supplied series ID to the user’s favorite’s list and returns the updated list.


```js
thetvdb.user.favorites.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series

#### Output
* output [UserFavoritesData](#userfavoritesdata)

### user.ratings.get
Returns an array of ratings for the given user.


```js
thetvdb.user.ratings.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserRatingsData](#userratingsdata)

### user.ratings.query.get
Returns an array of ratings for a given user that match the query.


```js
thetvdb.user.ratings.query.get({}, context)
```

#### Input
* input `object`
  * itemType `string`: Item to query. Can be either 'series', 'episode', or 'banner'

#### Output
* output [UserRatingsData](#userratingsdata)

### user.ratings.query.params.get
Returns a list of query params for use in the `/user/ratings/query` route.


```js
thetvdb.user.ratings.query.params.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserRatingsQueryParams](#userratingsqueryparams)

### user.ratings.itemType.itemId.delete
This route deletes a given rating of a given type.


```js
thetvdb.user.ratings.itemType.itemId.delete({
  "itemType": "",
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * itemType **required** `string`: Item to update. Can be either 'series', 'episode', or 'image'
  * itemId **required** `integer`: ID of the ratings record that you wish to modify

#### Output
* output [UserRatingsDataNoLinksEmptyArray](#userratingsdatanolinksemptyarray)

### user.ratings.itemType.itemId.itemRating.put
This route updates a given rating of a given type.


```js
thetvdb.user.ratings.itemType.itemId.itemRating.put({
  "itemType": "",
  "itemId": 0,
  "itemRating": 0
}, context)
```

#### Input
* input `object`
  * itemType **required** `string`: Item to update. Can be either 'series', 'episode', or 'image'
  * itemId **required** `integer`: ID of the ratings record that you wish to modify
  * itemRating **required** `integer`: The updated rating number

#### Output
* output [UserRatingsDataNoLinks](#userratingsdatanolinks)



## Definitions

### Auth
* Auth `object`
  * apikey `string`
  * userkey `string`
  * username `string`

### BasicEpisode
* BasicEpisode `object`
  * absoluteNumber `integer`
  * airedEpisodeNumber `integer`
  * airedSeason `integer`
  * dvdEpisodeNumber `integer`
  * dvdSeason `integer`
  * episodeName `string`
  * firstAired `string`
  * id `integer`
  * lastUpdated `integer`
  * overview `string`

### Conflict
* Conflict `object`
  * Error `string`

### Episode
* Episode `object`
  * absoluteNumber `integer`
  * airedEpisodeNumber `integer`
  * airedSeason `integer`
  * airsAfterSeason `integer`
  * airsBeforeEpisode `integer`
  * airsBeforeSeason `integer`
  * director `string`
  * directors `array`
    * items `string`
  * dvdChapter `number`
  * dvdDiscid `string`
  * dvdEpisodeNumber `number`
  * dvdSeason `integer`
  * episodeName `string`
  * filename `string`
  * firstAired `string`
  * guestStars `array`
    * items `string`
  * id `integer`
  * imdbId `string`
  * lastUpdated `integer`
  * lastUpdatedBy `string`
  * overview `string`
  * productionCode `string`
  * seriesId `string`
  * showUrl `string`
  * siteRating `number`
  * siteRatingCount `integer`
  * thumbAdded `string`
  * thumbAuthor `integer`
  * thumbHeight `string`
  * thumbWidth `string`
  * writers `array`
    * items `string`

### EpisodeDataQueryParams
* EpisodeDataQueryParams `object`
  * data `array`
    * items `string`

### EpisodeRecordData
* EpisodeRecordData `object`
  * data [Episode](#episode)
  * errors [JSONErrors](#jsonerrors)

### FilterKeys
* FilterKeys `object`
  * data `array`
    * items `string`

### JSONErrors
* JSONErrors `object`
  * invalidFilters `array`: Invalid filters passed to route
    * items `string`
  * invalidLanguage `string`: Invalid language or translation missing
  * invalidQueryParams `array`: Invalid query params passed to route
    * items `string`

### Language
* Language `object`
  * abbreviation `string`
  * englishName `string`
  * id `integer`
  * name `string`

### LanguageData
* LanguageData `object`
  * data `array`
    * items [Language](#language)

### Links
* Links `object`
  * first `integer`
  * last `integer`
  * next `integer`
  * previous `integer`

### NotAuthorized
* NotAuthorized `object`
  * Error `string`

### NotFound
* NotFound `object`
  * Error `string`

### Series
* Series `object`
  * added `string`
  * airsDayOfWeek `string`
  * airsTime `string`
  * aliases `array`
    * items `string`
  * banner `string`
  * firstAired `string`
  * genre `array`
    * items `string`
  * id `integer`
  * imdbId `string`
  * lastUpdated `integer`
  * network `string`
  * networkId `string`
  * overview `string`
  * rating `string`
  * runtime `string`
  * seriesId `integer`
  * seriesName `string`
  * siteRating `number`
  * siteRatingCount `integer`
  * status `string`
  * zap2itId `string`

### SeriesActors
* SeriesActors `object`
  * data `array`
    * items [SeriesActorsData](#seriesactorsdata)
  * errors [JSONErrors](#jsonerrors)

### SeriesActorsData
* SeriesActorsData `object`
  * id `integer`
  * image `string`
  * imageAdded `string`
  * imageAuthor `integer`
  * lastUpdated `string`
  * name `string`
  * role `string`
  * seriesId `integer`
  * sortOrder `integer`

### SeriesData
* SeriesData `object`
  * data [Series](#series)
  * errors [JSONErrors](#jsonerrors)

### SeriesEpisodes
* SeriesEpisodes `object`
  * data `array`
    * items [BasicEpisode](#basicepisode)
  * errors [JSONErrors](#jsonerrors)
  * links [Links](#links)

### SeriesEpisodesQuery
* SeriesEpisodesQuery `object`
  * data `array`
    * items [BasicEpisode](#basicepisode)
  * errors [JSONErrors](#jsonerrors)
  * links [Links](#links)

### SeriesEpisodesQueryParams
* SeriesEpisodesQueryParams `object`
  * data `array`
    * items `string`

### SeriesEpisodesSummary
* SeriesEpisodesSummary `object`
  * airedEpisodes `string`: Number of all aired episodes for this series
  * airedSeasons `array`
    * items `string`
  * dvdEpisodes `string`: Number of all dvd episodes for this series
  * dvdSeasons `array`
    * items `string`

### SeriesImageQueryResult
* SeriesImageQueryResult `object`
  * fileName `string`
  * id `integer`
  * keyType `string`
  * languageId `integer`
  * ratingsInfo `object`
    * average `number`: Average rating for the given record.
    * count `integer`: Number of ratings for the given record.
  * resolution `string`
  * subKey `string`
  * thumbnail `string`

### SeriesImageQueryResults
* SeriesImageQueryResults `object`
  * data `array`
    * items [SeriesImageQueryResult](#seriesimagequeryresult)
  * errors [JSONErrors](#jsonerrors)

### SeriesImagesCount
* SeriesImagesCount `object`
  * fanart `integer`
  * poster `integer`
  * season `integer`
  * seasonwide `integer`
  * series `integer`

### SeriesImagesCounts
* SeriesImagesCounts `object`
  * data [SeriesImagesCount](#seriesimagescount)

### SeriesImagesQueryParam
* SeriesImagesQueryParam `object`
  * keyType `string`
  * languageId `string`
  * resolution `array`
    * items `string`
  * subKey `array`
    * items `string`

### SeriesImagesQueryParams
* SeriesImagesQueryParams `object`
  * data `array`
    * items [SeriesImagesQueryParam](#seriesimagesqueryparam)

### SeriesSearchData
* SeriesSearchData `object`
  * aliases `array`
    * items `string`
  * banner `string`
  * firstAired `string`
  * id `integer`
  * network `string`
  * overview `string`
  * seriesName `string`
  * status `string`

### Token
* Token `object`
  * token `string`

### Update
* Update `object`
  * id `integer`
  * lastUpdated `integer`

### UpdateData
* UpdateData `object`
  * data `array`
    * items [Update](#update)
  * errors [JSONErrors](#jsonerrors)

### UpdateDataQueryParams
* UpdateDataQueryParams `object`
  * data `array`
    * items `string`

### User
* User `object`
  * favoritesDisplaymode `string`
  * language `string`
  * userName `string`

### UserData
* UserData `object`
  * data [User](#user)

### UserFavorites
* UserFavorites `object`
  * favorites `array`
    * items `string`

### UserFavoritesData
* UserFavoritesData `object`
  * data [UserFavorites](#userfavorites)
  * errors [JSONErrors](#jsonerrors)

### UserRatings
* UserRatings `object`
  * rating `integer`
  * ratingItemId `integer`
  * ratingType `string`

### UserRatingsData
* UserRatingsData `object`
  * data `array`
    * items [UserRatings](#userratings)
  * errors [JSONErrors](#jsonerrors)
  * links [Links](#links)

### UserRatingsDataNoLinks
* UserRatingsDataNoLinks `object`
  * data `array`
    * items [UserRatings](#userratings)

### UserRatingsDataNoLinksEmptyArray
* UserRatingsDataNoLinksEmptyArray `object`
  * data `array`


### UserRatingsQueryParams
* UserRatingsQueryParams `object`
  * data `array`
    * items `string`


