# @datafire/spotify


## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: albums.get
[Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "A comma-separated list of IDs"
    },
    "market": {
      "type": "string",
      "description": "The market (an ISO 3166-1 alpha-2 country code)"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "albums": {
      "items": {
        "$ref": "#/definitions/album"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: albums.id.get
[Get an Album](https://developer.spotify.com/web-api/get-album/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The Spotify ID for the album"
    },
    "market": {
      "type": "string",
      "description": "The market (an ISO 3166-1 alpha-2 country code)"
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
  "$ref": "#/definitions/album"
}
```
## Operation: albums.id.tracks.get
[Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The Spotify ID for the album"
    },
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first item to return"
    },
    "market": {
      "type": "string",
      "description": "The market (an ISO 3166-1 alpha-2 country code)"
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
  "$ref": "#/definitions/track-simple-page"
}
```
## Operation: artists.get
[Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "A comma-separated list of IDs"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "artists": {
      "items": {
        "$ref": "#/definitions/artist"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: artists.id.get
[Get an Artist](https://developer.spotify.com/web-api/get-artist/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The Spotify ID for the artist"
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
  "$ref": "#/definitions/artist"
}
```
## Operation: artists.id.albums.get
[Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The Spotify ID for the artist"
    },
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first item to return"
    },
    "album_type": {
      "type": "string",
      "description": "Filter by album types"
    },
    "market": {
      "type": "string",
      "description": "The market (an ISO 3166-1 alpha-2 country code)"
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
  "$ref": "#/definitions/album-simple-page"
}
```
## Operation: artists.id.related_artists.get
[Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The Spotify ID for the artist"
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
  "properties": {
    "artists": {
      "items": {
        "$ref": "#/definitions/artist"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: artists.id.top_tracks.get
[Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The Spotify ID for the artist"
    },
    "country": {
      "type": "string",
      "description": "The country (an ISO 3166-1 alpha-2 country code)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "country"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "tracks": {
      "items": {
        "$ref": "#/definitions/track"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: browse.categories.get
[Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first item to return"
    },
    "country": {
      "type": "string",
      "description": "The country (an ISO 3166-1 alpha-2 country code)"
    },
    "locale": {
      "type": "string",
      "description": "The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning \"Spanish (Mexico)\".\n"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/category-page"
}
```
## Operation: browse.categories.category_id.get
[Get a Single Browse Category](https://developer.spotify.com/web-api/get-category/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "category_id": {
      "type": "string",
      "description": "The Spotify ID of the category you wish to fetch."
    },
    "country": {
      "type": "string",
      "description": "The country (an ISO 3166-1 alpha-2 country code)"
    },
    "locale": {
      "type": "string",
      "description": "The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning \"Spanish (Mexico)\".\n"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false,
  "required": [
    "category_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/category"
}
```
## Operation: browse.categories.category_id.playlists.get
[Get a Category's playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "category_id": {
      "type": "string",
      "description": "The Spotify ID of the category you wish to fetch."
    },
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first item to return"
    },
    "country": {
      "type": "string",
      "description": "The country (an ISO 3166-1 alpha-2 country code)"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false,
  "required": [
    "category_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "playlists": {
      "$ref": "#/definitions/playlist-simple-page"
    }
  },
  "type": "object"
}
```
## Operation: browse.featured_playlists.get
[Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/)


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first item to return"
    },
    "country": {
      "type": "string",
      "description": "The country (an ISO 3166-1 alpha-2 country code)"
    },
    "locale": {
      "type": "string",
      "description": "The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning \"Spanish (Mexico)\".\n"
    },
    "timestamp": {
      "type": "string",
      "description": "A timestamp in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss) with the user's local time to get results tailored to a specific date and time in the day. If not provided, it defaults to the current UTC time. Example: \"2014-10-23T09:00:00\" for a user whose local time is 9AM.\n"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/featured-playlists"
}
```
## Operation: browse.new_releases.get
[Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first item to return"
    },
    "country": {
      "type": "string",
      "description": "The country (an ISO 3166-1 alpha-2 country code)"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/album-simple-page"
}
```
## Operation: me.get
[Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/)


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/current-user-profile"
}
```
## Operation: me.following.delete
[Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The type to unfollow.",
      "enum": [
        "artist",
        "user"
      ]
    },
    "ids": {
      "type": "string",
      "description": "A comma-separated list of the artists or users ids"
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "ids"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.following.get
[Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The ID type, currently only artist is supported.",
      "enum": [
        "artist"
      ]
    },
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "after": {
      "type": "string",
      "description": "The last artist ID retrieved from the previous request."
    }
  },
  "additionalProperties": false,
  "required": [
    "type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user-followed"
}
```
## Operation: me.following.put
[Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The type to follow.",
      "enum": [
        "artist",
        "user"
      ]
    },
    "ids": {
      "type": "string",
      "description": "A comma-separated list of the artists or users ids"
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "ids"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.following.contains.get
[Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The type to follow.",
      "enum": [
        "artist",
        "user"
      ]
    },
    "ids": {
      "type": "string",
      "description": "A comma-separated string of the artists or users ids."
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "description": "True if the user follows the artist/user, false otherwise",
    "type": "boolean"
  },
  "type": "array"
}
```
## Operation: me.tracks.delete
[Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "A comma-separated list of IDs"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.tracks.get
[Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first item to return"
    },
    "market": {
      "type": "string",
      "description": "The market (an ISO 3166-1 alpha-2 country code)"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/saved-track-page"
}
```
## Operation: me.tracks.put
[Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "A comma-separated list of IDs"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.tracks.contains.get
[Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "A comma-separated list of IDs"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "description": "True if the track is in user's Your Music library, false otherwise",
    "type": "boolean"
  },
  "type": "array"
}
```
## Operation: search.get
[Search for an Item](https://developer.spotify.com/web-api/search-item/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first item to return"
    },
    "q": {
      "type": "string",
      "description": "The search query's keywords (and optional field filters). The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus q=roadhouse&20blues will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: q=roadhouse&20blues will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. Searches can be made more specific by specifying an album, artist or track field filter. For example q=album:gold%20artist:abba&type=album will search for albums with the text 'gold' in the album name and the text 'abba' in an artist name. Other possible field filters, depending on object types being searched, include year, genre, upc, and isrc. For example, q=damian%20genre:reggae-pop&type=artist. The asterisk (*) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description."
    },
    "type": {
      "type": "string",
      "description": "A comma-separated list of item types to search across. Search results will include hits from all the specified item types; for example q=name:abacab&type=album,track will return both albums and tracks with \"abacab\" in their name."
    },
    "market": {
      "type": "string",
      "description": "The market (an ISO 3166-1 alpha-2 country code).  If given, only items with content playable in that market will be returned."
    }
  },
  "additionalProperties": false,
  "required": [
    "q",
    "type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/search"
}
```
## Operation: tracks.get
[Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ids": {
      "type": "string",
      "description": "A comma-separated list of IDs"
    },
    "market": {
      "type": "string",
      "description": "The market (an ISO 3166-1 alpha-2 country code)"
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "tracks": {
      "items": {
        "$ref": "#/definitions/track"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: tracks.id.get
[Get a Track](https://developer.spotify.com/web-api/get-track/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "market": {
      "type": "string",
      "description": "The market (an ISO 3166-1 alpha-2 country code)"
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
  "$ref": "#/definitions/track"
}
```
## Operation: users.user_id.get
[Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user-profile"
}
```
## Operation: users.user_id.playlists.get
[Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first item to return"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/playlist-simple-page"
}
```
## Operation: users.user_id.playlists.post
[Create a Playlist](https://developer.spotify.com/web-api/create-playlist/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    },
    "body": {
      "properties": {
        "name": {
          "type": "string"
        },
        "public": {
          "type": "boolean"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/playlist"
}
```
## Operation: users.user_id.playlists.playlist_id.get
[Get a Playlist](https://developer.spotify.com/web-api/get-playlist/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "playlist_id": {
      "type": "string",
      "description": "The Spotify playlist ID."
    },
    "fields": {
      "type": "string",
      "description": "A comma-separated list of fields to filter query"
    },
    "market": {
      "type": "string",
      "description": "The market (an ISO 3166-1 alpha-2 country code)"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/playlist"
}
```
## Operation: users.user_id.playlists.playlist_id.put
[Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "playlist_id": {
      "type": "string",
      "description": "The Spotify playlist ID."
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    },
    "body": {
      "properties": {
        "name": {
          "type": "string"
        },
        "public": {
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "playlist_id",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.playlists.playlist_id.followers.delete
[Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "playlist_id": {
      "type": "string",
      "description": "The Spotify playlist ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.playlists.playlist_id.followers.put
[Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "playlist_id": {
      "type": "string",
      "description": "The Spotify playlist ID."
    },
    "body": {
      "properties": {
        "public": {
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "playlist_id",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.playlists.playlist_id.followers.contains.get
[Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "playlist_id": {
      "type": "string",
      "description": "The Spotify playlist ID."
    },
    "ids": {
      "type": "string",
      "description": "A comma-separated list of users ids"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "playlist_id",
    "ids"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "description": "True if the user follows the playlist, false otherwise",
    "type": "boolean"
  },
  "type": "array"
}
```
## Operation: users.user_id.playlists.playlist_id.tracks.delete
[Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "playlist_id": {
      "type": "string",
      "description": "The Spotify playlist ID."
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    },
    "body": {
      "properties": {
        "tracks": {
          "items": {},
          "type": "array"
        }
      },
      "required": [
        "tracks"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "playlist_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/playlist-snapshot"
}
```
## Operation: users.user_id.playlists.playlist_id.tracks.get
[Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "playlist_id": {
      "type": "string",
      "description": "The Spotify playlist ID."
    },
    "limit": {
      "type": "integer",
      "description": "The maximum number of items to return",
      "maximum": 50,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first item to return"
    },
    "fields": {
      "type": "string",
      "description": "A comma-separated list of fields to filter query"
    },
    "market": {
      "type": "string",
      "description": "The market (an ISO 3166-1 alpha-2 country code)"
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/playlist-track-page"
}
```
## Operation: users.user_id.playlists.playlist_id.tracks.post
[Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "playlist_id": {
      "type": "string",
      "description": "The Spotify playlist ID."
    },
    "position": {
      "type": "integer",
      "description": "The position to insert the tracks, a zero-based index"
    },
    "uris": {
      "type": "string",
      "description": "A comma-separated list of Spotify track URIs to add. A maximum of 100 tracks can be added in one request."
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "playlist_id",
    "uris"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/playlist-snapshot"
}
```
## Operation: users.user_id.playlists.playlist_id.tracks.put
[Reorder or replace a Playlist's Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user's Spotify user ID."
    },
    "playlist_id": {
      "type": "string",
      "description": "The Spotify playlist ID."
    },
    "Accept": {
      "type": "string",
      "description": "It is used to set specified media type."
    },
    "body": {
      "properties": {
        "uris": {
          "items": {},
          "type": "array"
        }
      },
      "required": [
        "uris"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "playlist_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/playlist-snapshot"
}
```
