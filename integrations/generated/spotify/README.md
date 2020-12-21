# @datafire/spotify

Client library for Spotify

## Installation and Usage
```bash
npm install --save @datafire/spotify
```
```js
let spotify = require('@datafire/spotify').create({
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



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
spotify.oauthCallback({
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
spotify.oauthRefresh(null, context)
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

### albums.get
[Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)



```js
spotify.albums.get({
  "ids": ""
}, context)
```

#### Input
* input `object`
  * ids **required** `string`: A comma-separated list of IDs
  * market `string`: The market (an ISO 3166-1 alpha-2 country code)

#### Output
* output `object`
  * albums `array`
    * items [album](#album)

### albums.id.get
[Get an Album](https://developer.spotify.com/web-api/get-album/)



```js
spotify.albums.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Spotify ID for the album
  * market `string`: The market (an ISO 3166-1 alpha-2 country code)

#### Output
* output [album](#album)

### albums.id.tracks.get
[Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)



```js
spotify.albums.id.tracks.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Spotify ID for the album
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The index of the first item to return
  * market `string`: The market (an ISO 3166-1 alpha-2 country code)

#### Output
* output [track-simple-page](#track-simple-page)

### artists.get
[Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)



```js
spotify.artists.get({
  "ids": ""
}, context)
```

#### Input
* input `object`
  * ids **required** `string`: A comma-separated list of IDs

#### Output
* output `object`
  * artists `array`
    * items [artist](#artist)

### artists.id.get
[Get an Artist](https://developer.spotify.com/web-api/get-artist/)



```js
spotify.artists.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Spotify ID for the artist

#### Output
* output [artist](#artist)

### artists.id.albums.get
[Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/)



```js
spotify.artists.id.albums.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Spotify ID for the artist
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The index of the first item to return
  * album_type `string`: Filter by album types
  * market `string`: The market (an ISO 3166-1 alpha-2 country code)

#### Output
* output [album-simple-page](#album-simple-page)

### artists.id.related_artists.get
[Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/)



```js
spotify.artists.id.related_artists.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Spotify ID for the artist

#### Output
* output `object`
  * artists `array`
    * items [artist](#artist)

### artists.id.top_tracks.get
[Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)



```js
spotify.artists.id.top_tracks.get({
  "id": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Spotify ID for the artist
  * country **required** `string`: The country (an ISO 3166-1 alpha-2 country code)

#### Output
* output `object`
  * tracks `array`
    * items [track](#track)

### browse.categories.get
[Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)



```js
spotify.browse.categories.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The index of the first item to return
  * country `string`: The country (an ISO 3166-1 alpha-2 country code)
  * locale `string`: The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
  * Accept `string`: It is used to set specified media type.

#### Output
* output [category-page](#category-page)

### browse.categories.category_id.get
[Get a Single Browse Category](https://developer.spotify.com/web-api/get-category/)



```js
spotify.browse.categories.category_id.get({
  "category_id": ""
}, context)
```

#### Input
* input `object`
  * category_id **required** `string`: The Spotify ID of the category you wish to fetch.
  * country `string`: The country (an ISO 3166-1 alpha-2 country code)
  * locale `string`: The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
  * Accept `string`: It is used to set specified media type.

#### Output
* output [category](#category)

### browse.categories.category_id.playlists.get
[Get a Category's playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)



```js
spotify.browse.categories.category_id.playlists.get({
  "category_id": ""
}, context)
```

#### Input
* input `object`
  * category_id **required** `string`: The Spotify ID of the category you wish to fetch.
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The index of the first item to return
  * country `string`: The country (an ISO 3166-1 alpha-2 country code)
  * Accept `string`: It is used to set specified media type.

#### Output
* output `object`
  * playlists [playlist-simple-page](#playlist-simple-page)

### browse.featured_playlists.get
[Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/)



```js
spotify.browse.featured_playlists.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The index of the first item to return
  * country `string`: The country (an ISO 3166-1 alpha-2 country code)
  * locale `string`: The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
  * timestamp `string`: A timestamp in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss) with the user's local time to get results tailored to a specific date and time in the day. If not provided, it defaults to the current UTC time. Example: "2014-10-23T09:00:00" for a user whose local time is 9AM.
  * Accept `string`: It is used to set specified media type.

#### Output
* output [featured-playlists](#featured-playlists)

### browse.new_releases.get
[Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)



```js
spotify.browse.new_releases.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The index of the first item to return
  * country `string`: The country (an ISO 3166-1 alpha-2 country code)
  * Accept `string`: It is used to set specified media type.

#### Output
* output [album-simple-page](#album-simple-page)

### me.get
[Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/)



```js
spotify.me.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [current-user-profile](#current-user-profile)

### me.following.delete
[Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)



```js
spotify.me.following.delete({
  "type": "",
  "ids": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: artist, user): The type to unfollow.
  * ids **required** `string`: A comma-separated list of the artists or users ids

#### Output
*Output schema unknown*

### me.following.get
[Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)



```js
spotify.me.following.get({
  "type": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: artist): The ID type, currently only artist is supported.
  * limit `integer`: The maximum number of items to return
  * after `string`: The last artist ID retrieved from the previous request.

#### Output
* output [user-followed](#user-followed)

### me.following.put
[Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)



```js
spotify.me.following.put({
  "type": "",
  "ids": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: artist, user): The type to follow.
  * ids **required** `string`: A comma-separated list of the artists or users ids

#### Output
*Output schema unknown*

### me.following.contains.get
[Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)



```js
spotify.me.following.contains.get({
  "type": "",
  "ids": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: artist, user): The type to follow.
  * ids **required** `string`: A comma-separated string of the artists or users ids.

#### Output
* output `array`
  * items `boolean`: True if the user follows the artist/user, false otherwise

### me.tracks.delete
[Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)



```js
spotify.me.tracks.delete({
  "ids": ""
}, context)
```

#### Input
* input `object`
  * ids **required** `string`: A comma-separated list of IDs
  * Accept `string`: It is used to set specified media type.

#### Output
*Output schema unknown*

### me.tracks.get
[Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)



```js
spotify.me.tracks.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The index of the first item to return
  * market `string`: The market (an ISO 3166-1 alpha-2 country code)
  * Accept `string`: It is used to set specified media type.

#### Output
* output [saved-track-page](#saved-track-page)

### me.tracks.put
[Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)



```js
spotify.me.tracks.put({
  "ids": ""
}, context)
```

#### Input
* input `object`
  * ids **required** `string`: A comma-separated list of IDs
  * Accept `string`: It is used to set specified media type.

#### Output
*Output schema unknown*

### me.tracks.contains.get
[Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)



```js
spotify.me.tracks.contains.get({
  "ids": ""
}, context)
```

#### Input
* input `object`
  * ids **required** `string`: A comma-separated list of IDs

#### Output
* output `array`
  * items `boolean`: True if the track is in user's Your Music library, false otherwise

### search.get
[Search for an Item](https://developer.spotify.com/web-api/search-item/)



```js
spotify.search.get({
  "q": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The index of the first item to return
  * q **required** `string`: The search query's keywords (and optional field filters). The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus q=roadhouse&20blues will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: q=roadhouse&20blues will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. Searches can be made more specific by specifying an album, artist or track field filter. For example q=album:gold%20artist:abba&type=album will search for albums with the text 'gold' in the album name and the text 'abba' in an artist name. Other possible field filters, depending on object types being searched, include year, genre, upc, and isrc. For example, q=damian%20genre:reggae-pop&type=artist. The asterisk (*) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.
  * type **required** `string`: A comma-separated list of item types to search across. Search results will include hits from all the specified item types; for example q=name:abacab&type=album,track will return both albums and tracks with "abacab" in their name.
  * market `string`: The market (an ISO 3166-1 alpha-2 country code).  If given, only items with content playable in that market will be returned.

#### Output
* output [search](#search)

### tracks.get
[Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/)



```js
spotify.tracks.get({
  "ids": ""
}, context)
```

#### Input
* input `object`
  * ids **required** `string`: A comma-separated list of IDs
  * market `string`: The market (an ISO 3166-1 alpha-2 country code)

#### Output
* output `object`
  * tracks `array`
    * items [track](#track)

### tracks.id.get
[Get a Track](https://developer.spotify.com/web-api/get-track/)



```js
spotify.tracks.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * market `string`: The market (an ISO 3166-1 alpha-2 country code)

#### Output
* output [track](#track)

### users.user_id.get
[Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/)



```js
spotify.users.user_id.get({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.

#### Output
* output [user-profile](#user-profile)

### users.user_id.playlists.get
[Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/)



```js
spotify.users.user_id.playlists.get({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The index of the first item to return
  * Accept `string`: It is used to set specified media type.

#### Output
* output [playlist-simple-page](#playlist-simple-page)

### users.user_id.playlists.post
[Create a Playlist](https://developer.spotify.com/web-api/create-playlist/)



```js
spotify.users.user_id.playlists.post({
  "user_id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * Accept `string`: It is used to set specified media type.
  * body **required** `object`
    * name **required** `string`
    * public `boolean`

#### Output
* output [playlist](#playlist)

### users.user_id.playlists.playlist_id.get
[Get a Playlist](https://developer.spotify.com/web-api/get-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.get({
  "user_id": "",
  "playlist_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * playlist_id **required** `string`: The Spotify playlist ID.
  * fields `string`: A comma-separated list of fields to filter query
  * market `string`: The market (an ISO 3166-1 alpha-2 country code)
  * Accept `string`: It is used to set specified media type.

#### Output
* output [playlist](#playlist)

### users.user_id.playlists.playlist_id.put
[Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/)



```js
spotify.users.user_id.playlists.playlist_id.put({
  "user_id": "",
  "playlist_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * playlist_id **required** `string`: The Spotify playlist ID.
  * Accept `string`: It is used to set specified media type.
  * body **required** `object`
    * name `string`
    * public `boolean`

#### Output
*Output schema unknown*

### users.user_id.playlists.playlist_id.followers.delete
[Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.followers.delete({
  "user_id": "",
  "playlist_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * playlist_id **required** `string`: The Spotify playlist ID.

#### Output
*Output schema unknown*

### users.user_id.playlists.playlist_id.followers.put
[Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.followers.put({
  "user_id": "",
  "playlist_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * playlist_id **required** `string`: The Spotify playlist ID.
  * body **required** `object`
    * public `boolean`

#### Output
*Output schema unknown*

### users.user_id.playlists.playlist_id.followers.contains.get
[Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.followers.contains.get({
  "user_id": "",
  "playlist_id": "",
  "ids": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * playlist_id **required** `string`: The Spotify playlist ID.
  * ids **required** `string`: A comma-separated list of users ids

#### Output
* output `array`
  * items `boolean`: True if the user follows the playlist, false otherwise

### users.user_id.playlists.playlist_id.tracks.delete
[Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.tracks.delete({
  "user_id": "",
  "playlist_id": "",
  "body": {
    "tracks": []
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * playlist_id **required** `string`: The Spotify playlist ID.
  * Accept `string`: It is used to set specified media type.
  * body **required** `object`
    * tracks **required** `array`

#### Output
* output [playlist-snapshot](#playlist-snapshot)

### users.user_id.playlists.playlist_id.tracks.get
[Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)



```js
spotify.users.user_id.playlists.playlist_id.tracks.get({
  "user_id": "",
  "playlist_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * playlist_id **required** `string`: The Spotify playlist ID.
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The index of the first item to return
  * fields `string`: A comma-separated list of fields to filter query
  * market `string`: The market (an ISO 3166-1 alpha-2 country code)
  * Accept `string`: It is used to set specified media type.

#### Output
* output [playlist-track-page](#playlist-track-page)

### users.user_id.playlists.playlist_id.tracks.post
[Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.tracks.post({
  "user_id": "",
  "playlist_id": "",
  "uris": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * playlist_id **required** `string`: The Spotify playlist ID.
  * position `integer`: The position to insert the tracks, a zero-based index
  * uris **required** `string`: A comma-separated list of Spotify track URIs to add. A maximum of 100 tracks can be added in one request.
  * Accept `string`: It is used to set specified media type.

#### Output
* output [playlist-snapshot](#playlist-snapshot)

### users.user_id.playlists.playlist_id.tracks.put
[Reorder or replace a Playlist's Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)



```js
spotify.users.user_id.playlists.playlist_id.tracks.put({
  "user_id": "",
  "playlist_id": "",
  "body": {
    "uris": []
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user's Spotify user ID.
  * playlist_id **required** `string`: The Spotify playlist ID.
  * Accept `string`: It is used to set specified media type.
  * body **required** `object`
    * uris **required** `array`

#### Output
* output [playlist-snapshot](#playlist-snapshot)



## Definitions

### album
* album `object`
  * album_type `string`: The type of the album: one of 'album', 'single', or 'compilation'.
  * artists `array`: The artists of the album. Each artist object includes a link in href to more detailed information about the artist.
    * items [artist](#artist)
  * available_markets `array`: The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
    * items `string`
  * copyrights `array`: The copyright statements of the album.
    * items `object`
      * text `string`: The copyright text for this album.
      * type `string`: The type of copyright: C = the copyright, P = the sound recording (performance) copyright.
  * external_ids `object`: Known external IDs for this album.
  * external_urls `object`: Known external URLs for this album.
  * genres `array`: A list of the genres used to classify the album. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.)
    * items `string`
  * href `string`: A link to the Web API endpoint providing full details of the album.
  * id `string`: The Spotify ID for the album.
  * images `array`: The cover art for the album in various sizes, widest first.
    * items [image](#image)
  * name `string`: The name of the album.
  * popularity `integer`: The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album's individual tracks.
  * release_date `string`: The date the album was first released, for example '1981-12-15'. Depending on the precision, it might be shown as '1981' or '1981-12'.
  * release_date_precision `string`: The precision with which release_date value is known: 'year', 'month', or 'day'.
  * tracks [track-simple-page](#track-simple-page)
  * type `string`: The object type: 'album'.
  * uri `string`: The Spotify URI for the album.

### album-simple
* album-simple `object`
  * album_type `string`: The type of the album: one of 'album', 'single', or 'compilation'.
  * available_markets `array`: The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
    * items `string`
  * external_urls `object`: Known external URLs for this album.
  * href `string`: A link to the Web API endpoint providing full details of the album.
  * id `string`: The Spotify ID for the album.
  * images `array`: The cover art for the album in various sizes, widest first.
    * items [image](#image)
  * name `string`: The name of the album.
  * type `string`: The object type: 'album'.
  * uri `string`: The Spotify URI for the album.

### album-simple-page
* album-simple-page `object`
  * href `string`: A link to the Web API endpoint returning the full result of the request.
  * items `array`: The requested data.
    * items [album-simple](#album-simple)
  * limit `integer`: The maximum number of items in the response (as set in the query or by default).
  * next `string`: URL to the next page of items. (null if none)
  * offset `integer`: The offset of the items returned (as set in the query or by default).
  * previous `string`: URL to the previous page of items. (null if none)
  * total `integer`: The total number of items available to return.

### album-track-page
* album-track-page `object`
  * href `string`: A link to the Web API endpoint returning the full result of the request.
  * items `array`: The requested data.
    * items [track-simple](#track-simple)
  * limit `integer`: The maximum number of items in the response (as set in the query or by default).
  * next `string`: URL to the next page of items. (null if none)
  * offset `integer`: The offset of the items returned (as set in the query or by default).
  * previous `string`: URL to the previous page of items. (null if none)
  * total `integer`: The total number of items available to return.

### artist
* artist `object`
  * external_urls `object`: Known external URLs for this artist.
  * followers [followers](#followers)
  * genres `array`: A list of the genres the artist is associated with. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.)
    * items `string`
  * href `string`: A link to the Web API endpoint providing full details of the artist.
  * id `string`: The Spotify ID for the artist.
  * images `array`: Images of the artist in various sizes, widest first.
    * items [image](#image)
  * name `string`: The name of the artist.
  * popularity `integer`: The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
  * type `string`: The object type: 'artist'
  * uri `string`: The Spotify URI for the artist.

### artist-simple
* artist-simple `object`
  * external_urls `object`: Known external URLs for this artist.
  * href `string`: A link to the Web API endpoint providing full details of the artist.
  * id `string`: The Spotify ID for the artist.
  * name `string`: The name of the artist.
  * type `string`: The object type: 'artist'
  * uri `string`: The Spotify URI for the artist.

### category
* category `object`
  * href `string`: A link to the Web API endpoint returning full details of the category.
  * icons `array`
    * items [image](#image)
  * id `string`: The Spotify category ID of the category.
  * name `string`: The name of the category.

### category-page
* category-page `object`
  * href `string`: A link to the Web API endpoint returning the full result of the request.
  * items `array`: The requested data.
    * items [category](#category)
  * limit `integer`: The maximum number of items in the response (as set in the query or by default).
  * next `string`: URL to the next page of items. (null if none)
  * offset `integer`: The offset of the items returned (as set in the query or by default).
  * previous `string`: URL to the previous page of items. (null if none)
  * total `integer`: The total number of items available to return.

### current-user-profile
* current-user-profile `object`
  * birthdate `string`: The user's date-of-birth. This field is only available when the current user has granted access to the user-read-birthdate scope.
  * country `string`: The country of the user, as set in the user's account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope.
  * displayName `string`: The name displayed on the user's profile.
  * email `string`: The user's email address, as entered by the user when creating their account. This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope.
  * external_urls `object`: Known external URLs for this user.
  * followers [followers](#followers)
  * href `string`: A link to the Web API endpoint for this user.
  * id `string`: The Spotify ID for this user.
  * product `string`: The user's Spotify subscription level: 'premium', 'free', etc. (The subscription level 'open' can be considered the same as 'free'.) This field is only available when the current user has granted access to the user-read-private scope.
  * type `string`: The object type: 'user'
  * uri `string`: The Spotify URI for the user.

### featured-playlists
* featured-playlists `object`
  * message `string`: A sentence describing the context for the featured playlists.
  * playlists [playlist-simple-page](#playlist-simple-page)

### followers
* followers `object`: Information about the followers of the artist.
  * href `string`: A link to the Web API endpoint providing full details of the followers; null if not available.
  * total `integer`: The total number of followers.

### image
* image `object`
  * height `integer`: The image height in pixels. If unknown: null or not returned.
  * url `string`: The source URL of the image.
  * width `integer`: The image width in pixels. If unknown: null or not returned.

### playlist
* playlist `object`
  * collaborative `boolean`: True if the owner allows other users to modify the playlist.
  * description `string`: The playlist description. Only returned for modified, verified playlists, otherwise null.
  * external_urls `object`: Known external URLs for this album.
  * followers `object`: Information about the followers of the playlist.
    * href `string`: A link to the Web API endpoint providing full details of the followers; null if not available.
    * total `integer`: The total number of followers.
  * href `string`: A link to the Web API endpoint providing full details of the playlist.
  * id `string`: The Spotify ID of the playlist.
  * images `array`: The cover art for the album in various sizes, widest first.
    * items [image](#image)
  * name `string`: The name of the playlist.
  * owner [user-profile](#user-profile)
  * public `boolean`: The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.
  * snapshot_id `string`: The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
  * tracks [playlist-track-page](#playlist-track-page)
  * type `string`: The object type: 'playlist'.
  * uri `string`: Spotify URI of the playlist.

### playlist-simple
* playlist-simple `object`
  * collaborative `boolean`: True if the owner allows other users to modify the playlist.
  * external_urls `object`: Known external URLs for this album.
  * href `string`: A link to the Web API endpoint providing full details of the playlist.
  * id `string`: The Spotify ID of the playlist.
  * images `array`: The cover art for the album in various sizes, widest first.
    * items [image](#image)
  * name `string`: The name of the playlist.
  * owner [user-profile](#user-profile)
  * public `boolean`: The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.
  * snapshot_id `string`: The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
  * tracks `object`
    * href `string`: A link to the Web API endpoint returning the full result of the request.
    * total `integer`: The total number of tracks available to return.
  * type `string`: The object type: 'playlist'.
  * uri `string`: Spotify URI of the playlist.

### playlist-simple-page
* playlist-simple-page `object`
  * href `string`: A link to the Web API endpoint returning the full result of the request.
  * items `array`: The requested data.
    * items [playlist-simple](#playlist-simple)
  * limit `integer`: The maximum number of items in the response (as set in the query or by default).
  * next `string`: URL to the next page of items. (null if none)
  * offset `integer`: The offset of the items returned (as set in the query or by default).
  * previous `string`: URL to the previous page of items. (null if none)
  * total `integer`: The total number of items available to return.

### playlist-snapshot
* playlist-snapshot `object`
  * snapshot_id `string`: The version identifier for the modified playlist. Can be supplied in other requests to target a specific playlist version.

### playlist-track
* playlist-track `object`
  * added_at `string`: The date and time the track was added in ISO 8601 format. Note that some very old playlists may return null in this field.
  * added_by [user-profile](#user-profile)
  * is_local `boolean`: Whether this track is a [local file](https://developer.spotify.com/web-api/local-files-spotify-playlists/) or not.
  * track [track](#track)

### playlist-track-page
* playlist-track-page `object`
  * href `string`: A link to the Web API endpoint returning the full result of the request.
  * items `array`: The requested data.
    * items [playlist-track](#playlist-track)
  * limit `integer`: The maximum number of items in the response (as set in the query or by default).
  * next `string`: URL to the next page of items. (null if none)
  * offset `integer`: The offset of the items returned (as set in the query or by default).
  * previous `string`: URL to the previous page of items. (null if none)
  * total `integer`: The total number of items available to return.

### saved-track
* saved-track `object`
  * added_at `string`: The date and time the track was added in ISO 8601 format. Note that some very old playlists may return null in this field.
  * track [track](#track)

### saved-track-page
* saved-track-page `object`
  * href `string`: A link to the Web API endpoint returning the full result of the request.
  * items `array`: The requested data.
    * items [saved-track](#saved-track)
  * limit `integer`: The maximum number of items in the response (as set in the query or by default).
  * next `string`: URL to the next page of items. (null if none)
  * offset `integer`: The offset of the items returned (as set in the query or by default).
  * previous `string`: URL to the previous page of items. (null if none)
  * total `integer`: The total number of items available to return.

### search
* search `object`
  * albums `object`: Present if the type of search includes 'album'.
    * href `string`: A link to the Web API endpoint returning the full result of the request.
    * items `array`: The requested data.
      * items [album-simple](#album-simple)
    * limit `integer`: The maximum number of items in the response (as set in the query or by default).
    * next `string`: URL to the next page of items. (null if none)
    * offset `integer`: The offset of the items returned (as set in the query or by default).
    * previous `string`: URL to the previous page of items. (null if none)
    * total `integer`: The total number of items available to return.
  * artists `object`: Present if the type of search includes 'artist'.
    * href `string`: A link to the Web API endpoint returning the full result of the request.
    * items `array`: The requested data.
      * items [artist](#artist)
    * limit `integer`: The maximum number of items in the response (as set in the query or by default).
    * next `string`: URL to the next page of items. (null if none)
    * offset `integer`: The offset of the items returned (as set in the query or by default).
    * previous `string`: URL to the previous page of items. (null if none)
    * total `integer`: The total number of items available to return.
  * tracks `object`: Present if the type of search includes 'track'.
    * href `string`: A link to the Web API endpoint returning the full result of the request.
    * items `array`: The requested data.
      * items [track](#track)
    * limit `integer`: The maximum number of items in the response (as set in the query or by default).
    * next `string`: URL to the next page of items. (null if none)
    * offset `integer`: The offset of the items returned (as set in the query or by default).
    * previous `string`: URL to the previous page of items. (null if none)
    * total `integer`: The total number of items available to return.

### track
* track `object`
  * album [album-simple](#album-simple)
  * artists `array`: The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
    * items [artist-simple](#artist-simple)
  * available_markets `array`: A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code. 
    * items `string`
  * disc_number `integer`: The disc number (usually 1 unless the album consists of more than one disc).
  * duration_ms `integer`: The track length in milliseconds.
  * explicit `boolean`: Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown).
  * external_ids `object`: Known external IDs for the track.
  * external_urls `object`: Known external URLs for this track.
  * href `string`: A link to the Web API endpoint providing full details of the track.
  * id `string`: The Spotify ID for the track.
  * is_playable `boolean`: Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false.
  * linked_from `object`: Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track.
    * external_urls `object`: Known external URLs for this track.
    * href `string`: A link to the Web API endpoint providing full details of the track.
    * id `string`: The Spotify ID for the track.
    * type `string`: The object type: 'track'.
    * uri `string`: The Spotify URI for the track.
  * name `string`: The name of the track.
  * preview_url `string`: A URL to a 30 second preview (MP3 format) of the track.
  * track_number `integer`: The number of the track. If an album has several discs, the track number is the number on the specified disc.
  * type `string`: The object type: 'track'.
  * uri `string`: The Spotify URI for the track.

### track-simple
* track-simple `object`
  * artists `array`: The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
    * items [artist-simple](#artist-simple)
  * available_markets `array`: A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code. 
    * items `string`
  * disc_number `integer`: The disc number (usually 1 unless the album consists of more than one disc).
  * duration_ms `integer`: The track length in milliseconds.
  * explicit `boolean`: Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown).
  * external_urls `object`: Known external URLs for this track.
  * href `string`: A link to the Web API endpoint providing full details of the track.
  * id `string`: The Spotify ID for the track.
  * is_playable `boolean`: Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false.
  * linked_from `object`: Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track.
    * external_urls `object`: Known external URLs for this track.
    * href `string`: A link to the Web API endpoint providing full details of the track.
    * id `string`: The Spotify ID for the track.
    * type `string`: The object type: 'track'.
    * uri `string`: The Spotify URI for the track.
  * name `string`: The name of the track.
  * preview_url `string`: A URL to a 30 second preview (MP3 format) of the track.
  * track_number `integer`: The number of the track. If an album has several discs, the track number is the number on the specified disc.
  * type `string`: The object type: 'track'.
  * uri `string`: The Spotify URI for the track.

### track-simple-page
* track-simple-page `object`
  * href `string`: A link to the Web API endpoint returning the full result of the request.
  * items `array`: The requested data.
    * items [track-simple](#track-simple)
  * limit `integer`: The maximum number of items in the response (as set in the query or by default).
  * next `string`: URL to the next page of items. (null if none)
  * offset `integer`: The offset of the items returned (as set in the query or by default).
  * previous `string`: URL to the previous page of items. (null if none)
  * total `integer`: The total number of items available to return.

### user-followed
* user-followed `object`
  * artists `object`: Present if the type of followe items is 'artist'.
    * cursor `object`: The cursors used to find the next set of items.
      * after `string`: The cursor to use as key to find the next page of items.
    * href `string`: A link to the Web API endpoint returning the full result of the request.
    * items `array`: The requested data.
      * items [artist](#artist)
    * limit `integer`: The maximum number of items in the response (as set in the query or by default).
    * next `string`: URL to the next page of items. (null if none)
    * total `integer`: The total number of items available to return.

### user-profile
* user-profile `object`
  * displayName `string`: The name displayed on the user's profile.
  * external_urls `object`: Known external URLs for this user.
  * followers [followers](#followers)
  * href `string`: A link to the Web API endpoint for this user.
  * id `string`: The Spotify ID for this user.
  * type `string`: The object type: 'user'
  * uri `string`: The Spotify URI for the user.


