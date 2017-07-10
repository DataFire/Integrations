# @datafire/instagram
Description of Instagram RESTful API.

Current limitations:
  * Instagram service does not support [cross origin headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
  for security reasons, therefore it is not possible to use Swagger UI and make API calls directly from browser.
  * Modification API requests (`POST`, `DELETE`) require additional security [scopes](https://instagram.com/developer/authorization/)
  that are available for Apps [created on or after Nov 17, 2015](http://instagram.com/developer/review/) and
  started in [Sandbox Mode](http://instagram.com/developer/sandbox/).
  * Consider the [Instagram limitations](https://instagram.com/developer/limits/) for API calls that depends on App Mode.

**Warning:** For Apps [created on or after Nov 17, 2015](http://instagram.com/developer/changelog/) API responses
containing media objects no longer return the `data` field in `comments` and `likes` nodes.

Last update: 2015-11-28


## Operation: geographies.geo_id.media.recent.get
Get recent media from a geography subscription that you created.

**Note:** You can only access Geographies that were explicitly created by your OAuth client. Check the
Geography Subscriptions section of the [real-time updates page](https://instagram.com/developer/realtime/).
When you create a subscription to some geography that you define, you will be returned a unique `geo-id` that
can be used in this query. To backfill photos from the location covered by this geography, use the
[media search endpoint](https://instagram.com/developer/endpoints/media/).

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "geo-id": {
      "type": "string",
      "description": "The geography ID."
    },
    "count": {
      "type": "integer",
      "format": "int32",
      "description": "Max number of media to return."
    },
    "min_id": {
      "type": "string",
      "description": "Return media before this `min_id`."
    }
  },
  "additionalProperties": false,
  "required": [
    "geo-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaListResponse"
}
```
## Operation: locations.search.get
Search for a location by geographic coordinate.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "distance": {
      "type": "integer",
      "format": "int32",
      "description": "Default is 1000m (distance=1000), max distance is 5000."
    },
    "facebook_places_id": {
      "type": "string",
      "description": "Returns a location mapped off of a Facebook places id. If used, a Foursquare id and `lat`, `lng` are not required."
    },
    "foursquare_id": {
      "type": "string",
      "description": "Returns a location mapped off of a foursquare v1 api location id. If used, you are not required to use\n`lat` and `lng`. Note that this method is deprecated; you should use the new foursquare IDs with V2 of their API.\n"
    },
    "lat": {
      "type": "number",
      "format": "double",
      "description": "Latitude of the center search coordinate. If used, `lng` is required."
    },
    "lng": {
      "type": "number",
      "format": "double",
      "description": "Longitude of the center search coordinate. If used, `lat` is required."
    },
    "foursquare_v2_id": {
      "type": "string",
      "description": "Returns a location mapped off of a foursquare v2 api location id. If used, you are not required to use\n`lat` and `lng`.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LocationSearchResponse"
}
```
## Operation: locations.location_id.get
Get information about a location.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location-id": {
      "type": "string",
      "description": "The location ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "location-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LocationInfoResponse"
}
```
## Operation: locations.location_id.media.recent.get
Get a list of recent media objects from a given location.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location-id": {
      "type": "string",
      "description": "The location ID."
    },
    "min_timestamp": {
      "type": "integer",
      "format": "int64",
      "description": "Return media after this UNIX timestamp."
    },
    "max_timestamp": {
      "type": "integer",
      "format": "int64",
      "description": "Return media before this UNIX timestamp."
    },
    "min_id": {
      "type": "string",
      "description": "Return media before this `min_id`."
    },
    "max_id": {
      "type": "string",
      "description": "Return media after this `max_id`."
    }
  },
  "additionalProperties": false,
  "required": [
    "location-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaListResponse"
}
```
## Operation: media.popular.get
Get a list of what media is most popular at the moment. Can return mix of `image` and `video` types.

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaSearchResponse"
}
```
## Operation: media.search.get
Search for media in a given area. The default time span is set to 5 days. The time span must not exceed 7 days.
Defaults time stamps cover the last 5 days. Can return mix of `image` and `video` types.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lat": {
      "type": "number",
      "format": "double",
      "description": "Latitude of the center search coordinate. If used, `lng` is required."
    },
    "lng": {
      "type": "number",
      "format": "double",
      "description": "Longitude of the center search coordinate. If used, `lat` is required."
    },
    "min_timestamp": {
      "type": "integer",
      "format": "int64",
      "description": "A unix timestamp. All media returned will be taken later than this timestamp."
    },
    "max_timestamp": {
      "type": "integer",
      "format": "int64",
      "description": "A unix timestamp. All media returned will be taken earlier than this timestamp."
    },
    "distance": {
      "type": "integer",
      "format": "int32",
      "description": "Default is 1km (distance=1000), max distance is 5km."
    }
  },
  "additionalProperties": false,
  "required": [
    "lat",
    "lng"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaSearchResponse"
}
```
## Operation: media.shortcode.shortcode.get
This endpoint returns the same response as `GET /media/{media-id}`.

A media object's shortcode can be found in its shortlink URL. An example shortlink is
`http://instagram.com/p/D/`, its corresponding shortcode is `D`.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shortcode": {
      "type": "string",
      "description": "The short code of the media resource."
    }
  },
  "additionalProperties": false,
  "required": [
    "shortcode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaEntryResponse"
}
```
## Operation: media.media_id.get
Get information about a media object. The returned type key will allow you to differentiate between image and
video media.

**Note:** if you authenticate with an OAuth Token, you will receive the user_has_liked key which quickly tells
you whether the current user has liked this media item.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "media-id": {
      "type": "string",
      "description": "The ID of the media resource."
    }
  },
  "additionalProperties": false,
  "required": [
    "media-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaEntryResponse"
}
```
## Operation: media.media_id.comments.get
Get a list of recent comments on a media object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "media-id": {
      "type": "string",
      "description": "The ID of the media resource."
    }
  },
  "additionalProperties": false,
  "required": [
    "media-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommentsResponse"
}
```
## Operation: media.media_id.comments.post
Create a comment on a media object with the following rules:

  * The total length of the comment cannot exceed 300 characters.
  * The comment cannot contain more than 4 hashtags.
  * The comment cannot contain more than 1 URL.
  * The comment cannot consist of all capital letters.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "media-id": {
      "type": "string",
      "description": "The ID of the media resource."
    },
    "text": {
      "type": "string",
      "description": "Text to post as a comment on the media object as specified in `media-id`."
    }
  },
  "additionalProperties": false,
  "required": [
    "media-id",
    "text"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StatusResponse"
}
```
## Operation: media.media_id.comments.comment_id.delete
Remove a comment either on the authenticated user's media object or authored by the authenticated user.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "media-id": {
      "type": "string",
      "description": "The ID of the media resource."
    },
    "comment-id": {
      "type": "string",
      "description": "The ID of the comment entry."
    }
  },
  "additionalProperties": false,
  "required": [
    "media-id",
    "comment-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StatusResponse"
}
```
## Operation: media.media_id.likes.delete
Remove a like on this media by the currently authenticated user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "media-id": {
      "type": "string",
      "description": "The ID of the media resource."
    }
  },
  "additionalProperties": false,
  "required": [
    "media-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StatusResponse"
}
```
## Operation: media.media_id.likes.get
Get a list of users who have liked this media.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "media-id": {
      "type": "string",
      "description": "The ID of the media resource."
    }
  },
  "additionalProperties": false,
  "required": [
    "media-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsersInfoResponse"
}
```
## Operation: media.media_id.likes.post
Set a like on this media by the currently authenticated user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "media-id": {
      "type": "string",
      "description": "The ID of the media resource."
    }
  },
  "additionalProperties": false,
  "required": [
    "media-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StatusResponse"
}
```
## Operation: tags.search.get
Search for tags by name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "A valid tag name without a leading \\#. (eg. snowy, nofilter)"
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TagSearchResponse"
}
```
## Operation: tags.tag_name.get
Get information about a tag object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag-name": {
      "type": "string",
      "description": "The tag name."
    }
  },
  "additionalProperties": false,
  "required": [
    "tag-name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TagInfoResponse"
}
```
## Operation: tags.tag_name.media.recent.get
Get a list of recently tagged media. Use the `max_tag_id` and `min_tag_id` parameters in the pagination
response to paginate through these objects.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag-name": {
      "type": "string",
      "description": "The tag name."
    },
    "count": {
      "type": "integer",
      "description": "Count of tagged media to return."
    },
    "min_tag_id": {
      "type": "string",
      "description": "Return media before this `min_tag_id`."
    },
    "max_tag_id": {
      "type": "string",
      "description": "Return media after this `max_tag_id`."
    }
  },
  "additionalProperties": false,
  "required": [
    "tag-name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TagMediaListResponse"
}
```
## Operation: users.search.get
Search for a user by name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "A query string."
    },
    "count": {
      "type": "integer",
      "description": "Number of users to return."
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsersInfoResponse"
}
```
## Operation: users.self.feed.get
See the authenticated user's feed.

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "integer",
      "description": "Count of media to return."
    },
    "min_id": {
      "type": "string",
      "description": "Return media later than this `min_id`."
    },
    "max_id": {
      "type": "string",
      "description": "Return media earlier than this `max_id`."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaListResponse"
}
```
## Operation: users.self.media.liked.get
See the list of media liked by the authenticated user. Private media is returned as long as the authenticated
user has permission to view that media. Liked media lists are only available for the currently authenticated
user.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "integer",
      "description": "Count of media to return."
    },
    "max_like_id": {
      "type": "string",
      "description": "Return media liked before this id."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaListResponse"
}
```
## Operation: users.self.requested_by.get
List the users who have requested this user's permission to follow.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsersInfoResponse"
}
```
## Operation: users.user_id.get
Get basic information about a user. To get information about the owner of the access token, you can use
**self** instead of the `user-id`.

Security scope `public_content` is required to read information about other users.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user-id": {
      "type": "string",
      "description": "The ID of a user to get information about, or **self** to retrieve information about authenticated user."
    }
  },
  "additionalProperties": false,
  "required": [
    "user-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserResponse"
}
```
## Operation: users.user_id.followed_by.get
Get the list of users this user is followed by. To get users followed by the owner of the access token, you
can use **self** instead of the `user-id`.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user-id": {
      "type": "string",
      "description": "The ID of a user, or **self** to retrieve information about authenticated user."
    }
  },
  "additionalProperties": false,
  "required": [
    "user-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsersPagingResponse"
}
```
## Operation: users.user_id.follows.get
Get the list of users this user follows. To get follows of the owner of the access token, you can use **self**
instead of the `user-id`.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user-id": {
      "type": "string",
      "description": "The ID of a user, or **self** to retrieve information about authenticated user."
    }
  },
  "additionalProperties": false,
  "required": [
    "user-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsersPagingResponse"
}
```
## Operation: users.user_id.media.recent.get
Get the most recent media published by a user. To get the most recent media published by the owner of the
access token, you can use **self** instead of the `user-id`.

Security scope `public_content` is required to read information about other users.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user-id": {
      "type": "string",
      "description": "The ID of a user to get recent media of, or **self** to retrieve media of authenticated user."
    },
    "count": {
      "type": "integer",
      "description": "Count of media to return."
    },
    "max_timestamp": {
      "type": "integer",
      "format": "int64",
      "description": "Return media before this UNIX timestamp."
    },
    "min_timestamp": {
      "type": "integer",
      "format": "int64",
      "description": "Return media after this UNIX timestamp."
    },
    "min_id": {
      "type": "string",
      "description": "Return media later than this `min_id`."
    },
    "max_id": {
      "type": "string",
      "description": "Return media earlier than this `max_id`."
    }
  },
  "additionalProperties": false,
  "required": [
    "user-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MediaListResponse"
}
```
## Operation: users.user_id.relationship.get
Get information about a relationship to another user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user-id": {
      "type": "string",
      "description": "The ID of a user to get information about."
    }
  },
  "additionalProperties": false,
  "required": [
    "user-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelationshipResponse"
}
```
## Operation: users.user_id.relationship.post
Modify the relationship between the current user and the target user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user-id": {
      "type": "string",
      "description": "The ID of the target user."
    },
    "action": {
      "type": "string",
      "description": "Type of action to apply for relationship with the user.",
      "enum": [
        "follow",
        "unfollow",
        "block",
        "unblock",
        "approve",
        "ignore"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "user-id",
    "action"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelationshipPostResponse"
}
```
