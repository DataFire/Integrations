# @datafire/instagram

Client library for Instagram

## Installation and Usage
```bash
npm install --save datafire @datafire/instagram
```

```js
let datafire = require('datafire');
let instagram = require('@datafire/instagram').actions;

let account = {
  api_key: "",
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    instagram: account,
  }
})

instagram.users.self.media.liked.get({}, context).then(data => {
  console.log(data);
})
```

## Description
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


## Actions
### geographies.geo_id.media.recent.get
Get recent media from a geography subscription that you created.

**Note:** You can only access Geographies that were explicitly created by your OAuth client. Check the
Geography Subscriptions section of the [real-time updates page](https://instagram.com/developer/realtime/).
When you create a subscription to some geography that you define, you will be returned a unique `geo-id` that
can be used in this query. To backfill photos from the location covered by this geography, use the
[media search endpoint](https://instagram.com/developer/endpoints/media/).

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015



```js
instagram.geographies.geo_id.media.recent.get({
  "geo-id": ""
}, context)
```

#### Parameters
* geo-id (string) **required** - The geography ID.
* count (integer) - Max number of media to return.
* min_id (string) - Return media before this `min_id`.

### locations.search.get
Search for a location by geographic coordinate.


```js
instagram.locations.search.get({}, context)
```

#### Parameters
* distance (integer) - Default is 1000m (distance=1000), max distance is 5000.
* facebook_places_id (string) - Returns a location mapped off of a Facebook places id. If used, a Foursquare id and `lat`, `lng` are not required.
* foursquare_id (string) - Returns a location mapped off of a foursquare v1 api location id. If used, you are not required to use
* lat (number) - Latitude of the center search coordinate. If used, `lng` is required.
* lng (number) - Longitude of the center search coordinate. If used, `lat` is required.
* foursquare_v2_id (string) - Returns a location mapped off of a foursquare v2 api location id. If used, you are not required to use

### locations.location_id.get
Get information about a location.


```js
instagram.locations.location_id.get({
  "location-id": ""
}, context)
```

#### Parameters
* location-id (string) **required** - The location ID.

### locations.location_id.media.recent.get
Get a list of recent media objects from a given location.


```js
instagram.locations.location_id.media.recent.get({
  "location-id": ""
}, context)
```

#### Parameters
* location-id (string) **required** - The location ID.
* min_timestamp (integer) - Return media after this UNIX timestamp.
* max_timestamp (integer) - Return media before this UNIX timestamp.
* min_id (string) - Return media before this `min_id`.
* max_id (string) - Return media after this `max_id`.

### media.popular.get
Get a list of what media is most popular at the moment. Can return mix of `image` and `video` types.

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015



```js
instagram.media.popular.get(null, context)
```


### media.search.get
Search for media in a given area. The default time span is set to 5 days. The time span must not exceed 7 days.
Defaults time stamps cover the last 5 days. Can return mix of `image` and `video` types.



```js
instagram.media.search.get({
  "lat": 0,
  "lng": 0
}, context)
```

#### Parameters
* lat (number) **required** - Latitude of the center search coordinate. If used, `lng` is required.
* lng (number) **required** - Longitude of the center search coordinate. If used, `lat` is required.
* min_timestamp (integer) - A unix timestamp. All media returned will be taken later than this timestamp.
* max_timestamp (integer) - A unix timestamp. All media returned will be taken earlier than this timestamp.
* distance (integer) - Default is 1km (distance=1000), max distance is 5km.

### media.shortcode.shortcode.get
This endpoint returns the same response as `GET /media/{media-id}`.

A media object's shortcode can be found in its shortlink URL. An example shortlink is
`http://instagram.com/p/D/`, its corresponding shortcode is `D`.



```js
instagram.media.shortcode.shortcode.get({
  "shortcode": ""
}, context)
```

#### Parameters
* shortcode (string) **required** - The short code of the media resource.

### media.media_id.get
Get information about a media object. The returned type key will allow you to differentiate between image and
video media.

**Note:** if you authenticate with an OAuth Token, you will receive the user_has_liked key which quickly tells
you whether the current user has liked this media item.



```js
instagram.media.media_id.get({
  "media-id": ""
}, context)
```

#### Parameters
* media-id (string) **required** - The ID of the media resource.

### media.media_id.comments.get
Get a list of recent comments on a media object.


```js
instagram.media.media_id.comments.get({
  "media-id": ""
}, context)
```

#### Parameters
* media-id (string) **required** - The ID of the media resource.

### media.media_id.comments.post
Create a comment on a media object with the following rules:

  * The total length of the comment cannot exceed 300 characters.
  * The comment cannot contain more than 4 hashtags.
  * The comment cannot contain more than 1 URL.
  * The comment cannot consist of all capital letters.



```js
instagram.media.media_id.comments.post({
  "media-id": "",
  "text": ""
}, context)
```

#### Parameters
* media-id (string) **required** - The ID of the media resource.
* text (string) **required** - Text to post as a comment on the media object as specified in `media-id`.

### media.media_id.comments.comment_id.delete
Remove a comment either on the authenticated user's media object or authored by the authenticated user.



```js
instagram.media.media_id.comments.comment_id.delete({
  "media-id": "",
  "comment-id": ""
}, context)
```

#### Parameters
* media-id (string) **required** - The ID of the media resource.
* comment-id (string) **required** - The ID of the comment entry.

### media.media_id.likes.delete
Remove a like on this media by the currently authenticated user.


```js
instagram.media.media_id.likes.delete({
  "media-id": ""
}, context)
```

#### Parameters
* media-id (string) **required** - The ID of the media resource.

### media.media_id.likes.get
Get a list of users who have liked this media.


```js
instagram.media.media_id.likes.get({
  "media-id": ""
}, context)
```

#### Parameters
* media-id (string) **required** - The ID of the media resource.

### media.media_id.likes.post
Set a like on this media by the currently authenticated user.


```js
instagram.media.media_id.likes.post({
  "media-id": ""
}, context)
```

#### Parameters
* media-id (string) **required** - The ID of the media resource.

### tags.search.get
Search for tags by name.


```js
instagram.tags.search.get({
  "q": ""
}, context)
```

#### Parameters
* q (string) **required** - A valid tag name without a leading \#. (eg. snowy, nofilter)

### tags.tag_name.get
Get information about a tag object.


```js
instagram.tags.tag_name.get({
  "tag-name": ""
}, context)
```

#### Parameters
* tag-name (string) **required** - The tag name.

### tags.tag_name.media.recent.get
Get a list of recently tagged media. Use the `max_tag_id` and `min_tag_id` parameters in the pagination
response to paginate through these objects.



```js
instagram.tags.tag_name.media.recent.get({
  "tag-name": ""
}, context)
```

#### Parameters
* tag-name (string) **required** - The tag name.
* count (integer) - Count of tagged media to return.
* min_tag_id (string) - Return media before this `min_tag_id`.
* max_tag_id (string) - Return media after this `max_tag_id`.

### users.search.get
Search for a user by name.


```js
instagram.users.search.get({
  "q": ""
}, context)
```

#### Parameters
* q (string) **required** - A query string.
* count (integer) - Number of users to return.

### users.self.feed.get
See the authenticated user's feed.

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015



```js
instagram.users.self.feed.get({}, context)
```

#### Parameters
* count (integer) - Count of media to return.
* min_id (string) - Return media later than this `min_id`.
* max_id (string) - Return media earlier than this `max_id`.

### users.self.media.liked.get
See the list of media liked by the authenticated user. Private media is returned as long as the authenticated
user has permission to view that media. Liked media lists are only available for the currently authenticated
user.



```js
instagram.users.self.media.liked.get({}, context)
```

#### Parameters
* count (integer) - Count of media to return.
* max_like_id (string) - Return media liked before this id.

### users.self.requested_by.get
List the users who have requested this user's permission to follow.


```js
instagram.users.self.requested_by.get(null, context)
```


### users.user_id.get
Get basic information about a user. To get information about the owner of the access token, you can use
**self** instead of the `user-id`.

Security scope `public_content` is required to read information about other users.



```js
instagram.users.user_id.get({
  "user-id": ""
}, context)
```

#### Parameters
* user-id (string) **required** - The ID of a user to get information about, or **self** to retrieve information about authenticated user.

### users.user_id.followed_by.get
Get the list of users this user is followed by. To get users followed by the owner of the access token, you
can use **self** instead of the `user-id`.



```js
instagram.users.user_id.followed_by.get({
  "user-id": ""
}, context)
```

#### Parameters
* user-id (string) **required** - The ID of a user, or **self** to retrieve information about authenticated user.

### users.user_id.follows.get
Get the list of users this user follows. To get follows of the owner of the access token, you can use **self**
instead of the `user-id`.



```js
instagram.users.user_id.follows.get({
  "user-id": ""
}, context)
```

#### Parameters
* user-id (string) **required** - The ID of a user, or **self** to retrieve information about authenticated user.

### users.user_id.media.recent.get
Get the most recent media published by a user. To get the most recent media published by the owner of the
access token, you can use **self** instead of the `user-id`.

Security scope `public_content` is required to read information about other users.



```js
instagram.users.user_id.media.recent.get({
  "user-id": ""
}, context)
```

#### Parameters
* user-id (string) **required** - The ID of a user to get recent media of, or **self** to retrieve media of authenticated user.
* count (integer) - Count of media to return.
* max_timestamp (integer) - Return media before this UNIX timestamp.
* min_timestamp (integer) - Return media after this UNIX timestamp.
* min_id (string) - Return media later than this `min_id`.
* max_id (string) - Return media earlier than this `max_id`.

### users.user_id.relationship.get
Get information about a relationship to another user.


```js
instagram.users.user_id.relationship.get({
  "user-id": ""
}, context)
```

#### Parameters
* user-id (string) **required** - The ID of a user to get information about.

### users.user_id.relationship.post
Modify the relationship between the current user and the target user.


```js
instagram.users.user_id.relationship.post({
  "user-id": "",
  "action": ""
}, context)
```

#### Parameters
* user-id (string) **required** - The ID of the target user.
* action (string) **required** - Type of action to apply for relationship with the user.

