# @datafire/thetvdb
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

## Operation: episodes.id.get
Returns the full information for a given episode id. __Deprecation Warning:__ The _director_ key will be deprecated in favor of the new _directors_ key in a future release.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the episode"
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EpisodeRecordData"
}
```
## Operation: languages.get
All available languages. These language abbreviations can be used in the `Accept-Language` header for routes that return translation records.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LanguageData"
}
```
## Operation: languages.id.get
Information about a particular language, given the language ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "ID of the language"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Language"
}
```
## Operation: login.post
Returns a session token to be included in the rest of the requests. Note that API key authentication is required for all subsequent requests and user auth is required for routes in the `User` section

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authentication string": {
      "$ref": "#/definitions/Auth"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authentication string"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Token"
}
```
## Operation: refresh_token.get
Refreshes your current, valid JWT token and returns a new token. Hit this route so that you do not have to post to `/login` with your API key and credentials once you have already been authenticated.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Token"
}
```
## Operation: search.series.get
Allows the user to search for a series based on the following parameters.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of the series to search for."
    },
    "imdbId": {
      "type": "string",
      "description": "IMDB id of the series"
    },
    "zap2itId": {
      "type": "string",
      "description": "Zap2it ID of the series to search for."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesSearchData"
}
```
## Operation: search.series.params.get
Returns an array of parameters to query by in the `/search/series` route.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EpisodeDataQueryParams"
}
```
## Operation: series.id.get
Returns a series records that contains all information known about a particular series id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesData"
}
```
## Operation: series.id.head
Returns header information only about the given series ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: series.id.actors.get
Returns actors for the given series id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesActors"
}
```
## Operation: series.id.episodes.get
All episodes for a given series. Paginated with 100 results per page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    },
    "page": {
      "type": "string",
      "description": "Page of results to fetch. Defaults to page 1 if not provided."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesEpisodes"
}
```
## Operation: series.id.episodes.query.get
This route allows the user to query against episodes for the given series. The response is a paginated array of episode records that have been filtered down to basic information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    },
    "absoluteNumber": {
      "type": "string",
      "description": "Absolute number of the episode"
    },
    "airedSeason": {
      "type": "string",
      "description": "Aired season number"
    },
    "airedEpisode": {
      "type": "string",
      "description": "Aired episode number"
    },
    "dvdSeason": {
      "type": "string",
      "description": "DVD season number"
    },
    "dvdEpisode": {
      "type": "string",
      "description": "DVD episode number"
    },
    "imdbId": {
      "type": "string",
      "description": "IMDB id of the series"
    },
    "page": {
      "type": "string",
      "description": "Page of results to fetch. Defaults to page 1 if not provided."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesEpisodesQuery"
}
```
## Operation: series.id.episodes.query.params.get
Returns the allowed query keys for the `/series/{id}/episodes/query` route

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesEpisodesQueryParams"
}
```
## Operation: series.id.episodes.summary.get
Returns a summary of the episodes and seasons available for the series.

__Note__: Season "0" is for all episodes that are considered to be specials.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesEpisodesSummary"
}
```
## Operation: series.id.filter.get
Returns a series records, filtered by the supplied comma-separated list of keys. Query keys can be found at the `/series/{id}/filter/params` route.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    },
    "keys": {
      "type": "string",
      "description": "Comma-separated list of keys to filter by"
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "keys"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesData"
}
```
## Operation: series.id.filter.params.get
Returns the list of keys available for the `/series/{id}/filter` route

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FilterKeys"
}
```
## Operation: series.id.images.get
Returns a summary of the images for a particular series

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesImagesCounts"
}
```
## Operation: series.id.images.query.get
Query images for the given series ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    },
    "keyType": {
      "type": "string",
      "description": "Type of image you're querying for (fanart, poster, etc. See ../images/query/params for more details)."
    },
    "resolution": {
      "type": "string",
      "description": "Resolution to filter by (1280x1024, for example)"
    },
    "subKey": {
      "type": "string",
      "description": "Subkey for the above query keys. See /series/{id}/images/query/params for more information"
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesImageQueryResults"
}
```
## Operation: series.id.images.query.params.get
Returns the allowed query keys for the `/series/{id}/images/query` route. Contains a parameter record for each unique `keyType`, listing values that will return results.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SeriesImagesQueryParams"
}
```
## Operation: updated.query.get
Returns an array of series that have changed in a maximum of one week blocks since the provided `fromTime`.


The user may specify a `toTime` to grab results for less than a week. Any timespan larger than a week will be reduced down to one week automatically.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fromTime": {
      "type": "string",
      "description": "Epoch time to start your date range."
    },
    "toTime": {
      "type": "string",
      "description": "Epoch time to end your date range. Must be one week from `fromTime`."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Records are returned with the Episode name and Overview in the desired language, if it exists. If there is no translation for the given language, then the record is still returned but with empty values for the translated fields."
    }
  },
  "additionalProperties": false,
  "required": [
    "fromTime"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateData"
}
```
## Operation: updated.query.params.get
Returns an array of valid query keys for the `/updated/query/params` route.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateDataQueryParams"
}
```
## Operation: user.get
Returns basic information about the currently authenticated user.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserData"
}
```
## Operation: user.favorites.get
Returns an array of favorite series for a given user, will be a blank array if no favorites exist.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserFavoritesData"
}
```
## Operation: user.favorites.id.delete
Deletes the given series ID from the user’s favorite’s list and returns the updated list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserFavoritesData"
}
```
## Operation: user.favorites.id.put
Adds the supplied series ID to the user’s favorite’s list and returns the updated list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the series"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserFavoritesData"
}
```
## Operation: user.ratings.get
Returns an array of ratings for the given user.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRatingsData"
}
```
## Operation: user.ratings.query.get
Returns an array of ratings for a given user that match the query.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "itemType": {
      "type": "string",
      "format": "string",
      "description": "Item to query. Can be either 'series', 'episode', or 'banner'"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRatingsData"
}
```
## Operation: user.ratings.query.params.get
Returns a list of query params for use in the `/user/ratings/query` route.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRatingsQueryParams"
}
```
## Operation: user.ratings.itemType.itemId.delete
This route deletes a given rating of a given type.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "itemType": {
      "type": "string",
      "format": "string",
      "description": "Item to update. Can be either 'series', 'episode', or 'image'"
    },
    "itemId": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the ratings record that you wish to modify"
    }
  },
  "additionalProperties": false,
  "required": [
    "itemType",
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRatingsDataNoLinksEmptyArray"
}
```
## Operation: user.ratings.itemType.itemId.itemRating.put
This route updates a given rating of a given type.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "itemType": {
      "type": "string",
      "format": "string",
      "description": "Item to update. Can be either 'series', 'episode', or 'image'"
    },
    "itemId": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the ratings record that you wish to modify"
    },
    "itemRating": {
      "type": "integer",
      "format": "int64",
      "description": "The updated rating number"
    }
  },
  "additionalProperties": false,
  "required": [
    "itemType",
    "itemId",
    "itemRating"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserRatingsDataNoLinks"
}
```
