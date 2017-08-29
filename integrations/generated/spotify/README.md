# @datafire/spotify

Client library for Spotify

## Installation and Usage
```bash
npm install --save datafire @datafire/spotify
```

```js
let datafire = require('datafire');
let spotify = require('@datafire/spotify').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

spotify.me.tracks.get({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
spotify.oauthRefresh(null, context)
```


### albums.get
[Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)



```js
spotify.albums.get({
  "ids": ""
}, context)
```

#### Parameters
* ids (string) **required** - A comma-separated list of IDs
* market (string) - The market (an ISO 3166-1 alpha-2 country code)

### albums.id.get
[Get an Album](https://developer.spotify.com/web-api/get-album/)



```js
spotify.albums.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The Spotify ID for the album
* market (string) - The market (an ISO 3166-1 alpha-2 country code)

### albums.id.tracks.get
[Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)



```js
spotify.albums.id.tracks.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The Spotify ID for the album
* limit (integer) - The maximum number of items to return
* offset (integer) - The index of the first item to return
* market (string) - The market (an ISO 3166-1 alpha-2 country code)

### artists.get
[Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)



```js
spotify.artists.get({
  "ids": ""
}, context)
```

#### Parameters
* ids (string) **required** - A comma-separated list of IDs

### artists.id.get
[Get an Artist](https://developer.spotify.com/web-api/get-artist/)



```js
spotify.artists.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The Spotify ID for the artist

### artists.id.albums.get
[Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/)



```js
spotify.artists.id.albums.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The Spotify ID for the artist
* limit (integer) - The maximum number of items to return
* offset (integer) - The index of the first item to return
* album_type (string) - Filter by album types
* market (string) - The market (an ISO 3166-1 alpha-2 country code)

### artists.id.related_artists.get
[Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/)



```js
spotify.artists.id.related_artists.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The Spotify ID for the artist

### artists.id.top_tracks.get
[Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)



```js
spotify.artists.id.top_tracks.get({
  "id": "",
  "country": ""
}, context)
```

#### Parameters
* id (string) **required** - The Spotify ID for the artist
* country (string) **required** - The country (an ISO 3166-1 alpha-2 country code)

### browse.categories.get
[Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)



```js
spotify.browse.categories.get({}, context)
```

#### Parameters
* limit (integer) - The maximum number of items to return
* offset (integer) - The index of the first item to return
* country (string) - The country (an ISO 3166-1 alpha-2 country code)
* locale (string) - The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
* Accept (string) - It is used to set specified media type.

### browse.categories.category_id.get
[Get a Single Browse Category](https://developer.spotify.com/web-api/get-category/)



```js
spotify.browse.categories.category_id.get({
  "category_id": ""
}, context)
```

#### Parameters
* category_id (string) **required** - The Spotify ID of the category you wish to fetch.
* country (string) - The country (an ISO 3166-1 alpha-2 country code)
* locale (string) - The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
* Accept (string) - It is used to set specified media type.

### browse.categories.category_id.playlists.get
[Get a Category's playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)



```js
spotify.browse.categories.category_id.playlists.get({
  "category_id": ""
}, context)
```

#### Parameters
* category_id (string) **required** - The Spotify ID of the category you wish to fetch.
* limit (integer) - The maximum number of items to return
* offset (integer) - The index of the first item to return
* country (string) - The country (an ISO 3166-1 alpha-2 country code)
* Accept (string) - It is used to set specified media type.

### browse.featured_playlists.get
[Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/)



```js
spotify.browse.featured_playlists.get({}, context)
```

#### Parameters
* limit (integer) - The maximum number of items to return
* offset (integer) - The index of the first item to return
* country (string) - The country (an ISO 3166-1 alpha-2 country code)
* locale (string) - The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)".
* timestamp (string) - A timestamp in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss) with the user's local time to get results tailored to a specific date and time in the day. If not provided, it defaults to the current UTC time. Example: "2014-10-23T09:00:00" for a user whose local time is 9AM.
* Accept (string) - It is used to set specified media type.

### browse.new_releases.get
[Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)



```js
spotify.browse.new_releases.get({}, context)
```

#### Parameters
* limit (integer) - The maximum number of items to return
* offset (integer) - The index of the first item to return
* country (string) - The country (an ISO 3166-1 alpha-2 country code)
* Accept (string) - It is used to set specified media type.

### me.get
[Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/)



```js
spotify.me.get(null, context)
```


### me.following.delete
[Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)



```js
spotify.me.following.delete({
  "type": "",
  "ids": ""
}, context)
```

#### Parameters
* type (string) **required** - The type to unfollow.
* ids (string) **required** - A comma-separated list of the artists or users ids

### me.following.get
[Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)



```js
spotify.me.following.get({
  "type": ""
}, context)
```

#### Parameters
* type (string) **required** - The ID type, currently only artist is supported.
* limit (integer) - The maximum number of items to return
* after (string) - The last artist ID retrieved from the previous request.

### me.following.put
[Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)



```js
spotify.me.following.put({
  "type": "",
  "ids": ""
}, context)
```

#### Parameters
* type (string) **required** - The type to follow.
* ids (string) **required** - A comma-separated list of the artists or users ids

### me.following.contains.get
[Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)



```js
spotify.me.following.contains.get({
  "type": "",
  "ids": ""
}, context)
```

#### Parameters
* type (string) **required** - The type to follow.
* ids (string) **required** - A comma-separated string of the artists or users ids.

### me.tracks.delete
[Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)



```js
spotify.me.tracks.delete({
  "ids": ""
}, context)
```

#### Parameters
* ids (string) **required** - A comma-separated list of IDs
* Accept (string) - It is used to set specified media type.

### me.tracks.get
[Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)



```js
spotify.me.tracks.get({}, context)
```

#### Parameters
* limit (integer) - The maximum number of items to return
* offset (integer) - The index of the first item to return
* market (string) - The market (an ISO 3166-1 alpha-2 country code)
* Accept (string) - It is used to set specified media type.

### me.tracks.put
[Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)



```js
spotify.me.tracks.put({
  "ids": ""
}, context)
```

#### Parameters
* ids (string) **required** - A comma-separated list of IDs
* Accept (string) - It is used to set specified media type.

### me.tracks.contains.get
[Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)



```js
spotify.me.tracks.contains.get({
  "ids": ""
}, context)
```

#### Parameters
* ids (string) **required** - A comma-separated list of IDs

### search.get
[Search for an Item](https://developer.spotify.com/web-api/search-item/)



```js
spotify.search.get({
  "q": "",
  "type": ""
}, context)
```

#### Parameters
* limit (integer) - The maximum number of items to return
* offset (integer) - The index of the first item to return
* q (string) **required** - The search query's keywords (and optional field filters). The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus q=roadhouse&20blues will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: q=roadhouse&20blues will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. Searches can be made more specific by specifying an album, artist or track field filter. For example q=album:gold%20artist:abba&type=album will search for albums with the text 'gold' in the album name and the text 'abba' in an artist name. Other possible field filters, depending on object types being searched, include year, genre, upc, and isrc. For example, q=damian%20genre:reggae-pop&type=artist. The asterisk (*) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.
* type (string) **required** - A comma-separated list of item types to search across. Search results will include hits from all the specified item types; for example q=name:abacab&type=album,track will return both albums and tracks with "abacab" in their name.
* market (string) - The market (an ISO 3166-1 alpha-2 country code).  If given, only items with content playable in that market will be returned.

### tracks.get
[Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/)



```js
spotify.tracks.get({
  "ids": ""
}, context)
```

#### Parameters
* ids (string) **required** - A comma-separated list of IDs
* market (string) - The market (an ISO 3166-1 alpha-2 country code)

### tracks.id.get
[Get a Track](https://developer.spotify.com/web-api/get-track/)



```js
spotify.tracks.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* market (string) - The market (an ISO 3166-1 alpha-2 country code)

### users.user_id.get
[Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/)



```js
spotify.users.user_id.get({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.

### users.user_id.playlists.get
[Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/)



```js
spotify.users.user_id.playlists.get({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* limit (integer) - The maximum number of items to return
* offset (integer) - The index of the first item to return
* Accept (string) - It is used to set specified media type.

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

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* Accept (string) - It is used to set specified media type.
* body (object) **required**

### users.user_id.playlists.playlist_id.get
[Get a Playlist](https://developer.spotify.com/web-api/get-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.get({
  "user_id": "",
  "playlist_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* playlist_id (string) **required** - The Spotify playlist ID.
* fields (string) - A comma-separated list of fields to filter query
* market (string) - The market (an ISO 3166-1 alpha-2 country code)
* Accept (string) - It is used to set specified media type.

### users.user_id.playlists.playlist_id.put
[Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/)



```js
spotify.users.user_id.playlists.playlist_id.put({
  "user_id": "",
  "playlist_id": "",
  "body": {}
}, context)
```

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* playlist_id (string) **required** - The Spotify playlist ID.
* Accept (string) - It is used to set specified media type.
* body (object) **required**

### users.user_id.playlists.playlist_id.followers.delete
[Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.followers.delete({
  "user_id": "",
  "playlist_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* playlist_id (string) **required** - The Spotify playlist ID.

### users.user_id.playlists.playlist_id.followers.put
[Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.followers.put({
  "user_id": "",
  "playlist_id": "",
  "body": {}
}, context)
```

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* playlist_id (string) **required** - The Spotify playlist ID.
* body (object) **required**

### users.user_id.playlists.playlist_id.followers.contains.get
[Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.followers.contains.get({
  "user_id": "",
  "playlist_id": "",
  "ids": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* playlist_id (string) **required** - The Spotify playlist ID.
* ids (string) **required** - A comma-separated list of users ids

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

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* playlist_id (string) **required** - The Spotify playlist ID.
* Accept (string) - It is used to set specified media type.
* body (object) **required**

### users.user_id.playlists.playlist_id.tracks.get
[Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)



```js
spotify.users.user_id.playlists.playlist_id.tracks.get({
  "user_id": "",
  "playlist_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* playlist_id (string) **required** - The Spotify playlist ID.
* limit (integer) - The maximum number of items to return
* offset (integer) - The index of the first item to return
* fields (string) - A comma-separated list of fields to filter query
* market (string) - The market (an ISO 3166-1 alpha-2 country code)
* Accept (string) - It is used to set specified media type.

### users.user_id.playlists.playlist_id.tracks.post
[Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)



```js
spotify.users.user_id.playlists.playlist_id.tracks.post({
  "user_id": "",
  "playlist_id": "",
  "uris": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* playlist_id (string) **required** - The Spotify playlist ID.
* position (integer) - The position to insert the tracks, a zero-based index
* uris (string) **required** - A comma-separated list of Spotify track URIs to add. A maximum of 100 tracks can be added in one request.
* Accept (string) - It is used to set specified media type.

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

#### Parameters
* user_id (string) **required** - The user's Spotify user ID.
* playlist_id (string) **required** - The Spotify playlist ID.
* Accept (string) - It is used to set specified media type.
* body (object) **required**

