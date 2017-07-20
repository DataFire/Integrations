# @datafire/thetvdb

Client library for TheTVDB API v2

## Installation and Usage
```bash
npm install --save datafire @datafire/thetvdb
```

```js
let datafire = require('datafire');
let thetvdb = require('@datafire/thetvdb').actions;

let account = {
  jwtToken: "",
}
let context = new datafire.Context({
  accounts: {
    thetvdb: account,
  }
})


thetvdb.user.ratings.query.get({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* id (integer) **required** - ID of the episode
* Accept-Language (string) - Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

### languages.get
All available languages. These language abbreviations can be used in the `Accept-Language` header for routes that return translation records.


```js
thetvdb.languages.get(null, context)
```


### languages.id.get
Information about a particular language, given the language ID.


```js
thetvdb.languages.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - ID of the language

### login.post
Returns a session token to be included in the rest of the requests. Note that API key authentication is required for all subsequent requests and user auth is required for routes in the `User` section


```js
thetvdb.login.post({
  "Authentication string": null
}, context)
```

#### Parameters
* Authentication string (undefined) **required**

### refresh_token.get
Refreshes your current, valid JWT token and returns a new token. Hit this route so that you do not have to post to `/login` with your API key and credentials once you have already been authenticated.


```js
thetvdb.refresh_token.get(null, context)
```


### search.series.get
Allows the user to search for a series based on the following parameters.


```js
thetvdb.search.series.get({}, context)
```


### search.series.params.get
Returns an array of parameters to query by in the `/search/series` route.


```js
thetvdb.search.series.params.get(null, context)
```


### series.id.get
Returns a series records that contains all information known about a particular series id.


```js
thetvdb.series.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series
* Accept-Language (string) - Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

### series.id.head
Returns header information only about the given series ID.


```js
thetvdb.series.id.head({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series
* Accept-Language (string) - Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

### series.id.actors.get
Returns actors for the given series id


```js
thetvdb.series.id.actors.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series

### series.id.episodes.get
All episodes for a given series. Paginated with 100 results per page.


```js
thetvdb.series.id.episodes.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series
* page (string) - Page of results to fetch. Defaults to page 1 if not provided.

### series.id.episodes.query.get
This route allows the user to query against episodes for the given series. The response is a paginated array of episode records that have been filtered down to basic information.


```js
thetvdb.series.id.episodes.query.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series
* absoluteNumber (string) - Absolute number of the episode
* airedSeason (string) - Aired season number
* airedEpisode (string) - Aired episode number
* dvdSeason (string) - DVD season number
* dvdEpisode (string) - DVD episode number
* imdbId (string) - IMDB id of the series
* page (string) - Page of results to fetch. Defaults to page 1 if not provided.
* Accept-Language (string) - Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

### series.id.episodes.query.params.get
Returns the allowed query keys for the `/series/{id}/episodes/query` route


```js
thetvdb.series.id.episodes.query.params.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series

### series.id.episodes.summary.get
Returns a summary of the episodes and seasons available for the series.

__Note__: Season "0" is for all episodes that are considered to be specials.


```js
thetvdb.series.id.episodes.summary.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series

### series.id.filter.get
Returns a series records, filtered by the supplied comma-separated list of keys. Query keys can be found at the `/series/{id}/filter/params` route.


```js
thetvdb.series.id.filter.get({
  "id": 0,
  "keys": ""
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series
* keys (string) **required** - Comma-separated list of keys to filter by
* Accept-Language (string) - Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

### series.id.filter.params.get
Returns the list of keys available for the `/series/{id}/filter` route


```js
thetvdb.series.id.filter.params.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series
* Accept-Language (string) - Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

### series.id.images.get
Returns a summary of the images for a particular series


```js
thetvdb.series.id.images.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series
* Accept-Language (string) - Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

### series.id.images.query.get
Query images for the given series ID.


```js
thetvdb.series.id.images.query.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series
* keyType (string) - Type of image you're querying for (fanart, poster, etc. See ../images/query/params for more details).
* resolution (string) - Resolution to filter by (1280x1024, for example)
* subKey (string) - Subkey for the above query keys. See /series/{id}/images/query/params for more information
* Accept-Language (string) - Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

### series.id.images.query.params.get
Returns the allowed query keys for the `/series/{id}/images/query` route. Contains a parameter record for each unique `keyType`, listing values that will return results.


```js
thetvdb.series.id.images.query.params.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series
* Accept-Language (string) - Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

### updated.query.get
Returns an array of series that have changed in a maximum of one week blocks since the provided `fromTime`.


The user may specify a `toTime` to grab results for less than a week. Any timespan larger than a week will be reduced down to one week automatically.


```js
thetvdb.updated.query.get({
  "fromTime": ""
}, context)
```

#### Parameters
* fromTime (string) **required** - Epoch time to start your date range.
* toTime (string) - Epoch time to end your date range. Must be one week from `fromTime`.
* Accept-Language (string) - Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields.

### updated.query.params.get
Returns an array of valid query keys for the `/updated/query/params` route.


```js
thetvdb.updated.query.params.get(null, context)
```


### user.get
Returns basic information about the currently authenticated user.


```js
thetvdb.user.get(null, context)
```


### user.favorites.get
Returns an array of favorite series for a given user, will be a blank array if no favorites exist.


```js
thetvdb.user.favorites.get(null, context)
```


### user.favorites.id.delete
Deletes the given series ID from the user’s favorite’s list and returns the updated list.


```js
thetvdb.user.favorites.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series

### user.favorites.id.put
Adds the supplied series ID to the user’s favorite’s list and returns the updated list.


```js
thetvdb.user.favorites.id.put({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the series

### user.ratings.get
Returns an array of ratings for the given user.


```js
thetvdb.user.ratings.get(null, context)
```


### user.ratings.query.get
Returns an array of ratings for a given user that match the query.


```js
thetvdb.user.ratings.query.get({}, context)
```


### user.ratings.query.params.get
Returns a list of query params for use in the `/user/ratings/query` route.


```js
thetvdb.user.ratings.query.params.get(null, context)
```


### user.ratings.itemType.itemId.delete
This route deletes a given rating of a given type.


```js
thetvdb.user.ratings.itemType.itemId.delete({
  "itemType": "",
  "itemId": 0
}, context)
```

#### Parameters
* itemType (string) **required** - Item to update. Can be either 'series', 'episode', or 'image'
* itemId (integer) **required** - ID of the ratings record that you wish to modify

### user.ratings.itemType.itemId.itemRating.put
This route updates a given rating of a given type.


```js
thetvdb.user.ratings.itemType.itemId.itemRating.put({
  "itemType": "",
  "itemId": 0,
  "itemRating": 0
}, context)
```

#### Parameters
* itemType (string) **required** - Item to update. Can be either 'series', 'episode', or 'image'
* itemId (integer) **required** - ID of the ratings record that you wish to modify
* itemRating (integer) **required** - The updated rating number

