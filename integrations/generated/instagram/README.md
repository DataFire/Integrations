# @datafire/instagram

Client library for Instagram

## Installation and Usage
```bash
npm install --save @datafire/instagram
```
```js
let instagram = require('@datafire/instagram').create({
  api_key: "",
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

instagram.users.self.media.liked.get({}).then(data => {
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

#### Input
* input `object`
  * geo-id **required** `string`: The geography ID.
  * count `integer`: Max number of media to return.
  * min_id `string`: Return media before this `min_id`.

#### Output
* output [MediaListResponse](#medialistresponse)

### locations.search.get
Search for a location by geographic coordinate.


```js
instagram.locations.search.get({}, context)
```

#### Input
* input `object`
  * distance `integer`: Default is 1000m (distance=1000), max distance is 5000.
  * facebook_places_id `string`: Returns a location mapped off of a Facebook places id. If used, a Foursquare id and `lat`, `lng` are not required.
  * foursquare_id `string`: Returns a location mapped off of a foursquare v1 api location id. If used, you are not required to use
  * lat `number`: Latitude of the center search coordinate. If used, `lng` is required.
  * lng `number`: Longitude of the center search coordinate. If used, `lat` is required.
  * foursquare_v2_id `string`: Returns a location mapped off of a foursquare v2 api location id. If used, you are not required to use

#### Output
* output [LocationSearchResponse](#locationsearchresponse)

### locations.location_id.get
Get information about a location.


```js
instagram.locations.location_id.get({
  "location-id": ""
}, context)
```

#### Input
* input `object`
  * location-id **required** `string`: The location ID.

#### Output
* output [LocationInfoResponse](#locationinforesponse)

### locations.location_id.media.recent.get
Get a list of recent media objects from a given location.


```js
instagram.locations.location_id.media.recent.get({
  "location-id": ""
}, context)
```

#### Input
* input `object`
  * location-id **required** `string`: The location ID.
  * min_timestamp `integer`: Return media after this UNIX timestamp.
  * max_timestamp `integer`: Return media before this UNIX timestamp.
  * min_id `string`: Return media before this `min_id`.
  * max_id `string`: Return media after this `max_id`.

#### Output
* output [MediaListResponse](#medialistresponse)

### media.popular.get
Get a list of what media is most popular at the moment. Can return mix of `image` and `video` types.

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015



```js
instagram.media.popular.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [MediaSearchResponse](#mediasearchresponse)

### media.search.get
Search for media in a given area. The default time span is set to 5 days. The time span must not exceed 7 days.
Defaults time stamps cover the last 5 days. Can return mix of `image` and `video` types.



```js
instagram.media.search.get({
  "lat": 0,
  "lng": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude of the center search coordinate. If used, `lng` is required.
  * lng **required** `number`: Longitude of the center search coordinate. If used, `lat` is required.
  * min_timestamp `integer`: A unix timestamp. All media returned will be taken later than this timestamp.
  * max_timestamp `integer`: A unix timestamp. All media returned will be taken earlier than this timestamp.
  * distance `integer`: Default is 1km (distance=1000), max distance is 5km.

#### Output
* output [MediaSearchResponse](#mediasearchresponse)

### media.shortcode.shortcode.get
This endpoint returns the same response as `GET /media/{media-id}`.

A media object's shortcode can be found in its shortlink URL. An example shortlink is
`http://instagram.com/p/D/`, its corresponding shortcode is `D`.



```js
instagram.media.shortcode.shortcode.get({
  "shortcode": ""
}, context)
```

#### Input
* input `object`
  * shortcode **required** `string`: The short code of the media resource.

#### Output
* output [MediaEntryResponse](#mediaentryresponse)

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

#### Input
* input `object`
  * media-id **required** `string`: The ID of the media resource.

#### Output
* output [MediaEntryResponse](#mediaentryresponse)

### media.media_id.comments.get
Get a list of recent comments on a media object.


```js
instagram.media.media_id.comments.get({
  "media-id": ""
}, context)
```

#### Input
* input `object`
  * media-id **required** `string`: The ID of the media resource.

#### Output
* output [CommentsResponse](#commentsresponse)

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

#### Input
* input `object`
  * media-id **required** `string`: The ID of the media resource.
  * text **required** `string`: Text to post as a comment on the media object as specified in `media-id`.

#### Output
* output [StatusResponse](#statusresponse)

### media.media_id.comments.comment_id.delete
Remove a comment either on the authenticated user's media object or authored by the authenticated user.



```js
instagram.media.media_id.comments.comment_id.delete({
  "media-id": "",
  "comment-id": ""
}, context)
```

#### Input
* input `object`
  * media-id **required** `string`: The ID of the media resource.
  * comment-id **required** `string`: The ID of the comment entry.

#### Output
* output [StatusResponse](#statusresponse)

### media.media_id.likes.delete
Remove a like on this media by the currently authenticated user.


```js
instagram.media.media_id.likes.delete({
  "media-id": ""
}, context)
```

#### Input
* input `object`
  * media-id **required** `string`: The ID of the media resource.

#### Output
* output [StatusResponse](#statusresponse)

### media.media_id.likes.get
Get a list of users who have liked this media.


```js
instagram.media.media_id.likes.get({
  "media-id": ""
}, context)
```

#### Input
* input `object`
  * media-id **required** `string`: The ID of the media resource.

#### Output
* output [UsersInfoResponse](#usersinforesponse)

### media.media_id.likes.post
Set a like on this media by the currently authenticated user.


```js
instagram.media.media_id.likes.post({
  "media-id": ""
}, context)
```

#### Input
* input `object`
  * media-id **required** `string`: The ID of the media resource.

#### Output
* output [StatusResponse](#statusresponse)

### tags.search.get
Search for tags by name.


```js
instagram.tags.search.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: A valid tag name without a leading \#. (eg. snowy, nofilter)

#### Output
* output [TagSearchResponse](#tagsearchresponse)

### tags.tag_name.get
Get information about a tag object.


```js
instagram.tags.tag_name.get({
  "tag-name": ""
}, context)
```

#### Input
* input `object`
  * tag-name **required** `string`: The tag name.

#### Output
* output [TagInfoResponse](#taginforesponse)

### tags.tag_name.media.recent.get
Get a list of recently tagged media. Use the `max_tag_id` and `min_tag_id` parameters in the pagination
response to paginate through these objects.



```js
instagram.tags.tag_name.media.recent.get({
  "tag-name": ""
}, context)
```

#### Input
* input `object`
  * tag-name **required** `string`: The tag name.
  * count `integer`: Count of tagged media to return.
  * min_tag_id `string`: Return media before this `min_tag_id`.
  * max_tag_id `string`: Return media after this `max_tag_id`.

#### Output
* output [TagMediaListResponse](#tagmedialistresponse)

### users.search.get
Search for a user by name.


```js
instagram.users.search.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: A query string.
  * count `integer`: Number of users to return.

#### Output
* output [UsersInfoResponse](#usersinforesponse)

### users.self.feed.get
See the authenticated user's feed.

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015



```js
instagram.users.self.feed.get({}, context)
```

#### Input
* input `object`
  * count `integer`: Count of media to return.
  * min_id `string`: Return media later than this `min_id`.
  * max_id `string`: Return media earlier than this `max_id`.

#### Output
* output [MediaListResponse](#medialistresponse)

### users.self.media.liked.get
See the list of media liked by the authenticated user. Private media is returned as long as the authenticated
user has permission to view that media. Liked media lists are only available for the currently authenticated
user.



```js
instagram.users.self.media.liked.get({}, context)
```

#### Input
* input `object`
  * count `integer`: Count of media to return.
  * max_like_id `string`: Return media liked before this id.

#### Output
* output [MediaListResponse](#medialistresponse)

### users.self.requested_by.get
List the users who have requested this user's permission to follow.


```js
instagram.users.self.requested_by.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UsersInfoResponse](#usersinforesponse)

### users.user_id.get
Get basic information about a user. To get information about the owner of the access token, you can use
**self** instead of the `user-id`.

Security scope `public_content` is required to read information about other users.



```js
instagram.users.user_id.get({
  "user-id": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`: The ID of a user to get information about, or **self** to retrieve information about authenticated user.

#### Output
* output [UserResponse](#userresponse)

### users.user_id.followed_by.get
Get the list of users this user is followed by. To get users followed by the owner of the access token, you
can use **self** instead of the `user-id`.



```js
instagram.users.user_id.followed_by.get({
  "user-id": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`: The ID of a user, or **self** to retrieve information about authenticated user.

#### Output
* output [UsersPagingResponse](#userspagingresponse)

### users.user_id.follows.get
Get the list of users this user follows. To get follows of the owner of the access token, you can use **self**
instead of the `user-id`.



```js
instagram.users.user_id.follows.get({
  "user-id": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`: The ID of a user, or **self** to retrieve information about authenticated user.

#### Output
* output [UsersPagingResponse](#userspagingresponse)

### users.user_id.media.recent.get
Get the most recent media published by a user. To get the most recent media published by the owner of the
access token, you can use **self** instead of the `user-id`.

Security scope `public_content` is required to read information about other users.



```js
instagram.users.user_id.media.recent.get({
  "user-id": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`: The ID of a user to get recent media of, or **self** to retrieve media of authenticated user.
  * count `integer`: Count of media to return.
  * max_timestamp `integer`: Return media before this UNIX timestamp.
  * min_timestamp `integer`: Return media after this UNIX timestamp.
  * min_id `string`: Return media later than this `min_id`.
  * max_id `string`: Return media earlier than this `max_id`.

#### Output
* output [MediaListResponse](#medialistresponse)

### users.user_id.relationship.get
Get information about a relationship to another user.


```js
instagram.users.user_id.relationship.get({
  "user-id": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`: The ID of a user to get information about.

#### Output
* output [RelationshipResponse](#relationshipresponse)

### users.user_id.relationship.post
Modify the relationship between the current user and the target user.


```js
instagram.users.user_id.relationship.post({
  "user-id": "",
  "action": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`: The ID of the target user.
  * action **required** `string` (values: follow, unfollow, block, unblock, approve, ignore): Type of action to apply for relationship with the user.

#### Output
* output [RelationshipPostResponse](#relationshippostresponse)



## Definitions

### CaptionData
* CaptionData `object`
  * created_time `string`: Caption creation UNIX timestamp
  * from [UserShortInfo](#usershortinfo)
  * id `string`: ID of this caption
  * text `string`: Caption text

### CommentEntry
* CommentEntry `object`
  * created_time `string`: Comment creation UNIX timestamp
  * from [UserShortInfo](#usershortinfo)
  * id `string`: ID of this comment
  * text `string`: Text of the comment

### CommentsCollection
* CommentsCollection `object`
  * count `integer`: Nember of comments available, data does not necessary contain all comments
  * data `array`: Collection of comment entries; **warning:** deprecated for Apps [created on or after Nov 17, 2015](http://instagram.com/developer/changelog/)
    * items [CommentEntry](#commententry)

### CommentsResponse
* CommentsResponse `object`
  * data `array`: Collection of comments
    * items [CommentEntry](#commententry)
  * meta [MetaData](#metadata)

### CursorPaginationInfo
* CursorPaginationInfo `object`
  * next_cursor `string`: The cursor ID of the next page
  * next_url `string`: URL to retrieve next page of entries

### IdPaginationInfo
* IdPaginationInfo `object`
  * next_max_id `string`: The max ID of the next page
  * next_url `string`: URL to retrieve next page of entries

### ImageInfo
* ImageInfo `object`
  * height `integer`: Image/video height in pixels
  * url `string`: URL of the image/video resource
  * width `integer`: Image/video width in pixels

### ImagesData
* ImagesData `object`
  * low_resolution [ImageInfo](#imageinfo)
  * standard_resolution [ImageInfo](#imageinfo)
  * thumbnail [ImageInfo](#imageinfo)

### LikesCollection
* LikesCollection `object`
  * count `integer`: Nember of likes available, data does not necessary contain all comments
  * data `array`: Collection of users who liked; **warning:** deprecated for Apps [created on or after Nov 17, 2015](http://instagram.com/developer/changelog/)
    * items [UserShortInfo](#usershortinfo)

### LocationInfo
* LocationInfo `object`
  * id `string`: ID of this location (in some responses it has a type of 'integer')
  * latitude `number`: Location latitude
  * longitude `number`: Location longitude
  * name `string`: Location name

### LocationInfoResponse
* LocationInfoResponse `object`
  * data [LocationInfo](#locationinfo)
  * meta [MetaData](#metadata)

### LocationSearchResponse
* LocationSearchResponse `object`
  * data `array`: List of found locations
    * items [LocationInfo](#locationinfo)
  * meta [MetaData](#metadata)

### MediaEntry
* MediaEntry `object`
  * attribution `string`: ??? Unknown ???
  * caption [CaptionData](#captiondata)
  * comments [CommentsCollection](#commentscollection)
  * created_time `string`: Media creation UNIX timestamp
  * filter `string`: Filter of this media entry
  * id `string`: ID of a media entry
  * images [ImagesData](#imagesdata)
  * likes [LikesCollection](#likescollection)
  * link `string`: Fixed URL of this media entry
  * location [LocationInfo](#locationinfo)
  * tags `array`: List of tags assigned to this media
    * items `string`
  * type `string` (values: image, video): Type of this media entry
  * user [UserShortInfo](#usershortinfo)
  * user_has_liked `boolean`: Indicates whether authenticated user has liked this media or not
  * users_in_photo `array`: Users located on this media entry
    * items [UserInPhoto](#userinphoto)
  * videos [VideosData](#videosdata)

### MediaEntryResponse
* MediaEntryResponse `object`
  * data [MediaEntry](#mediaentry)
  * meta [MetaData](#metadata)

### MediaListResponse
* MediaListResponse `object`
  * data `array`: List of media entries
    * items [MediaEntry](#mediaentry)
  * meta [MetaData](#metadata)
  * pagination [IdPaginationInfo](#idpaginationinfo)

### MediaSearchResponse
* MediaSearchResponse `object`
  * data `array`: Found media entries; some end-points do not return likes informtaion
    * items [MediaEntry](#mediaentry)
  * meta [MetaData](#metadata)

### MetaData
* MetaData `object`
  * code `integer`: HTTP result code

### Position
* Position `object`
  * x `number`: X position (horizontal)
  * y `number`: Y position (vertical)

### RelationshipInfo
* RelationshipInfo `object`
  * incoming_status `string` (values: none, followed_by, requested_by): Status of incoming relationship
  * outgoing_status `string` (values: none, follows, requested): Status of outgoing relationship
  * target_user_is_private `boolean`: Indicates whether target user is private or not

### RelationshipPostResponse
* RelationshipPostResponse `object`
  * data [RelationshipStatus](#relationshipstatus)
  * meta [MetaData](#metadata)

### RelationshipResponse
* RelationshipResponse `object`
  * data [RelationshipInfo](#relationshipinfo)
  * meta [MetaData](#metadata)

### RelationshipStatus
* RelationshipStatus `object`
  * outgoing_status `string` (values: none, follows, requested): Status of outgoing relationship

### StatusResponse
* StatusResponse `object`
  * data `string`: No data - 'null'
  * meta [MetaData](#metadata)

### TagInfo
* TagInfo `object`
  * media_count `integer`: Overall number of media entries taged with this name
  * name `string`: Tag name

### TagInfoResponse
* TagInfoResponse `object`
  * data [TagInfo](#taginfo)
  * meta [MetaData](#metadata)

### TagMediaListResponse
* TagMediaListResponse `object`
  * data `array`: List of media entries with this tag
    * items [MediaEntry](#mediaentry)
  * meta [MetaData](#metadata)
  * pagination [TagPaginationInfo](#tagpaginationinfo)

### TagPaginationInfo
* TagPaginationInfo `object`
  * deprecation_warning `string`: The deprication warning, if information is available
  * min_tag_id `string`: The min ID of a tag for the next page
  * next_max_id `string`: Depricated. Use min_tag_id instead
  * next_max_tag_id `string`: The max ID of a tag for the next page
  * next_min_id `string`: Depricated. Use max_tag_id instead
  * next_url `string`: URL to retrieve next page of entries

### TagSearchResponse
* TagSearchResponse `object`
  * data `array`: List of found tags with brief statistics
    * items [TagInfo](#taginfo)
  * meta [MetaData](#metadata)

### UserCounts
* UserCounts `object`
  * followed_by `integer`: Number of followers of this user
  * follows `integer`: Number of users followed by this user
  * media `integer`: Number of user media

### UserInPhoto
* UserInPhoto `object`
  * position [Position](#position)
  * user [UserShortInfo](#usershortinfo)

### UserInfo
* UserInfo `object`
  * bio `string`: User biography
  * counts [UserCounts](#usercounts)
  * full_name `string`: User full name
  * id `string`: User ID
  * profile_picture `string`: URL to user profile picture
  * username `string`: User name, nickname
  * website `string`: URL to user web-site

### UserResponse
* UserResponse `object`
  * data [UserInfo](#userinfo)
  * meta [MetaData](#metadata)

### UserShortInfo
* UserShortInfo `object`
  * full_name `string`: User full name
  * id `string`: User ID
  * profile_picture `string`: URL to user profile picture
  * username `string`: User name, nickname

### UsersInfoResponse
* UsersInfoResponse `object`
  * data `array`: User short information entries
    * items [UserShortInfo](#usershortinfo)
  * meta [MetaData](#metadata)

### UsersPagingResponse
* UsersPagingResponse `object`
  * data `array`: List of user short information entries
    * items [UserShortInfo](#usershortinfo)
  * meta [MetaData](#metadata)
  * pagination [CursorPaginationInfo](#cursorpaginationinfo)

### VideosData
* VideosData `object`
  * low_resolution [ImageInfo](#imageinfo)
  * standard_resolution [ImageInfo](#imageinfo)


